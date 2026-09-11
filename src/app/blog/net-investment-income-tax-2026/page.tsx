import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Net Investment Income Tax (NIIT) 2026: Do You Owe the Extra 3.8%?',
  description:
    "The NIIT adds a 3.8% surtax on investment income for earners above $200K. Here's who owes it, what counts as investment income, and a full worked example showing a $950 NIIT bill.",
  alternates: { canonical: '/blog/net-investment-income-tax-2026' },
  keywords:
    'net investment income tax 2026, NIIT, 3.8 percent investment tax, NIIT threshold, net investment income, Form 8960, passive income tax, capital gains surtax, investment income surtax, NIIT calculation',
  openGraph: {
    title: 'Net Investment Income Tax (NIIT) 2026: Do You Owe the Extra 3.8%?',
    description:
      "The NIIT adds a 3.8% surtax on investment income for high earners — here's who owes it, what counts, and how to minimize it.",
  },
}

export default function NetInvestmentIncomeTax2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Net Investment Income Tax illustration showing 3.8% surtax on investment income"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Left column: investment income sources */}
          <text x="105" y="44" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Investment Income</text>
          <rect x="40" y="52" width="130" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="105" y="71" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">Dividends</text>
          <rect x="40" y="86" width="130" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="105" y="105" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">Capital Gains</text>
          <rect x="40" y="120" width="130" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="105" y="139" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">Rental Income</text>
          <rect x="40" y="154" width="130" height="22" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="105" y="169" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Interest &amp; More</text>

          {/* Arrow */}
          <line x1="185" y1="100" x2="230" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="230,92 246,100 230,108" fill="rgba(255,255,255,0.7)" />

          {/* Center: NIIT surtax box */}
          <rect x="255" y="45" width="160" height="110" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="335" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">NIIT Surtax</text>
          <text x="335" y="112" textAnchor="middle" fontSize="42" fontWeight="800" fill="#fff" fontFamily="monospace">3.8%</text>
          <text x="335" y="142" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Form 8960</text>

          {/* Right: MAGI thresholds */}
          <text x="478" y="44" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">MAGI Threshold</text>
          <rect x="428" y="52" width="140" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="498" y="68" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">Single: $200,000</text>
          <text x="498" y="79" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif" />
          <rect x="428" y="86" width="140" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="498" y="104" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">Married: $250,000</text>
          <rect x="428" y="120" width="140" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="498" y="138" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">MFS: $125,000</text>
          <rect x="428" y="154" width="140" height="22" rx="5" fill="rgba(255,255,255,0.12)" />
          <text x="498" y="169" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Not indexed for inflation</text>
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
        Net Investment Income Tax (NIIT) 2026: Do You Owe the Extra 3.8%?
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 11, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn dividends, capital gains, or rental income — and your total income exceeds certain thresholds — you may owe an additional tax that many investors overlook: the <strong>Net Investment Income Tax (NIIT)</strong>. It adds a flat <strong>3.8%</strong> surcharge on top of your regular income tax, and it can cost thousands of dollars a year if you don&rsquo;t plan for it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The NIIT was created in 2013 as part of the Affordable Care Act and has remained unchanged since. Unlike most tax provisions, the income thresholds that trigger it are <em>not</em> indexed for inflation — meaning more taxpayers are pulled in each year as wages and investment accounts grow. Here is everything you need to know about whether you owe it, what counts, and how to legally reduce it.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is the Net Investment Income Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The NIIT is a 3.8% tax imposed by{' '}
        <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Section 1411 of the Internal Revenue Code
        </a>{' '}
        on the lesser of:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Your <strong>net investment income</strong> for the year, OR</li>
        <li style={{ marginBottom: '0.5rem' }}>The amount by which your <strong>Modified Adjusted Gross Income (MAGI)</strong> exceeds the threshold for your filing status</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        It applies to <strong>individuals, estates, and trusts</strong>. For individuals, the thresholds are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>MAGI Threshold</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Inflation-Adjusted?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single', '$200,000', 'No'],
              ['Married Filing Jointly', '$250,000', 'No'],
              ['Married Filing Separately', '$125,000', 'No'],
              ['Head of Household', '$200,000', 'No'],
              ['Qualifying Surviving Spouse', '$250,000', 'No'],
              ['Estates and Trusts', '$15,650*', 'Yes (indexed)'],
            ].map(([status, threshold, indexed], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 600 }}>{threshold}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{indexed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        *The estate and trust threshold is adjusted annually for inflation. The individual thresholds have been frozen at their 2013 levels since the NIIT was enacted.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most taxpayers, MAGI equals your Adjusted Gross Income (AGI) from line 11 of your Form 1040. The IRS explains this calculation in{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8960" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 8960 instructions
        </a>
        .
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Counts as Net Investment Income?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Not all investment-related income triggers the NIIT. The tax applies only to specific categories defined in{' '}
        <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Topic 559
        </a>
        . Here is a breakdown of what counts and what does not:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Subject to NIIT?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Dividends (qualified and ordinary)', true],
              ['Interest income (bank accounts, bonds)', true],
              ['Short-term capital gains', true],
              ['Long-term capital gains', true],
              ['Rental income (passive)', true],
              ['Royalties (passive)', true],
              ['Passive business income', true],
              ['Annuity income', true],
              ['Wages and salary', false],
              ['Self-employment income', false],
              ['Social Security benefits', false],
              ['Tax-exempt interest (municipal bonds)', false],
              ['Distributions from 401(k) or IRA', false],
              ['Active business income (material participation)', false],
              ['Veterans\' benefits', false],
              ['Alimony received', false],
            ].map(([type, subject], i) => (
              <tr key={String(type)} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{type}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center' }}>
                  {subject ? (
                    <span style={{ color: '#dc2626', fontWeight: 600 }}>Yes</span>
                  ) : (
                    <span style={{ color: '#059669', fontWeight: 600 }}>No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A few important nuances worth noting: <strong>rental income</strong> is only subject to NIIT if it is passive — meaning you do not materially participate in managing the rental as a real estate professional. If you qualify as a real estate professional under IRS rules and your rental activity is therefore active, the income may escape the NIIT. Similarly, income from a business where you <strong>materially participate</strong> (spending 500+ hours per year) is generally not net investment income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Municipal bond interest is a popular NIIT avoidance tool: the interest is both federal-income-tax-exempt <em>and</em> excluded from net investment income, making it doubly valuable for high-income investors.
      </p>

      {/* Section 3 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: NIIT at $225,000 Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a complete example. Consider <strong>Sarah</strong>, a single filer in 2026 who earns:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>$180,000 in wages from her job</li>
        <li style={{ marginBottom: '0.5rem' }}>$28,000 in long-term capital gains from selling stock</li>
        <li style={{ marginBottom: '0.5rem' }}>$17,000 in qualified dividends from her brokerage account</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Sarah&rsquo;s total income is <strong>$225,000</strong>. Here is how her NIIT is calculated:
      </p>

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
          lineHeight: 1.9,
        }}
      >
        <div><strong>Step 1: Calculate net investment income</strong></div>
        <div style={{ color: '#475569', marginLeft: '1rem' }}>Capital gains: $28,000</div>
        <div style={{ color: '#475569', marginLeft: '1rem' }}>Qualified dividends: $17,000</div>
        <div style={{ color: '#475569', marginLeft: '1rem' }}>Net investment income = <strong>$45,000</strong></div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 2: Calculate MAGI over threshold</strong></div>
        <div style={{ color: '#475569', marginLeft: '1rem' }}>MAGI ($225,000) &minus; threshold ($200,000) = <strong>$25,000</strong></div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 3: Apply 3.8% to the lesser amount</strong></div>
        <div style={{ color: '#475569', marginLeft: '1rem' }}>Lesser of $45,000 and $25,000 = <strong>$25,000</strong></div>
        <div style={{ color: '#dc2626', marginLeft: '1rem', fontWeight: 700 }}>NIIT = $25,000 &times; 3.8% = <strong>$950</strong></div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Sarah owes <strong>$950 in NIIT</strong> on top of her regular income tax and the 15% preferential rate she pays on qualified dividends and long-term capital gains. This is reported on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8960" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 8960
        </a>{' '}
        and added to her total tax bill.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice the key mechanic: the NIIT does <em>not</em> apply to all $45,000 of her investment income. It applies only to the portion of income that exceeds the $200,000 threshold, which is just $25,000. If Sarah had earned $199,000 in wages and the same investment income, her MAGI over the threshold would have been $199,000 + $45,000 − $200,000 = $44,000 — and the NIIT would have applied to the full $44,000.
      </p>

      {/* Section 4 — How NIIT is calculated on your return */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Calculate and Report the NIIT
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You calculate and pay the NIIT using{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8960" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Form 8960
        </a>
        , which is attached to your Form 1040 when you file your federal tax return. The form walks through the calculation in three parts:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Part I — Net Investment Income:</strong> Add up all categories of net investment income (taxable interest, dividends, capital gains, rental/royalty income, and other income).</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Part II — MAGI:</strong> Enter your MAGI and calculate the amount above the threshold for your filing status.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Part III — Tax:</strong> Apply the 3.8% rate to the lesser of Part I or Part II to arrive at your NIIT.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you pay quarterly estimated taxes (because you have significant investment income or self-employment income), you may need to include estimated NIIT in those payments to avoid an underpayment penalty. The IRS recommends using its{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Tax Withholding Estimator
        </a>{' '}
        or Form 1040-ES to account for it.
      </p>

      {/* Section 5 — Interaction with capital gains rates */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        NIIT + Capital Gains Tax: Your True Rate on Investments
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The NIIT is a <em>separate</em> tax that stacks on top of your regular income tax rates and the preferential capital gains rates. For high-income investors, this means your effective rate on long-term capital gains and qualified dividends can reach <strong>23.8%</strong> — not just the advertised 20%.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>0% capital gains rate + 0% NIIT (below threshold) = <strong>0%</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>15% capital gains rate + 0% NIIT (below threshold) = <strong>15%</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>20% capital gains rate + 3.8% NIIT (above threshold) = <strong>23.8%</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Similarly, for ordinary investment income (short-term gains, taxable interest) that sits in the 37% federal bracket, the NIIT adds another 3.8%, bringing the combined federal rate to <strong>40.8%</strong> before state taxes. This is why tax planning around investment income is so important for high earners.
      </p>

      {/* Section 6 — Strategies */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        7 Strategies to Reduce Your NIIT
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because the NIIT has two components — net investment income and MAGI above a threshold — you can reduce it by either lowering investment income or lowering MAGI. Here are seven legitimate strategies:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        1. Maximize Retirement Account Contributions
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Traditional 401(k) and IRA contributions reduce your MAGI, which in turn reduces your MAGI over the NIIT threshold. The 2026 401(k) employee contribution limit is $23,500 ($31,000 if you are 50 or older). Every dollar you contribute moves you closer to — or further below — the threshold.{' '}
        <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — 401(k) Contribution Limits)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        2. Invest in Municipal Bonds
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Interest from municipal bonds is excluded from both gross income (for federal tax purposes) and from net investment income for NIIT purposes. For a high-income investor, muni bonds&rsquo; tax-equivalent yield can significantly outpace taxable bonds. This is a double win — no income tax, no NIIT.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        3. Tax-Loss Harvesting
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Selling investments at a loss offsets capital gains, directly reducing your net investment income for NIIT purposes. A $10,000 capital loss offsetting $10,000 in gains saves you $380 in NIIT alone (3.8% × $10,000), on top of the income tax savings.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        4. Shift to Growth Stocks That Pay No Dividends
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Dividends are subject to NIIT each year they are paid. Unrealized capital gains on growth stocks are not. By holding stocks that reinvest earnings instead of paying dividends, you defer the NIIT until you eventually sell — when you can choose the timing and amount of gain to realize.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        5. Contribute to an HSA
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Health Savings Account contributions reduce your MAGI on a dollar-for-dollar basis (up to $4,300 for self-only coverage or $8,550 for family coverage in 2026). Lower MAGI means less income above the NIIT threshold.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Publication 969: HSAs)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        6. Use Charitable Remainder Trusts or Donor-Advised Funds
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Donating appreciated securities to a donor-advised fund or charitable remainder trust lets you avoid capital gains tax on the appreciation — and since you never recognize the gain, it never becomes net investment income subject to NIIT. You also receive a charitable deduction that lowers your MAGI.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        7. Materially Participate in Rental Properties
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you qualify as a <strong>real estate professional</strong> under{' '}
        <a href="https://www.irs.gov/publications/p527" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 527
        </a>{' '}
        rules (spending more than 750 hours per year in real estate activities, with that being more than 50% of your total working time), your rental income may be classified as non-passive — removing it from net investment income. This is a complex determination and typically requires working with a tax professional.
      </p>

      {/* Section 7 — NIIT vs Additional Medicare Tax */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        NIIT vs. Additional Medicare Tax: What&rsquo;s the Difference?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        High earners often get confused between the NIIT and the Additional Medicare Tax (AMT). They have the same income thresholds ($200,000 single, $250,000 married) but apply to <em>completely different types of income</em>:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>NIIT (3.8%)</strong> applies to <em>investment income</em> — dividends, capital gains, rental income, etc. It does <em>not</em> apply to wages or self-employment income.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Additional Medicare Tax (0.9%)</strong> applies to <em>wages and self-employment income</em> above the threshold. It does <em>not</em> apply to investment income.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In theory, both taxes could apply simultaneously to different parts of your income: a single person earning $220,000 in wages and $30,000 in dividends would owe an Additional Medicare Tax on $20,000 of wages (0.9% × $20,000 = $180) AND a NIIT on $30,000 of investment income (3.8% × $30,000 = $1,140) — a combined surcharge of $1,320 on top of regular income tax.
      </p>

      {/* Section 8 — Estimated taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does the NIIT Affect Your Quarterly Estimated Taxes?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes. If you have significant investment income that is not subject to withholding — such as capital gains from selling a rental property or large dividends from a taxable brokerage — you may need to increase your quarterly estimated tax payments to include the NIIT.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under the IRS safe harbor rule, you generally avoid underpayment penalties if you either pay 90% of the current year&rsquo;s tax liability or 100% of your prior year&rsquo;s tax liability (110% if your prior-year AGI exceeded $150,000). Since the NIIT is part of your total tax liability, it is included in these calculations.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Form 1040-ES Instructions)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you receive a large one-time capital gain — for example, from selling a business, investment property, or large block of stock — you can often cover the NIIT liability by adjusting your withholding on other income for the remainder of the year rather than making a separate estimated payment. Your payroll department can withhold additional federal tax from your wages using a revised Form W-4.
      </p>

      {/* Section 9 — Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Net Investment Income Tax adds a 3.8% surcharge on investment income for individuals earning above $200,000 (single) or $250,000 (married filing jointly). It applies to dividends, capital gains, rental income, and other passive income — but <em>not</em> to wages, Social Security benefits, retirement account distributions, or municipal bond interest.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The tax is calculated on the lesser of (a) your net investment income or (b) the amount your MAGI exceeds the threshold. This means it does not always hit your entire investment income — only the portion that pushes you above the limit.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        With smart planning — maxing out retirement accounts, using HSAs, harvesting losses, holding growth stocks, or shifting to tax-exempt bonds — many investors can reduce or eliminate their NIIT exposure. The NIIT thresholds are not indexed for inflation, so even middle-income investors with significant investment income may eventually encounter it as their portfolios grow.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you expect to owe the NIIT, consult a tax professional before year end — most NIIT strategies need to be executed during the tax year, not after. Once December 31 passes, your options for reducing net investment income for that year are gone.
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
          See Your Full Tax Picture in Seconds
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see a complete paycheck breakdown — federal tax, state tax, FICA, and more — so you know exactly what you take home.
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
          <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 559: Net Investment Income Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8960" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 8960, Net Investment Income Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/net-investment-income-tax-faqs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Net Investment Income Tax FAQs</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 401(k) Contribution Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 969: HSAs and Other Tax-Favored Health Plans</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p527" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 527: Residential Rental Property</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 1040-ES, Estimated Tax for Individuals</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
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
