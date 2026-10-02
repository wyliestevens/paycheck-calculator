import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Imputed Income: What It Is and How It Affects Your Paycheck (2026)',
  description:
    'Imputed income is the taxable value of non-cash benefits your employer provides. Here\'s exactly what it is, what triggers it, and how it shows up on your W-2 — with a full worked example for group-term life insurance.',
  alternates: { canonical: '/blog/imputed-income-explained-2026' },
  keywords:
    'imputed income 2026, what is imputed income, imputed income paycheck, group-term life insurance imputed income, imputed income W-2, domestic partner benefits imputed income, Box 12 Code C, IRS Publication 15-B',
  openGraph: {
    title: 'Imputed Income: What It Is and How It Affects Your Paycheck (2026)',
    description:
      'Imputed income is the taxable value of non-cash benefits your employer provides. Here\'s exactly what it is and how it affects your taxes.',
  },
}

export default function ImputedIncomeExplained() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Imputed income illustration showing benefits converting to taxable income"
        >
          <rect width="600" height="200" rx="12" fill="#d97706" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Left side: benefit box */}
          <rect x="40" y="50" width="140" height="100" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="110" y="84" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">EMPLOYER</text>
          <text x="110" y="100" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">BENEFIT</text>
          {/* Gift/benefit icon */}
          <rect x="80" y="110" width="60" height="30" rx="4" fill="rgba(255,255,255,0.3)" />
          <line x1="110" y1="110" x2="110" y2="140" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
          <line x1="90" y1="110" x2="130" y2="110" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
          <path d="M 110 110 Q 90 100 85 108" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
          <path d="M 110 110 Q 130 100 135 108" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />

          {/* Arrow with label */}
          <line x1="192" y1="100" x2="250" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="250,92 265,100 250,108" fill="rgba(255,255,255,0.7)" />
          <text x="221" y="90" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">IRS</text>
          <text x="221" y="118" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">rules</text>

          {/* Right side: taxable income box */}
          <rect x="278" y="50" width="140" height="100" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="348" y="84" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">IMPUTED</text>
          <text x="348" y="100" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">INCOME</text>
          <text x="348" y="126" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">+$</text>
          <text x="348" y="145" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">added to your W-2</text>

          {/* Tax label on right edge */}
          <rect x="440" y="55" width="110" height="90" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="495" y="80" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">YOU OWE</text>
          <text x="495" y="96" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Federal tax</text>
          <text x="495" y="112" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">State tax</text>
          <text x="495" y="128" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">FICA</text>
          <text x="495" y="144" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">on the value</text>
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
        Imputed Income: What It Is and How It Affects Your Paycheck (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published October 2, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You glance at your pay stub and notice your gross pay is <strong>$3,250</strong> — but your employer reported <strong>$3,318</strong> to the IRS. What&rsquo;s that extra $68? It is likely <strong>imputed income</strong>, and if you have employer-provided life insurance, a domestic partner on your health plan, or personal use of a company car, you may be paying tax on money you never received.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Imputed income confuses a lot of employees because it is invisible — it is not a paycheck deposit, yet the IRS treats it as taxable wages. Here is exactly how it works, why it exists, and how to calculate your tax bill from it.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Imputed Income?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Imputed income</strong> is the value of a non-cash benefit your employer provides that the IRS considers taxable compensation. Even though you did not receive actual cash, the government treats the fair market value of certain perks as if it were wages — and taxes you on it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The logic: if your employer pays for something you would otherwise have to buy yourself, that benefit is economically equivalent to receiving cash and then spending it. The tax code &mdash; specifically{' '}
        <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 15-B
        </a>{' '}
        &mdash; spells out which employer-provided benefits are taxable, which are excluded from income, and which are only partially taxable.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Imputed income gets added to your gross wages on your{' '}
        <a href="/blog/understanding-your-w2" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          W-2
        </a>{' '}
        — this is why Box 1 (wages) can be higher than your direct paycheck deposits for the year.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Does the IRS Tax Non-Cash Benefits?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Without imputed income rules, employers and employees could structure compensation entirely in untaxed perks — free housing, personal car use, lavish insurance policies — to legally avoid payroll and income taxes. The imputed income concept prevents this by putting a taxable dollar value on certain benefits above IRS-set thresholds or limits.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Congress has also carved out exclusions for many common benefits — health insurance premiums paid by employers, the first $5,250 of employer education assistance, transit passes up to the monthly limit, and more. The excluded amounts are not imputed income. Only the amount that exceeds a statutory limit, or benefits that Congress chose not to exclude, become imputed.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Most Common Types of Imputed Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Most employees encounter imputed income in one or more of these scenarios:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Benefit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax-Free Threshold</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Imputed Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Group-term life insurance', 'First $50,000 of coverage', 'Value of coverage above $50K (IRS Table I)'],
              ['Domestic partner health coverage', 'None (unless legally married)', 'Full employer-paid premium for partner'],
              ['Personal use of company car', 'Business use only', 'Annual Lease Value of personal miles'],
              ['Employer-provided housing', '$0 (fully taxable in most cases)', 'Fair market rental value'],
              ['Gym membership paid by employer', '$0 (fully taxable)', 'Full membership cost'],
              ['Employer-paid moving expenses', 'Military only after 2017', 'Full reimbursement amount'],
              ['Executive life insurance (COLI)', 'None above $50K', 'Per IRS Table I for coverage over $50K'],
            ].map(([benefit, threshold, imputed], i) => (
              <tr key={benefit} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{benefit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{threshold}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{imputed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        By far the most common trigger for the average employee is <strong>group-term life insurance</strong> over $50,000. This is offered by millions of employers and affects tens of millions of workers, so we will walk through it in full detail.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Group-Term Life Insurance Over $50,000 (Section 79)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under{' '}
        <a href="https://www.irs.gov/taxtopics/tc305" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Section 79
        </a>
        , an employer can provide up to <strong>$50,000 of group-term life insurance completely free of income tax</strong>. This is one of the most valuable tax-free fringe benefits available.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But many employers offer coverage equal to 1×, 2×, or even 3× your annual salary. If you earn $80,000 and your employer provides 2× salary in life insurance ($160,000), you have <strong>$110,000 in coverage above the $50,000 exclusion</strong>. The IRS requires you to pay income taxes and FICA on the imputed value of that excess coverage.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The taxable amount is calculated using <strong>IRS Table I</strong> — a table of monthly rates per $1,000 of excess coverage, based on your age bracket.{' '}
        <a href="https://www.irs.gov/publications/p15b#en_US_2026_publink1000218729" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15-B, Table I)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        IRS Table I: Monthly Rates per $1,000 of Excess Coverage (2026)
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Age Bracket</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Monthly Rate (per $1,000)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Rate (per $1,000)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Under 25', '$0.05', '$0.60'],
              ['25 – 29', '$0.06', '$0.72'],
              ['30 – 34', '$0.08', '$0.96'],
              ['35 – 39', '$0.09', '$1.08'],
              ['40 – 44', '$0.10', '$1.20'],
              ['45 – 49', '$0.15', '$1.80'],
              ['50 – 54', '$0.23', '$2.76'],
              ['55 – 59', '$0.43', '$5.16'],
              ['60 – 64', '$0.66', '$7.92'],
              ['65 – 69', '$1.27', '$15.24'],
              ['70 and older', '$2.06', '$24.72'],
            ].map(([age, monthly, annual], i) => (
              <tr key={age} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>{age}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{monthly}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice how the rates climb steeply with age. A 35-year-old pays $1.08 per year per $1,000 of excess coverage; a 60-year-old pays $7.92 — more than seven times as much. This reflects the actual cost of term life insurance at each age.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Calculating GTL Imputed Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a complete example using two employees at the same company.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Employer offers:</strong> Group-term life insurance equal to 2× annual salary, paid 100% by the employer.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Employee A: Age 38, $55,000 Salary
      </h3>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>Total coverage: $55,000 × 2 = <strong>$110,000</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Tax-free threshold: $50,000</li>
        <li style={{ marginBottom: '0.375rem' }}>Excess coverage: $110,000 − $50,000 = <strong>$60,000</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Excess in thousands: $60,000 ÷ $1,000 = <strong>60</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Age bracket rate (35–39): <strong>$1.08 per year per $1,000</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Annual imputed income: 60 × $1.08 = <strong>$64.80</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Employee A will see <strong>$64.80</strong> added to Box 1 of their W-2. The extra federal income tax on this (at the 22% bracket) is only about $14 per year — barely noticeable, but it explains why Box 1 and actual cash wages don&rsquo;t match.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Employee B: Age 58, $90,000 Salary
      </h3>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>Total coverage: $90,000 × 2 = <strong>$180,000</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Tax-free threshold: $50,000</li>
        <li style={{ marginBottom: '0.375rem' }}>Excess coverage: $180,000 − $50,000 = <strong>$130,000</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Excess in thousands: $130,000 ÷ $1,000 = <strong>130</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Age bracket rate (55–59): <strong>$5.16 per year per $1,000</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Annual imputed income: 130 × $5.16 = <strong>$670.80</strong></li>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Employee A (Age 38)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Employee B (Age 58)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Salary', '$55,000', '$90,000'],
              ['Total life insurance coverage', '$110,000', '$180,000'],
              ['Tax-free amount', '$50,000', '$50,000'],
              ['Excess coverage', '$60,000', '$130,000'],
              ['IRS Table I rate (annual)', '$1.08 / $1K', '$5.16 / $1K'],
              ['Annual imputed income', '$64.80', '$670.80'],
              ['Extra federal tax (22% bracket)', '~$14', '~$148'],
              ['Extra FICA (7.65%)', '~$5', '~$51'],
              ['Total additional tax cost', '~$19', '~$199'],
            ].map(([label, a, b], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: i === 8 ? 700 : 400 }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 8 ? '#dc2626' : '#475569', fontWeight: i === 8 ? 700 : 400 }}>{a}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 8 ? '#dc2626' : '#475569', fontWeight: i === 8 ? 700 : 400 }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For Employee A the imputed income is nearly trivial — about $19 in extra taxes per year. For Employee B at 58 with a higher salary, it is $199 per year. And for a 65-year-old executive with $500,000 in group-term life insurance coverage, the annual imputed income could easily exceed $5,000, costing over $2,000 in additional taxes.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Domestic Partner Benefits: The Big Surprise
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you add a <strong>domestic partner</strong> to your employer&rsquo;s health, dental, or vision insurance, the IRS treats the employer&rsquo;s share of the premium as imputed income — unless you are legally married or the partner qualifies as your tax dependent.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This can be a large number. If the employer contribution for employee-only coverage is $600/month and family coverage is $1,400/month, the imputed income for adding a non-dependent domestic partner is roughly <strong>$800/month ($9,600/year)</strong>. At a 22% federal tax rate plus FICA and state tax, that could mean $3,000 or more in extra taxes annually.{' '}
        <a href="https://www.irs.gov/publications/p15b#en_US_2026_publink1000218547" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15-B, Section 2)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many employees are caught off guard by this. The premium looks the same on your pay stub, but your taxable wages quietly increase by the employer&rsquo;s cost for your partner&rsquo;s coverage.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Personal Use of a Company Car
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer provides you with a company vehicle and you use it for personal driving (commuting, errands, vacations), the personal-use portion is imputed income. The IRS offers several methods to value this:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Annual Lease Value method:</strong> Based on the vehicle&rsquo;s fair market value using an IRS table, prorated by percentage of personal miles.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Cents-Per-Mile method:</strong> Personal miles × IRS standard mileage rate (67 cents/mile in 2024, adjusted annually).</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Commuting Valuation method:</strong> $1.50 per one-way commute (only for non-control employees with limited personal use).</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer is responsible for calculating this and reporting it on your W-2. You may see it as a separate entry in Box 14, with the full amount also included in Box 1 wages.{' '}
        <a href="https://www.irs.gov/publications/p15b#en_US_2026_publink1000218754" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15-B — Vehicle Rules)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Imputed Income Appears on Your W-2
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Imputed income is embedded in your W-2 in several ways depending on the benefit type:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 1 (Wages, tips, other compensation):</strong> The total imputed income is included in this number. This is why Box 1 may be higher than your actual salary payments.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 12, Code C:</strong> Specifically for group-term life insurance imputed income above $50,000. This amount is already included in Box 1.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 3 &amp; 5 (SS and Medicare wages):</strong> GTL imputed income is also included in FICA-taxable wages in these boxes.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 14 (Other):</strong> Sometimes used by employers to separately identify domestic partner coverage or company car personal use.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you notice a discrepancy between your year-end pay stubs and your W-2 Box 1 amount, imputed income is almost certainly the explanation. Your payroll software adds the imputed income to your taxable wages before the W-2 is generated.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does Imputed Income Affect FICA Taxes?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Yes</strong> — for most types of imputed income. Group-term life insurance imputed income is subject to both Social Security (6.2%) and Medicare (1.45%) taxes. Your employer is also required to pay the employer&rsquo;s FICA match on these amounts.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is one administrative wrinkle: because imputed income is not an actual cash payment, your employer has two options for handling the FICA withholding:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Withhold from each paycheck:</strong> The employer calculates the imputed income each pay period and deducts the FICA from your paycheck along with your regular taxes.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Report on W-2 only:</strong> Some employers do not withhold FICA from each paycheck for imputed income — instead they just report it on the W-2. This means you owe the FICA when you file, which can come as a surprise.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Check with your payroll department to understand which method your employer uses. If they are not withholding, you may want to adjust your W-4 to add extra withholding, or set aside the FICA amount yourself.{' '}
        <a href="/blog/how-to-calculate-federal-tax-withholding" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (See our guide on how federal withholding is calculated)
        </a>
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Calculate the Full Tax Cost of Imputed Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Once you know your annual imputed income amount, calculating your total extra tax is straightforward. Use your <strong>marginal federal rate</strong> plus <strong>7.65% for FICA</strong> plus your <strong>state income tax rate</strong>.
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        <div><strong>Example: Employee B (Age 58), $670.80 imputed income, Illinois resident (4.95% state tax), 22% federal bracket</strong></div>
        <div style={{ marginTop: '0.75rem' }}>Federal income tax: $670.80 &times; 22% = $147.58</div>
        <div>Social Security tax: $670.80 &times; 6.2% = $41.59</div>
        <div>Medicare tax: $670.80 &times; 1.45% = $9.73</div>
        <div>Illinois state tax: $670.80 &times; 4.95% = $33.20</div>
        <div style={{ borderTop: '1px solid #cbd5e1', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          <strong>Total extra tax: $232.10 per year ($19.34/month)</strong>
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most employees with moderate group-term life insurance coverage, the annual tax cost is <strong>$20–$250 per year</strong> — real money, but not a bill that should shock anyone who knows to expect it.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Can You Reduce or Avoid Imputed Income?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In most cases your options are limited, but here are the legitimate strategies:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. Elect a Lower Coverage Amount
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If your employer allows you to choose your life insurance coverage level, electing exactly $50,000 eliminates all GTL imputed income. You get the maximum tax-free coverage with zero imputed income.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Pay the Premium for Excess Coverage Yourself
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If you pay the full actuarial cost for coverage above $50,000 (using IRS Table I rates), there is no imputed income — you have already paid what the benefit is worth, so the IRS has nothing to impute. Some employers allow this arrangement.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Marry Your Domestic Partner
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        Legal marriage eliminates imputed income for your spouse&rsquo;s employer-provided benefits. This is a real tax benefit of marriage that not every couple is aware of.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Claim Your Partner as a Tax Dependent
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If your domestic partner qualifies as your tax dependent (under IRC Section 152), the employer health insurance coverage is not imputed income. The dependent rules are strict — they must live with you all year and you must provide over half their support.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        5. Minimize Personal Use of Company Cars
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        The imputed income from a company car is proportional to personal miles. Using the car solely for business eliminates it entirely. Maintaining a mileage log helps verify the business-use percentage.
      </p>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What You Cannot Reduce
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You cannot offset imputed income with deductions on your W-2. Unlike traditional 401(k) contributions or HSA contributions which reduce your{' '}
        <a href="/blog/what-is-adjusted-gross-income" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          adjusted gross income
        </a>
        , imputed income increases your taxable wages and there is no corresponding above-the-line deduction. The tax is simply the cost of receiving the benefit.
      </p>

      {/* Section 13 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Employers Handle Imputed Income in Payroll
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your payroll team adds the imputed income value to your gross wages before calculating withholding each pay period — or in a lump sum during a year-end adjustment. Either approach results in the same W-2 outcome, but the lump-sum method can cause an unexpected spike in taxes withheld from your last paycheck of the year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you see a large, unexplained drop in your December or year-end paycheck, ask HR whether imputed income was added as an annual adjustment. This is completely normal, not an error.
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Imputed income is taxable income you never actually received in cash — it is the IRS&rsquo;s way of taxing the economic value of certain employer-provided benefits. The most common triggers are group-term life insurance coverage above $50,000 (taxed using IRS Table I rates by age), domestic partner health coverage, and personal use of a company vehicle.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most employees, the annual tax cost of imputed income is modest — typically $20–$250 for standard life insurance coverage. But for older employees with large policies, or employees adding an unmarried partner to their health plan, imputed income can add up to hundreds or thousands of dollars in extra taxes each year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key is understanding why your W-2 wages are higher than your paychecks, knowing what is driving the difference, and deciding whether adjusting your coverage election makes financial sense.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fffbeb',
          border: '1px solid #fcd34d',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Full Paycheck Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly how much goes to federal tax, state tax, Social Security, and Medicare — and what you actually take home each paycheck.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#d97706',
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
          <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15-B &mdash; Employer&rsquo;s Tax Guide to Fringe Benefits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc305" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 305 &mdash; Employer-Provided Group-Term Life Insurance</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15b#en_US_2026_publink1000218729" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Table I &mdash; Uniform Premiums for $1,000 of Group-Term Life Insurance</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15b#en_US_2026_publink1000218547" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15-B, Section 2 &mdash; Fringe Benefit Exclusion Rules</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15b#en_US_2026_publink1000218754" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15-B &mdash; Cents-Per-Mile and Annual Lease Value for Company Vehicles</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-2" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-2, Wage and Tax Statement</a>
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
