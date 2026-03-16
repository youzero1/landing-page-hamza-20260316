import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Now in public beta — free to get started
        </div>
        <h1 className={styles.headline}>
          Build something<br />
          <span className={styles.gradient}>extraordinary</span>
        </h1>
        <p className={styles.subheadline}>
          Lumora gives your team the tools to ship faster, collaborate
          without friction, and scale with total confidence.
          From day one to enterprise.
        </p>
        <div className={styles.actions}>
          <a href="#cta" className={styles.primaryBtn}>Start for free</a>
          <a href="#features" className={styles.secondaryBtn}>
            <span className={styles.playIcon}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor" />
              </svg>
            </span>
            Watch demo
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>50k+</span>
            <span className={styles.statLabel}>Teams</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>99.9%</span>
            <span className={styles.statLabel}>Uptime</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>4.9★</span>
            <span className={styles.statLabel}>Rating</span>
          </div>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardDots}>
              <span style={{background:'#ff5f57'}} />
              <span style={{background:'#ffbd2e'}} />
              <span style={{background:'#28ca41'}} />
            </div>
            <span className={styles.cardTitle}>Dashboard</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.cardMetric}>
              <span className={styles.metricLabel}>Monthly Revenue</span>
              <span className={styles.metricValue}>$124,892</span>
              <span className={styles.metricBadge}>↑ 18.2%</span>
            </div>
            <div className={styles.chart}>
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <div key={i} className={styles.bar} style={{height: `${h}%`}} />
              ))}
            </div>
            <div className={styles.cardGrid}>
              <div className={styles.miniCard}>
                <span className={styles.miniIcon}>👥</span>
                <span className={styles.miniVal}>2,847</span>
                <span className={styles.miniLbl}>Users</span>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniIcon}>📦</span>
                <span className={styles.miniVal}>1,293</span>
                <span className={styles.miniLbl}>Orders</span>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniIcon}>⚡</span>
                <span className={styles.miniVal}>98ms</span>
                <span className={styles.miniLbl}>Latency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
