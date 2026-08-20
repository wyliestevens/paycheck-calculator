import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capital Gains Tax Explained: Short-Term vs Long-Term in 2026',
  description:
    'Short-term capital gains are taxed as ordinary income. Long-term gains get lower rates — 0%, 15%, or 20%. Here\'s exactly how capital gains tax works in 2026, with real examples.',
  alternates: { canonical: '/blog/capital-gains-tax-2026' },
  keywords:
    'capital gains tax 2026, short-term capital gains, long-term capital gains, capital gains tax rate 2026, investment taxes, crypto capital gains, stock tax 2026',
  openGraph: {
    title: 'Capital Gains Tax Explained: Short-Term vs Long-Term in 2026',
    description:
      'Short-term gains are taxed as income. Long-term gains get 0%, 15%, or 20% rates. Here\'s the full breakdown with a worked example.',
  },
}

export default function CapitalGainsTax2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Capital gains tax illustration showing investment growth and tax rates"
        >
          <rect width="600" height="200" rx="12" fill="#15803d" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Chart bars rising */}
          <rect x="60" y="140" width="30" height="30" rx="3" fill="rgba(255,255,255,0.3)" />
          <rect x="100" y="120" width="30" height="50" rx="3" fill="rgba(255,255,255,0.35)" />
          <rect x="140" y="95" width="30" height="75" rx="3" fill="rgba(255,255,255,0.4)" />
          <rect x="180" y="65" width="30" height="105" rx="3" fill="rgba(255,255,255,0.5)" />
          <rect x="220" y="40" width="30" height="130" rx="3" fill="rgba(255,255,255,0.6)" />

          {/* Dividing line */}
          <line x1="285" y1="30" x2="285" y2="175" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4,3" />

          {/* Short-term label */}
          <text x="155" y="28" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Short-Term</text>
          <text x="155" y="41" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">&lt; 1 Year</text>

          {/* Long-term label */}
          <text x="430" y="28" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Long-Term</text>
          <text x="430" y="41" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">&gt; 1 Year</text>

          {/* Rate boxes right side */}
          <rect x="305" y="55" width="90" height="34" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="350" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">0%</text>
          <text x="350" y="83" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">low income</text>

          <rect x="405" y="55" width="90" height="34" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="450" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">15%</text>
          <text x="450" y="83" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">most people</text>

          <rect x="505" y="55" width="70" height="34" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="540" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">20%</text>
          <text x="540" y="83" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">high earners</text>

          {/* vs ordinary income text */}
          <rect x="305" y="110" width="270" height="34" rx="6" fill="rgba(255,255,255,0.15)" />
          <text x="440" y="125" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Short-term = ordinary income rates</text>
          <text x="440" y="139" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">10% – 37% just like a paycheck</text>

          {/* Arrow up */}
          <polygon points="245,55 255,75 235,75" fill="rgba(255,255,255,0.7)" />
          <line x1="245" y1="75" x2="245" y2="160" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
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
        Capital Gains Tax Explained: Short-Term vs Long-Term in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 20, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you sell an investment for more than you paid, the profit is called a <strong>capital gain</strong>. The IRS taxes that gain — but the rate depends on one critical factor: how long you held the investment before selling.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Hold for less than a year and you pay the same rates as your regular paycheck — up to 37%. Hold for more than a year and you qualify for much lower <strong>long-term capital gains rates</strong> of 0%, 15%, or 20%. That single decision &mdash; when to sell &mdash; can save you thousands of dollars.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how capital gains tax works in 2026, with rates, thresholds, crypto rules, and a worked example showing the real dollar difference.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a Capital Gain?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>capital gain</strong> is the profit you make when you sell a capital asset for more than you paid. A <strong>capital loss</strong> is the opposite — when you sell for less than you paid. Capital assets include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Stocks, ETFs, and mutual funds</li>
        <li style={{ marginBottom: '0.5rem' }}>Bonds</li>
        <li style={{ marginBottom: '0.5rem' }}>Cryptocurrency (Bitcoin, Ethereum, etc.)</li>
        <li style={{ marginBottom: '0.5rem' }}>Real estate (with some exceptions)</li>
        <li style={{ marginBottom: '0.5rem' }}>Collectibles (art, coins, jewelry)</li>
        <li style={{ marginBottom: '0.5rem' }}>Business property</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The amount of tax you owe is calculated on your <strong>net gain</strong> &mdash; the sale price minus your original cost (called your <strong>cost basis</strong>). If you bought 10 shares of stock at $50 each ($500 total) and sold them for $800, your capital gain is $300.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Short-Term vs Long-Term: The Most Important Distinction
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS splits capital gains into two categories based on how long you owned the asset:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Holding Period</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#dc2626' }}>Short-Term</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>1 year or less</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>10% – 37% (ordinary income rates)</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#15803d' }}>Long-Term</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>More than 1 year</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#15803d' }}>0%, 15%, or 20%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Waiting just one day past the one-year mark can drop your tax rate significantly. If you are in the 22% income tax bracket and sell a stock after 364 days, you pay 22% on the gain. Sell after 366 days and you pay 15%. On a $10,000 gain, that is $700 in savings just by waiting.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Long-Term Capital Gains Tax Rates for 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Long-term capital gains tax rates are based on your <strong>taxable income</strong> (not just your investment profit). In 2026, the thresholds for single filers are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single Filer Taxable Income</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Filing Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0%', 'Up to $49,150', 'Up to $98,300'],
              ['15%', '$49,151 – $542,250', '$98,301 – $610,700'],
              ['20%', 'Over $542,250', 'Over $610,700'],
            ].map(([rate, single, mfj], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: rate === '0%' ? '#059669' : rate === '15%' ? '#d97706' : '#dc2626' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{mfj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem', fontStyle: 'italic' }}>
        Source:{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          IRS Topic 409 — Capital Gains and Losses
        </a>
        . Thresholds are adjusted annually for inflation.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that the 0% rate applies to a surprising number of people. A single person with $49,000 in total taxable income — wages plus capital gains — pays <em>zero federal tax</em> on long-term investment profits. This is one of the most underused tax advantages in the U.S. tax code.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Short-Term Capital Gains: Taxed Like a Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Short-term capital gains are added directly to your ordinary income and taxed at the same federal rates that apply to your salary. There is no special rate &mdash; it is just more income in your existing bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, if you earn $70,000 in salary and $15,000 from selling stocks held less than a year, your total taxable income for the year is $85,000 (minus your standard deduction). You pay tax on all of it using the standard seven federal brackets.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is why day traders and frequent stock flippers often face much higher tax bills than long-term investors — every profitable trade generates short-term gains taxed at up to 37%.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Net Investment Income Tax (NIIT): An Extra 3.8%
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        High earners face a second layer of tax on investment income called the <strong>Net Investment Income Tax (NIIT)</strong>. It adds <strong>3.8%</strong> on top of your regular capital gains rate if your Modified Adjusted Gross Income (MAGI) exceeds:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>$200,000</strong> for single filers</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>$250,000</strong> for married filing jointly</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>$125,000</strong> for married filing separately</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These thresholds have never been adjusted for inflation since the NIIT was created in 2013, which means more people get hit every year as incomes rise.{' '}
        <a href="https://www.irs.gov/newsroom/questions-and-answers-on-the-net-investment-income-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Net Investment Income Tax)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are a single filer earning $250,000 and you sell stock for a $50,000 long-term gain, you pay:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
        }}
      >
        <p style={{ margin: '0 0 0.5rem 0', color: '#475569' }}>Long-term capital gains tax: $50,000 &times; 20% = <span style={{ color: '#dc2626' }}>$10,000</span></p>
        <p style={{ margin: '0 0 0.5rem 0', color: '#475569' }}>NIIT: $50,000 &times; 3.8% = <span style={{ color: '#dc2626' }}>$1,900</span></p>
        <p style={{ margin: '0', color: '#1e293b', fontWeight: 700 }}>Total federal tax on the gain: <span style={{ color: '#dc2626' }}>$11,900</span> (23.8%)</p>
      </div>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Capital Gains on Cryptocurrency
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS treats cryptocurrency as <strong>property</strong>, not currency. That means every taxable event — selling crypto for cash, trading one coin for another, or using crypto to buy goods — triggers a capital gain or loss. The same short-term and long-term rules apply.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Key points for crypto investors:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Every trade is taxable.</strong> Swapping Bitcoin for Ethereum is a taxable event. You owe tax on the gain from the Bitcoin you &ldquo;sold,&rdquo; even if no cash ever hit your bank account.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Crypto received as income is ordinary income.</strong> Mining rewards, staking rewards, and payments received in crypto are taxed as ordinary income at your regular rate — not as capital gains.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>You must track your cost basis.</strong> Your gain or loss on each transaction depends on what you originally paid. Keeping records is essential — brokers and exchanges now report this to the IRS on Form 1099-DA.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Losses can offset gains.</strong> If you sell one crypto at a loss and another at a gain, the loss reduces your taxable gain.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Virtual Currencies)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Home Sale Capital Gains Exclusion
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Selling your home can create a large capital gain &mdash; but the IRS offers a generous exclusion. If you owned your home and used it as your primary residence for at least <strong>2 of the last 5 years</strong>, you can exclude:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>$250,000</strong> of gain if you are a single filer</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>$500,000</strong> of gain if you are married filing jointly</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Example: You bought a home for $300,000 and sell it for $700,000. Your gain is $400,000. If you are married, you exclude $500,000 — so your entire $400,000 gain is <em>tax-free</em>. You only owe tax if the gain exceeds the exclusion.{' '}
        <a href="https://www.irs.gov/taxtopics/tc701" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 701 &mdash; Sale of Your Home)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Tax-Loss Harvesting: Offset Gains With Losses
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have investments that are worth less than you paid, you can sell them to create a <strong>capital loss</strong> — and use that loss to reduce your taxable gains. This strategy is called <strong>tax-loss harvesting</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is how the math works:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Capital losses first offset capital gains of the same type (short-term losses offset short-term gains; long-term losses offset long-term gains).</li>
        <li style={{ marginBottom: '0.5rem' }}>Excess losses can then offset gains of the other type.</li>
        <li style={{ marginBottom: '0.5rem' }}>If losses exceed all gains, you can deduct up to <strong>$3,000</strong> in net losses against your ordinary income per year.</li>
        <li style={{ marginBottom: '0.5rem' }}>Any remaining unused losses carry forward to future tax years — there is no limit on how many years you can carry them.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important: Watch out for the <strong>wash-sale rule</strong>. If you sell a stock at a loss and buy the same (or substantially identical) stock within 30 days before or after, the IRS disallows the loss. You cannot claim the deduction.
      </p>

      {/* Section 9 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Short-Term vs Long-Term on the Same $10,000 Gain
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say you are a single filer earning $80,000 in salary. You sell a stock for a $10,000 profit. Here is what you pay depending on when you sell:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Scenario</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Short-Term (&lt;1 yr)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Long-Term (&gt;1 yr)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Salary', '$80,000', '$80,000'],
              ['Capital Gain', '$10,000', '$10,000'],
              ['Standard Deduction (2026)', '-$15,000', '-$15,000'],
              ['Taxable Income', '$75,000', '$75,000'],
              ['Federal Tax Rate on Gain', '22%', '15%'],
              ['Federal Tax on $10,000 Gain', '$2,200', '$1,500'],
            ].map(([label, st, lt], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{st}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{lt}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Tax Savings by Waiting</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>—</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$700 saved</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        By holding the investment for just one more day past the one-year mark, this investor saves $700 in federal taxes — with no additional risk required. On a $50,000 gain, the savings would be $3,500. On top of federal tax, you also owe state income tax on capital gains in most states, making the timing decision even more valuable.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Taxes on Capital Gains
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states tax capital gains as ordinary income &mdash; there is no separate lower rate like at the federal level. A few exceptions:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No income tax states:</strong>{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
          <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a>,{' '}
          <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a> (except its new capital gains tax on gains over $262,000),{' '}
          <a href="/wyoming" style={{ color: '#2563eb', textDecoration: 'underline' }}>Wyoming</a>,{' '}
          <a href="/alaska" style={{ color: '#2563eb', textDecoration: 'underline' }}>Alaska</a>, and{' '}
          <a href="/south-dakota" style={{ color: '#2563eb', textDecoration: 'underline' }}>South Dakota</a> charge zero state tax on capital gains.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>High-tax states:</strong>{' '}
          <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> taxes capital gains at up to 13.3% &mdash; the same rate as regular income. A California resident in the top bracket pays up to 33.3% combined (20% federal + 3.8% NIIT + 13.3% CA state) on long-term capital gains.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Lower rate states:</strong> A handful of states offer reduced rates on long-term gains. Always check your state&rsquo;s specific rules.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <a href="https://taxfoundation.org/data/all/state/capital-gains-tax-rates/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Capital Gains Tax Rates)
        </a>
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Report Capital Gains
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Capital gains are reported on <strong>Schedule D</strong> of your federal tax return, along with <strong>Form 8949</strong>, which lists each individual transaction. Your broker will send you a <strong>Form 1099-B</strong> (or 1099-DA for crypto) at the end of the year showing your sale proceeds. You are responsible for knowing your cost basis and calculating the gain.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most tax software (TurboTax, H&amp;R Block, FreeTaxUSA) can import your 1099-B directly from major brokers, making the reporting process straightforward for most investors.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you expect to owe more than $1,000 in federal tax from capital gains during the year, you may need to pay <strong>quarterly estimated taxes</strong> to avoid an underpayment penalty. This applies to large one-time gains from selling stock, real estate, or a business.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Estimated Taxes)
        </a>
      </p>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Strategies to Reduce Your Capital Gains Tax Bill
      </h2>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Hold for over a year.</strong> The single biggest lever — converting short-term gains to long-term cuts your rate from up to 37% down to 0%, 15%, or 20%.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Use tax-advantaged accounts.</strong> Investments inside a <a href="/blog/how-401k-contributions-affect-your-paycheck" style={{ color: '#2563eb', textDecoration: 'underline' }}>401(k)</a> or <a href="/blog/roth-ira-vs-traditional-ira-2026" style={{ color: '#2563eb', textDecoration: 'underline' }}>IRA</a> grow without triggering capital gains each year. Roth accounts make qualified withdrawals entirely tax-free.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Harvest losses.</strong> Sell losing investments to offset gains before year-end. Just avoid the wash-sale rule.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Give appreciated stock to charity.</strong> Donating shares directly to a charity avoids the capital gains tax entirely and still gives you a deduction for the full market value.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Time large sales around your income.</strong> If you expect lower income one year (a gap between jobs, early retirement), that may be the best year to sell and pay at the 0% rate.
        </li>
      </ol>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Capital gains tax is one of the most controllable parts of your tax bill. Unlike your paycheck withholding, you often get to choose when you sell &mdash; and that timing decision can mean thousands of dollars.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The core rules are simple: hold an investment for more than a year and you unlock the 0%–20% long-term rates. Sell early and you pay the same rates as your salary. Add state taxes on top, and the difference between short-term and long-term treatment can be 30 percentage points or more in a high-tax state like California.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Understanding these rules &mdash; and planning your sales around them &mdash; is one of the highest-value financial habits any investor can build.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See What Taxes Come Out of Your Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Capital gains are just one piece of the tax puzzle. Use our free calculator to see all the taxes on your regular paycheck — by state, salary, and filing status.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#15803d',
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
          <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 409 — Capital Gains and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/questions-and-answers-on-the-net-investment-income-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS — Net Investment Income Tax Q&amp;A</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc701" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 701 — Sale of Your Home</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS — Virtual Currencies (Crypto Tax Guidance)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/capital-gains-tax-rates/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation — State Capital Gains Tax Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS — Estimated Taxes</a>
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
