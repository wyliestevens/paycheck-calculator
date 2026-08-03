import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Severance Pay and Taxes: What You Need to Know (2026)',
  description:
    "Severance pay is taxed as ordinary income — federal, state, and FICA all apply. Here's how withholding works on your separation package, with a full worked example.",
  alternates: { canonical: '/blog/severance-pay-and-taxes' },
  keywords:
    'severance pay taxes 2026, is severance taxable, how severance is taxed, severance package taxes, severance withholding, severance pay federal income tax, severance pay take home',
  openGraph: {
    title: 'Severance Pay and Taxes: What You Need to Know (2026)',
    description:
      "Severance is taxed as ordinary income. Learn how federal, state, and FICA taxes apply — with a full worked example showing your take-home on a 4-week package.",
  },
}

export default function SeverancePayAndTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Severance pay and taxes illustration showing package minus deductions equals take-home"
        >
          <rect width="600" height="200" rx="12" fill="#0f766e" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Briefcase icon (left) */}
          <rect x="35" y="84" width="82" height="54" rx="6" fill="rgba(255,255,255,0.22)" />
          <rect x="54" y="72" width="44" height="16" rx="8" fill="rgba(255,255,255,0.15)" />
          <rect x="61" y="68" width="30" height="14" rx="7" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <text x="76" y="115" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif" letterSpacing="0.5">SEVERANCE</text>
          {/* Arrow 1 */}
          <line x1="127" y1="111" x2="187" y2="111" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="187,104 200,111 187,118" fill="rgba(255,255,255,0.5)" />
          {/* Tax boxes center */}
          <rect x="210" y="52" width="178" height="36" rx="6" fill="rgba(255,255,255,0.22)" />
          <text x="299" y="75" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="sans-serif">Severance Pay</text>
          <rect x="210" y="96" width="178" height="28" rx="5" fill="rgba(255,255,255,0.14)" />
          <text x="299" y="115" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">Federal Tax (22% flat)</text>
          <rect x="210" y="130" width="178" height="28" rx="5" fill="rgba(255,255,255,0.14)" />
          <text x="299" y="149" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">FICA + State Tax</text>
          {/* Arrow 2 */}
          <line x1="398" y1="111" x2="450" y2="111" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="450,104 463,111 450,118" fill="rgba(255,255,255,0.5)" />
          {/* Take-home circle */}
          <circle cx="516" cy="111" r="48" fill="rgba(255,255,255,0.2)" />
          <text x="516" y="105" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">Take</text>
          <text x="516" y="122" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff" fontFamily="sans-serif">Home</text>
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
        Severance Pay and Taxes: What You Need to Know (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 3, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Losing a job is stressful enough. Then your employer hands you a severance package, and suddenly you have to figure out how much of it you actually get to keep. The short answer: severance pay is taxed just like a regular paycheck &mdash; federal income tax, FICA, and state taxes all apply. But the way it is withheld can catch people off guard, and your final tax bill may be higher or lower than what was withheld.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how severance pay is taxed in 2026, how your employer calculates withholding, and what steps you can take to avoid a nasty surprise when you file your return.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Is Severance Pay Taxable?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes &mdash; completely. The IRS classifies severance pay as <strong>ordinary income</strong>, which means it is subject to all the same taxes as your regular salary. There is no special tax break for losing your job.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Federal income tax</strong> &mdash; withheld at 22% (flat supplemental rate) or using your W-4 tax tables</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security tax</strong> &mdash; 6.2%, up to the annual wage base ($168,600 in 2026)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare tax</strong> &mdash; 1.45% on all severance, with no income cap</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>State income tax</strong> &mdash; applies if your state has one</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer is required to report your severance on your W-2 at year-end, combined with your regular wages in Box 1.{' '}
        <a href="https://www.irs.gov/taxtopics/tc756" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 756: Employment Taxes)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Federal Income Tax Is Withheld on Severance
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Employers use one of two methods to withhold federal income tax from severance payments:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Method 1: The Flat 22% Supplemental Rate
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most employers use this method. The IRS allows employers to withhold a flat <strong>22%</strong> from supplemental wages &mdash; which includes severance pay &mdash; when the payment is made separately from your regular paycheck. It is the same flat rate used for most bonuses.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This method is simple, but it is just an estimate. Your <em>actual</em> federal tax rate on that income depends on your total annual income. If your marginal rate ends up being 12% for the year, you will get some of that 22% back as a refund. If you are in the 24% or higher bracket, you may owe more when you file.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p15.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15 &mdash; Employer Tax Guide)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Method 2: The Aggregate Method
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some employers add your severance to your final regular paycheck and withhold using the standard tax tables. This typically results in <em>higher</em> withholding because combining two payments in one pay period pushes your annualized income into a higher bracket for calculation purposes. You are not actually in a higher bracket for the full year &mdash; but the withholding formula assumes you are. You will get any excess back as a refund.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        FICA Taxes on Severance Pay
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Social Security and Medicare taxes apply to severance pay just like regular wages. In 2026, the rates are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Social Security:</strong> 6.2% on your combined wages and severance, up to the $168,600 wage base. If you had already earned $168,600 in wages before your layoff, your severance is not subject to Social Security tax.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Medicare:</strong> 1.45% on all severance, with no income cap.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Additional Medicare tax:</strong> An extra 0.9% if your total income for the year exceeds $200,000 as a single filer or $250,000 if married filing jointly.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Combined, Social Security and Medicare cost you <strong>7.65%</strong> of your severance on top of federal and state income taxes.{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 751: Social Security and Medicare Withholding)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Income Tax on Severance
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states treat severance pay the same as regular wages for state income tax purposes. That means your state tax bill depends entirely on where you live and work:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No state income tax:</strong> If you live in{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
          <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a>,{' '}
          <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington</a>, Wyoming, Alaska, South Dakota, Tennessee, or New Hampshire, you owe zero state income tax on your severance.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>California:</strong> Severance is taxed as ordinary income at state rates up to 13.3%, plus 1.1% for State Disability Insurance (SDI).{' '}
          <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>See the California paycheck calculator</a>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>New York:</strong> Taxed as ordinary income at state rates up to 10.9%, plus New York City tax if applicable.{' '}
          <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>See the New York paycheck calculator</a>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Most other states:</strong> Your regular state income tax rate applies to severance income the same as it does to wages.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        An important nuance: the state where you <em>worked</em> typically has the right to tax your severance &mdash; not necessarily where you live when you receive the payment. If you were laid off while working in California but have since moved to Texas, California may still claim a portion of your severance. This is a situation where talking to a tax professional is worth the cost.
      </p>

      {/* Section 5 - Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $75,000 Salary, 4 Weeks of Severance
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say you earn $75,000 per year and your employer offers four weeks of severance pay. Here is exactly how the math breaks down:
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Gross severance:</strong> $75,000 &divide; 52 weeks &times; 4 weeks = <strong>$5,769</strong>
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
                <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>
                <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Severance', '$5,769', '$5,769'],
              ['Federal Income Tax (22%)', '-$1,269', '-$1,269'],
              ['Social Security (6.2%)', '-$358', '-$358'],
              ['Medicare (1.45%)', '-$84', '-$84'],
              ['State Income Tax (~6%)', '$0', '-$346'],
              ['CA SDI (1.1%)', '$0', '-$63'],
            ].map(([label, tx, ca], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross Severance' ? '#1e293b' : '#dc2626' }}>{tx}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label === 'Gross Severance' ? '#1e293b' : '#dc2626' }}>{ca}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Take-Home Severance</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$4,058</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$3,649</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A Texas worker takes home about <strong>$409 more</strong> on the same severance package &mdash; purely because Texas has no state income tax and no state disability insurance.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Keep in mind: the 22% federal withholding on this payment is just an estimate. If your total income for the year (wages earned before the layoff, plus severance) puts you in the 12% bracket, you will get a refund come April. If you were a higher earner and your effective rate for the year is 24%, you may owe a bit more.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Else Might Be in Your Separation Package?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A full separation package often includes more than just weekly salary continuation. Here is how the other pieces are typically taxed:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Unused PTO and Vacation Payout
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer pays out unused paid time off (PTO) or vacation days, that amount is fully taxable and is typically withheld at the 22% supplemental rate &mdash; the same as severance. California is notable here: it treats accrued PTO as earned wages, so employers in California are legally required to pay it out at termination.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        COBRA Subsidies
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer agrees to pay your health insurance premiums for a period after your last day, that employer-paid premium is generally taxable income to you &mdash; it will appear on your W-2. If you instead continue your coverage through COBRA at your own expense, the premiums you pay come out of your own after-tax money. Most people pay between $500 and $700 per month for COBRA family coverage, and that cost is not tax-deductible for employees unless you itemize and your total medical expenses exceed 7.5% of your adjusted gross income.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Outplacement Services
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Career coaching, resume writing, and job placement assistance provided by your employer are generally <em>not</em> taxable income to you, as long as they have no cash value and are used for the benefit of finding new employment. Ask HR to confirm the treatment of any services they offer.
      </p>

      {/* Section 7 - Strategies */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Strategies to Manage Your Tax Bill on Severance
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You cannot avoid paying taxes on severance, but there are smart moves worth knowing:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. Ask to Split Payments Across Two Calendar Years
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are laid off in November or December, ask your employer to pay half the severance in December and half in January. This splits the income across two tax years, which may keep you in a lower bracket in both years compared to receiving the entire lump sum at once. Not all employers will agree, but it costs them nothing to say yes.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Max Out Your 401(k) Before Your Last Day
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have not yet hit your annual 401(k) limit, ask HR if you can temporarily increase your contribution rate for your remaining paychecks before your last day. Pre-tax 401(k) contributions reduce your taxable income, which lowers the bracket your severance gets taxed in. The 2026 contribution limit is <strong>$23,500</strong> per year, or <strong>$31,000</strong> if you are 50 or older.{' '}
        <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; 401(k) Contribution Limits)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Make a Traditional IRA Contribution
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        As long as you have earned income for the year (from the job you just left), you can contribute to a Traditional IRA even after your layoff, right up until Tax Day. The 2026 IRA contribution limit is <strong>$7,000</strong> (or $8,000 if you are 50+). A deductible IRA contribution reduces your adjusted gross income, which can lower the effective tax rate on your severance. Income limits may apply if you or your spouse had access to a workplace retirement plan.{' '}
        <a href="https://www.irs.gov/retirement-plans/ira/iras" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; IRA Deduction Limits)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Update Your W-4 at Your Next Job
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you land a new job soon after your layoff, update your W-4 to account for the severance income you already received. If your new employer withholds based only on your new salary with no adjustment, you could be under-withheld for the year and face a penalty in April. The IRS provides a free withholding estimator to help you figure out the right number.{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Withholding Estimator)
        </a>
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What If You Were Laid Off Mid-Year?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Being laid off partway through the year can actually work in your favor. Here is why:
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal income tax is calculated on your <em>total annual income</em>. If you earned $45,000 in wages before your layoff and then received $5,769 in severance, your total income for the year is around $50,769. That is likely in the 12% or 22% bracket &mdash; potentially lower than when you were fully employed and earning a full year&rsquo;s salary. The 22% withheld from your severance may be more than your actual marginal rate, which means a refund.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On the flip side, if you receive a generous severance package &mdash; say, six months of pay &mdash; and quickly start a new job, your total income for the year could be higher than any single year of full employment. In that case, the 22% withholding might not be enough to cover what you actually owe.
      </p>

      {/* Section 9 - Negotiating */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Negotiating Your Severance: What to Ask For
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Severance packages are often negotiable &mdash; more people just do not realize it. Most employers expect some back-and-forth, especially if you have been with the company for a long time or hold a senior role. Here are the things worth asking about:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>More weeks of pay:</strong> A common formula is one to two weeks per year of service. If you have been there five or ten years, push for the higher end or beyond.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Extended health coverage:</strong> Ask whether your employer can continue your health benefits for 30 to 90 days instead of cutting them off on your last day. This is often far cheaper than paying COBRA premiums yourself.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Accelerated equity vesting:</strong> If you have unvested stock options or RSUs that are close to vesting, ask whether the layoff will trigger acceleration. Some employment agreements include this; others do not unless you ask.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Payment timing:</strong> If you are laid off near year-end, ask to have part of your severance paid in January to spread the income across two tax years.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Reference letter or neutral reference:</strong> Getting agreement on a positive or neutral reference in writing is often easier to negotiate at separation than later.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most employers will ask you to sign a release of claims in exchange for severance. This is standard practice. Under the Older Workers Benefit Protection Act (OWBPA), employees over 40 must be given at least <strong>21 days</strong> to review the agreement (or 45 days in a group layoff), plus a <strong>7-day revocation period</strong> after signing. Take your time &mdash; especially for larger packages, having an employment attorney review the document is well worth the cost.{' '}
        <a href="https://www.dol.gov/agencies/whd/plant-closings/warn" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (U.S. Department of Labor &mdash; Worker Rights on Layoffs)
        </a>
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Severance pay is taxed just like your regular wages &mdash; federal income tax (typically withheld at 22%), Social Security, Medicare, and state income tax all apply. Depending on your total income for the year, you may get a refund or owe a bit more when you file in April.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The best things you can do: understand what was withheld from your package, check the IRS withholding estimator before starting a new job, and consider pre-tax moves like boosting your 401(k) contributions or making a Traditional IRA contribution before the end of the tax year. And do not be afraid to negotiate your package &mdash; employers often have more flexibility than they let on.
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
          See Your Take-Home Pay Before and After Job Changes
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use our free paycheck calculator to estimate what you&rsquo;ll take home in your new state or at a new salary.
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
          <a href="https://www.irs.gov/taxtopics/tc756" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS &mdash; Topic 756: Employment Taxes
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p15.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS Publication 15 &mdash; Employer Tax Guide (Circular E)
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS &mdash; Topic 751: Social Security and Medicare Withholding Rates
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS Tax Withholding Estimator
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS &mdash; 401(k) and IRA Contribution Limits for 2026
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/plant-closings/warn" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            U.S. Department of Labor &mdash; WARN Act and Worker Protections
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-individual-income-tax-rates-brackets/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            Tax Foundation &mdash; State Individual Income Tax Rates and Brackets
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
