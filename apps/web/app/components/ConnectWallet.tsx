"use client";

import { useState, useEffect } from "react";
import { 
  StellarWalletsKit, 
  Networks, 
} from "@creit.tech/stellar-wallets-kit";
import { defaultModules } from "@creit.tech/stellar-wallets-kit/modules/utils";

export default function ConnectWallet() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    // Check if user was already connected in session
    StellarWalletsKit.init({
      network: Networks.TESTNET,
      modules: defaultModules(),
    });
    
    // Check for existing address
    StellarWalletsKit.getAddress()
      .then(({ address }) => setAddress(address))
      .catch(() => {});
  }, []);

  const connect = async () => {
    try {
      const { address } = await StellarWalletsKit.authModal();
      setAddress(address);
    } catch (error) {
      console.error("Connection failed", error);
    }
  };

  const disconnect = async () => {
    await StellarWalletsKit.disconnect();
    setAddress(null);
  };

  if (address) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ 
          fontSize: '0.8rem', 
          color: '#94a3b8',
          background: 'rgba(255,255,255,0.05)',
          padding: '0.4rem 0.8rem',
          borderRadius: '9999px',
          border: '1px solid var(--border)'
        }}>
          {address.slice(0, 4)}...{address.slice(-4)}
        </span>
        <button onClick={disconnect} className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button onClick={connect} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
      Connect Wallet
    </button>
  );
}
