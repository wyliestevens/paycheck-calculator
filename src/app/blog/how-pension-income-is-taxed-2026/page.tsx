import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'

export const metadata: Metadata = {
  title: 'How Pension Income Is Taxed in 2026: A Complete Guide',
  description:
    'Pension income is taxed as ordinary income at federal rates — but with no FICA, an extra senior standard deduction, and partial state exemptions in many states. Full 2026 guide with worked examples.',
  alternates: { canonical: '/blog/how-pension-income-is-taxed-2026' },
  keywords:
    'how is pension income taxed, pension income taxes 2026, defined benefit pension tax, Form 1099-R, pension withholding, W-4P, state pension tax exemption, railroad retirement taxes 2026',
  openGraph: {
    title: 'How Pension Income Is Taxed in 2026: A Complete Guide',
    description:
      'Pension income is taxed as ordinary income — but no FICA, an extra senior deduction, and many state exemptions. Everything you need to know.',
  },
}

export default function HowPensionIncomeTaxed() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className="sep">/</span>
        <a href="/blog">Guides</a>
      </nav>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Pension income taxes illustration showing monthly pension payment and tax breakdown"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Left: building (pension fund) */}
          <rect x="42" y="90" width="72" height="62" rx="3" fill="rgba(255,255,255,0.18)" />
          <rect x="52" y="74" width="52" height="18" rx="2" fill="rgba(255,255,255,0.25)" />
          <rect x="62" y="58" width="32" height="18" rx="2" fill="rgba(255,255,255,0.25)" />
          <rect x="56" y="108" width="13" height="15" fill="rgba(255,255,255,0.3)" />
          <rect x="74" y="108" width="13" height="15" fill="rgba(255,255,255,0.3)" />
          <rect x="92" y="108" width="13" height="15" fill="rgba(255,255,255,0.3)" />
          <text x="78" y="172" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Pension Fund</text>
          {/* Arrow right */}
          <line x1="126" y1="120" x2="188" y2="120" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
          <polygon points="188,112 204,120 188,128" fill="rgba(255,255,255,0.55)" />
          {/* Center: monthly check */}
          <rect x="210" y="88" width="118" height="64" rx="6" fill="rgba(255,255,255,0.22)" />
          <text x="269" y="112" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Monthly Pension</text>
          <text x="269" y="134" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">$3,000</text>
          <text x="269" y="172" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Gross Payment</text>
          {/* Arrow right */}
          <line x1="334" y1="120" x2="396" y2="120" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
          <polygon points="396,112 412,120 396,128" fill="rgba(255,255,255,0.55)" />
          {/* Right: tax items */}
          <rect x="416" y="80" width="148" height="82" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="490" y="100" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">+ Federal Income Tax</text>
          <text x="490" y="117" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">+ State Income Tax</text>
          <text x="490" y="134" textAnchor="middle" fontSize="11" fontWeight="700" fill="#86efac" fontFamily="sans-serif">&#10003; No FICA (0%)</text>
          <text x="490" y="151" textAnchor="middle" fontSize="11" fontWeight="600" fill="#bfdbfe" fontFamily="sans-serif">Senior Deduction ↑</text>
          <text x="490" y="172" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Your Take-Home</text>
        </svg>
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#1e293b',
          marginBottom: '0.5rem',
        }}
      >
        How Pension Income Is Taxed in 2026: A Complete Guide
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published October 16, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you receive a pension, your monthly checks are not tax-free. The IRS treats <strong>pension income as ordinary income</strong>, which means it is taxed at the same federal rates as wages. But there are important differences: pension income is completely exempt from FICA taxes, retirees get an extra standard deduction boost, and many states offer partial or full exemptions on pension income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how federal and state taxes apply to pension income in 2026 &mdash; including a worked dollar example, how to adjust your withholding, and strategies to minimize your tax bill in retirement.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a Pension? (Defined Benefit vs. Other Retirement Income)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>pension</strong>, also called a <strong>defined benefit plan</strong>, is an employer-sponsored retirement plan that pays you a guaranteed monthly income for life after you retire. The payment amount is typically based on your years of service and final salary. Pensions are most common among government employees (federal, state, and local), teachers, police officers, firefighters, and workers at certain large corporations or unionized industries.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Pensions are different from <strong>401(k) and IRA withdrawals</strong>, which come from <em>defined contribution</em> accounts where the final balance depends on contributions and investment performance. However, for federal income tax purposes, both pension payments and traditional retirement account withdrawals are generally taxed as ordinary income.{' '}
        <a href="https://www.irs.gov/publications/p575" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 575 &mdash; Pension and Annuity Income)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide focuses specifically on defined benefit pensions and similar annuity-style payments. It also covers <strong>railroad retirement benefits</strong>, which have their own unique rules.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal Income Tax on Pension Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At the federal level, pension income is taxed as <strong>ordinary income</strong> &mdash; it goes on top of your other income and is subject to the same progressive tax brackets as wages or freelance income. For 2026, those brackets are:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9375rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single Filer Taxable Income</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Filing Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925', '$0 – $23,850'],
              ['12%', '$11,925 – $48,475', '$23,850 – $96,950'],
              ['22%', '$48,475 – $103,350', '$96,950 – $206,700'],
              ['24%', '$103,350 – $197,300', '$206,700 – $394,600'],
              ['32%', '$197,300 – $250,525', '$394,600 – $501,050'],
              ['35%', '$250,525 – $626,350', '$501,050 – $751,600'],
              ['37%', 'Over $626,350', 'Over $751,600'],
            ].map(([rate, single, married], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#2563eb', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontFamily: "'JetBrains Mono', monospace" }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontFamily: "'JetBrains Mono', monospace" }}>{married}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These rates apply to your <em>taxable</em> pension income &mdash; that is, your gross pension income minus your standard deduction (or itemized deductions). Because most retirees have lower total income than when they were working, they typically fall into the 10% or 12% bracket.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 2026 Tax Inflation Adjustments)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Big Advantage: No FICA Tax on Pension Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One of the most significant tax benefits of pension income &mdash; often overlooked &mdash; is that it is <strong>completely exempt from FICA taxes</strong>. FICA (Social Security and Medicare taxes) takes 7.65% out of every dollar of wages and salaries. But pension payments are not wages, so they are not subject to FICA at all.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        To see what this means in dollar terms: a retiree receiving $36,000/year in pension income saves:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        $36,000 &times; 7.65% = <strong>$2,754 in FICA taxes per year not owed</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That is real money back in your pocket simply because your income comes from a pension rather than a paycheck. This advantage applies equally to distributions from traditional 401(k) plans and IRAs &mdash; all retirement income is exempt from FICA.{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 751: Social Security and Medicare Withholding)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Additional Standard Deduction for Age 65 and Older
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Retirees get another tax break that most workers do not: the <strong>additional standard deduction</strong> for taxpayers who are age 65 or older by the end of the tax year. In 2026, this extra deduction amounts to:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>$2,000</strong> for single filers and heads of household who are 65+</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>$1,600 per qualifying spouse</strong> for married filing jointly (up to $3,200 if both spouses are 65+)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Combined with the regular 2026 standard deduction of <strong>$15,000 (single)</strong> or <strong>$30,000 (married filing jointly)</strong>, a single retiree age 65+ can deduct <strong>$17,000</strong> before owing a single dollar of income tax. A married couple, both age 65+, can deduct <strong>$33,200</strong>.{' '}
        <a href="https://www.irs.gov/publications/p554" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 554 &mdash; Tax Guide for Seniors)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This means many retirees with modest pensions owe relatively little in federal income tax &mdash; or sometimes nothing at all if their total income stays below their standard deduction amount.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        When Part of Your Pension Is Tax-Free: After-Tax Contributions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you made <strong>after-tax contributions</strong> to your pension during your working years &mdash; that is, contributions that were not deducted from your taxable income &mdash; then a portion of each pension payment you receive is a <em>tax-free return of your own money</em>. You already paid tax on those dollars before they went in, so you do not pay tax again when they come out.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS uses the <strong>Simplified Method</strong> (on IRS Form 1040 worksheet or{' '}
        <a href="https://www.irs.gov/forms-pubs/about-publication-575" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Publication 575
        </a>
        ) to calculate the tax-free portion. Here is how it works:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Find your cost in the contract</strong> &mdash; the total after-tax contributions you made to the pension plan. Your employer or plan administrator can tell you this number; it is also on your Form 1099-R.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Look up your expected number of payments</strong> &mdash; the IRS Simplified Method table gives a number based on your age when payments began. For example, if you started receiving payments at age 65, the table uses 260 monthly payments.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Divide</strong> your cost in the contract by the expected number of payments. The result is the tax-free dollar amount of each monthly payment.
        </li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>Example:</strong> You contributed $26,000 after-tax to your pension. You started receiving payments at age 65. The IRS table gives 260 expected payments.
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        $26,000 &divide; 260 = <strong>$100 tax-free per month</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your monthly pension is $3,000, then <strong>$100 is tax-free</strong> and <strong>$2,900 is taxable</strong> each month. Once you have received 260 payments (about 21.7 years), your entire cost has been recovered &mdash; and all future payments are fully taxable.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have no after-tax contributions (which is common for most government and corporate pensions where all contributions were pre-tax), then <strong>100% of every pension payment is taxable</strong> as ordinary income.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Single Retiree, Age 68, $36,000/Year Pension
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through the exact federal tax calculation for a typical pension retiree. Assumptions: single filer, age 68, $36,000/year pension ($3,000/month), no other income, no after-tax contributions (fully taxable pension), takes the standard deduction.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Gross Income
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        Annual pension income: <strong>$36,000</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Standard Deduction (with Senior Bonus)
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        Regular standard deduction (single): $15,000<br />
        Additional deduction (age 65+, single): + $2,000<br />
        <strong>Total standard deduction: $17,000</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 3: Taxable Income
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        $36,000 &minus; $17,000 = <strong>$19,000 taxable income</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 4: Federal Income Tax by Bracket
      </h3>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9375rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Bracket</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>10%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$11,925</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>10%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$1,192.50</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>12%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$7,075</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>12%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$849.00</td>
            </tr>
            <tr style={{ background: '#eff6ff' }}>
              <td colSpan={3} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Federal Income Tax</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$2,041.50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 5: FICA and Final Summary
      </h3>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9375rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Per Month</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Pension', '$36,000', '$3,000', false],
              ['Federal Income Tax', '−$2,041.50', '−$170.13', true],
              ['Social Security (FICA)', '$0', '$0', false],
              ['Medicare (FICA)', '$0', '$0', false],
            ].map(([item, annual, monthly, isRed], i) => (
              <tr key={String(item)} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{item}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isRed ? '#dc2626' : '#475569' }}>{annual}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isRed ? '#dc2626' : '#475569' }}>{monthly}</td>
              </tr>
            ))}
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Net Take-Home (federal only)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$33,958.50</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,829.87</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The effective federal income tax rate is just <strong>5.67%</strong> ($2,041.50 &divide; $36,000). This compares very favorably to a working-age person earning $36,000 in wages, who would owe about $2,041 in income tax <em>plus</em> $2,754 in FICA &mdash; a combined effective rate of nearly 13.3%.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State income tax would be added on top of this amount, depending on where you live &mdash; covered in the next section.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Tax Is Withheld From Your Pension: Form W-4P
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your pension administrator sends you a <strong>Form 1099-R</strong> each January showing your total pension distributions for the prior year and how much federal income tax was withheld. You use this to complete your tax return.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To control how much federal tax is withheld from each pension payment, you file a{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4p" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form W-4P
        </a>{' '}
        (Withholding Certificate for Periodic Pension or Annuity Payments) with your pension administrator. This form works similarly to the W-4 that workers file with employers:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>You can choose your filing status and claim any additional withholding adjustments.</li>
        <li style={{ marginBottom: '0.5rem' }}>You can request additional dollar amounts withheld above the calculated amount.</li>
        <li style={{ marginBottom: '0.5rem' }}>You can <strong>choose not to withhold</strong> federal tax at all &mdash; but if you do this, you may need to make quarterly estimated tax payments to avoid an underpayment penalty.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you take no action, the default is that tax <em>is</em> withheld from periodic pension payments &mdash; based on the assumption that you are single with no adjustments, which often over-withholds for married retirees. Filing a W-4P to reflect your actual situation avoids either getting a big refund (which means the IRS held your money all year) or owing a surprise balance at filing time.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Income Tax on Pension Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        While federal taxation of pension income is fairly uniform, state tax treatment varies enormously. Some states exempt all pension income; others tax it just like wages. Where you retire can make a $1,000–$5,000+ difference in your annual tax bill.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9375rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Category</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>States</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax on Pension?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['No state income tax', 'TX, FL, WA, NV, WY, TN, SD, AK, NH', 'None (no income tax at all)'],
              ['Full pension exemption', 'IL, PA, MS', 'No tax on qualified retirement income'],
              ['Largely exempt', 'AL, HI, LA', 'State/gov&apos;t pensions exempt; private pensions vary'],
              ['Substantial exemption', 'GA, SC, CO', '$35,000–$65,000 exclusion for seniors 65+'],
              ['Partial exemption', 'NY, NJ, MD, VA', 'Exclusion up to $15,000–$20,000/year for qualifying retirees'],
              ['Pension taxed as income', 'CA, MN, OR, CT, VT, NE', 'Pension taxed at ordinary state income tax rates'],
            ].map(([cat, states, tax], i) => (
              <tr key={String(cat)} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{cat}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{states}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{tax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        State tax rules change frequently. Verify your state&rsquo;s current treatment with your state tax agency before filing.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        As a practical example, a retiree with $36,000 in pension income living in <strong>California</strong> (top state income tax rate 13.3%, though most middle-income retirees pay around 6%) could owe roughly $1,800–$2,000 in <em>additional</em> state income tax on top of the $2,041 federal tax calculated above. A retiree in <strong>Florida</strong>, by contrast, owes nothing to any state.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many states that exempt pensions draw distinctions between <strong>public pensions</strong> (from federal, state, or local government employers) and <strong>private pensions</strong> (from corporate employers). Always check whether your specific pension type qualifies for an exemption in your state.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Railroad Retirement Benefits: Special Rules
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Workers who spent their careers in the railroad industry receive retirement benefits from the <strong>Railroad Retirement Board (RRB)</strong> rather than Social Security. These benefits have their own tax rules:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Tier 1 benefits</strong> (equivalent to Social Security): Taxed like Social Security benefits &mdash; between 0% and 85% is taxable depending on your combined income. Reported on Form RRB-1099.{' '}
          <a href="https://www.rrb.gov/Benefits/Taxation" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (RRB.gov &mdash; Taxation of Benefits)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Tier 2 benefits</strong> (based on career earnings above the Social Security level): Taxed like a pension &mdash; as ordinary income. Reported on Form RRB-1099-R.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many states fully exempt Tier 1 and Tier 2 railroad retirement benefits, similar to how they treat Social Security. However, rules vary &mdash; check with your state&rsquo;s revenue department to confirm.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What About Pension Income and Social Security Together?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many retirees receive both a pension <em>and</em> Social Security benefits. This combination has an important interaction: <strong>pension income can make more of your Social Security benefits taxable</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS uses a formula called <strong>combined income</strong> (also called <em>provisional income</em>) to determine how much of your Social Security is taxable:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        Combined Income = Adjusted Gross Income<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Non-taxable interest<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 50% of Social Security benefits
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your combined income exceeds <strong>$25,000 (single)</strong> or <strong>$32,000 (married filing jointly)</strong>, a portion of your Social Security benefits becomes taxable. A large pension can push combined income above these thresholds &mdash; resulting in more of your Social Security being taxed as well.{' '}
        <a href="https://www.ssa.gov/benefits/retirement/planner/taxes.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Benefits Planner: Income Taxes and Your Social Security Benefit)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For the example above (single, $36,000 pension, no other income), there are no Social Security benefits to complicate things. But if that same retiree also received $18,000/year in Social Security, their combined income would be $36,000 + $9,000 = $45,000 &mdash; pushing 85% of their Social Security into taxable territory.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Reduce Your Pension Tax Bill
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        While pension income is largely unavoidable as taxable income, there are meaningful ways to reduce what you owe:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        1. Contribute to a Traditional IRA (If Eligible)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have earned income (part-time work, for example) even while receiving a pension, you may still be able to contribute to a Traditional IRA and deduct the contribution. In 2026, the contribution limit is <strong>$7,000</strong> ($8,000 if age 50+). A deductible IRA contribution directly reduces your adjusted gross income.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        2. Contribute to a Health Savings Account (HSA)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are under age 65 and have a qualifying high-deductible health plan, HSA contributions are deductible above the line &mdash; reducing your AGI and therefore your pension&rsquo;s tax impact. After 65, you lose HSA eligibility (contributions, not spending), but this strategy can help early retirees.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        3. Consider Relocating to a Pension-Friendly State
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If flexibility allows, retiring in a state with no income tax or a generous pension exemption can save thousands annually. A retiree moving from California to Texas on a $50,000 pension could save $2,000–$3,000+ per year in state income tax.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        4. Time Additional Income Carefully
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have other sources of income &mdash; part-time work, IRA withdrawals, or investment sales &mdash; timing them strategically relative to your pension can keep you in a lower bracket. For example, taking IRA withdrawals in a year when your pension is lower can result in less total tax.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        5. Charitable Qualified Distributions (QCDs) from IRAs
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are age 70½ or older and have an IRA, you can make a <strong>Qualified Charitable Distribution (QCD)</strong> of up to <strong>$105,000</strong> directly from your IRA to charity. This satisfies your Required Minimum Distribution without adding to your taxable income &mdash; which keeps your combined income lower and may prevent more of your Social Security from being taxed.{' '}
        <a href="https://www.irs.gov/charities-non-profits/qualified-charitable-distributions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Qualified Charitable Distributions)
        </a>
      </p>

      {/* Section 12: Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Pension income is taxed as ordinary income at the federal level &mdash; but retirees have three significant advantages over working-age earners: <strong>no FICA taxes, an extra standard deduction for being over 65, and the possibility of tax-free partial payments</strong> if after-tax contributions were made.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a typical single retiree receiving $36,000/year in pension income, the effective federal income tax rate is just 5.67% &mdash; compared to nearly 13% for a working-age employee earning the same amount when FICA is included.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State taxation varies widely. Living in a state with no income tax or a generous pension exemption can eliminate thousands of dollars in state tax per year. Use Form W-4P to make sure your withholding matches your actual tax liability, avoiding both large refunds and unexpected balance-due surprises.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Full Retirement Tax Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary or pension amount to see exactly how much goes to federal tax, state tax, and what you actually take home &mdash; by state.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
            color: '#ffffff',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.9375rem',
          }}
        >
          Try the Free Paycheck Calculator
        </a>
      </div>

      {/* Sources */}
      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginTop: '2rem', marginBottom: '0.75rem' }}>
        Sources
      </h3>
      <ul style={{ fontSize: '0.875rem', lineHeight: 1.75, color: '#475569', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p575" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 575 &mdash; Pension and Annuity Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p554" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 554 &mdash; Tax Guide for Seniors</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4p" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-4P, Withholding Certificate for Periodic Pension or Annuity Payments</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 2026 Tax Inflation Adjustments</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc410" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 410: Pensions and Annuities</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/charities-non-profits/qualified-charitable-distributions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Qualified Charitable Distributions</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/benefits/retirement/planner/taxes.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Benefits Planner: Income Taxes and Your Social Security Benefit</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.rrb.gov/Benefits/Taxation" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Railroad Retirement Board &mdash; Taxation of Benefits</a>
        </li>
      </ul>

      <ArticleFooter current="how-pension-income-is-taxed-2026" />
    </article>
  )
}
