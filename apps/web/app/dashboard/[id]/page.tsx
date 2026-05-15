import Link from "next/link";
import ConnectWallet from "../../components/ConnectWallet";

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="container">
      <div className="bg-glow"></div>
      
      <nav className="animate" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>StellarLearn</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/dashboard" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
            Dashboard
          </Link>
          <ConnectWallet />
        </div>
      </nav>

      <main style={{ padding: '4rem 0' }}>
        <header style={{ marginBottom: '3rem' }}>
          <Link href="/dashboard" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
            ← Back to Marketplace
          </Link>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{id.replace('-', ' ').toUpperCase()}</h1>
          <div style={{ display: 'flex', gap: '2rem', color: '#94a3b8', fontSize: '0.9rem' }}>
            <span>🕒 Duration: 2h 30m</span>
            <span>⭐ Level: Beginner</span>
            <span>💎 Reward: 50 XLM</span>
          </div>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Course Overview</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
                This course covers the foundational building blocks of the Stellar network. 
                You will learn about accounts, transaction lifecycles, and how the Stellar Consensus Protocol (SCP) ensures safety and liveness. 
                By the end of this module, you'll be ready to submit your first operation to the Testnet.
              </p>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: '1.5rem' }}>Curriculum</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Introduction to Stellar', 'Accounts & Keys', 'Operations & Transactions', 'The Horizon API', 'Final Quiz'].map((item, idx) => (
                  <li key={idx} style={{ 
                    padding: '1rem 0', 
                    borderBottom: idx === 4 ? 'none' : '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <span style={{ color: '#64748b' }}>0{idx + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside>
            <div className="card" style={{ position: 'sticky', top: '2rem', textAlign: 'center' }}>
              <h4 style={{ marginBottom: '1rem' }}>Ready to Earn?</h4>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '2rem' }}>
                Complete the course and pass the quiz with 80%+ to unlock your rewards.
              </p>
              <Link href={`/dashboard/${id}/quiz`} className="btn btn-primary" style={{ width: '100%', display: 'inline-block' }}>
                Take the Quiz
              </Link>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '1rem' }}>
                Requires connected Stellar wallet
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
