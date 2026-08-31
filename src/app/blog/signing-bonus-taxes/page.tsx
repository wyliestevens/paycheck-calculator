import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Signing Bonus Taxes: How Much Will You Actually Keep? (2026)',
  description:
    'A $10,000 signing bonus is not $10,000 in your pocket. Here\'s exactly how signing bonuses are taxed, how clawback clauses work, and strategies to keep more.',
  alternates: { canonical: '/blog/signing-bonus-taxes' },
  keywords:
    'signing bonus taxes, how is a signing bonus taxed, signing bonus tax rate 2026, signing bonus take home, signing bonus clawback taxes, new job signing bonus withholding',
  openGraph: {
    title: 'Signing Bonus Taxes: How Much Will You Actually Keep? (2026)',
    description:
      'A $10,000 signing bonus is not $10,000 in your pocket. Here\'s exactly how signing bonuses are taxed, how clawback clauses work, and strategies to keep more.',
  },
}

export default function SigningBonusTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Signing bonus tax illustration showing a check being split between take-home pay and taxes"
        >
          <rect width="600" height="200" rx="12" fill="#0369a1" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Check outline */}
          <rect x="40" y="55" width="180" height="90" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <line x1="60" y1="82" x2="200" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="60" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="130" y="120" textAnchor="middle" fontSize="22" fontWeight="800" fill="#ffffff" fontFamily="monospace">$10,000</text>
          <text x="130" y="70" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">SIGNING BONUS</text>

          {/* Arrow */}
          <line x1="235" y1="100" x2="285" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="285,93 298,100 285,107" fill="rgba(255,255,255,0.5)" />

          {/* Split boxes */}
          <rect x="308" y="48" width="130" height="60" rx="6" fill="rgba(5,150,105,0.4)" stroke="rgba(5,150,105,0.8)" strokeWidth="1.5" />
          <text x="373" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#86efac" fontFamily="sans-serif">You Keep</text>
          <text x="373" y="94" textAnchor="middle" fontSize="20" fontWeight="800" fill="#ffffff" fontFamily="monospace">$7,254</text>

          <rect x="308" y="118" width="130" height="55" rx="6" fill="rgba(220,38,38,0.35)" stroke="rgba(220,38,38,0.7)" strokeWidth="1.5" />
          <text x="373" y="140" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fca5a5" fontFamily="sans-serif">Taxes</text>
          <text x="373" y="160" textAnchor="middle" fontSize="20" fontWeight="800" fill="#ffffff" fontFamily="monospace">$2,746</text>

          {/* State label */}
          <text x="490" y="95" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Texas, $80K salary</text>
          <text x="490" y="110" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif">22% federal + FICA</text>
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
        Signing Bonus Taxes: How Much Will You Actually Keep? (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 31, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You just landed a new job that comes with a <strong>$10,000 signing bonus</strong>. Before you plan how to spend it, there is something important to know: that $10,000 is not $10,000 in your bank account. After federal income tax, FICA, and state taxes, you might take home closer to $6,500 to $7,500 depending on where you live.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how signing bonuses are taxed, why the withholding can look shockingly high, what happens if you leave the company before the clawback period ends, and a few legal strategies to manage your tax bill.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a Signing Bonus?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>signing bonus</strong> (also called a sign-on bonus or joining bonus) is a one-time payment an employer makes to a new hire as an incentive to accept a job offer. Companies use them to:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Compensate you for unvested stock or bonuses you are leaving behind at your old job</li>
        <li style={{ marginBottom: '0.5rem' }}>Close the gap when they cannot meet your salary ask</li>
        <li style={{ marginBottom: '0.5rem' }}>Cover relocation costs if you are moving for the role</li>
        <li style={{ marginBottom: '0.5rem' }}>Lock you in so you do not accept a competing offer at the last minute</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Signing bonuses are common in tech, finance, healthcare, and consulting — but they show up across nearly every industry. According to the{' '}
        <a href="https://www.bls.gov/ncs/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Bureau of Labor Statistics
        </a>
        , sign-on bonuses have become increasingly common in tight labor markets as employers compete for workers.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How the IRS Classifies a Signing Bonus
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS does not give signing bonuses any special treatment. They are classified as <strong>supplemental wages</strong> — the same category as overtime pay, commissions, and regular performance bonuses. That means they are fully taxable as ordinary income, subject to:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Federal income tax (withheld at 22% for most bonuses, or at your marginal rate)</li>
        <li style={{ marginBottom: '0.5rem' }}>Social Security tax (6.2%, up to the $176,100 wage base in 2026)</li>
        <li style={{ marginBottom: '0.5rem' }}>Medicare tax (1.45%, or 2.35% if your total wages exceed $200,000)</li>
        <li style={{ marginBottom: '0.5rem' }}>State income tax (varies widely — zero in nine states, up to 13.3% in California)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 15 (Circular E)
        </a>{' '}
        describes two methods employers use to withhold federal income tax from supplemental wages.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Two Withholding Methods
      </h2>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Method 1: Flat 22% Withholding (Most Common)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your signing bonus is paid separately from your regular paycheck — or identified as a separate supplemental payment — your employer can withhold a <strong>flat 22%</strong> for federal income tax. This is the most common method because it is simple and predictable.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 22% flat rate applies to supplemental wages up to <strong>$1 million</strong>. If your bonus exceeds $1 million in a calendar year, the IRS requires 37% withholding on the excess.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Method 2: Aggregate Method
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If the bonus is combined with your regular paycheck in the same payment, your employer may use the <strong>aggregate method</strong>. They calculate the total withholding on your combined wages for the period, then subtract what was already withheld from regular pay to get the bonus withholding amount.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The aggregate method can result in <em>more</em> withholding than the flat 22% if your combined income for the period pushes you into a higher bracket — but it can also produce less withholding for lower earners. Either way, withholding is just an estimate. Your true tax bill is settled when you file your return.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Will You Actually Owe More Than 22%?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 22% flat withholding is just an estimate — not your final tax on the bonus. What you truly owe depends on your <strong>total taxable income for the year</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is how the math plays out at different salary levels (single filer, 2026 federal brackets):
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Salary</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Top Bracket</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>True Rate on Bonus</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>vs 22% Withheld</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$40,000', '12%', '12%', 'Refund — 10pp overpaid'],
              ['$60,000', '22%', '22%', 'About right'],
              ['$80,000', '22%', '22%', 'About right'],
              ['$115,000', '24%', '24%', 'Owe — 2pp underpaid'],
              ['$200,000', '32%', '32%', 'Owe — 10pp underpaid'],
            ].map(([salary, bracket, rate, note], i) => (
              <tr key={salary} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 600 }}>{salary}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{bracket}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#2563eb', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: rate === '12%' ? '#059669' : rate === '24%' || rate === '32%' ? '#dc2626' : '#475569', fontSize: '0.875rem' }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn $40,000 and are in the 12% federal bracket, the 22% withholding is too high — you will get a refund of the overage when you file. If you earn $150,000 and are in the 24% bracket, you may owe a little extra. And if you are in the 32% or 37% bracket, you could owe significantly more on top of what was withheld.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The practical fix: if you know a large signing bonus will push you into a higher bracket, you can increase your regular withholding for the rest of the year via a new{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form W-4
        </a>
        , or make an estimated tax payment to the IRS directly.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $10,000 Signing Bonus in Three States
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say you earn $80,000 per year and receive a $10,000 signing bonus. You are a single filer and the bonus is paid separately (so the 22% flat method applies). Here is what you actually take home in three different states:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Deduction</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/illinois" style={{ color: '#2563eb', textDecoration: 'underline' }}>Illinois</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Signing Bonus (Gross)', '$10,000', '$10,000', '$10,000'],
              ['Federal Income Tax (22%)', '-$2,200', '-$2,200', '-$2,200'],
              ['Social Security (6.2%)', '-$620', '-$620', '-$620'],
              ['Medicare (1.45%)', '-$145', '-$145', '-$145'],
              ['State Income Tax', '$0', '-$495', '-$1,323'],
            ].map(([label, tx, il, ca], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Signing Bonus (Gross)' ? '#1e293b' : '#dc2626' }}>{tx}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Signing Bonus (Gross)' ? '#1e293b' : '#dc2626' }}>{il}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Signing Bonus (Gross)' ? '#1e293b' : '#dc2626' }}>{ca}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Take-Home (Approx.)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$7,035</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$6,540</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$5,712</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The same $10,000 bonus yields <strong>$1,323 more take-home pay</strong> in Texas than in California — purely because California taxes bonuses at the same rate as regular income (up to 13.3% at higher incomes, with a 10.23% supplemental wage rate applying here).
        {' '}<a href="https://www.ftb.ca.gov/about-ftb/newsroom/tax-news/march-2019/withholding-supplemental-wages.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (California FTB — Supplemental Wage Withholding)
        </a>
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Clawback Clause: The Hidden Tax Trap
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most signing bonuses come with a <strong>clawback clause</strong> (also called a repayment agreement). If you leave the company before a certain period — typically 12 to 24 months — you must repay some or all of the bonus.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is where the tax trap comes in: you received $10,000 but only kept roughly $7,000 after taxes. Yet your repayment obligation is typically the <strong>full $10,000</strong> — or a prorated share of the gross amount. You are paying back money you never actually pocketed.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS does offer some relief. If you repay supplemental wages in the same tax year you received them, you can simply reduce your income on that year&rsquo;s return. But if you repay in a <em>later</em> tax year, you have two options:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Take a miscellaneous itemized deduction</strong> for the repaid amount in the year you repay it (not available for everyone after the Tax Cuts and Jobs Act).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Claim a tax credit</strong> under{' '}
          <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            IRC Section 1341 (Claim of Right Doctrine)
          </a>{' '}
          if the repaid amount exceeds $3,000. This lets you take a credit equal to the tax you paid on the repaid amount in the year you first received it.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Section 1341 credit is the better deal in most cases — it directly reduces your tax bill dollar for dollar, rather than just reducing income. Talk to a tax professional if you face a clawback repayment of more than $3,000, because the calculation is complex.
      </p>

      {/* Callout box */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          background: '#fefce8',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', color: '#92400e', lineHeight: 1.65, margin: 0 }}>
          <strong>Pro tip:</strong> Before signing a clawback agreement, ask HR whether the repayment is calculated on the gross amount or the net amount. A repayment clause that says &ldquo;gross&rdquo; means you repay the full $10,000 even though you only kept $7,000. Some companies will agree to a net repayment clause if you ask — it is worth negotiating.
        </p>
      </div>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Strategies to Keep More of Your Signing Bonus
      </h2>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. Ask to Split the Payment Across Two Calendar Years
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If your signing bonus would push you into a higher federal bracket, ask whether half can be paid in December and the other half in January. Spreading the income across two tax years can reduce your marginal rate on the second payment — especially useful if you are near a bracket boundary.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Increase Your 401(k) Contributions After Receiving the Bonus
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        The signing bonus itself cannot go directly into a 401(k) — employer retirement plans are funded by payroll deductions, not lump-sum transfers. But you can increase your regular paycheck contribution rate to the maximum ($23,500 in 2026) for the rest of the year, then live off the bonus cash. You will reduce your taxable income from regular wages while preserving the bonus for spending. See our guide on{' '}
        <a href="/blog/how-401k-contributions-affect-your-paycheck" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          how 401(k) contributions affect your paycheck
        </a>{' '}
        for the full math.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Fund an HSA or FSA
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        A Health Savings Account (HSA) accepts up to $4,300 (individual) or $8,550 (family) per year in 2026 — and those contributions are pre-tax on your payroll. Using bonus cash to cover your regular expenses while maxing out your HSA through payroll deductions is one of the most tax-efficient ways to deploy a windfall.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Adjust Your W-4 After Receiving the Bonus
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If your bonus was taxed at 22% but your real rate is 12%, you are headed for a refund — which is fine, but means you gave the IRS an interest-free loan. On the flip side, if your rate is 24%+, you could owe at filing. Either way, updating your W-4 with your new employer to request additional withholding (or reduce it) helps calibrate your paychecks to avoid a large bill or unnecessarily large refund.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        5. Consider Negotiating a Higher Salary Instead
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Signing bonuses are great, but they are taxed at ordinary income rates and come with clawback risk. A higher base salary is permanent, compounds over time (raises are often percentage-based), and has no repayment clause. If your employer offers a $10,000 signing bonus, consider asking whether they can put $5,000 of that into the base salary instead — you benefit every year going forward, not just at signing.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What About Signing Bonuses in No-Income-Tax States?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live and work in one of the nine states with no state income tax, your signing bonus skips state tax entirely — saving you hundreds to thousands of dollars depending on the amount:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> — No state income tax</li>
        <li style={{ marginBottom: '0.5rem' }}><a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a> — No state income tax</li>
        <li style={{ marginBottom: '0.5rem' }}><a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a> — No state income tax</li>
        <li style={{ marginBottom: '0.5rem' }}><a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a> — No state income tax (though some workers owe capital gains tax on investment gains)</li>
        <li style={{ marginBottom: '0.5rem' }}>Wyoming, Alaska, South Dakota, Tennessee, and New Hampshire — No state income tax</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On a $10,000 signing bonus, skipping California&rsquo;s 10.23% supplemental withholding means keeping about $1,023 more at signing time. Over a career of multiple job changes, this compounds significantly.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What to Do Before You Accept
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is a quick checklist before you sign an offer with a signing bonus:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Calculate your real take-home amount</strong> using the state you will work in and your expected total income for the year. Use the calculator at{' '}
          <a href="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>paycheck.center</a>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Read the clawback clause carefully.</strong> Know the required tenure, whether repayment is gross or net, and whether partial repayment applies (some agreements prorate the repayment based on how long you stayed).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Ask about the payment timing.</strong> Will it arrive with your first paycheck, or after 90 days? Is there any option to split across years?
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Think about your year-to-date earnings.</strong> If you are switching jobs mid-year and have already earned $140,000, your signing bonus will be taxed at the 24% or higher rate — not 22%.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Consider the opportunity cost.</strong> A signing bonus that comes with a 2-year clawback limits your flexibility. Make sure the role and company are worth the lock-in.
        </li>
      </ul>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Signing bonuses are valuable — but they are taxed like ordinary income, not like a gift. Federal income tax (22% flat for most), Social Security (6.2%), Medicare (1.45%), and state income tax all take their cut before the money reaches you. On a $10,000 bonus, workers in high-tax states like California may keep less than $6,000, while workers in no-income-tax states keep over $7,000.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The real number to negotiate is what you will actually take home — not the headline gross figure on your offer letter. Ask smart questions about clawback terms, payment timing, and whether any of the bonus could instead be added to your base salary. And if you are comparing offers in different states, run the numbers on both — the after-tax difference can be surprisingly large.
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
          See Your Real Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Compare your paycheck — including bonus income — across any US state in seconds.
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

      {/* Related */}
      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginTop: '2rem', marginBottom: '0.75rem' }}>
        Related Articles
      </h3>
      <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: '#475569', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="/blog/how-bonuses-are-taxed" style={{ color: '#2563eb', textDecoration: 'underline' }}>How Bonuses Are Taxed: The 22% Rule Explained</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="/blog/compare-job-offers-across-states" style={{ color: '#2563eb', textDecoration: 'underline' }}>How to Compare Job Offers Across States</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="/blog/how-401k-contributions-affect-your-paycheck" style={{ color: '#2563eb', textDecoration: 'underline' }}>How 401(k) Contributions Affect Your Paycheck</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="/blog/pre-tax-vs-post-tax-deductions" style={{ color: '#2563eb', textDecoration: 'underline' }}>Pre-Tax vs Post-Tax Deductions Explained</a>
        </li>
      </ul>

      {/* Sources */}
      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginTop: '2rem', marginBottom: '0.75rem' }}>
        Sources
      </h3>
      <ul style={{ fontSize: '0.875rem', lineHeight: 1.75, color: '#475569', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15 (Circular E) — Employer&rsquo;s Tax Guide</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 525 — Taxable and Nontaxable Income (Claim of Right)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS — Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov — Social Security Wage Base 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ftb.ca.gov/about-ftb/newsroom/tax-news/march-2019/withholding-supplemental-wages.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California FTB — Supplemental Wage Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/ncs/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Bureau of Labor Statistics — National Compensation Survey</a>
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
