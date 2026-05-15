import Link from "next/link";
import ConnectWallet from "../../components/ConnectWallet";

const COURSE_DATA: Record<
  string,
  { title: string; emoji: string; reward: string; level: string; duration: string; description: string; modules: string[] }
> = {
  "stellar-101": {
    emoji: "🌟",
    title: "Stellar Fundamentals",
    reward: "50 XLM",
    level: "Beginner",
    duration: "2h 30m",
    description:
      "This course covers the foundational building blocks of the Stellar network. You will learn about accounts, transaction lifecycles, and how the Stellar Consensus Protocol (SCP) ensures safety and liveness. By the end of this module you'll be ready to submit your first operation to Testnet.",
    modules: [
      "Introduction to Stellar",
      "Accounts & Keys",
      "Operations & Transactions",
      "The Horizon API",
      "Final Quiz",
    ],
  },
  "soroban-rust": {
    emoji: "🦀",
    title: "Soroban Smart Contracts",
    reward: "100 XLM + NFT",
    level: "Intermediate",
    duration: "5h 00m",
    description:
      "Learn how to write, test, and deploy production-grade Soroban contracts in Rust. You'll build real contracts, write comprehensive tests using the Soroban SDK, and learn best practices for security and gas optimisation.",
    modules: [
      "Rust Crash Course for Soroban",
      "Your First Soroban Contract",
      "Storage & State",
      "Cross-Contract Calls",
      "Testing & Deployment",
      "Final Quiz",
    ],
  },
  "defi-stellar": {
    emoji: "🏦",
    title: "Building DeFi on Stellar",
    reward: "150 XLM + NFT",
    level: "Advanced",
    duration: "8h 00m",
    description:
      "An advanced course on DeFi primitives on the Stellar network. Build AMMs, write liquidity pool contracts, and integrate with the Stellar DEX — all secured by Soroban smart contracts.",
    modules: [
      "DeFi Primitives",
      "Automated Market Makers",
      "Liquidity Pools",
      "Lending Protocols",
      "Security Audits",
      "Final Project",
    ],
  },
};

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = COURSE_DATA[id] ?? {
    emoji: "📚",
    title: id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    reward: "TBD",
    level: "Unknown",
    duration: "TBD",
    description: "Course details coming soon.",
    modules: ["Module 1"],
  };

  return (
    <div className="container">
      <div className="bg-glow" />

      {/* ── NAV ──────────────────────────────── */}
      <nav className="animate">
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          StellarLearn
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href="/dashboard" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500 }}>
            Marketplace
          </Link>
          <ConnectWallet />
        </div>
      </nav>

      <main style={{ padding: "3.5rem 0" }}>
        {/* ── BREADCRUMB ───────────────────── */}
        <Link
          href="/dashboard"
          style={{
            color: "var(--primary-light)",
            fontSize: "0.85rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            marginBottom: "1.75rem",
          }}
        >
          ← Back to Marketplace
        </Link>

        {/* ── COURSE HEADER ─────────────────── */}
        <header style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{course.emoji}</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", marginBottom: "1rem" }}>
            {course.title}
          </h1>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", display: "flex", gap: "0.4rem", alignItems: "center" }}>
              ⏱ {course.duration}
            </span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", display: "flex", gap: "0.4rem", alignItems: "center" }}>
              ⭐ {course.level}
            </span>
            <span
              style={{
                color: "var(--secondary)",
                fontWeight: 700,
                fontSize: "0.9rem",
                background: "rgba(236,72,153,0.1)",
                border: "1px solid rgba(236,72,153,0.3)",
                borderRadius: "9999px",
                padding: "0.2rem 0.7rem",
              }}
            >
              💎 {course.reward}
            </span>
          </div>
        </header>

        {/* ── TWO COLUMN LAYOUT ─────────────── */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)",
            gap: "2.5rem",
          }}
        >
          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Overview */}
            <div className="card animate" style={{ animationDelay: "0.1s" }}>
              <h3 style={{ marginBottom: "1rem" }}>Course Overview</h3>
              <p style={{ lineHeight: "1.8" }}>{course.description}</p>
            </div>

            {/* Curriculum */}
            <div className="card animate" style={{ animationDelay: "0.2s" }}>
              <h3 style={{ marginBottom: "1.25rem" }}>Curriculum</h3>
              <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {course.modules.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: "0.9rem 0",
                      borderBottom:
                        idx === course.modules.length - 1
                          ? "none"
                          : "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        borderRadius: "50%",
                        background:
                          idx === course.modules.length - 1
                            ? "rgba(59,130,246,0.15)"
                            : "rgba(255,255,255,0.04)",
                        border:
                          idx === course.modules.length - 1
                            ? "1px solid rgba(59,130,246,0.4)"
                            : "1px solid var(--border)",
                        color:
                          idx === course.modules.length - 1
                            ? "var(--primary-light)"
                            : "var(--text-muted)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "0.95rem" }}>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT — sticky CTA */}
          <aside>
            <div
              className="card animate"
              style={{
                animationDelay: "0.15s",
                position: "sticky",
                top: "5.5rem",
                textAlign: "center",
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  color: "var(--secondary)",
                  marginBottom: "0.25rem",
                }}
              >
                {course.reward}
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Completion Reward
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.75rem",
                  lineHeight: "1.6",
                }}
              >
                Complete all modules and pass the final quiz with 80%+ to unlock
                your on-chain reward and NFT certificate.
              </p>
              <Link
                href={`/dashboard/${id}/quiz`}
                className="btn btn-primary"
                style={{ width: "100%", display: "inline-flex" }}
              >
                Take the Quiz →
              </Link>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  marginTop: "1rem",
                }}
              >
                Requires a connected Stellar wallet
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
