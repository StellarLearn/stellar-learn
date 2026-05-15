import Link from "next/link";
import Quiz from "../../../components/Quiz";
import ConnectWallet from "../../../components/ConnectWallet";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="container">
      <div className="bg-glow" />

      <nav className="animate">
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          StellarLearn
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href={`/dashboard/${id}`}
            style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontWeight: 500 }}
          >
            ← Back to Course
          </Link>
          <ConnectWallet />
        </div>
      </nav>

      <main style={{ padding: "5rem 0", maxWidth: "780px", margin: "0 auto" }}>
        <div className="animate" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>Final Quiz</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            Score 2 out of 3 or higher to earn your reward and Proof-of-Learning certificate.
          </p>
        </div>
        <Quiz courseId={id} />
      </main>
    </div>
  );
}
