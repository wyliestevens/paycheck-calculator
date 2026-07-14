import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minimum Wage Take-Home Pay by State in 2026',
  description:
    'Earning the minimum wage? See exactly what you keep after federal tax, state tax, and FICA — with a full state comparison table and worked examples at $7.25/hr and $16.66/hr.',
  alternates: { canonical: '/blog/minimum-wage-take-home-pay-by-state' },
  keywords:
    'minimum wage take home pay 2026, minimum wage after taxes, state minimum wage 2026, minimum wage net pay, federal minimum wage paycheck, minimum wage by state',
  openGraph: {
    title: 'Minimum Wage Take-Home Pay by State in 2026',
    description:
      'See exactly what minimum wage workers keep after taxes — with a state-by-state comparison and worked examples.',
  },
}

export default function MinimumWageTakeHomeByState() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Horizontal bar chart comparing minimum wages across five states in 2026"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          <text x="300" y="38" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="sans-serif">
            State Minimum Wages — 2026
          </text>

          {/* Federal $7.25 */}
          <text x="95" y="63" textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Federal</text>
          <rect x="100" y="50" width="131" height="20" rx="4" fill="rgba(255,255,255,0.25)" />
          <text x="236" y="64" fontSize="11" fontWeight="600" fill="#fff" fontFamily="monospace">$7.25/hr</text>

          {/* Florida $13.00 */}
          <text x="95" y="94" textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Florida</text>
          <rect x="100" y="81" width="234" height="20" rx="4" fill="rgba(255,255,255,0.30)" />
          <text x="339" y="95" fontSize="11" fontWeight="600" fill="#fff" fontFamily="monospace">$13.00/hr</text>

          {/* Illinois $15.00 */}
          <text x="95" y="125" textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Illinois</text>
          <rect x="100" y="112" width="270" height="20" rx="4" fill="rgba(255,255,255,0.35)" />
          <text x="375" y="126" fontSize="11" fontWeight="600" fill="#fff" fontFamily="monospace">$15.00/hr</text>

          {/* California $16.50 */}
          <text x="95" y="156" textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">California</text>
          <rect x="100" y="143" width="297" height="20" rx="4" fill="rgba(255,255,255,0.40)" />
          <text x="402" y="157" fontSize="11" fontWeight="600" fill="#fff" fontFamily="monospace">$16.50/hr</text>

          {/* Washington $16.66 */}
          <text x="95" y="187" textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Washington</text>
          <rect x="100" y="174" width="300" height="20" rx="4" fill="rgba(255,255,255,0.50)" />
          <text x="405" y="188" fontSize="11" fontWeight="600" fill="#fff" fontFamily="monospace">$16.66/hr</text>
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
        Minimum Wage Take-Home Pay by State in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 14, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn the federal minimum wage of <strong>$7.25 per hour</strong>, your annual gross pay is $15,080 &mdash; but that&rsquo;s not what lands in your bank account. After FICA taxes (Social Security and Medicare), federal income tax, and state income tax where applicable, your real take-home pay is noticeably lower.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The picture changes dramatically by state. Washington&rsquo;s minimum wage of $16.66/hr generates more than twice the gross pay of the federal floor &mdash; and Washington has no state income tax, so workers there keep a larger share of every dollar. Meanwhile, a $15/hr worker in Illinois loses over $1,400 to state income tax on top of everything else.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide calculates actual take-home pay for minimum wage workers across major states, walks through two detailed worked examples, and explains every deduction you can expect to see.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal vs. State Minimum Wage in 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal minimum wage is <strong>$7.25 per hour</strong>, set by Congress under the{' '}
        <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Fair Labor Standards Act (FLSA)
        </a>
        . It has not changed since July 24, 2009 &mdash; making it one of the longest stretches without an increase since the federal minimum was first established in 1938.{' '}
        <a href="https://www.dol.gov/agencies/whd/minimum-wage" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL.gov &mdash; Minimum Wage)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        States can set their own minimums above the federal floor, and most have. In 2026, a number of states still default to the federal $7.25 rate, including Alabama, Georgia, Idaho, Indiana, Iowa, Kansas, Kentucky, Louisiana, Mississippi, North Carolina, North Dakota, Oklahoma, Pennsylvania, South Carolina, Tennessee, Texas, Utah, Wisconsin, and Wyoming. Other states are well ahead:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.4rem' }}><strong>Washington:</strong> $16.66/hr</li>
        <li style={{ marginBottom: '0.4rem' }}><strong>California:</strong> $16.50/hr</li>
        <li style={{ marginBottom: '0.4rem' }}><strong>Connecticut:</strong> $16.35/hr</li>
        <li style={{ marginBottom: '0.4rem' }}><strong>New Jersey:</strong> $15.49/hr</li>
        <li style={{ marginBottom: '0.4rem' }}><strong>Massachusetts, Illinois, Maryland:</strong> $15.00/hr</li>
        <li style={{ marginBottom: '0.4rem' }}><strong>Florida:</strong> $13.00/hr</li>
        <li style={{ marginBottom: '0.4rem' }}><strong>Arizona:</strong> $14.70/hr</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Working full time (40 hours/week, 52 weeks/year), the difference between the federal floor and Washington&rsquo;s rate is <strong>$19,573 in gross annual pay</strong>. But after taxes, the difference in take-home is somewhat smaller.{' '}
        <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL.gov &mdash; State Minimum Wage Laws)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Gets Taken Out of a Minimum Wage Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Three types of deductions affect virtually every minimum wage worker:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. FICA Taxes (7.65% of gross pay)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA (Federal Insurance Contributions Act) is a flat payroll tax: <strong>6.2%</strong> for Social Security and <strong>1.45%</strong> for Medicare, totaling 7.65%. It applies to every dollar of gross pay from the very first hour you work. There is no minimum income threshold, no standard deduction that offsets it, and no way to reduce it with deductions or credits.{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 751: Social Security and Medicare Withholding)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Federal Income Tax (starts at 10%, but often near zero for federal minimum wage workers)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax is calculated on your income above the standard deduction, which is <strong>$15,000</strong> for single filers in 2026. Workers earning the federal minimum wage of $7.25/hr bring in $15,080 annually &mdash; leaving only $80 in taxable income and a federal income tax bill of just $8. At higher state minimum wages, more income is exposed to the 10% and 12% brackets.{' '}
        <a href="https://www.irs.gov/publications/p505" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 505, Tax Withholding and Estimated Tax)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. State Income Tax (0% to over 5%)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Nine states have no income tax at all: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. The rest levy income taxes ranging from Arizona&rsquo;s flat 2.5% to California&rsquo;s progressive rates that start at 1%. For minimum wage workers, the state income tax difference can be $700&ndash;$1,500 per year.
      </p>

      {/* Section 3 — Worked Example 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example 1: Federal Minimum Wage ($7.25/hr) in Texas
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Texas has no state income tax, making it a clear example for seeing the effect of federal deductions alone. Assumptions: single filer, no dependents, standard deduction, full-time (40 hrs/week &times; 52 weeks = 2,080 hours/year).
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
        $7.25 &times; 2,080 hours = <strong>$15,080 gross annual pay</strong>
      </div>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Pay', '$15,080.00', false],
              ['Federal Standard Deduction', '(−$15,000.00)', false],
              ['Federal Taxable Income', '$80.00', false],
              ['Federal Income Tax (10%)', '−$8.00', true],
              ['Social Security (6.2%)', '−$934.96', true],
              ['Medicare (1.45%)', '−$218.66', true],
              ['Texas State Income Tax', '$0.00', false],
            ].map(([label, amount, isDeduction], i) => (
              <tr key={label as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isDeduction ? '#dc2626' : '#475569' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#e0f2fe' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Annual Take-Home Pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$13,918.38</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9375rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <tbody>
            {[
              ['Monthly take-home', '$1,159.87'],
              ['Per biweekly paycheck', '$535.32'],
              ['Effective hourly rate', '$6.69/hr'],
              ['Total tax rate (FICA + fed)', '7.69%'],
            ].map(([label, value], i) => (
              <tr key={label as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#0891b2' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        FICA is the largest deduction at this income level because the $15,000 standard deduction nearly wipes out federal taxable income. The $7.25/hr worker pays almost nothing in federal income tax &mdash; but still owes $1,154 in FICA on every dollar earned.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>EITC note:</strong> Workers earning around $15,080 as a single filer with no children may also qualify for the{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-income-limits-maximum-credit-amounts" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Earned Income Tax Credit (EITC)
        </a>
        , worth up to <strong>$632</strong> for childless workers in 2026. With one qualifying child, the maximum EITC rises to $4,213. This credit is refundable &mdash; meaning it comes back as a tax refund even if you owe no federal income tax &mdash; and can meaningfully offset your FICA cost at tax time.
      </p>

      {/* Section 4 — Worked Example 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example 2: Washington State Minimum Wage ($16.66/hr)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Washington has the highest state minimum wage in the country in 2026, and no state income tax &mdash; a combination that maximizes take-home pay. Same assumptions: single filer, standard deduction, full-time (2,080 hours/year).
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
        $16.66 &times; 2,080 hours = <strong>$34,653 gross annual pay</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Federal income tax is more significant here. After the $15,000 standard deduction, $19,653 is taxable. The first $11,925 is taxed at 10% ($1,192.50), and the remaining $7,728 falls into the 12% bracket ($927.36), for a total federal income tax of $2,119.86.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Pay', '$34,653.00', false],
              ['Federal Income Tax (10% + 12%)', '−$2,119.86', true],
              ['Social Security (6.2%)', '−$2,148.49', true],
              ['Medicare (1.45%)', '−$502.47', true],
              ['Washington State Income Tax', '$0.00', false],
            ].map(([label, amount, isDeduction], i) => (
              <tr key={label as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isDeduction ? '#dc2626' : '#475569' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#e0f2fe' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Annual Take-Home Pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$29,882.18</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9375rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <tbody>
            {[
              ['Monthly take-home', '$2,490.18'],
              ['Per biweekly paycheck', '$1,149.32'],
              ['Effective hourly rate', '$14.37/hr'],
              ['Total tax rate', '13.77%'],
            ].map(([label, value], i) => (
              <tr key={label as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#0891b2' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Washington worker takes home <strong>$29,882</strong> per year &mdash; <strong>$15,964 more</strong> than the Texas worker earning the federal minimum. Meanwhile, the gross pay difference was $19,573. The gap narrows because federal income tax and FICA both scale up proportionally with income.
      </p>

      {/* Section 5 — State Comparison Table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Minimum Wage Take-Home Pay Comparison
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The table below shows estimated annual and monthly take-home pay for a single full-time worker earning each state&rsquo;s minimum wage. Figures assume the federal standard deduction, no additional tax credits, and state-level personal exemptions where applicable.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
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
              <th style={{ padding: '0.65rem 0.75rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.65rem 0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Min Wage</th>
              <th style={{ padding: '0.65rem 0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gross/yr</th>
              <th style={{ padding: '0.65rem 0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Fed Tax</th>
              <th style={{ padding: '0.65rem 0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Tax</th>
              <th style={{ padding: '0.65rem 0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>FICA</th>
              <th style={{ padding: '0.65rem 0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Take-Home/yr</th>
              <th style={{ padding: '0.65rem 0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>/mo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Texas', '$7.25', '$15,080', '$8', '$0', '$1,154', '$13,918', '$1,160'],
              ['Florida', '$13.00', '$27,040', '$1,204', '$0', '$2,069', '$23,767', '$1,981'],
              ['Arizona', '$14.70', '$30,576', '$1,631', '$712', '$2,339', '$25,894', '$2,158'],
              ['Colorado', '$14.81', '$30,805', '$1,657', '$756', '$2,357', '$26,035', '$2,170'],
              ['Illinois', '$15.00', '$31,200', '$1,706', '$1,424', '$2,387', '$25,683', '$2,140'],
              ['Massachusetts', '$15.00', '$31,200', '$1,706', '$1,340', '$2,387', '$25,767', '$2,147'],
              ['Maryland', '$15.00', '$31,200', '$1,706', '$975', '$2,387', '$26,132', '$2,178'],
              ['New Jersey', '$15.49', '$32,219', '$1,828', '$974', '$2,465', '$26,952', '$2,246'],
              ['Connecticut', '$16.35', '$34,008', '$2,041', '$1,190', '$2,601', '$28,176', '$2,348'],
              ['Hawaii', '$16.00', '$33,280', '$1,955', '$1,148', '$2,546', '$27,631', '$2,303'],
              ['California', '$16.50', '$34,320', '$2,080', '$781', '$2,625', '$28,834', '$2,403'],
              ['Washington', '$16.66', '$34,653', '$2,120', '$0', '$2,651', '$29,882', '$2,490'],
            ].map(([state, wage, gross, fed, stateTax, fica, takeHome, monthly], i) => (
              <tr key={state as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{wage}</td>
                <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{gross}</td>
                <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{fed}</td>
                <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{stateTax}</td>
                <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{fica}</td>
                <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{takeHome}</td>
                <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{monthly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Estimates assume single filer, no dependents, standard deduction, full-time (2,080 hrs/yr). State tax uses each state&rsquo;s personal exemption where applicable. California figure excludes SDI (1.1%). Colorado figure uses 4.4% flat rate. Maryland uses a blended ~4.75% effective rate. Illinois uses 4.95% flat rate. Connecticut uses progressive rates. New Jersey uses progressive rates. Massachusetts uses 5% flat rate. Hawaii uses progressive rates. Individual results vary.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why a Higher Minimum Wage Doesn&rsquo;t Always Mean Proportionally Higher Take-Home
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Washington&rsquo;s minimum wage is <strong>130% higher</strong> than the federal floor ($16.66 vs $7.25), but the annual take-home is only <strong>115% higher</strong> ($29,882 vs $13,918). There are two reasons for this gap:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Federal income tax grows faster.</strong> At $15,080, the standard deduction wipes out nearly all taxable income, so the federal income tax is just $8. At $34,653, the worker pays $2,120 in federal income tax. That $2,112 difference directly reduces the take-home advantage of a higher minimum wage.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>FICA is fully proportional.</strong> Social Security and Medicare apply to every dollar of gross pay at 7.65%. Earning 130% more gross means paying 130% more FICA &mdash; there is no escaping this scaling.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        States with high minimum wages AND state income taxes (like Illinois, Massachusetts, and Connecticut) see their take-home advantage further reduced. Notice that California&rsquo;s $16.50 minimum wage produces a higher take-home than Illinois&rsquo; $15.00 &mdash; but California&rsquo;s lower effective state tax rate at this income level (compared to Illinois&rsquo; 4.95% flat rate) plays a significant role. Washington workers at $16.66 come out ahead of all of them, largely because of zero state income tax.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Tips for Minimum Wage Workers to Maximize Take-Home Pay
      </h2>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. File for the Earned Income Tax Credit (EITC)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The EITC is one of the largest anti-poverty tax credits in the US tax code and is specifically designed for low- and moderate-income workers. For 2026, the maximum credit is approximately <strong>$632 with no children</strong>, <strong>$4,213 with one child</strong>, <strong>$6,960 with two children</strong>, and <strong>$7,830 with three or more children</strong>. Because it is refundable, if the credit exceeds your tax liability, the difference comes back to you as a refund. Don&rsquo;t leave this on the table &mdash; claim it when you file.{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-income-limits-maximum-credit-amounts" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; EITC Income Limits and Maximum Credit Amounts)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Adjust Your W-4 to Reduce Excess Withholding
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At the federal minimum wage level, your actual federal income tax liability may be close to zero &mdash; but your employer withholds based on your W-4 settings. If you consistently receive a large refund, consider claiming exempt status on line 4(c) of your W-4 (if you expect to owe no federal tax) or adjusting your withholding amount downward. This puts more money in each paycheck rather than letting the IRS hold it interest-free until filing season.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; About Form W-4)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Use Pre-Tax Benefits if Your Employer Offers Them
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer offers health insurance, a 401(k), or a Flexible Spending Account (FSA), contributing on a pre-tax basis reduces your federal (and sometimes state) taxable income. Health insurance premiums paid through an employer cafeteria plan are also exempt from FICA &mdash; one of the few ways to reduce the FICA tax. Even at minimum wage, a $50/month pre-tax health insurance deduction saves roughly $46 per year in FICA alone, plus income tax savings.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. File for Free
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Workers earning below $79,000 can file federal taxes for free using the IRS Free File program, which provides access to commercial tax software at no cost. Filing your own return (rather than paying a preparer) ensures you claim the EITC and any state-level credits you&rsquo;re entitled to without paying $100&ndash;$300 in preparation fees.{' '}
        <a href="https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Free File)
        </a>
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The minimum wage in 2026 ranges from $7.25/hr (federal floor) to $16.66/hr (Washington State), and your take-home pay depends on both the rate and where you live. At the federal minimum in a no-tax state, you keep about <strong>$6.69/hr</strong> effective after FICA. At Washington&rsquo;s rate, you keep <strong>$14.37/hr</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA is the largest bite for low earners because it applies to every dollar regardless of the standard deduction. Federal income tax, by contrast, is minimal at the lowest wage levels thanks to the $15,000 standard deduction. State income tax is the wildcard: states with both a high minimum wage and no income tax (Washington) deliver the best outcome; states with high minimums and income taxes (Illinois, Massachusetts) partially offset the gain.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you qualify for the EITC &mdash; especially with qualifying children &mdash; it can significantly improve your effective take-home, turning a small federal tax liability into a meaningful refund each spring.
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
          See Your Exact Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your hourly rate and state to see a full breakdown of federal tax, state tax, FICA, and your real take-home pay &mdash; down to the dollar.
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
          <a href="https://www.dol.gov/agencies/whd/minimum-wage" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL.gov &mdash; Federal Minimum Wage</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL.gov &mdash; State Minimum Wage Laws</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/flsa" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL.gov &mdash; Fair Labor Standards Act (FLSA)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 751: Social Security and Medicare Withholding</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p505" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 505, Tax Withholding and Estimated Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-income-limits-maximum-credit-amounts" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; EITC Income Limits and Maximum Credit Amounts</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Free File: Do Your Federal Taxes for Free</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-4</a>
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
