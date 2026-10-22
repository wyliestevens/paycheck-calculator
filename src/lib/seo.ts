import type { BlogPost } from '@/data/blog'
import { taxYear, taxDataUpdated } from '@/data/states'

// The site is served from www (the apex redirects to it), so every
// canonical, sitemap entry, and schema URL must use the www host.
const baseUrl = 'https://www.paycheck.center'

export const siteName = 'PaycheckCalc'
export const siteAlternateName = 'Paycheck Center'
export const organizationId = `${baseUrl}/#organization`
export const websiteId = `${baseUrl}/#website`
export const appId = `${baseUrl}/#app`
export const defaultImage = `${baseUrl}/opengraph-image`
export const logoUrl = `${baseUrl}/logo-512.png`

// The person responsible for the content. One author across the site keeps
// E-E-A-T signals consistent; the bio lives at /author/wylie-stevens.
export const authorName = 'Wylie Stevens'
export const authorPath = '/author/wylie-stevens'
export const authorUrl = `${baseUrl}${authorPath}`
export const authorId = `${authorUrl}#person`

export function canonicalUrl(path: string = ''): string {
  return `${baseUrl}${path}`
}

/** Open Graph image descriptor for Next metadata. `path` is a site-relative /og/... URL. */
export function ogImage(path: string, alt: string) {
  return [{ url: path, width: 1200, height: 630, alt }]
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: siteName,
    alternateName: [siteAlternateName, 'paycheck.center'],
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 512,
      height: 512,
    },
    description: `Free paycheck calculator for all 50 US states with ${taxYear} tax rates.`,
    founder: { '@id': authorId },
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
    alternateName: siteAlternateName,
    url: baseUrl,
    inLanguage: 'en-US',
    publisher: { '@id': organizationId },
  }
}

/** The named author behind every guide and the calculator methodology. */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': authorId,
    name: authorName,
    url: authorUrl,
    jobTitle: 'Founder',
    worksFor: { '@id': organizationId },
    description:
      'Business owner and founder of AI Peak Biz. Builds and maintains PaycheckCalc, sourcing every tax figure from IRS and Social Security Administration publications.',
    knowsAbout: ['Paycheck calculation', 'Federal income tax withholding', 'FICA taxes', 'State income tax', 'Take-home pay'],
    sameAs: ['https://www.aipeakbiz.com'],
  }
}

export function profilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${authorUrl}#page`,
    url: authorUrl,
    name: `${authorName} — author at ${siteName}`,
    dateModified: taxDataUpdated,
    mainEntity: { '@id': authorId },
    isPartOf: { '@id': websiteId },
  }
}

export function webApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': appId,
    name: siteName,
    alternateName: siteAlternateName,
    url: baseUrl,
    image: defaultImage,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: { '@id': organizationId },
    publisher: { '@id': organizationId },
    featureList: [
      'Take-home pay for all 50 US states',
      'Weekly, bi-weekly, semi-monthly, monthly and annual pay periods',
      `${taxYear} federal brackets, Social Security and Medicare`,
      'Pre-calculated salary pages from $30,000 to $300,000',
    ],
    description: `Free paycheck calculator for all 50 US states. Calculate take-home pay after federal, state, Social Security, and Medicare taxes with ${taxYear} rates.`,
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

/** WebPage node for calculator and salary pages so they carry a real dateModified. */
export function webPageSchema(opts: { path: string; name: string; description: string; dateModified?: string }) {
  const url = canonicalUrl(opts.path)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'en-US',
    dateModified: opts.dateModified ?? taxDataUpdated,
    isPartOf: { '@id': websiteId },
    about: { '@id': appId },
    publisher: { '@id': organizationId },
  }
}

export function stateCalculatorSchema(stateName: string, stateSlug: string) {
  const url = `${baseUrl}/${stateSlug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${url}#app`,
    name: `${stateName} Paycheck Calculator`,
    url,
    image: `${baseUrl}/og/state/${stateSlug}`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: { '@id': organizationId },
    publisher: { '@id': organizationId },
    isPartOf: { '@id': appId },
    description: `Free ${stateName} paycheck calculator. Calculate your take-home pay after federal, state, Social Security, and Medicare taxes with ${taxYear} rates.`,
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
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og/blog/${post.slug}`,
      width: 1200,
      height: 630,
    },
    datePublished: post.publishDate,
    dateModified: post.updatedDate ?? post.publishDate,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    keywords: post.keywords,
    author: {
      '@type': 'Person',
      '@id': authorId,
      name: authorName,
      url: authorUrl,
    },
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
      dateModified: p.updatedDate ?? p.publishDate,
      author: { '@id': authorId },
    })),
  }
}

/** Newest activity date across the blog, for the /blog sitemap entry. */
export function latestPostDate(posts: BlogPost[]): string {
  return posts.reduce((max, p) => {
    const d = p.updatedDate && p.updatedDate > p.publishDate ? p.updatedDate : p.publishDate
    return d > max ? d : max
  }, '2026-01-01')
}
