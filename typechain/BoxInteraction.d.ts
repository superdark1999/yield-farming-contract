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

interface BoxInteractionInterface extends ethers.utils.Interface {
  functions: {
    "boxContract()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "isExchanger(address)": FunctionFragment;
    "isValidMintBoxSignatureServer(uint256,uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "mintBoxFromShoes(uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
    "openINOBox(uint256)": FunctionFragment;
    "openMintedBox(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "recoverSigner(bytes32,bytes)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setExchanger(address,bool)": FunctionFragment;
    "setNftContract(address,address)": FunctionFragment;
    "setStfAddress(address,address)": FunctionFragment;
    "shoesContract()": FunctionFragment;
    "splitSignature(bytes)": FunctionFragment;
    "stf()": FunctionFragment;
    "stfa()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "whitelistedExchanger(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "boxContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "isExchanger", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isValidMintBoxSignatureServer",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBoxFromShoes",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "openINOBox",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openMintedBox",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
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
    functionFragment: "setNftContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStfAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "shoesContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "splitSignature",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "stf", values?: undefined): string;
  encodeFunctionData(functionFragment: "stfa", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedExchanger",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "boxContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isExchanger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidMintBoxSignatureServer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintBoxFromShoes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openINOBox", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openMintedBox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
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
    functionFragment: "setNftContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStfAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shoesContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stfa", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedExchanger",
    data: BytesLike
  ): Result;

  events: {
    "MintBoxFromShoes(address,uint256,uint256)": EventFragment;
    "OpenINOBox(address,uint256,uint256)": EventFragment;
    "OpenMintedBox(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MintBoxFromShoes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenINOBox"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenMintedBox"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type MintBoxFromShoesEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    user: string;
    boxId: BigNumber;
    shoesId: BigNumber;
  }
>;

export type OpenINOBoxEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    user: string;
    boxId: BigNumber;
    shoesId: BigNumber;
  }
>;

export type OpenMintedBoxEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    user: string;
    boxId: BigNumber;
    shoesId: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class BoxInteraction extends BaseContract {
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

  interface: BoxInteractionInterface;

  functions: {
    boxContract(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _box: string,
      _shoes: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isExchanger(
      _exchanger: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidMintBoxSignatureServer(
      shoesId: BigNumberish,
      amountStf: BigNumberish,
      amountStfa: BigNumberish,
      user: string,
      userMintNonce: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintBoxFromShoes(
      shoesId: BigNumberish,
      amountStf: BigNumberish,
      amountStfa: BigNumberish,
      userMintNonce: BigNumberish,
      serverSig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openINOBox(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openMintedBox(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

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

    setNftContract(
      _box: string,
      _shoes: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStfAddress(
      _stf: string,
      _stfa: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shoesContract(overrides?: CallOverrides): Promise<[string]>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, string, string]>;

    stf(overrides?: CallOverrides): Promise<[string]>;

    stfa(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelistedExchanger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  boxContract(overrides?: CallOverrides): Promise<string>;

  initialize(
    _box: string,
    _shoes: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isExchanger(_exchanger: string, overrides?: CallOverrides): Promise<boolean>;

  isValidMintBoxSignatureServer(
    shoesId: BigNumberish,
    amountStf: BigNumberish,
    amountStfa: BigNumberish,
    user: string,
    userMintNonce: BigNumberish,
    serverSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintBoxFromShoes(
    shoesId: BigNumberish,
    amountStf: BigNumberish,
    amountStfa: BigNumberish,
    userMintNonce: BigNumberish,
    serverSig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openINOBox(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openMintedBox(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

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

  setNftContract(
    _box: string,
    _shoes: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStfAddress(
    _stf: string,
    _stfa: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shoesContract(overrides?: CallOverrides): Promise<string>;

  splitSignature(
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<[number, string, string]>;

  stf(overrides?: CallOverrides): Promise<string>;

  stfa(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelistedExchanger(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    boxContract(overrides?: CallOverrides): Promise<string>;

    initialize(
      _box: string,
      _shoes: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isExchanger(
      _exchanger: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidMintBoxSignatureServer(
      shoesId: BigNumberish,
      amountStf: BigNumberish,
      amountStfa: BigNumberish,
      user: string,
      userMintNonce: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintBoxFromShoes(
      shoesId: BigNumberish,
      amountStf: BigNumberish,
      amountStfa: BigNumberish,
      userMintNonce: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    openINOBox(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    openMintedBox(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

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

    setNftContract(
      _box: string,
      _shoes: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStfAddress(
      _stf: string,
      _stfa: string,
      overrides?: CallOverrides
    ): Promise<void>;

    shoesContract(overrides?: CallOverrides): Promise<string>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, string, string]>;

    stf(overrides?: CallOverrides): Promise<string>;

    stfa(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistedExchanger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "MintBoxFromShoes(address,uint256,uint256)"(
      user?: string | null,
      boxId?: null,
      shoesId?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; boxId: BigNumber; shoesId: BigNumber }
    >;

    MintBoxFromShoes(
      user?: string | null,
      boxId?: null,
      shoesId?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; boxId: BigNumber; shoesId: BigNumber }
    >;

    "OpenINOBox(address,uint256,uint256)"(
      user?: string | null,
      boxId?: null,
      shoesId?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; boxId: BigNumber; shoesId: BigNumber }
    >;

    OpenINOBox(
      user?: string | null,
      boxId?: null,
      shoesId?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; boxId: BigNumber; shoesId: BigNumber }
    >;

    "OpenMintedBox(address,uint256,uint256)"(
      user?: string | null,
      boxId?: null,
      shoesId?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; boxId: BigNumber; shoesId: BigNumber }
    >;

    OpenMintedBox(
      user?: string | null,
      boxId?: null,
      shoesId?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; boxId: BigNumber; shoesId: BigNumber }
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
    boxContract(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _box: string,
      _shoes: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isExchanger(
      _exchanger: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidMintBoxSignatureServer(
      shoesId: BigNumberish,
      amountStf: BigNumberish,
      amountStfa: BigNumberish,
      user: string,
      userMintNonce: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintBoxFromShoes(
      shoesId: BigNumberish,
      amountStf: BigNumberish,
      amountStfa: BigNumberish,
      userMintNonce: BigNumberish,
      serverSig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openINOBox(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openMintedBox(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

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

    setNftContract(
      _box: string,
      _shoes: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStfAddress(
      _stf: string,
      _stfa: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shoesContract(overrides?: CallOverrides): Promise<BigNumber>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stf(overrides?: CallOverrides): Promise<BigNumber>;

    stfa(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelistedExchanger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    boxContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _box: string,
      _shoes: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isExchanger(
      _exchanger: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidMintBoxSignatureServer(
      shoesId: BigNumberish,
      amountStf: BigNumberish,
      amountStfa: BigNumberish,
      user: string,
      userMintNonce: BigNumberish,
      serverSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintBoxFromShoes(
      shoesId: BigNumberish,
      amountStf: BigNumberish,
      amountStfa: BigNumberish,
      userMintNonce: BigNumberish,
      serverSig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openINOBox(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openMintedBox(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setNftContract(
      _box: string,
      _shoes: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStfAddress(
      _stf: string,
      _stfa: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shoesContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    splitSignature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stf(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stfa(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelistedExchanger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
