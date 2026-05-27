const baseUrl = 'https://paycheck.center'

export function canonicalUrl(path: string = ''): string {
  return `${baseUrl}${path}`
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PaycheckCalc',
    url: baseUrl,
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

export function webApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PaycheckCalc',
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
