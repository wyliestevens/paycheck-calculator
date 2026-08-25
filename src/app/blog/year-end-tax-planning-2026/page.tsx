import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Year-End Tax Planning Checklist for 2026: 10 Steps Before December 31',
  description:
    'Ten actionable steps to cut your 2026 tax bill before December 31 — from maxing out retirement accounts to reviewing withholding. Real dollar examples and key deadlines.',
  alternates: { canonical: '/blog/year-end-tax-planning-2026' },
  keywords:
    'year end tax planning 2026, tax planning checklist 2026, reduce taxes before December 31, max 401k 2026, tax loss harvesting, year end financial checklist, lower tax bill 2026',
  openGraph: {
    title: 'Year-End Tax Planning Checklist for 2026: 10 Steps Before December 31',
    description:
      'Ten actionable steps to cut your 2026 tax bill before December 31 — with real dollar examples and key deadlines.',
  },
}

export default function YearEndTaxPlanning2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Year-end tax planning checklist illustration showing completed tasks and December 31 deadline"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Checklist panel */}
          <rect x="40" y="38" width="210" height="138" rx="6" fill="rgba(255,255,255,0.14)" />
          <text x="145" y="60" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif" letterSpacing="1">TAX CHECKLIST</text>

          <rect x="56" y="70" width="11" height="11" rx="2" fill="#fff" />
          <text x="62" y="80" textAnchor="middle" fontSize="9" fill="#059669" fontWeight="800" fontFamily="sans-serif">✓</text>
          <text x="78" y="80" fontSize="10" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">401(k) maxed out</text>

          <rect x="56" y="88" width="11" height="11" rx="2" fill="#fff" />
          <text x="62" y="98" textAnchor="middle" fontSize="9" fill="#059669" fontWeight="800" fontFamily="sans-serif">✓</text>
          <text x="78" y="98" fontSize="10" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">W-4 reviewed</text>

          <rect x="56" y="106" width="11" height="11" rx="2" fill="rgba(255,255,255,0.3)" />
          <text x="78" y="116" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">FSA spent down</text>

          <rect x="56" y="124" width="11" height="11" rx="2" fill="rgba(255,255,255,0.3)" />
          <text x="78" y="134" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Donations logged</text>

          <rect x="56" y="142" width="11" height="11" rx="2" fill="rgba(255,255,255,0.3)" />
          <text x="78" y="152" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">IRA contributed</text>

          <rect x="56" y="160" width="11" height="11" rx="2" fill="rgba(255,255,255,0.3)" />
          <text x="78" y="170" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Tax bill estimated</text>

          {/* Arrow */}
          <line x1="262" y1="107" x2="330" y2="107" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="5,4" />
          <polygon points="330,100 346,107 330,114" fill="rgba(255,255,255,0.35)" />

          {/* Calendar panel */}
          <rect x="355" y="38" width="210" height="138" rx="6" fill="rgba(255,255,255,0.14)" />
          <rect x="355" y="38" width="210" height="32" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="460" y="59" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">DECEMBER 31, 2026</text>
          <text x="460" y="98" textAnchor="middle" fontSize="32" fontWeight="800" fill="rgba(255,255,255,0.95)" fontFamily="monospace">128</text>
          <text x="460" y="118" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">days left to act</text>
          <line x1="385" y1="130" x2="535" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="460" y="148" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Most tax moves must be made</text>
          <text x="460" y="163" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">before midnight Dec 31</text>
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
        Year-End Tax Planning Checklist for 2026: 10 Steps to Take Before December 31
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 25, 2026 &middot; 10 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        December 31 is the most important deadline in your tax year &mdash; and it arrives faster than most people expect. Once midnight hits, the window on dozens of tax-reducing moves closes permanently for 2026. A few hours of planning in the fall can legally shave hundreds or even thousands of dollars off what you owe the IRS.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide walks through the ten most impactful steps W-2 employees, freelancers, and retirees can take before the calendar flips. Each step includes the key numbers for 2026 and a plain-English explanation of exactly how much it can save you.
      </p>

      {/* Step 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 1: Check Your Tax Withholding Right Now
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The fastest way to avoid a surprise tax bill &mdash; or to stop giving the IRS an interest-free loan &mdash; is to check whether your paycheck withholding matches what you actually owe. The IRS Tax Withholding Estimator at{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS.gov/W4App
        </a>{' '}
        takes about 15 minutes to run and gives you a precise recommendation.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Common reasons your withholding may be off this year:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>You got married, divorced, or had a child</li>
        <li style={{ marginBottom: '0.5rem' }}>You started a second job or your spouse went back to work</li>
        <li style={{ marginBottom: '0.5rem' }}>You had significant freelance or gig income</li>
        <li style={{ marginBottom: '0.5rem' }}>You sold investments and realized capital gains</li>
        <li style={{ marginBottom: '0.5rem' }}>You received a large bonus or RSU vest earlier in the year</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you find you are under-withheld, you can submit a new{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/fw4.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form W-4
        </a>{' '}
        to your employer today. The change takes effect the next pay period, so there are still several paychecks left in 2026 to catch up. If you are significantly under-withheld and cannot catch up through payroll alone, you can make a direct payment via IRS Direct Pay to avoid underpayment penalties.{' '}
        <a href="https://www.irs.gov/payments/irs-direct-pay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Direct Pay)
        </a>
      </p>

      {/* Step 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 2: Max Out Your 401(k) or 403(b) Before December 31
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Traditional 401(k) contributions reduce your federal taxable income dollar for dollar. The 2026 employee contribution limit is <strong>$23,500</strong>. If you are 50 or older, you can add a catch-up contribution of <strong>$7,500</strong>, for a total of <strong>$31,000</strong>. Workers aged 60&ndash;63 have a higher catch-up limit of <strong>$11,250</strong> under SECURE 2.0 rules, for a maximum of <strong>$34,750</strong>.{' '}
        <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 401(k) Contribution Limits)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is what maximizing a 401(k) saves a single filer earning $85,000 in the 22% bracket:
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
        $23,500 &times; 22% federal rate = <strong>$5,170 saved in federal tax alone</strong>
        <br />
        + $23,500 &times; 7.65% (no FICA on 401k contributions at some employers*) = <strong>up to $1,798 more</strong>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        *FICA still applies to 401(k) contributions for employees &mdash; the savings shown are federal income tax only. State income tax savings vary by state.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To increase your contribution percentage, log into your payroll or benefits portal and raise your deferral rate. Most employers need at least one pay cycle to process the change, so do not wait until December.
      </p>

      {/* Step 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 3: Contribute to a Traditional IRA (Deadline: April 15, 2027)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike 401(k) contributions, IRA contributions for 2026 can be made all the way until the tax-filing deadline: <strong>April 15, 2027</strong>. However, moving this to your year-end checklist means it does not slip through the cracks.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 2026 IRA contribution limit is <strong>$7,000</strong> ($8,000 if you are 50 or older). If you are not covered by a workplace retirement plan, your traditional IRA contributions are fully deductible regardless of income. If you or your spouse have a 401(k) at work, deductibility phases out at higher income levels.{' '}
        <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; IRA Deduction Limits)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you expect to be in a higher tax bracket in retirement, a <strong>Roth IRA</strong> (after-tax contributions, tax-free withdrawals) may be more valuable. The same $7,000 limit applies. Roth IRA eligibility phases out at $150,000 for single filers and $236,000 for married filing jointly in 2026.
      </p>

      {/* Step 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 4: Spend Down Your FSA Before It Expires
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Health FSA funds are subject to a &ldquo;use it or lose it&rdquo; rule. If your employer does not offer a grace period or rollover option, any balance left in your FSA after December 31 is forfeited. Check your FSA balance today and make eligible purchases before the deadline.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Eligible FSA expenses include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Glasses, contact lenses, and eye exams</li>
        <li style={{ marginBottom: '0.5rem' }}>Dental cleanings, fillings, and orthodontia</li>
        <li style={{ marginBottom: '0.5rem' }}>Prescription medications and over-the-counter drugs</li>
        <li style={{ marginBottom: '0.5rem' }}>Copays and deductibles for medical appointments</li>
        <li style={{ marginBottom: '0.5rem' }}>Medical equipment like blood pressure monitors</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Employers are allowed to offer either a 2.5-month grace period (until March 15, 2027) or a rollover of up to <strong>$660</strong> in 2026 &mdash; but they are not required to. Check your plan documents or call your HR department to find out which option, if any, applies to you.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p969.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 969, Health Savings Accounts and Other Tax-Favored Health Plans)
        </a>
      </p>

      {/* Step 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 5: Add to Your HSA (Deadline: April 15, 2027)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have a High-Deductible Health Plan (HDHP), a Health Savings Account (HSA) is one of the most powerful tax tools available. HSA contributions are pre-tax, grow tax-free, and come out tax-free when used for qualified medical expenses &mdash; a triple tax advantage no other account offers.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 2026 HSA contribution limits are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Self-only HDHP coverage:</strong> $4,300</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Family HDHP coverage:</strong> $8,550</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Catch-up (age 55+):</strong> additional $1,000</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike FSAs, HSA funds roll over indefinitely. Many financial planners recommend investing HSA funds and letting them grow tax-free for decades &mdash; using them to pay for healthcare in retirement when costs are highest.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; HSA Basics)
        </a>
      </p>

      {/* Step 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 6: Harvest Tax Losses in Your Investment Accounts
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have a taxable brokerage account with any investments that have lost value, you can sell them before December 31 to realize the loss and use it to offset gains from other investments &mdash; a strategy called <strong>tax-loss harvesting</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Capital losses first offset capital gains dollar for dollar. If your losses exceed your gains, you can use up to <strong>$3,000 of the remaining loss</strong> to offset ordinary income in 2026. Any loss beyond $3,000 carries forward to future tax years.{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 409: Capital Gains and Losses)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Important:</strong> Beware the <strong>wash-sale rule</strong>. If you sell a security at a loss and buy a &ldquo;substantially identical&rdquo; security within 30 days before or after the sale, the IRS disallows the loss. You can immediately buy a similar &mdash; but not identical &mdash; investment to keep your market exposure while still claiming the tax loss.{' '}
        <a href="https://www.irs.gov/publications/p550" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 550, Investment Income and Expenses)
        </a>
      </p>

      {/* Step 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 7: Make Charitable Contributions Before December 31
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Cash donations to qualified charities are deductible if you itemize. The standard deduction in 2026 is <strong>$15,000</strong> for single filers and <strong>$30,000</strong> for married filing jointly. If your total itemized deductions &mdash; state and local taxes (capped at $10,000), mortgage interest, charitable gifts, and others &mdash; exceed those amounts, you benefit from itemizing.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One powerful strategy for those near the standard deduction threshold is <strong>&ldquo;bunching&rdquo;</strong>: concentrating two years&rsquo; worth of charitable donations into a single year to clear the standard deduction, then taking the standard deduction the following year. A <strong>Donor-Advised Fund (DAF)</strong> is a flexible vehicle for bunching &mdash; you get the full deduction in the year of contribution, then grant to charities over time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are 70½ or older, a <strong>Qualified Charitable Distribution (QCD)</strong> lets you donate up to <strong>$108,000</strong> directly from your IRA to charity in 2026. The distribution counts toward your Required Minimum Distribution but is excluded from taxable income &mdash; better than a deduction because it reduces your Adjusted Gross Income directly.{' '}
        <a href="https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras-distributions-withdrawals" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; QCDs and IRA Distributions)
        </a>
      </p>

      {/* Step 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 8: Consider a Roth IRA Conversion Before Year-End
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A Roth conversion means moving money from a traditional IRA (pre-tax) to a Roth IRA (after-tax). The amount converted is added to your taxable income in 2026 &mdash; but all future growth and withdrawals from the Roth are tax-free.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Year-end conversions make the most sense when:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Your income was unusually low this year (job change, parental leave, sabbatical)</li>
        <li style={{ marginBottom: '0.5rem' }}>You have deductions that will offset the conversion income</li>
        <li style={{ marginBottom: '0.5rem' }}>You expect to be in a higher bracket in retirement</li>
        <li style={{ marginBottom: '0.5rem' }}>You want to reduce future Required Minimum Distributions</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Roth conversions must be completed by December 31 to count for 2026. There is no income limit &mdash; anyone with a traditional IRA can convert, regardless of earnings. However, conversions are irreversible after 2017, so model the tax impact carefully before converting.{' '}
        <a href="https://www.irs.gov/retirement-plans/roth-iras" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Roth IRAs)
        </a>
      </p>

      {/* Step 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 9: Account for Life Events That Changed Your Tax Picture
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Major life events dramatically affect your taxes, and you need to make sure your withholding, filing status, and deduction strategy reflect what actually happened in 2026. Key events to review:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Marriage:</strong> Your filing status changes to Married Filing Jointly. The 2026 standard deduction doubles to $30,000. Update your W-4 with your employer.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>New child:</strong> You may now claim the Child Tax Credit ($2,000 per qualifying child), Child and Dependent Care Credit, and Dependent Care FSA benefits. Update your W-4 Step 3.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Home purchase:</strong> Mortgage interest and property taxes may now push you over the standard deduction threshold, making itemizing worthwhile.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Job change:</strong> If you changed jobs mid-year, each employer calculates withholding independently as if you worked there all year. Combined, you may be significantly under-withheld.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Retirement:</strong> Switching from earned income to retirement withdrawals changes which credits and deductions you qualify for, and may trigger Required Minimum Distributions.</li>
      </ul>

      {/* Step 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 10: Run a Full Tax Estimate Now — Not in April
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The single most valuable thing you can do in the fall is calculate your approximate 2026 tax liability now, while you still have time to act. Use the IRS Withholding Estimator or a tax software preview to project your tax bill. Focus on these inputs:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Total year-to-date wages from all W-2 jobs</li>
        <li style={{ marginBottom: '0.5rem' }}>Total federal tax withheld to date</li>
        <li style={{ marginBottom: '0.5rem' }}>Any freelance, investment, or rental income</li>
        <li style={{ marginBottom: '0.5rem' }}>Projected 401(k) contributions for the remainder of the year</li>
        <li style={{ marginBottom: '0.5rem' }}>Expected itemized deductions vs. the standard deduction</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you will owe more than $1,000 and your withholding covers less than 90% of your 2026 tax liability (or less than 100% of your 2025 tax bill), you may be subject to an underpayment penalty.{' '}
        <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 306: Penalty for Underpayment of Estimated Tax)
        </a>
      </p>

      {/* Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Year-End Planning at $80,000 (Single Filer)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s see how year-end actions can reduce a real tax bill. Assume a single filer earning $80,000 in wages who has contributed $10,000 to their 401(k) so far this year and plans to take the standard deduction.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Baseline: No Additional Year-End Actions
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross wages', '$80,000'],
              ['401(k) contributions (already made)', '−$10,000'],
              ['Standard deduction', '−$15,000'],
              ['Taxable income', '$55,000'],
              ['Federal tax (10/12/22% brackets)', '$7,706'],
              ['Effective federal rate', '9.6%'],
            ].map(([label, value], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 5 ? '#1e293b' : (value.startsWith('−') ? '#dc2626' : '#1e293b'), fontWeight: i === 5 ? 700 : 400 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        After Year-End Moves: Max Out 401(k) + IRA
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross wages', '$80,000'],
              ['401(k) contributions (maxed to $23,500)', '−$23,500'],
              ['Traditional IRA contribution', '−$7,000'],
              ['Standard deduction', '−$15,000'],
              ['Taxable income', '$34,500'],
              ['Federal tax (10/12% brackets)', '$3,858'],
              ['Effective federal rate', '4.8%'],
              ['Tax savings vs. baseline', '$3,848'],
            ].map(([label, value], i) => (
              <tr key={label} style={{ background: i === 7 ? '#ecfdf5' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: i === 7 ? '#1e293b' : '#475569', fontWeight: i === 7 ? 700 : 400 }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 7 ? '#059669' : (value.startsWith('−') ? '#dc2626' : '#1e293b'), fontWeight: i >= 5 ? 700 : 400 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        By maxing out the 401(k) and contributing to a traditional IRA, this filer cuts their federal tax bill from <strong>$7,706 to $3,858</strong> &mdash; saving <strong>$3,848 in federal tax alone</strong>. The money saved on taxes goes into tax-advantaged accounts that continue growing. State income tax savings would add to these figures depending on the state.
      </p>

      {/* Deadlines Table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key 2026 Year-End Tax Deadlines
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Action</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Deadline</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Max 401(k) / 403(b) contributions', 'December 31, 2026', 'Must be contributed via payroll; update deferral now'],
              ['Spend FSA balance', 'December 31, 2026', 'Check if your plan has grace period or rollover'],
              ['Make charitable cash donations', 'December 31, 2026', 'Credit card charge by Dec 31 counts; check receipt'],
              ['Tax-loss harvesting (sell investments)', 'December 31, 2026', 'Trade must settle; place orders by Dec 28–29'],
              ['Roth IRA conversion', 'December 31, 2026', 'Must complete by year-end; no recharacterization allowed'],
              ['RMD for age 73+ IRA owners', 'December 31, 2026', 'First-year RMD may be deferred to April 1, 2027'],
              ['Traditional or Roth IRA contribution', 'April 15, 2027', 'Can be made after year-end; no deadline extension'],
              ['HSA contribution', 'April 15, 2027', 'Can be made after year-end up to filing deadline'],
              ['SEP IRA contribution (self-employed)', 'October 15, 2027', 'If you file an extension'],
            ].map(([action, deadline, notes], i) => (
              <tr key={action} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{action}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: deadline === 'December 31, 2026' ? '#dc2626' : '#059669', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{deadline}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Year-end tax planning is not complicated &mdash; it is a short list of concrete actions, most of which can be completed in an afternoon. The key is knowing your deadlines and acting while you still can. The moves that must happen by December 31 &mdash; maxing your 401(k), spending your FSA, harvesting losses, and making charitable gifts &mdash; are all time-critical. Others, like IRA contributions and HSA top-ups, give you until April, but earlier is better.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The worked example above shows that a single earner at $80,000 can cut their federal tax bill nearly in half through retirement contributions alone &mdash; from $7,706 to $3,858. That $3,848 in savings does not disappear; it goes into accounts that grow tax-advantaged for decades. Combined with state tax savings, loss harvesting, and charitable deductions, the total benefit of a solid year-end plan regularly exceeds $5,000 for a middle-income household.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Start with Step 10 &mdash; run a quick tax estimate &mdash; so you know exactly where you stand. Then work through the list from the top, prioritizing the December 31 hard deadlines first.
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
          See How Retirement Contributions Affect Your Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see your take-home pay after 401(k) contributions, taxes, and deductions &mdash; broken down by state and federal.
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
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 401(k) and Profit-Sharing Plan Contribution Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; IRA Deduction Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p969.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 969, HSAs and Other Tax-Favored Health Plans</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 409: Capital Gains and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p550" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 550: Investment Income and Expenses (wash-sale rule)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-iras-distributions-withdrawals" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Qualified Charitable Distributions from IRAs</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/roth-iras" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Roth IRAs</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 306: Penalty for Underpayment of Estimated Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/payments/irs-direct-pay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Direct Pay</a>
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
