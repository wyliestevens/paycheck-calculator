import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'State Sales Tax Rates Ranked for 2026: Where You Pay the Most (and Least)',
  description:
    'Five states charge zero sales tax. Louisiana tops the list at nearly 10%. Here are all 50 states ranked by combined sales tax rate — and what it means for your wallet.',
  alternates: { canonical: '/blog/state-sales-tax-rates-2026' },
  keywords:
    'state sales tax rates 2026, highest sales tax states, no sales tax states, combined sales tax rate by state, sales tax comparison 2026',
  openGraph: {
    title: 'State Sales Tax Rates Ranked for 2026: Where You Pay the Most (and Least)',
    description:
      'Five states charge zero sales tax. Louisiana tops the list at nearly 10%. Here are all 50 states ranked by combined sales tax rate.',
  },
}

export default function StateSalesTaxRates2026() {
  const allStates = [
    { state: 'Louisiana', stateRate: '4.45%', avgLocal: '5.11%', combined: '9.56%' },
    { state: 'Tennessee', stateRate: '7.00%', avgLocal: '2.55%', combined: '9.55%' },
    { state: 'Arkansas', stateRate: '6.50%', avgLocal: '2.94%', combined: '9.44%' },
    { state: 'Washington', stateRate: '6.50%', avgLocal: '2.87%', combined: '9.37%' },
    { state: 'Alabama', stateRate: '4.00%', avgLocal: '5.27%', combined: '9.27%' },
    { state: 'Oklahoma', stateRate: '4.50%', avgLocal: '4.49%', combined: '8.99%' },
    { state: 'Illinois', stateRate: '6.25%', avgLocal: '2.61%', combined: '8.86%' },
    { state: 'California', stateRate: '7.25%', avgLocal: '1.57%', combined: '8.82%' },
    { state: 'Kansas', stateRate: '6.50%', avgLocal: '2.18%', combined: '8.68%' },
    { state: 'New York', stateRate: '4.00%', avgLocal: '4.52%', combined: '8.52%' },
    { state: 'Missouri', stateRate: '4.23%', avgLocal: '4.04%', combined: '8.27%' },
    { state: 'Texas', stateRate: '6.25%', avgLocal: '1.95%', combined: '8.20%' },
    { state: 'Nevada', stateRate: '6.85%', avgLocal: '1.29%', combined: '8.14%' },
    { state: 'Arizona', stateRate: '5.60%', avgLocal: '2.79%', combined: '8.39%' },
    { state: 'Colorado', stateRate: '2.90%', avgLocal: '4.87%', combined: '7.77%' },
    { state: 'New Mexico', stateRate: '5.00%', avgLocal: '2.75%', combined: '7.75%' },
    { state: 'Minnesota', stateRate: '6.88%', avgLocal: '0.59%', combined: '7.47%' },
    { state: 'South Carolina', stateRate: '6.00%', avgLocal: '1.43%', combined: '7.43%' },
    { state: 'Georgia', stateRate: '4.00%', avgLocal: '3.36%', combined: '7.36%' },
    { state: 'Indiana', stateRate: '7.00%', avgLocal: '0%', combined: '7.00%' },
    { state: 'Mississippi', stateRate: '7.00%', avgLocal: '0.07%', combined: '7.07%' },
    { state: 'Florida', stateRate: '6.00%', avgLocal: '1.07%', combined: '7.07%' },
    { state: 'Rhode Island', stateRate: '7.00%', avgLocal: '0%', combined: '7.00%' },
    { state: 'Ohio', stateRate: '5.75%', avgLocal: '1.49%', combined: '7.24%' },
    { state: 'North Carolina', stateRate: '4.75%', avgLocal: '2.22%', combined: '6.97%' },
    { state: 'Utah', stateRate: '5.95%', avgLocal: '1.02%', combined: '6.97%' },
    { state: 'Nebraska', stateRate: '5.50%', avgLocal: '1.44%', combined: '6.94%' },
    { state: 'North Dakota', stateRate: '5.00%', avgLocal: '1.93%', combined: '6.93%' },
    { state: 'New Jersey', stateRate: '6.63%', avgLocal: '−0.03%', combined: '6.60%' },
    { state: 'South Dakota', stateRate: '4.50%', avgLocal: '1.90%', combined: '6.40%' },
    { state: 'West Virginia', stateRate: '6.00%', avgLocal: '0.39%', combined: '6.39%' },
    { state: 'Connecticut', stateRate: '6.35%', avgLocal: '0%', combined: '6.35%' },
    { state: 'Pennsylvania', stateRate: '6.00%', avgLocal: '0.34%', combined: '6.34%' },
    { state: 'Massachusetts', stateRate: '6.25%', avgLocal: '0%', combined: '6.25%' },
    { state: 'Iowa', stateRate: '6.00%', avgLocal: '0%', combined: '6.00%' },
    { state: 'Kentucky', stateRate: '6.00%', avgLocal: '0%', combined: '6.00%' },
    { state: 'Maryland', stateRate: '6.00%', avgLocal: '0%', combined: '6.00%' },
    { state: 'Michigan', stateRate: '6.00%', avgLocal: '0%', combined: '6.00%' },
    { state: 'Vermont', stateRate: '6.00%', avgLocal: '0.21%', combined: '6.21%' },
    { state: 'Idaho', stateRate: '6.00%', avgLocal: '0.03%', combined: '6.03%' },
    { state: 'Maine', stateRate: '5.50%', avgLocal: '0%', combined: '5.50%' },
    { state: 'Wisconsin', stateRate: '5.00%', avgLocal: '0.44%', combined: '5.44%' },
    { state: 'Wyoming', stateRate: '4.00%', avgLocal: '1.33%', combined: '5.33%' },
    { state: 'Virginia', stateRate: '5.30%', avgLocal: '0.37%', combined: '5.67%' },
    { state: 'Hawaii', stateRate: '4.00%', avgLocal: '0.44%', combined: '4.44%' },
    { state: 'Alaska', stateRate: '0%', avgLocal: '~1.73%', combined: '~1.73%' },
    { state: 'Delaware', stateRate: '0%', avgLocal: '0%', combined: '0%' },
    { state: 'Montana', stateRate: '0%', avgLocal: '0%', combined: '0%' },
    { state: 'New Hampshire', stateRate: '0%', avgLocal: '0%', combined: '0%' },
    { state: 'Oregon', stateRate: '0%', avgLocal: '0%', combined: '0%' },
  ]

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="State sales tax rates illustration showing a shopping cart and state rankings"
        >
          <rect width="600" height="200" rx="12" fill="#16a34a" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Shopping cart icon */}
          <circle cx="80" cy="100" r="40" fill="rgba(255,255,255,0.2)" />
          {/* Cart body */}
          <path d="M58 82 L65 82 L72 108 L100 108 L106 88 L72 88" stroke="#fff" strokeWidth="3" fill="none" strokeLinejoin="round" />
          {/* Cart wheels */}
          <circle cx="76" cy="114" r="4" fill="rgba(255,255,255,0.9)" />
          <circle cx="98" cy="114" r="4" fill="rgba(255,255,255,0.9)" />

          {/* Rank bars */}
          <text x="160" y="55" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">COMBINED SALES TAX RATE</text>

          {/* Bar 1 - Louisiana */}
          <rect x="160" y="65" width="200" height="18" rx="3" fill="rgba(255,255,255,0.25)" />
          <rect x="160" y="65" width="200" height="18" rx="3" fill="rgba(255,255,255,0.5)" />
          <text x="165" y="78" fontSize="10" fill="#fff" fontFamily="sans-serif">Louisiana 9.56%</text>

          {/* Bar 2 - Tennessee */}
          <rect x="160" y="88" width="195" height="18" rx="3" fill="rgba(255,255,255,0.35)" />
          <text x="165" y="101" fontSize="10" fill="#fff" fontFamily="sans-serif">Tennessee 9.55%</text>

          {/* Bar 3 - Arkansas */}
          <rect x="160" y="111" width="188" height="18" rx="3" fill="rgba(255,255,255,0.25)" />
          <text x="165" y="124" fontSize="10" fill="#fff" fontFamily="sans-serif">Arkansas 9.44%</text>

          {/* Bar 4 - Zero states */}
          <rect x="160" y="134" width="1" height="18" rx="3" fill="rgba(255,255,255,0.5)" />
          <text x="165" y="147" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">OR, MT, NH, DE — 0%</text>

          {/* Right side stat */}
          <circle cx="510" cy="100" r="50" fill="rgba(255,255,255,0.15)" />
          <text x="510" y="88" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">5 states</text>
          <text x="510" y="108" textAnchor="middle" fontSize="22" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">0%</text>
          <text x="510" y="124" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">sales tax</text>
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
        State Sales Tax Rates Ranked for 2026: Where You Pay the Most (and Least)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 23, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most people focus on income tax when comparing states — and for good reason. But there is another tax that hits you every time you buy groceries, fill up your gas tank, or pick up new clothes: <strong>sales tax</strong>. In some states, the combined state and local sales tax rate tops 9.5%, adding nearly $10 on every $100 you spend. In five states, that rate is zero.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Understanding sales tax matters because it directly affects your <strong>real purchasing power</strong>. Even if two states have identical income taxes, a 9% sales tax state versus a 0% sales tax state can cost a typical household several thousand dollars more per year. Here is every state ranked, with the numbers you actually need.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Sales Tax — and How Does It Work?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Sales tax is a percentage added to the purchase price of goods (and sometimes services) at the point of sale. Unlike income tax, which is deducted from your paycheck, sales tax is collected directly by stores and paid to the state and local governments.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There are two layers of sales tax:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State sales tax:</strong> Set by the state legislature. California&rsquo;s state rate is 7.25%. Indiana&rsquo;s is 7%. Oregon&rsquo;s is 0%.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Local sales tax:</strong> Counties and cities can add their own rate on top. This is why the <em>combined</em> rate in New Orleans, Louisiana can exceed 10% — the city piles on top of the state&rsquo;s 4.45%.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you see a &ldquo;combined sales tax rate&rdquo; for a state, it is the weighted average of the state rate plus all local rates across that state&rsquo;s population. Your actual rate depends on exactly where you live and shop.{' '}
        <a href="https://taxfoundation.org/data/all/state/2026-sales-taxes/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State and Local Sales Tax Rates, 2026)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 5 States with Zero Sales Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Five states charge no state-level sales tax at all:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f0fdf4' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Note</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Delaware', '0%', 'No local sales tax either. True zero.'],
              ['Montana', '0%', 'No local sales tax. True zero.'],
              ['New Hampshire', '0%', 'No local sales tax. True zero.'],
              ['Oregon', '0%', 'No local sales tax. True zero.'],
              ['Alaska', '0%', 'No state tax, but local rates average ~1.73%.'],
            ].map(([state, rate, note], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 600 }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 700 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Oregon, Delaware, Montana, and New Hampshire are the cleanest zero-sales-tax states — no state rate and no local additions. Alaska has no state sales tax but allows municipalities to levy their own, so some Alaskan towns do charge sales tax at the local level.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note: New Hampshire and Oregon also have <strong>no state income tax</strong> (New Hampshire taxes investment income only). If you live in either state, you avoid both income and sales taxes at the state level — a rare combination.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 10 States with the Highest Combined Sales Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        These states hit consumers the hardest when they spend money:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#fef2f2' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rank</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Avg Local</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Combined Avg</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['#1', 'Louisiana', '4.45%', '5.11%', '9.56%'],
              ['#2', 'Tennessee', '7.00%', '2.55%', '9.55%'],
              ['#3', 'Arkansas', '6.50%', '2.94%', '9.44%'],
              ['#4', 'Washington', '6.50%', '2.87%', '9.37%'],
              ['#5', 'Alabama', '4.00%', '5.27%', '9.27%'],
              ['#6', 'Oklahoma', '4.50%', '4.49%', '8.99%'],
              ['#7', 'Illinois', '6.25%', '2.61%', '8.86%'],
              ['#8', 'California', '7.25%', '1.57%', '8.82%'],
              ['#9', 'Kansas', '6.50%', '2.18%', '8.68%'],
              ['#10', 'New York', '4.00%', '4.52%', '8.52%'],
            ].map(([rank, state, stateRate, local, combined], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#fef2f2' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '0.875rem' }}>{rank}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 600 }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{stateRate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{local}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 700 }}>{combined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that <strong>Louisiana</strong> tops the list even though its state rate (4.45%) is much lower than California&rsquo;s (7.25%). The reason is local taxes. Louisiana parishes (counties) and municipalities pile on an average of 5.11% in local sales taxes, pushing the combined rate to 9.56%. California&rsquo;s local additions are far smaller.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Washington</strong> deserves special attention: it has no state income tax but a 9.37% combined sales tax. For people with lower incomes who spend most of their paycheck on goods, this can be a significant burden. Use our{' '}
        <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington paycheck calculator</a>{' '}
        to see how the full picture looks for your salary.
      </p>

      {/* Section 4 - Full table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        All 50 States Ranked by Combined Sales Tax Rate (2026)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is the full list, ranked from highest to lowest:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Rate</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Avg Local</th>
              <th style={{ padding: '0.625rem 0.875rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Combined</th>
            </tr>
          </thead>
          <tbody>
            {allStates.map(({ state, stateRate, avgLocal, combined }, i) => {
              const isZero = combined === '0%'
              return (
                <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>{state}</td>
                  <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{stateRate}</td>
                  <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{avgLocal}</td>
                  <td style={{ padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: isZero ? '#059669' : i < 5 ? '#dc2626' : '#1e293b' }}>{combined}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
        Source: Tax Foundation, State and Local Sales Tax Rates, 2026. Combined rates are population-weighted averages and will vary by exact location.
      </p>

      {/* Section 5 - Exemptions */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Often Exempt from Sales Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even in high-tax states, certain purchases are often exempt from sales tax. The most common exemptions include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Groceries:</strong> Most states exempt unprepared food from sales tax. But some states (including Tennessee and Alabama) fully tax groceries, which makes their effective rate even higher for low-income households who spend a larger share of income on food.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Prescription drugs:</strong> All 50 states exempt prescription medications from sales tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Clothing:</strong> Some states (like Pennsylvania and New Jersey) exempt most clothing. Others tax it at the full rate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Agricultural supplies:</strong> Most states exempt farming equipment and supplies from sales tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Digital goods:</strong> Rules on software, streaming services, and digital downloads vary widely by state and are still evolving.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Tennessee&rsquo;s high sales tax on groceries is particularly notable. At a combined rate near 9.55% on food, a family spending $800/month on groceries pays an extra $76 per month — or over $900 per year — just in sales tax on their food bill.{' '}
        <a href="https://www.tn.gov/revenue/taxes/sales-and-use-tax.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tennessee Department of Revenue)
        </a>
      </p>

      {/* Section 6 - Impact on take-home pay */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Sales Tax Affects Your Real Take-Home Pay
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Income tax gets most of the attention, but sales tax is a real drain on spending power. Here is a worked example comparing two states with no state income tax:
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Assume a <strong>$70,000 salary</strong>, single filer, and that you spend <strong>$40,000 per year</strong> on taxable goods and services (roughly 57% of take-home pay). We compare <a href="/oregon" style={{ color: '#2563eb', textDecoration: 'underline' }}>Oregon</a> vs. <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a> — neighboring states with no income tax, but very different sales tax situations.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Factor</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Oregon</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Washington</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Annual Salary', '$70,000', '$70,000'],
              ['State Income Tax', '$0', '$0'],
              ['Federal Tax + FICA (est.)', '−$14,750', '−$14,750'],
              ['Net Income After Taxes', '$55,250', '$55,250'],
              ['Combined Sales Tax Rate', '0%', '9.37%'],
              ['Sales Tax Paid ($40K spending)', '$0', '−$3,748'],
            ].map(([label, or_, wa], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: or_.startsWith('−') ? '#dc2626' : '#1e293b' }}>{or_}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: wa.startsWith('−') ? '#dc2626' : '#1e293b' }}>{wa}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Real Spending Power</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$55,250</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$51,502</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Oregon resident keeps about <strong>$3,748 more per year</strong> in real purchasing power — purely because of the zero sales tax. That is $312 per month more to spend, save, or invest. Over a decade, that gap compounds significantly.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Of course, Oregon has a state income tax (up to 9.9%), while Washington has none. For a $70,000 earner, Oregon&rsquo;s income tax would be roughly $4,600. So in total, <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a> comes out slightly ahead for this income level — but the gap is much smaller than it appears when you look at income tax alone. The lesson: always compare the <em>total</em> tax picture, not just one type.
      </p>

      {/* Section 7 - Income tax states vs no income tax */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        No Income Tax Doesn&rsquo;t Always Mean Low Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        States have to fund their governments somehow. The nine states with no income tax often make up the difference through higher sales taxes, property taxes, or other fees. Here is how the no-income-tax states compare on sales tax:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>No-Income-Tax State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Combined Sales Tax</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Washington', '9.37%', '#dc2626'],
              ['Tennessee', '9.55%', '#dc2626'],
              ['Texas', '8.20%', '#d97706'],
              ['Nevada', '8.14%', '#d97706'],
              ['Florida', '7.07%', '#d97706'],
              ['South Dakota', '6.40%', '#475569'],
              ['Wyoming', '5.33%', '#475569'],
              ['Alaska', '~1.73%', '#059669'],
              ['New Hampshire', '0%', '#059669'],
            ].map(([state, rate, color]) => (
              <tr key={state}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color }}>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Washington and Tennessee have the highest sales taxes among no-income-tax states — meaning residents pay a lot in taxes, just on a different activity (spending rather than earning). <a href="/new-hampshire" style={{ color: '#2563eb', textDecoration: 'underline' }}>New Hampshire</a> stands out as the one state that has neither a broad income tax nor a sales tax, funded largely by property taxes instead.
      </p>

      {/* Section 8 - Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What This Means for Your Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your paycheck calculator shows how much you keep after income taxes. But sales tax determines how far that take-home pay actually goes. Here is how to think about the two together:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Compare total tax burden, not just income tax.</strong> A state with no income tax and 9% sales tax may be more expensive than a state with 5% income tax and 0% sales tax, depending on how much you earn and spend.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Higher earners benefit more from no-income-tax states.</strong> If you earn $200K, avoiding a 9.9% state income tax (like Oregon&rsquo;s top rate) saves far more than avoiding a 9% sales tax on spending. Lower earners who spend most of their income on goods benefit more from low sales tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Watch out for high local rates.</strong> Moving from one county to another within the same state can change your effective sales tax rate significantly. Louisiana has a statewide base rate but some parishes charge over 11% combined.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check grocery exemptions.</strong> If you live in a high-sales-tax state, find out if groceries are exempt. That one exemption can save a family hundreds of dollars per year.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Use our state paycheck calculators to see your income tax picture, then factor in your state&rsquo;s sales tax rate when evaluating your total cost of living. You can compare calculators for{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>,{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>, and all other states to start.
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
          See Your Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Calculate your exact paycheck in any of the 50 states — and factor in sales tax when you compare locations.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#16a34a',
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
          <a href="https://taxfoundation.org/data/all/state/2026-sales-taxes/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State and Local Sales Tax Rates, 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.tn.gov/revenue/taxes/sales-and-use-tax.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tennessee Department of Revenue &mdash; Sales and Use Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.oregon.gov/dor/programs/businesses/Pages/apply-sales-tax.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Oregon Department of Revenue &mdash; Sales Tax Information</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://dor.wa.gov/taxes-rates/sales-use-tax-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Washington Department of Revenue &mdash; Sales Tax Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-individual-income-tax-rates-and-brackets/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Individual Income Tax Rates</a>
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
