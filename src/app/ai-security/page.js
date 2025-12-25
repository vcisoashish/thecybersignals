export const metadata = {
  title: "AI & Security",
  description: "Artificial Intelligence in cybersecurity - AI-powered security solutions, machine learning for threat detection, and defending against AI-enhanced attacks.",
};

export default function AISecurity() {
  const aiSecurityCategories = [
    {
      title: "AI-Powered Threat Detection",
      description: "Machine learning algorithms for identifying and responding to cyber threats",
      articles: 234,
      trend: "up",
      icon: "🤖",
      topics: ["Behavioral Analysis", "Anomaly Detection", "Predictive Analytics", "Real-time Monitoring"]
    },
    {
      title: "AI-Enhanced Attacks",
      description: "Understanding and defending against AI-powered cyber attacks",
      articles: 187,
      trend: "up",
      icon: "⚠️",
      topics: ["Deepfakes", "AI Phishing", "Automated Attacks", "Adversarial AI"]
    },
    {
      title: "Machine Learning Security",
      description: "Securing ML models and AI systems from attacks and manipulation",
      articles: 156,
      trend: "up",
      icon: "🧠",
      topics: ["Model Security", "Data Poisoning", "Adversarial Examples", "Privacy Protection"]
    },
    {
      title: "Automated Security Operations",
      description: "AI-driven security orchestration and automated incident response",
      articles: 198,
      trend: "up",
      icon: "⚙️",
      topics: ["SOAR Platforms", "Automated Response", "Threat Hunting", "Security Analytics"]
    },
    {
      title: "AI Governance & Ethics",
      description: "Responsible AI implementation in cybersecurity contexts",
      articles: 89,
      trend: "stable",
      icon: "⚖️",
      topics: ["AI Ethics", "Bias Detection", "Explainable AI", "Regulatory Compliance"]
    },
    {
      title: "Natural Language Processing",
      description: "NLP applications in security for threat intelligence and analysis",
      articles: 112,
      trend: "up",
      icon: "💬",
      topics: ["Threat Intelligence", "Log Analysis", "Phishing Detection", "Social Engineering"]
    },
    {
      title: "AI-Powered Vulnerability Management",
      description: "Using AI to discover, prioritize, and remediate security vulnerabilities",
      articles: 145,
      trend: "up",
      icon: "🔍",
      topics: ["Automated Scanning", "Risk Prioritization", "Patch Management", "Zero-Day Detection"]
    },
    {
      title: "Generative AI Security",
      description: "Security implications and risks of generative AI technologies",
      articles: 98,
      trend: "up",
      icon: "🎨",
      topics: ["ChatGPT Security", "Code Generation Risks", "Data Leakage", "Prompt Injection"]
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "New AI-Powered Security Platform Detects Zero-Day Attacks with 99.7% Accuracy",
      summary: "Revolutionary machine learning system demonstrates unprecedented capability in identifying previously unknown threats.",
      category: "AI Innovation",
      date: "3 hours ago",
      readTime: "4 min read",
      featured: true
    },
    {
      id: 2,
      title: "Generative AI Tools Pose New Security Risks for Enterprise Organizations",
      summary: "Security experts warn of data leakage and intellectual property risks from employee use of ChatGPT and similar tools.",
      category: "Enterprise Security",
      date: "6 hours ago",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "AI-Driven Vulnerability Management Reduces Patch Time by 75%",
      summary: "New automated systems prioritize critical vulnerabilities and streamline remediation processes.",
      category: "Vulnerability Management",
      date: "8 hours ago",
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "Cybercriminals Using AI to Create Sophisticated Phishing Campaigns",
      summary: "Security researchers warn of increasing use of AI-generated content in social engineering attacks.",
      category: "Threat Intelligence",
      date: "1 day ago",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Microsoft Announces AI-Enhanced Security Features for Enterprise Customers",
      summary: "New capabilities include automated threat response and predictive risk assessment.",
      category: "Product Updates",
      date: "1 day ago",
      readTime: "3 min read"
    },
    {
      id: 6,
      title: "AI Model Poisoning Attacks Target Machine Learning Security Systems",
      summary: "Researchers demonstrate how adversaries can compromise AI-based security tools through training data manipulation.",
      category: "Research",
      date: "2 days ago",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Study: 87% of Security Teams Plan to Increase AI Investment in 2024",
      summary: "Industry survey reveals growing confidence in AI-powered cybersecurity solutions.",
      category: "Market Research",
      date: "2 days ago",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "New Framework Addresses Ethical AI Implementation in Cybersecurity",
      summary: "Industry consortium releases guidelines for responsible AI deployment in security operations.",
      category: "AI Ethics",
      date: "3 days ago",
      readTime: "4 min read"
    }
  ];

  const aiTools = [
    {
      category: "Threat Detection",
      tools: ["Darktrace", "CrowdStrike Falcon", "Vectra AI", "Cylance", "SentinelOne"]
    },
    {
      category: "Security Analytics",
      tools: ["Splunk MLTK", "IBM QRadar", "Elastic Security", "Sumo Logic", "LogRhythm"]
    },
    {
      category: "Automated Response",
      tools: ["Phantom", "Demisto", "Swimlane", "Rapid7 InsightConnect", "Siemplify"]
    },
    {
      category: "AI Platforms",
      tools: ["Google Cloud AI", "AWS Machine Learning", "Azure AI", "IBM Watson", "H2O.ai"]
    },
    {
      category: "Vulnerability Management",
      tools: ["Tenable.io", "Qualys VMDR", "Rapid7 InsightVM", "Nessus", "OpenVAS"]
    },
    {
      category: "Generative AI Security",
      tools: ["Microsoft Purview", "Varonis", "Forcepoint DLP", "Nightfall AI", "Protecto"]
    }
  ];

  const useCases = [
    {
      title: "Fraud Detection",
      description: "AI algorithms analyze transaction patterns to identify fraudulent activities",
      industry: "Financial Services",
      accuracy: "99.2%",
      icon: "💳"
    },
    {
      title: "Network Anomaly Detection",
      description: "Machine learning models identify unusual network behavior and potential intrusions",
      industry: "Enterprise IT",
      accuracy: "97.8%",
      icon: "🌐"
    },
    {
      title: "Email Security",
      description: "NLP and ML techniques detect phishing attempts and malicious attachments",
      industry: "All Sectors",
      accuracy: "98.5%",
      icon: "📧"
    },
    {
      title: "Endpoint Protection",
      description: "AI-powered endpoint security solutions prevent malware and advanced threats",
      industry: "Enterprise",
      accuracy: "99.1%",
      icon: "💻"
    },
    {
      title: "Vulnerability Prioritization",
      description: "AI systems rank vulnerabilities by risk and business impact for efficient remediation",
      industry: "All Sectors",
      accuracy: "96.7%",
      icon: "🎯"
    },
    {
      title: "Insider Threat Detection",
      description: "Behavioral analytics identify potential insider threats and data exfiltration",
      industry: "Enterprise",
      accuracy: "94.3%",
      icon: "👤"
    }
  ];

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-purple-600 text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              AI & Security
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Artificial Intelligence in Cybersecurity
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Explore the intersection of AI and cybersecurity - from AI-powered defense solutions to 
              protecting against AI-enhanced attacks. Stay ahead in the evolving landscape of intelligent security.
            </p>
          </div>
        </article>
      </div>

      {/* AI Security Statistics */}
      <section className="w-full bg-purple-50 dark:bg-purple-900/20 py-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-dark dark:text-light mb-6 text-center">
            AI in Cybersecurity Market
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-dark p-4 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$46.3B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Market Size by 2027</div>
            </div>
            <div className="bg-white dark:bg-dark p-4 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">23.6%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Annual Growth Rate</div>
            </div>
            <div className="bg-white dark:bg-dark p-4 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">76%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Organizations Using AI Security</div>
            </div>
            <div className="bg-white dark:bg-dark p-4 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">87%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Plan to Increase AI Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Security Categories */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            AI Security Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {aiSecurityCategories.map((category, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-dark dark:text-light mr-2">
                      {category.articles} articles
                    </span>
                    <span className={`text-sm ${category.trend === 'up' ? 'text-green-500' : 'text-gray-500'}`}>
                      {category.trend === 'up' ? '↗️' : '→'}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-dark dark:text-light mb-3">
                  {category.title}
                </h3>
                
                <p className="text-dark/70 dark:text-light/70 text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      <span className="text-dark dark:text-light">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light">
              Latest AI Security News
            </h2>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
              View All News
            </button>
          </div>
          
          {/* Featured Article */}
          {latestNews.filter(article => article.featured).map(article => (
            <div key={article.id} className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-lg border border-purple-200 dark:border-purple-800 mb-8">
              <div className="flex items-center mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Featured
                </span>
                <span className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
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
            {latestNews.filter(article => !article.featured).map(article => (
              <div key={article.id} className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-dark dark:text-light mb-3 hover:text-purple-600 cursor-pointer">
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

      {/* AI Use Cases */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            AI Security Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{useCase.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-dark dark:text-light">{useCase.title}</h3>
                    <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                      {useCase.industry}
                    </span>
                  </div>
                </div>
                
                <p className="text-dark/70 dark:text-light/70 mb-4">
                  {useCase.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate:</span>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    {useCase.accuracy}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Trends & Challenges */}
      <section className="w-full bg-purple-50 dark:bg-purple-900/20 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Emerging AI Security Trends & Challenges
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-bold text-dark dark:text-light mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                Emerging Trends
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-dark dark:text-light">AI-Powered Security Orchestration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Automated incident response and threat hunting using AI agents</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-dark dark:text-light">Quantum-AI Hybrid Security</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Combining quantum computing with AI for advanced cryptography</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-dark dark:text-light">Federated Learning Security</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Collaborative AI training while preserving data privacy</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-dark dark:text-light">AI-Generated Threat Intelligence</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Automated creation of threat reports and security advisories</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark p-6 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-bold text-dark dark:text-light mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                Key Challenges
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-dark dark:text-light">AI Model Attacks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Adversarial attacks targeting machine learning models</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-dark dark:text-light">Data Privacy Concerns</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Balancing AI effectiveness with privacy protection</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-dark dark:text-light">AI Bias in Security</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ensuring fair and unbiased AI-driven security decisions</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-dark dark:text-light">Explainable AI</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Making AI security decisions transparent and auditable</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Security Maturity Model */}
          <div className="bg-white dark:bg-dark p-8 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="text-xl font-bold text-dark dark:text-light mb-6 text-center">
              AI Security Maturity Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Level 1</div>
                <h4 className="font-semibold text-dark dark:text-light mb-2">Basic</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Traditional security tools with minimal AI integration</p>
              </div>
              <div className="text-center p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Level 2</div>
                <h4 className="font-semibold text-dark dark:text-light mb-2">Assisted</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI-enhanced detection and analysis capabilities</p>
              </div>
              <div className="text-center p-4 bg-purple-200 dark:bg-purple-900/70 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Level 3</div>
                <h4 className="font-semibold text-dark dark:text-light mb-2">Automated</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Automated response and remediation systems</p>
              </div>
              <div className="text-center p-4 bg-purple-300 dark:bg-purple-900/90 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Level 4</div>
                <h4 className="font-semibold text-dark dark:text-light mb-2">Autonomous</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Self-learning and adaptive security systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Security Tools */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Popular AI Security Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiTools.map((category, index) => (
              <div key={index} className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-dark dark:text-light mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, idx) => (
                    <span key={idx} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold hover:bg-purple-200 dark:hover:bg-purple-800 cursor-pointer transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8">
            AI Security Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">AI Models</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pre-trained security models and algorithms
              </p>
            </div>
            <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Datasets</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Security datasets for training and testing
              </p>
            </div>
            <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Research</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Latest research papers and studies
              </p>
            </div>
            <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Training</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI security courses and certifications
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}