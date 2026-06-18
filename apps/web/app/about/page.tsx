import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About StellarLearn</h1>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          StellarLearn is on a mission to bridge the gap between blockchain education and
          economic opportunity for developers across the African continent. We believe that
          education should be an investment that pays back immediately — not years down the line.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Team</h2>
        <p>
          We are a small, dedicated team passionate about Stellar ecosystem development and
          African economic empowerment. Our contributors span across multiple time zones and
          bring expertise in blockchain, education, and community building.
        </p>
        <p>
          Interested in joining? Check out our{" "}
          <a href="https://github.com/StellarLearn/stellar-learn" target="_blank" rel="noopener noreferrer">
            GitHub repository
          </a>{" "}
          for open issues and contributing guidelines.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Get Involved</h2>
        <ul>
          <li>Take courses and earn rewards</li>
          <li>Contribute code or documentation</li>
          <li>Propose new course topics</li>
          <li>Sponsor scholarship pools</li>
        </ul>
      </section>
    </div>
  );
}
