import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Relocation Bonus Taxes: How Much Will You Keep in 2026?' },
  description:
    'Relocation bonuses are taxable as ordinary income. See how 22% federal withholding, FICA, and state tax affect a $10,000 relocation package — with a full worked example.',
  alternates: { canonical: '/blog/relocation-bonus-taxes-2026' },
  keywords:
    'relocation bonus taxes 2026, relocation assistance taxable, how is relocation bonus taxed, relocation package taxes, employer relocation gross-up, moving allowance taxes 2026',
  openGraph: {
    type: 'article',
    url: '/blog/relocation-bonus-taxes-2026',
    images: [{ url: '/og/blog/relocation-bonus-taxes-2026', width: 1200, height: 630 }],
    title: 'Relocation Bonus Taxes: How Much Will You Keep in 2026?',
    description:
      'Relocation bonuses are taxable as ordinary income. Here&rsquo;s how 22% withholding, FICA, and state tax hit a $10,000 relocation package.',
  },
}

export default function RelocationBonusTaxes() {
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
          aria-label="Illustration showing a moving truck and a paycheck representing relocation bonus taxes"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Moving truck body */}
          <rect x="40" y="90" width="130" height="70" rx="6" fill="rgba(255,255,255,0.22)" />
          <rect x="150" y="105" width="55" height="55" rx="4" fill="rgba(255,255,255,0.15)" />
          {/* Cab window */}
          <rect x="157" y="112" width="40" height="25" rx="3" fill="rgba(255,255,255,0.3)" />
          {/* Wheels */}
          <circle cx="75" cy="165" r="14" fill="rgba(0,0,0,0.3)" />
          <circle cx="75" cy="165" r="7" fill="rgba(255,255,255,0.2)" />
          <circle cx="165" cy="165" r="14" fill="rgba(0,0,0,0.3)" />
          <circle cx="165" cy="165" r="7" fill="rgba(255,255,255,0.2)" />
          {/* Truck text */}
          <text x="105" y="132" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">MOVING</text>

          {/* Arrow */}
          <line x1="225" y1="100" x2="320" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeDasharray="6,4" />
          <polygon points="318,92 335,100 318,108" fill="rgba(255,255,255,0.7)" />
          <text x="272" y="88" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif" fontWeight="600">TAXABLE</text>

          {/* Tax bill panel */}
          <rect x="345" y="60" width="200" height="110" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="445" y="83" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">$10,000 RELOCATION</text>
          <line x1="360" y1="92" x2="530" y2="92" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="365" y="110" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="monospace">Federal (22% flat)  &minus;$2,200</text>
          <text x="365" y="127" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="monospace">SS (6.2%)          &minus;$620</text>
          <text x="365" y="144" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="monospace">Medicare (1.45%)   &minus;$145</text>
          <line x1="360" y1="152" x2="530" y2="152" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="365" y="165" fontSize="12" fontWeight="700" fill="#fff" fontFamily="monospace">Net to you  ~$6,935</text>
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
        Relocation Bonus Taxes: How Much Will You Keep in 2026?
      </h1>

      <ArticleMeta slug="relocation-bonus-taxes-2026" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You accepted the job offer &mdash; congratulations. Your new employer is offering a $10,000 relocation package to help cover moving trucks, travel, and temporary housing. Here&rsquo;s the part recruiters often gloss over: <strong>that money is taxable income</strong>. After federal withholding, Social Security, Medicare, and state taxes, a $10,000 relocation bonus typically puts between $6,500 and $7,500 in your pocket, depending on your income level and state.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how relocation bonuses are taxed in 2026, why the 22% flat withholding is just an estimate, and how the &ldquo;gross-up&rdquo; strategy some employers use can make you whole. All figures are verified against IRS 2026 guidance and the Social Security Administration.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Is Relocation Assistance Taxable Income?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes &mdash; for nearly all employees since 2018. The <strong>Tax Cuts and Jobs Act (TCJA)</strong> eliminated the moving expense exclusion for most workers. Before 2018, an employer could pay your moving costs directly (or reimburse you) tax-free if the move met certain IRS distance and time tests. That benefit was suspended from 2018 through at least 2025, and has not been restored for 2026.{' '}
        <a href="https://www.irs.gov/taxtopics/tc455" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 455: Moving Expenses)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The only exception is <strong>active-duty military members</strong> who move under official orders &mdash; they can still exclude qualified moving expenses.{' '}
        <a href="https://www.irs.gov/publications/p521" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 521 &mdash; Moving Expenses)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For everyone else, relocation assistance &mdash; whether paid as a lump-sum cash bonus, direct reimbursement for moving expenses, or payment to a moving company on your behalf &mdash; is treated as <strong>supplemental wages</strong> and is fully taxable. It gets added to your W-2 in Box 1 just like a regular paycheck.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Is a Relocation Bonus Withheld? The 22% Rule Explained
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because relocation payments are &ldquo;supplemental wages,&rdquo; your employer uses the IRS <strong>flat supplemental withholding rate</strong> of <strong>22%</strong> for federal income tax &mdash; the same rate used for bonuses, commissions, and overtime paid separately from your regular paycheck.{' '}
        <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15 &mdash; Employer&rsquo;s Tax Guide)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That 22% is just an <em>estimate</em> for withholding purposes. Your real federal income tax on the relocation amount depends on your <strong>total taxable income</strong> for the year and which bracket that money falls into. Most workers earning a typical salary will pay somewhere between 12% and 24% in federal income tax on their relocation bonus &mdash; so 22% withholding often results in a small over-payment that comes back as a refund.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of federal income tax withholding, FICA taxes also apply to relocation bonuses:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security: 6.2%</strong> on relocation wages (up to the 2026 wage base of $184,500 combined with all other wages){' '}
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(SSA.gov)</a>
        </li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare: 1.45%</strong> on all relocation wages, with no cap</li>
      </ul>

      {/* Section 3 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $10,000 Relocation Bonus on a $65,000 Salary
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through the full math. Suppose you earn $65,000 per year and your employer pays you a separate $10,000 relocation bonus. You&rsquo;re a single filer in Texas (no state income tax). Here&rsquo;s what happens at every step.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: What Your Employer Withholds from the Bonus Check
      </h3>

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
        <div>Federal income tax: $10,000 &times; 22% = <strong>$2,200</strong></div>
        <div>Social Security: $10,000 &times; 6.2% = <strong>$620</strong></div>
        <div>Medicare: $10,000 &times; 1.45% = <strong>$145</strong></div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Total withheld: <strong>$3,065</strong>
        </div>
        <div>Net bonus deposited: <strong>$6,935</strong></div>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Your Actual Federal Income Tax on the Bonus (at Tax Filing)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        To find the real tax, you need to compare what you owe with and without the bonus.
      </p>

      <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
        Without bonus ($65,000 salary, single, standard deduction):
      </p>
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        <div>Gross salary:               $65,000</div>
        <div>Standard deduction:        &minus;$16,100</div>
        <div>Taxable income:             $48,900</div>
        <div style={{ marginTop: '0.5rem' }}>10% on $0&ndash;$12,400:        $1,240</div>
        <div>12% on $12,400&ndash;$48,900: $4,380</div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Federal income tax:         <strong>$5,620</strong>
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
        With bonus ($75,000 total, single, standard deduction):
      </p>
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        <div>Gross income:               $75,000</div>
        <div>Standard deduction:        &minus;$16,100</div>
        <div>Taxable income:             $58,900</div>
        <div style={{ marginTop: '0.5rem' }}>10% on $0&ndash;$12,400:        $1,240</div>
        <div>12% on $12,400&ndash;$50,400: $4,560</div>
        <div>22% on $50,400&ndash;$58,900: $1,870</div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Federal income tax:         <strong>$7,670</strong>
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The bonus adds <strong>$2,050</strong> in federal income tax ($7,670 &minus; $5,620). Your employer withheld $2,200, so you&rsquo;ll get back <strong>$150</strong> when you file, all else equal. Use our <a href="/texas/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000 Texas salary calculator</a> to verify the full take-home.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 3: Full Tax Summary on the $10,000 Bonus
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Actual Tax Owed</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal income tax', '22% withhold / ~20.5% actual', '$2,200 withheld', '$2,050'],
              ['Social Security', '6.2%', '$620', '$620'],
              ['Medicare', '1.45%', '$145', '$145'],
              ['Texas state tax', '0%', '$0', '$0'],
            ].map(([tax, rate, withheld, actual], i) => (
              <tr key={tax} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{withheld}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{actual}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$2,965</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$2,815</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Bottom line:</strong> On a $10,000 relocation bonus at this income level, the real tax burden is <strong>$2,815</strong> &mdash; meaning you keep <strong>$7,185</strong>. Because $2,965 was withheld, you&rsquo;ll receive a $150 over-withholding refund at tax time.
      </p>

      {/* Section 4 — Gross-up */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a &ldquo;Gross-Up,&rdquo; and Does Your Employer Offer One?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>relocation gross-up</strong> is when your employer pays you a larger amount specifically so that after taxes, you end up with the full intended relocation amount in hand. It&rsquo;s an employer-friendly way to make the relocation benefit feel complete &mdash; rather than leaving you to absorb the tax bill out of pocket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The math: if the employer wants you to net $10,000 after the 22% withholding rate and FICA (combined 29.65%), they need to pay you more upfront:
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
        <div>Gross-up formula: Net &divide; (1 &minus; withholding &minus; FICA)</div>
        <div style={{ marginTop: '0.5rem' }}>$10,000 &divide; (1 &minus; 0.22 &minus; 0.0765)</div>
        <div>$10,000 &divide; 0.7035 = <strong>$14,220 gross payment</strong></div>
        <div style={{ marginTop: '0.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem' }}>
          Taxes withheld: $14,220 &times; 29.65% = $4,216
        </div>
        <div>Net to employee: $14,220 &minus; $4,216 = <strong>~$10,004</strong></div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        With a gross-up, the employer pays <strong>$14,220</strong> instead of $10,000 &mdash; covering your tax burden entirely. It&rsquo;s a significant benefit worth asking about, especially for high-value relocations.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Be aware that the gross-up payment is <em>also</em> taxable income. It shows up on your W-2, increases your AGI, and could affect other deduction and credit limits. Most employers handle this internally and simply pay the grossed-up amount, but it&rsquo;s worth confirming with HR or a tax advisor whether the gross-up itself is also grossed up (some employers do a &ldquo;full gross-up&rdquo; that iterates through the calculation).
      </p>

      {/* Section 5 — State Taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How State Taxes Affect Your Relocation Bonus
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State income tax applies to relocation bonuses in most states, and it can add another 3%&ndash;10% in taxes. The state that taxes you is generally the state where <strong>you work when the bonus is paid</strong> &mdash; not where the payment is delivered or where you&rsquo;re moving from.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Tax on $10K Bonus</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Net After All Taxes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Texas (no income tax)', '$0', '~$7,185'],
              ['Florida (no income tax)', '$0', '~$7,185'],
              ['Illinois (flat 4.95%)', '~$495', '~$6,690'],
              ['Pennsylvania (flat 3.07%)', '~$307', '~$6,878'],
              ['New York (up to 10.9%)', '~$685', '~$6,500'],
              ['California (up to 13.3%)', '~$800+', '~$6,385'],
            ].map(([state, tax, net], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        State tax estimates assume a $65,000 base salary plus $10,000 bonus, single filer, 2026. State figures are approximate based on published 2026 rate schedules.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you&rsquo;re relocating <em>to</em> a no-income-tax state like Texas or Florida, make sure your bonus is paid after you&rsquo;ve established residency there &mdash; not while you&rsquo;re still legally domiciled in a high-tax state. See our <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas paycheck calculator</a> or <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California paycheck calculator</a> to compare the difference.
      </p>

      {/* Section 6 — FICA cap */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens to FICA if You&rsquo;re Already Near the Social Security Wage Cap?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 2026 Social Security wage base is <strong>$184,500</strong>. Once your cumulative wages for the year hit that number, you stop paying the 6.2% Social Security tax for the rest of the year.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(SSA.gov &mdash; 2026 Wage Base)</a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your salary is already close to $184,500, a $10,000 relocation bonus might push you over the cap mid-year. Only the wages below the cap are subject to Social Security tax. For example, if you&rsquo;ve already earned $180,000 this year, only $4,500 of your relocation bonus is subject to Social Security tax ($180,000 + $10,000 = $190,000; only $4,500 remains below the $184,500 cap). Medicare has no cap, so the full $10,000 is always subject to the 1.45% Medicare tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This matters because high-income workers effectively pay <em>less</em> FICA on their relocation bonus than lower-income workers &mdash; another reason the 22% flat withholding may be more or less than your actual tax rate.
      </p>

      {/* Section 7 — Strategies */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Can You Minimize Taxes on Your Relocation Bonus?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        There are several legitimate strategies worth discussing with your employer or a tax advisor:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Ask for a gross-up.</strong> As shown above, a gross-up means the employer pays more so you net the full intended amount after taxes. This is the most direct way to avoid absorbing the tax cost yourself. Many large employers offer this for professional-level relocations.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Request direct payment to a relocation company.</strong> If your employer pays a licensed relocation management company (RMC) directly for services like moving trucks or temporary housing, it&rsquo;s still taxable to you (post-TCJA), but you may not notice it as a paycheck hit since it goes directly to the vendor. Your W-2 will still reflect it.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Time your bonus strategically.</strong> If you&rsquo;re moving to a no-income-tax state, ask HR to delay the bonus payment until you&rsquo;ve legally established residency there. You could save 3%&ndash;10% in state income tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Increase traditional 401(k) contributions.</strong> Putting pre-tax money into your <a href="/blog/how-401k-contributions-affect-your-paycheck" style={{ color: '#2563eb', textDecoration: 'underline' }}>401(k)</a> won&rsquo;t reduce your FICA, but it will lower your federal and state income taxes. If your relocation bonus pushes you into a higher bracket, this can be especially valuable.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Track deductible moving expenses carefully.</strong> While most employees can&rsquo;t deduct moving expenses, <strong>self-employed workers who qualify as sole proprietors may still deduct expenses</strong> as a business expense if the move is primarily for business. Consult a tax professional if this applies to you.
        </li>
      </ul>

      {/* Section 8 — W-4 adjustment */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Should You Adjust Your W-4 After Receiving a Relocation Bonus?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Possibly. Because a relocation bonus is typically paid in one lump sum early in your employment at the new company, your withholding on your regular paychecks may not account for the bump in taxable income. If you&rsquo;re in the 12% bracket normally but the relocation bonus pushes some of your income into the 22% bracket, you might owe at tax time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The safest step: after receiving the bonus, use the <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>IRS Tax Withholding Estimator</a> with your full expected year-to-date income (salary + bonus). If there&rsquo;s a shortfall, submit an updated <a href="/blog/understanding-your-w4" style={{ color: '#2563eb', textDecoration: 'underline' }}>W-4</a> to have a little extra withheld from each remaining paycheck.
      </p>

      {/* Key takeaways table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Relocation Bonus Tax Quick-Reference
      </h2>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Question</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Answer</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Is my relocation bonus taxable?', 'Yes — it\'s fully taxable as ordinary income for most employees in 2026'],
              ['What federal rate is withheld?', '22% flat supplemental rate (same as bonuses and commissions)'],
              ['Does FICA apply?', 'Yes — 6.2% SS (up to $184,500 total wages) + 1.45% Medicare'],
              ['Does state tax apply?', 'Yes, in most states — 0% in TX/FL, up to 13.3% in CA'],
              ['What is a gross-up?', 'Employer pays a larger amount so you net the full bonus after taxes'],
              ['Can I deduct moving expenses?', 'No, for most employees (military members excepted) through at least 2025–2026'],
              ['What form will I receive?', 'Your W-2 Box 1 will include the relocation amount'],
            ].map(([question, answer], i) => (
              <tr key={question} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{question}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For more on how similar lump-sum payments are taxed, see our guides on <a href="/blog/how-bonuses-are-taxed" style={{ color: '#2563eb', textDecoration: 'underline' }}>bonus taxes</a>, <a href="/blog/signing-bonus-taxes" style={{ color: '#2563eb', textDecoration: 'underline' }}>signing bonus taxes</a>, and <a href="/blog/severance-pay-and-taxes" style={{ color: '#2563eb', textDecoration: 'underline' }}>severance pay taxes</a> &mdash; all three follow the same 22% supplemental withholding rule.
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
          See Your Full Take-Home Pay in Your New State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use our free calculator to see exactly what you&rsquo;ll take home in your new location &mdash; including how your relocation bonus affects your annual tax picture.
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
          <a href="https://www.irs.gov/taxtopics/tc455" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 455: Moving Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p521" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 521 &mdash; Moving Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15 (Circular E) &mdash; Employer&rsquo;s Tax Guide (Supplemental Wages, 22% flat rate)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; 2026 Social Security Wage Base ($184,500)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 2026 Inflation Adjustments (standard deduction $16,100, brackets)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
        </li>
      </ul>

      <ArticleFooter current="relocation-bonus-taxes-2026" />
    </article>
  )
}
