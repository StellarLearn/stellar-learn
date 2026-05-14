import Link from "next/link";
import ConnectWallet from "../components/ConnectWallet";

const COURSES = [
  {
    id: "stellar-101",
    title: "Stellar Fundamentals",
    description: "Learn the core concepts of the Stellar network, assets, and operations.",
    reward: "50 XLM",
    level: "Beginner",
    duration: "2 hours",
  },
  {
    id: "soroban-rust",
    title: "Soroban Smart Contracts with Rust",
    description: "Deep dive into writing and deploying secure smart contracts on Soroban.",
    reward: "100 XLM + NFT",
    level: "Intermediate",
    duration: "5 hours",
  },
  {
    id: "defi-stellar",
    title: "Building DeFi on Stellar",
    description: "Learn how to build AMMs, liquidity pools, and lending protocols.",
    reward: "150 XLM + NFT",
    level: "Advanced",
    duration: "8 hours",
  }
];

export default function Dashboard() {
  return (
    <div className="container">
      <div className="bg-glow"></div>
      
      <nav className="animate" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>StellarLearn</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/docs" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
            Docs
          </Link>
          <ConnectWallet />
        </div>
      </nav>

      <main style={{ padding: '4rem 0' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Course Marketplace</h1>
          <p style={{ color: '#94a3b8' }}>Select a course to start learning and earning rewards.</p>
        </header>

        <div className="features">
          {COURSES.map((course, index) => (
            <div key={course.id} className="card animate" style={{ animationDelay: `${0.1 * index}s`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: '#3b82f6', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  background: 'rgba(59, 130, 246, 0.1)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px'
                }}>
                  {course.level}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{course.duration}</span>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{course.title}</h3>
              <p style={{ marginBottom: '2rem', flexGrow: 1 }}>{course.description}</p>
              
              <div style={{ 
                borderTop: '1px solid var(--border)', 
                paddingTop: '1.5rem', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Reward</div>
                  <div style={{ fontWeight: 700, color: '#ec4899' }}>{course.reward}</div>
                </div>
                <Link href={`/dashboard/${course.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  Start Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
