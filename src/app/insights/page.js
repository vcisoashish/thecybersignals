import { blogs } from "@/.velite/generated";
import { sortBlogs } from "@/src/utils";
import FeaturedPosts from "@/src/components/Home/FeaturedPosts";
import RecentPosts from "@/src/components/Home/RecentPosts";

export const metadata = {
  title: "Insights",
  description: "Deep cybersecurity insights, analysis, and expert perspectives on the latest threats, trends, and security strategies.",
};

export default function Insights() {
  const sortedBlogs = sortBlogs(blogs);
  const insightBlogs = sortedBlogs.filter(blog => 
    blog.tags.some(tag => 
      ['cybersecurity', 'security', 'analysis', 'insights', 'trends'].includes(tag.toLowerCase())
    )
  );

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Insights
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Cybersecurity Insights & Analysis
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Expert analysis, threat intelligence, and strategic insights into the evolving cybersecurity landscape. Stay ahead of emerging threats and security trends.
            </p>
          </div>
        </article>
      </div>

      <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light">
            <h3 className="text-xl font-bold text-dark dark:text-light mb-4">Threat Intelligence</h3>
            <p className="text-dark/70 dark:text-light/70 mb-4">
              Latest threat vectors, attack patterns, and adversary tactics targeting organizations worldwide.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">APT Groups</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Malware</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Zero-Days</span>
            </div>
          </div>

          <div className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light">
            <h3 className="text-xl font-bold text-dark dark:text-light mb-4">Industry Analysis</h3>
            <p className="text-dark/70 dark:text-light/70 mb-4">
              Comprehensive analysis of cybersecurity trends across different industries and sectors.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Finance</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Healthcare</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Government</span>
            </div>
          </div>

          <div className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light">
            <h3 className="text-xl font-bold text-dark dark:text-light mb-4">Strategic Perspectives</h3>
            <p className="text-dark/70 dark:text-light/70 mb-4">
              Executive-level insights on cybersecurity strategy, risk management, and business impact.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Risk Assessment</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Compliance</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">ROI</span>
            </div>
          </div>
        </div>
      </section>

      {insightBlogs.length > 0 && (
        <section className="w-full mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dark dark:text-light mb-8">
            Latest Insights
          </h2>
          <FeaturedPosts blogs={insightBlogs.slice(0, 3)} />
        </section>
      )}
    </main>
  );
}