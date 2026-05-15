import Link from "next/link";
import ConnectWallet from "./components/ConnectWallet";

const FEATURES = [
  {
    icon: "📚",
    title: "Course Marketplace",
    desc: "Curated paths for Soroban, Smart Contracts, and Stellar SDK — built by engineers, for engineers.",
  },
  {
    icon: "⚡",
    title: "Instant Quiz Rewards",
    desc: "Pass the quiz, claim USDC or XLM rewards instantly — powered by smart contracts on Soroban.",
  },
  {
    icon: "🏅",
    title: "Proof-of-Learning NFTs",
    desc: "Verifiable on-chain certificates minted directly to your Stellar wallet — your credentials, forever.",
  },
];

const STATS = [
  { value: "3", label: "Courses Live" },
  { value: "₹0 Gas", label: "Near-Zero Fees" },
  { value: "XLM", label: "Instant Payouts" },
  { value: "100%", label: "On-Chain Verified" },
];

export default function Home() {
  return (
    <div className="container">
      <div className="bg-glow" />

      {/* ── NAV ──────────────────────────────────── */}
      <nav className="animate">
        <div className="logo">StellarLearn</div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href="/dashboard"
            style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500 }}
          >
            Courses
          </Link>
          <Link
            href="/docs"
            style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500 }}
          >
            Docs
          </Link>
          <ConnectWallet />
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────── */}
      <main className="hero">
        <div className="animate" style={{ animationDelay: "0.05s" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              borderRadius: "9999px",
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--primary-light)",
              marginBottom: "2rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            🌍 Built for African Developers
          </span>
        </div>

        <h1 className="animate" style={{ animationDelay: "0.1s" }}>
          Learn. Earn.{" "}
          <br />
          <span>Build Africa&apos;s Web3 Future.</span>
        </h1>

        <p className="animate" style={{ animationDelay: "0.2s" }}>
          The decentralised education platform that pays you to learn blockchain.
          Master Stellar development and earn XLM rewards for every milestone.
        </p>

        <div
          className="animate"
          style={{ animationDelay: "0.3s", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link href="/dashboard" className="btn btn-primary">
            Explore Courses →
          </Link>
          <a
            href="https://github.com/TeeLabsHQ/stellar-learn"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            View on GitHub
          </a>
        </div>

        {/* ── STATS BAR ────────────────────────── */}
        <div
          className="animate"
          style={{
            animationDelay: "0.4s",
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginTop: "5rem",
            flexWrap: "wrap",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── FEATURE CARDS ────────────────────── */}
        <div className="features animate" style={{ animationDelay: "0.5s" }}>
          {FEATURES.map((f) => (
            <div className="card" key={f.title} style={{ textAlign: "left" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p style={{ marginTop: "0.5rem" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "2.5rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          color: "var(--text-muted)",
          fontSize: "0.82rem",
        }}
      >
        <span>© 2026 TeeLabsHQ · Built on Stellar</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://github.com/TeeLabsHQ/stellar-learn" style={{ color: "var(--text-muted)" }}>GitHub</a>
          <Link href="/docs" style={{ color: "var(--text-muted)" }}>Docs</Link>
          <Link href="/dashboard" style={{ color: "var(--text-muted)" }}>Courses</Link>
        </div>
      </footer>
    </div>
  );
}
