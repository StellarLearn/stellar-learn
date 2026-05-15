import Link from "next/link";
import ConnectWallet from "../components/ConnectWallet";

const COURSES = [
  {
    id: "stellar-101",
    emoji: "🌟",
    title: "Stellar Fundamentals",
    description:
      "Master the core concepts of the Stellar network — accounts, assets, operations, and the Horizon API.",
    reward: "50 XLM",
    level: "Beginner",
    duration: "2 hours",
    levelColor: "#10b981",
    students: "1.2k",
  },
  {
    id: "soroban-rust",
    emoji: "🦀",
    title: "Soroban Smart Contracts",
    description:
      "Deep dive into writing, testing, and deploying production-grade Soroban contracts in Rust.",
    reward: "100 XLM + NFT",
    level: "Intermediate",
    duration: "5 hours",
    levelColor: "#f59e0b",
    students: "840",
  },
  {
    id: "defi-stellar",
    emoji: "🏦",
    title: "Building DeFi on Stellar",
    description:
      "Learn how to build AMMs, liquidity pools, and lending protocols on the Stellar DEX.",
    reward: "150 XLM + NFT",
    level: "Advanced",
    duration: "8 hours",
    levelColor: "#ef4444",
    students: "390",
  },
];

export default function Dashboard() {
  return (
    <div className="container">
      <div className="bg-glow" />

      {/* ── NAV ───────────────────────────────── */}
      <nav className="animate">
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          StellarLearn
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href="/profile" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500 }}>
            Profile
          </Link>
          <Link href="/docs" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500 }}>
            Docs
          </Link>
          <ConnectWallet />
        </div>
      </nav>

      {/* ── HEADER ────────────────────────────── */}
      <main style={{ padding: "4rem 0" }}>
        <header className="animate" style={{ marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>
            Course Marketplace
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
            Complete courses, pass the quiz, and earn on-chain rewards.
          </p>
        </header>

        {/* ── COURSE GRID ───────────────────── */}
        <div className="features" style={{ padding: 0 }}>
          {COURSES.map((course, index) => (
            <article
              key={course.id}
              className="card animate"
              style={{
                animationDelay: `${0.1 * index}s`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.25rem",
                }}
              >
                <span style={{ fontSize: "2.25rem" }}>{course.emoji}</span>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.35rem" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: course.levelColor,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      background: `${course.levelColor}18`,
                      border: `1px solid ${course.levelColor}40`,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {course.level}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                    ⏱ {course.duration}
                  </span>
                </div>
              </div>

              <h3 style={{ marginBottom: "0.6rem" }}>{course.title}</h3>
              <p style={{ marginBottom: "1.75rem", flexGrow: 1, fontSize: "0.92rem" }}>
                {course.description}
              </p>

              {/* Bottom row */}
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Reward
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      color: "var(--secondary)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {course.reward}
                  </div>
                </div>
                <Link
                  href={`/dashboard/${course.id}`}
                  className="btn btn-primary"
                  style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem" }}
                >
                  Start →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
