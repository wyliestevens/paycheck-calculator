import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Alternative Minimum Tax (AMT): Do You Owe It in 2026?',
  description:
    'The AMT is a parallel tax system designed to ensure high earners pay a minimum amount. Here\'s who owes it in 2026, how to calculate it, and strategies to reduce your exposure.',
  alternates: { canonical: '/blog/alternative-minimum-tax-2026' },
  keywords:
    'alternative minimum tax 2026, AMT tax, who pays AMT, AMT exemption 2026, AMT calculation, ISO and AMT, AMTI, how to avoid AMT',
  openGraph: {
    title: 'The Alternative Minimum Tax (AMT): Do You Owe It in 2026?',
    description:
      'The AMT is a parallel tax system ensuring high earners pay a minimum amount. Here\'s who owes it, how it\'s calculated, and how to reduce your exposure.',
  },
}

export default function AlternativeMinimumTax2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="AMT vs Regular Tax balance scale illustration"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Scale post */}
          <rect x="294" y="60" width="12" height="110" rx="4" fill="rgba(255,255,255,0.4)" />
          {/* Scale beam */}
          <rect x="160" y="60" width="280" height="10" rx="5" fill="rgba(255,255,255,0.5)" />
          {/* Pivot circle */}
          <circle cx="300" cy="65" r="10" fill="rgba(255,255,255,0.7)" />

          {/* Left pan string */}
          <line x1="190" y1="70" x2="190" y2="115" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          {/* Right pan string */}
          <line x1="410" y1="70" x2="410" y2="95" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />

          {/* Left pan (Regular Tax - lower / heavier) */}
          <rect x="150" y="115" width="80" height="38" rx="6" fill="rgba(255,255,255,0.25)" />
          <text x="190" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="sans-serif">Regular</text>
          <text x="190" y="144" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="sans-serif">Tax</text>

          {/* Right pan (AMT - higher / lighter) */}
          <rect x="370" y="95" width="80" height="38" rx="6" fill="rgba(255,255,255,0.35)" />
          <text x="410" y="110" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="sans-serif">AMT</text>
          <text x="410" y="124" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="sans-serif">Higher</text>

          {/* "You Pay" label */}
          <text x="410" y="155" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">▲ You Pay This</text>

          {/* Title */}
          <text x="300" y="38" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="sans-serif">Alternative Minimum Tax</text>
          <text x="300" y="185" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">You pay whichever is higher: regular tax or AMT</text>
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
        The Alternative Minimum Tax (AMT): Do You Owe It in 2026?
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 21, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most Americans calculate their federal income tax once and pay that amount. But for a subset of taxpayers &mdash; primarily higher earners, people who exercise stock options, or those with large deductions &mdash; the IRS requires a second calculation using an entirely different set of rules. If that second calculation produces a higher number, they pay the difference. This is the <strong>Alternative Minimum Tax</strong>, or <strong>AMT</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The AMT was originally created in 1969 after Congress discovered that 155 wealthy taxpayers paid zero federal income tax through legal deductions and credits. Today it is a parallel tax system with its own rates, exemptions, and rules. Understanding whether you owe it &mdash; and how to minimize it &mdash; can save you thousands of dollars.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How the AMT Works: Two Tax Systems, One Bill
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is the core concept: every year you compute your taxes <em>twice</em>. First, you calculate your regular federal income tax the normal way &mdash; taxable income minus deductions, applying the standard 10%&ndash;37% brackets. Then you calculate your taxes a second time under the AMT rules. You pay whichever result is higher.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The AMT calculation works like this:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>Start with your regular taxable income.</li>
        <li style={{ marginBottom: '0.75rem' }}>Add back certain &ldquo;preference items&rdquo; that are deductible under regular tax rules but not under the AMT. The result is called your <strong>Alternative Minimum Taxable Income (AMTI)</strong>.</li>
        <li style={{ marginBottom: '0.75rem' }}>Subtract the AMT exemption from your AMTI.</li>
        <li style={{ marginBottom: '0.75rem' }}>Apply the AMT rates (26% or 28%) to get your <strong>tentative minimum tax</strong>.</li>
        <li style={{ marginBottom: '0.75rem' }}>Subtract the AMT foreign tax credit if applicable.</li>
        <li style={{ marginBottom: '0.75rem' }}>If the tentative minimum tax exceeds your regular tax, you pay the difference as AMT.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The AMT is reported on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-6251" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Form 6251
        </a>{' '}
        and then carried to your Form 1040.{' '}
        <a href="https://www.irs.gov/taxtopics/tc556" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 556: Alternative Minimum Tax)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        AMT Exemptions and Phase-Outs for 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The AMT exemption is the most important number to know. It functions like a &ldquo;shield&rdquo; &mdash; your AMTI up to the exemption amount is completely protected from AMT. Only your AMTI <em>above</em> the exemption is taxed. The exemptions are adjusted each year for inflation.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2026 AMT Exemption</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Phase-Out Begins At</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Fully Phased Out At</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single / Head of Household', '$88,100', '$626,350', '$978,750'],
              ['Married Filing Jointly', '$137,000', '$1,252,700', '$1,800,700'],
              ['Married Filing Separately', '$68,500', '$626,350', '$900,350'],
            ].map(([status, exemption, phaseStart, phaseEnd], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 600 }}>{exemption}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{phaseStart}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{phaseEnd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The phase-out is critical: once your AMTI exceeds the threshold, your exemption shrinks by <strong>25 cents for every dollar</strong> of AMTI above the threshold. At the &ldquo;fully phased out&rdquo; level, the exemption is gone entirely and every dollar of AMTI above zero is exposed to AMT. This creates a hidden &ldquo;bump zone&rdquo; where your marginal AMT rate is effectively 32.5% (26% &times; 1.25) instead of 26%.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p505.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 505, Tax Withholding and Estimated Tax)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        AMT Tax Rates: 26% and 28%
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Once you subtract the AMT exemption from your AMTI, two flat rates apply to the remainder:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>26%</strong> on the first $220,700 of AMTI above the exemption (for single filers; $110,350 for married filing separately)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>28%</strong> on AMTI above $220,700</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These rates look low compared to the top regular rate of 37% &mdash; but the AMT applies to a much broader income base because it eliminates many common deductions. That is what makes it dangerous: a taxpayer in the 24% regular bracket could easily find themselves in the 26% AMT bracket after preference items are added back.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Triggers the AMT? Common Preference Items
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The AMT gets triggered by &ldquo;preference items&rdquo; &mdash; income or deductions treated more favorably under the regular tax code than under the AMT. When you add these back to your taxable income, your AMTI rises well above your regular taxable income, potentially crossing the AMT threshold. The most common triggers are:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Incentive Stock Options (ISOs)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is the biggest AMT trigger for tech and startup employees. When you exercise ISOs, the &ldquo;spread&rdquo; &mdash; the difference between the strike price and the fair market value of the shares &mdash; is not taxable under regular income tax at exercise. But it <em>is</em> an AMT preference item. If the spread is large (say, $300,000), that amount gets added to your AMTI, potentially triggering a massive AMT bill on paper gains you haven&rsquo;t even sold yet.{' '}
        <a href="https://www.irs.gov/taxtopics/tc427" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 427: Stock Options)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        State and Local Tax (SALT) Deduction
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under regular tax, you can deduct up to $10,000 in state and local taxes (SALT) if you itemize. Under the AMT, the SALT deduction is <strong>completely disallowed</strong>. If you pay $20,000 in state income and property taxes, none of it reduces your AMTI. This is a major reason why high earners in high-tax states like California, New York, and New Jersey are more likely to owe AMT.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Accelerated Depreciation
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Business owners and real estate investors who use accelerated depreciation methods (like bonus depreciation or MACRS) get the deduction faster under regular tax than under the AMT. The difference in timing is an AMT preference item that gets added back.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Large Miscellaneous Itemized Deductions
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Certain itemized deductions allowed under regular tax &mdash; including home equity loan interest (if not used to buy or improve the home) &mdash; are not deductible under the AMT. Having a large mortgage interest deduction from a second home can also factor in.
      </p>

      {/* Section 5 - Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: When AMT Bites an ISO Exercise
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through the most common AMT scenario: a single filer in a tech role who exercises ISOs. Assume:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Salary: <strong>$180,000</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>ISO exercise spread (FMV minus strike price): <strong>$200,000</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Standard deduction (single, 2026): <strong>$15,000</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Filing status: Single</li>
      </ul>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Regular Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>AMT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Income', '$180,000', '$180,000'],
              ['ISO Spread (preference item)', 'Not included', '+$200,000'],
              ['Deductions', '−$15,000 (standard)', '−$15,000 (standard only)'],
              ['Taxable Income / AMTI', '$165,000', '$365,000'],
              ['Less exemption', 'n/a (used in brackets)', '−$88,100'],
              ['Net amount subject to tax', '$165,000', '$276,900'],
              ['Tax calculation', '10/12/22/24% brackets', '26% on $220,700; 28% on $56,200'],
              ['Estimated tax', '$33,918', '$57,377 + $15,736 = $73,113'],
            ].map(([step, regular, amt], i) => (
              <tr key={step} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{step}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#475569', fontSize: '0.875rem' }}>{regular}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontSize: '0.875rem' }}>{amt}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef3c7' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Tax Owed</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#475569' }}>$33,918</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#dc2626' }}>$73,113 ← you pay this</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The AMT calculation produces <strong>$73,113</strong> versus the regular tax of <strong>$33,918</strong>. This taxpayer would owe the regular $33,918 <em>plus</em> an AMT add-on of <strong>$39,195</strong> &mdash; a painful surprise if they exercised options expecting a much smaller tax bill.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note that this is tax owed on <em>unrealized</em> gains if the shares haven&rsquo;t been sold yet. This is what creates the famous AMT trap for startup employees: they exercise ISOs, the stock price crashes before they sell, and they still owe a massive AMT bill based on the stock&rsquo;s value at exercise.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Is Most Likely to Owe AMT in 2026?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Tax Cuts and Jobs Act of 2017 dramatically raised the AMT exemptions and phase-out thresholds, removing tens of millions of middle-class taxpayers from AMT exposure. Today, AMT primarily affects:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Employees who exercise Incentive Stock Options (ISOs)</strong> &mdash; especially in tech, biotech, and startup employees with large spreads between strike price and FMV</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>High earners in high-tax states</strong> &mdash; income roughly $200,000&ndash;$700,000 in California, New York, New Jersey, or Massachusetts, where SALT alone can be $20,000&ndash;$40,000+</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Business owners using accelerated depreciation</strong> &mdash; those taking large bonus depreciation deductions on business assets</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Investors with large tax preference items</strong> &mdash; private activity bond interest, excess depletion deductions, or certain installment sales</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The income range most at risk is roughly <strong>$200,000 to $750,000</strong> for single filers. Very high earners (above $1 million) often find their regular tax exceeds their tentative minimum tax, so they fall out of AMT territory. It is the middle-upper range that gets squeezed.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The AMT Credit: Getting Some Money Back
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is one piece of good news: when you pay AMT due to ISO exercises or other &ldquo;timing preferences&rdquo; (items that are deductible in one year under regular tax but not under AMT), you earn an <strong>AMT credit</strong>. This credit can be used in future years to offset regular income tax &mdash; up to the difference between your regular tax and your tentative minimum tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example: if you pay $39,195 in AMT this year because of ISO exercises, and next year you sell those shares (converting the AMT preference item into regular income) and your regular tax exceeds your tentative minimum tax, you can use your AMT credit carryforward to reduce your regular tax. Over time, you may recover much of the AMT paid.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The AMT credit is tracked on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8801" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Form 8801
        </a>
        .{' '}
        <a href="https://www.irs.gov/taxtopics/tc556" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 556)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Reduce or Avoid AMT
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are in an AMT risk zone, there are several strategies that can reduce your exposure:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        1. Spread ISO Exercises Over Multiple Years
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Rather than exercising all your ISOs in one year, consider exercising only enough in each tax year so that the ISO spread keeps your AMTI below the exemption or phase-out threshold. This requires careful modeling, but it can prevent a large one-year AMT hit.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        2. Exercise ISOs Early in the Year
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you exercise ISOs in January and the shares still have that value or higher at year-end, you have an AMT liability. But if the stock drops significantly before December 31, you can make a &ldquo;disqualifying disposition&rdquo; (sell the shares before the holding period is met) to convert the gain to ordinary income &mdash; eliminating the AMT preference item for that year, at the cost of losing the ISO preferential rate.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        3. Use the IRS AMT Assistant
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS provides an interactive tool to help you determine if you might owe AMT.{' '}
        <a href="https://www.irs.gov/help/ita/do-i-owe-alternative-minimum-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Do I Owe Alternative Minimum Tax?)
        </a>{' '}
        Running through this before making large financial decisions (like exercising options) can help you model the impact.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        4. Defer Income or Accelerate Deductions Into Non-AMT Years
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you anticipate AMT in a given year, shifting income to a non-AMT year (or pulling deductions forward into an AMT year where they help the regular tax calculation) can reduce the difference between your regular tax and tentative minimum tax. A tax professional can help model this.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        5. Consult a CPA or Tax Attorney for ISO Planning
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        ISO/AMT planning is genuinely complex &mdash; it involves modeling regular tax, tentative minimum tax, projected stock prices, and the risk of holding shares. This is one of the few areas where professional tax advice almost always pays for itself.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        AMT vs. Regular Tax: A Side-by-Side Comparison
      </h2>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Regular Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>AMT</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tax rates', '10% to 37% (marginal)', '26% or 28% (flat)'],
              ['Standard deduction', '$15,000 (single, 2026)', 'Not allowed'],
              ['SALT deduction', 'Up to $10,000', 'Not allowed'],
              ['ISO spread at exercise', 'Not taxable', 'Preference item (taxable)'],
              ['Personal exemption', 'Not applicable (eliminated)', 'AMT exemption: $88,100 (single)'],
              ['Applies to everyone?', 'Yes', 'Only if AMT > regular tax'],
              ['Credit carryforward?', 'No', 'Yes — AMT credit for future years'],
            ].map(([label, regular, amt], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{regular}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Check If You Owe AMT
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You will automatically trigger the AMT calculation when you file your return if any of these apply:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>You exercised ISOs during the year</li>
        <li style={{ marginBottom: '0.5rem' }}>Your income exceeded roughly $200,000 (single) or $300,000 (married filing jointly) and you itemize</li>
        <li style={{ marginBottom: '0.5rem' }}>You claimed large depreciation deductions</li>
        <li style={{ marginBottom: '0.5rem' }}>You had tax-exempt interest from private activity bonds</li>
        <li style={{ marginBottom: '0.5rem' }}>You owed AMT in a prior year</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most major tax software (TurboTax, H&amp;R Block, TaxAct) automatically completes Form 6251 and alerts you if AMT applies. If you prepare your own return, check{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-6251" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 6251
        </a>{' '}
        instructions to walk through the calculation manually.
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The AMT is a second tax system that runs parallel to your regular income tax. You compute both and pay whichever is higher. It was designed to prevent very high earners from zeroing out their tax bill through deductions, and while recent legislation has narrowed its reach, it still catches hundreds of thousands of taxpayers each year &mdash; especially those exercising incentive stock options or earning $200,000&ndash;$700,000 in high-tax states.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key numbers for 2026: a $88,100 exemption for single filers, 26%/28% flat rates, and a phase-out starting at $626,350. If ISOs are part of your compensation package, model the AMT impact before you exercise &mdash; a surprise five-figure tax bill on stock you haven&rsquo;t sold is one of the most painful (and preventable) tax situations in the code.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When AMT is owed due to timing differences (like ISO exercises), remember that you earn an AMT credit you can use in future years &mdash; so it is not entirely lost money. Working with a CPA or enrolled agent on ISO and AMT planning is one of the highest-ROI moves a tech employee or high earner can make.
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
          See Your Full Tax Breakdown Instantly
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly how much goes to federal tax, FICA, and state tax &mdash; and what you actually take home each paycheck.
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
          <a href="https://www.irs.gov/taxtopics/tc556" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 556: Alternative Minimum Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-6251" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 6251 (AMT for Individuals)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8801" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 8801 (Credit for Prior Year Minimum Tax)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc427" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 427: Stock Options</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p505.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 505: Tax Withholding and Estimated Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/help/ita/do-i-owe-alternative-minimum-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Interactive Tool: Do I Owe Alternative Minimum Tax?</a>
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
