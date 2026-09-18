import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Calculate Federal Income Tax Withholding Step by Step (2026)',
  description:
    'Your employer withholds federal income tax using IRS Publication 15-T. Here\'s exactly how the calculation works — with a full worked example at $65,000 showing every step.',
  alternates: { canonical: '/blog/how-to-calculate-federal-tax-withholding' },
  keywords:
    'how to calculate federal tax withholding, federal income tax withholding calculation, IRS withholding 2026, Publication 15-T, paycheck withholding formula, percentage method withholding, how much federal tax is withheld from paycheck',
  openGraph: {
    title: 'How to Calculate Federal Income Tax Withholding Step by Step (2026)',
    description:
      'Your employer uses IRS Publication 15-T to figure out how much federal income tax to take from each paycheck. Here\'s the step-by-step math.',
  },
}

export default function HowToCalculateFederalTaxWithholding() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Federal tax withholding calculation flow diagram"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Step boxes */}
          {/* Box 1: Gross Pay */}
          <rect x="35" y="65" width="90" height="70" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="80" y="94" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">GROSS</text>
          <text x="80" y="108" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">PAY</text>
          <text x="80" y="124" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="monospace">$2,500</text>

          {/* Arrow 1 */}
          <line x1="126" y1="100" x2="144" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
          <polygon points="144,94 156,100 144,106" fill="rgba(255,255,255,0.55)" />
          {/* Minus label */}
          <text x="135" y="90" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">− pre-tax</text>

          {/* Box 2: Adjusted Wages */}
          <rect x="157" y="65" width="90" height="70" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="202" y="90" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">ADJUSTED</text>
          <text x="202" y="103" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">WAGES</text>
          <text x="202" y="124" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">$2,350</text>

          {/* Arrow 2 */}
          <line x1="248" y1="100" x2="266" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
          <polygon points="266,94 278,100 266,106" fill="rgba(255,255,255,0.55)" />
          {/* Annualize label */}
          <text x="257" y="90" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">× 26</text>

          {/* Box 3: Taxable Income */}
          <rect x="279" y="65" width="90" height="70" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="324" y="90" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">TAXABLE</text>
          <text x="324" y="103" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">INCOME</text>
          <text x="324" y="124" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="monospace">$46,100</text>

          {/* Arrow 3 */}
          <line x1="370" y1="100" x2="388" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
          <polygon points="388,94 400,100 388,106" fill="rgba(255,255,255,0.55)" />
          {/* brackets label */}
          <text x="379" y="90" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">brackets</text>

          {/* Box 4: Withholding */}
          <rect x="401" y="55" width="100" height="90" rx="6" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <text x="451" y="82" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">FEDERAL TAX</text>
          <text x="451" y="96" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">WITHHELD</text>
          <text x="451" y="120" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="monospace">$204</text>
          <text x="451" y="136" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">per paycheck</text>

          {/* Bottom label */}
          <text x="300" y="170" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">IRS Percentage Method (Publication 15-T, 2026)</text>
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
        How to Calculate Federal Income Tax Withholding Step by Step (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 18, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Every payday, your employer removes a chunk of federal income tax from your paycheck before you ever see it. But how does your employer know how much to take? The answer is a government document called <strong>IRS Publication 15-T</strong> &mdash; and once you understand the formula inside it, you can verify your own withholding, predict your refund, and adjust your W-4 with confidence.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide walks through the <strong>Percentage Method</strong> (the most common employer approach) step by step, with a complete worked example at a $65,000 salary.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Federal Income Tax Withholding?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax withholding is the portion of your paycheck that your employer sends directly to the IRS on your behalf. It is an advance payment toward your annual income tax bill. At the end of the year, when you file your tax return, the IRS compares what was withheld to what you actually owe. If too much was taken, you get a refund. If too little was taken, you owe the difference.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Withholding is governed by two things: the information you provide on your{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form W-4
        </a>{' '}
        and the IRS withholding tables in{' '}
        <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Publication 15-T
        </a>
        . Your employer must use this formula for every regular paycheck.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Two Withholding Methods
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Employers can choose from two methods in Publication 15-T:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Percentage Method</strong> &mdash; A formula-based calculation using annualized wages and the tax bracket rates. Used by most payroll software systems. This is what we cover in detail below.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Wage Bracket Method</strong> &mdash; Lookup tables that give withholding amounts directly for a given weekly or biweekly wage and W-4 status. Simpler but limited to wages below certain thresholds. Only available for employees who submitted a 2019 or earlier W-4.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Both methods produce the same result for the same inputs. The Percentage Method is universal and works for any wage amount, which is why payroll software almost always uses it.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 5-Step Percentage Method Formula
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is the exact process your employer (or payroll provider) follows each pay period:
      </p>

      {/* Step boxes */}
      {[
        {
          step: 'Step 1',
          title: 'Start with Gross Wages for the Pay Period',
          text: 'This is your total pay before any deductions — your hourly rate times hours worked, or your salary divided by the number of pay periods per year.',
        },
        {
          step: 'Step 2',
          title: 'Subtract Pre-Tax Deductions',
          text: 'Reduce gross wages by any pre-tax deductions: traditional 401(k) contributions, HSA contributions, health insurance premiums (if under a Section 125 plan), and dependent care FSA. These lower the wage amount that is subject to income tax withholding.',
        },
        {
          step: 'Step 3',
          title: 'Annualize the Adjusted Wages',
          text: 'Multiply the adjusted per-period amount by the number of pay periods in the year: 52 (weekly), 26 (biweekly), 24 (semimonthly), or 12 (monthly). This converts your per-paycheck wages to an annual equivalent so the annual tax brackets can be applied.',
        },
        {
          step: 'Step 4',
          title: 'Subtract the Annualized Standard Deduction and W-4 Adjustments',
          text: 'The IRS Publication 15-T tables include a "Tentative Withholding Amount" table. For the 2026 tax year, this means subtracting the equivalent of the standard deduction ($15,000 for Single/MFS; $30,000 for MFJ/QSS; $22,500 for HOH) plus any Step 3 or Step 4 W-4 adjustments the employee specified. The result is the Adjusted Annual Wage.',
        },
        {
          step: 'Step 5',
          title: 'Apply the Tax Brackets, Then Divide by Pay Periods',
          text: 'Apply the 2026 federal tax brackets to the Adjusted Annual Wage to get an annual tax amount. Then divide that annual figure by the number of pay periods to get the per-paycheck withholding amount.',
        },
      ].map(({ step, title, text }, i) => (
        <div
          key={step}
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1.25rem',
            padding: '1rem 1.25rem',
            background: i % 2 === 0 ? '#f8fafc' : '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: '#2563eb',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8125rem',
              fontWeight: 700,
              fontFamily: 'sans-serif',
              marginTop: '0.125rem',
            }}
          >
            {i + 1}
          </div>
          <div>
            <p style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem', marginBottom: '0.375rem' }}>{title}</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#475569', margin: 0 }}>{text}</p>
          </div>
        </div>
      ))}

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 Federal Tax Brackets (for Withholding Purposes)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Once you have the Adjusted Annual Wage (Step 4), you apply these rates to calculate the annual tentative withholding. These are the 2026 brackets per{' '}
        <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Publication 15-T
        </a>
        :
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single / MFS</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Filing Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925', '$0 – $23,850'],
              ['12%', '$11,926 – $48,475', '$23,851 – $96,950'],
              ['22%', '$48,476 – $103,350', '$96,951 – $206,700'],
              ['24%', '$103,351 – $197,300', '$206,701 – $394,600'],
              ['32%', '$197,301 – $250,525', '$394,601 – $501,050'],
              ['35%', '$250,526 – $626,350', '$501,051 – $751,600'],
              ['37%', 'Over $626,350', 'Over $751,600'],
            ].map(([rate, single, mfj], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: '#2563eb', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{mfj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        These brackets apply to the Adjusted Annual Wage — <em>after</em> the standard deduction has already been subtracted. They are not applied to your raw gross income.
      </p>

      {/* Section 5 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $65,000 Salary, Biweekly, Single
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through two scenarios for the same employee earning $65,000 per year, paid biweekly (26 paychecks), filing Single on their W-4 with no other adjustments.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Scenario A: No Pre-Tax Deductions
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Step</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Calculation</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Gross pay per period', '$65,000 ÷ 26 pay periods', '$2,500.00'],
              ['2. Subtract pre-tax deductions', '401(k) = $0', '$2,500.00'],
              ['3. Annualize adjusted wages', '$2,500.00 × 26', '$65,000.00'],
              ['4. Subtract standard deduction (Single)', '− $15,000', '$50,000.00'],
              ['5a. Tax on first $11,925 @ 10%', '$11,925 × 10%', '$1,192.50'],
              ['5b. Tax on $11,926 – $50,000 @ 12%', '$38,075 × 12%', '$4,569.00'],
              ['Annual tentative withholding', '$1,192.50 + $4,569.00', '$5,761.50'],
              ['Per-paycheck withholding', '$5,761.50 ÷ 26', '$221.60'],
            ].map(([step, calc, amount], i) => {
              const isTotal = step.startsWith('Annual') || step.startsWith('Per-paycheck')
              return (
                <tr key={step} style={{ background: isTotal ? '#eff6ff' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: isTotal ? '#1e293b' : '#475569', fontWeight: isTotal ? 700 : 400 }}>{step}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '0.875rem', fontFamily: "'JetBrains Mono', monospace" }}>{calc}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: isTotal ? 700 : 400, color: isTotal ? '#1e293b' : '#475569' }}>{amount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Without any pre-tax deductions, this employee sees <strong>$221.60 withheld for federal income tax</strong> each biweekly paycheck, adding up to $5,761.50 for the year. Their effective federal tax rate on gross income is 8.86%.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Scenario B: Contributing 6% to a Traditional 401(k)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Now assume the same employee contributes 6% of their gross pay to a traditional (pre-tax) 401(k). That&rsquo;s $150 per paycheck.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Step</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Calculation</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1. Gross pay per period', '$65,000 ÷ 26', '$2,500.00'],
              ['2. Subtract 401(k) contribution (6%)', '$2,500 × 6%', '− $150.00'],
              ['2. Adjusted wages per period', '$2,500 − $150', '$2,350.00'],
              ['3. Annualize adjusted wages', '$2,350 × 26', '$61,100.00'],
              ['4. Subtract standard deduction (Single)', '− $15,000', '$46,100.00'],
              ['5a. Tax on first $11,925 @ 10%', '$11,925 × 10%', '$1,192.50'],
              ['5b. Tax on $11,926 – $46,100 @ 12%', '$34,175 × 12%', '$4,101.00'],
              ['Annual tentative withholding', '$1,192.50 + $4,101.00', '$5,293.50'],
              ['Per-paycheck withholding', '$5,293.50 ÷ 26', '$203.60'],
            ].map(([step, calc, amount], i) => {
              const isTotal = step.startsWith('Annual') || step.startsWith('Per-paycheck')
              return (
                <tr key={step} style={{ background: isTotal ? '#f0fdf4' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: isTotal ? '#1e293b' : '#475569', fontWeight: isTotal ? 700 : 400 }}>{step}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '0.875rem', fontFamily: "'JetBrains Mono', monospace" }}>{calc}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: isTotal ? 700 : 400, color: isTotal ? '#059669' : '#475569' }}>{amount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        With a $150/paycheck 401(k) contribution, the per-paycheck withholding drops from $221.60 to $203.60 &mdash; a <strong>$18.00 reduction in federal tax</strong> per paycheck. That&rsquo;s because 6% of $150 falls in the 12% bracket, so 12% &times; $150 = $18.00. The 401(k) contribution doesn&rsquo;t cost $150 in take-home pay; it costs only $132 ($150 &minus; $18).
      </p>

      {/* Comparison summary box */}
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
          Side-by-Side Comparison: Per Paycheck at $65,000 Salary
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontWeight: 600 }}>Item</th>
                <th style={{ textAlign: 'right', padding: '0.5rem 0.75rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontWeight: 600 }}>No 401(k)</th>
                <th style={{ textAlign: 'right', padding: '0.5rem 0.75rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontWeight: 600 }}>With 401(k) 6%</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gross pay', '$2,500.00', '$2,500.00'],
                ['401(k) contribution', '$0.00', '−$150.00'],
                ['Federal tax withheld', '−$221.60', '−$203.60'],
                ['FICA (Social Security + Medicare)', '−$191.25', '−$191.25'],
                ['Estimated net pay', '~$2,087', '~$1,955'],
              ].map(([item, a, b], i) => (
                <tr key={item} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                  <td style={{ padding: '0.5rem 0.75rem', color: '#475569' }}>{item}</td>
                  <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{a}</td>
                  <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace', color: '#475569" }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginTop: '0.75rem', marginBottom: 0 }}>
          *Estimated net pay excludes state income tax and other deductions. FICA of $191.25 = 7.65% &times; $2,500.
        </p>
      </div>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Withholding at Different Salary Levels
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is how federal withholding compares across common income levels for a single filer, biweekly pay, no pre-tax deductions or W-4 adjustments:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Salary</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gross / Paycheck</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Fed Tax / Paycheck</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Withheld</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Effective Rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$35,000', '$1,346.15', '$67.31', '$1,750', '5.0%'],
              ['$50,000', '$1,923.08', '$143.85', '$3,740', '7.5%'],
              ['$65,000', '$2,500.00', '$221.60', '$5,762', '8.9%'],
              ['$80,000', '$3,076.92', '$325.12', '$8,453', '10.6%'],
              ['$100,000', '$3,846.15', '$453.85', '$11,800', '11.8%'],
              ['$120,000', '$4,615.38', '$599.54', '$15,588', '13.0%'],
              ['$150,000', '$5,769.23', '$838.31', '$21,796', '14.5%'],
            ].map(([salary, gross, tax, annual, rate], i) => (
              <tr key={salary} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontWeight: 600, color: '#1e293b', fontFamily: "'JetBrains Mono', monospace" }}>{salary}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{gross}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{annual}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
        Single filer, biweekly pay (26 periods), standard W-4 withholding, no pre-tax deductions. Effective rate is annual federal tax divided by gross salary.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Your W-4 Changes the Calculation
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The W-4 you submit to your employer feeds directly into Steps 3 and 4 of the Percentage Method. The current W-4 (redesigned in 2020) has four optional steps beyond the basic filing status:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Step 2 &mdash; Multiple jobs or spouse works:</strong> If you (or your spouse) work multiple jobs, checking this box or using the worksheet increases withholding to prevent under-withholding from income stacking across jobs.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Step 3 &mdash; Claim dependents:</strong> You enter a dollar amount (e.g., $4,000 for two qualifying children). This is subtracted annually from the tentative withholding &mdash; it directly reduces how much tax is withheld each paycheck. For example, claiming $4,000 reduces annual withholding by $4,000 &divide; your tax rate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Step 4a &mdash; Other income:</strong> Enter additional income not subject to withholding (like freelance income or investment income) to have extra tax withheld. This amount is added to your annualized wages.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Step 4b &mdash; Deductions:</strong> If you plan to itemize or claim above-the-line deductions exceeding the standard deduction, entering the excess amount here reduces your annualized wages in Step 4.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Step 4c &mdash; Extra withholding:</strong> A flat dollar amount added to each paycheck&rsquo;s withholding. Useful if you want to over-withhold to ensure a refund, or to cover tax on side income.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Every time your life changes &mdash; marriage, a new job, a baby, a promotion, starting a side hustle &mdash; your W-4 may need updating.{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          The IRS Tax Withholding Estimator
        </a>{' '}
        can calculate exactly what you should put on your W-4 to match your actual tax liability.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Withholding May Not Match Your Actual Tax Bill
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Percentage Method is an estimate based on a straight-line annualization of your per-period wages. It assumes you earn the same amount every pay period for the entire year &mdash; which is not always true. Several common scenarios cause a mismatch:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Mid-year salary changes:</strong> If you get a raise in September, your withholding recalculates from that point. The IRS applies the new rate going forward but your W-2 will reflect all wages earned at both rates.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Bonuses and supplemental wages:</strong> Bonuses are typically withheld at a flat 22% supplemental rate (not via the Percentage Method), which may over- or under-withhold depending on your actual tax rate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Multiple jobs:</strong> Each employer calculates withholding independently, assuming it&rsquo;s your only income. Combined, they may withhold too little because neither employer knows about the other&rsquo;s wages.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Investment or self-employment income:</strong> Withholding only applies to wages. Any other income adds to your tax liability without adding to withholding.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Itemized deductions:</strong> If you will itemize more than the standard deduction, your withholding may be too high unless you report the excess on W-4 Step 4b.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS recommends checking your withholding at least once a year &mdash; and after any major life event.{' '}
        <a href="https://www.irs.gov/newsroom/faqs-about-the-2020-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; FAQs about Form W-4)
        </a>
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Withholding Does NOT Cover
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax withholding is only one of several deductions on your paycheck. It does not include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>FICA taxes</strong> (Social Security 6.2% + Medicare 1.45%) &mdash; calculated separately on gross wages</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>State income tax</strong> &mdash; withheld using your state&rsquo;s own formula and rates</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Local/city income tax</strong> &mdash; required in some cities (NYC, Philadelphia, Detroit, etc.)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>State unemployment insurance (SUI)</strong> &mdash; paid by employer, not the employee</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>State disability insurance (SDI)</strong> &mdash; a small employee deduction in seven states</li>
      </ul>

      {/* Section 10 — Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax withholding follows a five-step process: start with gross wages, subtract pre-tax deductions, annualize the result, subtract the standard deduction equivalent, apply the 2026 tax brackets, then divide back to a per-paycheck amount. Understanding this formula puts you in control of your paycheck &mdash; you can model the impact of a 401(k) increase, an FSA election, or a new W-4 claim before the change hits your bank account.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The single most powerful lever most employees have is the W-4. Reviewing it annually &mdash; or after any major life event &mdash; and running the{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Tax Withholding Estimator
        </a>{' '}
        ensures you neither hand the government an interest-free loan (via over-withholding) nor owe a surprise bill in April (via under-withholding).
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Exact Withholding Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary, state, and pay frequency to see a full paycheck breakdown &mdash; federal withholding, FICA, state tax, and net pay &mdash; instantly.
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
          <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 15-T, Federal Income Tax Withholding Methods</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-4, Employee&rsquo;s Withholding Certificate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/faqs-about-the-2020-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; FAQs about Form W-4</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc753" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 753: Form W-4 &mdash; Employee&rsquo;s Withholding Certificate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p15.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 15 (Circular E), Employer&rsquo;s Tax Guide</a>
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
