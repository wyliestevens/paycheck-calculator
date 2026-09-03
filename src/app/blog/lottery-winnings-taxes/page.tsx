import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lottery Winnings and Taxes: How Much Do You Actually Keep? (2026)',
  description:
    'Win $1 million in the lottery and you might keep $425,000 — or less. Here\'s exactly how federal and state taxes hit your jackpot, with a full worked example.',
  alternates: { canonical: '/blog/lottery-winnings-taxes' },
  keywords:
    'lottery winnings taxes 2026, how much tax on lottery winnings, lottery lump sum tax, Powerball tax rate, Mega Millions taxes, state lottery tax, jackpot take-home pay',
  openGraph: {
    title: 'Lottery Winnings and Taxes: How Much Do You Actually Keep? (2026)',
    description:
      'Win $1 million in the lottery and you might keep $425,000 — or less. Here\'s the full breakdown of federal and state taxes on jackpot winnings.',
  },
}

export default function LotteryWinningsTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Lottery winnings and taxes illustration showing jackpot reduced by federal and state taxes"
        >
          <rect width="600" height="200" rx="12" fill="#d97706" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Jackpot circle */}
          <circle cx="80" cy="100" r="42" fill="rgba(255,255,255,0.2)" />
          <text x="80" y="95" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">JACKPOT</text>
          <text x="80" y="114" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="monospace">$1M</text>
          {/* Arrow */}
          <line x1="135" y1="100" x2="185" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="185,92 200,100 185,108" fill="rgba(255,255,255,0.6)" />
          {/* Tax boxes */}
          <rect x="210" y="40" width="120" height="36" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="270" y="55" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Federal Tax</text>
          <text x="270" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">-$174K</text>
          <rect x="210" y="88" width="120" height="36" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="270" y="103" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">State Tax</text>
          <text x="270" y="118" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">$0–$89K</text>
          <rect x="210" y="136" width="120" height="36" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="270" y="151" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Lump Sum Cut</text>
          <text x="270" y="166" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">-$400K</text>
          {/* Arrow */}
          <line x1="344" y1="100" x2="394" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="394,92 409,100 394,108" fill="rgba(255,255,255,0.6)" />
          {/* Take-home circle */}
          <circle cx="480" cy="100" r="50" fill="rgba(255,255,255,0.25)" />
          <text x="480" y="90" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">You Keep</text>
          <text x="480" y="110" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff" fontFamily="monospace">$426K</text>
          <text x="480" y="127" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">(best case)</text>
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
        Lottery Winnings and Taxes: How Much Do You Actually Keep? (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 3, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You just won $1 million in the lottery. Before you start planning your vacation, here is the reality: after federal taxes and your state&rsquo;s cut, you could end up with anywhere from <strong>$337,000 to $426,000</strong> &mdash; or even less if you live in a high-tax city like New York. Winning the lottery is genuinely life-changing, but the tax bill is real and larger than most people expect.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide walks through every layer of tax that applies to lottery winnings in 2026 &mdash; federal withholding, your actual tax bracket, state taxes, and the lump-sum vs annuity decision &mdash; with a full worked example so you know exactly what you would keep.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Lottery Winnings Are Ordinary Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS treats lottery and gambling winnings the same as wages from a job: as <strong>ordinary income</strong>. There is no special &ldquo;lottery tax rate.&rdquo; Your winnings get added to whatever else you earned that year, and the combined total determines your federal income tax bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This matters because a big jackpot pushes almost all of your income into the top federal bracket of <strong>37%</strong>. That is the marginal rate that applies to taxable income above $626,350 for single filers in 2026. Even a modest $50,000 win can push a middle-income earner into a higher bracket for the year.{' '}
        <a href="https://www.irs.gov/taxtopics/tc419" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 419 &mdash; Gambling Income and Losses)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Lottery winnings are also subject to FICA taxes? No &mdash; and this is one of the few places lottery winners catch a break. <strong>Social Security and Medicare taxes do not apply to lottery winnings</strong> because they are not &ldquo;wages&rdquo; from employment. FICA only hits earned income from a job.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal Withholding: The 24% You Give Up Immediately
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When lottery organizations pay out prizes above <strong>$5,000</strong>, they are required by law to withhold <strong>24%</strong> for federal income tax before they cut you a check. This is called the <em>backup withholding rate</em> for lottery prizes &mdash; the same rate used for supplemental wages like bonuses.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is the catch: 24% is just a <em>down payment</em>, not your final tax bill. If your winnings are large enough to push your income into the 35% or 37% bracket, you will owe the difference when you file your return. The 24% withheld is a deposit toward a tax bill that is often much higher.
      </p>

      <div
        style={{
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontWeight: 600, color: '#92400e', marginBottom: '0.5rem', fontSize: '0.9375rem' }}>
          Important: The 24% withholding is not your final tax rate
        </p>
        <p style={{ color: '#78350f', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
          On large jackpots, your effective federal tax rate will be much higher &mdash; often 37% on most of the winnings. Plan to owe more money when you file your tax return, and set aside that additional amount immediately.
        </p>
      </div>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Lump Sum vs Annuity: Two Very Different Tax Outcomes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For large jackpots like Powerball or Mega Millions, you choose between two payout structures. This choice dramatically affects your taxes:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Option</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Cash Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Timing</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Typical Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Lump Sum (Cash Option)</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>~60% of advertised jackpot, paid once</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>All taxed in the same year you win</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#dc2626', fontFamily: "'JetBrains Mono', monospace" }}>37% marginal rate on most of it</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annuity</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>100% of advertised jackpot, paid over 29–30 years</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Each annual payment taxed in the year received</td>
              <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#059669', fontFamily: "'JetBrains Mono', monospace" }}>Varies; smaller payments hit lower brackets</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most winners choose the lump sum despite keeping fewer dollars total, because they want access to the money now. But from a <em>pure tax standpoint</em>, the annuity can be far more efficient. Spread a $1 million jackpot over 30 years and each payment is only about $33,333 &mdash; comfortably in the 22% bracket rather than the 37% bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The tradeoff: the annuity assumes you will live for 30 years, that tax rates will not rise dramatically, and that you trust the lottery organization to keep paying. For most people, a financial advisor can help model which option nets more money in your specific situation.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Taxes on Lottery Winnings
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of federal taxes, most states tax lottery winnings at their standard income tax rate. Where you live when you claim the ticket &mdash; not where you bought it &mdash; generally determines which state gets a cut.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is a breakdown of state lottery tax treatment for some of the most populated states in 2026:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Texas', '0%', 'No state income tax — see our Texas calculator', '/texas', '#059669'],
              ['Florida', '0%', 'No state income tax — see our Florida calculator', '/florida', '#059669'],
              ['Nevada', '0%', 'No state income tax', null, '#059669'],
              ['Washington', '0%', 'No state income tax', null, '#059669'],
              ['Wyoming', '0%', 'No state income tax', null, '#059669'],
              ['Pennsylvania', '3.07%', 'Flat rate; withheld at time of payout', null, '#475569'],
              ['Illinois', '4.95%', 'Flat rate; no deductions allowed on lottery income', null, '#475569'],
              ['Georgia', '5.49%', 'Flat rate as of 2024 transition', null, '#475569'],
              ['New York', '10.9%', 'NYC residents pay an additional 3.876% city tax', '/new-york', '#dc2626'],
              ['California', '13.3%', 'Highest rate in US; CA state lottery winnings are exempt but Powerball/Mega Millions are taxed', '/california', '#dc2626'],
              ['New Jersey', '10.75%', 'Top rate; applies to prizes over $500K', null, '#dc2626'],
            ].map(([state, rate, note, href, rateColor], i) => (
              <tr key={state as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 600 }}>
                  {href ? (
                    <a href={href as string} style={{ color: '#2563eb', textDecoration: 'underline' }}>{state as string}</a>
                  ) : (
                    state as string
                  )}
                </td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: rateColor as string, fontWeight: 600 }}>{rate as string}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{note as string}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A few states &mdash; California, Delaware, Florida, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming &mdash; either have no income tax at all or specifically exempt lottery winnings. Winning in one of these states can save you tens of thousands of dollars compared to winning in New York or California.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-lottery-tax-rates/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Lottery Tax Rates)
        </a>
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $1 Million Jackpot, Two States
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s run the full math on a $1 million advertised jackpot (lump sum, single filer, no other income that year).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Step 1 &mdash; Take the cash option:</strong> The lump sum value is typically about 60% of the advertised jackpot.
      </p>

      <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#475569', marginBottom: '1.5rem', fontFamily: "'JetBrains Mono', monospace", background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        $1,000,000 &times; 60% = $600,000 cash value
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Step 2 &mdash; Federal income tax calculation:</strong> You subtract the standard deduction ($15,000 for a single filer in 2026) before applying the brackets.
      </p>

      <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#475569', marginBottom: '1rem', fontFamily: "'JetBrains Mono', monospace", background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        $600,000 &minus; $15,000 = $585,000 taxable income
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
              <th style={{ padding: '0.625rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Bracket</th>
              <th style={{ padding: '0.625rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income in Bracket</th>
              <th style={{ padding: '0.625rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925', '$1,193'],
              ['12%', '$11,926 – $48,475', '$4,386'],
              ['22%', '$48,476 – $103,350', '$12,073'],
              ['24%', '$103,351 – $197,300', '$22,548'],
              ['32%', '$197,301 – $250,525', '$17,032'],
              ['35%', '$250,526 – $585,000', '$117,066'],
            ].map(([rate, range, tax], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#2563eb', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{range}</td>
                <td style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{tax}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef2f2' }}>
              <td colSpan={2} style={{ padding: '0.625rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Federal Income Tax</td>
              <td style={{ padding: '0.625rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$174,298</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Step 3 &mdash; What you already paid vs. what you still owe:</strong>
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Lottery organization withheld: $600,000 &times; 24% = <strong>$144,000</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Actual federal tax owed: <strong>$174,298</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Additional tax due when you file: <strong>$30,298</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 24% withholding only covered part of the bill. You will owe an additional ~$30,000 when you file your federal return. This surprises many winners who spent the withheld amount thinking their taxes were done.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Step 4 &mdash; The state tax difference is enormous:</strong>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>New York City</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Lump Sum Cash Value', '$600,000', '$600,000', false],
              ['Federal Income Tax', '−$174,298', '−$174,298', true],
              ['State Income Tax', '$0', '−$65,400 (10.9%)', true],
              ['NYC Local Tax', '$0', '−$23,256 (3.876%)', true],
              ['Take-Home Pay', '$425,702', '$337,046', false],
            ].map(([label, tx, nyc, isDed], i) => {
              const isTotal = label === 'Take-Home Pay'
              return (
                <tr key={label as string} style={{ background: isTotal ? '#ecfdf5' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: isTotal ? 700 : 400 }}>{label as string}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isTotal ? '#059669' : isDed ? '#dc2626' : '#1e293b', fontWeight: isTotal ? 700 : 400 }}>{tx as string}</td>
                  <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isTotal ? '#059669' : isDed ? '#dc2626' : '#1e293b', fontWeight: isTotal ? 700 : 400 }}>{nyc as string}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The difference is <strong>$88,656</strong> &mdash; nearly $89,000 in extra taxes just from living in New York City rather than Texas. That is real money, and it is entirely determined by where you claim your ticket and where you live.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What About Smaller Wins?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Not every lottery win is a $600,000 lump sum. Smaller prizes work differently:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Under $600:</strong> No federal reporting required by the lottery organization. You still technically owe taxes on this money, but there is no automatic withholding. You report it on your tax return.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>$600 &ndash; $5,000:</strong> The lottery organization files a Form W-2G reporting your win to the IRS. No mandatory withholding, but you will owe taxes at your normal rate when you file.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Over $5,000:</strong> Federal withholding of <strong>24%</strong> is mandatory. The lottery pays you the net amount and reports the full prize to the IRS.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Over $600 in gambling winnings:</strong> The payer files a W-2G; winnings are taxable income. You can deduct gambling losses, but only up to the amount of your gambling winnings, and only if you itemize deductions.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS requires you to report <em>all</em> gambling and lottery winnings on your tax return, even if you never received a W-2G form. Failing to report small wins is technically tax evasion, even if the risk of audit is low.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-2g" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; About Form W-2G)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Multi-State Jackpots: Which State Taxes You?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Powerball and Mega Millions are sold in most states, and winners sometimes think they can buy a ticket in a no-tax state to avoid taxes. This usually does not work the way you might hope.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your <strong>state of residence</strong> is what matters for income tax, not where you bought the ticket. If you live in California and buy a Powerball ticket on a trip to Nevada, California will still tax your winnings when you file your California state return. You are taxed where you <em>live</em>, not where you <em>won</em>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The one exception: if you buy a ticket in a state that withholds state income tax at the time of payout (like New York), that state may withhold taxes even if you are not a resident. You would then need to file a nonresident return in that state and get a credit in your home state to avoid being taxed twice &mdash; but the process varies by state.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Reduce the Tax Hit
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is no way to completely avoid taxes on lottery winnings, but there are strategies that can meaningfully reduce the bill:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Choose the annuity:</strong> Spreading payments over 30 years keeps each annual payment in lower tax brackets. You lose access to the lump sum today but potentially keep more money overall, especially if tax rates stay the same.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Max out deductible contributions immediately:</strong> In the year you win, you can contribute up to $23,500 to a 401(k), $7,000 to an IRA, and the full annual limit to an HSA. These reduce your taxable income and cut into the 35% or 37% bracket.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Make charitable contributions:</strong> Cash donations to qualifying charities are deductible if you itemize. Donating a meaningful portion to a donor-advised fund in the winning year lets you take a large deduction now and distribute the funds to charities over time.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Claim in a trust:</strong> Some large jackpot winners claim through a trust or LLC for privacy and estate planning reasons. This does not eliminate taxes but can help with long-term tax planning across multiple heirs. You need an attorney and financial advisor for this.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Deduct gambling losses:</strong> If you have been buying lottery tickets consistently, you can deduct those losses against your winnings &mdash; but only if you itemize deductions and only up to your winning amount. Keep records.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before claiming any large prize, consult a tax attorney or CPA. The cost of professional advice is trivial compared to the tax savings available with proper planning.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Lottery winnings are fully taxable as ordinary income, and a $1 million jackpot can easily leave you with less than half after federal and state taxes. Here is the short version:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Federal withholding is <strong>24%</strong> immediately, but your true rate on large wins is likely <strong>35% or 37%</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>You will almost certainly <strong>owe additional taxes</strong> when you file your return</li>
        <li style={{ marginBottom: '0.5rem' }}>The lump sum cash value is only about <strong>60%</strong> of the advertised jackpot</li>
        <li style={{ marginBottom: '0.5rem' }}>State taxes range from <strong>0% to 13.3%</strong> depending on where you live</li>
        <li style={{ marginBottom: '0.5rem' }}>Living in a state like <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> or <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a> versus New York can mean nearly $89,000 more in your pocket on a $1 million win</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Winning is great. Just make sure you understand your tax bill before you spend the money &mdash; and consult a tax professional before you cash the ticket for any prize worth more than $10,000.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See How Your State Affects Your Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          State taxes make a massive difference on large windfalls. Use our free paycheck calculator to see how much you actually keep in your state.
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
          <a href="https://www.irs.gov/taxtopics/tc419" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 419: Gambling Income and Losses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-2g" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-2G: Certain Gambling Winnings</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-lottery-tax-rates/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Lottery Tax Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Individual Income Tax Rates, 2026</a>
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
