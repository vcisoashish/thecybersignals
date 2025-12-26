import { blogs } from "@/.velite/generated";
import { LinkedinIcon } from "@/src/components/Icons";

export const metadata = {
  title: "Products",
  description: "Discover the latest cybersecurity products, tools, and technologies that are shaping the digital security landscape.",
};

export default function Features() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Products
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Cybersecurity Products & Solutions
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Explore cutting-edge cybersecurity products, innovative solutions, and enterprise-grade technologies that are revolutionizing digital security and protecting organizations worldwide.
            </p>
          </div>
        </article>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 mt-10 sm:mt-16 mx-5 sm:mx-10">
        <article className="col-span-1 row-span-2 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col items-start justify-end z-0 text-light">
            <div className="w-full flex justify-between items-center">
              <div className="inline-block py-1 sm:py-1.5 px-4 sm:px-6 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs sm:text-sm">
                AI Security
              </div>
            </div>
            <h2 className="mt-4 font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                AI-Powered Threat Detection
              </span>
            </h2>
            <p className="text-sm sm:text-base mt-2">
              Machine learning algorithms that analyze patterns, detect anomalies, and predict cyber threats with unprecedented accuracy and speed.
            </p>
          </div>
        </article>

        <article className="col-span-1 row-span-1 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-start justify-end z-0 text-light">
            <div className="inline-block py-1 px-4 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs">
              Zero Trust
            </div>
            <h2 className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg">
              Zero-Trust Architecture
            </h2>
          </div>
        </article>

        <article className="col-span-1 row-span-1 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-start justify-end z-0 text-light">
            <div className="inline-block py-1 px-4 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs">
              SIEM/SOAR
            </div>
            <h2 className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg">
              Security Orchestration
            </h2>
          </div>
        </article>

        <article className="col-span-1 row-span-1 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-start justify-end z-0 text-light">
            <div className="inline-block py-1 px-4 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs">
              Quantum Security
            </div>
            <h2 className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg">
              Post-Quantum Cryptography
            </h2>
          </div>
        </article>

        <article className="col-span-1 row-span-1 relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          <div className="w-full h-full p-4 sm:p-6 flex flex-col items-start justify-end z-0 text-light">
            <div className="inline-block py-1 px-4 bg-dark text-light rounded-full capitalize font-semibold border border-light text-xs">
              Cloud Security
            </div>
            <h2 className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg">
              CSPM & CWPP Solutions
            </h2>
          </div>
        </article>
      </div>

      {/* Additional Features Section */}
      <div className="w-full mt-16 px-5 sm:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Advanced Cybersecurity Tools & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-xl">🛡️</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Extended Detection & Response (XDR)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Unified security platform that correlates data across multiple security layers for comprehensive threat detection.
            </p>
          </div>

          <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-red-600 dark:text-red-400 text-xl">🔒</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Identity & Access Management (IAM)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comprehensive identity governance with privileged access management and multi-factor authentication.
            </p>
          </div>

          <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-400 text-xl">🔍</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Vulnerability Management</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Continuous vulnerability assessment with automated patching and risk-based prioritization.
            </p>
          </div>

          <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-400 text-xl">⚡</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Security Automation & Orchestration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Automated incident response workflows with intelligent threat hunting and remediation capabilities.
            </p>
          </div>

          <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-yellow-600 dark:text-yellow-400 text-xl">🌐</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Network Security Monitoring</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real-time network traffic analysis with intrusion detection and prevention systems.
            </p>
          </div>

          <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-indigo-600 dark:text-indigo-400 text-xl">📊</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Threat Intelligence Platform</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Contextual threat intelligence with IOC feeds and adversary tracking for proactive defense.
            </p>
          </div>

          <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-teal-600 dark:text-teal-400 text-xl">🔐</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Data Loss Prevention (DLP)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Advanced data classification and protection with encryption and access controls.
            </p>
          </div>

          <div className="bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-orange-600 dark:text-orange-400 text-xl">🚨</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Incident Response Platform</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comprehensive incident management with forensics capabilities and compliance reporting.
            </p>
          </div>
        </div>
      </div>

      {/* Next-Generation Cybersecurity Services */}
      <div className="w-full mt-20 px-5 sm:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Next-Generation Cybersecurity Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Cutting-edge security services leveraging AI, quantum-safe cryptography, and advanced threat intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            { name: "AI-SOC-as-a-Service", category: "AI Security", icon: "🤖", color: "blue" },
            { name: "Quantum-Readiness Audit", category: "Quantum Security", icon: "⚛️", color: "purple" },
            { name: "Post-Quantum Crypto Migration Service", category: "Quantum Security", icon: "🔐", color: "purple" },
            { name: "Confidential-AI Training Vault", category: "AI Security", icon: "🧠", color: "blue" },
            { name: "Deepfake Crisis Retainer", category: "AI Security", icon: "🎭", color: "red" },
            { name: "Secure Gen-AI Pipeline Service", category: "AI Security", icon: "🔄", color: "blue" },
            { name: "Zero-Trust Cloud Jumpstart", category: "Zero Trust", icon: "☁️", color: "green" },
            { name: "Encrypted-Channel Threat Hunt", category: "Threat Intelligence", icon: "🔍", color: "orange" },
            { name: "Ransomware Kill-Chain Warranty", category: "Incident Response", icon: "🛡️", color: "red" },
            { name: "Blockchain-Backed Compliance Ledger", category: "Compliance", icon: "⛓️", color: "indigo" },
            { name: "Edge-AI Security Fabric Service", category: "AI Security", icon: "🌐", color: "blue" },
            { name: "Homomorphic Encryption Analytics Service", category: "Encryption", icon: "🔢", color: "purple" },
            { name: "Web3 Wallet Secure-Code Clinic", category: "Web3 Security", icon: "💰", color: "yellow" },
            { name: "AI-Driven ESG Cyber Score Service", category: "Governance", icon: "📊", color: "green" },
            { name: "Policy-as-Code Governance Suite", category: "Governance", icon: "📋", color: "gray" },
            { name: "Cloud Cost-Security Optimiser Service", category: "Cloud Security", icon: "💰", color: "green" },
            { name: "Quantum-Safe Blockchain Bridge Service", category: "Quantum Security", icon: "🌉", color: "purple" },
            { name: "Encrypted-Compute Kubernetes Service", category: "Container Security", icon: "🐳", color: "blue" },
            { name: "AI-SBOM Sentinel Service", category: "Supply Chain", icon: "📦", color: "orange" },
            { name: "Zero-Knowledge Identity Wallet Service", category: "Identity", icon: "🆔", color: "teal" }
          ].map((service, index) => (
            <div key={index} className={`bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 dark:from-${service.color}-900/20 dark:to-${service.color}-800/20 border border-${service.color}-200 dark:border-${service.color}-700 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 group`}>
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 bg-${service.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <span className="text-lg">{service.icon}</span>
                </div>
                <span className={`text-xs px-2 py-1 bg-${service.color}-500/10 text-${service.color}-700 dark:text-${service.color}-300 rounded-full font-medium`}>
                  {service.category}
                </span>
              </div>
              <h3 className={`font-semibold text-sm mb-2 text-${service.color}-900 dark:text-${service.color}-100 leading-tight`}>
                {service.name}
              </h3>
              <div className={`w-full h-1 bg-${service.color}-200 dark:bg-${service.color}-700 rounded-full overflow-hidden`}>
                <div className={`h-full bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="mr-2">🚀</span>
              Explore Advanced Services
            </div>
            
            <a 
              href="https://linkedin.com/company/the-cyber-signals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              aria-label="Follow The Cyber Signals on LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Follow on LinkedIn
            </a>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Connect with us for the latest cybersecurity insights and industry updates
          </p>
        </div>
      </div>
    </main>
  );
}