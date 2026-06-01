import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Bonuses Are Taxed: The 22% Rule Explained (2026)',
  description:
    'Your employer withholds 22% from most bonuses — but that\'s just withholding, not your final tax bill. Here\'s exactly how bonus taxation works in 2026.',
  alternates: { canonical: '/blog/how-bonuses-are-taxed' },
  keywords:
    'how bonuses are taxed, bonus tax rate 2026, 22 percent bonus tax, supplemental wage withholding, aggregate method bonus, bonus take home pay',
  openGraph: {
    title: 'How Bonuses Are Taxed: The 22% Rule Explained (2026)',
    description:
      'Your employer withholds 22% from most bonuses — but that\'s just withholding, not your final tax bill. Here\'s exactly how bonus taxation works.',
  },
}

export default function HowBonusesAreTaxed() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Bonus paycheck illustration showing a bonus check and tax withholding"
        >
          <rect width="600" height="200" rx="12" fill="#ea580c" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Left: bonus bag */}
          <circle cx="90" cy="100" r="42" fill="rgba(255,255,255,0.15)" />
          <text x="90" y="90" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff" fontFamily="monospace">$</text>
          <text x="90" y="118" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">BONUS</text>
          {/* Arrow */}
          <line x1="145" y1="100" x2="195" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
          <polygon points="195,92 210,100 195,108" fill="rgba(255,255,255,0.55)" />
          {/* Center breakdown */}
          <rect x="220" y="50" width="160" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="69" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">22% Fed Withholding</text>
          <rect x="220" y="86" width="160" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="105" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">7.65% FICA</text>
          <rect x="220" y="122" width="160" height="28" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="141" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">State Tax</text>
          {/* Arrow */}
          <line x1="393" y1="100" x2="443" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
          <polygon points="443,92 458,100 443,108" fill="rgba(255,255,255,0.55)" />
          {/* Right: take home */}
          <circle cx="510" cy="100" r="42" fill="rgba(255,255,255,0.22)" />
          <text x="510" y="94" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">Take</text>
          <text x="510" y="111" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">Home</text>
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
        How Bonuses Are Taxed: The 22% Rule Explained (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 1, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You just found out you are getting a $5,000 bonus at work. Exciting — until it hits your bank account and the number is closer to $3,300. What happened to the other $1,700?
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Bonuses get taxed heavily at the withholding stage, and many people are confused about why. The short answer: the IRS treats bonuses as <strong>supplemental wages</strong>, and most employers use a flat 22% federal withholding rate — plus Social Security, Medicare, and state taxes on top. In this guide, we break down exactly how bonus taxes work, how much you will actually keep, and whether there is anything you can do about it.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Supplemental Wages?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS defines <strong>supplemental wages</strong> as any pay that is separate from, or added on top of, your regular salary or hourly wages. This includes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Performance bonuses and signing bonuses</li>
        <li style={{ marginBottom: '0.5rem' }}>Commission payments</li>
        <li style={{ marginBottom: '0.5rem' }}>Overtime pay (in some circumstances)</li>
        <li style={{ marginBottom: '0.5rem' }}>Vacation payouts</li>
        <li style={{ marginBottom: '0.5rem' }}>Severance pay</li>
        <li style={{ marginBottom: '0.5rem' }}>Back pay</li>
        <li style={{ marginBottom: '0.5rem' }}>Prizes and awards from your employer</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because supplemental wages are not part of your regular paycheck, the IRS allows employers to withhold taxes on them differently. There are two methods employers can use:{' '}
        <strong>the percentage method</strong> and <strong>the aggregate method</strong>.{' '}
        <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15 — Employer&rsquo;s Tax Guide)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Method 1: The Flat 22% Rate (Percentage Method)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer pays your bonus as a <em>separate check</em> from your regular paycheck — which is the most common way — they will almost certainly use the <strong>percentage method</strong>. This means they withhold a flat <strong>22%</strong> for federal income tax on any bonus up to $1 million.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is where the &ldquo;22% rule&rdquo; comes from. It is simply the mandatory federal withholding rate that employers apply to supplemental wages. It does not matter if you are normally in the 12% bracket or the 35% bracket — the flat 22% applies to the bonus check.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For bonuses over $1 million in a calendar year, the withholding rate jumps to <strong>37%</strong> on the portion above $1 million. That is the top federal marginal rate, and it kicks in automatically.
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
        <p style={{ fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', fontSize: '0.9375rem' }}>
          Quick Example: $5,000 Bonus, Percentage Method
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
          Bonus: $5,000<br />
          Federal withholding (22%): &minus;$1,100<br />
          Social Security (6.2%): &minus;$310<br />
          Medicare (1.45%): &minus;$72.50<br />
          <strong>Subtotal before state tax: $3,517.50</strong>
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you also live in a state with income tax, that comes out too. More on that below.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Method 2: The Aggregate Method
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some employers pay the bonus in the <em>same check</em> as regular wages, or they choose to use the aggregate method. Here is how it works: your employer adds your bonus to your regular wages for that pay period, calculates withholding on the combined total as if that were your regular pay, then subtracts what was already withheld from your regular wages. The remainder is what gets withheld from your bonus.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because the combined total is larger, this often pushes the bonus into a higher withholding bracket — meaning <strong>more is withheld</strong> from your bonus check than under the flat 22% method. This can feel like a bigger hit, even though your actual tax liability at year-end is the same either way.
      </p>

      <div
        style={{
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', fontSize: '0.9375rem' }}>
          Quick Example: $5,000 Bonus Added to a $3,846 Biweekly Paycheck ($100K salary)
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
          Combined gross: $8,846<br />
          Withholding on $8,846 (annualized = ~$230K, 24% bracket): ~$2,122<br />
          Minus withholding already taken from regular $3,846 paycheck: &minus;$535<br />
          <strong>Bonus withholding: ~$1,587 (effectively ~31.7%)</strong>
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        As you can see, the aggregate method withholds more than the flat 22% method for many people. But again — <strong>withholding is not the same as taxes owed.</strong> You settle up at tax time.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does Your Bonus Actually Get Taxed at a Higher Rate?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is the biggest misconception about bonus taxation: <strong>your bonus does not get taxed at a higher rate than your regular income.</strong> When you file your tax return, the IRS looks at your total income for the year — salary plus bonus plus any other income — and applies the same progressive tax brackets to all of it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 22% withholding from your bonus is just an <em>estimate</em>. It is a way for your employer to meet their legal obligation to withhold taxes in real time. At the end of the year, your bonus is just more taxable income. It gets blended with everything else when you file.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If 22% was withheld but your effective federal tax rate on the bonus works out to only 18% (because you are in a lower bracket overall), you will get the difference back as a tax refund. If your effective rate is higher than 22%, you may owe a bit more.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        FICA Taxes on Bonuses
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of federal income tax, bonuses are also subject to <strong>FICA taxes</strong> — Social Security and Medicare. These apply to all wages, including supplemental wages, up to their respective limits:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Social Security (6.2%):</strong> Applies to the first $176,100 of wages in 2026. If you have already exceeded that threshold from your regular salary, your bonus will not have Social Security withheld.{' '}
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (SSA.gov)
          </a>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Medicare (1.45%):</strong> No income cap — applies to every dollar of wages including bonuses.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Additional Medicare Tax (0.9%):</strong> Applies to wages above $200,000 for single filers. This kicks in automatically on your paycheck once you cross the threshold.{' '}
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Topic 751)
          </a>
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most workers, FICA adds another 7.65% on top of the 22% federal withholding, bringing the total federal bite to nearly 30% before state taxes.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Taxes on Bonuses
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states that have an income tax also tax bonuses. How they handle withholding varies:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Flat supplemental rate:</strong> Many states use a flat supplemental withholding rate for bonuses (similar to the federal 22% rule). For example, California withholds at 10.23% on bonuses paid separately.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Regular withholding tables:</strong> Some states require employers to withhold bonus taxes at the same rate as regular wages using the aggregate method.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No state income tax:</strong> If you live in{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
          <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a>,{' '}
          <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a>, or the other states with no income tax, you skip state taxes on your bonus entirely.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State taxes on bonuses can range from 0% to over 13% (California&rsquo;s top rate is 13.3%), so where you live has a major impact on how much of your bonus you keep.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-individual-income-tax-rates-brackets/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Income Tax Rates)
        </a>
      </p>

      {/* Section 7 — worked example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $5,000 Bonus in Four States
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is how a $5,000 bonus gets taxed using the percentage (flat) method for a single filer who has not yet hit the Social Security wage base:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Withholding</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>TX</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>NY</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>CA</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/illinois" style={{ color: '#2563eb', textDecoration: 'underline' }}>IL</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Bonus', '$5,000', '$5,000', '$5,000', '$5,000'],
              ['Federal (22%)', '−$1,100', '−$1,100', '−$1,100', '−$1,100'],
              ['Social Security (6.2%)', '−$310', '−$310', '−$310', '−$310'],
              ['Medicare (1.45%)', '−$72', '−$72', '−$72', '−$72'],
              ['State Income Tax', '$0', '−$542', '−$512', '−$248'],
              ['SDI / Other', '$0', '−$27', '−$55', '$0'],
            ].map(([label, tx, ny, ca, il], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross Bonus' ? '#1e293b' : '#dc2626' }}>{tx}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross Bonus' ? '#1e293b' : '#dc2626' }}>{ny}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross Bonus' ? '#1e293b' : '#dc2626' }}>{ca}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross Bonus' ? '#1e293b' : '#dc2626' }}>{il}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Take-Home</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$3,518</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,949</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,951</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$3,270</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A Texas employee keeps <strong>$569 more</strong> from the same $5,000 bonus than a California employee — purely because Texas has no state income tax. Over a career&rsquo;s worth of bonuses, this adds up significantly.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Can You Reduce Taxes on Your Bonus?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You cannot escape taxes on bonuses entirely, but there are a few legal strategies that can lower how much you pay:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. Contribute the Bonus to a Traditional 401(k)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If your employer allows it, you can direct some or all of your bonus into your <a href="/blog/how-401k-contributions-affect-your-paycheck" style={{ color: '#2563eb', textDecoration: 'underline' }}>traditional 401(k)</a>. Pre-tax 401(k) contributions reduce your taxable income dollar for dollar. In 2026, you can contribute up to $23,500 total ($31,000 if you are 50 or older). A $5,000 bonus put into a traditional 401(k) saves you the full federal and state income tax on that amount — only FICA still applies.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Max Out an HSA
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If you have a high-deductible health plan, contributing bonus money to a Health Savings Account (HSA) is triple tax-advantaged: the contribution is pre-tax, growth is tax-free, and withdrawals for qualified medical expenses are tax-free. The 2026 individual HSA limit is $4,300.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Ask to Defer the Bonus to a Lower-Income Year
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.25rem' }}>
        If you expect your income to be significantly lower next year (for example, you are planning to take parental leave or a career break), ask your employer if you can defer the bonus to January. This pushes the income into a year when your effective tax rate may be lower. Not all employers allow this, and it must be arranged <em>before</em> the bonus is earned to comply with IRS deferred compensation rules.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Donate to Charity (If You Itemize)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you itemize deductions instead of taking the standard deduction, a charitable contribution in the same year as your bonus can offset some of the extra taxable income. Consider a donor-advised fund if you want the deduction this year but want to direct grants to charities over time.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens at Tax Time?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is the most important thing to understand: <strong>withholding and taxes owed are two separate things.</strong> Your employer withholds money from your paycheck throughout the year as a prepayment toward your tax bill. When you file your return in April, the IRS looks at your total income and calculates what you actually owe — then compares that to what was withheld.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>If too much was withheld:</strong> You get a refund. This is common for people in lower tax brackets who had 22% withheld from a bonus but whose actual effective rate on that income is lower.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>If not enough was withheld:</strong> You owe the difference. This can happen if the aggregate method did not withhold enough, or if you had multiple income sources.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your W-2 at year-end will show your total wages (including bonuses) and your total withholding. The bonus is folded into your regular income and taxed at your actual marginal rates. The IRS does not distinguish between salary and bonus income when calculating your tax bill — it is all just income.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Signing Bonuses: One Extra Thing to Know
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you receive a <strong>signing bonus</strong> when starting a new job, the same rules apply — it is supplemental income and will be withheld at 22% federally. However, watch out for a clawback clause. Many signing bonuses require you to repay them (often prorated) if you leave the company within one or two years. If you do repay a signing bonus in a later year, you may be able to deduct that amount on your tax return under the claim-of-right doctrine.{' '}
        <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 525 &mdash; Taxable and Nontaxable Income)
        </a>
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The &ldquo;22% rule&rdquo; on bonuses is really just a federal withholding shortcut — a flat rate your employer uses to handle taxes in the moment. It is not your final tax rate on the bonus. When you file your return, your bonus income is added to your salary and taxed at your actual marginal rates, just like all other income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The total bite from a bonus — federal withholding, FICA, and state taxes — can be 30% to 45% or more at the withholding stage. But if that is more than your actual effective rate, you will recoup the difference at tax time. The best way to actually reduce your tax liability on a bonus is to direct as much of it as possible into pre-tax accounts like a traditional 401(k) or HSA before year-end.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you want to see how your regular salary plus a bonus would affect your take-home pay in your state, check out the calculator for{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>,{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>,{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>, or any other state.
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
          See Your Take-Home Pay After Taxes
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use our free calculator to see exactly what you keep from your salary — by state, filing status, and pay frequency.
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
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15 &mdash; Employer&rsquo;s Tax Guide (Circular E)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 525 &mdash; Taxable and Nontaxable Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 751: Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-individual-income-tax-rates-brackets/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Individual Income Tax Rates and Brackets</a>
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
