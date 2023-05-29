/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "token",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "lockingTime",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "multiplyForTicket",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "endBlock",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardPerBlock",
        type: "uint256[]",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "getPools",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "multiplyForTicket",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastRewardBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accDptPerShare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardPerBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endBlock",
            type: "uint256",
          },
        ],
        internalType: "struct Staking.Pool[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getTickForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "userTickets",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "_rewardToken",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "marketingAddress",
        type: "address",
      },
    ],
    name: "marketing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nextPoolId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolStakedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multiplyForTicket",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accDptPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "round",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "exceptTickets",
        type: "uint256",
      },
    ],
    name: "saveStakedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lockingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multiplyForTicket",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
    ],
    name: "updateDataPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "multiplyForTicket",
        type: "uint256[]",
      },
    ],
    name: "updateMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "updateUserTrackedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userStakedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isGetOldAmount",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userTrackedRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "firstTimeDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawAll",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061212d806100206000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638da5cb5b116100de578063c4d66de811610097578063e2bbb15811610071578063e2bbb1581461043c578063f2fde38b1461044f578063f7c618c114610462578063fc05e2391461047557600080fd5b8063c4d66de8146103f6578063cb89a0fe14610409578063dc2b9c501461041c57600080fd5b80638da5cb5b1461029657806398969e82146102bb578063ac4afa38146102ce578063b013f05c1461036e578063b9d02df414610381578063bbe95837146103d657600080fd5b806351eb05a61161013057806351eb05a6146102225780635cc7f72d146102355780635d1ffca6146102555780636e2c12b014610268578063715018a61461027b5780637bafb0291461028357600080fd5b80630ac329f514610178578063146ca531146101c757806316425cb5146101de57806318e56131146101f3578063376145e5146101fc57806338d074361461020f575b600080fd5b6101ad610186366004611a2b565b609c6020908152600092835260408084209091529082529020805460019091015460ff1682565b604080519283529015156020830152015b60405180910390f35b6101d060995481565b6040519081526020016101be565b6101f16101ec366004611a57565b610488565b005b6101d060985481565b6101f161020a366004611b75565b6104fb565b6101f161021d366004611bb8565b6105c1565b6101f1610230366004611be8565b61088d565b6101d0610243366004611c01565b609e6020526000908152604090205481565b6101f1610263366004611c82565b610924565b6101f1610276366004611ce6565b610a16565b6101f1610ace565b6101d0610291366004611d14565b610b04565b6033546001600160a01b03165b6040516001600160a01b0390911681526020016101be565b6101d06102c9366004611d40565b610b71565b6103296102dc366004611be8565b609a60205260009081526040902080546001820154600283015460038401546004850154600586015460068701546007909701546001600160a01b03909616969495939492939192909188565b604080516001600160a01b0390991689526020890197909752958701949094526060860192909252608085015260a084015260c083015260e0820152610100016101be565b6101f161037c366004611d65565b610c43565b6103bb61038f366004611d40565b609b60209081526000928352604080842090915290825290208054600182015460029092015490919083565b604080519384526020840192909252908201526060016101be565b6103e96103e4366004611e37565b610e8f565b6040516101be9190611e59565b6101f1610404366004611c01565b61104a565b6101d0610417366004611c01565b61112e565b6101d061042a366004611be8565b609d6020526000908152604090205481565b6101f161044a366004611e37565b6111a5565b6101f161045d366004611c01565b6114ad565b6097546102a3906001600160a01b031681565b6101f1610483366004611be8565b611548565b6033546001600160a01b031633146104bb5760405162461bcd60e51b81526004016104b290611eef565b60405180910390fd5b6000948552609a602052604090942080546001600160a01b0319166001600160a01b03949094169390931783556002830191909155600382015560070155565b6033546001600160a01b031633146105255760405162461bcd60e51b81526004016104b290611eef565b60985481511461056e5760405162461bcd60e51b81526020600482015260146024820152731b9bdd081b585d18da081d1bdd185b081c1bdbdb60621b60448201526064016104b2565b60005b81518110156105bd5781818151811061058c5761058c611f24565b6020908102919091018101516000838152609a909252604090912060030155806105b581611f50565b915050610571565b5050565b6000828152609a60209081526040808320609b835281842033855290925290912080546105ed8561088d565b6000826002015464e8d4a510008560050154856000015461060e9190611f6b565b6106189190611f8a565b6106229190611fac565b9050801561064157609754610641906001600160a01b03163383611653565b841561082a57428460020154846001015461065c9190611fc3565b106106995760405162461bcd60e51b815260206004820152600d60248201526c2637b1b5b4b733903a37b5b2b760991b60448201526064016104b2565b82546106df5760405162461bcd60e51b81526020600482015260156024820152746e6f7420746f6b656e20746f20776974686472617760581b60448201526064016104b2565b818460010160008282546106f39190611fac565b9091555050600083556099541580159061072d5750336000908152609c60209081526040808320609954845290915290206001015460ff16155b156107c657600a8460030154836107449190611f6b565b61074e9190611f8a565b336000908152609c60209081526040808320609e835281842054845290915290205461077a9190611fac565b336000818152609c6020908152604080832060998054855290835281842095909555845483528083206001908101805460ff191690911790559354928252609e90529190912055610814565b600a8460030154836107d89190611f6b565b6107e29190611f8a565b336000908152609c6020908152604080832060995484529091528120805490919061080e908490611fac565b90915550505b835461082a906001600160a01b03163384611653565b6005840154835464e8d4a510009161084191611f6b565b61084b9190611f8a565b600284015560405182815233907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649060200160405180910390a2505050505050565b6000818152609a60205260409020600481015443116108aa575050565b6001810154806108bf57504360049091015550565b60006108d084846004015443610b04565b905060008360060154826108e49190611f6b565b9050826108f68264e8d4a51000611f6b565b6109009190611f8a565b846005015461090f9190611fc3565b60058501555050436004909201919091555050565b6033546001600160a01b0316331461094e5760405162461bcd60e51b81526004016104b290611eef565b80518251146109925760405162461bcd60e51b815260206004820152601060248201526f0dcdee840dac2e8c6d040d8cadccee8d60831b60448201526064016104b2565b60005b8251811015610a11578181815181106109b0576109b0611f24565b6020026020010151609c60008584815181106109ce576109ce611f24565b6020908102919091018101516001600160a01b03168252818101929092526040908101600090812081805290925290205580610a0981611f50565b915050610995565b505050565b6033546001600160a01b03163314610a405760405162461bcd60e51b81526004016104b290611eef565b6040516370a0823160e01b81523060048201526105bd9082906001600160a01b038516906370a082319060240160206040518083038186803b158015610a8557600080fd5b505afa158015610a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abd9190611fdb565b6001600160a01b0385169190611653565b6033546001600160a01b03163314610af85760405162461bcd60e51b81526004016104b290611eef565b610b0260006116b6565b565b6000838152609a60205260408120600701548211610b2d57610b268383611fac565b9050610b6a565b6000848152609a60205260409020600701548310610b4d57506000610b6a565b6000848152609a6020526040902060070154610b26908490611fac565b9392505050565b6000828152609a60209081526040808320609b83528184206001600160a01b0386168552909252822060058201546001830154600484015443118015610bb657508015155b15610c0b576000610bcc88866004015443610b04565b90506000856006015482610be09190611f6b565b905082610bf28264e8d4a51000611f6b565b610bfc9190611f8a565b610c069085611fc3565b935050505b6002830154835464e8d4a5100090610c24908590611f6b565b610c2e9190611f8a565b610c389190611fac565b979650505050505050565b6033546001600160a01b03163314610c6d5760405162461bcd60e51b81526004016104b290611eef565b81518551148015610c7f575081518151145b610cc45760405162461bcd60e51b81526020600482015260166024820152751b9bdd081b585d18da08185b5bdd5b9d08199a5b195960521b60448201526064016104b2565b845160005b81811015610e6f57868181518110610ce357610ce3611f24565b6020026020010151609a600083609854610cfd9190611fc3565b815260200190815260200160002060000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550858181518110610d4457610d44611f24565b6020026020010151609a600083609854610d5e9190611fc3565b815260200190815260200160002060020181905550848181518110610d8557610d85611f24565b6020026020010151609a600083609854610d9f9190611fc3565b815260200190815260200160002060030181905550828181518110610dc657610dc6611f24565b6020026020010151609a600083609854610de09190611fc3565b815260200190815260200160002060060181905550838181518110610e0757610e07611f24565b6020026020010151609a600083609854610e219190611fc3565b81526020019081526020016000206007018190555043609a600083609854610e499190611fc3565b815260208101919091526040016000206004015580610e6781611f50565b915050610cc9565b508060986000828254610e829190611fc3565b9091555050505050505050565b6060609854821115610ee35760405162461bcd60e51b815260206004820152601860248201527f6e6f74206d6174636820616d6f756e74206f6620706f6f6c000000000000000060448201526064016104b2565b6000610eef8484611fac565b67ffffffffffffffff811115610f0757610f07611a9f565b604051908082528060200260200182016040528015610f8957816020015b610f7660405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b815260200190600190039081610f255790505b509050835b83811015611042576000818152609a602090815260409182902082516101008101845281546001600160a01b031681526001820154928101929092526002810154928201929092526003820154606082015260048201546080820152600582015460a0820152600682015460c082015260079091015460e0820152826110148784611fac565b8151811061102457611024611f24565b6020026020010181905250808061103a90611f50565b915050610f8e565b509392505050565b600054610100900460ff166110655760005460ff1615611069565b303b155b6110cc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b2565b600054610100900460ff161580156110ee576000805461ffff19166101011790555b6110f6611708565b6110fe611737565b609780546001600160a01b0319166001600160a01b03841617905580156105bd576000805461ff00191690555050565b6000805b609854811015611193576000818152609a6020908152604080832060030154609b83528184206001600160a01b0388168552909252909120546111759190611f6b565b61117f9083611fc3565b91508061118b81611f50565b915050611132565b5061119f600a82611f8a565b92915050565b600081116111eb5760405162461bcd60e51b815260206004820152601360248201527219195c1bdcda5d081e995c9bc8185b5bdd5b9d606a1b60448201526064016104b2565b816098541161122d5760405162461bcd60e51b815260206004820152600e60248201526d1b9bdd08195e1a5cdd081c1bdbdb60921b60448201526064016104b2565b6000828152609b602090815260408083203384528252808320858452609a90925290912061125a8461088d565b600182015461126a574260018301555b428160020154836001015461127f9190611fc3565b101561128c574260018301555b8154156112e9576000826002015464e8d4a51000836005015485600001546112b49190611f6b565b6112be9190611f8a565b6112c89190611fac565b905080156112e7576097546112e7906001600160a01b03163383611653565b505b8054611300906001600160a01b0316333086611765565b828260000160008282546113149190611fc3565b925050819055508281600101600082825461132f9190611fc3565b90915550506005810154825464e8d4a510009161134b91611f6b565b6113559190611f8a565b60028301556099541580159061138b5750336000908152609c60209081526040808320609954845290915290206001015460ff16155b1561142457600a8160030154846113a29190611f6b565b6113ac9190611f8a565b336000908152609c60209081526040808320609e83528184205484529091529020546113d89190611fc3565b336000818152609c6020908152604080832060998054855290835281842095909555845483528083206001908101805460ff191690911790559354928252609e90529190912055611472565b600a8160030154846114369190611f6b565b6114409190611f8a565b336000908152609c6020908152604080832060995484529091528120805490919061146c908490611fc3565b90915550505b60405183815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a250505050565b6033546001600160a01b031633146114d75760405162461bcd60e51b81526004016104b290611eef565b6001600160a01b03811661153c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104b2565b611545816116b6565b50565b6033546001600160a01b031633146115725760405162461bcd60e51b81526004016104b290611eef565b60005b609854611583906001611fc3565b8160ff1610156115ed5760ff81166000908152609a6020526040902060038101546001909101546115b49190611f6b565b6099546000908152609d6020526040812080549091906115d5908490611fc3565b909155508190506115e581611ff4565b915050611575565b506099546000908152609d602052604081208054600a9290611610908490611f8a565b90915550506099546000908152609d602052604081208054839290611636908490611fac565b90915550506099805490600061164b83611f50565b919050555050565b6040516001600160a01b038316602482015260448101829052610a1190849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526117a3565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661172f5760405162461bcd60e51b81526004016104b290612014565b610b02611875565b600054610100900460ff1661175e5760405162461bcd60e51b81526004016104b290612014565b6001606555565b6040516001600160a01b038085166024830152831660448201526064810182905261179d9085906323b872dd60e01b9060840161167f565b50505050565b60006117f8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118a59092919063ffffffff16565b805190915015610a115780806020019051810190611816919061205f565b610a115760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104b2565b600054610100900460ff1661189c5760405162461bcd60e51b81526004016104b290612014565b610b02336116b6565b60606118b484846000856118bc565b949350505050565b60608247101561191d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104b2565b6001600160a01b0385163b6119745760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104b2565b600080866001600160a01b0316858760405161199091906120a8565b60006040518083038185875af1925050503d80600081146119cd576040519150601f19603f3d011682016040523d82523d6000602084013e6119d2565b606091505b5091509150610c38828286606083156119ec575081610b6a565b8251156119fc5782518084602001fd5b8160405162461bcd60e51b81526004016104b291906120c4565b6001600160a01b038116811461154557600080fd5b60008060408385031215611a3e57600080fd5b8235611a4981611a16565b946020939093013593505050565b600080600080600060a08688031215611a6f57600080fd5b853594506020860135611a8181611a16565b94979496505050506040830135926060810135926080909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611ade57611ade611a9f565b604052919050565b600067ffffffffffffffff821115611b0057611b00611a9f565b5060051b60200190565b600082601f830112611b1b57600080fd5b81356020611b30611b2b83611ae6565b611ab5565b82815260059290921b84018101918181019086841115611b4f57600080fd5b8286015b84811015611b6a5780358352918301918301611b53565b509695505050505050565b600060208284031215611b8757600080fd5b813567ffffffffffffffff811115611b9e57600080fd5b6118b484828501611b0a565b801515811461154557600080fd5b60008060408385031215611bcb57600080fd5b823591506020830135611bdd81611baa565b809150509250929050565b600060208284031215611bfa57600080fd5b5035919050565b600060208284031215611c1357600080fd5b8135610b6a81611a16565b600082601f830112611c2f57600080fd5b81356020611c3f611b2b83611ae6565b82815260059290921b84018101918181019086841115611c5e57600080fd5b8286015b84811015611b6a578035611c7581611a16565b8352918301918301611c62565b60008060408385031215611c9557600080fd5b823567ffffffffffffffff80821115611cad57600080fd5b611cb986838701611c1e565b93506020850135915080821115611ccf57600080fd5b50611cdc85828601611b0a565b9150509250929050565b60008060408385031215611cf957600080fd5b8235611d0481611a16565b91506020830135611bdd81611a16565b600080600060608486031215611d2957600080fd5b505081359360208301359350604090920135919050565b60008060408385031215611d5357600080fd5b823591506020830135611bdd81611a16565b600080600080600060a08688031215611d7d57600080fd5b853567ffffffffffffffff80821115611d9557600080fd5b611da189838a01611c1e565b96506020880135915080821115611db757600080fd5b611dc389838a01611b0a565b95506040880135915080821115611dd957600080fd5b611de589838a01611b0a565b94506060880135915080821115611dfb57600080fd5b611e0789838a01611b0a565b93506080880135915080821115611e1d57600080fd5b50611e2a88828901611b0a565b9150509295509295909350565b60008060408385031215611e4a57600080fd5b50508035926020909101359150565b602080825282518282018190526000919060409081850190868401855b82811015611ee257815180516001600160a01b0316855286810151878601528581015186860152606080820151908601526080808201519086015260a0808201519086015260c0808201519086015260e090810151908501526101009093019290850190600101611e76565b5091979650505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611f6457611f64611f3a565b5060010190565b6000816000190483118215151615611f8557611f85611f3a565b500290565b600082611fa757634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611fbe57611fbe611f3a565b500390565b60008219821115611fd657611fd6611f3a565b500190565b600060208284031215611fed57600080fd5b5051919050565b600060ff821660ff81141561200b5761200b611f3a565b60010192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60006020828403121561207157600080fd5b8151610b6a81611baa565b60005b8381101561209757818101518382015260200161207f565b8381111561179d5750506000910152565b600082516120ba81846020870161207c565b9190910192915050565b60208152600082518060208401526120e381604085016020870161207c565b601f01601f1916919091016040019291505056fea2646970667358221220c555455dcd27c6024e304987b4ccbe1a35063f71ac273c97b4a23e401bd9ae1964736f6c63430008090033";

export class Staking__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(overrides || {}) as Promise<Staking>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
