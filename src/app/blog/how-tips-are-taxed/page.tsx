import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Tips Are Taxed: A Guide for Service Workers (2026)',
  description:
    "Every dollar in tips is taxable income — cash, credit card, and tip pool shares alike. Here's how tip income is taxed, how withholding works, and a full worked example at $35,000.",
  alternates: { canonical: '/blog/how-tips-are-taxed' },
  keywords:
    'how tips are taxed 2026, tip income taxes, tipped worker taxes, reporting tip income IRS, tip withholding, server taxes, restaurant worker taxes, FICA on tips',
  openGraph: {
    title: 'How Tips Are Taxed: A Guide for Service Workers (2026)',
    description:
      "Every dollar in tips is taxable income. Here's how tip income is taxed, how your employer withholds, and what every service worker needs to know.",
  },
}

export default function HowTipsAreTaxed() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Illustration showing tip income flowing into federal income tax, Social Security, and Medicare tax buckets"
        >
          <rect width="600" height="200" rx="12" fill="#d97706" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Tip jar */}
          <rect x="45" y="88" width="65" height="72" rx="5" fill="rgba(255,255,255,0.2)" />
          <rect x="38" y="76" width="79" height="15" rx="4" fill="rgba(255,255,255,0.3)" />
          {/* Bills sticking out */}
          <rect x="57" y="54" width="10" height="26" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="72" y="48" width="10" height="32" rx="2" fill="rgba(255,255,255,0.55)" />
          <rect x="87" y="57" width="10" height="23" rx="2" fill="rgba(255,255,255,0.55)" />
          {/* Dollar sign */}
          <text x="77" y="124" textAnchor="middle" fontSize="22" fontWeight="700" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">$</text>
          <text x="77" y="148" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">TIPS</text>

          {/* Arrow */}
          <line x1="124" y1="122" x2="182" y2="122" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="182,114 197,122 182,130" fill="rgba(255,255,255,0.7)" />

          {/* Heading */}
          <text x="388" y="52" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">ALL TIPS ARE TAXABLE INCOME</text>

          {/* Tax boxes */}
          <rect x="208" y="68" width="112" height="66" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="264" y="91" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Federal Income</text>
          <text x="264" y="105" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Tax</text>
          <text x="264" y="124" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="monospace">10–22%</text>

          <rect x="332" y="68" width="100" height="66" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="382" y="91" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Social Security</text>
          <text x="382" y="105" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Tax</text>
          <text x="382" y="124" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="monospace">6.2%</text>

          <rect x="444" y="68" width="100" height="66" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="494" y="91" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Medicare</text>
          <text x="494" y="105" textAnchor="middle" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Tax</text>
          <text x="494" y="124" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="monospace">1.45%</text>

          <text x="388" y="162" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Cash tips &bull; Credit card tips &bull; Tip pool shares — all must be reported</text>
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
        How Tips Are Taxed: A Guide for Service Workers (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 10, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work in a restaurant, hotel, hair salon, casino, or any other service industry, a large portion of your income probably comes from tips. And tips are treated differently from regular wages in a few important ways &mdash; most notably, you are responsible for reporting them yourself.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But one thing is not different: <strong>every dollar you receive in tips is taxable income</strong>. Cash tips, credit card tips, and tip pool shares all get reported to the IRS and are subject to federal income tax, Social Security tax, and Medicare tax. Here is everything you need to know.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Are Tips Taxable Income?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes &mdash; completely and without exception. The IRS defines tips as income, and they are taxed just like wages under federal law.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/tip-recordkeeping-and-reporting" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Tip Recordkeeping and Reporting)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This surprises some workers who assume cash tips &ldquo;don&rsquo;t count&rdquo; or are not tracked. That is not the case. The IRS requires you to track and report all tip income, and understating tip income is considered tax fraud.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Tips are subject to three types of tax:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Federal income tax</strong> &mdash; at your marginal rate (10%, 12%, 22%, etc.)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security tax</strong> &mdash; 6.2% (on income up to $168,600)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare tax</strong> &mdash; 1.45% (no income cap)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your state has an income tax, tip income is subject to that as well. And if you earn more than $200,000 total, the Additional Medicare Tax of 0.9% applies to the amount above that threshold.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Counts as a Tip?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS considers the following types of income to be tips:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Cash tips</strong> left directly by customers at the table or counter</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Credit card tips</strong> added to the bill by customers (paid to you when your employer processes the card)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Tips shared from a tip pool</strong> or split with other employees (only your share counts)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Gifts in lieu of cash</strong> if they have monetary value (e.g., a gift card from a customer)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What does <em>not</em> count as a tip &mdash; and is therefore handled differently &mdash; are <strong>service charges</strong>. This is an important distinction covered in detail below.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Report Tips to Your Employer (The $20 Rule)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal law requires you to report tip income to your employer if you receive <strong>$20 or more in tips during any calendar month</strong> from a single job. You must report these tips by the <strong>10th day of the following month</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example: if you earned $1,400 in tips during June, you must report those tips to your employer by July 10. Most employers provide a form for this, or you can use{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-4070" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Form 4070 (Employee&rsquo;s Report of Tips to Employer)
        </a>
        .
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you receive less than $20 in tips from one employer in a single month, you do not need to report those to your employer. However, you still must report all tip income &mdash; even amounts under $20 &mdash; on your own tax return at the end of the year using{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-4137" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 4137 (Social Security and Medicare Tax on Unreported Tip Income)
        </a>
        .
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS recommends keeping a daily tip log using{' '}
        <a href="https://www.irs.gov/forms-pubs/about-publication-1244" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Publication 1244 (Employee&rsquo;s Daily Record of Tips)
        </a>
        . This helps you accurately track what you earned and protect yourself in an audit.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Your Employer Withholds Tax on Tips
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Once you report tips to your employer, they are required to withhold federal income tax, Social Security tax (6.2%), and Medicare tax (1.45%) on those tips. But there is a catch: the only paycheck your employer controls is your <strong>wage paycheck</strong>, not the cash you received directly from customers.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because many tipped workers earn low hourly wages (sometimes just $2.13 per hour federally), there may not be enough in the wage check to cover all the required withholding. In that case, the IRS has a priority order for what gets withheld first:{' '}
        <a href="https://www.irs.gov/taxtopics/tc761" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 761)
        </a>
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Federal income tax on wages</li>
        <li style={{ marginBottom: '0.5rem' }}>Social Security and Medicare tax on wages</li>
        <li style={{ marginBottom: '0.5rem' }}>Federal income tax on tips</li>
        <li style={{ marginBottom: '0.5rem' }}>Social Security and Medicare tax on tips</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your wage check is too small to cover all of this, some taxes may go uncollected during the year &mdash; and you will owe them when you file your annual tax return. This is why many tipped workers end up owing money on April 15.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One practical result: your take-home paycheck from your employer may be very small (or even zero), because the employer is using it to cover FICA on both your wages and your reported tips. You already have the tip cash in hand, so the employer deducts taxes from what they owe you directly.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: A Server Earning $35,000
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a complete tax picture for a server at a mid-range restaurant in Texas (no state income tax), filing single with no dependents.
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        <strong>Worker profile:</strong> 2,000 hours/year &bull; $5.00/hr wage &bull; $25,000 in tips &bull; Files single
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Income Breakdown
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Source</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Hourly wages ($5.00 × 2,000 hrs)', '$10,000'],
              ['Reported tip income', '$25,000'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#fefce8' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Gross Income</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$35,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Federal Tax Calculation
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Calculation</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Standard deduction</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>Single filer, 2026</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>&minus;$15,000</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Taxable income</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$35,000 &minus; $15,000</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$20,000</td>
            </tr>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>10% bracket (first $11,925)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$11,925 &times; 10%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$1,192.50</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>12% bracket (next $8,075)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$8,075 &times; 12%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$969.00</td>
            </tr>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Social Security (6.2%)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$35,000 &times; 6.2%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$2,170.00</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Medicare (1.45%)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$35,000 &times; 1.45%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$507.50</td>
            </tr>
            <tr style={{ background: '#fef2f2' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total federal taxes</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$4,839.00</td>
            </tr>
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#1e293b' }}>Annual take-home pay (no state tax)</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$30,161</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The effective federal tax rate is <strong>13.8%</strong> ($4,839 / $35,000). Notice that FICA applies to the full $35,000 &mdash; both wages and tips. There is no standard deduction for Social Security and Medicare the way there is for income tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Also notice how the $15,000 standard deduction eliminates the bottom slice of taxable income. If this server also contributed $2,000 to a traditional IRA, taxable income would drop to $18,000 and their income tax bill would fall by $240.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 8% Allocated Tips Rule (For Large Restaurants)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work at a <strong>large food or beverage establishment</strong> &mdash; defined as one with more than 10 employees on a typical business day, where food and drink make up more than 50% of receipts &mdash; a special IRS rule applies.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These establishments must report to the IRS whether total tips reported by all employees equal at least <strong>8% of gross food and drink receipts</strong>. If employees collectively report less than 8%, the employer must <strong>allocate the difference</strong> among tipped employees.{' '}
        <a href="https://www.irs.gov/taxtopics/tc761" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 761)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These &ldquo;allocated tips&rdquo; show up in <strong>Box 8 of your W-2</strong>. They represent what the IRS believes you underreported. Allocated tips are not withheld by your employer during the year &mdash; they are an IRS estimate that tells you (and them) that your actual tips may have been higher than what you reported.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you kept good records and can prove your actual tip income was lower, you can use IRS Form 4137 to compute the correct FICA tax based on your actual tips rather than the allocated amount. The burden of proof falls on you, which is another reason to keep a daily tip log.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Federal Tipped Minimum Wage: $2.13 per Hour
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under federal law, employers can pay tipped workers a <strong>base cash wage of just $2.13 per hour</strong> &mdash; a rate that has not changed since 1991. This is called the <strong>federal tipped minimum wage</strong>.{' '}
        <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL &mdash; State Minimum Wage Laws)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The catch: the employer must guarantee that tips plus the $2.13 wage add up to at least the federal minimum wage of $7.25 per hour. If they do not &mdash; because it was a slow shift with few customers &mdash; the employer must make up the difference. This is called the <strong>tip credit</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, many states have set their own higher base wages for tipped workers. California, for example, requires employers to pay tipped workers the full state minimum wage before tips &mdash; currently well above $15/hour. Always check your state&rsquo;s laws to know what your employer is legally required to pay you.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        From a tax perspective, the $2.13 base wage works the same as any other wage &mdash; it is subject to income tax withholding and FICA. What changes is the math on how much withholding can actually come out of your paycheck.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Service Charges Are Not Tips &mdash; They Are Wages
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many restaurants add an <strong>automatic gratuity</strong> (often 18&ndash;20%) for large parties. You might assume this functions like a tip &mdash; but it does not.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A mandatory service charge is a <strong>wage paid by the employer</strong>, not a voluntary payment from the customer. The IRS distinguishes between the two based on whether the customer had free choice in paying it.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p531.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 531 &mdash; Reporting Tip Income)
        </a>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tip</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Service Charge</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Who sets it?', 'Customer (voluntary)', 'Employer (mandatory)'],
              ['Reported by?', 'Employee to employer', 'Employer to IRS directly'],
              ['Shows up on W-2 as?', 'Tips (Box 7)', 'Wages (Box 1)'],
              ['Employer pays FICA on it?', 'Yes, matched 7.65%', 'Yes, matched 7.65%'],
              ['Counts as "tips" for 8% rule?', 'Yes', 'No'],
            ].map(([label, tip, svc], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{tip}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{svc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The practical difference: with a service charge, the employer handles all the reporting and withholding. With tips, <em>you</em> are responsible for keeping records and reporting to your employer monthly.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Cash Tips vs. Credit Card Tips: Does It Matter?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        From a tax standpoint, cash tips and credit card tips are treated identically &mdash; both are taxable income. However, they are handled differently in practice.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Credit card tips</strong> create a paper trail. Your employer knows exactly what amount was tipped on each transaction, so these are easier to track and nearly impossible to underreport. Some employers charge a small processing fee on credit card tips (for the card transaction fee) &mdash; this is legal, as long as it does not bring you below minimum wage.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Cash tips</strong> have no automatic paper trail. This is why the IRS requires you to keep your own records. If you are ever audited, you need documentation &mdash; a daily log showing date, establishment, shift hours, and tip amount received.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The penalty for failing to report tip income is a penalty equal to 50% of the unpaid Social Security and Medicare taxes, in addition to the tax owed and any interest. Intentional underreporting can result in criminal charges.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        When You Owe at Tax Time: Quarterly Estimated Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because tipped workers often have small wage checks that cannot cover all the required withholding, many end up owing money when they file their April return. If you expect to owe <strong>$1,000 or more</strong> at tax time, the IRS requires you to make <strong>quarterly estimated tax payments</strong> to avoid an underpayment penalty.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Estimated Taxes)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Estimated tax due dates in 2026:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>April 15</strong> &mdash; for income earned January 1 &ndash; March 31</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>June 16</strong> &mdash; for income earned April 1 &ndash; May 31</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>September 15</strong> &mdash; for income earned June 1 &ndash; August 31</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>January 15, 2027</strong> &mdash; for income earned September 1 &ndash; December 31</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can pay using the{' '}
        <a href="https://www.irs.gov/payments" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Direct Pay tool
        </a>{' '}
        or by mailing Form 1040-ES with a check. A simple approach: divide your expected total tax bill by 4 and pay that amount each quarter.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Alternatively, if your wages and tips allow it, you can ask your employer to withhold extra from each paycheck by submitting an updated W-4 with an additional dollar amount in Step 4(c). This can keep you from owing a lump sum at tax time.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Tip Pools: How Shared Tips Are Taxed
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many restaurants operate a <strong>tip pool</strong>, where servers, bussers, bartenders, and food runners contribute a percentage of their tips into a shared pool that is then distributed among the team. Each worker is taxed only on the amount they actually <em>receive</em> from the pool &mdash; not on what they contributed.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example: if you earned $200 in tips and contributed 20% ($40) to the tip pool, then received $30 back from the pool, your taxable tip income for that shift is <strong>$190</strong> ($200 &minus; $40 + $30).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under the <strong>Fair Labor Standards Act (FLSA)</strong>, employers generally cannot require employees to share tips with managers or supervisors, or keep any portion of tips themselves. Some states have additional protections.{' '}
        <a href="https://www.dol.gov/agencies/whd/flsa/tips" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL &mdash; Tips Under the FLSA)
        </a>
      </p>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Tips Appear on Your W-2 at Year-End
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you receive your W-2 in January, tip income is split across several boxes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 1 (Wages, tips, other compensation):</strong> Your wages plus tips that were reported to your employer &mdash; this is your total taxable income subject to income tax</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 7 (Social Security tips):</strong> The total tips you reported to your employer (not included in Box 3)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Box 8 (Allocated tips):</strong> Tips the IRS allocated to you under the 8% rule, if applicable &mdash; not automatically included in Box 1</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have allocated tips in Box 8, you must either include them in your income (by adding them to your wages on your tax return) or use IRS Form 4137 to calculate the actual FICA owed on your actual tip income with documentation to back it up.
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Tips are taxable income, full stop. Whether they come in cash, via credit card, or through a tip pool, every dollar must be reported to your employer monthly (if $20 or more) and to the IRS annually. Tip income is subject to federal income tax at your bracket rate, plus 6.2% Social Security and 1.45% Medicare.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Because tipped workers often have small wage checks, withholding may not cover all taxes owed during the year. The two best defenses: keep a daily tip log so you always know your true income, and either adjust your W-4 to withhold extra or make quarterly estimated payments so you are not hit with a large bill in April.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The good news: at $35,000 in total income, the effective federal tax rate is only around 13.8% &mdash; a manageable number when you plan for it rather than being surprised at tax time.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Take-Home Pay Including Tips
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your total annual income &mdash; wages plus tips &mdash; to see your exact federal income tax, FICA breakdown, and what you actually take home each paycheck.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#d97706',
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
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/tip-recordkeeping-and-reporting" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tip Recordkeeping and Reporting</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc761" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 761: Tips &ndash; Withholding and Reporting</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p531.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 531: Reporting Tip Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-4070" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 4070: Employee&rsquo;s Report of Tips to Employer</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-4137" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 4137: Social Security and Medicare Tax on Unreported Tip Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Estimated Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL &mdash; State Minimum Wage Laws</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/flsa/tips" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL &mdash; Tips Under the Fair Labor Standards Act</a>
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
