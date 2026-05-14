import Link from "next/link";
import ConnectWallet from "./components/ConnectWallet";

export default function Home() {
  return (
    <div className="container">
      <div className="bg-glow"></div>
      
      <nav className="animate" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">StellarLearn</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/docs" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
            Docs
          </Link>
          <ConnectWallet />
        </div>
      </nav>

      <main className="hero">
        <h1 className="animate" style={{ animationDelay: '0.1s' }}>
          Learn. Earn. <br />
          <span style={{ color: '#3b82f6' }}>Stellar Utility.</span>
        </h1>
        <p className="animate" style={{ animationDelay: '0.2s' }}>
          The decentralized education platform for African developers. 
          Master blockchain development and earn XLM rewards for every milestone achieved.
        </p>
        <div className="animate" style={{ animationDelay: '0.3s' }}>
          <Link href="/dashboard" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        <div className="features animate" style={{ animationDelay: '0.4s' }}>
          <div className="card">
            <h3>Course Marketplace</h3>
            <p>Curated paths for Soroban, Smart Contracts, and Stellar SDK development.</p>
          </div>
          <div className="card">
            <h3>Quiz Rewards</h3>
            <p>Instantly claim USDC and XLM rewards upon successful quiz completion.</p>
          </div>
          <div className="card">
            <h3>Proof-of-Learning</h3>
            <p>Verifiable NFT certificates minted directly on the Stellar network.</p>
          </div>
        </div>
      </main>

      <footer className="animate" style={{ textAlign: 'center', padding: '4rem 0', color: '#64748b', fontSize: '0.875rem', animationDelay: '0.5s' }}>
        © 2026 TeeLabsHQ. Built on Stellar.
      </footer>
    </div>
  );
}
