import { states, taxDataUpdated } from '@/data/states'
import { blogPosts } from '@/data/blog'
import { latestPostDate } from '@/lib/seo'
import type { MetadataRoute } from 'next'

// lastModified carries a real signal only if it changes when the page does:
// calculator pages move with the tax data, guides with their own dates.
// changeFrequency and priority are ignored by Google, so they are omitted.
//
// The 1,200 /[state]/[amount]-salary pages are deliberately NOT listed. They are
// noindex (see src/app/[state]/[salary]/page.tsx) because they are computed
// variants of one template; listing them made 89% of the sitemap near-duplicate.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.paycheck.center'
  const taxData = new Date(taxDataUpdated)
  const newestPost = new Date(latestPostDate(blogPosts))

  const statePages = states.map((state) => ({
    url: `${baseUrl}/${state.slug}`,
    lastModified: taxData,
  }))

  return [
    { url: baseUrl, lastModified: newestPost > taxData ? newestPost : taxData },
    ...statePages,
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
