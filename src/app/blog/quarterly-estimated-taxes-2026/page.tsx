import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quarterly Estimated Taxes 2026: Who Owes Them and How to Pay',
  description:
    'Freelancers, gig workers, and anyone with untaxed income must make quarterly estimated tax payments to the IRS in 2026 — or face an underpayment penalty. Here is the complete guide: deadlines, safe harbor rules, and a worked example at $80,000.',
  alternates: { canonical: '/blog/quarterly-estimated-taxes-2026' },
  keywords:
    'quarterly estimated taxes 2026, quarterly tax payments, IRS estimated taxes, self-employed estimated taxes, Form 1040-ES, safe harbor tax rule, underpayment penalty 2026, when to pay quarterly taxes',
  openGraph: {
    title: 'Quarterly Estimated Taxes 2026: Who Owes Them and How to Pay',
    description:
      'Freelancers, gig workers, and anyone with untaxed income must make quarterly estimated tax payments in 2026. Here are the deadlines, safe harbor rules, and a full worked example.',
  },
}

export default function QuarterlyEstimatedTaxes2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Quarterly estimated tax calendar showing four 2026 payment deadlines"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Title */}
          <text x="300" y="48" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">2026 QUARTERLY ESTIMATED TAX DEADLINES</text>
          {/* Q1 box */}
          <rect x="35" y="60" width="115" height="95" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="92" y="82" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Q1</text>
          <text x="92" y="100" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Apr 15</text>
          <text x="92" y="117" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Jan – Mar</text>
          <text x="92" y="133" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">income</text>
          {/* Q2 box */}
          <rect x="162" y="60" width="115" height="95" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="219" y="82" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Q2</text>
          <text x="219" y="100" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Jun 17</text>
          <text x="219" y="117" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Apr – May</text>
          <text x="219" y="133" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">income</text>
          {/* Q3 box */}
          <rect x="289" y="60" width="115" height="95" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="346" y="82" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Q3</text>
          <text x="346" y="100" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Sep 15</text>
          <text x="346" y="117" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Jun – Aug</text>
          <text x="346" y="133" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">income</text>
          {/* Q4 box */}
          <rect x="416" y="60" width="150" height="95" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="491" y="82" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Q4</text>
          <text x="491" y="100" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Jan 15, 2027</text>
          <text x="491" y="117" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Sep – Dec</text>
          <text x="491" y="133" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">income</text>
          {/* Bottom note */}
          <text x="300" y="172" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Miss a deadline = underpayment penalty (currently ~8% annualized)</text>
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
        Quarterly Estimated Taxes 2026: Who Owes Them and How to Pay
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 1, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are a freelancer, independent contractor, gig worker, small business owner, or anyone who earns significant income without an employer withholding taxes, the IRS expects you to <strong>prepay your taxes four times per year</strong> &mdash; not just once at filing time. These are called <strong>quarterly estimated tax payments</strong>, and missing them can trigger a penalty even if you pay your full tax bill by the April deadline.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains who has to make estimated payments, the four 2026 deadlines, how to calculate what you owe, how to actually send the money to the IRS, and how to use the safe harbor rules to avoid any penalty entirely.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Quarterly Payments Exist
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        W-2 employees never think about estimated taxes because their employer handles it automatically &mdash; every paycheck has federal income tax, Social Security, and Medicare withheld before the money ever reaches them. The IRS receives a steady stream of payments all year long.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When there is no employer to do the withholding &mdash; freelancers, gig workers, landlords receiving rental income, investors taking capital gains, or anyone receiving significant untaxed income &mdash; the IRS still expects to be paid throughout the year. The <strong>pay-as-you-go</strong> system was designed so that the government does not wait until April to collect all the taxes due on income earned the previous year.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Estimated Taxes)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Must Pay Quarterly Estimated Taxes?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS requires you to make quarterly estimated payments if <strong>both</strong> of the following are true:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>You expect to owe <strong>at least $1,000 in federal income tax</strong> after subtracting your withholding and refundable credits.</li>
        <li style={{ marginBottom: '0.75rem' }}>Your withholding and credits will cover <strong>less than 90%</strong> of what you will owe for 2026, <strong>OR less than 100%</strong> of what you owed for 2025 (whichever is smaller).</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In plain English: if you have a side hustle that generates $10,000 in profit, you probably need to make estimated payments. If you have a W-2 job but also sell investments with large capital gains, you may need to make estimated payments on those gains. If you switch from a W-2 job to full-time freelancing, you will almost certainly need to start making estimated payments immediately.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p505.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 505 &mdash; Tax Withholding and Estimated Tax)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Common situations requiring estimated payments:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Self-employment income (freelancers, contractors, sole proprietors)</li>
        <li style={{ marginBottom: '0.5rem' }}>Gig economy income (Uber, DoorDash, Etsy, Airbnb)</li>
        <li style={{ marginBottom: '0.5rem' }}>Rental income with no withholding</li>
        <li style={{ marginBottom: '0.5rem' }}>Investment income: dividends, capital gains, crypto sales</li>
        <li style={{ marginBottom: '0.5rem' }}>Alimony received (for agreements finalized before 2019)</li>
        <li style={{ marginBottom: '0.5rem' }}>Pension or annuity income with inadequate withholding elected</li>
        <li style={{ marginBottom: '0.5rem' }}>Unemployment benefits (if you did not elect withholding via Form W-4V)</li>
      </ul>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Four 2026 Quarterly Deadlines
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Despite being called &ldquo;quarterly,&rdquo; the payment periods are <em>not</em> equal calendar quarters. The IRS uses an unusual schedule:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Payment</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Period</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Q1', 'January 1 – March 31', 'April 15, 2026'],
              ['Q2', 'April 1 – May 31', 'June 17, 2026'],
              ['Q3', 'June 1 – August 31', 'September 15, 2026'],
              ['Q4', 'September 1 – December 31', 'January 15, 2027'],
            ].map(([q, period, due], i) => (
              <tr key={q} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{q}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{period}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#2563eb', fontWeight: 600 }}>{due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that Q2 covers only two months (April and May), while Q4 covers four months. This quirk dates back to the original estimated tax schedule the IRS established. If a due date falls on a weekend or federal holiday, it moves to the next business day.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Q4 payment due January 15, 2027 can be skipped entirely if you file your full 2026 tax return and pay any remaining balance by <strong>February 2, 2027</strong>.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/f1040es.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Form 1040-ES, 2026)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Calculate What You Owe Each Quarter
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS provides{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/f1040es.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1040-ES
        </a>{' '}
        with a worksheet to estimate your annual tax liability. The basic process is:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>Estimate your total gross income for 2026 (wages, self-employment revenue, investment income, etc.).</li>
        <li style={{ marginBottom: '0.75rem' }}>Subtract your estimated deductions (standard deduction or itemized) and any above-the-line deductions like the self-employment tax deduction.</li>
        <li style={{ marginBottom: '0.75rem' }}>Apply the 2026 federal income tax brackets to get your estimated income tax.</li>
        <li style={{ marginBottom: '0.75rem' }}>Add self-employment tax if applicable (15.3% on net SE income up to $168,600, then 2.9% above that).</li>
        <li style={{ marginBottom: '0.75rem' }}>Subtract any expected withholding (from W-2 jobs, retirement distributions, etc.) and refundable credits.</li>
        <li style={{ marginBottom: '0.75rem' }}>Divide the remaining amount by 4. That is your quarterly payment.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Alternatively, use the IRS&rsquo;s free online{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Tax Withholding Estimator
        </a>{' '}
        to get a more precise figure based on your actual situation.
      </p>

      {/* Worked example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Freelancer Earning $80,000 in 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Meet Alex, a full-time freelance graphic designer earning $80,000 in net self-employment income in 2026 &mdash; no W-2 job, no other withholding. Here is how Alex calculates quarterly payments:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Self-Employment Tax
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        Net SE income: $80,000<br />
        &times; 92.35% (IRS adjustment): $73,880<br />
        &times; 15.3% SE tax rate = <strong>$11,304</strong><br />
        <br />
        Deductible SE tax (half): $5,652
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Federal Income Tax
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        Gross income:            $80,000<br />
        Less SE tax deduction: &minus; $5,652<br />
        Less standard deduction:&minus;$15,000<br />
        Taxable income:          $59,348<br />
        <br />
        10% on $11,925:           $1,193<br />
        12% on $36,550 ($11,925–$48,475): $4,386<br />
        22% on $10,873 ($48,475–$59,348): $2,392<br />
        Federal income tax:      <strong>$7,971</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 3: Total Tax and Quarterly Payment
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Component</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Per Quarter</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Self-employment tax', '$11,304', '$2,826'],
              ['Federal income tax', '$7,971', '$1,993'],
            ].map(([label, annual, quarter], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{annual}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{quarter}</td>
              </tr>
            ))}
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$19,275</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#2563eb' }}>$4,819</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Alex should send approximately <strong>$4,819 to the IRS each quarter</strong> (April 15, June 17, September 15, January 15). On $80,000 in gross self-employment income, the total federal tax burden &mdash; both self-employment tax and income tax &mdash; is about <strong>24.1%</strong> of gross income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most self-employed people also owe <strong>state income tax</strong>. If Alex lives in a state with a 5% income tax, add another $2,967 per year ($742 per quarter), bringing the total quarterly payment to roughly $5,561. Check your state&rsquo;s requirements, as many states have their own quarterly estimated tax schedule with separate forms and deadlines.
      </p>

      {/* Section 5 — Safe Harbor */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Safe Harbor Rule: How to Guarantee You Avoid a Penalty
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Estimating your annual income precisely is hard &mdash; especially when your freelance revenue fluctuates month to month. The IRS provides a <strong>safe harbor rule</strong> that lets you avoid the underpayment penalty even if you end up owing more than expected. There are two safe harbor thresholds, and you must hit at least one:{' '}
        <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 306: Penalty for Underpayment of Estimated Tax)
        </a>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Safe Harbor Method</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Requirement</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Who Uses It</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['90% of current-year tax', 'Pay 90% of what you will actually owe for 2026', 'Anyone who can estimate income accurately'],
              ["100% of prior-year tax", "Pay 100% of your 2025 tax liability (from your 2025 return)", 'Best if 2026 income is similar to 2025'],
              ['110% of prior-year tax', 'Pay 110% of your 2025 tax liability', 'Required if your 2025 AGI exceeded $150,000'],
            ].map(([method, req, who], i) => (
              <tr key={method} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{method}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{req}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The prior-year safe harbor is the simplest approach for most people. If Alex owed $18,500 in total federal tax for 2025, they can simply pay four equal installments of <strong>$4,625</strong> ($18,500 &divide; 4) in 2026 and avoid the underpayment penalty &mdash; regardless of whether 2026 income ends up higher or lower.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For higher earners: if Alex&rsquo;s 2025 adjusted gross income (AGI) was over $150,000, the threshold shifts to <strong>110%</strong> of the prior-year tax, meaning $18,500 &times; 110% = $20,350 total, or $5,088 per quarter.
      </p>

      {/* Section 6 — Underpayment Penalty */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens If You Miss a Payment or Underpay?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS charges an <strong>underpayment penalty</strong> calculated as interest on the amount you should have paid but did not. The penalty rate for 2026 is the <strong>federal short-term interest rate plus 3 percentage points</strong> &mdash; currently around <strong>7% to 8% annualized</strong>. This rate adjusts quarterly based on IRS announcements.{' '}
        <a href="https://www.irs.gov/newsroom/irs-interest-rates-remain-the-same-for-second-quarter-of-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Interest Rate Announcements)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Key things to understand about the penalty:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>It is not a flat fee.</strong> It accumulates from the due date of each quarterly payment to the date you pay, or April 15, whichever comes first. Missing Q1&rsquo;s April 15 deadline costs more in penalty than missing Q4&rsquo;s January deadline, simply because there are more days.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Paying late is better than not paying at all.</strong> If you missed the September 15 deadline, send your Q3 payment as soon as possible &mdash; the penalty stops accruing when you pay.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>The IRS calculates it for you</strong> using Form 2210. You can also calculate it yourself and attach Form 2210 to your return, especially if income was uneven throughout the year (the &ldquo;annualized income installment method&rdquo; can reduce the penalty if you earned more later in the year).</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>There is no criminal penalty</strong> for underpaying estimated taxes. This is purely a financial charge, not a filing violation.</li>
      </ul>

      {/* Section 7 — How to Pay */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Actually Make the Payment
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There are several ways to pay the IRS your quarterly estimated taxes. The easiest and fastest is electronic:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Option 1: IRS Direct Pay (Free)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Go to{' '}
        <a href="https://www.irs.gov/payments/direct-pay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Direct Pay
        </a>{' '}
        and make a direct bank debit. It is free, instant, and gives you a confirmation number. Select &ldquo;Estimated Tax&rdquo; as the reason for payment and choose the correct tax year (2026). No registration required.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Option 2: EFTPS — Electronic Federal Tax Payment System (Free)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The{' '}
        <a href="https://www.eftps.gov/eftps/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Electronic Federal Tax Payment System (EFTPS)
        </a>{' '}
        requires a one-time registration (takes 5&ndash;7 business days for mailed PIN). Once enrolled, you can schedule payments months in advance and view your full payment history. Preferred by those who make frequent IRS payments.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Option 3: Mail a Check With a 1040-ES Voucher
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Download{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/f1040es.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1040-ES
        </a>
        , fill out the payment voucher for the correct quarter, and mail it with a check payable to &ldquo;United States Treasury.&rdquo; Write your Social Security number and &ldquo;2026 Form 1040-ES&rdquo; on the check. Mail it to the address listed in the form&rsquo;s instructions for your state. Allow 5&ndash;7 business days for mail delivery &mdash; the postmark date counts as the payment date.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Option 4: Debit or Credit Card (Small Fee)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can pay by debit or credit card through IRS-approved payment processors listed on{' '}
        <a href="https://www.irs.gov/payments/pay-your-taxes-by-debit-or-credit-card" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS.gov/payments
        </a>
        . Debit cards cost a flat fee of about $2.20. Credit cards typically charge about 1.82% of the payment amount. This is only worth it if you earn significant credit card rewards.
      </p>

      {/* Section 8 — Practical tips */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Practical Tips for Managing Quarterly Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Experienced self-employed workers use a few common strategies to stay on top of quarterly payments without running short on cash:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Set aside 25–30% of every payment you receive.</strong> Transfer it immediately to a dedicated savings account. This prevents you from accidentally spending money that belongs to the IRS. For most self-employed people at moderate income levels, 25% covers federal income tax plus self-employment tax. If you live in a high-tax state, aim for 30–35%.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Use the prior-year safe harbor.</strong> Instead of estimating each year from scratch, look at last year&rsquo;s tax return. Find the total tax on line 24 of Form 1040. Divide by 4. Pay that amount each quarter. You will never owe a penalty &mdash; and if your income drops in 2026, you will get a refund.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Track deductible business expenses throughout the year.</strong> Every dollar of legitimate business expense (software subscriptions, professional fees, home office, equipment) reduces your net self-employment income and therefore reduces both your income tax and your self-employment tax. Good bookkeeping makes quarterly estimates more accurate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Reconcile at the end of each quarter.</strong> After paying your quarterly amount, compare what you paid to your actual year-to-date net income. If you have been earning significantly more or less than expected, adjust the next quarter&rsquo;s payment accordingly.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Schedule payments early.</strong> If using IRS Direct Pay or EFTPS, schedule your payment a few days before the deadline to avoid any last-minute technical issues. EFTPS even lets you schedule all four payments at the start of the year.
        </li>
      </ul>

      {/* Section 9 — State taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Do Not Forget State Quarterly Estimated Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states with an income tax have their own quarterly estimated tax requirement, mirroring the federal system but with different forms and sometimes different deadlines. For example:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>California uses Form 540-ES with deadlines of April 15, June 17, September 15, and January 15.</li>
        <li style={{ marginBottom: '0.5rem' }}>New York uses Form IT-2105 with the same IRS deadlines in most years.</li>
        <li style={{ marginBottom: '0.5rem' }}>Texas, Florida, Nevada, and the other zero-income-tax states have no quarterly income tax payments required.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Check your state&rsquo;s department of revenue website for exact forms, deadlines, and thresholds. State underpayment penalties also apply independently of the federal penalty.
      </p>

      {/* Section 10 — Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Quarterly estimated taxes are required for anyone who earns significant income without withholding &mdash; freelancers, gig workers, investors, landlords, and many others. The four 2026 federal deadlines are <strong>April 15, June 17, September 15, and January 15, 2027</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The simplest way to avoid any penalty: use the prior-year safe harbor. Find your total tax from last year&rsquo;s return and divide by four. Pay that amount each quarter. If your 2025 AGI exceeded $150,000, multiply by 110% first.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The best payment method is IRS Direct Pay &mdash; free, instant, and available 24/7. If you prefer to plan ahead, EFTPS lets you schedule all four payments at once at the start of the year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed workers at $80,000 in net income should expect to set aside roughly <strong>$4,800 per quarter</strong> for federal taxes alone. Add your state rate on top, and the typical recommendation is to reserve <strong>25–30%</strong> of every payment you receive throughout the year.
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
          Calculate Your Estimated Tax Instantly
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your income and state to see your full tax breakdown &mdash; federal, FICA, state, and what you actually take home each paycheck.
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
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Estimated Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p505.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 505 &mdash; Tax Withholding and Estimated Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/f1040es.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Form 1040-ES &mdash; Estimated Tax for Individuals (2026)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 306: Penalty for Underpayment of Estimated Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Tax Withholding Estimator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/payments/direct-pay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Direct Pay</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.eftps.gov/eftps/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>EFTPS &mdash; Electronic Federal Tax Payment System</a>
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
