export const metadata = {
  title: "Product Reviews",
  description: "Comprehensive reviews of cybersecurity products, tools, and solutions. Expert analysis and recommendations.",
};

export default function ProductReviews() {
  const featuredReviews = [
    {
      id: 1,
      product: "CrowdStrike Falcon",
      category: "Endpoint Protection",
      rating: 4.8,
      pros: ["Advanced threat detection", "Cloud-native architecture", "Real-time response"],
      cons: ["Premium pricing", "Learning curve"],
      summary: "Industry-leading endpoint protection with AI-powered threat detection and response capabilities.",
      featured: true
    },
    {
      id: 2,
      product: "Splunk SIEM",
      category: "Security Information and Event Management",
      rating: 4.6,
      pros: ["Powerful analytics", "Scalable platform", "Extensive integrations"],
      cons: ["Complex setup", "Resource intensive"],
      summary: "Comprehensive SIEM solution with advanced analytics and threat hunting capabilities."
    },
    {
      id: 3,
      product: "Okta Identity Cloud",
      category: "Identity & Access Management",
      rating: 4.7,
      pros: ["Easy integration", "Strong SSO", "Comprehensive MFA"],
      cons: ["Cost per user", "Limited customization"],
      summary: "Leading cloud-based identity and access management platform with robust security features."
    }
  ];

  const categories = [
    {
      name: "Endpoint Protection",
      count: 12,
      icon: "💻",
      description: "Antivirus, EDR, and endpoint security solutions"
    },
    {
      name: "Network Security",
      count: 8,
      icon: "🌐",
      description: "Firewalls, IDS/IPS, and network monitoring tools"
    },
    {
      name: "Cloud Security",
      count: 15,
      icon: "☁️",
      description: "CASB, CSPM, and cloud-native security platforms"
    },
    {
      name: "Identity Management",
      count: 10,
      icon: "🔐",
      description: "IAM, SSO, and privileged access management"
    },
    {
      name: "SIEM & Analytics",
      count: 6,
      icon: "📊",
      description: "Security information and event management platforms"
    },
    {
      name: "Vulnerability Management",
      count: 9,
      icon: "🎯",
      description: "Vulnerability scanners and assessment tools"
    }
  ];

  const recentReviews = [
    {
      id: 4,
      product: "Tenable Nessus",
      category: "Vulnerability Scanner",
      rating: 4.5,
      date: "2024-01-15"
    },
    {
      id: 5,
      product: "Palo Alto Prisma",
      category: "Cloud Security",
      rating: 4.4,
      date: "2024-01-10"
    },
    {
      id: 6,
      product: "Microsoft Sentinel",
      category: "SIEM",
      rating: 4.3,
      date: "2024-01-05"
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-500">⭐</span>
        ))}
        {hasHalfStar && <span className="text-yellow-500">⭐</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300">⭐</span>
        ))}
        <span className="ml-2 text-sm text-dark/70 dark:text-light/70">({rating})</span>
      </div>
    );
  };

  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full inline-block">
        <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
          
          <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
            <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark dark:bg-light text-light dark:text-dark rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-dark hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
              Product Reviews
            </div>
            <h1 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                Cybersecurity Product Reviews
              </span>
            </h1>
            <p className="mt-4 md:text-lg lg:text-xl font-in">
              Expert reviews and analysis of cybersecurity products, tools, and solutions. Make informed decisions with our comprehensive evaluations and recommendations.
            </p>
          </div>
        </article>
      </div>

      {/* Featured Review */}
      <section className="w-full mt-16 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          {featuredReviews.filter(review => review.featured).map(review => (
            <div key={review.id} className="bg-gradient-to-r from-accent/10 to-accentDark/10 p-8 rounded-lg border border-accent mb-12">
              <div className="flex items-center mb-4">
                <span className="bg-accent text-light px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  Featured Review
                </span>
                <span className="bg-light dark:bg-dark px-3 py-1 rounded-full text-sm font-semibold text-dark dark:text-light">
                  {review.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-4">
                {review.product}
              </h2>
              <div className="mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-dark/70 dark:text-light/70 mb-6 text-lg">
                {review.summary}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ Pros</h4>
                  <ul className="space-y-1">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="text-dark/70 dark:text-light/70 text-sm">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">❌ Cons</h4>
                  <ul className="space-y-1">
                    {review.cons.map((con, index) => (
                      <li key={index} className="text-dark/70 dark:text-light/70 text-sm">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="px-8 py-3 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                Read Full Review
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8 text-center">
            Review Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <div>
                    <h3 className="font-bold text-dark dark:text-light group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-sm text-accent">{category.count} reviews</span>
                  </div>
                </div>
                <p className="text-dark/70 dark:text-light/70 text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-light mb-8">
            Recent Reviews
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredReviews.filter(review => !review.featured).concat(recentReviews).map(review => (
              <div key={review.id} className="bg-light dark:bg-dark p-6 rounded-lg border border-solid border-dark dark:border-light hover:shadow-lg transition-all ease duration-200 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                    {review.category}
                  </span>
                  {review.date && (
                    <span className="text-xs text-dark/70 dark:text-light/70">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-light mb-3 group-hover:text-accent transition-colors">
                  {review.product}
                </h3>
                <div className="mb-4">
                  {renderStars(review.rating)}
                </div>
                {review.summary && (
                  <p className="text-dark/70 dark:text-light/70 text-sm mb-4">
                    {review.summary}
                  </p>
                )}
                <button className="w-full px-4 py-2 bg-accent text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200">
                  Read Review
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Methodology */}
      <section className="w-full px-5 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-light dark:bg-dark p-8 rounded-lg border border-solid border-dark dark:border-light">
            <h2 className="text-2xl font-bold text-dark dark:text-light mb-6 text-center">
              Our Review Methodology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h4 className="font-bold text-dark dark:text-light mb-2">Research</h4>
                <p className="text-sm text-dark/70 dark:text-light/70">
                  Comprehensive analysis of features, capabilities, and market position
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧪</div>
                <h4 className="font-bold text-dark dark:text-light mb-2">Testing</h4>
                <p className="text-sm text-dark/70 dark:text-light/70">
                  Hands-on evaluation in real-world scenarios and controlled environments
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="font-bold text-dark dark:text-light mb-2">Analysis</h4>
                <p className="text-sm text-dark/70 dark:text-light/70">
                  Objective scoring based on performance, usability, and value
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">✍️</div>
                <h4 className="font-bold text-dark dark:text-light mb-2">Review</h4>
                <p className="text-sm text-dark/70 dark:text-light/70">
                  Detailed write-up with pros, cons, and recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}