import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'How PTO Payout Is Taxed When You Leave a Job (2026 Guide)' },
  description:
    'When you quit or get laid off, your unused PTO payout is taxed as ordinary income — with 22% federal withholding, FICA, and state taxes. Full 2026 guide with a worked example.',
  alternates: { canonical: '/blog/pto-payout-taxes-2026' },
  keywords:
    'PTO payout taxes, how is PTO payout taxed, vacation payout taxes 2026, accrued PTO taxable, unused vacation pay taxes, PTO withholding rate, leave payout tax',
  openGraph: {
    type: 'article',
    url: '/blog/pto-payout-taxes-2026',
    images: [{ url: '/og/blog/pto-payout-taxes-2026', width: 1200, height: 630 }],
    title: 'How PTO Payout Is Taxed When You Leave a Job (2026 Guide)',
    description:
      "A $4,000 PTO payout can lose $1,186 to taxes before you see it. Here's exactly how federal withholding, FICA, and state taxes apply — with a full worked example.",
  },
}

export default function PtOPayoutTaxes2026() {
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
          aria-label="PTO payout and taxes illustration"
        >
          <rect width="600" height="200" rx="12" fill="#e11d48" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Calendar icon */}
          <rect x="40" y="55" width="80" height="90" rx="6" fill="rgba(255,255,255,0.2)" />
          <rect x="40" y="55" width="80" height="22" rx="6" fill="rgba(255,255,255,0.35)" />
          <line x1="56" y1="95" x2="96" y2="95" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="56" y1="111" x2="96" y2="111" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="56" y1="127" x2="80" y2="127" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <text x="80" y="73" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">PTO</text>
          {/* Minus arrow */}
          <text x="148" y="108" textAnchor="middle" fontSize="28" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="monospace">−</text>
          {/* Tax box */}
          <rect x="175" y="55" width="130" height="90" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="240" y="82" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Federal 22%</text>
          <text x="240" y="102" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Social Security 6.2%</text>
          <text x="240" y="122" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Medicare 1.45%</text>
          <text x="240" y="142" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">State Tax</text>
          {/* Equals arrow */}
          <text x="328" y="108" textAnchor="middle" fontSize="28" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="monospace">=</text>
          {/* Take-home */}
          <rect x="355" y="55" width="130" height="90" rx="6" fill="rgba(255,255,255,0.25)" />
          <text x="420" y="90" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="sans-serif">Take-Home</text>
          <text x="420" y="112" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="monospace">~70%</text>
          <text x="420" y="132" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">of PTO payout</text>
          {/* Label */}
          <text x="510" y="108" textAnchor="middle" fontSize="26" fontWeight="700" fill="rgba(255,255,255,0.5)" fontFamily="monospace">V</text>
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
        How PTO Payout Is Taxed When You Leave a Job (2026 Guide)
      </h1>

      <ArticleMeta slug="pto-payout-taxes-2026" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you quit, get laid off, or are let go, your employer may owe you a check for your unused paid time off (PTO). That sounds like a nice farewell bonus — but before you spend it, understand how it gets taxed. A $4,000 PTO payout can shrink by $1,000 or more by the time it hits your bank account.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers exactly how PTO payouts are taxed at the federal and state level, why your withholding might look surprisingly high, and what you can do about it.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a PTO Payout?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>PTO payout</strong> (also called vacation payout or accrued leave payout) is money your employer pays you for unused paid time off when your employment ends. If you had 80 hours of vacation banked and your hourly rate is $38.46, a full payout would be about $3,077 before taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Not every employer is required to pay out PTO — it depends on your state and your company's policy. But when they do, the IRS treats it like any other wages.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Is PTO Payout Taxable?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes — completely. The IRS classifies unused vacation and PTO payouts as <strong>supplemental wages</strong>, which are taxed as ordinary income.{' '}
        <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15 — Employer's Tax Guide)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That means PTO payout is subject to:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Federal income tax withholding</li>
        <li style={{ marginBottom: '0.5rem' }}>Social Security tax (6.2%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Medicare tax (1.45%)</li>
        <li style={{ marginBottom: '0.5rem' }}>State income tax (in states that have one)</li>
        <li style={{ marginBottom: '0.5rem' }}>Local income tax (in a handful of cities)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is no special lower tax rate for PTO payouts. The government sees it the same as a regular paycheck.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal Withholding: The 22% Supplemental Rate
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When your employer pays out PTO separately from your last regular paycheck, they have two options for calculating federal withholding:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Flat supplemental rate (most common):</strong> Withhold <strong>22%</strong> for federal income tax. This is the IRS-approved flat rate for supplemental wages up to $1,000,000 in 2026. It is fast and simple for employers to calculate.{' '}
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Pub. 15)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Aggregate method:</strong> Add the PTO payout to your final regular wages and withhold based on your W-4 and the total combined amount. This can result in more or less withholding depending on your income.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are in the 12% bracket, 22% withholding means <em>too much</em> is taken up front — but you will get that extra back as a refund when you file your tax return. If you are in the 24% or higher bracket, 22% withholding may actually be <em>too little</em>, meaning you could owe more at filing time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Remember:</strong> withholding is just an estimate. Your actual tax on the PTO payout depends on your total income for the year.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        FICA Taxes on PTO Payout
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of income tax, your PTO payout is subject to <strong>FICA</strong> — the payroll taxes that fund Social Security and Medicare:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security:</strong> 6.2% (on the first $174,900 of total 2026 wages)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare:</strong> 1.45% (no income cap)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Combined FICA is <strong>7.65%</strong>. Unlike income taxes, there is no refund mechanism for FICA — whatever is withheld is owed.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One exception: if your total wages for the year (regular pay plus PTO payout) already exceeded the Social Security wage base of $174,900, the PTO payout would not be subject to the 6.2% Social Security portion.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Income Taxes on PTO Payout
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live and work in a state with income tax, your PTO payout gets hit with state withholding too. State rates range from under 3% to over 13%:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>No state tax:</strong>{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
          <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a>,{' '}
          <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a>, and four other states charge no state income tax — so you keep more of your PTO payout.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Moderate state tax:</strong>{' '}
          <a href="/colorado" style={{ color: '#2563eb', textDecoration: 'underline' }}>Colorado</a> (4.4% flat),{' '}
          <a href="/illinois" style={{ color: '#2563eb', textDecoration: 'underline' }}>Illinois</a> (4.95% flat), and{' '}
          <a href="/georgia" style={{ color: '#2563eb', textDecoration: 'underline' }}>Georgia</a> (5.49%).
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>High state tax:</strong>{' '}
          <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> can withhold 10%+ on supplemental wages. If your job was in California, your payout gets California tax — even if you've already moved.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The state that applies is generally where you <em>worked</em>, not where you live at the time of the payout.
      </p>

      {/* Section 6 - Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $4,000 PTO Payout
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Say you leave a job after accruing 104 hours of unused PTO. At $38.46 per hour, your payout is exactly $4,000. Here is how taxes hit it in two different states:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> (no state tax)
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross PTO Payout', '$4,000', '$4,000'],
              ['Federal Income Tax (22%)', '−$880', '−$880'],
              ['Social Security (6.2%)', '−$248', '−$248'],
              ['Medicare (1.45%)', '−$58', '−$58'],
              ['State Income Tax', '$0', '−$400'],
              ['CA SDI (0.9%)', '$0', '−$36'],
            ].map(([label, tx, ca], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross PTO Payout' ? '#1e293b' : '#dc2626' }}>{tx}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross PTO Payout' ? '#1e293b' : '#dc2626' }}>{ca}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Take-Home PTO Payout</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,814</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,378</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Texas worker keeps <strong>$2,814</strong> — about 70 cents of every dollar. The California worker keeps only <strong>$2,378</strong> — about 59 cents on the dollar — because of California&rsquo;s 10% supplemental withholding rate on top of federal and FICA.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These are <em>withholding</em> numbers, not your final tax bill. If the 22% federal withholding is more than you actually owe (because your total annual income puts you in the 12% bracket), you would get the difference back as a tax refund.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which States Require Employers to Pay Out PTO?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Not every employer must pay out unused PTO — it depends on your state:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rule</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['California', 'Must pay all accrued vacation/PTO — it is treated as earned wages by law'],
              ['Colorado', 'Must pay accrued PTO under the HELP Act (since Jan. 1, 2023)'],
              ['Illinois', 'Required to pay accrued PTO under Illinois Wage Payment and Collection Act'],
              ['Massachusetts', 'Accrued vacation must be paid out upon separation'],
              ['Montana', 'Must pay all accrued PTO at separation'],
              ['Nebraska', 'Must pay out unused vacation per employer policy'],
              ['North Dakota', 'Must pay accrued vacation unless a forfeiture agreement exists'],
              ['Rhode Island', 'Must pay out vacation after 1 year of employment'],
              ['New York, Texas, Florida', 'No state law — it depends entirely on your employer\'s written policy'],
            ].map(([state, rule], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your state does not require PTO payout, check your employee handbook. Many employers promise payout in their written policy — and in most states, a written promise creates a legal obligation to pay.{' '}
        <a href="https://www.dol.gov/agencies/whd/contact/local-offices" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL — Wage and Hour Division)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does PTO Payout Affect Your Overall Tax Bill for the Year?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes — because PTO payout counts as income for the year you receive it. If you leave a job in December and get a $5,000 PTO payout, that $5,000 gets added to your total taxable income for that tax year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most people, this does not push them into a dramatically higher bracket. But if you are right at the edge of a tax bracket, a large PTO payout could nudge a portion of your income into the next tier.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Example: a single filer with $50,000 in taxable income is right at the top of the 12% bracket ($50,400 for 2026). A $4,000 PTO payout pushes $3,600 of it into the 22% bracket — costing an extra $360 in federal tax beyond what the 12% rate would have cost.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        5 Strategies to Reduce Tax on PTO Payout
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You cannot avoid taxes on a PTO payout — but you can manage them:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Use up PTO before your last day.</strong> If you take the time off instead of getting a cash payout, the income spreads across regular pay periods rather than arriving as one lump sum. This does not change your annual tax bill, but it avoids the optics of a big supplemental check.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Increase 401(k) contributions while still employed.</strong> Before your last day, you can raise your 401(k) deferral percentage. Since PTO payout is typically processed with your final paycheck, a higher pre-tax contribution lowers the taxable portion — but check with HR, because some plans exclude terminal payouts from deferrals.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Ask for a delayed payment.</strong> If you are leaving late in the year and have high income, ask your employer whether the payout can be deferred to January 1 of the next year. You would pay tax on it next year instead, which may put you in a lower bracket if your new job pays less or starts later.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Maximize other deductions in the same year.</strong> Contribute to a Health Savings Account (HSA), make charitable donations, or prepay deductible expenses — anything that lowers your taxable income for the year you receive the payout.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Adjust your withholding on future paychecks.</strong> If you start a new job in the same year and had 22% withheld on the PTO payout, you might be over-withheld for the year. File a new W-4 at the new job claiming the right allowances so you do not give the IRS an interest-free loan all year.
        </li>
      </ol>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What About Sick Time Payout?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unused <strong>sick time</strong> payout is taxed identically to PTO payout — ordinary income, subject to federal and state income tax plus FICA. The IRS does not give sick leave any preferential treatment.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, fewer states require employers to pay out accrued sick time compared to vacation. California, for example, requires vacation payout but does not require sick leave payout under state law (though local ordinances may differ).
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        PTO payout is taxed like ordinary income. Federal withholding comes out at 22% under the supplemental wage rule, FICA takes another 7.65%, and your state gets its cut too. On a $4,000 payout, you might take home anywhere from $2,378 (California) to $2,814 (Texas) — not the full $4,000 you expected.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The withholding does not necessarily equal your final tax bill. If 22% overstates what you actually owe — because your income for the year is lower — you will get a refund when you file. Use the free paycheck calculator to see what your take-home looks like in your state.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fdf2f8',
          border: '1px solid #fbcfe8',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          Calculate Your Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          See exactly how state taxes affect your paycheck — from your first day on the job to your last.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#e11d48',
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
          <a href="https://www.irs.gov/publications/p15" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15 — Employer&rsquo;s Tax Guide (Supplemental Wages)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 751 — Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/contact/local-offices" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Department of Labor — Wage and Hour Division</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-individual-income-tax-rates-brackets/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation — State Individual Income Tax Rates and Brackets</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov — Contribution and Benefit Base (Social Security Wage Base 2026)</a>
        </li>
      </ul>

      <ArticleFooter current="pto-payout-taxes-2026" />
    </article>
  )
}
