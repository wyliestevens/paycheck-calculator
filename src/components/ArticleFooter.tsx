import { blogPosts } from '@/data/blog'
import { blogPostingSchema, breadcrumbSchema, canonicalUrl } from '@/lib/seo'

interface Props {
  /** Slug of the post currently being read, so it is excluded from suggestions. */
  current: string
  /** Optional hand-picked related slugs (shown first, in order); the newest guides fill any remaining slots. */
  related?: string[]
}

function formatDate(d: string): string {
  return new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

/**
 * Shared footer for every blog post: three more guides (newest first) plus the
 * post's BlogPosting and BreadcrumbList JSON-LD. Rendered inside the post's
 * <article>, so each post gets structured data without editing the post file.
 */
export default function ArticleFooter({ current, related: picked = [] }: Props) {
  const post = blogPosts.find((p) => p.slug === current)

  const chosen = picked
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is (typeof blogPosts)[number] => !!p && p.slug !== current)
  const newest = [...blogPosts]
    .filter((p) => p.slug !== current && !chosen.some((c) => c.slug === p.slug))
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
  const related = [...chosen, ...newest].slice(0, Math.max(3, chosen.length))

  return (
    <>
      {post && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema(post)) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                breadcrumbSchema([
                  { name: 'Home', url: canonicalUrl() },
                  { name: 'Guides', url: canonicalUrl('/blog') },
                  { name: post.title, url: canonicalUrl(`/blog/${post.slug}`) },
                ])
              ),
            }}
          />
        </>
      )}

      <div className="article-footer">
        <div className="section-head">
          <div>
            <span className="eyebrow">Keep reading</span>
            <h2>More paycheck guides</h2>
          </div>
          <a href="/blog" className="text-link">
            All guides
          </a>
        </div>
        <div className="related">
          {related.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`}>
              <span className="glyph" style={{ background: p.heroColor }} aria-hidden="true">
                {p.heroIcon}
              </span>
              <span>
                {p.title}
                <small>
                  {formatDate(p.publishDate)} &middot; {p.readingTime}
                </small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
