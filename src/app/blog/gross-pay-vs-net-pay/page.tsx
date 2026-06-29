import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gross Pay vs Net Pay: What\'s the Difference? (2026 Guide)',
  description:
    'Gross pay is what your employer agrees to pay you. Net pay is what lands in your bank account. Here\'s exactly what happens between those two numbers — with real examples.',
  alternates: { canonical: '/blog/gross-pay-vs-net-pay' },
  keywords:
    'gross pay vs net pay, what is gross pay, what is net pay, gross income vs net income, difference between gross and net pay, take-home pay 2026',
  openGraph: {
    title: 'Gross Pay vs Net Pay: What\'s the Difference? (2026 Guide)',
    description:
      'Gross pay is what your employer promises. Net pay is what you actually receive. Here\'s what happens in between — with a step-by-step worked example.',
  },
}

export default function GrossPayVsNetPay() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Gross pay minus deductions equals net pay illustration"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Gross pay block */}
          <rect x="30" y="60" width="140" height="80" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="100" y="95" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif" fontWeight="600">GROSS PAY</text>
          <text x="100" y="118" textAnchor="middle" fontSize="20" fill="#ffffff" fontFamily="monospace" fontWeight="700">$70,000</text>
          {/* Minus sign */}
          <text x="198" y="108" textAnchor="middle" fontSize="32" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontWeight="700">−</text>
          {/* Deductions block */}
          <rect x="220" y="50" width="140" height="100" rx="8" fill="rgba(0,0,0,0.2)" />
          <text x="290" y="73" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif" fontWeight="600">DEDUCTIONS</text>
          <text x="290" y="93" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Federal Tax</text>
          <text x="290" y="107" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">State Tax</text>
          <text x="290" y="121" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">FICA (7.65%)</text>
          <text x="290" y="135" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Benefits</text>
          {/* Equals sign */}
          <text x="388" y="105" textAnchor="middle" fontSize="32" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontWeight="700">=</text>
          {/* Net pay block */}
          <rect x="410" y="60" width="160" height="80" rx="8" fill="rgba(255,255,255,0.25)" />
          <text x="490" y="95" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif" fontWeight="600">NET PAY</text>
          <text x="490" y="118" textAnchor="middle" fontSize="20" fill="#ffffff" fontFamily="monospace" fontWeight="700">$52,400</text>
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
        Gross Pay vs Net Pay: What&rsquo;s the Difference? (2026 Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 29, 2026 &middot; 7 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you accepted your job offer, you saw one number. When your first paycheck arrived, you saw a smaller one. That gap &mdash; sometimes 25% to 35% of your salary &mdash; is the difference between <strong>gross pay</strong> and <strong>net pay</strong>. Understanding exactly what happens between those two numbers is one of the most practical things you can know about your finances.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains both terms in plain English, shows you the five things that shrink your paycheck, and walks through a real dollar example so you can estimate your own take-home pay.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Gross Pay?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Gross pay</strong> is your total earnings before any taxes or deductions are taken out. It is the number your employer agreed to pay you when you were hired. For salaried workers, gross pay is your annual salary divided by the number of pay periods in the year. For hourly workers, it is your hourly rate multiplied by the hours you worked.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are some quick examples of gross pay calculations:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Situation</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gross Pay per Paycheck</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$60,000 salary, paid biweekly (26 checks/year)', '$2,307.69'],
              ['$60,000 salary, paid semimonthly (24 checks/year)', '$2,500.00'],
              ['$20/hr × 80 hours (biweekly)', '$1,600.00'],
              ['$20/hr × 80 hours + 8 hours overtime at $30/hr', '$1,840.00'],
            ].map(([situation, amount], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{situation}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Gross pay also includes any extra compensation you receive: overtime pay, tips, commissions, bonuses, and the value of employer-provided taxable benefits. All of these are counted as gross income before the government takes its share.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Net Pay?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Net pay</strong> is what actually gets deposited into your bank account after every deduction has been taken out. You will also hear it called <strong>take-home pay</strong>. It is what you actually have to spend, save, or invest.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The simple formula is:
      </p>

      <div
        style={{
          background: '#f0fdf4',
          border: '1px solid #86efac',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '1rem',
          color: '#1e293b',
          textAlign: 'center',
        }}
      >
        <strong>Net Pay = Gross Pay &minus; Taxes &minus; Pre-Tax Deductions &minus; Post-Tax Deductions</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most workers earning between $40,000 and $100,000, net pay ends up being roughly <strong>65% to 80% of gross pay</strong>, depending on state taxes, filing status, and benefit elections. The more you earn, the larger the gap tends to be, because higher incomes are taxed at higher marginal rates.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 5 Things That Turn Gross Into Net
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        There are five main categories of deductions that reduce your gross pay down to your net pay:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. Federal Income Tax
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        The federal government withholds income tax from every paycheck based on your W-4 elections and a set of <strong>progressive tax brackets</strong>. For 2026, federal tax rates range from 10% on your lowest income to 37% on income above $626,350 (for single filers). Importantly, only the portion of your income that falls in each bracket is taxed at that rate &mdash; not all of it.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 2026 Tax Inflation Adjustments)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. State Income Tax
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        Most states also tax your income. Rates vary widely &mdash; from 0% in states like{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> and{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>, to 13.3% at the top bracket in{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>. State income tax is one of the biggest variables that changes your net pay depending on where you live and work.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Income Tax Rates)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. FICA Taxes (Social Security + Medicare)
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        FICA stands for the Federal Insurance Contributions Act. It is a flat deduction that hits every paycheck regardless of how much you earn:
      </p>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security:</strong> 6.2% of your gross pay, on the first $168,600 you earn in 2026. Your employer pays a matching 6.2%.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare:</strong> 1.45% of all your earnings, with no cap. Your employer matches this as well. High earners (over $200,000) pay an additional 0.9%.</li>
      </ul>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        Combined, FICA takes <strong>7.65%</strong> from your gross pay on every check.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Contribution and Benefit Base)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Pre-Tax Benefit Deductions
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        These deductions are taken out <em>before</em> income taxes are calculated, which actually reduces how much tax you owe. Common ones include:
      </p>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Traditional 401(k):</strong> Up to $23,500 per year (2026 limit). Every dollar you contribute reduces your federal and state taxable income.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Health insurance premiums:</strong> Your share of employer-sponsored health coverage, paid pre-tax through a Section 125 cafeteria plan.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>HSA contributions:</strong> Up to $4,300/year (individual, 2026). Triple tax advantage &mdash; pre-tax in, tax-free growth, tax-free out for medical use.</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        5. Post-Tax Deductions
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These come out <em>after</em> taxes are calculated, so they do not lower your current tax bill. Examples include Roth 401(k) contributions (taxed now, tax-free in retirement), union dues, wage garnishments for child support or debt, and supplemental life insurance premiums. These reduce your net pay but not your taxable income.
      </p>

      {/* Section 4 - Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $70,000 Salary in Texas
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a real calculation. Single filer, $70,000 salary, paid biweekly (26 checks per year), contributing $4,000/year to a traditional 401(k), paying $150/month in health insurance premiums, and living in{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> (no state income tax).
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Per Paycheck</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Pay', '$70,000', '$2,692.31', false, false],
              ['401(k) contribution (pre-tax)', '−$4,000', '−$153.85', true, false],
              ['Health insurance premium (pre-tax)', '−$1,800', '−$69.23', true, false],
              ['Taxable gross (after pre-tax deductions)', '$64,200', '$2,469.23', false, false],
              ['Federal income tax (est.)', '−$7,628', '−$293.38', true, false],
              ['Social Security (6.2%)', '−$4,340', '−$166.92', true, false],
              ['Medicare (1.45%)', '−$1,015', '−$39.04', true, false],
              ['Texas state income tax', '$0', '$0', false, false],
            ].map(([label, annual, perCheck, isDeduction, isTotal], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isDeduction ? '#dc2626' : '#1e293b' }}>{annual}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isDeduction ? '#dc2626' : '#1e293b' }}>{perCheck}</td>
              </tr>
            ))}
            <tr style={{ background: '#f0fdf4' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Net Pay (Take-Home)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$51,217</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$1,970</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This person takes home about <strong>$1,970 per paycheck</strong>, which works out to roughly $51,217 per year &mdash; or about <strong>73% of their gross salary</strong>. The other 27% goes to taxes and benefits. And note that those 401(k) and health insurance contributions are not &ldquo;lost&rdquo; &mdash; the 401(k) grows for retirement, and health insurance provides coverage. The real &ldquo;cost&rdquo; in terms of spending money is the tax portion.
      </p>

      {/* Section 5 - State comparison */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Net Pay Changes by State: $70,000 Salary Compared
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Your gross pay stays the same no matter where you live. But your net pay can change by thousands of dollars per year depending on your state. Here is what a $70,000 salary (single filer, no pre-tax deductions for simplicity) looks like in four states:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Income Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Est. Annual Net Pay</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Texas (no income tax)', '/texas', '$0', '$52,617'],
              ['Florida (no income tax)', '/florida', '$0', '$52,617'],
              ['New York', '/new-york', '~$3,800', '$48,817'],
              ['California', '/california', '~$4,600', '$48,017'],
            ].map(([state, href, stateTax, netPay], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                  <a href={href} style={{ color: '#2563eb', textDecoration: 'underline' }}>{state}</a>
                </td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: stateTax === '$0' ? '#059669' : '#dc2626' }}>{stateTax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{netPay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The difference between living in Texas and California on a $70,000 salary is about <strong>$4,600 per year in net pay</strong> &mdash; roughly $177 per biweekly paycheck. Over a decade, that gap compounds into real money. And that is before factoring in cost of living, property taxes, and local taxes that vary by city.
      </p>

      {/* Section 6 - Why it matters */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Knowing This Matters for Your Budget
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most budgeting mistakes start with confusing gross and net pay. Here are three common scenarios where this confusion causes real problems:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Overestimating a new job offer:</strong> If someone offers you $85,000 and you budget expecting that full amount, you will be short. Your actual spendable income might be $58,000&ndash;$65,000 depending on your state and benefits.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Comparing salaries across cities:</strong> A $75,000 job in{' '}
          <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a> state (no income tax) pays more in net dollars than a $75,000 job in{' '}
          <a href="/oregon" style={{ color: '#2563eb', textDecoration: 'underline' }}>Oregon</a> (up to 9.9% state tax), even though the gross is identical.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Deciding how much rent you can afford:</strong> Common budgeting rules like &ldquo;spend no more than 30% of income on housing&rdquo; are meant to apply to your <em>net</em> income, not your gross. Using gross income makes housing seem more affordable than it really is.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The simple fix: always budget using your net pay. Use gross pay only when comparing job offers in the same state or filling out loan applications where the lender asks for gross income.
      </p>

      {/* Section 7 - How to calculate */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Calculate Your Own Net Pay
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        You have a few options for figuring out your actual take-home pay:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check your most recent pay stub.</strong> The &ldquo;net pay&rdquo; or &ldquo;take-home pay&rdquo; line at the bottom is the actual amount. All the deduction lines above it show exactly what was taken out.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Use a paycheck calculator.</strong> Enter your salary, state, filing status, and benefit deductions to get an estimate. Our free calculator at{' '}
          <a href="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>paycheck.center</a>{' '}
          does this for all 50 states in seconds.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Use the IRS Tax Withholding Estimator.</strong> If you want to get the most accurate federal withholding estimate, the{' '}
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            IRS Tax Withholding Estimator
          </a>{' '}
          walks you through your situation and tells you whether your W-4 is set correctly.
        </li>
      </ul>

      {/* Section 8 - Quick reference */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quick Reference: Estimated Net Pay at Common Salaries
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        These estimates are for a single filer in a state with no income tax (like Texas), taking the standard deduction, with no pre-tax deductions:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gross Salary</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Est. Annual Net Pay</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>% Kept</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Biweekly Net</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$40,000', '$33,580', '84%', '$1,291'],
              ['$55,000', '$44,730', '81%', '$1,720'],
              ['$70,000', '$55,820', '80%', '$2,147'],
              ['$85,000', '$66,290', '78%', '$2,550'],
              ['$100,000', '$75,620', '76%', '$2,908'],
              ['$150,000', '$106,400', '71%', '$4,092'],
            ].map(([gross, net, pct, biweekly], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{gross}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{net}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{pct}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#2563eb' }}>{biweekly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        Estimates based on 2026 federal tax brackets and standard deduction of $15,000 for a single filer. FICA is 7.65% applied to all gross pay within the Social Security wage base. Actual amounts depend on your W-4 elections, state, and benefit deductions.{' '}
        <a href="https://www.bls.gov/oes/current/oes_nat.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>BLS.gov</a>
      </p>

      {/* Section 9 - Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Gross pay is the number on your job offer letter. Net pay is the number that matters for your daily life. The gap between them &mdash; typically 20% to 35% of your salary &mdash; goes to federal income tax, FICA (Social Security and Medicare), state income tax, and any benefit deductions you have elected.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The good news: with the right tools and a basic understanding of how each deduction works, you can predict your net pay very accurately before you accept a job offer, make a budget, or plan a move. Pre-tax deductions like a 401(k) or HSA also give you a way to lower your tax bill while building savings &mdash; so every dollar you redirect into those accounts costs you less than a dollar of take-home pay.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f0fdf4',
          border: '1px solid #86efac',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Exact Net Pay in Seconds
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your gross salary, state, and filing status to get a personalized paycheck breakdown &mdash; including federal tax, FICA, and state tax.
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
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Individual Income Tax Rates, 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/oes/current/oes_nat.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Bureau of Labor Statistics &mdash; Occupational Employment and Wage Statistics</a>
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
