import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Per Diem Pay: What\'s Taxable and What\'s Not (2026)' },
  description:
    'Per diem is completely tax-free under a valid accountable plan — but exceed the federal rate and the IRS treats the excess as wages. Full 2026 guide with worked examples.',
  alternates: { canonical: '/blog/per-diem-pay-taxes-2026' },
  keywords:
    'per diem taxable 2026, is per diem income, per diem tax rules, accountable plan per diem, GSA per diem rates 2026, per diem W-2, per diem reimbursement taxes, high-low per diem method',
  openGraph: {
    type: 'article',
    url: '/blog/per-diem-pay-taxes-2026',
    images: [{ url: '/og/blog/per-diem-pay-taxes-2026', width: 1200, height: 630 }],
    title: 'Per Diem Pay: What\'s Taxable and What\'s Not (2026)',
    description:
      'Per diem under a valid accountable plan is completely tax-free — but exceed the federal rate and the excess becomes taxable wages. Full 2026 guide.',
  },
}

export default function PerDiemPayTaxes2026() {
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
          aria-label="Per diem tax rules illustration showing accountable plan versus non-accountable plan"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Suitcase left */}
          <rect x="48" y="65" width="72" height="56" rx="6" fill="rgba(255,255,255,0.2)" />
          <rect x="66" y="54" width="36" height="14" rx="4" fill="rgba(255,255,255,0.2)" />
          <line x1="54" y1="88" x2="114" y2="88" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <text x="84" y="107" textAnchor="middle" fontSize="22" fontWeight="700" fill="white" fontFamily="monospace">$</text>
          {/* Arrow */}
          <line x1="132" y1="93" x2="168" y2="93" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" />
          <polygon points="168,87 182,93 168,99" fill="rgba(255,255,255,0.6)" />
          {/* Accountable plan box */}
          <rect x="192" y="48" width="142" height="92" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="263" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="sans-serif">ACCOUNTABLE PLAN</text>
          <text x="263" y="95" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.85)" fontFamily="monospace">&#8804; $225/day</text>
          <text x="263" y="112" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">standard city</text>
          <text x="263" y="131" textAnchor="middle" fontSize="14" fontWeight="700" fill="#a7f3d0" fontFamily="sans-serif">&#10003; TAX-FREE</text>
          {/* Non-accountable box */}
          <rect x="352" y="48" width="142" height="92" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="423" y="74" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="sans-serif">NO PLAN / EXCESS</text>
          <text x="423" y="95" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.85)" fontFamily="monospace">Any amount</text>
          <text x="423" y="112" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">no receipts required</text>
          <text x="423" y="131" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fca5a5" fontFamily="sans-serif">&#10007; TAXABLE</text>
          {/* Bottom label */}
          <text x="300" y="168" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">IRS Per Diem Rules &middot; Tax Year 2026</text>
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
        Per Diem Pay: What&rsquo;s Taxable and What&rsquo;s Not (2026)
      </h1>

      <ArticleMeta slug="per-diem-pay-taxes-2026" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Per diem payments are fixed daily allowances employers give employees to cover lodging, meals, and incidentals while traveling for work. They can be completely <strong>tax-free</strong> &mdash; or completely <strong>taxable</strong> &mdash; and the difference comes down to one rule: whether your employer runs a qualified <strong>accountable plan</strong>. Under a properly structured plan, per diem up to the federal government&rsquo;s daily rates never shows up as income. Exceed those rates &mdash; or skip the plan requirements &mdash; and the IRS treats the payments as ordinary wages.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers the accountable plan rules, the 2026 federal per diem rates from both the GSA and IRS, exactly what appears on your W-2, and a full worked dollar example showing the tax cost of exceeding the daily limit.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Per Diem Pay?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <em>Per diem</em> is Latin for &ldquo;per day.&rdquo; In payroll terms it refers to a daily dollar amount an employer pays to reimburse &mdash; or pre-pay &mdash; an employee&rsquo;s out-of-pocket travel expenses while working away from home overnight. Common expenses per diem covers:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Lodging</strong> &mdash; hotel or other overnight accommodation</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Meals and incidental expenses (M&amp;IE)</strong> &mdash; all meals, tips on meals, and minor incidentals such as valet parking and laundry fees</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Incidentals only</strong> &mdash; a smaller daily rate ($5) when lodging and meals are separately reimbursed with receipts</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Per diem is a <em>reimbursement for costs</em>, not compensation for your time. That distinction is why it can be completely excluded from your taxable income when the rules are followed correctly &mdash; unlike your regular salary or a bonus.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Accountable Plan Rule: The Key to Tax-Free Per Diem
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS allows employers to pay per diem without withholding income tax, Social Security, Medicare, or FUTA &mdash; but only if the arrangement qualifies as an <strong>accountable plan</strong>. According to{' '}
        <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>IRS Publication 15 (2026)</a>,
        {' '}an accountable plan must meet all three of these tests:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Business connection.</strong> The expense must be a legitimate business cost &mdash; travel to a client meeting, conference, or job site, not a personal trip.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Substantiation within a reasonable time.</strong> The employee must document the time, place, and business purpose of travel. When per diem is at or below the federal rate, the IRS treats this as automatically substantiated &mdash; no meal or lodging receipts required.{' '}
          <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Publication 463)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Return of excess within a reasonable time.</strong> If the employer pays more than the employee actually spent, the excess must be returned. When per diem is set at or below the federal rate, this requirement is automatically satisfied &mdash; there is nothing to return.
        </li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When all three conditions are met, per diem payments up to the applicable federal rate are <strong>excluded from wages entirely</strong> &mdash; no federal income tax, no Social Security, no Medicare, no state income tax. The money simply does not count as compensation.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When the arrangement fails these requirements &mdash; or when the employer just pays a flat daily allowance with no plan structure &mdash; the IRS classifies it as a <strong>non-accountable plan</strong> and the full payment becomes taxable wages subject to all withholding.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are the Federal Per Diem Rates for 2026?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal government publishes two sets of per diem rates. Either set defines the tax-free ceiling for an accountable plan. Both apply to continental US (CONUS) travel; Alaska, Hawaii, and US territories follow separate Department of Defense rates.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        1. GSA Standard CONUS Rate
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The{' '}
        <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          U.S. General Services Administration (GSA)
        </a>{' '}
        publishes per diem rates city by city. The standard CONUS rate &mdash; used for any city without a specifically listed rate &mdash; was:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.4rem' }}>
          January 1 &ndash; September 30, 2026: <strong>$178/day</strong> ($110 lodging + $68 M&amp;IE){' '}
          <a href="https://www.gsa.gov/about-gsa/newsroom/news-releases/gsa-releases-fy-2026-conus-per-diem-rates-for-federal-travelers-08152025" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(GSA FY&nbsp;2026 release)</a>
        </li>
        <li style={{ marginBottom: '0.4rem' }}>
          October 1 &ndash; December 31, 2026: <strong>$181/day</strong> ($113 lodging + $68 M&amp;IE){' '}
          <a href="https://www.gsa.gov/policy-regulations/regulations/federal-travel-regulation/ftr-and-related-files/gsa-per-diem-bulletin-ftr-2701" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(GSA FY&nbsp;2027 bulletin)</a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        High-demand cities &mdash; New York City, San Francisco, Boston, Washington&nbsp;D.C., and others &mdash; have higher GSA listed rates. You can look up any destination at{' '}
        <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>gsa.gov/travel</a>.
        First and last travel days are paid at 75% of the M&amp;IE rate.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        2. IRS High-Low Simplified Method
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Most employers find it easier to use the IRS <strong>high-low method</strong> rather than tracking individual GSA city rates. It uses one flat rate for high-cost areas and a lower rate everywhere else. For calendar year 2026, two IRS notices set the rates:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Period (2026)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>High-Cost Locality</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>All Other CONUS</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Jan 1 – Sep 30', '$319/day  ($86 M&IE)', '$225/day  ($74 M&IE)'],
              ['Oct 1 – Dec 31', '$329/day  ($86 M&IE)', '$230/day  ($74 M&IE)'],
            ].map(([period, high, std], i) => (
              <tr key={period} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{period}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{high}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{std}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Sources:{' '}
        <a href="https://www.irs.gov/pub/irs-drop/n-25-54.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Notice 2025-54</a> (rates through Sep 30, 2026) and successor IRS notice (rates effective Oct 1, 2026).
        Incidentals-only rate: $5/day for all CONUS localities in both periods.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A city qualifies as &ldquo;high-cost&rdquo; if its GSA federal per diem rate meets or exceeds $272 (the FY&nbsp;2026 threshold) or $280 (the FY&nbsp;2027 threshold). Employers must use the same method &mdash; high-low or city-by-city &mdash; for the full calendar year and cannot switch mid-year.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens When Per Diem Exceeds the Federal Rate?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When an employer pays above the applicable federal rate under an accountable plan, the <em>excess</em> becomes taxable wages. The employee keeps the extra money but owes income tax and FICA on it. The employer must:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Add the excess to W-2 Box 1 (wages) at year-end</li>
        <li style={{ marginBottom: '0.5rem' }}>Withhold federal income tax, Social Security, and Medicare on the excess</li>
        <li style={{ marginBottom: '0.5rem' }}>Report the non-taxable portion in W-2 Box 12 using Code&nbsp;L</li>
      </ul>

      {/* Section 5: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: 5-Day Business Trip to New York City
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Marco is a sales manager earning{' '}
        <a href="/new-york/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000/year in New York</a>{' '}
        &mdash; landing him in the 22% federal bracket after the $16,100 standard deduction. In March 2026 he travels to New York City (a high-cost locality) for a 5-day client engagement. His employer pays $350/day under their accountable plan.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Apply the IRS High-Low Rate
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
          lineHeight: 1.9,
        }}
      >
        IRS high-cost rate (Jan&ndash;Sep 2026): $319/day<br />
        Tax-free amount: $319 &times; 5 days = <strong>$1,595</strong><br />
        Company pays: $350 &times; 5 days = $1,750<br />
        Taxable excess: $1,750 &minus; $1,595 = <strong>$155</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Taxes Owed on the $155 Excess
      </h3>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>On $155</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal income tax', '22%', '$34.10'],
              ['Social Security', '6.2%', '$9.61'],
              ['Medicare', '1.45%', '$2.25'],
            ].map(([tax, rate, amount], i) => (
              <tr key={tax} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total tax on excess</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$45.96</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>W-2 impact at year-end:</strong>
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.4rem' }}>Box 1 (Wages): $75,000 + $155 = <strong>$75,155</strong></li>
        <li style={{ marginBottom: '0.4rem' }}>Box 12, Code L: <strong>$1,595</strong> (non-taxable per diem portion)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Paying $31/day above the IRS rate cost Marco about $46 in extra taxes for the whole trip. Scale that up: a traveling employee who takes 100 days per year in high-cost cities at the same rate would owe roughly <strong>$920 more</strong> in taxes on the excess than an employee paid exactly at the IRS rate.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Same Trip Under a Non-Accountable Plan
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        If Marco&rsquo;s employer had no accountable plan structure &mdash; or required no substantiation whatsoever &mdash; the entire $1,750 would be taxable:
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
          lineHeight: 1.9,
        }}
      >
        Federal income tax (22%): $1,750 &times; 22% = $385.00<br />
        Social Security (6.2%): $1,750 &times; 6.2% = $108.50<br />
        Medicare (1.45%): $1,750 &times; 1.45% = $25.38<br />
        <strong>Total tax: $518.88</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Accountable plan (excess only): <strong>$46 in tax.</strong> No plan: <strong>$519 in tax</strong> &mdash; same trip, same reimbursement. The accountable plan structure saves Marco $473 on a single five-day engagement.
      </p>

      {/* Section 6: Stipends */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Are Stipends Taxable?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Usually yes.</strong> A <em>stipend</em> is a fixed periodic payment &mdash; often used for interns, graduate student researchers, remote-work expense allowances, or professional development. Unlike a per diem tied to documented travel, most stipends are treated as ordinary compensation:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Employer stipends (remote work, internet, wellness, phone):</strong> Taxable wages unless a specific IRS exclusion applies &mdash; for example, qualified transportation benefits (IRC &sect;132). Home-office stipends paid without an accountable plan structure are simply additional wages on your W-2.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Intern and graduate-student stipends paid for services:</strong> Taxable compensation. The IRS distinguishes these from qualified scholarships, which can be tax-free if applied to tuition and fees at a degree-granting institution{' '}
          <a href="https://www.irs.gov/taxtopics/tc421" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(IRS Topic&nbsp;421)</a>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Per diem labeled as a &ldquo;stipend&rdquo;:</strong> The label does not change the tax outcome &mdash; substance controls. If the daily allowance is tied to legitimate business travel and meets all three accountable plan tests, it is still tax-free up to the federal rate.
        </li>
      </ul>

      {/* Section 7: Self-Employed */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Per Diem for Self-Employed Workers: What You Can Deduct
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Freelancers and self-employed workers cannot use the federal per diem rate for <em>lodging</em> &mdash; they must keep actual receipts{' '}
        <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(IRS Pub.&nbsp;463)</a>.
        However, they <em>can</em> use the federal rate for <strong>meals and incidental expenses</strong>, which simplifies record-keeping significantly:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Standard CONUS M&amp;IE rate: <strong>$68/day</strong> (no receipts required)</li>
        <li style={{ marginBottom: '0.5rem' }}>High-cost locality M&amp;IE rate: <strong>$86/day</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Incidentals-only (no meal claim): <strong>$5/day</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed M&amp;IE deductions are subject to the <strong>50% meal disallowance</strong>: only half of meal costs are deductible under IRC &sect;274(n). So a $68/day M&amp;IE per diem produces only a $34/day deduction. Lodging is 100% deductible when backed by receipts. Both flow through Schedule C to reduce self-employment income and the corresponding self-employment tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a full picture of self-employment taxes, see our guide to{' '}
        <a href="/blog/self-employment-tax-freelancers" style={{ color: '#2563eb', textDecoration: 'underline' }}>what freelancers pay in self-employment tax</a>{' '}
        and how deductions reduce that bill.
      </p>

      {/* Section 8: W-2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Per Diem Shows Up on Your W-2
      </h2>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Situation</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>W-2 Box 1</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>W-2 Box 12</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Accountable plan, at or below federal rate', 'Nothing added', 'Code L = full per diem (optional)'],
              ['Accountable plan, above federal rate', 'Excess added as wages', 'Code L = tax-free portion'],
              ['Non-accountable plan', 'Full per diem as wages', 'Nothing'],
            ].map(([sit, box1, box12], i) => (
              <tr key={sit} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{sit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{box1}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{box12}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Code L in Box 12 is purely informational: it shows the IRS what portion of your reimbursements was non-taxable. It does not reduce your taxable income further &mdash; it simply explains why your Box 1 wages may be less than the total of all your paychecks. See our{' '}
        <a href="/blog/understanding-your-w2" style={{ color: '#2563eb', textDecoration: 'underline' }}>W-2 box-by-box guide</a>{' '}
        for a full explanation of every code.
      </p>

      {/* Section 9: Questions */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common Questions About Per Diem and Taxes
      </h2>

      <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Does tax-free per diem count toward Social Security benefits?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        No. Because non-taxable per diem is excluded from your W-2 Box 1 wages, it does not count as covered earnings for Social Security benefit calculations. Only taxable wages &mdash; including any excess over the federal rate &mdash; get recorded in your Social Security earnings history. Learn more about{' '}
        <a href="/blog/fica-taxes-explained" style={{ color: '#2563eb', textDecoration: 'underline' }}>how FICA taxes and Social Security work</a>.
      </p>

      <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Can I deduct unreimbursed travel expenses as a W-2 employee?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        No. The Tax Cuts and Jobs Act eliminated the deduction for unreimbursed employee business expenses (Schedule A, miscellaneous itemized deductions) for 2018 through 2025, and it was not restored for 2026. If your employer does not reimburse travel costs, your best option is to ask HR to establish an accountable plan &mdash; the tax savings are substantial for both parties.
      </p>

      <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        What if my employer uses a per diem lower than the federal rate?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The entire per diem is tax-free under an accountable plan &mdash; even if it is well below the federal rate. There is no minimum; the federal rate is only a ceiling, not a floor. An employer paying $120/day (below the $225 standard rate) under an accountable plan owes zero tax on any of it.
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Per diem reimbursements are among the most tax-efficient forms of employee compensation available &mdash; but only when the accountable plan rules are followed. Pay at or below the 2026 IRS high-low rates ($225/day for standard cities, $319/day for high-cost cities through September; $230/$329 from October onward) and the money is entirely tax-free. Exceed the limit or skip the plan requirements and the IRS treats every dollar as wages, triggering income tax and FICA withholding.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you travel frequently for work and want to see how per diem affects your overall take-home pay in different states &mdash; compare <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> (no state income tax) against <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> (up to 13.3%) &mdash; use the calculator below and see our guide on{' '}
        <a href="/blog/paycheck-deductions-explained" style={{ color: '#2563eb', textDecoration: 'underline' }}>all the deductions that come out of a paycheck</a>.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#ecfdf5',
          border: '1px solid #a7f3d0',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Full Take-Home Pay After All Taxes
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see a complete breakdown: federal tax by bracket, Social Security, Medicare, and your state &mdash; plus what actually lands in your bank account.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#059669',
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
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15 (2026) &mdash; Employer&rsquo;s Tax Guide (Accountable Plan rules)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 463 &mdash; Travel, Gift, and Car Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/n-25-54.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Notice 2025-54 &mdash; Special Per Diem Rates (Oct 1, 2025 &ndash; Sep 30, 2026)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.gsa.gov/about-gsa/newsroom/news-releases/gsa-releases-fy-2026-conus-per-diem-rates-for-federal-travelers-08152025" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>GSA &mdash; FY 2026 CONUS Per Diem Rates News Release</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.gsa.gov/policy-regulations/regulations/federal-travel-regulation/ftr-and-related-files/gsa-per-diem-bulletin-ftr-2701" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>GSA &mdash; Per Diem Bulletin FTR 27-01 (FY 2027, effective Oct 1, 2026)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>GSA &mdash; Current Per Diem Rates by City</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc421" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 421 &mdash; Scholarships, Fellowship Grants, and Other Grants</a>
        </li>
      </ul>

      <ArticleFooter current="per-diem-pay-taxes-2026" />
    </article>
  )
}
