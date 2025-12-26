'use client';

import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid Pattern */}
      <div className="absolute inset-0 hacker-bg"></div>
      
      {/* Animated Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/20 to-transparent circuit-pulse"></div>
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/10 to-transparent circuit-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/15 to-transparent circuit-pulse delay-2000"></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/10 to-transparent circuit-pulse delay-500"></div>
      
      {/* Vertical Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/10 to-transparent circuit-pulse delay-1500"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/10 to-transparent circuit-pulse delay-2500"></div>
      
      {/* Data Flow Elements */}
      <div className="absolute top-10 left-0 w-2 h-px bg-green-400/30 data-flow delay-0"></div>
      <div className="absolute top-32 left-0 w-3 h-px bg-green-400/20 data-flow delay-3000"></div>
      <div className="absolute top-64 left-0 w-1 h-px bg-green-400/40 data-flow delay-6000"></div>
      <div className="absolute bottom-32 left-0 w-2 h-px bg-green-400/25 data-flow delay-9000"></div>
      
      {/* Matrix Rain Effect (subtle) */}
      <div className="absolute top-0 left-1/6 w-px h-4 bg-green-400/20 matrix-rain delay-0"></div>
      <div className="absolute top-0 left-2/6 w-px h-3 bg-green-400/15 matrix-rain delay-2000"></div>
      <div className="absolute top-0 left-3/6 w-px h-5 bg-green-400/10 matrix-rain delay-4000"></div>
      <div className="absolute top-0 left-4/6 w-px h-2 bg-green-400/20 matrix-rain delay-6000"></div>
      <div className="absolute top-0 left-5/6 w-px h-4 bg-green-400/15 matrix-rain delay-1000"></div>
    </div>
  );
}