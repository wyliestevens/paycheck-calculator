import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Student Loan Payments Affect Your Take-Home Pay (2026 Guide)',
  description:
    'Student loan payments come out after taxes — so a $400/month payment costs you far more than $400 in gross pay. Here\'s the full picture, with worked examples.',
  alternates: { canonical: '/blog/student-loan-payments-and-your-paycheck' },
  keywords:
    'student loan payments take-home pay, student loans paycheck 2026, income-driven repayment paycheck, student loan interest deduction 2026, employer student loan repayment, student loan tax benefit',
  openGraph: {
    title: 'How Student Loan Payments Affect Your Take-Home Pay (2026 Guide)',
    description:
      'Student loan payments come out after taxes — so a $400/month payment costs you far more than $400 in gross pay. Here\'s the full picture with real dollar examples.',
  },
}

export default function StudentLoanPaymentsAndYourPaycheck() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Student loan payments and your paycheck illustration"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Diploma / graduation cap icon */}
          <circle cx="80" cy="100" r="40" fill="rgba(255,255,255,0.2)" />
          <text x="80" y="115" textAnchor="middle" fontSize="36" fontWeight="700" fill="#fff" fontFamily="monospace">S</text>
          {/* Arrow */}
          <line x1="135" y1="100" x2="185" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="185,92 200,100 185,108" fill="rgba(255,255,255,0.6)" />
          {/* Paycheck box */}
          <rect x="210" y="55" width="140" height="90" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="280" y="85" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">PAYCHECK</text>
          <line x1="225" y1="96" x2="335" y2="96" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="225" y="113" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Gross:   $3,846</text>
          <text x="225" y="128" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Taxes:  -$  854</text>
          <text x="225" y="143" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Loans:  -$  400</text>
          {/* Arrow */}
          <line x1="360" y1="100" x2="410" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="410,92 425,100 410,108" fill="rgba(255,255,255,0.6)" />
          {/* Take-home circle */}
          <circle cx="510" cy="100" r="45" fill="rgba(255,255,255,0.2)" />
          <text x="510" y="92" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Take</text>
          <text x="510" y="107" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Home</text>
          <text x="510" y="124" textAnchor="middle" fontSize="13" fontWeight="700" fill="#a5f3fc" fontFamily="monospace">$2,592</text>
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
        How Student Loan Payments Affect Your Take-Home Pay (2026 Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 18, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have student loans, you already know that the bill hits hard every month. But here is something many borrowers miss: because student loan payments come out of your paycheck <strong>after taxes</strong>, you actually need to earn significantly more than your payment amount just to cover it. A $400 monthly payment does not cost you $400 in gross pay &mdash; it costs you $400 plus whatever you would have paid in taxes on that $400.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide breaks down exactly how student loans interact with your paycheck in 2026 &mdash; from repayment plan options to the one real tax break borrowers can claim &mdash; so you can see the full picture in black and white.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Student Loan Payments Are Post-Tax Deductions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is the most important thing to understand. Unlike your 401(k) contribution or health insurance premium, <strong>student loan payments do not reduce your taxable income</strong>. They are what accountants call a <strong>post-tax deduction</strong> &mdash; the money leaves your account after the IRS and your state have already taken their share.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is why that matters. Imagine you earn $60,000 per year and your effective federal + state tax rate (your marginal bracket on that last dollar of income) is roughly 25% combined. To cover a $400/month loan payment ($4,800/year), you need to earn:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 2,
        }}
      >
        $4,800 &divide; (1 &minus; 0.25) = <strong style={{ color: '#4f46e5' }}>$6,400 in gross pay</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That is $1,600 extra in earnings just to make your payments work. Pre-tax benefits like a 401(k) do not have this problem &mdash; every dollar you put in is a full dollar off your taxable income. Student loan payments offer no such efficiency.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Your Monthly Payment Is Calculated
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The amount you pay each month depends heavily on which repayment plan you are on. There are two broad categories:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Standard 10-Year Plan
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The standard plan spreads your balance over 120 equal monthly payments at your loan&rsquo;s interest rate. On a $35,000 balance at 6.8% interest, that works out to roughly <strong>$403 per month</strong>. You pay more each month than income-driven plans, but you pay the least total interest over time.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Income-Driven Repayment (IDR) Plans
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        IDR plans cap your monthly payment as a percentage of your <strong>discretionary income</strong> &mdash; which the government defines as the difference between your Adjusted Gross Income (AGI) and a poverty-level threshold. The four main IDR plans in 2026 are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Plan</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Payment Cap</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Forgiveness After</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['SAVE', '5–10% of discretionary income', '20–25 years'],
              ['PAYE', '10% of discretionary income', '20 years'],
              ['IBR (new borrowers)', '10% of discretionary income', '20 years'],
              ['IBR (older borrowers)', '15% of discretionary income', '25 years'],
            ].map(([plan, cap, forgiveness], i) => (
              <tr key={plan} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#4f46e5', fontFamily: "'JetBrains Mono', monospace" }}>{plan}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{cap}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{forgiveness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key point: IDR payments are calculated from your <strong>AGI</strong>, not your gross salary. Pre-tax deductions (like 401k contributions) lower your AGI &mdash; which in turn lowers your IDR payment. That means contributing more to your 401k can simultaneously reduce your tax bill <em>and</em> your monthly loan payment.{' '}
        <a href="https://studentaid.gov/manage-loans/repayment/plans/income-driven" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          (StudentAid.gov &mdash; Income-Driven Repayment Plans)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $55,000 Salary With $35,000 in Student Loans
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s put real numbers to this. Say you earn $55,000 per year, live in{' '}
        <a href="/ohio" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Ohio</a>, are a single filer, and have $35,000 in federal student loans. Here is how a biweekly paycheck breaks down under two scenarios &mdash; standard 10-year repayment vs. SAVE plan:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Standard Plan</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>SAVE Plan</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Pay (biweekly)', '$2,115', '$2,115'],
              ['Federal Income Tax', '-$233', '-$233'],
              ['Ohio State Tax (3.5%)', '-$74', '-$74'],
              ['Social Security (6.2%)', '-$131', '-$131'],
              ['Medicare (1.45%)', '-$31', '-$31'],
              ['Student Loan Payment', '-$185', '-$108'],
            ].map(([label, std, save], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label.includes('Gross') ? '#1e293b' : '#dc2626' }}>{std}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label.includes('Gross') ? '#1e293b' : '#dc2626' }}>{save}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Biweekly Take-Home Pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$1,461</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$1,538</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The SAVE plan puts an extra <strong>$77 per paycheck</strong> ($2,002/year) back in your pocket compared to the standard plan &mdash; in exchange for a longer repayment timeline and more total interest paid. Neither choice is objectively better; it depends on your income trajectory and long-term goals.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that the student loan payment is listed below the taxes. That is not an accident &mdash; it reflects the reality that loan payments are a post-tax expense. Your employer does not withhold them automatically; you pay your loan servicer directly after receiving your paycheck.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Student Loan Interest Deduction: The One Real Tax Break
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is exactly one federal tax break for student loan borrowers: the <strong>student loan interest deduction</strong>. You can deduct up to <strong>$2,500 in student loan interest</strong> paid during the year, and it comes right off your Adjusted Gross Income &mdash; no need to itemize.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The rules for 2026:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>You paid interest on a qualified student loan for yourself, your spouse, or a dependent.</li>
        <li style={{ marginBottom: '0.75rem' }}>Your Modified Adjusted Gross Income (MAGI) is under <strong>$85,000</strong> for single filers (deduction phases out between $70,000 and $85,000).</li>
        <li style={{ marginBottom: '0.75rem' }}>For married filing jointly, the phase-out range is <strong>$145,000–$175,000</strong>.</li>
        <li style={{ marginBottom: '0.75rem' }}>You cannot claim this deduction if someone else claims you as a dependent.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On a $2,500 deduction, a borrower in the 22% federal bracket saves <strong>$550</strong> on their tax return. That is not nothing, but it only applies to <em>interest</em> paid &mdash; not the principal portion of your payments.{' '}
        <a href="https://www.irs.gov/taxtopics/tc456" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          (IRS &mdash; Topic No. 456: Student Loan Interest Deduction)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your loan servicer will send you a <strong>Form 1098-E</strong> each January showing how much interest you paid in the prior year. Keep it for your tax return.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Employer Student Loan Repayment: A Growing Pre-Tax Benefit
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Since 2020, employers have been allowed to make student loan payments directly to employees&rsquo; loan servicers as a <strong>pre-tax benefit</strong> &mdash; up to <strong>$5,250 per year</strong> under Section 127 of the tax code. The employee pays no income tax or FICA on that benefit, and the employer gets a payroll tax deduction too.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This provision was made permanent through 2025 and has been extended into 2026. Not every employer offers it yet, but adoption is growing &mdash; especially at large companies competing for talent with heavy student debt. If your employer does offer it, $5,250 in employer payments on your behalf is worth about <strong>$1,313 more per year</strong> to a borrower in the 25% combined tax bracket (compared to getting the same amount as salary and paying it yourself).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Ask your HR department whether your company has a student loan repayment assistance program. It is a benefits question many employees never think to ask.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Public Service Loan Forgiveness (PSLF) Fits In
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work for a government employer or qualifying nonprofit, you may be on track for <strong>Public Service Loan Forgiveness (PSLF)</strong>. After 120 qualifying monthly payments on an IDR plan (10 years), any remaining federal loan balance is forgiven &mdash; and that forgiven amount is <strong>not taxable as federal income</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key paycheck strategy here: if you are pursuing PSLF, <em>lower monthly payments are actually better</em>. Under IDR, you want to pay as little as possible each month so more of the balance remains to be forgiven. Maximizing your 401(k) or HSA contributions lowers your AGI, which lowers your IDR payment, and ultimately leaves more to be forgiven tax-free.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Workers in states like{' '}
        <a href="/new-york" style={{ color: '#4f46e5', textDecoration: 'underline' }}>New York</a>,{' '}
        <a href="/california" style={{ color: '#4f46e5', textDecoration: 'underline' }}>California</a>, and{' '}
        <a href="/illinois" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Illinois</a> should check their state&rsquo;s rules: some states do tax the forgiven amount even when the federal government does not.{' '}
        <a href="https://studentaid.gov/manage-loans/forgiveness-cancellation/public-service" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
          (StudentAid.gov &mdash; Public Service Loan Forgiveness)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 401(k) Strategy: Lowering Your IDR Payment and Your Tax Bill at the Same Time
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is a strategy that surprises many borrowers. If you are on an income-driven repayment plan, increasing your pre-tax retirement contributions creates a double benefit:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>Your <strong>taxable income drops</strong>, so you pay less in federal and state income tax.</li>
        <li style={{ marginBottom: '0.75rem' }}>Your <strong>AGI drops</strong>, which directly reduces your income-driven repayment payment.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Example: You earn $60,000 and contribute $6,000/year to a traditional 401(k). Your AGI drops from $60,000 to $54,000. Under the SAVE plan, your discretionary income falls by roughly $6,000, and your annual loan payment drops by about $600 (10% of that gap). Your tax savings at a 22% marginal rate add another $1,320. Total benefit: roughly <strong>$1,920 per year</strong> from one decision.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This does not work if you are on the standard plan (since payments are fixed) or if your income is above the IDR discretionary threshold. But for lower- and middle-income borrowers on IDR, it is one of the most powerful levers available.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How State Taxes Add Up for Borrowers
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Where you live can have a big impact on how much of your paycheck is left after taxes &mdash; and that directly affects how hard your student loan payment hits. A borrower in{' '}
        <a href="/texas" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Texas</a> or{' '}
        <a href="/florida" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Florida</a> (no state income tax) keeps more of each paycheck, making loan payments a smaller share of take-home pay. Meanwhile, someone in{' '}
        <a href="/california" style={{ color: '#4f46e5', textDecoration: 'underline' }}>California</a> or{' '}
        <a href="/new-york" style={{ color: '#4f46e5', textDecoration: 'underline' }}>New York</a> pays additional state income tax on top of federal, stretching every dollar thinner.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a $55,000 earner making a $400/month loan payment, the state tax difference between living in Texas vs. California can be worth over $1,500 per year in after-tax income &mdash; effectively reducing the true burden of the same loan payment.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key Takeaways
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Student loan payments are post-tax.</strong> You earn, pay taxes, then make your loan payment &mdash; there is no automatic tax reduction from the payment itself.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>IDR plans are based on AGI, not gross pay.</strong> Maximizing pre-tax deductions (401k, HSA) directly lowers your IDR payment.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>The student loan interest deduction</strong> saves up to $2,500 per year from your AGI, but it phases out above $70,000 MAGI for single filers.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Ask about employer repayment assistance.</strong> Up to $5,250/year from your employer is tax-free to you.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>PSLF forgiveness is tax-free federally</strong> &mdash; but check your state, as some states do tax the forgiven amount.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Your state matters.</strong> Living in a no-income-tax state puts more of your paycheck in your pocket, which makes loan payments a smaller percentage of what you actually keep.
        </li>
      </ul>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#eef2ff',
          border: '1px solid #c7d2fe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Actual Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to instantly see a paycheck breakdown — then compare what you keep in different states.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#4f46e5',
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
          <a href="https://studentaid.gov/manage-loans/repayment/plans/income-driven" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>StudentAid.gov &mdash; Income-Driven Repayment Plans</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc456" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>IRS &mdash; Topic No. 456: Student Loan Interest Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://studentaid.gov/manage-loans/forgiveness-cancellation/public-service" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>StudentAid.gov &mdash; Public Service Loan Forgiveness (PSLF)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-reminds-employers-of-educational-assistance-programs" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>IRS &mdash; Educational Assistance Programs (Section 127)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/research/all/federal/student-loan-forgiveness-taxable/" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>Tax Foundation &mdash; State Tax Treatment of Student Loan Forgiveness</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/ooh/education-training-and-library/postsecondary-teachers.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>BLS.gov &mdash; Occupational Outlook Handbook</a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#4f46e5', textDecoration: 'underline', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
