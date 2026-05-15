"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ConnectWallet from "../components/ConnectWallet";
import NFTCard from "../components/NFTCard";

// Mock certifications for demonstration if wallet is not connected or newly created
const MOCK_CERTIFICATIONS = [
  {
    course_name: "Stellar Fundamentals",
    date: "2024-05-10",
    learner_name: "stellar_dev.sol",
    image_url: "",
    description: "Mastered the core concepts of the Stellar network — accounts, assets, operations, and the Horizon API.",
    issuer_name: "StellarLearn Academy"
  }
];

export default function Profile() {
  const [address, setAddress] = useState<string | null>(null);
  const [certs, setCerts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAddress = localStorage.getItem("stellar_address");
    setAddress(storedAddress);

    // Simulate fetching from contract
    const timer = setTimeout(() => {
      if (storedAddress) {
        // In a real app, we'd fetch from contract here
        // For the demo, we show one mock and then anything they might have actually minted (if we had an indexer)
        setCerts(MOCK_CERTIFICATIONS);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="bg-glow" />

      {/* Nav */}
      <nav className="animate">
        <Link href="/" className="logo">StellarLearn</Link>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link href="/dashboard" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Marketplace</Link>
          <ConnectWallet />
        </div>
      </nav>

      <main style={{ padding: "4rem 0" }}>
        {/* Profile Header */}
        <section className="animate" style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
            <div 
              style={{ 
                width: "96px", 
                height: "96px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
                boxShadow: "0 0 20px var(--primary-glow)"
              }}
            >
              🚀
            </div>
            <div>
              <h1 style={{ fontSize: "2.4rem", marginBottom: "0.5rem" }}>Learner Profile</h1>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--primary-light)" }}>
                {address ? `${address.slice(0, 8)}...${address.slice(-8)}` : "Wallet Not Connected"}
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div 
            className="card" 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
              gap: "2rem",
              padding: "1.5rem 2.5rem",
              background: "rgba(255,255,255,0.03)"
            }}
          >
            <div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>Courses Completed</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)" }}>{address ? "1" : "0"}</div>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>XLM Rewards Earned</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--secondary)" }}>{address ? "50 XLM" : "0 XLM"}</div>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>NFT Certificates</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>{address ? "1" : "0"}</div>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>Current Rank</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--success)" }}>Explorer</div>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="animate" style={{ animationDelay: "0.2s" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            Your Certificates
            {address && <span className="badge badge-primary">{certs.length} Earned</span>}
          </h2>

          {!address ? (
            <div className="card" style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>🔒</div>
              <h3 style={{ marginBottom: "1rem" }}>Connect your wallet to view achievements</h3>
              <p style={{ maxWidth: "400px", margin: "0 auto 2rem" }}>
                Your Proof-of-Learning NFTs are stored on the Stellar network and tied to your public address.
              </p>
              <ConnectWallet />
            </div>
          ) : loading ? (
            <div className="features">
              {[1, 2, 3].map(i => <div key={i} className="card shimmer" style={{ height: "350px" }} />)}
            </div>
          ) : certs.length > 0 ? (
            <div className="features">
              {certs.map((cert, idx) => (
                <NFTCard key={idx} metadata={cert} />
              ))}
              {/* Future Drop Slot */}
              <div 
                className="card" 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  borderStyle: "dashed",
                  opacity: 0.6,
                  background: "transparent"
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎓</div>
                <p style={{ textAlign: "center", fontSize: "0.9rem" }}>Complete more courses to earn certificates</p>
                <Link href="/dashboard" className="btn btn-secondary" style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  Browse Courses
                </Link>
              </div>
            </div>
          ) : (
            <div className="card" style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>📚</div>
              <h3 style={{ marginBottom: "1rem" }}>No certificates yet</h3>
              <p style={{ maxWidth: "400px", margin: "0 auto 2rem" }}>
                Start your first course and pass the quiz to mint your first Proof-of-Learning NFT!
              </p>
              <Link href="/dashboard" className="btn btn-primary">Start Learning</Link>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
