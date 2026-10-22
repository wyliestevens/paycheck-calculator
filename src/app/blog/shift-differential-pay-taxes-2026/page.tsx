import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Shift Differential Pay: How Night Shifts and Weekend Pay Are Taxed in 2026' },
  description:
    'Shift differential pay is taxed as ordinary income — just like your base wages. Here\'s why your overnight or weekend check looks taxed harder, plus a full worked example at $25/hr.',
  alternates: { canonical: '/blog/shift-differential-pay-taxes-2026' },
  keywords:
    'shift differential pay taxes 2026, how is shift differential taxed, night shift pay tax, weekend differential tax, overtime vs shift differential, shift pay take-home',
  openGraph: {
    type: 'article',
    url: '/blog/shift-differential-pay-taxes-2026',
    images: [{ url: '/og/blog/shift-differential-pay-taxes-2026', width: 1200, height: 630 }],
    title: 'Shift Differential Pay: How Night Shifts and Weekend Pay Are Taxed in 2026',
    description:
      'Shift differential pay is ordinary income — taxed at your marginal rate. Here\'s the full breakdown with a worked dollar example.',
  },
}

export default function ShiftDifferentialPayTaxes2026() {
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
          aria-label="Night shift pay illustration showing a moon, clock, and pay differential"
        >
          <rect width="600" height="200" rx="12" fill="#be185d" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Moon + stars (night shift) */}
          <circle cx="80" cy="80" r="35" fill="rgba(255,255,255,0.18)" />
          <path d="M65,60 Q90,65 88,95 Q70,110 55,90 Q50,70 65,60Z" fill="rgba(255,255,255,0.5)" />
          <circle cx="115" cy="45" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="130" cy="62" r="2" fill="rgba(255,255,255,0.5)" />
          <circle cx="105" cy="35" r="2" fill="rgba(255,255,255,0.5)" />
          <circle cx="140" cy="38" r="3" fill="rgba(255,255,255,0.6)" />

          {/* Arrow pointing right */}
          <line x1="170" y1="100" x2="225" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
          <polygon points="225,92 242,100 225,108" fill="rgba(255,255,255,0.55)" />

          {/* Pay stub breakdown */}
          <rect x="250" y="40" width="300" height="120" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="400" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">YOUR PAYCHECK</text>

          <line x1="270" y1="74" x2="530" y2="74" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

          <text x="280" y="94" fontSize="11" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Base pay</text>
          <text x="520" y="94" textAnchor="end" fontSize="11" fontFamily="monospace" fill="rgba(255,255,255,0.75)">$52,000</text>

          <text x="280" y="114" fontSize="11" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Night diff (15%)</text>
          <text x="520" y="114" textAnchor="end" fontSize="11" fontFamily="monospace" fill="#fce7f3">+$4,680</text>

          <line x1="270" y1="122" x2="530" y2="122" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

          <text x="280" y="140" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">Total gross</text>
          <text x="520" y="140" textAnchor="end" fontSize="12" fontWeight="700" fontFamily="monospace" fill="#fff">$56,680</text>

          <text x="400" y="162" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">taxed as ordinary income</text>
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
        Shift Differential Pay: How Night Shifts and Weekend Pay Are Taxed in 2026
      </h1>

      <ArticleMeta slug="shift-differential-pay-taxes-2026" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Millions of nurses, warehouse workers, factory employees, and security guards earn shift differential pay &mdash; extra money for working overnight, on weekends, or on holidays. If you&rsquo;ve noticed your big differential weeks seem to &ldquo;eat&rdquo; more in taxes, this guide explains why, and shows you exactly what you keep. The short answer: shift differential pay is taxed <strong>exactly like your regular wages</strong> &mdash; as ordinary income, no special rate &mdash; but paycheck-level withholding math can make it look heavier than it is.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Shift Differential Pay?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A shift differential is a premium added to your base wage or salary for working hours or days that most workers prefer not to work. Employers offer it to fill hard-to-staff shifts. Common types include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Night or overnight differential</strong> &mdash; for shifts that fall between roughly 3 p.m.&ndash;11 p.m. (&ldquo;swing shift&rdquo;) or 11 p.m.&ndash;7 a.m. (&ldquo;graveyard shift&rdquo;)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Weekend differential</strong> &mdash; extra pay for Saturday and Sunday hours</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Holiday differential</strong> &mdash; higher pay for working on recognized holidays</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>On-call and callback differential</strong> &mdash; premium for being available outside normal hours</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Shift differentials are paid either as a flat dollar amount added to your hourly rate (for example, an extra $2.50/hr) or as a percentage of your base rate (for example, 15% more per hour). Both are equally common, and <strong>both are taxed the same way.</strong>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        It is important to note that shift differential pay is <em>not</em> the same as overtime. Overtime is triggered by working more than 40 hours in a week under the{' '}
        <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Fair Labor Standards Act (FLSA)
        </a>{' '}
        and must be paid at 1.5&times; your regular rate. Shift differential is simply higher pay for the same number of hours, and it is entirely voluntary for the employer (with no federal minimum requirement).
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Is Shift Differential Pay Taxed?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS treats shift differential pay as <strong>ordinary wages</strong>. It is added directly to your gross pay for the period, and then your employer withholds federal income tax, Social Security, and Medicare on the combined amount &mdash; exactly the same way as your base pay.{' '}
        <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15 &mdash; Employer&rsquo;s Tax Guide)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        There is no separate &ldquo;shift differential tax rate.&rdquo; What you actually owe depends on your total taxable income for the year:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Federal income tax:</strong> your marginal bracket rate (10%, 12%, 22%, etc.) applies to each dollar of differential, just like every other dollar of income</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security:</strong> 6.2% on all wages up to $184,500{' '}
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(SSA.gov)</a>
        </li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare:</strong> 1.45% on all wages, no cap</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>State income tax:</strong> whatever your state charges, applied to the combined pay</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because shift differential is regular taxable wages, it also counts toward your Social Security wage base ($184,500 in 2026) and can affect your eligibility for income-tested benefits like the{' '}
        <a href="/blog/earned-income-tax-credit-2026" style={{ color: '#2563eb', textDecoration: 'underline' }}>Earned Income Tax Credit</a>.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Does a Big Differential Paycheck Look More Heavily Taxed?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is one of the most common questions about shift differential. If you normally bring home $950/week and then earn a $1,250 week after covering extra overnight shifts, the federal withholding on that big check can seem disproportionately high. Here&rsquo;s why.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Employers calculate withholding using what the IRS calls the <strong>annualized wage bracket method</strong>. For a weekly payroll, your employer takes your gross pay for that week, multiplies it by 52, and looks up the withholding table for that annualized income. A $1,250 week implies $65,000 in annual income; a $950 week implies $49,400. The higher implied income pushes the annualized withholding higher &mdash; even if your actual full-year income will be much less.{' '}
        <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15-T)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key takeaway: <strong>this is just a timing difference, not an extra tax.</strong> If you end up withholding more than you actually owe for the year, the IRS refunds the overage when you file your return. Your total annual tax bill is based on your total annual income &mdash; the annualized estimate on any single paycheck is just that, an estimate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you consistently earn significant shift differential pay every week, a more accurate way to handle this is to visit the{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Tax Withholding Estimator
        </a>{' '}
        and update your W-4 to reflect your full expected annual income, including all differential. This prevents a large refund (or a surprise tax bill) at filing time.
      </p>

      {/* Section 4: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $25/hr Base Pay + 15% Overnight Differential in Texas
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a concrete example. Maya is a manufacturing technician in Texas who earns <strong>$25/hr</strong> and works a 40-hour week. About 24 of her weekly hours fall in overnight windows, so she earns a <strong>15% overnight differential</strong> ($3.75/hr) on those hours. Texas has no state income tax, which simplifies the math.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1 &mdash; Annual gross pay
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.7,
        }}
      >
        Base pay: 40 hrs &times; $25 &times; 52 weeks = <strong>$52,000</strong><br />
        Overnight hours: 24 hrs/week &times; 52 weeks = 1,248 hrs<br />
        Differential rate: $25 &times; 15% = $3.75/hr<br />
        Differential pay: 1,248 hrs &times; $3.75 = <strong>$4,680</strong><br />
        <br />
        Total gross pay = $52,000 + $4,680 = <strong>$56,680</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2 &mdash; Federal income tax (single filer, standard deduction)
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.7,
        }}
      >
        Gross income:           $56,680<br />
        Standard deduction:    &minus;$16,100<br />
        Taxable income:         $40,580<br />
        <br />
        10% on first $12,400:    $1,240.00<br />
        12% on $28,180 ($40,580 &minus; $12,400): $3,381.60<br />
        <br />
        Federal income tax:     <strong>$4,621.60</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 3 &mdash; FICA taxes
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.7,
        }}
      >
        Social Security (6.2%): $56,680 &times; 0.062 = <strong>$3,514.16</strong><br />
        Medicare (1.45%):       $56,680 &times; 0.0145 = <strong>$821.86</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 4 &mdash; Full picture (with and without differential)
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Base Only</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>With Night Differential</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Difference</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross pay', '$52,000', '$56,680', '+$4,680'],
              ['Federal income tax', '$4,060.00', '$4,621.60', '+$561.60'],
              ['Social Security (6.2%)', '$3,224.00', '$3,514.16', '+$290.16'],
              ['Medicare (1.45%)', '$754.00', '$821.86', '+$67.86'],
              ['Total taxes', '$8,038.00', '$8,957.62', '+$919.62'],
            ].map(([label, base, diff, change], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{base}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{diff}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: change.startsWith('+') ? '#dc2626' : '#059669' }}>{change}</td>
              </tr>
            ))}
            <tr style={{ background: '#fdf2f8' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Take-home pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$43,962.00</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$47,722.38</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>+$3,760.38</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The $4,680 in differential pay generated $919.62 in extra taxes &mdash; an effective tax rate of about <strong>19.65%</strong> on the differential. Maya keeps <strong>$3,760.38</strong> out of every $4,680 in differential &mdash; roughly <strong>80 cents on the dollar</strong>. The shift work is absolutely worth it financially.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Why 19.65%? Because she is in the <strong>12% federal bracket</strong> on all of her differential income (her taxable income is $40,580, well below the 22% bracket threshold of $50,400 above the standard deduction), and FICA adds another 7.65%. So: 12% + 7.65% = <strong>19.65%</strong>. Use our{' '}
        <a href="/texas/52000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas $52,000 salary calculator</a>{' '}
        or{' '}
        <a href="/texas/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000 salary page</a>{' '}
        to see how your own numbers compare.
      </p>

      {/* Section 5: State taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How State Taxes Change the Math
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Texas has no state income tax, which keeps the math simple. In states with income tax, every dollar of shift differential is also subject to state income tax at your marginal state rate. Here is how the effective tax rate on the same $4,680 differential changes by state:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Total Rate on Diff</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Take-Home from $4,680</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Texas (no income tax)', '0%', '19.65%', '$3,760'],
              ['Florida (no income tax)', '0%', '19.65%', '$3,760'],
              ['Georgia (~5.49%)', '5.49%', '25.14%', '$3,503'],
              ['Illinois (flat 4.95%)', '4.95%', '24.60%', '$3,528'],
              ['New York (~6.21%)', '6.21%', '25.86%', '$3,469'],
              ['California (~9.30%)', '9.30%', '28.95%', '$3,224'],
            ].map(([state, stateTax, totalRate, takehome], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{stateTax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{totalRate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{takehome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1rem' }}>
        State rates are approximate and use the marginal rate for ~$40,000 taxable income. Check your state&rsquo;s Department of Revenue for exact figures. Use the{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California calculator</a>{' '}
        or{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York calculator</a>{' '}
        to see your full state tax picture.
      </p>

      {/* Section 6: Common differential rates */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Typical Shift Differential Rates by Industry?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Federal law does not set a minimum shift differential amount &mdash; it is entirely up to the employer. That said, industry surveys show fairly consistent ranges. The{' '}
        <a href="https://www.bls.gov/opub/mlr/2017/article/shift-differentials.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Bureau of Labor Statistics
        </a>{' '}
        and compensation surveys report the following typical ranges:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Industry / Job Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Typical Overnight Differential</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Typical Weekend Differential</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Healthcare (RN, CNA, tech)', '10%–15%', '8%–15%'],
              ['Manufacturing / factory', '$0.50–$2.50/hr', '$0.50–$1.50/hr'],
              ['Warehouse / logistics', '$1.00–$3.00/hr', '$0.75–$2.00/hr'],
              ['Security / law enforcement', '10%–15%', '5%–10%'],
              ['Customer service / call center', '10%–12%', '7%–10%'],
              ['Hospitality / hotel', '5%–10%', '5%–10%'],
              ['Federal government (GS)', '7.5%–10%', 'separate night pay'],
            ].map(([ind, night, weekend], i) => (
              <tr key={ind} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{ind}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{night}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{weekend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 7: Federal employees */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Are Federal Government Night Pay Differentials Taxed the Same Way?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes. Federal employees covered by the General Schedule (GS) receive statutory night pay at <strong>10%</strong> of their base pay for regularly scheduled work between 6 p.m. and 6 a.m.{' '}
        <a href="https://www.opm.gov/policy-data-oversight/pay-leave/pay-administration/fact-sheets/night-pay/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (OPM &mdash; Night Pay fact sheet)
        </a>
        . This night pay is included in gross wages on the employee&rsquo;s W-2 and is subject to federal income tax, Social Security, and Medicare exactly like any other wages.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Weekend and holiday premium pay for federal employees works similarly &mdash; all taxable ordinary income, no special treatment.
      </p>

      {/* Section 8: Overtime interaction */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens When Shift Differential and Overtime Overlap?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn shift differential pay <em>and</em> work more than 40 hours in a week, overtime law gets more complex. Under the FLSA, your &ldquo;regular rate of pay&rdquo; for overtime purposes must include shift differentials. This means your overtime rate (1.5&times;) is calculated on top of your differential-inclusive hourly rate &mdash; not just your base rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, if your base rate is $22/hr and you earn an extra $2.75/hr overnight differential, your regular rate is $24.75/hr and your overtime rate must be at least <strong>$37.13/hr</strong>. All of that overtime pay is also taxable ordinary income at your marginal rate. See our{' '}
        <a href="/blog/how-overtime-pay-is-taxed" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          guide to how overtime pay is taxed
        </a>{' '}
        for the full breakdown.
      </p>

      {/* Section 9: What to do */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Manage Taxes When Your Pay Varies Week to Week
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your shift schedule is irregular and your pay varies significantly week to week, you may end up either over-withholding (getting a big refund) or under-withholding (owing a tax bill). A few steps to stay on track:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Estimate your total annual income</strong> including all expected differential. Add up your typical weekly gross for a representative year and use that figure when completing your W-4.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Use the IRS Withholding Estimator</strong> at irs.gov each January after your previous W-2 arrives to check whether your withholding was accurate. Adjust your W-4 if you consistently get large refunds (you&rsquo;re over-withholding) or owe money (under-withholding). See our{' '}
          <a href="/blog/how-to-calculate-federal-tax-withholding" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            withholding calculation guide
          </a>{' '}
          for the step-by-step formula.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Understand your pay stub.</strong> Every week with differential should show higher OASDI (Social Security) and Medicare deductions than a pure-base week &mdash; that is correct. The total withheld for federal income tax will also be higher, but most of that should come back if you end the year at a lower income than was implied by a big week.
        </li>
      </ol>

      {/* Section 10: Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line: Is Shift Differential Worth It After Taxes?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes &mdash; and by a comfortable margin. For most workers earning shift differential in the 12% or 22% federal bracket, the math looks like this:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>12% bracket (under ~$50,400 taxable):</strong> you pay about 19.65% on each differential dollar and keep roughly <strong>80 cents</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>22% bracket ($50,400&ndash;$105,700 taxable):</strong> you pay about 29.65% and keep roughly <strong>70 cents</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Add state tax:</strong> subtract your marginal state rate from the &ldquo;keep&rdquo; figure; California at 9.3% reduces a 12%-bracket worker&rsquo;s share to about <strong>71 cents</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        No one pays 100% on extra income. The misconception that &ldquo;a bigger check means I&rsquo;m taxed at a higher rate on everything&rdquo; stems from confusion between <strong>marginal rates</strong> (tax on the last dollar) and <strong>effective rates</strong> (tax on all dollars). Your base pay keeps the same tax treatment it always had; the differential just adds a bit more to the pile at your current marginal rate.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fdf2f8',
          border: '1px solid #fbcfe8',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Full Take-Home Pay &mdash; Including Differential
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your state and salary (base pay + expected differential) to see exactly how much goes to federal income tax, FICA, and state tax &mdash; and what lands in your account.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#be185d',
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
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15 &mdash; Employer&rsquo;s Tax Guide (circular E)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15-T &mdash; Federal Income Tax Withholding Methods</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base 2026 ($184,500)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL &mdash; Fair Labor Standards Act (FLSA) Overview</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/fact-sheets/56a-regular-rate" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL Fact Sheet #56a &mdash; Regular Rate of Pay and Shift Differentials</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.opm.gov/policy-data-oversight/pay-leave/pay-administration/fact-sheets/night-pay/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>OPM &mdash; Night Pay for Federal Employees</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/opub/mlr/2017/article/shift-differentials.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>BLS Monthly Labor Review &mdash; Shift Differentials in Union Contracts</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Tax Withholding Estimator</a>
        </li>
      </ul>

      <ArticleFooter current="shift-differential-pay-taxes-2026" />
    </article>
  )
}
