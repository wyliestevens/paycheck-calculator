import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Interest Income Is Taxed in 2026: Savings Accounts, CDs, and Bonds',
  description:
    'Interest income from savings accounts, CDs, and bonds is taxed as ordinary income at your marginal rate — but some interest is tax-free or state-exempt. Full 2026 guide with worked examples.',
  alternates: { canonical: '/blog/interest-income-taxes-2026' },
  keywords:
    'interest income taxes 2026, how is interest income taxed, savings account tax, CD interest tax, Form 1099-INT, municipal bond tax-free, Treasury interest state exempt, I bond taxes',
  openGraph: {
    title: 'How Interest Income Is Taxed in 2026: Savings Accounts, CDs, and Bonds',
    description:
      'Interest income is taxed as ordinary income — but some bonds are federally tax-free or state-exempt. Full 2026 breakdown.',
  },
}

export default function InterestIncomeTaxes2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Interest income tax illustration showing savings account growing with tax implications"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Bank building */}
          <rect x="40" y="90" width="90" height="75" rx="4" fill="rgba(255,255,255,0.15)" />
          <rect x="50" y="110" width="15" height="25" rx="2" fill="rgba(255,255,255,0.3)" />
          <rect x="72" y="110" width="15" height="25" rx="2" fill="rgba(255,255,255,0.3)" />
          <rect x="94" y="110" width="15" height="25" rx="2" fill="rgba(255,255,255,0.3)" />
          <rect x="40" y="82" width="90" height="12" rx="2" fill="rgba(255,255,255,0.25)" />
          <polygon points="85,60 135,82 35,82" fill="rgba(255,255,255,0.2)" />
          <text x="85" y="78" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">BANK</text>
          {/* Arrow */}
          <line x1="155" y1="128" x2="205" y2="128" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="205,121 218,128 205,135" fill="rgba(255,255,255,0.5)" />
          {/* Interest rate bubble */}
          <circle cx="270" cy="110" r="38" fill="rgba(255,255,255,0.18)" />
          <text x="270" y="100" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif" fontWeight="600">INTEREST</text>
          <text x="270" y="120" textAnchor="middle" fontSize="22" fill="#fff" fontFamily="monospace" fontWeight="700">4.8%</text>
          <text x="270" y="138" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">APY</text>
          {/* Arrow 2 */}
          <line x1="315" y1="110" x2="355" y2="110" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="355,103 368,110 355,117" fill="rgba(255,255,255,0.5)" />
          {/* IRS / Taxed box */}
          <rect x="375" y="72" width="180" height="76" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="465" y="95" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif" fontWeight="600">ORDINARY INCOME</text>
          <text x="465" y="116" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">10% – 37%</text>
          <text x="465" y="136" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">at your marginal rate</text>
          {/* Bottom label */}
          <text x="300" y="178" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Form 1099-INT issued at $10+ in interest</text>
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
        How Interest Income Is Taxed in 2026: Savings Accounts, CDs, and Bonds
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published October 6, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        With high-yield savings accounts paying 4% or more and CDs locking in attractive rates, millions of Americans are earning meaningful interest income in 2026. But that money doesn&rsquo;t arrive tax-free. Unlike qualified dividends or long-term capital gains &mdash; which get preferential lower rates &mdash; <strong>interest income is taxed as ordinary income</strong> at your regular marginal tax rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That means if you&rsquo;re in the 22% federal bracket, every dollar of interest you earn is taxed at 22%. If you&rsquo;re in the 32% bracket, at 32%. The IRS treats it exactly like wages from a job.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There are, however, important exceptions &mdash; some interest is partially or fully tax-free &mdash; and smart strategies to minimize your tax bill. Here is the complete 2026 guide.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Counts as Interest Income?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS defines taxable interest broadly. According to{' '}
        <a href="https://www.irs.gov/taxtopics/tc403" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Topic 403
        </a>
        , you must report interest income from:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Savings accounts and money market accounts</li>
        <li style={{ marginBottom: '0.5rem' }}>Certificates of deposit (CDs)</li>
        <li style={{ marginBottom: '0.5rem' }}>US Treasury bills, notes, and bonds</li>
        <li style={{ marginBottom: '0.5rem' }}>Corporate bonds</li>
        <li style={{ marginBottom: '0.5rem' }}>US savings bonds (Series EE and Series I)</li>
        <li style={{ marginBottom: '0.5rem' }}>Interest from loans you made to others</li>
        <li style={{ marginBottom: '0.5rem' }}>Bank account bonuses and sign-up bonuses paid in cash</li>
        <li style={{ marginBottom: '0.5rem' }}>Seller-financed mortgage interest (if you sold a home and carried the loan)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There are also important <strong>exclusions</strong> &mdash; interest that is fully or partially tax-free &mdash; which we will cover below. The most notable are municipal bond interest (generally federal-tax-free) and US Treasury interest (state and local tax-exempt).
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Interest Income Is Taxed at the Federal Level
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        All taxable interest income is added to your other ordinary income &mdash; wages, self-employment income, alimony received &mdash; and taxed at your <strong>marginal federal income tax rate</strong>. In 2026, the seven federal brackets are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Single Filer</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Married Filing Jointly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', 'Up to $11,925', 'Up to $23,850'],
              ['12%', '$11,926 – $48,475', '$23,851 – $96,950'],
              ['22%', '$48,476 – $103,350', '$96,951 – $206,700'],
              ['24%', '$103,351 – $197,300', '$206,701 – $394,600'],
              ['32%', '$197,301 – $250,525', '$394,601 – $501,050'],
              ['35%', '$250,526 – $626,350', '$501,051 – $751,600'],
              ['37%', 'Over $626,350', 'Over $751,600'],
            ].map(([rate, single, mfj], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#0891b2', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', color: '#475569', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem' }}>{single}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', color: '#475569', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem' }}>{mfj}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Source:{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          IRS Revenue Procedure 2025-61
        </a>
        . Taxable income is after the standard deduction ($15,000 single / $30,000 MFJ for 2026).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note that these are <em>marginal</em> rates &mdash; only the slice of income that falls within each bracket is taxed at that rate. If you earn $75,000 in wages and $3,500 in interest, the interest is taxed at the rate that applies to your top dollars of income, not on all $78,500 at once.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Form 1099-INT: The Document That Reports Your Interest
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Any bank, credit union, or brokerage that pays you <strong>$10 or more in interest</strong> during the year must send you a{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1099-int" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1099-INT
        </a>{' '}
        by January 31 of the following year. The IRS also gets a copy &mdash; so they already know about the income before you file.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The key boxes on Form 1099-INT are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 1 &mdash; Interest Income:</strong> Ordinary taxable interest (savings accounts, CDs, corporate bonds)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 3 &mdash; Interest on US Savings Bonds and Treasuries:</strong> Still federally taxable, but reported separately because it&rsquo;s exempt from state/local tax</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 8 &mdash; Tax-Exempt Interest:</strong> Municipal bond interest (not included in your federal taxable income)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 4 &mdash; Federal Tax Withheld:</strong> Backup withholding (rare, at 24%) if you failed to provide a Social Security number</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important: even if you earn <em>less</em> than $10 in interest from one institution, you are still legally required to report it on your tax return. The $10 threshold is only for the payer&rsquo;s reporting requirement, not yours.
      </p>

      {/* Section 4 - Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $3,500 in Interest at $75,000 Salary (Single Filer)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say you earn a $75,000 salary and also earned $3,500 in interest from a high-yield savings account and a 12-month CD. Here is how the interest is taxed for 2026:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        <div style={{ marginBottom: '0.5rem' }}>Wages: $75,000</div>
        <div style={{ marginBottom: '0.5rem' }}>Interest income: +$3,500</div>
        <div style={{ marginBottom: '0.5rem' }}>Gross income: $78,500</div>
        <div style={{ marginBottom: '0.5rem' }}>Standard deduction (single): &minus;$15,000</div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem', fontWeight: 700 }}>
          Taxable income: $63,500
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        At $63,500 in taxable income, a single filer is in the 22% bracket. The $3,500 in interest income sits entirely within the 22% bracket, so:
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
              ['Interest income earned', '$3,500'],
              ['Federal marginal rate', '22%'],
              ['Federal tax on interest', '$770'],
              ['State tax (assume ~5% avg)', '$175'],
              ['After-tax interest income', '$2,555'],
              ['Effective interest tax rate', '26.9%'],
            ].map(([label, value], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 5 ? '#dc2626' : '#475569', fontWeight: i === 4 || i === 5 ? 700 : 400 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Of the $3,500 in interest earned, you keep approximately <strong>$2,555 after federal and state taxes</strong>. Your $3,500 came from a 4.8% APY on a $72,917 savings balance &mdash; but the after-tax yield is effectively about 3.5%.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is why knowing your <strong>tax-equivalent yield</strong> matters when comparing interest-bearing accounts and bonds. A 4% yield in the 22% bracket has a tax-equivalent yield of 4% &divide; (1 &minus; 0.22) = <strong>5.13%</strong> &mdash; meaning a tax-free investment would need to pay 5.13% to beat it.
      </p>

      {/* Section 5 - Treasury Securities */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        US Treasury Securities: Federally Taxable, State Tax-Exempt
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Interest from US government securities &mdash; Treasury bills (T-bills), Treasury notes, Treasury bonds, and TIPS (Treasury Inflation-Protected Securities) &mdash; is <strong>subject to federal income tax</strong> but <strong>exempt from all state and local income taxes</strong>. This is established by law under{' '}
        <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section3124&num=0&edition=prelim" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          31 U.S.C. &sect;3124
        </a>
        , which prohibits states from taxing US government obligations.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This makes Treasuries especially attractive for residents of high-tax states. For a California resident in the 9.3% state bracket, a 5% Treasury yield has a state-tax-adjusted yield of approximately 5.47% compared to a taxable savings account at the same 5% rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Treasury interest appears in <strong>Box 3</strong> of Form 1099-INT. When you file your state return, you subtract this amount from your federal adjusted gross income so your state cannot tax it.{' '}
        <a href="https://www.treasurydirect.gov/research-center/research/fiscal-service/treasury-direct/faqs/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (TreasuryDirect.gov)
        </a>
      </p>

      {/* Section 6 - Municipal Bonds */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Municipal Bonds: Generally Federal Tax-Free
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Interest from <strong>municipal bonds</strong> (bonds issued by states, cities, counties, and other local government entities) is generally <strong>exempt from federal income tax</strong>. If you hold municipal bonds issued in your own state, the interest is typically exempt from that state&rsquo;s income tax as well &mdash; making it what investors call <em>triple-tax-free</em> if also exempt from local taxes.{' '}
        <a href="https://www.irs.gov/taxtopics/tc403" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 403)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        There are important exceptions &mdash; some municipal bond interest is taxable:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Private activity bonds</strong> may be subject to the Alternative Minimum Tax (AMT)</li>
        <li style={{ marginBottom: '0.5rem' }}>Bonds from <em>another</em> state are usually still federal-tax-free but taxable in your home state</li>
        <li style={{ marginBottom: '0.5rem' }}>Arbitrage bonds and certain other categories are fully taxable</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The tax-free nature of munis is why their yields appear lower than comparable taxable bonds. A muni bond yielding 3.2% is equivalent to a taxable bond yielding 4.10% for someone in the 22% bracket &mdash; and 4.71% for someone in the 32% bracket. The higher your tax bracket, the more valuable the tax exemption.
      </p>

      {/* Section 7 - Savings Bonds */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        US Savings Bonds: I Bonds and EE Bonds
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The US Treasury issues two types of savings bonds with special tax rules:{' '}
        <a href="https://www.treasurydirect.gov/savings-bonds/i-bonds/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Series I Bonds
        </a>{' '}
        and{' '}
        <a href="https://www.treasurydirect.gov/savings-bonds/ee-bonds/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Series EE Bonds
        </a>
        . Both share the same tax treatment:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Federal taxable:</strong> Yes &mdash; interest is ordinary income taxed at your marginal rate</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>State and local tax:</strong> Exempt (same rule as other Treasuries)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>When taxed:</strong> You can defer reporting interest until you redeem the bond or it matures (typically after 30 years), or you can elect to report it annually</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The deferral option is the key benefit of savings bonds over a regular savings account. With an I bond, all the interest compounds tax-deferred until you cash it in &mdash; and you choose when. This lets you control the year the income hits your return.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also a <strong>education savings bond exclusion</strong> under{' '}
        <a href="https://www.irs.gov/taxtopics/tc310" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Topic 310
        </a>
        . If you redeem EE or I bonds and use the proceeds for qualified higher education expenses, the interest may be fully or partially excluded from federal income tax &mdash; subject to income limits ($96,800 for single filers in 2026; phased out above that).
      </p>

      {/* Section 8 - State Taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How States Tax Interest Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states that have an income tax follow the federal rules closely: ordinary interest income is taxed as ordinary income at your state&rsquo;s rate. However, there are notable exceptions:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Interest Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal Taxable?</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Taxable?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Savings / CD / Money market', 'Yes', 'Usually yes'],
              ['Corporate bonds', 'Yes', 'Usually yes'],
              ['US Treasury securities', 'Yes', 'No (exempt by federal law)'],
              ['US Savings Bonds (EE/I)', 'Yes (deferred)', 'No (exempt by federal law)'],
              ['Municipal bonds — own state', 'No', 'Usually no'],
              ['Municipal bonds — other state', 'No', 'Usually yes'],
              ['Private activity bonds (AMT)', 'Sometimes', 'Varies'],
            ].map(([type, fed, state], i) => (
              <tr key={type} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{type}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: fed.startsWith('No') ? '#059669' : fed === 'Yes' ? '#dc2626' : '#d97706', fontWeight: 600 }}>{fed}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: state.startsWith('No') ? '#059669' : state.startsWith('Yes') || state.startsWith('Usually yes') ? '#dc2626' : '#d97706', fontWeight: 600 }}>{state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Nine states have no income tax at all (Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming), so state taxation of interest is not an issue there. New Hampshire taxes interest and dividend income at a flat 3% through 2026.
      </p>

      {/* Section 9 - How to Report */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Report Interest Income on Your Tax Return
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Interest income is reported on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-schedule-b-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Schedule B (Form 1040)
        </a>
        . You are <strong>required to file Schedule B</strong> if your total taxable interest income exceeds $1,500 for the year. If it is $1,500 or less, you can simply enter it directly on Line 2b of Form 1040 without filing Schedule B.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        On Schedule B, you list each payer and the amount:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Part I</strong> &mdash; Interest Income: List every 1099-INT payer with Box 1 amounts. Total goes to Form 1040, Line 2b.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Tax-exempt interest</strong> (Box 8 of 1099-INT) is reported on Form 1040, Line 2a &mdash; it is reported for informational purposes but does not add to your taxable income.</li>
        <li style={{ marginBottom: '0.5rem' }}>Treasury/savings bond interest (Box 3 of 1099-INT) is included in the Schedule B total but noted separately so you can exclude it on your state return.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most tax software (TurboTax, H&amp;R Block, FreeTaxUSA) handles this automatically when you import your 1099-INT forms.
      </p>

      {/* Section 10 - Strategies */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Strategies to Reduce Tax on Interest Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You cannot eliminate the federal tax on ordinary interest income &mdash; but you can reduce it with smart planning:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        1. Hold Interest-Bearing Accounts in a Tax-Advantaged Account
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        High-yield savings accounts, CDs, and bond funds held inside a <strong>traditional IRA, Roth IRA, or 401(k)</strong> generate no current taxable interest income. The interest compounds tax-deferred (traditional accounts) or tax-free (Roth). This is one of the most powerful tax advantages available. You are essentially converting ordinary income into tax-deferred growth.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        2. Consider Municipal Bonds if You Are in a High Bracket
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For investors in the 32%, 35%, or 37% brackets, the federal tax exemption on municipal bonds often makes them more attractive on an after-tax basis than a comparable taxable bond. Calculate the <strong>tax-equivalent yield</strong>: Tax-Equivalent Yield = Muni Yield &divide; (1 &minus; Your Federal Rate). At 37%, a 4% muni bond is equivalent to a 6.35% taxable bond.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        3. Defer I Bond Interest Until a Lower-Income Year
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Since I bond and EE bond holders can defer reporting interest until redemption, you can strategically redeem them in a year when your income &mdash; and therefore your tax bracket &mdash; is lower. For example, in the first year of retirement before required minimum distributions (RMDs) begin, or in a year with significant deductible losses.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        4. Use Treasuries to Eliminate State Tax
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In high-tax states, shifting some savings into Treasury bills or Treasury money market funds instead of bank savings accounts can save 5% to 13% on the interest earned. If a bank savings account and a Treasury money market fund both yield 4.8%, the Treasury yield is worth more in a high-tax state.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        5. Time CD Maturities to Match Your Tax Situation
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        CD interest is generally taxable in the year it is credited or available to you, even if you do not withdraw it. But you can plan CD ladders so large maturities land in years when your income is lower &mdash; like during a sabbatical, a year off, or early retirement. Note: for CDs longer than one year, you typically must report interest annually as it accrues (Original Issue Discount rules apply in some cases).
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Interest income is one of the least tax-efficient types of investment income &mdash; taxed as ordinary income at rates up to 37%, versus 0%, 15%, or 20% for long-term capital gains and qualified dividends. That does not mean you should avoid earning interest, but it does mean you should be thoughtful about <em>where</em> you hold interest-bearing assets.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most people, the right approach is: hold stocks (which generate dividends and capital gains) in taxable accounts, and hold CDs, bonds, and savings in tax-advantaged retirement accounts where possible. When you must hold interest-bearing assets taxably, consider Treasuries (state-exempt) or munis (federally exempt) based on your bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Whatever you earn, report it accurately. The IRS already has a copy of your 1099-INT forms before you file.
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
          Calculate your take-home pay including wages, federal tax, state tax, and FICA &mdash; state by state, updated for 2026.
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
          <a href="https://www.irs.gov/taxtopics/tc403" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 403: Interest Received</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1099-int" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 1099-INT</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-schedule-b-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Schedule B (Form 1040)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc310" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 310: Interest on US Savings Bonds</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Inflation Adjustments for Tax Year 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.treasurydirect.gov/savings-bonds/i-bonds/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>TreasuryDirect.gov &mdash; Series I Savings Bonds</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.treasurydirect.gov/savings-bonds/ee-bonds/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>TreasuryDirect.gov &mdash; Series EE Savings Bonds</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section3124&num=0&edition=prelim" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>31 U.S.C. &sect;3124 &mdash; Exemption from Taxation</a>
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
