// URL mappings for clean blog URLs
export const blogUrlMappings = {
  'cybersecurity-predictions-2026-ai-driven-threat-landscape': '/cybersecurity-predictions-2026',
  'ai-security-comprehensive-guide-2024': '/ai-security-guide',
  'zero-trust-implementation-guide-2024': '/zero-trust-implementation',
  'ransomware-3-0-evolution-2024': '/ransomware-evolution',
  'quantum-cryptography-post-quantum-security-2024': '/quantum-cryptography',
  'cloud-security-posture-management-2024': '/cloud-security-posture',
  'ai-powered-ransomware-threats-2024': '/ai-powered-ransomware',
  'ethical-hacking-penetration-testing-2024': '/ethical-hacking-guide',
  'security-research-vulnerability-discovery-2024': '/security-research-strategy',
  'ai-in-security-machine-learning-defense-2024': '/ai-in-security',
  'lotl-living-off-the-land-attacks-2024': '/lotl-attacks',
  'post-quantum-iam-identity-management-2024': '/post-quantum-iam',
  'ai-dem-digital-experience-monitoring-2024': '/ai-digital-experience',
  'api-microservice-abuse-protection-2024': '/api-security',
  'identity-first-security-strategy-2024': '/identity-first-security',
  'encrypted-channel-attacks-defense-2024': '/encrypted-channel-attacks',
  'cloud-data-security-best-practices-2024': '/cloud-data-security',
  'supply-chain-attacks-mitigation-2024': '/supply-chain-attacks',
  'sase-sse-security-framework-2024': '/sase-sse-framework',
  'quantum-safe-cryptography-guide-2024': '/quantum-safe-cryptography',
  'insider-threat-detection-prevention-2024': '/insider-threat-detection',
  'ot-iot-security-industrial-systems-2024': '/ot-iot-security',
  'responsible-ai-cybersecurity-ethics-2024': '/responsible-ai-ethics',
  'cyber-signal-academy-complete-offerings': '/cyber-academy',
  'secure-code-review-clinic-workshop': '/secure-code-review',
  'red-team-adversary-emulation-labs': '/red-team-labs',
  'blue-team-soc-simulation-room-training': '/blue-team-training',
  'web-accessibility-inclusive-design': '/web-accessibility',
  'building-progressive-web-apps-bridging-the-gap-between-web-and-mobile': '/progressive-web-apps',
  'web-development-tools-productivity': '/web-dev-tools',
  'progressive-web-apps-pwa': '/pwa-guide',
  'js-frameworks-comparison': '/javascript-frameworks',
  'mastering-css-grid-layout': '/css-grid-guide',
  'web-accessibility-best-practices': '/accessibility-practices',
};

// Function to get clean URL for a blog slug
export const getCleanBlogUrl = (slug) => {
  return blogUrlMappings[slug] || `/article/${slug}`;
};

// Function to get original slug from clean URL
export const getSlugFromCleanUrl = (cleanUrl) => {
  const entry = Object.entries(blogUrlMappings).find(([, url]) => url === cleanUrl);
  return entry ? entry[0] : cleanUrl.replace('/article/', '');
};