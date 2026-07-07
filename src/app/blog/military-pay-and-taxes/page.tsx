import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Military Pay and Taxes: A Complete Guide (2026)',
  description:
    'Military compensation includes taxable basic pay plus tax-free allowances like BAH and BAS. Learn exactly what gets taxed, how combat zones change everything, and see a full worked example for an E-5 sergeant.',
  alternates: { canonical: '/blog/military-pay-and-taxes' },
  keywords:
    'military pay taxes 2026, military tax exemption, BAH taxable, BAS taxable, combat zone tax exclusion, armed forces taxes, military pay guide, military TSP, military allowances tax',
  openGraph: {
    title: 'Military Pay and Taxes: A Complete Guide (2026)',
    description:
      'Military pay includes taxable and tax-free components. See the full breakdown — with a worked example showing how an E-5 sergeant pays less than 6% in federal taxes on total compensation.',
  },
}

export default function MilitaryPayAndTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Military pay and taxes illustration showing taxable and tax-free pay components"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Star badge / rank insignia (simplified) */}
          <polygon
            points="58,50 63,65 78,65 66,74 71,89 58,80 45,89 50,74 38,65 53,65"
            fill="rgba(255,255,255,0.85)"
          />

          {/* Pay stub lines - left column */}
          <rect x="95" y="45" width="140" height="110" rx="6" fill="rgba(255,255,255,0.15)" />
          <text x="165" y="63" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">PAY STUB</text>
          <line x1="108" y1="70" x2="223" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="108" y="84" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Basic Pay</text>
          <text x="223" y="84" textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.9)" fontFamily="monospace">$2,981</text>
          <text x="108" y="99" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">BAH</text>
          <text x="223" y="99" textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.9)" fontFamily="monospace">$1,995</text>
          <text x="108" y="114" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">BAS</text>
          <text x="223" y="114" textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.9)" fontFamily="monospace">$473</text>
          <line x1="108" y1="120" x2="223" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <text x="108" y="134" fontSize="9" fontWeight="700" fill="#fff" fontFamily="sans-serif">Total</text>
          <text x="223" y="134" textAnchor="end" fontSize="9" fontWeight="700" fill="#fff" fontFamily="monospace">$5,449</text>

          {/* Arrow */}
          <line x1="250" y1="100" x2="290" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="290,92 305,100 290,108" fill="rgba(255,255,255,0.6)" />

          {/* Taxable / Non-taxable split - right column */}
          <rect x="315" y="45" width="125" height="50" rx="6" fill="rgba(239,68,68,0.25)" />
          <text x="377" y="65" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fca5a5" fontFamily="sans-serif">TAXABLE</text>
          <text x="377" y="81" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">$2,981</text>
          <text x="377" y="91" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Basic Pay</text>

          <rect x="315" y="107" width="125" height="50" rx="6" fill="rgba(34,197,94,0.25)" />
          <text x="377" y="127" textAnchor="middle" fontSize="10" fontWeight="700" fill="#86efac" fontFamily="sans-serif">TAX-FREE</text>
          <text x="377" y="143" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">$2,468</text>
          <text x="377" y="153" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">BAH + BAS</text>

          {/* Right label */}
          <text x="455" y="85" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">45% of pay</text>
          <text x="455" y="100" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">is tax-free</text>
          <text x="455" y="120" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">E-5, 4 yrs service</text>
          <text x="455" y="135" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">w/ dependents</text>
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
        Military Pay and Taxes: A Complete Guide (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 7, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Military compensation is not a single paycheck &mdash; it is a package made up of several components, some of which are fully taxable, and others that are completely tax-free. Understanding the difference is essential for service members who want to know what they are actually earning and how taxes affect their take-home pay.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide covers every major component of military pay, explains what the IRS considers taxable income, walks through a full worked example for an E-5 sergeant, and explains powerful tax benefits including the <strong>Combat Zone Tax Exclusion</strong> &mdash; one of the most significant tax breaks available to any American worker.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Two Categories of Military Compensation
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Military pay falls into two broad categories: <strong>pay</strong> (which is taxable) and <strong>allowances</strong> (which are generally not taxable). This distinction has enormous implications for how much federal and state income tax a service member actually owes.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Compensation Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Examples</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal Income Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>FICA</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Basic Pay', 'Monthly salary based on rank and years of service', 'Taxable', 'Taxable'],
              ['Special Pay', 'Flight pay, hazard pay, dive pay, submarine pay', 'Taxable*', 'Taxable'],
              ['Bonus Pay', 'Enlistment bonuses, reenlistment bonuses', 'Taxable*', 'Taxable'],
              ['BAH', 'Basic Allowance for Housing', 'Tax-free', 'Tax-free'],
              ['BAS', 'Basic Allowance for Subsistence', 'Tax-free', 'Tax-free'],
              ['OHA', 'Overseas Housing Allowance', 'Tax-free', 'Tax-free'],
              ['COLA', 'Cost of Living Allowance (OCONUS)', 'Tax-free', 'Tax-free'],
              ['Clothing Allowance', 'Annual uniform replacement allowance', 'Tax-free', 'Tax-free'],
            ].map(([type, examples, federal, fica], i) => (
              <tr key={type} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{type}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{examples}</td>
                <td style={{
                  padding: '0.625rem 1rem',
                  borderBottom: '1px solid #e2e8f0',
                  textAlign: 'center',
                  color: federal.startsWith('Tax-free') ? '#059669' : '#dc2626',
                  fontWeight: 600,
                }}>
                  {federal}
                </td>
                <td style={{
                  padding: '0.625rem 1rem',
                  borderBottom: '1px solid #e2e8f0',
                  textAlign: 'center',
                  color: fica === 'Tax-free' ? '#059669' : '#dc2626',
                  fontWeight: 600,
                }}>
                  {fica}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        *Special pay and bonuses earned in a designated Combat Zone are excluded from federal income tax. See the Combat Zone section below.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Basic Pay: The Taxable Core
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Basic Pay</strong> is the foundation of military compensation. It is set by Congress and published in official pay tables maintained by the Defense Finance and Accounting Service (DFAS). Your Basic Pay amount depends on two factors: your <strong>pay grade</strong> (E-1 through E-9 for enlisted, W-1 through W-5 for warrant officers, and O-1 through O-10 for commissioned officers) and your <strong>years of service</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Basic Pay receives an annual Cost of Living Adjustment (COLA) each January. Here are approximate 2026 monthly Basic Pay rates for a selection of common pay grades:{' '}
        <a href="https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DFAS.mil &mdash; Pay Tables)
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Pay Grade</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Title (Army / Navy)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2 Years Service</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>6 Years Service</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual (6 yrs)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['E-1', 'Private / Seaman Recruit', '$2,097', '$2,097', '$25,164'],
              ['E-4', 'Specialist / Petty Officer 3rd', '$2,503', '$2,761', '$33,132'],
              ['E-5', 'Sergeant / Petty Officer 2nd', '$2,730', '$2,981', '$35,772'],
              ['E-7', 'Sergeant First Class / CPO', '$3,740', '$4,372', '$52,464'],
              ['O-1', '2nd Lieutenant / Ensign', '$3,986', '$5,008', '$60,096'],
              ['O-3', 'Captain / Lieutenant', '$5,353', '$6,789', '$81,468'],
              ['O-5', 'Lieutenant Colonel / Cdr', '$7,332', '$9,173', '$110,076'],
            ].map(([grade, title, two, six, annual], i) => (
              <tr key={grade} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{grade}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{title}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{two}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{six}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 600 }}>{annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Approximate 2026 rates. Verify exact current rates at{' '}
        <a href="https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DFAS.mil</a>.
        Rates vary by years of service; only two data points shown per grade for brevity.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Basic Pay is subject to federal income tax and FICA taxes (6.2% Social Security + 1.45% Medicare). It is also the income that gets reported in Box 1 of your W-2 at year-end &mdash; though the figure will be reduced by any pre-tax contributions you make to the Thrift Savings Plan (TSP).
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        BAH and BAS: The Tax-Free Allowances That Change Everything
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most service members, allowances make up a substantial portion of total compensation &mdash; and they are entirely excluded from federal income tax. The two largest allowances are:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Basic Allowance for Housing (BAH)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        BAH covers the cost of off-base housing. It is set by location (Military Housing Area, or MHA) and varies significantly by duty station and dependency status. A service member living in San Diego, California with dependents might receive over $3,600/month in BAH, while someone at a rural installation in the Midwest might receive $1,200/month. None of it is taxable.{' '}
        <a href="https://www.defensetravel.dod.mil/site/bah.cfm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DoD BAH Calculator)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        BAH is determined at the beginning of each calendar year based on local rental market surveys. Once set for a service member, it does not decrease even if local housing costs drop &mdash; this protection is called <strong>rate protection</strong>.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Basic Allowance for Subsistence (BAS)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        BAS covers the cost of food. In 2026, the approximate monthly rates are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Enlisted:</strong> ~$473/month ($5,676/year)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Officers:</strong> ~$320/month ($3,840/year)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Like BAH, BAS is completely excluded from federal income tax. It is also not subject to FICA. Service members who live in government quarters may receive a reduced BAS or have their BAS offset by the cost of the dining facility (DFAC) meals.{' '}
        <a href="https://www.dfas.mil/militarymembers/payentitlements/bas.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (DFAS.mil &mdash; BAS rates)
        </a>
      </p>

      {/* Section 4 - Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: E-5 Sergeant, 4 Years of Service
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s work through a complete tax picture for a realistic scenario: an Army Sergeant (E-5) with 4 years of service, married with one dependent, stationed at Fort Campbell, Kentucky.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Total Monthly Compensation
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Pay Component</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Monthly</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Basic Pay (E-5, 4 yrs)', '$2,981', '$35,772', 'Yes'],
              ['BAH (Fort Campbell, w/ dep.)', '$1,995', '$23,940', 'No'],
              ['BAS (enlisted)', '$473', '$5,676', 'No'],
            ].map(([component, monthly, annual, taxable], i) => (
              <tr key={component} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{component}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{monthly}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{annual}</td>
                <td style={{
                  padding: '0.625rem 1rem',
                  borderBottom: '1px solid #e2e8f0',
                  textAlign: 'center',
                  color: taxable === 'Yes' ? '#dc2626' : '#059669',
                  fontWeight: 600,
                }}>
                  {taxable}
                </td>
              </tr>
            ))}
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Compensation</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$5,449</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$65,388</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0' }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: Federal Income Tax Calculation
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Only Basic Pay is subject to federal income tax. The Sergeant files as <em>Married Filing Jointly</em>.
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          lineHeight: 2,
          color: '#1e293b',
        }}
      >
        <div>Taxable Income (Basic Pay):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$35,772</div>
        <div style={{ color: '#dc2626' }}>&minus; Standard Deduction (MFJ 2026):&nbsp;&nbsp;$30,000</div>
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem', marginTop: '0.25rem' }}>Federal Taxable Income:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5,772</div>
        <div style={{ color: '#dc2626' }}>Federal Income Tax (10% bracket):&nbsp;&nbsp;$577</div>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 3: FICA Taxes
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        FICA (Social Security + Medicare) applies only to Basic Pay &mdash; not to BAH or BAS.
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          lineHeight: 2,
          color: '#1e293b',
        }}
      >
        <div>Social Security (6.2% &times; $35,772):&nbsp;&nbsp;&nbsp;$2,218</div>
        <div>Medicare (1.45% &times; $35,772):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$518</div>
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem', marginTop: '0.25rem', color: '#dc2626' }}>Total FICA:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$2,736</div>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 4: The Big Picture
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>% of Total Compensation</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal Income Tax', '$577', '0.9%'],
              ['FICA (Social Security + Medicare)', '$2,736', '4.2%'],
            ].map(([tax, amount, pct], i) => (
              <tr key={tax} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{amount}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{pct}</td>
              </tr>
            ))}
            <tr style={{ background: '#fef2f2' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Federal Taxes</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$3,313</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>5.1%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This E-5 Sergeant earns <strong>$65,388 in total annual compensation</strong> but pays only <strong>$3,313 in federal taxes</strong> &mdash; an effective rate of just 5.1% on total compensation. A civilian earning $65,388 with no special allowances (filing MFJ) would owe roughly $6,200 in federal income tax and $5,002 in FICA, for a combined $11,202 in federal taxes &mdash; more than three times as much.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key is that the non-taxable allowances (BAH + BAS = $29,616/year) are excluded entirely from the tax calculation. They function like pre-tax income that the IRS never touches.
      </p>

      {/* Section 5 - Combat Zone */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Combat Zone Tax Exclusion
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Combat Zone Tax Exclusion</strong> is one of the most powerful tax benefits in the entire US tax code. When an enlisted service member serves in a designated combat zone &mdash; even for a single day of a given month &mdash; their <strong>entire Basic Pay for that month</strong> is excluded from federal income tax. No income tax is due on pay earned during that month.{' '}
        <a href="https://www.irs.gov/individuals/military/combat-zone-related-exclusions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Combat Zone Tax Exclusions)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For <strong>commissioned officers</strong>, the exclusion is capped at the highest enlisted monthly pay rate (approximately $9,402/month for an E-9 with 38+ years of service in 2026). Officers earning above that cap still owe income tax on the excess.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The exclusion also applies to:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Enlistment and reenlistment bonuses received while serving in a combat zone</li>
        <li style={{ marginBottom: '0.5rem' }}>Imminent Danger Pay / Hostile Fire Pay earned in the combat zone</li>
        <li style={{ marginBottom: '0.5rem' }}>All special pay types earned during combat zone service</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Example: O-3 Captain, 6 Months in a Combat Zone
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Consider an Army Captain (O-3) with 6 years of service (Basic Pay: $6,789/month), filing as single, who deploys to a combat zone for 6 months.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Scenario</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Basic Pay</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Fed. Income Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>No combat zone (12 months stateside)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$81,468</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$9,537</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>6 months in combat zone (6 months excluded)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$40,734</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$2,850</td>
            </tr>
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Tax savings from 6-month deployment</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>&mdash;</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$6,687</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Both scenarios assume single filing status. Federal income tax calculated after $15,000 standard deduction.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Designated combat zones are established by Presidential Executive Order. Current zones include certain areas in the Middle East and the Sinai Peninsula. The IRS maintains a full list of designated combat zones and qualified hazardous duty areas.{' '}
        <a href="https://www.irs.gov/individuals/military/combat-zone-related-exclusions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Combat Zone Exclusions)
        </a>
      </p>

      {/* Section 6 - State Taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Income Taxes on Military Pay
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal tax law is uniform for all service members, but state tax treatment of military pay varies considerably. Some states are very generous to military members; others treat Basic Pay like any other income.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State Treatment</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Examples</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['No state income tax at all', 'Texas, Florida, Nevada, Wyoming, Washington, South Dakota, Alaska'],
              ['Full exemption of military basic pay', 'Indiana, Michigan, New Hampshire (no earned income tax), Montana (partial)'],
              ['Exemption only while deployed / nonresident', 'Many states: home-state tax applies to domicile, not duty station'],
              ['Partial exemption', 'Virginia, North Carolina, and others exempt up to a set dollar amount'],
              ['Fully taxable (same as civilian income)', 'California, New York — taxes military pay if you are a domiciliary of that state'],
            ].map(([treatment, examples], i) => (
              <tr key={treatment} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>{treatment}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key concept for military state taxes is <strong>domicile</strong> (your permanent legal home state) vs. <strong>duty station</strong> (where you are currently stationed). Under the Servicemembers Civil Relief Act (SCRA), a service member&rsquo;s domicile does not change just because they are stationed in another state. You generally owe state income tax only to your home state &mdash; not to the state where you are currently posted.{' '}
        <a href="https://www.militaryonesource.mil/financial-legal/personal-finance/taxes/tax-information-for-military-members/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (MilitaryOneSource &mdash; Taxes for Military Members)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Spouses of service members also benefit from the Military Spouses Residency Relief Act (MSRRA), which allows them to maintain their home-state domicile for tax purposes even when living at the service member&rsquo;s duty station in another state.
      </p>

      {/* Section 7 - TSP */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        TSP: The Military&rsquo;s Tax-Advantaged Retirement Account
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Thrift Savings Plan (TSP)</strong> is the military&rsquo;s version of a 401(k). It allows service members to contribute pre-tax dollars from their Basic Pay into a retirement account, reducing their current-year taxable income just as a traditional 401(k) does.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In 2026, the TSP contribution limit is <strong>$23,500</strong> (the same as the 401(k) limit for civilian employees). Service members aged 50 and older can make an additional catch-up contribution of $7,500.{' '}
        <a href="https://www.tsp.gov/making-contributions/contribution-limits/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (TSP.gov &mdash; Contribution Limits)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under the <strong>Blended Retirement System (BRS)</strong>, which covers service members who entered military service on or after January 1, 2018 (or those who opted in), the government automatically contributes 1% of Basic Pay to the TSP, regardless of whether the service member contributes anything. If you contribute at least 5% of your own Basic Pay, the government matches up to 4% of that &mdash; meaning a total government contribution of 5%. This is free money that also reduces your taxable income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unique to the military: TSP contributions made <strong>from combat zone pay</strong> are excluded from federal income tax both going in (since the pay was already excluded) and coming out at retirement if placed in the Roth TSP. This makes Roth TSP contributions during deployment one of the most powerful retirement savings moves available to anyone in the US tax system.
      </p>

      {/* Section 8 - Other Benefits */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Other Notable Military Tax Benefits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Several additional tax provisions apply specifically to military members:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Extended filing deadlines:</strong> Service members deployed to a combat zone automatically receive at least 180 days after returning from the zone to file their federal tax return &mdash; with no late filing penalty.{' '}
          <a href="https://www.irs.gov/publications/p3" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS Publication 3)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Moving expense deduction:</strong> Unlike civilian workers (who lost the moving expense deduction under the TCJA), <strong>active-duty military members</strong> can still deduct qualified moving expenses when they receive orders requiring a permanent change of station (PCS).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Earned Income Tax Credit (EITC):</strong> Combat pay is non-taxable, but service members can choose to include it as earned income when calculating the EITC. This election can significantly increase the credit for lower-income service members.{' '}
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/military-and-clergy-rules-for-the-earned-income-tax-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (IRS &mdash; Military EITC Rules)
          </a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Free tax filing:</strong> All active-duty military members and their families qualify for free federal and state tax preparation through the IRS&rsquo;s MilTax program (via Military OneSource) and VITA (Volunteer Income Tax Assistance) sites located on military installations.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Death gratuity:</strong> The $100,000 death gratuity paid to the survivors of a service member who dies on active duty is entirely tax-free.
        </li>
      </ul>

      {/* Section 9 - Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Military compensation is structured to deliver far more purchasing power than a comparable gross salary figure suggests. Because <strong>BAH and BAS are completely non-taxable</strong>, a service member&rsquo;s effective federal tax rate on total compensation is often dramatically lower than what a civilian would pay on the same dollar amount.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Combat Zone Tax Exclusion</strong> adds another layer of benefit that can eliminate months of income tax entirely. Combined with TSP matching under the Blended Retirement System, free healthcare, housing, and education benefits, the tax advantages of military service represent a substantial hidden benefit that is easy to overlook when comparing pay with the civilian sector.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For personalized guidance, service members should take advantage of MilTax or on-post VITA services, which provide free expert tax preparation from professionals who specialize in military-specific rules.
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
          See Your Military Take-Home Pay Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your state and salary to see exactly how much goes to federal tax, FICA, and state tax &mdash; and what you actually bring home each paycheck.
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
          <a href="https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DFAS.mil &mdash; Military Pay Tables</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dfas.mil/militarymembers/payentitlements/bas.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DFAS.mil &mdash; Basic Allowance for Subsistence (BAS)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.defensetravel.dod.mil/site/bah.cfm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>DoD Defense Travel &mdash; BAH Rates and Calculator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p3" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 3: Armed Forces&rsquo; Tax Guide</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/military/combat-zone-related-exclusions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Combat Zone Tax Exclusions</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/military/filing-and-combat-zone-related-tax-provisions" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Filing and Combat Zone Related Tax Provisions</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/military-and-clergy-rules-for-the-earned-income-tax-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Military EITC Rules</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.tsp.gov/making-contributions/contribution-limits/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>TSP.gov &mdash; Contribution Limits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.militaryonesource.mil/financial-legal/personal-finance/taxes/tax-information-for-military-members/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>MilitaryOneSource &mdash; Tax Information for Military Members</a>
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
