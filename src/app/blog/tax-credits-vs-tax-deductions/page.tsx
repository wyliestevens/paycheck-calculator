import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tax Credits vs. Tax Deductions: What\'s the Difference? (2026 Guide)',
  description:
    'A $1,000 tax credit saves you exactly $1,000. A $1,000 deduction saves you $120 to $370, depending on your bracket. Here\'s the full breakdown with worked examples at $60,000.',
  alternates: { canonical: '/blog/tax-credits-vs-tax-deductions' },
  keywords:
    'tax credits vs tax deductions, difference between tax credit and deduction, how tax credits work 2026, how tax deductions work 2026, refundable tax credits, nonrefundable credits, tax savings 2026',
  openGraph: {
    title: 'Tax Credits vs. Tax Deductions: What\'s the Difference? (2026 Guide)',
    description:
      'A $1,000 tax credit saves you exactly $1,000. A $1,000 deduction saves $120–$370. Here\'s the full breakdown with worked examples.',
  },
}

export default function TaxCreditsVsDeductions() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Tax credits vs tax deductions illustration showing deductions reduce taxable income while credits reduce the tax bill directly"
        >
          <rect width="600" height="200" rx="12" fill="#d97706" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Left column: Deduction */}
          <text x="148" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.95)" fontFamily="sans-serif">DEDUCTION</text>
          <rect x="50" y="54" width="196" height="118" rx="6" fill="rgba(255,255,255,0.12)" />
          <rect x="68" y="66" width="100" height="28" rx="4" fill="rgba(255,255,255,0.25)" />
          <text x="118" y="84" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff" fontFamily="sans-serif">$60,000 income</text>
          <line x1="118" y1="94" x2="118" y2="108" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <polygon points="113,108 118,118 123,108" fill="rgba(255,255,255,0.7)" />
          <rect x="68" y="118" width="100" height="28" rx="4" fill="rgba(255,255,255,0.2)" />
          <text x="118" y="133" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff" fontFamily="sans-serif">$45,000 taxable</text>
          <text x="118" y="146" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">(-$15k deduction)</text>
          <text x="188" y="92" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">saves</text>
          <text x="188" y="106" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fef3c7" fontFamily="monospace">$1,800</text>
          <text x="188" y="119" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">in tax</text>
          <text x="188" y="132" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">(12% bracket)</text>

          {/* Dashed divider */}
          <line x1="300" y1="28" x2="300" y2="172" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="6,4" />

          {/* Right column: Credit */}
          <text x="452" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.95)" fontFamily="sans-serif">CREDIT</text>
          <rect x="354" y="54" width="196" height="118" rx="6" fill="rgba(255,255,255,0.12)" />
          <rect x="372" y="66" width="100" height="28" rx="4" fill="rgba(255,255,255,0.25)" />
          <text x="422" y="80" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff" fontFamily="sans-serif">Tax bill</text>
          <text x="422" y="92" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fef3c7" fontFamily="monospace">$5,160</text>
          <line x1="422" y1="94" x2="422" y2="108" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <polygon points="417,108 422,118 427,108" fill="rgba(255,255,255,0.7)" />
          <rect x="372" y="118" width="100" height="28" rx="4" fill="rgba(255,255,255,0.2)" />
          <text x="422" y="133" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff" fontFamily="sans-serif">Tax owed</text>
          <text x="422" y="146" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fef3c7" fontFamily="monospace">$4,160</text>
          <text x="495" y="92" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">saves</text>
          <text x="495" y="106" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fef3c7" fontFamily="monospace">$1,000</text>
          <text x="495" y="119" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">in tax</text>
          <text x="495" y="132" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">(dollar-for-dollar)</text>
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
        Tax Credits vs. Tax Deductions: What&rsquo;s the Difference? (2026 Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 18, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Tax credits and tax deductions both lower your tax bill &mdash; but they work in completely different ways, and the difference matters a lot. A <strong>$1,000 tax credit</strong> reduces what you owe the IRS by exactly <strong>$1,000</strong>. A <strong>$1,000 tax deduction</strong> reduces your <em>taxable income</em> by $1,000, which only saves you $120 to $370 depending on your tax bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Credits are generally more valuable dollar-for-dollar &mdash; but both have a place in smart tax planning. This guide explains how each works, shows you the real numbers with a $60,000 worked example, and lists the most important credits and deductions available in 2026.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Key Difference in One Sentence
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>deduction reduces your taxable income</strong>. A <strong>credit directly reduces your tax bill</strong>. Those two sentences contain everything you need &mdash; but let&rsquo;s walk through what they mean in practice.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Tax Deductions Work
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you take a tax deduction, you subtract it from your gross income to arrive at your <strong>taxable income</strong>. The IRS only calculates your tax on the lower number. You are not subtracting from your tax &mdash; you are subtracting from the income that gets taxed.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is a simple formula:
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
        Gross Income &minus; Deductions = Taxable Income<br />
        Taxable Income &times; Tax Rate = Tax Owed
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The amount you actually save from a deduction depends entirely on your <strong>marginal tax rate</strong> &mdash; the rate that applies to your last dollar of income. If you&rsquo;re in the 12% bracket and take a $1,000 deduction, you save $120. If you&rsquo;re in the 32% bracket and take the same $1,000 deduction, you save $320.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 2026 Tax Inflation Adjustments)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There are two categories of deductions:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.625rem' }}>
          <strong>Above-the-line deductions (adjustments to income)</strong> &mdash; You can claim these regardless of whether you itemize. Examples include 401(k) contributions, traditional IRA contributions, student loan interest, and the self-employment tax deduction. They reduce your <strong>Adjusted Gross Income (AGI)</strong>.
        </li>
        <li style={{ marginBottom: '0.625rem' }}>
          <strong>Below-the-line deductions (the standard deduction or itemized deductions)</strong> &mdash; Every taxpayer chooses either the <strong>standard deduction</strong> ($15,000 for single filers in 2026; $30,000 for married filing jointly) or <strong>itemized deductions</strong> on Schedule A. You take whichever is larger.{' '}
          <a href="https://www.irs.gov/taxtopics/tc501" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; Topic 501: Standard Deduction)
          </a>
        </li>
      </ul>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Tax Credits Work
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A tax credit is applied <em>after</em> your tax has been calculated. It reduces your tax bill dollar-for-dollar, regardless of your tax bracket. If you owe $5,000 in federal income tax and you have a $1,000 tax credit, you now owe $4,000. Simple as that.
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
        Gross Income &minus; Deductions = Taxable Income<br />
        Taxable Income &times; Tax Rate = Calculated Tax<br />
        Calculated Tax &minus; Credits = <strong>Tax Owed</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Credits come in two types, and the distinction matters enormously:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.625rem' }}>
          <strong>Non-refundable credits</strong> can reduce your tax bill to zero but no further. If you have a $2,000 non-refundable credit but only owe $800, you save $800 &mdash; and the unused $1,200 disappears. Most credits fall into this category.
        </li>
        <li style={{ marginBottom: '0.625rem' }}>
          <strong>Refundable credits</strong> can push your tax bill below zero, meaning the IRS sends you a check for the difference. If you owe $800 and have a $2,000 refundable credit, you receive a <strong>$1,200 refund</strong>. The Earned Income Tax Credit (EITC) is the most well-known example.{' '}
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; EITC Overview)
          </a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also a third type: <strong>partially refundable credits</strong>. The Child Tax Credit is a prime example &mdash; up to $1,700 of the $2,000 credit is refundable through the Additional Child Tax Credit, while the remaining portion is non-refundable.{' '}
        <a href="https://www.irs.gov/taxtopics/tc972" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 972: Child Tax Credit)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Side-by-Side Worked Example: $60,000 Salary, Single Filer
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s see exactly how a $1,000 deduction compares to a $1,000 credit for a single filer earning $60,000 in 2026.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Starting Point: Baseline Tax Bill
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        With no credits and only the standard deduction:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Step</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross income', '$60,000'],
              ['Standard deduction (single, 2026)', '− $15,000'],
              ['Taxable income', '$45,000'],
              ['Federal tax on $45,000 (10%/12%)', '$5,160'],
              ['FICA (7.65% of $60,000)', '$4,590'],
              ['Total federal + payroll tax', '$9,750'],
            ].map(([label, value], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: i === 5 ? '#1e293b' : '#475569', fontWeight: i === 5 ? 700 : 400 }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 5 ? '#1e293b' : '#dc2626', fontWeight: i === 5 ? 700 : 400 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Federal income tax calculated on $45,000 taxable income: first $11,925 at 10% ($1,192.50) + remaining $33,075 at 12% ($3,969) = $5,161.50, rounded to $5,160 for this example. The 12% bracket is the marginal rate.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Now Add a $1,000 Deduction
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Suppose you make an additional $1,000 contribution to a traditional IRA (an above-the-line deduction):
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Step</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross income', '$60,000'],
              ['IRA deduction', '− $1,000'],
              ['AGI', '$59,000'],
              ['Standard deduction', '− $15,000'],
              ['Taxable income', '$44,000'],
              ['Federal tax on $44,000', '$5,040'],
              ['Tax savings from $1,000 deduction', '$120'],
            ].map(([label, value], i) => (
              <tr key={label} style={{ background: i === 6 ? '#ecfdf5' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: i === 6 ? '#1e293b' : '#475569', fontWeight: i === 6 ? 700 : 400 }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 6 ? '#059669' : i === 1 ? '#dc2626' : '#475569', fontWeight: i === 6 ? 700 : 400 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The $1,000 deduction saved <strong>$120</strong> in federal income tax. That&rsquo;s because $1,000 &times; 12% (the marginal rate at this income level) = $120. The deduction did not save $1,000 &mdash; it saved 12 cents for every deduction dollar.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Now Add a $1,000 Credit Instead
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Step</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Taxable income (same as baseline)', '$45,000'],
              ['Federal tax on $45,000', '$5,160'],
              ['Tax credit applied', '− $1,000'],
              ['Tax owed after credit', '$4,160'],
              ['Tax savings from $1,000 credit', '$1,000'],
            ].map(([label, value], i) => (
              <tr key={label} style={{ background: i === 4 ? '#ecfdf5' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: i === 4 ? '#1e293b' : '#475569', fontWeight: i === 4 ? 700 : 400 }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 4 ? '#059669' : i === 2 ? '#dc2626' : '#475569', fontWeight: i === 4 ? 700 : 400 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The $1,000 credit saved a full <strong>$1,000</strong> in taxes &mdash; more than 8 times more than the same amount as a deduction. That is the power of a tax credit.
      </p>

      {/* Quick comparison table */}
      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Summary Comparison
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>$1,000 Deduction</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>$1,000 Credit</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['What it reduces', 'Taxable income', 'Tax owed'],
              ['Tax savings in 10% bracket', '$100', '$1,000'],
              ['Tax savings in 12% bracket', '$120', '$1,000'],
              ['Tax savings in 22% bracket', '$220', '$1,000'],
              ['Tax savings in 32% bracket', '$320', '$1,000'],
              ['Tax savings in 37% bracket', '$370', '$1,000'],
              ['Can produce a refund?', 'No (directly)', 'Only if refundable'],
            ].map(([label, ded, cred], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#475569' }}>{ded}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#059669', fontWeight: 600 }}>{cred}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Refundable vs. Non-Refundable Credits: The Critical Distinction
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Not all credits are created equal. Whether a credit is refundable determines whether low-income taxpayers can fully benefit from it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Imagine a parent who qualifies for $3,000 in Child Tax Credit but only owes $1,200 in federal income tax:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.625rem' }}>
          <strong>Non-refundable portion:</strong> Reduces tax from $1,200 to $0 (uses $1,200 of credit). The remaining $1,800 is lost.
        </li>
        <li style={{ marginBottom: '0.625rem' }}>
          <strong>Refundable portion (Additional Child Tax Credit):</strong> The $1,800 of unused credit can be refunded in cash, up to the refundable limit.{' '}
          <a href="https://www.irs.gov/publications/p972" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Publication 972 &mdash; Child Tax Credit)
          </a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Understanding this distinction is essential for lower-income households who may have more credits available than they have tax liability to offset.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Most Valuable Tax Credits in 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are the major federal tax credits available in 2026:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Credit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Max Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Refundable?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Earned Income Tax Credit (up to 3 children)', '$8,250', 'Yes (fully)'],
              ['Child Tax Credit (per qualifying child)', '$2,000', 'Partially ($1,700)'],
              ['American Opportunity Tax Credit (college)', '$2,500', 'Partially ($1,000)'],
              ['Clean Vehicle Credit (new EV)', '$7,500', 'No'],
              ['Lifetime Learning Credit', '$2,000', 'No'],
              ["Child & Dependent Care Credit (1 child)", '$1,050', 'No'],
              ["Child & Dependent Care Credit (2+ children)", '$2,100', 'No'],
              ["Retirement Savings Contributions Credit (Saver's)", '$1,000 / $2,000 MFJ', 'No'],
              ['Premium Tax Credit (marketplace insurance)', 'Varies', 'Yes (advance possible)'],
            ].map(([credit, max, refundable], i) => (
              <tr key={credit} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{credit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 600 }}>{max}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: refundable === 'No' ? '#94a3b8' : '#059669', fontWeight: refundable !== 'No' ? 600 : 400 }}>{refundable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most credits phase out as income rises. The EITC is unavailable above roughly $57,310 (single with one child in 2026). The Child Tax Credit begins phasing out at $200,000 for single filers and $400,000 for married filers.{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Child Tax Credit)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Most Valuable Tax Deductions in 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are the most commonly claimed deductions and what they&rsquo;re actually worth at different tax brackets:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Deduction</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Max / Limit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Type</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Standard deduction (single)', '$15,000', 'Below-line'],
              ['Standard deduction (married filing jointly)', '$30,000', 'Below-line'],
              ['401(k) / 403(b) contributions', '$23,500', 'Above-line (payroll)'],
              ['Traditional IRA contribution', '$7,000 ($8,000 if 50+)', 'Above-line'],
              ['Student loan interest', '$2,500', 'Above-line'],
              ['Self-employed health insurance', '100% of premiums', 'Above-line'],
              ['HSA contributions', '$4,300 (self-only)', 'Above-line'],
              ['Mortgage interest (itemize)', 'Up to $750k loan', 'Below-line (Schedule A)'],
              ['State & local taxes (SALT)', 'Capped at $10,000', 'Below-line (Schedule A)'],
              ['Charitable contributions (itemize)', 'Up to 60% of AGI', 'Below-line (Schedule A)'],
              ['Medical expenses (itemize)', 'Above 7.5% of AGI', 'Below-line (Schedule A)'],
            ].map(([ded, max, type], i) => (
              <tr key={ded} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{ded}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontSize: '0.875rem' }}>{max}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: type === 'Above-line' || type === 'Above-line (payroll)' ? '#2563eb' : '#94a3b8', fontSize: '0.875rem' }}>{type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Above-the-line deductions are especially powerful</strong> because they reduce your AGI, which can unlock other tax benefits that phase out as income rises (like the ability to contribute to a Roth IRA or deduct student loan interest).{' '}
        <a href="https://www.irs.gov/taxtopics/tc456" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 456: Student Loan Interest Deduction)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Deductions and Credits Appear on Your Paycheck vs. Tax Return
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        It is worth understanding that some deductions affect your paycheck immediately, while others only reduce your tax at filing time.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Deductions That Reduce Your Paycheck Right Now
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Pre-tax payroll deductions &mdash; like 401(k) contributions, HSA contributions, and employer health insurance premiums &mdash; reduce the wages reported on your W-2. This means the IRS never taxes that income at all; the reduction happens before your employer calculates withholding. Your paycheck is smaller, but your tax bill shrinks too.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, if you contribute $500 per month to a traditional 401(k), your taxable wages drop by $6,000 per year. In the 22% bracket, that saves $1,320 in federal income tax <em>plus</em> no Social Security or Medicare tax on those contributions (in most 401(k) plans).
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Deductions and Credits You Claim at Filing Time
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most credits (Child Tax Credit, EITC, education credits) and many deductions (IRA contributions, student loan interest, the standard deduction itself) are claimed on your Form 1040 when you file. The IRS compares what you owe to what was withheld throughout the year. If more was withheld than you owe &mdash; because of credits or deductions &mdash; you get a refund.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; About Form 1040)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can also adjust your <strong>W-4 withholding</strong> to account for expected credits. Step 3 of the 2026 W-4 lets you enter the amount of child tax credits you expect to claim, which reduces the amount withheld from each paycheck so you get the benefit throughout the year instead of in a lump-sum refund.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; About Form W-4)
        </a>
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        When Deductions Can Beat Credits (High Earners)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        While credits are almost always more valuable dollar-for-dollar, there is a scenario where large deductions matter more: when you are in a high tax bracket and can take significant above-the-line deductions.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Consider a single filer earning $180,000. Their marginal rate is 24%. If they max out a traditional 401(k) at $23,500, the deduction saves them:
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
        $23,500 &times; 24% = <strong>$5,640</strong> saved in federal income tax
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A high-bracket taxpayer who can aggressively fund pre-tax retirement accounts can generate tax savings that rival many credits &mdash; and those savings come with an additional benefit: the money grows tax-deferred in retirement accounts. Many high earners also lose eligibility for the most valuable credits entirely due to income phase-out limits.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Stacking Credits and Deductions Together
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You do not have to choose between credits and deductions &mdash; you claim both. The sequence matters:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.625rem' }}>Start with your gross income.</li>
        <li style={{ marginBottom: '0.625rem' }}>Apply above-the-line deductions (401(k), IRA, HSA, student loan interest) to calculate AGI.</li>
        <li style={{ marginBottom: '0.625rem' }}>Apply the standard deduction or itemized deductions to arrive at taxable income.</li>
        <li style={{ marginBottom: '0.625rem' }}>Calculate tax owed using the brackets.</li>
        <li style={{ marginBottom: '0.625rem' }}>Apply non-refundable credits to reduce tax owed (but not below zero).</li>
        <li style={{ marginBottom: '0.625rem' }}>Apply refundable credits &mdash; any excess becomes a refund.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A working parent with a $60,000 salary might claim:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>$3,000 HSA contribution (above-the-line deduction, saves $360 in taxes at 12%)</li>
        <li style={{ marginBottom: '0.5rem' }}>$15,000 standard deduction (reduces taxable income)</li>
        <li style={{ marginBottom: '0.5rem' }}>$2,000 Child Tax Credit for one child (saves $2,000 directly)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The combined effect is a total federal tax bill that could drop from over $7,000 to under $2,000 for a family with these circumstances.
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Tax credits are more powerful than deductions, dollar for dollar, because they reduce your tax bill directly rather than reducing the income that gets taxed. A $1,000 credit always saves $1,000. A $1,000 deduction saves between $100 and $370 depending on your bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The best tax strategy uses both: above-the-line deductions (401(k), HSA, IRA, student loan interest) reduce your AGI before tax is calculated, which can also unlock more credits. Then credits eliminate the remaining tax bill as far as possible.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are unsure what you qualify for, the{' '}
        <a href="https://www.irs.gov/help/ita" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Interactive Tax Assistant
        </a>{' '}
        can walk you through eligibility for common credits step by step. And to see how all of these deductions affect your actual take-home pay &mdash; before and after credits &mdash; use the free paycheck calculator below.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fefce8',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See How Deductions Change Your Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see your full paycheck breakdown &mdash; including how pre-tax deductions like 401(k) and HSA contributions lower your tax bill in real time.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#d97706',
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
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc501" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 501: Standard Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Earned Income Tax Credit (EITC)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Child Tax Credit</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p972" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 972 &mdash; Child Tax Credit and Credit for Other Dependents</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc456" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 456: Student Loan Interest Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; IRA Contribution Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-4</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/help/ita" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Interactive Tax Assistant</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 1040</a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
