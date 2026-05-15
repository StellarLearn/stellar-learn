import Link from "next/link";
import Quiz from "../../../components/Quiz";

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <div className="container">
      <div className="bg-glow"></div>
      
      <nav className="animate" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>StellarLearn</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href={`/dashboard/${id}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
            Back to Course
          </Link>
        </div>
      </nav>

      <main style={{ padding: '6rem 0', maxWidth: '800px', margin: '0 auto' }}>
        <Quiz courseId={id} />
      </main>
    </div>
  );
}
