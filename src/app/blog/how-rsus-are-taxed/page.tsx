import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How RSUs Are Taxed in 2026: A Complete Guide',
  description:
    'RSUs are taxed as ordinary income when they vest — not when they\'re granted. Here\'s exactly how RSU taxation works at vesting and at sale, with a full worked example and capital gains breakdown.',
  alternates: { canonical: '/blog/how-rsus-are-taxed' },
  keywords:
    'how RSUs are taxed, RSU taxation 2026, restricted stock units taxes, RSU vesting tax, RSU withholding, RSU capital gains, stock compensation taxes 2026, equity compensation taxes',
  openGraph: {
    title: 'How RSUs Are Taxed in 2026: A Complete Guide',
    description:
      'RSUs are taxed as ordinary income when they vest — not when they\'re granted. Here\'s the exact breakdown with worked examples.',
  },
}

export default function HowRSUsAreTaxed() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="RSU taxation lifecycle showing grant date with no tax, vesting date with ordinary income tax, and sale date with capital gains tax"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.07)" />

          {/* Grant box */}
          <rect x="40" y="52" width="118" height="96" rx="8" fill="rgba(255,255,255,0.14)" />
          <text x="99" y="79" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">GRANT</text>
          <text x="99" y="97" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Day 0</text>
          <rect x="57" y="107" width="84" height="20" rx="4" fill="rgba(255,255,255,0.15)" />
          <text x="99" y="121" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">No Tax Yet</text>

          {/* Arrow 1 */}
          <line x1="162" y1="100" x2="198" y2="100" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" />
          <polygon points="198,93 213,100 198,107" fill="rgba(255,255,255,0.45)" />

          {/* Vesting box - highlighted */}
          <rect x="216" y="38" width="168" height="124" rx="8" fill="rgba(255,255,255,0.22)" />
          <text x="300" y="66" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">VESTING</text>
          <text x="300" y="84" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Year 1 to 4</text>
          <rect x="234" y="93" width="132" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="111" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff" fontFamily="sans-serif">Ordinary Income Tax</text>
          <text x="300" y="140" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">+ Social Security + Medicare</text>

          {/* Arrow 2 */}
          <line x1="388" y1="100" x2="424" y2="100" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" />
          <polygon points="424,93 439,100 424,107" fill="rgba(255,255,255,0.45)" />

          {/* Sale box */}
          <rect x="442" y="52" width="118" height="96" rx="8" fill="rgba(255,255,255,0.14)" />
          <text x="501" y="79" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">SALE</text>
          <text x="501" y="97" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Later</text>
          <rect x="455" y="107" width="92" height="20" rx="4" fill="rgba(255,255,255,0.15)" />
          <text x="501" y="121" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Capital Gains Tax</text>

          {/* Bottom label */}
          <text x="300" y="185" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">RSU TAXATION LIFECYCLE</text>
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
        How RSUs Are Taxed in 2026: A Complete Guide
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 7, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Restricted Stock Units (RSUs) are one of the most common forms of equity compensation at tech companies, startups, and large corporations. But when your RSU grant starts vesting, the tax implications can be surprising. Many employees are caught off guard when a large amount of income appears on their W-2 in the year shares vest &mdash; and then face capital gains taxes when they eventually sell.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        RSU taxation works in two distinct stages: <strong>ordinary income tax at vesting</strong> and <strong>capital gains tax when you sell</strong>. Understanding exactly when each tax applies &mdash; and how much &mdash; is essential for managing your cash flow and avoiding an April surprise.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers everything: how RSUs are taxed, what your employer withholds automatically, how your state adds to the bill, and strategies to keep more of your equity compensation.
      </p>

      {/* What Are RSUs */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are RSUs?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A Restricted Stock Unit is a promise from your employer to deliver a specific number of company shares on a future date, provided you meet certain conditions &mdash; usually staying employed for a set period. This condition is called a <strong>vesting schedule</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Common vesting schedules include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>4-year graded vesting:</strong> 25% of shares vest after year 1 (the &ldquo;cliff&rdquo;), then equal monthly or quarterly amounts over the next 3 years</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Annual vesting:</strong> Equal portions vest each year over 3&ndash;5 years</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Performance-based vesting:</strong> Shares vest when specific company or individual milestones are met</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On the <strong>grant date</strong>, you don&rsquo;t own any shares yet &mdash; and you owe no taxes. The tax clock starts the moment shares actually vest and are delivered to you.
      </p>

      {/* Two-stage taxation */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How RSU Taxation Works: Two Separate Events
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        RSUs are subject to two different tax events at two different times. This two-stage system trips up even financially savvy employees:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Vesting &mdash; ordinary income tax:</strong> The fair market value of vested shares is treated as wages and taxed at ordinary income rates, including federal income tax, FICA (Social Security + Medicare), and state income tax.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Sale &mdash; capital gains tax:</strong> Any gain or loss from the difference between the sale price and the stock&rsquo;s value at vesting is taxed as a capital gain (or deductible as a capital loss).</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>cost basis</strong> for capital gains purposes is the fair market value on the day the shares vest. If you sell immediately after vesting, there is no capital gain at all &mdash; you only pay ordinary income tax at vesting.
      </p>

      {/* Stage 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Stage 1: Ordinary Income Tax at Vesting
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When your RSUs vest, the IRS treats the shares exactly like wages you earned. The taxable amount is:
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
        Taxable Income = Shares Vested &times; Fair Market Value on Vest Date
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This amount is added to your total W-2 wages for the year. If you earn $85,000 in base salary and $10,000 worth of RSUs vest, the IRS sees $95,000 in ordinary income from you. That can push you into a higher federal tax bracket and affect other income-sensitive calculations, like student loan repayment plans or ACA marketplace subsidy eligibility.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p525.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 525, Taxable and Nontaxable Income)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer is required to withhold taxes on RSU income just as they do from your regular paycheck &mdash; but the withholding rate is different, and often not enough.
      </p>

      {/* 22% withholding */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 22% Withholding Rate &mdash; and Why You May Owe More
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS requires employers to withhold federal income tax on RSU income at the <strong>supplemental wage withholding rate of 22%</strong>. This flat rate applies to bonuses, RSUs, and other supplemental wages instead of your actual marginal rate.{' '}
        <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 15, Employer&rsquo;s Tax Guide)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here&rsquo;s the problem: <strong>22% is often not enough</strong>. If your combined salary and RSU income lands you in the 24%, 32%, or 35% federal bracket, you&rsquo;ll owe more at tax time than was withheld. This is one of the most common reasons RSU recipients get a large, unexpected tax bill in April.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Example: you earn $150,000 in salary and $50,000 in RSU income. Your marginal federal rate on the RSU income is 32% &mdash; but only 22% was withheld. That&rsquo;s a $5,000 gap that comes due at tax time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your supplemental wages exceed $1 million in a calendar year, the withholding rate jumps to 37% on the excess. But for most employees, the 22% rate applies.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To avoid surprises, consider making quarterly estimated tax payments in years with significant vesting, or adjusting your W-4 to increase withholding from your regular paycheck.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Estimated Tax for Individuals)
        </a>
      </p>

      {/* FICA on RSUs */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        FICA Taxes Also Apply to RSU Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Beyond federal income tax, RSU income is also subject to FICA &mdash; the Social Security and Medicare payroll taxes that come out of every paycheck:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security:</strong> 6.2% on wages up to $168,600 (the 2026 wage base)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare:</strong> 1.45% on all wages, no income cap</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Additional Medicare Tax:</strong> 0.9% on wages above $200,000 (single) or $250,000 (married filing jointly)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your year-to-date salary has already passed $168,600 by the time RSUs vest, no additional Social Security tax is owed on that RSU income. But Medicare always applies with no cap. High earners whose RSU income pushes total wages above $200,000 will also trigger the 0.9% Additional Medicare Tax.{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 751: Social Security and Medicare Withholding Rates)
        </a>
      </p>

      {/* Stage 2: Capital Gains */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Stage 2: Capital Gains Tax When You Sell
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Once shares vest and are delivered to you, you own them. When you sell, any difference between the <strong>sale price</strong> and the <strong>fair market value at vesting</strong> is a capital gain or loss.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Whether it&rsquo;s taxed at the short-term or long-term capital gains rate depends on how long you held the shares after they vested:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Held 1 year or less:</strong> Short-term gain, taxed at your ordinary income rate (10%&ndash;37%)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Held more than 1 year:</strong> Long-term gain, taxed at 0%, 15%, or 20% depending on your income level</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The 2026 long-term capital gains rate thresholds for single filers:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single Filer Income</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Filing Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0%', 'Up to $48,350', 'Up to $96,700'],
              ['15%', '$48,351 – $533,400', '$96,701 – $600,050'],
              ['20%', 'Over $533,400', 'Over $600,050'],
            ].map(([rate, single, mfj], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{mfj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        High earners may also owe the <strong>Net Investment Income Tax (NIIT) of 3.8%</strong> on investment gains if their modified adjusted gross income exceeds $200,000 (single) or $250,000 (married filing jointly). This stacks on top of the capital gains rate.{' '}
        <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 559: Net Investment Income Tax)
        </a>
      </p>

      {/* Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: 100 RSUs at $40/Share
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s walk through a complete scenario. You earn <strong>$85,000</strong> in base salary. Your company granted you 400 RSUs vesting 100 per year over 4 years. In Year 1, your 100 shares vest when the stock price is <strong>$40/share</strong>.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        At Vesting: Tax on $4,000 of RSU Income
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        100 shares &times; $40 = <strong>$4,000</strong> is added to your W-2. Here is what gets withheld, comparing a no-income-tax state (like Texas) to California:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Texas (0% state)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>California (~9.3%)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal income (supplemental)', '22%', '$880', '$880'],
              ['Social Security', '6.2%', '$248', '$248'],
              ['Medicare', '1.45%', '$58', '$58'],
              ['State income tax', '0% / 9.3%', '$0', '$372'],
            ].map(([label, rate, tx, ca], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{tx}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{ca}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef3c7' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Withheld</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$1,186</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$1,558</td>
            </tr>
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '1px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Net Value After Withholding</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '1px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,814</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '1px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,442</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The same RSU vesting event is worth <strong>$372 more</strong> in Texas than in California &mdash; purely because of state income tax. Over a multi-year vesting schedule with larger grants, that difference becomes tens of thousands of dollars.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        Also note: this example uses the 22% federal withholding rate. But the employee&rsquo;s actual marginal rate on $89,000 of total income ($85K salary + $4K RSU) is <strong>22%</strong>, so withholding is exactly right here. If the RSU grant were larger and pushed total income higher, the 22% withholding could leave a gap.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Sell-to-Cover: How Many Shares You Actually Receive
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most employers handle RSU withholding through a <strong>&ldquo;sell-to-cover&rdquo;</strong> mechanism: on the vesting date, they automatically sell enough shares to cover the tax withholding obligation and deliver the rest to you. In our Texas example:
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
        Shares sold to cover taxes: $1,186 &divide; $40/share = 29.65 &rarr; 30 shares sold<br />
        Net shares delivered to you: 100 &minus; 30 = <strong>70 shares</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In California, approximately 39 shares would be sold to cover the higher withholding, leaving you 61 shares. The shares sold to cover create no capital gain or loss because they are sold at the same price as the vesting FMV &mdash; which is also the cost basis.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        At Sale: Capital Gains on Your Remaining 70 Shares
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You keep your 70 shares and sell them 14 months after vesting when the stock has risen to <strong>$55/share</strong>. Since you held for more than one year, you qualify for long-term capital gains rates:
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
        Gain per share: $55 &minus; $40 (cost basis) = $15<br />
        Total gain: 70 shares &times; $15 = $1,050<br />
        Long-term capital gains tax (15% rate): $1,050 &times; 15% = <strong>$157.50</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Had you sold within one year of vesting, that $1,050 gain would be taxed as ordinary income at 22%, costing <strong>$231</strong> instead of $157.50. Holding for more than a year saves about $74 on this gain alone.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What if the stock declines? If you sell at $32/share (below the vesting price of $40):
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
        Loss per share: $32 &minus; $40 = &minus;$8<br />
        Total capital loss: 70 shares &times; &minus;$8 = &minus;$560
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This $560 capital loss can be used to offset other capital gains. If you have no gains to offset, you can deduct up to $3,000 per year against ordinary income, with any excess carrying forward to future tax years.{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 409: Capital Gains and Losses)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important note: even if the stock drops below the vesting price after you receive the shares, <strong>you still owed ordinary income tax on the full vesting-day value</strong>. You cannot go back and recalculate that tax based on the later decline. The ordinary income tax at vesting is fixed; only the capital gain or loss from that point forward is variable.
      </p>

      {/* State Taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Your State Taxes RSU Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State income taxes on RSU vesting can add significantly to your total tax bill, and they vary dramatically by location:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Top Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Tax on $10K RSU Vest</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['California', '13.3%', '$1,330'],
              ['New York', '10.9%', '$1,090'],
              ['New Jersey', '10.75%', '$1,075'],
              ['Oregon', '9.9%', '$990'],
              ['Minnesota', '9.85%', '$985'],
              ['Colorado', '4.4%', '$440'],
              ['Illinois', '4.95%', '$495'],
              ['Texas / Florida / Nevada / WA (no income tax)', '0%', '$0'],
            ].map(([state, rate, tax], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{tax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also an important multi-state complication: if you were granted RSUs while living in one state and they vest after you have moved to another state, <strong>both states may claim the right to tax a portion</strong> of the RSU income. The split is typically calculated based on how many days you worked in each state during the entire vesting period &mdash; a rule called RSU <strong>allocation</strong>. This can result in filing partial-year or non-resident returns in multiple states.
      </p>

      {/* Strategies */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Strategies to Manage Your RSU Tax Bill
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You cannot avoid RSU taxes entirely &mdash; but you can manage them strategically to reduce the total bill and avoid surprises.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        1. Make Quarterly Estimated Tax Payments
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer withholds at 22% but your marginal rate is 24%, 32%, or higher, estimate the gap and make quarterly payments to the IRS by the due dates (April 15, June 16, September 15, and January 15). This prevents the underpayment penalty and avoids a large lump-sum bill in April.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Estimated Taxes)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        2. Hold Shares for Long-Term Capital Gains Treatment
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you believe in your company&rsquo;s long-term prospects, holding vested shares for more than one year converts future appreciation from ordinary income rates (up to 37%) to long-term capital gains rates (0%, 15%, or 20%). For high earners, the difference can be 17 percentage points or more on every dollar of appreciation.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        3. Maximize Pre-Tax 401(k) and HSA Contributions
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        While RSU income itself cannot be directed into a 401(k), you can increase your regular paycheck contributions to your traditional 401(k) (up to $23,500 in 2026) or HSA (up to $4,300 single / $8,550 family) to lower your overall taxable income. Every pre-tax dollar contributed reduces the income on which your RSU vesting is taxed.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        4. Donate Appreciated Shares to Charity
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you hold RSU shares that have appreciated and you plan to donate to charity, consider donating the shares directly instead of selling first and donating cash. You receive a charitable deduction for the full current fair market value and pay zero capital gains tax on the appreciation. This is especially powerful for long-held, highly-appreciated shares.{' '}
        <a href="https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Charitable Contributions)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        5. Use Tax-Loss Harvesting
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In years where some vested RSU shares lose value, selling them at a loss can offset capital gains from shares that appreciated. This strategy &mdash; called tax-loss harvesting &mdash; is especially useful at year-end when you can survey your full portfolio of vested shares and strategically realize losses to net against gains.
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        RSUs are valuable compensation, but they come with a real and often underestimated tax cost. The essential points to remember:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>You owe <strong>ordinary income tax</strong> on the fair market value of shares on the day they vest &mdash; not on the grant date, and not when you sell</li>
        <li style={{ marginBottom: '0.5rem' }}>Your employer withholds at the <strong>22% federal supplemental rate</strong>, which is often less than your actual marginal rate</li>
        <li style={{ marginBottom: '0.5rem' }}>Social Security (6.2%) and Medicare (1.45%) apply to RSU income just like they do to your regular salary</li>
        <li style={{ marginBottom: '0.5rem' }}>When you sell, gain above the vesting price is a <strong>capital gain</strong> &mdash; long-term rates apply if you hold more than one year</li>
        <li style={{ marginBottom: '0.5rem' }}>State income taxes add 0%&ndash;13.3% to the total tax on RSU vesting, and multi-state allocation rules can complicate your filing</li>
        <li style={{ marginBottom: '0.5rem' }}>Consider estimated tax payments, maximizing pre-tax retirement contributions, holding for long-term gains, and tax-loss harvesting to reduce the overall tax impact</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most common mistake RSU recipients make is treating the full vesting value as their net gain, without accounting for the combined federal, FICA, and state tax bite. A little planning &mdash; especially making quarterly estimated payments in years with significant vesting &mdash; can prevent a painful surprise and help you keep more of your equity.
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
          See Your Full Paycheck Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly how much goes to federal income tax, Social Security, Medicare, and state tax &mdash; and what you actually take home each paycheck.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#7c3aed',
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
          <a href="https://www.irs.gov/pub/irs-pdf/p525.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 525, Taxable and Nontaxable Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 15, Employer&rsquo;s Tax Guide (Circular E)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 751: Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 409: Capital Gains and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 559: Net Investment Income Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Estimated Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base (Social Security wage base)</a>
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
