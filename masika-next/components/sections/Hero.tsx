'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import styles from './Hero.module.css';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Hero Init Animation
    gsap.fromTo(".hero-text-anim", 
      { y: 50, opacity: 0, rotationX: -25, filter: "blur(12px)" },
      { y: 0, opacity: 1, rotationX: 0, filter: "blur(0px)", duration: 1.4, stagger: 0.15, ease: "power4.out", delay: 0.2 }
    );
  }, { scope: container });

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, { duration: 0.8, scrollTo: { y: "#about", offsetY: 0 }, ease: "power3.inOut" });
  };

  return (
    <section className={`${styles.hero} section-padding`} ref={container}>
        <div className={`${styles.heroFocusFrame} ${styles.hfTopLeft}`}></div>
        <div className={`${styles.heroFocusFrame} ${styles.hfTopRight}`}></div>
        <div className={`${styles.heroFocusFrame} ${styles.hfBotLeft}`}></div>
        <div className={`${styles.heroFocusFrame} ${styles.hfBotRight}`}></div>

        <div className={`${styles.microDetail} ${styles.mdRec}`}>
            <div className={styles.mdRecDot}></div> REC
        </div>
        <div className={`${styles.microDetail} ${styles.mdCoords}`}></div>
        
        <div className={styles.microScale}>
            <span></span><span></span><span></span><span></span><span></span>
        </div>
        
        <div className={`${styles.heroDecor} ${styles.decorTopLeft}`}>SYS::01 / BIO-LOGIC</div>
        <div className={`${styles.heroDecor} ${styles.decorBottomRight}`}>TGT_SEQ::ACTIVE</div>
        
        <div className={`${styles.minimalPlus} ${styles.mp1}`}>+</div>
        <div className={`${styles.minimalPlus} ${styles.mp2}`}>+</div>

        <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
                <div className={`${styles.heroCrosshair} ${styles.chTop}`}></div>
                
                <div className={`hero-text-anim ${styles.statusBadge}`}>
                    <div className={styles.statusDotWrapper}>
                        <div className={styles.statusCore}></div>
                        <div className={styles.statusRadar}></div>
                        <div className={styles.statusRadar}></div>
                    </div>
                    <span className={styles.statusText}>Core AI Sync: Active</span>
                </div>
                
                <h1 className="hero-text-anim">Redefining <br/><span className={styles.highlight}>Menstrual Health</span></h1>
                
                <p className="hero-text-anim">The world&apos;s first AI/ML deep tech startup executing biological algorithms. Decoding your cycle from menarche to menopause with raw scientific precision. Established 2026.</p>
                
                <div className={`hero-text-anim ${styles.heroButtons}`}>
                    <a href="https://www.youtube.com/@masikacare" target="_blank" rel="noopener noreferrer" className={`${styles.btnPremium} ${styles.btnSecondary}`}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        Watch Demo
                    </a>
                    <Link href="/join_us" className={`${styles.btnPremium} ${styles.btnPrimary}`}>
                        Join Us
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>

                <div className={`hero-text-anim ${styles.heroDataStripContainer}`}>
                    <p className={styles.heroSubHeading}>Masika&apos;s Ecosystem offers a cohesive suite of solutions tailored to elevate menstrual hygiene management</p>
                    <div className={styles.heroDataLine}></div>
                    <div className={styles.heroDataStrip}>
                        <div className={styles.hdNode}>
                            <div className={styles.hdIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--hero-accent)" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
                                    <path className={styles.animSpinSlow} strokeDasharray="16 20" strokeLinecap="round" d="M12 2a10 10 0 1 1-10 10"/>
                                    <circle cx="12" cy="12" r="2" fill="var(--hero-accent)"/>
                                </svg>
                            </div>
                            <div className={styles.hdContent}>
                                <span className={styles.hdVal}>99.8<span>%</span></span>
                                <span className={styles.hdLbl}>Model Accuracy</span>
                            </div>
                        </div>
                        <div className={styles.hdNode}>
                            <div className={styles.hdIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--hero-text-main)" strokeWidth="1.5">
                                    <path className={styles.animPulseLink} d="M6 12h12M12 6v12" strokeOpacity="0.2"/>
                                    <circle cx="6" cy="12" r="2.5" fill="var(--hero-accent)" className={styles.animPulseLink}/>
                                    <circle cx="18" cy="12" r="2.5" fill="var(--hero-text-main)" className={styles.animPulseLink}/>
                                    <circle cx="12" cy="6" r="2.5" fill="var(--hero-accent)" className={styles.animPulseLink}/>
                                </svg>
                            </div>
                            <div className={styles.hdContent}>
                                <span className={styles.hdVal}>32<span>+</span></span>
                                <span className={styles.hdLbl}>Dialects Sync</span>
                            </div>
                        </div>
                        <div className={styles.hdNode}>
                            <div className={styles.hdIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--hero-accent)" strokeWidth="1.5">
                                    <path d="M2 12h4l3-7 5 14 3-7h5" strokeDasharray="10 10" className={styles.animWaveSlide} strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className={styles.hdContent}>
                                <span className={styles.hdVal}>0<span>ms</span></span>
                                <span className={styles.hdLbl}>Offline Latency</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a href="#about" onClick={handleScrollClick} className={styles.premiumScrollWrapper}>
            <div className={styles.psTrack}><div className={styles.psDrop}></div></div>
            <span className={styles.psText}>Scroll</span>
        </a>
    </section>
  );
}
