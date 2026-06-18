export const STELLAR_NETWORK = process.env.NEXT_PUBLIC_STELLAR_NETWORK || "testnet";

export const SOROBAN_RPC_URL =
  process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || "https://rpc-testnet.stellar.org";

export const SUPPORTED_TOKENS = ["XLM", "USDC"] as const;

export type SupportedToken = (typeof SUPPORTED_TOKENS)[number];
