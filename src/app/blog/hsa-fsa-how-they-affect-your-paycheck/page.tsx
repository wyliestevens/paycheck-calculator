import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HSA and FSA: How They Affect Your Paycheck (2026 Guide)',
  description:
    'HSAs and FSAs let you pay for medical expenses with pre-tax dollars — cutting your tax bill by $500 to $1,500 or more each year. Here\'s exactly how they work, with 2026 limits and a worked dollar example.',
  alternates: { canonical: '/blog/hsa-fsa-how-they-affect-your-paycheck' },
  keywords:
    'HSA paycheck 2026, FSA paycheck 2026, health savings account contribution limit 2026, flexible spending account 2026, HSA vs FSA, pre-tax health benefits, HDHP HSA',
  openGraph: {
    title: 'HSA and FSA: How They Affect Your Paycheck (2026 Guide)',
    description:
      'HSAs and FSAs let you pay for medical expenses with pre-tax dollars — cutting your tax bill by $500 to $1,500 or more each year.',
  },
}

export default function HsaFsaPaycheck() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="HSA and FSA health savings accounts illustration showing pre-tax contributions"
        >
          <rect width="600" height="200" rx="12" fill="#be185d" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* HSA card */}
          <rect x="40" y="45" width="155" height="110" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="118" y="76" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">HSA</text>
          <text x="118" y="95" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Health Savings Account</text>
          <line x1="55" y1="106" x2="180" y2="106" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <text x="118" y="125" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="monospace">$4,400</text>
          <text x="118" y="143" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">2026 individual limit</text>

          {/* Center area */}
          <rect x="215" y="72" width="170" height="56" rx="6" fill="rgba(255,255,255,0.12)" />
          {/* Medical cross */}
          <rect x="286" y="79" width="28" height="10" rx="3" fill="rgba(255,255,255,0.55)" />
          <rect x="295" y="70" width="10" height="28" rx="3" fill="rgba(255,255,255,0.55)" />
          <text x="300" y="118" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">Pre-Tax Savings</text>

          {/* FSA card */}
          <rect x="405" y="45" width="155" height="110" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="483" y="76" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">FSA</text>
          <text x="483" y="95" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Flexible Spending Account</text>
          <line x1="420" y1="106" x2="545" y2="106" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <text x="483" y="125" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="monospace">$3,350</text>
          <text x="483" y="143" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">2026 limit</text>

          {/* Bottom tagline */}
          <text x="300" y="178" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Both reduce taxable income — saving you hundreds in taxes every year</text>
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
        HSA and FSA: How They Affect Your Paycheck (2026 Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 16, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Two of the most underused benefits on any benefits enrollment form are the <strong>HSA</strong> (Health Savings Account) and the <strong>FSA</strong> (Flexible Spending Account). Both let you pay for medical expenses with pre-tax dollars — meaning the government effectively subsidizes your healthcare spending. For a worker in the 22% federal tax bracket, that can translate to <strong>$500 to $1,500 in annual tax savings</strong> or more.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is exactly how each account works, what the 2026 limits are, and the real dollar math showing what they do to your take-home pay.
      </p>

      {/* Section 1: What Is an HSA? */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is an HSA?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>Health Savings Account (HSA)</strong> is a special savings account available to workers enrolled in a <strong>High-Deductible Health Plan (HDHP)</strong>. It is often described as having a &ldquo;triple tax advantage&rdquo; — a feature no other savings account can match:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.625rem' }}><strong>Contributions are pre-tax</strong> — they reduce your taxable income in the year you contribute.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Earnings grow tax-free</strong> — you can invest your HSA balance and never pay capital gains taxes on the growth.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Withdrawals for qualified medical expenses are tax-free</strong> — no tax at all when you spend the money on eligible healthcare costs.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS defines qualified medical expenses broadly to include doctor visits, prescription drugs, dental care, vision care, mental health services, lab work, medical equipment, and hundreds of other costs. For the complete list, see{' '}
        <a href="https://www.irs.gov/publications/p502" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 502
        </a>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One of the best features of an HSA: <strong>unused funds roll over year after year with no limit</strong>. You never forfeit money you don&rsquo;t spend. Over a career, an HSA can accumulate a substantial balance — and after age 65, you can withdraw funds for any purpose and just pay ordinary income tax (no penalty), making it function similarly to a traditional IRA.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 969 &mdash; HSAs and Other Tax-Favored Health Plans)
        </a>
      </p>

      {/* Section 2: What Is an FSA? */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is an FSA?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>Flexible Spending Account (FSA)</strong> is an employer-sponsored benefit that also lets you set aside pre-tax dollars for medical expenses. The key difference from an HSA: <strong>you do not need to be enrolled in an HDHP</strong> to open one. Any employee offered health benefits through their employer can typically participate in an FSA.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FSAs have several distinct features that set them apart:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Funds are front-loaded:</strong> Your entire annual election is available on January 1 — even if you have not contributed that much yet through payroll deductions. This means you can have a $3,000 procedure in January and be reimbursed in full, even though your paycheck contributions only started.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>&ldquo;Use it or lose it&rdquo; rule:</strong> Unused FSA funds generally expire at the end of the plan year. Employers may offer a grace period of up to 2.5 months into the new year, or allow a limited rollover. In 2026, the IRS rollover limit is <strong>$660</strong> — any balance above that is forfeited.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Employer-only:</strong> You can only open an FSA through your employer&rsquo;s benefits plan. Self-employed workers cannot use healthcare FSAs.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also a separate <strong>Dependent Care FSA</strong> (DCFSA) for childcare and elder care expenses, which we cover briefly at the end of this guide.{' '}
        <a href="https://www.irs.gov/taxtopics/tc602" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 602: Child and Dependent Care Credit)
        </a>
      </p>

      {/* Section 3: 2026 Contribution Limits */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        2026 Contribution Limits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS adjusts HSA and FSA limits annually for inflation. Here are the official 2026 limits:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Account</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2026 Limit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['HSA — Self-Only Coverage', '$4,400', 'Must be enrolled in HDHP'],
              ['HSA — Family Coverage', '$8,750', 'Must be enrolled in HDHP'],
              ['HSA Catch-Up (age 55+)', '+$1,000', 'Additional per eligible individual'],
              ['Healthcare FSA', '$3,350', 'Per employee; no HDHP required'],
              ['FSA Rollover Maximum', '$660', 'Maximum unused funds that carry over'],
              ['Dependent Care FSA', '$5,000', '$2,500 if married filing separately'],
            ].map(([account, limit, notes], i) => (
              <tr key={account} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: i < 3 ? 500 : 400 }}>{account}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{limit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Sources:{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-19.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          IRS Rev. Proc. 2025-19
        </a>{' '}
        (HSA limits) and{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          IRS Rev. Proc. 2025-40
        </a>{' '}
        (FSA limits).
      </p>

      {/* Section 4: HDHP Requirement for HSAs */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The HDHP Requirement for HSAs
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To contribute to an HSA, you must be enrolled in a <strong>High-Deductible Health Plan (HDHP)</strong>. The IRS sets specific thresholds that a health plan must meet to qualify. For 2026:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>HDHP Threshold</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Self-Only</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Family</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>Minimum annual deductible</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$1,650</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$3,300</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>Maximum out-of-pocket limit</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$8,300</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$16,600</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer&rsquo;s health plan meets these minimums, it likely qualifies. Check your Summary of Benefits and Coverage (SBC) or ask your HR department. Your employer will also indicate whether the plan is &ldquo;HSA-eligible&rdquo; during open enrollment.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 969)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The trade-off with an HDHP is that you pay more out-of-pocket before your insurance kicks in. The HSA is designed to offset that — you save pre-tax dollars specifically to cover that deductible. For healthy workers who rarely need medical care, an HDHP + HSA combination often results in lower overall costs than a traditional low-deductible plan with higher premiums.
      </p>

      {/* Section 5: How They Appear on Your Paycheck */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How HSA and FSA Contributions Appear on Your Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you contribute to an HSA or healthcare FSA through your employer&rsquo;s payroll system, the money is deducted <strong>before taxes are calculated</strong>. This works under{' '}
        <a href="https://www.irs.gov/taxtopics/tc185" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Section 125 of the IRS tax code
        </a>
        , often called a &ldquo;cafeteria plan.&rdquo; Your pay stub will show the HSA or FSA contribution as a pre-tax deduction — reducing your taxable wages before federal income tax, state income tax, and FICA taxes are all calculated.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That last part is significant. Because the contribution is made before FICA taxes are calculated, you also avoid the <strong>7.65% Social Security and Medicare tax</strong> on those dollars (when contributing through payroll). This is an additional benefit over making HSA contributions directly to your bank account outside of payroll — direct contributions save federal and state income tax, but not FICA.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On your W-2 at year-end, payroll HSA contributions are reported in <strong>Box 12 with code W</strong> and are excluded from Box 1 (federal wages). Your taxable wages will be lower than your total gross pay by the amount of your HSA or FSA contribution.
      </p>

      {/* Section 6: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: The Real Cost of HSA Contributions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s put real numbers on it. Say <strong>Maria earns $72,000 per year</strong> and is single. She is enrolled in her employer&rsquo;s HDHP and plans to contribute <strong>$4,000 to her HSA</strong> for the year through payroll deductions (about $167 per biweekly paycheck).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is what that $4,000 contribution actually saves her — and what it costs her in take-home pay:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate Applied</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Federal income tax</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>22%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$880.00</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>FICA (Social Security + Medicare)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>7.65%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$306.00</td>
            </tr>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>State income tax (example: 5%)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>5%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$200.00</td>
            </tr>
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total tax savings on $4,000 HSA contribution</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$1,386.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        <div style={{ marginBottom: '0.375rem' }}>HSA contribution: <strong>$4,000.00</strong></div>
        <div style={{ marginBottom: '0.375rem' }}>Less total tax savings: <strong style={{ color: '#059669' }}>− $1,386.00</strong></div>
        <div style={{ paddingTop: '0.375rem', borderTop: '1px solid #e2e8f0' }}>
          Net cost in take-home pay: <strong style={{ color: '#dc2626' }}>$2,614.00</strong>
        </div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Maria puts <strong>$4,000 into her HSA</strong> — but her take-home pay only drops by <strong>$2,614</strong>. The remaining $1,386 was money she would have paid in taxes anyway. Effectively, she is getting $4,000 of healthcare purchasing power for $2,614 — a 34.6% discount from the government.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Per biweekly paycheck, her $167 HSA deduction only reduces take-home pay by about <strong>$109</strong>. The other $58 per paycheck comes from the taxes she is no longer paying.
      </p>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        <em>Note: The state tax rate will vary. Workers in states with no income tax (like Texas or Florida) would save $1,186 instead of $1,386. Workers in high-tax states like California save even more.</em>
      </p>

      {/* Section 7: HSA vs FSA Comparison */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        HSA vs. FSA: Side-by-Side Comparison
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Both accounts reduce your taxes, but they work very differently. Here is how they stack up:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Feature</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>HSA</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Healthcare FSA</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['HDHP required?', 'Yes', 'No'],
              ['2026 individual limit', '$4,400', '$3,350'],
              ['Unused funds roll over?', 'Yes — unlimited', 'Limited ($660 max)'],
              ['Funds available January 1?', 'Only what you\'ve contributed', 'Full annual election'],
              ['Can you invest the balance?', 'Yes', 'No'],
              ['Who can contribute?', 'You + employer + anyone', 'You only (via payroll)'],
              ['Tax benefit', 'Triple tax advantage', 'Pre-tax only'],
              ['Best for', 'Long-term health savings / investing', 'Predictable annual expenses'],
              ['Works if you change jobs?', 'Yes — HSA is yours forever', 'FSA typically ends with employment'],
            ].map(([feature, hsa, fsa], i) => (
              <tr key={feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', fontSize: '0.875rem' }}>{feature}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{hsa}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{fsa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The bottom line: if you qualify for an HSA (i.e., you are enrolled in an HDHP), it is almost always the better choice — the unlimited rollover and investment potential make it a long-term wealth-building tool, not just a spending account. If you are on a traditional PPO or HMO plan, the FSA is your only pre-tax option for healthcare costs.
      </p>

      {/* Section 8: Can You Have Both? */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Can You Have Both an HSA and an FSA?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Generally, no — you cannot contribute to both a general-purpose healthcare FSA and an HSA in the same year. The IRS does not allow it because both cover the same pool of expenses.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, there is an exception: a <strong>Limited-Purpose FSA (LPFSA)</strong>. This is a special type of FSA restricted to dental and vision expenses only — it does not cover general medical costs. Because it covers a different category of expenses, it <em>can</em> be paired with an HSA. Many HDHP enrollees use an LPFSA alongside their HSA specifically to cover predictable dental and vision costs (cleanings, glasses, contacts) while preserving their HSA for larger medical expenses.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 969)
        </a>
      </p>

      {/* Section 9: Dependent Care FSA */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Dependent Care FSA: Pre-Tax Childcare Dollars
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A Dependent Care FSA (DCFSA) is a separate account from the healthcare FSA. It lets you set aside up to <strong>$5,000 per year</strong> ($2,500 if married filing separately) in pre-tax dollars for dependent care expenses — primarily daycare, preschool, before/after-school care, and summer day camps for children under age 13.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a worker in the 22% bracket paying 7.65% FICA and 5% state tax, a $5,000 DCFSA contribution saves approximately <strong>$1,733 in taxes</strong> — making it one of the most valuable employer benefits for parents with young children.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note: The DCFSA is compatible with HSAs — there is no conflict since they cover completely different expense categories.{' '}
        <a href="https://www.irs.gov/taxtopics/tc602" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 602)
        </a>
      </p>

      {/* Section 10: Investing Your HSA */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Investing Your HSA: The Long-Term Play
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most HSA providers allow you to invest your balance in mutual funds or ETFs once your account exceeds a minimum threshold (commonly $1,000 to $2,000, depending on the provider). When you invest HSA funds, any growth — dividends, capital gains — is <strong>completely tax-free</strong> as long as withdrawals are used for qualified medical expenses.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This creates a powerful long-term strategy: contribute the maximum each year, pay current medical expenses out-of-pocket (using non-HSA funds when possible), and let the HSA balance grow invested for decades. In retirement, when healthcare costs typically rise significantly, you will have a dedicated tax-free source of funds to cover them.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Financial planners often describe a maxed-out HSA as &ldquo;better than a Roth IRA for healthcare costs&rdquo; — because while a Roth gives you tax-free withdrawals for any purpose, an HSA gives you that same benefit plus the upfront tax deduction and FICA exemption.
      </p>

      {/* Section 11: Common Mistakes to Avoid */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common Mistakes to Avoid
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Leaving FSA money on the table.</strong> The use-it-or-lose-it rule is real. If you elected $2,500 for your FSA in January, make sure you spend it all by year-end (or use your employer&rsquo;s grace period or rollover). Eligible expenses include prescription sunglasses, contact lenses, dental work, and even some over-the-counter medications.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Not keeping receipts for HSA withdrawals.</strong> The IRS can audit HSA withdrawals and require you to show that funds were spent on qualified expenses. Keep receipts and explanation-of-benefits (EOB) documents for every HSA transaction.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Withdrawing HSA funds for non-medical expenses before age 65.</strong> If you withdraw HSA money for a non-qualified expense before age 65, you pay ordinary income tax on it <em>plus</em> a 20% penalty. After 65, the penalty disappears — you just pay income tax, like a traditional IRA.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Forgetting that insurance premiums generally do not qualify.</strong> Most health insurance premiums cannot be paid from an HSA tax-free. Exceptions include COBRA premiums, long-term care insurance premiums, and Medicare premiums (after age 65).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Not contributing enough to your FSA.</strong> Many workers elect the minimum or nothing at all. Even a modest FSA contribution of $1,000 saves roughly $250–$350 in taxes on expenses you would have paid anyway.
        </li>
      </ul>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        HSAs and FSAs are among the most effective ways to reduce your tax bill without changing your income. They work because every dollar you contribute is a dollar the IRS does not tax — at federal, state, and FICA rates simultaneously when contributions go through payroll.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In 2026, an HSA-eligible worker who maxes out their individual HSA at $4,400 can save over <strong>$1,500 in taxes</strong> (in a 22% federal bracket with state taxes). A family that maxes the family HSA at $8,750 can save <strong>$3,000 or more</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are enrolled in an HDHP, maximize your HSA first. If you are on a traditional plan, use an FSA to cover predictable medical costs. Either way, every dollar you leave uncontributed is a tax saving you are leaving on the table.
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
          See How an HSA or FSA Changes Your Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see your full paycheck breakdown — federal tax, state tax, FICA, and what you actually take home.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#be185d',
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
          <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 969 &mdash; Health Savings Accounts and Other Tax-Favored Health Plans</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p502" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 502 &mdash; Medical and Dental Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-19.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Revenue Procedure 2025-19 &mdash; 2026 HSA Contribution Limits and HDHP Thresholds</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; 2026 FSA Limits and Inflation Adjustments</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc602" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 602: Child and Dependent Care Credit and Dependent Care FSA</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc185" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 185: Cafeteria Plans (Section 125)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.healthcare.gov/glossary/health-savings-account-hsa/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>HealthCare.gov &mdash; Health Savings Account (HSA)</a>
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
