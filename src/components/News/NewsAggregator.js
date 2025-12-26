'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const NewsAggregator = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lastUpdated, setLastUpdated] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const categories = [
    { id: 'all', name: 'All News', icon: '📰' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'breach', name: 'Breaches', icon: '🚨' },
    { id: 'vulnerability', name: 'Vulnerabilities', icon: '🔍' },
    { id: 'ransomware', name: 'Ransomware', icon: '🔐' }
  ];

  const fetchNews = useCallback(async (category = 'all', showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        category: category,
        limit: '30'
      });

      const response = await fetch(`/api/news?${params}`);
      const data = await response.json();

      if (data.success) {
        setNews(data.data);
        setLastUpdated(new Date(data.meta.lastUpdated));
      } else {
        throw new Error(data.error || 'Failed to fetch news');
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory, fetchNews]);

  // Auto-refresh every 15 minutes
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchNews(selectedCategory, false); // Silent refresh
    }, 15 * 60 * 1000); // 15 minutes

    return () => clearInterval(interval);
  }, [selectedCategory, autoRefresh, fetchNews]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRefresh = () => {
    fetchNews(selectedCategory);
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 3:
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            🔥 High Priority
          </span>
        );
      case 2:
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            ⚡ Medium Priority
          </span>
        );
      default:
        return null;
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - new Date(date)) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  const getCategoryIcon = (category) => {
    const categoryMap = {
      cybersecurity: '🔒',
      ai: '🤖',
      quantum: '⚛️',
      breach: '🚨',
      vulnerability: '🔍',
      ransomware: '🔐',
      malware: '🦠',
      phishing: '🎣',
      'zero-day': '💥',
      apt: '🎯'
    };
    return categoryMap[category] || '📰';
  };

  if (loading && news.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="mb-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-5 sm:px-10">
      {/* Header with controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light">
            Latest News
          </h2>
          {lastUpdated && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 transition-colors"
          >
            <span className={loading ? 'animate-spin' : ''}>🔄</span>
            Refresh
          </button>
          
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded"
            />
            Auto-refresh
          </label>
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-accent text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Error state */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
            <span>⚠️</span>
            <span className="font-medium">Error loading news</span>
          </div>
          <p className="text-red-600 dark:text-red-300 text-sm mt-1">{error}</p>
          <button
            onClick={handleRefresh}
            className="mt-2 text-red-700 dark:text-red-400 underline text-sm hover:no-underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* News articles */}
      {news.length > 0 ? (
        <div className="space-y-6">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>{getCategoryIcon(article.category)}</span>
                  <span className="font-medium">{article.source}</span>
                  <span>•</span>
                  <span>{formatTimeAgo(article.publishedAt)}</span>
                </div>
                {getPriorityBadge(article.priority)}
              </div>
              
              <h3 className="text-lg font-semibold text-dark dark:text-light mb-3 leading-tight">
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {article.title}
                </Link>
              </h3>
              
              {article.description && (
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 text-sm font-medium flex items-center gap-1"
                >
                  Read more
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : !loading && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📰</div>
          <h3 className="text-xl font-bold text-dark dark:text-light mb-2">
            No news articles found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {selectedCategory === 'all' 
              ? "We're working on fetching the latest news. Please try refreshing."
              : `No articles found for "${categories.find(c => c.id === selectedCategory)?.name}". Try a different category.`
            }
          </p>
          <button
            onClick={handleRefresh}
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Refresh News
          </button>
        </div>
      )}

      {/* Load more button */}
      {news.length >= 30 && (
        <div className="text-center mt-8">
          <button
            onClick={() => fetchNews(selectedCategory)}
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Load More News
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsAggregator;