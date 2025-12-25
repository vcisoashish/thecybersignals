export const metadata = {
  title: "Events",
  description: "Cybersecurity conferences, webinars, workshops, and training events. Join the cybersecurity community.",
};

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "CyberSec Summit 2024",
      date: "March 15-17, 2024",
      location: "San Francisco, CA",
      type: "Conference",
      description: "The premier cybersecurity conference bringing together industry leaders, researchers, and practitioners.",
      featured: true
    },
    {
      id: 2,
      title: "Zero Trust Architecture Workshop",
      date: "February 28, 2024",
      location: "Virtual",
      type: "Workshop",
      description: "Hands-on workshop covering zero trust implementation strategies and best practices."
    },
    {
      id: 3,
      title: "Incident Response Training",
      date: "March 5-6, 2024",
      location: "New York, NY",
      type: "Training",
      description: "Comprehensive training program for building effective incident response capabilities."
    },
    {
      id: 4,
      title: "AI Security Webinar Series",
      date: "Every Thursday",
      location: "Virtual",
      type: "Webinar",
      description: "Weekly webinar series exploring the intersection of AI and cybersecurity."
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Cloud Security Deep Dive",
      date: "January 20, 2024",
      location: "Virtual",
      type: "Webinar",
      description: "Comprehensive overview of cloud security challenges and solutions."
    },
    {
      id: 6,
      title: "Threat Hunting Masterclass",
      date: "December 15, 2023",
      location: "Chicago, IL",
      type: "Workshop",
      description: "Advanced techniques for proactive threat hunting and detection."
    }
  ];

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Events
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Cybersecurity Events & Training
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Join the cybersecurity community at conferences, workshops, webinars, and training events. 
              Expand your knowledge and network with industry professionals.
            </p>
          </div>
        </article>
      </div>

      {/* Featured Event */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          {upcomingEvents.filter(event => event.featured).map(event => (
            <div key={event.id} className="bg-gradient-to-r from-accent/20 to-accentDark/20 p-8 rounded-lg border border-accent mb-12">
              <div className="flex items-center mb-4">
                <span className="bg-accent text-light px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Featured Event
                </span>
                <span className="bg-light dark:bg-dark px-3 py-1 rounded-full text-sm font-semibold text-dark dark:text-light">
                  {event.type}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-4">
                {event.title}
              </h2>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="flex items-center text-dark dark:text-light">
                  <span className="mr-2">📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-dark dark:text-light">
                  <span className="mr-2">📍</span>
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="text-dark/70 dark:text-light/70 mb-6 text-lg">
                {event.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                  Register Now
                </button>
                <button className="px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-light transition-all ease duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full mt-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcomingEvents.filter(event => !event.featured).map(event => (
              <div key={event.id} className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <span className="text-sm text-dark/70 dark:text-light/70">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-light mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center text-dark/70 dark:text-light/70 mb-3">
                  <span className="mr-2">📍</span>
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-dark/70 dark:text-light/70 text-sm mb-4">
                  {event.description}
                </p>
                <button className="w-full px-4 py-2 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                  Register
                </button>
              </div>
            ))}
          </div>

          {/* Event Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="text-center p-4 bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-dark dark:text-light mb-1">Conferences</h4>
              <p className="text-sm text-dark/70 dark:text-light/70">Industry summits & keynotes</p>
            </div>
            <div className="text-center p-4 bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light">
              <div className="text-3xl mb-2">🛠️</div>
              <h4 className="font-bold text-dark dark:text-light mb-1">Workshops</h4>
              <p className="text-sm text-dark/70 dark:text-light/70">Hands-on training sessions</p>
            </div>
            <div className="text-center p-4 bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light">
              <div className="text-3xl mb-2">💻</div>
              <h4 className="font-bold text-dark dark:text-light mb-1">Webinars</h4>
              <p className="text-sm text-dark/70 dark:text-light/70">Online presentations & demos</p>
            </div>
            <div className="text-center p-4 bg-light dark:bg-dark rounded-lg border border-solid border-dark dark:border-light">
              <div className="text-3xl mb-2">🎓</div>
              <h4 className="font-bold text-dark dark:text-light mb-1">Training</h4>
              <p className="text-sm text-dark/70 dark:text-light/70">Certification & skill building</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light opacity-75">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <span className="text-sm text-dark/70 dark:text-light/70">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-light mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center text-dark/70 dark:text-light/70 mb-3">
                  <span className="mr-2">📍</span>
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-dark/70 dark:text-light/70 text-sm mb-4">
                  {event.description}
                </p>
                <button className="w-full px-4 py-2 border border-gray-400 text-gray-600 dark:text-gray-400 rounded-full font-semibold">
                  View Recording
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}