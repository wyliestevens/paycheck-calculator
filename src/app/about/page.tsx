import type { Metadata } from 'next'
import {
  federalBrackets,
  federalStandardDeduction,
  socialSecurityWageCap,
  additionalMedicareThreshold,
  taxYear,
  taxDataUpdated,
  usd,
} from '@/data/states'
import { authorName, authorPath, breadcrumbSchema, canonicalUrl, ogImage, webPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About PaycheckCalc: Who Runs It and How the Math Works',
  description: `Who is behind PaycheckCalc, how the free paycheck calculator computes take-home pay for all 50 states, which ${taxYear} IRS and SSA figures it uses, and what it leaves out.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About PaycheckCalc',
    description: `Who runs the free paycheck calculator, how the ${taxYear} math works, and where every figure comes from.`,
    url: '/about',
    images: ogImage('/og/page/about', 'About PaycheckCalc'),
  },
}

function fmtDate(d: string) {
  return new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: canonicalUrl() },
    { name: 'About', url: canonicalUrl('/about') },
  ])
  const page = webPageSchema({
    path: '/about',
    name: 'About PaycheckCalc',
    description: metadata.description as string,
  })

  return (
    <div className="container container-narrow page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />

      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className="sep">/</span>
        <span className="here">About</span>
      </nav>

      <div className="page-doc">
        <span className="eyebrow">About</span>
        <h1 style={{ marginTop: '0.5rem' }}>About PaycheckCalc</h1>
        <p className="lede">
          A free paycheck calculator for every US state, built to show the math instead of hiding it. No sign-up, no
          email capture, no &ldquo;talk to an advisor&rdquo; funnel.
        </p>

        <h2>What it does</h2>
        <p>
          Enter a salary and how often you are paid, and PaycheckCalc shows your take-home pay after federal income tax,
          state income tax (where your state has one), Social Security and Medicare, broken out line by line. Every
          state has its own calculator, and the most-searched salaries have ready-made pages so you can get an answer
          without typing anything.
        </p>

        <h2 id="who">Who is behind it</h2>
        <p>
          PaycheckCalc is built and maintained by <a href={authorPath}>{authorName}</a>, founder of AI Peak Biz, a
          small automation and web studio. Wylie is a business owner, not a tax professional, which is exactly why the
          site is strict about sourcing: every number comes from an IRS or Social Security Administration publication,
          lives in one place in the code, and is reused by every page. Read more on the{' '}
          <a href={authorPath}>author page</a>.
        </p>

        <h2 id="methodology">Methodology</h2>
        <p>
          The calculator uses the following {taxYear} federal figures. They were last verified on{' '}
          <strong>{fmtDate(taxDataUpdated)}</strong> against IRS Revenue Procedure 2025-32 and the SSA&rsquo;s {taxYear}{' '}
          cost-of-living announcement.
        </p>
        <ul>
          <li>
            Federal standard deduction (single filer): <strong>{usd(federalStandardDeduction)}</strong>
          </li>
          <li>
            Federal income tax brackets (single filer):{' '}
            {federalBrackets
              .map((b) => (b.max ? `${Math.round(b.rate * 100)}% up to ${usd(b.max)}` : `${Math.round(b.rate * 100)}% above ${usd(b.min)}`))
              .join('; ')}
          </li>
          <li>
            Social Security tax: 6.2% of wages up to the <strong>{usd(socialSecurityWageCap)}</strong> wage base
          </li>
          <li>
            Medicare tax: 1.45% of all wages, plus the 0.9% Additional Medicare Tax above {usd(additionalMedicareThreshold)}{' '}
            (shown in guides; not applied by the calculator)
          </li>
          <li>State income tax: each state&rsquo;s own flat rate or bracket table and standard deduction, applied to the same gross salary</li>
        </ul>
        <p>
          Taxable income is gross salary minus the standard deduction. Tax is computed bracket by bracket, then Social
          Security and Medicare are applied to gross wages. Take-home pay is what remains, divided by the number of pay
          periods you choose.
        </p>

        <h3>What the estimate leaves out</h3>
        <ul>
          <li>Pre-tax benefits such as 401(k) contributions, health premiums, HSA or FSA deposits</li>
          <li>Filing statuses other than single, dependents, and credits</li>
          <li>City or county income taxes (for example New York City or Philadelphia)</li>
          <li>State disability, paid-leave and unemployment contributions withheld from employees in some states</li>
          <li>Extra withholding you request on Form W-4, bonuses taxed at the supplemental rate, and overtime</li>
        </ul>
        <p>
          Because of this, your real paycheck will usually be a little smaller than the estimate if you have pre-tax
          benefits, and your year-end tax bill may differ. For an exact figure use the{' '}
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer">
            IRS Tax Withholding Estimator
          </a>{' '}
          or a tax professional.
        </p>

        <h3>Sources</h3>
        <ul>
          <li>
            <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer">
              IRS Revenue Procedure 2025-32
            </a>{' '}
            ({taxYear} inflation adjustments: brackets and standard deduction)
          </li>
          <li>
            <a href="https://www.ssa.gov/news/press/factsheets/colafacts2026.pdf" target="_blank" rel="noopener noreferrer">
              SSA {taxYear} COLA fact sheet
            </a>{' '}
            (Social Security wage base)
          </li>
          <li>
            <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer">
              IRS Topic 751
            </a>{' '}
            (Social Security and Medicare withholding rates)
          </li>
          <li>Each state&rsquo;s Department of Revenue for state rates and deductions</li>
        </ul>

        <h2 id="corrections">Corrections and updates</h2>
        <p>
          When the IRS or SSA publishes new figures, the constants are updated in one place and every calculator, salary
          page and guide picks them up on the next deploy. Guides that are materially revised show an &ldquo;Updated&rdquo;
          date under their title. If you find an error, please <a href="/contact">contact us</a> with the figure and a
          source; corrections are made promptly and credited on the page.
        </p>

        <h2>Advertising and privacy</h2>
        <p>
          The site is free and supported by advertising. Calculations run entirely in your browser; no salary you enter
          is sent to us or stored. See the <a href="/privacy">privacy policy</a> and <a href="/terms">terms</a>.
        </p>

        <h2>Disclaimer</h2>
        <p>
          PaycheckCalc provides estimates for informational purposes only and is not tax, legal or financial advice.
          PaycheckCalc is operated by AI Peak Biz. For questions or feedback, visit the{' '}
          <a href="/contact">contact page</a>.
        </p>
      </div>
    </div>
  )
}
