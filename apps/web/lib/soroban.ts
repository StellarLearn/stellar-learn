import { SOROBAN_RPC_URL } from "./constants";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const sorobanRpc = require("soroban-rpc");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const sorobanClient = require("soroban-client");

export function getSorobanRpcServer() {
  return new sorobanRpc.Server(SOROBAN_RPC_URL);
}

export async function invokeContract(
  contractId: string,
  functionName: string,
  args: unknown[]
) {
  const scArgs = args.map((arg) => sorobanClient.nativeToScVal(arg));
  const rpc = getSorobanRpcServer();

  const result = await rpc.callContract({
    contractId,
    method: functionName,
    args: scArgs,
  });

  return sorobanClient.scValToNative(result);
}
