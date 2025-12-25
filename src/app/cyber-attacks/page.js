export const metadata = {
  title: "Cyber Attacks",
  description: "Latest cyber attacks, data breaches, ransomware incidents, and security threats. Stay informed about the evolving threat landscape.",
};

export default function CyberAttacks() {
  const recentAttacks = [
    {
      id: 1,
      title: "Major Healthcare Network Hit by Ransomware, 2.3M Patient Records Compromised",
      date: "2 hours ago",
      severity: "Critical",
      category: "Ransomware",
      description: "A sophisticated ransomware attack has crippled operations at one of the nation's largest healthcare networks, affecting 47 hospitals across 12 states.",
      impact: "2.3M patients affected",
      featured: true,
      tags: ["Healthcare", "Ransomware", "Data Breach"]
    },
    {
      id: 2,
      title: "State-Sponsored APT Group Targets Critical Infrastructure with Zero-Day Exploit",
      date: "6 hours ago",
      severity: "High",
      category: "APT",
      description: "Security researchers have identified a new campaign by a state-sponsored threat actor exploiting a previously unknown vulnerability in industrial control systems.",
      impact: "Multiple sectors affected",
      tags: ["APT", "Zero-Day", "Critical Infrastructure"]
    },
    {
      id: 3,
      title: "Financial Services Firm Suffers $50M Loss in Business Email Compromise Attack",
      date: "12 hours ago",
      severity: "High",
      category: "BEC",
      description: "A sophisticated business email compromise attack has resulted in fraudulent wire transfers totaling $50 million from a major financial services company.",
      impact: "$50M financial loss",
      tags: ["BEC", "Financial", "Wire Fraud"]
    },
    {
      id: 4,
      title: "Supply Chain Attack Compromises Popular Software Library Used by Thousands",
      date: "1 day ago",
      severity: "High",
      category: "Supply Chain",
      description: "Malicious code has been discovered in a widely-used open-source library, potentially affecting thousands of applications worldwide.",
      impact: "10,000+ applications affected",
      tags: ["Supply Chain", "Open Source", "Malware"]
    },
    {
      id: 5,
      title: "Cryptocurrency Exchange Loses $120M in DeFi Protocol Exploit",
      date: "2 days ago",
      severity: "High",
      category: "Crypto",
      description: "A major cryptocurrency exchange has fallen victim to a sophisticated exploit targeting its DeFi protocol, resulting in significant financial losses.",
      impact: "$120M stolen",
      tags: ["Cryptocurrency", "DeFi", "Smart Contract"]
    },
    {
      id: 6,
      title: "Government Agency Data Breach Exposes Sensitive Information of 500K Citizens",
      date: "3 days ago",
      severity: "High",
      category: "Data Breach",
      description: "A cybersecurity incident at a federal government agency has resulted in the unauthorized access to personal information of half a million citizens.",
      impact: "500K citizens affected",
      tags: ["Government", "Data Breach", "PII"]
    }
  ];

  const attackCategories = [
    {
      name: "Ransomware",
      count: 847,
      trend: "up",
      icon: "🔒",
      description: "Malware that encrypts files and demands payment"
    },
    {
      name: "Data Breaches",
      count: 623,
      trend: "up",
      icon: "📊",
      description: "Unauthorized access to sensitive information"
    },
    {
      name: "Phishing",
      count: 1205,
      trend: "up",
      icon: "🎣",
      description: "Fraudulent attempts to obtain sensitive information"
    },
    {
      name: "APT Attacks",
      count: 156,
      trend: "down",
      icon: "🎯",
      description: "Advanced persistent threat campaigns"
    },
    {
      name: "Supply Chain",
      count: 89,
      trend: "up",
      icon: "🔗",
      description: "Attacks targeting software supply chains"
    },
    {
      name: "Crypto Attacks",
      count: 234,
      trend: "up",
      icon: "₿",
      description: "Attacks on cryptocurrency platforms"
    }
  ];

  const threatActors = [
    {
      name: "LockBit 3.0",
      type: "Ransomware Group",
      activity: "High",
      recentTargets: "Healthcare, Manufacturing",
      status: "Active"
    },
    {
      name: "APT29 (Cozy Bear)",
      type: "State-Sponsored",
      activity: "Medium",
      recentTargets: "Government, Defense",
      status: "Active"
    },
    {
      name: "Lazarus Group",
      type: "State-Sponsored",
      activity: "High",
      recentTargets: "Financial, Cryptocurrency",
      status: "Active"
    },
    {
      name: "BlackCat (ALPHV)",
      type: "Ransomware Group",
      activity: "Medium",
      recentTargets: "Energy, Healthcare",
      status: "Active"
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-600 text-white';
      case 'High': return 'bg-orange-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-black';
      case 'Low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-red-600 text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Cyber Attacks
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Latest Cyber Attacks & Security Incidents
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Stay informed about the latest cyber attacks, data breaches, ransomware incidents, and emerging threats. 
              Real-time coverage of the evolving cybersecurity threat landscape.
            </p>
          </div>
        </article>
      </div>

      {/* Threat Level Alert */}
      <section className="w-full bg-red-600 dark:bg-red-700 text-white py-4 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="bg-white text-red-600 px-3 py-1 rounded text-sm font-bold mr-4 animate-pulse">
                ALERT
              </span>
              <span className="font-semibold">Current Threat Level: HIGH</span>
            </div>
            <div className="text-sm">
              Active ransomware campaigns targeting healthcare and critical infrastructure
            </div>
          </div>
        </div>
      </section>

      {/* Attack Statistics Dashboard */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-dark dark:text-light mb-6 text-center">
            Attack Statistics (Last 30 Days)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {attackCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-dark p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-dark dark:text-light">{category.count}</span>
                  <span className={`ml-2 text-sm ${category.trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                    {category.trend === 'up' ? '↗️' : '↘️'}
                  </span>
                </div>
                <h3 className="font-semibold text-dark dark:text-light text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Attack */}
      <section className="w-full mt-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          {recentAttacks.filter(attack => attack.featured).map(attack => (
            <div key={attack.id} className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-lg border border-red-200 dark:border-red-800 mb-12">
              <div className="flex items-center mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Breaking
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(attack.severity)}`}>
                  {attack.severity}
                </span>
                <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                  {attack.date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-4">
                {attack.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {attack.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-dark/70 dark:text-light/70 mb-4 text-lg">
                {attack.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-red-600 dark:text-red-400 font-semibold">
                  <span className="mr-2">⚠️</span>
                  <span>Impact: {attack.impact}</span>
                </div>
                <button className="px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Read Full Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Attacks */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light">
              Recent Cyber Attacks
            </h2>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-dark dark:text-light">
                <option>All Categories</option>
                <option>Ransomware</option>
                <option>Data Breach</option>
                <option>APT</option>
                <option>Supply Chain</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-dark dark:text-light">
                <option>All Severity</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-6">
            {recentAttacks.filter(attack => !attack.featured).map(attack => (
              <div key={attack.id} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(attack.severity)}`}>
                      {attack.severity}
                    </span>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {attack.category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {attack.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark dark:text-light mb-3 hover:text-accent cursor-pointer">
                  {attack.title}
                </h3>
                
                <p className="text-dark/70 dark:text-light/70 mb-4">
                  {attack.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {attack.tags.map((tag, index) => (
                      <span key={index} className="bg-accent/20 text-accent px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-red-600 dark:text-red-400 font-semibold text-sm">
                    <span className="mr-2">⚠️</span>
                    <span>{attack.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Actors */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Active Threat Actors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {threatActors.map((actor, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-dark dark:text-light">
                    {actor.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    actor.status === 'Active' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}>
                    {actor.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Type:</span>
                    <span className="text-dark dark:text-light font-semibold">{actor.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Activity Level:</span>
                    <span className={`font-semibold ${
                      actor.activity === 'High' ? 'text-red-600' : 
                      actor.activity === 'Medium' ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      {actor.activity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Recent Targets:</span>
                    <span className="text-dark dark:text-light font-semibold">{actor.recentTargets}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attack Trends */}
      <section className="w-full mt-16 bg-gray-50 dark:bg-gray-900 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Attack Trends & Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">87% Increase</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ransomware attacks targeting healthcare sector in Q4 2024
              </p>
            </div>
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Critical Infrastructure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Most targeted sector by state-sponsored threat actors
              </p>
            </div>
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">$4.88M</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Average cost of a data breach in 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}