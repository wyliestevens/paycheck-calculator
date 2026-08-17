import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tax Filing Status Explained: Single, Married, Head of Household (2026)',
  description:
    'Your filing status controls your tax brackets and standard deduction — choosing wrong costs thousands. Here\'s how all 5 statuses work, with 2026 numbers and a full worked example.',
  alternates: { canonical: '/blog/tax-filing-status-explained' },
  keywords:
    'tax filing status 2026, single vs married filing jointly, head of household filing status, married filing separately, tax filing status explained, which filing status to choose, W-4 filing status 2026',
  openGraph: {
    title: 'Tax Filing Status Explained: Single, Married, Head of Household (2026)',
    description:
      'Your filing status controls your tax brackets and standard deduction. Here\'s how all 5 statuses work — with a full $80,000 worked example.',
  },
}

export default function TaxFilingStatusExplained() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Five filing status options shown as cards: Single, Married Jointly, Married Separately, Head of Household, Surviving Spouse"
        >
          <rect width="600" height="200" rx="12" fill="#6d28d9" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Title text */}
          <text x="300" y="50" textAnchor="middle" fontSize="15" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">YOUR TAX FILING STATUS</text>

          {/* 5 status cards */}
          {/* Card 1: Single */}
          <rect x="28" y="70" width="100" height="100" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="78" y="110" textAnchor="middle" fontSize="22" fill="#fff" fontFamily="monospace" fontWeight="700">1</text>
          <text x="78" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Single</text>
          <text x="78" y="148" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">$15,000 std.</text>

          {/* Card 2: MFJ */}
          <rect x="140" y="70" width="100" height="100" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="190" y="110" textAnchor="middle" fontSize="22" fill="#fff" fontFamily="monospace" fontWeight="700">2</text>
          <text x="190" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Married Jointly</text>
          <text x="190" y="148" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">$30,000 std.</text>

          {/* Card 3: MFS */}
          <rect x="252" y="70" width="100" height="100" rx="8" fill="rgba(255,255,255,0.12)" />
          <text x="302" y="110" textAnchor="middle" fontSize="22" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontWeight="700">3</text>
          <text x="302" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Married Sep.</text>
          <text x="302" y="148" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">$15,000 std.</text>

          {/* Card 4: HoH */}
          <rect x="364" y="70" width="100" height="100" rx="8" fill="rgba(255,255,255,0.22)" />
          <text x="414" y="110" textAnchor="middle" fontSize="22" fill="#fff" fontFamily="monospace" fontWeight="700">4</text>
          <text x="414" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Head of House</text>
          <text x="414" y="148" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">$22,500 std.</text>

          {/* Card 5: QSS */}
          <rect x="476" y="70" width="100" height="100" rx="8" fill="rgba(255,255,255,0.12)" />
          <text x="526" y="110" textAnchor="middle" fontSize="22" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontWeight="700">5</text>
          <text x="526" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Surv. Spouse</text>
          <text x="526" y="148" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">$30,000 std.</text>
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
        Tax Filing Status Explained: Single, Married, Head of Household (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 17, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you fill out your W-4 at work or file your annual tax return, one of the first things the IRS asks is your <strong>filing status</strong>. Most people pick the one that sounds right and move on without thinking much about it. But your filing status does two big things that directly affect every paycheck:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>It sets your <strong>tax bracket thresholds</strong> — the income amounts at which each rate kicks in.</li>
        <li style={{ marginBottom: '0.5rem' }}>It determines your <strong>standard deduction</strong> — how much income you can shelter from federal tax automatically.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Choosing the wrong status — or failing to update it after a life change — can mean paying hundreds or thousands more in taxes than you owe. This guide breaks down all five filing statuses for 2026, with real dollar examples.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 5 Federal Tax Filing Statuses
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS recognizes exactly five filing statuses. Every taxpayer uses one of them each year:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Who Qualifies</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single', '$15,000', 'Unmarried, legally separated, or divorced'],
              ['Married Filing Jointly', '$30,000', 'Married couples filing one combined return'],
              ['Married Filing Separately', '$15,000', 'Married couples who file separate returns'],
              ['Head of Household', '$22,500', 'Unmarried with a qualifying dependent'],
              ['Qualifying Surviving Spouse', '$30,000', 'Widowed in prior 2 years, with dependent child'],
            ].map(([status, deduction, who], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{deduction}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Source:{' '}
        <a href="https://www.irs.gov/taxtopics/tc501" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Topic 501 — Should I Itemize or Take the Standard Deduction?
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        1. Single
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Single</strong> is the default status for anyone who is unmarried as of December 31 of the tax year. You also use Single if you are legally separated from your spouse under a divorce or separate maintenance decree.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 2026 standard deduction for Single filers is <strong>$15,000</strong>. Single filers have the narrowest tax brackets — meaning your income hits the higher rates sooner than it would under any other status.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have children or other dependents, check whether you qualify for Head of Household status instead — it gives you a bigger deduction and wider brackets at no cost.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2. Married Filing Jointly (MFJ)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Married Filing Jointly</strong> is usually the best option for married couples. You combine both spouses&rsquo; incomes onto one return, and you get the largest standard deduction of any status: <strong>$30,000</strong> in 2026 — exactly double the Single deduction.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        MFJ also has the widest tax brackets. The 10% bracket, for example, covers twice as much income as the Single bracket. This &ldquo;marriage bonus&rdquo; is especially valuable when one spouse earns significantly more than the other.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You must be legally married as of December 31 to use MFJ for that tax year. Even if you got married on December 31, you can file jointly for the whole year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One important note: when you file jointly, both spouses are <strong>jointly and severally liable</strong> for any taxes, interest, or penalties on the return. If your spouse underreported income, you are on the hook too — unless you qualify for innocent spouse relief.{' '}
        <a href="https://www.irs.gov/taxtopics/tc205" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 205 — Innocent Spouse Relief)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        3. Married Filing Separately (MFS)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Married Filing Separately</strong> means each spouse files their own return with their own income. The standard deduction is <strong>$15,000</strong> — same as Single — and you lose access to the wider MFJ brackets.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most married couples pay <em>more</em> in taxes by filing separately. The IRS deliberately penalizes MFS to encourage joint filing. Several deductions and credits are reduced or eliminated for MFS filers, including:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>The Child and Dependent Care Credit (generally unavailable)</li>
        <li style={{ marginBottom: '0.5rem' }}>The Earned Income Tax Credit (unavailable)</li>
        <li style={{ marginBottom: '0.5rem' }}>Student loan interest deduction (unavailable)</li>
        <li style={{ marginBottom: '0.5rem' }}>IRA deductibility phases out at much lower income levels</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When might MFS make sense? A few narrow situations: when one spouse has very large unreimbursed medical expenses (the deduction floor is 7.5% of <em>your</em> income rather than combined income), when there are legal liability concerns, or when one spouse is on an income-driven student loan repayment plan and wants to keep payments based on their income alone.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        4. Head of Household (HoH)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Head of Household</strong> is one of the most misunderstood — and most valuable — filing statuses. It is available to unmarried people who pay more than half the cost of keeping up a home for a <strong>qualifying person</strong> (usually a child or dependent parent) for more than half the year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        HoH gives you a <strong>$22,500 standard deduction</strong> in 2026 — $7,500 more than Single — and wider tax brackets on the lower rates. A single parent earning $70,000 saves roughly <strong>$1,650 in federal tax</strong> by qualifying as HoH instead of Single.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To qualify, you must meet three requirements:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Unmarried</strong> (or considered unmarried — meaning you and your spouse lived apart for the last 6 months of the year)</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Paid more than half</strong> the cost of keeping up your home (rent or mortgage, utilities, groceries, etc.)</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Qualifying person</strong> lived in your home for more than half the year — typically a child you can claim as a dependent, or a dependent parent (who doesn&rsquo;t have to live with you)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS watches HoH closely. Make sure you genuinely qualify before claiming it.{' '}
        <a href="https://www.irs.gov/taxtopics/tc851" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 851 — Dependents)
        </a>
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5. Qualifying Surviving Spouse
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Qualifying Surviving Spouse</strong> (formerly called &ldquo;Qualifying Widow(er)&rdquo;) is available for two years after your spouse dies, as long as you have a dependent child living with you and you have not remarried.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This status lets you use the same tax brackets and <strong>$30,000 standard deduction</strong> as Married Filing Jointly — giving widowed parents extra financial support during a difficult transition. After those two years, you generally move to Head of Household (if you have a qualifying dependent) or Single.
      </p>

      {/* Section 7 — Brackets */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 Tax Brackets by Filing Status
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Your filing status changes where each tax rate begins and ends. Here is how the 2026 federal tax brackets compare across the three most common statuses:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.875rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Jointly</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Head of Household</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925', '$0 – $23,850', '$0 – $17,000'],
              ['12%', '$11,926 – $48,475', '$23,851 – $96,950', '$17,001 – $64,850'],
              ['22%', '$48,476 – $103,350', '$96,951 – $206,700', '$64,851 – $103,350'],
              ['24%', '$103,351 – $197,300', '$206,701 – $394,600', '$103,351 – $197,300'],
              ['32%', '$197,301 – $250,525', '$394,601 – $501,050', '$197,301 – $250,500'],
              ['35%', '$250,526 – $626,350', '$501,051 – $751,600', '$250,501 – $626,350'],
              ['37%', 'Over $626,350', 'Over $751,600', 'Over $626,350'],
            ].map(([rate, single, mfj, hoh], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#6d28d9', fontWeight: 700 }}>{rate}</td>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{single}</td>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{mfj}</td>
                <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{hoh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that the MFJ brackets are roughly double the Single brackets at every level. This is intentional — two people filing together should be able to earn twice as much before hitting each rate.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — 2026 Tax Inflation Adjustments)
        </a>
      </p>

      {/* Section 8 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $80,000 Salary Under Three Different Statuses
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Same salary. Same state. Very different tax bills. Here is what a $80,000 earner in{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>{' '}
        (no state income tax) pays in federal income tax under each of the three most common statuses — no other deductions or credits applied:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Head of Household</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Income', '$80,000', '$80,000', '$80,000'],
              ['Standard Deduction', '−$15,000', '−$22,500', '−$30,000'],
              ['Taxable Income', '$65,000', '$57,500', '$50,000'],
              ['Federal Income Tax', '$9,214', '$6,560', '$5,523'],
              ['FICA (7.65%)', '$6,120', '$6,120', '$6,120'],
              ['Total Withheld', '$15,334', '$12,680', '$11,643'],
            ].map(([label, single, hoh, mfj], i) => {
              const isTotal = label === 'Total Withheld'
              return (
                <tr key={label} style={{ background: isTotal ? '#fef3c7' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: isTotal ? 700 : 400 }}>{label}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isTotal ? '#dc2626' : '#1e293b', fontWeight: isTotal ? 700 : 400 }}>{single}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isTotal ? '#dc2626' : '#1e293b', fontWeight: isTotal ? 700 : 400 }}>{hoh}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isTotal ? '#dc2626' : '#1e293b', fontWeight: isTotal ? 700 : 400 }}>{mfj}</td>
                </tr>
              )
            })}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Annual Take-Home Pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$64,666</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$67,320</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$68,357</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The difference between Single and Married Filing Jointly is <strong>$3,691 per year</strong> in federal tax savings — roughly $142 more in every biweekly paycheck. Head of Household saves <strong>$2,654 per year</strong> compared to Single. All three people earn exactly the same gross pay.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To see how your state&rsquo;s income tax stacks on top, try the calculator for your state:{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>,{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>,{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>.
      </p>

      {/* Section 9 — W-4 connection */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Filing Status Affects Your Paycheck (the W-4 Connection)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your filing status does not only matter at tax time. It affects your paycheck <em>every pay period</em> through your <strong>Form W-4</strong>. When you start a new job, your employer uses your W-4 to figure out how much federal income tax to withhold from each paycheck.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Step 1 of the W-4 asks you to check one of three boxes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Single or Married Filing Separately</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Married Filing Jointly or Qualifying Surviving Spouse</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Head of Household</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Checking &ldquo;Married Filing Jointly&rdquo; when you should check &ldquo;Single&rdquo; will result in too little being withheld — and a surprise tax bill in April. The opposite mistake leads to over-withholding and a refund (which is the IRS holding your money interest-free).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Any time your status changes — you get married, divorced, have a child, or lose a spouse — file a new W-4 with your employer within 10 days to keep your withholding accurate.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — About Form W-4)
        </a>
      </p>

      {/* Section 10 — Common Mistakes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common Filing Status Mistakes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        These are the most common errors taxpayers make with filing status:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Filing Single when you qualify for Head of Household.</strong> Single parents who support their children often leave thousands on the table by not claiming HoH. If you paid more than half your home&rsquo;s costs and have a qualifying child, you almost certainly qualify.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Forgetting to update your W-4 after getting married or divorced.</strong> Your marital status on December 31 determines your filing status for that entire year. If you got married in January and never updated your W-4, your employer withheld too much all year.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Assuming Married Filing Separately saves money.</strong> Almost never true. Run the numbers both ways before choosing MFS — you need a very specific situation for it to come out ahead.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Using the wrong status to reduce withholding artificially.</strong> Claiming MFJ on your W-4 when you file Single is not a withholding strategy — it creates a balance due at year-end, plus potential penalties.
        </li>
      </ul>

      {/* Section 11 — Which to Choose */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which Filing Status Should You Use?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        In most cases, the right answer is straightforward:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Married?</strong> → Use Married Filing Jointly unless you have a specific reason not to.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Unmarried with kids or a dependent parent?</strong> → Check whether you qualify for Head of Household.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Recently widowed with dependent children?</strong> → Use Qualifying Surviving Spouse for up to two years after your spouse&rsquo;s death.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Single with no dependents?</strong> → Use Single.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Married but considering filing separately?</strong> → Calculate your tax both ways before deciding. A tax professional or software can do this in minutes.</li>
      </ul>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your filing status is one of the most powerful levers in your tax situation — and it costs nothing to use correctly. The difference between Single and Head of Household at $80,000 is over $2,600 per year in take-home pay. The difference between Single and Married Filing Jointly is nearly $3,700. These are real dollars that either go to the IRS or stay in your pocket, depending on which box you check.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Review your filing status any time your life changes: marriage, divorce, a new child, a spouse passing away, or a dependent moving out. And always update your W-4 at work so your paycheck withholding stays accurate throughout the year.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f5f3ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Take-Home Pay by Filing Status
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to get a full paycheck breakdown — including how filing status affects your federal withholding.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#6d28d9',
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
          <a href="https://www.irs.gov/taxtopics/tc501" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 501 — Dependents, Standard Deduction, and Filing Information</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc205" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 205 &mdash; Innocent Spouse Relief</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc851" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 851 &mdash; Dependents</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-4, Employee&rsquo;s Withholding Certificate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/federal/2026-tax-brackets/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; 2026 Tax Brackets</a>
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
