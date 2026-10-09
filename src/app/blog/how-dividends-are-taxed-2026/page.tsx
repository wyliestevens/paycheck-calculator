import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Investment Dividends Are Taxed in 2026: Qualified vs. Ordinary',
  description:
    'Qualified dividends are taxed at 0%, 15%, or 20% — far below ordinary income rates. Here\'s exactly how dividend taxation works in 2026, with a full worked example and rate table.',
  alternates: { canonical: '/blog/how-dividends-are-taxed-2026' },
  keywords:
    'how dividends are taxed 2026, qualified dividends tax rate, ordinary dividends tax, dividend income taxes, 1099-DIV, qualified dividend holding period, REIT dividends tax, investment income taxes 2026',
  openGraph: {
    title: 'How Investment Dividends Are Taxed in 2026: Qualified vs. Ordinary',
    description:
      'Qualified dividends are taxed at 0%, 15%, or 20% — far below ordinary income rates. Here\'s the full guide with a worked example at $75,000.',
  },
}

export default function HowDividendsAreTaxed2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Dividend tax illustration showing qualified vs ordinary rates"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Left: Stock certificate icon */}
          <rect x="40" y="50" width="110" height="100" rx="6" fill="rgba(255,255,255,0.15)" />
          <line x1="55" y1="72" x2="135" y2="72" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <line x1="55" y1="85" x2="125" y2="85" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <circle cx="95" cy="115" r="18" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <text x="95" y="121" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="monospace">$</text>
          <text x="95" y="43" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">DIVIDENDS</text>

          {/* Arrow right */}
          <line x1="162" y1="100" x2="205" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
          <polygon points="205,92 220,100 205,108" fill="rgba(255,255,255,0.5)" />

          {/* Center: two columns */}
          {/* Qualified box */}
          <rect x="228" y="45" width="130" height="110" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="293" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">QUALIFIED</text>
          <text x="293" y="90" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff" fontFamily="monospace">15%</text>
          <text x="293" y="112" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">typical rate</text>
          <text x="293" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">(0% or 20% possible)</text>
          <text x="293" y="148" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Long-term rates</text>

          {/* vs label */}
          <text x="385" y="107" textAnchor="middle" fontSize="14" fontWeight="700" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">vs</text>

          {/* Ordinary box */}
          <rect x="400" y="45" width="130" height="110" rx="8" fill="rgba(255,255,255,0.1)" />
          <text x="465" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">ORDINARY</text>
          <text x="465" y="90" textAnchor="middle" fontSize="26" fontWeight="800" fill="rgba(255,255,255,0.9)" fontFamily="monospace">22%</text>
          <text x="465" y="112" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">typical rate</text>
          <text x="465" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">(up to 37%)</text>
          <text x="465" y="148" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Ordinary income rates</text>
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
        How Investment Dividends Are Taxed in 2026: Qualified vs. Ordinary
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published October 9, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you own stocks, mutual funds, or ETFs, you probably receive <strong>dividends</strong> — regular cash payments companies make to shareholders out of their profits. Those payments feel like found money, but the IRS taxes them. The key is <em>how</em> they&rsquo;re taxed: not all dividends are treated equally.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Qualified dividends</strong> are taxed at the same low rates as long-term capital gains — 0%, 15%, or 20%. <strong>Ordinary dividends</strong> are taxed as regular income, at rates up to 37%. For someone in the 22% income tax bracket, qualifying your dividends can cut the tax rate almost in half. Here&rsquo;s everything you need to know.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Dividends?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A dividend is a distribution of a company&rsquo;s profits to its shareholders. When you own stock in a profitable company — whether directly or through a mutual fund or ETF — the company may pay you a dividend, typically quarterly. Dividends are separate from any capital gain you might earn when you eventually sell the stock.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Companies that regularly pay dividends include large, established corporations like Johnson &amp; Johnson, Coca-Cola, and most utilities. Growth companies like Amazon and Meta historically paid no dividends, preferring to reinvest profits instead.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At tax time, your brokerage reports all dividends you received on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1099-div" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1099-DIV
        </a>
        . Box 1a shows your <em>total</em> ordinary dividends. Box 1b shows the subset that are qualified. You report both amounts on Schedule B of your tax return.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Ordinary Dividends: Taxed as Regular Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Ordinary dividends</strong> are the default category. They are added to your other income — wages, freelance income, interest — and taxed at your regular federal income tax rate. In 2026, those rates run from 10% to 37%.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Common sources of ordinary (non-qualified) dividends include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>REITs (Real Estate Investment Trusts)</strong> — by law, they must distribute at least 90% of taxable income; most REIT dividends are ordinary</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Money market funds</strong> — interest-like distributions, always ordinary</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Master Limited Partnerships (MLPs)</strong> — distributions are ordinary income (actually return of capital in many cases)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Short-term holding period violations</strong> — a qualified dividend becomes ordinary if you didn&rsquo;t hold the stock long enough (more on this below)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Dividends from foreign corporations</strong> that aren&rsquo;t on the IRS qualified list</li>
      </ul>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Qualified Dividends: Lower Rates
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Qualified dividends</strong> receive preferential tax treatment — they are taxed at the same rates as long-term capital gains: 0%, 15%, or 20%, depending on your taxable income. For most middle-income investors, that means a 15% tax rate on qualified dividends instead of the 22% or 24% they pay on ordinary income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The favorable rate was introduced by the Jobs and Growth Tax Relief Reconciliation Act of 2003 and has been a permanent feature of the tax code since 2013. The IRS explains the distinction in{' '}
        <a href="https://www.irs.gov/taxtopics/tc404" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Topic 404 — Dividends
        </a>.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Makes a Dividend &ldquo;Qualified&rdquo;?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a dividend to qualify for the lower rate, it must meet two criteria:
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>1. The dividend must be paid by a qualifying corporation.</strong> This means:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>A US corporation (virtually all S&amp;P 500 companies qualify)</li>
        <li style={{ marginBottom: '0.5rem' }}>A foreign corporation whose stock trades on a major US exchange (like a Canadian bank trading on NYSE)</li>
        <li style={{ marginBottom: '0.5rem' }}>A foreign corporation in a country with a US tax treaty that covers dividends</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>2. You must meet the holding period requirement.</strong> You must have held the stock for more than 60 days during the 121-day period that begins 60 days before the ex-dividend date.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In plain English: if you buy a stock right before the dividend record date just to capture the dividend, then sell immediately afterward, the dividend is <em>not</em> qualified — it becomes ordinary income. You need to have held the stock for at least about two months surrounding that dividend.
      </p>

      {/* Section 5 — Holding Period */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 60-Day Holding Period Rule Explained
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The holding period rule centers on the <strong>ex-dividend date</strong> — the cutoff date for receiving the upcoming dividend. Buy the stock on or after the ex-date and you don&rsquo;t get that dividend. Buy before it and you do.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS defines a <strong>121-day window</strong>: 60 days before the ex-dividend date, the ex-dividend date itself, and 60 days after. You must hold the stock for more than 60 days within that window. Most long-term investors who simply buy and hold easily meet this test — it only becomes an issue for traders who buy stocks specifically for dividend income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Mutual funds and ETFs pass through qualified dividend status from their underlying holdings. If a fund&rsquo;s portfolio stocks paid qualified dividends, and you held the fund for the required period, the dividends flowing through to you are also qualified.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p550.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 550 — Investment Income and Expenses)
        </a>
      </p>

      {/* Section 6 — Rate Table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Qualified Dividend Tax Rates for 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Qualified dividends are taxed using the same three-rate structure as long-term capital gains. Your rate depends on your <em>taxable income</em> — not your gross income. The 2026 thresholds:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single Filers</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Filing Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0%', 'Up to $48,350', 'Up to $96,700'],
              ['15%', '$48,351 – $533,400', '$96,701 – $600,050'],
              ['20%', 'Over $533,400', 'Over $600,050'],
            ].map(([rate, single, mfj], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: '#059669', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', color: '#475569', fontFamily: "'JetBrains Mono', monospace" }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', color: '#475569', fontFamily: "'JetBrains Mono', monospace" }}>{mfj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice: if your taxable income is below $48,350 as a single filer, you owe <strong>zero federal tax on qualified dividends</strong>. This is a powerful benefit for lower-income investors and retirees managing their income carefully.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important nuance: these thresholds apply to your <em>total</em> taxable income, including the dividends themselves. Dividends are &ldquo;stacked on top&rdquo; of your ordinary income for the purpose of determining the rate. So if your wages fill the bracket up to $45,000, the first $3,350 of qualified dividends is taxed at 0% and anything above $48,350 is taxed at 15%.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Tax Inflation Adjustments for 2026)
        </a>
      </p>

      {/* Section 7 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $75,000 Salary + $3,000 in Dividends
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s run the numbers for a single filer with $75,000 in wages and $3,000 in dividends — $2,400 qualified, $600 ordinary. Standard deduction is $15,000 in 2026.
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
              ['Wages (W-2)', '$75,000'],
              ['Ordinary dividends (non-qualified)', '$600'],
              ['Qualified dividends', '$2,400'],
              ['Gross income', '$78,000'],
              ['Standard deduction', '−$15,000'],
              ['Taxable income', '$63,000'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Step 1: Tax on ordinary income ($60,600 = taxable income minus qualified dividends)</strong>
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.875rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        10% on first $11,925 = $1,192.50<br />
        12% on $11,926–$48,475 = $4,385.88<br />
        22% on $48,476–$60,600 = $2,667.28<br />
        <strong>Ordinary income tax: $8,245.66</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Step 2: Tax on qualified dividends ($2,400)</strong>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Total taxable income is $63,000. Since this is above the 0% threshold of $48,350, the $2,400 in qualified dividends is taxed at <strong>15%</strong>.
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.875rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        15% × $2,400 = <strong>$360.00</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Comparison: What if all dividends were ordinary?</strong>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax on $2,400 dividends</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>You keep</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Qualified dividends (15%)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$360</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,040</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Ordinary dividends (22%)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$528</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$1,872</td>
            </tr>
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={1} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Savings from qualified status</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$168</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$168 more</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The $168 savings on $2,400 might seem modest, but the percentage savings grows larger as the dividend income increases. On $24,000 in qualified dividends, the savings would be $1,680 at this income level — and even more at higher brackets where the gap between 22%/24% and 15% is larger.
      </p>

      {/* Section 8 — Special Cases */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Special Cases: REITs, MLPs, and Money Market Funds
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some popular income-generating investments pay dividends that are <em>always</em> ordinary:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        REITs (Real Estate Investment Trusts)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        REITs must distribute at least 90% of taxable income to shareholders. Because they receive a special tax deduction for dividends paid, most REIT distributions are <strong>ordinary income</strong>, not qualified dividends. However, since the 2017 Tax Cuts and Jobs Act, REIT dividends qualify for the <strong>20% pass-through deduction</strong> (Section 199A). This effectively reduces your tax rate on REIT dividends by 20% of the amount — so a taxpayer in the 22% bracket pays roughly 17.6% on REIT dividends rather than 22%.{' '}
        <a href="https://www.irs.gov/newsroom/tax-cuts-and-jobs-act-provision-11011-section-199a-qualified-business-income-deduction-faqs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Section 199A FAQ)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Master Limited Partnerships (MLPs)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        MLPs (common in the energy sector) pass through income, gains, and losses to investors. Most MLP &ldquo;distributions&rdquo; are technically <strong>return of capital</strong> — they reduce your cost basis rather than creating immediate taxable income. When you sell, the accumulated return of capital creates a larger capital gain. This is a tax-deferral mechanism, not a tax elimination.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Money Market Funds
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Money market fund distributions are interest income, not dividends. They are always taxed as ordinary income. The same applies to bond interest from corporate bonds and most bond funds. Municipal bond interest is generally exempt from federal tax — and sometimes state tax — which can make it attractive in high tax brackets.{' '}
        <a href="https://www.irs.gov/taxtopics/tc403" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Topic 403: Interest Received)
        </a>
      </p>

      {/* Section 9 — 1099-DIV */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Reading Your Form 1099-DIV
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Your brokerage sends a 1099-DIV by January 31 for any account that paid $10 or more in dividends. Here are the key boxes:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Box</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>What It Reports</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Treatment</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1a', 'Total ordinary dividends', 'Ordinary income rate (10%–37%)'],
              ['1b', 'Qualified dividends (subset of 1a)', 'Preferential rate (0%, 15%, or 20%)'],
              ['2a', 'Total capital gain distributions', 'Long-term capital gain rate'],
              ['3', 'Nondividend distributions (return of capital)', 'Reduces your cost basis; not currently taxed'],
              ['7', 'Foreign tax paid', 'May be a credit or deduction'],
            ].map(([box, what, treatment], i) => (
              <tr key={box} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', fontFamily: "'JetBrains Mono', monospace" }}>{box}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{what}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Box 1b is always less than or equal to Box 1a. The difference (Box 1a minus Box 1b) is your ordinary dividend income, taxed at regular rates. You transfer both figures to{' '}
        <a href="https://www.irs.gov/forms-pubs/about-schedule-b-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Schedule B
        </a>{' '}
        of your Form 1040.
      </p>

      {/* Section 10 — Additional Medicare Tax */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        High Earners: The 3.8% Net Investment Income Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your modified adjusted gross income (MAGI) exceeds $200,000 (single) or $250,000 (married filing jointly), an additional <strong>3.8% Net Investment Income Tax (NIIT)</strong> applies to investment income — including all dividends, both qualified and ordinary.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This means the effective rate on qualified dividends for high earners is 15% + 3.8% = <strong>18.8%</strong>, or 20% + 3.8% = <strong>23.8%</strong> at the top. Still lower than ordinary income rates, but significantly higher than the basic 15% rate. The NIIT is reported on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8960" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 8960
        </a>.
      </p>

      {/* Section 11 — Strategies */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Minimize Dividend Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Several strategies can legally reduce the tax you owe on dividend income:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        1. Hold Dividend-Paying Stocks in Tax-Advantaged Accounts
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Dividends earned inside a <strong>traditional IRA, Roth IRA, or 401(k)</strong> are not taxed in the year received. Traditional accounts defer taxes until withdrawal; Roth accounts eliminate the tax entirely. Holding high-yield dividend payers like REITs inside an IRA can be especially powerful since their distributions are otherwise ordinary income.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        2. Hold Stocks for the Qualifying Period
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is the simplest strategy. If you buy and hold dividend-paying stocks for at least 61 days surrounding the ex-dividend date, the dividends automatically qualify for the lower rate. Most buy-and-hold investors naturally meet this requirement.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        3. Harvest Investment Losses to Offset Gains
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Tax-loss harvesting — selling investments at a loss to offset capital gains and up to $3,000 in ordinary income — indirectly reduces the income that can push your dividends into higher brackets. This is a year-round strategy, not just a December tactic.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        4. Manage Income in Retirement for the 0% Rate
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Retirees with modest taxable income can pay <strong>zero federal tax on qualified dividends</strong> if their taxable income stays below $48,350 (single) or $96,700 (MFJ). Strategies like Roth conversions in low-income years, delaying Social Security, and drawing from Roth accounts first can help keep taxable income in the 0% zone.
      </p>

      {/* Section 12 — State Taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Don&rsquo;t Forget State Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The preferential rates for qualified dividends are <strong>federal only</strong>. Most states tax dividends as ordinary income at the state&rsquo;s regular income tax rate. California, for example, taxes all dividend income at ordinary rates up to 13.3% — with no distinction for qualified dividends.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A handful of states have no income tax at all (Florida, Texas, Nevada, Washington, etc.), so dividend income faces zero state tax for residents there. For everyone else, your effective total rate on dividends includes both the federal rate and your state rate. Check your state&rsquo;s department of revenue for specifics.
      </p>

      {/* Section 13 — Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Dividend taxation has two tiers: <strong>qualified dividends</strong> taxed at 0%, 15%, or 20%, and <strong>ordinary dividends</strong> taxed as regular income at up to 37%. For most investors, the majority of dividends from US stocks held in taxable brokerage accounts will be qualified — giving you a meaningful tax advantage over other forms of income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key actions: hold dividend stocks for the required period, keep high-yield ordinary-income payers (like REITs) in tax-advantaged accounts, and track your 1099-DIV carefully each tax season to make sure you&rsquo;re claiming the qualified dividend treatment you&rsquo;ve earned.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At higher incomes, the 3.8% NIIT applies on top of everything — so plan accordingly. And remember: state income taxes can significantly erode the federal advantage, especially in high-tax states like California and New York.
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
          See Your Full Tax Picture
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see how federal tax, state tax, and FICA break down — and calculate your real take-home pay.
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
          <a href="https://www.irs.gov/taxtopics/tc404" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 404: Dividends</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1099-div" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 1099-DIV</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p550.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 550: Investment Income and Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc403" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 403: Interest Received</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8960" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 8960 (Net Investment Income Tax)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/tax-cuts-and-jobs-act-provision-11011-section-199a-qualified-business-income-deduction-faqs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Section 199A Qualified Business Income Deduction FAQ</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-schedule-b-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Schedule B (Form 1040)</a>
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
