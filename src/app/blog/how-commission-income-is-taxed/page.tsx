import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'How Commission Income Is Taxed in 2026: Withholding, Rates & Worked Examples' },
  description:
    'Commission income is ordinary income taxed at your marginal rate — but withholding rules differ. Learn the flat 22% method, aggregate method, and exact math at $75,000.',
  alternates: { canonical: '/blog/how-commission-income-is-taxed' },
  keywords:
    'how commission income is taxed 2026, commission tax rate, commission withholding, supplemental wages, 22 percent commission tax, commission take home pay, sales commission taxes',
  openGraph: {
    type: 'article',
    url: '/blog/how-commission-income-is-taxed',
    images: [{ url: '/og/blog/how-commission-income-is-taxed', width: 1200, height: 630 }],
    title: 'How Commission Income Is Taxed in 2026: Withholding, Rates & Worked Examples',
    description:
      'Commission income is ordinary income — but withholding works differently. Full guide with flat rate vs. aggregate method and a $75,000 worked example.',
  },
}

export default function HowCommissionIncomeTaxed() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className="sep">/</span>
        <a href="/blog">Guides</a>
      </nav>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Commission income tax illustration showing base salary plus commission and withholding breakdown"
        >
          <rect width="600" height="200" rx="12" fill="#ea580c" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Left: base salary bar */}
          <rect x="50" y="70" width="70" height="80" rx="4" fill="rgba(255,255,255,0.25)" />
          <text x="85" y="62" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Base Pay</text>
          <text x="85" y="118" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="monospace">$50K</text>
          {/* Plus sign */}
          <text x="144" y="116" textAnchor="middle" fontSize="24" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">+</text>
          {/* Commission bar */}
          <rect x="162" y="88" width="70" height="62" rx="4" fill="rgba(255,255,255,0.35)" />
          <text x="197" y="80" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Commission</text>
          <text x="197" y="126" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="monospace">$25K</text>
          {/* Equals */}
          <text x="258" y="116" textAnchor="middle" fontSize="24" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">=</text>
          {/* Total box */}
          <rect x="278" y="60" width="88" height="90" rx="6" fill="rgba(255,255,255,0.22)" />
          <text x="322" y="82" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Total Income</text>
          <text x="322" y="108" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="monospace">$75K</text>
          <text x="322" y="140" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Ordinary Income</text>
          {/* Arrow */}
          <line x1="376" y1="105" x2="418" y2="105" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
          <polygon points="418,97 434,105 418,113" fill="rgba(255,255,255,0.55)" />
          {/* Tax breakdown */}
          <rect x="440" y="55" width="132" height="100" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="506" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Federal: $8,114</text>
          <text x="506" y="92" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">FICA: $5,738</text>
          <line x1="454" y1="100" x2="562" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="506" y="119" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fed7aa" fontFamily="sans-serif">Keep: $61,148</text>
          <text x="506" y="145" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">~81.5% take-home</text>
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
        How Commission Income Is Taxed in 2026
      </h1>

      <ArticleMeta slug="how-commission-income-is-taxed" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Commission income is taxed exactly the same as wages &mdash; it is <strong>ordinary income</strong> subject to federal income tax, Social Security, and Medicare. There is no special &ldquo;commission tax rate.&rdquo; A dollar earned in commissions is taxed identically to a dollar earned as salary.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Where commissions get confusing is <strong>withholding</strong>. The IRS classifies commissions as <em>supplemental wages</em>, which allows employers to withhold federal income tax in a way that looks different from a regular paycheck. That 22% figure you may have heard about? It is a withholding shortcut &mdash; not your actual tax rate. Here is how all of it works.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Commission Income Is Ordinary Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS does not have a special category for commissions. Whether you earn $5,000 closing a sale or $100,000 in annual commissions, that money is treated as <strong>ordinary income</strong> and flows into your total wages for the year. It is taxed at your marginal federal income tax rate, exactly like your base salary.{' '}
        <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15 &mdash; Employer&rsquo;s Tax Guide)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 2026 federal income tax brackets for a single filer are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income (Single)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', 'Up to $12,400'],
              ['12%', '$12,401 &ndash; $50,400'],
              ['22%', '$50,401 &ndash; $105,700'],
              ['24%', '$105,701 &ndash; $201,775'],
              ['32%', '$201,776 &ndash; $256,225'],
              ['35%', '$256,226 &ndash; $640,600'],
              ['37%', 'Over $640,600'],
            ].map(([rate, range], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', fontFamily: "'JetBrains Mono', monospace" }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }} dangerouslySetInnerHTML={{ __html: range }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your commission income does not jump you into a higher bracket on its own &mdash; it simply adds to your total income for the year. The bracket rates are <em>marginal</em>, meaning each rate only applies to income within that band. Your commission could fall partly in the 22% bracket and partly in the 24% bracket if you are already in that range.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA taxes also apply to commissions in full &mdash; <strong>6.2%</strong> for Social Security (up to the $184,500 wage base) and <strong>1.45%</strong> for Medicare with no cap. There is no exclusion for supplemental wages when it comes to FICA.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Supplemental Wages?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS defines <strong>supplemental wages</strong> as compensation paid in addition to an employee&rsquo;s regular wages. Commissions are the most common form, but the category also includes bonuses, overtime, severance, back pay, and accumulated sick pay.{' '}
        <a href="https://www.irs.gov/taxtopics/tc753" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 753: Form W-4 &mdash; Employee&rsquo;s Withholding Certificate)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The supplemental wage designation matters because it gives employers two options for how to <em>withhold</em> federal income tax &mdash; not how much tax you ultimately owe, just how much gets held back from each check.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Two Withholding Methods: Flat Rate vs. Aggregate
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When an employer pays your commission separately from your regular paycheck, they can choose between two IRS-approved withholding methods:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Method 1: Flat 22% Withholding Rate
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most common approach. The employer withholds a flat <strong>22% federal income tax</strong> from the commission check, no matter what bracket the employee is in. This is sometimes called the <em>optional flat rate method</em>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The flat 22% is just a withholding estimate. If your true marginal rate is 12%, you will likely get a refund when you file. If your true marginal rate is 32%, you may owe more at tax time. The withholding method does not change what you ultimately pay.
      </p>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Note: If your total supplemental wages from one employer exceed $1 million in a calendar year, the excess above $1 million is withheld at <strong>37%</strong>.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Method 2: Aggregate Method
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The employer adds the commission to the employee&rsquo;s most recent regular wages, calculates withholding on the combined amount as if it were one paycheck, then subtracts the withholding already taken from the regular paycheck. The remainder is withheld from the commission.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This method tends to withhold more than the flat rate because it pushes the combined amount into a higher bracket for that pay period. However, it is technically more accurate if your commissions are substantial relative to your base salary.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When an employer pays commission and regular wages together on the same check (without identifying them separately), the aggregate method is required by default.
      </p>

      {/* Comparison table */}
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Flat 22% Method</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Aggregate Method</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Requires separate check?', 'Yes', 'No (can be combined)'],
              ['Withholding rate', 'Flat 22% federal', 'Marginal rate on combined wages'],
              ['Typical result for 12% bracket', 'Over-withheld (refund likely)', 'More accurate'],
              ['Typical result for 32% bracket', 'Under-withheld (may owe)', 'More accurate'],
              ['Employer choice?', 'Yes (if paid separately)', 'Required if combined'],
              ['FICA applies?', 'Yes, same either way', 'Yes, same either way'],
            ].map(([label, flat, agg], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{flat}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{agg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $50,000 Salary + $25,000 in Commissions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s work through the numbers for a single filer in 2026 who earns a $50,000 base salary and $25,000 in annual commissions &mdash; for a total of $75,000 in gross income. No pre-tax deductions (like a 401k) in this example.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Calculate Taxable Income
      </h3>

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
          lineHeight: 1.8,
        }}
      >
        Gross income:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$75,000<br />
        Standard deduction:&nbsp;&nbsp;&nbsp;&minus;$16,100<br />
        <strong>Taxable income:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$58,900</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Calculate Federal Income Tax
      </h3>

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
          lineHeight: 1.8,
        }}
      >
        10% &times; $12,400&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $1,240.00<br />
        12% &times; ($50,400 &minus; $12,400)&nbsp;&nbsp;&nbsp;&nbsp;= $4,560.00<br />
        22% &times; ($58,900 &minus; $50,400)&nbsp;&nbsp;&nbsp;&nbsp;= $1,870.00<br />
        <strong>Total federal income tax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $7,670.00</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 3: Calculate FICA
      </h3>

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
          lineHeight: 1.8,
        }}
      >
        Social Security: $75,000 &times; 6.2%&nbsp;&nbsp;&nbsp;= $4,650.00<br />
        Medicare:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$75,000 &times; 1.45%&nbsp;&nbsp;= $1,087.50<br />
        <strong>Total FICA:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $5,737.50</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 4: Full Summary
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross income (base + commission)', '$75,000.00', false],
              ['Federal income tax', '−$7,670.00', true],
              ['Social Security (6.2%)', '−$4,650.00', true],
              ['Medicare (1.45%)', '−$1,087.50', true],
              ['State income tax', 'Varies by state', false],
            ].map(([item, amount, isRed], i) => (
              <tr key={String(item)} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{item}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isRed ? '#dc2626' : '#475569' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#fff7ed' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Take-home (federal + FICA only)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$61,592.50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The effective federal income tax rate is just <strong>10.23%</strong> ($7,670 &divide; $75,000) &mdash; well below the 22% marginal rate, because lower rates apply to the first $50,400 of taxable income. Adding state income tax will reduce take-home further. In a no-income-tax state like <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>, that $61,148 is close to the final number. In a high-tax state like California, expect to keep roughly $54,000&ndash;$56,000. Use the <a href="/california/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>California $75,000 salary page</a> or the <a href="/texas/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas $75,000 salary page</a> to see the precise breakdown.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What the 22% Withholding Looks Like in Practice
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Imagine your employer pays your $25,000 in annual commissions as four quarterly checks of $6,250 each. Under the flat rate method, here is what happens to each commission check:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Deduction</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount (per $6,250 check)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal income tax (flat)', '22.0%', '$1,375.00'],
              ['Social Security', '6.2%', '$387.50'],
              ['Medicare', '1.45%', '$90.63'],
            ].map(([item, rate, amount], i) => (
              <tr key={item} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{item}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#fff7ed' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total withheld</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$1,853.13</td>
            </tr>
            <tr style={{ background: '#f0fdf4' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '1px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Net (take-home per check)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '1px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$4,396.87</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That $1,375 in federal income tax withheld is an <em>estimate</em>. Since this employee&rsquo;s true effective rate on commissions is closer to 17&ndash;22% depending on state and deductions, the 22% flat withholding is a reasonable approximation &mdash; and any over-withholding comes back as a tax refund in April.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Commission Income and the Annual Tax Reconciliation
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Withholding is always an estimate. At tax time you calculate your actual liability based on total annual income, standard (or itemized) deductions, and any credits. Here is what the reconciliation looks like for our example:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>True federal tax owed:</strong> $7,670.00</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Withheld from base salary ($50K biweekly):</strong> approximately $3,820 (based on Publication 15-T tables)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Withheld from commissions ($25K &times; 22%):</strong> $5,500</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Total withheld:</strong> approximately $9,320</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Refund:</strong> approximately $1,650</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This employee is over-withheld because the 22% flat rate is higher than the 10&ndash;12% they pay on the bottom portion of their commission income. The extra withholding comes back as a refund &mdash; but if you&rsquo;d rather keep that money throughout the year, you can file a new W-4 claiming additional deductions or adjustments to reduce your regular paycheck withholding. Read more in our guide to <a href="/blog/how-to-calculate-federal-tax-withholding" style={{ color: '#2563eb', textDecoration: 'underline' }}>how federal tax withholding is calculated</a>.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        1099 Commission Income: Self-Employed Salespeople
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Independent sales agents and contractors who receive commission income on a Form 1099-NEC &mdash; rather than a W-2 &mdash; face a very different tax picture. Without an employer to share FICA, you pay the full <strong>15.3% self-employment tax</strong> on net commission income:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>12.4% Social Security (on the first $184,500 of net self-employment income)</li>
        <li style={{ marginBottom: '0.5rem' }}>2.9% Medicare (no cap)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On $75,000 in net 1099 commission income, a self-employed salesperson owes:
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
          lineHeight: 1.8,
        }}
      >
        Net SE income base: $75,000 &times; 92.35%* = $69,263<br />
        SE tax (15.3%): $69,263 &times; 15.3% = $10,597<br />
        Deduction for half SE tax: &minus;$5,299<br />
        Adjusted gross income: $69,701<br />
        Taxable income (less std. deduction): $54,701<br />
        Federal income tax: ~$6,860<br />
        <strong>Total taxes: ~$17,457 &mdash; 23.3% effective rate</strong>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1rem' }}>
        *Self-employment income is multiplied by 92.35% (= 1 &minus; 7.65%) before applying the SE tax rate, because half of SE tax is deductible.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That is more than $5,000 more in taxes than the W-2 employee in the earlier example earns on the same gross income. The difference is the employer&rsquo;s FICA contribution: W-2 employees effectively get half of their FICA paid by their employer. For a deep dive, see our guide to <a href="/blog/w2-vs-1099-taxes" style={{ color: '#2563eb', textDecoration: 'underline' }}>W-2 vs. 1099 taxes</a>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed salespeople also owe <strong>quarterly estimated taxes</strong> since no employer withholds for them. Underpayment penalties apply if quarterly payments are too low.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Self-Employment Tax)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Commission Income and Business Expense Deductions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For W-2 employees, unreimbursed business expenses &mdash; mileage, home office, client entertainment &mdash; are <strong>not deductible</strong> on federal taxes since the Tax Cuts and Jobs Act suspended the miscellaneous itemized deduction through 2025 (and it was further extended under current law). That means a W-2 salesperson who drives 20,000 miles for work and pays out of pocket cannot claim those expenses on their federal return.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, <strong>1099 independent contractors</strong> can deduct ordinary and necessary business expenses from their gross commission income before calculating self-employment tax. Common deductions include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Business mileage (2026 IRS rate: approximately 70 cents per mile &mdash; confirm with{' '}
          <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>IRS.gov</a>)</li>
        <li style={{ marginBottom: '0.5rem' }}>Phone and internet (business-use portion)</li>
        <li style={{ marginBottom: '0.5rem' }}>Home office (if exclusively used for business)</li>
        <li style={{ marginBottom: '0.5rem' }}>CRM software, sales tools, subscriptions</li>
        <li style={{ marginBottom: '0.5rem' }}>Samples and promotional materials</li>
        <li style={{ marginBottom: '0.5rem' }}>Health insurance premiums (self-employed deduction)</li>
        <li style={{ marginBottom: '0.5rem' }}>Contributions to a SEP-IRA or Solo 401(k)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If a 1099 salesperson has $75,000 in commissions and $10,000 in legitimate business deductions, the net income subject to self-employment tax falls to $65,000 &mdash; reducing both SE tax and income tax.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Taxes on Commission Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        States follow the federal rule: commissions are ordinary income, taxed at your state marginal rate. The difference in after-tax take-home between a high-tax and no-tax state can be significant. On $25,000 in annual commissions:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Approx. Marginal Rate at $75K</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Est. State Tax on $25K Commission</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Texas, Florida, Nevada', '0%', '$0'],
              ['Pennsylvania', '3.07%', '~$768'],
              ['North Carolina', '4.75%', '~$1,188'],
              ['Arizona', '2.5%', '~$625'],
              ['Illinois', '4.95%', '~$1,238'],
              ['New York', '~6.0%', '~$1,500'],
              ['California', '~9.3%', '~$2,325'],
            ].map(([state, rate, tax], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{tax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Rates are approximate and depend on the total taxable income in each state. Verify with your state&rsquo;s revenue department.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A California salesperson earning the same $75,000 keeps roughly $7,000&ndash;$8,000 less per year than their counterpart in Texas, purely due to state income tax. Use our state-specific calculators to see the exact difference: <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California paycheck calculator</a> vs. <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas paycheck calculator</a>.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Reduce Taxes on Commission Income
      </h2>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        1. Max Out Your 401(k) or IRA
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Pre-tax 401(k) contributions reduce your federal taxable income dollar for dollar. The 2026 employee contribution limit is <strong>$24,500</strong> ($32,500 if you are 50 or older). For a salesperson in the 22% bracket, maxing out a 401(k) saves <strong>$5,390</strong> in federal income tax alone &mdash; before considering state tax savings. Read our full guide on <a href="/blog/how-401k-contributions-affect-your-paycheck" style={{ color: '#2563eb', textDecoration: 'underline' }}>how 401(k) contributions affect your paycheck</a>.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        2. Adjust Your W-4
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer withholds 22% on commissions but your true marginal rate is lower, you are giving the IRS an interest-free loan. Filing an updated W-4 with a negative withholding adjustment on your regular paycheck can offset the over-withholding on commissions and keep more cash in your hands each month.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        3. Contribute to an HSA
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have a qualifying high-deductible health plan, HSA contributions are deductible above the line and reduce your AGI &mdash; which in turn reduces both income tax and, if you are self-employed, your self-employment tax base. The 2026 limit is <strong>$4,400</strong> for individuals, <strong>$8,750</strong> for families.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 969 &mdash; Health Savings Accounts)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        4. Time Large Commission Payments (1099 Contractors)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are an independent contractor, you generally control the invoice timing. Billing a large deal in January versus December can shift income into the following tax year &mdash; useful if you expect lower income next year or plan to make a large retirement contribution. Discuss timing strategies with a tax professional if commissions are a major part of your income.
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Commission income is taxed as ordinary income &mdash; no special rate, no special exemption. The 22% flat withholding rate you see on commission checks is just an IRS-approved shortcut for your employer, not your actual tax rate. Your real rate depends on your total annual income and tax bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For W-2 employees earning $75,000 (base + commission), the effective federal rate is about 10.8% &mdash; with another 7.65% in FICA. Self-employed 1099 salespeople pay roughly $5,000 more in taxes on the same income because they cover both halves of FICA.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The best strategies for managing commission taxes: maximize pre-tax retirement contributions, keep your W-4 current so withholding matches your real rate, and if you are a 1099 contractor, track every business expense. A few hundred dollars of tracked expenses can save fifty or more in taxes.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fff7ed',
          border: '1px solid #fed7aa',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Commission Take-Home by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your total salary (base + commissions) to see your exact federal tax, state tax, FICA, and take-home pay &mdash; broken down for every pay period.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#ea580c',
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
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15 (Circular E) &mdash; Employer&rsquo;s Tax Guide</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15-T &mdash; Federal Income Tax Withholding Methods</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc753" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 753: Form W-4 and Withholding</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Self-Employment Tax (Social Security and Medicare)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 2026 Tax Inflation Adjustments</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 969 &mdash; Health Savings Accounts and Other Tax-Favored Health Plans</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Standard Mileage Rates</a>
        </li>
      </ul>

      {/* Back to blog */}
      <ArticleFooter current="how-commission-income-is-taxed" />
    </article>
  )
}
