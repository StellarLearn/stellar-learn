"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          StellarLearn
        </Link>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/courses" className={styles.link}>Courses</Link>
          <Link href="/about" className={styles.link}>About</Link>
        </div>
        <button className={styles.walletBtn} onClick={handleConnect}>
          {isConnected ? "0x...abc" : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
}
