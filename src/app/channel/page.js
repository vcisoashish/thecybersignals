export const metadata = {
  title: "Channel",
  description: "The Cyber Signals Channel - Your hub for cybersecurity content, live streams, and interactive security discussions.",
};

export default function Channel() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Channel
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                The Cyber Signals Channel
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Your premier destination for cybersecurity content, live discussions, expert interviews, and interactive security education.
            </p>
          </div>
        </article>
      </div>

      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-light dark:bg-dark p-8 rounded-lg border border-solid border-dark dark:border-light">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">LIVE</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">Live Streams</h3>
                  <p className="text-dark/70 dark:text-light/70">Weekly cybersecurity discussions</p>
                </div>
              </div>
              <p className="text-dark dark:text-light mb-4">
                Join our weekly live streams featuring expert discussions on the latest cybersecurity threats, 
                defense strategies, and industry trends.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Threat Analysis</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Q&A Sessions</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Expert Panels</span>
              </div>
            </div>

            <div className="bg-light dark:bg-dark p-8 rounded-lg border border-solid border-dark dark:border-light">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">📺</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">Video Content</h3>
                  <p className="text-dark/70 dark:text-light/70">Educational cybersecurity videos</p>
                </div>
              </div>
              <p className="text-dark dark:text-light mb-4">
                Comprehensive video tutorials, case studies, and deep-dive analyses of cybersecurity 
                incidents and defense mechanisms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Tutorials</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Case Studies</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Demos</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8">
              Upcoming Shows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light">
                <div className="text-accent font-bold text-lg mb-2">This Week</div>
                <h4 className="font-bold text-dark dark:text-light mb-2">Zero Trust Architecture Deep Dive</h4>
                <p className="text-sm text-dark/70 dark:text-light/70 mb-4">
                  Exploring implementation strategies and best practices for zero trust security models.
                </p>
                <div className="text-sm text-accent">Wednesday, 8:00 PM EST</div>
              </div>

              <div className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light">
                <div className="text-accent font-bold text-lg mb-2">Next Week</div>
                <h4 className="font-bold text-dark dark:text-light mb-2">AI in Cybersecurity Panel</h4>
                <p className="text-sm text-dark/70 dark:text-light/70 mb-4">
                  Industry experts discuss the role of artificial intelligence in modern cybersecurity.
                </p>
                <div className="text-sm text-accent">Friday, 7:30 PM EST</div>
              </div>

              <div className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light">
                <div className="text-accent font-bold text-lg mb-2">Coming Soon</div>
                <h4 className="font-bold text-dark dark:text-light mb-2">Incident Response Workshop</h4>
                <p className="text-sm text-dark/70 dark:text-light/70 mb-4">
                  Interactive workshop on building effective incident response capabilities.
                </p>
                <div className="text-sm text-accent">Date TBA</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-4">
              Subscribe to Our Channel
            </h2>
            <p className="text-dark/70 dark:text-light/70 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest cybersecurity content, get notified about live streams, 
              and join our growing community of security professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                Subscribe Now
              </button>
              <button className="px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-light transition-all ease duration-200">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}