import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dependent Care FSA: How to Save on Childcare Taxes in 2026',
  description:
    'A Dependent Care FSA lets working parents pay for daycare with pre-tax dollars — saving up to $1,020+ per year in federal taxes. Here\'s how it works, 2026 limits, and a full worked example.',
  alternates: { canonical: '/blog/dependent-care-fsa-childcare-taxes' },
  keywords:
    'dependent care FSA 2026, DCFSA, childcare tax savings, dependent care flexible spending account, childcare pre-tax, dependent care tax credit vs FSA, Form 2441, daycare tax benefit',
  openGraph: {
    title: 'Dependent Care FSA: How to Save on Childcare Taxes in 2026',
    description:
      'A Dependent Care FSA lets working parents pay for daycare with pre-tax dollars — saving up to $1,020+ per year in federal taxes. Here\'s the full guide.',
  },
}

export default function DependentCareFSA() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Dependent Care FSA illustration showing childcare costs reduced by pre-tax dollars"
        >
          <rect width="600" height="200" rx="12" fill="#f59e0b" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* House/family icon left */}
          <polygon points="70,130 110,90 150,130" fill="rgba(255,255,255,0.9)" />
          <rect x="82" y="130" width="56" height="30" rx="2" fill="rgba(255,255,255,0.9)" />
          <rect x="104" y="140" width="16" height="20" rx="1" fill="#f59e0b" />
          {/* Small people icons */}
          <circle cx="94" cy="115" r="6" fill="rgba(255,255,255,0.9)" />
          <circle cx="110" cy="110" r="5" fill="rgba(255,255,255,0.9)" />
          <circle cx="126" cy="115" r="6" fill="rgba(255,255,255,0.9)" />
          {/* Arrow right */}
          <line x1="175" y1="100" x2="230" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="230,92 245,100 230,108" fill="rgba(255,255,255,0.7)" />
          {/* Middle card - FSA */}
          <rect x="255" y="60" width="90" height="80" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="300" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">FSA</text>
          <text x="300" y="110" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Pre-Tax</text>
          <text x="300" y="124" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">$5,000</text>
          {/* Arrow right */}
          <line x1="355" y1="100" x2="405" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="405,92 420,100 405,108" fill="rgba(255,255,255,0.7)" />
          {/* Savings badge */}
          <circle cx="480" cy="100" r="50" fill="rgba(255,255,255,0.2)" />
          <text x="480" y="88" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">Save</text>
          <text x="480" y="106" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="sans-serif">$1,020</text>
          <text x="480" y="120" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">per year</text>
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
        Dependent Care FSA: How to Save on Childcare Taxes in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 10, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Childcare is expensive. The average cost of full-time daycare in the United States is over <strong>$18,000 per year</strong>, and in high-cost states like California or New York, it can run $25,000 or more.{' '}
        <a href="https://www.dol.gov/agencies/wb/topics/childcare" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (U.S. Department of Labor)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What many working parents do not realize is that the IRS gives you a tool to pay for those costs with <strong>pre-tax dollars</strong> — a <strong>Dependent Care Flexible Spending Account (DCFSA)</strong>. Used correctly, this benefit can save you over <strong>$1,000 per year</strong> in federal taxes alone, with additional savings from lower state taxes and FICA.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how a Dependent Care FSA works, the 2026 contribution limits, what qualifies, and how it compares to the Dependent Care Tax Credit.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a Dependent Care FSA?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>Dependent Care Flexible Spending Account (DCFSA)</strong> is a benefit offered through your employer that lets you set aside a portion of your paycheck — <em>before taxes are calculated</em> — to pay for qualifying childcare or adult dependent care expenses.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because contributions go in before federal income tax, Social Security tax, and Medicare tax are applied, every dollar you put into a DCFSA costs you less than a dollar in take-home pay. The tax savings come automatically, every paycheck, without waiting for a tax refund.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A DCFSA is different from a regular healthcare FSA or a Health Savings Account (HSA). It is specifically for <strong>care expenses that allow you to work</strong> — like daycare while you and your spouse are at your jobs. The IRS governs it under{' '}
        <a href="https://www.irs.gov/publications/p503" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 503
        </a>.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 Contribution Limits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The annual contribution limit for a Dependent Care FSA in 2026 is set by the IRS:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2026 DCFSA Limit</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single filer', '$5,000'],
              ['Married filing jointly', '$5,000 (household)'],
              ['Married filing separately', '$2,500 each'],
            ].map(([status, limit], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#2563eb', fontWeight: 600 }}>{limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>$5,000 limit is per household, not per person</strong>. If both you and your spouse have access to a DCFSA through your respective employers, you can only contribute a combined total of $5,000. You cannot each contribute $5,000.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p503.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 503)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important: your DCFSA contribution also cannot exceed the earned income of the <em>lower-earning spouse</em>. If your spouse earns $3,500 and you earn $80,000, your DCFSA contribution is capped at $3,500. There is a special exception for spouses who are full-time students or incapable of self-care — ask your HR department for details.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How It Reduces Your Paycheck Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you enroll in a DCFSA, your annual contribution is divided equally across your pay periods and deducted from your gross pay <em>before</em> federal income tax, state income tax, Social Security tax, and Medicare tax are applied. This is called a <strong>pre-tax deduction</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is what happens at the $5,000 maximum for a single filer earning $75,000 in the 22% tax bracket:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Savings</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal income tax', '22%', '$1,100'],
              ['Social Security', '6.2%', '$310'],
              ['Medicare', '1.45%', '$72.50'],
              ['State income tax (varies)', '~5%', '~$250'],
            ].map(([tax, rate, savings], i) => (
              <tr key={tax} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{savings}</td>
              </tr>
            ))}
            <tr style={{ background: '#fffbeb', borderTop: '2px solid #e2e8f0' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#1e293b' }}>Total tax savings</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>~$1,732</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In other words, putting $5,000 into a DCFSA only costs about <strong>$3,268 in take-home pay</strong>. The government effectively subsidizes the rest through lower taxes. On a biweekly pay schedule, your paycheck decreases by roughly <strong>$126</strong> while you pay $192 less in childcare costs per period — netting about <strong>$66 more per paycheck</strong> compared to paying out of pocket.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Expenses Qualify?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        DCFSA funds can only be used for expenses that allow you (and your spouse, if married) to <strong>work or look for work</strong>. Qualifying expenses include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Licensed daycare centers</strong> — any facility that meets your state licensing requirements
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>In-home child care providers</strong> — a nanny, babysitter, or au pair (you must pay their employment taxes)
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Preschool programs</strong> — nursery school and pre-kindergarten programs qualify; regular kindergarten and above do not
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>After-school programs</strong> — care outside of school hours for children under 13
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Summer day camps</strong> — day camps qualify; overnight camps do not
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Adult day care centers</strong> — if you care for a dependent adult (such as an aging parent) who spends at least 8 hours per day in your home
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Expenses that do <em>not</em> qualify:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Overnight camps or boarding school tuition</li>
        <li style={{ marginBottom: '0.5rem' }}>Care provided by your spouse, or by your own child under age 19</li>
        <li style={{ marginBottom: '0.5rem' }}>Tuition for kindergarten or higher grades</li>
        <li style={{ marginBottom: '0.5rem' }}>Household services unrelated to care (cleaning, cooking)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Eligible dependents are children <strong>under age 13</strong> that you claim on your tax return, or any person of any age who is physically or mentally incapable of self-care and qualifies as your dependent.{' '}
        <a href="https://www.irs.gov/publications/p503" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 503)
        </a>
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        DCFSA vs. Dependent Care Tax Credit: Which Is Better?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS also offers a <strong>Dependent Care Tax Credit (DCTC)</strong> via{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-2441" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 2441
        </a>. Both the DCFSA and the DCTC are designed to help with childcare costs, but they work very differently — and you can use both, within limits.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is how they compare:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Feature</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>DCFSA</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Dependent Care Tax Credit</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['How it works', 'Pre-tax payroll deduction', 'Credit on your tax return'],
              ['Max benefit', '$5,000/yr', '$600–$2,100/yr (based on income)'],
              ['Income limit', 'None', 'Credit decreases above $43,000'],
              ['Benefit type', 'Reduces taxable income', 'Reduces tax owed dollar-for-dollar'],
              ['When you save', 'Every paycheck', 'When you file taxes'],
              ['FICA savings', 'Yes (7.65%)', 'No'],
            ].map(([feature, dcfsa, dctc], i) => (
              <tr key={feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 500 }}>{feature}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#059669' }}>{dcfsa}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{dctc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>The bottom line:</strong> For most working families earning above $43,000 per year, the DCFSA delivers more savings because it reduces your FICA taxes and applies at your marginal income tax rate (22% or higher for most working parents). The Dependent Care Tax Credit drops to just 20% for incomes above $43,000, and it does not save you any FICA taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can use <em>both</em> in the same year — the DCFSA covers up to $5,000 in expenses, and you can still claim the credit on up to $1,000 more in expenses for one child ($2,000 more for two or more children). But you cannot count the same dollar twice.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Two Working Parents in California
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s see the DCFSA in action. Sarah and Mike are married, filing jointly, both working. They have one child in daycare costing $18,000 per year. They live in{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>.
        Their combined income is $120,000 ($80,000 + $40,000).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        They contribute the maximum $5,000 to a DCFSA through Sarah&rsquo;s employer:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.5rem', fontWeight: 600 }}>Without DCFSA — Paying $5,000 Out of Pocket</p>
        <ul style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.75, paddingLeft: '1.25rem', marginBottom: '0' }}>
          <li>$5,000 paid from after-tax income</li>
          <li>Federal income tax paid on that $5,000 at 22%: <strong>$1,100 wasted</strong></li>
          <li>FICA paid on that $5,000 at 7.65%: <strong>$382.50 wasted</strong></li>
          <li>California state tax at ~9.3%: <strong>$465 wasted</strong></li>
          <li>Total effective cost of $5,000 in daycare: <strong>~$6,948</strong></li>
        </ul>
      </div>

      <div
        style={{
          background: '#f0fdf4',
          border: '1px solid #86efac',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.5rem', fontWeight: 600 }}>With DCFSA — $5,000 Pre-Tax Contribution</p>
        <ul style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.75, paddingLeft: '1.25rem', marginBottom: '0' }}>
          <li>$5,000 deducted pre-tax from paycheck</li>
          <li>Federal income tax saved: <strong>$1,100</strong></li>
          <li>FICA saved: <strong>$382.50</strong></li>
          <li>California state tax saved: <strong>$465</strong></li>
          <li>Effective cost of $5,000 in daycare: <strong>~$3,053</strong></li>
          <li style={{ color: '#059669', fontWeight: 600 }}>Total savings: $1,947 per year</li>
        </ul>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In a high-tax state like California, the DCFSA saves this family nearly <strong>$2,000 per year</strong> — roughly $77 more in their pockets every biweekly paycheck. If they lived in a no-income-tax state like{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>{' '}
        or{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,
        the savings would still be about $1,482 per year — just from federal income tax and FICA alone.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Enroll in a Dependent Care FSA
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The DCFSA is an employer-sponsored benefit, so your employer must offer it. Here is how enrollment typically works:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Open Enrollment:</strong> Sign up each year during your employer&rsquo;s open enrollment period (usually in the fall). You must elect your contribution amount for the coming year at that time.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Qualifying Life Event:</strong> If you miss open enrollment, you can enroll mid-year if you have a qualifying life event — a new baby, adoption, marriage, divorce, or a change in your childcare arrangement.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>New Employee:</strong> If you are a new hire, you usually have 30 days from your start date to enroll.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Contribution amount:</strong> Decide how much you want to contribute for the year (up to $5,000). That amount is divided by your number of pay periods and deducted each paycheck.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Using the funds:</strong> Submit receipts or claims to your DCFSA administrator (often a third-party benefits company). Many providers issue a debit card you can swipe directly at qualifying care providers.
        </li>
      </ol>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The &ldquo;Use It or Lose It&rdquo; Rule
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike a Health Savings Account (HSA), a DCFSA operates on a strict <strong>&ldquo;use it or lose it&rdquo;</strong> basis. Any funds you contribute that you do not spend on eligible expenses by the end of the plan year are <strong>forfeited</strong>. You do not get them back.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some employers offer a <strong>grace period</strong> (typically 2.5 months into the next year) or allow a <strong>carryover</strong> of up to $640. But not all plans include these features — check your plan documents carefully.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The practical rule: only contribute what you are certain you will spend. If you know your annual daycare cost is $14,000, contribute the full $5,000. If your childcare costs are lower or unpredictable, contribute a conservative amount and leave the rest to pay out of pocket.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common Questions
      </h2>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Can I use a DCFSA if I&rsquo;m self-employed?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        No. DCFSAs are employer-sponsored benefits. If you are self-employed, you cannot set up a DCFSA for yourself. However, you can still claim the Dependent Care Tax Credit on your tax return. Some self-employed people also set up S-corps or C-corps and use a Section 129 plan to offer themselves this benefit — but that is a more complex strategy requiring a tax professional.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Does my daycare provider need to give me their tax ID?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes. Both the DCFSA administrator and Form 2441 (for the Dependent Care Tax Credit) require the name, address, and taxpayer identification number (EIN or Social Security number) of your care provider. Most licensed daycare centers have an EIN. Individual providers like nannies can provide their Social Security number. If your provider refuses to give you this information, you cannot use those expenses for DCFSA reimbursement.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Can I pay a family member with DCFSA funds?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Sometimes. You <em>cannot</em> pay your spouse or a child under age 19 who you claim as a dependent. But you <em>can</em> pay a grandparent, aunt, uncle, or older child (19+) — as long as you treat the payment as wages and file the appropriate employment tax returns. This is often not worth the paperwork for small amounts.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        What happens to my DCFSA if I change jobs?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your DCFSA is tied to your employer. If you leave your job, you typically have until the end of the plan year (or a short run-out period) to submit claims for expenses incurred while you were still employed. Unused funds after that run-out period are forfeited. If you start a new job with a new employer that offers a DCFSA, you can enroll as a new hire — but plan carefully to avoid contributing to two plans simultaneously if that would push you over the $5,000 household limit.
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A Dependent Care FSA is one of the most overlooked tax benefits available to working parents. If your employer offers it and you pay for any qualifying childcare — daycare, preschool, after-school care, or summer day camps — contributing the full $5,000 is almost always worth it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a family in the 22% federal bracket in a state with income tax, contributing $5,000 to a DCFSA saves between <strong>$1,500 and $2,000 per year</strong> in taxes. That is money that stays in your paycheck every two weeks rather than going to the IRS. Over a five-year period with children in daycare, the cumulative savings can exceed <strong>$10,000</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Check with your HR department during open enrollment to confirm your employer offers a DCFSA. If they do, sign up — the paperwork is minimal and the savings are real.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See How Your Take-Home Pay Changes
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see your full paycheck breakdown — including how pre-tax deductions like a DCFSA affect your take-home pay.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#f59e0b',
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
          <a href="https://www.irs.gov/publications/p503" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 503 &mdash; Child and Dependent Care Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-2441" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 2441, Child and Dependent Care Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc602" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 602 &mdash; Child and Dependent Care Credit</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/wb/topics/childcare" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor &mdash; Childcare</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/research/all/federal/dependent-care-fsa/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; Dependent Care FSA Overview</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.healthcare.gov/have-job-based-coverage/flexible-spending-accounts/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Healthcare.gov &mdash; Flexible Spending Accounts</a>
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
