import ContactForm from "@/src/components/Contact/ContactForm";
import Image from 'next/image';
import profileImage from "../../../../public/profile-image.jpeg";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";


export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};


export default function Contact() {
  return (
    <>
      {/* Executive Banner Section */}
      <section className="w-full bg-gradient-to-r from-dark to-gray-800 dark:from-accentDark dark:to-gray-700 text-light py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Strategic Cybersecurity Partnership for C-Suite Leaders
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90 max-w-4xl mx-auto">
            Trusted advisor to Fortune 500 CEOs, CIOs, CTOs, and CISOs. Delivering McKinsey-caliber strategic cybersecurity consulting that transforms digital risk into competitive advantage.
          </p>
          
          {/* Executive Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-light/10 dark:bg-dark/20 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">For CEOs</h3>
              <p className="text-sm opacity-80">Board-ready cyber risk metrics & ROI-driven security investments</p>
            </div>
            <div className="bg-light/10 dark:bg-dark/20 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">For CIOs</h3>
              <p className="text-sm opacity-80">Secure digital transformation roadmaps & enterprise architecture</p>
            </div>
            <div className="bg-light/10 dark:bg-dark/20 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">For CTOs</h3>
              <p className="text-sm opacity-80">Zero-trust architecture & AI-secure development frameworks</p>
            </div>
            <div className="bg-light/10 dark:bg-dark/20 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">For CISOs</h3>
              <p className="text-sm opacity-80">Strategic program governance & threat intelligence operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Banner */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-dark dark:text-light">
            Strategic Capabilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center">
            {[
              "AI Governance & Ethics",
              "Quantum-Safe Cryptography",
              "Zero Trust Architecture",
              "Board Risk Reporting",
              "M&A Cyber Due Diligence",
              "Regulatory Compliance Strategy",
              "Incident Response Leadership",
              "Digital Transformation Security",
              "Cloud Security Posture",
              "Threat Intelligence Operations",
              "Executive Crisis Management",
              "Cyber Insurance Optimization"
            ].map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-md py-2 px-3 shadow-sm">
                <span className="text-xs font-medium text-dark dark:text-light">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light relative overflow-hidden py-8">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 z-0">
          <LottieAnimation />
        </div>
        
        {/* Profile Image Section */}
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 md:border-r-2 border-solid border-dark dark:border-light flex justify-center items-center relative z-10 p-4">
          <Image 
            src={profileImage} 
            alt="The Cyber Signals" 
            className='w-full max-w-xs h-auto max-h-60 object-cover object-center rounded-lg'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          />
        </div>
        
        {/* Form Section */}
        <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 py-6 relative z-10">
          <div className="mb-3">
            <h2 className="font-bold text-lg xs:text-xl sm:text-2xl mb-2">Executive Cybersecurity Consultation</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Schedule a strategic discussion with our cybersecurity leadership team.
            </p>
          </div>
          
          {/* Write to Us Section */}
          <div className="w-full mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-sm mb-1 text-dark dark:text-light">Executive Direct Line</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              For urgent C-suite matters, reach our executive team directly:
            </p>
            <a 
              href="mailto:thecybersignals@gmail.com" 
              className="inline-flex items-center text-accent dark:text-accentDark hover:underline font-medium text-sm"
            >
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              thecybersignals@gmail.com
            </a>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </>
  );
}
