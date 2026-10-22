import { blogPosts } from '@/data/blog'
import type { Metadata } from 'next'
import { blogIndexSchema, breadcrumbSchema, canonicalUrl, ogImage } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Tax Tips, State Comparisons & Salary Guides',
  description: 'Paycheck guides, state tax comparisons, salary planning tips, and everything you need to understand your take-home pay in 2026.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Paycheck & Tax Guides | PaycheckCalc',
    description: 'Tax tips, state comparisons, and salary guides for 2026.',
    url: '/blog',
    images: ogImage('/og/page/blog', 'PaycheckCalc paycheck and tax guides'),
  },
}

function fmtDate(d: string) {
  return new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function BlogPage() {
  // Newest first. Posts are appended to the data file as they publish, so
  // sort here rather than relying on array order.
  const sorted = [...blogPosts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
  const [featured, ...rest] = sorted

  return (
    <div className="container page stack-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema(blogPosts)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: canonicalUrl() }, { name: 'Guides', url: canonicalUrl('/blog') }])),
        }}
      />
      <div className="page-head center">
        <span className="eyebrow eyebrow-plain">{blogPosts.length} guides and counting</span>
        <h1>Paycheck &amp; tax guides</h1>
        <p className="lede">
          Practical, plain-English explainers on withholding, deductions, state taxes, and what really lands in your
          account. New guides published regularly.
        </p>
      </div>

      {featured && (
        <a href={`/blog/${featured.slug}`} className="featured">
          <div className="featured-art" style={{ background: featured.heroColor }}>
            <span className="glyph" aria-hidden="true">
              {featured.heroIcon}
            </span>
          </div>
          <div className="featured-body">
            <span className="badge badge-gold">Latest</span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <div className="post-meta">
              <span>{fmtDate(featured.publishDate)}</span>
              <span className="dot" />
              <span>{featured.readingTime}</span>
            </div>
          </div>
        </a>
      )}

      <section>
        <div className="section-head">
          <div>
            <span className="eyebrow">All guides</span>
            <h2>Newest to oldest</h2>
          </div>
        </div>
        <div className="post-grid">
          {rest.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="post-card"
              style={{ ['--post-color' as string]: post.heroColor }}
            >
              <span className="glyph" aria-hidden="true">
                {post.heroIcon}
              </span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="post-meta">
                <span>{fmtDate(post.publishDate)}</span>
                <span className="dot" />
                <span>{post.readingTime}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
