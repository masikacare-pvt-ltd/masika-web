import Image from 'next/image';
import styles from './PartnersVisionMission.module.css';

export default function Partners() {
  return (
    <section id="partners" className={`section-padding ${styles.partnersSection}`}>
      <div className="hud-bg-text" style={{ top: '15%', left: '10%', fontSize: '6vw' }}>SYS.ALLIANCE</div>

      <div className="minimal-num fade-up">
        <span className="num">07</span><span className="num-line"></span><span className="num-label">ALLIANCES</span>
      </div>
      <h2 className="premium-heading fade-up" style={{ marginBottom: 80, textAlign: 'center', alignItems: 'center' }}>
        <span>Strategic </span>
        <span className="cine-accent" style={{ padding: 0 }}>Partners</span>
      </h2>

      <div className={`fade-up ${styles.partnersLayout}`}>
        <a href="https://stpi.in/en" target="_blank" rel="noopener noreferrer" className={`card-3d mag-tgt ${styles.partnerCard}`}>
          <div className={styles.pcLogoWrapper}>
            <Image src="/stpi.jpg" alt="STPI Logo" width={1280} height={711} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
          <div className={styles.pcContent}>
            <span className={styles.pcTag}>Government of India</span>
            <h3 className={styles.pcTitle}>STPI</h3>
            <p className={styles.pcDesc}>Software Technology Parks of India. Empowering the deep-tech ecosystem at a national scale with unparalleled infrastructure.</p>
          </div>
          <div className={styles.pcHoverLink}>
            Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </a>

        <div className={styles.partnerSynergyIcon}>
          <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
            <defs>
              <filter id="hyper-glow">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(232, 26, 45, 0.1)" strokeWidth="1" className={styles.pulsePoly}/>
            <g className={styles.spinSlow} style={{ transformOrigin: '100px 100px' }}>
              <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(10, 10, 10, 0.1)" strokeWidth="1" strokeDasharray="2 6"/>
              <circle cx="100" cy="40" r="4" fill="#E81A2D" filter="url(#hyper-glow)"/>
              <circle cx="100" cy="160" r="4" fill="#07090f"/>
              <path d="M100 40 L100 160" stroke="rgba(232, 26, 45, 0.2)" strokeWidth="1" strokeDasharray="4 4"/>
            </g>
            <g className={styles.spinRevFast} style={{ transformOrigin: '100px 100px' }}>
              <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(232, 26, 45, 0.2)" strokeWidth="1" strokeDasharray="10 30"/>
              <circle cx="25" cy="100" r="3" fill="#E81A2D" filter="url(#hyper-glow)"/>
              <circle cx="175" cy="100" r="3" fill="#07090f"/>
            </g>
            <polygon points="100,70 126,85 126,115 100,130 74,115 74,85" fill="rgba(255, 255, 255, 0.5)" stroke="#E81A2D" strokeWidth="2" filter="url(#hyper-glow)" className={styles.synergyCorePulse} style={{ transformOrigin: '100px 100px' }}/>
            <path d="M74 85 L126 115 M74 115 L126 85 M100 70 L100 130" stroke="rgba(10, 10, 10, 0.2)" strokeWidth="1.5"/>
            <circle cx="100" cy="100" r="8" fill="#E81A2D" filter="url(#hyper-glow)"/>
            <path d="M 60 100 C 60 70, 100 70, 100 100 C 100 130, 140 130, 140 100 C 140 70, 100 70, 100 100 C 100 130, 60 130, 60 100" fill="none" stroke="var(--c-dark)" strokeWidth="3" style={{ animation: 'premiumDash 6s linear infinite', strokeDasharray: '100', strokeDashoffset: '100' }}/>
          </svg>
        </div>

        <a href="https://stpi.in/en/centre-of-entrepreneurship/emtek" target="_blank" rel="noopener noreferrer" className={`card-3d mag-tgt ${styles.partnerCard}`}>
          <div className={styles.pcLogoWrapper}>
            <Image src="/emtek.jpg" alt="eMtek Logo" width={1280} height={463} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
          <div className={styles.pcContent}>
            <span className={styles.pcTag}>Centre of Entrepreneurship</span>
            <h3 className={styles.pcTitle}>eMtek</h3>
            <p className={styles.pcDesc}>Fostering relentless innovation, vital funding, and elite mentorship for next-generation technological marvels.</p>
          </div>
          <div className={styles.pcHoverLink}>
            Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </a>
      </div>
    </section>
  );
}
