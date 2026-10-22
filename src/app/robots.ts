import type { MetadataRoute } from 'next'

// Everything is crawlable. AI search and assistant crawlers are listed
// explicitly so the policy is unambiguous; only ByteDance's scraper is blocked.
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.paycheck.center'
  const aiAllowed = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'GoogleOther',
    'Applebot',
    'Applebot-Extended',
    'Amazonbot',
    'CCBot',
    'DuckAssistBot',
    'meta-externalagent',
  ]

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiAllowed.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: 'Bytespider', disallow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
