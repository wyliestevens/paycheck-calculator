import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Standard Deduction vs. Itemized Deductions: Which Saves You More? (2026)',
  description:
    'The standard deduction is $15,000 for single filers in 2026. Most people take it — but homeowners and high earners may save more by itemizing. Here\'s how to decide.',
  alternates: { canonical: '/blog/standard-deduction-vs-itemized-deductions' },
  keywords:
    'standard deduction 2026, itemized deductions 2026, standard vs itemized deductions, should I itemize, schedule A deductions, SALT deduction, mortgage interest deduction, standard deduction amount 2026',
  openGraph: {
    title: 'Standard Deduction vs. Itemized Deductions: Which Saves You More? (2026)',
    description:
      'The standard deduction is $15,000 for single filers in 2026. Here\'s exactly when itemizing saves you more — with a worked homeowner example.',
  },
}

export default function StandardDeductionVsItemized() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Balance scale comparing standard deduction versus itemized deductions"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Left side — Standard label */}
          <rect x="40" y="55" width="200" height="90" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="140" y="85" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">STANDARD</text>
          <text x="140" y="112" textAnchor="middle" fontSize="28" fontWeight="700" fill="#ffffff" fontFamily="monospace">$15K</text>
          <text x="140" y="133" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Single filer 2026</text>

          {/* Center VS */}
          <circle cx="300" cy="100" r="28" fill="rgba(255,255,255,0.2)" />
          <text x="300" y="106" textAnchor="middle" fontSize="16" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">VS</text>

          {/* Right side — Itemized label */}
          <rect x="360" y="55" width="200" height="90" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="460" y="85" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">ITEMIZED</text>
          {/* Mini items */}
          <text x="380" y="105" fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">🏠 Mortgage interest</text>
          <text x="380" y="119" fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">🏛️ State &amp; local taxes</text>
          <text x="380" y="133" fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">❤️ Charitable gifts</text>
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
        Standard Deduction vs. Itemized Deductions: Which Saves You More? (2026 Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 30, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Every year when you file your federal income taxes, you get to make one important choice: take the <strong>standard deduction</strong> or <strong>itemize your deductions</strong>. You cannot do both &mdash; you pick whichever one gives you the bigger deduction.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most Americans, the standard deduction wins easily. But if you own a home, live in a high-tax state, or make significant charitable donations, itemizing might save you hundreds or even thousands of dollars. Here is a plain-English guide to both options &mdash; with real numbers for 2026.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a Tax Deduction, and Why Does It Matter?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>tax deduction</strong> reduces your <strong>taxable income</strong> &mdash; the amount of income the IRS actually taxes. It is not a dollar-for-dollar tax credit. Instead, a deduction lowers the income that gets taxed, which indirectly lowers your bill.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, if your gross income is $80,000 and you take the $15,000 standard deduction, the IRS only taxes you on <strong>$65,000</strong>. That $15,000 deduction saves you roughly $1,800&ndash;$3,300 in federal taxes, depending on your tax bracket (12% to 22% for most middle-income earners).
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Standard Deduction for 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The <strong>standard deduction</strong> is a fixed dollar amount you subtract from your income without having to prove any specific expenses. The IRS adjusts it every year for inflation.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          (IRS &mdash; 2026 Tax Inflation Adjustments)
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Filing Status</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2026 Standard Deduction</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single', '$15,000'],
              ['Married Filing Jointly', '$30,000'],
              ['Married Filing Separately', '$15,000'],
              ['Head of Household', '$22,500'],
            ].map(([status, amount], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#4f46e5', fontWeight: 600 }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The standard deduction is straightforward: you just claim it. No receipts, no paperwork, no Schedule A to fill out. This simplicity is one reason about <strong>90% of Americans</strong> take it.{' '}
        <a href="https://taxfoundation.org/data/all/federal/standard-deduction-itemized-deductions-tax-year-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          (Tax Foundation)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are 65 or older, or blind, you get an <strong>additional standard deduction</strong> on top of the base amount:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Single or Head of Household: +$2,000 per qualifying condition</li>
        <li style={{ marginBottom: '0.5rem' }}>Married Filing Jointly: +$1,600 per qualifying condition per spouse</li>
      </ul>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Itemized Deductions?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Itemized deductions</strong> are specific expenses the IRS lets you deduct from your income. Instead of taking the flat standard deduction, you add up all your qualifying expenses and deduct the total. You list them on <strong>Schedule A</strong> when you file your taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are the most common itemizable deductions:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. State and Local Taxes (SALT) &mdash; Capped at $10,000
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can deduct state income taxes (or sales taxes, whichever is higher) plus local property taxes &mdash; but only up to a combined cap of <strong>$10,000</strong> per year ($5,000 if married filing separately). This cap, established by the 2017 Tax Cuts and Jobs Act, significantly limits this deduction for people in high-tax states like{' '}
        <a href="/california" style={{ color: '#4f46e5', textDecoration: 'underline' }}>California</a>,{' '}
        <a href="/new-york" style={{ color: '#4f46e5', textDecoration: 'underline' }}>New York</a>, and New Jersey.{' '}
        <a href="https://www.irs.gov/taxtopics/tc503" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          (IRS Topic 503)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Mortgage Interest
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have a mortgage on your primary home (or a second home), you can deduct the interest you pay &mdash; up to the interest on <strong>$750,000 in loan principal</strong> ($375,000 if married filing separately). For a typical 30-year mortgage taken out in 2023&ndash;2025 at 7% interest, this can easily amount to $10,000&ndash;$20,000 per year in deductible interest.{' '}
        <a href="https://www.irs.gov/taxtopics/tc505" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          (IRS Topic 505)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Charitable Donations
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Cash donations to qualifying charities (churches, nonprofits, educational institutions) are deductible up to <strong>60% of your adjusted gross income</strong>. Non-cash donations like clothing or furniture can also be deducted at fair market value. Keep your receipts &mdash; any cash donation over $250 requires written confirmation from the charity.{' '}
        <a href="https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contribution-deductions" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          (IRS &mdash; Charitable Contribution Deductions)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Medical and Dental Expenses
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can deduct qualifying medical expenses that exceed <strong>7.5% of your adjusted gross income (AGI)</strong>. Only the amount above that threshold is deductible. So if your AGI is $80,000, the first $6,000 in medical expenses does not count. Expenses beyond $6,000 are deductible.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This threshold is high enough that most people do not get much benefit from it unless they had a major surgery, serious illness, or large unreimbursed dental work in the tax year.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        5. Casualty and Theft Losses
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Losses from federally declared disasters can be deducted. The loss must exceed 10% of AGI (after a $100 floor per event), so this deduction mainly helps people who suffered significant uninsured damage.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Decide: Standard vs. Itemized
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The rule is simple: <strong>take whichever is larger</strong>. Add up all your potential itemized deductions for the year. If the total is more than your standard deduction, itemize. If not, take the standard deduction.
      </p>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>Quick decision test:</p>
        <ul style={{ fontSize: '1rem', lineHeight: 1.75, color: '#1e293b', paddingLeft: '1.25rem', margin: 0 }}>
          <li style={{ marginBottom: '0.25rem' }}>Are your itemizable expenses (mortgage interest + SALT + charity + medical) <strong>more than $15,000</strong>? (single filer)</li>
          <li style={{ marginBottom: '0.25rem' }}>Are they <strong>more than $30,000</strong>? (married filing jointly)</li>
        </ul>
        <p style={{ fontSize: '1rem', color: '#475569', marginTop: '0.75rem', marginBottom: 0 }}>
          If yes &rarr; itemizing is probably worth it. If no &rarr; take the standard deduction.
        </p>
      </div>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Renter vs. Homeowner
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s look at two single filers in different situations to see which deduction makes more sense.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Case A: Alex, single renter earning $70,000 in{' '}
        <a href="/texas" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Texas</a>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Potential Itemized Deduction</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['State income tax (Texas = $0)', '$0'],
              ['Property tax (renter = $0)', '$0'],
              ['Mortgage interest (renter = $0)', '$0'],
              ['Charitable donations', '$1,200'],
              ['Medical expenses above 7.5% AGI ($5,250 floor)', '$0'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef9c3' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Itemized Deductions</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$1,200</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Alex&rsquo;s itemized total ($1,200) is far less than the standard deduction ($15,000). <strong>Alex takes the standard deduction</strong> and saves $13,800 more in taxable income reduction.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Case B: Jamie, single homeowner earning $120,000 in{' '}
        <a href="/new-jersey" style={{ color: '#4f46e5', textDecoration: 'underline' }}>New Jersey</a>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Potential Itemized Deduction</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['State income tax (NJ ~6.37% on $120K)', '$7,644'],
              ['Property tax (NJ average)', '$9,800'],
              ['SALT cap applied (max $10,000)', '$10,000'],
              ['Mortgage interest (7% on $380K loan, year 3)', '$26,400'],
              ['Charitable donations', '$3,500'],
              ['Medical expenses', '$0'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Itemized Deductions</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$39,900</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Jamie&rsquo;s itemized total ($39,900) is <strong>$24,900 more</strong> than the $15,000 standard deduction. By itemizing, Jamie reduces their taxable income by an extra $24,900. At the 24% federal tax rate, that is a tax saving of about <strong>$5,976</strong> compared to taking the standard deduction.
      </p>

      <div
        style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#065f46', marginBottom: '0.25rem' }}>
          Jamie saves ~$5,976 in federal taxes by itemizing instead of taking the standard deduction.
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#047857', marginBottom: 0 }}>
          That is the mortgage interest deduction doing the heavy lifting.
        </p>
      </div>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Usually Benefits from Itemizing?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        In general, itemizing pays off when you have one or more of these:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>A mortgage:</strong> Interest on a new loan at 6.5%&ndash;8% can generate $10,000&ndash;$25,000+ in annual deductible interest, especially in the first few years of a 30-year mortgage (when most of the payment is interest).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>High property taxes:</strong> Homeowners in New Jersey, Illinois, or Connecticut often pay $8,000&ndash;$15,000 per year in property taxes. Combined with state income tax up to the $10,000 SALT cap, this alone may be enough to push past the standard deduction when paired with other deductions.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Large charitable giving:</strong> If you donate $10,000+ to charity annually, those contributions can push your itemized total above the standard deduction.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Major medical expenses:</strong> A serious illness, surgery, or high-cost prescription in a year can push medical costs well above the 7.5% AGI floor.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Renters, people in no-income-tax states like{' '}
        <a href="/florida" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Florida</a> or{' '}
        <a href="/nevada" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Nevada</a>, and people with modest charitable giving almost always take the standard deduction.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Bunching Deductions: A Strategy for People on the Fence
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What if your itemized deductions are close to the standard deduction some years but not every year? A strategy called <strong>bunching</strong> can help.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Instead of donating $5,000 to charity every year, donate $10,000 in even years and nothing in odd years. In the even years, your total itemized deductions might clear the standard deduction threshold, and you itemize. In odd years, you take the standard deduction. Over two years, you get <strong>more total deductions</strong> than taking the standard deduction every single year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can also use a <strong>Donor-Advised Fund (DAF)</strong> to make a large charitable contribution in one tax year (getting the full deduction that year) while spreading the actual grants to charities over multiple years.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The SALT Cap and High-Tax States
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before 2018, there was no cap on the state and local tax deduction. A homeowner in{' '}
        <a href="/california" style={{ color: '#4f46e5', textDecoration: 'underline' }}>California</a> paying $25,000 in state income tax could deduct the full $25,000. The 2017 Tax Cuts and Jobs Act capped this at <strong>$10,000</strong>, which dramatically reduced the benefit of itemizing for high-income earners in high-tax states.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Congress has debated raising or eliminating the SALT cap multiple times, but as of 2026, the $10,000 limit remains in place. If you live in a high-tax state and wonder whether it is worth itemizing, remember: you can only deduct $10,000 in combined state income taxes and property taxes, no matter how much you actually paid.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How This Affects Your Paycheck Withholding
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your choice between standard and itemized deductions does not directly change your paycheck withholding &mdash; that is set by your <strong>W-4 form</strong>. However, if you know you will be itemizing, you can account for the extra deductions on your W-4 under &ldquo;Other adjustments&rdquo; (Step 4b: Deductions).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On your W-4, enter the amount by which your expected itemized deductions <em>exceed</em> the standard deduction. For Jamie from our example above, that would be $39,900 &minus; $15,000 = <strong>$24,900</strong>. Entering $24,900 in Step 4b tells your employer to withhold less tax from each paycheck, spreading your tax savings throughout the year rather than receiving a large refund at tax time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can use the{' '}
        <a href="https://apps.irs.gov/app/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          IRS Tax Withholding Estimator
        </a>{' '}
        to calculate the right amount to enter on your W-4 when itemizing.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quick Checklist: Should You Itemize in 2026?
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Situation</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Likely Best Choice</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Renter, no large deductions', 'Standard deduction'],
              ['Homeowner with a recent mortgage at 6%+', 'Probably itemize'],
              ['Homeowner in a high-tax state (CA, NJ, NY)', 'Probably itemize'],
              ['Large donor (giving $8,000+/year)', 'Run the numbers — may be close'],
              ['Major medical expenses this year', 'Run the numbers — may be close'],
              ['Married couple, both working, no mortgage', 'Standard deduction ($30,000)'],
              ['Senior (65+) with no mortgage', 'Standard deduction (extra amount applies)'],
            ].map(([situation, choice], i) => (
              <tr key={situation} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{situation}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: choice.includes('itemize') ? '#059669' : choice.includes('numbers') ? '#d97706' : '#1e293b', fontWeight: choice.includes('itemize') ? 600 : 400 }}>{choice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most people, the standard deduction is the right call. It is simpler, requires no recordkeeping, and after the 2017 tax law changes, it is large enough to beat itemized deductions for the majority of filers.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But if you own a home with a sizable mortgage, live in a state with high income or property taxes, or make large charitable donations, it is absolutely worth adding up your potential itemized deductions before you file. A few minutes with a spreadsheet &mdash; or a good tax program &mdash; could save you thousands of dollars.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS lets you try both options when you file. Most tax software (TurboTax, H&amp;R Block, FreeTaxUSA) will automatically compare both methods and pick the one that saves you more. If you are doing it yourself, use{' '}
        <a href="https://www.irs.gov/forms-pubs/about-schedule-a-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          IRS Schedule A
        </a>{' '}
        to total up your itemized deductions and compare the result to your standard deduction amount.
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
            background: '#4f46e5',
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
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-schedule-a-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>IRS &mdash; About Schedule A (Itemized Deductions)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc503" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>IRS Topic 503 &mdash; Deductible Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc505" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>IRS Topic 505 &mdash; Interest Expense</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contribution-deductions" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>IRS &mdash; Charitable Contribution Deductions</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/federal/standard-deduction/" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>Tax Foundation &mdash; Standard Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://apps.irs.gov/app/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>IRS Tax Withholding Estimator</a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#4f46e5', textDecoration: 'underline', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
