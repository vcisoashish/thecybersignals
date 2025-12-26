const SkillList = [
  "AI-Driven Deepfake Social Engineering",
  "Generative AI Security Governance",
  "AI-Agent Identity & Lifecycle Management",
  "AI Model Poisoning & Supply-Chain Attacks",
  "Quantum-Safe Blockchain Bridges",
  "Web3 Wallet & Smart-Contract Security",
  "Decentralized Identity (DID) & Zero-Knowledge Proofs",
  "Confidential AI Training on Blockchain",
  "Tokenized Zero-Trust Access",
  "Post-Quantum NFT & Token Standards",
  "AI-Augmented Board-Level Risk Metrics",
  "Gen AI Code-SecOps Pipeline",
  "AI-Generated Threat-Intel Briefings for CEOs",
  "Blockchain-Based Audit & Compliance Ledger",
  "AI-Optimized Cloud Cost-Security Balance",
  "Web3 Decentralized Data Warehousing",
  "AI-Driven ESG Cyber-Risk Scoring",
  "Generative AI Incident-Response Playbooks",
  "Quantum-Safe DAO Governance",
  "AI-Powered Secure Remote Work Fabric",
  "Tokenized Cyber-Insurance Smart Contracts",
  "AI-Enhanced M&A Cyber Due-Diligence",
  "Web3 Secure Micropayment Channels",
  "Gen AI Secure Software Bill of Materials (SBOM)",
  "AI-Monitored Real-Time Fraud Detection",
  "Blockchain-Backed Immutable Logging",
  "AI-Assisted Secure 5G Network Slicing",
  "Quantum-Resistant Web3 Identity Vaults",
  "AI-Driven Secure Edge-AI Orchestration",
  "Generative AI Boardroom Cyber Wargames"
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
     text-dark dark:text-light">
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        I&apos;m comfortable in...
      </span>
      <ul className="flex flex-wrap mt-8 justify-center xs:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-xs xs:text-sm sm:text-sm md:text-base py-1 xs:py-1.5 sm:py-2 lg:py-2 px-2 xs:px-3 sm:px-4 lg:px-5 border-2 border-solid border-dark dark:border-light rounded mr-2 mb-2 xs:mr-2 xs:mb-2 md:mr-3 md:mb-3 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal" 
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
