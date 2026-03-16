'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          Lumora
        </a>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <a href="#features" className={styles.link} onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#testimonials" className={styles.link} onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#cta" className={styles.link} onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#cta" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>Get Started</a>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>
    </header>
  );
}
