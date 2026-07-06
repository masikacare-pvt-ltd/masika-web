'use client';
import React, { useEffect } from 'react';
import styles from './Process.module.css';

const steps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" strokeDasharray="4 4"/><circle cx="12" cy="12" r="4" fill="currentColor"/>
      </svg>
    ),
    idx: 'STEP 01', title: 'AI Assessment',
    desc: 'Input your basic vitals offline or online. Our ML model securely processes your data utilizing multi-layered neural logic arrays natively.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
      </svg>
    ),
    idx: 'STEP 02', title: 'Health Generation',
    desc: 'The system generates an ultra-accurate profile indicating where your menstrual health stands, compiling probabilistic vectors instantaneously.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    idx: 'STEP 03', title: 'Native Translation',
    desc: 'Insights are translated seamlessly into your regional dialect (32+ supported) ensuring absolute data comprehension at local levels.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    idx: 'STEP 04', title: 'Specialist Link',
    desc: 'Connect with highly qualified specialists at disruptive prices based on your AI report, breaking systemic healthcare barriers.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/><line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    idx: 'STEP 05', title: 'IoT Integration',
    desc: 'Stay connected to your health tracking completely offline through our proprietary IoT hardware, ensuring unbroken care.',
  },
];

export default function Process() {
  useEffect(() => {
    const bioPipeline = document.getElementById('masikaPipeline');
    if (bioPipeline && bioPipeline.children.length === 0) {
      const nodes = 80;
      for (let i = 0; i < nodes; i++) {
        const link = document.createElement('div');
        link.className = styles.bioNodeLink;
        link.style.left = `${(i / (nodes - 1)) * 100}%`;
        
        const delay = i * -0.06;
        link.style.animation = `bioWave3D 4s ease-in-out ${delay}s infinite`;
        
        const top = document.createElement('div'); 
        top.className = styles.bnTop;
        const bot = document.createElement('div'); 
        bot.className = styles.bnBot;
        
        link.appendChild(top); 
        link.appendChild(bot);
        bioPipeline.appendChild(link);
      }
    }
  }, []);

  return (
    <section className={`section-padding ${styles.processSection}`}>
      <div className="hud-bg-text" style={{ top: '15%', left: '80%', transform: 'none', fontSize: '6vw' }}>SYS.05</div>
      <div className="hud-crosshair hud-bot-left"></div>

      <div className="minimal-num">
        <span className="num">05</span><span className="num-line"></span><span className="num-label">SYSTEM PIPELINE</span>
      </div>
      <h2 className="gallery-h2 premium-heading fade-up">
        <span>How Masika </span>
        <span className="cine-accent" style={{ padding: 0 }}>Works</span>
      </h2>

      <div className={`fade-up ${styles.processContainer}`}>
        <div className={styles.bioPipelineWrap}>
          <div className={styles.bioPipelineCore} id="masikaPipeline"></div>
        </div>

        {steps.map((step) => (
          <div key={step.idx} className={styles.processStep}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <div className={`mag-tgt ${styles.processContent}`}>
              <span className={styles.pcIdx}>{step.idx}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
