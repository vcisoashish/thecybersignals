'use client';

import { useEffect, useState } from 'react';

export default function AISecurityBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: 'url(/blogs/cybersecurity-predictions-2026-flowchart.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        onError={(e) => {
          // Fallback if image doesn't load
          e.target.style.display = 'none';
        }}
      ></div>
      
      {/* Light overlay to ensure text readability without being too dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/15 to-slate-900/20"></div>
      
      {/* Base Grid Pattern - much more subtle */}
      <div className="absolute inset-0 ai-security-bg opacity-10"></div>
      
      {/* Neural Network Nodes - very subtle */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/20 rounded-full neural-pulse"></div>
      <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-cyan-400/15 rounded-full neural-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-blue-500/25 rounded-full neural-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-300/20 rounded-full neural-pulse delay-500"></div>
      
      {/* Threat Indicators - very subtle */}
      <div className="absolute top-24 right-24 w-1.5 h-1.5 bg-red-400/15 rounded-full threat-pulse"></div>
      <div className="absolute bottom-40 left-24 w-2 h-2 bg-orange-400/12 rounded-full threat-pulse delay-800"></div>
      <div className="absolute top-1/2 right-12 w-1 h-1 bg-red-500/18 rounded-full threat-pulse delay-1600"></div>
      
      {/* Subtle Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="subtleNeuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.15)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
        </defs>
        
        {/* Subtle connections that don't interfere with the flowchart */}
        <line x1="88" y1="88" x2="200" y2="150" stroke="url(#subtleNeuralGradient)" strokeWidth="1" className="neural-connection" />
        <line x1="calc(100% - 88px)" y1="88" x2="calc(100% - 200px)" y2="150" stroke="url(#subtleNeuralGradient)" strokeWidth="1" className="neural-connection delay-1000" />
        <line x1="168" y1="calc(100% - 88px)" x2="300" y2="calc(100% - 200px)" stroke="url(#subtleNeuralGradient)" strokeWidth="1" className="neural-connection delay-2000" />
      </svg>
      
      {/* Subtle AI Data Streams */}
      <div className="absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/5 to-transparent ai-data-stream"></div>
      <div className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/5 to-transparent ai-data-stream delay-4000"></div>
      
      {/* Vertical Security Barriers - very subtle */}
      <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-blue-400/5 to-transparent security-barrier"></div>
      <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent security-barrier delay-2000"></div>
      
      {/* Floating Binary Code - positioned to not interfere with flowchart text */}
      <div className="absolute top-12 left-12 text-green-400/8 text-xs font-mono binary-float">01001001</div>
      <div className="absolute top-12 right-12 text-blue-400/8 text-xs font-mono binary-float delay-3000">11010110</div>
      <div className="absolute bottom-12 left-12 text-cyan-400/8 text-xs font-mono binary-float delay-6000">10110001</div>
      <div className="absolute bottom-12 right-12 text-green-500/8 text-xs font-mono binary-float delay-9000">01110100</div>
      
      {/* Central Security Shield - positioned to not interfere with main content */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-8 border border-blue-400/10 rounded-full security-shield"></div>
        <div className="absolute top-1 left-1 w-6 h-6 border border-cyan-400/8 rounded-full security-shield delay-1000"></div>
      </div>
      
      {/* Corner AI Processing Indicators */}
      <div className="absolute bottom-8 left-8 w-1 h-4 bg-green-400/15 ai-process"></div>
      <div className="absolute bottom-8 right-8 w-1 h-4 bg-blue-400/15 ai-process delay-1000"></div>
    </div>
  );
}