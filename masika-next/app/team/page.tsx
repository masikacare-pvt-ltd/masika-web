'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Team.module.css';

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    if (!container) return;

    // Allow horizontal scrolling using the vertical mouse wheel
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 2;
      }
    };
    
    // Non-passive listener needed to call preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;
    const slides = containerRef.current.querySelectorAll(`.${styles.slide}`);
    
    slides.forEach((slide) => {
      const revealElements = slide.querySelectorAll(`.${styles.gsapReveal}`);
      if(revealElements.length > 0) {
        gsap.fromTo(revealElements, 
          { x: 40, opacity: 0, filter: "blur(5px)" },
          {
            x: 0, opacity: 1, filter: "blur(0px)",
            duration: 1.2, stagger: 0.1, ease: "power4.out",
            scrollTrigger: {
              trigger: slide,
              scroller: containerRef.current,
              horizontal: true,
              start: "left 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, { scope: containerRef });

  const scrollNext = () => {
    if(containerRef.current) {
        containerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  };
  
  const scrollToStart = (e: React.MouseEvent) => {
    e.preventDefault();
    if(containerRef.current) {
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.stackingContainer} ref={containerRef}>
        <style dangerouslySetInnerHTML={{__html: `
            footer, div[class*="rttWrapper"], .contact-modal { display: none !important; }
        `}} />
        
        {/* SLIDE 1 : COVER PAGE */}
        <div className={styles.slide}>
            <div className={styles.hudBgText}>MATRIX.01</div>
            <div className={`${styles.hudCrosshair} ${styles.hudTopRight}`}></div>
            <div className={styles.bookPagination}>PG. 01 / 08</div>

            <div className={`${styles.slideContentWrapper} ${styles.flexCenterCol}`}>
                <div className={`${styles.heroHudIcon} ${styles.gsapReveal}`}>
                    <svg viewBox="0 0 200 200" className={`${styles.hudLayer} ${styles.animSpinSlow}`} style={{filter: 'drop-shadow(0 0 8px rgba(250, 30, 52, 0.4))'}}>
                        <circle cx="100" cy="100" r="94" fill="none" stroke="rgba(7, 9, 15, 0.15)" strokeWidth="1"/>
                        <circle cx="100" cy="100" r="94" fill="none" stroke="var(--c-red)" strokeWidth="2" strokeDasharray="140 260" strokeLinecap="round"/>
                        <circle cx="100" cy="100" r="86" fill="none" stroke="rgba(250, 30, 52, 0.2)" strokeWidth="1.5" strokeDasharray="2 6"/>
                    </svg>
            
                    <svg viewBox="0 0 200 200" className={styles.hudLayerReverse}>
                        <polygon points="100,10 177.9,55 177.9,145 100,190 22.1,145 22.1,55" fill="none" stroke="rgba(7, 9, 15, 0.08)" strokeWidth="1.5"/>
                        <polygon points="100,25 164.9,62.5 164.9,137.5 100,175 35.1,137.5 35.1,62.5" fill="none" stroke="var(--c-dark)" strokeWidth="1" strokeDasharray="4 4"/>
                        <circle cx="100" cy="10" r="3" fill="var(--c-red)"/>
                        <circle cx="100" cy="190" r="3" fill="var(--c-red)"/>
                        <circle cx="22.1" cy="55" r="3" fill="var(--c-dark)"/>
                        <circle cx="177.9" cy="145" r="3" fill="var(--c-dark)"/>
                    </svg>
            
                    <svg viewBox="0 0 200 200" className={styles.hudLayer}>
                        <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(250, 30, 52, 0.1)" strokeWidth="4" strokeDasharray="10 5"/>
                        <circle cx="100" cy="100" r="28" fill="var(--c-dark)" className={styles.animPulseCore}/>
                        <circle cx="100" cy="100" r="12" fill="none" stroke="var(--c-red)" strokeWidth="2" className={styles.hudPulseFast}/>
                        <circle cx="100" cy="100" r="4" fill="var(--c-bg)"/>
                        <path d="M 100 35 L 100 50 M 100 150 L 100 165 M 35 100 L 50 100 M 150 100 L 165 100" stroke="var(--c-red)" strokeWidth="2" strokeLinecap="round"/>
                        <g className={styles.hudScanLine}>
                            <line x1="100" y1="100" x2="100" y2="20" stroke="var(--c-red)" strokeWidth="1.5"/>
                            <path d="M 100 100 L 100 20 A 80 80 0 0 1 156.5 43.4 Z" fill="rgba(250, 30, 52, 0.08)"/>
                        </g>
                    </svg>
                </div>

                <div className={`minimal-num ${styles.gsapReveal} ${styles.minNumCenter}`}>
                    <span className="num">0.1%</span><span className="num-line"></span><span className="num-label">SYSTEM ECOSYSTEM</span>
                </div>
                
                <h1 className={`${styles.hugeSplash} cinematic-text ${styles.gsapReveal}`}>
                    <span className={styles.textCDark}>The</span> <span className={styles.textCRed}>Architect</span><br/><span className={styles.textCDark}>Collective</span>
                </h1>
                
                <p className={`${styles.splashP} ${styles.gsapReveal}`}>Meet the elite nodes driving our deep tech proprietary models, crafting cinematic designs, scaling ecosystems, and relentlessly eliminating traditional boundaries.</p>

                <div className={`${styles.swipeIndicator} ${styles.gsapReveal}`} style={{cursor: 'pointer'}} onClick={scrollNext}>
                    Swipe Page 
                    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" stroke="currentColor" fill="none"/></svg>
                </div>
            </div>
        </div>

        {/* SLIDE 2 : FOUNDER */}
        <div className={styles.slide}>
            <div className={styles.hudBgText}>ARCHITECT.</div>
            <div className={`${styles.hudCrosshair} ${styles.hudBotLeft}`}></div>
            <div className={styles.bookPagination}>PG. 02 / 08</div>
            
            <svg className={styles.catIcon} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(250, 30, 52, 0.2)" strokeWidth="1.5" strokeDasharray="4 8" className={styles.animSpinSlow}/>
                <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="var(--c-dark)" strokeWidth="1.5" className={styles.animSpinRev}/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(7, 9, 15, 0.1)" strokeWidth="1"/>
                <circle cx="50" cy="50" r="6" fill="var(--c-red)" className={styles.animPulseCore}/>
            </svg>

            <div className={styles.slideContentWrapper}>
                <div className={`${styles.slideHeader} ${styles.gsapReveal}`}>
                    <div className="minimal-num">
                        <span className="num">01</span><span className="num-line"></span><span className="num-label">COMMAND CORE</span>
                    </div>
                    <h2 className="premium-heading"><span>The</span><span className="cine-accent">Founder</span></h2>
                </div>

                <div className={`${styles.teamGrid} ${styles.grid1}`}>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}>
                            <Image src="/founder.jpg" alt="Founder" fill style={{objectFit: 'cover'}} />
                        </div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Vishma Pasayat</h3>
                            <span className={styles.mcRole}>Lead System Architect</span>
                            <p className={styles.mcDesc}>Behind every model he builds lies a human problem waiting to be solved.
                            Witnessing the impact of limited menstrual health awareness, he set out to bridge the gap through AI, language technologies, and scalable healthcare intelligence.
                            Today, he&apos;s building systems designed to democratize menstrual health support at population scale.
                            </p>
                            <Link href="/founder" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SLIDE 3 : MARKETING */}
        <div className={styles.slide}>
            <div className={styles.hudBgText}>NETWORK.</div>
            <div className={`${styles.hudCrosshair} ${styles.hudTopRight}`}></div>
            <div className={styles.bookPagination}>PG. 03 / 08</div>

            <svg className={styles.catIcon} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(7, 9, 15, 0.1)" strokeWidth="1"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="var(--c-red)" strokeWidth="1" className={styles.animRadar}/>
                <g className={styles.animSpinSlow}>
                    <circle cx="15" cy="50" r="4" fill="var(--c-red)"/>
                    <circle cx="85" cy="50" r="4" fill="var(--c-red)"/>
                    <circle cx="50" cy="15" r="4" fill="var(--c-dark)"/>
                    <circle cx="50" cy="85" r="4" fill="var(--c-dark)"/>
                    <path d="M15 50 L85 50 M50 15 L50 85" stroke="rgba(7, 9, 15, 0.15)" strokeWidth="1" strokeDasharray="2 4"/>
                </g>
                <circle cx="50" cy="50" r="8" fill="var(--c-dark)" className={styles.animPulseCore}/>
            </svg>

            <div className={styles.slideContentWrapper}>
                <div className={`${styles.slideHeader} ${styles.gsapReveal}`}>
                    <div className="minimal-num">
                        <span className="num">02</span><span className="num-line"></span><span className="num-label">SCALE PROPULSION</span>
                    </div>
                    <h2 className="premium-heading"><span>Growth &</span><span className="cine-accent">Marketing</span></h2>
                </div>

                <div className={`${styles.teamGrid} ${styles.grid2}`}>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}>
                            <Image src="/mrk01.jpg" alt="Marketing 1" fill style={{objectFit: 'cover'}} />
                        </div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Vennela</h3>
                            <span className={styles.mcRole}>VP Marketing Systems</span>
                            <p className={styles.mcDesc}>Having worked with industry leaders like Adani Group, she learned that great brands are built through trust and consistency.
                            Her strength lies in transforming ideas into movements that people connect with.
                            Every campaign she leads is backed by purpose, precision, and persistence.
                            </p>
                            <Link href="/mrk01" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}>
                            <Image src="/mrk02.jpg" alt="Marketing 2" fill style={{objectFit: 'cover'}} />
                        </div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Shailasa Sadangi</h3>
                            <span className={styles.mcRole}>Growth Hacker</span>
                            <p className={styles.mcDesc}>While technology powers innovation, she ensures its message reaches the people who matter.
                            Through podcasting, narrative design, and strategic communication, she bridges the gap between complex ideas and human understanding.
                            Because the most powerful stories are the ones that create lasting impact.
                            </p>
                            <Link href="/mrk02" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SLIDE 4 : VIDEO EDITORS */}
        <div className={styles.slide}>
            <div className={styles.hudBgText}>VISUALS.</div>
            <div className={`${styles.hudCrosshair} ${styles.hudBotLeft}`}></div>
            <div className={styles.bookPagination}>PG. 04 / 08</div>

            <svg className={styles.catIcon} viewBox="0 0 100 100">
                <g className={styles.animSpinSlow}>
                    <path d="M 20 30 L 20 20 L 30 20 M 80 30 L 80 20 L 70 20 M 20 70 L 20 80 L 30 80 M 80 70 L 80 80 L 70 80" fill="none" stroke="var(--c-dark)" strokeWidth="2"/>
                </g>
                <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(250, 30, 52, 0.2)" strokeWidth="1.5" strokeDasharray="10 10" className={styles.animSpinRev}/>
                <polygon points="45,35 65,50 45,65" fill="var(--c-red)" className={styles.animPulseCore}/>
            </svg>

            <div className={styles.slideContentWrapper}>
                <div className={`${styles.slideHeader} ${styles.gsapReveal}`}>
                    <div className="minimal-num">
                        <span className="num">03</span><span className="num-line"></span><span className="num-label">CINEMATIC CONTROL</span>
                    </div>
                    <h2 className="premium-heading"><span>Video</span><span className="cine-accent">Architects</span></h2>
                </div>

                <div className={`${styles.teamGrid} ${styles.grid2}`}>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}>
                            <Image src="/vded01.jpg" alt="Video Editor" fill style={{objectFit: 'cover'}} />
                        </div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Hrushikesh Das</h3>
                            <span className={styles.mcRole}>Lead Motion Director</span>
                            <p className={styles.mcDesc}>At the intersection of motion, design, and storytelling, he brings narratives to life frame by frame.
                            With expertise in short-form content, cinematic editing, motion graphics, and visual composition, he crafts experiences that resonate beyond the screen.
                            Because impactful stories deserve equally impactful visuals.
                            </p>
                            <Link href="/vded01" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}>
                            <Image src="/vded02.jpg" alt="Video Editor" fill style={{objectFit: 'cover'}} />
                        </div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Zaid Haque</h3>
                            <span className={styles.mcRole}>Post-Production Expert</span>
                            <p className={styles.mcDesc}>Behind every engaging long-form video lies a rhythm most viewers never notice.
                            With expertise in storytelling, timeline structuring, audio balancing, and cinematic pacing, he shapes content that feels effortless to watch.
                            His craft turns conversations into narratives and footage into memorable experiences.
                            </p>
                            <Link href="/vded02" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SLIDE 5 : CONTENT CREATORS */}
        <div className={styles.slide}>
            <div className={styles.hudBgText}>NARRATIVE.</div>
            <div className={`${styles.hudCrosshair} ${styles.hudTopRight}`}></div>
            <div className={styles.bookPagination}>PG. 05 / 08</div>

            <svg className={styles.catIcon} viewBox="0 0 100 100">
                <polygon points="50,15 80,75 20,75" fill="none" stroke="var(--c-dark)" strokeWidth="1.5" className={styles.animSpinSlow}/>
                <polygon points="50,85 20,25 80,25" fill="none" stroke="rgba(250, 30, 52, 0.4)" strokeWidth="1.5" className={styles.animSpinRev}/>
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(7, 9, 15, 0.05)" strokeWidth="1"/>
                <circle cx="50" cy="50" r="8" fill="var(--c-red)" className={styles.animPulseCore}/>
            </svg>

            <div className={styles.slideContentWrapper}>
                <div className={`${styles.slideHeader} ${styles.gsapReveal}`}>
                    <div className="minimal-num">
                        <span className="num">04</span><span className="num-line"></span><span className="num-label">PSYCHOMETRIC LOGIC</span>
                    </div>
                    <h2 className="premium-heading"><span>Content</span><span className="cine-accent">Creators</span></h2>
                </div>

                <div className={`${styles.teamGrid} ${styles.grid4}`}>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/cc01.jpg" alt="Creator 1" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Biswajit Budek</h3>
                            <span className={styles.mcRole}>Head of Narrative</span>
                            <p className={styles.mcDesc}>In a space where many hesitate to speak, he chose to start the conversation.
                            Through his Instagram series MEN Talk Menstruation, he creates impactful short-form content that transforms awareness into understanding.</p>
                            <Link href="/cc01" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/cc02.jpg" alt="Creator 2" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>G. Rani</h3>
                            <span className={styles.mcRole}>Informative Content Creator</span>
                            <p className={styles.mcDesc}>She turns evidence-based insights into stories people genuinely want to watch.
                            With expertise in educational reels, long-form awareness content, and health communication, she simplifies menstrual health topics into engaging, impactful narratives.</p>
                            <Link href="/cc02" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/cc03.jpg" alt="Creator 3" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Sriya Anindita</h3>
                            <span className={styles.mcRole}>Creative Performer</span>
                            <p className={styles.mcDesc}>She turns every frame into a powerful story through natural performances and genuine emotion, bringing authenticity to every visual narrative.</p>
                            <Link href="/cc03" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/cc04.jpg" alt="Creator 4" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}> Masika Creator</h3>
                            <span className={styles.mcRole}>Health Guide</span>
                            <p className={styles.mcDesc}>Coming Soon</p>
                            <Link href="/cc04" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SLIDE 6 : SOCIAL MEDIA */}
        <div className={styles.slide}>
            <div className={styles.hudBgText}>SYNERGY.</div>
            <div className={`${styles.hudCrosshair} ${styles.hudBotLeft}`}></div>
            <div className={styles.bookPagination}>PG. 06 / 08</div>

            <svg className={styles.catIcon} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(7, 9, 15, 0.1)" strokeWidth="1"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="var(--c-red)" strokeWidth="1" className={styles.animRadar}/>
                <g className={styles.animSpinSlow}>
                    <circle cx="50" cy="10" r="5" fill="var(--c-red)"/>
                    <circle cx="85" cy="70" r="5" fill="var(--c-dark)"/>
                    <circle cx="15" cy="70" r="5" fill="var(--c-dark)"/>
                    <path d="M50 10 Q50 50 85 70 M85 70 Q50 50 15 70 M15 70 Q50 50 50 10" fill="none" stroke="rgba(250, 30, 52, 0.2)" strokeWidth="1.5"/>
                </g>
                <circle cx="50" cy="50" r="6" fill="var(--c-dark)" className={styles.animPulseCore}/>
            </svg>

            <div className={styles.slideContentWrapper}>
                <div className={`${styles.slideHeader} ${styles.gsapReveal}`}>
                    <div className="minimal-num">
                        <span className="num">05</span><span className="num-line"></span><span className="num-label">OMNI-CHANNEL OPS</span>
                    </div>
                    <h2 className="premium-heading"><span>Social Media</span><span className="cine-accent">Management</span></h2>
                </div>

                <div className={`${styles.teamGrid} ${styles.grid4}`}>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/smm01.jpg" alt="SMM 1" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Happy Singh</h3>
                            <span className={styles.mcRole}>Social Media Strategy & Community Lead</span>
                            <p className={styles.mcDesc}>Driving strategy behind every campaign.
                            He leads social media management, guides the team, and keeps every initiative aligned with purpose and growth.</p>
                            <Link href="/smm01" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/smm02.jpg" alt="SMM 2" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Neha Bajaj</h3>
                            <span className={styles.mcRole}>Digital Growth & Social Media Manager</span>
                            <p className={styles.mcDesc}>She leads social media execution with a focus on consistency, engagement, and brand growth, ensuring every piece of content reaches the right audience and drives meaningful interaction. Her strategies are designed to build lasting connections with the community.</p>
                            <Link href="/smm02" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/smm03.jpg" alt="SMM 3" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Divya Nireekshana</h3>
                            <span className={styles.mcRole}>Communications & Social Media Lead</span>
                            <p className={styles.mcDesc}>She drives the team&apos;s digital presence through strategic leadership and disciplined execution. With a strong background in communications, campaign planning, and event coordination, she ensures every initiative is delivered with impact.</p>
                            <Link href="/smm03" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/smm04.jpg" alt="SMM 4" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Uma Ballav</h3>
                            <span className={styles.mcRole}>Story Director & Narrative Lead</span>
                            <p className={styles.mcDesc}>Every memorable story begins with a clear vision. Blending creative direction with expressive narration, he crafts stories that captivate, inspire, and stay with the audience.</p>
                            <Link href="/smm04" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SLIDE 7 : DEVELOPERS */}
        <div className={styles.slide}>
            <div className={styles.hudBgText}>RUNTIME.</div>
            <div className={`${styles.hudCrosshair} ${styles.hudTopRight}`}></div>
            <div className={styles.bookPagination}>PG. 07 / 08</div>

            <svg className={styles.catIcon} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(7, 9, 15, 0.1)" strokeWidth="1" strokeDasharray="2 4" className={styles.animSpinSlow}/>
                <g className={styles.animPulseCore}>
                    <polyline points="35,30 15,50 35,70" fill="none" stroke="var(--c-dark)" strokeWidth="2"/>
                    <polyline points="65,30 85,50 65,70" fill="none" stroke="var(--c-red)" strokeWidth="2"/>
                    <line x1="58" y1="20" x2="42" y2="80" stroke="rgba(7, 9, 15, 0.3)" strokeWidth="2"/>
                </g>
            </svg>

            <div className={styles.slideContentWrapper}>
                <div className={`${styles.slideHeader} ${styles.gsapReveal}`}>
                    <div className="minimal-num">
                        <span className="num">06</span><span className="num-line"></span><span className="num-label">ENGINEERING CORE</span>
                    </div>
                    <h2 className="premium-heading"><span>System</span><span className="cine-accent">Developers</span></h2>
                </div>

                <div className={`${styles.teamGrid} ${styles.grid4}`}>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/dev01.jpg" alt="Dev 1" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Varun Kumar Goud</h3>
                            <span className={styles.mcRole}>Lead Full-Stack Engineer</span>
                            <p className={styles.mcDesc}>From architecture to deployment, he leads the development of robust web and mobile platforms.
                            His expertise in full-stack engineering ensures every product is scalable, efficient, and built for long-term growth.</p>
                            <Link href="/dev01" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/dev02.jpg" alt="Dev 2" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Panendra Jadav</h3>
                            <span className={styles.mcRole}>AI Infrastructure & API Architect</span>
                            <p className={styles.mcDesc}>He engineers the infrastructure that powers intelligent applications. With deep expertise in AI agents, API architecture, and backend systems, he builds reliable foundations for scalable, autonomous experiences.</p>
                            <Link href="/dev02" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/dev03.jpg" alt="Dev 3" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>D. Thanuj Reddy</h3>
                            <span className={styles.mcRole}>Full Stack Developer</span>
                            <p className={styles.mcDesc}>He builds responsive, high-performance web experiences with precision and scalability. Focused on clean architecture and seamless user experiences, he transforms ideas into reliable digital products.</p>
                            <Link href="/dev03" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.memberCard} ${styles.gsapReveal}`}>
                        <div className={styles.mcVisual}><Image src="/dev04.jpg" alt="Dev 4" fill style={{objectFit: 'cover'}} /></div>
                        <div className={styles.mcContent}>
                            <h3 className={styles.mcName}>Lanke Kiran Teja</h3>
                            <span className={styles.mcRole}>Lead Mobile App Developer</span>
                            <p className={styles.mcDesc}>He specializes in developing robust, scalable mobile applications with precision and performance at the core. His engineering expertise turns innovative concepts into reliable, user-centric mobile experiences.</p>
                            <Link href="/dev04" className={styles.mcConnectBtn}>
                                <span>View More</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SLIDE 8 : THANK YOU */}
        <div className={styles.slide}>
            <div className={styles.hudBgText}>EXECUTE.</div>
            <div className="hero-focus-frame hf-top-left"></div>
            <div className="hero-focus-frame hf-bot-right"></div>
            <div className={styles.bookPagination}>PG. 08 / 08</div>
            
            <div className={`${styles.slideContentWrapper} ${styles.slideWrapperOutro}`}>
                <h2 className={`premium-heading ${styles.gsapReveal} ${styles.outroHeading}`}>
                    <span className={styles.textClampHuge}>Thank</span>
                    <span className={`cine-accent ${styles.pl0} ${styles.textClampHuge}`}>You.</span>
                </h2>
                
                <p className={`data-mono ${styles.gsapReveal} ${styles.outroSubtext}`}>TEAM DIRECTORY COMPILED. END OF SEQUENCE.</p>

                <a href="#" className={`btn-primary ${styles.gsapReveal}`} onClick={scrollToStart}>
                    Re-initialize Matrix
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </a>
            </div>
        </div>

    </div>
  );
}
