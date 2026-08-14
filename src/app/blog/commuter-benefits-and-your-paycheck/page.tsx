import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commuter Benefits: How Transit and Parking Deductions Save You Money (2026)',
  description:
    'Commuter benefits let you pay for transit passes and parking with pre-tax dollars — cutting your tax bill by $1,000+ per year. Here\'s how the 2026 limits work, with a full worked example.',
  alternates: { canonical: '/blog/commuter-benefits-and-your-paycheck' },
  keywords:
    'commuter benefits 2026, transit benefit pre-tax, qualified transportation fringe benefit, pre-tax parking, Section 132 commuter benefit, transit pass tax savings 2026, commuter benefit limit 2026',
  openGraph: {
    title: 'Commuter Benefits: How Transit and Parking Deductions Save You Money (2026)',
    description:
      'Commuter benefits let you pay for transit passes and parking with pre-tax dollars — cutting your tax bill by $1,000+ per year.',
  },
}

export default function CommuterBenefitsPage() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Commuter benefits illustration showing transit and parking pre-tax limits"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Bus body */}
          <rect x="38" y="68" width="130" height="72" rx="8" fill="rgba(255,255,255,0.2)" />
          {/* Bus windows */}
          <rect x="52" y="80" width="24" height="20" rx="3" fill="rgba(255,255,255,0.45)" />
          <rect x="84" y="80" width="24" height="20" rx="3" fill="rgba(255,255,255,0.45)" />
          <rect x="116" y="80" width="24" height="20" rx="3" fill="rgba(255,255,255,0.45)" />
          {/* Bus wheels */}
          <circle cx="70" cy="145" r="9" fill="rgba(0,0,0,0.25)" />
          <circle cx="70" cy="145" r="5" fill="rgba(255,255,255,0.3)" />
          <circle cx="136" cy="145" r="9" fill="rgba(0,0,0,0.25)" />
          <circle cx="136" cy="145" r="5" fill="rgba(255,255,255,0.3)" />
          {/* Bus front grill */}
          <rect x="38" y="110" width="130" height="4" fill="rgba(255,255,255,0.15)" />
          {/* Label */}
          <text x="103" y="58" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">COMMUTER</text>
          {/* Arrow */}
          <line x1="185" y1="100" x2="232" y2="100" stroke="rgba(255,255,255,0.65)" strokeWidth="3" />
          <polygon points="232,92 248,100 232,108" fill="rgba(255,255,255,0.65)" />
          {/* PRE-TAX label */}
          <text x="382" y="42" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">Pre-Tax Benefit — 2026</text>
          {/* Transit box */}
          <rect x="258" y="55" width="118" height="88" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="317" y="79" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Transit &amp;</text>
          <text x="317" y="95" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Vanpool</text>
          <text x="317" y="128" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">$330</text>
          <text x="317" y="144" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">per month</text>
          {/* Parking box */}
          <rect x="390" y="55" width="118" height="88" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="449" y="87" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Qualified</text>
          <text x="449" y="103" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Parking</text>
          <text x="449" y="128" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">$330</text>
          <text x="449" y="144" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">per month</text>
          {/* Bottom note */}
          <text x="382" y="170" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Reduces federal, state &amp; FICA taxes</text>
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
        Commuter Benefits: How Transit and Parking Deductions Save You Money (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 14, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you take the subway, bus, train, or commuter rail to work &mdash; or pay to park near your office &mdash; the IRS lets you cover those costs with <strong>pre-tax dollars</strong>. This is called a <strong>qualified transportation fringe benefit</strong>, and it reduces your federal income tax, state income tax, <em>and</em> FICA taxes on every dollar you set aside.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For someone spending $300 a month commuting, this benefit can translate to <strong>$1,200 or more in annual tax savings</strong> &mdash; with no complicated tax filing required. Here is exactly how commuter benefits work in 2026, the contribution limits, and a full worked example.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Commuter Benefits?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Commuter benefits are employer-sponsored programs that let you set aside part of your paycheck <strong>before taxes</strong> to pay for work-related transportation. They are authorized under <strong>Section 132(f) of the Internal Revenue Code</strong>, which is why you will sometimes see them called &ldquo;Section 132 benefits&rdquo; or &ldquo;qualified transportation fringe benefits.&rdquo;{' '}
        <a href="https://www.irs.gov/publications/p15b#en_US_2026_publink1000193740" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15-B)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        There are three main types of qualified transportation benefits:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Transit passes</strong> &mdash; subway, bus, light rail, commuter rail, ferry, and vanpooling with 6+ passengers</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Qualified parking</strong> &mdash; parking at or near your workplace, or at a transit hub (park-and-ride lot)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Bicycle commuting reimbursement</strong> &mdash; employer payments for bike maintenance and improvements (currently taxable income; see the bicycle section below)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Transit and parking benefits are the two most valuable types. They can be used simultaneously and their limits are independent &mdash; meaning you can claim up to the full monthly limit on <em>each</em> category at the same time.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 2026 Contribution Limits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For 2026, the IRS allows employees to exclude from their taxable income:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Benefit Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Monthly Limit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Maximum</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Transit passes &amp; vanpool', '$330', '$3,960'],
              ['Qualified parking', '$330', '$3,960'],
              ['Combined maximum', '$660', '$7,920'],
            ].map(([type, monthly, annual], i) => (
              <tr key={type} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td
                  style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}
                  dangerouslySetInnerHTML={{ __html: type }}
                />
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{monthly}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These limits are adjusted annually for inflation. In 2025, both limits were $325/month. The IRS publishes updated amounts each fall in a Revenue Procedure. Note that the transit limit and parking limit are <strong>completely separate</strong> &mdash; a commuter who parks at a train station and rides the train can claim up to $330/month for parking AND $330/month for the transit pass.{' '}
        <a href="https://www.irs.gov/taxtopics/tc421" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 421 &mdash; Scholarships, Fellowship Grants, and Other Grants)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Pre-Tax Commuter Benefits Work
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When your employer offers commuter benefits, the process works like this each paycheck:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>You elect a monthly contribution amount (up to the IRS limit)</li>
        <li style={{ marginBottom: '0.5rem' }}>That amount is deducted from your gross pay <em>before</em> federal income tax, FICA, and most state taxes are calculated</li>
        <li style={{ marginBottom: '0.5rem' }}>The funds load onto a prepaid commuter card, voucher, or transit pass program administered by your employer or a benefits vendor</li>
        <li style={{ marginBottom: '0.5rem' }}>You swipe or scan the card when boarding the subway, tapping the bus, or paying the parking garage</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The critical advantage is that the deduction happens <strong>before FICA taxes</strong>, not just before income tax. This is what makes commuter benefits so powerful compared to a simple deduction. A traditional 401(k) contribution reduces your income tax, but it does <em>not</em> reduce Social Security or Medicare taxes. Commuter benefits reduce all three.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That means every dollar you put through a commuter benefit account is effectively taxed at your combined marginal rate, which for most workers is <strong>30&ndash;38%</strong>:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Federal income tax: 12% or 22% for most workers</li>
        <li style={{ marginBottom: '0.5rem' }}>Social Security: 6.2%</li>
        <li style={{ marginBottom: '0.5rem' }}>Medicare: 1.45%</li>
        <li style={{ marginBottom: '0.5rem' }}>State income tax: 0&ndash;9.9% depending on your state</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In states like California or New York, the combined tax savings on each commuter dollar can reach <strong>40% or higher</strong>.
      </p>

      {/* Section 4 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: How Much You Actually Save
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s use a realistic example. Sarah earns $72,000 per year in New York City. She commutes by subway ($132/month MetroCard) and also pays $160/month to park at a commuter lot near her office for evening pickups. Without commuter benefits, she is paying $292/month in commuting costs from after-tax income. With commuter benefits, she enrolls the full $292/month pre-tax.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Sarah&rsquo;s Combined Tax Rates (approximate)
      </h3>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Savings on $292/mo</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal income tax (22% bracket)', '22%', '$64.24'],
              ['Social Security', '6.2%', '$18.10'],
              ['Medicare', '1.45%', '$4.23'],
              ['New York State income tax (~6%)', '6%', '$17.52'],
              ['New York City income tax (~3.5%)', '3.5%', '$10.22'],
            ].map(([tax, rate, savings], i) => (
              <tr key={tax} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{savings}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total monthly tax savings</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$114.31</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Sarah saves approximately <strong>$114 per month</strong>, or <strong>$1,372 per year</strong>, simply by running her commuting costs through a pre-tax account. Her actual cost of commuting drops from $292/month to about $178/month. She gets the same commute &mdash; she just keeps more of her paycheck.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In a lower-tax state like Texas (no state income tax), the savings would be somewhat smaller &mdash; roughly $85/month or $1,020/year &mdash; but still substantial.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Transit Benefits vs. Parking Benefits: Key Differences
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Both transit and parking benefits share the same $330/month limit, but they cover different things and work slightly differently in practice.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        What Transit Benefits Cover
      </h3>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Subway, bus, light rail, and commuter rail passes</li>
        <li style={{ marginBottom: '0.5rem' }}>Ferry passes</li>
        <li style={{ marginBottom: '0.5rem' }}>Vanpool arrangements with 6 or more passengers (you can be the driver)</li>
        <li style={{ marginBottom: '0.5rem' }}>Monthly or weekly transit cards loaded with pre-tax funds</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Rideshare services like Uber and Lyft do <em>not</em> qualify as transit benefits unless they operate as a qualified commuter highway vehicle (vanpool). Standard solo rideshares are not covered.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        What Parking Benefits Cover
      </h3>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Parking at or near your employer&rsquo;s principal place of business</li>
        <li style={{ marginBottom: '0.5rem' }}>Parking at a transit hub from which you then commute by bus, train, or carpool (park-and-ride)</li>
        <li style={{ marginBottom: '0.5rem' }}>Monthly parking garage contracts</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Parking at your home or in a residential garage does <strong>not</strong> qualify. Street meter parking typically does not qualify. And if you work remotely, there is no qualifying &ldquo;place of business&rdquo; to park near.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Commuter Benefits vs. Other Pre-Tax Accounts
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Commuter benefits share some features with HSAs and FSAs, but there are important differences:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Commuter Benefit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Health FSA</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>HSA</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Reduces income tax?', 'Yes', 'Yes', 'Yes'],
              ['Reduces FICA?', 'Yes', 'Yes', 'Yes'],
              ['Use-it-or-lose-it?', 'Varies*', 'Yes (mostly)', 'No'],
              ['Election locked in?', 'Monthly changes OK', 'Annual', 'Anytime'],
              ['2026 limit', '$330/mo each', '$3,300/yr', '$4,300/yr single'],
              ['Requires HDHP?', 'No', 'No', 'Yes'],
            ].map(([label, commuter, fsa, hsa], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{commuter}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{fsa}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{hsa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        *Transit benefit rollovers vary by plan administrator. Most allow unused monthly balances to carry forward, but check your specific plan. Parking benefits are generally use-it-or-lose-it within the plan year or upon leaving employment.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One advantage commuter benefits have over health FSAs is the ability to <strong>adjust your contribution monthly</strong>. If your commute changes in March, you can lower your election for April rather than being stuck at an annual amount.{' '}
        <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15-B &mdash; Employer&rsquo;s Tax Guide to Fringe Benefits)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Enroll in Commuter Benefits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most mid-to-large employers offer commuter benefits through their HR platform or a dedicated benefits administrator such as WageWorks (now HealthEquity), Commuter Check, or Edenred. Here is the typical enrollment process:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Log in to your employer&rsquo;s benefits portal or contact HR</li>
        <li style={{ marginBottom: '0.5rem' }}>Select your monthly election amounts for transit and/or parking (up to $330 each)</li>
        <li style={{ marginBottom: '0.5rem' }}>Receive a prepaid debit card or vouchers linked to your benefit account</li>
        <li style={{ marginBottom: '0.5rem' }}>Use the card directly at subway fare machines, bus fare apps, or parking garages</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike health FSA enrollments, commuter benefit elections typically do <em>not</em> require open enrollment &mdash; you can start or adjust your contribution most months throughout the year, with changes taking effect the following month.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        If Your Employer Doesn&rsquo;t Offer Commuter Benefits
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Several jurisdictions <strong>require</strong> employers to offer commuter benefit programs for workers who are not covered by a qualified plan:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>New York City (20+ employees)</li>
        <li style={{ marginBottom: '0.5rem' }}>San Francisco (50+ employees)</li>
        <li style={{ marginBottom: '0.5rem' }}>Washington, D.C. (20+ employees)</li>
        <li style={{ marginBottom: '0.5rem' }}>Various New Jersey localities</li>
        <li style={{ marginBottom: '0.5rem' }}>Chicago (50+ employees)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer is subject to these rules and hasn&rsquo;t offered you the benefit, ask your HR department. The IRS also allows employees to use these benefits even if the employer does not sponsor a formal plan &mdash; but the mechanics become more complex.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Remote and Hybrid Workers: Do You Qualify?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work <strong>fully remote</strong> with no commute at all, you do not qualify for commuter benefits &mdash; because there is no qualifying employer location to commute to.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work a <strong>hybrid schedule</strong> (some days in the office, some days remote), you <em>do</em> qualify for commuter benefits on the days you commute. Many employers allow hybrid workers to enroll in commuter benefits and set a lower monthly election reflecting their partial in-office schedule. For example, if you commute 3 days per week instead of 5, you might elect roughly 60% of the monthly limit.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Check with your employer or plan administrator about how they handle hybrid arrangements. The IRS requires that benefits be used for commuting to a work location, so you should not run non-commuting months through the plan.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Bicycle Commuter Benefit
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The bicycle commuter provision has had a complicated history. Originally, it allowed employers to give employees up to $20/month tax-free for qualified bicycle commuting expenses (bike purchases, maintenance, and improvements). The Tax Cuts and Jobs Act of 2017 suspended this exclusion through 2025, making such reimbursements taxable.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For 2026, bike commuter benefits are taxable income to the employee unless Congress has reinstated the exclusion. Check the current version of{' '}
        <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 15-B
        </a>{' '}
        for the latest status. In any case, bicycle commuting is not covered by the pre-tax transit or parking provisions.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Commuter Benefits vs. Mileage Reimbursement
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These two benefits are often confused but cover completely different situations:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Commuter benefits</strong> cover your <em>commute</em> (home to your regular workplace). Commuting is a personal expense under the tax code &mdash; it cannot be deducted on your return. The commuter benefit program is the one way to get tax-free treatment for this personal cost.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Mileage reimbursement</strong> covers <em>business driving</em> while on the job &mdash; visiting a client, driving between work sites, picking up supplies. The IRS standard mileage rate for 2026 is{' '}
          <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            published annually
          </a>
          {' '}and reimbursements up to that rate are tax-free. This has nothing to do with your daily commute.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you drive your personal vehicle to work and then use it for business errands, only the business driving (not the commute portion) qualifies for mileage reimbursement.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens When You Leave Your Job
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike an HSA, commuter benefit account balances typically cannot be cashed out when you leave a job. Transit balance rules vary by plan &mdash; some plans allow you to spend the remaining balance within a short window after termination (often 90 days), while others forfeit any unused funds.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Parking balances may be forfeited immediately upon termination. This is one reason to set your monthly election conservatively &mdash; close to what you actually spend &mdash; rather than maxing out the limit if you don&rsquo;t need it. Check your plan&rsquo;s Summary Plan Description (SPD) for the specific rules.
      </p>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Self-Employed Workers: No Commuter Benefits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are self-employed &mdash; a freelancer, sole proprietor, or independent contractor &mdash; you cannot use the qualified transportation fringe benefit exclusion for yourself. The IRS specifically limits this benefit to <em>employees</em>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, if you own a business and hire W-2 employees, you can offer them commuter benefits &mdash; and the cost is deductible as a business expense for you as the employer.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/transportation-expenses" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Transportation Expenses)
        </a>
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Commuter benefits are one of the most underutilized tax savings tools available to employees. The 2026 limits &mdash; $330/month for transit and $330/month for parking &mdash; can shelter up to $7,920 per year in commuting costs from federal income tax, state income tax, Social Security, and Medicare. That is a far broader tax reduction than a standard 401(k) deduction, which does not reduce FICA taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For the average urban commuter spending $200&ndash;$400/month on transit and parking, the annual tax savings range from <strong>$800 to more than $1,600</strong> &mdash; simply by directing existing spending through a pre-tax account instead of paying out of pocket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer offers commuter benefits, enroll. If you are not sure, ask HR &mdash; it is a completely free benefit that costs your employer almost nothing to administer.
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
          See How Commuter Benefits Affect Your Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see exactly how much you take home &mdash; and how pre-tax deductions like commuter benefits reduce your federal, state, and FICA taxes.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#0891b2',
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
          <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15-B &mdash; Employer&rsquo;s Tax Guide to Fringe Benefits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc511" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 511 &mdash; Business Travel Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/transportation-expenses" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Transportation Expenses (Business)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Standard Mileage Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base (FICA wage base)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/qualified-transportation-benefits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL &mdash; FAQs on Qualified Transportation Benefits</a>
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
