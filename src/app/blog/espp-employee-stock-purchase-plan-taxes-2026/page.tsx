import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How ESPP (Employee Stock Purchase Plans) Are Taxed in 2026',
  description:
    'ESPPs let you buy company stock at a 15% discount — but the tax rules are complicated. Here\'s exactly how ESPP income is taxed, with a full worked example.',
  alternates: { canonical: '/blog/espp-employee-stock-purchase-plan-taxes-2026' },
  keywords:
    'ESPP taxes 2026, employee stock purchase plan taxes, ESPP qualifying disposition, ESPP disqualifying disposition, how ESPP is taxed, ESPP ordinary income, ESPP capital gains',
  openGraph: {
    title: 'How ESPP (Employee Stock Purchase Plans) Are Taxed in 2026',
    description:
      'ESPPs let you buy company stock at a 15% discount — but the tax rules are complicated. Here\'s exactly how ESPP income is taxed, with a full worked example.',
  },
}

export default function ESPPTaxes2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="ESPP stock purchase plan illustration showing paycheck contribution becoming discounted stock"
        >
          <rect width="600" height="200" rx="12" fill="#0f766e" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Paycheck icon */}
          <rect x="30" y="60" width="110" height="80" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="85" y="95" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">PAYCHECK</text>
          <text x="85" y="115" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="monospace">$</text>
          {/* Arrow */}
          <line x1="150" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="200,93 215,100 200,107" fill="rgba(255,255,255,0.7)" />
          {/* Discount badge */}
          <rect x="220" y="55" width="160" height="90" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="300" y="85" textAnchor="middle" fontSize="11" fill="#a7f3d0" fontFamily="sans-serif">BUY AT</text>
          <text x="300" y="112" textAnchor="middle" fontSize="28" fontWeight="800" fill="#fff" fontFamily="monospace">15%</text>
          <text x="300" y="133" textAnchor="middle" fontSize="11" fill="#a7f3d0" fontFamily="sans-serif">DISCOUNT</text>
          {/* Arrow */}
          <line x1="390" y1="100" x2="440" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="440,93 455,100 440,107" fill="rgba(255,255,255,0.7)" />
          {/* Stock icon */}
          <rect x="460" y="60" width="110" height="80" rx="8" fill="rgba(255,255,255,0.25)" />
          <polyline points="475,120 495,105 510,110 525,90 545,80" fill="none" stroke="#a7f3d0" strokeWidth="3" strokeLinecap="round" />
          <text x="515" y="130" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">STOCK</text>
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
        How ESPP (Employee Stock Purchase Plans) Are Taxed in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published October 8, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        An Employee Stock Purchase Plan (ESPP) sounds like a great deal: your employer lets you buy company stock at a discount — usually <strong>15% below market price</strong>. But when it comes time to sell, the tax rules can be surprisingly complicated. If you sell at the wrong time, you could pay ordinary income tax rates instead of the lower long-term capital gains rates — and that difference can cost you thousands.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how ESPP contributions come out of your paycheck, how the two types of ESPP dispositions are taxed, and gives you a full worked example so you know what to expect.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is an ESPP?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        An ESPP is a benefit offered by many publicly traded companies. It works like this:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          You elect to have a percentage of your <strong>after-tax paycheck</strong> withheld — typically 1% to 15% — over an <strong>offering period</strong> (usually 6 or 12 months).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          At the end of the offering period, your employer uses your accumulated contributions to buy company stock at a <strong>discounted price</strong>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          The discount is typically <strong>15% off the lower of</strong> the stock price at the beginning or end of the offering period (called the &ldquo;look-back provision&rdquo;). Under Section 423 of the tax code, plans with a qualifying look-back can offer up to a 15% discount.{' '}
          <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Publication 525 — Taxable and Nontaxable Income)
          </a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS limits ESPP contributions to <strong>$25,000 in fair market value of stock per calendar year</strong>. Because contributions come out of your after-tax pay, ESPP deductions do not reduce your taxable income the way a 401(k) does.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How ESPP Contributions Affect Your Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike a 401(k) or HSA, ESPP contributions are a <strong>post-tax deduction</strong>. That means they come out of your paycheck after income taxes and FICA have already been calculated. There is no immediate tax savings from contributing to an ESPP.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is what an ESPP contribution looks like on a $80,000 salary biweekly paycheck in <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Line Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount (Per Paycheck)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Pay', '$3,076.92'],
              ['Federal Income Tax', '-$343.00'],
              ['California State Tax', '-$133.00'],
              ['Social Security (6.2%)', '-$190.77'],
              ['Medicare (1.45%)', '-$44.62'],
              ['ESPP Contribution (10%)', '-$307.69'],
              ['Net Pay (Take-Home)', '$2,057.84'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td
                  style={{
                    padding: '0.625rem 1rem',
                    borderBottom: '1px solid #e2e8f0',
                    textAlign: 'right',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: label === 'Net Pay (Take-Home)' ? '#059669' : label === 'Gross Pay' ? '#1e293b' : '#dc2626',
                    fontWeight: label === 'Net Pay (Take-Home)' ? 700 : 400,
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
        Over 26 biweekly pay periods, a 10% contribution on an $80,000 salary adds up to about <strong>$8,000 in contributions</strong>. At a 15% discount, those contributions would buy roughly <strong>$9,412 worth of stock</strong> — an immediate paper gain of about $1,412 just from the discount.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Two Types of ESPP Sales: Qualifying vs. Disqualifying
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        How your ESPP shares are taxed depends almost entirely on <strong>when you sell them</strong>. There are two categories:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        1. Qualifying Disposition (Hold Longer = Better Tax Treatment)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>qualifying disposition</strong> means you held the shares long enough to get favorable tax treatment. To qualify, you must sell:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>More than <strong>2 years after the offering date</strong> (the start of the offering period), AND</li>
        <li style={{ marginBottom: '0.5rem' }}>More than <strong>1 year after the purchase date</strong> (when you actually bought the shares)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        With a qualifying disposition, you owe:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Ordinary income</strong> on the smaller of: (a) the actual gain on the stock, or (b) the discount you received at purchase. This discount income is reported on your W-2.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Long-term capital gains</strong> on any remaining gain above the ordinary income portion — taxed at 0%, 15%, or 20% depending on your total income.
        </li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        2. Disqualifying Disposition (Sell Too Early = Higher Taxes)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>disqualifying disposition</strong> happens when you sell shares before meeting the holding period requirements above. This is the most common scenario — many employees sell shares as soon as they receive them to lock in the guaranteed 15% gain.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        With a disqualifying disposition:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          The <strong>entire discount</strong> (the difference between what you paid and the fair market value on the purchase date) is taxed as <strong>ordinary income</strong> — at your regular marginal rate. It shows up on your W-2.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          Any gain above the fair market value at purchase is taxed as either <strong>short-term or long-term capital gains</strong> depending on how long you held the shares.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key difference: in a disqualifying disposition, the discount is always ordinary income. In a qualifying disposition, part of the gain may be treated as long-term capital gains instead.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-3922" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Form 3922 — Transfer of Stock Acquired Through an ESPP)
        </a>
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Qualifying vs. Disqualifying Disposition
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say you work at a company in <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> earning $85,000. Here are the ESPP details:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Offering date (start):</strong> January 1, 2025. Stock price: <strong>$40.00</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Purchase date (end of offering):</strong> June 30, 2025. Stock price: <strong>$50.00</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Purchase price (15% off lower of start/end):</strong> 85% × $40 = <strong>$34.00</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Shares purchased:</strong> 100 shares</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Total cost to you:</strong> 100 × $34 = <strong>$3,400</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Fair market value at purchase:</strong> 100 × $50 = <strong>$5,000</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You sell all 100 shares at <strong>$60.00 per share</strong> (total proceeds: $6,000). Here is how taxes differ depending on when you sell:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Category</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#dc2626' }}>Disqualifying Disposition<br /><small style={{ fontWeight: 400 }}>(Sold Aug 2025)</small></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#059669' }}>Qualifying Disposition<br /><small style={{ fontWeight: 400 }}>(Sold Sep 2027)</small></th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Sale Proceeds', '$6,000', '$6,000'],
              ['Your Cost Basis', '$3,400', '$3,400'],
              ['Total Gain', '$2,600', '$2,600'],
              ['Ordinary Income Portion', '$1,600 (full discount)', '$600 (capped at discount)*'],
              ['Capital Gains Portion', '$1,000 (short-term)', '$2,000 (long-term)'],
              ['Tax on Ordinary Income (22%)', '$352', '$132'],
              ['Tax on Capital Gains (0% LT / 22% ST)', '$220', '$0 (0% LT bracket)'],
              ['Total Federal Tax Owed', '$572', '$132'],
            ].map(([label, disq, qual], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label.includes('Total Federal') ? '#dc2626' : '#475569', fontWeight: label.includes('Total Federal') ? 700 : 400 }}>{disq}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label.includes('Total Federal') ? '#059669' : '#475569', fontWeight: label.includes('Total Federal') ? 700 : 400 }}>{qual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
        * In a qualifying disposition, the ordinary income portion is capped at the lesser of: (a) the gain on the stock, or (b) the discount from the offering date price ($40 × 15% × 100 shares = $600).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In this example, holding long enough for a qualifying disposition saves <strong>$440 in federal taxes</strong> on a $2,600 gain. The advantage grows substantially on larger ESPP purchases.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Your Cost Basis?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Getting your cost basis right is critical to avoid double taxation. When you sell ESPP shares after a disqualifying disposition, your employer adds the discount (ordinary income) to your W-2. If you also report the full gain on Schedule D without adjusting your basis, you will pay tax on the same income twice.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your <strong>adjusted cost basis</strong> equals the price you paid for the shares <em>plus</em> any amount already reported as ordinary income on your W-2:
      </p>

      <div
        style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        Adjusted Cost Basis = Purchase Price Paid + Ordinary Income on W-2
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In the disqualifying disposition example above: $3,400 paid + $1,600 W-2 income = <strong>$5,000 adjusted basis</strong>. When you report the sale of $6,000 proceeds on your Form 8949, you use $5,000 as your basis — resulting in a $1,000 short-term capital gain (not $2,600).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your brokerage may report the original $3,400 purchase price on your 1099-B. Always use your <em>adjusted</em> basis to avoid overpaying.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8949" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Form 8949 — Sales and Other Dispositions of Capital Assets)
        </a>
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        ESPP and State Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states follow the federal tax treatment for ESPP income. The ordinary income portion is taxed at your state&rsquo;s regular income tax rate, and capital gains are generally taxed as ordinary income at the state level (unlike the federal preferential long-term capital gains rates).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This means the state tax benefit of a qualifying disposition is smaller than the federal benefit — at the state level, you are taxed at ordinary rates regardless of how long you hold the shares. Here is a comparison across popular tech states:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Top State Income Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Capital Gains Rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['California', '13.3%', '13.3% (same as income)'],
              ['New York', '10.9%', '10.9% (same as income)'],
              ['Washington', '0%', '7% (above $250K)'],
              ['Texas', '0%', '0%'],
              ['Florida', '0%', '0%'],
            ].map(([state, income, cg], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                  <a href={`/${state.toLowerCase()}`} style={{ color: '#2563eb', textDecoration: 'underline' }}>{state}</a>
                </td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{income}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{cg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A California employee who sells ESPP shares with a $5,000 gain owes up to <strong>13.3% state tax</strong> on top of federal taxes — regardless of how long they held the shares. That is why many tech workers in California prefer to sell ESPP shares immediately (disqualifying disposition) rather than hold for the qualifying holding period; the state tax difference is minimal, but the <strong>concentration risk</strong> of holding a large position in one stock is real.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The &ldquo;Sell Immediately&rdquo; Strategy: Is It Right for You?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many financial advisors recommend selling ESPP shares immediately after purchase — even though it triggers a disqualifying disposition — for these reasons:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>You lock in the 15% gain immediately.</strong> If the stock drops after you buy it, you could lose more than the tax savings from waiting.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>You reduce concentration risk.</strong> Already getting a paycheck and benefits tied to your employer&rsquo;s success — also holding a large stock position amplifies that risk.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>The after-tax return is still excellent.</strong> Even paying ordinary income tax on the 15% discount, the after-tax return on ESPP contributions is typically <strong>10–13%</strong> over just a 6-month period — far better than most investments.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For workers in high-tax states like <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> or New York, the extra tax from a disqualifying disposition is often worth the certainty of cashing out immediately.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        ESPP Tax Reporting: What You Need to Know
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        ESPP tax reporting involves several documents:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Form 3922:</strong> Your employer sends you this form when you purchase ESPP shares. It shows the offering date, purchase date, prices, and number of shares. You do not report anything on this form at purchase time — it is just a record.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>W-2:</strong> When you sell shares in a disqualifying disposition (or a qualifying disposition with gain), the ordinary income portion is added to your W-2 Box 1 wages. Your employer does not automatically withhold taxes on this amount — it is simply added to your taxable income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Form 1099-B:</strong> Your brokerage issues this when you sell. It shows your proceeds. Double-check that the cost basis shown is your <em>adjusted</em> basis (purchase price + W-2 income already reported) — some brokerages only show the price you paid, which would cause double taxation if used as-is.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Form 8949 and Schedule D:</strong> You report the sale details here, using your adjusted cost basis. The net capital gain or loss flows to Schedule D.{' '}
          <a href="https://www.irs.gov/forms-pubs/about-schedule-d-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Schedule D Instructions)
          </a>
        </li>
      </ul>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common ESPP Tax Mistakes to Avoid
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Double-counting income.</strong> The most common mistake. If your W-2 already includes the ordinary income from your ESPP sale, do not also count it as a capital gain on Schedule D. Use your adjusted basis.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Confusing the offering date with the purchase date.</strong> The two-year clock for qualifying dispositions starts at the <em>offering date</em> (when the plan period opens), not the purchase date.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Forgetting state taxes.</strong> Ordinary income from ESPP sales is taxable in every state that has an income tax. Do not forget to account for state tax when estimating your after-sale proceeds.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Not saving for the tax bill.</strong> Since employers typically do not withhold taxes on ESPP income when you sell, you may owe taxes at year-end. Consider making a quarterly estimated tax payment if your ESPP sale creates a large tax liability.{' '}
          <a href="/blog/quarterly-estimated-taxes-2026" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (See: Quarterly Estimated Taxes 2026)
          </a>
        </li>
      </ul>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        ESPP vs. RSUs vs. Stock Options: A Quick Comparison
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Feature</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>ESPP</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>RSU</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>NSO / ISO</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Cost to employee', '85¢ per $1 of stock', 'Free', 'Strike price'],
              ['When taxed', 'At sale', 'At vesting', 'At exercise (NSO) / sale (ISO)'],
              ['Tax type', 'Ordinary + capital gains', 'Ordinary income', 'Ordinary (NSO) / capital gains (ISO)'],
              ['Employee controls timing', 'Partial', 'No', 'Yes'],
              ['AMT risk', 'No', 'No', 'Yes (ISOs)'],
            ].map(([label, espp, rsu, options], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#475569' }}>{espp}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#475569' }}>{rsu}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#475569' }}>{options}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For more on how RSUs and stock options are taxed, see:{' '}
        <a href="/blog/how-rsus-are-taxed" style={{ color: '#2563eb', textDecoration: 'underline' }}>How RSUs Are Taxed</a>{' '}
        and{' '}
        <a href="/blog/stock-options-taxes-nso-iso-2026" style={{ color: '#2563eb', textDecoration: 'underline' }}>Stock Options Taxes: NSOs and ISOs</a>.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        ESPPs are one of the most underappreciated employee benefits. Even after taxes, the built-in 15% discount makes ESPP contributions a high-return, low-risk investment — especially if you sell shares quickly to eliminate stock price risk.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most important rules to remember:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>ESPP contributions come out of your after-tax paycheck — no immediate tax deduction.</li>
        <li style={{ marginBottom: '0.5rem' }}>Sell after 2 years from offering + 1 year from purchase for a qualifying disposition (better federal tax rates).</li>
        <li style={{ marginBottom: '0.5rem' }}>Use your <strong>adjusted cost basis</strong> on Schedule D to avoid double taxation.</li>
        <li style={{ marginBottom: '0.5rem' }}>Plan ahead for the tax bill — your employer likely does not withhold taxes on ESPP ordinary income.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your ESPP gains are large, consider working with a tax professional who understands equity compensation to make sure you are reporting everything correctly and not overpaying.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f0fdfa',
          border: '1px solid #99f6e4',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your After-Tax Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use our free paycheck calculator to see exactly what your take-home pay looks like in your state — including how ESPP contributions affect each paycheck.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#0f766e',
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
          <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 525 — Taxable and Nontaxable Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-3922" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Form 3922 — Transfer of Stock Acquired Through an ESPP</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8949" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Form 8949 — Sales and Other Dispositions of Capital Assets</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-schedule-d-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Schedule D — Capital Gains and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-capital-gains-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation — State Capital Gains Tax Rates 2026</a>
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
