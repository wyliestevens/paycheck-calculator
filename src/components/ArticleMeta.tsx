import { blogPosts } from '@/data/blog'
import { authorName, authorPath } from '@/lib/seo'

interface Props {
  /** Slug of the post, so the byline and dates come from blog.ts rather than hand-typed text. */
  slug: string
}

function formatDate(d: string): string {
  return new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

/**
 * Byline + published/updated dates for a guide. Rendered directly under the H1.
 * The "Updated" date only appears when blog.ts carries an updatedDate newer
 * than the publish date, which is also what the BlogPosting schema reports.
 */
export default function ArticleMeta({ slug }: Props) {
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return null
  const updated = post.updatedDate && post.updatedDate > post.publishDate ? post.updatedDate : null

  return (
    <p className="article-meta">
      <span>
        By{' '}
        <a href={authorPath} rel="author">
          {authorName}
        </a>
      </span>
      <span className="dot" aria-hidden="true" />
      <span>
        Published <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
      </span>
      {updated && (
        <>
          <span className="dot" aria-hidden="true" />
          <span>
            Updated <time dateTime={updated}>{formatDate(updated)}</time>
          </span>
        </>
      )}
      <span className="dot" aria-hidden="true" />
      <span>{post.readingTime}</span>
    </p>
  )
}
