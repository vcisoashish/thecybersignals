export const metadata = {
  title: "CISO Strategy",
  description: "Strategic cybersecurity leadership, CISO best practices, security governance, risk management, and executive security guidance for modern organizations.",
};

export default function CISOStrategy() {
  const strategicAreas = [
    {
      title: "Security Governance & Risk Management",
      description: "Establishing comprehensive security governance frameworks and risk management strategies",
      articles: 189,
      trend: "up",
      icon: "⚖️",
      topics: ["Risk Assessment", "Governance Frameworks", "Policy Development", "Compliance Management"]
    },
    {
      title: "Budget & Resource Planning",
      description: "Strategic planning for cybersecurity investments and resource allocation",
      articles: 156,
      trend: "up",
      icon: "💰",
      topics: ["Budget Planning", "ROI Analysis", "Resource Optimization", "Vendor Management"]
    },
    {
      title: "Security Culture & Awareness",
      description: "Building security-conscious organizational culture and employee awareness programs",
      articles: 234,
      trend: "up",
      icon: "👥",
      topics: ["Security Training", "Culture Change", "Awareness Programs", "Behavioral Security"]
    },
    {
      title: "Incident Response & Crisis Management",
      description: "Strategic approaches to incident response and crisis management leadership",
      articles: 167,
      trend: "stable",
      icon: "🚨",
      topics: ["Crisis Leadership", "Communication Strategy", "Recovery Planning", "Lessons Learned"]
    },
    {
      title: "Board & Executive Communication",
      description: "Effective communication strategies for security leadership and board reporting",
      articles: 143,
      trend: "up",
      icon: "📊",
      topics: ["Executive Reporting", "Board Presentations", "Risk Communication", "Business Alignment"]
    },
    {
      title: "Digital Transformation Security",
      description: "Leading security initiatives in digital transformation and modernization efforts",
      articles: 198,
      trend: "up",
      icon: "🔄",
      topics: ["Cloud Strategy", "DevSecOps", "Zero Trust", "Modern Architecture"]
    }
  ];

  const latestInsights = [
    {
      id: 1,
      title: "2024 CISO Survey: Top Security Priorities and Budget Allocation Trends",
      summary: "Comprehensive analysis of CISO priorities, budget trends, and strategic focus areas for the coming year.",
      category: "Research",
      date: "2 hours ago",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building a Security-First Culture: Lessons from Leading CISOs",
      summary: "Best practices and strategies for creating organizational security awareness and culture change.",
      category: "Leadership",
      date: "6 hours ago",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Communicating Cyber Risk to the Board: A CISO's Guide",
      summary: "Effective strategies for presenting cybersecurity risks and investments to executive leadership.",
      category: "Communication",
      date: "1 day ago",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Zero Trust Strategy: Implementation Roadmap for Enterprise CISOs",
      summary: "Strategic guidance for planning and executing zero trust architecture initiatives.",
      category: "Strategy",
      date: "2 days ago",
      readTime: "10 min read"
    }
  ];

  const keyMetrics = [
    {
      metric: "Security Budget",
      value: "12-15%",
      description: "of total IT budget",
      trend: "up"
    },
    {
      metric: "Board Reporting",
      value: "89%",
      description: "CISOs report to board quarterly",
      trend: "up"
    },
    {
      metric: "Staff Shortage",
      value: "3.5M",
      description: "unfilled cybersecurity positions",
      trend: "stable"
    },
    {
      metric: "Incident Response",
      value: "24/7",
      description: "average response capability",
      trend: "up"
    }
  ];

  const frameworks = [
    {
      name: "NIST Cybersecurity Framework",
      description: "Comprehensive framework for managing cybersecurity risk",
      adoption: "78%",
      category: "Risk Management"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      adoption: "65%",
      category: "Governance"
    },
    {
      name: "COBIT",
      description: "Framework for governance and management of enterprise IT",
      adoption: "52%",
      category: "IT Governance"
    },
    {
      name: "FAIR",
      description: "Factor Analysis of Information Risk quantitative model",
      adoption: "34%",
      category: "Risk Quantification"
    },
    {
      name: "SABSA",
      description: "Sherwood Applied Business Security Architecture",
      adoption: "28%",
      category: "Security Architecture"
    },
    {
      name: "OCTAVE",
      description: "Operationally Critical Threat, Asset, and Vulnerability Evaluation",
      adoption: "23%",
      category: "Risk Assessment"
    }
  ];

  const challenges = [
    {
      challenge: "Skills Shortage",
      impact: "High",
      description: "Difficulty finding qualified cybersecurity professionals",
      solutions: ["Training Programs", "Outsourcing", "Automation", "Partnerships"]
    },
    {
      challenge: "Budget Constraints",
      impact: "High",
      description: "Limited resources for comprehensive security programs",
      solutions: ["Risk-Based Prioritization", "ROI Demonstration", "Shared Services", "Cloud Solutions"]
    },
    {
      challenge: "Regulatory Compliance",
      impact: "Medium",
      description: "Keeping up with evolving regulatory requirements",
      solutions: ["Compliance Automation", "Legal Partnerships", "Framework Adoption", "Regular Audits"]
    },
    {
      challenge: "Digital Transformation",
      impact: "High",
      description: "Securing rapidly changing technology landscapes",
      solutions: ["DevSecOps", "Cloud Security", "Zero Trust", "Agile Security"]
    }
  ];

  const bestPractices = [
    {
      area: "Strategic Planning",
      practices: [
        "Align security strategy with business objectives",
        "Develop 3-year security roadmaps",
        "Regular strategy reviews and updates",
        "Stakeholder engagement and buy-in"
      ]
    },
    {
      area: "Risk Management",
      practices: [
        "Implement quantitative risk assessment",
        "Regular risk register updates",
        "Business impact analysis",
        "Continuous monitoring programs"
      ]
    },
    {
      area: "Team Leadership",
      practices: [
        "Invest in team development",
        "Create clear career paths",
        "Foster innovation and learning",
        "Build diverse security teams"
      ]
    },
    {
      area: "Communication",
      practices: [
        "Regular executive briefings",
        "Clear, business-focused reporting",
        "Proactive stakeholder engagement",
        "Crisis communication planning"
      ]
    }
  ];

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-green-600 text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              CISO Strategy
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Strategic Cybersecurity Leadership
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Strategic guidance for cybersecurity leaders, CISO best practices, security governance frameworks, 
              and executive leadership insights for building resilient security programs.
            </p>
          </div>
        </article>
      </div>

      {/* CISO Key Metrics */}
      <section className="w-full bg-green-50 dark:bg-green-900/20 py-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-dark dark:text-light mb-6 text-center">
            CISO Leadership Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white dark:bg-dark p-4 rounded-lg border border-green-200 dark:border-green-800 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{metric.value}</div>
                  <span className={`ml-2 text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-gray-500'}`}>
                    {metric.trend === 'up' ? '↗️' : '→'}
                  </span>
                </div>
                <div className="text-sm font-semibold text-dark dark:text-light">{metric.metric}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Areas */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Strategic Focus Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {strategicAreas.map((area, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{area.icon}</span>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-dark dark:text-light mr-2">
                      {area.articles} articles
                    </span>
                    <span className={`text-sm ${area.trend === 'up' ? 'text-green-500' : 'text-gray-500'}`}>
                      {area.trend === 'up' ? '↗️' : '→'}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-dark dark:text-light mb-3">
                  {area.title}
                </h3>
                
                <p className="text-dark/70 dark:text-light/70 text-sm mb-4">
                  {area.description}
                </p>
                
                <div className="space-y-2">
                  {area.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-dark dark:text-light">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light">
              Latest CISO Insights
            </h2>
            <button className="px-4 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors">
              View All Insights
            </button>
          </div>
          
          {/* Featured Article */}
          {latestInsights.filter(article => article.featured).map(article => (
            <div key={article.id} className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-lg border border-green-200 dark:border-green-800 mb-8">
              <div className="flex items-center mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Featured
                </span>
                <span className="bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                  {article.date} • {article.readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-dark dark:text-light mb-4">
                {article.title}
              </h3>
              <p className="text-dark/70 dark:text-light/70 text-lg">
                {article.summary}
              </p>
            </div>
          ))}
          
          {/* Recent Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestInsights.filter(article => !article.featured).map(article => (
              <div key={article.id} className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-dark dark:text-light mb-3 hover:text-green-600 cursor-pointer">
                  {article.title}
                </h4>
                <p className="text-dark/70 dark:text-light/70 text-sm mb-3">
                  {article.summary}
                </p>
                <div className="text-sm text-gray-500">
                  {article.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Frameworks */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Popular Security Frameworks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-dark dark:text-light">
                    {framework.name}
                  </h3>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-semibold">
                    {framework.category}
                  </span>
                </div>
                
                <p className="text-dark/70 dark:text-light/70 text-sm mb-4">
                  {framework.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Adoption Rate:</span>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    {framework.adoption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Common CISO Challenges & Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-dark dark:text-light">
                    {challenge.challenge}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    challenge.impact === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {challenge.impact} Impact
                  </span>
                </div>
                
                <p className="text-dark/70 dark:text-light/70 text-sm mb-4">
                  {challenge.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-dark dark:text-light mb-2">Solutions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.solutions.map((solution, idx) => (
                      <span key={idx} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            CISO Best Practices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-dark dark:text-light mb-4">
                  {practice.area}
                </h3>
                <div className="space-y-3">
                  {practice.practices.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-dark dark:text-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full mt-16 bg-gray-50 dark:bg-gray-900 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8">
            CISO Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Templates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Security policies and procedure templates
              </p>
            </div>
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Metrics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                KPIs and security measurement frameworks
              </p>
            </div>
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Frameworks</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Implementation guides and assessments
              </p>
            </div>
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                CISO networks and peer groups
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}