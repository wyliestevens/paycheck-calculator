import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Federal Tax Brackets Explained for 2026 (All 7 Rates)',
  description:
    'The US has 7 federal income tax brackets in 2026, ranging from 10% to 37%. Learn exactly which bracket your income falls into, how much tax you actually owe, and see a full worked example at $75,000.',
  alternates: { canonical: '/blog/federal-tax-brackets-2026' },
  keywords:
    'federal tax brackets 2026, income tax brackets 2026, tax rates 2026, IRS tax brackets, marginal tax rate 2026, federal income tax 2026, 22 percent tax bracket, 24 percent tax bracket',
  openGraph: {
    title: 'Federal Tax Brackets Explained for 2026 (All 7 Rates)',
    description:
      'Learn exactly which tax bracket your income falls into in 2026, how marginal rates work, and how much federal tax you actually owe — with a full $75,000 worked example.',
  },
}

export default function FederalTaxBrackets2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Federal tax brackets staircase illustration showing 10% through 37% rates"
        >
          <rect width="600" height="200" rx="12" fill="#dc2626" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Staircase bars representing bracket levels */}
          {/* 10% bar */}
          <rect x="50" y="148" width="52" height="22" rx="3" fill="rgba(255,255,255,0.85)" />
          <text x="76" y="162" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626" fontFamily="sans-serif">10%</text>

          {/* 12% bar */}
          <rect x="112" y="130" width="52" height="40" rx="3" fill="rgba(255,255,255,0.80)" />
          <text x="138" y="155" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626" fontFamily="sans-serif">12%</text>

          {/* 22% bar */}
          <rect x="174" y="108" width="52" height="62" rx="3" fill="rgba(255,255,255,0.75)" />
          <text x="200" y="143" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626" fontFamily="sans-serif">22%</text>

          {/* 24% bar */}
          <rect x="236" y="88" width="52" height="82" rx="3" fill="rgba(255,255,255,0.70)" />
          <text x="262" y="133" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626" fontFamily="sans-serif">24%</text>

          {/* 32% bar */}
          <rect x="298" y="68" width="52" height="102" rx="3" fill="rgba(255,255,255,0.65)" />
          <text x="324" y="123" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626" fontFamily="sans-serif">32%</text>

          {/* 35% bar */}
          <rect x="360" y="48" width="52" height="122" rx="3" fill="rgba(255,255,255,0.60)" />
          <text x="386" y="113" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626" fontFamily="sans-serif">35%</text>

          {/* 37% bar */}
          <rect x="422" y="34" width="52" height="136" rx="3" fill="rgba(255,255,255,0.55)" />
          <text x="448" y="105" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626" fontFamily="sans-serif">37%</text>

          {/* Right side label */}
          <text x="510" y="75" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">7 Brackets</text>
          <text x="510" y="95" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">10% – 37%</text>
          <text x="510" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Each rate applies only</text>
          <text x="510" y="145" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">to income in that range</text>

          {/* X-axis label */}
          <text x="236" y="186" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">More income →</text>
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
        Federal Tax Brackets Explained for 2026 (All 7 Rates)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 28, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The United States federal income tax system has <strong>seven brackets</strong>, with rates of 10%, 12%, 22%, 24%, 32%, 35%, and 37%. But those rates work very differently from what most people assume. A $70,000 salary doesn&rsquo;t mean you pay 22% on all $70,000 &mdash; you only pay 22% on the slice of income that falls within the 22% bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how the 2026 federal tax brackets work, what you actually owe at common income levels, and how to calculate your own tax bill from scratch.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Federal Tax Brackets Work
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The US uses a <strong>progressive marginal tax system</strong>. This means that as your income rises, each additional dollar is taxed at a higher rate &mdash; but only that additional dollar, not all of your income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Think of it like filling a series of buckets. The first bucket holds income taxed at 10%. Once it&rsquo;s full, income spills into the 12% bucket. When that&rsquo;s full, it goes into the 22% bucket &mdash; and so on. Each bucket has its own rate, and you pay that rate only on the income in that bucket, not on everything you earn.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        An important detail: the brackets apply to your <strong>taxable income</strong>, not your gross income. Taxable income is what you have left after subtracting the standard deduction (or itemized deductions if you claim those instead). More on this below.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 Federal Tax Brackets: Single Filers
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are the 2026 federal income tax brackets for <strong>single filers</strong> and <strong>married persons filing separately</strong>:
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
            <tr style={{ background: '#fef2f2' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income Range</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax on That Slice</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925', '10% of the amount'],
              ['12%', '$11,926 – $48,475', '$1,192.50 + 12% over $11,925'],
              ['22%', '$48,476 – $103,350', '$5,578.50 + 22% over $48,475'],
              ['24%', '$103,351 – $197,300', '$17,651.50 + 24% over $103,350'],
              ['32%', '$197,301 – $250,525', '$40,199.50 + 32% over $197,300'],
              ['35%', '$250,526 – $626,350', '$57,231.50 + 35% over $250,525'],
              ['37%', 'Over $626,350', '$188,769.75 + 37% over $626,350'],
            ].map(([rate, range, calc], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: '#dc2626', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{range}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', color: '#475569', fontSize: '0.875rem' }}>{calc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Source:{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          IRS Revenue Procedure &mdash; Tax Year 2026 Inflation Adjustments
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 Federal Tax Brackets: Married Filing Jointly
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Married couples filing jointly (and qualifying surviving spouses) have wider brackets that are generally double the single-filer amounts:
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
            <tr style={{ background: '#fef2f2' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income Range (MFJ)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $23,850'],
              ['12%', '$23,851 – $96,950'],
              ['22%', '$96,951 – $206,700'],
              ['24%', '$206,701 – $394,600'],
              ['32%', '$394,601 – $501,050'],
              ['35%', '$501,051 – $751,600'],
              ['37%', 'Over $751,600'],
            ].map(([rate, range], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: '#dc2626', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice how the 37% bracket for MFJ starts at $751,600 &mdash; more than double the single-filer threshold of $626,350. The MFJ brackets were designed to roughly eliminate the &ldquo;marriage penalty&rdquo; at most income levels.{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 409: Capital Gains and Losses)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Standard Deduction: The Number That Changes Everything
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before you can apply the tax brackets, you have to subtract your <strong>standard deduction</strong> from your gross income. The standard deduction is a flat amount the IRS lets every taxpayer subtract regardless of their actual expenses. Most people claim it instead of itemizing.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For 2026, the standard deduction amounts are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Filing Status</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Standard Deduction (2026)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single', '$15,000'],
              ['Married Filing Jointly', '$30,000'],
              ['Married Filing Separately', '$15,000'],
              ['Head of Household', '$22,500'],
            ].map(([status, amount], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#1e293b' }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The standard deduction means that a single person earning $15,000 or less pays <strong>zero federal income tax</strong> &mdash; because after subtracting the deduction, their taxable income is $0 or less. This is one of the most important facts about the US tax system that many people miss.{' '}
        <a href="https://www.irs.gov/taxtopics/tc551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 551: Standard Deduction)
        </a>
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $75,000 Salary, Single Filer
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s walk through the exact federal income tax calculation for a single person earning <strong>$75,000</strong> in gross wages in 2026. We&rsquo;ll assume they claim the standard deduction and have no other adjustments.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Calculate Taxable Income
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
        Gross income: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$75,000<br />
        Standard deduction: &nbsp;&nbsp;&nbsp;&mdash;$15,000<br />
        <strong>Taxable income: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$60,000</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Apply the Brackets to Taxable Income
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Now apply each bracket in turn to the $60,000 taxable income:
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
            <tr style={{ background: '#fef2f2' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Bracket</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income in This Bracket</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Owed</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>10% bracket</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$11,925</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 700 }}>10%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$1,192.50</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>12% bracket</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$36,550<br /><span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>($48,475 − $11,925)</span></td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 700 }}>12%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$4,386.00</td>
            </tr>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>22% bracket</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$11,525<br /><span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>($60,000 − $48,475)</span></td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 700 }}>22%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$2,535.50</td>
            </tr>
            <tr style={{ background: '#fef2f2' }}>
              <td colSpan={3} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Federal Income Tax</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontSize: '1rem' }}>$8,114.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A $75,000 salary puts you in the <strong>22% marginal tax bracket</strong> &mdash; but your <strong>effective federal income tax rate</strong> is only about <strong>10.82%</strong> ($8,114 &divide; $75,000). That&rsquo;s because only the top slice of your income is taxed at 22%.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Marginal Rate vs. Effective Rate: A Critical Distinction
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These two concepts trip up almost everyone:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Marginal tax rate:</strong> The rate applied to your next dollar of income &mdash; in other words, the bracket your highest income sits in. In the example above, it&rsquo;s 22%. This is the rate that matters when you&rsquo;re thinking about the tax cost of a raise, freelance gig, or Roth IRA conversion.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Effective tax rate:</strong> The percentage of your <em>total</em> gross income paid in federal income tax. Because the lower brackets apply first, your effective rate is always lower than your marginal rate. At $75,000 it&rsquo;s 10.82%, even though the top bracket is 22%.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When people say &ldquo;I&rsquo;m in the 22% tax bracket,&rdquo; they usually mean their marginal rate is 22% &mdash; but they are not paying 22% on every dollar. They&rsquo;re paying it only on the income that falls within that range.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Effective Tax Rates at Common Income Levels
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        To make this concrete, here are the marginal and effective federal income tax rates for a <strong>single filer</strong> claiming the standard deduction at several common salary levels in 2026:
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
            <tr style={{ background: '#fef2f2' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gross Salary</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Marginal Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Effective Rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$30,000', '$15,000', '$1,500', '10%', '5.0%'],
              ['$50,000', '$35,000', '$3,858', '12%', '7.7%'],
              ['$75,000', '$60,000', '$8,114', '22%', '10.8%'],
              ['$100,000', '$85,000', '$13,661', '22%', '13.7%'],
              ['$150,000', '$135,000', '$25,261', '22%', '16.8%'],
              ['$200,000', '$185,000', '$38,861', '32%', '19.4%'],
              ['$300,000', '$285,000', '$73,853', '35%', '24.6%'],
            ].map(([salary, taxable, tax, marginal, effective], i) => (
              <tr key={salary} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#1e293b' }}>{salary}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{taxable}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 700 }}>{marginal}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 700 }}>{effective}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Note: Federal income tax only. Does not include FICA (Social Security + Medicare), state income tax, or any other deductions beyond the standard deduction.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How a Raise Affects Your Bracket
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One of the most common fears people have about getting a raise is that it will push them into a higher tax bracket and they&rsquo;ll end up with less money. This is a myth.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because each bracket only applies to the income within its range, crossing a bracket threshold means you pay the higher rate only on the dollars above the threshold &mdash; not on your entire income. Your take-home pay <em>always</em> goes up when your gross pay goes up.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say a single filer gets a raise from <strong>$100,000 to $110,000</strong>:
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
          lineHeight: 2,
        }}
      >
        Tax on $100,000 gross = $13,661<br />
        Tax on $110,000 gross = $15,861<br />
        Additional tax on the $10,000 raise = <strong>$2,200</strong><br />
        Effective rate on the raise: <strong>22%</strong><br />
        Net gain from the raise: <strong>$7,800</strong> after federal tax
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A $10,000 raise puts $7,800 more in your pocket (before state taxes and FICA). You always come out ahead &mdash; the 22% rate on the raise does not retroactively apply to income you already earned.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Long-Term Capital Gains Tax Rates for 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Ordinary income (wages, salary, 1099 income) is what the brackets above apply to. But long-term capital gains &mdash; profit from selling assets you held for more than one year, like stocks or real estate &mdash; are taxed at lower, separate rates.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For 2026, the long-term capital gains rates for single filers are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>LTCG Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income (Single)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0%', 'Up to $48,350'],
              ['15%', '$48,351 – $533,400'],
              ['20%', 'Over $533,400'],
            ].map(([rate, range], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: '#059669', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This means a single filer with $40,000 in ordinary income and $8,000 in long-term capital gains pays <strong>0% federal tax on those gains</strong> &mdash; because their total taxable income stays below the 0% threshold.{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 409: Capital Gains and Losses)
        </a>
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Tax Brackets Affect Your Paycheck Withholding
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer doesn&rsquo;t wait until April to collect federal income tax &mdash; they withhold it from every paycheck using IRS withholding tables (Publication 15-T). The amount withheld is estimated based on your income and the W-4 information you provided when you were hired.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The withholding system tries to match what you&rsquo;ll actually owe at year-end. But it isn&rsquo;t perfect, especially if your situation is more complex:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Working <strong>two jobs</strong> can lead to under-withholding because each employer calculates withholding as if that job were your only income</li>
        <li style={{ marginBottom: '0.5rem' }}>A <strong>large year-end bonus</strong> can push you into a higher bracket and leave you owing money</li>
        <li style={{ marginBottom: '0.5rem' }}>Major life changes (marriage, divorce, a new dependent) change your bracket and how much you owe</li>
        <li style={{ marginBottom: '0.5rem' }}>Pre-tax 401(k) contributions reduce your taxable income, lowering which bracket you fall into</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS offers a free{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Tax Withholding Estimator
        </a>{' '}
        that lets you check whether your current withholding is on track or needs adjustment via a new W-4.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Ways to Lower Your Taxable Income (and Your Bracket)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can reduce the amount of income subject to federal tax by increasing your <strong>pre-tax deductions</strong>. These don&rsquo;t reduce FICA, but they directly lower your taxable income and therefore how much falls into higher brackets. Common options:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Traditional 401(k) contributions:</strong> Up to $23,500 in 2026 ($31,000 if age 50+). Every dollar contributed reduces your taxable income dollar-for-dollar.{' '}
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; 401(k) Contribution Limits)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Traditional IRA contributions:</strong> Up to $7,000 ($8,000 if age 50+), deductible depending on your income and whether you have a workplace plan.{' '}
          <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; IRA Deduction Limits)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Health Savings Account (HSA):</strong> Up to $4,300 (single) or $8,550 (family) in 2026 for those with a High-Deductible Health Plan. Contributions are fully pre-tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Flexible Spending Account (FSA):</strong> Up to $3,300 in 2026 for medical expenses. Also pre-tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Itemized deductions:</strong> If your mortgage interest, state taxes, charitable contributions, and other eligible expenses exceed the $15,000 standard deduction, itemizing can reduce your taxable income further.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A practical example: a single earner with a $90,000 salary who contributes $15,000 to a traditional 401(k) reduces their taxable income from $75,000 to $60,000 &mdash; saving $3,300 in federal income tax (roughly 22% of the $15,000 contribution). The 401(k) contribution effectively &ldquo;costs&rdquo; them only $11,700 in take-home pay, not $15,000.
      </p>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal Brackets Are Only Part of Your Tax Bill
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal income tax brackets explain one significant portion of your paycheck deductions &mdash; but there are others that run in parallel:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>FICA taxes:</strong> 6.2% for Social Security (up to $168,600) + 1.45% for Medicare, totaling 7.65% of your gross wages. Unlike income tax, FICA is not affected by the standard deduction.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>State income tax:</strong> Varies from 0% (no-income-tax states like Texas and Florida) to 13.3% (California&rsquo;s top rate). Most states have their own bracket system.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Local taxes:</strong> Some cities (New York City, Philadelphia, etc.) levy their own income taxes on top of federal and state.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A worker earning $75,000 in California might have an effective total tax rate (federal income + FICA + state) of around <strong>28–30%</strong>, while someone earning the same amount in Texas &mdash; with no state income tax &mdash; might pay closer to <strong>18–20%</strong>.
      </p>

      {/* Section 13: Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 2026 federal income tax system has seven brackets: 10%, 12%, 22%, 24%, 32%, 35%, and 37%. Each rate applies only to the slice of income within its range &mdash; not to your entire income. After subtracting the $15,000 standard deduction (for single filers), most middle-income earners end up with effective federal income tax rates between 8% and 17%.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most important things to remember: your marginal rate (the top bracket you reach) is higher than your effective rate (what you actually pay overall). A raise never costs you money &mdash; it only taxes the additional income at the higher rate. And pre-tax contributions to retirement accounts and HSAs can meaningfully reduce which bracket you fall into.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a precise calculation of your take-home pay after federal brackets, FICA, and your state&rsquo;s taxes, use the calculator below.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Federal Tax Bracket Instantly
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly which bracket you fall into, your effective rate, and your full take-home pay after all deductions &mdash; federal, FICA, and state.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#dc2626',
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
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Year 2026 Inflation Adjustments</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 551: Standard Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 409: Capital Gains and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 401(k) Contribution Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; IRA Deduction Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p15t.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 15-T: Federal Income Tax Withholding Methods</a>
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
