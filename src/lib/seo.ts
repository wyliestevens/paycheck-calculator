import type { BlogPost } from '@/data/blog'

// The site is served from www (the apex 307-redirects to it), so every
// canonical, sitemap entry, and schema URL must use the www host.
const baseUrl = 'https://www.paycheck.center'

export const siteName = 'PaycheckCalc'
export const organizationId = `${baseUrl}/#organization`
export const websiteId = `${baseUrl}/#website`
export const defaultImage = `${baseUrl}/opengraph-image`
export const logoUrl = `${baseUrl}/icon.svg`

export function canonicalUrl(path: string = ''): string {
  return `${baseUrl}${path}`
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: siteName,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    description: 'Free paycheck calculator for all 50 US states with 2026 tax rates.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@aipeakbiz.com',
      contactType: 'customer support',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'AI Peak Biz',
      url: 'https://www.aipeakbiz.com',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteName,
    url: baseUrl,
    inLanguage: 'en-US',
    publisher: { '@id': organizationId },
  }
}

export function webApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: siteName,
    url: baseUrl,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free paycheck calculator for all 50 US states. Calculate take-home pay after federal, state, Social Security, and Medicare taxes with 2026 rates.',
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function stateCalculatorSchema(stateName: string, stateSlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${stateName} Paycheck Calculator`,
    url: `${baseUrl}/${stateSlug}`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: `Free ${stateName} paycheck calculator. Calculate your take-home pay after federal, state, Social Security, and Medicare taxes with 2026 rates.`,
  }
}

/** BlogPosting markup for a single guide. Dates come from blog.ts. */
export function blogPostingSchema(post: BlogPost) {
  const url = `${baseUrl}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: defaultImage,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    keywords: post.keywords,
    author: { '@id': organizationId },
    publisher: { '@id': organizationId },
    isPartOf: { '@id': websiteId },
  }
}

/** Blog listing markup for /blog, newest first. */
export function blogIndexSchema(posts: BlogPost[]) {
  const sorted = [...posts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${baseUrl}/blog#blog`,
    name: `${siteName} Paycheck & Tax Guides`,
    url: `${baseUrl}/blog`,
    inLanguage: 'en-US',
    publisher: { '@id': organizationId },
    isPartOf: { '@id': websiteId },
    blogPost: sorted.map((p) => ({
      '@type': 'BlogPosting',
      '@id': `${baseUrl}/blog/${p.slug}#article`,
      headline: p.title,
      url: `${baseUrl}/blog/${p.slug}`,
      datePublished: p.publishDate,
    })),
  }
}
