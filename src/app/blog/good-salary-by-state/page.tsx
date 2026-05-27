import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is a Good Salary in Each US State? (2026 Cost-Adjusted)',
  description:
    '$75,000 goes a lot further in Mississippi than in Hawaii. Here\'s what counts as a good salary in every state when you factor in taxes and cost of living.',
  alternates: { canonical: '/blog/good-salary-by-state' },
  keywords:
    'good salary by state 2026, average salary by state, livable wage by state, cost of living by state, median income by state',
  openGraph: {
    title: 'What Is a Good Salary in Each US State? (2026 Cost-Adjusted)',
    description:
      'What counts as a good salary in every US state after taxes and cost of living adjustments.',
  },
}

/* 50-state data: [State, slug, Median HH Income, Est. Take-Home at Median, Cost Index (RPP), Adjusted Value] */
const stateData: [string, string, string, string, string, string][] = [
  ['Alabama', 'alabama', '$59,609', '$48,700', '87.1', '$55,913'],
  ['Alaska', 'alaska', '$86,370', '$68,100', '105.4', '$64,610'],
  ['Arizona', 'arizona', '$72,581', '$58,400', '101.2', '$57,708'],
  ['Arkansas', 'arkansas', '$56,335', '$46,100', '86.0', '$53,605'],
  ['California', 'california', '$91,905', '$70,200', '113.2', '$62,014'],
  ['Colorado', 'colorado', '$87,598', '$68,200', '105.0', '$64,952'],
  ['Connecticut', 'connecticut', '$90,213', '$68,800', '109.4', '$62,889'],
  ['Delaware', 'delaware', '$75,305', '$59,400', '101.3', '$58,639'],
  ['Florida', 'florida', '$67,917', '$56,300', '100.4', '$56,076'],
  ['Georgia', 'georgia', '$71,355', '$57,000', '93.2', '$61,159'],
  ['Hawaii', 'hawaii', '$94,814', '$72,000', '119.2', '$60,403'],
  ['Idaho', 'idaho', '$70,214', '$56,100', '96.2', '$58,316'],
  ['Illinois', 'illinois', '$78,433', '$61,500', '98.6', '$62,373'],
  ['Indiana', 'indiana', '$67,173', '$54,400', '90.8', '$59,912'],
  ['Iowa', 'iowa', '$72,429', '$57,400', '90.4', '$63,496'],
  ['Kansas', 'kansas', '$69,747', '$55,600', '91.0', '$61,099'],
  ['Kentucky', 'kentucky', '$60,407', '$49,200', '88.1', '$55,846'],
  ['Louisiana', 'louisiana', '$57,852', '$47,400', '90.0', '$52,667'],
  ['Maine', 'maine', '$68,251', '$54,500', '99.7', '$54,664'],
  ['Maryland', 'maryland', '$98,461', '$75,200', '111.5', '$67,444'],
  ['Massachusetts', 'massachusetts', '$96,505', '$72,800', '110.7', '$65,764'],
  ['Michigan', 'michigan', '$68,505', '$54,700', '93.3', '$58,628'],
  ['Minnesota', 'minnesota', '$84,313', '$64,800', '98.1', '$66,055'],
  ['Mississippi', 'mississippi', '$52,985', '$44,100', '86.7', '$50,865'],
  ['Missouri', 'missouri', '$65,920', '$53,600', '89.4', '$59,955'],
  ['Montana', 'montana', '$66,017', '$54,400', '96.1', '$56,607'],
  ['Nebraska', 'nebraska', '$74,580', '$58,500', '91.3', '$64,073'],
  ['Nevada', 'nevada', '$71,646', '$58,900', '100.2', '$58,782'],
  ['New Hampshire', 'new-hampshire', '$90,845', '$73,100', '107.1', '$68,254'],
  ['New Jersey', 'new-jersey', '$97,126', '$73,600', '114.1', '$64,505'],
  ['New Mexico', 'new-mexico', '$58,722', '$48,100', '94.4', '$50,953'],
  ['New York', 'new-york', '$75,910', '$58,400', '115.5', '$50,563'],
  ['North Carolina', 'north-carolina', '$66,186', '$53,900', '93.0', '$57,957'],
  ['North Dakota', 'north-dakota', '$73,959', '$59,800', '92.3', '$64,789'],
  ['Ohio', 'ohio', '$65,720', '$53,400', '90.8', '$58,811'],
  ['Oklahoma', 'oklahoma', '$61,364', '$50,200', '88.6', '$56,659'],
  ['Oregon', 'oregon', '$76,362', '$58,300', '101.8', '$57,269'],
  ['Pennsylvania', 'pennsylvania', '$73,170', '$57,600', '99.0', '$58,182'],
  ['Rhode Island', 'rhode-island', '$74,008', '$57,900', '100.6', '$57,555'],
  ['South Carolina', 'south-carolina', '$63,623', '$52,000', '91.5', '$56,831'],
  ['South Dakota', 'south-dakota', '$72,467', '$59,500', '91.6', '$64,956'],
  ['Tennessee', 'tennessee', '$65,254', '$54,000', '91.1', '$59,276'],
  ['Texas', 'texas', '$73,035', '$60,200', '96.5', '$62,383'],
  ['Utah', 'utah', '$86,833', '$68,000', '100.6', '$67,594'],
  ['Vermont', 'vermont', '$69,544', '$54,900', '101.6', '$54,035'],
  ['Virginia', 'virginia', '$87,249', '$68,100', '103.8', '$65,607'],
  ['Washington', 'washington', '$90,325', '$73,200', '107.5', '$68,093'],
  ['West Virginia', 'west-virginia', '$52,520', '$43,600', '86.6', '$50,346'],
  ['Wisconsin', 'wisconsin', '$72,458', '$57,200', '93.0', '$61,505'],
  ['Wyoming', 'wyoming', '$72,495', '$59,600', '95.3', '$62,539'],
]

export default function GoodSalaryByStatePage() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <svg
        viewBox="0 0 600 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
          display: 'block',
          margin: '0 auto 2rem',
          borderRadius: '12px',
        }}
        role="img"
        aria-label="Good salary by state illustration showing dollar signs and map outline"
      >
        <rect width="600" height="200" rx="12" fill="#d97706" />
        {/* Bar chart representing state salary values */}
        <rect x="60" y="140" width="30" height="40" rx="3" fill="rgba(255,255,255,0.25)" />
        <rect x="100" y="110" width="30" height="70" rx="3" fill="rgba(255,255,255,0.30)" />
        <rect x="140" y="80" width="30" height="100" rx="3" fill="rgba(255,255,255,0.35)" />
        <rect x="180" y="55" width="30" height="125" rx="3" fill="rgba(255,255,255,0.45)" />
        <rect x="220" y="70" width="30" height="110" rx="3" fill="rgba(255,255,255,0.40)" />
        <rect x="260" y="90" width="30" height="90" rx="3" fill="rgba(255,255,255,0.35)" />
        <rect x="300" y="50" width="30" height="130" rx="3" fill="rgba(255,255,255,0.50)" />
        <rect x="340" y="75" width="30" height="105" rx="3" fill="rgba(255,255,255,0.40)" />
        <rect x="380" y="100" width="30" height="80" rx="3" fill="rgba(255,255,255,0.30)" />
        <rect x="420" y="60" width="30" height="120" rx="3" fill="rgba(255,255,255,0.45)" />
        <rect x="460" y="85" width="30" height="95" rx="3" fill="rgba(255,255,255,0.35)" />
        <rect x="500" y="120" width="30" height="60" rx="3" fill="rgba(255,255,255,0.25)" />
        {/* Trend line */}
        <polyline
          points="75,130 115,100 155,72 195,48 235,62 275,82 315,42 355,68 395,92 435,52 475,78 515,112"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dollar sign */}
        <text x="300" y="32" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700" fontFamily="monospace">
          $ ADJUSTED VALUE BY STATE $
        </text>
        {/* Axis label */}
        <text x="300" y="192" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">
          50 States &mdash; Sorted by Adjusted Purchasing Power
        </text>
      </svg>

      <h1
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#1e293b',
          marginBottom: '1rem',
        }}
      >
        What Is a Good Salary in Each US State? (2026 Cost-Adjusted)
      </h1>

      <p style={{ color: '#475569', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 11, 2026 &middot; 10 min read
      </p>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Earning $75,000 sounds like a solid income. But whether it actually gives you a comfortable life depends entirely on <em>where</em> you live. In Mississippi, $75,000 puts you well above the median household income and your money stretches far. In Hawaii, that same salary barely covers the basics.
      </p>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        In this guide, we break down what counts as a &quot;good salary&quot; in every US state by looking at three things together: how much your state taxes, how much things cost where you live, and how much the typical household earns. We&apos;ll give you a full 50-state table so you can see exactly how your salary stacks up.
      </p>

      {/* Section 1 */}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        What Does &quot;Good Salary&quot; Actually Mean?
      </h2>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        There&apos;s no single number that qualifies as a &quot;good salary&quot; everywhere. A good salary is one that lets you:
      </p>

      <ul style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Cover your basic expenses (housing, food, transportation, healthcare)</li>
        <li style={{ marginBottom: '0.5rem' }}>Save for retirement and emergencies</li>
        <li style={{ marginBottom: '0.5rem' }}>Have some money left over for things you enjoy</li>
        <li style={{ marginBottom: '0.5rem' }}>Not feel financially stressed most of the time</li>
      </ul>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        A useful starting point is to look at the <strong>median household income</strong> in your state. The median is the middle point &mdash; half of households earn more, half earn less. If you earn above the median, you&apos;re doing better than most people in your state. According to the{' '}
        <a href="https://data.census.gov/table/ACSST1Y2023.S1901" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          U.S. Census Bureau&apos;s American Community Survey
        </a>
        , the national median household income was about $80,610 in 2023 (the most recent full-year data available).
      </p>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        But median income alone doesn&apos;t tell the whole story. You also need to know how much of that income you keep after taxes, and how far it goes where you live.
      </p>

      {/* Section 2 */}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        Our Methodology
      </h2>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        To figure out which states give you the most bang for your buck, we used three data points:
      </p>

      <ol style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Median household income by state</strong> &mdash; from the{' '}
          <a href="https://data.census.gov/table/ACSST1Y2023.S1901" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            U.S. Census Bureau (ACS 2023)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Estimated take-home pay</strong> &mdash; calculated using federal tax brackets, state income tax rates (from the{' '}
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2025/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Tax Foundation
          </a>
          ), and FICA taxes for a single filer with the standard deduction
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Cost-of-living index</strong> &mdash; using{' '}
          <a href="https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            BEA Regional Price Parities (RPPs)
          </a>
          , where 100 = the national average. A score below 100 means things are cheaper than average; above 100 means more expensive.
        </li>
      </ol>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        We then calculated an <strong>Adjusted Value</strong> by dividing the estimated take-home pay by the cost index. This gives you a single number that represents the real purchasing power of the median income in each state. Think of it as &quot;how much lifestyle does this salary actually buy?&quot;
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          textAlign: 'center',
        }}
      >
        Adjusted Value = Take-Home Pay &divide; (Cost Index &divide; 100)
      </div>

      {/* Section 3 */}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        Top 10 States Where Your Dollar Stretches the Most
      </h2>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        These states have the best combination of low taxes and affordable cost of living. Your paycheck goes the furthest here:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ textAlign: 'left', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>Rank</th>
              <th style={{ textAlign: 'left', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>State</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>Median Income</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>Adjusted Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', 'New Hampshire', 'new-hampshire', '$90,845', '$68,254'],
              ['2', 'Washington', 'washington', '$90,325', '$68,093'],
              ['3', 'Maryland', 'maryland', '$98,461', '$67,444'],
              ['4', 'Utah', 'utah', '$86,833', '$67,594'],
              ['5', 'Minnesota', 'minnesota', '$84,313', '$66,055'],
              ['6', 'Virginia', 'virginia', '$87,249', '$65,607'],
              ['7', 'Massachusetts', 'massachusetts', '$96,505', '$65,764'],
              ['8', 'South Dakota', 'south-dakota', '$72,467', '$64,956'],
              ['9', 'Colorado', 'colorado', '$87,598', '$64,952'],
              ['10', 'North Dakota', 'north-dakota', '$73,959', '$64,789'],
            ].map(([rank, state, slug, median, adjusted], i) => (
              <tr key={state} style={{ borderBottom: '1px solid #e2e8f0', background: i % 2 === 0 ? '#ecfdf5' : '#fff' }}>
                <td style={{ padding: '0.75rem 0.75rem', color: '#059669', fontWeight: 700 }}>{rank}</td>
                <td style={{ padding: '0.75rem 0.75rem' }}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{state}</a>
                </td>
                <td style={{ padding: '0.75rem 0.75rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{median}</td>
                <td style={{ padding: '0.75rem 0.75rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{adjusted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Notice that this list isn&apos;t just &quot;states with no income tax.&quot; States like Minnesota and Virginia have income taxes, but their higher median incomes more than make up for it. The key is the <em>combination</em> of income, taxes, and living costs.
      </p>

      {/* Section 4 */}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        Top 10 Most Expensive States: Where You Need $100K+ to Feel Like $60K
      </h2>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        In these states, high costs eat into your paycheck. Even strong salaries don&apos;t go as far because housing, food, and services cost so much more:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ textAlign: 'left', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>Rank</th>
              <th style={{ textAlign: 'left', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>State</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>Median Income</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>Cost Index</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 0.75rem', color: '#1e293b', fontWeight: 600 }}>Adjusted Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', 'Hawaii', 'hawaii', '$94,814', '119.2', '$60,403'],
              ['2', 'New York', 'new-york', '$75,910', '115.5', '$50,563'],
              ['3', 'New Jersey', 'new-jersey', '$97,126', '114.1', '$64,505'],
              ['4', 'California', 'california', '$91,905', '113.2', '$62,014'],
              ['5', 'Maryland', 'maryland', '$98,461', '111.5', '$67,444'],
              ['6', 'Massachusetts', 'massachusetts', '$96,505', '110.7', '$65,764'],
              ['7', 'Connecticut', 'connecticut', '$90,213', '109.4', '$62,889'],
              ['8', 'Washington', 'washington', '$90,325', '107.5', '$68,093'],
              ['9', 'New Hampshire', 'new-hampshire', '$90,845', '107.1', '$68,254'],
              ['10', 'Oregon', 'oregon', '$76,362', '101.8', '$57,269'],
            ].map(([rank, state, slug, median, cost, adjusted], i) => (
              <tr key={state} style={{ borderBottom: '1px solid #e2e8f0', background: i % 2 === 0 ? '#fef2f2' : '#fff' }}>
                <td style={{ padding: '0.75rem 0.75rem', color: '#dc2626', fontWeight: 700 }}>{rank}</td>
                <td style={{ padding: '0.75rem 0.75rem' }}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{state}</a>
                </td>
                <td style={{ padding: '0.75rem 0.75rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{median}</td>
                <td style={{ padding: '0.75rem 0.75rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{cost}</td>
                <td style={{ padding: '0.75rem 0.75rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{adjusted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        New York stands out as particularly tough. Despite a median household income below $76,000, costs are 15.5% above the national average. After taxes and cost-of-living adjustment, the median income&apos;s purchasing power drops to about $50,563 &mdash; one of the lowest adjusted values in the country. Interestingly, some expensive states like Washington and New Hampshire still rank well on adjusted value because they have no state income tax and high median incomes.
      </p>

      {/* Section 5: Full 50-State Table */}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        Full 50-State Table: Median Income, Take-Home Pay, and Adjusted Value
      </h2>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Here&apos;s every state, sorted alphabetically. The &quot;Adjusted Value&quot; column is the number to focus on &mdash; it tells you what the median income is really worth after taxes and cost of living. Click any state name to calculate your own take-home pay there.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ textAlign: 'left', padding: '0.625rem 0.5rem', color: '#1e293b', fontWeight: 600, whiteSpace: 'nowrap' }}>State</th>
              <th style={{ textAlign: 'right', padding: '0.625rem 0.5rem', color: '#1e293b', fontWeight: 600, whiteSpace: 'nowrap' }}>Median Income</th>
              <th style={{ textAlign: 'right', padding: '0.625rem 0.5rem', color: '#1e293b', fontWeight: 600, whiteSpace: 'nowrap' }}>Est. Take-Home</th>
              <th style={{ textAlign: 'right', padding: '0.625rem 0.5rem', color: '#1e293b', fontWeight: 600, whiteSpace: 'nowrap' }}>Cost Index</th>
              <th style={{ textAlign: 'right', padding: '0.625rem 0.5rem', color: '#1e293b', fontWeight: 600, whiteSpace: 'nowrap' }}>Adjusted Value</th>
            </tr>
          </thead>
          <tbody>
            {stateData.map(([state, slug, median, takehome, cost, adjusted], i) => (
              <tr key={state} style={{ borderBottom: '1px solid #e2e8f0', background: i % 2 === 0 ? '#f8fafc' : '#fff' }}>
                <td style={{ padding: '0.5rem', whiteSpace: 'nowrap' }}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.8125rem' }}>{state}</a>
                </td>
                <td style={{ padding: '0.5rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontSize: '0.8125rem' }}>{median}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontSize: '0.8125rem' }}>{takehome}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: parseFloat(cost) > 100 ? '#dc2626' : '#059669', fontSize: '0.8125rem' }}>{cost}</td>
                <td style={{ padding: '0.5rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 600, fontSize: '0.8125rem' }}>{adjusted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ color: '#475569', fontSize: '0.8125rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Sources: Median household income from{' '}
        <a href="https://data.census.gov/table/ACSST1Y2023.S1901" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          U.S. Census Bureau ACS 2023
        </a>
        . Cost index from{' '}
        <a href="https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          BEA Regional Price Parities 2023
        </a>
        . Take-home estimates calculated using 2025 federal brackets and state tax rates from the{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2025/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          Tax Foundation
        </a>
        .
      </p>

      {/* Section 6: Spotlight */}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        Spotlight: $75K in Mississippi vs. $75K in Hawaii
      </h2>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Let&apos;s see what happens when you earn the exact same salary &mdash; $75,000 &mdash; in two very different states. <a href="/mississippi" style={{ color: '#2563eb' }}>Mississippi</a> has the lowest cost of living in the country, while <a href="/hawaii" style={{ color: '#2563eb' }}>Hawaii</a> has the highest.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#1e293b', fontWeight: 600 }}>&nbsp;</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 1rem', color: '#1e293b', fontWeight: 600 }}>Mississippi</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 1rem', color: '#1e293b', fontWeight: 600 }}>Hawaii</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Salary', '$75,000', '$75,000'],
              ['Federal Income Tax', '-$8,930', '-$8,930'],
              ['State Income Tax', '-$3,375', '-$4,510'],
              ['FICA (7.65%)', '-$5,738', '-$5,738'],
              ['Take-Home Pay', '$56,957', '$55,822'],
              ['Cost Index (RPP)', '86.7', '119.2'],
              ['Adjusted Value', '$65,694', '$46,831'],
            ].map(([label, ms, hi], i) => (
              <tr
                key={label}
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  background: label === 'Adjusted Value' ? '#ecfdf5' : i % 2 === 0 ? '#f8fafc' : '#fff',
                  fontWeight: label === 'Adjusted Value' ? 700 : 400,
                }}
              >
                <td style={{ padding: '0.75rem 1rem', color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{ms}</td>
                <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{hi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Same salary, wildly different results. After taxes, the take-home amounts are close ($56,957 vs. $55,822 &mdash; about a $1,100 difference). But after adjusting for what things actually cost in each state, the $75K in Mississippi is worth <strong>$65,694</strong> in purchasing power, while the same salary in Hawaii is worth only <strong>$46,831</strong>. That&apos;s a gap of nearly <strong>$19,000</strong>.
      </p>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        In plain terms: $75,000 in Mississippi buys you a comfortable middle-class lifestyle. In Hawaii, it leaves you struggling to cover basics, especially housing. According to the{' '}
        <a href="https://www.bls.gov/cex/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          BLS Consumer Expenditure Survey
        </a>
        , housing is the single biggest expense for American households (about 33% of spending), and housing costs vary more between states than any other category.
      </p>

      {/* Section 7 */}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        Tips for Maximizing Your Take-Home Pay
      </h2>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1rem' }}>
        No matter which state you live in, here are practical ways to keep more of your paycheck:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          1. Max out your pre-tax retirement contributions
        </h3>
        <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          Money you put into a 401(k) or traditional IRA reduces your taxable income. In 2026, you can contribute up to $23,500 to a 401(k). That could save you $3,000 to $7,000 in taxes depending on your bracket.
        </p>

        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          2. Use your HSA if you have a high-deductible health plan
        </h3>
        <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          Health Savings Accounts (HSAs) are triple tax-advantaged: your contributions are tax-free, the money grows tax-free, and withdrawals for medical expenses are tax-free. The 2026 contribution limit is $4,300 for individuals.
        </p>

        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          3. Check your W-4 withholding
        </h3>
        <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          If you get a big tax refund every year, you&apos;re having too much withheld from each paycheck. Adjust your{' '}
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS Form W-4
          </a>{' '}
          so you keep more money throughout the year instead of giving the government an interest-free loan.
        </p>

        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          4. Use pre-tax commuter benefits
        </h3>
        <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          Many employers offer transit or parking benefits that come out of your paycheck before taxes. In 2026, you can set aside up to $325 per month ($3,900 per year) pre-tax for commuting costs.
        </p>

        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          5. Consider where you live within your state
        </h3>
        <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '0' }}>
          Cost of living varies within states too. Living 30 minutes outside a major city can cut your housing costs by 20-40% while keeping you close to job opportunities. If you work remotely, you have even more flexibility.
        </p>
      </div>

      {/* Section 8: CTA */}
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        Calculate Your Take-Home Pay in Any State
      </h2>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        The numbers in this article are based on median incomes and general estimates. Your situation is unique. Your actual take-home pay depends on your specific salary, filing status, deductions, and which state you live in.
      </p>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Use our <a href="/" style={{ color: '#2563eb', fontWeight: 600 }}>free paycheck calculator</a> to plug in your exact numbers and see what you&apos;ll actually take home in any state. Whether you&apos;re evaluating a job offer, thinking about relocating, or just curious how your salary compares, our calculator gives you instant, state-specific results.
      </p>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Here are some of the most popular state calculators:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
        {[
          ['California', 'california'],
          ['Texas', 'texas'],
          ['Florida', 'florida'],
          ['New York', 'new-york'],
          ['Washington', 'washington'],
          ['Illinois', 'illinois'],
          ['Pennsylvania', 'pennsylvania'],
          ['Ohio', 'ohio'],
        ].map(([name, slug]) => (
          <a
            key={slug}
            href={`/${slug}`}
            style={{
              display: 'block',
              padding: '0.75rem 1rem',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              color: '#2563eb',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            {name}
          </a>
        ))}
      </div>

      <p style={{ color: '#1e293b', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Remember: a &quot;good salary&quot; isn&apos;t just a number. It&apos;s what that number can buy you after the government takes its share and after you pay for the basics where you live. Know your real take-home pay, and you&apos;ll make smarter financial decisions.
      </p>

      {/* Sources */}
      <h3
        style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: '#1e293b',
          marginTop: '2.5rem',
          marginBottom: '0.75rem',
          borderTop: '1px solid #e2e8f0',
          paddingTop: '1.5rem',
        }}
      >
        Sources
      </h3>
      <ul style={{ color: '#475569', fontSize: '0.8125rem', lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <li>
          <a href="https://data.census.gov/table/ACSST1Y2023.S1901" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            U.S. Census Bureau &mdash; Median Household Income by State (ACS 2023)
          </a>
        </li>
        <li>
          <a href="https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Bureau of Economic Analysis &mdash; Regional Price Parities by State and Metro Area
          </a>
        </li>
        <li>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2025/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Tax Foundation &mdash; State Individual Income Tax Rates and Brackets, 2025
          </a>
        </li>
        <li>
          <a href="https://www.bls.gov/cex/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Bureau of Labor Statistics &mdash; Consumer Expenditure Surveys
          </a>
        </li>
        <li>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS &mdash; About Form W-4
          </a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
        <a
          href="/blog"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            color: '#2563eb',
            textDecoration: 'none',
            fontSize: '0.9375rem',
            fontWeight: 500,
          }}
        >
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
