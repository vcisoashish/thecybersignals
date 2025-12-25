export const metadata = {
  title: "Multimedia",
  description: "Cybersecurity videos, podcasts, infographics, and interactive content for security education and awareness.",
};

export default function Multimedia() {
  const videoContent = [
    {
      id: 1,
      title: "Zero Trust Architecture Explained",
      duration: "15:32",
      views: "12.5K",
      category: "Tutorial",
      thumbnail: "🎯"
    },
    {
      id: 2,
      title: "Incident Response Live Demo",
      duration: "28:45",
      views: "8.2K",
      category: "Demo",
      thumbnail: "🚨"
    },
    {
      id: 3,
      title: "Cloud Security Best Practices",
      duration: "22:18",
      views: "15.7K",
      category: "Guide",
      thumbnail: "☁️"
    }
  ];

  const podcastEpisodes = [
    {
      id: 1,
      title: "The Future of AI in Cybersecurity",
      duration: "45:20",
      guest: "Dr. Sarah Chen",
      episode: "Episode 42"
    },
    {
      id: 2,
      title: "Ransomware Trends and Defense",
      duration: "38:15",
      guest: "Mike Rodriguez",
      episode: "Episode 41"
    },
    {
      id: 3,
      title: "Building a Security Culture",
      duration: "52:30",
      guest: "Lisa Thompson",
      episode: "Episode 40"
    }
  ];

  const infographics = [
    {
      id: 1,
      title: "Cybersecurity Threat Landscape 2024",
      category: "Statistics",
      downloads: "2.3K"
    },
    {
      id: 2,
      title: "Incident Response Playbook",
      category: "Process",
      downloads: "1.8K"
    },
    {
      id: 3,
      title: "Security Awareness Training Guide",
      category: "Education",
      downloads: "3.1K"
    }
  ];

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Multimedia
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Multimedia Security Content
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Explore our rich collection of cybersecurity videos, podcasts, infographics, and interactive content designed to educate and inform security professionals.
            </p>
          </div>
        </article>
      </div>

      {/* Content Categories */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Videos</h3>
              <p className="text-sm text-dark/70 dark:text-light/70">Tutorials, demos & webinars</p>
            </div>
            <div className="text-center p-6 bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Podcasts</h3>
              <p className="text-sm text-dark/70 dark:text-light/70">Expert interviews & discussions</p>
            </div>
            <div className="text-center p-6 bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Infographics</h3>
              <p className="text-sm text-dark/70 dark:text-light/70">Visual guides & statistics</p>
            </div>
            <div className="text-center p-6 bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Interactive</h3>
              <p className="text-sm text-dark/70 dark:text-light/70">Simulations & tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8">
            Featured Videos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {videoContent.map(video => (
              <div key={video.id} className="bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light overflow-hidden hover:shadow-lg transition-all ease duration-200 group">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accentDark/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-200">
                  {video.thumbnail}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-semibold">
                      {video.category}
                    </span>
                    <span className="text-sm text-dark/70 dark:text-light/70">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-dark dark:text-light mb-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-dark/70 dark:text-light/70">
                    <span>👁️ {video.views} views</span>
                    <button className="text-accent hover:underline">Watch Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8">
            Latest Podcast Episodes
          </h2>
          
          <div className="space-y-4 mb-16">
            {podcastEpisodes.map(episode => (
              <div key={episode.id} className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accentDark/20 rounded-lg flex items-center justify-center text-2xl mr-4">
                      🎧
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-accent font-semibold mr-3">{episode.episode}</span>
                        <span className="text-sm text-dark/70 dark:text-light/70">{episode.duration}</span>
                      </div>
                      <h3 className="font-bold text-dark dark:text-light mb-1 group-hover:text-accent transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-dark/70 dark:text-light/70">
                        Guest: {episode.guest}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-accent text-light rounded-full hover:scale-105 transition-all ease duration-200">
                      ▶️
                    </button>
                    <button className="p-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-light transition-all ease duration-200">
                      📥
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8">
            Security Infographics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {infographics.map(infographic => (
              <div key={infographic.id} className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200 group">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accentDark/20 rounded-lg flex items-center justify-center text-4xl mb-4 group-hover:scale-105 transition-transform duration-200">
                  📊
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-semibold">
                    {infographic.category}
                  </span>
                  <span className="text-sm text-dark/70 dark:text-light/70">
                    📥 {infographic.downloads}
                  </span>
                </div>
                <h3 className="font-bold text-dark dark:text-light mb-4 group-hover:text-accent transition-colors">
                  {infographic.title}
                </h3>
                <button className="w-full px-4 py-2 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Interactive Security Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light dark:bg-dark p-8 rounded-lg border border-solid border-dark dark:border-light text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-dark dark:text-light mb-4">
                Phishing Simulation
              </h3>
              <p className="text-dark/70 dark:text-light/70 mb-6">
                Test your ability to identify phishing attempts with our interactive simulation tool.
              </p>
              <button className="px-6 py-3 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                Start Simulation
              </button>
            </div>

            <div className="bg-light dark:bg-dark p-8 rounded-lg border border-solid border-dark dark:border-light text-center">
              <div className="text-6xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-dark dark:text-light mb-4">
                Password Strength Checker
              </h3>
              <p className="text-dark/70 dark:text-light/70 mb-6">
                Evaluate the strength of your passwords and get recommendations for improvement.
              </p>
              <button className="px-6 py-3 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                Check Password
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}