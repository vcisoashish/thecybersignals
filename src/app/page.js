import { blogs } from "@/.velite/generated";
import { sortBlogs } from "@/src/utils";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import Link from "next/link";
import { slug } from "github-slugger";

export default function Home() {
  const sortedBlogs = sortBlogs(blogs);
  
  // Get unique tags for categories
  const allTags = [...new Set(sortedBlogs.flatMap(blog => blog.tags))];
  const topCategories = allTags.slice(0, 8);

  const breakingNews = [
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
  ];

  const quickStats = [
    { label: "Active Threats", value: "2,847", trend: "up" },
    { label: "Vulnerabilities", value: "156", trend: "down" },
    { label: "Security Alerts", value: "23", trend: "up" },
    { label: "Incidents Resolved", value: "891", trend: "up" }
  ];

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <HomeCoverSection blogs={blogs} />

      {/* Breaking News Ticker */}
      <section className="w-full bg-red-600 dark:bg-red-700 text-white py-2 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-3 py-1 rounded text-sm font-bold mr-4 animate-pulse">
              BREAKING
            </span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {breakingNews.map((news, index) => (
                  <span key={index} className="mr-8">
                    <strong>{news.category}:</strong> {news.title} • {news.time}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Dashboard */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-dark dark:text-light mb-6 text-center">
            Cybersecurity Dashboard
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-dark p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-dark dark:text-light">{stat.value}</span>
                  <span className={`ml-2 text-sm ${stat.trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                    {stat.trend === 'up' ? '↗️' : '↘️'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="w-full py-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Featured Articles */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-dark dark:text-light">Featured Articles</h2>
                  <Link href="/insights" className="text-accent hover:underline">View All →</Link>
                </div>
                <FeaturedPosts blogs={sortedBlogs.slice(0, 3)} />
              </div>

              {/* Latest News */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-dark dark:text-light">Latest News</h2>
                  <Link href="/news" className="text-accent hover:underline">View All →</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sortedBlogs.slice(3, 9).map((blog, index) => (
                    <article key={blog.slug || index} className="bg-light dark:bg-dark p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-semibold mr-2">
                          {blog.tags?.[0] || 'News'}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(blog.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <Link href={blog.url || `/blogs/${blog.slug}`}>
                        <h3 className="font-bold text-dark dark:text-light mb-2 hover:text-accent transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {blog.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              
              {/* Security Categories */}
              <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
                <h3 className="text-lg font-bold text-dark dark:text-light mb-4">Security Categories</h3>
                <div className="space-y-2">
                  {topCategories.map((category, index) => (
                    <Link 
                      key={index}
                      href={`/categories/${slug(category)}`}
                      className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                    >
                      <span className="text-dark dark:text-light">{category}</span>
                      <span className="text-sm text-gray-500">
                        {sortedBlogs.filter(blog => blog.tags.includes(category)).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Threat Level Indicator */}
              <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
                <h3 className="text-lg font-bold text-dark dark:text-light mb-4">Current Threat Level</h3>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">HIGH</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Elevated threat activity detected across multiple sectors
                  </p>
                  <Link href="/news" className="text-accent hover:underline text-sm">
                    View Threat Intelligence →
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
                <h3 className="text-lg font-bold text-dark dark:text-light mb-4">Quick Access</h3>
                <div className="space-y-3">
                  <Link href="/features" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                    <span className="mr-3">🛡️</span>
                    <span className="text-dark dark:text-light">Security Tools</span>
                  </Link>
                  <Link href="/cyber-attacks" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                    <span className="mr-3">📅</span>
                    <span className="text-dark dark:text-light">Cyber Attacks</span>
                  </Link>
                  <Link href="/product-reviews" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                    <span className="mr-3">⭐</span>
                    <span className="text-dark dark:text-light">Product Reviews</span>
                  </Link>
                  <Link href="/multimedia" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                    <span className="mr-3">🎥</span>
                    <span className="text-dark dark:text-light">Video Content</span>
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-accent/10 dark:bg-accentDark/10 p-6 rounded-lg border border-accent/20">
                <h3 className="text-lg font-bold text-dark dark:text-light mb-4">Stay Informed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Get the latest cybersecurity news and threat intelligence delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-dark dark:text-light"
                  />
                  <button className="w-full bg-accent text-white py-2 rounded font-semibold hover:bg-accent/90 transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark dark:text-light mb-8 text-center">
            Industry Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Protecting patient data and medical systems</p>
            </div>
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Financial</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Securing financial transactions and data</p>
            </div>
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Industrial</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Critical infrastructure protection</p>
            </div>
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Government</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">National security and public services</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}