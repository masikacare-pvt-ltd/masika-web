'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './ReturnToTop.module.css';

gsap.registerPlugin(ScrollToPlugin);

export default function ReturnToTop() {
  const [isActive, setIsActive] = useState(false);
  const [dashOffset, setDashOffset] = useState(301.59);
  
  const circleLength = 301.59; // 2 * Math.PI * 48

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      
      const offset = circleLength - (scrollPercent * circleLength);
      setDashOffset(offset);

      if (scrollTop > 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [circleLength]);

  const scrollToTop = () => {
    gsap.to(window, { duration: 1.2, scrollTo: { y: 0 }, ease: "power4.inOut" });
  };

  return (
    <div 
      className={`${styles.rttWrapper} ${isActive ? styles.rttWrapperIsActive : ''}`} 
      onClick={scrollToTop}
    >
      <svg className={styles.rttCircleSvg} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="rtt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#07090f" />
            <stop offset="100%" stopColor="#E81A2D" />
          </linearGradient>
        </defs>
        <circle className={styles.rttBg} cx="50" cy="50" r="48"></circle>
        <circle 
          className={styles.rttProgress} 
          cx="50" cy="50" r="48" 
          style={{ strokeDashoffset: dashOffset }}
        ></circle>
      </svg>
      <div className={styles.rttInner}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.rttArrow}>
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
