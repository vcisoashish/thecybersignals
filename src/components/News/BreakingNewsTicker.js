'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const BreakingNewsTicker = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const response = await fetch('/api/news?priority=3&limit=5');
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          setBreakingNews(data.data);
        }
      } catch (error) {
        console.error('Error fetching breaking news:', error);
      }
    };

    fetchBreakingNews();
    
    // Refresh breaking news every 5 minutes
    const interval = setInterval(fetchBreakingNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (breakingNews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % breakingNews.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [breakingNews.length]);

  if (!breakingNews.length || !isVisible) {
    return null;
  }

  const currentNews = breakingNews[currentIndex];

  return (
    <div className="w-full bg-red-600 dark:bg-red-700 text-white relative overflow-hidden">
      <div className="flex items-center">
        {/* Breaking News Label */}
        <div className="flex-shrink-0 bg-white text-red-600 px-4 py-2 font-bold text-sm uppercase tracking-wide">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            Breaking
          </span>
        </div>

        {/* News Content */}
        <div className="flex-1 px-4 py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <Link
              href={currentNews.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-semibold mr-2">
                {currentNews.source}:
              </span>
              <span>{currentNews.title}</span>
              <span className="mx-4 text-red-200">•</span>
              <span className="text-red-200 text-sm">
                {new Date(currentNews.publishedAt).toLocaleTimeString()}
              </span>
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4">
          {breakingNews.length > 1 && (
            <div className="flex items-center gap-1">
              {breakingNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-red-300'
                  }`}
                />
              ))}
            </div>
          )}
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-red-200 hover:text-white transition-colors ml-2"
            title="Close breaking news"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Progress bar */}
      {breakingNews.length > 1 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red-800">
          <div
            className="h-full bg-white transition-all duration-[8000ms] ease-linear"
            style={{
              width: `${((currentIndex + 1) / breakingNews.length) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BreakingNewsTicker;