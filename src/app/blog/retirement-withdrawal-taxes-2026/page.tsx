import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How 401(k) and IRA Withdrawals Are Taxed in Retirement (2026)',
  description:
    'Traditional 401(k) and IRA withdrawals are taxed as ordinary income in retirement. Here\'s how RMDs, early withdrawal penalties, Roth rules, and state taxes work — with a full worked example.',
  alternates: { canonical: '/blog/retirement-withdrawal-taxes-2026' },
  keywords:
    'retirement withdrawal taxes 2026, 401k withdrawal tax, IRA withdrawal taxes, RMD taxes, early withdrawal penalty, Roth IRA withdrawal tax-free, retirement income tax 2026, required minimum distributions',
  openGraph: {
    title: 'How 401(k) and IRA Withdrawals Are Taxed in Retirement (2026)',
    description:
      'Traditional 401(k) and IRA withdrawals are taxed as ordinary income. Here\'s the full tax picture for retirees in 2026 — Roth rules, RMDs, early penalties, and a full worked example.',
  },
}

export default function RetirementWithdrawalTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Retirement savings illustration showing 401k and IRA accounts with tax arrows"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Left: piggy bank / nest egg icon */}
          <circle cx="80" cy="100" r="42" fill="rgba(255,255,255,0.18)" />
          <text x="80" y="92" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">401k</text>
          <text x="80" y="116" textAnchor="middle" fontSize="14" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="monospace">IRA</text>
          {/* Arrow right */}
          <line x1="133" y1="100" x2="190" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
          <polygon points="190,92 206,100 190,108" fill="rgba(255,255,255,0.5)" />
          {/* Middle column: tax label boxes */}
          <rect x="215" y="40" width="170" height="32" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="62" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">Ordinary Income Tax</text>
          <rect x="215" y="84" width="170" height="32" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="106" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">State Tax (most states)</text>
          <rect x="215" y="128" width="170" height="32" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="150" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">RMD Rules at 73</text>
          {/* Arrow right */}
          <line x1="398" y1="100" x2="452" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
          <polygon points="452,92 468,100 452,108" fill="rgba(255,255,255,0.5)" />
          {/* Right: take-home circle */}
          <circle cx="520" cy="100" r="42" fill="rgba(255,255,255,0.22)" />
          <text x="520" y="95" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">After-Tax</text>
          <text x="520" y="114" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">Income</text>
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
        How 401(k) and IRA Withdrawals Are Taxed in Retirement (2026 Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 7, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You spent decades building up your 401(k) or IRA. Now that it&rsquo;s time to use it, here&rsquo;s the part nobody warns you about: <strong>the IRS still wants a cut</strong>. How much you pay — and when you pay it — depends on the type of account you have, your other income, and which state you live in.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers the full tax picture for retirement withdrawals in 2026: traditional accounts vs. Roth accounts, the early withdrawal penalty, Required Minimum Distributions, and how states treat retirement income differently.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Basic Rule: Traditional vs. Roth
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Every retirement account falls into one of two tax buckets:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ padding: '1.25rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
          <p style={{ fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', fontSize: '1rem' }}>Traditional 401(k) / IRA</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#475569', margin: 0 }}>
            You got a tax break <em>when you contributed</em>. Now you pay income taxes <em>when you withdraw</em>. Every dollar you pull out is added to your income for that year and taxed at your ordinary income rate.
          </p>
        </div>
        <div style={{ padding: '1.25rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
          <p style={{ fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', fontSize: '1rem' }}>Roth 401(k) / Roth IRA</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#475569', margin: 0 }}>
            You paid taxes <em>when you contributed</em>. If you follow the rules, withdrawals in retirement are <strong>completely tax-free</strong> — including decades of investment growth.
          </p>
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most Americans have traditional accounts, so most retirees are surprised by the tax bill. A person with $1 million in a traditional 401(k) doesn&rsquo;t have $1 million in retirement money — they have $1 million <em>minus future taxes</em>.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Traditional 401(k) and IRA Withdrawals Are Taxed
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you take money from a traditional 401(k) or Traditional IRA, the full amount is counted as <strong>ordinary income</strong> in the year you withdraw it. It is added to any other income you have — Social Security, a pension, part-time work, or investment income — and the combined total determines your federal tax bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For 2026, the federal income tax brackets for a single filer are:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income (Single)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income (Married Filing Jointly)</th>
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
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#2563eb', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{mfj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer withholds 20% from 401(k) distributions by default (as a prepayment toward federal taxes). IRA withdrawals do not have automatic withholding unless you request it. Either way, you settle up at tax time when you file your return.{' '}
        <a href="https://www.irs.gov/taxtopics/tc412" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 412 — Lump-Sum Distributions)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Roth Withdrawals Work (and When They&rsquo;re Tax-Free)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Roth accounts offer the most tax-efficient retirement income, but there are two requirements to get the tax-free treatment:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Age 59½ or older.</strong> You must be at least 59½ when you take the withdrawal.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Five-year rule.</strong> The Roth account must have been open for at least five years. This clock starts January 1 of the year you made your first Roth contribution.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If both conditions are met, <strong>every dollar you withdraw — including all investment growth — is 100% tax-free</strong>. A retiree who turned a $100,000 Roth IRA into $400,000 over 30 years pays zero federal income tax on any of those withdrawals.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Another big advantage of Roth IRAs specifically: <strong>no Required Minimum Distributions</strong> during your lifetime. You can let the money grow indefinitely and leave it to your heirs. (Roth 401(k)s had RMDs before 2024, but the SECURE 2.0 Act eliminated them.)
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Early Withdrawal Penalty: 10% Before Age 59½
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you pull money from a traditional 401(k) or IRA before age 59½, you owe the normal income tax <em>plus</em> a <strong>10% early withdrawal penalty</strong>. That means a $10,000 withdrawal could cost you $3,200 in taxes if you are in the 22% bracket — $2,200 in income tax plus a $1,000 penalty.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS does allow exceptions to the 10% penalty. Common ones include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Total and permanent disability</li>
        <li style={{ marginBottom: '0.5rem' }}>Substantially Equal Periodic Payments (SEPP / Rule 72(t))</li>
        <li style={{ marginBottom: '0.5rem' }}>Separation from service at age 55 or older (401(k) only)</li>
        <li style={{ marginBottom: '0.5rem' }}>Unreimbursed medical expenses exceeding 7.5% of AGI</li>
        <li style={{ marginBottom: '0.5rem' }}>First-time home purchase (Roth IRA contributions and up to $10,000 in earnings)</li>
        <li style={{ marginBottom: '0.5rem' }}>Birth or adoption expenses (up to $5,000)</li>
        <li style={{ marginBottom: '0.5rem' }}>Qualified disaster distributions (when Congress specifically permits them)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even when the penalty is waived, you still owe <em>income tax</em> on the withdrawal. Only Roth contributions (not earnings) can be withdrawn completely penalty- and tax-free at any age.{' '}
        <a href="https://www.irs.gov/taxtopics/tc558" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 558 — Additional Tax on Early Distributions)
        </a>
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Required Minimum Distributions (RMDs): You Must Take Money Out
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS does not let money sit in traditional accounts forever. Once you reach age <strong>73</strong>, you must begin taking <strong>Required Minimum Distributions (RMDs)</strong> each year from your traditional 401(k)s and Traditional IRAs. (The SECURE 2.0 Act raised this age from 72 starting in 2023.)
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The RMD amount is calculated by dividing your account balance at the end of the previous year by a life expectancy factor from the IRS Uniform Lifetime Table. For a 73-year-old, that factor is 26.5 — so a $500,000 balance would require an RMD of about <strong>$18,868</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Missing an RMD is expensive. The penalty is <strong>25% of the amount you should have withdrawn</strong> (reduced to 10% if you fix the shortfall within two years).{' '}
        <a href="https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-required-minimum-distributions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — RMD FAQs)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        RMDs from traditional accounts are taxed as ordinary income in the year you receive them. This is why careful retirement planning — including Roth conversions before age 73 — can help manage your tax bill.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How States Tax Retirement Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal taxes are just part of the story. <strong>State taxes on retirement income vary enormously</strong> — from states that tax everything to states that exempt it all. Here is a quick overview:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Category</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>States / Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['No state income tax', 'Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming — 401(k)/IRA withdrawals are state-tax-free.'],
              ['Exempt retirement income', 'Illinois, Mississippi, Pennsylvania exempt most or all retirement income. Iowa is phasing in a full exemption for retirees age 55+.'],
              ['Partial exemption', 'Many states (Georgia, Michigan, North Carolina, Virginia, others) offer deductions or credits for retirement income — often age-based.'],
              ['Fully taxable', 'California, Minnesota, New Jersey, Vermont, and others tax 401(k)/IRA withdrawals as ordinary income — same as wages.'],
            ].map(([cat, note], i) => (
              <tr key={cat} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>{cat}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are planning retirement and have flexibility on where you live, your state choice can make a significant difference. A $60,000 annual IRA withdrawal in{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a> costs nothing in state tax. The same withdrawal in{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> could cost an additional $3,000–$5,000 per year depending on your total income.{' '}
        <a href="https://taxfoundation.org/data/all/state/states-that-do-not-tax-retirement-income/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation — States That Do Not Tax Retirement Income)
        </a>
      </p>

      {/* Section 7 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Maria&rsquo;s First Year of Retirement
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Meet Maria. She is 68, single, retired, and lives in{' '}
        <a href="/georgia" style={{ color: '#2563eb', textDecoration: 'underline' }}>Georgia</a>. She has no pension, and her income for 2026 comes from three sources:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>$24,000 in Social Security benefits</li>
        <li style={{ marginBottom: '0.5rem' }}>$36,000 in Traditional IRA withdrawals</li>
        <li style={{ marginBottom: '0.5rem' }}>$12,000 in Roth IRA withdrawals (opened more than 5 years ago)</li>
      </ul>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Source</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Traditional IRA withdrawal', '$36,000', 'Yes — 100% taxable'],
              ['Social Security benefits', '$24,000', 'Yes — 85% taxable ($20,400)'],
              ['Roth IRA withdrawal', '$12,000', 'No — tax-free'],
              ['Total gross income', '$72,000', ''],
              ['Total taxable income (before deductions)', '$56,400', ''],
              ['Standard deduction (single, age 65+)', '− $17,000', ''],
              ['Taxable income after deductions', '$39,400', ''],
            ].map(([label, amount, note], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: label.includes('Total') || label.includes('Taxable') ? 600 : 400 }}>{amount}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{note}</td>
              </tr>
            ))}
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Federal Income Tax Owed</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>~$3,967</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>Effective rate ~5.5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        A few things to notice in this example:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Roth IRA withdrawals are invisible to the IRS.</strong> Maria&rsquo;s $12,000 from the Roth IRA does not appear in any taxable income calculation.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Social Security is partially taxable.</strong> Because Maria&rsquo;s &ldquo;combined income&rdquo; (AGI + half of Social Security) exceeds $34,000, up to 85% of her Social Security is taxable. Only the $20,400 taxable portion is included.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>The standard deduction is higher at 65+.</strong> Single filers age 65 and older get an extra $1,950 added to the standard deduction — $17,000 total for 2026 instead of $15,000.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Georgia gives retirees a break.</strong> Georgia excludes up to $65,000 per person in retirement income from state taxes for taxpayers 65 and older. Maria owes $0 in Georgia state income tax.
        </li>
      </ul>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Reduce Taxes on Retirement Withdrawals
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        A few planning strategies can reduce how much tax you pay on retirement income:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Roth conversions before age 73.</strong> Moving money from a traditional IRA to a Roth IRA during lower-income years (like early retirement, before Social Security starts) lets you pay taxes now at a lower rate — and avoid RMDs and taxes later.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Delay Social Security.</strong> Waiting until age 70 to claim Social Security increases your monthly benefit by up to 32% compared to claiming at 67. More importantly, it can reduce your tax burden in your 60s when you have more flexibility over your income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Qualified Charitable Distributions (QCDs).</strong> If you are 70½ or older, you can donate up to $105,000 directly from your IRA to a qualified charity. This counts toward your RMD but is excluded from your taxable income — a powerful combination.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Spread withdrawals across years.</strong> If you can control how much you withdraw, keeping your total income in the 12% bracket saves significantly over pulling large lump sums that push you into 22% or higher.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Choose a tax-friendly state.</strong> If retirement timing gives you location flexibility, moving to a state with no income tax or a generous retirement income exemption can save thousands annually. States like{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>, and{' '}
          <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a> have no state income tax at all.
        </li>
      </ul>

      {/* Section 9 — Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Traditional 401(k) and IRA withdrawals are taxed as ordinary income — every dollar counts as income in the year you take it. Roth withdrawals are tax-free if you meet the age and five-year rules. The 10% early withdrawal penalty applies before 59½ unless an exception applies. And starting at age 73, Required Minimum Distributions force you to start drawing down traditional accounts whether you want to or not.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most powerful retirement tax planning happens <em>before</em> you retire — building Roth accounts, timing Roth conversions, and choosing where to live. But even in retirement, managing how much you withdraw each year can mean the difference between a 12% and a 22% marginal rate on your savings.
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
          See How Your State Affects Retirement Income
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use our free paycheck calculator to see how your state&rsquo;s income tax affects your salary — the same state rules apply to retirement withdrawals.
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
          <a href="https://www.irs.gov/taxtopics/tc412" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 412 — Lump-Sum Distributions</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc558" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 558 — Additional Tax on Early Distributions from Retirement Plans</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-required-minimum-distributions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS — Required Minimum Distributions FAQs</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p590b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 590-B — Distributions from Individual Retirement Arrangements (IRAs)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/states-that-do-not-tax-retirement-income/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation — Which States Tax Retirement Income?</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/benefits/retirement/planner/taxes.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov — Benefits Planner: Income Taxes and Your Social Security Benefits</a>
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
