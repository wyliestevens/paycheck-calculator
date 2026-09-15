import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'State Disability Insurance (SDI): What It Is and How It Affects Your Paycheck (2026)',
  description:
    'See "CASDI" or "SDI" on your pay stub and wonder what it means? State Disability Insurance is a payroll deduction in 7+ states. Here\'s exactly how it works, what it costs, and what you get back.',
  alternates: { canonical: '/blog/state-disability-insurance-sdi-paycheck' },
  keywords:
    'state disability insurance, SDI paycheck, CASDI pay stub, what is SDI, California SDI 2026, New Jersey TDI, state disability tax, SDI deduction paycheck 2026',
  openGraph: {
    title: 'State Disability Insurance (SDI): What It Is and How It Affects Your Paycheck (2026)',
    description:
      'See "CASDI" or "SDI" on your pay stub? State Disability Insurance is a payroll deduction in 7+ states. Here\'s how it works and what it costs.',
  },
}

export default function StateDisabilityInsurancePage() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="State Disability Insurance illustration showing pay stub with SDI deduction and shield protection icon"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Pay stub on the left */}
          <rect x="40" y="45" width="160" height="110" rx="6" fill="rgba(255,255,255,0.15)" />
          <text x="120" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">PAY STUB</text>
          <line x1="55" y1="78" x2="185" y2="78" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="58" y="95" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Gross Pay</text>
          <text x="183" y="95" textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="monospace">$2,500.00</text>
          <text x="58" y="112" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Federal Tax</text>
          <text x="183" y="112" textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="monospace">-$248.00</text>
          <text x="58" y="129" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">FICA</text>
          <text x="183" y="129" textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="monospace">-$191.25</text>
          {/* SDI line highlighted */}
          <rect x="52" y="134" width="133" height="16" rx="3" fill="rgba(255,255,255,0.2)" />
          <text x="58" y="146" fontSize="9" fontWeight="700" fill="#fff" fontFamily="sans-serif">CASDI</text>
          <text x="183" y="146" textAnchor="end" fontSize="9" fontWeight="700" fill="#fde68a" fontFamily="monospace">-$27.50</text>

          {/* Arrow */}
          <line x1="218" y1="100" x2="265" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="265,93 278,100 265,107" fill="rgba(255,255,255,0.5)" />

          {/* Shield / protection icon on right */}
          <path d="M360 50 L430 50 L430 115 Q430 145 395 158 Q360 145 360 115 Z" fill="rgba(255,255,255,0.2)" />
          <path d="M367 58 L423 58 L423 115 Q423 140 395 152 Q367 140 367 115 Z" fill="rgba(255,255,255,0.12)" />
          <text x="395" y="95" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff" fontFamily="sans-serif">SDI</text>
          <text x="395" y="115" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Protected</text>

          {/* Right side benefit text */}
          <text x="465" y="75" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Short-term</text>
          <text x="465" y="89" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">disability</text>
          <text x="465" y="103" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">pay if you</text>
          <text x="465" y="117" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">can&apos;t work</text>
          <line x1="455" y1="65" x2="455" y2="125" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

          {/* Bottom label */}
          <text x="300" y="185" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">7 states require SDI payroll deductions · Replaces 60–90% of wages</text>
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
        State Disability Insurance (SDI): What It Is and How It Affects Your Paycheck (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 15, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You scan your pay stub and spot a line you don&rsquo;t recognize: <strong>CASDI</strong>, <strong>SDI</strong>, <strong>TDI</strong>, or <strong>NJ FLI</strong>. A few dollars are coming out of every paycheck, and nobody explained why. This guide answers that question completely &mdash; what state disability insurance is, which states require it, how much it costs, and what benefit you get in return.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The short version: <strong>State Disability Insurance (SDI)</strong> is a mandatory payroll deduction in about half a dozen states that funds short-term disability benefits. If you get sick, injured, or pregnant and can&rsquo;t work, SDI replaces a portion of your lost wages &mdash; typically for up to 52 weeks. You pay for this coverage through the deduction on your check, whether you ever use it or not.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is State Disability Insurance?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State Disability Insurance is a state-administered insurance program that pays you a weekly benefit if a non-work-related illness, injury, pregnancy, or childbirth leaves you unable to work. (Injuries that happen <em>at</em> work are covered by workers&rsquo; compensation instead.)
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        SDI is funded by employee payroll deductions, employer contributions, or both &mdash; depending on the state. The deduction is automatic; you do not choose whether to participate. In exchange, you have coverage the moment you start work in that state.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        SDI is separate from Social Security Disability Insurance (SSDI), which is a federal program for long-term disabilities. SDI covers <em>short-term</em> events &mdash; typically a few weeks to one year &mdash; and the process for claiming it is entirely through your state.{' '}
        <a href="https://www.dol.gov/general/topic/disability/paid-leave" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (U.S. Department of Labor &mdash; Paid Leave)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which States Require SDI Deductions?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        As of 2026, the following states require SDI or equivalent payroll deductions. Most states also bundle Paid Family Leave (PFL) &mdash; time off to bond with a new child or care for a seriously ill family member &mdash; into the same contribution.
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
            <tr style={{ background: '#f0f9ff' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Program Name</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2026 Employee Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Wage Base</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['California', 'SDI (incl. PFL)', '1.1%', 'All wages (no cap)'],
              ['New Jersey', 'TDI + FLI', '~0.23%', '$163,000'],
              ['New York', 'DBL + PFL', '0.5% + 0.373%', 'DBL: $0.60/wk max; PFL: $89,835'],
              ['Rhode Island', 'TDI', '~1.2%', '~$91,000'],
              ['Hawaii', 'TDI', 'Up to 50% of cost', 'Varies by plan'],
              ['Washington', 'PFML', '~0.92% total', 'Social Security wage base'],
              ['Massachusetts', 'PFML', '~0.42% (employee share)', 'Social Security wage base'],
              ['Colorado', 'FAMLI', '0.45%', 'Social Security wage base'],
            ].map(([state, program, rate, wageBase], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{program}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#0891b2' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', color: '#475569', fontSize: '0.875rem' }}>{wageBase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Rates for 2026 are approximate. States update them annually. Always verify current rates with your state&rsquo;s labor or employment department.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live in any other state, you will <em>not</em> see an SDI deduction on your paycheck. Those states may have voluntary disability programs or rely on employer-provided short-term disability policies, but nothing is taken from your wages automatically.
      </p>

      {/* Section 3: California (the big one) */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        California SDI: The Largest State Program
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        California&rsquo;s SDI program, run by the{' '}
        <a href="https://edd.ca.gov/en/disability/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Employment Development Department (EDD)
        </a>
        , is the largest state disability program in the country and the one most workers encounter. On your California pay stub it appears as <strong>CASDI</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Starting January 1, 2024, California removed the annual wage cap on SDI contributions. Previously, SDI only applied to the first ~$153,000 in wages. Now, <strong>all wages are subject to the 1.1% SDI rate</strong> with no upper limit. This change significantly increased the deduction for high earners.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In exchange for removing the cap, California also increased the maximum benefit. Starting in 2025, higher-wage workers receive a benefit closer to their actual pre-disability income (up to 90% of wages for lower earners, 70% for higher earners).{' '}
        <a href="https://edd.ca.gov/en/disability/Disability_Insurance_Provisions/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (California EDD &mdash; SDI Provisions)
        </a>
      </p>

      {/* Section 4: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: California Worker at $65,000
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s see exactly how California SDI affects a typical paycheck. Our example: a California employee earning <strong>$65,000 per year</strong>, paid biweekly (26 paychecks per year).
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Per Paycheck</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross wages', '$2,500.00', '$65,000.00'],
              ['Federal income tax (est.)', '−$248.00', '−$6,448.00'],
              ['Social Security (6.2%)', '−$155.00', '−$4,030.00'],
              ['Medicare (1.45%)', '−$36.25', '−$942.50'],
              ['California state income tax (est.)', '−$82.00', '−$2,132.00'],
              ['California SDI (1.1%)', '−$27.50', '−$715.00'],
            ].map(([item, perCheck, annual], i) => (
              <tr key={item} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: item === 'California SDI (1.1%)' ? 700 : 400 }}>{item}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: item === 'California SDI (1.1%)' ? '#0891b2' : '#dc2626' }}>{perCheck}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: item === 'California SDI (1.1%)' ? '#0891b2' : '#dc2626' }}>{annual}</td>
              </tr>
            ))}
            <tr style={{ background: '#f0f9ff' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Net (take-home) pay</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$1,951.25</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$50,732.50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The SDI deduction of <strong>$27.50 per biweekly paycheck</strong> adds up to <strong>$715 per year</strong>. That&rsquo;s about 1.1% of gross pay &mdash; a relatively small deduction compared to federal income tax or FICA, but it buys meaningful insurance coverage that would otherwise cost far more if purchased privately.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a high earner in California making $200,000 per year, the SDI deduction is now <strong>$2,200 per year</strong> &mdash; more than four times what it was before the 2024 cap removal.
      </p>

      {/* Section 5: What benefits do you get? */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Benefits Do You Get in Return?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In exchange for your SDI contributions, you gain the right to claim benefits if a non-work-related disability leaves you unable to perform your normal job duties. The details vary by state, but the general structure is:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Waiting period:</strong> Most states have a 7-day waiting period (unpaid) before benefits begin. California eliminated its waiting period for claims after January 1, 2025.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Benefit amount:</strong> Typically 60&ndash;90% of your average weekly wages, subject to a state maximum. California&rsquo;s maximum weekly benefit in 2026 is approximately $1,681. New Jersey&rsquo;s is around $1,217/week.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Benefit duration:</strong> Up to 52 weeks for most conditions in California. Up to 26 weeks in New Jersey and Rhode Island.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Qualifying events:</strong> Your own non-work illness, injury, or pregnancy/childbirth. Most states also include Paid Family Leave for bonding with a new child or caring for a seriously ill family member.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To illustrate the value: if that $65,000/year California worker becomes seriously ill and can&rsquo;t work for 12 weeks, they could receive approximately <strong>$14,861 in SDI benefits</strong> ($65,000 / 52 weeks × 70% benefit rate × 12 weeks). They paid $715/year for this coverage. That is an extraordinary return on a $715 annual contribution.
      </p>

      {/* Section 6: How SDI differs from SSDI */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        SDI vs. Social Security Disability (SSDI): Key Differences
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Many workers confuse state SDI with the federal SSDI program. They are entirely separate. Here&rsquo;s how they compare:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State SDI</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal SSDI</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Who administers it', 'Your state', 'Social Security Administration'],
              ['How it&rsquo;s funded', 'State payroll deduction', 'Social Security (FICA) tax'],
              ['Type of disability covered', 'Short-term (weeks to 1 year)', 'Long-term (12+ months)'],
              ['Waiting period', '0&ndash;7 days', '5 full months'],
              ['Benefit amount', '60&ndash;90% of wages', 'Based on earnings history (~$1,500/mo average)'],
              ['Who qualifies', 'Workers in qualifying states', 'Workers nationwide with sufficient work history'],
              ['Can you get both?', 'Yes, SDI pays first', 'Yes, SSDI pays after SDI ends'],
            ].map(([label, sdi, ssdi], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }} dangerouslySetInnerHTML={{ __html: label }} />
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }} dangerouslySetInnerHTML={{ __html: sdi }} />
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }} dangerouslySetInnerHTML={{ __html: ssdi }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If a serious illness lasts more than a year, you could receive state SDI benefits while your SSDI application is pending, then transition to SSDI once it is approved. The two programs are designed to work together.{' '}
        <a href="https://www.ssa.gov/disability/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Social Security Disability Insurance)
        </a>
      </p>

      {/* Section 7: Are SDI deductions tax deductible? */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Are SDI Contributions Tax Deductible?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is where it gets nuanced. SDI contributions are <strong>not</strong> deductible from your federal income tax in the traditional sense. However, they are included in the deduction for state and local taxes (SALT) on Schedule A, if you itemize.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most workers, who take the standard deduction ($15,000 for single filers in 2026), SDI contributions provide no direct federal tax benefit. The deduction is simply taken from your gross pay, reducing your take-home amount.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is one important exception: SDI contributions are not subject to FICA taxes (Social Security and Medicare). They are taken from your gross wages, but FICA is calculated on wages <em>before</em> the SDI deduction is applied &mdash; so SDI does not reduce your FICA bill. Think of it as a separate line item, not a pre-tax benefit like a 401(k).{' '}
        <a href="https://www.irs.gov/taxtopics/tc502" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic No. 502: Medical and Dental Expenses)
        </a>
      </p>

      {/* Section 8: Are SDI benefits taxable? */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Are SDI Benefits Taxable When You Receive Them?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The taxability of SDI benefits depends on <strong>who paid the premiums</strong> and <strong>whether those premiums were paid pre-tax or post-tax</strong>:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State SDI programs (employee-funded with after-tax dollars):</strong> Benefits are generally <em>not</em> federally taxable because you paid premiums with after-tax money. This applies to California, New Jersey, Rhode Island, and most other state SDI programs.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Employer-funded or employer-paid disability:</strong> If your employer pays the premium, benefits are fully taxable as ordinary income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Mixed funding:</strong> If you paid some premiums with pre-tax dollars (for example, through a Section 125 cafeteria plan), a proportional share of the benefits is taxable.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For California SDI specifically: the contributions come from your after-tax wages, so California SDI benefits are generally <strong>not taxable federally</strong>. However, they may be taxable at the state level in some circumstances. Always consult IRS Publication 525 for the full rules.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-publication-525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 525 &mdash; Taxable and Nontaxable Income)
        </a>
      </p>

      {/* Section 9: New Jersey SDI */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        New Jersey TDI and FLI: Two Separate Deductions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        New Jersey workers may see two separate deductions on their pay stub: <strong>NJ TDI</strong> (Temporary Disability Insurance) and <strong>NJ FLI</strong> (Family Leave Insurance). These are separate programs funded by separate contributions.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>NJ TDI:</strong> Covers your own non-work illness or injury. Administered by the{' '}
          <a href="https://myleavebenefits.nj.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            NJ Division of Temporary Disability and Family Leave Insurance
          </a>
          .
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>NJ FLI:</strong> Covers paid leave to bond with a new child or care for a seriously ill family member. Benefits can be up to 12 weeks per year.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The combined employee contribution is around 0.23% of wages up to approximately $163,000 in 2026, for a maximum annual employee contribution of about $375. Given that NJ TDI pays up to $1,217 per week in 2026 for up to 26 weeks, this is an excellent value.
      </p>

      {/* Section 10: What if you work in a state with SDI but live elsewhere? */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What If You Work Remotely for a Company in a State With SDI?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        SDI deductions are based on where <strong>you perform the work</strong>, not where your employer is headquartered. If you live and work in Texas (which has no SDI), your employer cannot withhold California SDI from your paycheck &mdash; even if the company is based in California.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Conversely, if you work remotely from California for a company headquartered in Texas, you generally <em>will</em> have California SDI withheld, because you are working in California. The same rules that govern state income tax residency apply to SDI. This is one reason why where you physically work matters so much for payroll.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Remote workers who move between states mid-year may see their SDI situation change when their payroll state changes. Check with your HR or payroll department when you relocate.
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work in California, New Jersey, New York, Rhode Island, Hawaii, Washington, Massachusetts, or Colorado, you will see a small SDI or equivalent deduction on every paycheck. It ranges from less than 1% of wages in some states to 1.1% in California (with no cap), and it buys you short-term disability insurance coverage that would cost far more on the open market.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The deduction is mandatory, not adjustable, and is taken from gross wages with after-tax dollars. Benefits you receive are generally federal income tax-free (since you paid with after-tax money), though state tax rules vary. If you ever face a serious illness, injury, or pregnancy that takes you out of work, your SDI contributions will have been among the best value you ever got out of a paycheck deduction.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Full Paycheck Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see exactly how much goes to federal tax, FICA, state tax, and estimated SDI &mdash; and what you actually take home each paycheck.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#0891b2',
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
          <a href="https://edd.ca.gov/en/disability/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California EDD &mdash; State Disability Insurance</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://edd.ca.gov/en/disability/Disability_Insurance_Provisions/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California EDD &mdash; SDI Provisions and Benefit Amounts</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://myleavebenefits.nj.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>New Jersey Division of Temporary Disability and Family Leave Insurance</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/disability/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Social Security Disability Insurance (SSDI)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/general/topic/disability/paid-leave" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor &mdash; Paid Leave and Disability</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-publication-525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 525 &mdash; Taxable and Nontaxable Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc502" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic No. 502: Medical and Dental Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://paidleave.wa.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Washington State &mdash; Paid Family and Medical Leave</a>
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
