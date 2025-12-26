import { NextResponse } from 'next/server';

// News sources configuration
const NEWS_SOURCES = {
  // Cybersecurity News Sources
  cybersecurity: [
    {
      name: 'Krebs on Security',
      rss: 'https://krebsonsecurity.com/feed/',
      category: 'cybersecurity'
    },
    {
      name: 'The Hacker News',
      rss: 'https://feeds.feedburner.com/TheHackersNews',
      category: 'cybersecurity'
    },
    {
      name: 'Dark Reading',
      rss: 'https://www.darkreading.com/rss.xml',
      category: 'cybersecurity'
    },
    {
      name: 'Security Week',
      rss: 'https://www.securityweek.com/feed',
      category: 'cybersecurity'
    },
    {
      name: 'Bleeping Computer',
      rss: 'https://www.bleepingcomputer.com/feed/',
      category: 'cybersecurity'
    }
  ],
  // AI News Sources
  ai: [
    {
      name: 'AI News',
      rss: 'https://artificialintelligence-news.com/feed/',
      category: 'ai'
    },
    {
      name: 'MIT Technology Review AI',
      rss: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/',
      category: 'ai'
    },
    {
      name: 'VentureBeat AI',
      rss: 'https://venturebeat.com/ai/feed/',
      category: 'ai'
    }
  ],
  // Quantum Computing News Sources
  quantum: [
    {
      name: 'Quantum Computing Report',
      rss: 'https://quantumcomputingreport.com/feed/',
      category: 'quantum'
    },
    {
      name: 'IEEE Quantum',
      rss: 'https://spectrum.ieee.org/topic/computing/quantum-computing/feed',
      category: 'quantum'
    }
  ]
};

// Cache for storing news data
let newsCache = {
  data: [],
  lastUpdated: null,
  isUpdating: false
};

// Cache duration in milliseconds (15 minutes)
const CACHE_DURATION = 15 * 60 * 1000;

async function fetchRSSFeed(url, source) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'CyberSignal News Aggregator 1.0'
      },
      next: { revalidate: 900 } // 15 minutes
    });
    
    if (!response.ok) {
      console.warn(`Failed to fetch ${source.name}: ${response.status}`);
      return [];
    }
    
    const xmlText = await response.text();
    return parseRSSFeed(xmlText, source);
  } catch (error) {
    console.error(`Error fetching RSS from ${source.name}:`, error);
    return [];
  }
}

function parseRSSFeed(xmlText, source) {
  try {
    // Simple XML parsing for RSS feeds
    const items = [];
    const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/gi;
    let match;
    
    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemXml = match[1];
      
      const title = extractXMLContent(itemXml, 'title');
      const link = extractXMLContent(itemXml, 'link');
      const description = extractXMLContent(itemXml, 'description');
      const pubDate = extractXMLContent(itemXml, 'pubDate');
      const category = extractXMLContent(itemXml, 'category') || source.category;
      
      if (title && link) {
        items.push({
          id: generateNewsId(link),
          title: cleanText(title),
          link: link.trim(),
          description: cleanText(description),
          publishedAt: parseDate(pubDate),
          source: source.name,
          category: source.category,
          tags: extractTags(title + ' ' + description, source.category),
          priority: calculatePriority(title + ' ' + description, source.category)
        });
      }
    }
    
    return items.slice(0, 10); // Limit to 10 items per source
  } catch (error) {
    console.error(`Error parsing RSS from ${source.name}:`, error);
    return [];
  }
}

function extractXMLContent(xml, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function cleanText(text) {
  if (!text) return '';
  
  // Remove HTML tags
  text = text.replace(/<[^>]*>/g, '');
  
  // Decode HTML entities
  text = text.replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#39;/g, "'")
             .replace(/&nbsp;/g, ' ');
  
  return text.trim();
}

function parseDate(dateString) {
  if (!dateString) return new Date();
  
  try {
    return new Date(dateString);
  } catch (error) {
    return new Date();
  }
}

function generateNewsId(link) {
  // Generate a simple hash-like ID from the link
  let hash = 0;
  for (let i = 0; i < link.length; i++) {
    const char = link.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}

function extractTags(text, category) {
  const tags = [category];
  const lowerText = text.toLowerCase();
  
  // Cybersecurity tags
  const cyberKeywords = {
    'ransomware': ['ransomware', 'crypto', 'encryption'],
    'breach': ['breach', 'hack', 'compromise', 'leak'],
    'vulnerability': ['vulnerability', 'cve', 'exploit', 'flaw'],
    'malware': ['malware', 'virus', 'trojan', 'backdoor'],
    'phishing': ['phishing', 'social engineering', 'scam'],
    'zero-day': ['zero-day', 'zero day', '0-day'],
    'apt': ['apt', 'advanced persistent threat'],
    'ddos': ['ddos', 'denial of service'],
    'iot': ['iot', 'internet of things'],
    'cloud': ['cloud', 'aws', 'azure', 'gcp'],
    'ai-security': ['ai security', 'machine learning security', 'adversarial'],
    'quantum': ['quantum', 'post-quantum', 'cryptography']
  };
  
  // AI tags
  const aiKeywords = {
    'machine-learning': ['machine learning', 'ml', 'neural network'],
    'deep-learning': ['deep learning', 'ai model', 'artificial intelligence'],
    'nlp': ['natural language processing', 'nlp', 'chatbot'],
    'computer-vision': ['computer vision', 'image recognition'],
    'robotics': ['robotics', 'autonomous', 'robot'],
    'ethics': ['ai ethics', 'bias', 'fairness', 'responsible ai']
  };
  
  // Quantum tags
  const quantumKeywords = {
    'quantum-computing': ['quantum computing', 'qubit', 'quantum processor'],
    'quantum-cryptography': ['quantum cryptography', 'quantum key distribution'],
    'quantum-supremacy': ['quantum supremacy', 'quantum advantage'],
    'quantum-algorithms': ['quantum algorithm', 'shor', 'grover']
  };
  
  const allKeywords = { ...cyberKeywords, ...aiKeywords, ...quantumKeywords };
  
  for (const [tag, keywords] of Object.entries(allKeywords)) {
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      tags.push(tag);
    }
  }
  
  return [...new Set(tags)]; // Remove duplicates
}

function calculatePriority(text, category) {
  const lowerText = text.toLowerCase();
  let priority = 1; // Default priority
  
  // High priority keywords
  const highPriorityKeywords = [
    'breaking', 'urgent', 'critical', 'zero-day', 'breach', 'attack',
    'vulnerability', 'exploit', 'ransomware', 'malware', 'hack'
  ];
  
  // Medium priority keywords
  const mediumPriorityKeywords = [
    'security', 'threat', 'risk', 'warning', 'alert', 'update'
  ];
  
  if (highPriorityKeywords.some(keyword => lowerText.includes(keyword))) {
    priority = 3; // High priority
  } else if (mediumPriorityKeywords.some(keyword => lowerText.includes(keyword))) {
    priority = 2; // Medium priority
  }
  
  return priority;
}

async function aggregateNews() {
  if (newsCache.isUpdating) {
    return newsCache.data;
  }
  
  newsCache.isUpdating = true;
  
  try {
    const allNews = [];
    const allSources = [
      ...NEWS_SOURCES.cybersecurity,
      ...NEWS_SOURCES.ai,
      ...NEWS_SOURCES.quantum
    ];
    
    // Fetch news from all sources concurrently
    const fetchPromises = allSources.map(source => fetchRSSFeed(source.rss, source));
    const results = await Promise.allSettled(fetchPromises);
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        allNews.push(...result.value);
      } else {
        console.error(`Failed to fetch from ${allSources[index].name}:`, result.reason);
      }
    });
    
    // Sort by priority and date
    allNews.sort((a, b) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority; // Higher priority first
      }
      return new Date(b.publishedAt) - new Date(a.publishedAt); // Newer first
    });
    
    // Remove duplicates based on title similarity
    const uniqueNews = removeDuplicates(allNews);
    
    // Update cache
    newsCache.data = uniqueNews.slice(0, 50); // Keep top 50 articles
    newsCache.lastUpdated = new Date();
    
    return newsCache.data;
  } catch (error) {
    console.error('Error aggregating news:', error);
    return newsCache.data; // Return cached data on error
  } finally {
    newsCache.isUpdating = false;
  }
}

function removeDuplicates(articles) {
  const seen = new Set();
  const unique = [];
  
  for (const article of articles) {
    // Create a simple fingerprint based on title words
    const titleWords = article.title.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3)
      .sort()
      .slice(0, 5)
      .join(' ');
    
    if (!seen.has(titleWords)) {
      seen.add(titleWords);
      unique.push(article);
    }
  }
  
  return unique;
}

function isCacheValid() {
  if (!newsCache.lastUpdated) return false;
  return (Date.now() - newsCache.lastUpdated.getTime()) < CACHE_DURATION;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit')) || 20;
    const priority = searchParams.get('priority');
    
    // Check if we need to refresh the cache
    let newsData;
    if (isCacheValid() && newsCache.data.length > 0) {
      newsData = newsCache.data;
    } else {
      newsData = await aggregateNews();
    }
    
    // Filter by category if specified
    let filteredNews = newsData;
    if (category && category !== 'all') {
      filteredNews = newsData.filter(article => 
        article.category === category || article.tags.includes(category)
      );
    }
    
    // Filter by priority if specified
    if (priority) {
      const minPriority = parseInt(priority);
      filteredNews = filteredNews.filter(article => article.priority >= minPriority);
    }
    
    // Limit results
    const limitedNews = filteredNews.slice(0, limit);
    
    return NextResponse.json({
      success: true,
      data: limitedNews,
      meta: {
        total: filteredNews.length,
        limit: limit,
        category: category || 'all',
        lastUpdated: newsCache.lastUpdated,
        nextUpdate: newsCache.lastUpdated ? 
          new Date(newsCache.lastUpdated.getTime() + CACHE_DURATION) : null
      }
    });
    
  } catch (error) {
    console.error('News API error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch news',
      data: [],
      meta: {
        total: 0,
        limit: 0,
        category: 'all',
        lastUpdated: null,
        nextUpdate: null
      }
    }, { status: 500 });
  }
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;