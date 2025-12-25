export const metadata = {
  title: "Cloud Security",
  description: "Comprehensive cloud security coverage including AWS, Azure, GCP security, cloud compliance, CSPM, and multi-cloud security strategies.",
};

export default function CloudSecurity() {
  const cloudPlatforms = [
    {
      name: "Amazon Web Services (AWS)",
      icon: "☁️",
      marketShare: "32%",
      keyServices: ["IAM", "CloudTrail", "GuardDuty", "Security Hub"],
      recentNews: "AWS announces new security features for EC2 instances",
      securityFeatures: "Advanced threat detection and automated remediation"
    },
    {
      name: "Microsoft Azure",
      icon: "🔷",
      marketShare: "23%",
      keyServices: ["Azure AD", "Defender for Cloud", "Sentinel", "Key Vault"],
      recentNews: "Microsoft enhances Azure security with AI-powered threat detection",
      securityFeatures: "Integrated security across hybrid and multi-cloud environments"
    },
    {
      name: "Google Cloud Platform (GCP)",
      icon: "🌐",
      marketShare: "10%",
      keyServices: ["Cloud IAM", "Security Command Center", "Cloud KMS", "Binary Authorization"],
      recentNews: "Google Cloud introduces new zero-trust security capabilities",
      securityFeatures: "Built-in security with encryption by default"
    },
    {
      name: "Multi-Cloud",
      icon: "🔗",
      marketShare: "35%",
      keyServices: ["CSPM", "CWPP", "CASB", "SASE"],
      recentNews: "Organizations increasingly adopt multi-cloud security strategies",
      securityFeatures: "Unified security management across multiple cloud providers"
    }
  ];

  const securityCategories = [
    {
      title: "Cloud Security Posture Management (CSPM)",
      description: "Automated security assessment and compliance monitoring for cloud environments",
      articles: 156,
      trend: "up",
      icon: "🛡️",
      topics: ["Misconfiguration Detection", "Compliance Automation", "Risk Assessment", "Policy Enforcement"]
    },
    {
      title: "Cloud Workload Protection (CWPP)",
      description: "Security solutions for protecting workloads across cloud environments",
      articles: 134,
      trend: "up",
      icon: "⚙️",
      topics: ["Container Security", "Serverless Protection", "Runtime Security", "Vulnerability Management"]
    },
    {
      title: "Cloud Access Security Broker (CASB)",
      description: "Security policy enforcement between cloud service consumers and providers",
      articles: 98,
      trend: "stable",
      icon: "🔐",
      topics: ["Data Loss Prevention", "Access Control", "Threat Protection", "Compliance Monitoring"]
    },
    {
      title: "Identity and Access Management (IAM)",
      description: "Managing digital identities and controlling access to cloud resources",
      articles: 187,
      trend: "up",
      icon: "👤",
      topics: ["Zero Trust", "Multi-Factor Authentication", "Privileged Access", "Identity Governance"]
    },
    {
      title: "Data Protection & Encryption",
      description: "Securing data at rest, in transit, and in use within cloud environments",
      articles: 142,
      trend: "up",
      icon: "🔒",
      topics: ["Encryption Key Management", "Data Classification", "Privacy Controls", "Backup Security"]
    },
    {
      title: "Compliance & Governance",
      description: "Meeting regulatory requirements and maintaining governance in the cloud",
      articles: 123,
      trend: "stable",
      icon: "📋",
      topics: ["GDPR", "SOC 2", "HIPAA", "PCI DSS"]
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "Major Cloud Provider Announces Enhanced Security Features for Enterprise Customers",
      summary: "New AI-powered threat detection and automated response capabilities now available across all regions.",
      category: "Platform Updates",
      date: "2 hours ago",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "Cloud Security Spending Expected to Reach $15.6 Billion by 2025",
      summary: "Market research shows continued growth in cloud security investments as organizations prioritize digital transformation.",
      category: "Market Analysis",
      date: "6 hours ago",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "New CSPM Solution Addresses Multi-Cloud Security Challenges",
      summary: "Latest cloud security posture management platform offers unified visibility across AWS, Azure, and GCP.",
      category: "Product Launch",
      date: "1 day ago",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Zero Trust Architecture Adoption Accelerates in Cloud Environments",
      summary: "Survey reveals 78% of organizations are implementing zero trust principles for cloud security.",
      category: "Industry Trends",
      date: "2 days ago",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Container Security Best Practices for Kubernetes Deployments",
      summary: "Expert guidance on securing containerized applications in cloud-native environments.",
      category: "Best Practices",
      date: "3 days ago",
      readTime: "8 min read"
    }
  ];

  const securityTools = [
    {
      category: "CSPM Solutions",
      tools: ["Prisma Cloud", "Dome9", "Lacework", "Orca Security", "Wiz"]
    },
    {
      category: "CWPP Platforms",
      tools: ["Aqua Security", "Twistlock", "Sysdig", "StackRox", "Qualys VMDR"]
    },
    {
      category: "CASB Solutions",
      tools: ["Microsoft Cloud App Security", "Netskope", "Forcepoint CASB", "Bitglass", "Zscaler"]
    },
    {
      category: "Identity Management",
      tools: ["Okta", "Azure AD", "Ping Identity", "CyberArk", "SailPoint"]
    }
  ];

  const complianceFrameworks = [
    { name: "SOC 2", description: "Service Organization Control 2", adoption: "89%" },
    { name: "ISO 27001", description: "Information Security Management", adoption: "76%" },
    { name: "GDPR", description: "General Data Protection Regulation", adoption: "82%" },
    { name: "HIPAA", description: "Health Insurance Portability Act", adoption: "67%" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security", adoption: "71%" },
    { name: "FedRAMP", description: "Federal Risk Authorization Management", adoption: "45%" }
  ];

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-blue-600 text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Cloud Security
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Cloud Security Hub
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Comprehensive coverage of cloud security including AWS, Azure, GCP security, compliance frameworks, 
              CSPM solutions, and multi-cloud security strategies for modern enterprises.
            </p>
          </div>
        </article>
      </div>

      {/* Cloud Security Market Overview */}
      <section className="w-full bg-blue-50 dark:bg-blue-900/20 py-8 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-dark dark:text-light mb-6 text-center">
            Cloud Security Market Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-dark p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$15.6B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Market Size by 2025</div>
            </div>
            <div className="bg-white dark:bg-dark p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">23.8%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Annual Growth Rate</div>
            </div>
            <div className="bg-white dark:bg-dark p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">89%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Organizations Using Cloud</div>
            </div>
            <div className="bg-white dark:bg-dark p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">67%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Multi-Cloud Adoption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Major Cloud Platforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {cloudPlatforms.map((platform, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{platform.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-dark dark:text-light">{platform.name}</h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      Market Share: {platform.marketShare}
                    </span>
                  </div>
                </div>
                
                <p className="text-dark/70 dark:text-light/70 mb-4">
                  {platform.securityFeatures}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark dark:text-light mb-2">Key Security Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.keyServices.map((service, idx) => (
                      <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Latest: {platform.recentNews}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Categories */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Cloud Security Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {securityCategories.map((category, index) => (
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
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
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
              Latest Cloud Security News
            </h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
              View All News
            </button>
          </div>
          
          {/* Featured Article */}
          {latestNews.filter(article => article.featured).map(article => (
            <div key={article.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800 mb-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Featured
                </span>
                <span className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestNews.filter(article => !article.featured).map(article => (
              <div key={article.id} className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all ease duration-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-dark dark:text-light mb-3 hover:text-blue-600 cursor-pointer">
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

      {/* Security Tools */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Popular Cloud Security Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {securityTools.map((category, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-dark dark:text-light mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, idx) => (
                    <span key={idx} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 cursor-pointer transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Cloud Compliance Frameworks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <h3 className="text-lg font-bold text-dark dark:text-light mb-2">
                  {framework.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {framework.description}
                </p>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {framework.adoption}
                </div>
                <div className="text-sm text-gray-500">
                  Enterprise Adoption Rate
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
            Cloud Security Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Best Practices</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Comprehensive guides and frameworks
              </p>
            </div>
            <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Tools & Solutions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reviews and comparisons
              </p>
            </div>
            <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Research Reports</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Market analysis and trends
              </p>
            </div>
            <div className="bg-light dark:bg-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="font-bold text-dark dark:text-light mb-2">Training</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Certification and courses
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}