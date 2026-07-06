import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.fzScanline}></div>
      
      <div className={`fade-up ${styles.footerAdvancedGrid}`}>
        <div className={styles.footerBrandCol}>
          <div className={styles.footerImageWrapper}>
            <Image 
              src="/footer.png" 
              alt="Masika Care Ecosystem" 
              width={1280} 
              height={1134} 
              priority={false}
            />
          </div>
          <div className={`logo ${styles.footerLogo}`}>MASIKA</div>
        </div>

        <div className={styles.footerLinksCol}>
          <span className={styles.footerHeading}>Ecosystem Directory</span>
          <div className={styles.footerNavList}>
            <Link href="/#about" className={styles.footerSiteLink}><span className={styles.linkNum}>01</span><span className="link-text">About Masika</span></Link>
            <Link href="/#services" className={styles.footerSiteLink}><span className={styles.linkNum}>02</span><span className="link-text">Innovations</span></Link>
            <Link href="/#processWrap" className={styles.footerSiteLink}><span className={styles.linkNum}>03</span><span className="link-text">System Pipeline</span></Link>
            <Link href="/#stories" className={styles.footerSiteLink}><span className={styles.linkNum}>04</span><span className="link-text">Real Stories</span></Link>
            <Link href="/#impact-section" className={styles.footerSiteLink}><span className={styles.linkNum}>05</span><span className="link-text">Impact Data</span></Link>
            <Link href="/#vision" className={styles.footerSiteLink}><span className={styles.linkNum}>06</span><span className="link-text">Founder Vision</span></Link>
            <a href="#" className={`${styles.footerSiteLink} contact-trigger`}><span className={styles.linkNum}>07</span><span className="link-text">Contact Node</span></a>
          </div>
        </div>

        <div className={styles.footerMapCol}>
          <span className={styles.footerHeading}>Coordinates</span>
          
          <div className={styles.minimalMapWrapper}>
            {/* Clickable overlay to prevent iframe rendering bugs inside anchor tags */}
            <a href="https://maps.app.goo.gl/8sPFQT4cUQ4EgvS9A" target="_blank" rel="noopener noreferrer" style={{position: 'absolute', inset: 0, zIndex: 10, width: '100%', height: '100%'}}></a>
            
            <div className="map-grid-overlay"></div>
            
            <iframe src="https://maps.google.com/maps?q=Biju+Patnaik+University+of+Technology,+Rourkela&z=14&output=embed&disableDefaultUI=true" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} title="Biju Patnaik University of Technology Location Map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className={styles.mapThemeOverlay}></div>
            
            <div className={styles.mapCustomPin}>
              <div className={styles.pinCorePulse}></div>
            </div>
            
            <div className="map-radar-ring"></div>
            <div className="map-radar-ring delay"></div>
            <div className={styles.mapCoordsText}>
              <span>SYS.LOC // 22.2497° N, 84.8828° E</span>
              <span className={styles.highlightLoc}>ROURKELA, ODISHA</span>
            </div>
          </div>
          
          <div className={styles.footerSocialWrapper}>
            <div className={styles.footerSocialPremium}>
              <a href="https://www.instagram.com/masika.care" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <div className={styles.socialBorderTrace}></div>
              </a>
              <a href="https://x.com/masikacare" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                <div className={styles.socialBorderTrace}></div>
              </a>
              <a href="https://www.linkedin.com/in/masika-care-6693323a9" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                <div className={styles.socialBorderTrace}></div>
              </a>
              <a href="https://www.facebook.com/share/1EmCYXuLQj/" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                <div className={styles.socialBorderTrace}></div>
              </a>
              <a href="https://youtube.com/@masikacare" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                <div className={styles.socialBorderTrace}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`fade-up ${styles.footerBottomBar}`}>
        <div className={styles.footerCopy}>© 2026 MASIKA CARE DEPLOYMENT</div>
      </div>

      <div className={`fade-up ${styles.fzHugeMark}`}>MASIKA</div>
    </footer>
  );
}
