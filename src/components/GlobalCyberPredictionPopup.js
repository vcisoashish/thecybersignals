'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CyberPredictionPopup from './CyberPredictionPopup';

export default function GlobalCyberPredictionPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show on homepage
    const isHomePage = pathname === '/';
    
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem('cyberPredictionPopupShown');
    
    // Debug logging
    console.log('GlobalCyberPredictionPopup Debug:', {
      pathname,
      isHomePage,
      alreadyShown,
      shouldShow: isHomePage && !alreadyShown
    });
    
    if (isHomePage && !alreadyShown) {
      console.log('Setting popup timer for 1 second...');
      // Show popup after 1 second on homepage
      const timer = setTimeout(() => {
        console.log('Showing popup now!');
        setShowPopup(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = () => {
    setShowPopup(false);
    // Mark as shown for this session
    sessionStorage.setItem('cyberPredictionPopupShown', 'true');
  };

  if (!showPopup) return null;

  return <CyberPredictionPopup onClose={handleClose} />;
}