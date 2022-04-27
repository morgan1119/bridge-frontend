/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WithdrawInbox, WithdrawInboxInterface } from "../WithdrawInbox";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: false,
        internalType: "uint64",
        name: "seqNum",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "toChain",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "fromChains",
        type: "uint64[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "ratios",
        type: "uint32[]",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "slippages",
        type: "uint32[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "WithdrawalRequest",
    type: "event",
  },
  {
    inputs: [],
    name: "minimalMaxSlippage",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
        internalType: "uint32",
        name: "_minimalMaxSlippage",
        type: "uint32",
      },
    ],
    name: "setMinimalMaxSlippage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_validityPeriod",
        type: "uint256",
      },
    ],
    name: "setValidityPeriod",
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
    inputs: [],
    name: "validityPeriod",
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
        internalType: "uint64",
        name: "_wdSeq",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_toChain",
        type: "uint64",
      },
      {
        internalType: "uint64[]",
        name: "_fromChains",
        type: "uint64[]",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "uint32[]",
        name: "_ratios",
        type: "uint32[]",
      },
      {
        internalType: "uint32[]",
        name: "_slippages",
        type: "uint32[]",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a33610025565b611c20600155610075565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6109f4806100846000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806387e647ed1161005b57806387e647ed146100df5780638da5cb5b146100f2578063a48552961461010d578063f2fde38b1461012057600080fd5b80631e6c3850146100825780632fd1b0a41461009e57806348234126146100ca575b600080fd5b61008b60015481565b6040519081526020015b60405180910390f35b6000546100b590600160a01b900463ffffffff1681565b60405163ffffffff9091168152602001610095565b6100dd6100d8366004610641565b610133565b005b6100dd6100ed366004610663565b6101df565b6000546040516001600160a01b039091168152602001610095565b6100dd61011b3660046106f7565b61024d565b6100dd61012e3660046107f4565b6104cf565b336101466000546001600160a01b031690565b6001600160a01b0316146101a15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6000805463ffffffff909216600160a01b027fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff909216919091179055565b336101f26000546001600160a01b031690565b6001600160a01b0316146102485760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610198565b600155565b8661029a5760405162461bcd60e51b815260206004820152601860248201527f656d707479207769746864726177616c207265717565737400000000000000006044820152606401610198565b84871480156102a857508287145b80156102b357508087145b6102ff5760405162461bcd60e51b815260206004820152600f60248201527f6c656e677468206d69736d6174636800000000000000000000000000000000006044820152606401610198565b60005b8381101561045f57600085858381811061031e5761031e61080f565b90506020020160208101906103339190610641565b63ffffffff1611801561037657506305f5e1008585838181106103585761035861080f565b905060200201602081019061036d9190610641565b63ffffffff1611155b6103c25760405162461bcd60e51b815260206004820152600d60248201527f696e76616c696420726174696f000000000000000000000000000000000000006044820152606401610198565b600054600160a01b900463ffffffff168383838181106103e4576103e461080f565b90506020020160208101906103f99190610641565b63ffffffff16101561044d5760405162461bcd60e51b815260206004820152601260248201527f736c69707061676520746f6f20736d616c6c00000000000000000000000000006044820152606401610198565b806104578161083b565b915050610302565b506000600154426104709190610856565b90507f7e2b24139224d852dd26bdb9f06f8136f7a1c9227a386d815a4ed8f1b8d7cc958c338d8d8d8d8d8d8d8d8d8d8d6040516104b99d9c9b9a999897969594939291906108ee565b60405180910390a1505050505050505050505050565b336104e26000546001600160a01b031690565b6001600160a01b0316146105385760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610198565b6001600160a01b0381166105b45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610198565b6105bd816105c0565b50565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803563ffffffff8116811461063c57600080fd5b919050565b60006020828403121561065357600080fd5b61065c82610628565b9392505050565b60006020828403121561067557600080fd5b5035919050565b803567ffffffffffffffff8116811461063c57600080fd5b80356001600160a01b038116811461063c57600080fd5b60008083601f8401126106bd57600080fd5b50813567ffffffffffffffff8111156106d557600080fd5b6020830191508360208260051b85010111156106f057600080fd5b9250929050565b600080600080600080600080600080600060e08c8e03121561071857600080fd5b6107218c61067c565b9a5061072f60208d01610694565b995061073d60408d0161067c565b985067ffffffffffffffff8060608e0135111561075957600080fd5b6107698e60608f01358f016106ab565b909950975060808d013581101561077f57600080fd5b61078f8e60808f01358f016106ab565b909750955060a08d01358110156107a557600080fd5b6107b58e60a08f01358f016106ab565b909550935060c08d01358110156107cb57600080fd5b506107dc8d60c08e01358e016106ab565b81935080925050509295989b509295989b9093969950565b60006020828403121561080657600080fd5b61065c82610694565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561084f5761084f610825565b5060010190565b6000821982111561086957610869610825565b500190565b8183526000602080850194508260005b858110156108aa576001600160a01b0361089783610694565b168752958201959082019060010161087e565b509495945050505050565b8183526000602080850194508260005b858110156108aa5763ffffffff6108db83610628565b16875295820195908201906001016108c5565b67ffffffffffffffff8e811682526001600160a01b038e811660208401528d1660408301528b166060820152610120608082018190528101899052600061014082018b825b8c8110156109635767ffffffffffffffff61094d8361067c565b1683526020928301929190910190600101610933565b505082810360a0840152610978818a8c61086e565b905082810360c084015261098d81888a6108b5565b905082810360e08401526109a28186886108b5565b915050826101008301529e9d505050505050505050505050505056fea2646970667358221220ded8ebaffe54534033ada64c41570c1cef9d23f92f960223d6687b31fb94187864736f6c63430008090033";

type WithdrawInboxConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: WithdrawInboxConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class WithdrawInbox__factory extends ContractFactory {
  constructor(...args: WithdrawInboxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "WithdrawInbox";
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<WithdrawInbox> {
    return super.deploy(overrides || {}) as Promise<WithdrawInbox>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WithdrawInbox {
    return super.attach(address) as WithdrawInbox;
  }
  connect(signer: Signer): WithdrawInbox__factory {
    return super.connect(signer) as WithdrawInbox__factory;
  }
  static readonly contractName: "WithdrawInbox";
  public readonly contractName: "WithdrawInbox";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawInboxInterface {
    return new utils.Interface(_abi) as WithdrawInboxInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WithdrawInbox {
    return new Contract(address, _abi, signerOrProvider) as WithdrawInbox;
  }
}