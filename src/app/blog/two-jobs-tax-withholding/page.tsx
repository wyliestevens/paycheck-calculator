import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Multiple Jobs Affect Your Taxes in 2026',
  description:
    'Working two jobs can leave you owing thousands at tax time if your withholding isn\'t adjusted. Here\'s the exact math — and how to fix it with your W-4.',
  alternates: { canonical: '/blog/two-jobs-tax-withholding' },
  keywords:
    'two jobs taxes 2026, multiple jobs withholding, second job tax rate, two jobs W-4, working two jobs taxes owe money, how two jobs affect taxes',
  openGraph: {
    title: 'How Multiple Jobs Affect Your Taxes in 2026',
    description:
      'Working two jobs can leave you owing thousands at tax time if your withholding isn\'t adjusted. Here\'s the exact math — and how to fix it with your W-4.',
  },
}

export default function TwoJobsTaxWithholding() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Two jobs and tax withholding illustration"
        >
          <rect width="600" height="200" rx="12" fill="#d97706" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Job 1 block */}
          <rect x="40" y="55" width="140" height="90" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="110" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">JOB 1</text>
          <text x="110" y="108" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="monospace">$45k</text>
          <text x="110" y="130" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">employer withholds</text>
          {/* Plus sign */}
          <text x="215" y="108" textAnchor="middle" fontSize="36" fontWeight="700" fill="rgba(255,255,255,0.8)" fontFamily="monospace">+</text>
          {/* Job 2 block */}
          <rect x="245" y="55" width="140" height="90" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="315" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">JOB 2</text>
          <text x="315" y="108" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="monospace">$20k</text>
          <text x="315" y="130" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">employer withholds</text>
          {/* Arrow */}
          <line x1="402" y1="100" x2="445" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="445,92 460,100 445,108" fill="rgba(255,255,255,0.6)" />
          {/* Result block */}
          <rect x="468" y="55" width="112" height="90" rx="8" fill="rgba(255,255,255,0.25)" />
          <text x="524" y="85" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">IRS SEES</text>
          <text x="524" y="106" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="monospace">$65k</text>
          <text x="524" y="128" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">combined</text>
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
        How Multiple Jobs Affect Your Taxes in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 20, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Millions of Americans work more than one job. Whether it is a side gig, a part-time weekend position, or two full-time careers, having multiple income sources changes how your taxes work — and it often leads to a nasty surprise at tax time if you are not careful.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The core problem: each employer withholds taxes as if that job is your <em>only</em> source of income. They have no idea you have a second job. That means the standard deduction gets applied twice, and your combined income may fall into higher tax brackets than either employer accounted for. The result is that you often end up <strong>under-withheld</strong> — and you owe the difference when you file in April.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how two-job taxation works, shows you the dollar impact with a real example, and walks you through the W-4 fix that prevents a big tax bill.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Big Misconception: Tax Rates and Multiple Jobs
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before getting into the withholding problem, let&rsquo;s clear up a common myth. Many people believe that taking a second job will push them into a much higher tax bracket and they will somehow end up with less money overall. That is <strong>not how it works</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The U.S. uses a <strong>progressive marginal tax system</strong>. That means you only pay the higher rate on the dollars that fall within the higher bracket — not on all your income. Here are the 2026 federal tax brackets for a single filer:
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
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#d97706', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn $45,000 from job one and $20,000 from job two, your combined income is $65,000. After the $15,000 standard deduction, your <strong>taxable income is $50,000</strong>. That puts you mostly in the 12% bracket, with just $1,525 taxed at 22%. A raise always increases your take-home pay — you can never &ldquo;lose money&rdquo; by earning more.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 2026 Tax Inflation Adjustments)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Real Problem: Under-Withholding
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The actual risk with multiple jobs is not that you pay more tax — it is that <strong>not enough tax gets withheld</strong> from your paychecks during the year. Here is why that happens.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer uses your W-4 to calculate how much federal income tax to withhold. But your employer only knows about <em>their</em> payroll. They do not know you have a second job paying you an additional $20,000. So each employer makes a common mistake:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Job 1</strong> withholds taxes assuming $45,000 is your full income. It applies the entire $15,000 standard deduction against your $45,000 salary.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Job 2</strong> withholds taxes assuming $20,000 is your full income. It also applies the $15,000 standard deduction against your $20,000 salary.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The standard deduction is a <em>once-per-person</em> benefit. You can only claim it once when you file your return. But each employer effectively gave you a separate deduction, meaning your combined withholding is far lower than what the IRS expects.
      </p>

      {/* Section 3 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $45,000 + $20,000 = A $2,052 Surprise
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s run the exact numbers for a single filer with two jobs: a $45,000 primary job and a $20,000 part-time job. Both employers withhold as if their job is the only one.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Job 1 ($45k)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Job 2 ($20k)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Combined</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Income', '$45,000', '$20,000', '$65,000'],
              ['Standard Deduction Applied', '−$15,000', '−$15,000', '−$15,000 (once)'],
              ['Taxable Income', '$30,000', '$5,000', '$50,000'],
              ['Federal Tax Withheld/Owed', '$3,362', '$500', '$5,914'],
            ].map(([label, j1, j2, combined], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{j1}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{j2}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 600 }}>{combined}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef2f2' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>
                Total Withheld vs. Owed
              </td>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>
                $3,362 + $500 = $3,862
              </td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>
                OWED: $2,052
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The combined withholding is only $3,862, but the IRS expects $5,914 on $50,000 of taxable income. That leaves a <strong>$2,052 gap</strong>. If you do not fix your W-4, you will owe that entire amount in April — plus a possible underpayment penalty.
      </p>

      <div
        style={{
          padding: '1.25rem 1.5rem',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#dc2626', marginBottom: '0.5rem' }}>
          The IRS underpayment penalty
        </p>
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: '#475569', margin: 0 }}>
          If you owe more than $1,000 at tax time AND you did not pay enough taxes during the year, the IRS can charge an underpayment penalty. In 2026 it is typically around 7–8% of the shortfall. The surest way to avoid it is to fix your withholding before the end of the year.{' '}
          <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; Topic 306: Penalty for Underpayment)
          </a>
        </p>
      </div>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Fix It: The W-4 Multiple Jobs Checkbox
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The fix is straightforward: update your W-4 to tell your employer (or employers) that you have multiple jobs. The IRS redesigned the W-4 in 2020 specifically to handle this situation. Here are three ways to address it.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        Option 1: Check the Box in Step 2 (Easiest)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On your W-4, Step 2 has a checkbox labeled &ldquo;Multiple Jobs or Spouse Works.&rdquo; If you check this box, your employer uses a higher withholding table that accounts for your income falling into a higher combined bracket. This is the simplest option and works well when the two jobs pay similar amounts.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You should check this box on your W-4 for the <em>higher-paying</em> job. For your lower-paying job, you can also check the box, or leave it blank (if you are covering the shortfall via extra withholding on the main job).{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; About Form W-4)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        Option 2: Use the IRS Withholding Estimator (Most Accurate)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS has a free online tool called the{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Tax Withholding Estimator
        </a>
        . You enter both jobs&rsquo; income, your filing status, and any deductions or credits. It calculates exactly how much should be withheld and tells you what to put on your W-4(s) to get it right.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This approach is the most precise. It is especially helpful if one job pays significantly more than the other, or if you have other income (freelance, investments, rental income) to factor in.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        Option 3: Add Extra Withholding in Step 4(c)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you already know your approximate shortfall, you can add a flat extra dollar amount to each paycheck in Step 4(c) of your W-4. Using the example above, the $2,052 shortfall spread across 26 biweekly paychecks comes out to about <strong>$79 extra per paycheck</strong>. You can add that to your primary job&rsquo;s W-4 and your withholding will be right on target by year-end.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What About FICA Taxes (Social Security and Medicare)?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA taxes — Social Security (6.2%) and Medicare (1.45%) — work a bit differently when you have multiple jobs.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Medicare:</strong> Every employer withholds 1.45% on all wages, no matter how many jobs you have. If your combined income is under $200,000 as a single filer, there is no issue. If you earn over $200,000 combined, you owe an additional 0.9% Medicare surtax — which you pay when you file your return (employers only withhold the extra 0.9% once your wages from a single employer exceed $200,000).{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 751)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Social Security:</strong> You pay 6.2% on wages up to $168,600 per year (the 2026 wage base). Each employer withholds on their own payroll independently. If your combined wages from all jobs stay below $168,600, there is no problem — withholding is correct. If your combined wages <em>exceed</em> $168,600 but no single employer paid you that much, both employers will keep withholding Social Security past the point they should. The result is <strong>over-withholding</strong> of Social Security, which you get back as a credit when you file your tax return.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Contribution and Benefit Base)
        </a>
      </p>

      <div
        style={{
          padding: '1.25rem 1.5rem',
          background: '#ecfdf5',
          border: '1px solid #a7f3d0',
          borderRadius: '12px',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#059669', marginBottom: '0.5rem' }}>
          Good news on Social Security
        </p>
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: '#475569', margin: 0 }}>
          If you over-paid Social Security tax because multiple employers each withheld it independently, the IRS automatically refunds the excess when you file your return. You claim it on Form 1040 as a credit. You do not need to contact your employers.
        </p>
      </div>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Special Situation: Part-Year or Seasonal Second Job
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What if your second job is seasonal — say, a retail holiday position from October through January? The tax math is the same, but timing matters. Here is how to think about it:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>The IRS cares about the full year.</strong> Even if you only worked the second job for three months, all your income is combined on your annual return. Your year-end tax bill is based on your total 2026 earnings from all sources.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>A short job creates a proportionally smaller problem.</strong> If your seasonal job pays $5,000 for three months, the extra tax owed is smaller than if it paid $20,000 for a full year. But it still adds up.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Ask for maximum withholding on the short-term job.</strong> When you fill out the W-4 for a seasonal or part-time position, you can ask your employer to withhold at a higher rate. Choosing &ldquo;Single&rdquo; and checking the multiple-jobs box in Step 2 usually does the trick.
        </li>
      </ul>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Freelance or 1099 Income on Top of a W-2 Job
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your second income is freelance or contract work (paid on a 1099 instead of a W-2), the tax impact is even bigger. No one withholds taxes on 1099 income at all — it is entirely your responsibility to pay estimated taxes each quarter.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of that, freelancers pay <strong>self-employment tax</strong> of 15.3% (the combined employee + employer share of FICA) on their freelance earnings. This is separate from income tax. If you earn $20,000 in freelance income on top of a $45,000 W-2 salary, you owe:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Self-employment tax: $20,000 &times; 92.35% &times; 15.3% = <strong>$2,825</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Additional income tax from the $20,000 bump: approximately <strong>$4,400</strong> (at the 22% marginal rate)</li>
        <li style={{ marginBottom: '0.5rem' }}>Deduction: You can deduct half the self-employment tax ($1,412) from your taxable income, reducing the income tax slightly</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For 1099 income, the best practice is to <strong>pay quarterly estimated taxes</strong> to the IRS (due April 15, June 16, September 15, and January 15). Use IRS Form 1040-ES to calculate and mail your payment, or pay online at{' '}
        <a href="https://www.irs.gov/payments" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS.gov/payments
        </a>
        .
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Two Jobs Affect Your State Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State income taxes work the same way. Each employer in a given state withholds state tax based only on the income you earn from them. If both jobs are in the same state, your combined income may push you into a higher state bracket than either employer anticipated — leading to the same under-withholding problem at the state level.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your two jobs are in <em>different states</em>, the situation gets more complex. You may need to file tax returns in two states. In that case, most states offer a credit for taxes paid to another state so you do not pay double taxes on the same income — but you do need to file the returns.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Nine states have no income tax at all, so if either of your jobs is in{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
        <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a>,{' '}
        <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a>, or another no-tax state, that portion of your income avoids state tax entirely.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quick Reference: Two-Job Tax Checklist
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Update your W-4 at your primary job.</strong> Check the multiple-jobs box in Step 2 or add extra withholding in Step 4(c).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Use the IRS Withholding Estimator.</strong> It takes 10 minutes and gives you the exact dollar amount to add per paycheck.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>For 1099 income: pay quarterly estimates.</strong> The quarterly due dates are April 15, June 16, September 15, and January 15.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Track both employers&rsquo; W-2s at year-end.</strong> You will receive a separate W-2 from each employer. Make sure both are included when you file.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check for Social Security over-withholding.</strong> If your combined wages exceed $168,600, confirm the excess Social Security is refunded on your return.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Different states: file part-year returns if needed.</strong> Most tax software (TurboTax, H&amp;R Block, FreeTaxUSA) handles multi-state returns.
        </li>
      </ul>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        See Your Real Take-Home Pay From Both Jobs
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The best way to understand your two-job tax situation is to calculate your take-home pay from each job individually, then compare it to your combined tax bill. Use our free paycheck calculator to run the numbers for your state:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California paycheck calculator</a> — high state tax, important to get right</li>
        <li style={{ marginBottom: '0.5rem' }}><a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York paycheck calculator</a> — state plus NYC local tax</li>
        <li style={{ marginBottom: '0.5rem' }}><a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas paycheck calculator</a> — no state income tax</li>
        <li style={{ marginBottom: '0.5rem' }}><a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida paycheck calculator</a> — no state income tax</li>
        <li style={{ marginBottom: '0.5rem' }}><a href="/illinois" style={{ color: '#2563eb', textDecoration: 'underline' }}>Illinois paycheck calculator</a> — flat 4.95% state tax</li>
      </ul>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Having two jobs does not push all your income into a higher tax bracket — but it almost always results in under-withholding if you do not take action. Each employer withholds taxes in isolation, treating their payroll as your only income. The result: your combined tax bill is higher than both employers anticipated, and you can end up owing thousands in April.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The solution is simple: update your W-4 at your higher-paying job, check the multiple-jobs box in Step 2, and use the IRS Withholding Estimator to fine-tune the numbers. Spending 10 minutes on this now can save you a significant bill — and possible penalty — when you file.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          Calculate Your Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your combined salary and state to see a full breakdown of what you keep after federal, state, and FICA taxes.
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
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-4</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 306: Penalty for Underpayment of Estimated Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 751: Social Security and Medicare Withholding</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base</a>
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
