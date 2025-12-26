'use client';

import { blogs } from "@/.velite/generated";
import Link from "next/link";
import { slug } from "github-slugger";
import { useEffect, useState } from "react";
import NewsletterButton from "@/src/components/Newsletter/NewsletterButton";
import CyberPredictionPopup from "@/src/components/CyberPredictionPopup";
<<<<<<< HEAD
import { getCleanBlogUrl } from "@/src/utils/urlMappings";
=======
<<<<<<< HEAD
import { getCleanBlogUrl } from "@/src/utils/urlMappings";
=======
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
>>>>>>> fc484a5f080adafcedeb8ff6065f630d0c8d4733

// Breaking News Component with dynamic data fetching
const BreakingNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBreakingNews = async () => {
    try {
      const response = await fetch('/api/breaking-news');
      const data = await response.json();
      
      if (data.success && data.news.length > 0) {
        setNewsItems(data.news);
      } else {
        // Fallback news
        setNewsItems([
          {
            title: "Critical Zero-Day Vulnerability Discovered in Popular Enterprise Software",
            time: "2 hours ago",
            category: "Breaking",
            urgent: true
          },
          {
            title: "Major Ransomware Group Targets Healthcare Infrastructure",
            time: "4 hours ago", 
            category: "Threat Alert",
            urgent: true
          },
          {
            title: "New AI-Powered Security Framework Released by NIST",
            time: "6 hours ago",
            category: "Standards",
            urgent: false
          }
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch breaking news:', error);
      // Set fallback news on error
      setNewsItems([
        {
          title: "Cybersecurity Alert: New Threat Landscape Emerging in 2024",
          time: "1 hour ago",
          category: "Alert",
          urgent: true
        },
        {
          title: "Enterprise Security: Zero Trust Implementation Best Practices",
          time: "3 hours ago",
          category: "Guide",
          urgent: false
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBreakingNews();
    // Refresh news every 5 minutes
    const interval = setInterval(fetchBreakingNews, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-red-600 dark:bg-red-700 text-white py-2 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center">
          <span className="bg-white text-red-600 px-3 py-1 rounded text-sm font-bold mr-4 animate-pulse">
            BREAKING
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {loading ? (
                <span>Loading latest cybersecurity news...</span>
              ) : (
                newsItems.map((news, index) => (
                  <span key={index} className="mr-8">
                    <strong>{news.category}:</strong> {news.title} • {news.time}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Compact Blog Directory Component
const BlogDirectory = ({ blogs, onStatsClick }) => {
  // Sort blogs by publication date (most recent first)
  const sortedBlogs = blogs
    .filter(blog => blog.isPublished)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Group blogs by category
  const blogsByCategory = {};
  sortedBlogs.forEach(blog => {
    blog.tags.forEach(tag => {
      const categorySlug = slug(tag);
      if (!blogsByCategory[categorySlug]) {
        blogsByCategory[categorySlug] = [];
      }
      if (!blogsByCategory[categorySlug].some(b => b.slug === blog.slug)) {
        blogsByCategory[categorySlug].push(blog);
      }
    });
  });

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div>
      {/* Trending Topics Section */}
      <div className="mb-6 mt-8">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold text-lg text-red-600 dark:text-red-400 animate-blink">
            🔥 TRENDING:
          </span>
          <div className="flex flex-wrap gap-2">
            <Link href="/blogs/zero-trust-security-architecture-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Zero Trust</Link>
            <Link href="/blogs/sase-sse-security-framework-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">SASE / SSE</Link>
            <Link href="/blogs/ransomware-3-0-evolution-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Ransomware 3.0</Link>
            <Link href="/blogs/ai-security-comprehensive-guide-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">AI Security</Link>
            <Link href="/blogs/insider-threat-detection-prevention-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Insider Threat</Link>
            <Link href="/blogs/quantum-safe-cryptography-guide-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Quantum-Safe</Link>
            <Link href="/blogs/ot-iot-security-industrial-systems-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">OT / IoT Security</Link>
            <Link href="/blogs/supply-chain-attacks-mitigation-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Supply-Chain Attacks</Link>
            <Link href="/blogs/cloud-data-security-best-practices-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Cloud Data Security</Link>
            <Link href="/blogs/encrypted-channel-attacks-defense-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Encrypted-Channel Attacks</Link>
            <Link href="/blogs/identity-first-security-strategy-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Identity-First Security</Link>
            <Link href="/blogs/api-microservice-abuse-protection-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">API & Micro-service Abuse</Link>
            <Link href="/blogs/ai-dem-digital-experience-monitoring-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">AI-DEM</Link>
            <Link href="/blogs/post-quantum-iam-identity-management-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Post-Quantum IAM</Link>
            <Link href="/blogs/responsible-ai-cybersecurity-ethics-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Responsible AI</Link>
            <Link href="/blogs/lotl-living-off-the-land-attacks-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">LotL</Link>
            <Link href="/blogs/ethical-hacking-penetration-testing-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Ethical hacking</Link>
            <Link href="/blogs/security-research-vulnerability-discovery-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Security research</Link>
            <Link href="/blogs/ai-in-security-machine-learning-defense-2024" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">AI in Security</Link>
            <Link href="/blogs/cybersecurity-predictions-2026-ai-driven-threat-landscape" className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">Cyber strategy 2026</Link>
          </div>
        </div>
      </div>

      {/* Statistics Banner */}
      <div className="mb-6">
        <div 
          className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 text-white rounded-lg p-3 cursor-pointer hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-800 dark:hover:to-cyan-800 transition-all duration-200 group shadow-lg"
          onClick={onStatsClick}
          title="Click to see 2025 Cyber Predictions by Ashish Srivastava"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="bg-white text-blue-600 px-3 py-1 rounded text-xs font-bold mr-3 animate-pulse">
                2026 PREDICTIONS
              </span>
              <p className="text-xs font-medium group-hover:text-blue-100 transition-colors">
                📚 {sortedBlogs.length} Articles | 🏷️ {Object.keys(blogsByCategory).length} Categories
              </p>
            </div>
            <div className="flex items-center text-xs opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="mr-1">✨</span>
              <span className="hidden sm:inline">Click for insights</span>
              <span className="sm:hidden">Click</span>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Quick Navigation */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link 
            href="/categories/offensive-operations"
            className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
          >
            <span className="font-medium text-sm group-hover:text-accent transition-colors">
              Offensive Operations
            </span>
          </Link>
          <Link 
            href="/categories/ai-security"
            className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
          >
            <span className="font-medium text-sm group-hover:text-accent transition-colors">
              AI Security & Adversarial ML
            </span>
          </Link>
          <Link 
            href="/categories/cloud-security"
            className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
          >
            <span className="font-medium text-sm group-hover:text-accent transition-colors">
              Cloud & Infrastructure Defense
            </span>
          </Link>
          <Link 
            href="/categories/quantum-cryptography"
            className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
          >
            <span className="font-medium text-sm group-hover:text-accent transition-colors">
              Quantum & Future Encryption
            </span>
          </Link>
          <Link 
            href="/categories/news"
            className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
          >
            <span className="font-medium text-sm group-hover:text-accent transition-colors">
              Cyber Briefing (News & Intel)
            </span>
          </Link>
          <Link 
            href="/categories/cybersecurity"
            className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
          >
            <span className="font-medium text-sm group-hover:text-accent transition-colors">
              Strategy, Law & Compliance
            </span>
          </Link>
          <Link 
            href="/categories/cyber-signal-academy"
            className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
          >
            <span className="font-medium text-sm group-hover:text-accent transition-colors">
              Cyber-Signal-Academy
            </span>
          </Link>
        </div>
      </div>

      {/* Compact Recent Articles Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Latest Articles</h2>
        <div className="space-y-2">
          {sortedBlogs.slice(0, 5).map((blog, index) => (
            <div key={blog.slug} className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-accent hover:shadow-md transition-all duration-200 group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded-full font-medium">
                      #{index + 1}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(blog.publishedAt)}
                    </span>
                    {blog.tags.slice(0, 1).map(tag => (
                      <Link 
                        key={tag}
                        href={`/categories/${slug(tag)}`}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
<<<<<<< HEAD
                  <Link href={getCleanBlogUrl(blog.slug)} className="group-hover:text-accent transition-colors">
=======
<<<<<<< HEAD
                  <Link href={getCleanBlogUrl(blog.slug)} className="group-hover:text-accent transition-colors">
=======
                  <Link href={`/blogs/${blog.slug}`} className="group-hover:text-accent transition-colors">
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
>>>>>>> fc484a5f080adafcedeb8ff6065f630d0c8d4733
                    <h3 className="text-sm font-semibold mb-1 line-clamp-1">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-1 mb-1">
                    {blog.description}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">By {blog.author}</span>
                </div>
                <div className="flex-shrink-0">
                  <Link 
<<<<<<< HEAD
                    href={getCleanBlogUrl(blog.slug)}
=======
<<<<<<< HEAD
                    href={getCleanBlogUrl(blog.slug)}
=======
                    href={`/blogs/${blog.slug}`}
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
>>>>>>> fc484a5f080adafcedeb8ff6065f630d0c8d4733
                    className="inline-flex items-center px-2 py-1 bg-accent text-white rounded text-xs font-medium hover:bg-accent/90 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Articles by Category */}
      <div className="space-y-6">
        {Object.entries(blogsByCategory)
          .sort(([a], [b]) => a.localeCompare(b))
          .slice(0, 4)
          .map(([category, categoryBlogs]) => (
            <div key={category} className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold capitalize">
                  {category.replace(/-/g, ' ')} 
                  <span className="text-xs font-normal text-gray-500 ml-1">
                    ({categoryBlogs.length})
                  </span>
                </h2>
                <Link 
                  href={`/categories/${category}`}
                  className="text-accent hover:text-accent/80 text-xs font-medium"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {categoryBlogs.slice(0, 3).map(blog => (
                  <div key={blog.slug} className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-accent hover:shadow-md transition-all duration-200 group">
                    <div className="p-3">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(blog.publishedAt)}
                        </span>
                      </div>
<<<<<<< HEAD
                      <Link href={getCleanBlogUrl(blog.slug)} className="group-hover:text-accent transition-colors">
=======
<<<<<<< HEAD
                      <Link href={getCleanBlogUrl(blog.slug)} className="group-hover:text-accent transition-colors">
=======
                      <Link href={`/blogs/${blog.slug}`} className="group-hover:text-accent transition-colors">
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
>>>>>>> fc484a5f080adafcedeb8ff6065f630d0c8d4733
                        <h3 className="font-semibold mb-1 line-clamp-2 text-xs">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-2 mb-2">
                        {blog.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {blog.author}
                        </span>
                        <Link 
<<<<<<< HEAD
                          href={getCleanBlogUrl(blog.slug)}
=======
<<<<<<< HEAD
                          href={getCleanBlogUrl(blog.slug)}
=======
                          href={`/blogs/${blog.slug}`}
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
>>>>>>> fc484a5f080adafcedeb8ff6065f630d0c8d4733
                          className="text-xs text-accent hover:text-accent/80 font-medium"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Compact Footer CTA */}
      <div className="mt-8 text-center bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-4">
        <h3 className="text-sm font-semibold mb-1">Stay Updated</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2 text-xs">
          Get cybersecurity insights delivered to your inbox
        </p>
        <NewsletterButton 
          className="bg-accent text-white px-4 py-1.5 rounded text-xs hover:bg-accent/90 transition-colors"
          text="Subscribe"
          source="homepage-footer"
          showInput={true}
          inputPlaceholder="Enter your email"
        />
      </div>
    </div>
  );
};

// Cyber Signal Journal Component
const CyberSignalJournal = ({ blogs }) => {
  // Get featured/pinned blogs (latest 5 from different categories)
  const featuredBlogs = blogs
    .filter(blog => blog.isPublished)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 5);

  const journalMessages = [
    {
      id: 1,
      type: "alert",
      title: "Critical Security Advisory",
      message: "New zero-day exploits targeting enterprise infrastructure. Immediate patching recommended.",
      timestamp: "2 hours ago",
      priority: "high"
    },
    {
      id: 2,
      type: "insight",
      title: "AI Security Trend",
      message: "Machine learning models increasingly targeted by adversarial attacks. Defense strategies evolving.",
      timestamp: "6 hours ago",
      priority: "medium"
    },
    {
      id: 3,
      type: "prediction",
      title: "Cybersecurity Prediction 2026 by Cyber Signal",
      message: "Advanced AI-driven threat actors will dominate the landscape, requiring quantum-resistant defenses and autonomous security systems.",
      timestamp: "1 day ago",
      priority: "medium",
      author: "Ashish Srivastava",
      authorLink: "/blogs/cybersecurity-predictions-2026-ai-driven-threat-landscape"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-4 sticky top-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
        <h2 className="text-lg font-bold text-accent">Cyber Signal Journal</h2>
      </div>

      {/* Priority Messages */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Priority Signals</h3>
        <div className="space-y-3">
          {journalMessages.map(msg => (
            msg.type === 'prediction' && msg.authorLink ? (
              <Link key={msg.id} href={msg.authorLink} className="block">
                <div className={`p-3 rounded-lg border-l-4 cursor-pointer hover:shadow-md transition-all duration-200 ${
                  msg.priority === 'high' 
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-500 hover:bg-red-100 dark:hover:bg-red-900/30' 
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                }`}>
                  <div className="flex items-start justify-between mb-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      msg.priority === 'high' 
                        ? 'bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300' 
                        : 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300'
                    }`}>
                      {msg.type.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{msg.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-1">{msg.message}</p>
                  {msg.author && (
                    <p className="text-xs text-gray-500 italic">— {msg.author}</p>
                  )}
                </div>
              </Link>
            ) : (
              <div key={msg.id} className={`p-3 rounded-lg border-l-4 ${
                msg.priority === 'high' 
                  ? 'bg-red-50 dark:bg-red-900/20 border-red-500' 
                  : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
              }`}>
                <div className="flex items-start justify-between mb-1">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    msg.priority === 'high' 
                      ? 'bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300' 
                      : 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300'
                  }`}>
                    {msg.type.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-500">{msg.timestamp}</span>
                </div>
                <h4 className="text-sm font-semibold mb-1">{msg.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-1">{msg.message}</p>
                {msg.author && (
                  <p className="text-xs text-gray-500 italic">— {msg.author}</p>
                )}
              </div>
            )
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Featured Articles</h3>
        <div className="space-y-3">
          {featuredBlogs.map((blog, index) => (
            <div key={blog.slug} className="group">
<<<<<<< HEAD
              <Link href={getCleanBlogUrl(blog.slug)} className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-accent/5 hover:border-accent border border-transparent transition-all duration-200">
=======
<<<<<<< HEAD
              <Link href={getCleanBlogUrl(blog.slug)} className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-accent/5 hover:border-accent border border-transparent transition-all duration-200">
=======
              <Link href={`/blogs/${blog.slug}`} className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-accent/5 hover:border-accent border border-transparent transition-all duration-200">
>>>>>>> ad7c74605570f2289438cce6c385eca92034adfd
>>>>>>> fc484a5f080adafcedeb8ff6065f630d0c8d4733
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">#{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1 line-clamp-2 group-hover:text-accent transition-colors">
                      {blog.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{formatDate(blog.publishedAt)}</span>
                      <span>•</span>
                      <span>{blog.author}</span>
                    </div>
                    {blog.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="inline-block mt-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Intelligence Brief</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-2 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg">
            <div className="text-lg font-bold text-red-600 dark:text-red-400">847</div>
            <div className="text-xs text-red-700 dark:text-red-300">Active Threats</div>
          </div>
          <div className="text-center p-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">99.2%</div>
            <div className="text-xs text-green-700 dark:text-green-300">Detection Rate</div>
          </div>
          <div className="text-center p-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">24/7</div>
            <div className="text-xs text-blue-700 dark:text-blue-300">Monitoring</div>
          </div>
          <div className="text-center p-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400">156</div>
            <div className="text-xs text-purple-700 dark:text-purple-300">Countries</div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-4 p-3 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg text-center">
        <h4 className="text-sm font-semibold mb-1">Need Expert Consultation?</h4>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
          Connect with our cybersecurity specialists
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-accent text-white px-3 py-1.5 rounded text-xs hover:bg-accent/90 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleStatsClick = () => {
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem('cyberPredictionPopupShown');
    if (!alreadyShown) {
      setShowPopup(true);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <BreakingNews />
      <div className="w-full max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
          {/* Main Content - Left Side (Takes 4/5 of the space) */}
          <div className="lg:col-span-4 px-5 sm:px-10">
            <BlogDirectory blogs={blogs} onStatsClick={handleStatsClick} />
          </div>
          
          {/* Cyber Signal Journal - Right Side (Takes 1/5 of the space) */}
          <div className="lg:col-span-1 pr-5 sm:pr-10">
            <CyberSignalJournal blogs={blogs} />
          </div>
        </div>
      </div>
      
      {/* Cyber Prediction Popup */}
      {showPopup && <CyberPredictionPopup onClose={() => setShowPopup(false)} />}
    </main>
  )
}