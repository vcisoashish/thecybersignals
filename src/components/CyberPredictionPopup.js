'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CyberPredictionPopup({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup with animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as shown for this session
    sessionStorage.setItem('cyberPredictionPopupShown', 'true');
    // Close after animation completes
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div 
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-blue-400/30 rounded-xl p-6 max-w-md mx-4 shadow-2xl relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Content */}
          <div className="text-center">
            {/* Animated icon */}
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center cyber-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Title */}
            <Link 
              href="/blogs/cybersecurity-predictions-2026-ai-driven-threat-landscape"
              onClick={handleClose}
              className="block"
            >
              <h3 className="text-xl font-bold text-white mb-2 cyber-glow hover:text-cyan-200 transition-colors cursor-pointer">
                🔮 Cyber Predictions 2025
              </h3>
            </Link>
            
            {/* Subtitle */}
            <p className="text-blue-200 mb-4 text-sm">
              by <span className="font-semibold text-cyan-300">Ashish Srivastava</span>
            </p>
            
            {/* Description */}
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Discover exclusive cybersecurity predictions and strategic insights for 2025. 
              Navigate the AI-driven threat landscape with expert analysis and actionable intelligence.
            </p>
            
            {/* Action buttons */}
            <div className="flex gap-3 justify-center">
              <Link
                href="/blogs/cybersecurity-predictions-2026-ai-driven-threat-landscape"
                onClick={handleClose}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 cyber-button inline-block text-center"
              >
                Read Full Article
              </Link>
              <button
                onClick={handleClose}
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}