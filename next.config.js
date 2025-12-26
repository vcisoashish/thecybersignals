/** @type {import('next').NextConfig} */
module.exports = {
    // othor next config here...
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production' ? true : false,
    },
    async rewrites() {
      return [
        // Rewrite clean URLs to blog pages
        {
          source: '/cybersecurity-predictions-2026',
          destination: '/blogs/cybersecurity-predictions-2026-ai-driven-threat-landscape',
        },
        {
          source: '/ai-security-guide',
          destination: '/blogs/ai-security-comprehensive-guide-2024',
        },
        {
          source: '/zero-trust-implementation',
          destination: '/blogs/zero-trust-implementation-guide-2024',
        },
        {
          source: '/ransomware-evolution',
          destination: '/blogs/ransomware-3-0-evolution-2024',
        },
        {
          source: '/quantum-cryptography',
          destination: '/blogs/quantum-cryptography-post-quantum-security-2024',
        },
        {
          source: '/cloud-security-posture',
          destination: '/blogs/cloud-security-posture-management-2024',
        },
        {
          source: '/ai-powered-ransomware',
          destination: '/blogs/ai-powered-ransomware-threats-2024',
        },
        {
          source: '/ethical-hacking-guide',
          destination: '/blogs/ethical-hacking-penetration-testing-2024',
        },
        {
          source: '/security-research-strategy',
          destination: '/blogs/security-research-vulnerability-discovery-2024',
        },
        {
          source: '/ai-in-security',
          destination: '/blogs/ai-in-security-machine-learning-defense-2024',
        },
        {
          source: '/lotl-attacks',
          destination: '/blogs/lotl-living-off-the-land-attacks-2024',
        },
        {
          source: '/post-quantum-iam',
          destination: '/blogs/post-quantum-iam-identity-management-2024',
        },
        {
          source: '/ai-digital-experience',
          destination: '/blogs/ai-dem-digital-experience-monitoring-2024',
        },
        {
          source: '/api-security',
          destination: '/blogs/api-microservice-abuse-protection-2024',
        },
        {
          source: '/identity-first-security',
          destination: '/blogs/identity-first-security-strategy-2024',
        },
        {
          source: '/encrypted-channel-attacks',
          destination: '/blogs/encrypted-channel-attacks-defense-2024',
        },
        {
          source: '/cloud-data-security',
          destination: '/blogs/cloud-data-security-best-practices-2024',
        },
        {
          source: '/supply-chain-attacks',
          destination: '/blogs/supply-chain-attacks-mitigation-2024',
        },
        {
          source: '/sase-sse-framework',
          destination: '/blogs/sase-sse-security-framework-2024',
        },
        {
          source: '/quantum-safe-cryptography',
          destination: '/blogs/quantum-safe-cryptography-guide-2024',
        },
        {
          source: '/insider-threat-detection',
          destination: '/blogs/insider-threat-detection-prevention-2024',
        },
        {
          source: '/ot-iot-security',
          destination: '/blogs/ot-iot-security-industrial-systems-2024',
        },
        {
          source: '/responsible-ai-ethics',
          destination: '/blogs/responsible-ai-cybersecurity-ethics-2024',
        },
        {
          source: '/cyber-academy',
          destination: '/blogs/cyber-signal-academy-complete-offerings',
        },
        {
          source: '/secure-code-review',
          destination: '/blogs/secure-code-review-clinic-workshop',
        },
        {
          source: '/red-team-labs',
          destination: '/blogs/red-team-adversary-emulation-labs',
        },
        {
          source: '/blue-team-training',
          destination: '/blogs/blue-team-soc-simulation-room-training',
        },
        {
          source: '/web-accessibility',
          destination: '/blogs/web-accessibility-inclusive-design',
        },
        {
          source: '/progressive-web-apps',
          destination: '/blogs/building-progressive-web-apps-bridging-the-gap-between-web-and-mobile',
        },
        {
          source: '/web-dev-tools',
          destination: '/blogs/web-development-tools-productivity',
        },
        {
          source: '/pwa-guide',
          destination: '/blogs/progressive-web-apps-pwa',
        },
        {
          source: '/javascript-frameworks',
          destination: '/blogs/js-frameworks-comparison',
        },
        {
          source: '/css-grid-guide',
          destination: '/blogs/mastering-css-grid-layout',
        },
        {
          source: '/accessibility-practices',
          destination: '/blogs/web-accessibility-best-practices',
        },
        // Generic pattern for other blog posts (fallback)
        {
          source: '/article/:slug*',
          destination: '/blogs/:slug*',
        },
      ];
    },
    webpack: config => {
      config.plugins.push(new VeliteWebpackPlugin())
      return config
    }
  }
  
  class VeliteWebpackPlugin {
    static started = false
    apply(/** @type {import('webpack').Compiler} */ compiler) {
      // executed three times in nextjs
      // twice for the server (nodejs / edge runtime) and once for the client
      compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
        if (VeliteWebpackPlugin.started) return
        VeliteWebpackPlugin.started = true
        const dev = compiler.options.mode === 'development'
        const { build } = await import('velite')
        await build({ watch: dev, clean: !dev })
      })
    }
  }