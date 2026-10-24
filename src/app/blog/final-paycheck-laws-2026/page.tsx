import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Final Paycheck Laws 2026: When Your Employer Must Pay You After You Leave' },
  description:
    'State law — not federal — controls when you get your final paycheck. Timing ranges from the same day to the next regular payday. Full state-by-state guide with worked tax example.',
  alternates: { canonical: '/blog/final-paycheck-laws-2026' },
  keywords:
    'final paycheck laws 2026, when do I get my last paycheck, final paycheck timing by state, how is final paycheck taxed, employer must pay final paycheck, last paycheck laws',
  openGraph: {
    type: 'article',
    url: '/blog/final-paycheck-laws-2026',
    images: [{ url: '/og/blog/final-paycheck-laws-2026', width: 1200, height: 630 }],
    title: 'Final Paycheck Laws 2026: When Your Employer Must Pay You After You Leave',
    description:
      'State law controls when you get your final paycheck. Timing ranges from the same day to the next regular payday. Full guide with state-by-state table.',
  },
}

export default function FinalPaycheckLaws2026() {
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
          aria-label="Final paycheck illustration showing an envelope with a calendar and clock"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Envelope / check */}
          <rect x="50" y="50" width="150" height="100" rx="6" fill="rgba(255,255,255,0.2)" />
          <polygon points="50,50 125,105 200,50" fill="rgba(255,255,255,0.3)" />
          <text x="125" y="135" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">FINAL CHECK</text>
          {/* Arrow */}
          <line x1="220" y1="100" x2="270" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="270,92 285,100 270,108" fill="rgba(255,255,255,0.6)" />
          {/* Calendar */}
          <rect x="300" y="45" width="110" height="110" rx="6" fill="rgba(255,255,255,0.2)" />
          <rect x="300" y="45" width="110" height="28" rx="6" fill="rgba(255,255,255,0.3)" />
          <text x="355" y="65" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="sans-serif">CALENDAR</text>
          <text x="355" y="105" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff" fontFamily="sans-serif">?</text>
          <text x="355" y="145" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">days to pay</text>
          {/* Clock */}
          <circle cx="480" cy="100" r="45" fill="rgba(255,255,255,0.15)" />
          <circle cx="480" cy="100" r="38" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <line x1="480" y1="100" x2="480" y2="70" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="480" y1="100" x2="500" y2="108" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="480" cy="100" r="4" fill="#fff" />
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
        Final Paycheck Laws 2026: When Your Employer Must Pay You After You Leave
      </h1>

      <ArticleMeta slug="final-paycheck-laws-2026" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you leave a job &mdash; whether you quit, get fired, or are laid off &mdash; you are legally owed every dollar you have earned. Federal law requires employers to pay all wages, but it does not specify how quickly. That timing is set by your <strong>state&rsquo;s wage payment laws</strong>, which range from the <em>same day</em> in California and Massachusetts to <em>the next regular payday</em> in most other states. Miss that deadline and employers can face stiff penalties.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers final paycheck timing by state, what must be included, how the last check is taxed, and what to do if your employer pays late or not at all.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Does Federal Law Say About Final Paychecks?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Fair Labor Standards Act (FLSA)</strong> requires employers to pay all earned wages &mdash; but it does not set a specific deadline for final paychecks. Under the FLSA, the final paycheck must be issued on the next regular payday for the period when the work was performed.{' '}
        <a href="https://www.dol.gov/agencies/whd/fact-sheets/16-flsa-wage-payment" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL.gov &mdash; Wage Payment Fact Sheet)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In practice, that means federal law alone provides weak protection &mdash; the next regular payday could be two weeks away. But every state has its own wage payment statute that sets stricter (faster) deadlines, and most require payment sooner for employees who are involuntarily terminated.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer cannot hold your final paycheck as leverage &mdash; for example, to pressure you to return company property, sign a non-disclosure agreement, or complete an exit interview. Property return and documentation are separate matters; your wages are due regardless.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Final Paycheck Timing by State: The Key Rules
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Many states distinguish between employees who are <strong>involuntarily terminated</strong> (fired, laid off) and those who <strong>voluntarily quit</strong>. Involuntary terminations usually trigger a faster deadline. Here are the rules for the most populous states:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>If Fired / Laid Off</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>If You Quit</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['California', 'Same day (immediately)', 'Next regular payday, or within 72 hours if you gave 72 hours&rsquo; notice'],
              ['Massachusetts', 'Day of termination', 'Next regular payday'],
              ['Colorado', 'Immediately upon termination', 'Next regular payday'],
              ['Nevada', 'Within 3 days', 'Next regular payday or within 7 days'],
              ['Arizona', 'Within 7 days or next payday (whichever is sooner)', 'Next regular payday'],
              ['Texas', 'Within 6 days of separation', 'Next regular payday'],
              ['New York', 'Next regular payday', 'Next regular payday'],
              ['Florida', 'Next regular payday', 'Next regular payday'],
              ['Illinois', 'Next regular payday', 'Next regular payday'],
              ['Washington', 'End of current pay period', 'End of current pay period'],
              ['Pennsylvania', 'Next regular payday', 'Next regular payday'],
              ['Michigan', 'Next regular payday', 'Next regular payday'],
              ['New Jersey', 'Next regular payday', 'Next regular payday'],
              ['Georgia', 'Next regular payday', 'Next regular payday'],
              ['North Carolina', 'Next regular payday', 'Next regular payday'],
            ].map(([state, fired, quit], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }} dangerouslySetInnerHTML={{ __html: fired }} />
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }} dangerouslySetInnerHTML={{ __html: quit }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Rules can change. Verify the current law for your state at the{' '}
        <a href="https://www.dol.gov/agencies/whd/state/payday" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          DOL&rsquo;s state payday laws page
        </a>
        {' '}or your state&rsquo;s Department of Labor website.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that <strong>California</strong> has the strictest rule in the country: if you are terminated, the employer must hand you your check &mdash; or make your wages available by direct deposit &mdash; the <em>same day</em>. Even a one-day delay triggers penalty wages (more on that below). This is why California employers often keep final checks ready before delivering termination notices.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Must Be Included in Your Final Paycheck?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Your final paycheck must contain all compensation you have earned but not yet been paid. That typically includes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>All regular wages</strong> for hours worked since the last pay period</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Overtime pay</strong> owed under the FLSA (time-and-a-half for hours over 40 in a workweek)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Commissions or bonuses</strong> that have been <em>earned</em> under your agreement (whether payment is due depends on when the commission was earned and the terms of your plan)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Expense reimbursements</strong> under an accountable plan, if not processed separately</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Does Accrued PTO Have to Be Paid Out?
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is one of the most common questions &mdash; and the answer is <strong>it depends on your state</strong>. There is no federal law requiring PTO payout. States fall into three camps:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Category</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>PTO Payout Rule</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#059669' }}>Payout required</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Accrued PTO is earned wages; must be paid out at separation regardless of company policy</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>California, Colorado, Illinois, Massachusetts, Montana, Nebraska</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#d97706' }}>Policy-dependent</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Payout required only if the employer&rsquo;s written policy or contract promises it</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>New York, Washington, Michigan, Pennsylvania, Georgia, Arizona</td>
            </tr>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#dc2626' }}>No payout required</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Use-it-or-lose-it policies are allowed; no mandatory payout at termination</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Florida, Texas, Ohio, Indiana, Missouri</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work in California, your employer <em>must</em> pay out every hour of unused accrued vacation and PTO at your final hourly rate, regardless of any &ldquo;use it or lose it&rdquo; policy language in the employee handbook &mdash; California courts treat such language as unenforceable. A worker with 80 hours of accrued PTO at $30/hr is owed $2,400 in their final check.{' '}
        <a href="https://www.dir.ca.gov/dlse/FAQ_vacation.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (California DIR &mdash; Vacation FAQ)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For more on how a PTO payout is taxed once you receive it, see our guide to{' '}
        <a href="/blog/pto-payout-taxes-2026" style={{ color: '#2563eb', textDecoration: 'underline' }}>PTO payout taxes</a>.
      </p>

      {/* Section 4 - Tax treatment */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Is a Final Paycheck Taxed?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A final paycheck is taxed exactly like any other paycheck &mdash; it is <strong>ordinary income</strong>. Federal income tax, Social Security (6.2% up to $184,500 per year), and Medicare (1.45%) all apply. There is no special &ldquo;final check&rdquo; tax rate; the IRS does not care whether it is your last check or your first.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer withholds federal income tax using the same IRS Percentage Method tables they use for every regular paycheck. If your final check covers fewer days than usual &mdash; for example, one week instead of two &mdash; the annualized withholding calculation may result in a smaller dollar amount, but the rates are unchanged.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Final Paycheck at $55,000/Year (Texas, Single Filer)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Suppose you earn $55,000 per year, are paid biweekly, and receive your final check for a normal two-week period. Here&rsquo;s the exact tax breakdown:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        <div>Gross per biweekly period: $55,000 &divide; 26 = <strong>$2,115.38</strong></div>
        <div style={{ marginTop: '0.5rem', color: '#475569' }}>Federal income tax withholding (IRS Percentage Method):</div>
        <div style={{ paddingLeft: '1rem', color: '#475569' }}>
          Adjusted wage: $2,115.38 &minus; ($16,100 &divide; 26) = $2,115.38 &minus; $619.23 = $1,496.15
        </div>
        <div style={{ paddingLeft: '1rem', color: '#475569' }}>
          Annualized: $1,496.15 &times; 26 = $38,900
        </div>
        <div style={{ paddingLeft: '1rem', color: '#475569' }}>
          Tax on $38,900: (10% &times; $12,400) + (12% &times; $26,500) = $1,240 + $3,180 = $4,420/yr
        </div>
        <div style={{ paddingLeft: '1rem', color: '#475569' }}>
          Per check: $4,420 &divide; 26 = <strong>$170.00</strong>
        </div>
        <div style={{ marginTop: '0.5rem', color: '#475569' }}>Social Security: $2,115.38 &times; 6.2% = <strong>$131.15</strong></div>
        <div style={{ color: '#475569' }}>Medicare: $2,115.38 &times; 1.45% = <strong>$30.67</strong></div>
      </div>

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
              ['Gross pay (2 weeks)', '$2,115.38'],
              ['Federal income tax', '−$170.00'],
              ['Social Security (6.2%)', '−$131.15'],
              ['Medicare (1.45%)', '−$30.67'],
              ['State income tax (Texas: none)', '$0.00'],
            ].map(([label, amount], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#f0fdf4' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Net (take-home) pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$1,783.56</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The result: you take home <strong>$1,783.56</strong> on a $2,115.38 gross check &mdash; about 84.3 cents on the dollar, before any state income tax. Workers in states like California or New York will take home less once state tax is applied. Use the{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas paycheck calculator</a>{' '}
        or the{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California paycheck calculator</a>{' '}
        to see the exact state-specific number for your salary.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These tax figures come from the 2026 federal constants: the $16,100 standard deduction for single filers and the 10%/12% bracket thresholds of $12,400 and $50,400 per{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Rev.&nbsp;Proc. 2025-32
        </a>
        , and the $184,500 Social Security wage base per the{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          SSA 2026 COLA fact sheet
        </a>.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Can Your Employer Deduct From Your Final Paycheck?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Employers can only make deductions from your final paycheck that are legally permitted. Permitted deductions generally fall into two categories:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Required by law:</strong> federal and state income tax withholding, FICA, court-ordered wage garnishments, child support withholding, and IRS levies.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Authorized in writing by you:</strong> health insurance premiums, 401(k) contributions, union dues, and loans or advances you agreed to repay.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What employers <strong>cannot</strong> do (in most states) is dock your pay for unreturned equipment, uniforms, or cash register shortfalls if doing so would reduce your wages below the federal minimum wage. California is even stricter &mdash; it generally prohibits deductions for business losses or property damage without a court judgment against the employee.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Signing bonus clawbacks</strong> are a common area of confusion. If your offer letter had a clawback clause &mdash; for example, &ldquo;repay the bonus if you leave within 12 months&rdquo; &mdash; the employer can collect that debt, but usually only through a signed written agreement or a lawsuit, not by simply withholding it from your wages unilaterally in many states.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens If Your Employer Pays Your Final Paycheck Late?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State labor laws impose financial penalties on employers who miss the final paycheck deadline. Some states are more aggressive than others:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Late Payment Penalty</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['California', 'Waiting time penalty: one additional day of wages per day of delay, up to 30 days. A $200/day worker could recover $6,000 in penalties.'],
              ['Colorado', 'Wages continue to accrue at the employee&rsquo;s regular rate until paid, up to 10 days.'],
              ['Massachusetts', 'Treble (3x) damages on the unpaid wages, plus attorney&rsquo;s fees, under the MA Wage Act.'],
              ['New York', 'Up to 100% liquidated damages on unpaid wages, plus attorney&rsquo;s fees.'],
              ['Nevada', 'Wages continue at the regular rate for up to 30 days.'],
              ['Most other states', 'Interest on unpaid wages (often 10–18% per year) plus civil penalties; some allow double damages.'],
            ].map(([state, penalty], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }} dangerouslySetInnerHTML={{ __html: penalty }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The California waiting time penalty is particularly significant. Under{' '}
        <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=203." target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          California Labor Code Section 203
        </a>
        , if an employer &ldquo;willfully&rdquo; fails to pay on time, the employee&rsquo;s wages keep accruing at their daily rate for up to 30 calendar days. On a $65,000/year salary, that is about $250/day &mdash; meaning a 30-day delay could cost the employer $7,500 in penalties alone, on top of the wages owed.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        How to File a Complaint If You&rsquo;re Not Paid
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer misses the deadline or disputes your final wages, you have several options:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>File a wage claim with your state labor department.</strong> Most states have an online wage claim portal. The agency investigates at no cost to you and can order the employer to pay, plus penalties. This is usually the fastest and cheapest route for unpaid wages under $25,000.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>File a complaint with the U.S. Department of Labor Wage and Hour Division (WHD).</strong> The WHD investigates FLSA violations, including minimum wage and overtime violations in the final paycheck.{' '}
          <a href="https://www.dol.gov/agencies/whd/contact/complaints" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (DOL.gov &mdash; File a Complaint)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Sue in small claims court or hire an employment attorney.</strong> For larger amounts or complex cases, an employment lawyer can pursue your claim under state wage statutes, often on contingency (no upfront cost to you).
        </li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Keep records: pay stubs, your final timesheet, all communications with your employer, and a copy of your employment agreement. The stronger your documentation, the easier your claim will be.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does Your Last Check Affect Your Tax Return?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes &mdash; in two common ways.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>1. You may owe more tax than was withheld.</strong> If you start a new job later in the year and your combined income pushes you into a higher bracket, the withholding on each individual check (which is calculated as if you earn that amount all year) may have been too low. This is a common source of April tax bills for people who changed jobs or had gaps in employment. Adjusting your W-4 at the new job to add extra withholding is the fix.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>2. If you had a gap in employment, you may have a refund coming.</strong> The federal withholding system assumes you earn your per-check amount all year. If you only worked part of the year, your actual taxable income will be lower than what was projected, and you likely overpaid. Filing your return will produce a refund of the excess.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can also use a{' '}
        <a href="/texas/55000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$55,000 salary breakdown</a>{' '}
        or a{' '}
        <a href="/texas/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000 salary breakdown</a>{' '}
        to estimate your full-year tax picture before filing. For guidance on whether you need to make quarterly payments if your new work is freelance, see our guide to{' '}
        <a href="/blog/quarterly-estimated-taxes-2026" style={{ color: '#2563eb', textDecoration: 'underline' }}>quarterly estimated taxes</a>.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quick Reference: 5 Things to Know About Your Final Paycheck
      </h2>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Federal law sets no specific deadline.</strong> The FLSA says &ldquo;next regular payday.&rdquo; State law usually requires faster payment.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Being fired triggers the fastest deadlines.</strong> California and Massachusetts require same-day payment; Colorado and Nevada within a few days.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>PTO payout depends entirely on your state.</strong> California, Colorado, Illinois, Massachusetts, and Montana require it; many other states do not.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>The check is taxed as ordinary income.</strong> Federal, state, Social Security, and Medicare all apply at the same rates as every other paycheck.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Employers who pay late face significant penalties.</strong> California&rsquo;s waiting time penalty can reach 30 days of wages; Massachusetts allows treble damages.
        </li>
      </ol>

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
          See Your Exact Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see a full breakdown of federal tax, state tax, Social Security, Medicare, and net pay &mdash; updated for tax year 2026.
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
          <a href="https://www.dol.gov/agencies/whd/fact-sheets/16-flsa-wage-payment" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL.gov &mdash; Fact Sheet #16: Deductions From Wages and Final Pay Under the FLSA</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/state/payday" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL.gov &mdash; State Payday Requirements</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=203." target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California Labor Code Section 203 (Waiting Time Penalty)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dir.ca.gov/dlse/FAQ_vacation.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California DIR &mdash; Vacation Pay FAQ</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/contact/complaints" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL.gov &mdash; File a Wage and Hour Complaint</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Rev. Proc. 2025-32 (2026 federal tax constants)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; 2026 Social Security Wage Base ($184,500)</a>
        </li>
      </ul>

      <ArticleFooter current="final-paycheck-laws-2026" />
    </article>
  )
}
