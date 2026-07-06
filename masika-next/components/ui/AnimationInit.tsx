'use client';
import { useEffect } from 'react';

export default function AnimationInit() {
  useEffect(() => {
    // 3D Tilt Mechanics Global Handler
    const handleTiltMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      const centerX = rect.width / 2; 
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6; 
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleTiltLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    // Magnetic Hover Nodes Global Handler
    const handleMagMove = (e: MouseEvent) => {
      const tgt = e.currentTarget as HTMLElement;
      const rect = tgt.getBoundingClientRect();
      const rx = e.clientX - rect.left - rect.width / 2;
      const ry = e.clientY - rect.top - rect.height / 2;
      
      // If it's also a card-3d, let the tilt handler do the transform to prevent conflicts
      if (!tgt.classList.contains('card-3d')) {
          tgt.style.transform = `translate(${rx * 0.15}px, ${ry * 0.15}px)`; 
      }
    };

    const handleMagLeave = (e: MouseEvent) => {
      const tgt = e.currentTarget as HTMLElement;
      if (!tgt.classList.contains('card-3d')) {
        tgt.style.transform = 'translate(0, 0)'; 
      }
    };

    const cards3D = document.querySelectorAll('.card-3d');
    cards3D.forEach(card => {
      const el = card as HTMLElement;
      el.addEventListener('mousemove', handleTiltMove);
      el.addEventListener('mouseleave', handleTiltLeave);
    });

    const magNodes = document.querySelectorAll('.mag-tgt');
    magNodes.forEach(node => {
      const el = node as HTMLElement;
      el.addEventListener('mousemove', handleMagMove);
      el.addEventListener('mouseleave', handleMagLeave);
    });

    return () => {
      cards3D.forEach(card => {
        const el = card as HTMLElement;
        el.removeEventListener('mousemove', handleTiltMove);
        el.removeEventListener('mouseleave', handleTiltLeave);
      });
      magNodes.forEach(node => {
        const el = node as HTMLElement;
        el.removeEventListener('mousemove', handleMagMove);
        el.removeEventListener('mouseleave', handleMagLeave);
      });
    };
  }, []);

  return null;
}
