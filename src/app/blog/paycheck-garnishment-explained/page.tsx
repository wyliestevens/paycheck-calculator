import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paycheck Garnishment: What It Is, How It Works, and Your Rights (2026)',
  description:
    "Wage garnishment lets creditors take money directly from your paycheck — but federal law caps how much. Here's how garnishment limits work by type, with a full worked example at $50,000.",
  alternates: { canonical: '/blog/paycheck-garnishment-explained' },
  keywords:
    'wage garnishment 2026, paycheck garnishment, how much can be garnished from paycheck, wage garnishment limits, IRS levy paycheck, child support garnishment, student loan garnishment, CCPA garnishment',
  openGraph: {
    title: 'Paycheck Garnishment: What It Is, How It Works, and Your Rights (2026)',
    description:
      "Wage garnishment lets creditors take money directly from your paycheck — but federal law caps how much. Here's how it works.",
  },
}

export default function PaycheckGarnishmentExplained() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Wage garnishment illustration showing a paycheck being split between employee and creditor"
        >
          <rect width="600" height="200" rx="12" fill="#dc2626" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Paycheck stub on left */}
          <rect x="45" y="55" width="105" height="90" rx="6" fill="rgba(255,255,255,0.22)" />
          <text x="97" y="48" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">PAYCHECK</text>
          <line x1="60" y1="74" x2="135" y2="74" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
          <line x1="60" y1="86" x2="125" y2="86" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
          <line x1="60" y1="98" x2="130" y2="98" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
          <line x1="60" y1="110" x2="118" y2="110" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
          <rect x="60" y="120" width="75" height="16" rx="3" fill="rgba(255,255,255,0.18)" />
          <text x="97" y="132" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="monospace">$50,000</text>

          {/* Arrow / divider */}
          <line x1="168" y1="100" x2="210" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="210,93 226,100 210,107" fill="rgba(255,255,255,0.6)" />

          {/* Dividing line */}
          <line x1="300" y1="50" x2="300" y2="155" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5,4" />

          {/* "YOU KEEP" box */}
          <rect x="235" y="58" width="120" height="84" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="295" y="82" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">YOU KEEP</text>
          <text x="295" y="106" textAnchor="middle" fontSize="22" fontWeight="700" fill="#ffffff" fontFamily="monospace">75%</text>
          <text x="295" y="128" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">of disposable</text>

          {/* "GARNISHED" box */}
          <rect x="370" y="58" width="120" height="84" rx="6" fill="rgba(255,255,255,0.12)" />
          <text x="430" y="82" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">GARNISHED</text>
          <text x="430" y="106" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fca5a5" fontFamily="monospace">25%</text>
          <text x="430" y="128" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">max (consumer debt)</text>

          {/* Bottom label */}
          <text x="300" y="175" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif" letterSpacing="1">WAGE GARNISHMENT — FEDERAL LIMITS 2026</text>
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
        Paycheck Garnishment: What It Is, How It Works, and Your Rights (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 28, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most paycheck deductions are voluntary &mdash; you choose your 401(k) contribution, your health insurance plan, your FSA amount. <strong>Wage garnishment is different.</strong> It is a court-ordered or government-authorized deduction that your employer is legally required to withhold from your paycheck and send directly to a creditor, government agency, or court.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Millions of workers have wages garnished every year &mdash; for child support, unpaid taxes, student loans, and consumer debt. Federal law limits how much can be taken, but the rules vary depending on why you&rsquo;re being garnished. Here is the complete guide.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Wage Garnishment?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Wage garnishment (also called wage attachment or earnings withholding) is a legal process by which a portion of your paycheck is withheld by your employer and paid directly to someone you owe money to. That person or entity could be a former spouse collecting child support, the IRS collecting back taxes, the Department of Education collecting on a defaulted student loan, or a private creditor who sued you and won a court judgment.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer is served with a garnishment order and has no choice but to comply. Ignoring a valid garnishment order can expose an employer to liability. Once the garnishment begins, money is withheld automatically from each paycheck until the debt is paid, the order expires, or a court stops it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Garnishment cannot happen without due process. For most types of private debt, a creditor must sue you, win a judgment in court, and then obtain a garnishment order from the court before your wages can be withheld. The major exceptions are government-owed debts &mdash; the IRS, the Department of Education, and state child support agencies can garnish wages without first going to court.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Federal Law Caps Garnishments: The CCPA
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The primary federal law governing wage garnishment is the <strong>Consumer Credit Protection Act (CCPA)</strong>, Title III. It sets a ceiling on how much of your paycheck can be taken, regardless of what a court order says. The CCPA is enforced by the U.S. Department of Labor.{' '}
        <a href="https://www.dol.gov/agencies/whd/wage-garnishment" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL.gov &mdash; Wage Garnishment)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Calculate Your &ldquo;Disposable Earnings&rdquo;
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The CCPA bases garnishment limits on your <strong>disposable earnings</strong> &mdash; not your gross pay. Disposable earnings are what remains after your employer subtracts legally required deductions. These include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Federal, state, and local income taxes</li>
        <li style={{ marginBottom: '0.5rem' }}>Social Security and Medicare taxes (FICA)</li>
        <li style={{ marginBottom: '0.5rem' }}>State unemployment insurance and disability taxes (where required by law)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Voluntary deductions &mdash; like your 401(k) contribution, health insurance premium, or HSA contribution &mdash; do <strong>not</strong> reduce your disposable earnings for garnishment purposes. Creditors get a larger base to work with than you might expect.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Apply the Two-Part Test
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most types of consumer debt (not child support or tax levies), the maximum that can be garnished in any workweek is the <strong>lesser</strong> of two amounts:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>25%</strong> of your disposable earnings, OR</li>
        <li style={{ marginBottom: '0.5rem' }}>The amount by which your disposable earnings <strong>exceed 30 times the federal minimum wage</strong> per week</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal minimum wage is <strong>$7.25 per hour</strong>, so 30 times that equals <strong>$217.50 per week</strong>. This &ldquo;30-times test&rdquo; is a floor designed to ensure workers keep enough income to survive. If you earn less than $217.50 per week in disposable earnings, nothing can be garnished at all.{' '}
        <a href="https://www.dol.gov/agencies/whd/wage-garnishment/faq" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL.gov &mdash; Garnishment FAQ)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Types of Wage Garnishment and Their Federal Limits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The standard 25% / 30-times rule applies to most consumer debt. Child support, student loans, and IRS levies operate under different rules.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Garnishment Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Maximum % of Disposable Earnings</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Court Order Required?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Consumer debt (credit cards, medical)', '25% (or 30× test — whichever is less)', 'Yes'],
              ['Child support — current, supporting another family', 'Up to 50%', 'No (agency order)'],
              ['Child support — current, not supporting another family', 'Up to 60%', 'No (agency order)'],
              ['Child support — 12+ weeks in arrears (add 5%)', 'Up to 55% or 65%', 'No (agency order)'],
              ['Federal student loan default', '15% (not below 30× min wage)', 'No (Education Dept)'],
              ['IRS tax levy', 'Based on Publication 1494 exempt table', 'No (IRS notice)'],
              ['Chapter 13 bankruptcy plan', 'Per plan (often similar to consumer debt)', 'No (court order)'],
            ].map(([type, limit, courtOrder], i) => (
              <tr key={type} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>{type}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{limit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{courtOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Child Support and Alimony Garnishments
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Child support garnishments carry the highest federal limits &mdash; up to <strong>65%</strong> of disposable earnings in some cases. The CCPA allows:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>50%</strong> if you are currently supporting a spouse or child not covered by the order</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>60%</strong> if you are not currently supporting another family</li>
        <li style={{ marginBottom: '0.5rem' }}>An additional <strong>5%</strong> (bringing the max to 55% or 65%) if you are 12 or more weeks behind on payments</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These limits are also the maximum &mdash; states can and often do set lower limits. State child support agencies automatically garnish wages once a support order is in place; no separate court judgment is needed.{' '}
        <a href="https://www.acf.hhs.gov/css/training-technical-assistance/income-withholding-order" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (HHS &mdash; Income Withholding Order)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Federal Student Loan Garnishments
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your federal student loans go into default, the Department of Education or its loan servicer can garnish your wages through a process called <strong>administrative wage garnishment (AWG)</strong>. No court order is required. The limit is <strong>15% of disposable earnings</strong>, and the garnishment cannot reduce your take-home below 30 times the federal minimum wage per week.{' '}
        <a href="https://studentaid.gov/manage-loans/default/collections/wage-garnishment" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (StudentAid.gov &mdash; Wage Garnishment)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You must receive a notice at least 30 days before garnishment begins. During that window you can request a hearing to challenge the amount or eligibility, or enter a repayment arrangement to stop the garnishment.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        IRS Tax Levy
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS can levy (seize) your wages to collect unpaid federal taxes without a court order. The IRS sends your employer a <strong>Notice of Levy on Wages, Salary, and Other Income (Form 668-W)</strong>. Unlike the standard CCPA 25% cap, the IRS levy exempts only a specific dollar amount each week based on your filing status and number of dependents &mdash; everything above that exempt amount is sent to the IRS.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS publishes exempt amounts in <strong>Publication 1494</strong>. For 2026, a single person claiming one personal exemption has a weekly exempt amount of roughly <strong>$350&ndash;$400</strong>. If your weekly disposable pay is $1,000, the IRS could take approximately $600&ndash;$650 per week &mdash; far more than the 25% cap that applies to credit card debt.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p1494.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 1494)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before levying wages, the IRS must send multiple notices: a <strong>Notice and Demand for Payment</strong>, a <strong>Final Notice of Intent to Levy</strong> (Letter 1058 or LT11), and information about your right to a hearing. If you receive an LT11, contact the IRS or a tax professional immediately &mdash; you have 30 days to request a Collection Due Process (CDP) hearing.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/what-is-a-levy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; What Is a Levy?)
        </a>
      </p>

      {/* Section 4 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Garnishment at a $50,000 Salary
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through exactly how garnishment limits work for a single worker earning $50,000 per year, paid biweekly (26 paychecks per year).
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Calculate Disposable Earnings Per Paycheck
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Per Biweekly Check</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross pay ($50,000 ÷ 26)', '$1,923.08', false],
              ['Federal income tax withheld (single, standard deduction)', '−$152.37', false],
              ['Social Security tax (6.2%)', '−$119.23', false],
              ['Medicare tax (1.45%)', '−$27.88', false],
              ['Total legally required deductions', '−$299.48', false],
              ['Disposable earnings', '$1,623.60', true],
            ].map(([label, amount, bold], i) => (
              <tr key={i} style={{ background: bold ? '#fef2f2' : '#ffffff' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: bold ? 700 : 400 }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: bold ? '#dc2626' : '#475569', fontWeight: bold ? 700 : 400 }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Note: voluntary deductions (401k, health insurance, FSA) are NOT subtracted here. Only legally required deductions count.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Apply the Garnishment Limits
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        With $1,623.60 in disposable biweekly earnings, here is how much could be taken for each type of garnishment:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Garnishment Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Max Per Biweekly Check</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>You Keep (min)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Consumer debt (25% test)', '$405.90', '$1,217.70'],
              ['Student loan default (15%)', '$243.54', '$1,380.06'],
              ['Child support — current, no other family (60%)', '$974.16', '$649.44'],
              ['Child support — 12+ weeks arrears (65%)', '$1,055.34', '$568.26'],
            ].map(([type, garnished, keeps], i) => (
              <tr key={type} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>{type}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{garnished}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{keeps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For consumer debt, the 25% test ($405.90) is the binding limit because it is less than the 30-times test ($1,623.60 &minus; $435.00 = $1,188.60). You keep at least $1,217.70 per check after a consumer debt garnishment.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Child support garnishments can be far more aggressive. At 65%, more than half of every paycheck goes directly to the support recipient &mdash; a financial reality that underscores why staying current on support payments matters.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Cannot Be Garnished
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Not all income is subject to garnishment. Federal law specifically protects certain types of federal benefits from most creditors:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security and SSI benefits</strong> (cannot be garnished for most consumer debts; can be levied for federal taxes and some federal debts)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Veterans&rsquo; benefits</strong> (fully exempt from most creditors)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Federal Civil Service Retirement benefits</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Railroad Retirement benefits</strong></li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Student loan and federal grant funds</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even if exempt federal benefits are deposited into a bank account, they retain some protection under the &ldquo;two-month look-back rule&rdquo; &mdash; banks must automatically protect up to two months of exempt direct-deposited federal benefit payments from being frozen or seized.{' '}
        <a href="https://www.consumerfinance.gov/ask-cfpb/can-a-debt-collector-take-my-social-security-or-va-payments-en-1387/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (CFPB &mdash; Can a Debt Collector Take My Benefits?)
        </a>
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Multiple Garnishments at the Same Time
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What happens if you have two garnishment orders at once &mdash; say, a child support order and a credit card judgment? Federal law does not allow the combined garnishments to exceed the applicable CCPA limits. The total withheld from one paycheck cannot exceed the greater limit among the orders.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In practice, child support always takes priority. If a child support order already takes 60% of your disposable earnings, a consumer debt garnishment cannot take anything on top of that &mdash; because 60% already exceeds the 25% consumer debt cap, and the total cap would be exhausted. The consumer debt creditor must wait until the higher-priority order is satisfied.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Protections: Often More Generous Than Federal
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal law sets the <em>maximum</em> a creditor can take &mdash; states can provide stronger protections. Many states have done exactly that:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Texas and Pennsylvania</strong> completely prohibit private creditor wage garnishments (though government debts and child support are still allowed)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>North Carolina and South Carolina</strong> also ban most consumer debt garnishments</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Florida</strong> exempts 100% of wages for heads of household earning $750 or less per week</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>California</strong> uses a higher minimum wage for the 30-times calculation, effectively raising the floor above federal protections</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When your state law is more protective than the federal CCPA, your state&rsquo;s rules apply. Check your state attorney general&rsquo;s website or contact your state labor department for state-specific garnishment limits.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Respond to a Garnishment Order
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you receive notice of a garnishment, you generally have a limited window to take action. Depending on the type of garnishment:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Consumer debt:</strong> You may have the right to claim an exemption (e.g., head of household exemption), challenge the judgment, or negotiate a payment plan with the creditor to halt the garnishment</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>IRS levy:</strong> Contact the IRS immediately. You can request a Collection Due Process hearing, set up an installment agreement, or apply for Currently Not Collectible (CNC) status if you cannot pay</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Student loans:</strong> You can request a hearing within 30 days of notice, rehabilitate the loan (make 9 on-time payments in 10 months), or consolidate into a new Direct Loan</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Child support:</strong> Dispute errors in the amount owed through your state child support agency; you cannot avoid valid orders</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Filing for <strong>Chapter 7 or Chapter 13 bankruptcy</strong> triggers an automatic stay that immediately halts most garnishments (not child support). However, bankruptcy has long-term credit consequences and should be considered a last resort after consulting with an attorney.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Your CCPA Anti-Retaliation Rights
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A critical but often overlooked protection: the CCPA makes it <strong>illegal for your employer to fire you</strong> because your wages are garnished for <em>any single debt</em>. If your employer fires you because of a garnishment, they can face criminal penalties &mdash; up to $1,000 in fines and up to one year in prison.{' '}
        <a href="https://www.dol.gov/agencies/whd/wage-garnishment" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DOL.gov &mdash; Wage Garnishment Protections)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important caveat: the CCPA anti-retaliation protection covers you only if you have <em>one</em> garnishment. If you have two or more garnishments simultaneously, you lose this protection under federal law (some states extend it further). If you believe you were fired illegally due to a garnishment, contact the Wage and Hour Division of the Department of Labor.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Wage garnishment is a powerful legal tool that creditors, government agencies, and courts use to collect what is owed &mdash; directly from your paycheck before you ever see it. Federal law limits how much can be taken: 25% of disposable earnings for consumer debt, up to 65% for child support in arrears, 15% for student loans, and a table-based calculation for IRS levies.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At a $50,000 salary, a consumer debt garnishment can take up to $405.90 per biweekly check &mdash; that is over $10,000 per year. A child support garnishment in arrears can take over $1,000 per check.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you receive a garnishment notice, act quickly. Most garnishment types give you a narrow window to dispute, negotiate, or seek relief. And remember: your employer cannot legally fire you for having a single wage garnishment.
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
          See Your Full Paycheck Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly how much goes to taxes, FICA, and what you actually take home &mdash; before any garnishments.
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
          <a href="https://www.dol.gov/agencies/whd/wage-garnishment" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL.gov &mdash; Wage Garnishment Overview</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/wage-garnishment/faq" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DOL.gov &mdash; Wage Garnishment FAQ</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/what-is-a-levy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS.gov &mdash; What Is a Levy?</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p1494.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 1494 (Exempt Amounts from Levy)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://studentaid.gov/manage-loans/default/collections/wage-garnishment" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>StudentAid.gov &mdash; Administrative Wage Garnishment</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.acf.hhs.gov/css/training-technical-assistance/income-withholding-order" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>HHS.gov &mdash; Child Support Income Withholding</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.consumerfinance.gov/ask-cfpb/can-a-debt-collector-take-my-social-security-or-va-payments-en-1387/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>CFPB &mdash; Garnishment of Federal Benefits</a>
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
