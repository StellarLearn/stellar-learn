import styles from "./CourseCard.module.css";

export interface CourseCardProps {
  title: string;
  description: string;
  rewardAmount: number;
  rewardToken: "XLM" | "USDC";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export function CourseCard({ title, description, rewardAmount, rewardToken, difficulty }: CourseCardProps) {
  const difficultyColor = {
    Beginner: "#22c55e",
    Intermediate: "#f59e0b",
    Advanced: "#ef4444",
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.difficulty} style={{ color: difficultyColor[difficulty] }}>
          {difficulty}
        </span>
        <span className={styles.reward}>
          {rewardAmount} {rewardToken}
        </span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.enrollBtn}>Enroll Now</button>
    </div>
  );
}
