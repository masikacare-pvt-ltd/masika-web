'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './JoinUs.module.css';

export default function JoinUs() {
    const [isActive, setIsActive] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Trigger entry animation shortly after mount
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsActive(false);
        // Wait for CSS transition (0.8s) before navigating
        setTimeout(() => {
            router.push('/');
        }, 800);
    };

    return (
        <div className={`${styles.joinModal} ${isActive ? styles.active : ''}`}>
            <div className={styles.jmBg}></div>
            
            <div className={`${styles.jmMicroDecor} ${styles.jmCrosshair} ${styles.jmCh1}`}></div>
            <div className={`${styles.jmMicroDecor} ${styles.jmCrosshair} ${styles.jmCh2}`}></div>
            <div className={`${styles.jmMicroDecor} ${styles.jmScanLine}`}><div className={styles.jmScanDot}></div></div>
            <div className={`${styles.jmMicroDecor} ${styles.jmTechRing}`}></div>

            <div className={styles.jmClose} onClick={handleClose}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            
            <div className={styles.jmContent}>
                <div className={styles.jmHeader}>
                    <span className={styles.jmTag}>Careers // Masika 2026</span>
                    <h2 className={styles.jmTitle}>Join The<br/><span className={styles.jmTitleSpan}>Revolution.</span></h2>
                </div>
                
                <div className={styles.jmMainLayout}>
                    <div className={styles.jmQrSection}>
                        <div className={styles.jmQrWrap}>
                            <Image src="/qrcode.png" alt="Scan to Apply" width={1280} height={1280} style={{objectFit: 'contain', mixBlendMode: 'multiply', borderRadius: '10px', position: 'relative', zIndex: 2}} />
                        </div>
                        <p className={styles.jmMailText}>Mail us your resume to:</p>
                        <a href="mailto:info.masika@gmail.com" className={styles.jmMailId}>info.masika@gmail.com</a>
                    </div>
                    
                    <div className={styles.jmRolesSection}>
                        <h3 className={styles.jmRolesTitle}>Open Nodes</h3>
                        
                        <div className={styles.jmRoleCard}>
                            <div className={styles.jmRoleIcon}>
                                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            </div>
                            <div className={styles.jmRoleInfo}>
                                <span className={styles.jmRoleName}>Social Media Content Creator</span>
                                <span className={styles.jmRoleDesc}>Digital Narrative & Brand Engineering</span>
                            </div>
                        </div>

                        <div className={styles.jmRoleCard}>
                            <div className={styles.jmRoleIcon}>
                                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>
                            </div>
                            <div className={styles.jmRoleInfo}>
                                <span className={styles.jmRoleName}>Cinematic Video Editor</span>
                                <span className={styles.jmRoleDesc}>Visual Motion & Aesthetics</span>
                            </div>
                        </div>

                        <div className={styles.jmRoleCard}>
                            <div className={styles.jmRoleIcon}>
                                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                            </div>
                            <div className={styles.jmRoleInfo}>
                                <span className={styles.jmRoleName}>Machine Learning Developer</span>
                                <span className={styles.jmRoleDesc}>AI Logic & Deep Tech Vectors</span>
                            </div>
                        </div>

                        <div className={styles.jmRoleCard}>
                            <div className={styles.jmRoleIcon}>
                                <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                            </div>
                            <div className={styles.jmRoleInfo}>
                                <span className={styles.jmRoleName}>IoT Hardware Engineer</span>
                                <span className={styles.jmRoleDesc}>Offline Ecosystems & Microcontrollers</span>
                            </div>
                        </div>

                        <div className={styles.jmRoleCard}>
                            <div className={styles.jmRoleIcon}>
                                <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                            </div>
                            <div className={styles.jmRoleInfo}>
                                <span className={styles.jmRoleName}>App Developer</span>
                                <span className={styles.jmRoleDesc}>Fluid UI/UX & Native Execution</span>
                            </div>
                        </div>

                        <div className={styles.jmRoleCard}>
                            <div className={styles.jmRoleIcon}>
                                <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                            </div>
                            <div className={styles.jmRoleInfo}>
                                <span className={styles.jmRoleName}>Business Growth Lead</span>
                                <span className={styles.jmRoleDesc}>Strategic Expansion & Partnerships</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
