'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Recognition.module.css';

function RecogBlock({ imgSrc, alt, imgW, imgH, name, category }: { imgSrc: string; alt: string; imgW: number; imgH: number; name: string; category: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <>
      <div className={styles.recogBlock}>
        <div className={styles.recogFrameWrapper}>
          <Image src="/left.png" className={styles.laurelSide} alt="Left Laurel" width={1080} height={1080} />
          <div className={`card-3d mag-tgt ${styles.recogItem}`} onClick={() => setModalOpen(true)}>
            <Image src={imgSrc} alt={alt} className={styles.recogItemImg} width={imgW} height={imgH} />
          </div>
          <Image src="/right.png" className={styles.laurelSide} alt="Right Laurel" width={1080} height={1080} />
        </div>
        <div className={styles.recogTextContainer}>
          <span>{name}</span>
          <p>{category}</p>
        </div>
      </div>

      {modalOpen && (
        <div
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '50px', padding: '0 5%' }}
          onClick={() => setModalOpen(false)}
        >
          <div style={{ position: 'relative', width: '80%', maxWidth: '900px', maxHeight: '80vh', display: 'flex', justifyContent: 'center' }} onClick={(e) => e.stopPropagation()}>
            <Image src={imgSrc} alt={alt} width={imgW} height={imgH} style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 25px 60px rgba(7, 9, 15, 0.15)' }} />
            <button
              onClick={() => setModalOpen(false)}
              style={{ position: 'absolute', top: -20, right: -35, color: 'var(--c-dark)', fontSize: '40px', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--c-red)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--c-dark)'}
            >×</button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Recognition() {
  return (
    <section className={`${styles.recognition} section-padding`}>
      <h2 className={`premium-heading fade-up`} style={{ marginBottom: 60 }}>
        <span>Proudly </span>
        <span className="cine-accent" style={{ padding: 0 }}>Recognized By</span>
      </h2>
      <div className={`fade-up ${styles.recogGrid}`}>
        <RecogBlock imgSrc="/startupodisha.jpg" alt="Startup Odisha" imgW={1280} imgH={905} name="Startup Odisha" category="Deep Tech Category" />
        <RecogBlock imgSrc="/startupindia.jpg" alt="Startup India" imgW={1280} imgH={904} name="Startup India" category="Deep Tech Category" />
        <RecogBlock imgSrc="/msme.jpg" alt="MSME Logo" imgW={1230} imgH={692} name="MSME Certificate" category="UDYAM REGISTRATION" />
      </div>
    </section>
  );
}
