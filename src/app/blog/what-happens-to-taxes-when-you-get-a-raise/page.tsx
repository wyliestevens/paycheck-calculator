import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Happens to Your Taxes When You Get a Raise? (2026 Guide)',
  description:
    'A raise always increases your take-home pay — but how much? Learn exactly how federal tax brackets, FICA, and state taxes work when your salary goes up, with a worked dollar example.',
  alternates: { canonical: '/blog/what-happens-to-taxes-when-you-get-a-raise' },
  keywords:
    'what happens to taxes when you get a raise, does a raise increase taxes, raise tax bracket, salary increase take home pay, marginal tax rate raise 2026',
  openGraph: {
    title: 'What Happens to Your Taxes When You Get a Raise? (2026 Guide)',
    description:
      'A raise always increases your take-home pay — but how much? See the exact math with a worked example going from $55,000 to $70,000.',
  },
}

export default function WhatHappensToTaxesWhenYouGetARaise() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Upward arrow chart showing salary growth and tax impact"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Bar chart columns */}
          <rect x="80" y="120" width="40" height="50" rx="3" fill="rgba(255,255,255,0.25)" />
          <rect x="140" y="100" width="40" height="70" rx="3" fill="rgba(255,255,255,0.3)" />
          <rect x="200" y="78" width="40" height="92" rx="3" fill="rgba(255,255,255,0.35)" />
          <rect x="260" y="55" width="40" height="115" rx="3" fill="rgba(255,255,255,0.4)" />
          {/* Dollar labels */}
          <text x="100" y="115" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="monospace">$45k</text>
          <text x="160" y="95" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="monospace">$50k</text>
          <text x="220" y="73" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="monospace">$60k</text>
          <text x="280" y="50" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="monospace">$70k</text>
          {/* Up arrow */}
          <line x1="350" y1="155" x2="430" y2="55" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeDasharray="6,3" />
          <polygon points="430,55 418,68 442,65" fill="rgba(255,255,255,0.7)" />
          {/* Right side text */}
          <text x="460" y="80" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">More</text>
          <text x="460" y="100" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">Gross,</text>
          <text x="460" y="120" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">More</text>
          <text x="460" y="140" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">Take-Home</text>
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
        What Happens to Your Taxes When You Get a Raise?
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 6, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One of the most common worries workers have about getting a raise is this: <em>&ldquo;Will a higher salary push me into a higher tax bracket and leave me with less money than before?&rdquo;</em>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The short answer is <strong>no</strong>. A raise always increases your take-home pay. The United States uses a <strong>marginal tax system</strong>, which means only the new income above a bracket threshold gets taxed at the higher rate. Your existing income is not suddenly re-taxed at the new, higher rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That said, you will not keep every dollar of your raise. Some of it will go to taxes. This guide shows you exactly how much, using real 2026 numbers.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Tax Brackets Actually Work
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Think of federal income tax brackets like a ladder with rungs. Each rung covers a range of income and has its own rate. As your income climbs, you only pay the higher rate on the portion of income that enters the new rung. You never pay the higher rate on money you earned before crossing the threshold.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For 2026, the federal income tax brackets for a <strong>single filer</strong> are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income (Single)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925'],
              ['12%', '$11,926 – $48,475'],
              ['22%', '$48,476 – $103,350'],
              ['24%', '$103,351 – $197,300'],
              ['32%', '$197,301 – $250,525'],
              ['35%', '$250,526 – $626,350'],
              ['37%', 'Over $626,350'],
            ].map(([rate, range], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#2563eb', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Keep in mind: these brackets apply to your <strong>taxable income</strong>, not your gross salary. In 2026, the standard deduction for a single filer is <strong>$15,000</strong>, so you subtract that from your salary before any bracket math begins.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 2026 Tax Inflation Adjustments)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $55,000 Salary Gets a Raise to $70,000
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s use a concrete example. Say you are a single filer in a state with no income tax (like{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> or{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>) earning $55,000 per year. You get a raise to $70,000. Here is the exact tax math:
      </p>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Before the raise: $55,000 salary
      </h3>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Gross salary: $55,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Minus standard deduction: &minus;$15,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Taxable income: $40,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Federal tax: 10% on $11,925 = $1,192 + 12% on $28,075 = $3,369 &rarr; <strong>$4,561 total</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>FICA (7.65%): $55,000 &times; 7.65% = <strong>$4,208</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Annual take-home pay: $55,000 &minus; $4,561 &minus; $4,208 = $46,231</strong>
      </p>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        After the raise: $70,000 salary
      </h3>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Gross salary: $70,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Minus standard deduction: &minus;$15,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Taxable income: $55,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Federal tax: 10% on $11,925 = $1,192 + 12% on $36,550 = $4,386 + 22% on $6,525 = $1,436 &rarr; <strong>$7,014 total</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>FICA (7.65%): $70,000 &times; 7.65% = <strong>$5,355</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Annual take-home pay: $70,000 &minus; $7,014 &minus; $5,355 = $57,631</strong>
      </p>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        The result
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Before Raise</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>After Raise</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Change</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Salary', '$55,000', '$70,000', '+$15,000'],
              ['Federal Income Tax', '$4,561', '$7,014', '+$2,453'],
              ['FICA (SS + Medicare)', '$4,208', '$5,355', '+$1,147'],
              ['Annual Take-Home', '$46,231', '$57,631', '+$11,400'],
            ].map(([label, before, after, change], i) => {
              const isTotal = label === 'Annual Take-Home'
              return (
                <tr key={label} style={{ background: isTotal ? '#ecfdf5' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: isTotal ? 700 : 400 }}>{label}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: isTotal ? 700 : 400 }}>{before}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: isTotal ? 700 : 400 }}>{after}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isTotal ? '#059669' : '#dc2626', fontWeight: isTotal ? 700 : 400 }}>{change}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The $15,000 raise in gross pay translates to <strong>$11,400 more in take-home pay</strong>. You kept 76 cents of every extra dollar earned. The other 24 cents went to taxes &mdash; not the worst trade.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that only <strong>$6,525</strong> of the $15,000 raise entered the 22% bracket. The rest was still taxed at 10% and 12%. That is marginal taxation in action.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Your Marginal Rate vs. Your Effective Rate?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Two tax rates matter when you get a raise:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Marginal rate:</strong> The rate that applies to your next dollar of income. After the raise to $70,000, your marginal rate is 22%. This is the rate you would pay on any additional overtime, side income, or future raises that fall within the same bracket.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Effective rate:</strong> The average rate across all your income. At $70,000, your effective federal rate is $7,014 &divide; $70,000 = about <strong>10.0%</strong>. This is the real percentage of your gross income that goes to federal tax.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A lot of people confuse their marginal rate for their effective rate. Saying &ldquo;I&rsquo;m in the 22% bracket&rdquo; does not mean 22% of your income disappears. At $70,000, your effective federal rate is just 10.0% &mdash; far lower than your bracket suggests.{' '}
        <a href="https://taxfoundation.org/data/all/federal/2026-tax-brackets/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; 2026 Federal Tax Brackets)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How State Taxes Factor In
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The example above used a no-income-tax state. If you live in a state with income tax, the math changes. A raise will increase your state tax bill in addition to your federal tax bill, which means a smaller percentage of the raise lands in your pocket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is a rough comparison of the same $55,000 &rarr; $70,000 raise across three states, showing how much of the $15,000 raise you keep:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Tax Rate (approx.)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Est. Take-Home Increase</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['/texas', 'Texas', 'No state income tax (0%)', '~$11,400'],
              ['/illinois', 'Illinois', 'Flat 4.95%', '~$10,658'],
              ['/california', 'California', 'Progressive ~8% on this income', '~$10,200'],
            ].map(([href, state, rate, amount], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#2563eb' }}>
                  <a href={href} style={{ color: '#2563eb', textDecoration: 'underline' }}>{state}</a>
                </td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even in high-tax California, you still take home roughly <strong>$10,200 more</strong> from a $15,000 raise. The raise always wins.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does a Raise Affect FICA (Social Security and Medicare)?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes, but predictably. FICA is a flat percentage &mdash; it does not have brackets. You pay:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security:</strong> 6.2% on wages up to $168,600 (the 2026 wage base)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare:</strong> 1.45% on all wages, with no cap</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because it is flat, every extra dollar you earn from a raise costs you exactly 7.65 cents in FICA &mdash; no more, no less (until you pass the Social Security wage cap). There is no &ldquo;bracket jump&rdquo; to worry about with FICA.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Contribution and Benefit Base)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One edge case: if your salary crosses <strong>$200,000</strong>, you start paying an extra <strong>0.9% Additional Medicare Tax</strong> on every dollar above that threshold. Your employer does not match this extra amount.{' '}
        <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 560: Additional Medicare Tax)
        </a>
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Are There Any Cases Where a Raise Could Hurt You?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For pure take-home pay from your job, <strong>no</strong> &mdash; a raise always increases what you keep. But there are a few real-world edge cases worth knowing about:
      </p>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. ACA health insurance subsidies
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you buy health insurance through the Affordable Care Act marketplace and receive a premium tax credit, a higher income can reduce your subsidy. In some income ranges, earning more could mean you owe more for health coverage, partially offsetting your raise.{' '}
        <a href="https://www.healthcare.gov/lower-costs/qualifying-for-lower-costs/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Healthcare.gov &mdash; Qualifying for Lower Costs)
        </a>
      </p>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Income-based repayment (IBR) on student loans
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are on an income-driven repayment plan for student loans, a higher salary will eventually increase your required monthly payment at your next annual recertification. This does not change your taxes, but it can reduce your discretionary income.
      </p>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Phase-outs of certain deductions and credits
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some tax benefits phase out at higher incomes. For example, the student loan interest deduction phases out between $75,000 and $90,000 for single filers in 2026. Crossing these thresholds through a raise means losing some deductions &mdash; but again, your total take-home pay still goes up.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Keep More of Your Raise
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you want to stretch your raise further, the best tool you have is <strong>pre-tax contributions</strong>. Money you put into a traditional 401(k), HSA, or FSA reduces your taxable income before the IRS calculates what you owe. This can offset some of the additional taxes that come with a higher salary.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is a quick example. Say your raise moves you into the 22% bracket. If you increase your 401(k) contribution by $3,000 per year to absorb some of the new income:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Federal tax savings: $3,000 &times; 22% = <strong>$660 less in federal tax</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Your out-of-pocket cost: only $3,000 &minus; $660 = <strong>$2,340</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Your 401(k) balance grows by the full <strong>$3,000</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In other words, the government effectively subsidizes 22 cents of every pre-tax retirement dollar you save. The higher your bracket, the better the deal.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In 2026, you can contribute up to <strong>$23,500</strong> to a traditional 401(k) if you are under age 50 ($31,000 if you are 50 or older with the catch-up contribution).{' '}
        <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 401(k) Contribution Limits)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Will Your Withholding Change Automatically?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you get a raise, your employer will recalculate your withholding using your new salary and the IRS withholding tables. This means more federal tax will automatically come out of each paycheck &mdash; you usually do not need to file a new W-4.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, if you want to fine-tune your withholding &mdash; for example, to account for side income, deductions you plan to itemize, or a spouse&rsquo;s income &mdash; you can submit a new{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form W-4
        </a>{' '}
        to your employer at any time. The IRS also has a free{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Withholding Estimator
        </a>{' '}
        that can help you figure out the right amount.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A raise <strong>always</strong> increases your take-home pay. The marginal tax system means only the new income above a bracket threshold faces the higher rate &mdash; your existing earnings stay taxed at the same rates they always were. In the worked example above, a $15,000 raise resulted in $11,400 more in take-home pay per year: a 76% keep rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The two levers that determine how much you keep are your <strong>state</strong> (since no-tax states like{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> or{' '}
        <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a> let you keep more) and how aggressively you use <strong>pre-tax contributions</strong> to reduce your taxable income. Used together, those two strategies can significantly improve what you actually bring home.
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
          See Your Take-Home Pay After Your Raise
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your new salary and state to get an instant, personalized paycheck breakdown.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
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
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/federal/2026-tax-brackets/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; 2026 Federal Income Tax Brackets and Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 560: Additional Medicare Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 401(k) Contribution Limits 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
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
