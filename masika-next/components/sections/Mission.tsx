'use client';
import { useRef, useEffect } from 'react';
import styles from './PartnersVisionMission.module.css';

export default function Mission() {
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

  return (
    <section id="mission" className={`section-padding fade-up ${styles.missionSection}`} ref={sectionRef}>
      <div className={styles.missionHudBg}></div>
      <div className={styles.missionTechRing}></div>
      <div className={styles.missionTechRingInner}></div>
      <div className={styles.missionTechCrosshair}></div>

      <div className={styles.missionContent}>
        <div className={`${styles.blurAnim} minimal-num`} style={{ '--d': '0.1s', margin: '0 auto 20px' } as React.CSSProperties}>
          <span className="num">09</span><span className="num-line"></span><span className="num-label">OBJECTIVE</span>
        </div>

        <h2 className={`premium-heading ${styles.blurAnim}`} style={{ '--d': '0.2s', alignItems: 'center' } as React.CSSProperties}>
          <span>Our </span>
          <span className="cine-accent" style={{ padding: 0 }}>Mission</span>
        </h2>

        <p className={`${styles.missionStatement} ${styles.blurAnim}`} style={{ '--d': '0.4s' } as React.CSSProperties}>
          To systematically eliminate <span className={styles.mHighlight}>biological ignorance</span> and deep-rooted stigma by scaling our proprietary{' '}
          <span className={styles.mRed}>offline IoT and AI architecture</span> across the 600,000+ villages of Bharat.
        </p>
        <p className={`${styles.missionStatement} ${styles.blurAnim}`} style={{ '--d': '0.6s' } as React.CSSProperties}>
          We measure success not just in diagnostic accuracy, but in the{' '}
          <span className={styles.mHighlight}>millions of lives profoundly transformed</span>—bringing elite, localized, and empathetic healthcare directly to the{' '}
          <span className={styles.mRed}>absolute last mile.</span>
        </p>

        <div className={`${styles.missionDataNodes} ${styles.blurAnim}`} style={{ '--d': '0.8s' } as React.CSSProperties}>
          <div className={styles.mDataNode}>
            <span className={styles.mDnVal}>600K<span>+</span></span>
            <span className={styles.mDnLbl}>Villages Targeted</span>
          </div>
          <div className={styles.mDataNode}>
            <span className={styles.mDnVal}>100<span>%</span></span>
            <span className={styles.mDnLbl}>Offline Capability</span>
          </div>
          <div className={styles.mDataNode}>
            <span className={styles.mDnVal}>0.1<span>%</span></span>
            <span className={styles.mDnLbl}>Systemic Failure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
