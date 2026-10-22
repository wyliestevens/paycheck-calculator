import type { Metadata } from 'next'

// Error pages must not inherit the site canonical or an index directive.
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
  alternates: {},
}

export default function NotFound() {
  return (
    <div className="container container-narrow page">
      <div className="page-doc">
        <span className="eyebrow">404</span>
        <h1 style={{ marginTop: '0.5rem' }}>That page doesn&rsquo;t exist</h1>
        <p className="lede">
          The address may be mistyped, or the page may have moved. State calculators live at{' '}
          <code>/state-name</code> (for example <a href="/texas">/texas</a>), and salary pages at{' '}
          <code>/state-name/75000-salary</code>.
        </p>
        <p>
          <a href="/" className="btn btn-ink">
            Back to the calculator
          </a>{' '}
          <a href="/blog" className="btn">
            Browse the guides
          </a>
        </p>
      </div>
    </div>
  )
}
