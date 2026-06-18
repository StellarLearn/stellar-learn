import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            StellarLearn
          </h1>
          <p className={styles.tagline}>
            Learn Blockchain. Earn Crypto. Get Certified.
          </p>
          <div className={styles.ctas}>
            <a href="/courses" className={styles.primary}>
              Browse Courses
            </a>
            <button className={styles.secondary}>
              Connect Wallet
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
