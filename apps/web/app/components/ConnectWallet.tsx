"use client";

import { useState, useEffect } from "react";
import { StellarWalletsKit, Networks } from "@creit.tech/stellar-wallets-kit";

let _kit: InstanceType<typeof StellarWalletsKit> | null = null;
function getKit() {
  if (!_kit) {
    _kit = new (StellarWalletsKit as any)({ network: Networks.TESTNET });
  }
  return _kit;
}

export default function ConnectWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("stellar_address");
    if (saved) setAddress(saved);
  }, []);

  const connect = async () => {
    try {
      const kit = getKit();
      const { address: addr } = await kit.openModal({
        onConnect: (wallet: any) => console.log("Connected:", wallet?.name),
      });
      setAddress(addr);
      localStorage.setItem("stellar_address", addr);
    } catch (err) {
      console.error("Connection failed", err);
    }
  };

  const disconnect = () => {
    setAddress(null);
    localStorage.removeItem("stellar_address");
  };

  if (!mounted) return null;

  if (address) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="wallet-dot" />
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: "0.65rem",
                color: "var(--success)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                lineHeight: 1,
                marginBottom: "0.15rem",
              }}
            >
              Connected
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {address.slice(0, 4)}…{address.slice(-4)}
            </div>
          </div>
        </div>
        <button
          onClick={disconnect}
          className="btn btn-secondary"
          style={{ padding: "0.35rem 0.85rem", fontSize: "0.78rem" }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connect}
      className="btn btn-primary"
      style={{ padding: "0.55rem 1.25rem", fontSize: "0.875rem" }}
    >
      Connect Wallet
    </button>
  );
}
