/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PoolInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "EIP712_DOMAIN_TYPEHASH()": FunctionFragment;
    "WITHDRAW_TYPEHASH()": FunctionFragment;
    "exchangeTokenSecured(address,uint256,bytes)": FunctionFragment;
    "inCaseTokenStuck(address,uint256,address)": FunctionFragment;
    "initialize()": FunctionFragment;
    "isExchanger(address)": FunctionFragment;
    "isValidSignatureServer(address,uint256,bytes)": FunctionFragment;
    "isValidWithdrawSignature(address,address,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "recoverSigner(bytes32,bytes)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setExchanger(address,bool)": FunctionFragment;
    "splitSignature(bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "whitelistedExchanger(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EIP712_DOMAIN_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAW_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeTokenSecured",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "inCaseTokenStuck",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isExchanger", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isValidSignatureServer",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidWithdrawSignature",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverSigner",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setExchanger",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "splitSignature",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whitelistedExchanger",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EIP712_DOMAIN_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAW_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeTokenSecured",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inCaseTokenStuck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isExchanger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignatureServer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidWithdrawSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExchanger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedExchanger",
    data: BytesLike
  ): Result;

  events: {
    "ExchangeTokenSecured(address,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExchangeTokenSecured"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type ExchangeTokenSecuredEvent = TypedEvent<
  [string, BigNumber, string] & {
    token: string;
    tokenAmount: BigNumber;
    userAddress: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class Pool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolInterface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    EIP712_DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    WITHDRAW_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    exchangeTokenSecured(
      token: string,
      amount: BigNumberish,
      serverSig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    inCaseTokenStuck(
      token: string,
      balance: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isExchanger(
      _exchanger: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidSignatureServer(
      token: string,
      _gAmount: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidWithdrawSignature(
      token: string,
      account: string,
      amount: BigNumberish,
      feePercent: BigNumberish,
      nonce: BigNumberish,
      deadline: BigNumberish,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    recoverSigner(
      message: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExchanger(
      _exchanger: string,
      _whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, string, string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelistedExchanger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  EIP712_DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  WITHDRAW_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  exchangeTokenSecured(
    token: string,
    amount: BigNumberish,
    serverSig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  inCaseTokenStuck(
    token: string,
    balance: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isExchanger(_exchanger: string, overrides?: CallOverrides): Promise<boolean>;

  isValidSignatureServer(
    token: string,
    _gAmount: BigNumberish,
    serverSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidWithdrawSignature(
    token: string,
    account: string,
    amount: BigNumberish,
    feePercent: BigNumberish,
    nonce: BigNumberish,
    deadline: BigNumberish,
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  recoverSigner(
    message: BytesLike,
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExchanger(
    _exchanger: string,
    _whitelisted: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  splitSignature(
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<[number, string, string]>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelistedExchanger(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    EIP712_DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    WITHDRAW_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    exchangeTokenSecured(
      token: string,
      amount: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    inCaseTokenStuck(
      token: string,
      balance: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(overrides?: CallOverrides): Promise<void>;

    isExchanger(
      _exchanger: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidSignatureServer(
      token: string,
      _gAmount: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidWithdrawSignature(
      token: string,
      account: string,
      amount: BigNumberish,
      feePercent: BigNumberish,
      nonce: BigNumberish,
      deadline: BigNumberish,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    recoverSigner(
      message: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setExchanger(
      _exchanger: string,
      _whitelisted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, string, string]>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    whitelistedExchanger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ExchangeTokenSecured(address,uint256,address)"(
      token?: null,
      tokenAmount?: null,
      userAddress?: string | null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { token: string; tokenAmount: BigNumber; userAddress: string }
    >;

    ExchangeTokenSecured(
      token?: null,
      tokenAmount?: null,
      userAddress?: string | null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { token: string; tokenAmount: BigNumber; userAddress: string }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    EIP712_DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAW_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeTokenSecured(
      token: string,
      amount: BigNumberish,
      serverSig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    inCaseTokenStuck(
      token: string,
      balance: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isExchanger(
      _exchanger: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidSignatureServer(
      token: string,
      _gAmount: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidWithdrawSignature(
      token: string,
      account: string,
      amount: BigNumberish,
      feePercent: BigNumberish,
      nonce: BigNumberish,
      deadline: BigNumberish,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    recoverSigner(
      message: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExchanger(
      _exchanger: string,
      _whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelistedExchanger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EIP712_DOMAIN_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WITHDRAW_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeTokenSecured(
      token: string,
      amount: BigNumberish,
      serverSig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    inCaseTokenStuck(
      token: string,
      balance: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isExchanger(
      _exchanger: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidSignatureServer(
      token: string,
      _gAmount: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidWithdrawSignature(
      token: string,
      account: string,
      amount: BigNumberish,
      feePercent: BigNumberish,
      nonce: BigNumberish,
      deadline: BigNumberish,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverSigner(
      message: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExchanger(
      _exchanger: string,
      _whitelisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelistedExchanger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}