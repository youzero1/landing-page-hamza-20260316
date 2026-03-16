import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Lumora completely transformed how our engineering team ships features. We cut our deployment cycle in half and eliminated nearly all of the coordination overhead. It's the best investment we've made this year.",
    name: 'Sarah Chen',
    role: 'VP of Engineering, NovaTech',
    avatar: 'SC',
    avatarColor: '#6366f1',
    stars: 5,
  },
  {
    quote: "I was skeptical at first — we've tried a lot of tools. But Lumora genuinely delivers. The automation features alone saved our ops team 12 hours a week. The support team is also incredibly responsive.",
    name: 'Marcus Williams',
    role: 'Head of Operations, Stackr',
    avatar: 'MW',
    avatarColor: '#d946ef',
    stars: 5,
  },
  {
    quote: "As a fast-growing startup, we needed something that could scale with us without breaking the bank. Lumora checked every box — powerful, reliable, and surprisingly affordable. Couldn't be happier.",
    name: 'Priya Mehta',
    role: 'Co-founder & CTO, Liftbase',
    avatar: 'PM',
    avatarColor: '#f59e0b',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 1.9.7-4L2.2 5.7l4-.6L8 1.5z"
            fill="#f59e0b"
            stroke="#f59e0b"
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>Loved by teams worldwide</h2>
          <p className={styles.subtitle}>
            Don&apos;t take our word for it — here&apos;s what real users say about Lumora.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <StarRating count={t.stars} />
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ background: `${t.avatarColor}22`, color: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
