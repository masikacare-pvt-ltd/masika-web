'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Services.module.css';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 3D Tilt Mechanics
    const cards = containerRef.current.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
      const el = card as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--mouse-x', `${x}px`);
        el.style.setProperty('--mouse-y', `${y}px`);
        
        const centerX = rect.width / 2; 
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6; 
        const rotateY = ((x - centerX) / centerX) * 6;
        el.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };
      
      const handleMouseLeave = () => {
        el.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      };

      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
      
      // Magnetic Hover effect is integrated here since card-3d overlaps mag-tgt logic
    });

    return () => {
      // Cleanup event listeners not strictly necessary on unmount since nodes are destroyed, 
      // but good practice.
    };
  }, []);

  return (
    <section id="services" className="section-padding">
        
        <div className="hud-bg-text" style={{ top: '20%', left: '10%', transform: 'none', fontSize: '8vw' }}>SYS.03</div>

        <div className={styles.servicesVWrapper} ref={containerRef}>
            <div className={styles.servicesStickyCol}>
                <div className="minimal-num">
                    <span className="num">03</span><span className="num-line"></span><span className="num-label">ECOSYSTEM</span>
                </div>
                <h2 className="premium-heading">
                    <span>Our </span>
                    <span className="cine-accent">Innovations</span>
                </h2>
                <p>Advanced technology meeting raw human empathy. We&apos;ve engineered an interconnected, deep-tech ecosystem that brings elite healthcare directly to you, regardless of internet connectivity, language barrier, or location.</p>
            </div>

            <div className={styles.servicesScrollCol}>
                <div className={`card-3d fade-up ${styles.serviceBlockPremium}`}>
                    <div className={styles.sbaIconWrap}>
                        <svg viewBox="0 0 100 100">
                            <defs><filter id="glow-red"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
                            <g className="svg-poly-spin" style={{ animationDuration: '40s' }}>
                                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(10,10,10,0.06)" strokeWidth="1.5" strokeDasharray="4 8"/>
                                <path d="M 50 5 Q 70 30 95 50 Q 70 70 50 95 Q 30 70 5 50 Q 30 30 50 5" fill="none" stroke="rgba(232, 26, 45, 0.15)" strokeWidth="1"/>
                            </g>
                            <path d="M 20 50 L 40 30 L 60 40 L 70 20 M 40 30 L 50 60 L 80 50" fill="none" stroke="var(--c-dark)" strokeWidth="1.5" strokeDasharray="100" className="svg-pulse-line" />
                            <circle cx="20" cy="50" r="3" fill="var(--c-red)"/>
                            <circle cx="40" cy="30" r="3" fill="var(--c-dark)"/>
                            <circle cx="60" cy="40" r="4" fill="var(--c-red)" filter="url(#glow-red)" style={{ animation: 'floatPulseCore 1s infinite alternate' }}/>
                            <circle cx="70" cy="20" r="2.5" fill="var(--c-dark)"/>
                            <circle cx="50" cy="60" r="3" fill="var(--c-dark)"/>
                            <circle cx="80" cy="50" r="3" fill="var(--c-red)"/>
                        </svg>
                    </div>
                    <div className={styles.sbaContent}>
                        <span className={styles.sbaTag}>Proprietary ML</span>
                        <h3>AI General Checkup</h3>
                        <p>Our proprietary ML model evaluates where your menstrual health stands instantly, mapping complex biological patterns to provide highly accurate, personalized data.</p>
                    </div>
                </div>

                <div className={`card-3d fade-up ${styles.serviceBlockPremium}`}>
                    <div className={styles.sbaIconWrap}>
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="30" fill="none" stroke="var(--c-dark)" strokeWidth="1" opacity="0.2"/>
                            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--c-red)" strokeWidth="1" strokeDasharray="4 6" className="svg-poly-spin-rev"/>
                            <path d="M 10 50 C 30 20, 70 80, 90 50" fill="none" stroke="var(--c-dark)" strokeWidth="2"/>
                            <path d="M 10 50 C 30 20, 70 80, 90 50" fill="none" stroke="var(--c-red)" strokeWidth="2.5" strokeDasharray="30 150" className="svg-pulse-line"/>
                            <rect x="46" y="46" width="8" height="8" rx="2" fill="var(--c-red)" filter="url(#glow-red)" style={{ animation: 'floatPulseCore 2s infinite alternate', transformOrigin: 'center' }}/>
                            <polyline points="35,60 45,50 55,65 65,45" fill="none" stroke="rgba(10,10,10,0.3)" strokeWidth="1.5"/>
                        </svg>
                    </div>
                    <div className={styles.sbaContent}>
                        <span className={styles.sbaTag}>Direct Link</span>
                        <h3>Accessible Consultations</h3>
                        <p>Direct consultation with top doctors at disruptive, affordable prices. Breaking the fundamental financial barrier to premium, specialized healthcare.</p>
                    </div>
                </div>

                <div className={`card-3d fade-up ${styles.serviceBlockPremium}`}>
                    <div className={styles.sbaIconWrap}>
                        <svg viewBox="0 0 100 100">
                            <path d="M 30 30 Q 50 10, 70 30 T 70 70 Q 50 90, 30 70 T 30 30" fill="rgba(232,26,45,0.03)" stroke="rgba(10,10,10,0.1)" strokeWidth="1"/>
                            <path d="M 45 40 C 35 30, 75 25, 65 55 C 55 85, 30 65, 45 40 Z" fill="none" stroke="var(--c-dark)" strokeWidth="2" style={{ animation: 'floatPulseCore 4s ease-in-out infinite alternate' }}/>
                            <circle cx="55" cy="45" r="5" fill="var(--c-red)" filter="url(#glow-red)" style={{ animation: 'floatPulseCore 1.5s infinite alternate' }}/>
                            <line x1="15" y1="50" x2="35" y2="50" stroke="var(--c-red)" strokeWidth="1.5" strokeDasharray="2 4"/>
                            <line x1="55" y1="15" x2="55" y2="35" stroke="var(--c-red)" strokeWidth="1.5" strokeDasharray="2 4"/>
                            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--c-dark)" strokeWidth="1" strokeDasharray="1 8" className="svg-poly-spin" style={{ animationDuration: '60s' }}/>
                        </svg>
                    </div>
                    <div className={styles.sbaContent}>
                        <span className={styles.sbaTag}>New Feature</span>
                        <h3>Pregnancy Care</h3>
                        <p>Comprehensive tracking and predictive health modeling for expecting mothers. A highly intuitive module bridging maternal health and infant safety continuously.</p>
                    </div>
                </div>

                <div className={`card-3d fade-up ${styles.serviceBlockPremium}`}>
                    <div className={styles.sbaIconWrap}>
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(10,10,10,0.1)" strokeWidth="1.5"/>
                            <ellipse cx="50" cy="50" rx="15" ry="35" fill="none" stroke="rgba(10,10,10,0.1)" strokeWidth="1.5"/>
                            <line x1="15" y1="50" x2="85" y2="50" stroke="rgba(10,10,10,0.1)" strokeWidth="1.5"/>
                            <path d="M 15 50 Q 50 15, 85 50 Q 50 85, 15 50" fill="none" stroke="var(--c-red)" strokeWidth="2" style={{ animation: 'floatPulseCore 3s infinite alternate ease-in-out' }}/>
                            <circle cx="50" cy="15" r="3.5" fill="var(--c-red)" style={{ animation: 'floatPulseCore 2s infinite alternate 0.2s' }}/>
                            <circle cx="85" cy="50" r="3.5" fill="var(--c-dark)" style={{ animation: 'floatPulseCore 2s infinite alternate 0.4s' }}/>
                            <circle cx="50" cy="85" r="3.5" fill="var(--c-red)" style={{ animation: 'floatPulseCore 2s infinite alternate 0.6s' }}/>
                            <circle cx="15" cy="50" r="3.5" fill="var(--c-dark)" style={{ animation: 'floatPulseCore 2s infinite alternate 0.8s' }}/>
                            <circle cx="50" cy="50" r="6" fill="var(--c-red)" filter="url(#glow-red)"/>
                        </svg>
                    </div>
                    <div className={styles.sbaContent}>
                        <span className={styles.sbaTag}>Omni-Lingual</span>
                        <h3>32+ Indian Languages</h3>
                        <p>Available in major languages and rural dialects of Bharat, ensuring pure comprehension without linguistic barriers or translation gaps.</p>
                    </div>
                </div>

                <div className={`card-3d fade-up ${styles.serviceBlockPremium}`}>
                    <div className={styles.sbaIconWrap}>
                        <svg viewBox="0 0 100 100">
                            <g style={{ transformOrigin: '50px 50px', animation: 'premium-svg-pulse-out 4s infinite cubic-bezier(0.16, 1, 0.3, 1)' }}>
                                <circle cx="50" cy="50" r="10" fill="none" stroke="var(--c-red)" strokeWidth="2"/>
                            </g>
                            <rect x="25" y="45" width="4" height="10" rx="2" fill="var(--c-dark)" style={{ animation: 'premium-svg-wave-y 0.9s infinite alternate', transformOrigin: 'center' }}/>
                            <rect x="35" y="35" width="4" height="30" rx="2" fill="var(--c-red)" style={{ animation: 'premium-svg-wave-y 0.9s infinite alternate 0.2s', transformOrigin: 'center' }}/>
                            <rect x="45" y="25" width="6" height="50" rx="3" fill="var(--c-dark)" style={{ animation: 'premium-svg-wave-y 0.9s infinite alternate 0.4s', transformOrigin: 'center' }}/>
                            <rect x="55" y="30" width="4" height="40" rx="2" fill="var(--c-red)" style={{ animation: 'premium-svg-wave-y 0.9s infinite alternate 0.6s', transformOrigin: 'center' }}/>
                            <rect x="65" y="40" width="4" height="20" rx="2" fill="var(--c-dark)" style={{ animation: 'premium-svg-wave-y 0.9s infinite alternate 0.8s', transformOrigin: 'center' }}/>
                            <rect x="75" y="45" width="4" height="10" rx="2" fill="var(--c-red)" style={{ animation: 'premium-svg-wave-y 0.9s infinite alternate 1.0s', transformOrigin: 'center' }}/>
                            <circle cx="50" cy="50" r="3" fill="var(--c-white)" style={{ zIndex: 2 }} filter="url(#glow-red)"/>
                        </svg>
                    </div>
                    <div className={styles.sbaContent}>
                        <span className={styles.sbaTag}>Education Core</span>
                        <h3>Awareness & Podcasts</h3>
                        <p>Psychologically triggered social media campaigns and expert podcasts delivering actual knowledge to dismantle deep-rooted systemic taboos.</p>
                    </div>
                </div>

                <div className={`card-3d fade-up ${styles.serviceBlockPremium}`}>
                    <div className={styles.sbaIconWrap}>
                        <svg viewBox="0 0 100 100">
                            <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" fill="rgba(255,255,255,0.7)" stroke="var(--c-dark)" strokeWidth="1.5"/>
                            <polygon points="50,30 70,42 70,66 50,78 30,66 30,42" fill="rgba(232, 26, 45, 0.05)" stroke="var(--c-red)" strokeWidth="1.5"/>
                            <line x1="15" y1="35" x2="30" y2="42" stroke="var(--c-dark)" strokeWidth="1.5"/>
                            <line x1="85" y1="35" x2="70" y2="42" stroke="var(--c-dark)" strokeWidth="1.5"/>
                            <line x1="85" y1="75" x2="70" y2="66" stroke="var(--c-dark)" strokeWidth="1.5"/>
                            <line x1="15" y1="75" x2="30" y2="66" stroke="var(--c-dark)" strokeWidth="1.5"/>
                            
                            <path d="M 50 30 L 50 15 M 50 78 L 50 95" stroke="var(--c-red)" strokeWidth="1.5" strokeDasharray="2 4"/>
                            <circle cx="50" cy="54" r="4" fill="var(--c-red)" filter="url(#glow-red)" style={{ animation: 'floatPulseCore 0.8s infinite alternate steps(3)' }}/>
                            
                            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(10,10,10,0.15)" strokeWidth="1" strokeDasharray="1 8" className="svg-poly-spin" style={{ animationDuration: '50s' }}/>
                        </svg>
                    </div>
                    <div className={styles.sbaContent}>
                        <span className={styles.sbaTag}>Hardware Engineering</span>
                        <h3>Offline IoT Device</h3>
                        <p>No network? No internet? Masika works. Our revolutionary proprietary IoT device ensures our services reach every woman and girl child completely offline.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
