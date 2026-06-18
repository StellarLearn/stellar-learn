import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>StellarLearn Docs</h1>
        <p className={styles.description}>
          Documentation for the StellarLearn learn-to-earn platform.
        </p>
        <div className={styles.links}>
          <a href="/architecture" className={styles.card}>
            <h2>Architecture</h2>
            <p>System overview and component breakdown</p>
          </a>
          <a href="/smart-contracts" className={styles.card}>
            <h2>Smart Contracts</h2>
            <p>Soroban contract design and deployment</p>
          </a>
          <a href="https://github.com/StellarLearn/stellar-learn" className={styles.card}>
            <h2>GitHub</h2>
            <p>Source code and contributing guide</p>
          </a>
        </div>
      </main>
    </div>
  );
}
