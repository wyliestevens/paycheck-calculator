import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Are Paycheck Deductions? A Complete Breakdown for 2026',
  description:
    'Your gross pay and take-home pay are two very different numbers. Learn exactly what gets taken out of your paycheck — federal tax, state tax, FICA, and more — with a worked example.',
  alternates: { canonical: '/blog/paycheck-deductions-explained' },
  keywords:
    'paycheck deductions explained, what comes out of my paycheck, paycheck deductions 2026, federal income tax withholding, FICA tax, state income tax, pre-tax deductions',
  openGraph: {
    title: 'What Are Paycheck Deductions? A Complete Breakdown for 2026',
    description:
      'Learn exactly what gets taken out of your paycheck — federal tax, state tax, FICA, and more — with worked examples for Texas and California.',
  },
}

export default function PaycheckDeductionsExplained() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Paycheck deductions illustration showing gross pay minus deductions equals take-home pay"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Dollar sign icon */}
          <circle cx="80" cy="100" r="40" fill="rgba(255,255,255,0.2)" />
          <text x="80" y="115" textAnchor="middle" fontSize="36" fontWeight="700" fill="#fff" fontFamily="monospace">$</text>
          {/* Arrow */}
          <line x1="135" y1="100" x2="195" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="195,92 210,100 195,108" fill="rgba(255,255,255,0.6)" />
          {/* Deduction boxes */}
          <rect x="220" y="45" width="80" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
          <text x="260" y="65" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Federal Tax</text>
          <rect x="310" y="45" width="80" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
          <text x="350" y="65" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">State Tax</text>
          <rect x="220" y="85" width="80" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
          <text x="260" y="105" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Social Sec.</text>
          <rect x="310" y="85" width="80" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
          <text x="350" y="105" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Medicare</text>
          <rect x="220" y="125" width="170" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
          <text x="305" y="145" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Other Deductions</text>
          {/* Arrow */}
          <line x1="405" y1="100" x2="455" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="455,92 470,100 455,108" fill="rgba(255,255,255,0.6)" />
          {/* Take-home */}
          <circle cx="520" cy="100" r="40" fill="rgba(255,255,255,0.25)" />
          <text x="520" y="95" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="sans-serif">Take</text>
          <text x="520" y="112" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="sans-serif">Home</text>
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
        What Are Paycheck Deductions? A Complete Breakdown for 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published May 26, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have ever looked at your paycheck and wondered, &ldquo;Where did all my money go?&rdquo; you are not alone. The number your employer promises you (your <strong>gross pay</strong>) and the number that actually hits your bank account (your <strong>net pay</strong> or <strong>take-home pay</strong>) can be surprisingly different. The gap between those two numbers is made up of <strong>paycheck deductions</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide walks through every common deduction on a typical paycheck in 2026 so you know exactly where each dollar goes.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Gross Pay Is Not the Same as Take-Home Pay
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your <strong>gross pay</strong> is your total earnings before anything is taken out. If your annual salary is $60,000, your gross pay per biweekly pay period is about $2,307.69. But you will never see that full amount deposited into your account.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before you get paid, your employer is required by law to withhold certain taxes. On top of that, you may have elected to have money taken out for benefits like health insurance or retirement savings. All of these are called <strong>deductions</strong>, and they fall into a few main categories:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Federal income tax</li>
        <li style={{ marginBottom: '0.5rem' }}>State income tax (in most states)</li>
        <li style={{ marginBottom: '0.5rem' }}>Social Security tax</li>
        <li style={{ marginBottom: '0.5rem' }}>Medicare tax</li>
        <li style={{ marginBottom: '0.5rem' }}>Pre-tax benefit deductions (401k, health insurance)</li>
        <li style={{ marginBottom: '0.5rem' }}>Post-tax deductions (Roth contributions, garnishments)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s break down each one.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal Income Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The biggest deduction for most workers is <strong>federal income tax</strong>. The United States uses a <strong>progressive tax system</strong>, which means the more you earn, the higher rate you pay &mdash; but only on the income above each threshold. Your first dollars of income are always taxed at the lowest rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For 2026, the federal income tax brackets for a single filer look like this:
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
        Before your income is taxed, you get to subtract the <strong>standard deduction</strong>. For 2026, the standard deduction for a single filer is <strong>$15,000</strong>. This means if you earn $60,000, only $45,000 is subject to federal income tax.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 2026 Tax Inflation Adjustments)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A common misunderstanding: being &ldquo;in the 22% bracket&rdquo; does not mean all your income is taxed at 22%. Only the portion of your income that falls within that bracket gets the 22% rate. The rest is taxed at the lower rates below it. This is called <strong>marginal taxation</strong>.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Income Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of federal taxes, most states also tax your income. There are three general approaches states take:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No income tax:</strong> Nine states charge no state income tax at all, including{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>, Nevada, Wyoming, Washington, Alaska, Tennessee, South Dakota, and New Hampshire. This can save you thousands per year.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Flat tax:</strong> Some states charge every taxpayer the same percentage, regardless of income. For example, Illinois charges a flat 4.95% and Colorado charges 4.4%.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Progressive tax:</strong>{' '}
          <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> has the most brackets of any state, with rates ranging from 1% to 13.3%. New York, New Jersey, and many other states also use progressive systems.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your state income tax is one of the biggest variables in your take-home pay. The same $60,000 salary can result in very different paychecks depending on where you live.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Income Tax Rates)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Social Security Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Social Security tax</strong> is part of what is called <strong>FICA</strong> (the Federal Insurance Contributions Act). It funds retirement benefits for Americans who have worked and paid into the system.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In 2026, the Social Security tax rate is <strong>6.2%</strong> of your gross pay, up to a <strong>wage base of $168,600</strong>. Your employer also pays 6.2%, so the total going toward Social Security is 12.4% of your salary. Once you earn more than $168,600 in a calendar year, you stop paying Social Security tax on any additional earnings.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Contribution and Benefit Base)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a $60,000 salary, your annual Social Security tax is $60,000 &times; 6.2% = <strong>$3,720</strong>, or about $143.08 per biweekly paycheck.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Medicare Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Medicare tax</strong> is the other half of FICA. It pays for the federal health insurance program that covers Americans age 65 and older.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Medicare tax rate is <strong>1.45%</strong> on all earnings &mdash; there is no income cap. Your employer matches this with another 1.45%, bringing the total to 2.9%.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn more than <strong>$200,000</strong> per year (as a single filer), you pay an <strong>Additional Medicare Tax of 0.9%</strong> on every dollar above that threshold. Your employer does <em>not</em> match this extra amount.{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 751: Social Security and Medicare Withholding)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a $60,000 salary, your annual Medicare tax is $60,000 &times; 1.45% = <strong>$870</strong>, or about $33.46 per biweekly paycheck.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Combined, Social Security and Medicare take <strong>7.65%</strong> of your paycheck (up to the Social Security wage base). For most workers, this is the second-largest deduction after federal income tax.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Pre-Tax Deductions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Pre-tax deductions</strong> are taken out of your paycheck <em>before</em> income taxes are calculated. This lowers your taxable income, which means you pay less in taxes. Common pre-tax deductions include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Traditional 401(k) contributions:</strong> Money you put into a traditional 401(k) retirement account is not taxed now. You pay taxes later when you withdraw it in retirement. In 2026, you can contribute up to <strong>$23,500</strong> per year if you are under 50.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Health insurance premiums:</strong> If your employer offers health insurance, your share of the premium is usually taken out pre-tax. This can save you hundreds of dollars per year in taxes.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Health Savings Account (HSA):</strong> If you have a high-deductible health plan, you can contribute to an HSA. The money goes in pre-tax, grows tax-free, and comes out tax-free when used for qualified medical expenses. In 2026, the contribution limit is <strong>$4,300</strong> for individuals.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Flexible Spending Accounts (FSA):</strong> Similar to an HSA but with a &ldquo;use it or lose it&rdquo; rule. You can set aside up to <strong>$3,300</strong> pre-tax for healthcare expenses in 2026.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key benefit of pre-tax deductions: they reduce the income that gets taxed. A $60,000 earner who puts $6,000 into a 401(k) only pays federal income tax on $54,000 (minus the standard deduction).
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Post-Tax Deductions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Post-tax deductions</strong> are taken out after taxes have been calculated. They do not lower your current tax bill, but some have other tax advantages:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Roth 401(k) contributions:</strong> Unlike a traditional 401(k), Roth contributions are taxed now but grow tax-free. When you retire and withdraw the money, you owe zero taxes on it &mdash; including all the investment gains.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Wage garnishments:</strong> If you owe back taxes, child support, or defaulted student loans, a court can order your employer to withhold a portion of your pay. These are mandatory and come out after taxes.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Union dues:</strong> If you are a union member, your dues are typically deducted post-tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Life or disability insurance:</strong> Employer-sponsored supplemental insurance premiums are often post-tax.
        </li>
      </ul>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $60,000 Salary in Texas vs. California
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s see how the same salary plays out in two very different states. We will assume a single filer with no dependents, taking the standard deduction, and no pre-tax benefit deductions.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Deduction</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Pay', '$60,000', '$60,000'],
              ['Federal Income Tax', '-$5,006', '-$5,006'],
              ['State Income Tax', '$0', '-$2,280'],
              ['Social Security (6.2%)', '-$3,720', '-$3,720'],
              ['Medicare (1.45%)', '-$870', '-$870'],
              ['CA SDI (1.1%)', '$0', '-$660'],
            ].map(([label, tx, ca], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross Pay' ? '#1e293b' : '#dc2626' }}>{tx}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross Pay' ? '#1e293b' : '#dc2626' }}>{ca}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Annual Take-Home Pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$50,404</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$47,464</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Texas worker takes home about <strong>$2,940 more per year</strong> &mdash; roughly $113 more per biweekly paycheck. That is entirely because Texas has no state income tax and no state disability insurance, while California has both.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Of course, state income tax is just one piece of the puzzle. Cost of living, property taxes, sales taxes, and local taxes all play a role in how far your paycheck goes. But when it comes to what gets deducted from your check, state income tax is one of the biggest variables you can control by where you choose to live and work.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Check Your Own Deductions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Look at your most recent pay stub. It should list each deduction separately. Here is what to look for:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Federal Withholding / FIT</strong> &mdash; Federal income tax</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>State Withholding / SIT</strong> &mdash; State income tax</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>OASDI or SS</strong> &mdash; Social Security tax</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>MED or Medicare</strong> &mdash; Medicare tax</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>401K or RETIRE</strong> &mdash; Retirement contributions</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>HLTH or MED INS</strong> &mdash; Health insurance premiums</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your federal withholding seems too high or too low, you can adjust it by filing a new{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form W-4
        </a>{' '}
        with your employer. This does not change how much tax you owe &mdash; it only changes how much is taken out of each paycheck. If too little is withheld, you will owe money at tax time. If too much is withheld, you will get a refund.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Paycheck deductions can feel like a mystery, but they follow a clear and predictable formula. Federal income tax and FICA (Social Security + Medicare) are mandatory for every worker. State income tax depends on where you live. And pre-tax deductions like 401(k) contributions and health insurance premiums can actually work in your favor by reducing the amount of income you are taxed on.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Understanding these deductions is the first step toward making smarter financial decisions &mdash; whether that means adjusting your W-4 withholding, increasing your retirement contributions, or comparing job offers in different states.
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
          See Your Actual Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary, state, and filing status to get a personalized paycheck breakdown in seconds.
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
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Individual Income Tax Rates, 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 751: Social Security and Medicare Withholding</a>
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
