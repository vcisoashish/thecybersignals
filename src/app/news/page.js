'use client';

import { useState, useEffect } from 'react';
import NewsAggregator from '@/src/components/News/NewsAggregator';
import NewsletterButton from "@/src/components/Newsletter/NewsletterButton";

export default function News() {
  const [stats, setStats] = useState({
    totalArticles: 0,
    lastUpdate: null,
    categories: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/news?limit=1');
        const data = await response.json();
        
        if (data.success) {
          setStats({
            totalArticles: data.meta.total,
            lastUpdate: data.meta.lastUpdated,
            categories: 7 // We have 7 categories
          });
        }
      } catch (error) {
        console.error('Error fetching news stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Live News Feed
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Real-Time Cybersecurity News
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Stay ahead with automatically updated cybersecurity, AI, and quantum computing news from trusted sources worldwide.
            </p>
            
            {/* Live stats */}
            <div className="flex flex-wrap gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📊</span>
                <span>{stats.totalArticles}+ Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏷️</span>
                <span>{stats.categories} Categories</span>
              </div>
              {stats.lastUpdate && (
                <div className="flex items-center gap-2">
                  <span>🕒</span>
                  <span>Updated {new Date(stats.lastUpdate).toLocaleTimeString()}</span>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>

      {/* News Categories Overview */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            News Categories
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark/20 dark:border-light/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-bold text-dark dark:text-light mb-1 text-sm">Cybersecurity</h3>
              <p className="text-xs text-dark/70 dark:text-light/70">Security threats & defense</p>
            </div>
            
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark/20 dark:border-light/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-bold text-dark dark:text-light mb-1 text-sm">AI & ML</h3>
              <p className="text-xs text-dark/70 dark:text-light/70">Artificial intelligence news</p>
            </div>
            
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark/20 dark:border-light/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-bold text-dark dark:text-light mb-1 text-sm">Quantum</h3>
              <p className="text-xs text-dark/70 dark:text-light/70">Quantum computing advances</p>
            </div>
            
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark/20 dark:border-light/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">🚨</div>
              <h3 className="font-bold text-dark dark:text-light mb-1 text-sm">Breaches</h3>
              <p className="text-xs text-dark/70 dark:text-light/70">Data breach reports</p>
            </div>
            
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark/20 dark:border-light/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-bold text-dark dark:text-light mb-1 text-sm">Vulnerabilities</h3>
              <p className="text-xs text-dark/70 dark:text-light/70">CVE & security flaws</p>
            </div>
            
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark/20 dark:border-light/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">🔐</div>
              <h3 className="font-bold text-dark dark:text-light mb-1 text-sm">Ransomware</h3>
              <p className="text-xs text-dark/70 dark:text-light/70">Ransomware attacks</p>
            </div>
            
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark/20 dark:border-light/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">📰</div>
              <h3 className="font-bold text-dark dark:text-light mb-1 text-sm">All News</h3>
              <p className="text-xs text-dark/70 dark:text-light/70">Complete feed</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Aggregator */}
      <section className="w-full mt-8">
        <NewsAggregator />
      </section>

      {/* Newsletter Signup */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-4xl mx-auto bg-accent/10 dark:bg-accentDark/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">
            Never Miss Critical Security News
          </h2>
          <p className="text-dark/70 dark:text-light/70 mb-6">
            Get real-time cybersecurity alerts and breaking news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <NewsletterButton 
              className="px-6 py-3 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200"
              text="Subscribe to News Alerts"
              source="news-page-alerts"
              showInput={true}
              inputPlaceholder="Enter email for security news alerts"
            />
          </div>
          
          <div className="flex justify-center gap-6 mt-6 text-sm text-dark/60 dark:text-light/60">
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Real-time alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Privacy protected</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>Mobile optimized</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}