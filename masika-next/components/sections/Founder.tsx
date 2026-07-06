'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Founder.module.css';

export default function Founder() {
  const [socialsOpen, setSocialsOpen] = useState(false);

  return (
    <section className={styles.founderPortfolioSection}>
      <div className={`fade-up ${styles.founderPortfolioCard}`}>
        <div className={styles.fpGridLayer}></div>

        <div className={styles.fpContentLeft}>
          <div className={styles.fpBadge}>The Architect</div>
          <h2 className={styles.fpTitle}>Meet Our<br/>Founder.</h2>
          <p className={styles.fpDesc}>Blending artificial intelligence with deeply rooted human empathy. Championing a 0.1% mindset to build resilient healthcare ecosystems that leave no woman behind.</p>

          <div className={styles.fpPremiumNodes}>
            <div className={styles.fpNode}>
              <div className={styles.fpNodeIcon}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                  <line x1="22" y1="8.5" x2="12" y2="12"></line>
                  <line x1="2" y1="8.5" x2="12" y2="12"></line>
                </svg>
              </div>
              <span className={styles.fpNodeText}>AI Core Vision</span>
            </div>
            <div className={styles.fpNode}>
              <div className={styles.fpNodeIcon}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <span className={styles.fpNodeText}>0.1% Mindset</span>
            </div>
          </div>

          <div className={styles.fpConnectArea}>
            <button className={styles.fpConnectBtn} onClick={() => setSocialsOpen(!socialsOpen)}>
              Connect
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <div className={`${styles.fpSocialMenu} ${socialsOpen ? styles.fpSocialMenuActive : ''}`}>
              <a href="https://www.linkedin.com/in/vishmapasayat" target="_blank" rel="noopener noreferrer" className={styles.fpSocialLink} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/Vishma333" target="_blank" rel="noopener noreferrer" className={styles.fpSocialLink} aria-label="GitHub">
                <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://x.com/coderpawn0101" target="_blank" rel="noopener noreferrer" className={styles.fpSocialLink} aria-label="X">
                <svg viewBox="0 0 24 24" stroke="none"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="mailto:vishmapasayat003@gmail.com" className={styles.fpSocialLink} aria-label="Mail">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              <a href="https://medium.com/@vishmapasayat003" target="_blank" rel="noopener noreferrer" className={styles.fpSocialLink} aria-label="Medium">
                <svg viewBox="0 0 24 24" stroke="none"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.fpImageRight}>
          <div className={styles.fpTechRing}></div>
          <div className={styles.fpTechRing2}></div>
          <Image src="/founder.png" alt="Vishma Pasayat" className={styles.fpFounderImg} width={1280} height={1280} priority />
          <div className={styles.fpMicroBadge}><span></span> SYS.ARCHITECT // ACTIVE</div>
        </div>
      </div>
    </section>
  );
}
