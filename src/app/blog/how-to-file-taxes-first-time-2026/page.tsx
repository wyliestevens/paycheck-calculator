import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to File Your Taxes for the First Time: A Step-by-Step Guide (2026)',
  description:
    'Filing taxes for the first time? This step-by-step guide covers what documents you need, how to choose your filing status, free filing options, and a worked example at $42,000.',
  alternates: { canonical: '/blog/how-to-file-taxes-first-time-2026' },
  keywords:
    'how to file taxes for the first time, first time tax filer 2026, how to do your taxes, IRS Free File 2026, filing taxes step by step, first job taxes, W-2 first time filing',
  openGraph: {
    title: 'How to File Your Taxes for the First Time: A Step-by-Step Guide (2026)',
    description:
      'Everything a first-time filer needs: what documents to gather, which status to choose, free filing options, and a worked example at $42,000.',
  },
}

export default function HowToFileFirstTime() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="First-time tax filing illustration showing steps from gathering documents to receiving a refund"
        >
          <rect width="600" height="200" rx="12" fill="#d97706" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Step 1: Document */}
          <circle cx="100" cy="80" r="28" fill="rgba(255,255,255,0.25)" />
          <text x="100" y="85" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">1</text>
          <rect x="75" y="110" width="50" height="60" rx="4" fill="rgba(255,255,255,0.2)" />
          <line x1="82" y1="125" x2="118" y2="125" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="82" y1="135" x2="115" y2="135" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="82" y1="145" x2="110" y2="145" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <text x="100" y="185" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Gather Docs</text>

          {/* Arrow 1 */}
          <line x1="140" y1="100" x2="165" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" />
          <polygon points="165,93 178,100 165,107" fill="rgba(255,255,255,0.6)" />

          {/* Step 2: Choose status */}
          <circle cx="215" cy="80" r="28" fill="rgba(255,255,255,0.25)" />
          <text x="215" y="85" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">2</text>
          <text x="215" y="120" textAnchor="middle" fontSize="18" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">S / MFJ</text>
          <text x="215" y="185" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Filing Status</text>

          {/* Arrow 2 */}
          <line x1="255" y1="100" x2="280" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" />
          <polygon points="280,93 293,100 280,107" fill="rgba(255,255,255,0.6)" />

          {/* Step 3: File */}
          <circle cx="330" cy="80" r="28" fill="rgba(255,255,255,0.25)" />
          <text x="330" y="85" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">3</text>
          <rect x="312" y="110" width="36" height="26" rx="4" fill="rgba(255,255,255,0.2)" />
          <polygon points="320,118 338,126 320,134" fill="rgba(255,255,255,0.4)" />
          <text x="330" y="185" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Submit Return</text>

          {/* Arrow 3 */}
          <line x1="370" y1="100" x2="395" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" />
          <polygon points="395,93 408,100 395,107" fill="rgba(255,255,255,0.6)" />

          {/* Step 4: Refund checkmark */}
          <circle cx="445" cy="80" r="28" fill="rgba(255,255,255,0.25)" />
          <text x="445" y="85" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">4</text>
          <circle cx="445" cy="128" r="18" fill="rgba(255,255,255,0.2)" />
          <polyline points="436,128 442,135 456,120" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="445" y="185" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Refund / Done</text>

          {/* Title */}
          <text x="540" y="75" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">First Time</text>
          <text x="540" y="93" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">Filing</text>
          <text x="540" y="111" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">2026</text>
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
        How to File Your Taxes for the First Time: A Step-by-Step Guide (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 29, 2026 &middot; 10 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Filing taxes for the first time is one of those adult milestones that feels more intimidating than it actually is. If you started your first job, moved out on your own, or simply never got around to filing before &mdash; this guide covers everything you need to know from start to finish.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The good news: most first-time filers have a simple return, can file for free, and will likely get money back. The process takes 30&ndash;90 minutes if you have your documents in order.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is exactly what to do &mdash; step by step &mdash; with a full worked example at $42,000.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Do You Need to File? Income Thresholds for 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Not everyone is required to file a federal tax return. The IRS sets filing thresholds based on filing status and age. For 2026, you generally <strong>must file</strong> if your gross income exceeds:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Filing Status</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Age</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gross Income Threshold</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single', 'Under 65', '$15,000'],
              ['Single', '65 or older', '$16,550'],
              ['Married Filing Jointly', 'Both under 65', '$30,000'],
              ['Married Filing Jointly', 'One spouse 65+', '$31,550'],
              ['Married Filing Jointly', 'Both 65+', '$33,100'],
              ['Married Filing Separately', 'Any age', '$5'],
              ['Head of Household', 'Under 65', '$22,500'],
              ['Head of Household', '65 or older', '$24,050'],
              ['Qualifying Surviving Spouse', 'Under 65', '$30,000'],
            ].map(([status, age, threshold], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{age}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 600 }}>{threshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even if your income is <em>below</em> the threshold, you should still file if federal income tax was withheld from your paycheck. Filing is the only way to get that money back as a refund.{' '}
        <a href="https://www.irs.gov/help/ita/do-i-need-to-file-a-tax-return" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Do I Need to File?)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 1: Gather Your Documents
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Before you start, collect everything you will need. Most documents arrive by mail or email between late January and mid-February for the prior tax year.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Personal Information</h3>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}><strong>Social Security number (SSN)</strong> &mdash; yours and any dependents</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>Bank routing and account number</strong> &mdash; for direct deposit of your refund</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>Prior year AGI</strong> &mdash; only needed if you filed before (used for identity verification when e-filing)</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Income Documents</h3>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}><strong>W-2</strong> &mdash; from each employer you worked for (shows wages and withholding)</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>1099-NEC</strong> &mdash; from clients if you did freelance or contract work</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>1099-INT / 1099-DIV</strong> &mdash; from banks or brokerages if you earned interest or dividends</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>1099-K</strong> &mdash; if you sold goods on eBay, Etsy, or received payments via Venmo/PayPal over $5,000</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>1099-G</strong> &mdash; if you collected unemployment benefits</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>SSA-1099</strong> &mdash; if you received Social Security benefits</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Deduction and Credit Documents (if applicable)</h3>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}><strong>1098-E</strong> &mdash; student loan interest paid (up to $2,500 may be deductible)</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>1098-T</strong> &mdash; tuition paid (for education tax credits)</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>Healthcare marketplace 1095-A</strong> &mdash; if you bought insurance through HealthCare.gov</li>
        <li style={{ marginBottom: '0.375rem' }}>Records of charitable donations, HSA contributions, or IRA contributions</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Pro tip: Missing a W-2? Contact your employer first. If that fails, you can also access many tax documents through the{' '}
        <a href="https://www.irs.gov/individuals/get-transcript" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Get Transcript tool
        </a>.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 2: Choose Your Filing Status
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Your <strong>filing status</strong> determines your tax brackets, standard deduction, and eligibility for credits. Choose the one that applies to your situation as of December 31 of the tax year:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Single</strong> &mdash; unmarried, or legally separated. The most common status for first-time filers. Standard deduction: $15,000.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Married Filing Jointly (MFJ)</strong> &mdash; you were married and choose to file one return together. Standard deduction: $30,000. Usually the best option for married couples.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Married Filing Separately (MFS)</strong> &mdash; married but file separate returns. Rarely beneficial except in specific situations (income-driven student loan repayment, liability concerns).</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Head of Household (HoH)</strong> &mdash; unmarried <em>and</em> paid more than half the cost of keeping a home for a qualifying dependent. More favorable brackets than Single. Standard deduction: $22,500.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Qualifying Surviving Spouse</strong> &mdash; for widows/widowers with a dependent child, for up to two years after the spouse&rsquo;s death.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most first-time filers will use <strong>Single</strong>. If you are unsure, the{' '}
        <a href="https://www.irs.gov/help/ita/what-is-my-filing-status" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Interactive Tax Assistant
        </a>{' '}
        can help you determine your status.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 3: Choose How to File &mdash; Free Options First
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Most first-time filers qualify for free tax software. Here are your best options:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>IRS Free File</h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS partners with several software companies to offer <strong>completely free federal filing</strong> for taxpayers with adjusted gross income (AGI) of $84,000 or less in 2026. This covers the vast majority of first-time filers.{' '}
        <a href="https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Free File)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>IRS Free File Fillable Forms</h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        If your income exceeds $84,000, the IRS offers{' '}
        <a href="https://www.irs.gov/e-file-providers/free-file-fillable-forms" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Free File Fillable Forms
        </a>{' '}
        &mdash; electronic versions of IRS forms with no income limit. These require more tax knowledge since there is no guided interview.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Volunteer Income Tax Assistance (VITA)</h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        If you earn $67,000 or less, the IRS&rsquo;s{' '}
        <a href="https://www.irs.gov/individuals/free-tax-return-preparation-for-you-by-volunteers" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          VITA program
        </a>{' '}
        offers free in-person tax preparation at thousands of locations nationwide. IRS-certified volunteers file your return for free &mdash; a great option if you want a human to help.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Commercial Software</h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        TurboTax, H&amp;R Block, TaxAct, and FreeTaxUSA all offer free tiers for simple returns (W-2 income only). State filing is typically $15&ndash;$40 extra, but some free options include state filing. FreeTaxUSA is often the best value for simple returns, charging nothing for federal and a small fee for state.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Step 4: Fill Out Your Return
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Whether you use software or paper forms, filing a return follows the same basic flow. Here is what happens at each stage:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Enter your personal information</strong> &mdash; name, SSN, address, and filing status.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Report your income</strong> &mdash; enter wages from Box 1 of each W-2. Add any 1099 income. The software totals everything into your gross income.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Claim above-the-line deductions</strong> &mdash; student loan interest, HSA contributions, IRA contributions, and similar items reduce your Adjusted Gross Income (AGI) before the standard deduction.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Claim the standard deduction</strong> &mdash; most first-time filers take the standard deduction ($15,000 for Single in 2026) rather than itemizing, because it is larger.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Calculate taxable income</strong> &mdash; AGI minus deductions. This is the number your tax is computed on.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Apply tax credits</strong> &mdash; credits reduce your tax bill dollar-for-dollar. Common ones for first-time filers include the Earned Income Tax Credit and the Saver&rsquo;s Credit.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Subtract withholding</strong> &mdash; Box 2 of your W-2 shows federal income tax already withheld. If withholding exceeds your tax, the difference is your refund. If it falls short, you owe the difference.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Submit and sign electronically</strong> &mdash; e-filing is faster, more accurate, and results in refunds arriving in 21 days or less via direct deposit.{' '}
          <a href="https://www.irs.gov/refunds/get-your-refund-faster-tell-irs-to-direct-deposit-your-refund" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(IRS &mdash; Direct Deposit)</a>
        </li>
      </ol>

      {/* Section 6: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: First Job at $42,000 (Single, No Dependents)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a complete real-world example. Jordan just finished college and started a full-time job at $42,000 per year. Here is what Jordan&rsquo;s 2026 federal return looks like:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Line Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross wages (W-2 Box 1)', '$42,000', 'From employer'],
              ['Student loan interest (1098-E)', '−$1,200', 'Above-the-line deduction'],
              ['Adjusted Gross Income (AGI)', '$40,800', 'After deduction'],
              ['Standard deduction (Single)', '−$15,000', '2026 amount'],
              ['Taxable income', '$25,800', 'AGI minus standard deduction'],
              ['Federal tax: 10% on $0–$11,925', '$1,192.50', ''],
              ['Federal tax: 12% on $11,925–$25,800', '$1,665.00', '12% × $13,875'],
              ['Total federal income tax', '$2,857.50', ''],
              ['Federal withholding (W-2 Box 2)', '$3,120.00', 'Employer withheld throughout year'],
              ['Refund (withholding − tax)', '$262.50', 'Direct deposited in ~21 days'],
            ].map(([item, amount, note], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{item}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i >= 9 ? '#059669' : i >= 6 && i <= 8 ? '#dc2626' : '#1e293b', fontWeight: i === 9 ? 700 : 400 }}>{amount}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '0.875rem' }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Jordan pays an <strong>effective federal income tax rate of about 7.0%</strong> ($2,857.50 &divide; $40,800 AGI). Because the employer withheld a little extra, Jordan gets back <strong>$262.50</strong> as a refund &mdash; not a windfall, but not owing anything either. The student loan interest deduction saved $144 in federal tax (12% &times; $1,200).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note: Jordan also paid $3,213 in FICA taxes (Social Security + Medicare) throughout the year. FICA does not appear on the tax return &mdash; it is simply withheld from each paycheck and is not refundable.
      </p>

      {/* Section 7: Common Credits */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Tax Credits First-Time Filers Often Miss
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Tax credits reduce your tax bill dollar-for-dollar. Many first-time filers leave these on the table:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Earned Income Tax Credit (EITC)</h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The EITC is a refundable credit for low-to-moderate income workers. For 2026, the maximum credit for a single filer with no children is <strong>$649</strong>. With three or more qualifying children, the credit can reach $8,250.{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/do-i-qualify-for-earned-income-tax-credit-eitc" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; EITC Eligibility)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Saver&rsquo;s Credit (Retirement Savings Contributions Credit)</h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        If you contributed to a 401(k) or IRA and earned under $39,500 (single) in 2026, you may qualify for the Saver&rsquo;s Credit &mdash; worth up to $1,000. It is one of the most overlooked credits for young workers.{' '}
        <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-savings-contributions-savers-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Saver&rsquo;s Credit)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>American Opportunity Tax Credit (AOTC)</h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        If you paid college tuition in 2026 and are in your first four years of higher education, the AOTC offers up to <strong>$2,500 per year</strong> &mdash; and 40% ($1,000) is refundable even if you owe no tax.{' '}
        <a href="https://www.irs.gov/credits-deductions/individuals/aotc" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; AOTC)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Premium Tax Credit</h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you bought health insurance through the marketplace (HealthCare.gov) and have a 1095-A form, you may qualify for the Premium Tax Credit to offset your premiums. This is a refundable credit.{' '}
        <a href="https://www.irs.gov/affordable-care-act/individuals-and-families/the-premium-tax-credit-the-basics" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Premium Tax Credit)
        </a>
      </p>

      {/* Section 8: What If You Owe? */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What If You Owe Money?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your withholding came up short &mdash; common if you worked multiple jobs, had freelance income, or claimed too many allowances &mdash; you will owe a balance. Do not panic.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Pay by the deadline</strong> to avoid penalties and interest. The standard filing deadline is <strong>April 15, 2027</strong> for the 2026 tax year.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Pay online at IRS Direct Pay</strong> &mdash; free, same-day, and no registration required.{' '}
          <a href="https://www.irs.gov/payments/direct-pay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(IRS Direct Pay)</a>
        </li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Can&rsquo;t pay in full?</strong> Set up an IRS installment agreement (payment plan) online for balances under $50,000.{' '}
          <a href="https://www.irs.gov/payments/online-payment-agreement-application" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(IRS &mdash; Online Payment Agreement)</a>
        </li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Fix withholding for next year</strong> &mdash; update your W-4 with your employer to have more withheld from future paychecks.{' '}
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(IRS W-4)</a>
        </li>
      </ul>

      {/* Section 9: Deadlines */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key Deadlines and What They Mean
      </h2>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Deadline</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>What It Covers</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['January 31, 2027', 'Employers must mail your W-2; banks must send 1099s'],
              ['April 15, 2027', 'Standard deadline to file your 2026 federal return and pay any tax owed'],
              ['April 15, 2027', 'Deadline to contribute to a 2026 Traditional or Roth IRA'],
              ['October 15, 2027', 'Extended filing deadline (if you requested an extension by April 15)'],
            ].map(([deadline, what], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem' }}>{deadline}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Filing an extension</strong> gives you until October 15 to submit your return &mdash; but it does <em>not</em> extend the deadline to pay. If you owe money, you must estimate and pay by April 15 to avoid a late-payment penalty. File Form 4868 by April 15 to request the extension.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-4868" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Form 4868)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are owed a refund, there is no penalty for filing late &mdash; but you have up to <strong>three years</strong> to claim your refund before the IRS keeps it. Do not wait.
      </p>

      {/* Section 10: State Taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Don&rsquo;t Forget State Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states with an income tax require you to file a state return in addition to your federal return. State returns follow a similar process &mdash; most tax software handles both at once.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Nine states have no income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. If you lived in one of these states all year, you only need to file a federal return.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State deadlines usually match the federal April 15 deadline, but some states differ slightly. Check your state revenue department&rsquo;s website to confirm.
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Filing your taxes for the first time is not complicated if you follow the steps: gather your documents (W-2 and any 1099s), choose your filing status (usually Single), pick a free filing option, and submit before April 15. Most first-time filers spend less than an hour on their return and get a refund.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most important thing is to actually file. Skipping it means missing your refund, potentially accumulating penalties, and losing eligibility for credits. The IRS makes it easy &mdash; and free &mdash; to do it right.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fff7ed',
          border: '1px solid #fed7aa',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Exact Take-Home Pay Before You File
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly how much goes to federal tax, state tax, Social Security, and Medicare &mdash; and what actually hits your bank account.
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
          <a href="https://www.irs.gov/help/ita/do-i-need-to-file-a-tax-return" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Do I Need to File a Tax Return?</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Free File: Do Your Federal Taxes for Free</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/free-tax-return-preparation-for-you-by-volunteers" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Free Tax Return Preparation (VITA)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/help/ita/what-is-my-filing-status" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; What Is My Filing Status?</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/do-i-qualify-for-earned-income-tax-credit-eitc" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; EITC Eligibility</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-savings-contributions-savers-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Saver&rsquo;s Credit</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/aotc" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; American Opportunity Tax Credit</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/payments/direct-pay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Direct Pay</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-4868" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 4868, Extension of Time To File</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/get-transcript" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Get Your Tax Record (Transcript)</a>
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
