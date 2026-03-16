import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.blob} />
        <div className={styles.content}>
          <span className={styles.eyebrow}>Get started today</span>
          <h2 className={styles.title}>Ready to build something great?</h2>
          <p className={styles.subtitle}>
            Join over 50,000 teams already using Lumora. Free plan available — no credit card required.
          </p>
          <div className={styles.actions}>
            <a href="#" className={styles.primaryBtn}>Start for free</a>
            <a href="#" className={styles.secondaryBtn}>Talk to sales</a>
          </div>
          <p className={styles.note}>✓ Free 14-day trial &nbsp;&nbsp; ✓ No credit card &nbsp;&nbsp; ✓ Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
