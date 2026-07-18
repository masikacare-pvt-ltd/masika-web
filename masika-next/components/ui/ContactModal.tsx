'use client';

import React, { useState, useEffect } from 'react';
import styles from './ContactModal.module.css';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Listen for custom open event or clicks on triggers globally
    
    // Add event listeners to all triggers
    const setupTriggers = () => {
      const triggers = document.querySelectorAll('.contact-trigger');
      triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          setIsOpen(true);
          setIsSuccess(false);
        });
      });
    };

    setupTriggers();
    
    // Setup again if DOM changes (simplified approach for migration)
    const observer = new MutationObserver(setupTriggers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 500); // Reset after animation
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (!form.checkValidity()) {
      alert("Please fill all mandatory fields.");
      return;
    }
    
    setIsSubmitting(true);
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className={`${styles.contactModalOverlay} ${isOpen ? styles.contactModalOverlayActive : ''}`} 
      onClick={handleBackgroundClick}
    >
      <div className={styles.contactModalContainer}>
        <div className={styles.contactModalClose} onClick={handleClose}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </div>
        
        {!isSuccess ? (
          <div>
            <h2 className={styles.contactTitle}>Let&apos;s Connect</h2>
            <p className={styles.contactSubtitle}>Drop us a line and our team will get back to you shortly.</p>
            <form onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="access_key" value="f1f3918c-84fe-4167-bc8b-3b450e73e3fb" />
              
              <div className={styles.formGroup}>
                <input type="text" id="contactName" name="name" className={styles.formInput} required />
                <label htmlFor="contactName" className={styles.formLabel}>Full Name *</label>
              </div>
              <div className={styles.formGroup}>
                <input type="email" id="contactEmail" name="email" className={styles.formInput} required />
                <label htmlFor="contactEmail" className={styles.formLabel}>Email Address *</label>
              </div>
              <div className={styles.formGroup}>
                <input type="tel" id="contactPhone" name="phone" className={styles.formInput} required />
                <label htmlFor="contactPhone" className={styles.formLabel}>Phone Number *</label>
              </div>
              <div className={styles.formGroup}>
                <textarea id="contactMessage" name="message" className={`${styles.formInput} ${styles.formInputTextarea}`} required></textarea>
                <label htmlFor="contactMessage" className={styles.formLabel}>Your Message *</label>
              </div>
              
              <button 
                type="submit" 
                className={`${styles.formSubmitBtn} ${isSubmitting ? styles.formSubmitting : ''}`} 
                disabled={isSubmitting}
              >
                <span className={styles.btnText}>Send Message</span>
                <div className={styles.formSpinner}></div>
              </button>
            </form>
          </div>
        ) : (
          <div className={styles.formSuccessMsg} style={{ display: 'flex' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            <h3 className={styles.contactTitle}>Message Sent!</h3>
            <p className={styles.contactSubtitle}>Thank you for reaching out. We will connect with you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
