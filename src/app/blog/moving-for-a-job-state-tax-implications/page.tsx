import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Moving for a Job? Tax Implications of Relocating States (2026)',
  description:
    'Moving to a new state for work changes your taxes in ways most people don\'t expect. Learn about part-year returns, residency rules, remote work taxes, and real dollar examples.',
  alternates: { canonical: '/blog/moving-for-a-job-state-tax-implications' },
  keywords:
    'moving to another state taxes, relocating for a job taxes, part-year resident tax return, state tax when moving, domicile vs residency taxes, remote work state taxes 2026',
  openGraph: {
    title: 'Moving for a Job? Tax Implications of Relocating States (2026)',
    description:
      'Moving states for work changes your taxes in ways most people don\'t see coming — part-year returns, dual residency, and remote work complications explained.',
  },
}

export default function MovingForAJobStateTaxImplications() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Illustration showing a house moving from one state to another with a dollar sign"
        >
          <rect width="600" height="200" rx="12" fill="#0f766e" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Left house */}
          <polygon points="70,130 70,85 100,65 130,85 130,130" fill="rgba(255,255,255,0.9)" />
          <rect x="84" y="105" width="18" height="25" fill="#0f766e" />
          <polygon points="70,88 100,65 130,88" fill="rgba(255,255,255,0.4)" />
          {/* Arrow path */}
          <line x1="148" y1="100" x2="290" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeDasharray="8,4" />
          <polygon points="290,92 310,100 290,108" fill="rgba(255,255,255,0.7)" />
          {/* Dollar sign in motion */}
          <circle cx="220" cy="100" r="22" fill="rgba(255,255,255,0.2)" />
          <text x="220" y="108" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">$</text>
          {/* Right house (destination) */}
          <polygon points="330,130 330,85 360,65 390,85 390,130" fill="rgba(255,255,255,0.5)" />
          <rect x="344" y="105" width="18" height="25" fill="#0f766e" />
          <polygon points="330,88 360,65 390,88" fill="rgba(255,255,255,0.2)" />
          {/* State label boxes */}
          <rect x="430" y="58" width="130" height="32" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="495" y="79" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">Part-Year Return</text>
          <rect x="430" y="100" width="130" height="32" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="495" y="121" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">New Domicile</text>
          <rect x="430" y="142" width="130" height="32" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="495" y="163" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">Remote Work Tax</text>
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
        Moving for a Job? Here&#39;s How Your Taxes Change
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 25, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Taking a job in a new state is exciting &mdash; but it comes with tax consequences most people don&#39;t think about until they&#39;re staring at a tax return they don&#39;t understand. When you move across state lines mid-year, you may have to file tax returns in <strong>two states</strong>, deal with complicated residency rules, and figure out which state gets to tax your income. If you work remotely, it gets even more complicated.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers everything you need to know about state taxes when you relocate for work in 2026 &mdash; with real dollar examples.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Domicile vs. Residency: Why the Difference Matters
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before we talk dollars, you need to understand two terms that states use to decide who gets to tax you:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Domicile</strong> is your permanent home &mdash; the place you intend to return to, even if you&#39;re away. You can only have one domicile at a time. This is the state that has the strongest claim to tax your full income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Residency</strong> is where you actually live. Many states say you&#39;re a resident if you spend more than 183 days there in a year, regardless of where your domicile is. This can create a situation where <em>two states</em> each consider you a resident and both try to tax you.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states give you a <strong>credit for taxes paid to another state</strong> to prevent double taxation, but the rules vary. Some high-tax states are more aggressive about claiming you as a resident even after you&#39;ve moved &mdash; New York is famous for this, requiring strong proof that you&#39;ve truly left before they stop taxing you.{' '}
        <a href="https://www.tax.ny.gov/pit/file/nonresident_faqs.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (New York State Department of Taxation and Finance)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Part-Year Residency Works
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you move mid-year, you are a <strong>part-year resident</strong> in two states. This means you typically file a part-year return in <em>both</em> states &mdash; one covering the months you lived there and earned income there.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here&#39;s how it works in practice:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State A</strong> (where you left) taxes the income you earned while you were living there. You file as a part-year resident and report only those months of income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State B</strong> (your new home) taxes the income you earned after you arrived and established residency there.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Federal taxes</strong> don&#39;t change. You file one federal return that covers all 12 months as always.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The practical result: you file <strong>three tax returns</strong> in the year you move. Two state returns and one federal return. Most tax software handles this, but you&#39;ll need to know your exact move date and how much income you earned in each state.{' '}
        <a href="https://www.irs.gov/taxtopics/tc763" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 763: Part-Year Residency)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which State Taxes You During the Transition?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The general rule is: <strong>income is taxed by the state where you earned it</strong>. If you move from Ohio to Colorado on July 1, your Ohio income (January through June) is taxed by Ohio, and your Colorado income (July through December) is taxed by Colorado.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer&#39;s payroll department should adjust withholding after you update your address, but this doesn&#39;t always happen automatically. Watch your pay stubs after the move to make sure the right state is being withheld. If the wrong state is being withheld, ask HR to correct it &mdash; otherwise you may owe taxes to your new state at filing time while getting a refund from your old state.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The exception is <strong>investment income, rental income, and other passive income</strong>. That income is typically taxed based on where you are a resident when you receive it, not where the asset is located (with some exceptions for real estate, which is taxed by the state where the property sits).
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Can You Deduct Moving Expenses?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is one of the most common questions &mdash; and the answer is <strong>probably not, at the federal level</strong>. The Tax Cuts and Jobs Act of 2017 suspended the moving expense deduction for most workers through 2025. In 2026, that suspension is still in effect for civilian workers.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is one exception: <strong>active-duty military members</strong> who move due to a military order can still deduct qualified moving expenses on their federal return.{' '}
        <a href="https://www.irs.gov/taxtopics/tc455" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 455: Moving Expenses)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A few states still allow their own moving expense deduction, even though the federal deduction is suspended. California, for example, still allows it for most taxpayers. Check your new state&#39;s tax rules to see if you qualify.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One thing that <em>can</em> help: if your employer reimburses your moving expenses, that money is generally treated as <strong>taxable wages</strong>. However, some employers gross it up (add extra to cover the taxes), so ask your HR department before you plan your budget.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Remote Work Complication
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here&#39;s where things get messy for remote workers. If you take a remote job with a company based in State A, but you live and work in State B, <strong>both states might try to tax the same income</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Several states have what&#39;s called a <strong>&ldquo;convenience of the employer&rdquo; rule</strong>. These states &mdash; including New York, New Jersey, Pennsylvania, Delaware, Nebraska, and Arkansas &mdash; say that if you&#39;re working remotely for your employer&#39;s convenience (not necessity), you owe taxes to the state where your employer is based, even if you&#39;ve never set foot there.
      </p>

      <div
        style={{
          background: '#fff7ed',
          border: '1px solid #fed7aa',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          <strong>Example:</strong> You live in{' '}
          <a href="/connecticut" style={{ color: '#2563eb', textDecoration: 'underline' }}>Connecticut</a>{' '}
          and work remotely for a company headquartered in New York City. New York considers your remote work done for your employer&#39;s convenience, so New York taxes your income. Connecticut also taxes your income as a resident. You get a Connecticut credit for taxes paid to New York &mdash; but only up to the Connecticut rate. If New York&#39;s rate is higher, you end up paying New York&#39;s higher rate.
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you&#39;re fully remote and your employer lets you work from anywhere, check whether your company&#39;s home state has a convenience rule before you decide where to live. Moving to a no-income-tax state like{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> or{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>{' '}
        won&#39;t save you state taxes if your employer is based in New York and you&#39;re covered by the convenience rule.
      </p>

      {/* Section 6 - Worked Example 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Moving from California to Texas
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Say you earn $80,000 a year and move from{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> to{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> on July 1. You earned $40,000 in each state (exactly half the year in each). Here&#39;s a rough breakdown of your state income taxes:
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
              ['California income (Jan–Jun)', '$40,000'],
              ['California state income tax owed', '~$1,100'],
              ['California SDI withheld (1.1%)', '~$440'],
              ['Texas income (Jul–Dec)', '$40,000'],
              ['Texas state income tax owed', '$0'],
              ['Total state tax for the year', '~$1,540'],
            ].map(([label, value], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{value}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>vs. Full Year in California</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>~$3,800 saved</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        By moving to Texas mid-year, you cut your state tax bill roughly in half compared to staying in California all year. And every year after the move, you save the full California tax burden &mdash; which at $80,000 can be $3,500 to $5,000 per year.
      </p>

      {/* Section 7 - Worked Example 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Moving from Texas to New York
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Now flip it. You move from Texas to{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a> on July 1 for a $80,000 salary. The tax picture looks quite different:
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
              ['Texas income (Jan–Jun)', '$40,000'],
              ['Texas state income tax', '$0'],
              ['New York income (Jul–Dec)', '$40,000'],
              ['New York state income tax owed', '~$2,200'],
              ['New York City tax (if NYC)', '~$1,400'],
              ['Total state/city tax', '~$3,600'],
            ].map(([label, value], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{value}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef2f2' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>vs. Full Year in Texas</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>+$3,600 extra tax</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        And that&#39;s just for the partial year. A full year in New York City on an $80,000 salary can cost you over $7,000 in combined state and city income taxes that you paid nothing on in Texas. If your new employer is paying enough to cover that gap &mdash; great. If not, factor it into your salary negotiation before you accept the offer.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Nine No-Income-Tax States: Why They&#39;re Popular Destinations
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have flexibility about where you land, relocating to one of the nine states with no income tax means every dollar you earn above federal taxes stays in your pocket. Those states are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Income Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Note</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['/texas', 'Texas', '0%', 'High property taxes'],
              ['/florida', 'Florida', '0%', 'Popular with retirees'],
              ['/nevada', 'Nevada', '0%', 'No inheritance tax either'],
              ['/washington', 'Washington', '0%', 'Capital gains tax enacted 2023'],
              ['/wyoming', 'Wyoming', '0%', 'Lowest overall tax burden'],
              ['/south-dakota', 'South Dakota', '0%', 'No personal income or corp tax'],
              ['/alaska', 'Alaska', '0%', 'No sales tax statewide either'],
              ['/new-hampshire', 'New Hampshire', '0%', 'Taxes interest & dividends only'],
              ['/tennessee', 'Tennessee', '0%', 'Former tax on dividends repealed'],
            ].map(([href, state, rate, note], i) => (
              <tr key={state as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                  <a href={href as string} style={{ color: '#2563eb', textDecoration: 'underline' }}>{state as string}</a>
                </td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{rate as string}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{note as string}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Keep in mind that these states make up their revenue in other ways. Texas has some of the highest property taxes in the country. Washington has a capital gains tax on gains over $262,000. Nevada and Florida rely on tourism-related sales taxes. Zero income tax doesn&#39;t mean zero total tax burden &mdash; but for W-2 employees, it&#39;s usually a clear win.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-tax-burden/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Tax Burden Rankings)
        </a>
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Prove You&#39;ve Really Moved (Especially Out of High-Tax States)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some states &mdash; especially New York, California, and Illinois &mdash; are aggressive about auditing people who claim to have moved out. If you leave a high-tax state and that state believes you still have a &#34;domicile&#34; there, they can continue taxing you.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To protect yourself, take these steps when you move:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Update your driver&#39;s license</strong> to your new state as soon as possible. This is one of the strongest signals of a real move.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Register to vote</strong> in your new state. Voter registration is another key indicator states look for.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Change your address</strong> with banks, credit cards, brokerages, and the IRS. File IRS Form 8822 if needed.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Update your W-4</strong> with your employer to change the state withholding to your new state. Don&#39;t let old-state withholding continue past your move date.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Count your days carefully</strong>. If you spend more than 183 days in your old state during the year, many states will try to claim you as a full-year resident.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Keep records</strong>. Credit card statements, EZ-pass logs, gym memberships, and utility bills can all be used to establish where you actually lived day to day.
        </li>
      </ul>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Checklist: Tax Steps When You Relocate for Work
      </h2>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <ul style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#1e293b', margin: 0, paddingLeft: '1.5rem' }}>
          <li>Note your exact move date &mdash; you&#39;ll need it for both state returns</li>
          <li>Update your address with your employer so payroll withholds the right state</li>
          <li>Get a new driver&#39;s license in your new state within 30&ndash;60 days</li>
          <li>Register to vote in your new state</li>
          <li>Update your address with banks, brokerages, and the IRS (Form 8822)</li>
          <li>Check whether your old state has a convenience rule for remote work</li>
          <li>Ask your employer if moving expense reimbursements are grossed up for taxes</li>
          <li>File part-year returns in both states &mdash; tax software like TurboTax or H&amp;R Block can help</li>
          <li>Claim your new state&#39;s credit for taxes paid to the old state, if applicable</li>
          <li>Keep records of where you actually spent your days during the year</li>
        </ul>
      </div>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Your New State Affects Your Monthly Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Once you&#39;ve fully established residency in your new state, your recurring take-home pay will reflect that state&#39;s tax rules. The difference can be significant. Here&#39;s a quick comparison of monthly take-home pay on an $80,000 salary across several popular destination states for job movers:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Est. Monthly Take-Home</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Income Tax</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['/texas', 'Texas', '$4,947', '0%'],
              ['/florida', 'Florida', '$4,947', '0%'],
              ['/colorado', 'Colorado', '$4,712', '4.40%'],
              ['/georgia', 'Georgia', '$4,651', '5.49%'],
              ['/illinois', 'Illinois', '$4,638', '4.95%'],
              ['/ohio', 'Ohio', '$4,656', '3.99%'],
              ['/new-york', 'New York', '$4,412', '6.85%'],
              ['/california', 'California', '$4,345', '6.00%+'],
            ].map(([href, state, monthly, rate], i) => (
              <tr key={state as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0' }}>
                  <a href={href as string} style={{ color: '#2563eb', textDecoration: 'underline' }}>{state as string}</a>
                </td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{monthly as string}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate as string}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The difference between Texas and California at $80,000 is about <strong>$602 per month</strong>, or $7,224 per year &mdash; just from the state income tax. Use the free paycheck calculator at the top of this page to run the exact numbers for your salary and filing situation.
      </p>

      {/* Conclusion */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Moving for a job is one of the biggest financial decisions you can make &mdash; and state taxes are a significant part of the equation that is easy to overlook until your first paycheck arrives in the new state. The key points to remember:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>In the year you move, you likely file part-year returns in two states.</li>
        <li style={{ marginBottom: '0.5rem' }}>Income is generally taxed by the state where you earned it.</li>
        <li style={{ marginBottom: '0.5rem' }}>The federal moving expense deduction is suspended for most workers through 2026.</li>
        <li style={{ marginBottom: '0.5rem' }}>Remote workers should check if their employer&#39;s state has a &#34;convenience of the employer&#34; rule.</li>
        <li style={{ marginBottom: '0.5rem' }}>High-tax states like New York and California may try to keep taxing you after you leave &mdash; document your move carefully.</li>
        <li style={{ marginBottom: '0.5rem' }}>The nine no-income-tax states offer a meaningful take-home pay advantage for W-2 workers.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your move involves a high-tax state on either end, it may be worth consulting a CPA or tax professional who specializes in multi-state returns. The cost of getting it right is much lower than the cost of an audit.
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
          See Your Take-Home Pay in Any State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and select your new state to see exactly how your paycheck changes after the move.
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
          <a href="https://www.irs.gov/taxtopics/tc455" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 455: Moving Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc763" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 763: Part-Year Residency</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8822" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 8822: Change of Address</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.tax.ny.gov/pit/file/nonresident_faqs.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>New York State Department of Taxation &mdash; Nonresident FAQs</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-tax-burden/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Tax Burden Rankings</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/remote-work-taxes/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; Remote Work and State Taxes</a>
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
