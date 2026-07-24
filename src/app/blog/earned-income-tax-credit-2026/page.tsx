import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Earned Income Tax Credit (EITC) 2026: Who Qualifies and How Much You Can Get',
  description:
    'The EITC can put up to $8,250 back in your pocket in 2026 — but only if you claim it. Here\'s who qualifies, the exact income limits, and a worked example at $28,000 with two qualifying children.',
  alternates: { canonical: '/blog/earned-income-tax-credit-2026' },
  keywords:
    'earned income tax credit 2026, EITC 2026, who qualifies for EITC, EITC income limit 2026, earned income credit amount 2026, EITC with children, how to claim EITC, EITC refund 2026',
  openGraph: {
    title: 'Earned Income Tax Credit (EITC) 2026: Who Qualifies and How Much You Can Get',
    description:
      'The EITC can put up to $8,250 back in your pocket in 2026. Here\'s who qualifies and the exact income limits.',
  },
}

export default function EarnedIncomeTaxCredit2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Earned Income Tax Credit illustration showing credit amounts for families in 2026"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Title */}
          <text x="300" y="52" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">EARNED INCOME TAX CREDIT 2026</text>

          {/* Three credit amount boxes */}
          {/* Box 1: 0 children */}
          <rect x="40" y="65" width="155" height="95" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="118" y="90" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">No qualifying children</text>
          <text x="118" y="120" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff" fontFamily="monospace">$700</text>
          <text x="118" y="144" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">max credit</text>

          {/* Box 2: 1-2 children */}
          <rect x="220" y="65" width="155" height="95" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="298" y="90" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">2 qualifying children</text>
          <text x="298" y="120" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff" fontFamily="monospace">$7,350</text>
          <text x="298" y="144" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">max credit</text>

          {/* Box 3: 3+ children */}
          <rect x="400" y="65" width="155" height="95" rx="8" fill="rgba(255,255,255,0.25)" />
          <text x="478" y="90" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">3+ qualifying children</text>
          <text x="478" y="120" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff" fontFamily="monospace">$8,250</text>
          <text x="478" y="144" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">max credit</text>

          {/* Bottom note */}
          <text x="300" y="178" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Fully refundable &mdash; can generate a refund even if you owe no income tax</text>
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
        Earned Income Tax Credit (EITC) 2026: Who Qualifies and How Much You Can Get
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 24, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Earned Income Tax Credit</strong> is one of the largest anti-poverty programs in the United States &mdash; and one of the most overlooked benefits available to working Americans. In 2026, it can put up to <strong>$8,250</strong> back into the pockets of working families with three or more qualifying children, and even workers without children can claim up to <strong>$700</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS estimates that about 1 in 5 eligible workers does not claim the EITC every year &mdash; leaving billions of dollars unclaimed. If you earn a low-to-moderate income from a job or self-employment, you may qualify and not even know it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is everything you need to know: who qualifies, exactly how much you can get in 2026, and how the credit is calculated with a real-dollar worked example.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is the Earned Income Tax Credit?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The EITC is a <strong>refundable tax credit</strong> for workers with low-to-moderate incomes. Congress created it in 1975 as part of the Tax Reduction Act, originally to provide a work incentive and to offset the burden of payroll taxes on lower-income workers. It has grown substantially since then and is now one of the most effective anti-poverty tools in the federal tax code.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key word is <strong>refundable</strong>. Unlike a non-refundable credit &mdash; which can only reduce your tax bill to zero &mdash; a refundable credit can generate a refund even if you owe no income tax at all. If the EITC is worth $6,000 but your entire federal income tax liability is only $800, the IRS sends you a <strong>$5,200 refund</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The EITC is designed to reward <em>work</em>. You must have <strong>earned income</strong> to qualify &mdash; wages, salaries, tips, self-employment income, or farm income. Passive income like dividends, interest, and capital gains does not count. The credit is largest for families with children, but workers without children can also qualify.{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/earned-income-and-earned-income-tax-credit-eitc-tables" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; EITC Tables and Eligibility)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Qualifies for the EITC in 2026?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        To claim the EITC, you must meet all of the following requirements:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Have earned income</strong> from wages, salary, tips, or net self-employment income</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Have a valid Social Security number</strong> (your spouse and any qualifying children must too)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Be a U.S. citizen or resident alien</strong> for the entire tax year</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Not have investment income above $11,600</strong> in 2026 (dividends, interest, capital gains, rental income)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Have earned income and adjusted gross income (AGI) below the limits</strong> shown in the table below</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Not file as &ldquo;Married Filing Separately&rdquo;</strong> (with limited exceptions introduced in 2024)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For workers <strong>without qualifying children</strong>, you must also be between <strong>ages 25 and 64</strong> at the end of the tax year. This age restriction does not apply if you have a qualifying child.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        What Is a Qualifying Child?
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        A qualifying child must pass all four of these tests:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Relationship:</strong> Your son, daughter, stepchild, foster child, sibling, step-sibling, or a descendant of any of these (such as a grandchild or niece/nephew)
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Age:</strong> Under age 19 at the end of the year, OR under 24 if a full-time student for at least 5 months of the year, OR any age if permanently and totally disabled
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Residency:</strong> Lived with you in the United States for more than half the tax year
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Joint return:</strong> Did not file a joint tax return with a spouse (unless only filing to claim a refund of withheld taxes)
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If two people could claim the same child (for example, divorced parents), only one can claim them for the EITC. Tiebreaker rules generally favor the parent the child lived with longer during the year.{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-qualifying-child-rules" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; EITC Qualifying Child Rules)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 EITC Maximum Credit Amounts
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The maximum EITC in 2026 depends on how many qualifying children you have. The credit also has different phase-in and phase-out rates that determine how the credit grows and shrinks with income:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Qualifying Children</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Maximum EITC</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Phase-In Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Phase-Out Rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0 (no children)', '$700', '7.65%', '7.65%'],
              ['1 child', '$4,450', '34%', '15.98%'],
              ['2 children', '$7,350', '40%', '21.06%'],
              ['3 or more children', '$8,250', '45%', '21.06%'],
            ].map(([children, max, phaseIn, phaseOut], i) => (
              <tr key={children} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{children}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 700 }}>{max}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{phaseIn}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{phaseOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>phase-in rate</strong> is how fast the credit grows as earned income rises from zero. For a family with two children, the credit grows at 40 cents per dollar of earned income. The <strong>phase-out rate</strong> is how fast the credit shrinks once income exceeds a certain threshold.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 EITC Income Limits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Your earned income <em>and</em> adjusted gross income (AGI) must both be below these limits. The lower of the two is used to calculate the credit amount:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>0 Children</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>1 Child</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2 Children</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>3+ Children</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single / Head of Household', '$18,850', '$47,780', '$54,200', '$61,400'],
              ['Married Filing Jointly', '$25,850', '$54,780', '$61,200', '$68,400'],
            ].map(([status, c0, c1, c2, c3], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{c0}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{c1}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{c2}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{c3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Investment income (dividends, interest, capital gains, net rental income) must also be below $11,600 in 2026 &mdash; otherwise you cannot claim the EITC regardless of earned income.{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/earned-income-and-earned-income-tax-credit-eitc-tables" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS EITC Tables)
        </a>
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How the EITC Is Calculated: Phase-In and Phase-Out
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The EITC is not a fixed amount &mdash; it follows a three-stage pattern:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Phase-in:</strong> As earned income rises from zero, the credit grows at the phase-in rate. For a family with two children, that is 40 cents of credit for every dollar of earned income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Plateau:</strong> Once income is high enough to generate the maximum credit, the credit stays flat across a range of income called the plateau.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Phase-out:</strong> Once income exceeds the phase-out start threshold, the credit decreases at the phase-out rate until it reaches zero.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, a single parent with <strong>two qualifying children</strong> in 2026:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Credit grows at <strong>40%</strong> per dollar of earned income from $0</li>
        <li style={{ marginBottom: '0.5rem' }}>Reaches the maximum of <strong>$7,350</strong> at approximately $18,375 in earnings</li>
        <li style={{ marginBottom: '0.5rem' }}>Stays at maximum through approximately $25,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Decreases at approximately <strong>21 cents per dollar</strong> above the phase-out threshold</li>
        <li style={{ marginBottom: '0.5rem' }}>Falls to <strong>zero</strong> at approximately $54,200</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The EITC uses the <strong>lower</strong> of your earned income or adjusted gross income (AGI) to compute the credit. This matters if you have non-wage income: if your AGI is much higher than your earned income due to investment gains, your AGI could push you out of eligibility even if your wages alone would qualify.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p596.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 596 &mdash; Earned Income Credit)
        </a>
      </p>

      {/* Section 6: Worked example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $28,000 Salary, Two Qualifying Children
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say Sarah is a single mother filing as Head of Household with two qualifying children. She earns $28,000 in wages in 2026. Here is her complete tax and credit picture:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Details</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross wages', 'W-2 earned income', '$28,000', '#1e293b'],
              ['Standard deduction (HoH)', '2026 Head of Household deduction', '−$22,500', '#dc2626'],
              ['Taxable income', '$28,000 − $22,500', '$5,500', '#1e293b'],
              ['Federal income tax', '10% × $5,500', '−$550', '#dc2626'],
              ['FICA withheld (all year)', '7.65% × $28,000', '−$2,142', '#dc2626'],
              ['EITC (2 children, per IRS table)', 'Income $28,000 → in phase-out range', '+$6,718', '#059669'],
              ['Net federal refund', 'EITC ($6,718) − income tax ($550)', '+$6,168', '#059669'],
            ].map(([item, details, amount, color], i) => (
              <tr key={item} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{item}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{details}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: amount.startsWith('+') || item === 'Net federal refund' ? 700 : 400, color }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At $28,000 with two qualifying children, Sarah&rsquo;s income is in the phase-out range (above approximately $25,000 for single filers with 2 children) but still well below the cutoff of $54,200. Her EITC is approximately <strong>$6,718</strong> &mdash; the $7,350 maximum reduced by the phase-out on her income above $25,000.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because the EITC is refundable and far exceeds her income tax bill of $550, she receives a federal refund of approximately <strong>$6,168</strong>. This does not offset her FICA taxes ($2,142), which are collected separately throughout the year and not refundable &mdash; but combined with her refund, the EITC significantly improves her annual financial picture.
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
        Net effective federal tax burden = Income tax ($550) − EITC ($6,718) = <strong style={{ color: '#059669' }}>−$6,168</strong> (net refund)
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In plain terms: not only does Sarah pay <em>no</em> federal income tax, the government effectively pays her $6,168 back through the EITC &mdash; making the total tax benefit worth more than a week&rsquo;s gross wages.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does the EITC Affect Your Paycheck?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The EITC does not appear on your regular paychecks as a deduction or addition. Congress eliminated the &ldquo;Advance EITC&rdquo; option in 2011, so today you can <strong>only receive the EITC when you file your tax return</strong>. The credit is either applied against your tax liability, or if it exceeds what you owe, it is issued as a refund after you file.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, the EITC can indirectly increase your take-home pay if you adjust your W-4. If you expect a large EITC refund at tax time, you can enter the anticipated credit amount in <strong>Step 3</strong> of your W-4. This signals to your employer to withhold less federal income tax from each paycheck.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, if you expect a $5,000 EITC, entering $5,000 in credits on your W-4 would reduce federal withholding by roughly:
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
        $5,000 &divide; 26 paychecks = <strong>$192.31 per biweekly paycheck</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That is $192 more in every paycheck rather than waiting for a lump-sum refund in April. However, only adjust your W-4 this way if you are confident you will qualify and that your income will remain stable. If your circumstances change &mdash; fewer qualifying children, a higher income &mdash; you could end up under-withheld and owe taxes.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Form W-4 Instructions)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Claim the EITC
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Claiming the EITC requires filing a federal tax return, even if you owe no taxes and would not otherwise be required to file. Here is how:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>File Form 1040.</strong> You must file a federal return to claim the credit &mdash; it does not come to you automatically.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Complete Schedule EIC</strong> if you have qualifying children. You will need each child&rsquo;s name, Social Security number, relationship to you, and year of birth. Workers without children claim the credit directly on Form 1040 without a separate schedule.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check your eligibility first</strong> using the free{' '}
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/use-the-eitc-assistant" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            IRS EITC Assistant
          </a>
          , which walks you through qualification questions and estimates your credit amount.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>File electronically and choose direct deposit</strong> to receive your refund fastest &mdash; typically within 21 days. By law, the IRS cannot release EITC refunds before <strong>mid-February</strong> each year to allow time to verify claims.{' '}
          <a href="https://www.irs.gov/refunds/tax-season-refund-frequently-asked-questions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; Refund FAQ)
          </a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can also claim the EITC for up to <strong>three prior tax years</strong> if you were eligible but did not claim it. File an amended return using{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1040-x" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1040-X
        </a>{' '}
        for each year you missed. Given the size of the credit, this is worth doing even for years several years back.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common EITC Mistakes to Avoid
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS flags a large number of EITC claims for errors each year. The most common mistakes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Wrong filing status.</strong> If you are married and mistakenly file as Single or Head of Household, the IRS will recalculate &mdash; or deny &mdash; your EITC. Head of Household requires that you paid more than half the cost of keeping up a home for a qualifying person.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Claiming a child who does not meet all four tests.</strong> A child must pass the relationship, age, residency, and joint-return tests. Extended family members like nieces, nephews, and grandchildren can qualify &mdash; but only if they lived with you for more than half the year.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Not reporting all income.</strong> Cash wages, tips, side gigs, and self-employment income all count as earned income. Underreporting can trigger a recalculation or audit.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Two people claiming the same child.</strong> Only one taxpayer can claim a qualifying child for the EITC. Divorced or separated parents should read the{' '}
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-qualifying-child-rules" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            tiebreaker rules
          </a>{' '}
          before filing.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Too much investment income.</strong> Even a relatively small amount of investment income can disqualify you. If your dividends, interest, capital gains, or rental income exceeds $11,600 in 2026, you cannot claim the EITC at all.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Forgetting to file.</strong> The credit does not apply automatically &mdash; you must file a return even if your income is below the filing threshold.
        </li>
      </ul>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Earned Income Credits: An Additional Benefit
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        More than 30 states (plus Washington D.C.) offer their own version of the Earned Income Credit, typically calculated as a percentage of the federal EITC. If you qualify for the federal EITC, you likely qualify for your state&rsquo;s credit too &mdash; and you can claim both.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State EITC (% of Federal)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Example (on $6,718 federal EITC)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['New York', '30%', '+$2,015'],
              ['New Jersey', '40%', '+$2,687'],
              ['Massachusetts', '30%', '+$2,015'],
              ['Maryland', '28%', '+$1,881'],
              ['Colorado', '25%', '+$1,680'],
              ['California', '25%', '+$1,680'],
              ['Illinois', '20%', '+$1,344'],
              ['Michigan', '6%', '+$403'],
            ].map(([state, pct, example], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{pct}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In New Jersey, for instance, Sarah from our example could receive an additional <strong>$2,687</strong> on top of her $6,718 federal EITC &mdash; bringing her total earned income credits to <strong>$9,405</strong> between federal and state. Check your state&rsquo;s department of revenue to see if your state offers this benefit.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        EITC vs. Other Tax Credits: What&rsquo;s Different?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The EITC is often confused with other family-related credits. Here is how they compare:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>EITC</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Child Tax Credit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Child &amp; Dependent Care Credit</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Max benefit', 'Up to $8,250', 'Up to $2,000/child', 'Up to $1,050 (1 child)'],
              ['Refundable?', 'Yes (fully)', 'Partially ($1,700/child)', 'No'],
              ['Income-tested?', 'Yes (phases out)', 'Yes (phases out)', 'Yes (phases out)'],
              ['Requires children?', 'No (but more if yes)', 'Yes (under 17)', 'Yes (for care expenses)'],
              ['Based on earnings?', 'Yes', 'No (based on # children)', 'No (based on care costs)'],
            ].map(([label, eitc, ctc, cdcc], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{eitc}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{ctc}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{cdcc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can claim the EITC and the Child Tax Credit in the same year &mdash; they are not mutually exclusive. Many lower-income families with children claim both, which can result in a substantial combined refund.
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Earned Income Tax Credit is one of the most powerful tax benefits available to working Americans with low-to-moderate incomes. In 2026, it can provide up to <strong>$8,250 for families with three or more qualifying children</strong> &mdash; and even workers without children can claim up to $700. Because it is fully refundable, the EITC can generate a significant check even if you owe no income tax at all.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The catch is that it is not automatic: you must file a tax return and claim it. With 1 in 5 eligible workers leaving the credit unclaimed every year, it&rsquo;s worth taking 10 minutes to check your eligibility using the free{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/use-the-eitc-assistant" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS EITC Assistant
        </a>
        . And if you qualified in prior years and didn&rsquo;t claim it, you can still file amended returns for the last three years.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your state offers its own earned income credit, claiming both the federal and state versions together can make a significant difference &mdash; potentially adding thousands more to your annual refund. The EITC is money you already earned; make sure you claim all of it.
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
          See Your Full Take-Home Pay Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see your federal income tax, FICA withholding, and state tax &mdash; and exactly what you take home every paycheck.
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
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/earned-income-and-earned-income-tax-credit-eitc-tables" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; EITC Tables and Eligibility</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p596.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 596: Earned Income Credit</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/use-the-eitc-assistant" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; EITC Assistant</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-qualifying-child-rules" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; EITC Qualifying Child Rules</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form W-4</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/refunds/tax-season-refund-frequently-asked-questions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Season Refund FAQ</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1040-x" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 1040-X (Amended Return)</a>
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
