import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: '$60,000 Salary After Taxes: What You Keep in Every State (2026)' },
  description:
    'On a $60,000 salary in 2026, you keep $50,390 in a no-tax state — or as little as $46,368 in Hawaii. See the full federal breakdown and state-by-state take-home comparison.',
  alternates: { canonical: '/blog/60000-salary-after-taxes-by-state' },
  keywords:
    '$60000 salary after taxes, 60k salary take home pay 2026, $60000 net pay by state, sixty thousand salary taxes, 60000 a year after taxes',
  openGraph: {
    type: 'article',
    url: '/blog/60000-salary-after-taxes-by-state',
    images: [{ url: '/og/blog/60000-salary-after-taxes-by-state', width: 1200, height: 630 }],
    title: '$60,000 Salary After Taxes: What You Keep in Every State (2026)',
    description:
      'On a $60,000 salary in 2026, you keep $50,390 in a no-tax state — or as little as $46,368 in Hawaii. Full federal breakdown and state comparison.',
  },
}

export default function Salary60kAfterTaxes() {
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
          aria-label="$60,000 salary after taxes illustration showing gross pay versus take-home"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Left label */}
          <text x="110" y="55" textAnchor="middle" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">GROSS PAY</text>
          <text x="110" y="80" textAnchor="middle" fontSize="28" fontWeight="800" fill="#fff" fontFamily="monospace">$60K</text>
          {/* Arrow */}
          <line x1="190" y1="75" x2="240" y2="75" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="240,67 255,75 240,83" fill="rgba(255,255,255,0.6)" />
          {/* Breakdown box */}
          <rect x="265" y="38" width="295" height="124" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="412" y="60" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">2026 DEDUCTIONS (single)</text>
          <text x="290" y="84" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Federal income tax</text>
          <text x="545" y="84" textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="monospace">$5,020</text>
          <text x="290" y="102" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Social Security (6.2%)</text>
          <text x="545" y="102" textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="monospace">$3,720</text>
          <text x="290" y="120" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Medicare (1.45%)</text>
          <text x="545" y="120" textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="monospace">$870</text>
          <line x1="280" y1="130" x2="555" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <text x="290" y="148" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">Take-home (no state tax)</text>
          <text x="545" y="148" textAnchor="end" fontSize="13" fontWeight="800" fill="#fff" fontFamily="monospace">$50,390</text>
          {/* Bottom */}
          <text x="110" y="160" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">before state tax</text>
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
        $60,000 Salary After Taxes: What You Keep in Every State (2026)
      </h1>

      <ArticleMeta slug="60000-salary-after-taxes-by-state" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Earn $60,000 a year and you&rsquo;ll take home roughly <strong>$50,390</strong> in a state with no income tax &mdash; or as little as <strong>$46,368</strong> in Hawaii. The difference is almost entirely your state&rsquo;s income tax rate. Federal income tax, Social Security, and Medicare are the same everywhere: $9,610 on a $60,000 salary for a single filer in 2026.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Below is the complete step-by-step federal calculation, a state-by-state take-home comparison across representative states, and a per-paycheck breakdown &mdash; all using the official 2026 tax constants from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>IRS Revenue Procedure 2025-32</a> and the{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>SSA 2026 wage base</a>.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step-by-Step: Federal Taxes on $60,000 in 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Every taxpayer pays the same federal taxes regardless of which state they live in. There are three layers: federal income tax, Social Security, and Medicare. Here&rsquo;s the exact math for a single filer earning $60,000.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Federal Income Tax
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        The 2026 standard deduction for a single filer is <strong>$16,100</strong>. That reduces your taxable income from $60,000 to <strong>$43,900</strong>.{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(IRS Rev. Proc. 2025-32)</a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        With $43,900 in taxable income, you fall into two brackets:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.9,
        }}
      >
        <div>10% &times; $12,400 = <strong>$1,240.00</strong></div>
        <div>12% &times; $31,500 ($43,900 &minus; $12,400) = <strong>$3,780.00</strong></div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Total federal income tax = <strong>$5,020.00</strong>
        </div>
      </div>

      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Your marginal federal rate is 12%. Your effective federal income tax rate is $5,020 &divide; $60,000 = 8.37%.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        FICA Taxes (Social Security &amp; Medicare)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <a href="/blog/fica-taxes-explained" style={{ color: '#2563eb', textDecoration: 'underline' }}>FICA taxes</a> apply to your full $60,000 gross pay &mdash; no standard deduction reduces them. The 2026 rates are:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.9,
        }}
      >
        <div>Social Security (6.2%) &times; $60,000 = <strong>$3,720.00</strong></div>
        <div>Medicare (1.45%) &times; $60,000 = <strong>$870.00</strong></div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Total FICA = <strong>$4,590.00</strong>
        </div>
      </div>

      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        $60,000 is well below the 2026 Social Security wage base of $184,500, so all wages are subject to FICA. No Additional Medicare Tax applies (that kicks in above $200,000).
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Total Federal Deductions
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Deduction</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate / Basis</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Per Biweekly Check</th>
            </tr>
          </thead>
          <tbody>
            {([
              ['Federal income tax', '10%–12% on $43,900', '$5,020', '$193.08'],
              ['Social Security', '6.2% on $60,000', '$3,720', '$143.08'],
              ['Medicare', '1.45% on $60,000', '$870', '$33.46'],
            ] as const).map(([label, basis, annual, biweekly], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', color: '#475569' }}>{basis}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{annual}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{biweekly}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total federal deductions</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$9,610</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$369.62</td>
            </tr>
            <tr style={{ background: '#f0fdf4' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#059669' }}>Take-home before state tax</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontSize: '1.05rem' }}>$50,390</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$1,938.08</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2 — state comparison */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Does State Tax Affect Your $60,000 Take-Home?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        State income tax ranges from zero to over 10% &mdash; and it hits your paycheck on top of what you already pay the federal government. Nine states charge no income tax at all:{' '}
        <a href="/blog/states-with-no-income-tax" style={{ color: '#2563eb', textDecoration: 'underline' }}>Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming</a>.
        Residents of those states keep the full $50,390 from the federal calculation above.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Every other state chips away at that number. Here is how take-home varies across a broad range of states at $60,000, using each state&rsquo;s official 2026 rates and standard deductions:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax system</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State tax owed</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual take-home</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Biweekly net</th>
            </tr>
          </thead>
          <tbody>
            {([
              ['Texas / Florida / Nevada', 'No income tax', '$0', '$50,390', '$1,938'],
              ['Arizona', '2.5% flat', '$1,135', '$49,255', '$1,894'],
              ['Indiana', '3.05% flat', '$1,830', '$48,560', '$1,868'],
              ['Iowa', '3.8% flat', '$1,725', '$48,665', '$1,872'],
              ['Arkansas', 'Progressive (top 3.9%)', '$2,170', '$48,220', '$1,855'],
              ['Colorado', '4.4% flat', '$1,998', '$48,392', '$1,861'],
              ['California', 'Progressive (top 13.3%)', '$1,898', '$48,492', '$1,865'],
              ['Illinois', '4.95% flat', '$2,970', '$47,420', '$1,824'],
              ['Georgia', '5.19% flat', '$2,491', '$47,899', '$1,842'],
              ['Alabama', 'Progressive (top 5%)', '$2,835', '$47,555', '$1,829'],
              ['Connecticut', 'Progressive (top 6.99%)', '$2,850', '$47,540', '$1,829'],
              ['Idaho', '5.8% flat', '$2,633', '$47,757', '$1,837'],
              ['Hawaii', 'Progressive (top 11%)', '$4,022', '$46,368', '$1,783'],
            ] as const).map(([state, system, stateTax, takeHome, biweekly], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500, color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{system}</td>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{stateTax}</td>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{takeHome}</td>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{biweekly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Calculations assume a single filer with no pre-tax deductions. State standard deductions and brackets from each state&rsquo;s 2026 revenue department. For states not shown, use the{' '}
        <a href="/" style={{ color: '#2563eb' }}>free paycheck calculator</a> to get the exact figure for your state.
      </p>

      {/* Interesting insight */}
      <div
        style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#166534', margin: 0 }}>
          <strong>Interesting pattern:</strong> California&rsquo;s state tax on $60,000 ($1,898) is actually <em>lower</em> than Illinois&rsquo;s ($2,970), even though California&rsquo;s top rate (13.3%) is far higher. The reason: California&rsquo;s brackets are graduated, and $60,000 falls mostly in the lower tiers. Illinois applies a flat 4.95% to the entire $60,000 with no standard deduction, which costs more at this income level.
        </p>
      </div>

      {/* Section 3 — state deep dives */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Three States, Three Very Different Paychecks
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        To make the difference concrete, here is how the full $60,000 breaks down in Texas, California, and Illinois &mdash; three of the most populated states with three very different tax approaches.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Texas: $50,390 take-home
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Texas has <strong>no state income tax</strong>, so all $50,390 left after federal deductions stays with you. That&rsquo;s <strong>$1,938 per biweekly paycheck</strong> or <strong>$4,199 per month</strong>. Your overall effective tax rate (federal + FICA only) is 16.02%.{' '}
        <a href="/texas/60000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>See the full Texas $60,000 breakdown &rarr;</a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        California: $48,492 take-home
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        California subtracts a $5,540 state standard deduction, leaving $54,460 in state taxable income. The progressive rates apply:
      </p>
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.875rem',
          color: '#1e293b',
          lineHeight: 2,
        }}
      >
        <div>1% &times; $10,412 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $104.12</div>
        <div>2% &times; $14,272 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $285.44</div>
        <div>4% &times; $14,275 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $571.00</div>
        <div>6% &times; $15,122 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $907.32</div>
        <div>8% &times; $379 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $30.32</div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.4rem', paddingTop: '0.4rem' }}>
          California income tax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <strong>$1,898</strong>
        </div>
      </div>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Total take-home: $50,390 &minus; $1,898 = <strong>$48,492</strong> ($1,865 biweekly). Despite California&rsquo;s fearsome reputation for taxes, $60,000 sits comfortably in the lower brackets and the state deduction helps.{' '}
        <a href="/california/60000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>Full California $60,000 breakdown &rarr;</a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Illinois: $47,420 take-home
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Illinois uses a flat 4.95% rate with <em>no standard deduction</em>, so the tax applies to the full $60,000:
      </p>
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
        }}
      >
        4.95% &times; $60,000 = <strong>$2,970</strong>
      </div>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Take-home: $50,390 &minus; $2,970 = <strong>$47,420</strong> ($1,824 biweekly). Illinois costs $1,072 more per year than California at this income level &mdash; a counter-intuitive outcome of how flat taxes interact with deductions.
      </p>

      {/* Section 4 — biweekly question */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Does a $60,000 Salary Look Like Per Paycheck?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Most workers are paid biweekly (every two weeks), which means 26 paychecks per year. On a $60,000 salary, your gross pay per check is <strong>$2,307.69</strong>. Here&rsquo;s what gets taken out of each one in Texas (federal + FICA only):
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Pay stub line</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Per biweekly check</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual total</th>
            </tr>
          </thead>
          <tbody>
            {([
              ['Gross pay', '$2,307.69', '$60,000'],
              ['Federal income tax withheld', '−$193.08', '−$5,020'],
              ['Social Security (OASDI)', '−$143.08', '−$3,720'],
              ['Medicare', '−$33.46', '−$870'],
              ['State income tax (TX/FL/NV)', '−$0.00', '−$0'],
            ] as const).map(([label, per, annual], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 0 ? '#1e293b' : '#dc2626' }}>{per}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 0 ? '#1e293b' : '#dc2626' }}>{annual}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Net pay (take-home)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontSize: '1.05rem' }}>$1,938.08</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$50,390</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you get paid semimonthly (24 checks/year), each gross check is $2,500 and net is $2,099.58 in a no-tax state. Weekly (52 checks) gives $1,153.85 gross and $969.04 net. The annual take-home is identical regardless of pay frequency &mdash; only the rhythm of cash flow changes. See our full{' '}
        <a href="/blog/weekly-vs-biweekly-vs-monthly-pay" style={{ color: '#2563eb', textDecoration: 'underline' }}>pay frequency guide</a> for more.
      </p>

      {/* Section 5 — which state is best */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which State Keeps the Most of Your $60,000?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        On a pure income-tax basis, the nine no-tax states win: you keep <strong>$50,390</strong> (or $1,938 biweekly). That&rsquo;s $4,022 more per year than Hawaii, and $2,970 more per year than Illinois.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Among states with income taxes, Arizona is one of the most favorable at this salary level: its 2.5% flat rate and generous $14,600 standard deduction (matching the federal standard before the 2026 inflation adjustment) produce just $1,135 in state tax &mdash; the lowest of any state that levies an income tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        That said, <strong>state income tax is only one slice of your total tax burden</strong>. Property taxes, sales taxes, and the cost of living also vary widely. A no-tax state with high property taxes (like Texas, which has some of the highest property taxes in the nation) may not be a net win for renters vs. homeowners. For a deeper look, see our{' '}
        <a href="/blog/state-income-tax-rates-ranked" style={{ color: '#2563eb', textDecoration: 'underline' }}>full state income tax ranking</a> and the{' '}
        <a href="/blog/best-states-for-remote-workers-taxes" style={{ color: '#2563eb', textDecoration: 'underline' }}>best states for remote workers</a>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The difference between living in Texas and Hawaii on a $60,000 salary is <strong>$4,022 per year</strong> in state income tax alone &mdash; money that in Texas stays in your pocket. That&rsquo;s roughly $335 per month, or a meaningful chunk of a car payment.
      </p>

      {/* Section 6 — how to change your withholding */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Can You Keep More of Your $60,000?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You can&rsquo;t escape FICA, but you can legally reduce your federal and state income tax liability through pre-tax deductions:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Traditional 401(k):</strong> Every $1,000 you contribute reduces your federal taxable income by $1,000, saving you $120 in federal tax at the 12% bracket. The 2026 employee contribution limit is $23,500. Even a 6% contribution ($3,600) saves you $432 per year in federal income tax.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Health insurance premiums</strong> paid through a Section 125 cafeteria plan reduce both your taxable income <em>and</em> your FICA wages.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>HSA contributions</strong> (up to $4,300 for self-only coverage in 2026) are exempt from federal income tax, FICA, and most state taxes &mdash; a triple tax break.{' '}
          <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(IRS Publication 969)</a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a detailed look at every strategy, see{' '}
        <a href="/blog/reduce-taxable-income-2026" style={{ color: '#2563eb', textDecoration: 'underline' }}>10 ways to reduce your taxable income in 2026</a>.
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
          See Your Exact Take-Home for $60,000
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your state, filing status, and any pre-tax deductions to see your real net pay &mdash; down to the dollar.
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
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Revenue Procedure 2025-32 &mdash; 2026 inflation adjustments (standard deduction, brackets)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; 2026 Social Security Wage Base ($184,500)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 751 &mdash; Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://azdor.gov/individual-income-tax-highlights" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Arizona Department of Revenue &mdash; 2.5% flat rate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ftb.ca.gov/file/personal/tax-calculator/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California Franchise Tax Board &mdash; 2026 tax rates and brackets</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://tax.illinois.gov/individuals/individual-income-tax/rates.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Illinois Department of Revenue &mdash; 4.95% flat rate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://tax.hawaii.gov/forms/a1_b1_1_4taxrate/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Hawaii Department of Taxation &mdash; individual income tax rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 969 &mdash; Health Savings Accounts (HSA limits)</a>
        </li>
      </ul>

      <ArticleFooter current="60000-salary-after-taxes-by-state" />
    </article>
  )
}
