"use client";

import { useState, useCallback } from "react";

interface WalletState {
  isConnected: boolean;
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export function useWallet(): WalletState {
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const connect = useCallback(async () => {
    try {
      // Placeholder: integrate Stellar Wallet Kit here
      // const { walletKit } = await import("@stellar/stellar-wallet-kit");
      // const { address } = await walletKit.connect();
      // setPublicKey(address);
      setPublicKey("GABCD...1234");
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  }, []);

  const disconnect = useCallback(() => {
    setPublicKey(null);
  }, []);

  return {
    isConnected: publicKey !== null,
    publicKey,
    connect,
    disconnect,
  };
}
