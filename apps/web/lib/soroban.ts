import { SOROBAN_RPC_URL } from "./constants";
import { getHorizonUrl } from "./stellar";

export function getSorobanRpcServer(): any {
  const { Server } = require("soroban-rpc");
  return new Server(SOROBAN_RPC_URL);
}

export async function invokeContract(
  contractId: string,
  functionName: string,
  args: any[]
): Promise<any> {
  const { nativeToScVal, scValToNative } = require("soroban-client");
  const rpc = getSorobanRpcServer();

  const scArgs = args.map((arg) => nativeToScVal(arg));
  const result = await rpc.callContract({
    contractId,
    method: functionName,
    args: scArgs,
  });

  return scValToNative(result);
}
