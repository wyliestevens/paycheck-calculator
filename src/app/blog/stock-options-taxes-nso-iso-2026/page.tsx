import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stock Options Taxes: How NSOs and ISOs Are Taxed in 2026',
  description:
    'NSOs are taxed as ordinary income when you exercise them. ISOs get special treatment — but can trigger the AMT. Here\'s the complete guide with worked examples.',
  alternates: { canonical: '/blog/stock-options-taxes-nso-iso-2026' },
  keywords:
    'stock options taxes 2026, NSO taxes, ISO taxes, non-qualified stock options, incentive stock options, how stock options are taxed, exercise stock options tax, AMT stock options',
  openGraph: {
    title: 'Stock Options Taxes: How NSOs and ISOs Are Taxed in 2026',
    description:
      'NSOs are taxed as ordinary income when you exercise them. ISOs get special treatment — but can trigger the AMT. Here\'s the full guide.',
  },
}

export default function StockOptionsTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Stock options illustration showing grant, vest, and exercise steps"
        >
          <rect width="600" height="200" rx="12" fill="#0f766e" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Step 1: Grant */}
          <circle cx="90" cy="100" r="42" fill="rgba(255,255,255,0.15)" />
          <text x="90" y="92" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">GRANT</text>
          <text x="90" y="108" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">$</text>
          <text x="90" y="126" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">No tax yet</text>
          {/* Arrow 1 */}
          <line x1="140" y1="100" x2="188" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeDasharray="5,3" />
          <polygon points="188,93 202,100 188,107" fill="rgba(255,255,255,0.5)" />
          {/* Step 2: Vest */}
          <circle cx="250" cy="100" r="42" fill="rgba(255,255,255,0.15)" />
          <text x="250" y="92" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">VEST</text>
          <text x="250" y="110" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">◈</text>
          <text x="250" y="126" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Right earned</text>
          {/* Arrow 2 */}
          <line x1="300" y1="100" x2="348" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeDasharray="5,3" />
          <polygon points="348,93 362,100 348,107" fill="rgba(255,255,255,0.5)" />
          {/* Step 3: Exercise */}
          <circle cx="415" cy="100" r="42" fill="rgba(255,255,255,0.22)" />
          <text x="415" y="92" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">EXERCISE</text>
          <text x="415" y="110" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">→</text>
          <text x="415" y="126" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Tax event!</text>
          {/* Arrow 3 */}
          <line x1="465" y1="100" x2="505" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="505,93 520,100 505,107" fill="rgba(255,255,255,0.5)" />
          {/* Step 4: Sell */}
          <circle cx="548" cy="100" r="36" fill="rgba(255,255,255,0.18)" />
          <text x="548" y="96" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">SELL</text>
          <text x="548" y="113" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="monospace">💰</text>
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
        Stock Options Taxes: How NSOs and ISOs Are Taxed in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 28, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Stock options are one of the most powerful forms of employee compensation — but they come with some of the most confusing tax rules. The two main types, <strong>Non-Qualified Stock Options (NSOs)</strong> and <strong>Incentive Stock Options (ISOs)</strong>, are taxed very differently. Make the wrong move and you could owe more in taxes than the gain you thought you were getting.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how each type works, when taxes are triggered, and what you can do to minimize your bill — with worked dollar examples at every step.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Stock Options 101: What They Are
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A stock option is a right — not an obligation — to buy shares of your company&rsquo;s stock at a fixed price, called the <strong>exercise price</strong> (also called the strike price or grant price). That price is locked in on the day the option is granted, usually at the current market value.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If the stock price rises after your grant date, your options become valuable. You can buy shares at the lower locked-in price and either hold them or sell them at the higher market price. The difference between what you pay (the exercise price) and what the stock is worth (the fair market value) is called the <strong>spread</strong> — and that spread is where taxes come in.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most options vest over time — commonly over four years. You typically cannot exercise unvested options.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        NSOs vs. ISOs: The Key Difference
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Before diving into the numbers, here is the essential difference:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>NSO (Non-Qualified)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>ISO (Incentive)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Who can receive them', 'Employees, contractors, directors', 'Employees only'],
              ['Tax at exercise', 'Ordinary income + FICA', 'No regular income tax (AMT may apply)'],
              ['Tax at sale', 'Capital gains on post-exercise gain', 'Capital gains on total gain (if holding periods met)'],
              ['Employer deduction', 'Yes', 'No'],
              ['AMT risk', 'None', 'Yes — the spread triggers AMT'],
              ['Annual limit', 'No limit', '$100,000 in vesting per year'],
            ].map(([row, nso, iso], i) => (
              <tr key={row} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{row}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{nso}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{iso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How NSOs Are Taxed
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        NSOs are the simpler of the two types — though &ldquo;simpler&rdquo; still means two separate tax events.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        Event 1: Exercise (the big one)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you exercise an NSO, the <strong>spread</strong> — the difference between the exercise price and the fair market value (FMV) on the exercise date — is treated as <strong>ordinary income</strong>. It is added to your W-2 wages for the year and taxed at your regular income tax rate. You also owe Social Security and Medicare taxes (FICA) on this amount.{' '}
        <a href="https://www.irs.gov/taxtopics/tc427" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 427: Stock Options)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Your employer is required to withhold taxes on this amount, just like regular paycheck income.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        Event 2: Selling the shares
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        After you exercise, you own actual shares. If you sell them later at a higher price, the additional gain is taxed as a <strong>capital gain</strong>:
      </p>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Sold within 1 year of exercise: <strong>short-term capital gain</strong>, taxed as ordinary income</li>
        <li style={{ marginBottom: '0.5rem' }}>Sold after 1+ year of exercise: <strong>long-term capital gain</strong>, taxed at 0%, 15%, or 20%</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        NSO Worked Example
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Say you were granted 1,000 NSOs with an exercise price of <strong>$10/share</strong>. Two years later you exercise all 1,000 options when the stock is worth <strong>$35/share</strong>. Six months after that you sell all shares at <strong>$40/share</strong>.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Event</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Type</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Spread at exercise (1,000 × ($35–$10))', '$25,000', 'Ordinary income + FICA (e.g. 22% bracket = ~$6,150 fed)'],
              ['Gain at sale (1,000 × ($40–$35))', '$5,000', 'Short-term capital gain (ordinary rate, <1 yr held)'],
              ['Total gain', '$30,000', ''],
            ].map(([event, amount, type], i) => (
              <tr key={event} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{event}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#2563eb', fontWeight: 600 }}>{amount}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you had held the shares for more than a year after exercise, that $5,000 gain would be taxed at the long-term capital gains rate (0%, 15%, or 20%) instead of as ordinary income — a meaningful difference if you are in a high bracket.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How ISOs Are Taxed
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        ISOs are the more favorable option — but they come with strict IRS rules and a significant AMT risk that catches many employees off guard.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        At exercise: No regular income tax (but watch for AMT)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you exercise an ISO, there is <strong>no regular income tax due</strong> on the spread. No amount is added to your W-2. This is the big advantage over NSOs.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, the spread <strong>is</strong> an AMT preference item. If the spread is large enough, it could trigger the <strong>Alternative Minimum Tax (AMT)</strong>, a parallel tax system that ignores many regular deductions. You owe the higher of your regular tax or your AMT.{' '}
        <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 525 &mdash; Taxable and Nontaxable Income)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 2026 AMT exemption is <strong>$137,000</strong> for single filers and <strong>$220,000</strong> for married filing jointly. Spreads below these amounts generally do not trigger AMT — but a large ISO exercise can easily push you over.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        At sale: ISO holding periods matter a lot
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        To get the best tax treatment from an ISO, you must meet <strong>both</strong> of these holding periods:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Hold the shares for <strong>at least 2 years</strong> from the grant date</li>
        <li style={{ marginBottom: '0.5rem' }}>Hold the shares for <strong>at least 1 year</strong> after the exercise date</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you meet both conditions — called a <strong>qualifying disposition</strong> — the entire gain from exercise price to sale price is taxed as a <strong>long-term capital gain</strong>. No ordinary income at all.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you miss either holding period — called a <strong>disqualifying disposition</strong> — the spread at exercise becomes ordinary income, exactly like an NSO. The additional gain after exercise is a capital gain (short or long-term depending on how long you held the shares after exercise).
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        ISO Worked Example — Qualifying Disposition
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Same scenario: 1,000 ISOs with an exercise price of <strong>$10/share</strong>. You exercise when the stock is <strong>$35/share</strong> and hold for 18 months before selling at <strong>$40/share</strong>. You&rsquo;ve also held the shares for more than 2 years from the grant date.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Event</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Type</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['At exercise (regular income tax)', '$0', 'No income tax due'],
              ['At exercise (AMT check)', '$25,000 spread', 'AMT preference item — may trigger AMT'],
              ['At sale (1,000 × ($40–$10))', '$30,000', 'Long-term capital gain (0%, 15%, or 20%)'],
            ].map(([event, amount, type], i) => (
              <tr key={event} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{event}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#0f766e', fontWeight: 600 }}>{amount}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The ISO qualifying disposition saves you thousands compared to NSOs. In the 22% bracket, NSOs would have generated roughly <strong>$6,150 in ordinary income tax</strong> on the $25,000 exercise spread. With an ISO qualifying disposition, that spread is never taxed as ordinary income — only as a long-term capital gain at 15%.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The AMT Trap: What ISO Holders Must Know
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many tech workers have been surprised with five- or six-figure AMT bills after exercising large ISO grants. Here is how it happens:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>You exercise 5,000 ISOs with a $5 exercise price when the stock is trading at $50.</li>
        <li style={{ marginBottom: '0.75rem' }}>The spread is $45 × 5,000 = <strong>$225,000</strong>. This is your AMT income but not regular taxable income.</li>
        <li style={{ marginBottom: '0.75rem' }}>The AMT exemption is $137,000, so your AMT is calculated on $225,000 − $137,000 = <strong>$88,000</strong>.</li>
        <li style={{ marginBottom: '0.75rem' }}>At the 26% AMT rate, that is <strong>$22,880 in AMT</strong>.</li>
        <li style={{ marginBottom: '0.75rem' }}>If the stock then <em>drops</em> before you can sell, you still owe the AMT on the paper gain you exercised at.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is the classic ISO trap. The good news: any AMT you pay creates an <strong>AMT credit</strong> you can use in future years when your regular tax exceeds your AMT. But the timing mismatch can cause serious cash flow problems.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you hold large ISO grants, consider exercising in smaller batches across multiple years to manage the AMT spread, or consult a CPA before exercising.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        NSO vs. ISO: Side-by-Side Tax Comparison
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is a full comparison using the same scenario (1,000 options, $10 exercise price, $35 FMV at exercise, $40 sale price). The ISO column assumes a qualifying disposition and no AMT triggered. Assumes 22% ordinary rate, 15% long-term capital gains rate.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>NSO</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>ISO (qualifying)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Exercise spread ($25,000)', 'Ordinary income', 'Not taxed (AMT item only)'],
              ['Federal income tax on spread', '$5,500 (22%)', '$0'],
              ['FICA on spread', '$1,913 (7.65%)', '$0'],
              ['Gain at sale ($5,000)', 'Short-term cap gain', 'Long-term cap gain (merged)'],
              ['Tax on $5,000 gain', '$1,100 (22%)', 'Included in total below'],
              ['Total gain ($30,000) as LT cap gain', '—', '$4,500 (15%)'],
              ['Total tax owed', '~$8,513', '~$4,500'],
              ['Net take-home after tax', '~$21,487', '~$25,500'],
            ].map(([label, nso, iso], i) => {
              const isLast = i === 7
              return (
                <tr key={label} style={{ background: isLast ? '#ecfdf5' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: isLast ? 700 : 400 }}>{label}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isLast ? '#dc2626' : '#475569', fontWeight: isLast ? 700 : 400 }}>{nso}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isLast ? '#059669' : '#475569', fontWeight: isLast ? 700 : 400 }}>{iso}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The ISO qualifying disposition keeps an extra <strong>$4,013</strong> in your pocket on a modest $30,000 gain. On larger grants, the savings can be in the tens of thousands.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Taxes on Stock Options
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal taxes are only part of the picture. States have their own rules for stock option income:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No-income-tax states:</strong>{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>, Nevada, and six other states charge no state income tax — so you keep more of your NSO spread and ISO gains.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>California:</strong>{' '}
          <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> is especially aggressive. It taxes <em>both</em> NSO spreads and ISO gains as ordinary income — California does not recognize the preferential ISO treatment at the federal level. With a top rate of 13.3%, this is a major factor for Silicon Valley employees.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>New York:</strong>{' '}
          <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a> taxes option income as ordinary income. NYC residents also face a city income tax on top of state taxes.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Washington state:</strong>{' '}
          <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a> has no income tax, but it does have a 7% capital gains tax on gains over $270,000. ISOs sold at a large gain might trigger this.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you moved states between the grant date and exercise date, you may owe tax to multiple states. This is common for remote workers who received options in one state and later moved.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-capital-gains-tax-rates/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Capital Gains Tax Rates)
        </a>
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Early Exercise and Section 83(b)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some companies allow employees to exercise stock options before they have vested. This is called an <strong>early exercise</strong>. The shares are still subject to the vesting schedule, and unvested shares can be repurchased by the company if you leave.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you early-exercise, you can file a <strong>Section 83(b) election</strong> with the IRS within <strong>30 days</strong> of exercising. This tells the IRS to tax the spread now (when it is likely small or zero, since the exercise price often equals the FMV) instead of as shares vest. Benefits include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Your capital gains holding period starts now — earlier long-term rates</li>
        <li style={{ marginBottom: '0.5rem' }}>Future growth is taxed at lower capital gains rates, not ordinary income rates</li>
        <li style={{ marginBottom: '0.5rem' }}>For ISOs, the 83(b) election locks in a lower AMT basis</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The risk: if you leave the company before vesting and the company repurchases the shares, you do not get a refund of the tax you paid on unvested shares. File the 83(b) election on time — it cannot be filed late under any circumstances.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key Tax Forms for Stock Options
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>W-2:</strong> NSO exercise income shows up in Box 1 (wages). Your employer adds the spread to your W-2 for that year.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Form 1099-B:</strong> When you sell shares (NSO or ISO), your broker sends a 1099-B reporting the proceeds. You report the sale on Form 8949 and Schedule D.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Form 3921:</strong> For ISOs, your employer must issue Form 3921 for each exercise. It lists the exercise price, FMV at exercise, and number of shares — the data you need to figure out your AMT.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Form 6251:</strong> The AMT form. If you exercised ISOs, you fill out Form 6251 to determine if AMT applies.{' '}
          <a href="https://www.irs.gov/forms-pubs/about-form-6251" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; About Form 6251)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Form 8949 and Schedule D:</strong> Report capital gains from selling shares.
        </li>
      </ul>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Strategies to Minimize Stock Option Taxes
      </h2>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Exercise ISOs in a low-income year.</strong> If you have a year with lower income — between jobs, on leave, or just a slower year — the AMT exemption is more likely to cover the spread. Lower regular income also means a lower spread between regular tax and AMT.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Spread ISO exercises across multiple years.</strong> Instead of exercising everything at once, exercise in installments to manage the AMT spread each year and stay under the AMT exemption.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Meet the ISO holding periods.</strong> Holding shares for 1+ year after exercise and 2+ years from grant date converts your ordinary income into long-term capital gain — often a 22% to 15% swap or better.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Consider filing an 83(b) election on early exercises.</strong> If your company&rsquo;s stock is likely to appreciate significantly, an early exercise at a low valuation starts your capital gains clock sooner.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Max out other pre-tax contributions in exercise years.</strong> Maxing your 401(k) ($23,500 in 2026), HSA, and other pre-tax benefits lowers your adjusted gross income, which may reduce your regular income tax and AMT exposure in the same year.
        </li>
      </ol>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Stock options can be tremendously valuable — but the tax rules are complex enough that many people leave money on the table or get hit with surprise bills. The core rules are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>NSOs:</strong> ordinary income + FICA at exercise; capital gains at sale</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>ISOs:</strong> no regular tax at exercise; all capital gain at sale if holding periods are met — but AMT risk at exercise</li>
        <li style={{ marginBottom: '0.5rem' }}>State taxes vary widely — California offers no ISO preference at all</li>
        <li style={{ marginBottom: '0.5rem' }}>Timing your exercises and sales can save thousands</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have a significant option grant — especially ISOs at a fast-growing company — it is worth working with a CPA or financial advisor who specializes in equity compensation before you exercise.
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
          See How Your Paycheck Stacks Up
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use the free paycheck calculator to see your take-home pay by state — especially useful when comparing job offers with different equity packages.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
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
          <a href="https://www.irs.gov/taxtopics/tc427" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 427: Stock Options</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 525 &mdash; Taxable and Nontaxable Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-6251" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 6251 (Alternative Minimum Tax)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-3921" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 3921 (Exercise of ISOs)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-capital-gains-tax-rates/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Capital Gains Tax Rates</a>
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
