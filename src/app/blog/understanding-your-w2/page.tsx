import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Your W-2: A Box-by-Box Guide (2026)',
  description:
    "Your W-2 has up to 20 numbered boxes — and most people only check a few. Here's what every box on your W-2 means, with a complete worked example at $75,000.",
  alternates: { canonical: '/blog/understanding-your-w2' },
  keywords:
    'W-2 form explained, W-2 box by box, how to read W-2, W-2 2026, Box 12 W-2 codes, Box 1 wages, W-2 withholding, understand W-2 form',
  openGraph: {
    title: 'Understanding Your W-2: A Box-by-Box Guide (2026)',
    description:
      "Your W-2 has up to 20 numbered boxes — and most people only check a few. Here's what every box on your W-2 means.",
  },
}

export default function UnderstandingYourW2() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="W-2 form illustration showing numbered boxes"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Form document */}
          <rect x="40" y="35" width="180" height="130" rx="6" fill="rgba(255,255,255,0.18)" />
          {/* Form header bar */}
          <rect x="40" y="35" width="180" height="22" rx="6" fill="rgba(255,255,255,0.35)" />
          <text x="130" y="51" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">W-2  Wage &amp; Tax Statement</text>
          {/* Box rows inside form */}
          <rect x="48" y="63" width="76" height="20" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="52" y="71" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">1 Wages</text>
          <text x="52" y="79" fontSize="9" fontWeight="600" fill="#fff" fontFamily="monospace">$69,000</text>
          <rect x="132" y="63" width="80" height="20" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="136" y="71" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">2 Fed tax withheld</text>
          <text x="136" y="79" fontSize="9" fontWeight="600" fill="#fff" fontFamily="monospace">$6,800</text>
          <rect x="48" y="90" width="76" height="20" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="52" y="98" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">3 SS wages</text>
          <text x="52" y="106" fontSize="9" fontWeight="600" fill="#fff" fontFamily="monospace">$75,000</text>
          <rect x="132" y="90" width="80" height="20" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="136" y="98" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">4 SS tax</text>
          <text x="136" y="106" fontSize="9" fontWeight="600" fill="#fff" fontFamily="monospace">$4,650</text>
          <rect x="48" y="117" width="76" height="20" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="52" y="125" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">5 Medicare wages</text>
          <text x="52" y="133" fontSize="9" fontWeight="600" fill="#fff" fontFamily="monospace">$75,000</text>
          <rect x="132" y="117" width="80" height="20" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="136" y="125" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">6 Medicare tax</text>
          <text x="136" y="133" fontSize="9" fontWeight="600" fill="#fff" fontFamily="monospace">$1,088</text>
          <rect x="48" y="144" width="164" height="16" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="52" y="155" fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">12a  D  $6,000 (401k)</text>
          {/* Right side: key labels */}
          <text x="380" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="sans-serif">Box-by-Box</text>
          <text x="380" y="73" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">W-2 Guide</text>
          {/* Callout circles */}
          <circle cx="290" cy="100" r="18" fill="rgba(255,255,255,0.15)" />
          <text x="290" y="96" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Box 1</text>
          <text x="290" y="108" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">≠ gross</text>
          <circle cx="350" cy="130" r="18" fill="rgba(255,255,255,0.15)" />
          <text x="350" y="126" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Box 12</text>
          <text x="350" y="138" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">many codes</text>
          <circle cx="440" cy="100" r="18" fill="rgba(255,255,255,0.15)" />
          <text x="440" y="96" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Box 3/5</text>
          <text x="440" y="108" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">SS/Med</text>
          <circle cx="510" cy="100" r="18" fill="rgba(255,255,255,0.15)" />
          <text x="510" y="96" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Box 17</text>
          <text x="510" y="108" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">state tax</text>
          <text x="400" y="170" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">2026 Tax Year</text>
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
        Understanding Your W-2: A Box-by-Box Guide (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 26, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Every January, your employer sends you a <strong>W-2 form</strong> &mdash; officially the Wage and Tax Statement. It&rsquo;s the single most important tax document you receive as an employee. Your tax return depends on it, your bank may require it for loans, and it serves as the official government record of what you earned and what was withheld from your paychecks last year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yet most people only look at a handful of boxes and hand it to their tax software without reading a word. The W-2 actually contains valuable information about your retirement contributions, health benefits, and state taxes &mdash; and knowing how to read it can help you spot errors before they cost you money.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is every box on the W-2, explained in plain English.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a W-2 and Who Gets One?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A W-2 is a federal tax form that employers are required to send to every employee from whom they withheld taxes during the calendar year. If you are a <strong>W-2 employee</strong> (as opposed to an independent contractor who receives a 1099), you get a W-2. You also get a W-2 if you earned any wages, even if the amount was small.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer sends copies to you, to the IRS, and to your state tax agency. This is why the IRS already knows your income before you file &mdash; they&rsquo;ve seen your W-2.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-2" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; About Form W-2)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        When Do You Receive Your W-2?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Employers are required by law to mail or electronically distribute W-2s by <strong>January 31</strong> each year, covering the prior calendar year&rsquo;s wages. So for the 2026 tax year (wages earned January through December 2026), you will receive your W-2 by January 31, 2027.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you haven&rsquo;t received your W-2 by February 15, contact your employer first. If they still can&rsquo;t provide it, you can call the IRS at 1-800-829-1040 for assistance.{' '}
        <a href="https://www.irs.gov/taxtopics/tc154" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 154: Form W-2 and W-3)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Top Section: Employer and Employee Information
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before the numbered boxes, the W-2 contains identifying information. This section includes your employer&rsquo;s name, address, and <strong>Employer Identification Number (EIN)</strong> &mdash; the business equivalent of a Social Security number. It also includes your name, address, and <strong>Social Security number</strong> (typically shown as XXX-XX-1234 for security).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Always verify that your Social Security number and name are correct. A typo here means the IRS may not be able to match your W-2 to your tax return, which can delay your refund or trigger an IRS notice.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Boxes 1 and 2: Federal Wages and Withholding
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        These are the two most-used boxes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 1 &mdash; Wages, tips, other compensation:</strong> This is your taxable federal income. It is <em>not</em> your gross pay. Box 1 is your gross wages <em>minus</em> any pre-tax deductions that reduce federal taxable income &mdash; such as traditional 401(k) contributions, Section 125 health insurance premiums, and FSA/HSA contributions made through payroll. This is the number that goes on Line 1a of your federal tax return (Form 1040).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 2 &mdash; Federal income tax withheld:</strong> This is the total amount of federal income tax your employer sent to the IRS on your behalf throughout the year, based on your W-4 elections. This number flows directly to your tax return as a credit. If Box 2 exceeds your actual tax liability, you get a refund.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Key insight:</strong> Box 1 is almost always lower than your actual gross pay. If you contributed $6,000 to a traditional 401(k), Box 1 will be $6,000 less than your total gross wages. This surprises many first-time W-2 readers.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Boxes 3–6: Social Security and Medicare
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        These four boxes cover FICA taxes, which fund Social Security and Medicare:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 3 &mdash; Social Security wages:</strong> The wages subject to Social Security tax. This is capped at <strong>$168,600</strong> in 2026. Unlike Box 1, this number is <em>not</em> reduced by 401(k) contributions, but it <em>is</em> reduced by Section 125 cafeteria plan deductions (like employer-sponsored health premiums).{' '}
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>(SSA.gov)</a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 4 &mdash; Social Security tax withheld:</strong> Exactly 6.2% of Box 3. The maximum for 2026 is $10,453.20. If this number is more than $10,453.20, your employer made a withholding error.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 5 &mdash; Medicare wages and tips:</strong> The wages subject to Medicare tax. There is no income cap, so Box 5 is typically the same as Box 3 (unless you earned above $168,600).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 6 &mdash; Medicare tax withheld:</strong> Exactly 1.45% of Box 5. If your wages exceeded $200,000, your employer was required to withhold an additional 0.9% on the excess, and that amount is also included in Box 6.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that Box 1, Box 3, and Box 5 can all be different numbers for the same employee depending on which pre-tax deductions they have. This is one of the most confusing aspects of the W-2.
      </p>

      {/* Section 6: Boxes 7-11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Boxes 7–11: Tips, Dependent Care, and Deferred Compensation
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 7 &mdash; Social Security tips:</strong> Tips you reported to your employer. These are added to Box 3 wages to determine your total Social Security taxable income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 8 &mdash; Allocated tips:</strong> Tips that the IRS estimates you received but did not report to your employer (calculated based on your share of a restaurant&rsquo;s gross receipts). These are taxable income and are <em>not</em> included in Box 1.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 10 &mdash; Dependent care benefits:</strong> The amount your employer paid for dependent care assistance (like a Dependent Care FSA). The 2026 exclusion limit is $5,000 per household ($2,500 if married filing separately). Amounts above the limit are taxable and appear in Box 1.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 11 &mdash; Nonqualified plans:</strong> Distributions from a nonqualified deferred compensation plan. These amounts are already included in Box 1 as taxable wages.
        </li>
      </ul>

      {/* Section 7: Box 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Box 12: The Most Important Box You&rsquo;re Probably Ignoring
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Box 12 can contain up to four entries, each identified by a letter code. These codes cover a wide range of benefits and deductions &mdash; and some of them affect how you fill out your tax return. Here are the most common ones:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Code</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>What It Means</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Affects Your Return?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['D', 'Traditional 401(k) employee contributions', 'No (already excluded from Box 1)'],
              ['AA', 'Roth 401(k) employee contributions', 'No (after-tax; already in Box 1)'],
              ['DD', 'Cost of employer-sponsored health coverage (total)', 'No (informational only)'],
              ['E', '403(b) contributions (teachers, nonprofits)', 'No (already excluded from Box 1)'],
              ['G', '457(b) deferred compensation (govt employees)', 'No (already excluded from Box 1)'],
              ['W', 'Employer + employee HSA contributions', 'Yes — report on Form 8889'],
              ['C', 'Taxable group life insurance over $50,000', 'Yes — included in Box 1'],
              ['S', 'SIMPLE IRA contributions', 'No (already excluded from Box 1)'],
              ['FF', 'QSEHRA reimbursements (small business health)', 'Yes — may affect health coverage credit'],
            ].map(([code, desc, affects], i) => (
              <tr key={code} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#2563eb' }}>{code}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{desc}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{affects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>DD code</strong> is worth noting: it shows the <em>total</em> cost of your employer-sponsored health insurance (what your employer paid plus what you paid in premiums). This number can look startling &mdash; $15,000 or more for family coverage &mdash; but it is purely informational. It does not increase your taxable income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>W code</strong> (HSA contributions) does require action: you must report the total on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8889" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 8889
        </a>{' '}
        when you file your taxes, even if all contributions were within the annual limits.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 969 &mdash; HSA and Medical Savings Accounts)
        </a>
      </p>

      {/* Section 8: Box 13 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Box 13: Three Checkboxes That Matter
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Box 13 has three checkboxes, and each one has a specific purpose:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Statutory employee:</strong> If checked, you are technically an employee for Social Security and Medicare purposes but are treated like an independent contractor for income tax purposes. You can deduct business expenses on Schedule C even though you received a W-2.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Retirement plan:</strong> If checked, you were an active participant in an employer-sponsored retirement plan (401(k), 403(b), pension, etc.) during the year. This checkbox affects whether you can deduct traditional IRA contributions. If this box is checked and your income exceeds certain thresholds, your IRA deduction may be reduced or eliminated.{' '}
          <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; IRA Deduction Limits)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Third-party sick pay:</strong> If checked, you received disability payments from a third-party insurer (not your employer directly) while out on leave.
        </li>
      </ul>

      {/* Section 9: Box 14 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Box 14: Other (Varies by Employer)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Box 14 is a catch-all where employers report anything that does not fit into the other boxes. Common entries include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>State disability insurance (SDI) premiums (common in California, New York, New Jersey)</li>
        <li style={{ marginBottom: '0.5rem' }}>Union dues</li>
        <li style={{ marginBottom: '0.5rem' }}>After-tax Roth 401(k) employer match</li>
        <li style={{ marginBottom: '0.5rem' }}>Paid family leave contributions</li>
        <li style={{ marginBottom: '0.5rem' }}>Educational assistance benefits</li>
        <li style={{ marginBottom: '0.5rem' }}>Vehicle use benefits</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most Box 14 entries are informational. However, some &mdash; like state disability insurance paid in certain states &mdash; may be deductible on your state return. Your tax software will typically prompt you to identify what each Box 14 entry represents.
      </p>

      {/* Section 10: Boxes 15-20 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Boxes 15–20: State and Local Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The bottom section of the W-2 covers state and local tax information:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 15 &mdash; State / Employer&rsquo;s state ID number:</strong> The two-letter state abbreviation and your employer&rsquo;s state tax ID.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 16 &mdash; State wages, tips, etc.:</strong> Your wages subject to state income tax. This is often the same as Box 1, but may differ if your state has different rules for pre-tax deductions.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Box 17 &mdash; State income tax:</strong> The amount of state income tax withheld from your paychecks during the year. This flows to your state tax return.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Boxes 18–20 &mdash; Local wages, local tax, locality name:</strong> If you live or work in a city or county with its own income tax (common in Ohio, Pennsylvania, Michigan, and New York City), your local tax information appears here.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you worked in two states during the year (for example, you moved or had a job that required work in multiple states), your W-2 may have two sets of entries in boxes 15–17.
      </p>

      {/* Section 11: Worked example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: A Complete W-2 at $75,000
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a realistic W-2 for a single employee in Texas with the following profile:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Gross pay: $75,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Traditional 401(k) contribution: $6,000</li>
        <li style={{ marginBottom: '0.5rem' }}>No other pre-tax deductions</li>
        <li style={{ marginBottom: '0.5rem' }}>Filing status on W-4: Single</li>
        <li style={{ marginBottom: '0.5rem' }}>State: Texas (no state income tax)</li>
      </ul>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>W-2 Box</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Description</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Box 1', 'Federal wages', '$69,000', '$75,000 − $6,000 401(k)'],
              ['Box 2', 'Federal income tax withheld', '$6,800', 'Based on W-4 (single, no adjustments)'],
              ['Box 3', 'Social Security wages', '$75,000', '401(k) does NOT reduce SS wages'],
              ['Box 4', 'Social Security tax withheld', '$4,650', '6.2% × $75,000'],
              ['Box 5', 'Medicare wages', '$75,000', 'No SS cap issues; same as Box 3'],
              ['Box 6', 'Medicare tax withheld', '$1,087.50', '1.45% × $75,000'],
              ['Box 12a', 'Code D — 401(k) contributions', '$6,000', 'Informational; already out of Box 1'],
              ['Box 13', 'Retirement plan box', 'Checked', 'May limit IRA deductibility'],
              ['Box 15', 'State', 'TX', 'Texas — no state income tax'],
              ['Box 16', 'State wages', '$0 / blank', 'No state income tax in Texas'],
              ['Box 17', 'State income tax withheld', '$0', 'No state tax withheld'],
            ].map(([box, desc, amount, notes], i) => (
              <tr key={box} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#2563eb', whiteSpace: 'nowrap' }}>{box}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>{desc}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', whiteSpace: 'nowrap' }}>{amount}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem' }}>{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice the key difference: Box 1 shows <strong>$69,000</strong> but Box 3 and Box 5 both show <strong>$75,000</strong>. This is because traditional 401(k) contributions reduce your federal taxable income (Box 1) but are still subject to Social Security and Medicare taxes. If you see different numbers in these boxes and can&rsquo;t explain why, it&rsquo;s worth checking your pay stubs to verify the math.
      </p>

      {/* Section 12: Common questions */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common W-2 Questions
      </h2>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Why is Box 1 lower than my gross pay?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Box 1 is reduced by pre-tax deductions that lower your federal taxable income: traditional 401(k) or 403(b) contributions, Section 125 health/dental/vision premiums, FSA contributions, and sometimes HSA payroll deductions. These benefits are a tax advantage &mdash; you are earning them effectively tax-free.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Can I get a corrected W-2 if there&rsquo;s an error?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes. Contact your employer&rsquo;s payroll or HR department and ask them to issue a <strong>W-2c</strong> (Corrected Wage and Tax Statement). Common errors include a wrong Social Security number, incorrect wages, or missing retirement plan indicator in Box 13. Do not file your taxes with an incorrect W-2; wait for the corrected version.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-2-c" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; About Form W-2c)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        What if I worked two jobs and have two W-2s?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You must report all W-2s on your tax return. Add the Box 1 amounts together for your total wages. However, pay attention to Box 3 across all W-2s. If your combined Social Security wages from all employers exceeded $168,600, you overpaid Social Security tax &mdash; each employer withheld 6.2% without knowing about the other employer. You can claim the excess as a credit on your Form 1040.{' '}
        <a href="https://www.irs.gov/taxtopics/tc608" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 608: Excess Social Security Withholding)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        How long should I keep my W-2?
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS recommends keeping copies of your W-2s for at least <strong>three years</strong> after filing (in case of an audit). However, because W-2 wages are also used to calculate Social Security benefits, it&rsquo;s wise to keep them indefinitely or until you can verify the amounts appear correctly in your{' '}
        <a href="https://www.ssa.gov/myaccount/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Social Security earnings record (SSA.gov &mdash; my Social Security)
        </a>
        .
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your W-2 is more than a number to plug into tax software. It is a complete record of your compensation and every dollar that was withheld for federal, state, and FICA taxes during the year. The gap between Box 1 and your gross pay tells the story of your pre-tax benefits. Box 12 reveals your retirement contributions and health coverage costs. Box 13&rsquo;s retirement plan checkbox could determine whether your IRA is deductible.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Take five minutes to review your W-2 before filing. Verify your Social Security number, confirm that Box 4 is not more than $10,453.20, and make sure your address is current (the IRS mails refund checks to the address on your last return). Small errors on this document can cause big headaches later.
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
          See Your Full Paycheck Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly how much goes to federal tax, Social Security, Medicare, and state tax &mdash; and what you actually take home each paycheck.
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
          <a href="https://www.irs.gov/forms-pubs/about-form-w-2" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-2, Wage and Tax Statement</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/iw2w3.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 2026 Instructions for Forms W-2 and W-3</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc154" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 154: Form W-2 and Form W-3</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc608" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 608: Excess Social Security and RRTA Tax Withheld</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 969: HSAs and Other Tax-Favored Health Plans</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; IRA Deduction Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Social Security Contribution and Benefit Base</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/myaccount/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; my Social Security: Check Your Earnings Record</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-2-c" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-2c (Corrected Wage and Tax Statement)</a>
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
