import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cryptocurrency Taxes 2026: How Crypto Is Taxed (Plain-English Guide)',
  description:
    'The IRS taxes crypto as property — so every sale, trade, or payment triggers a capital gain or loss. Here\'s exactly how crypto taxes work in 2026, with a full worked example and a tax-rate table.',
  alternates: { canonical: '/blog/cryptocurrency-taxes-2026' },
  keywords:
    'cryptocurrency taxes 2026, how is crypto taxed, bitcoin taxes, crypto capital gains, crypto tax rate 2026, Form 8949 crypto, staking taxes, mining taxes, crypto income tax',
  openGraph: {
    title: 'Cryptocurrency Taxes 2026: How Crypto Is Taxed (Plain-English Guide)',
    description:
      'The IRS taxes crypto as property — every sale, trade, or payment triggers a capital gain or loss. Full guide with 2026 rates and a worked example.',
  },
}

export default function CryptocurrencyTaxes2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Cryptocurrency taxes illustration showing Bitcoin converting to tax form"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Bitcoin coin */}
          <circle cx="100" cy="100" r="52" fill="rgba(255,255,255,0.18)" />
          <circle cx="100" cy="100" r="42" fill="rgba(255,255,255,0.25)" />
          <text x="100" y="92" textAnchor="middle" fontSize="28" fontWeight="800" fill="#fff" fontFamily="sans-serif">₿</text>
          <text x="100" y="116" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">CRYPTO</text>

          {/* Arrow with = IRS Property label */}
          <line x1="162" y1="100" x2="205" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
          <polygon points="205,92 220,100 205,108" fill="rgba(255,255,255,0.5)" />
          <text x="185" y="88" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">IRS:</text>
          <text x="185" y="78" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">PROPERTY</text>

          {/* Center: gain/loss split */}
          <rect x="228" y="48" width="150" height="65" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="303" y="72" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">Short-Term Gain</text>
          <text x="303" y="92" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fbbf24" fontFamily="monospace">10–37%</text>
          <text x="303" y="108" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">held &lt; 1 year</text>

          <rect x="228" y="122" width="150" height="45" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="303" y="142" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">Long-Term Gain</text>
          <text x="303" y="160" textAnchor="middle" fontSize="16" fontWeight="800" fill="#86efac" fontFamily="monospace">0 / 15 / 20%</text>

          {/* Right: Form 8949 */}
          <rect x="400" y="48" width="90" height="115" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="445" y="72" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">Form</text>
          <text x="445" y="88" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff" fontFamily="sans-serif">8949</text>
          <line x1="415" y1="100" x2="475" y2="100" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <line x1="415" y1="112" x2="475" y2="112" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <line x1="415" y1="124" x2="475" y2="124" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <line x1="415" y1="136" x2="465" y2="136" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <text x="445" y="156" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Schedule D</text>

          {/* Arrow to form */}
          <line x1="388" y1="100" x2="406" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <polygon points="406,94 418,100 406,106" fill="rgba(255,255,255,0.5)" />

          {/* Bottom caption */}
          <text x="300" y="188" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Every crypto sale, trade, or payment is a taxable event</text>
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
        Cryptocurrency Taxes 2026: How Crypto Is Taxed (Plain-English Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 25, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Whether you bought Bitcoin, traded Ethereum for Solana, or got paid in crypto by a client, the IRS wants its share. The key rule &mdash; in place since{' '}
        <a href="https://www.irs.gov/pub/irs-drop/n-14-21.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Notice 2014-21
        </a>{' '}
        &mdash; is that cryptocurrency is treated as <strong>property</strong>, not currency. That one word changes everything about how your gains, losses, and income get taxed.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers every common crypto tax situation in 2026: selling for a profit or loss, trading one coin for another, mining, staking, getting paid in crypto, and using crypto to buy things. Each scenario triggers different tax treatment.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why &ldquo;Property&rdquo; Changes Everything
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When the IRS calls crypto &ldquo;property,&rdquo; it means each coin or token has a <strong>cost basis</strong> (what you paid for it) and a <strong>fair market value</strong> (what it is worth at the time of a transaction). The difference between those two numbers is either a <strong>capital gain</strong> (taxable) or a <strong>capital loss</strong> (deductible against gains).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is the same system used for stocks, real estate, and collectibles. A taxable event occurs whenever you:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Sell crypto for U.S. dollars (or any fiat currency)</li>
        <li style={{ marginBottom: '0.5rem' }}>Trade one cryptocurrency for another (e.g., BTC &rarr; ETH)</li>
        <li style={{ marginBottom: '0.5rem' }}>Use crypto to buy goods or services</li>
        <li style={{ marginBottom: '0.5rem' }}>Receive crypto as payment for work or services</li>
        <li style={{ marginBottom: '0.5rem' }}>Receive mining rewards or staking income</li>
        <li style={{ marginBottom: '0.5rem' }}>Receive an airdrop or hard fork tokens</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Events that are <strong>not</strong> taxable: buying crypto with dollars, transferring crypto between your own wallets, and gifting crypto below the annual exclusion ($19,000 per recipient in 2026).
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Short-Term vs. Long-Term Capital Gains
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        How long you held the crypto before selling it determines which tax rate applies. This is the single most important tax planning decision for crypto investors.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Short-term gains (held 1 year or less):</strong> Taxed as ordinary income at your regular federal income tax rate &mdash; the same rate that applies to your paycheck. That means anywhere from <strong>10% to 37%</strong>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Long-term gains (held more than 1 year):</strong> Taxed at the preferential capital gains rates: <strong>0%, 15%, or 20%</strong>, depending on your total taxable income.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are the 2026 long-term capital gains rate thresholds:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single Filer Income</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Filing Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0%', '$0 – $47,025', '$0 – $94,050'],
              ['15%', '$47,026 – $518,900', '$94,051 – $583,750'],
              ['20%', 'Over $518,900', 'Over $583,750'],
            ].map(([rate, single, mfj], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: i === 0 ? '#059669' : i === 1 ? '#d97706' : '#dc2626' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{mfj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These thresholds are based on your <em>total</em> taxable income &mdash; salary, business income, and capital gains combined.{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 409 &mdash; Capital Gains and Losses)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The practical takeaway: if you can hold a crypto position for more than one year, you may cut your tax rate dramatically &mdash; for example, from 22% (short-term, ordinary income) down to 15% (long-term). On a $20,000 gain, that is a <strong>$1,400 tax savings</strong> from timing alone.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Selling Bitcoin for a Gain
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a realistic example. Assume you are a single filer earning $70,000 per year in wages.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Scenario A &mdash; Short-term sale:</strong> You bought 1 BTC for $42,000 in January 2026 and sold it for $58,000 in August 2026 (8 months later).
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
        Sale price: $58,000<br />
        Cost basis: $42,000<br />
        <strong>Short-term capital gain: $16,000</strong><br />
        <br />
        Your taxable income: $70,000 wages + $16,000 gain = $86,000<br />
        After standard deduction ($15,000): $71,000 taxable income<br />
        <br />
        The $16,000 gain falls in the 22% bracket<br />
        <strong>Tax on the gain: $3,520</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Scenario B &mdash; Long-term sale:</strong> Same purchase for $42,000, but you waited and sold in February 2027 (13 months later) for the same $58,000.
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
        Long-term capital gain: $16,000<br />
        <br />
        Your ordinary income: $70,000 wages<br />
        After standard deduction: $55,000 taxable income<br />
        The $16,000 gain pushes total to $71,000, still in the 15% LTCG bracket<br />
        <br />
        <strong>Tax on the gain: $2,400 (15%)</strong><br />
        <br />
        Tax saved by waiting: $3,520 − $2,400 = <strong>$1,120</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One year of patience saved $1,120 on the exact same trade with the exact same profit. This is the most powerful crypto tax strategy available.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Trading Crypto-to-Crypto: Yes, That Is Taxable
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A common misconception: &ldquo;I didn&rsquo;t cash out to dollars, so I don&rsquo;t owe taxes.&rdquo; This is incorrect. The IRS treats a crypto-to-crypto trade as a <strong>sale of the first asset</strong> and a <strong>purchase of the second</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Example: You trade 1 ETH (which you bought for $2,000 and is now worth $3,500) for $3,500 worth of SOL.
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
        You &ldquo;sold&rdquo; ETH at $3,500<br />
        Cost basis of ETH: $2,000<br />
        <strong>Taxable gain: $1,500</strong><br />
        <br />
        Your cost basis in the new SOL: $3,500
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Every DeFi swap, AMM trade, or cross-chain bridge that results in you receiving different tokens than you sent creates a taxable event. Many crypto traders accumulate dozens or hundreds of these events per year without realizing it.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Crypto as Income: Mining, Staking, and Getting Paid in Crypto
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you <em>receive</em> crypto as a form of income &mdash; rather than buying it &mdash; the tax treatment is different. You owe <strong>ordinary income tax</strong> on the fair market value at the time you received it. The asset also establishes a cost basis at that value for future gains calculations.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Situation</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Treatment</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Self-Employment Tax?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Mining rewards (business)', 'Ordinary income + SE tax', 'Yes (15.3%)'],
              ['Mining rewards (hobby)', 'Ordinary income only', 'No'],
              ['Staking rewards', 'Ordinary income at receipt', 'Generally no'],
              ['Paid in crypto by employer', 'W-2 wages (with FICA)', 'No (employer withholds)'],
              ['Freelance paid in crypto', 'Self-employment income', 'Yes (15.3%)'],
              ['Airdrop / hard fork tokens', 'Ordinary income at FMV', 'No'],
              ['DeFi liquidity rewards', 'Ordinary income at receipt', 'Generally no'],
            ].map(([situation, treatment, se], i) => (
              <tr key={situation} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{situation}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{treatment}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{se}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Staking Rewards: The Jarrett Case and IRS Guidance
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS issued{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rr-23-14.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Revenue Ruling 2023-14
        </a>
        , clarifying that staking rewards are taxable as ordinary income in the year they are received, valued at their fair market value on the date of receipt. This is the conservative, IRS-backed position &mdash; report staking income when you receive it.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Getting Paid in Crypto by an Employer
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer pays part or all of your salary in crypto, it is still <strong>W-2 wage income</strong>. Your employer must report the fair market value of the crypto as wages, withhold federal income tax, Social Security, and Medicare, and issue you a W-2. From your perspective, it is no different than being paid in dollars &mdash; except that the crypto you receive has a cost basis equal to the wages reported.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Example: Your employer pays you $5,000 in Bitcoin. The W-2 shows $5,000 in wages, FICA is withheld normally, and your cost basis in the Bitcoin is $5,000. When you eventually sell it, you only owe capital gains tax on appreciation above $5,000.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Paying With Crypto: Every Coffee Is a Tax Event
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Using cryptocurrency to pay for goods or services is a taxable event &mdash; the IRS treats it the same as selling the crypto for its current value and then using cash to pay.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Example: You use 0.001 BTC (worth $58) to buy a $58 item. You originally received that 0.001 BTC as a staking reward when it was worth $30.
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
        Amount received as staking income: $30 (reported as ordinary income then)<br />
        Value at time of payment: $58<br />
        <strong>Additional gain: $28 (short-term or long-term, depending on hold period)</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For small everyday purchases, the practical tax exposure is minimal. But if you are spending appreciated Bitcoin you bought years ago, each purchase can trigger a meaningful capital gains event that needs to be tracked and reported.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Capital Losses: How Crypto Can Lower Your Tax Bill
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When a crypto investment goes down and you sell it at a loss, that is a <strong>capital loss</strong>. Losses can offset capital gains dollar-for-dollar. If your losses exceed your gains, you can deduct up to <strong>$3,000</strong> of the excess against ordinary income each year. Any remaining losses carry forward to future years.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Example: You had $8,000 in crypto gains but also $6,000 in crypto losses in 2026.
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
        Gross gains: +$8,000<br />
        Gross losses: −$6,000<br />
        <strong>Net capital gain: $2,000 (taxable)</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Important:</strong> Crypto is <em>not</em> subject to the wash sale rule that applies to stocks. A wash sale disallows a loss if you repurchase a substantially identical asset within 30 days. Because the IRS classifies crypto as property (not a security), you can sell at a loss, immediately repurchase the same coin, and still claim the loss. This makes <strong>tax-loss harvesting</strong> more powerful with crypto than with stocks.{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 409)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        NFTs: How Non-Fungible Tokens Are Taxed
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Non-fungible tokens follow the same property rules as fungible cryptocurrency. Each NFT has a cost basis (what you paid, including gas fees), and selling or trading it triggers a capital gain or loss. Additionally:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Creating and selling an NFT</strong> as an artist is treated as self-employment income &mdash; ordinary income plus 15.3% self-employment tax on net earnings.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Royalties from secondary sales</strong> are ordinary income when received.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Some NFTs may be classified as <strong>collectibles</strong>, which carry a higher maximum long-term capital gains rate of 28% rather than 20%. The IRS has not issued definitive guidance on when an NFT qualifies as a collectible.
        </li>
      </ul>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Report Crypto on Your Tax Return
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Crypto gains and losses flow through your tax return in a specific path:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Form 8949:</strong> List every sale or trade &mdash; date acquired, date sold, proceeds, cost basis, and gain or loss. Short-term and long-term transactions go in separate sections (Part I and Part II).{' '}
          <a href="https://www.irs.gov/forms-pubs/about-form-8949" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Form 8949)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Schedule D:</strong> Summarizes the Form 8949 totals. Net short-term gains go in Part I; net long-term gains in Part II. The net result flows to your Form 1040.{' '}
          <a href="https://www.irs.gov/forms-pubs/about-schedule-d-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Schedule D)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Schedule C / Schedule SE:</strong> Mining income (if operated as a business) and freelance crypto income are reported here and subject to self-employment tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Schedule 1:</strong> Staking rewards and airdrop income that are not self-employment income may be reported as &ldquo;other income&rdquo; here.
        </li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Starting with the 2021 tax year, the IRS added a question to the top of Form 1040 asking whether you received, sold, exchanged, or otherwise disposed of any digital assets. You must answer &ldquo;Yes&rdquo; if you had any taxable crypto activity. Answering &ldquo;No&rdquo; when you had crypto activity is a red flag and can trigger an audit.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Record-Keeping: What You Must Track
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Accurate record-keeping is the biggest practical challenge in crypto taxes. For <em>every</em> crypto transaction, you need:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Date and time of acquisition</li>
        <li style={{ marginBottom: '0.5rem' }}>Amount of crypto acquired and fair market value in USD at that time</li>
        <li style={{ marginBottom: '0.5rem' }}>Date and time of disposal (sale, trade, or spend)</li>
        <li style={{ marginBottom: '0.5rem' }}>Fair market value at disposal and proceeds received</li>
        <li style={{ marginBottom: '0.5rem' }}>Transaction fees (gas fees can often be added to the cost basis or deducted)</li>
        <li style={{ marginBottom: '0.5rem' }}>Exchange statements and wallet addresses</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most major exchanges (Coinbase, Kraken, Gemini, etc.) issue Form 1099-DA starting for the 2025 tax year, which will report gross proceeds. However, these forms may not include your cost basis if you transferred coins in from another wallet, so you still need your own records.{' '}
        <a href="https://www.irs.gov/businesses/corporations/digital-assets-questions-and-answers" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Digital Assets Q&amp;A)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many crypto holders use dedicated tax software (Koinly, CoinTracker, TaxBit) that connects to exchanges and wallets via API and automatically calculates gains and losses for each transaction.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Common Crypto Tax Mistakes to Avoid
      </h2>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Not reporting crypto-to-crypto trades.</strong> Every trade is a taxable event, even if you never touched dollars. Exchanges report these to the IRS.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Using the wrong cost basis method.</strong> The IRS allows FIFO (first in, first out), HIFO (highest in, first out), and specific identification. HIFO often minimizes taxes because you &ldquo;sell&rdquo; your highest-cost coins first, shrinking the gain. You must elect your method and use it consistently.{' '}
          <a href="https://www.irs.gov/publications/p550" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Publication 550)
          </a>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Ignoring gas fees.</strong> Gas fees paid when buying crypto add to your cost basis. Gas fees paid when selling reduce your proceeds (and therefore your gain). Track them &mdash; over a year of active DeFi use they can add up to hundreds of dollars.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Failing to report staking and mining income.</strong> The IRS receives 1099s from exchanges and has John Doe summons authority to compel exchanges to report user data. Unreported crypto income is one of the highest audit-risk areas.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Assuming losses from a rug pull or hack are automatically deductible.</strong> Losses from theft are treated as casualty losses &mdash; a category that became harder to deduct after the 2017 Tax Cuts and Jobs Act. If the crypto becomes permanently worthless, you can take a capital loss in the year of worthlessness, but you need documentation.
        </li>
      </ol>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Net Investment Income Tax (NIIT): An Extra 3.8% for High Earners
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your modified adjusted gross income (MAGI) exceeds $200,000 (single) or $250,000 (married filing jointly), capital gains from crypto &mdash; including long-term gains &mdash; may also be subject to the <strong>3.8% Net Investment Income Tax (NIIT)</strong>. That pushes the effective top rate on long-term crypto gains from 20% to <strong>23.8%</strong> for high earners.{' '}
        <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 559 &mdash; Net Investment Income Tax)
        </a>
      </p>

      {/* Section 13 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Summary: Crypto Tax Quick Reference
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Transaction Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable?</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Where Reported</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Buy crypto with dollars', 'No', '—', '—'],
              ['Sell crypto (profit, &lt;1 yr)', 'Yes', 'Short-term gain (ordinary income)', 'Form 8949 / Schedule D'],
              ['Sell crypto (profit, &gt;1 yr)', 'Yes', 'Long-term gain (0/15/20%)', 'Form 8949 / Schedule D'],
              ['Sell crypto at a loss', 'Yes (deductible)', 'Capital loss (offsets gains)', 'Form 8949 / Schedule D'],
              ['Trade BTC for ETH', 'Yes', 'Capital gain/loss on the BTC sold', 'Form 8949 / Schedule D'],
              ['Use crypto to buy goods', 'Yes', 'Capital gain/loss', 'Form 8949 / Schedule D'],
              ['Mining income (business)', 'Yes', 'Ordinary income + SE tax', 'Schedule C / SE'],
              ['Staking rewards', 'Yes', 'Ordinary income at receipt', 'Schedule 1'],
              ['W-2 wages paid in crypto', 'Yes', 'W-2 wages (FICA applies)', 'W-2'],
              ['Transfer between own wallets', 'No', '—', '—'],
              ['Gift crypto (≤$19,000)', 'No (generally)', '—', 'Form 709 if over limit'],
            ].map(([type, taxable, taxType, form], i) => (
              <tr key={type} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: type }} />
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: taxable === 'No' || taxable === 'No (generally)' ? '#059669' : '#dc2626', fontWeight: 600 }}>{taxable}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{taxType}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem' }}>{form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Crypto taxes are governed by one simple rule: the IRS treats cryptocurrency as property. That means every sale, trade, spend, or receipt of crypto at a gain or as income creates a taxable event. The good news is that with good record-keeping, strategic holding periods, and proactive loss harvesting, you can meaningfully reduce your tax bill.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key actions: track every transaction and its dollar value from day one, use HIFO cost basis to minimize gains where possible, hold positions beyond one year to access the lower long-term capital gains rates, and harvest losses in down years to offset future gains. If you have complex DeFi activity or a large portfolio, a CPA who specializes in crypto taxes can pay for themselves many times over.
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
          Crypto gains can push you into a higher income bracket. Use our free calculator to see how your combined income &mdash; wages plus capital gains &mdash; affects your federal and state tax burden.
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
          <a href="https://www.irs.gov/pub/irs-drop/n-14-21.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Notice 2014-21 &mdash; IRS Virtual Currency Guidance</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 409 &mdash; Capital Gains and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/corporations/digital-assets-questions-and-answers" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Digital Assets: Questions and Answers</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rr-23-14.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Revenue Ruling 2023-14 &mdash; Staking Rewards as Gross Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8949" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Form 8949 &mdash; Sales and Other Dispositions of Capital Assets</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-schedule-d-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Schedule D &mdash; Capital Gains and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 559 &mdash; Net Investment Income Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p550" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 550 &mdash; Investment Income and Expenses</a>
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
