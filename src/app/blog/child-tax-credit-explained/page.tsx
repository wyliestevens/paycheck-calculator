import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Child Tax Credit 2026: How It Works, Who Qualifies, and How to Claim It',
  description:
    'The Child Tax Credit gives parents up to $2,000 per child under 17. Here\'s who qualifies, the income phase-out, and how to claim it on your W-4 to boost every paycheck.',
  alternates: { canonical: '/blog/child-tax-credit-explained' },
  keywords:
    'child tax credit 2026, child tax credit amount, who qualifies for child tax credit, additional child tax credit, child tax credit W-4, child tax credit income limit, refundable child tax credit',
  openGraph: {
    title: 'Child Tax Credit 2026: How It Works, Who Qualifies, and How to Claim It',
    description:
      'The Child Tax Credit gives parents up to $2,000 per child under 17. Here\'s who qualifies, the income limits, and how to claim it now to boost your take-home pay.',
  },
}

export default function ChildTaxCreditExplained() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Child tax credit illustration showing a family with tax savings"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* House shape */}
          <polygon points="80,150 80,90 120,55 160,90 160,150" fill="rgba(255,255,255,0.25)" />
          <rect x="95" y="115" width="50" height="35" rx="3" fill="rgba(255,255,255,0.15)" />
          {/* People icons */}
          <circle cx="330" cy="75" r="14" fill="rgba(255,255,255,0.3)" />
          <rect x="320" y="93" width="20" height="30" rx="5" fill="rgba(255,255,255,0.25)" />
          <circle cx="370" cy="75" r="14" fill="rgba(255,255,255,0.3)" />
          <rect x="360" y="93" width="20" height="30" rx="5" fill="rgba(255,255,255,0.25)" />
          <circle cx="350" cy="130" r="10" fill="rgba(255,255,255,0.4)" />
          <rect x="342" y="144" width="16" height="22" rx="4" fill="rgba(255,255,255,0.35)" />
          {/* Dollar / credit badge */}
          <circle cx="490" cy="100" r="45" fill="rgba(255,255,255,0.2)" />
          <text x="490" y="90" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">UP TO</text>
          <text x="490" y="110" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff" fontFamily="monospace">$2,000</text>
          <text x="490" y="126" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">per child</text>
          {/* Connecting line */}
          <line x1="165" y1="100" x2="290" y2="100" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="6,4" />
          <polygon points="290,94 305,100 290,106" fill="rgba(255,255,255,0.4)" />
          <line x1="415" y1="100" x2="438" y2="100" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="6,4" />
          <polygon points="438,94 453,100 438,106" fill="rgba(255,255,255,0.4)" />
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
        Child Tax Credit 2026: How It Works, Who Qualifies, and How to Claim It
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 13, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have kids and you are not claiming the Child Tax Credit, you are leaving money on the table. The Child Tax Credit can cut your federal tax bill by up to <strong>$2,000 per qualifying child</strong> — and up to $1,700 of that can be refunded to you even if you owe nothing in taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Better yet, you do not have to wait until April to see the benefit. By claiming it correctly on your{' '}
        <a href="/blog/understanding-your-w4" style={{ color: '#7c3aed', textDecoration: 'underline' }}>W-4 form</a>, you can lower your tax withholding and increase every single paycheck starting today.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers everything: who qualifies, how much the credit is worth in 2026, the income limits, and the exact steps to claim it.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is the Child Tax Credit?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Child Tax Credit (CTC) is a federal tax benefit that reduces your tax bill dollar-for-dollar based on the number of qualifying children you have. A <strong>tax credit</strong> is more valuable than a <strong>tax deduction</strong> — a deduction only reduces the income you are taxed on, while a credit directly reduces the tax you owe.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, if you owe $5,000 in federal income tax and you have two qualifying children, the Child Tax Credit can cut your bill to <strong>$1,000</strong> ($5,000 &minus; $4,000 in credits). That is $4,000 you keep instead of paying to the IRS.{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (IRS — Child Tax Credit)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Child Tax Credit Amounts for 2026
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Credit Component</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount Per Child</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Child Tax Credit (CTC)', '$2,000', 'Full credit per qualifying child'],
              ['Additional Child Tax Credit (ACTC)', 'Up to $1,700', 'Refundable portion — you keep it even if tax bill is $0'],
              ['Credit for Other Dependents', '$500', 'For dependents who don\'t qualify for the full CTC'],
            ].map(([label, amount, note], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#7c3aed', fontWeight: 600 }}>{amount}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>$2,000 per child</strong> figure is the total credit. Of that $2,000, up to <strong>$1,700 is refundable</strong> — meaning if the credit wipes out your entire tax bill and there is still credit left over, the IRS sends you the remaining amount as a refund. This refundable piece is officially called the <strong>Additional Child Tax Credit (ACTC)</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A family with three qualifying children could receive up to <strong>$6,000</strong> in Child Tax Credits and up to <strong>$5,100</strong> in refundable credits.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Qualifies as a &ldquo;Qualifying Child&rdquo;?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Not every child in your household automatically qualifies. The IRS has six specific tests a child must pass:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Age:</strong> The child must be under age 17 at the end of the tax year. A child who turns 17 on or before December 31, 2026, does not qualify for the full $2,000 credit for tax year 2026 (they may qualify for the $500 Credit for Other Dependents).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Relationship:</strong> The child must be your son, daughter, stepchild, foster child, sibling, half-sibling, step-sibling, or a descendant of any of these (such as a grandchild, niece, or nephew).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Dependent:</strong> You must claim the child as a dependent on your tax return.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Residency:</strong> The child must have lived with you for more than half the year. Temporary absences for school, vacation, or medical care count as time living with you.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Financial support:</strong> The child must not have provided more than half of their own financial support during the year.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Social Security number:</strong> The child must have a valid Social Security number (SSN) by the due date of your tax return. An Individual Taxpayer Identification Number (ITIN) does not qualify for the full $2,000 credit.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your child does not meet all six tests, they may still qualify for the <strong>$500 Credit for Other Dependents</strong>, which covers older children (17–18), full-time college students (19–23), and other relatives you support.{' '}
        <a href="https://www.irs.gov/publications/p972" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (IRS Publication 972 — Child Tax Credit)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Income Limits and Phase-Out
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Child Tax Credit phases out at higher income levels. Once your income exceeds the threshold, your credit is reduced by <strong>$50 for every $1,000</strong> (or fraction thereof) above the limit.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Phase-Out Begins</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Full Phase-Out (1 child)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single / Head of Household', '$200,000', '$240,000'],
              ['Married Filing Jointly', '$400,000', '$440,000'],
              ['Married Filing Separately', '$200,000', '$240,000'],
            ].map(([status, start, end], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{start}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most families fall well below these thresholds. According to the{' '}
        <a href="https://www.bls.gov/news.release/famee.nr0.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          Bureau of Labor Statistics
        </a>, the median family income is around $100,000 — far below the $200,000 single-filer phase-out. If you are a typical American family, you likely get the full credit.
      </p>

      <div
        style={{
          background: '#faf5ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', margin: 0, lineHeight: 1.7 }}>
          <strong>Phase-Out Example:</strong> A married couple filing jointly earns $410,000. Their income is $10,000 over the $400,000 threshold. The phase-out reduces their credit by $50 &times; 10 = <strong>$500</strong> per child. Instead of $2,000 per child, they receive $1,500 per child.
        </p>
      </div>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How the Refundable Portion Works (Additional Child Tax Credit)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is where it gets really interesting for lower-income families. Even if you owe <em>zero</em> in federal income tax, you can still receive up to <strong>$1,700 per child</strong> as a cash refund through the Additional Child Tax Credit.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The ACTC is calculated as <strong>15% of your earned income above $2,500</strong>, up to the $1,700 maximum per child. &ldquo;Earned income&rdquo; means wages, salaries, tips, and self-employment income — not investment income or Social Security.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        Here is the formula:
      </p>

      <div
        style={{
          background: '#faf5ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        ACTC = (Earned Income &minus; $2,500) &times; 15%<br />
        Maximum per child = $1,700
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For example, a single parent earning $30,000 with one child:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li>($30,000 &minus; $2,500) &times; 15% = $27,500 &times; 15% = <strong>$4,125</strong></li>
        <li>But the maximum refundable credit is $1,700 per child</li>
        <li>So this parent receives the full <strong>$1,700</strong> as a refund</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A parent earning just $12,000 would calculate: ($12,000 &minus; $2,500) &times; 15% = <strong>$1,425</strong> — less than the maximum, so they receive $1,425 as their refundable credit.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Claim the Child Tax Credit on Your W-4 (Boost Your Paycheck Now)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most people think they have to wait until they file their tax return to claim the Child Tax Credit. That is true for the final reconciliation — but you can <em>pre-claim</em> it on your W-4 to lower your withholding and see the benefit in every paycheck throughout the year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is how to do it using the current W-4:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Step 3 on your W-4</strong> is titled &ldquo;Claim Dependents.&rdquo; This is where you claim your Child Tax Credits.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          For each qualifying child under 17, multiply by <strong>$2,000</strong> and enter the total in the first box.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          For other dependents (ages 17–23 full-time students, elderly relatives, etc.), multiply by <strong>$500</strong> and enter in the second box.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          Add those two amounts and enter the total in Step 3.
        </li>
      </ol>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
          Example — Married couple, two kids under 17:
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', margin: 0, lineHeight: 1.8 }}>
          2 qualifying children &times; $2,000 = $4,000<br />
          Enter <strong>$4,000</strong> in Step 3 of the W-4.<br />
          <br />
          This tells your employer to withhold $4,000 less in federal income tax over the year — roughly <strong>$154 less per biweekly paycheck</strong> if you are paid 26 times per year.
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The result: instead of getting a lump-sum refund in April, you get that money spread across every paycheck. Your annual tax outcome is exactly the same — you just get access to the money sooner.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (IRS — About Form W-4)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Family of Four in Texas vs. New York
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s see how the Child Tax Credit affects a real family. We will use a married couple earning $85,000 combined with two qualifying children under 17. They file jointly and take the standard deduction ($30,000 for married filing jointly in 2026).
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/texas" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Texas</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/new-york" style={{ color: '#7c3aed', textDecoration: 'underline' }}>New York</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Income', '$85,000', '$85,000'],
              ['Standard Deduction (MFJ)', '−$30,000', '−$30,000'],
              ['Taxable Income', '$55,000', '$55,000'],
              ['Federal Tax (before CTC)', '$5,568', '$5,568'],
              ['Child Tax Credit (2 kids)', '−$4,000', '−$4,000'],
              ['Federal Tax (after CTC)', '$1,568', '$1,568'],
              ['FICA (7.65%)', '$6,503', '$6,503'],
              ['State Income Tax', '$0', '$3,502'],
              ['Total Tax Bill', '$8,071', '$11,573'],
              ['Take-Home Pay', '$76,929', '$73,427'],
            ].map(([label, tx, ny], i) => {
              const isTotal = label === 'Total Tax Bill'
              const isTakeHome = label === 'Take-Home Pay'
              return (
                <tr key={label} style={{ background: isTakeHome ? '#ecfdf5' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: isTotal || isTakeHome ? 700 : 400 }}>{label}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isTakeHome ? '#059669' : isTotal ? '#dc2626' : label.startsWith('−') || tx.startsWith('−') ? '#dc2626' : '#1e293b', fontWeight: isTotal || isTakeHome ? 700 : 400 }}>{tx}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isTakeHome ? '#059669' : isTotal ? '#dc2626' : label.startsWith('−') || ny.startsWith('−') ? '#dc2626' : '#1e293b', fontWeight: isTotal || isTakeHome ? 700 : 400 }}>{ny}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Child Tax Credit saves this family <strong>$4,000</strong> regardless of which state they live in — it is a federal credit that applies everywhere. The state income tax difference ($3,502 in New York vs $0 in Texas) is separate and on top of the credit savings. Want to see what your family&rsquo;s take-home pay looks like? Try the calculator for{' '}
        <a href="/texas" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Texas</a>,{' '}
        <a href="/california" style={{ color: '#7c3aed', textDecoration: 'underline' }}>California</a>, or{' '}
        <a href="/florida" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Florida</a>.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What If You Have More Credit Than You Owe?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is where many people get confused. The Child Tax Credit has two parts that work differently:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Non-refundable portion ($300 per child):</strong> This can only reduce your tax bill to zero. If you owe less than $300 per child in taxes, the remaining non-refundable credit is lost.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Refundable portion — Additional Child Tax Credit ($1,700 per child):</strong> Once your non-refundable credit reduces your tax bill to zero, you can then receive the ACTC as a cash refund based on the 15%-of-earned-income formula described above.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS reconciles all of this when you file your tax return using{' '}
        <a href="https://www.irs.gov/forms-pubs/about-schedule-8812-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          Schedule 8812
        </a>. You do not need to calculate it manually — tax software handles it automatically.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Common Child Tax Credit Mistakes to Avoid
      </h2>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Not updating your W-4 after having a child.</strong> If you had a baby this year and did not update your W-4, you are probably having too much withheld. File a new W-4 as soon as possible to start seeing the benefit in your paychecks.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Claiming a child who does not have an SSN.</strong> A child needs a valid Social Security number issued before your tax return is due. If your child has an ITIN instead, you cannot claim the full $2,000 credit (only the $500 Credit for Other Dependents).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Both divorced parents claiming the same child.</strong> Only one parent can claim the Child Tax Credit for a given child in a given year. If you share custody, you need to agree on who claims which child. The IRS tiebreaker rule generally gives priority to the parent with whom the child lived most during the year.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Forgetting about children who turned 17 this year.</strong> A child who turns 17 on or before December 31 does not qualify for the $2,000 credit for that tax year. However, they may still qualify for the $500 Credit for Other Dependents if you can claim them as a dependent.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Not claiming it if you had low or no income.</strong> Even if you earned very little, you may be eligible for the refundable Additional Child Tax Credit as long as you had at least $2,500 in earned income.
        </li>
      </ol>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Child Tax Credits: More Money on Top
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal Child Tax Credit is available everywhere — but many states also offer their own separate child tax credits on top of the federal credit. These state credits vary widely:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>California:</strong> A Young Child Tax Credit of up to $1,177 per child under 6 for families earning under $25,000.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>New York:</strong> A child credit of up to $330 per qualifying child.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Colorado:</strong> A child tax credit worth 30% of the federal credit for lower-income families.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Minnesota:</strong> A Child Tax Credit of up to $1,750 per child, fully refundable.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Maine, Vermont, and others</strong> also have state-level child credits.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Check your state&rsquo;s department of revenue website to see if a state-level child credit applies to you. The{' '}
        <a href="https://taxfoundation.org/research/all/state/state-child-tax-credits/" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          Tax Foundation maintains a state-by-state list
        </a>{' '}
        of child tax credit policies.
      </p>

      {/* The Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Child Tax Credit is one of the most valuable tax breaks available to American families. At <strong>$2,000 per qualifying child</strong> under 17, with up to <strong>$1,700 refundable</strong>, it can dramatically reduce your tax bill — or even result in a refund when you owe nothing.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You do not have to wait until April to see the benefit. By updating Step 3 of your W-4 to reflect your qualifying children, you can reduce your withholding and increase your take-home pay starting with your next paycheck. A family with two kids can see roughly <strong>$154 more per biweekly paycheck</strong> just from claiming the credit upfront.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have not updated your W-4 since having a child, or if you are unsure whether you are withholding the right amount, use the{' '}
        <a href="https://apps.irs.gov/app/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          IRS Tax Withholding Estimator
        </a>{' '}
        to check your situation. Also check out our guide to{' '}
        <a href="/blog/understanding-your-w4" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          filling out the W-4 correctly
        </a>{' '}
        and our article on{' '}
        <a href="/blog/tax-withholding-overpaying" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          how to tell if you&rsquo;re overpaying your taxes
        </a>.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#faf5ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Take-Home Pay After the Child Tax Credit
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to calculate your paycheck — the credit reduces your withholding and boosts every check.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#7c3aed',
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
          <a href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS — Child Tax Credit Overview</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p972" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS Publication 972 — Child Tax Credit and Credit for Other Dependents</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-schedule-8812-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS — Schedule 8812: Credits for Qualifying Children and Other Dependents</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS — About Form W-4, Employee&apos;s Withholding Certificate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/research/all/state/state-child-tax-credits/" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>Tax Foundation — State Child Tax Credits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/news.release/famee.nr0.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>Bureau of Labor Statistics — Families and Income Data</a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#7c3aed', textDecoration: 'underline', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
