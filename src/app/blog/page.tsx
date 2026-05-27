import { blogPosts } from '@/data/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Tax Tips, State Comparisons & Salary Guides',
  description: 'Paycheck guides, state tax comparisons, salary planning tips, and everything you need to understand your take-home pay in 2026.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'PaycheckCalc Blog',
    description: 'Tax tips, state comparisons, and salary guides for 2026.',
  },
}

export default function BlogPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '0.75rem',
          }}
        >
          Paycheck & Tax Guides
        </h1>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
          Practical guides to help you understand your paycheck, compare salaries across states, and plan your finances for 2026.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: 'block',
              padding: '1.5rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.15s, box-shadow 0.15s',
            }}
          >
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '10px',
                  background: post.heroColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  flexShrink: 0,
                }}
              >
                {post.heroIcon}
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.375rem', lineHeight: 1.3 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  {post.excerpt}
                </p>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {post.readingTime}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
