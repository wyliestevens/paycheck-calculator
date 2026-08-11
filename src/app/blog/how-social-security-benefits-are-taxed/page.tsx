import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Social Security Benefits Are Taxed in 2026',
  description:
    'Up to 85% of your Social Security benefits can be taxable — depending on your total income. Here\'s exactly how the IRS calculates it, with worked examples and the full tier breakdown.',
  alternates: { canonical: '/blog/how-social-security-benefits-are-taxed' },
  keywords:
    'Social Security benefits taxable 2026, how is Social Security taxed, Social Security income tax, combined income Social Security, provisional income, 85 percent Social Security taxable, IRS Publication 915',
  openGraph: {
    title: 'How Social Security Benefits Are Taxed in 2026',
    description:
      'Up to 85% of your Social Security benefits can be taxable. Here\'s the combined income formula, the three tiers, and worked dollar examples.',
  },
}

export default function SocialSecurityBenefitsTaxed() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Social Security benefits tax tiers illustration"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* SS shield icon on the left */}
          <path
            d="M52 50 L90 50 L90 118 Q71 135 52 118 Z"
            fill="rgba(255,255,255,0.15)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
          />
          <text x="71" y="85" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">SS</text>
          <text x="71" y="100" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">SOCIAL</text>
          <text x="71" y="111" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">SECURITY</text>

          {/* Three income tier bars */}
          <text x="155" y="42" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">COMBINED INCOME</text>

          {/* Tier 1: 0% taxable */}
          <rect x="120" y="52" width="120" height="52" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="180" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Under $25,000</text>
          <text x="180" y="91" textAnchor="middle" fontSize="18" fontWeight="700" fill="#86efac" fontFamily="sans-serif">0%</text>
          <text x="180" y="115" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">taxable</text>

          {/* Tier 2: Up to 50% */}
          <rect x="252" y="52" width="140" height="52" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="322" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">$25,000–$34,000</text>
          <text x="322" y="91" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fde68a" fontFamily="sans-serif">50%</text>
          <text x="322" y="115" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">may be taxable</text>

          {/* Tier 3: Up to 85% */}
          <rect x="404" y="52" width="130" height="52" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="469" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Over $34,000</text>
          <text x="469" y="91" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fca5a5" fontFamily="sans-serif">85%</text>
          <text x="469" y="115" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">may be taxable</text>

          {/* Arrow flow */}
          <line x1="120" y1="160" x2="534" y2="160" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <polygon points="534,155 545,160 534,165" fill="rgba(255,255,255,0.3)" />
          <text x="332" y="178" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Higher combined income → more benefits taxable</text>

          {/* Single filer label */}
          <text x="155" y="138" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif">(single filers)</text>
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
        How Social Security Benefits Are Taxed in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 11, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most retirees are surprised to learn that their Social Security benefits can be taxable. You spent decades paying into the system — and now the IRS wants a cut of what you get back? It feels counterintuitive. But up to <strong>85% of your Social Security benefits</strong> can be counted as taxable income, depending on your total income from all sources.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The good news: many retirees with modest incomes pay <em>no</em> tax on their Social Security at all. The threshold structure is designed so that only those with significant income beyond Social Security get taxed on their benefits. Here is exactly how it works.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Three-Tier System: 0%, 50%, and 85%
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS determines how much of your Social Security is taxable using a concept called <strong>combined income</strong> (also called <em>provisional income</em>). Based on your combined income, your benefits fall into one of three tiers:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Filing Status</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Combined Income</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Max % of Benefits Taxable</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single / HOH', 'Under $25,000', '0%'],
              ['Single / HOH', '$25,000 – $34,000', 'Up to 50%'],
              ['Single / HOH', 'Over $34,000', 'Up to 85%'],
              ['Married Filing Jointly', 'Under $32,000', '0%'],
              ['Married Filing Jointly', '$32,000 – $44,000', 'Up to 50%'],
              ['Married Filing Jointly', 'Over $44,000', 'Up to 85%'],
            ].map(([status, income, taxable], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{income}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: taxable === '0%' ? '#059669' : taxable.includes('50') ? '#d97706' : '#dc2626' }}>{taxable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: '#64748b', marginBottom: '1.5rem', fontStyle: 'italic' }}>
        Source:{' '}
        <a href="https://www.irs.gov/taxtopics/tc423" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Topic 423 — Social Security and Equivalent Railroad Retirement Benefits
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note that &ldquo;up to 85% taxable&rdquo; does <strong>not</strong> mean you owe a tax rate of 85%. It means that up to 85% of your Social Security benefit amount gets added to your taxable income, and then your regular income tax rates apply to that amount. The maximum any individual can ever be taxed on is 85% of their benefits — never 100%.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is &ldquo;Combined Income&rdquo;?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Combined income (provisional income) is the key number. The formula is:
      </p>

      <div
        style={{
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontSize: '1rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        <strong>Combined Income</strong> = Adjusted Gross Income (AGI)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        + Nontaxable Interest<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        + <strong>50%</strong> of your Social Security benefits
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Adjusted Gross Income (AGI)</strong> is your total income before the standard deduction — it includes wages, pension income, 401(k) or IRA withdrawals, dividends, capital gains, rental income, and any other taxable income. It does <em>not</em> include your Social Security benefits themselves (those are handled separately).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Nontaxable interest</strong> is interest from municipal bonds and similar tax-exempt investments. Even though it is not directly taxable, the IRS counts it toward combined income for the Social Security calculation.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that only <strong>half</strong> of your Social Security benefits count toward combined income. This is a built-in benefit — it reduces the calculation and keeps more of your benefits tax-free than if the full amount were counted.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example 1: Within the 50% Tier
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Maria is a single retiree in 2026. She receives:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>Social Security benefits: <strong>$18,000/year</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Pension income: <strong>$20,000/year</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Bank interest: <strong>$0</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Step 1 — Calculate combined income:
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
          lineHeight: 2,
        }}
      >
        AGI = $20,000 (pension)<br />
        Nontaxable interest = $0<br />
        50% of SS = 50% &times; $18,000 = $9,000<br />
        <strong>Combined income = $20,000 + $0 + $9,000 = $29,000</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Step 2 — Determine the tier: $29,000 falls between $25,000 and $34,000 → <strong>up to 50% of benefits</strong> may be taxable.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Step 3 — Calculate the taxable amount:
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
          lineHeight: 2,
        }}
      >
        Taxable SS = 50% &times; ($29,000 &minus; $25,000)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 50% &times; $4,000<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <strong>$2,000</strong><br />
        <br />
        (Cannot exceed 50% of benefits = 50% &times; $18,000 = $9,000 ✓)
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Maria includes <strong>$2,000</strong> of her $18,000 Social Security benefit as taxable income. The other $16,000 is tax-free. She pays income tax on a total of $22,000 ($20,000 pension + $2,000 SS) — minus her $15,000 standard deduction, her taxable income is just $7,000, and she pays just $700 in federal income tax.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example 2: In the 85% Tier
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        David is also a single retiree with more income sources:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>Social Security benefits: <strong>$24,000/year</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Traditional IRA withdrawals: <strong>$30,000/year</strong></li>
        <li style={{ marginBottom: '0.375rem' }}>Dividend income: <strong>$5,000/year</strong></li>
      </ul>

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
          lineHeight: 2,
        }}
      >
        AGI = $30,000 + $5,000 = $35,000<br />
        50% of SS = 50% &times; $24,000 = $12,000<br />
        <strong>Combined income = $35,000 + $12,000 = $47,000</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        $47,000 exceeds $34,000 → up to 85% of benefits may be taxable. The exact calculation (per{' '}
        <a href="https://www.irs.gov/publications/p915" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 915
        </a>{' '}
        Worksheet 1):
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
          lineHeight: 2,
        }}
      >
        50% tier amount: 50% &times; ($34,000 &minus; $25,000) = $4,500<br />
        85% tier amount: 85% &times; ($47,000 &minus; $34,000) = $11,050<br />
        Subtotal = $4,500 + $11,050 = $15,550<br />
        <br />
        85% of total benefits = 85% &times; $24,000 = $20,400<br />
        <br />
        <strong>Taxable SS = $15,550 (the lesser of the two)</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        David includes <strong>$15,550</strong> of his $24,000 Social Security benefit as taxable income — about 65% in this case, even though the maximum tier is 85%. His total taxable income before deductions is $35,000 + $15,550 = $50,550. After his $15,000 standard deduction, he pays tax on $35,550.
      </p>

      {/* Section 5 — Key insight: IRA withdrawals */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why IRA and 401(k) Withdrawals Are the Biggest Factor
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The single biggest driver of Social Security taxation for most retirees is <strong>withdrawals from traditional IRAs and 401(k)s</strong>. These are counted as ordinary income (AGI), which directly raises your combined income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Once you turn 73, the IRS requires you to take <strong>Required Minimum Distributions (RMDs)</strong> from traditional accounts each year.{' '}
        <a href="https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — RMD FAQs)
        </a>{' '}
        As your account balances grow, RMDs can push your combined income well above the $34,000 threshold, causing up to 85% of your Social Security to become taxable.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In contrast, <strong>Roth IRA withdrawals</strong> do <em>not</em> count toward AGI because you already paid taxes on those contributions. This is a key reason many financial planners recommend converting traditional IRA funds to a Roth IRA before retirement — qualified Roth distributions reduce your combined income and keep more of your Social Security benefit tax-free.{' '}
        <a href="https://www.irs.gov/retirement-plans/roth-iras" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Roth IRAs)
        </a>
      </p>

      {/* Section 6 — Income scenario comparison table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Other Income Sources Affect Your SS Tax (Single Filer, $20,000 in Benefits)
      </h2>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Other Income (AGI)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Combined Income</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable SS</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>% of Benefits Taxed</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$0 (SS only)', '$10,000', '$0', '0%'],
              ['$10,000', '$20,000', '$0', '0%'],
              ['$16,000', '$26,000', '$500', '2.5%'],
              ['$20,000', '$30,000', '$2,500', '12.5%'],
              ['$25,000', '$35,000', '$6,750', '33.8%'],
              ['$35,000', '$45,000', '$16,000', '80.0%'],
              ['$50,000', '$60,000', '$17,000', '85.0%'],
            ].map(([agi, combined, taxable, pct], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{agi}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{combined}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{taxable}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontWeight: 600, color: pct === '0%' ? '#059669' : '#1e293b' }}>{pct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Assumes $20,000 in annual Social Security benefits, single filer, no nontaxable interest. Taxable amounts are approximate.
      </p>

      {/* Section 7 — State taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Do States Tax Social Security Benefits?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At the federal level, the rules above apply uniformly. At the state level, the picture varies significantly. As of 2026, the majority of states — including Florida, Texas, Illinois, Pennsylvania, and about two dozen others — <strong>do not tax Social Security benefits at all</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, roughly a dozen states do tax Social Security to some extent, including Colorado, Connecticut, Kansas, Minnesota, Montana, New Mexico, North Dakota, Rhode Island, Utah, Vermont, and West Virginia. Each state has its own income thresholds, phase-outs, and rules. Some follow the federal formula; others use their own.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live in a state that taxes Social Security, check your state&rsquo;s department of revenue website for the exact rules — many states have income thresholds above which the benefits become taxable, and some offer partial exemptions that reduce the impact significantly.
      </p>

      {/* Section 8 — Strategies */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Reduce Tax on Your Social Security
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Since the amount of taxable SS depends on your combined income, anything that reduces your other income can reduce — or eliminate — the tax on your benefits:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. Roth Conversions Before Retirement
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        Converting a traditional IRA to a Roth IRA during lower-income years (say, between retirement and age 70 when you start Social Security) can reduce your future RMDs and keep combined income lower throughout retirement. Yes, you pay taxes on the conversion — but you do so at a time you can control, potentially at lower rates.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Qualified Charitable Distributions (QCDs)
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If you are 70½ or older, you can donate up to <strong>$105,000 per year</strong> (2026 limit) directly from your IRA to a qualified charity as a <strong>Qualified Charitable Distribution</strong>. This satisfies your RMD without adding the withdrawal to your AGI — directly reducing your combined income.{' '}
        <a href="https://www.irs.gov/retirement-plans/ira-faqs-distributions-withdrawals#qcd" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — QCD FAQs)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Delay Social Security to Reduce Annual Benefit Taxation
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        Waiting until age 70 to claim Social Security increases your monthly benefit by about 8% per year past full retirement age. A higher monthly benefit with the same other income means a smaller <em>proportion</em> of benefits is taxable, and you get more total dollars. This only helps if combined income stays relatively constant.{' '}
        <a href="https://www.ssa.gov/benefits/retirement/planner/delayret.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov — Delayed Retirement Credits)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Mind Your Muni Bonds
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Municipal bond interest is tax-exempt at the federal level, but it is <em>still counted</em> in your combined income calculation. Retirees who hold large amounts of muni bonds may be surprised to find their &ldquo;tax-free&rdquo; interest is making their Social Security more taxable. This does not mean munis are a bad choice — just factor this into the overall calculation.
      </p>

      {/* Section 9 — Withholding */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Have Taxes Withheld From Social Security
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Social Security does not automatically withhold taxes from your benefit unless you request it. To avoid a large tax bill at filing time, you can choose to have federal income tax withheld from your monthly benefit using <strong>Form W-4V</strong> (Voluntary Withholding Request).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can choose to have <strong>7%, 10%, 12%, or 22%</strong> of your monthly Social Security withheld. Submit Form W-4V directly to your local Social Security office.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4-v" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — About Form W-4V)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Alternatively, you can make quarterly estimated tax payments using{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1040-ES
        </a>
        . The IRS has an online withholding estimator that can help you figure out the right amount.{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Tax Withholding Estimator)
        </a>
      </p>

      {/* Section 10 — Where to Report */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Where Social Security Tax Appears on Your Tax Return
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Each January, the Social Security Administration sends you a{' '}
        <a href="https://www.ssa.gov/myaccount/statement.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Social Security Benefit Statement (Form SSA-1099)
        </a>{' '}
        showing how much you received during the year. You use this form to calculate the taxable portion on your tax return.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The taxable amount is entered on <strong>Line 6b of Form 1040</strong> (Line 6a shows your total benefit, 6b shows the taxable portion). Tax software and the IRS worksheet in Publication 915 will walk you through the exact calculation based on your specific numbers.
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Social Security benefits become taxable when your combined income — your AGI plus nontaxable interest plus half your SS benefits — exceeds $25,000 for single filers or $32,000 for married filing jointly. Once combined income exceeds $34,000 ($44,000 for couples), up to 85% of your benefits can be counted as taxable income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The good news: only the <em>portion</em> you add to taxable income gets taxed at your ordinary income rates — and you still have your standard deduction working for you. Most retirees with modest total income pay little or no federal tax on their Social Security.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Planning matters. Managing IRA withdrawals, considering Roth conversions, and using Qualified Charitable Distributions can significantly reduce — or eliminate — the tax on your Social Security benefits. If you are approaching retirement, it is worth running the numbers a few years in advance.
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
          Calculate Your After-Tax Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Still working? See exactly how much of your paycheck goes to federal tax, state tax, and FICA — and what you actually bring home each pay period.
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
          <a href="https://www.irs.gov/taxtopics/tc423" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 423: Social Security and Equivalent Railroad Retirement Benefits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p915" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 915: Social Security and Equivalent Railroad Retirement Benefits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/benefits/retirement/planner/taxes.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Benefits Planner: Income Taxes And Your Social Security Benefits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/benefits/retirement/planner/delayret.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Delayed Retirement Credits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Required Minimum Distributions FAQs</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/ira-faqs-distributions-withdrawals#qcd" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Qualified Charitable Distributions (QCDs)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4-v" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-4V, Voluntary Withholding Request</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
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
