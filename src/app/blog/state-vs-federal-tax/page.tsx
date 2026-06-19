import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'State vs Federal Tax: A Simple Explanation (2026)',
  description:
    'Federal income tax goes to the IRS. State income tax goes to your state — if it has one. Here\'s exactly how the two systems work together, with 2026 rates and real dollar examples.',
  alternates: { canonical: '/blog/state-vs-federal-tax' },
  keywords:
    'state vs federal tax, state income tax vs federal income tax, federal tax 2026, state tax 2026, how state and federal taxes work, two income taxes paycheck, state income tax rates',
  openGraph: {
    title: 'State vs Federal Tax: A Simple Explanation (2026)',
    description:
      'Federal income tax goes to the IRS. State income tax goes to your state — if it has one. Here\'s how both systems work, with 2026 rates and real dollar examples.',
  },
}

export default function StateVsFederalTax() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="State vs federal tax illustration showing two government buildings"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.07)" />

          {/* Federal building - left side, centered at x=100 */}
          {/* Columns */}
          <rect x="55" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="68" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="81" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="94" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="107" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="120" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          {/* Base */}
          <rect x="46" y="148" width="96" height="8" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="40" y="154" width="108" height="6" rx="2" fill="rgba(255,255,255,0.4)" />
          {/* Pediment */}
          <polygon points="46,92 94,58 142,92" fill="rgba(255,255,255,0.28)" />
          {/* Dome */}
          <ellipse cx="94" cy="57" rx="16" ry="9" fill="rgba(255,255,255,0.3)" />
          <ellipse cx="94" cy="52" rx="8" ry="6" fill="rgba(255,255,255,0.25)" />
          {/* Flag pole */}
          <line x1="94" y1="46" x2="94" y2="32" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <rect x="94" y="32" width="14" height="9" rx="1" fill="rgba(255,255,255,0.35)" />
          {/* Label */}
          <text x="91" y="174" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">FEDERAL</text>
          <text x="91" y="187" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">IRS · Same in Every State</text>

          {/* VS circle in center */}
          <circle cx="300" cy="98" r="30" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <text x="300" y="105" textAnchor="middle" fontSize="22" fontWeight="800" fill="#ffffff" fontFamily="sans-serif">vs</text>

          {/* Dashed lines to VS */}
          <line x1="150" y1="98" x2="265" y2="98" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5,4" />
          <line x1="335" y1="98" x2="442" y2="98" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5,4" />

          {/* State building - right side, centered at x=495 */}
          {/* Columns */}
          <rect x="460" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="473" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="486" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="499" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="512" y="92" width="7" height="58" rx="2" fill="rgba(255,255,255,0.45)" />
          {/* Base */}
          <rect x="450" y="148" width="88" height="8" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="444" y="154" width="100" height="6" rx="2" fill="rgba(255,255,255,0.4)" />
          {/* Pediment */}
          <polygon points="450,92 494,62 538,92" fill="rgba(255,255,255,0.28)" />
          {/* Star at apex */}
          <text x="494" y="63" textAnchor="middle" fontSize="15" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">★</text>
          {/* Label */}
          <text x="494" y="174" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">STATE</text>
          <text x="494" y="187" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Varies by State · 41 States Tax Income</text>
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
        State vs Federal Tax: A Simple Explanation (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 19, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Look at a pay stub from any W-2 job and you will almost certainly see two separate income tax lines: <strong>Federal Income Tax</strong> and <strong>State Income Tax</strong>. They both say &ldquo;tax,&rdquo; they both come out of every paycheck, and they both reduce your take-home pay &mdash; but they are entirely separate systems, collected by different governments, calculated with different rules, and used for different purposes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have ever wondered why you seem to pay taxes twice, or why someone in Texas takes home more than someone in California on the same salary, this article explains everything. Here is a clear, side-by-side breakdown of state vs federal income tax &mdash; with 2026 rates and real dollar examples.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Two Income Taxes on Your Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The United States operates under a dual tax system, meaning income can be taxed by both the federal government <em>and</em> the state government simultaneously. These are not the same tax split in two &mdash; they are two completely independent taxes with different authorities, different rules, and different uses for the money collected.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In addition to these two income taxes, most workers also pay <strong>FICA taxes</strong> (Social Security and Medicare) on every paycheck. FICA is separate from both federal income tax and state income tax. So in a typical paycheck, you may see three or four tax deductions, not two.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Line on Pay Stub</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Goes To</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Collected By</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal Income Tax', 'U.S. Treasury (general government)', 'IRS'],
              ['State Income Tax', 'State government', 'State revenue department'],
              ['Social Security (OASDI)', 'Social Security Trust Fund', 'IRS / SSA'],
              ['Medicare (MED)', 'Medicare Trust Fund', 'IRS / CMS'],
            ].map(([line, destination, collector], i) => (
              <tr key={line} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{line}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{destination}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{collector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This article focuses on the first two: federal income tax and state income tax. FICA is covered separately in our{' '}
        <a href="/blog/fica-taxes-explained" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          FICA taxes guide
        </a>.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Federal Income Tax Works
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax is the same for every American, regardless of which state they live in. It is collected by the <strong>Internal Revenue Service (IRS)</strong> and funds the federal government &mdash; defense, Social Security administration, federal highways, healthcare programs, and thousands of other services.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax is <strong>progressive</strong>, meaning higher income is taxed at higher rates. But it is not all-or-nothing &mdash; only the income within each bracket is taxed at that bracket&rsquo;s rate. The 2026 brackets for single filers are:{' '}
        <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS.gov)
        </a>
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income (Single)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax on This Bracket</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925', 'Up to $1,192.50'],
              ['12%', '$11,925 – $48,475', 'Up to $4,386.00'],
              ['22%', '$48,475 – $103,350', 'Up to $12,072.50'],
              ['24%', '$103,350 – $197,300', 'Up to $22,539.00'],
              ['32%', '$197,300 – $250,525', 'Up to $17,027.50'],
              ['35%', '$250,525 – $626,350', 'Up to $131,531.25'],
              ['37%', 'Over $626,350', 'No limit'],
            ].map(([rate, range, tax], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: '#2563eb', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontFamily: "'JetBrains Mono', monospace" }}>{range}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', color: '#475569' }}>{tax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before these rates apply, most people subtract the <strong>standard deduction</strong> from their gross income to arrive at &ldquo;taxable income.&rdquo; For 2026, the standard deduction is <strong>$15,000 for single filers</strong> and <strong>$30,000 for married couples filing jointly</strong>.{' '}
        <a href="https://www.irs.gov/taxtopics/tc551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Standard Deduction)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer withholds federal income tax from every paycheck based on the information you provided on your <strong>Form W-4</strong>. The IRS reconciles the final amount when you file your tax return each spring &mdash; if too much was withheld, you get a refund; if too little, you owe the difference.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How State Income Tax Works
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State income tax is where things get complicated, because there is no single national rule &mdash; each state sets its own rate structure, its own deductions, and its own exemptions. As of 2026, there are three categories of states:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Category</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>How It Works</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Examples</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['No income tax', 'You pay $0 in state income tax', 'TX, FL, WA, NV, WY, AK, SD, TN, NH'],
              ['Flat rate', 'One rate applies to all income', 'CO (4.4%), IL (4.95%), PA (3.07%)'],
              ['Progressive', 'Higher income taxed at higher rates, like federal', 'CA, NY, OR, MN, NJ, MA'],
            ].map(([cat, how, examples], i) => (
              <tr key={cat} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{cat}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{how}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Nine states have no personal income tax at all. For residents of those states, the &ldquo;state income tax&rdquo; line simply does not appear on their pay stubs. The other 41 states (plus Washington D.C.) impose some form of income tax, with top rates ranging from about 2% in North Dakota to 13.3% in California.{' '}
        <a href="https://www.taxfoundation.org/data/all/state/state-income-tax-rates/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Income Tax Rates)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Like federal tax, state income tax is withheld from your paycheck by your employer using a state withholding form (usually similar to the federal W-4). You file a state tax return each spring to reconcile the amount, separate from your federal return.
      </p>

      {/* Section 4 - Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $65,000 Salary in Four States
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s put real numbers to it. Suppose you earn <strong>$65,000 per year</strong> as a single filer. The federal income tax calculation is identical regardless of where you live:
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
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        <div><strong>Gross income:</strong> $65,000</div>
        <div><strong>Standard deduction:</strong> &minus;$15,000</div>
        <div><strong>Taxable income:</strong> $50,000</div>
        <div style={{ marginTop: '0.5rem' }}>10% &times; $11,925 = $1,192.50</div>
        <div>12% &times; $36,550 ($11,925&ndash;$48,475) = $4,386.00</div>
        <div>22% &times; $1,525 ($48,475&ndash;$50,000) = $335.50</div>
        <div style={{ marginTop: '0.5rem', fontWeight: 700 }}>Federal income tax = $5,914</div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Now here is where the state makes a huge difference. Below is what a $65,000 earner keeps in four different states. State tax figures are approximate, based on 2026 rates, and assume the standard deductions and personal exemptions available in each state.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>FICA</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Take-Home</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Texas (no income tax)', '$5,914', '$4,973', '$0', '$54,113', '#ecfdf5'],
              ['Ohio (~2.765% progressive)', '$5,914', '$4,973', '~$1,077', '~$53,036', '#f8fafc'],
              ['California (~3.8% effective)', '$5,914', '$4,973', '~$2,244', '~$51,869', '#f8fafc'],
              ['New York (~4.9% effective)', '$5,914', '$4,973', '~$2,904', '~$51,209', '#fef2f2'],
            ].map(([state, fed, fica, stateTax, takeHome, bg]) => (
              <tr key={state} style={{ background: bg }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{fed}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{fica}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{stateTax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#1e293b' }}>{takeHome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        State tax figures are approximate. FICA = 7.65% of gross ($4,030 Social Security + $942.50 Medicare = $4,972.50). Actual take-home may vary based on local taxes, benefits deductions, and filing details.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The difference is striking: a Texan earning $65,000 takes home roughly <strong>$2,904 more per year</strong> than the same worker in New York &mdash; purely because of state income tax. Over a 10-year career, that is nearly $29,000 in additional take-home pay, before accounting for any raises.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that the federal tax and FICA columns are <em>identical</em> across all four states. Those two taxes do not care where you live. State tax is the only variable.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Collects Each Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax is administered by the <strong>Internal Revenue Service (IRS)</strong>, a bureau of the U.S. Department of the Treasury. When you file your 1040 each year, you are filing with the IRS. Your employer remits withheld federal taxes to the IRS on your behalf with each payroll cycle.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Understanding Employment Taxes)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State income tax is collected by each state&rsquo;s own revenue department. For example, California uses the <strong>Franchise Tax Board (FTB)</strong>, New York uses the <strong>Department of Taxation and Finance</strong>, and Texas has no state income tax agency because it has no income tax. When you file a state return, you file with that state&rsquo;s agency &mdash; separately from the IRS and on the state&rsquo;s own forms. Most states have April 15 as a due date, but some differ.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live and work in two different states (for example, you live in New Jersey and work in New York City), you may owe taxes in both states. Most states have <strong>reciprocity agreements</strong> or credit systems to prevent true double taxation, but the rules vary and can be complex.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Can You Deduct State Taxes on Your Federal Return?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes, but with a major limitation. You can deduct state and local taxes you paid &mdash; including state income tax and property taxes &mdash; when you <em>itemize</em> deductions on your federal return. This is called the <strong>SALT deduction</strong> (State and Local Tax).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, the <strong>SALT deduction is capped at $10,000 per year</strong> (or $5,000 if married filing separately) under current law, as set by the Tax Cuts and Jobs Act of 2017. This cap is especially painful for taxpayers in high-tax states like California, New York, and New Jersey, who often pay more than $10,000 in combined state income tax and property taxes. They cannot deduct the excess.{' '}
        <a href="https://www.irs.gov/taxtopics/tc503" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 503: Deductible Taxes)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Also worth noting: you can only claim the SALT deduction if you itemize. Since the standard deduction is now $15,000 for single filers, most Americans take the standard deduction instead of itemizing &mdash; which means most people do not get any SALT benefit at all. Only about 12% of taxpayers itemize in recent years.{' '}
        <a href="https://www.taxpolicycenter.org/briefing-book/what-difference-between-refundable-and-nonrefundable-credits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Policy Center)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Do State and Federal Taxes Fund?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The money raised by these two tax systems funds very different services, which is part of why both exist.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Federal income tax</strong> funds national programs: the military, federal courts, NASA, the FDA, the CDC, Medicaid (partially), housing assistance, and the interest on the national debt. These are things that need to be consistent across all 50 states or that only the national government can coordinate.{' '}
        <a href="https://www.usaspending.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (USASpending.gov &mdash; Federal Budget Data)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>State income tax</strong> funds state-level services: public K&ndash;12 schools, state universities, state police, roads and bridges, state courts, public health departments, and Medicaid (partially). This is why states with no income tax often make up the difference with higher sales taxes, property taxes, or other revenue sources.
      </p>

      {/* Section 8 - Why Two Systems */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Do We Have Two Separate Tax Systems?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The United States is a federal republic, meaning power is divided between the national government and individual state governments. The <strong>16th Amendment</strong> (ratified in 1913) gave Congress the power to levy a federal income tax. But states were already taxing income before that &mdash; and have continued to do so independently.{' '}
        <a href="https://constitution.congress.gov/constitution/amendment-16/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Congress.gov &mdash; 16th Amendment)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Each state has the constitutional authority to tax its residents as it sees fit (within federal limits). This means states can experiment with different tax policies &mdash; some choose flat taxes for simplicity, some choose progressive rates for redistribution, and some choose to eliminate income tax altogether and rely on consumption taxes instead. The result is 50 different state tax codes layered on top of one federal code.
      </p>

      {/* Section 9 - Key Differences */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key Differences at a Glance
      </h2>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal Income Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Income Tax</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Who collects it?', 'IRS (federal government)', 'State revenue department'],
              ['Same rate everywhere?', 'Yes — uniform nationwide', 'No — varies by state'],
              ['Tax structure', 'Progressive (7 brackets)', 'None, flat, or progressive'],
              ['Rate range', '10% – 37%', '0% – 13.3%'],
              ['Standard deduction (single)', '$15,000', 'Varies ($0 – ~$8,000+)'],
              ['Where it goes', 'National programs (defense, Medicare, etc.)', 'State services (schools, roads, courts)'],
              ['Form filed', 'Form 1040 with the IRS', 'State tax return with state agency'],
              ['Deadline', 'April 15 (federal)', 'Usually April 15, varies by state'],
              ['Can be avoided?', 'No', 'Yes — live in a no-income-tax state'],
            ].map(([label, federal, state], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{federal}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 10 - How Withholding Works for Both */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Withholding Works for Both Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Neither tax is paid in one lump sum at year-end. Instead, your employer withholds an estimated amount from each paycheck and sends it directly to the government on your behalf. This process, called <strong>payroll withholding</strong>, is designed to spread your tax liability evenly throughout the year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For <strong>federal tax</strong>, you control withholding via your <strong>W-4 form</strong>. The IRS provides withholding tables that employers use to calculate the correct amount based on your filing status and any adjustments you listed on the W-4.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For <strong>state tax</strong>, most states have their own equivalent of the W-4 (for example, California uses DE-4, New York uses IT-2104). If you never filled out a state withholding form, your employer likely defaults to single-filer withholding with no adjustments, which means you may be over-withheld and will receive a state refund at tax time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you move to a new state mid-year, update your state withholding form with your new employer right away. You may also need to file a part-year resident return in both your old and new states for that tax year.{' '}
        <a href="https://www.irs.gov/individuals/international-taxpayers/us-tax-obligations-of-us-citizens-and-resident-aliens-residing-abroad" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Tax Obligations)
        </a>
      </p>

      {/* Section 11 - No Income Tax States Trade-offs */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        No State Tax Doesn&rsquo;t Always Mean Lower Total Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        It is tempting to look at Texas or Florida and think, &ldquo;no state income tax — I save thousands a year.&rdquo; And for income taxes specifically, that is true. But states still need to fund their services, and no-income-tax states typically make up the difference with other taxes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Higher property taxes</strong> — Texas has some of the highest property tax rates in the country (around 1.6–1.8% of home value annually).</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Higher sales taxes</strong> — Nevada has a combined state and local sales tax rate of about 8.3%, compared to roughly 7.25% in California.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Other levies</strong> — Some states use higher vehicle registration fees, excise taxes on gas or tobacco, or corporate taxes to fill the gap.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For workers (as opposed to homeowners or consumers), eliminating state income tax usually is a genuine benefit. If you rent and spend modestly, living in a no-income-tax state is almost certainly a net win financially. But the picture gets more nuanced once you factor in property taxes on a home purchase and your overall spending habits.{' '}
        <a href="https://www.taxpolicycenter.org/statistics/state-and-local-tax-burdens" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Policy Center &mdash; State and Local Tax Burdens)
        </a>
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax and state income tax are two separate taxes, collected by two separate governments, for two separate purposes. Federal tax is the same for everyone in the country &mdash; a progressive system with seven brackets and a $15,000 standard deduction for single filers in 2026. State tax is where your location matters: nine states charge nothing, while states like California and New York can take another 4%–9% of your income on top of what the federal government collects.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you see two &ldquo;tax&rdquo; deductions on your pay stub, now you know exactly what each one is, where it goes, and why the amounts differ from one state to the next. Understanding the difference is the first step to making smarter decisions about where you live, how you set your withholding, and how to maximize the income you actually keep.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Federal and State Tax Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see exactly how much goes to federal tax, state tax, Social Security, and Medicare &mdash; and what you actually take home.
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
          <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Topic 409: Capital Gains and Losses (Tax Rates Overview)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 551: Standard Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc503" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 503: Deductible Taxes (SALT)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Understanding Employment Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://constitution.congress.gov/constitution/amendment-16/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Congress.gov &mdash; 16th Amendment to the U.S. Constitution</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.taxfoundation.org/data/all/state/state-income-tax-rates/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Individual Income Tax Rates and Brackets</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.taxpolicycenter.org/statistics/state-and-local-tax-burdens" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Policy Center &mdash; State and Local Tax Burdens</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.usaspending.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>USASpending.gov &mdash; Federal Budget Data</a>
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
