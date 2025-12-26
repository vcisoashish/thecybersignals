'use client';

import { blogs } from "@/.velite/generated";
import Link from "next/link";
import { slug } from "github-slugger";
import { useState } from "react";
import NewsletterButton from "@/src/components/Newsletter/NewsletterButton";

// Simple Breaking News Component
const BreakingNews = () => {
  return (
    <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium">
      <span className="inline-block mr-2">🔴 BREAKING:</span>
      Breaking: Oktacron - Cyber Security RSS News Aggregator • 1 hours ago
    </div>
  );
};

// Simple Blog Directory Component
const BlogDirectory = ({ blogs }) => {
  const sortedBlogs = blogs
    .filter(blog => blog.isPublished !== false)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const blogsByCategory = {};
  sortedBlogs.forEach(blog => {
    if (blog.tags && Array.isArray(blog.tags)) {
      blog.tags.forEach(tag => {
        if (tag) {
          const categorySlug = slug(tag);
          if (!blogsByCategory[categorySlug]) {
            blogsByCategory[categorySlug] = [];
          }
          if (!blogsByCategory[categorySlug].some(b => b.slug === blog.slug)) {
            blogsByCategory[categorySlug].push(blog);
          }
        }
      });
    }
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const trendingTopics = [
    "Zero Trust", "SASE / SSE", "Ransomware 3.0", "AI Security", "Insider Threat",
    "Quantum-Safe", "OT / IoT Security", "Supply-Chain Attacks", "Cloud Data Security",
    "Encrypted-Channel Attacks", "Identity-First Security", "API & Micro-service Abuse",
    "AI-DEM", "Post-Quantum IAM", "Responsible AI", "LotL", "Ethical hacking",
    "Security research", "AI in Security", "Cyber strategy 2026"
  ];

  return (
    <div className="space-y-8">
      {/* Trending Topics */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-accent">🔥 TRENDING:</h2>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map(topic => (
            <span key={topic} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm hover:bg-accent/20 transition-colors cursor-pointer">
              {topic}
            </span>
          ))}
        </div>
        <div className="mt-4 text-center">
          <span className="bg-accent text-white px-4 py-2 rounded-lg font-bold">2026 PREDICTIONS</span>
        </div>
      </div>

      {/* Stats */}
      <div className="text-center bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-2xl font-bold text-accent">{blogs.length}</span>
          <span className="text-gray-600 dark:text-gray-300">Articles</span>
          <span className="text-gray-400">|</span>
          <span className="text-2xl font-bold text-accent">{Object.keys(blogsByCategory).length}</span>
          <span className="text-gray-600 dark:text-gray-300">Categories</span>
        </div>
        <button className="bg-gradient-to-r from-accent to-accent/80 text-white px-6 py-2 rounded-lg hover:from-accent/90 hover:to-accent/70 transition-all duration-200 font-medium">
          ✨ Click for insights
        </button>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(blogsByCategory)
            .sort(([a], [b]) => a.localeCompare(b))
            .slice(0, 6)
            .map(([category, categoryBlogs]) => (
              <Link 
                key={category}
                href={`/categories/${category}`}
                className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-accent hover:shadow-lg transition-all duration-200 group"
              >
                <h3 className="font-semibold capitalize group-hover:text-accent transition-colors">
                  {category.replace(/-/g, ' ')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {categoryBlogs.length} articles
                </p>
              </Link>
            ))}
        </div>
      </div>

      {/* Latest Articles */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="space-y-6">
          {sortedBlogs.slice(0, 5).map((blog, index) => (
            <div key={blog.slug} className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-200 group">
              <div className="flex items-start gap-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold">
                  #{index + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{formatDate(blog.publishedAt)}</span>
                    {blog.tags && blog.tags[0] && (
                      <>
                        <span>•</span>
                        <Link 
                          href={`/categories/${slug(blog.tags[0])}`}
                          className="text-accent hover:text-accent/80"
                        >
                          {blog.tags[0]}
                        </Link>
                      </>
                    )}
                  </div>
                  <Link href={`/blogs/${blog.slug}`} className="group-hover:text-accent transition-colors">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      By {blog.author || 'The Cyber Signals'}
                    </span>
                    <Link 
                      href={`/blogs/${blog.slug}`}
                      className="text-accent hover:text-accent/80 text-sm font-medium"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simple Cyber Signal Journal Component
const CyberSignalJournal = ({ blogs }) => {
  const journalMessages = [
    {
      id: 1,
      type: "alert",
      title: "Critical Security Advisory",
      message: "New zero-day exploits targeting enterprise infrastructure. Immediate patching recommended.",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      type: "insight",
      title: "AI Security Trend",
      message: "Machine learning models increasingly targeted by adversarial attacks. Defense strategies evolving.",
      timestamp: "6 hours ago"
    },
    {
      id: 3,
      type: "prediction",
      title: "Cybersecurity Prediction 2026 by Cyber Signal",
      message: "Advanced AI-driven threat actors will dominate the landscape, requiring quantum-resistant defenses and autonomous security systems.",
      author: "Ashish Srivastava",
      timestamp: "1 day ago"
    }
  ];

  const featuredBlogs = blogs
    .filter(blog => blog.isPublished !== false)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Cyber Signal Journal</h3>
        
        <div className="space-y-4 mb-6">
          <h4 className="font-medium text-accent">Priority Signals</h4>
          {journalMessages.map(msg => (
            <div key={msg.id} className="border-l-4 border-accent/30 pl-4 py-2">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  msg.type === 'alert' ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' :
                  msg.type === 'insight' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' :
                  'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
                }`}>
                  {msg.type.toUpperCase()}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{msg.timestamp}</span>
              </div>
              <h5 className="font-medium text-sm mb-1">{msg.title}</h5>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{msg.message}</p>
              {msg.author && (
                <p className="text-xs text-accent mt-1">— {msg.author}</p>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-accent">Featured Articles</h4>
          {featuredBlogs.map((blog, index) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="block hover:bg-gray-50 dark:hover:bg-gray-800 rounded p-2 -m-2 transition-colors">
              <div className="flex items-start gap-2">
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                  #{index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h5 className="font-medium text-sm line-clamp-2 mb-1">{blog.title}</h5>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{blog.author || 'thecybersignals'}</span>
                  </div>
                  {blog.tags && blog.tags[0] && (
                    <span className="inline-block mt-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                      {blog.tags[0]}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-medium text-accent mb-3">Intelligence Brief</h4>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-3">
              <div className="text-lg font-bold text-red-600 dark:text-red-400">847</div>
              <div className="text-xs text-red-700 dark:text-red-300">Active Threats</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-3">
              <div className="text-lg font-bold text-green-600 dark:text-green-400">99.2%</div>
              <div className="text-xs text-green-700 dark:text-green-300">Detection Rate</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-3">
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">24/7</div>
              <div className="text-xs text-blue-700 dark:text-blue-300">Monitoring</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-3">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">156</div>
              <div className="text-xs text-purple-700 dark:text-purple-300">Countries</div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg text-center">
          <h4 className="text-sm font-semibold mb-2">Need Expert Consultation?</h4>
          <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
            Connect with our cybersecurity specialists
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-accent text-white px-4 py-2 rounded text-xs hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <BreakingNews />
      <div className="w-full max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
          <div className="lg:col-span-4 px-5 sm:px-10">
            <BlogDirectory blogs={blogs} />
          </div>
          <div className="lg:col-span-1 pr-5 sm:pr-10">
            <CyberSignalJournal blogs={blogs} />
          </div>
        </div>
      </div>
    </main>
  );
}
