import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.tagline}>
          Learn Blockchain. Earn Crypto. Build Africa.
        </p>
        <div className={styles.links}>
          <a href="https://github.com/StellarLearn/stellar-learn" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href="https://docs.stellarlearn.xyz" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Docs
          </a>
          <a href="https://x.com/StellarLearn" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Twitter / X
          </a>
        </div>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} StellarLearn. Built on Stellar.
        </p>
      </div>
    </footer>
  );
}
