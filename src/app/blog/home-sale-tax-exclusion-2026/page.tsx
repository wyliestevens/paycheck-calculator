import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Sale Tax Exclusion 2026: How to Avoid Capital Gains When You Sell',
  description:
    "Sell your home for a $300,000 profit and pay zero capital gains tax — if you qualify for the Section 121 exclusion. Here's exactly how it works, who qualifies, and full worked examples for single and married sellers.",
  alternates: { canonical: '/blog/home-sale-tax-exclusion-2026' },
  keywords:
    'home sale tax exclusion 2026, capital gains on home sale, Section 121 exclusion, sell house tax free, primary residence capital gains, $250000 exclusion home sale, $500000 exclusion married, Form 8949 home sale, home sale profit tax',
  openGraph: {
    title: 'Home Sale Tax Exclusion 2026: How to Avoid Capital Gains When You Sell',
    description:
      "Sell your home for a $300,000 profit and pay zero capital gains tax — if you qualify for the Section 121 exclusion.",
  },
}

export default function HomeSaleTaxExclusion2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Home sale tax exclusion illustration showing a house with profit arrow and tax shield"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* House shape */}
          <polygon points="100,130 100,75 140,45 180,75 180,130" fill="rgba(255,255,255,0.85)" />
          <rect x="115" y="100" width="20" height="30" fill="#059669" />
          <polygon points="100,75 140,45 180,75" fill="rgba(255,255,255,0.4)" />
          <rect x="150" y="85" width="18" height="18" rx="2" fill="rgba(5,150,105,0.5)" />
          <text x="140" y="160" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif" fontWeight="600">HOME</text>

          {/* Upward profit arrow */}
          <line x1="230" y1="135" x2="230" y2="60" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeDasharray="5,3" />
          <polygon points="222,65 230,45 238,65" fill="rgba(255,255,255,0.9)" />
          <text x="255" y="90" fontSize="12" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">+$300K</text>
          <text x="255" y="106" fontSize="11" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">profit</text>

          {/* Section 121 shield */}
          <path d="M350,55 L390,55 L410,70 L410,115 L380,140 L350,115 L330,70 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <text x="370" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">§121</text>
          <text x="370" y="104" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">EXCLUSION</text>
          <text x="370" y="120" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">SHIELD</text>

          {/* Right side boxes */}
          <rect x="435" y="55" width="115" height="42" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="492" y="73" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Single</text>
          <text x="492" y="89" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="monospace">$250K</text>

          <rect x="435" y="105" width="115" height="42" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="492" y="122" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Married</text>
          <text x="492" y="138" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="monospace">$500K</text>

          <text x="492" y="165" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">tax-free profit limits</text>
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
        Home Sale Tax Exclusion 2026: How to Avoid Capital Gains When You Sell
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 22, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You bought your home for $350,000 and are about to sell it for $650,000. That&rsquo;s a $300,000 profit — and it could be completely <strong>tax-free</strong>. No capital gains tax. Not a dollar owed to the IRS.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is possible because of one of the most generous tax breaks in the U.S. tax code: the <strong>Section 121 home sale exclusion</strong>. It lets most homeowners exclude up to $250,000 (single) or $500,000 (married filing jointly) of profit from capital gains tax when they sell their primary residence.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But the exclusion comes with rules — ownership tests, use tests, time limits, and a few traps that catch homeowners off guard. Here is exactly how it works in 2026.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is the Section 121 Home Sale Exclusion?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under{' '}
        <a href="https://www.irs.gov/taxtopics/tc701" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRC Section 121
        </a>
        , homeowners who sell their primary residence may exclude from taxable income:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>$250,000</strong> of profit if you file as single, head of household, or married filing separately</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>$500,000</strong> of profit if you are married filing jointly</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        &ldquo;Profit&rdquo; here means your <strong>capital gain</strong> — the selling price minus your adjusted cost basis (more on how to calculate this below). Any profit within the exclusion limit is simply excluded from your income. You do not report it. You do not pay tax on it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Profit <em>above</em> the exclusion limit is taxable as a long-term capital gain (assuming you owned the home more than one year), taxed at rates of 0%, 15%, or 20% depending on your total income.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Qualifies? The Ownership and Use Tests
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To claim the full exclusion, you must pass <strong>two tests</strong> based on the five years before the sale date:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 1: Ownership Test
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You must have <strong>owned</strong> the home for at least <strong>2 out of the last 5 years</strong> before the sale. The two years do not have to be consecutive — they can be any 24 months within the five-year lookback window.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 2: Use Test
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You must have <strong>used</strong> the home as your <strong>primary residence</strong> for at least <strong>2 out of the last 5 years</strong>. Again, the two years do not have to be consecutive. Short absences (vacation, travel, medical care) generally count as time you used the home.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also a <strong>once-every-two-years rule</strong>: you can only claim the exclusion once per two-year period. If you used the exclusion on a home sale in 2024, you cannot use it again until 2026.{' '}
        <a href="https://www.irs.gov/publications/p523" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 523 — Selling Your Home)
        </a>
      </p>

      <div
        style={{
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#1e293b', margin: 0 }}>
          <strong>Key rule:</strong> The ownership and use tests are measured separately. You might own a home for 4 years but only live in it as your primary residence for 2 of those years — that still qualifies. A rental property you convert to your primary residence for 2+ years can also eventually qualify.
        </p>
      </div>

      {/* Section 3 - Worked Examples */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example 1: Single Filer With a $300,000 Profit
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Meet Jordan, a single filer who bought a home in 2019 and is selling in 2026. Jordan has $80,000 in ordinary income from a job.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Selling price', '$650,000'],
              ['Adjusted basis (original purchase + improvements)', '($350,000)'],
              ['Gross capital gain', '$300,000'],
              ['Section 121 exclusion (single)', '($250,000)'],
              ['Taxable capital gain', '$50,000'],
              ['Long-term capital gains rate (15%)', '$7,500'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td
                  style={{
                    padding: '0.625rem 1rem',
                    borderBottom: '1px solid #e2e8f0',
                    textAlign: 'right',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: amount.startsWith('($') ? '#dc2626' : amount.startsWith('$7') ? '#dc2626' : '#059669',
                    fontWeight: label === 'Taxable capital gain' || label.includes('rate') ? 700 : 400,
                  }}
                >
                  {amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Jordan made $300,000 on the home but only pays capital gains tax on <strong>$50,000</strong> — the $50,000 that exceeds the $250,000 exclusion. At a 15% long-term rate, the federal tax bill is just <strong>$7,500</strong>. Without the exclusion, Jordan would have owed $45,000 (15% of $300,000). The exclusion saved <strong>$37,500</strong>.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example 2: Married Couple With a $450,000 Profit
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Now consider Alex and Sam, married filing jointly. They bought the same house together in 2016 and are selling in 2026 for a $450,000 profit. Their combined income is $120,000.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Selling price', '$800,000'],
              ['Adjusted basis', '($350,000)'],
              ['Gross capital gain', '$450,000'],
              ['Section 121 exclusion (married filing jointly)', '($500,000)'],
              ['Taxable capital gain', '$0'],
              ['Federal capital gains tax', '$0'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td
                  style={{
                    padding: '0.625rem 1rem',
                    borderBottom: '1px solid #e2e8f0',
                    textAlign: 'right',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: label === 'Federal capital gains tax' || label === 'Taxable capital gain' ? '#059669' : '#475569',
                    fontWeight: label === 'Federal capital gains tax' ? 700 : 400,
                  }}
                >
                  {amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Alex and Sam keep every dollar of their $450,000 profit completely tax-free at the federal level. Because their gain ($450,000) is less than the married exclusion ($500,000), they owe <strong>zero capital gains tax</strong>. They do not even need to report the sale on their federal tax return.
      </p>

      {/* Section 4 - Capital gains rates table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 Long-Term Capital Gains Tax Rates
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        If your profit exceeds the exclusion limit, the taxable portion is subject to long-term capital gains rates (assuming you owned the home for more than one year, which is almost always the case for primary residences). The rates for 2026 are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single Filers</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Filing Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0%', '$0 – $48,350', '$0 – $96,700'],
              ['15%', '$48,351 – $533,400', '$96,701 – $600,050'],
              ['20%', 'Over $533,400', 'Over $600,050'],
            ].map(([rate, single, mfj], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: rate === '0%' ? '#059669' : rate === '15%' ? '#d97706' : '#dc2626', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem' }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem' }}>{mfj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Note: These thresholds apply to <em>taxable income</em>, which includes both your ordinary income and capital gains. Capital gains &ldquo;stack on top of&rdquo; ordinary income when determining the applicable rate. Source:{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 409</a>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        High earners (income over $200,000 for singles, $250,000 for married) may also owe the <strong>3.8% Net Investment Income Tax (NIIT)</strong> on any taxable capital gain from the home sale, in addition to the rates above.{' '}
        <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 559)
        </a>
      </p>

      {/* Section 5 - How to calculate adjusted basis */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Calculate Your Adjusted Basis (the True Cost)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your &ldquo;profit&rdquo; is not simply the selling price minus what you paid. The IRS uses <strong>adjusted basis</strong>, which can significantly reduce your taxable gain — and potentially save you thousands in taxes. Your adjusted basis starts with the purchase price and is then adjusted upward and downward:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Increases to Basis (Things That Reduce Your Gain)
      </h3>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Purchase price</strong> — what you paid when you bought the home</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Closing costs at purchase</strong> — title insurance, legal fees, transfer taxes, recording fees</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Capital improvements</strong> — a new roof, kitchen remodel, deck addition, HVAC replacement, room addition. Not routine repairs or maintenance (painting, fixing a leaky faucet)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Special assessments</strong> — local improvements like new sidewalks or sewers paid by you</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Decreases to Basis (Things That Increase Your Gain)
      </h3>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Depreciation claimed</strong> — if you ever took a home office deduction and depreciated part of the home, that amount reduces your basis</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Casualty losses deducted</strong> — if you took a casualty loss deduction for damage to the home</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Energy credits received</strong> — some credits reduce basis by the amount of the credit</li>
      </ul>

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
        <div style={{ marginBottom: '0.25rem' }}>Purchase price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $350,000</div>
        <div style={{ marginBottom: '0.25rem' }}>+ Closing costs (purchase):&nbsp; +$8,500</div>
        <div style={{ marginBottom: '0.25rem' }}>+ Kitchen remodel:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +$35,000</div>
        <div style={{ marginBottom: '0.25rem' }}>+ New roof:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +$18,000</div>
        <div style={{ marginBottom: '0.25rem' }}>− Depreciation taken:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; −$0</div>
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem', marginTop: '0.5rem', fontWeight: 700 }}>
          Adjusted basis:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $411,500
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In this example, keeping records of those improvements raised the adjusted basis by $61,500 — reducing the taxable gain by $61,500. At a 15% rate, that is <strong>$9,225 in tax savings</strong> from good record keeping alone.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Also subtract your <strong>selling costs</strong> — real estate agent commissions, legal fees, title insurance at closing — from your selling price. A 5–6% commission on a $650,000 sale is $32,500–$39,000 that reduces your gain directly.{' '}
        <a href="https://www.irs.gov/publications/p523" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 523)
        </a>
      </p>

      {/* Section 6 - Partial exclusion */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Partial Exclusion: When You Don&rsquo;t Fully Qualify
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What if you need to sell before meeting the 2-year ownership or use requirement? In certain circumstances, you can still claim a <strong>prorated partial exclusion</strong>. The IRS allows this when the sale is primarily due to:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>A job change or job loss</strong> — your new job is at least 50 miles farther from the home than your old job</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Health reasons</strong> — a doctor recommends you move due to your health or the health of a family member</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Unforeseen circumstances</strong> — natural disaster, death, divorce, multiple births from a single pregnancy, or other qualifying events</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The partial exclusion is prorated based on the time you actually met the ownership and use tests, out of the required 24 months. For example:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontSize: '0.9375rem',
          lineHeight: 1.65,
          color: '#1e293b',
        }}
      >
        <p style={{ margin: '0 0 0.5rem 0' }}>You owned and lived in a home for <strong>12 months</strong> before a job transfer forced a sale.</p>
        <p style={{ margin: '0 0 0.5rem 0' }}>Fraction qualified: 12 ÷ 24 = <strong>50%</strong></p>
        <p style={{ margin: '0' }}>Your exclusion: 50% × $250,000 = <strong>$125,000</strong> (single) or 50% × $500,000 = <strong>$250,000</strong> (married)</p>
      </div>

      {/* Section 7 - Depreciation recapture */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Depreciation Recapture: The Catch for Home Office Claimers
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is one important exception to the exclusion: <strong>depreciation recapture</strong>. If you ever claimed a home office deduction using the regular (actual expense) method, you likely depreciated a portion of your home.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That depreciation is <strong>not shielded by the Section 121 exclusion</strong>. When you sell, you must pay tax on all depreciation you deducted, at a maximum rate of <strong>25% (unrecaptured Section 1250 gain)</strong>. This applies even if your gain is otherwise below the exclusion limit.
      </p>

      <div
        style={{
          background: '#fff7ed',
          border: '1px solid #fed7aa',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#1e293b', margin: 0 }}>
          <strong>Example:</strong> You claimed home office deductions for 8 years and depreciated $12,000 of the home. Even if your total gain is below $250,000 (single), you still owe tax on that $12,000 at up to 25% — a potential $3,000 federal tax bill.{' '}
          <a href="https://www.irs.gov/publications/p946" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Publication 946)
          </a>
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The simplified home office method (the $5/sq ft option) does not create depreciation, so this trap only applies to those who used actual expenses. This is one reason some homeowners prefer the simplified method.
      </p>

      {/* Section 8 - How to report */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Report the Sale on Your Tax Return
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The reporting rules depend on whether any of the gain is taxable:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        If the Entire Gain Is Excluded
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You do <strong>not</strong> need to report the sale on your federal tax return at all. You will receive a{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1099-s" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1099-S
        </a>{' '}
        (Proceeds from Real Estate Transactions) from the closing agent if the proceeds exceed $250,000 (single) or $500,000 (married), but you are not required to report it if the gain is fully excluded. Keep records in case the IRS inquires.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        If Any Gain Is Taxable
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Report the sale on <strong>Form 8949</strong> (Sales and Other Dispositions of Capital Assets) and carry the result to <strong>Schedule D</strong> (Capital Gains and Losses), which is filed with your Form 1040. You will list the selling price, adjusted basis, and the exclusion amount to show the taxable portion.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If there is depreciation recapture from a home office, that goes on Form 4797 (Sales of Business Property) and is reported as ordinary income, not capital gain.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-4797" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Form 4797)
        </a>
      </p>

      {/* Section 9 - State taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Don&rsquo;t Forget: State Taxes on Home Sale Gains
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Section 121 exclusion is a <strong>federal</strong> rule. Most states follow the federal exclusion and also exempt the same amount from state income tax — but not all states do, and rules vary.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>No state income tax states</strong> (Texas, Florida, Nevada, etc.): no state capital gains tax at all</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Most states</strong>: follow the federal exclusion and exempt the same gain</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>California</strong>: does follow the federal exclusion but taxes capital gains at ordinary income tax rates (up to 13.3%) on any taxable portion</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>New Jersey</strong>: has its own exclusion rules that differ from federal law — check with a tax professional</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Check your state&rsquo;s department of revenue website or consult a tax professional for state-specific rules before closing.
      </p>

      {/* Section 10 - Quick tips */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Tips to Maximize Your Exclusion
      </h2>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Keep every improvement receipt.</strong> Capital improvements raise your basis and reduce your taxable gain. A $50,000 kitchen remodel that you can document reduces your gain — and your tax bill — dollar for dollar.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Time your sale around the 2-year mark.</strong> If you&rsquo;ve lived in the home 22 months, waiting 2 more months to hit the 24-month mark could save tens of thousands in taxes.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Consider your filing status.</strong> Married filing jointly doubles the exclusion to $500,000. If you&rsquo;re recently married, coordinating a home sale can be especially tax-efficient.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Track home office depreciation separately.</strong> Know exactly how much you depreciated before selling, so you can account for the recapture correctly and avoid surprises.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Factor in closing costs.</strong> Real estate commissions, attorney fees, and title insurance reduce your net selling price and are subtracted from your gain. A 6% commission on a $700,000 home is $42,000 — that directly lowers your taxable gain.</li>
      </ol>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Section 121 home sale exclusion is one of the largest tax breaks most Americans will ever receive. Own and live in your home for at least 2 of the last 5 years, and you can exclude up to $250,000 (single) or $500,000 (married) of profit from capital gains tax entirely.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The keys to maximizing it are: meeting both the ownership and use tests, keeping meticulous records of every capital improvement, tracking selling costs, and being aware of the depreciation recapture rule if you ever claimed a home office. For gains above the exclusion limit, long-term capital gains rates of 0–20% apply — far lower than ordinary income tax rates.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your situation is complex — you converted a rental to a primary residence, owned the home jointly with a non-spouse, or claimed significant depreciation — consult a CPA or enrolled agent before closing. The stakes are high enough that professional advice often pays for itself many times over.
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
          See Your Paycheck Breakdown After a Home Sale
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Planning to sell and wondering how taxable gains affect your overall tax picture? Use our free paycheck calculator to see your federal, state, and FICA taxes by state — and plan ahead.
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
          <a href="https://www.irs.gov/taxtopics/tc701" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 701: Sale of Your Home</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p523" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 523: Selling Your Home</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 409: Capital Gains and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 559: Net Investment Income Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8949" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 8949: Sales and Other Dispositions of Capital Assets</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1099-s" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 1099-S: Proceeds from Real Estate Transactions</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p946" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 946: How to Depreciate Property</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-4797" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 4797: Sales of Business Property</a>
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
