import { blogs } from "@/.velite/generated";
import { sortBlogs } from "@/src/utils";
import BlogLayoutOne from "@/src/components/Blog/BlogLayoutOne";
import BlogLayoutTwo from "@/src/components/Blog/BlogLayoutTwo";

export const metadata = {
  title: "News",
  description: "Latest cybersecurity news, breaking security incidents, vulnerability disclosures, and industry updates.",
};

export default function News() {
  const sortedBlogs = sortBlogs(blogs);
  const newsBlogs = sortedBlogs.filter(blog => 
    blog.tags.some(tag => 
      ['news', 'breaking', 'incident', 'vulnerability', 'breach', 'alert'].includes(tag.toLowerCase())
    )
  );

  // If no specific news blogs, show recent blogs as news
  const displayBlogs = newsBlogs.length > 0 ? newsBlogs : sortedBlogs;

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Breaking News
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Cybersecurity News & Updates
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Stay informed with the latest cybersecurity news, breaking security incidents, vulnerability disclosures, and critical industry updates.
            </p>
          </div>
        </article>
      </div>

      {/* Breaking News Section */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <h2 className="text-xl font-bold text-red-700 dark:text-red-400">Breaking News</h2>
            </div>
            <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">
              Major Security Incident Affects Global Infrastructure
            </h3>
            <p className="text-dark/70 dark:text-light/70 mb-4">
              A sophisticated cyber attack targeting critical infrastructure has been detected across multiple countries. 
              Security teams are working to assess the impact and implement countermeasures.
            </p>
            <div className="flex items-center text-sm text-red-600 dark:text-red-400">
              <span className="mr-4">🕒 2 hours ago</span>
              <span>🔥 High Priority</span>
            </div>
          </div>

          {/* News Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark dark:border-light text-center">
              <div className="text-2xl mb-2">🚨</div>
              <h3 className="font-bold text-dark dark:text-light mb-1">Security Alerts</h3>
              <p className="text-sm text-dark/70 dark:text-light/70">Critical vulnerabilities & threats</p>
            </div>
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark dark:border-light text-center">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-bold text-dark dark:text-light mb-1">Industry News</h3>
              <p className="text-sm text-dark/70 dark:text-light/70">Business & regulatory updates</p>
            </div>
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark dark:border-light text-center">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-bold text-dark dark:text-light mb-1">Research</h3>
              <p className="text-sm text-dark/70 dark:text-light/70">Latest security research findings</p>
            </div>
            <div className="bg-light dark:bg-dark p-4 rounded-lg border border-solid border-dark dark:border-light text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-dark dark:text-light mb-1">Incidents</h3>
              <p className="text-sm text-dark/70 dark:text-light/70">Breach reports & analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Articles */}
      <section className="w-full mt-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Latest News
          </h2>
          
          {displayBlogs.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {displayBlogs.slice(0, 6).map((blog, index) => (
                <article key={blog.slug} className="group">
                  <BlogLayoutTwo blog={blog} />
                </article>
              ))}
            </div>
          )}

          {displayBlogs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-bold text-dark dark:text-light mb-2">No News Articles Yet</h3>
              <p className="text-dark/70 dark:text-light/70">
                We&apos;re working on bringing you the latest cybersecurity news. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-4xl mx-auto bg-accent/10 dark:bg-accentDark/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">
            Stay Updated with Security News
          </h2>
          <p className="text-dark/70 dark:text-light/70 mb-6">
            Get the latest cybersecurity news and alerts delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-full border border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light"
            />
            <button className="px-6 py-2 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}