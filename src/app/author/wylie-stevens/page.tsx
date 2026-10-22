import type { Metadata } from 'next'
import { blogPosts } from '@/data/blog'
import { taxYear, taxDataUpdated } from '@/data/states'
import { authorName, breadcrumbSchema, canonicalUrl, ogImage, personSchema, profilePageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: `${authorName} — Author`,
  description: `${authorName} builds and maintains PaycheckCalc, the free paycheck calculator for all 50 states, and writes its plain-English guides on withholding, FICA and take-home pay.`,
  alternates: { canonical: '/author/wylie-stevens' },
  openGraph: {
    type: 'profile',
    title: `${authorName} — Author at PaycheckCalc`,
    description: 'Founder of AI Peak Biz and the person behind every PaycheckCalc calculator and guide.',
    url: '/author/wylie-stevens',
    images: ogImage('/og/page/author', `${authorName}, author at PaycheckCalc`),
  },
}

function fmtDate(d: string) {
  return new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function AuthorPage() {
  const latest = [...blogPosts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1)).slice(0, 8)
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: canonicalUrl() },
    { name: 'About', url: canonicalUrl('/about') },
    { name: authorName, url: canonicalUrl('/author/wylie-stevens') },
  ])

  return (
    <div className="container container-narrow page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className="sep">/</span>
        <a href="/about">About</a>
        <span className="sep">/</span>
        <span className="here">{authorName}</span>
      </nav>

      <div className="page-doc">
        <span className="eyebrow">Author</span>
        <h1 style={{ marginTop: '0.5rem' }}>{authorName}</h1>
        <p className="lede">
          Founder of AI Peak Biz and the person who builds, checks and maintains PaycheckCalc.
        </p>

        <h2>Who writes this site</h2>
        <p>
          I&rsquo;m Wylie Stevens, a small-business owner based in the United States. I run AI Peak Biz, an automation
          and web studio, and Frontline Legal Nurse Consulting. I built PaycheckCalc because every paycheck calculator I
          tried either hid the math, asked for an email address, or quietly used last year&rsquo;s tax tables.
        </p>
        <p>
          I am not a CPA, enrolled agent, or attorney, and nothing on this site is tax advice. What I do is keep the
          numbers honest: every federal figure the calculator uses is taken from the IRS revenue procedure for the current
          tax year and the Social Security Administration&rsquo;s annual announcement, stored in one place in the code,
          and reused by every page and guide. When a figure changes, the whole site changes with it.
        </p>

        <h2>How the guides are produced</h2>
        <p>
          Guides are drafted with AI assistance under my direction, then reviewed before they go live. Each one is
          required to pull its tax constants from the same data the calculator uses, to link primary sources (IRS, SSA,
          state revenue departments), and to show its arithmetic in worked examples so you can check it yourself. If you
          spot an error, <a href="/contact">tell me</a> and I will correct it and note the update on the page.
        </p>

        <h2>Methodology and sources</h2>
        <p>
          The calculator assumes a single filer taking the {taxYear} standard deduction and ignores pre-tax benefits,
          local taxes and extra withholding. The full list of assumptions, the constants in use, and the sources behind
          them are on the <a href="/about#methodology">methodology section of the About page</a>. Tax tables were last
          verified against IRS and SSA publications on {taxDataUpdated}.
        </p>

        <h2>Latest guides by {authorName}</h2>
        <ul>
          {latest.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}`}>{p.title}</a>{' '}
              <span style={{ color: 'var(--text-3)', fontSize: '0.875rem' }}>({fmtDate(p.publishDate)})</span>
            </li>
          ))}
        </ul>
        <p>
          <a href="/blog" className="text-link">
            All {blogPosts.length} guides
          </a>
        </p>
      </div>
    </div>
  )
}
