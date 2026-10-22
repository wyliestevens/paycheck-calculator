import { states, taxDataUpdated } from '@/data/states'
import { blogPosts } from '@/data/blog'
import { salaryAmounts, salaryToSlug } from '@/lib/tax-calculator'
import { latestPostDate } from '@/lib/seo'
import type { MetadataRoute } from 'next'

// lastModified carries a real signal only if it changes when the page does:
// calculator pages move with the tax data, guides with their own dates.
// changeFrequency and priority are ignored by Google, so they are omitted.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.paycheck.center'
  const taxData = new Date(taxDataUpdated)
  const newestPost = new Date(latestPostDate(blogPosts))

  const statePages = states.map((state) => ({
    url: `${baseUrl}/${state.slug}`,
    lastModified: taxData,
  }))

  const salaryPages: MetadataRoute.Sitemap = []
  for (const state of states) {
    for (const amount of salaryAmounts) {
      salaryPages.push({
        url: `${baseUrl}/${state.slug}/${salaryToSlug(amount)}`,
        lastModified: taxData,
      })
    }
  }

  return [
    { url: baseUrl, lastModified: newestPost > taxData ? newestPost : taxData },
    ...statePages,
    ...salaryPages,
    { url: `${baseUrl}/blog`, lastModified: newestPost },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedDate && post.updatedDate > post.publishDate ? post.updatedDate : post.publishDate),
    })),
    { url: `${baseUrl}/about`, lastModified: taxData },
    { url: `${baseUrl}/author/wylie-stevens`, lastModified: taxData },
    { url: `${baseUrl}/contact`, lastModified: taxData },
    // /privacy and /terms are noindex and intentionally not listed.
  ]
}
