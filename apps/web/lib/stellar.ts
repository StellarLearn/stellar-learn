import { STELLAR_NETWORK } from "./constants";

const horizonUrls: Record<string, string> = {
  testnet: "https://horizon-testnet.stellar.org",
  mainnet: "https://horizon.stellar.org",
};

export function getHorizonUrl(): string {
  return horizonUrls[STELLAR_NETWORK] || horizonUrls.testnet;
}

export function getServer() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Server } = require("stellar-sdk");
  return new Server(getHorizonUrl());
}
