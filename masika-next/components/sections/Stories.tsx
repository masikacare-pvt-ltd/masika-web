'use client';
import Image from 'next/image';
import styles from './Stories.module.css';

const storyNums = Array.from({ length: 10 }, (_, i) => i + 1);

export default function Stories() {
  return (
    <section id="stories" className={`${styles.stories} section-padding`}>
      <div className={`fade-up`} style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div className="minimal-num">
          <span className="num" style={{ color: 'var(--hero-accent)' }}>06</span>
          <span className="num-line" style={{ background: 'rgba(10,10,10,0.15)' }}></span>
          <span className="num-label" style={{ color: 'rgba(10,10,10,0.4)' }}>USER TELEMETRY</span>
        </div>
        <h2 className="premium-heading" style={{ color: 'var(--c-dark)' }}>
          <span>Real Period </span>
          <span className="cine-accent">Stories</span>
        </h2>
        <p className={styles.storiesP}>Terminating traditional blogs. Dive into aesthetic, real-life narratives from across Bharat.</p>
      </div>

      <div className={`fade-up ${styles.storiesMarqueeContainer}`}>
        <div className={`${styles.marqueeTrack} ${styles.leftToRight}`}>
          {/* Duplicate for seamless loop */}
          {[...storyNums, ...storyNums].map((num, idx) => (
            <div
              key={idx}
              className={`card-3d mag-tgt ${styles.storyBlock}`}
              data-story={num}
              onClick={() => { window.location.href = `/reading?id=${num}`; }}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={`/story${String(num).padStart(2, '0')}.png`}
                alt={`Story ${num}`}
                fill
                style={{ objectFit: 'cover', filter: 'grayscale(20%)' }}
                sizes="350px"
              />
              <div className={styles.sbOverlay}>
                <span className={styles.sbRead}>
                  Read More{' '}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
