import { STELLAR_NETWORK, SOROBAN_RPC_URL } from "./constants";

const horizonUrls: Record<string, string> = {
  testnet: "https://horizon-testnet.stellar.org",
  mainnet: "https://horizon.stellar.org",
};

export function getHorizonUrl(): string {
  return horizonUrls[STELLAR_NETWORK] || horizonUrls.testnet;
}

export function getServer(): any {
  const { Server } = require("stellar-sdk");
  return new Server(getHorizonUrl());
}
