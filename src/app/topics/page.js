import { blogs } from "@/.velite/generated";
import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import { slug } from "github-slugger";

export const metadata = {
  title: "Topics",
  description: "Explore cybersecurity topics, categories, and specialized areas of security expertise and research.",
};

export default function Topics() {
  const sortedBlogs = sortBlogs(blogs);
  
  // Extract all unique tags and count their usage
  const tagCounts = {};
  sortedBlogs.forEach(blog => {
    blog.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  // Sort tags by usage count
  const popularTags = Object.entries(tagCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 20);

  const topicCategories = [
    {
      title: "Threat Intelligence",
      description: "Advanced persistent threats, malware analysis, and threat hunting",
      topics: ["APT", "Malware", "Threat Hunting", "IOCs", "MITRE ATT&CK"],
      icon: "🎯",
      color: "bg-red-500"
    },
    {
      title: "Network Security",
      description: "Firewalls, intrusion detection, and network monitoring",
      topics: ["Firewall", "IDS/IPS", "Network Monitoring", "VPN", "Zero Trust"],
      icon: "🌐",
      color: "bg-blue-500"
    },
    {
      title: "Application Security",
      description: "Secure coding, vulnerability assessment, and application testing",
      topics: ["OWASP", "Code Review", "SAST/DAST", "API Security", "DevSecOps"],
      icon: "💻",
      color: "bg-green-500"
    },
    {
      title: "Cloud Security",
      description: "Cloud infrastructure protection and multi-cloud security",
      topics: ["AWS Security", "Azure Security", "Container Security", "Serverless", "CSPM"],
      icon: "☁️",
      color: "bg-purple-500"
    },
    {
      title: "Identity & Access",
      description: "Authentication, authorization, and identity management",
      topics: ["IAM", "SSO", "MFA", "PAM", "Identity Governance"],
      icon: "🔐",
      color: "bg-yellow-500"
    },
    {
      title: "Compliance & Risk",
      description: "Regulatory compliance, risk assessment, and governance",
      topics: ["GDPR", "SOX", "HIPAA", "Risk Assessment", "Audit"],
      icon: "📋",
      color: "bg-indigo-500"
    },
    {
      title: "Incident Response",
      description: "Digital forensics, incident handling, and recovery",
      topics: ["DFIR", "Forensics", "Incident Handling", "Recovery", "Playbooks"],
      icon: "🚨",
      color: "bg-orange-500"
    },
    {
      title: "Emerging Technologies",
      description: "AI/ML security, IoT, blockchain, and quantum computing",
      topics: ["AI Security", "IoT Security", "Blockchain", "Quantum", "5G Security"],
      icon: "🚀",
      color: "bg-pink-500"
    }
  ];

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Topics
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Cybersecurity Topics & Categories
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Explore comprehensive cybersecurity topics, from threat intelligence and network security to emerging technologies and compliance frameworks.
            </p>
          </div>
        </article>
      </div>

      {/* Topic Categories */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Security Domains
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {topicCategories.map((category, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200 group">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-white text-xl mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark dark:text-light group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-dark/70 dark:text-light/70 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="px-2 py-1 bg-accent/20 text-accent rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Popular Topics
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {popularTags.map(([tag, count]) => (
              <Link 
                key={tag} 
                href={`/categories/${slug(tag)}`}
                className="group"
              >
                <div className="px-4 py-2 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-full hover:bg-accent hover:text-light hover:border-accent transition-all ease duration-200 flex items-center">
                  <span className="font-medium text-dark dark:text-light group-hover:text-light">
                    {tag}
                  </span>
                  <span className="ml-2 px-2 py-1 bg-accent/20 group-hover:bg-light/20 text-accent group-hover:text-light rounded-full text-xs">
                    {count}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Topic Search */}
          <div className="bg-light dark:bg-dark p-8 rounded-lg border border-solid border-dark dark:border-light text-center">
            <h3 className="text-xl font-bold text-dark dark:text-light mb-4">
              Looking for Something Specific?
            </h3>
            <p className="text-dark/70 dark:text-light/70 mb-6">
              Search through our comprehensive collection of cybersecurity topics and articles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Search topics..." 
                className="flex-1 px-4 py-2 rounded-full border border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light"
              />
              <button className="px-6 py-2 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                Search
              </button>
            </div>
          </div>

          {/* Topic Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{Object.keys(tagCounts).length}</div>
              <div className="text-dark/70 dark:text-light/70">Total Topics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{sortedBlogs.length}</div>
              <div className="text-dark/70 dark:text-light/70">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{topicCategories.length}</div>
              <div className="text-dark/70 dark:text-light/70">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-dark/70 dark:text-light/70">Updated</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}