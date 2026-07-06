'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMusicPaused, setIsMusicPaused] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isMusicPaused) {
      audioRef.current.play();
      setIsMusicPaused(false);
    } else {
      audioRef.current.pause();
      setIsMusicPaused(true);
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} id="masikaAudio" src="/masikaanthem.mp3" loop></audio>

      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${styles.mobileMenuDropdown} ${isMobileMenuOpen ? styles.mobileMenuDropdownActive : ''}`}>
          <div className={styles.mobileNavLinks}>
            <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Innovations</Link>
            <Link href="/#stories" onClick={() => setIsMobileMenuOpen(false)}>Stories</Link>
            <Link href="/#vision" onClick={() => setIsMobileMenuOpen(false)}>Vision</Link>
            <Link href="/team" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
          </div>
        </div>

        {/* Logo */}
        <Link href="/" className={styles.logo}>MASIKA</Link>

        {/* Desktop Nav Links */}
        <div className={styles.navLinks}>
          <Link href="/#about">About</Link>
          <Link href="/#services">Innovations</Link>
          <Link href="/#stories">Stories</Link>
          <Link href="/#vision">Vision</Link>
          <Link href="/team">Team</Link>
        </div>

        {/* Nav Actions */}
        <div className={styles.navActions}>
          <Link href="/#contact" className={`${styles.navContactBtn} contact-trigger`}>Contact Us</Link>
          
          <div 
            className={`${styles.musicToggle} ${isMusicPaused ? styles.musicPaused : ''}`} 
            onClick={toggleMusic}
          >
            <div className={styles.musicTooltip}>Play Masika Anthem</div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--hero-accent)" strokeWidth="2.5" strokeLinecap="round">
              <path className={`${styles.mWave} ${styles.mWave1}`} d="M12 20v-16" />
              <path className={`${styles.mWave} ${styles.mWave2}`} d="M7 17v-10" />
              <path className={`${styles.mWave} ${styles.mWave3}`} d="M17 18v-12" />
              <path className={`${styles.mWave} ${styles.mWave4}`} d="M2 14v-4" />
              <path className={`${styles.mWave} ${styles.mWave5}`} d="M22 15v-6" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
