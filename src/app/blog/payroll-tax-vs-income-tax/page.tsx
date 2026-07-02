import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payroll Tax vs Income Tax: What\'s the Difference? (2026)',
  description:
    'Payroll taxes and income taxes both come out of your paycheck — but they work completely differently. Here\'s the clear breakdown, with a $70,000 worked example.',
  alternates: { canonical: '/blog/payroll-tax-vs-income-tax' },
  keywords:
    'payroll tax vs income tax, what is payroll tax, FICA vs income tax, Social Security tax vs income tax, payroll taxes explained 2026, difference between payroll and income tax',
  openGraph: {
    title: 'Payroll Tax vs Income Tax: What\'s the Difference? (2026)',
    description:
      'Payroll taxes and income taxes both come out of your paycheck — but they fund different programs and follow different rules. Here\'s the full breakdown.',
  },
}

export default function PayrollTaxVsIncomeTax() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Payroll tax vs income tax comparison illustration"
        >
          <rect width="600" height="200" rx="12" fill="#4338ca" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Left panel: Income Tax */}
          <rect x="35" y="35" width="245" height="130" rx="6" fill="rgba(255,255,255,0.15)" />
          <text x="157" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif" opacity="0.9">INCOME TAX</text>
          <line x1="60" y1="76" x2="254" y2="76" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="157" y="100" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Progressive brackets</text>
          <text x="157" y="118" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">10% — 37%</text>
          <text x="157" y="136" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Funds general government</text>
          <text x="157" y="154" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Based on total earnings</text>

          {/* VS divider */}
          <circle cx="300" cy="100" r="20" fill="rgba(255,255,255,0.2)" />
          <text x="300" y="106" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">VS</text>

          {/* Right panel: Payroll Tax */}
          <rect x="320" y="35" width="245" height="130" rx="6" fill="rgba(255,255,255,0.15)" />
          <text x="442" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">PAYROLL TAX</text>
          <line x1="345" y1="76" x2="539" y2="76" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="442" y="100" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Flat rates (6.2% + 1.45%)</text>
          <text x="442" y="118" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Employer matches</text>
          <text x="442" y="136" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Funds Social Security</text>
          <text x="442" y="154" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">and Medicare</text>
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
        Payroll Tax vs Income Tax: What&rsquo;s the Difference? (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 2, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Look at your pay stub and you will see more than one tax line. There is federal income tax, and then there are separate lines for Social Security and Medicare. These are all taxes &mdash; but they are not the same thing. <strong>Payroll taxes</strong> and <strong>income taxes</strong> work in completely different ways, fund different programs, and follow different rules.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most people lump them together as &ldquo;taxes the government takes out of my paycheck,&rdquo; but understanding the difference helps you make smarter decisions about your finances, especially if you are comparing job offers, thinking about self-employment, or planning for retirement.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Income Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Income tax</strong> is a tax on how much money you earn. The United States federal government charges income tax using a <strong>progressive bracket system</strong> &mdash; meaning the more you earn, the higher percentage you pay, but only on the portion of income that falls within each bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For 2026, the federal income tax brackets for a single filer look like this:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income (Single Filer)</th>
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
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#4338ca', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before any income is taxed, you first subtract the <strong>standard deduction</strong> &mdash; $15,000 for a single filer in 2026. So if you earn $70,000, only $55,000 is actually subject to federal income tax.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca', textDecoration: 'underline' }}>
          (IRS &mdash; 2026 Tax Inflation Adjustments)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states also charge their own income tax on top of the federal amount. State income tax rates range from 0% in nine no-tax states (like{' '}
        <a href="/texas" style={{ color: '#4338ca', textDecoration: 'underline' }}>Texas</a> and{' '}
        <a href="/florida" style={{ color: '#4338ca', textDecoration: 'underline' }}>Florida</a>) up to 13.3% in{' '}
        <a href="/california" style={{ color: '#4338ca', textDecoration: 'underline' }}>California</a>.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Income Tax Rates, 2026)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Income taxes go into the government&rsquo;s general fund. They pay for roads, national defense, education, federal agencies, and a wide range of public services. There is no dedicated account that your income taxes fund &mdash; the money just flows into the overall federal and state budgets.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Payroll Taxes?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Payroll taxes</strong> are a separate category of taxes that are specifically tied to employment and earned income. In the United States, the main payroll taxes are <strong>Social Security tax</strong> and <strong>Medicare tax</strong>, which together are called <strong>FICA</strong> (Federal Insurance Contributions Act).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are the 2026 rates:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Social Security tax:</strong> 6.2% on wages up to the <strong>wage base of $168,600</strong>. Your employer also pays 6.2%, so the total Social Security contribution is 12.4% of your wages. Once you earn more than $168,600 in a year, you stop paying Social Security tax on any additional earnings.{' '}
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca', textDecoration: 'underline' }}>
            (SSA.gov &mdash; Contribution and Benefit Base)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Medicare tax:</strong> 1.45% on all wages &mdash; there is no income cap. Your employer matches this with another 1.45%. High earners who make over $200,000 (single) also pay an extra <strong>0.9% Additional Medicare Tax</strong> that employers do not match.{' '}
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca', textDecoration: 'underline' }}>
            (IRS &mdash; Topic 751)
          </a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike income tax, payroll taxes are <strong>flat rates</strong> &mdash; everyone pays the same percentage regardless of how much they earn (up to the wage cap for Social Security). And unlike income tax, there is no standard deduction that reduces what you are taxed on. You pay FICA on every dollar of earned wages from dollar one.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Payroll taxes fund specific programs: <strong>Social Security</strong> (retirement and disability benefits) and <strong>Medicare</strong> (health coverage for people 65 and older). The money goes into dedicated trust funds, not the general budget. When you pay Social Security tax, you are building your own future benefit based on your work history.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key Differences at a Glance
      </h2>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Feature</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Payroll Tax (FICA)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tax structure', 'Progressive brackets', 'Flat percentage rates'],
              ['Standard deduction?', 'Yes — reduces taxable income', 'No — applies to all wages'],
              ['Employer pays?', 'No', 'Yes — employer matches FICA'],
              ['Income cap?', 'No cap', 'SS cap at $168,600'],
              ['Funds', 'General government budget', 'Social Security & Medicare'],
              ['Rate (2026)', '10% to 37%', '7.65% total (6.2% + 1.45%)'],
              ['Pay stub label', 'Federal Withholding / FIT', 'OASDI / SS / MED'],
            ].map(([feature, income, payroll], i) => (
              <tr key={feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>{feature}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{income}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{payroll}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $70,000 Salary in Texas
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through exactly how both taxes work for a single person earning $70,000 per year in a state with no income tax. We will use the standard deduction and no pre-tax benefit deductions.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Step 1: Calculate Federal Income Tax
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        Subtract the standard deduction first: $70,000 &minus; $15,000 = <strong>$55,000 taxable income</strong>
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Bracket</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income in Bracket</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Owed</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925', '$1,192.50'],
              ['12%', '$11,926 – $48,475 ($36,550)', '$4,386.00'],
              ['22%', '$48,476 – $55,000 ($6,525)', '$1,435.50'],
            ].map(([bracket, income, tax], i) => (
              <tr key={bracket} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#4338ca', fontWeight: 600 }}>{bracket}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{income}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{tax}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef2f2' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Federal Income Tax</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$7,014</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Step 2: Calculate Payroll Taxes (FICA)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        FICA applies to all $70,000 of gross wages &mdash; no standard deduction reduces this.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount (You)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Employer Match</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Social Security</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#4338ca' }}>6.2%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$4,340</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$4,340</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Medicare</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#4338ca' }}>1.45%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$1,015</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$1,015</td>
            </tr>
            <tr style={{ background: '#fef2f2' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total FICA (your share)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$5,355</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$5,355</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Step 3: Total Tax Picture
      </h3>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <tbody>
            {[
              ['Gross Pay', '$70,000', '#1e293b'],
              ['Federal Income Tax', '−$7,014', '#dc2626'],
              ['Social Security (6.2%)', '−$4,340', '#dc2626'],
              ['Medicare (1.45%)', '−$1,015', '#dc2626'],
              ['State Income Tax (Texas)', '$0', '#059669'],
            ].map(([label, amount, color], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Annual Take-Home Pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$57,631</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that payroll taxes ($5,355) took almost as much as federal income tax ($7,014) &mdash; yet most people only think about income tax. That is a big oversight. Your employer also quietly paid another $5,355 in FICA on your behalf. Your total labor cost to your employer was $75,355, not $70,000.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Want to see how this changes with different states? Check the calculator for{' '}
        <a href="/new-york" style={{ color: '#4338ca', textDecoration: 'underline' }}>New York</a>,{' '}
        <a href="/washington" style={{ color: '#4338ca', textDecoration: 'underline' }}>Washington</a>, or{' '}
        <a href="/illinois" style={{ color: '#4338ca', textDecoration: 'underline' }}>Illinois</a>.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Payroll Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of federal FICA, some states have their own payroll taxes. The most common are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State Disability Insurance (SDI):</strong>{' '}
          <a href="/california" style={{ color: '#4338ca', textDecoration: 'underline' }}>California</a> charges 1.1% of all wages for SDI, which funds short-term disability and paid family leave benefits. New Jersey, New York, Hawaii, and Rhode Island have similar programs. This is a payroll tax, not an income tax &mdash; it does not change based on your bracket.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State Unemployment Insurance (SUI):</strong> Employers (not employees) in every state pay into unemployment insurance funds. Rates vary widely by state and employer history. If you are an employee, SUI does not come out of your paycheck &mdash; your employer covers it.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State Family Leave taxes:</strong> A growing number of states &mdash; including{' '}
          <a href="/washington" style={{ color: '#4338ca', textDecoration: 'underline' }}>Washington</a> and{' '}
          <a href="/new-jersey" style={{ color: '#4338ca', textDecoration: 'underline' }}>New Jersey</a> &mdash; charge small payroll taxes to fund paid family and medical leave programs.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These state payroll taxes are flat-rate deductions, just like federal FICA. They show up as separate lines on your pay stub and are distinct from state income tax.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What About Self-Employed Workers?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is where the payroll vs. income tax distinction gets especially important. When you work for an employer, your employer pays half of your FICA taxes. When you are self-employed, there is no employer &mdash; you pay <em>both halves</em>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is called the <strong>self-employment tax</strong>, and the rate is <strong>15.3%</strong> (12.4% Social Security + 2.9% Medicare) on net self-employment income up to the Social Security wage base, plus 2.9% Medicare on everything above it.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca', textDecoration: 'underline' }}>
          (IRS &mdash; Self-Employment Tax)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Freelancers earning $70,000 net would owe roughly <strong>$9,890 in self-employment tax</strong> alone, before any income taxes. The IRS does let you deduct half of this SE tax from your gross income &mdash; which slightly reduces your income tax bill &mdash; but the total tax burden for the self-employed is still significantly higher than for W-2 employees at the same gross income.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Payroll Taxes Affect Lower vs. Higher Earners Differently
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One important but often overlooked fact: payroll taxes hit lower-income workers <em>proportionally harder</em> than income taxes do.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is why. Income taxes are progressive &mdash; they start at 10% and go up, plus you get a standard deduction that shields a chunk of your income entirely. Payroll taxes are flat and start on dollar one with no exemptions.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For someone earning $30,000 a year, the effective federal income tax rate might be as low as 4&ndash;5% after the standard deduction. But they still pay 7.65% in FICA on every dollar earned. FICA can easily be their <em>biggest</em> tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For someone earning $250,000, income taxes take a much bigger share &mdash; but their Social Security tax stops entirely once they pass $168,600. Every dollar above that cap is free from Social Security tax. So their effective FICA rate on total income is actually lower than someone earning $50,000.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What to Look for on Your Pay Stub
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Both income taxes and payroll taxes show up as separate line items on your pay stub. Here is how to tell them apart:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Fed Tax / Federal Withholding / FIT</strong> &mdash; This is your <em>income tax</em> withheld. It varies based on your W-4 elections, filing status, and earnings.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>State Tax / SIT</strong> &mdash; State <em>income tax</em> withholding, if your state has one.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>OASDI / SS / Soc Sec</strong> &mdash; Social Security <em>payroll tax</em>. This will always be exactly 6.2% of your gross wages.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>MED / Medicare / HI</strong> &mdash; Medicare <em>payroll tax</em>. Always exactly 1.45% of your gross wages (plus 0.9% if you earn over $200K).
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>SDI / CA SDI / NJ DI</strong> &mdash; State disability insurance, a <em>state payroll tax</em> found in certain states.
        </li>
      </ul>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Income tax and payroll tax are two different systems that both take money out of your paycheck &mdash; but they do it in different ways, at different rates, and for different purposes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Income tax</strong> is progressive, depends heavily on your earnings and deductions, funds the general government, and can be influenced by things like filing status, retirement contributions, and tax credits.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Payroll taxes</strong> are flat, apply from the first dollar earned, are partly matched by your employer, and fund the specific programs &mdash; Social Security and Medicare &mdash; that you will benefit from when you retire or need long-term health coverage.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Understanding both helps you see where your money actually goes every payday &mdash; and why your effective tax rate as an employee is often lower than what self-employed workers face for the same gross income.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#eef2ff',
          border: '1px solid #c7d2fe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Exact Tax Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see every line — income tax, FICA, and state payroll taxes — side by side.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#4338ca',
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
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca' }}>SSA.gov &mdash; Contribution and Benefit Base</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca' }}>IRS &mdash; Topic 751: Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca' }}>IRS &mdash; Self-Employment Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#4338ca' }}>Tax Foundation &mdash; State Individual Income Tax Rates, 2026</a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#4338ca', textDecoration: 'underline', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
