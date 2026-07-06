'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6; 
      const rotateY = ((x - centerX) / centerX) * 6;
      
      card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="about" className={`${styles.aboutSection} section-padding`}>
        <div className="hud-bg-text">SYS.02</div>
        <div className="hud-crosshair hud-top-right"></div>
        <div className="hud-crosshair hud-bot-left"></div>

        <div className={styles.aboutLayout}>
            <div className={`fade-up ${styles.aboutVisualSide}`}>
                
                <div className={`fade-up ${styles.aboutMicroUi} ${styles.amu1}`}>
                    <span className={styles.amuDot}></span>
                    <span className={styles.amuText}>SYS.SYNC: 99.8%</span>
                </div>
                <div className={`fade-up ${styles.aboutMicroUi} ${styles.amu2}`}>
                    <span className={styles.amuLabel}>TGT_RNG</span>
                    <span className={styles.amuVal}>0.0042</span>
                </div>
                <div className={styles.aboutDecorLine}></div>

                <div 
                  className={`${styles.cycleInfographic} mag-tgt`} 
                  ref={cardRef}
                >
                    <Image 
                      src="/about.jpg" 
                      alt="Masika Uterus Cycle" 
                      className={styles.uterusCenter} 
                      width={3264} 
                      height={3264}
                    />
                    
                    <svg className={styles.cycleSvg} viewBox="-150 -150 1000 1000" style={{overflow: 'visible'}}>
                        <defs>
                            <linearGradient id="grad-follicular" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="50%" stopColor="#E81A2D" />
                                <stop offset="50%" stopColor="#ffffff" />
                            </linearGradient>
                            <linearGradient id="grad-luteal" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="50%" stopColor="#ffffff" />
                                <stop offset="50%" stopColor="#07090f" />
                            </linearGradient>
                            <filter id="drop-shadow-deep">
                                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.12"/>
                            </filter>
                        </defs>

                        <circle cx="350" cy="350" r="300" fill="none" stroke="rgba(10,10,10,0.03)" strokeWidth="1.5"/>
                        <circle cx="350" cy="350" r="280" fill="none" stroke="rgba(10,10,10,0.08)" strokeWidth="1"/>
                        
                        <circle cx="350" cy="350" r="230" fill="none" stroke="rgba(10,10,10,0.2)" strokeWidth="2" strokeDasharray="4 12 1 12" className={styles.animDashRotate}/>
                        <circle cx="350" cy="350" r="255" fill="none" stroke="rgba(232,26,45,0.4)" strokeWidth="1.5" strokeDasharray="1 15 4 45 10 30" className={styles.animDashRotateRev}/>
                        
                        <path d="M350 50 A 300 300 0 0 1 650 350" fill="none" stroke="var(--c-red)" strokeWidth="1.5" className="svg-pulse-line" strokeDasharray="150" opacity="0.6"/>

                        <line x1="350" y1="90" x2="350" y2="210" stroke="rgba(10,10,10,0.15)" strokeWidth="1" strokeDasharray="3 6"/>
                        <line x1="350" y1="610" x2="350" y2="490" stroke="rgba(10,10,10,0.15)" strokeWidth="1" strokeDasharray="3 6"/>
                        <line x1="90" y1="350" x2="210" y2="350" stroke="rgba(10,10,10,0.15)" strokeWidth="1" strokeDasharray="3 6"/>
                        <line x1="610" y1="350" x2="490" y2="350" stroke="rgba(10,10,10,0.15)" strokeWidth="1" strokeDasharray="3 6"/>

                        <circle cx="350" cy="90" r="5.5" fill="var(--c-red)" className={styles.pulseDotAnim}/>
                        <circle cx="610" cy="350" r="5" fill="rgba(10,10,10,0.2)" className={`${styles.pulseDotAnim} ${styles.pdDelay1}`}/>
                        <circle cx="350" cy="610" r="5.5" fill="var(--c-red)" className={`${styles.pulseDotAnim} ${styles.pdDelay2}`}/>
                        <circle cx="90" cy="350" r="5" fill="rgba(10,10,10,0.2)" className={`${styles.pulseDotAnim} ${styles.pdDelay3}`}/>
                        
                        <polyline points="200,200 220,180 230,190 250,150 260,160" fill="none" stroke="var(--c-red)" strokeWidth="1.5" opacity="0.5"/>

                        <path d="M 350 42 C 342 62, 340 67, 340 73 A 10 10 0 0 0 360 73 C 360 67, 358 62, 350 42 Z" fill="var(--c-red)"/>
                        <circle cx="645" cy="350" r="18" fill="url(#grad-follicular)" stroke="rgba(10,10,10,0.1)" strokeWidth="1" filter="url(#drop-shadow-deep)"/>
                        <circle cx="350" cy="655" r="18" fill="var(--c-red)" stroke="rgba(10,10,10,0.1)" strokeWidth="1" filter="url(#drop-shadow-deep)"/>
                        <circle cx="55" cy="350" r="18" fill="url(#grad-luteal)" stroke="rgba(10,10,10,0.1)" strokeWidth="1" filter="url(#drop-shadow-deep)"/>

                        <g textAnchor="middle">
                            <text x="350" y="15" fontFamily="var(--font-cine)" fontSize="16" fontStyle="italic" fontWeight="600" letterSpacing="1" fill="var(--c-dark)">Menstruation</text>
                            <text x="350" y="30" fontFamily="var(--font-data)" fontSize="9" fontWeight="700" letterSpacing="2" fill="var(--c-red)">SEQ_01 // D1-5</text>
                            
                            <text x="350" y="700" fontFamily="var(--font-cine)" fontSize="16" fontStyle="italic" fontWeight="600" letterSpacing="1" fill="var(--c-dark)">Ovulation</text>
                            <text x="350" y="715" fontFamily="var(--font-data)" fontSize="9" fontWeight="700" letterSpacing="2" fill="var(--c-red)">SEQ_03 // D14-17</text>
                        </g>
                        <g>
                            <text x="675" y="345" textAnchor="start" fontFamily="var(--font-cine)" fontSize="16" fontStyle="italic" fontWeight="600" letterSpacing="1" fill="var(--c-dark)">Follicular Phase</text>
                            <text x="675" y="360" textAnchor="start" fontFamily="var(--font-data)" fontSize="9" fontWeight="700" letterSpacing="2" fill="var(--c-red)">SEQ_02 // D6-13</text>
                            
                            <text x="25" y="345" textAnchor="end" fontFamily="var(--font-cine)" fontSize="16" fontStyle="italic" fontWeight="600" letterSpacing="1" fill="var(--c-dark)">Luteal Phase</text>
                            <text x="25" y="360" textAnchor="end" fontFamily="var(--font-data)" fontSize="9" fontWeight="700" letterSpacing="2" fill="var(--c-red)">SEQ_04 // D18-28</text>
                        </g>
                    </svg>
                </div>
            </div>
            
            <div className={`fade-up ${styles.aboutTextSide}`}>
                <div className={styles.minimalNum}>
                    <span className={styles.num}>02</span><span className={styles.numLine}></span><span className={styles.numLabel}>SYSTEM CORE</span>
                </div>
                <h2 className="premium-heading">
                    <span>Who </span>
                    <span className="cine-accent">We Are</span>
                </h2>
                <p>At MASIKA CARE, we transcend traditional healthcare boundaries. Born in India and recognized in the deep tech category by Startup Odisha and Startup India, we deploy advanced machine learning models to decode menstrual health.</p>
                <p>From bustling tier 1 cities to the most underserved rural depths of Bharat, we are obliterating the taboo of periods with pure, actionable science and profound empathy.</p>
            </div>
        </div>
    </section>
  );
}
