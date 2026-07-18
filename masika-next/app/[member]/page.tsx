'use client';
import { use, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Member.module.css';
import memberDataJson from '../../lib/memberData.json';

type MemberDataType = {
    hudBgText: string;
    image: string;
    nameUi: string;
    nameCine: string;
    profileLabel: string;
    description: string;
    bullets: string[];
    socials: string[];
};
const memberData = memberDataJson as Record<string, MemberDataType>;

export default function MemberProfile({ params }: { params: Promise<{ member: string }> }) {
    const { member } = use(params);
    const data = memberData[member];
    const containerRef = useRef<HTMLDivElement>(null);

    if (!data) {
        notFound();
    }


    useGSAP(() => {
        gsap.fromTo(`.${styles.gsapElem}`, 
            { y: 40, opacity: 0, filter: "blur(8px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
        );
    }, { scope: containerRef });

    // Helper to return specific SVGs for bullets by index
    const getBulletSvg = (index: number) => {
        switch(index % 4) {
            case 0:
                return <svg viewBox="0 0 24 24"><path d="M12 2v4m0 12v4M2 12h4m12 0h4m-15-5l2.5 2.5M15.5 15.5L18 18M6.5 15.5L4 18m11.5-11.5L18 4" strokeLinecap="square"/></svg>;
            case 1:
                return <svg viewBox="0 0 24 24"><polygon points="12,2 22,12 12,22 2,12" strokeLinejoin="miter"/></svg>;
            case 2:
                return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="10" strokeDasharray="2 4"/></svg>;
            case 3:
                return <svg viewBox="0 0 24 24"><path d="M2 12l10 5 10-5M2 17l10 5 10-5M2 7l10 5 10-5M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round"/></svg>;
            default:
                return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>;
        }
    };

    // Helper to return social SVG by URL
    const getSocialSvg = (url: string) => {
        if(url.includes('linkedin')) {
            return <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
        }
        if(url.includes('x.com') || url.includes('twitter')) {
            return <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
        }
        if(url.includes('github')) {
            return <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
        }
        if(url.includes('medium')) {
            return <svg viewBox="0 0 24 24"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h7.158l5.378 11.795 4.728-11.795h6.433v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.936-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.52 3.058v.404h-7.14v-.404l2.52-3.058c.27-.279.39-.67.325-1.052v-10.608z"/></svg>;
        }
        // Fallback (e.g. Email)
        return <svg viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
    };

    return (
        <div ref={containerRef} style={{ background: '#f1f4fa', minHeight: '100vh', position: 'relative', overflowX: 'hidden', overflowY: 'auto' }}>
            <style dangerouslySetInnerHTML={{__html: `
                nav, footer, div[class*="rttWrapper"], .contact-modal { display: none !important; }
            `}} />
            <Link href="/team" className={`${styles.navBack} ${styles.gsapElem}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Return to Matrix
            </Link>

            <div className={styles.hudBgText}>{data.hudBgText}</div>

            <div className={styles.profileMatrix}>
                <div className={styles.visualSector}>
                    <div className={`${styles.premiumFrame} ${styles.gsapElem}`}>
                        <div className={styles.frameTrack}></div>
                        <div className={styles.imgContainer}>
                            <Image src={data.image} alt={data.nameUi} fill sizes="(max-width: 768px) 300px, 400px" />
                        </div>
                    </div>

                    <div className={`${styles.socialMatrix} ${styles.gsapElem}`}>
                        {data.socials && data.socials.map((link: string, idx: number) => (
                            <a key={idx} href={link} className={styles.socialNode} target="_blank" rel="noopener noreferrer">
                                {getSocialSvg(link)}
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.dataSector}>
                    <div className={styles.creativeCornerWrap}>
                        <div className={`${styles.profileLabel} ${styles.gsapElem}`}>{data.profileLabel}</div>
                        
                        <h1 className={`${styles.hybridName} ${styles.gsapElem}`}>
                            <span className={styles.nUi}>{data.nameUi}</span>
                            <span className={styles.nCine}>{data.nameCine}</span>
                        </h1>
                        
                        <p className={`${styles.aestheticDesc} ${styles.gsapElem}`}>{data.description}</p>

                        <ul className={styles.dataBullets}>
                            {data.bullets && data.bullets.map((bullet: string, idx: number) => (
                                <li key={idx} className={`${styles.bulletItem} ${styles.gsapElem}`}>
                                    <div className={styles.bIcon}>
                                        {getBulletSvg(idx)}
                                    </div>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
