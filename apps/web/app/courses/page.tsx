import { CourseCard } from "../../components/CourseCard";

const courses = [
  {
    title: "Intro to Stellar",
    description: "Learn the fundamentals of the Stellar blockchain network, including consensus, accounts, assets, and the decentralized exchange.",
    rewardAmount: 50,
    rewardToken: "XLM" as const,
    difficulty: "Beginner" as const,
  },
  {
    title: "Soroban Smart Contracts 101",
    description: "Build your first Soroban smart contract in Rust. Covers contract structure, storage, events, and testing.",
    rewardAmount: 100,
    rewardToken: "USDC" as const,
    difficulty: "Intermediate" as const,
  },
  {
    title: "DeFi on Stellar",
    description: "Explore decentralized finance primitives on Stellar: automated market makers, lending pools, and token swaps.",
    rewardAmount: 150,
    rewardToken: "XLM" as const,
    difficulty: "Advanced" as const,
  },
];

export default function CoursesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 1.5rem 2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Courses</h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Complete courses, pass quizzes, and earn crypto rewards.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
}
