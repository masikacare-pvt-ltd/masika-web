'use client';
import { useRef, useEffect } from 'react';
import styles from './PartnersVisionMission.module.css';

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const words = [
    { text: 'Architecting', cls: `${styles.wDark} ${styles.wCine}`, delay: '0.1s' },
    { text: 'a', cls: `${styles.wDark} ${styles.wUi}`, delay: '0.2s' },
    { text: 'reality', cls: `${styles.wDark} ${styles.wUi}`, delay: '0.3s' },
    { text: 'where', cls: `${styles.wDark} ${styles.wUi}`, delay: '0.4s' },
    { text: 'biological', cls: `${styles.wRed} ${styles.wCine}`, delay: '0.5s' },
    { text: 'clarity', cls: `${styles.wRed} ${styles.wCine}`, delay: '0.6s' },
    { text: 'meets', cls: `${styles.wDark} ${styles.wUi}`, delay: '0.7s' },
    { text: 'absolute', cls: `${styles.wRed} ${styles.wUi}`, delay: '0.8s' },
    { text: 'empathy.', cls: `${styles.wRed} ${styles.wCine}`, delay: '0.9s' },
    { text: 'BR', cls: '', delay: '1.0s' },
    { text: 'We', cls: `${styles.wDark} ${styles.wUi}`, delay: '1.2s' },
    { text: 'are', cls: `${styles.wDark} ${styles.wUi}`, delay: '1.3s' },
    { text: 'dismantling', cls: `${styles.wRed} ${styles.wCine}`, delay: '1.4s' },
    { text: 'taboos,', cls: `${styles.wDark} ${styles.wUi}`, delay: '1.5s' },
    { text: 'engineering', cls: `${styles.wRed} ${styles.wUi}`, delay: '1.6s' },
    { text: 'precision,', cls: `${styles.wRed} ${styles.wCine}`, delay: '1.7s' },
    { text: 'and', cls: `${styles.wDark} ${styles.wUi}`, delay: '1.8s' },
    { text: 'elevating', cls: `${styles.wDark} ${styles.wCine}`, delay: '1.9s' },
    { text: 'healthcare', cls: `${styles.wDark} ${styles.wUi}`, delay: '2.0s' },
    { text: 'into', cls: `${styles.wDark} ${styles.wUi}`, delay: '2.1s' },
    { text: 'an', cls: `${styles.wDark} ${styles.wUi}`, delay: '2.2s' },
    { text: 'unapologetic', cls: `${styles.wRed} ${styles.wCine}`, delay: '2.3s' },
    { text: 'right.', cls: `${styles.wDark} ${styles.wCine}`, delay: '2.4s' },
  ];

  return (
    <section id="vision" className={`fade-up section-padding ${styles.vision}`} ref={sectionRef}>
      <div className={`${styles.visionDecorLine} ${styles.blurAnim}`} style={{ '--d': '0s' } as React.CSSProperties}></div>

      <div className={`${styles.blurAnim} minimal-num`} style={{ '--d': '0.05s', margin: '0 auto 20px', maxWidth: '200px' } as React.CSSProperties}>
        <span className="num">08</span><span className="num-line"></span><span className="num-label">DIRECTIVE</span>
      </div>

      <h2 className={`premium-heading ${styles.blurAnim}`} style={{ '--d': '0.1s', alignItems: 'center', marginBottom: 60 } as React.CSSProperties}>
        <span>Our </span>
        <span className="cine-accent" style={{ padding: 0 }}>Vision</span>
      </h2>

      <h2 className={styles.visionTextWrapper}>
        {words.map((w, i) =>
          w.text === 'BR' ? <br key={i} /> : (
            <span
              key={i}
              className={`${styles.vWord} ${w.cls} ${styles.blurAnim}`}
              style={{ '--d': w.delay } as React.CSSProperties}
            >
              {w.text}
            </span>
          )
        )}
      </h2>

      <div className={`${styles.visionCompassSvg} ${styles.blurAnim}`} style={{ '--d': '2.6s' } as React.CSSProperties}>
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="var(--c-red)" strokeWidth="1.5">
          <circle cx="50" cy="50" r="45" strokeDasharray="4 8"/>
          <circle cx="50" cy="50" r="30" stroke="var(--c-dark)" strokeWidth="1"/>
          <path d="M50 10 L50 30 M50 90 L50 70 M10 50 L30 50 M90 50 L70 50"/>
          <circle cx="50" cy="50" r="4" fill="var(--c-red)" style={{ animation: 'pulseRedMinimal 2s infinite ease-in-out' }}/>
        </svg>
      </div>
    </section>
  );
}
