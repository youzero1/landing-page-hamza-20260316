import styles from './Features.module.css';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#eef2ff" />
        <path d="M8 14l4 4 8-8" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Effortless Collaboration',
    description: 'Invite your team, assign roles, and work in real-time. Comments, mentions, and live cursors keep everyone in sync — no matter where they are.',
    color: '#eef2ff',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#fef3c7" />
        <path d="M14 7v7l4 2" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="7" stroke="#f59e0b" strokeWidth="2" />
      </svg>
    ),
    title: 'Blazing Fast Performance',
    description: 'Sub-100ms response times backed by a globally distributed edge network. Your users experience speed — always, everywhere.',
    color: '#fef3c7',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#f0fdf4" />
        <path d="M14 8c-3.314 0-6 2.686-6 6 0 2.21 1.197 4.14 2.975 5.18L11 21h6l.025-1.82C18.803 18.14 20 16.21 20 14c0-3.314-2.686-6-6-6z" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 21v1a2 2 0 004 0v-1" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Intelligent Automation',
    description: 'Let AI handle the repetitive work. Smart workflows trigger actions, send alerts, and optimize processes so your team can focus on what matters.',
    color: '#f0fdf4',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#fdf2f8" />
        <rect x="7" y="12" width="14" height="10" rx="2" stroke="#d946ef" strokeWidth="2" />
        <path d="M10 12V9a4 4 0 018 0v3" stroke="#d946ef" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="17" r="1.5" fill="#d946ef" />
      </svg>
    ),
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 Type II certified with end-to-end encryption, SSO, and granular permissions. Your data is protected at every layer.',
    color: '#fdf2f8',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why Lumora</span>
          <h2 className={styles.title}>Everything your team needs</h2>
          <p className={styles.subtitle}>
            A comprehensive platform designed to eliminate friction and let your team do their best work.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              <a href="#cta" className={styles.learnMore}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
