import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Read Your Pay Stub Line by Line (2026 Guide)',
  description:
    'Confused by the numbers on your pay stub? This guide walks through every line — gross pay, FICA, withholding, YTD totals — in plain English with real examples.',
  alternates: { canonical: '/blog/how-to-read-your-pay-stub' },
  keywords:
    'how to read a pay stub, pay stub explained, paycheck stub lines, OASDI on pay stub, YTD pay stub, pay stub deductions 2026',
  openGraph: {
    title: 'How to Read Your Pay Stub Line by Line (2026 Guide)',
    description:
      'Every line on your pay stub explained in plain English — gross pay, federal and state tax, FICA, pre-tax deductions, net pay, and YTD totals.',
  },
}

export default function HowToReadYourPayStub() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Pay stub illustration showing labeled rows of paycheck deductions"
        >
          <rect width="600" height="200" rx="12" fill="#0369a1" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Document icon */}
          <rect x="30" y="35" width="60" height="75" rx="4" fill="rgba(255,255,255,0.2)" />
          <rect x="38" y="48" width="44" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
          <rect x="38" y="58" width="44" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
          <rect x="38" y="68" width="32" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
          <rect x="38" y="78" width="44" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
          <rect x="38" y="88" width="26" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
          <polygon points="74,35 90,35 90,51" fill="rgba(255,255,255,0.35)" />

          {/* Labeled rows */}
          <rect x="110" y="38" width="320" height="22" rx="4" fill="rgba(255,255,255,0.18)" />
          <text x="120" y="53" fontSize="10" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">GROSS PAY</text>
          <text x="390" y="53" textAnchor="end" fontSize="10" fill="#86efac" fontFamily="monospace" fontWeight="700">$3,461.54</text>

          <rect x="110" y="66" width="320" height="20" rx="4" fill="rgba(255,255,255,0.1)" />
          <text x="120" y="80" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">FEDERAL WITHHOLDING</text>
          <text x="390" y="80" textAnchor="end" fontSize="10" fill="#fca5a5" fontFamily="monospace">-$352.00</text>

          <rect x="110" y="92" width="320" height="20" rx="4" fill="rgba(255,255,255,0.1)" />
          <text x="120" y="106" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">STATE TAX</text>
          <text x="390" y="106" textAnchor="end" fontSize="10" fill="#fca5a5" fontFamily="monospace">-$138.46</text>

          <rect x="110" y="118" width="320" height="20" rx="4" fill="rgba(255,255,255,0.1)" />
          <text x="120" y="132" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">OASDI / SS &nbsp; &nbsp; &nbsp; MEDICARE</text>
          <text x="390" y="132" textAnchor="end" fontSize="10" fill="#fca5a5" fontFamily="monospace">-$264.69</text>

          <rect x="110" y="144" width="320" height="22" rx="4" fill="rgba(255,255,255,0.22)" />
          <text x="120" y="159" fontSize="10" fill="#fff" fontFamily="sans-serif" fontWeight="700">NET PAY</text>
          <text x="390" y="159" textAnchor="end" fontSize="10" fill="#86efac" fontFamily="monospace" fontWeight="700">$2,706.39</text>

          {/* Arrow labels */}
          <line x1="440" y1="49" x2="510" y2="49" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="515" y="53" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">before taxes</text>
          <line x1="440" y1="157" x2="510" y2="157" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="515" y="161" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">take-home</text>
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
        How to Read Your Pay Stub Line by Line (2026 Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 8, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most people glance at the bottom line of their pay stub &mdash; the direct deposit amount &mdash; and never look further. But every row above that number tells a story. Understanding your pay stub line by line helps you catch payroll errors, verify your taxes are correct, and make smarter decisions about your benefits and withholding.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide walks through every section of a typical pay stub in plain English, using a real worked example from start to finish.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Header: Who, When, and Where
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        At the top of every pay stub you will find basic identifying information:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Employee name and ID</strong> &mdash; Make sure these match your records exactly. A typo in your Social Security number can cause problems with the IRS.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Pay period</strong> &mdash; The date range this paycheck covers (e.g., &ldquo;May 19 &ndash; June 1, 2026&rdquo;). Most workers are paid biweekly (every two weeks, 26 paychecks per year) or semi-monthly (twice a month, 24 paychecks per year).</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Pay date</strong> &mdash; The date the money is deposited into your account. This is usually a few days after the pay period ends.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Employer name and address</strong> &mdash; Your company&rsquo;s legal name. This will appear on your W-2 at year end.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Always verify the pay period dates. If a week is missing or overlapping, you may have been underpaid.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Gross Pay: Your Earnings Before Anything Is Taken Out
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Gross pay</strong> is the total amount you earned during the pay period before any taxes or deductions. For salaried workers, this is simply your annual salary divided by the number of pay periods. For hourly workers, it is your hours worked multiplied by your hourly rate, plus any overtime.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        Your pay stub might break gross pay into multiple rows:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Regular pay</strong> &mdash; Your base earnings at your standard rate</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Overtime pay</strong> &mdash; Hours worked beyond 40 per week, paid at 1.5x your hourly rate under federal law</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Bonus / commission</strong> &mdash; Any extra pay earned this period</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Holiday or PTO pay</strong> &mdash; Paid time off used during the period</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        All of these lines add up to your total gross pay. This is the number everything else is calculated from.
      </p>

      {/* Example box */}
      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#0369a1', marginBottom: '0.5rem' }}>
          Our Example: $90,000/year, paid biweekly
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
          We will use a single filer earning $90,000 per year in <a href="/new-york" style={{ color: '#0369a1', textDecoration: 'underline' }}>New York</a> for our worked example throughout this article.
          Their biweekly gross pay is $90,000 &divide; 26 = <strong style={{ fontFamily: "'JetBrains Mono', monospace" }}>$3,461.54</strong>.
        </p>
      </div>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal Income Tax Withholding
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This line shows how much federal income tax was withheld from your paycheck. On your pay stub it might be labeled <strong>Federal Withholding</strong>, <strong>FIT</strong> (Federal Income Tax), or <strong>Fed Tax</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The amount is determined by two things: your gross pay and the instructions you gave your employer on your{' '}
        <a href="/blog/understanding-your-w4" style={{ color: '#0369a1', textDecoration: 'underline' }}>W-4 form</a>.
        Your W-4 tells your employer your filing status (single, married, head of household) and any extra withholding adjustments.
        The IRS publishes withholding tables that employers use to calculate the right amount.{' '}
        <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1', textDecoration: 'underline' }}>
          (IRS Publication 15-T: Federal Income Tax Withholding Methods)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is <em>not</em> your final tax bill. It is an estimate. At tax time in April, you reconcile: if too much was withheld you get a refund, and if too little was withheld you owe the difference. You can read more about{' '}
        <a href="/blog/tax-brackets-explained" style={{ color: '#0369a1', textDecoration: 'underline' }}>how tax brackets work</a>{' '}
        to understand why your effective rate is lower than your marginal rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Our example:</strong> For a $90,000 single filer paid biweekly, federal withholding is approximately <strong style={{ fontFamily: "'JetBrains Mono', monospace" }}>$352.00</strong> per paycheck.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Income Tax Withholding
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states also withhold income tax. This line might say <strong>State Withholding</strong>, <strong>SIT</strong> (State Income Tax), or the two-letter state code like <strong>NY Tax</strong> or <strong>CA WH</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The rate depends entirely on where you live. Nine states have no state income tax at all, so this line will be $0 if you work in{' '}
        <a href="/texas" style={{ color: '#0369a1', textDecoration: 'underline' }}>Texas</a>,{' '}
        <a href="/florida" style={{ color: '#0369a1', textDecoration: 'underline' }}>Florida</a>,{' '}
        <a href="/nevada" style={{ color: '#0369a1', textDecoration: 'underline' }}>Nevada</a>, or the other six. Meanwhile, workers in{' '}
        <a href="/california" style={{ color: '#0369a1', textDecoration: 'underline' }}>California</a> can see rates up to 13.3%.{' '}
        <a href="/blog/state-income-tax-rates-ranked" style={{ color: '#0369a1', textDecoration: 'underline' }}>
          See state income tax rates ranked
        </a>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some states also have a <strong>local income tax</strong>. New York City residents, for example, pay an additional city income tax on top of New York State tax. This may appear as a separate line labeled <strong>Local Tax</strong> or <strong>City Tax</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Our example (New York):</strong> New York State tax for our $90,000 earner is roughly <strong style={{ fontFamily: "'JetBrains Mono', monospace" }}>$138.46</strong> per biweekly paycheck.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        OASDI and Medicare: Your FICA Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Two lines on your pay stub often confuse people: <strong>OASDI</strong> and <strong>Medicare</strong> (or <strong>MED</strong>). Together they make up your{' '}
        <a href="/blog/fica-taxes-explained" style={{ color: '#0369a1', textDecoration: 'underline' }}>FICA taxes</a>.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>OASDI</strong> stands for Old-Age, Survivors, and Disability Insurance &mdash; the official name for Social Security. The rate is <strong>6.2%</strong> of your gross pay, up to the annual wage base of <strong>$176,100</strong> in 2026. Once you hit that cap in a calendar year, no more Social Security tax is withheld for the rest of the year.{' '}
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1', textDecoration: 'underline' }}>(SSA.gov)</a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Medicare</strong> is taxed at <strong>1.45%</strong> on all earnings with no cap. High earners above $200,000 pay an extra 0.9% Additional Medicare Tax, but that kicks in at tax time rather than from withholding per paycheck.{' '}
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1', textDecoration: 'underline' }}>(IRS Topic 751)</a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer pays an equal amount of FICA taxes on your behalf on top of what you see deducted. The combined rate is 15.3% (12.4% Social Security + 2.9% Medicare), split evenly between you and your employer.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Our example:</strong> OASDI = $3,461.54 &times; 6.2% = <strong style={{ fontFamily: "'JetBrains Mono', monospace" }}>$214.62</strong>. Medicare = $3,461.54 &times; 1.45% = <strong style={{ fontFamily: "'JetBrains Mono', monospace" }}>$50.19</strong>. Combined FICA = <strong style={{ fontFamily: "'JetBrains Mono', monospace" }}>$264.81</strong>.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Pre-Tax Deductions: Benefits That Lower Your Tax Bill
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Below the tax lines, you will often see deductions for benefits you elected during open enrollment. These are <strong>pre-tax deductions</strong> &mdash; they are subtracted from your gross pay before income taxes are calculated, which lowers your taxable income. That means the government effectively shares in the cost.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        Common pre-tax deductions include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>401(k) / 403(b) contributions</strong> &mdash; Traditional retirement contributions reduce your taxable income dollar-for-dollar. In 2026 you can contribute up to $23,500 (or $31,000 if you are 50 or older). Learn more in our{' '}
          <a href="/blog/how-401k-contributions-affect-your-paycheck" style={{ color: '#0369a1', textDecoration: 'underline' }}>401(k) paycheck guide</a>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Health insurance premiums</strong> &mdash; Your share of employer-sponsored medical, dental, and vision premiums. This is often labeled <strong>MED INS</strong>, <strong>HLTH</strong>, or <strong>DENTAL</strong>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>HSA contributions</strong> &mdash; Health Savings Account deposits, tax-free triple: pre-tax going in, grows tax-free, and tax-free coming out for medical expenses. 2026 limit: $4,300 for individual coverage.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>FSA contributions</strong> &mdash; Flexible Spending Accounts for healthcare or dependent care. 2026 limit: $3,300 for healthcare FSA.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Commuter benefits</strong> &mdash; Pre-tax transit or parking benefits. In 2026 the monthly limit is $325 for transit and $325 for parking.
        </li>
      </ul>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Post-Tax Deductions: What Comes Out After Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some deductions happen <em>after</em> taxes are calculated. These do not reduce your current taxable income, but they may have other advantages:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Roth 401(k) contributions</strong> &mdash; You pay taxes on this money now, but all future growth and withdrawals are completely tax-free in retirement.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Supplemental life or disability insurance</strong> &mdash; Coverage beyond what your employer provides for free.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Wage garnishments</strong> &mdash; Court-ordered withholding for child support, back taxes, or defaulted student loans. These are mandatory and come out after taxes.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Union dues</strong> &mdash; Monthly membership fees if you belong to a union.
        </li>
      </ul>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Net Pay: The Number That Actually Matters
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Net pay</strong> (also called <strong>take-home pay</strong>) is what gets deposited into your bank account after all deductions. It is your gross pay minus every tax and deduction listed above.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have multiple bank accounts set up, your pay stub may split the net pay into separate direct deposit lines (e.g., $500 to savings and the remainder to checking). The sum of those lines should still equal your total net pay.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The gap between gross pay and net pay surprises many workers. For our $90,000 New York example, the biweekly net pay ends up around <strong style={{ fontFamily: "'JetBrains Mono', monospace" }}>$2,706</strong> &mdash; about 78% of gross. That means roughly 22% goes to taxes and mandatory deductions before a dollar hits the bank.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Year-to-Date (YTD) Totals
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most pay stubs include a <strong>Year-to-Date (YTD)</strong> column alongside the current period amounts. This shows your cumulative earnings and deductions from January 1 through this paycheck.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        YTD figures are useful for several reasons:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Tracking the Social Security wage cap</strong> &mdash; Once your YTD gross pay reaches $176,100 (in 2026), the OASDI deduction stops. You should see that line go to $0 on your next paycheck if you are a high earner.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Verifying W-2 accuracy</strong> &mdash; At year end, your YTD totals should closely match the boxes on your W-2. Box 1 (wages) on your W-2 is your gross pay minus pre-tax deductions.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Catching errors early</strong> &mdash; If a YTD total looks off, it is easier to investigate mid-year than after you have filed your taxes.
        </li>
      </ul>

      {/* Section 10 - Full worked example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Full Worked Example: $90,000 in New York vs. Texas
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is a side-by-side breakdown of one biweekly paycheck for a $90,000 single filer with no benefit deductions in two different states.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Pay Stub Line</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/new-york" style={{ color: '#0369a1', textDecoration: 'underline' }}>New York</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/texas" style={{ color: '#0369a1', textDecoration: 'underline' }}>Texas</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Pay', '$3,461.54', '$3,461.54', false],
              ['Federal Income Tax', '-$352.00', '-$352.00', false],
              ['New York State Tax', '-$138.46', '$0.00', false],
              ['New York City Tax', '-$64.23', '$0.00', false],
              ['OASDI (Social Security 6.2%)', '-$214.62', '-$214.62', false],
              ['Medicare (1.45%)', '-$50.19', '-$50.19', false],
              ['NY SDI / Unemployment', '-$2.00', '$0.00', false],
            ].map(([label, ny, tx, isGross], i) => (
              <tr key={String(label)} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isGross ? '#1e293b' : (String(ny).startsWith('-') ? '#dc2626' : '#475569') }}>{ny}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isGross ? '#1e293b' : (String(tx).startsWith('-') ? '#dc2626' : '#475569') }}>{tx}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Net Pay (per paycheck)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,640.04</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,844.73</td>
            </tr>
            <tr style={{ background: '#f0fdf4' }}>
              <td style={{ padding: '0.625rem 1rem', color: '#475569', fontSize: '0.875rem' }}>Annual take-home difference</td>
              <td style={{ padding: '0.625rem 1rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569', fontSize: '0.875rem' }}>&mdash;</td>
              <td style={{ padding: '0.625rem 1rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontSize: '0.875rem', fontWeight: 600 }}>+$5,330/yr</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Texas worker keeps about <strong>$5,330 more per year</strong> from the exact same salary &mdash; entirely due to the absence of state and city income taxes. That is a real and meaningful difference. You can explore how your own state compares using our{' '}
        <a href="/" style={{ color: '#0369a1', textDecoration: 'underline' }}>free paycheck calculator</a>.
      </p>

      {/* Section 11 - Common abbreviations */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common Pay Stub Abbreviations Decoded
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Pay stubs are notorious for cryptic abbreviations. Here is a quick reference guide:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Abbreviation</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Full Name</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>What It Is</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['FIT / Fed WH', 'Federal Income Tax', 'Federal income tax withheld'],
              ['SIT / State WH', 'State Income Tax', 'State income tax withheld'],
              ['OASDI / SS', 'Old-Age, Survivors, Disability Insurance', 'Social Security tax (6.2%)'],
              ['MED / Medicare', 'Medicare', 'Medicare tax (1.45%)'],
              ['FICA', 'Federal Insurance Contributions Act', 'Combined SS + Medicare taxes'],
              ['YTD', 'Year-to-Date', 'Running total since Jan 1'],
              ['GTL', 'Group Term Life', 'Employer-paid life insurance (imputed income)'],
              ['HSA', 'Health Savings Account', 'Pre-tax medical savings account'],
              ['FSA', 'Flexible Spending Account', 'Pre-tax healthcare or dependent care'],
              ['SDI', 'State Disability Insurance', 'Paid by employees in some states (CA, NJ, NY, RI, HI)'],
              ['OASDI WB', 'Wage Base', 'Max earnings subject to SS tax ($176,100 in 2026)'],
              ['EE / ER', 'Employee / Employer', 'Your share vs. company\'s share'],
            ].map(([abbr, full, desc], i) => (
              <tr key={String(abbr)} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#0369a1', fontWeight: 600, whiteSpace: 'nowrap' }}>{abbr}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{full}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What to Do If Something Looks Wrong
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Pay stub errors are more common than most people realize. Here is what to check and what to do:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Wrong filing status</strong> &mdash; If your W-4 still says &ldquo;single&rdquo; after you got married (or divorced), your withholding may be off. File an updated{' '}
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1', textDecoration: 'underline' }}>W-4</a>{' '}
          with your employer&rsquo;s HR department.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Hours miscounted</strong> &mdash; If you are hourly, verify that the total hours on your stub match what you recorded. Keep your own record just in case.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Missing deductions</strong> &mdash; If you signed up for benefits during open enrollment but do not see them deducted, contact HR. You may not be enrolled.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>OASDI still being withheld above the wage cap</strong> &mdash; If your YTD gross pay has passed $176,100 and you are still seeing OASDI withheld, notify your payroll department immediately.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Extra mystery deductions</strong> &mdash; Always ask HR to explain any line you do not recognize. It is your money.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS recommends using the{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1', textDecoration: 'underline' }}>
          Tax Withholding Estimator
        </a>{' '}
        at least once a year to make sure the right amount is coming out of each paycheck and you will not face a large tax bill in April.
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your pay stub is a financial snapshot of every dollar you earned and every dollar that was withheld. Once you know what each line means &mdash; gross pay, federal and state withholding, OASDI, Medicare, pre-tax benefits, post-tax deductions, and net pay &mdash; you can verify that your payroll is correct, make smarter benefit elections, and plan your finances with confidence.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most impactful variable most workers overlook is <strong>state income tax</strong>. Over a 30-year career, the difference between living in a high-tax state like{' '}
        <a href="/california" style={{ color: '#0369a1', textDecoration: 'underline' }}>California</a> or{' '}
        <a href="/new-york" style={{ color: '#0369a1', textDecoration: 'underline' }}>New York</a>{' '}
        versus a no-tax state like{' '}
        <a href="/texas" style={{ color: '#0369a1', textDecoration: 'underline' }}>Texas</a> or{' '}
        <a href="/florida" style={{ color: '#0369a1', textDecoration: 'underline' }}>Florida</a>{' '}
        can easily exceed $150,000 in total take-home pay.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Exact Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to get a complete breakdown — every line, every deduction, instantly.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#0369a1',
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
          <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1' }}>IRS Publication 15-T &mdash; Federal Income Tax Withholding Methods</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1' }}>SSA.gov &mdash; Social Security Contribution and Benefit Base 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1' }}>IRS Topic 751 &mdash; Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1' }}>IRS Tax Withholding Estimator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1' }}>U.S. Department of Labor &mdash; Overtime Pay</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1' }}>Tax Foundation &mdash; State Individual Income Tax Rates 2026</a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#0369a1', textDecoration: 'underline', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
