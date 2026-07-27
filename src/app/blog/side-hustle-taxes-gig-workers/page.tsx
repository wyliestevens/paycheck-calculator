import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Side Hustle Taxes: What Gig Workers Need to Know in 2026',
  description:
    'Gig workers pay 15.3% self-employment tax plus income tax on every dollar earned. Here\'s exactly what you owe, how quarterly taxes work, and which expenses you can deduct.',
  alternates: { canonical: '/blog/side-hustle-taxes-gig-workers' },
  keywords:
    'side hustle taxes 2026, gig worker taxes, 1099 gig economy, self-employment tax gig work, quarterly estimated taxes, DoorDash taxes, Uber taxes, gig economy tax guide, deductions gig workers',
  openGraph: {
    title: 'Side Hustle Taxes: What Gig Workers Need to Know in 2026',
    description:
      'Gig workers pay 15.3% self-employment tax plus income tax on every dollar earned. Learn quarterly taxes, deductions, and the 1099-K threshold.',
  },
}

export default function SideHustleTaxesGigWorkers() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Side hustle taxes illustration showing gig income flowing to self-employment tax and quarterly payments"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Phone shape (gig app) */}
          <rect x="40" y="45" width="60" height="105" rx="8" fill="rgba(255,255,255,0.18)" />
          <rect x="48" y="58" width="44" height="60" rx="4" fill="rgba(255,255,255,0.25)" />
          <circle cx="70" cy="138" r="6" fill="rgba(255,255,255,0.4)" />
          <text x="70" y="83" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="monospace">G</text>
          <text x="70" y="106" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">GIG APP</text>

          {/* Arrow */}
          <line x1="115" y1="100" x2="165" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="165,93 180,100 165,107" fill="rgba(255,255,255,0.5)" />

          {/* Dollar circle - income */}
          <circle cx="220" cy="100" r="38" fill="rgba(255,255,255,0.18)" />
          <text x="220" y="107" textAnchor="middle" fontSize="30" fontWeight="700" fill="#fff" fontFamily="monospace">$</text>
          <text x="220" y="152" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">GIG INCOME</text>

          {/* Fork arrow */}
          <line x1="260" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <line x1="300" y1="100" x2="320" y2="68" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="300" y1="100" x2="320" y2="132" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />

          {/* SE Tax box */}
          <rect x="325" y="44" width="110" height="42" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="380" y="62" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Self-Employment</text>
          <text x="380" y="77" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fde68a" fontFamily="monospace">15.3%</text>

          {/* Income Tax box */}
          <rect x="325" y="114" width="110" height="42" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="380" y="132" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Income Tax</text>
          <text x="380" y="147" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">+ State Tax</text>

          {/* Arrow to quarterly */}
          <line x1="437" y1="100" x2="467" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="467,93 482,100 467,107" fill="rgba(255,255,255,0.5)" />

          {/* Quarterly box */}
          <rect x="485" y="68" width="90" height="62" rx="6" fill="rgba(255,255,255,0.15)" />
          <text x="530" y="92" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">QUARTERLY</text>
          <text x="530" y="108" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">ESTIMATED</text>
          <text x="530" y="121" textAnchor="middle" fontSize="9" fontWeight="600" fill="#fde68a" fontFamily="sans-serif">4× / YEAR</text>
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
        Side Hustle Taxes: What Gig Workers Need to Know in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 27, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Driving for Uber, delivering for DoorDash, freelancing on weekends, or selling on Etsy — side hustle income is real money. But it comes with a tax situation that catches a lot of people off guard: <strong>you are responsible for paying your own taxes</strong>, and the rate is higher than most people expect.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you work a regular job, your employer withholds taxes from every paycheck. When you earn gig income, nobody withholds anything. Every dollar lands in your account in full — and it is your job to set aside the taxes you owe and pay them on time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how gig income is taxed in 2026, how to make quarterly payments, which expenses you can deduct, and what a typical tax bill looks like with a real dollar example.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Big Difference: Self-Employment Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you work a regular job, FICA taxes (Social Security + Medicare) are split between you and your employer. You each pay 7.65% — so the total going to the government is 15.3%, but you only see half of it on your pay stub.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        As a gig worker, you are both the employee <em>and</em> the employer. That means you pay <strong>both halves</strong> of FICA — a combined 15.3% called the <strong>self-employment (SE) tax</strong>. This is on top of regular federal and state income taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The SE tax breaks down as:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security:</strong> 12.4% (on income up to $176,100 in 2026)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare:</strong> 2.9% (on all income, no cap)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Total SE tax:</strong> 15.3%</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is a small saving grace: the IRS lets you deduct the <strong>employer-equivalent half</strong> of your SE tax from your gross income before calculating your income tax. This works out to multiplying your net profit by 92.35% to get the base that SE tax is calculated on. (The 92.35% comes from 1 minus the 7.65% employer share.)
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>SE Tax Formula</p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.7, marginBottom: 0 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#7c3aed' }}>Net Profit × 0.9235 × 0.153 = Self-Employment Tax</span>
          <br />
          Example: $20,000 net profit → $20,000 × 0.9235 × 0.153 = <strong>$2,826</strong>
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <a
          href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2563eb', textDecoration: 'underline' }}
        >
          IRS — Self-Employment Tax (Social Security and Medicare Taxes)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Income Tax on Gig Work
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of SE tax, your gig income is also subject to regular <strong>federal income tax</strong> — and state income tax if you live in a state that has one.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you also have a regular job, your gig income stacks on top of your W-2 income. This matters a lot because the federal income tax uses <strong>marginal brackets</strong> — so your side hustle dollars are taxed at your <em>highest</em> bracket, not your average rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For example, if your day job already puts you in the 22% bracket, every dollar of side hustle profit is taxed at 22% — before the SE tax on top.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Income (Single, 2026)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['10%', '$0 – $11,925'],
              ['12%', '$11,926 – $48,475'],
              ['22%', '$48,476 – $103,350'],
              ['24%', '$103,351 – $197,300'],
              ['32%', '$197,301 – $250,525'],
              ['35%', '$250,526 – $626,350'],
              ['37%', 'Over $626,350'],
            ].map(([rate, range], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#7c3aed', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quarterly Estimated Taxes: Pay as You Earn
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because no employer withholds taxes from your gig income, the IRS requires you to pay taxes throughout the year instead of all at once on April 15. These are called <strong>quarterly estimated tax payments</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The four payment deadlines in 2026 are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Payment Period</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['January 1 – March 31', 'April 15, 2026'],
              ['April 1 – May 31', 'June 16, 2026'],
              ['June 1 – August 31', 'September 15, 2026'],
              ['September 1 – December 31', 'January 15, 2027'],
            ].map(([period, due], i) => (
              <tr key={period} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{period}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#7c3aed', fontWeight: 600 }}>{due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you skip quarterly payments, the IRS charges an <strong>underpayment penalty</strong> — even if you pay your full tax bill in April. To avoid the penalty, you generally need to pay either 90% of your current year&rsquo;s tax bill or 100% of last year&rsquo;s tax bill (110% if your income was over $150,000), whichever is smaller.{' '}
        <a
          href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2563eb', textDecoration: 'underline' }}
        >
          IRS — Estimated Taxes
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can make quarterly payments online through the IRS Direct Pay portal or by mailing Form 1040-ES with a check. Many gig workers simply pay online at{' '}
        <a
          href="https://www.irs.gov/payments"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2563eb', textDecoration: 'underline' }}
        >
          IRS.gov/payments
        </a>.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Deductions That Lower Your Tax Bill
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One advantage of gig work over a regular paycheck: you can deduct <strong>ordinary and necessary business expenses</strong> from your income before taxes are calculated. These deductions reduce your <em>net profit</em> — and that lowers both your SE tax and your income tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Common deductions for gig workers:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Mileage:</strong> The IRS standard mileage rate for 2026 is <strong>70 cents per mile</strong> for business driving. If you drive for a rideshare or delivery platform, every mile driven for a pickup, delivery, or returning to your hotspot counts. You can also deduct gas, maintenance, and depreciation using the actual expense method instead.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Phone and data plan:</strong> The portion of your phone bill used for work — taking orders, navigating, communicating with customers — is deductible. If you use your phone 60% for work, you can deduct 60% of your monthly bill.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Equipment and supplies:</strong> A phone mount, insulated delivery bag, portable charger, or any tool you buy specifically for gig work is deductible.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Hotspot or data:</strong> If you use mobile data for navigation or work-related apps, the business portion is deductible.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Platform fees:</strong> Any fees or commissions the gig platform deducts from your pay are generally already reflected in your 1099 — but any fees <em>you</em> pay out of pocket (like marketplace listing fees on Etsy) are deductible.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Home office:</strong> If you have a dedicated space in your home used exclusively for your gig work (like a room for an Etsy shop or a photography studio), you may be able to deduct a portion of rent or mortgage interest.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Self-employed health insurance:</strong> If you pay for your own health insurance and are not eligible for coverage through a spouse&rsquo;s employer plan, 100% of the premium is deductible.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Retirement contributions:</strong> A SEP-IRA lets self-employed workers contribute up to 25% of net self-employment income (max $70,000 in 2026), all pre-tax. This is one of the most powerful tax-reduction tools available to gig workers.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Keep records of everything.</strong> The IRS can audit you for up to 3 years. Save receipts, log your mileage in a notebook or app, and keep bank statements that show business expenses. A simple spreadsheet works — you do not need expensive accounting software.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 1099-K Form: When Platforms Report Your Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Payment platforms like Venmo, PayPal, Stripe, and the gig apps themselves are required to send you (and the IRS) a <strong>Form 1099-K</strong> when your payments through their platform exceed IRS reporting thresholds. The IRS has been lowering this threshold in recent years — check{' '}
        <a
          href="https://www.irs.gov/businesses/understanding-your-form-1099-k"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2563eb', textDecoration: 'underline' }}
        >
          IRS.gov
        </a>{' '}
        for the current 2026 limit.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Important:</strong> Even if you do NOT receive a 1099-K, your income is still taxable. The 1099-K threshold is just about when platforms are required to report — not about when <em>you</em> have to report. The IRS expects you to report all income, even cash tips and payments under $600. Many gig platforms also issue a <strong>Form 1099-NEC</strong> (Non-Employee Compensation) for payments made directly to you.
      </p>

      {/* Section 6 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $20,000 Side Hustle + $55,000 Day Job
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say you earn $55,000 at a regular job and make $20,000 delivering for DoorDash on the side. You have $3,000 in deductible business expenses (mileage, phone, insulated bags). You are a single filer taking the standard deduction.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Line Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross gig income (DoorDash)', '$20,000'],
              ['Less: business expenses (mileage, phone, bags)', '−$3,000'],
              ['Net profit (Schedule C)', '$17,000'],
              ['Self-employment tax (×0.9235×0.153)', '−$2,402'],
              ['SE tax deduction (half of SE tax)', '−$1,201'],
              ['Net gig income added to federal AGI', '$15,799'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: amount.startsWith('−') ? '#dc2626' : '#1e293b' }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Now let&rsquo;s add up the total extra tax owed because of the side hustle:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount Owed</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Self-employment tax (15.3% on $17K net)', '$2,402'],
              ['Federal income tax on gig income (22% marginal rate on $15,799)', '$3,476'],
              ['Estimated state income tax (varies by state)', '~$800–$1,500'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef2f2' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total extra tax (federal only)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>~$5,878</td>
            </tr>
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#1e293b' }}>Quarterly payment needed (÷ 4)</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>~$1,470 / quarter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Out of $20,000 in gross gig income, roughly <strong>$5,878 goes to federal taxes</strong> — about 29% of the gross. That leaves you with around $14,122 in true take-home pay from the side hustle (before state taxes). This is why setting aside 25–30% of gig income in a separate savings account is a smart habit.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How State Taxes Apply to Gig Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states treat gig income the same as any other self-employment income — it is added to your total income and taxed at your state&rsquo;s rates. A few key points:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No state income tax states:</strong> If you live in{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
          <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a>,{' '}
          <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a>,{' '}
          <a href="/wyoming" style={{ color: '#2563eb', textDecoration: 'underline' }}>Wyoming</a>,{' '}
          <a href="/alaska" style={{ color: '#2563eb', textDecoration: 'underline' }}>Alaska</a>,{' '}
          <a href="/south-dakota" style={{ color: '#2563eb', textDecoration: 'underline' }}>South Dakota</a>,{' '}
          <a href="/tennessee" style={{ color: '#2563eb', textDecoration: 'underline' }}>Tennessee</a>, or{' '}
          <a href="/new-hampshire" style={{ color: '#2563eb', textDecoration: 'underline' }}>New Hampshire</a>, you pay zero state income tax on your gig income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>High-tax states:</strong>{' '}
          <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> taxes self-employment income at up to 13.3%, and{' '}
          <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a> at up to 10.9%. In these states, gig workers in high income brackets can owe 15.3% (SE) + 37% (federal) + 13.3% (CA state) = over 65 cents in taxes on every marginal dollar.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Many states require quarterly estimated payments too.</strong> California, New York, Illinois, and others have their own estimated tax schedules. Check your state revenue department&rsquo;s website for deadlines.{' '}
          <a
            href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2563eb', textDecoration: 'underline' }}
          >
            Tax Foundation — State Income Tax Rates
          </a>
        </li>
      </ul>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Practical Tips for Managing Gig Taxes
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Open a separate savings account.</strong> Every time gig income hits your account, transfer 25–30% to a dedicated tax savings account. Treat it as money that isn&rsquo;t yours. When quarterly taxes come due, the money is already waiting.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Log miles from day one.</strong> Mileage is often the largest deduction for delivery and rideshare drivers. At 70 cents per mile, 10,000 miles = a $7,000 deduction that saves you over $2,000 in taxes. Apps like MileIQ or Everlance log trips automatically.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>File Schedule C with your Form 1040.</strong> Self-employment income and expenses are reported on Schedule C. Net profit from Schedule C flows to your Form 1040, and your SE tax is calculated on Schedule SE. Tax software like TurboTax or FreeTaxUSA handles this automatically.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Consider a SEP-IRA.</strong> If you have steady gig income, a SEP-IRA lets you shelter up to 25% of net self-employment income from taxes. This is the most powerful legal tax reduction available to gig workers, especially as income grows.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check if you qualify for the QBI deduction.</strong> The Qualified Business Income (QBI) deduction lets many self-employed workers deduct up to 20% of net self-employment income. Check IRS Publication 535 or consult a tax professional to see if you qualify.
        </li>
      </ul>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        When You Should See a Tax Professional
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most gig workers with one or two platforms and straightforward expenses, tax software handles things fine. But consider talking to a CPA or enrolled agent if:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Your gig income exceeds $40,000 per year — the tax savings from proper deduction planning outweigh the cost of advice</li>
        <li style={{ marginBottom: '0.5rem' }}>You work in multiple states</li>
        <li style={{ marginBottom: '0.5rem' }}>You received a notice from the IRS about unreported income</li>
        <li style={{ marginBottom: '0.5rem' }}>You are considering converting your gig work into an LLC or S-Corp</li>
        <li style={{ marginBottom: '0.5rem' }}>You have employees or contractors working for you</li>
      </ul>

      {/* Summary */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Side hustle income is great — but it comes with a higher tax burden than most people expect. As a gig worker, you pay the full 15.3% self-employment tax (both the employee and employer share), plus federal and state income tax on your net profit. The antidote is simple: track your expenses carefully to reduce your net profit, set aside 25–30% of income for taxes, and make quarterly payments on time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The more organized you are, the more of your hard-earned gig income you get to keep. The IRS deductions available to self-employed workers — mileage, phone, equipment, retirement accounts — are real money in your pocket if you use them.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f5f3ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Take-Home Pay With a Regular Job
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Compare how much you keep from a W-2 salary versus gig income. Enter your state and salary to see a full paycheck breakdown.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#7c3aed',
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
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS — Self-Employment Tax (Social Security and Medicare Taxes)
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS — Estimated Taxes
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/understanding-your-form-1099-k" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS — Understanding Your Form 1099-K
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/sep-plan-faqs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS — SEP Plan FAQs
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Tax Foundation — State Individual Income Tax Rates, 2026
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/news.release/eci.nr0.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Bureau of Labor Statistics — Employment Cost Index
          </a>
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
