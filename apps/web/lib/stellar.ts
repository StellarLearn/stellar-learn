import { STELLAR_NETWORK } from "./constants";

const horizonUrls: Record<string, string> = {
  testnet: "https://horizon-testnet.stellar.org",
  mainnet: "https://horizon.stellar.org",
};

export function getHorizonUrl(): string {
  if (STELLAR_NETWORK === "mainnet") {
    return "https://horizon.stellar.org";
  }
  return "https://horizon-testnet.stellar.org";
}

export function getServer() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Server } = require("stellar-sdk");
  return new Server(getHorizonUrl());
}
