'use client';
import Image from 'next/image';
import styles from './Gallery.module.css';

const items = [
  { src: '/rural.jpg', alt: 'Rural Connectivity', tag: 'Data Mod 01', title: 'Rural Connectivity', className: styles.gi1 },
  { src: '/podcast.jpg', alt: 'Podcast Series', tag: 'Data Mod 02', title: 'Podcast Series', className: styles.gi2 },
  { src: '/local.jpg', alt: 'Local Outreaches', tag: 'Data Mod 03', title: 'Local Outreaches', className: styles.gi3 },
  { src: '/AI.jpg', alt: 'AI Diagnostics', tag: 'Data Mod 04', title: 'AI Diagnostics', className: styles.gi4 },
  { src: '/iot.jpg', alt: 'Offline IoT Rollout', tag: 'Data Mod 05', title: 'Offline IoT Rollout', className: styles.gi5 },
  { src: '/camp.jpg', alt: "Women's Health Camp", tag: 'Data Mod 06', title: "Women's Health Camp", className: styles.gi6 },
  { src: '/ehub.jpg', alt: 'Educational Hubs', tag: 'Data Mod 07', title: 'Educational Hubs', className: styles.gi7 },
  { src: '/deep.jpg', alt: 'Deep Tech Lab', tag: 'Data Mod 08', title: 'Deep Tech Lab', className: styles.gi8 },
  { src: '/community.jpg', alt: 'Community Dialogue', tag: 'Data Mod 09', title: 'Community Dialogue', className: styles.gi9 },
  { src: '/deploy.jpg', alt: 'System Deployment', tag: 'Data Mod 10', title: 'System Deployment', className: styles.gi10 },
];

export default function Gallery() {
  return (
    <section className={`section-padding ${styles.impactSection}`}>
      <div className="hud-crosshair hud-top-right"></div>
      <div className="hud-bg-text" style={{ top: '80%', transform: 'translate(-50%, -50%)', opacity: 0.03 }}>TELEMETRY</div>

      <div className="minimal-num">
        <span className="num">04</span><span className="num-line"></span><span className="num-label">IMPACT DATA</span>
      </div>
      <h2 className={`${styles.galleryH2} premium-heading fade-up`}>
        <span>Our Impact </span>
        <span className="cine-accent" style={{ padding: 0 }}>Over Bharat</span>
      </h2>
      <p className={`fade-up ${styles.galleryP}`}>Glimpses of our awareness campaigns, podcasts, and community work.</p>

      <div className={`fade-up ${styles.galleryGrid}`}>
        {items.map((item) => (
          <div key={item.tag} className={`card-3d mag-tgt ${styles.galleryItem} ${item.className}`}>
            <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            <div className={styles.galleryOverlay}>
              <span className={styles.goTag}>{item.tag}</span>
              <span className={styles.goTitle}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
