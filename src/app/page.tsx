import { states, getStateBySlug, federalBrackets, federalStandardDeduction, socialSecurityWageCap, taxYear, usd } from '@/data/states'
import { blogPosts } from '@/data/blog'
import { calculateTakeHome } from '@/lib/tax-calculator'
import type { Metadata } from 'next'
import { webApplicationSchema, ogImage } from '@/lib/seo'
import StateFinder from '@/components/StateFinder'

export const metadata: Metadata = {
  title: 'Free Paycheck Calculator by State | 2026 Tax Rates',
  description: 'Calculate your take-home pay in any US state. Free paycheck calculator with 2026 federal and state tax rates, Social Security, and Medicare deductions.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Free Paycheck Calculator by State | 2026 Tax Rates',
    description: 'Calculate your take-home pay in any US state. Free paycheck calculator with 2026 federal and state tax rates.',
    url: '/',
    images: ogImage('/opengraph-image', 'PaycheckCalc — free paycheck calculator for every US state'),
  },
}

const money = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
const money2 = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })

function topRate(s: (typeof states)[number]): number {
  if (!s.hasStateTax) return 0
  if (s.taxType === 'flat') return s.flatRate! * 100
  return s.brackets ? s.brackets[s.brackets.length - 1].rate * 100 : 0
}

function fmtDate(d: string) {
  return new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function HomePage() {
  const noTaxStates = states.filter((s) => !s.hasStateTax)
  const taxStates = states.filter((s) => s.hasStateTax)

  // Example pay stub shown in the hero
  const exampleState = getStateBySlug('texas') ?? states[0]
  const exampleSalary = 75000
  const ex = calculateTakeHome(exampleSalary, exampleState)
  const perCheck = ex.takeHomePay / 26

  const latest = [...blogPosts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1)).slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema()) }}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow rise" style={{ ['--i' as string]: 0 }}>
                2026 federal &amp; state rates
              </span>
              <h1 className="rise" style={{ ['--i' as string]: 1 }}>
                Know what you&rsquo;ll <em>actually</em> take home.
              </h1>
              <p className="hero-lede rise" style={{ ['--i' as string]: 2 }}>
                A free paycheck calculator for every US state. Enter a salary, pick how often you&rsquo;re paid, and
                see federal, state, Social Security, and Medicare taxes broken out line by line.
              </p>
              <div className="rise" style={{ ['--i' as string]: 3 }}>
                <StateFinder />
              </div>
              <div className="hero-stats rise" style={{ ['--i' as string]: 4 }}>
                <div className="hero-stat">
                  <strong>50</strong>
                  <span>state calculators</span>
                </div>
                <div className="hero-stat">
                  <strong>9</strong>
                  <span>states with no income tax</span>
                </div>
                <div className="hero-stat">
                  <strong>{blogPosts.length}+</strong>
                  <span>plain-English tax guides</span>
                </div>
                <div className="hero-stat">
                  <strong>$0</strong>
                  <span>always free, no sign-up</span>
                </div>
              </div>
            </div>

            <aside className="stub rise" style={{ ['--i' as string]: 2 }} aria-label="Example paycheck">
              <div className="stub-head">
                <span className="eyebrow eyebrow-plain">Example &middot; {exampleState.name}</span>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>
                  Bi-weekly
                </span>
              </div>
              <div className="stub-body">
                <div className="stub-row">
                  <span>Gross pay</span>
                  <span className="mono">{money2(ex.grossSalary / 26)}</span>
                </div>
                <div className="stub-row neg">
                  <span>Federal income tax</span>
                  <span className="mono">&minus;{money2(ex.federalTax / 26)}</span>
                </div>
                <div className="stub-row neg">
                  <span>{exampleState.name} state tax</span>
                  <span className="mono">&minus;{money2(ex.stateTax / 26)}</span>
                </div>
                <div className="stub-row neg">
                  <span>Social Security (6.2%)</span>
                  <span className="mono">&minus;{money2(ex.socialSecurity / 26)}</span>
                </div>
                <div className="stub-row neg">
                  <span>Medicare (1.45%)</span>
                  <span className="mono">&minus;{money2(ex.medicare / 26)}</span>
                </div>
                <div className="stub-total">
                  <span>Take-home pay</span>
                  <strong>{money2(perCheck)}</strong>
                </div>
              </div>
              <div className="stub-foot">
                <span>{money(exampleSalary)} salary</span>
                <span>{(ex.effectiveRate * 100).toFixed(1)}% effective rate</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="container page stack-lg">
        <div className="ad-slot ad-slot-horizontal" style={{ margin: 0 }}>Advertisement</div>

        {/* ---------------- No tax states ---------------- */}
        <section id="states">
          <div className="section-head">
            <div>
              <span className="eyebrow">Keep more of every check</span>
              <h2>States with no income tax</h2>
              <p>
                Nine states skip income tax entirely. Your only deductions are federal income tax and FICA.
              </p>
            </div>
          </div>
          <div className="state-grid">
            {noTaxStates.map((s) => (
              <a key={s.slug} href={`/${s.slug}`} className="state-tile free">
                <span className="abbr-bg" aria-hidden="true">
                  {s.abbreviation}
                </span>
                <span className="name">{s.name}</span>
                <span className="meta">0% state tax</span>
              </a>
            ))}
          </div>
        </section>

        {/* ---------------- All other states ---------------- */}
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">Every other state</span>
              <h2>Paycheck calculators by state</h2>
              <p>
                Flat-rate and progressive states, each with 2026 brackets and standard deductions already applied.
              </p>
            </div>
          </div>
          <div className="state-grid">
            {taxStates.map((s) => (
              <a key={s.slug} href={`/${s.slug}`} className="state-tile">
                <span className="abbr-bg" aria-hidden="true">
                  {s.abbreviation}
                </span>
                <span className="name">{s.name}</span>
                <span className="meta">
                  {s.taxType === 'flat' ? 'Flat' : 'Progressive'} &middot; top {topRate(s).toFixed(2)}%
                </span>
              </a>
            ))}
          </div>
        </section>

        <div className="ad-slot ad-slot-horizontal" style={{ margin: 0 }}>Advertisement</div>

        {/* ---------------- Latest guides ---------------- */}
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">Fresh guides</span>
              <h2>Understand your paycheck</h2>
              <p>New plain-English guides on taxes, withholding, and take-home pay, published regularly.</p>
            </div>
            <a href="/blog" className="text-link">
              Browse all {blogPosts.length} guides
            </a>
          </div>
          <div className="post-grid">
            {latest.map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="post-card"
                style={{ ['--post-color' as string]: p.heroColor }}
              >
                <span className="glyph" aria-hidden="true">
                  {p.heroIcon}
                </span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="post-meta">
                  <span>{fmtDate(p.publishDate)}</span>
                  <span className="dot" />
                  <span>{p.readingTime}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------------- SEO content ---------------- */}
        <section className="container-narrow" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="prose">
            <span className="eyebrow">How it works</span>
            <h2 style={{ marginTop: '0.5rem' }}>How to calculate your take-home pay</h2>
            <p>
              Your take-home pay is your gross salary minus all tax withholdings. These include federal income tax,
              state income tax (if your state levies one), Social Security tax at 6.2% on the first{' '}
              {usd(socialSecurityWageCap)} of earnings, and Medicare tax at 1.45% on all earnings.
            </p>
            <p>
              Federal income tax uses a progressive bracket system for {taxYear}, ranging from 10% on the first{' '}
              {usd(federalBrackets[0].max!)} of taxable income up to 37% on income above{' '}
              {usd(federalBrackets[federalBrackets.length - 1].min)}. Your taxable income is your gross income minus
              the standard deduction of {usd(federalStandardDeduction)} for single filers.
            </p>
            <p>
              State income taxes vary widely. Nine states charge no income tax at all: Alaska, Florida, Nevada, New
              Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Others range from North Dakota at
              2.9% up to California at 13.3%.
            </p>
            <h2>{taxYear} federal tax brackets (single filer)</h2>
          </div>
          <div className="table-card" style={{ marginTop: '1rem' }}>
            <div className="table-scroll">
              <table className="ledger">
                <thead>
                  <tr>
                    <th>Tax rate</th>
                    <th>Taxable income</th>
                  </tr>
                </thead>
                <tbody>
                  {federalBrackets.map((b) => (
                    <tr key={b.rate}>
                      <td className="rate">{Math.round(b.rate * 100)}%</td>
                      <td style={{ color: 'var(--text-2)' }}>
                        {b.max ? `${usd(b.min)} – ${usd(b.max)}` : `${usd(b.min)}+`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
