import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Highest and Lowest State Income Tax Rates in 2026',
  description:
    'Every state income tax rate ranked from highest to lowest for 2026. See which states have flat taxes, progressive brackets, and no income tax at all.',
  alternates: { canonical: '/blog/state-income-tax-rates-ranked' },
  keywords:
    'state income tax rates 2026, highest state tax rates, lowest state tax rates, state tax comparison, flat tax states, progressive tax states',
  openGraph: {
    title: 'Highest and Lowest State Income Tax Rates in 2026',
    description:
      'From California\'s 13.3% to states with 0%, here\'s every state income tax rate ranked for 2026.',
  },
}

const allStates = [
  { state: 'California', rate: '13.30%', type: 'Progressive', link: '/california' },
  { state: 'Hawaii', rate: '11.00%', type: 'Progressive', link: '/hawaii' },
  { state: 'New Jersey', rate: '10.75%', type: 'Progressive', link: '/new-jersey' },
  { state: 'Oregon', rate: '9.90%', type: 'Progressive', link: '/oregon' },
  { state: 'Minnesota', rate: '9.85%', type: 'Progressive', link: '/minnesota' },
  { state: 'New York', rate: '9.65%', type: 'Progressive', link: '/new-york' },
  { state: 'Vermont', rate: '8.75%', type: 'Progressive', link: '/vermont' },
  { state: 'District of Columbia', rate: '10.75%', type: 'Progressive', link: null },
  { state: 'Wisconsin', rate: '7.65%', type: 'Progressive', link: '/wisconsin' },
  { state: 'Iowa', rate: '5.70%', type: 'Progressive', link: '/iowa' },
  { state: 'Maine', rate: '7.15%', type: 'Progressive', link: '/maine' },
  { state: 'South Carolina', rate: '6.40%', type: 'Progressive', link: '/south-carolina' },
  { state: 'Connecticut', rate: '6.99%', type: 'Progressive', link: '/connecticut' },
  { state: 'Idaho', rate: '5.80%', type: 'Flat', link: '/idaho' },
  { state: 'Montana', rate: '5.90%', type: 'Progressive', link: '/montana' },
  { state: 'Nebraska', rate: '5.84%', type: 'Progressive', link: '/nebraska' },
  { state: 'Delaware', rate: '6.60%', type: 'Progressive', link: '/delaware' },
  { state: 'West Virginia', rate: '5.12%', type: 'Progressive', link: '/west-virginia' },
  { state: 'Arkansas', rate: '3.90%', type: 'Progressive', link: '/arkansas' },
  { state: 'Maryland', rate: '5.75%', type: 'Progressive', link: '/maryland' },
  { state: 'Rhode Island', rate: '5.99%', type: 'Progressive', link: '/rhode-island' },
  { state: 'Kansas', rate: '5.70%', type: 'Progressive', link: '/kansas' },
  { state: 'Louisiana', rate: '4.25%', type: 'Progressive', link: '/louisiana' },
  { state: 'Virginia', rate: '5.75%', type: 'Progressive', link: '/virginia' },
  { state: 'New Mexico', rate: '5.90%', type: 'Progressive', link: '/new-mexico' },
  { state: 'Missouri', rate: '4.80%', type: 'Progressive', link: '/missouri' },
  { state: 'Georgia', rate: '5.39%', type: 'Progressive', link: '/georgia' },
  { state: 'Alabama', rate: '5.00%', type: 'Progressive', link: '/alabama' },
  { state: 'Mississippi', rate: '5.00%', type: 'Progressive', link: '/mississippi' },
  { state: 'Oklahoma', rate: '4.75%', type: 'Progressive', link: '/oklahoma' },
  { state: 'Massachusetts', rate: '5.00%', type: 'Flat', link: '/massachusetts' },
  { state: 'Colorado', rate: '4.40%', type: 'Flat', link: '/colorado' },
  { state: 'Illinois', rate: '4.95%', type: 'Flat', link: '/illinois' },
  { state: 'Utah', rate: '4.65%', type: 'Flat', link: '/utah' },
  { state: 'Michigan', rate: '4.25%', type: 'Flat', link: '/michigan' },
  { state: 'Kentucky', rate: '4.00%', type: 'Flat', link: '/kentucky' },
  { state: 'Ohio', rate: '3.50%', type: 'Progressive', link: '/ohio' },
  { state: 'Indiana', rate: '3.05%', type: 'Flat', link: '/indiana' },
  { state: 'Pennsylvania', rate: '3.07%', type: 'Flat', link: '/pennsylvania' },
  { state: 'North Dakota', rate: '1.95%', type: 'Progressive', link: '/north-dakota' },
  { state: 'Arizona', rate: '2.50%', type: 'Flat', link: '/arizona' },
  { state: 'North Carolina', rate: '4.50%', type: 'Flat', link: '/north-carolina' },
  { state: 'Alaska', rate: 'None', type: 'None', link: '/alaska' },
  { state: 'Florida', rate: 'None', type: 'None', link: '/florida' },
  { state: 'Nevada', rate: 'None', type: 'None', link: '/nevada' },
  { state: 'New Hampshire', rate: 'None', type: 'None', link: '/new-hampshire' },
  { state: 'South Dakota', rate: 'None', type: 'None', link: '/south-dakota' },
  { state: 'Tennessee', rate: 'None', type: 'None', link: '/tennessee' },
  { state: 'Texas', rate: 'None', type: 'None', link: '/texas' },
  { state: 'Washington', rate: 'None', type: 'None', link: '/washington' },
  { state: 'Wyoming', rate: 'None', type: 'None', link: '/wyoming' },
]

export default function StateIncomeTaxRatesRankedPost() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          width="100%"
          height="auto"
          style={{ borderRadius: '12px', display: 'block' }}
          role="img"
          aria-label="Bar chart showing state income tax rates from highest to lowest"
        >
          <defs>
            <linearGradient id="taxRatesBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef2f2" />
              <stop offset="100%" stopColor="#fee2e2" />
            </linearGradient>
            <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="barGradLow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
          </defs>
          <rect width="600" height="200" rx="12" fill="url(#taxRatesBg)" />

          {/* Title */}
          <text x="300" y="30" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="700">
            State Income Tax Rates: Highest to Lowest
          </text>

          {/* Bar chart - top rates */}
          {[
            { label: 'CA', h: 110, x: 50 },
            { label: 'HI', h: 91, x: 90 },
            { label: 'NJ', h: 89, x: 130 },
            { label: 'OR', h: 82, x: 170 },
            { label: 'MN', h: 81, x: 210 },
            { label: 'NY', h: 80, x: 250 },
          ].map((bar) => (
            <g key={bar.label}>
              <rect
                x={bar.x}
                y={175 - bar.h}
                width="28"
                height={bar.h}
                rx="3"
                fill="url(#barGrad)"
              />
              <text
                x={bar.x + 14}
                y={190}
                textAnchor="middle"
                fill="#991b1b"
                fontSize="9"
                fontWeight="600"
                fontFamily="'JetBrains Mono', monospace"
              >
                {bar.label}
              </text>
            </g>
          ))}

          {/* Divider dots */}
          <text x="310" y="155" fill="#94a3b8" fontSize="18">...</text>

          {/* Low rate bars */}
          {[
            { label: 'PA', h: 25, x: 360 },
            { label: 'IN', h: 25, x: 400 },
            { label: 'AZ', h: 21, x: 440 },
            { label: 'ND', h: 16, x: 480 },
          ].map((bar) => (
            <g key={bar.label}>
              <rect
                x={bar.x}
                y={175 - bar.h}
                width="28"
                height={bar.h}
                rx="3"
                fill="url(#barGradLow)"
              />
              <text
                x={bar.x + 14}
                y={190}
                textAnchor="middle"
                fill="#065f46"
                fontSize="9"
                fontWeight="600"
                fontFamily="'JetBrains Mono', monospace"
              >
                {bar.label}
              </text>
            </g>
          ))}

          {/* Zero line */}
          <line x1="530" y1="175" x2="568" y2="175" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
          <text x="549" y="168" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="700">0%</text>
          <text x="549" y="190" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600">9 states</text>

          {/* Rate labels on tall bars */}
          <text x="64" y={175 - 110 - 5} textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="700" fontFamily="'JetBrains Mono', monospace">13.3%</text>
          <text x="494" y={175 - 16 - 5} textAnchor="middle" fill="#059669" fontSize="9" fontWeight="700" fontFamily="'JetBrains Mono', monospace">1.95%</text>
        </svg>
      </div>

      {/* Publication info */}
      <div style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
        Published June 4, 2026 &middot; 7 min read
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#1e293b',
          marginBottom: '1rem',
        }}
      >
        Highest and Lowest State Income Tax Rates in 2026
      </h1>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        How much of your paycheck goes to state income tax depends entirely on where you live. Some states take
        over 13 cents of every dollar you earn at the top bracket. Others take nothing at all. And the difference
        can add up to thousands of dollars per year.
      </p>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        In this guide, we&rsquo;ll rank every state&rsquo;s income tax rate from highest to lowest, explain
        the difference between flat and progressive tax systems, and highlight which states recently changed
        their rates for 2026.
      </p>

      {/* Overview */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2rem',
          marginBottom: '0.75rem',
        }}
      >
        The Big Picture: Who Taxes Income and Who Doesn&rsquo;t
      </h2>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        As of 2026, <strong>41 states and Washington, D.C.</strong> levy a tax on personal income. The remaining{' '}
        <strong>9 states</strong> &mdash; Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas,
        Washington, and Wyoming &mdash; charge no income tax on wages. (For a deep dive into those nine, read
        our <a href="/blog/states-with-no-income-tax" style={{ color: '#2563eb' }}>guide to no-income-tax states</a>.)
      </p>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        Among the states that do tax income, rates range from as low as <strong>1.95%</strong> in North Dakota
        to as high as <strong>13.3%</strong> in California. But the &ldquo;top marginal rate&rdquo; only tells
        part of the story. Let&rsquo;s break it down.
      </p>

      {/* Top 10 highest */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '0.75rem',
        }}
      >
        Top 10 Highest State Income Tax Rates
      </h2>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
        These are the states with the highest <strong>top marginal rates</strong> &mdash; the rate applied to
        income in the highest bracket. Most workers won&rsquo;t pay this rate on all their income (more on that
        below), but high earners will feel the impact.
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
            <tr style={{ background: '#fef2f2' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Rank</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Top Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { rank: 1, state: 'California', rate: '13.30%', detail: '10 brackets; top rate kicks in above $1M. An extra 1% mental health surcharge applies to income over $1 million.', link: '/california' },
              { rank: 2, state: 'Hawaii', rate: '11.00%', detail: '12 brackets; the most brackets of any state. Top rate applies above $200,000 (single filer).', link: '/hawaii' },
              { rank: 3, state: 'New Jersey', rate: '10.75%', detail: '7 brackets; top rate applies above $1M. A "millionaire\'s tax" was made permanent in 2020.', link: '/new-jersey' },
              { rank: 4, state: 'Oregon', rate: '9.90%', detail: '4 brackets; top rate kicks in at just $125,000. No sales tax, so income tax carries a heavier load.', link: '/oregon' },
              { rank: 5, state: 'Minnesota', rate: '9.85%', detail: '4 brackets; top rate applies above $193,240 (single). Among the highest in the Midwest.', link: '/minnesota' },
              { rank: 6, state: 'New York', rate: '9.65%', detail: '9 brackets; top rate above $25M. NYC residents also pay city income tax up to 3.876%.', link: '/new-york' },
              { rank: 7, state: 'D.C.', rate: '10.75%', detail: '7 brackets; top rate above $1M. Not a state, but residents pay D.C. income tax.', link: null },
              { rank: 8, state: 'Vermont', rate: '8.75%', detail: '4 brackets; top rate above $229,500 (single filer).', link: '/vermont' },
              { rank: 9, state: 'Wisconsin', rate: '7.65%', detail: '4 brackets; top rate above $315,000 (single filer).', link: '/wisconsin' },
              { rank: 10, state: 'Maine', rate: '7.15%', detail: '3 brackets; top rate above $58,050 (single). Hits middle-income earners quickly.', link: '/maine' },
            ].map((row) => (
              <tr key={row.state} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '0.625rem 1rem', color: '#dc2626', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                  {row.rank}
                </td>
                <td style={{ padding: '0.625rem 1rem', fontWeight: 600, color: '#1e293b' }}>
                  {row.link ? (
                    <a href={row.link} style={{ color: '#2563eb', textDecoration: 'none' }}>{row.state}</a>
                  ) : row.state}
                </td>
                <td style={{ padding: '0.625rem 1rem', textAlign: 'right', fontWeight: 700, color: '#dc2626', fontFamily: "'JetBrains Mono', monospace" }}>
                  {row.rate}
                </td>
                <td style={{ padding: '0.625rem 1rem', color: '#475569', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  {row.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
        Source:{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
          Tax Foundation, State Individual Income Tax Rates and Brackets, 2026
        </a>
      </p>

      {/* Top 10 lowest */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '0.75rem',
        }}
      >
        Top 10 Lowest State Income Tax Rates (Excluding 0% States)
      </h2>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
        If you want to live in a state that <em>does</em> tax income but keeps rates low, these are your best
        options. All of these states charge less than 4% at the top bracket.
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
            <tr style={{ background: '#ecfdf5' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Rank</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Top Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              { rank: 1, state: 'North Dakota', rate: '1.95%', type: 'Progressive', note: 'Lowest rate of any income-tax state. Only 2 brackets.', link: '/north-dakota' },
              { rank: 2, state: 'Arizona', rate: '2.50%', type: 'Flat', note: 'Moved to a flat tax in 2023. Was previously progressive up to 4.5%.', link: '/arizona' },
              { rank: 3, state: 'Indiana', rate: '3.05%', type: 'Flat', note: 'Simple flat rate. Counties add an additional 0.5% to 2.9%.', link: '/indiana' },
              { rank: 4, state: 'Pennsylvania', rate: '3.07%', type: 'Flat', note: 'One of the oldest flat-tax states. No local earned income tax credit.', link: '/pennsylvania' },
              { rank: 5, state: 'Ohio', rate: '3.50%', type: 'Progressive', note: 'Recently eliminated taxes on income under $26,050.', link: '/ohio' },
              { rank: 6, state: 'Arkansas', rate: '3.90%', type: 'Progressive', note: 'Cut from 4.4% in 2025. Scheduled to drop further.', link: '/arkansas' },
              { rank: 7, state: 'Kentucky', rate: '4.00%', type: 'Flat', note: 'Switched from progressive to flat in 2023.', link: '/kentucky' },
              { rank: 8, state: 'Michigan', rate: '4.25%', type: 'Flat', note: 'Flat rate; some cities (like Detroit) add a local income tax.', link: '/michigan' },
              { rank: 9, state: 'Colorado', rate: '4.40%', type: 'Flat', note: 'Reduced from 4.55% in 2024. Among the lowest flat-tax states.', link: '/colorado' },
              { rank: 10, state: 'North Carolina', rate: '4.50%', type: 'Flat', note: 'Gradually decreasing; was 5.25% in 2022. Scheduled to drop further.', link: '/north-carolina' },
            ].map((row) => (
              <tr key={row.state} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '0.625rem 1rem', color: '#059669', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                  {row.rank}
                </td>
                <td style={{ padding: '0.625rem 1rem', fontWeight: 600, color: '#1e293b' }}>
                  <a href={row.link} style={{ color: '#2563eb', textDecoration: 'none' }}>{row.state}</a>
                </td>
                <td style={{ padding: '0.625rem 1rem', textAlign: 'right', fontWeight: 700, color: '#059669', fontFamily: "'JetBrains Mono', monospace" }}>
                  {row.rate}
                </td>
                <td style={{ padding: '0.625rem 1rem', color: '#475569' }}>{row.type}</td>
                <td style={{ padding: '0.625rem 1rem', color: '#475569', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Flat vs Progressive */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '0.75rem',
        }}
      >
        Flat Tax vs. Progressive Tax: What&rsquo;s the Difference?
      </h2>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        When you see a state&rsquo;s income tax rate, it&rsquo;s important to understand what kind of system
        that state uses. There are two main types:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2563eb', marginBottom: '0.5rem' }}>
            Flat Tax
          </h3>
          <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6 }}>
            Everyone pays the <strong>same percentage</strong>, no matter how much they earn. If the rate is 4%,
            someone earning $30,000 pays 4% and someone earning $300,000 also pays 4%. It&rsquo;s simple and
            predictable. Currently, <strong>13 states</strong> use a flat tax.
          </p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#dc2626', marginBottom: '0.5rem' }}>
            Progressive Tax
          </h3>
          <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6 }}>
            The tax rate <strong>increases as income goes up</strong>. Your income is divided into &ldquo;brackets,&rdquo;
            and each bracket is taxed at a higher rate. The &ldquo;top rate&rdquo; only applies to income{' '}
            <em>above</em> a certain threshold &mdash; not your entire paycheck. This is the same system the
            federal government uses. <strong>28 states and D.C.</strong> use progressive taxes.
          </p>
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        Here&rsquo;s why this matters: a state with a 9.9% top rate might actually tax a $75,000 salary at an
        effective rate of only 6% to 7%, because only the income in the highest bracket is taxed at 9.9%. Meanwhile,
        a flat-tax state at 4.95% taxes every dollar at that rate. Depending on your income level, the flat-tax
        state could actually take a larger <em>share</em> of your pay.
      </p>

      {/* Full ranked table */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '0.75rem',
        }}
      >
        All 50 States + D.C.: Income Tax Rates Ranked
      </h2>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>
        Here is the complete list of every state&rsquo;s top marginal income tax rate for 2026, sorted from
        highest to lowest. Click any state name to calculate your paycheck.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.875rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc', position: 'sticky', top: 0 }}>
              <th style={{ padding: '0.625rem 0.75rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>
                State
              </th>
              <th style={{ padding: '0.625rem 0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>
                Top Rate
              </th>
              <th style={{ padding: '0.625rem 0.75rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>
                Tax Type
              </th>
            </tr>
          </thead>
          <tbody>
            {allStates.map((row) => (
              <tr
                key={row.state}
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  background: row.type === 'None' ? '#f0fdf4' : 'transparent',
                }}
              >
                <td style={{ padding: '0.5rem 0.75rem', fontWeight: 500, color: '#1e293b' }}>
                  {row.link ? (
                    <a href={row.link} style={{ color: '#2563eb', textDecoration: 'none' }}>{row.state}</a>
                  ) : row.state}
                </td>
                <td
                  style={{
                    padding: '0.5rem 0.75rem',
                    textAlign: 'right',
                    fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: row.type === 'None' ? '#059669' : row.rate >= '7' ? '#dc2626' : '#475569',
                  }}
                >
                  {row.rate}
                </td>
                <td
                  style={{
                    padding: '0.5rem 0.75rem',
                    color: row.type === 'None' ? '#059669' : '#475569',
                    fontWeight: row.type === 'None' ? 600 : 400,
                  }}
                >
                  {row.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
        Sources:{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
          Tax Foundation
        </a>
        ,{' '}
        <a href="https://www.taxadmin.org/current-tax-rates" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
          Federation of Tax Administrators
        </a>
        . Rates as of January 2026.
      </p>

      {/* States that recently lowered rates */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '0.75rem',
        }}
      >
        States That Recently Lowered Their Income Tax Rates
      </h2>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        There&rsquo;s a clear trend across the country: states are cutting income tax rates. Some are moving
        to flat taxes, while others are simply trimming their existing brackets. Here are the most notable
        recent changes:
      </p>

      <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
        <li>
          <strong>Arizona</strong> &mdash; Collapsed its progressive system (up to 4.5%) into a single{' '}
          <strong>2.5% flat tax</strong> starting in 2023. One of the biggest cuts in recent history.{' '}
          <a href="/arizona" style={{ color: '#2563eb' }}>Calculate your Arizona paycheck</a>.
        </li>
        <li>
          <strong>North Carolina</strong> &mdash; Gradually lowering its flat rate from 5.25% (2022) toward a
          target of <strong>3.99% by 2027</strong>. Currently at 4.50% for 2026.{' '}
          <a href="/north-carolina" style={{ color: '#2563eb' }}>Calculate your North Carolina paycheck</a>.
        </li>
        <li>
          <strong>Iowa</strong> &mdash; Consolidated 9 brackets into 4, and the top rate dropped from 8.53% to{' '}
          <strong>5.70%</strong> for 2026, with a goal of reaching 3.9%.{' '}
          <a href="/iowa" style={{ color: '#2563eb' }}>Calculate your Iowa paycheck</a>.
        </li>
        <li>
          <strong>Arkansas</strong> &mdash; Cut its top rate from 4.4% to <strong>3.9%</strong> for 2026. The
          state has signaled it wants to eventually reach 0%.{' '}
          <a href="/arkansas" style={{ color: '#2563eb' }}>Calculate your Arkansas paycheck</a>.
        </li>
        <li>
          <strong>Kentucky</strong> &mdash; Moved from a progressive system to a{' '}
          <strong>4.0% flat tax</strong> in 2023, with a trigger mechanism to lower it further when revenue targets
          are met.{' '}
          <a href="/kentucky" style={{ color: '#2563eb' }}>Calculate your Kentucky paycheck</a>.
        </li>
        <li>
          <strong>Georgia</strong> &mdash; Transitioning from progressive brackets to a{' '}
          <strong>flat 5.39% rate</strong> for 2026, with future reductions planned.{' '}
          <a href="/georgia" style={{ color: '#2563eb' }}>Calculate your Georgia paycheck</a>.
        </li>
        <li>
          <strong>Colorado</strong> &mdash; Reduced its flat rate from 4.55% to <strong>4.40%</strong> starting
          in 2024 through a voter-approved ballot measure.{' '}
          <a href="/colorado" style={{ color: '#2563eb' }}>Calculate your Colorado paycheck</a>.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        According to the{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
          Tax Foundation
        </a>
        , more than 20 states have cut or reformed their income taxes since 2021. The competition among states
        to attract workers and businesses with lower tax rates shows no signs of slowing down.
      </p>

      {/* What this means for you */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2rem',
          marginBottom: '0.75rem',
        }}
      >
        What Does This Mean for Your Paycheck?
      </h2>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        Your state income tax rate directly affects your take-home pay. Here&rsquo;s a quick example to put
        the numbers in perspective:
      </p>

      <div
        style={{
          background: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: '10px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.25rem',
        }}
      >
        <p style={{ fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
          Example: $75,000 salary, single filer
        </p>
        <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: '1.25rem', margin: 0 }}>
          <li>
            <strong>California</strong> (progressive, effective rate ~5.2%): about{' '}
            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$3,900</span> in state tax
          </li>
          <li>
            <strong>Illinois</strong> (flat 4.95%): about{' '}
            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$3,713</span> in state tax
          </li>
          <li>
            <strong>Arizona</strong> (flat 2.5%): about{' '}
            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$1,875</span> in state tax
          </li>
          <li>
            <strong>Texas</strong> (no income tax): about{' '}
            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$0</span> in state tax
          </li>
        </ul>
      </div>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        That&rsquo;s a difference of nearly $4,000 per year between the highest-tax and zero-tax states. Over a
        10-year career, that adds up to $40,000 &mdash; enough for a down payment on a house in many parts of the
        country.
      </p>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        But remember: income tax is just one piece of the puzzle. States with no income tax often make up the
        difference with higher sales taxes, property taxes, or fees. Always look at the full picture before
        deciding where to live or work. Our{' '}
        <a href="/blog/states-with-no-income-tax" style={{ color: '#2563eb' }}>no-income-tax states guide</a>{' '}
        covers this in detail.
      </p>

      {/* The bottom line */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2rem',
          marginBottom: '0.75rem',
        }}
      >
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        State income tax rates vary wildly &mdash; from California&rsquo;s 13.3% top rate down to zero in nine
        states. The trend is clearly moving toward lower rates, with more than 20 states cutting taxes since 2021.
        Whether you&rsquo;re evaluating a job offer, planning a move, or just curious where your state stands,
        knowing these rates helps you understand your paycheck better.
      </p>

      <p style={{ fontSize: '1.0625rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        The most important number isn&rsquo;t your state&rsquo;s top rate &mdash; it&rsquo;s what you actually
        take home after all taxes. That&rsquo;s exactly what our calculators show you.
      </p>

      {/* Sources */}
      <h2
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2rem',
          marginBottom: '0.75rem',
        }}
      >
        Sources
      </h2>

      <ul style={{ color: '#475569', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
        <li>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
            Tax Foundation &mdash; State Individual Income Tax Rates and Brackets for 2026
          </a>
        </li>
        <li>
          <a href="https://www.taxadmin.org/current-tax-rates" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
            Federation of Tax Administrators &mdash; State Tax Rates
          </a>
        </li>
        <li>
          <a href="https://www.irs.gov/newsroom/tax-reform" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
            IRS.gov &mdash; Tax Reform Information
          </a>
        </li>
        <li>
          <a href="https://www.bls.gov/oes/" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
            Bureau of Labor Statistics &mdash; Occupational Employment and Wage Statistics
          </a>
        </li>
        <li>
          <a href="https://azdor.gov/individual-income-tax-information" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
            Arizona Department of Revenue &mdash; Individual Income Tax
          </a>
        </li>
        <li>
          <a href="https://www.ncdor.gov/taxes-forms/individual-income-tax" style={{ color: '#2563eb' }} target="_blank" rel="noopener noreferrer">
            North Carolina Department of Revenue &mdash; Individual Income Tax
          </a>
        </li>
      </ul>

      {/* CTA */}
      <div
        style={{
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '10px',
          padding: '1.5rem',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontWeight: 700, color: '#1e293b', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
          Pick Your State and Calculate Your Paycheck
        </p>
        <p style={{ color: '#475569', marginBottom: '1rem' }}>
          Select your state to see your exact take-home pay after federal and state taxes.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/california" style={{ background: '#dc2626', color: '#fff', padding: '0.625rem 1.25rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem' }}>
            California
          </a>
          <a href="/new-york" style={{ background: '#dc2626', color: '#fff', padding: '0.625rem 1.25rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem' }}>
            New York
          </a>
          <a href="/texas" style={{ background: '#059669', color: '#fff', padding: '0.625rem 1.25rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem' }}>
            Texas
          </a>
          <a href="/arizona" style={{ background: '#059669', color: '#fff', padding: '0.625rem 1.25rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem' }}>
            Arizona
          </a>
        </div>
      </div>

      {/* Back to blog */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#2563eb', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
