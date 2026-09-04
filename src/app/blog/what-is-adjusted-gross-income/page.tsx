import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Adjusted Gross Income (AGI)? A Plain-English Guide (2026)',
  description:
    'AGI is the number that controls your tax brackets, deduction limits, and credit eligibility. Here\'s exactly how it\'s calculated — with a full worked example at $85,000 gross income.',
  alternates: { canonical: '/blog/what-is-adjusted-gross-income' },
  keywords:
    'adjusted gross income, what is AGI, AGI 2026, how to calculate AGI, AGI vs gross income, AGI vs taxable income, above the line deductions, modified adjusted gross income MAGI',
  openGraph: {
    title: 'What Is Adjusted Gross Income (AGI)? A Plain-English Guide (2026)',
    description:
      'AGI is the number that controls your tax brackets, deduction limits, and credit eligibility. Here\'s exactly how it\'s calculated.',
  },
}

export default function AdjustedGrossIncomeExplained() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Adjusted gross income calculation flow: gross income minus adjustments equals AGI"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Step 1: Gross Income */}
          <rect x="30" y="55" width="130" height="90" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="95" y="85" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">GROSS</text>
          <text x="95" y="100" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">INCOME</text>
          <text x="95" y="128" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">$85K</text>

          {/* Minus arrow */}
          <line x1="168" y1="100" x2="198" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
          <polygon points="198,94 210,100 198,106" fill="rgba(255,255,255,0.55)" />

          {/* Step 2: Adjustments */}
          <rect x="215" y="55" width="130" height="90" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="280" y="83" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">ABOVE-THE-</text>
          <text x="280" y="97" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">LINE DEDS.</text>
          <text x="280" y="128" textAnchor="middle" fontSize="22" fontWeight="700" fill="#93c5fd" fontFamily="monospace">−$9K</text>

          {/* Equals arrow */}
          <line x1="353" y1="100" x2="383" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
          <polygon points="383,94 395,100 383,106" fill="rgba(255,255,255,0.55)" />
          <text x="374" y="96" textAnchor="middle" fontSize="14" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">=</text>

          {/* Step 3: AGI */}
          <rect x="400" y="40" width="165" height="118" rx="8" fill="rgba(255,255,255,0.25)" />
          <text x="482" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">YOUR AGI</text>
          <text x="482" y="110" textAnchor="middle" fontSize="30" fontWeight="800" fill="#fff" fontFamily="monospace">$76K</text>
          <text x="482" y="138" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">controls brackets &amp; credits</text>

          {/* Bottom label */}
          <text x="300" y="175" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Gross Income − Adjustments = AGI</text>
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
        What Is Adjusted Gross Income (AGI)? A Plain-English Guide (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 4, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You have probably seen the acronym <strong>AGI</strong> on your tax return without ever stopping to understand what it actually means. Adjusted Gross Income is one of the most important numbers in the entire tax system &mdash; it determines your tax bracket, controls whether you can deduct your IRA contribution, sets the threshold for claiming dozens of credits and deductions, and even affects your Medicare premiums.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is the good news: the calculation is straightforward once you understand the two-step process. This guide walks through exactly how AGI works, what the common &ldquo;adjustments&rdquo; are, and how it differs from both gross income and taxable income &mdash; with a full worked example at $85,000.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Gross Income vs. AGI vs. Taxable Income: The Three Numbers
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before diving into AGI, it helps to see where it fits in the full calculation chain. The IRS uses three different income figures when calculating what you owe:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Term</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>What It Means</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Where It Appears</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Income', 'All income before any deductions — wages, interest, dividends, freelance income, etc.', 'Box 1 of your W-2 (plus other sources)'],
              ['Adjusted Gross Income (AGI)', 'Gross income minus specific "above-the-line" deductions', 'Line 11 of Form 1040'],
              ['Taxable Income', 'AGI minus your standard or itemized deduction (and QBI deduction if applicable)', 'Line 15 of Form 1040'],
            ].map(([term, meaning, location], i) => (
              <tr key={term} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{term}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{meaning}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem' }}>{location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        AGI is the middle step. You start with all your income, subtract certain allowed deductions to reach AGI, and then subtract your standard or itemized deduction to reach taxable income &mdash; the number that actually gets taxed.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Why does AGI matter so much? Because dozens of tax rules use your AGI &mdash; not your gross income and not your taxable income &mdash; as the measuring stick. Roth IRA eligibility, the student loan interest deduction, the medical expense deduction threshold, the Child Tax Credit phase-out, and more all key off your AGI.{' '}
        <a href="https://www.irs.gov/taxtopics/tc551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 551: Standard Deduction)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What &ldquo;Above-the-Line&rdquo; Means
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The deductions that reduce gross income to AGI are called <strong>above-the-line deductions</strong>. The &ldquo;line&rdquo; refers to the AGI line on your tax return. Deductions that come <em>before</em> that line reduce your AGI; deductions that come <em>after</em> it (like the standard deduction) only reduce your taxable income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Above-the-line deductions are available to <strong>everyone</strong> &mdash; you do not need to itemize to claim them. This is a big deal. Itemized deductions (like mortgage interest or charitable donations) are only worth claiming if they exceed your standard deduction. Above-the-line deductions stack on top of whichever option you choose.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These adjustments are listed on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-schedule-1-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Schedule 1 of Form 1040
        </a>
        , Part II.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Most Common AGI Adjustments in 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are the above-the-line deductions that most people can use to reduce their gross income before reaching AGI:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. Traditional IRA Contributions
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you contribute to a traditional IRA, you may be able to deduct up to <strong>$7,000</strong> ($8,000 if you are 50 or older) from your gross income. However, if you (or your spouse) are covered by a workplace retirement plan, the deduction phases out at higher income levels.{' '}
        <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; IRA Deduction Limits)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Student Loan Interest
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can deduct up to <strong>$2,500</strong> in student loan interest paid during the year. The deduction phases out for single filers between $75,000 and $90,000 of MAGI, and for married filers between $155,000 and $185,000.{' '}
        <a href="https://www.irs.gov/taxtopics/tc456" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 456: Student Loan Interest Deduction)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Health Savings Account (HSA) Contributions
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Contributions you make directly to an HSA (not through payroll) are deductible. In 2026, the limit is <strong>$4,300</strong> for self-only coverage and <strong>$8,550</strong> for family coverage. Employer contributions are already pre-tax and do not count toward your deduction.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 969: HSAs)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Self-Employed Health Insurance Premiums
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are self-employed and pay your own health, dental, or long-term care insurance premiums, you can deduct 100% of those premiums. This deduction cannot exceed your net self-employment income.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-7206" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Self-Employed Health Insurance Deduction)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        5. One-Half of Self-Employment Tax
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed individuals pay a 15.3% self-employment tax (covering both the employee and employer portions of FICA). The IRS lets you deduct half of that tax &mdash; the employer-equivalent portion &mdash; as an above-the-line deduction. This partially offsets the burden of paying both sides.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Self-Employment Tax)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        6. Contributions to SEP-IRA, SIMPLE IRA, or Solo 401(k)
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed workers can contribute to a SEP-IRA (up to 25% of net self-employment income, max $70,000 in 2026), a SIMPLE IRA ($16,500 limit), or a Solo 401(k). These contributions reduce your AGI dollar-for-dollar.{' '}
        <a href="https://www.irs.gov/retirement-plans/retirement-plans-for-self-employed-people" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Retirement Plans for Self-Employed People)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        7. Educator Expenses
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Eligible K&ndash;12 teachers and instructors can deduct up to <strong>$300</strong> ($600 for married couples who are both educators) for out-of-pocket classroom expenses &mdash; books, supplies, equipment, and professional development courses.{' '}
        <a href="https://www.irs.gov/taxtopics/tc458" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 458: Educator Expense Deduction)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        8. Alimony Paid (Pre-2019 Divorce Agreements Only)
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Alimony payments are deductible only for divorce agreements finalized before January 1, 2019. For divorces finalized after that date, alimony is neither deductible for the payer nor taxable to the recipient under the Tax Cuts and Jobs Act.{' '}
        <a href="https://www.irs.gov/taxtopics/tc452" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 452: Alimony Paid)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Calculating AGI at $85,000
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Meet Jordan, a 34-year-old single filer who works as a software engineer and does some freelance work on the side. Here is how Jordan&rsquo;s AGI gets calculated:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Step 1: Gross Income
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Source</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['W-2 wages (employer job)', '$72,000'],
              ['Freelance income (1099-NEC)', '$11,500'],
              ['Bank interest', '$300'],
              ['Stock dividends', '$200'],
            ].map(([source, amount], i) => (
              <tr key={source} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{source}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Gross Income</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$84,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Step 2: Above-the-Line Deductions (Adjustments)
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Adjustment</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Traditional IRA contribution', '−$7,000'],
              ['Student loan interest paid', '−$1,800'],
              ['Half of self-employment tax paid on $11,500 freelance', '−$813'],
              ['Self-employed health insurance (Jordan pays own dental)', '−$600'],
            ].map(([adj, amount], i) => (
              <tr key={adj} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{adj}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef2f2' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Adjustments</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>−$10,213</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Step 3: AGI and Taxable Income
      </h3>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        <div>Gross Income: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$84,000</strong></div>
        <div style={{ color: '#dc2626' }}>Total Adjustments: &nbsp;&nbsp;&nbsp;&nbsp;&minus;$10,213</div>
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
          <strong>AGI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$73,787</strong>
        </div>
        <div style={{ marginTop: '0.75rem', color: '#475569' }}>Standard deduction (single, 2026): &minus;$15,000</div>
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
          <strong>Taxable Income: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$58,787</strong>
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Jordan started with $84,000 in total income and ended up with a taxable income of <strong>$58,787</strong>. That is a reduction of more than $25,000 before any credits are applied &mdash; and most of it came from above-the-line deductions that reduced AGI.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why AGI Controls So Much
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        A lower AGI unlocks benefits across the entire tax system. Here are key examples of what AGI affects in 2026:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rule</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>How AGI Triggers It</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Roth IRA contributions', 'Phase-out begins at $150,000 (single) / $236,000 (married) of MAGI'],
              ['Traditional IRA deduction', 'Phase-out if covered by a workplace plan: begins at $79,000 (single)'],
              ['Medical expense deduction', 'Only expenses exceeding 7.5% of AGI are deductible on Schedule A'],
              ['Child Tax Credit phase-out', 'Credit reduces by $50 per $1,000 of AGI above $200,000 (single)'],
              ['American Opportunity Credit', 'Phases out between $80,000 and $90,000 of MAGI (single)'],
              ['Medicare Part B & D premiums (IRMAA)', 'Higher AGI increases monthly Medicare premiums by up to $594/month'],
              ['Net Investment Income Tax', '3.8% surtax on investment income when AGI exceeds $200,000 (single)'],
              ['Charitable deduction limit', 'Cash donations capped at 60% of AGI; appreciated property at 30%'],
            ].map(([rule, trigger], i) => (
              <tr key={rule} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{rule}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{trigger}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is why tax planners pay such close attention to AGI. Reducing it by $1,000 might unlock a full Roth IRA contribution, let you deduct more medical expenses, or keep you below a credit phase-out threshold &mdash; creating far more than $1,000 in actual tax savings.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        AGI vs. MAGI: What Is the Difference?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You will also encounter the term <strong>MAGI</strong> &mdash; Modified Adjusted Gross Income. MAGI is AGI with certain deductions added back in. The IRS uses different MAGI definitions for different purposes, but the most common version adds back:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Student loan interest deduction</li>
        <li style={{ marginBottom: '0.5rem' }}>Traditional IRA deduction</li>
        <li style={{ marginBottom: '0.5rem' }}>Tuition and fees deduction</li>
        <li style={{ marginBottom: '0.5rem' }}>Foreign earned income exclusion</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most middle-income earners, AGI and MAGI are the same or very close. The differences matter mainly when you are near a phase-out threshold for a specific credit or deduction. When the IRS or a financial institution asks for your &ldquo;MAGI,&rdquo; they will tell you which version they mean.{' '}
        <a href="https://www.irs.gov/e-file-providers/definition-of-adjusted-gross-income" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Definition of Adjusted Gross Income)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Where to Find Your AGI
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your AGI appears on <strong>Line 11 of Form 1040</strong>. If you use tax software, you will see it calculated automatically as you enter your income and adjustments. If you need your prior-year AGI (which the IRS requires to e-file your return), you can find it:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>On Line 11 of your prior-year Form 1040</li>
        <li style={{ marginBottom: '0.5rem' }}>
          Through the{' '}
          <a href="https://www.irs.gov/individuals/get-transcript" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            IRS Get Transcript tool
          </a>{' '}
          (free, instant online access)
        </li>
        <li style={{ marginBottom: '0.5rem' }}>On your Identity Protection PIN letter if you have one</li>
      </ul>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Reduce Your AGI in 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Because AGI acts as a gatekeeper for so many tax benefits, reducing it is one of the most effective tax strategies available. Here are the most common levers:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Maximize Traditional Retirement Contributions
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your traditional 401(k) contributions come out of your paycheck pre-tax, which reduces the W-2 wages reported to the IRS. In 2026, you can contribute up to <strong>$23,500</strong> ($31,000 if age 50 or older). This is the single most powerful way most employees reduce their AGI &mdash; every dollar contributed reduces your gross income before the IRS even sees it.{' '}
        <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 401(k) Contribution Limits)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Fund a Traditional IRA
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are eligible to deduct IRA contributions, adding up to $7,000 ($8,000 if 50+) directly reduces your AGI. Even if you are covered by a workplace plan, the deduction may be fully or partially available depending on your income. You have until the April tax deadline to make prior-year IRA contributions.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Contribute to an HSA
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have a qualifying high-deductible health plan, contributing to an HSA reduces your AGI &mdash; and the money grows tax-free and comes out tax-free for medical expenses. You can contribute up to the April deadline for the prior tax year.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Keep Track of Student Loan Interest
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your loan servicer will send you a Form 1098-E showing how much interest you paid during the year. Do not overlook this &mdash; if you qualify, up to $2,500 comes straight off your gross income before you even start filing.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What AGI Does Not Include
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Not every tax benefit reduces your AGI. Some deductions and credits only reduce your <em>taxable income</em> or your final <em>tax owed</em> &mdash; not AGI itself. For example:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Standard deduction ($15,000 single in 2026):</strong> Reduces taxable income, not AGI</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Itemized deductions</strong> (mortgage interest, state taxes, charitable gifts): Also reduce taxable income, not AGI</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Tax credits</strong> (Child Tax Credit, Earned Income Credit, EV credit): Reduce the tax you owe, not your income</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Roth 401(k) or Roth IRA contributions:</strong> These are after-tax contributions &mdash; no AGI benefit, but no taxes on the growth either</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Understanding where each benefit hits &mdash; AGI, taxable income, or tax owed &mdash; helps you prioritize. An above-the-line deduction that lowers your AGI is usually more powerful than the same-size deduction that only affects taxable income, because it can unlock multiple other benefits downstream.
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        AGI is your total income minus a specific set of &ldquo;above-the-line&rdquo; deductions that are available to everyone &mdash; no itemizing required. It appears on Line 11 of your Form 1040, and it is the number the IRS uses to determine your eligibility for dozens of tax benefits.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most impactful way to lower your AGI is to maximize contributions to tax-advantaged accounts: your traditional 401(k) first, then a traditional IRA and an HSA if you qualify. Every dollar that reduces your AGI can have a multiplied effect by unlocking deductions and credits you might otherwise lose.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Once you know your AGI, subtract the standard deduction (or itemized deductions if larger) to find your taxable income &mdash; the number that actually determines how much federal tax you owe.
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
          See How AGI Affects Your Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see your estimated AGI, federal tax, state tax, and take-home pay &mdash; all broken down by paycheck.
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
          <a href="https://www.irs.gov/e-file-providers/definition-of-adjusted-gross-income" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Definition of Adjusted Gross Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-schedule-1-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Schedule 1 (Form 1040)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; IRA Deduction Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc456" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 456: Student Loan Interest Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 969: Health Savings Accounts</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Self-Employment Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc458" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 458: Educator Expense Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 401(k) Contribution Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/get-transcript" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Get Transcript (to find prior-year AGI)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 551: Standard Deduction</a>
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
