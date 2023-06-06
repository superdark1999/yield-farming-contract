// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol";

// Cộng vào phần cũ, không đếm lại 30 ngày
// Tính lại lãi mới

contract LockStaking is
  OwnableUpgradeable,
  ReentrancyGuardUpgradeable,
  PausableUpgradeable
{
  using SafeERC20Upgradeable for IERC20Upgradeable;
  uint256 public constant SECONDS_PER_YEAR = 31104000;

  IERC20Upgradeable public rewardToken;

  struct ApyOnAmount {
    uint256 amount;
    uint256 apy;
  }

  struct User {
    uint256 amount;
    uint256 firstTimeDeposit;
    uint256 expectedInterestEndStaking;
    uint256 lastTimeClaim;
    uint256 debt;
  }

  struct Pool {
    uint256 id;
    address token;
    uint256 endBlock;
    uint256 limit;
    uint256 limitPerUser;
    uint256 amount;
    uint256 timeLocking;
    ApyOnAmount[] apyOnAmountArr;
  }

  uint256 public nextPoolId;

  mapping(uint256 => Pool) public pools;
  mapping(uint256 => mapping(address => User)) public users;

  function initialize(IERC20Upgradeable _rewardToken) public initializer {
    __Context_init_unchained();
    __Ownable_init_unchained();
    __Pausable_init_unchained();
    __ReentrancyGuard_init_unchained();

    nextPoolId = 1;

    rewardToken = _rewardToken;
  }

  function pause() external onlyOwner {
    _pause();
  }

  function unpause() external onlyOwner {
    _unpause();
  }

  function getPools(uint256 from, uint256 to)
    external
    view
    returns (Pool[] memory)
  {
    require(to <= nextPoolId, "not match amount of pool");
    Pool[] memory result = new Pool[](to - from);

    for (uint256 i = from; i < to; i++) {
      result[i - from] = pools[i];
    }

    return result;
  }

  function getApyOnAmountArr(uint256 id)
    external
    view
    returns (ApyOnAmount[] memory)
  {
    require(id <= nextPoolId, "not match amount of pool");

    return pools[id].apyOnAmountArr;
  }

  function getApyOnAmountArrMultiPool(uint256 from, uint256 to)
    external
    view
    returns (ApyOnAmount[][] memory)
  {
    require(to <= nextPoolId, "not match amount of pool");

    ApyOnAmount[][] memory result = new ApyOnAmount[][](to - from);

    for (uint256 i = from; i < to; i++) {
      uint256 length = pools[i].apyOnAmountArr.length;
      ApyOnAmount[] memory temp = new ApyOnAmount[](length);

      result[i - from] = new ApyOnAmount[](length);

      for (uint256 j = 0; j < length; j++) {
        temp[j] = pools[i].apyOnAmountArr[j];
      }

      result[i - from] = temp;
    }

    return result;
  }

  function addPool(Pool[] memory poolsInfo) external onlyOwner {
    pools[nextPoolId].id = nextPoolId;
    uint256 length = poolsInfo.length;
    for (uint256 i = 0; i < length; i++) {
      pools[nextPoolId + i].token = poolsInfo[i].token;
      pools[nextPoolId + i].endBlock = poolsInfo[i].endBlock;
      pools[nextPoolId + i].limit = poolsInfo[i].limit;
      pools[nextPoolId + i].limitPerUser = poolsInfo[i].limitPerUser;
      pools[nextPoolId + i].timeLocking = poolsInfo[i].timeLocking;

      for (uint256 j = 0; j < poolsInfo[i].apyOnAmountArr.length; j++) {
        pools[nextPoolId + i].apyOnAmountArr.push(
          poolsInfo[i].apyOnAmountArr[j]
        );
      }
    }

    nextPoolId += length;
  }

  function updatePool(uint256 id, Pool memory poolInfo) external onlyOwner {
    pools[id].token = poolInfo.token;
    pools[id].endBlock = poolInfo.endBlock;
    pools[id].limit = poolInfo.limit;
    pools[id].limitPerUser = poolInfo.limitPerUser;
    pools[id].timeLocking = poolInfo.timeLocking;

    for (uint256 i = 0; i < poolInfo.apyOnAmountArr.length; i++) {
      pools[id].apyOnAmountArr[i] = poolInfo.apyOnAmountArr[i];
    }
  }

  function getApy(ApyOnAmount[] memory apyOnAmountArr, uint256 userAmount)
    public
    pure
    returns (uint256)
  {
    uint256 length = apyOnAmountArr.length;
    for (uint256 i = length - 1; i >= 0; i--) {
      if (userAmount >= apyOnAmountArr[i].amount) {
        return apyOnAmountArr[i].apy;
      }
    }

    return 0;
  }

  function addApyOnAmount(uint256 poolId, ApyOnAmount memory apyOnAmount)
    external
    onlyOwner
  {
    Pool storage poolInfo = pools[poolId];
    poolInfo.apyOnAmountArr.push(apyOnAmount);
    uint256 currentIndex = poolInfo.apyOnAmountArr.length - 1;
    for (uint256 i = currentIndex - 1; i >= 1; i--) {
      ApyOnAmount memory temp = poolInfo.apyOnAmountArr[i];

      require(temp.amount != apyOnAmount.amount, "invalid amount");
      if (temp.amount > apyOnAmount.amount) {
        poolInfo.apyOnAmountArr[i] = apyOnAmount;
        poolInfo.apyOnAmountArr[currentIndex] = temp;
        currentIndex = i;
      }
    }
  }

  function deposit(uint256 id, uint256 amount)
    external
    nonReentrant
    whenNotPaused
  {
    require(amount > 0, "deposit zero amount");
    Pool storage poolInfo = pools[id];
    require(block.number < poolInfo.endBlock, "pool end");
    require(poolInfo.amount + amount <= poolInfo.limit, "break a limit");
    require(poolInfo.limit > 0, "not exist pool");
    require(
      IERC20Upgradeable(poolInfo.token).balanceOf(msg.sender) >= amount,
      "not enough balance"
    );
    User storage userInfo = users[id][msg.sender];
    uint256 newUserAmount = userInfo.amount + amount;
    require(newUserAmount <= poolInfo.limitPerUser, "break a limit for user");

    // Nếu chưa bao giờ deposit => Cho qua
    // Nếu đã deposit trước đó => Check xem đã rút tiền đợt staking cũ chưa
    if (userInfo.amount > 0) {
      require(
        userInfo.firstTimeDeposit + poolInfo.timeLocking >= block.timestamp,
        "need to claim before continue deposit"
      );
    }

    // Calculate Interest
    // pool.timeLocking : expectedInterestEndStaking
    // => now - lastTimeClaim : expectedInterestEndStaking * (now - lastTimeClaim) / (firstTimeDeposit + pool.timeLocking - lastTimeClaim)
    if (userInfo.firstTimeDeposit > 0) {
      userInfo.debt += (
        ((userInfo.expectedInterestEndStaking *
          (block.timestamp - userInfo.lastTimeClaim)) /
          (userInfo.firstTimeDeposit +
            poolInfo.timeLocking -
            userInfo.lastTimeClaim))
      );
    }
    uint256 apy = getApy(poolInfo.apyOnAmountArr, newUserAmount);

    if (userInfo.firstTimeDeposit == 0) {
      userInfo.firstTimeDeposit = block.timestamp;
    }

    userInfo.expectedInterestEndStaking = (((
      (userInfo.firstTimeDeposit + poolInfo.timeLocking - block.timestamp)
    ) *
      apy *
      newUserAmount) /
      SECONDS_PER_YEAR /
      100);

    userInfo.amount = newUserAmount;
    userInfo.lastTimeClaim = block.timestamp;

    poolInfo.amount += amount;

    IERC20Upgradeable(poolInfo.token).safeTransferFrom(
      msg.sender,
      address(this),
      amount
    );
  }

  function pendingInterest(uint256 id, address userAddress)
    external
    view
    returns (uint256)
  {
    Pool memory poolInfo = pools[id];
    User memory userInfo = users[id][userAddress];

    if (userInfo.amount == 0) return 0;

    if (block.timestamp >= userInfo.firstTimeDeposit + poolInfo.timeLocking) {
      return userInfo.debt + userInfo.expectedInterestEndStaking;
    }

    return
      userInfo.debt +
      ((userInfo.expectedInterestEndStaking *
        (block.timestamp - userInfo.lastTimeClaim)) /
        (userInfo.firstTimeDeposit +
          poolInfo.timeLocking -
          userInfo.lastTimeClaim));
  }

  function _resetStateUser(uint256 poolId, address userAddr) private {
    User storage userInfo = users[poolId][userAddr];

    userInfo.debt = 0;
    userInfo.lastTimeClaim = 0;
    userInfo.firstTimeDeposit = 0;
    userInfo.expectedInterestEndStaking = 0;
    userInfo.amount = 0;
  }

  function claim(uint256 id) external nonReentrant whenNotPaused {
    Pool storage poolInfo = pools[id];
    User storage userInfo = users[id][msg.sender];
    require(userInfo.amount > 0, "not staking, can't withdraw");
    require(
      block.timestamp < userInfo.firstTimeDeposit + poolInfo.timeLocking,
      "need withdraw instead of claim"
    );

    uint256 secondSinceLastClaim = block.timestamp - userInfo.lastTimeClaim;

    uint256 interestSinceLastClaim = (userInfo.expectedInterestEndStaking *
      secondSinceLastClaim) /
      (userInfo.firstTimeDeposit +
        poolInfo.timeLocking -
        userInfo.lastTimeClaim);

    uint256 debt = userInfo.debt + interestSinceLastClaim;

    userInfo.expectedInterestEndStaking =
      (userInfo.expectedInterestEndStaking *
        (userInfo.firstTimeDeposit + poolInfo.timeLocking - block.timestamp)) /
      (userInfo.firstTimeDeposit +
        poolInfo.timeLocking -
        userInfo.lastTimeClaim);

    userInfo.lastTimeClaim = block.timestamp;
    userInfo.debt = 0;

    IERC20Upgradeable(rewardToken).safeTransfer(msg.sender, debt);
  }

  function withdraw(uint256 id) external nonReentrant whenNotPaused {
    // require(!isPaused, "")
    Pool storage poolInfo = pools[id];
    User storage userInfo = users[id][msg.sender];
    require(userInfo.amount > 0, "not have balance to claim");

    require(
      block.timestamp >= userInfo.firstTimeDeposit + poolInfo.timeLocking,
      "not time to withdraw"
    );

    uint256 totalInterest = userInfo.debt + userInfo.expectedInterestEndStaking;

    uint256 userAmount = userInfo.amount;
    poolInfo.amount -= userAmount;

    _resetStateUser(id, msg.sender);

    IERC20Upgradeable(poolInfo.token).safeTransfer(msg.sender, userAmount);
    IERC20Upgradeable(rewardToken).safeTransfer(msg.sender, totalInterest);
  }

  function inCaseTokenStuck(
    IERC20Upgradeable token,
    uint256 balance,
    address to
  ) external onlyOwner {
    if (address(token) == address(0)) {
      payable(to).call{ value: balance }("");
    } else {
      require(token.balanceOf(address(this)) >= balance, "not enough balance");

      token.safeTransfer(to, balance);
    }
  }
}
