import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unemployment Benefits and Taxes: What You Need to Know in 2026',
  description:
    'Unemployment benefits are fully taxable as federal income — but exempt from FICA. Learn how UI is taxed, how to use Form W-4V to withhold taxes, and how to read your 1099-G. Includes a full worked example.',
  alternates: { canonical: '/blog/unemployment-benefits-and-taxes' },
  keywords:
    'unemployment benefits taxable 2026, are unemployment benefits taxed, unemployment tax rate, 1099-G form, Form W-4V withholding, unemployment income tax, UI benefits federal tax',
  openGraph: {
    title: 'Unemployment Benefits and Taxes: What You Need to Know in 2026',
    description:
      'Unemployment benefits are taxable federal income — but exempt from FICA. Here is exactly how UI is taxed, how to avoid a surprise bill, and a full worked example.',
  },
}

export default function UnemploymentBenefitsAndTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Unemployment benefits tax illustration showing UI check flowing to IRS form"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Left: UI check document */}
          <rect x="45" y="45" width="130" height="110" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="110" y="72" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">UI BENEFIT</text>
          <text x="110" y="90" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">CHECK</text>
          <line x1="65" y1="108" x2="155" y2="108" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <line x1="65" y1="120" x2="145" y2="120" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <line x1="65" y1="132" x2="150" y2="132" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <text x="110" y="148" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="monospace">$</text>

          {/* Center arrow + TAXABLE label */}
          <line x1="190" y1="100" x2="270" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
          <polygon points="270,92 286,100 270,108" fill="rgba(255,255,255,0.55)" />
          <rect x="196" y="72" width="76" height="22" rx="4" fill="rgba(255,255,255,0.15)" />
          <text x="234" y="87" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">TAXABLE</text>
          <text x="234" y="128" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">No FICA</text>
          <text x="234" y="142" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">withheld</text>

          {/* Right: 1099-G form */}
          <rect x="300" y="45" width="130" height="110" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="365" y="70" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">1099-G</text>
          <text x="365" y="88" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Box 1: Benefits</text>
          <rect x="316" y="95" width="98" height="16" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="365" y="107" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="monospace">$11,700</text>
          <text x="365" y="127" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Box 4: Fed. Tax</text>
          <rect x="316" y="132" width="98" height="16" rx="3" fill="rgba(255,255,255,0.15)" />
          <text x="365" y="144" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="monospace">$1,170</text>

          {/* Right side summary */}
          <text x="490" y="78" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Report on</text>
          <text x="490" y="96" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Form 1040</text>
          <text x="490" y="124" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Schedule 1</text>
          <text x="490" y="140" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Line 7</text>
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
        Unemployment Benefits and Taxes: What You Need to Know in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 31, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Losing a job is stressful enough. The last thing you want is an unexpected tax bill when you file your return. Yet every year, thousands of people are caught off guard when they discover that <strong>unemployment insurance (UI) benefits are fully taxable income</strong> at the federal level — and in most states.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is genuinely good news here too: unemployment benefits are <strong>exempt from FICA taxes</strong> (Social Security and Medicare), which saves you 7.65% compared to earning the same amount as wages. But that FICA exemption doesn&rsquo;t mean UI is tax-free — it just means you owe income tax, not payroll tax. Here is everything you need to know.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Are Unemployment Benefits Taxable?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes. Under{' '}
        <a href="https://www.irs.gov/taxtopics/tc418" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Topic No. 418
        </a>
        , unemployment compensation — including regular state UI benefits, extended benefits, and federal pandemic-era programs — is treated as <strong>ordinary income</strong> for federal tax purposes. It has been taxable since the Tax Reform Act of 1986, and the rules are the same in 2026.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A common source of confusion: during 2020 and 2021, the American Rescue Plan Act (ARPA) temporarily excluded up to $10,200 in UI benefits from federal income tax for households under $150,000. That exclusion expired after 2021 and has not been renewed. In 2026, <strong>100% of your unemployment benefits are taxable</strong> — there is no exclusion.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is a quick summary of how UI benefits are treated:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Type</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Applies to UI Benefits?</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal Income Tax', 'Yes ✓', 'Taxed as ordinary income at your marginal rate'],
              ['Social Security (FICA)', 'No ✗', 'UI is exempt from the 6.2% SS tax'],
              ['Medicare (FICA)', 'No ✗', 'UI is exempt from the 1.45% Medicare tax'],
              ['State Income Tax', 'Usually', 'Depends on your state — see below'],
            ].map(([type, applies, notes], i) => (
              <tr key={type} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{type}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: applies.includes('Yes') ? '#dc2626' : applies.includes('No') ? '#059669' : '#d97706', fontWeight: 600 }}>{applies}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Federal Income Tax Works on UI Benefits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your unemployment benefits are added to all your other income for the year — wages, freelance income, investment income — and the combined total is what the IRS taxes. The 2026 federal tax brackets apply to your <strong>taxable income</strong>, which is your total income minus the standard deduction ($15,000 for single filers, $30,000 for married filing jointly in 2026).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you were unemployed for most of the year and UI was your primary income, your total income may be low enough that the standard deduction wipes out most or all of your taxable income. But if you had wages in the first half of the year before being laid off, the UI benefits layer on top of those wages and are taxed at whatever marginal rate you are already in.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 2026 federal income tax brackets for single filers start at 10% (on taxable income up to $11,925) and 12% (on income from $11,926 to $48,475). Most people collecting UI while also having earned some wages during the year will find their UI benefits taxed in the 12% bracket.{' '}
        <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — 2026 Inflation Adjustments)
        </a>
      </p>

      {/* Section 3: FICA exception */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The FICA Exemption: A Real Silver Lining
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One major advantage unemployment benefits have over wages: they are <strong>completely exempt from FICA taxes</strong>. Every dollar you earn as an employee is subject to 6.2% Social Security tax and 1.45% Medicare tax — a combined 7.65% off the top before income tax even applies. None of that applies to UI benefits.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This means a $1,000 UI benefit check saves you <strong>$76.50</strong> in FICA compared to a $1,000 paycheck from a job. If you receive $15,000 in unemployment benefits over the course of a year, the FICA exemption saves you $1,147.50 that you would otherwise owe on wages.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The trade-off: your employer would normally pay the other half of FICA (another 7.65%) on your wages. When you are on UI, the government replaces your paycheck without any employer FICA contribution — but since you aren&rsquo;t paying your half either, you still come out ahead on a take-home basis.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p525.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 525 — Taxable and Nontaxable Income)
        </a>
      </p>

      {/* Section 4: State taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Income Taxes on Unemployment Benefits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states that have an income tax also tax unemployment benefits as ordinary income. However, there are two groups of states where UI benefits escape state income tax entirely:
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Group 1 — No state income tax at all:</strong> Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Residents of these states never owe state income tax on anything — UI included.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Group 2 — State income tax exists but UI is exempt:</strong> Several states that do have income taxes specifically exclude unemployment benefits from state taxable income, including California, New Jersey, Pennsylvania, Virginia, Indiana, and Alabama. If you live in one of these states, you owe federal income tax on your UI but not state income tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State tax laws change frequently. Always check your state&rsquo;s Department of Revenue website to confirm whether UI benefits are taxable in your state for the current year.
      </p>

      {/* Section 5: Form W-4V */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Have Federal Taxes Withheld: Form W-4V
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike wages — where your employer withholds federal income tax automatically based on your W-4 — unemployment agencies do <strong>not</strong> withhold federal taxes by default. You have to actively request it. If you don&rsquo;t, every UI check arrives with zero federal tax withheld, and you could face a large bill at tax time (plus potential underpayment penalties).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The solution is{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4-v" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Form W-4V (Voluntary Withholding Request)
        </a>
        . You fill it out and submit it to your state unemployment agency (not the IRS). The form has one option: withhold <strong>10% of each benefit payment</strong> for federal income tax. There is no other percentage — it is 10% or nothing.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 10% flat rate works well for most people. At the 12% marginal rate (where most UI recipients land), withholding 10% gets you close to the right amount and avoids the worst of a surprise bill at filing time. Some people in the 22%+ bracket may want to supplement with quarterly estimated taxes (see below).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To stop withholding later, check the appropriate box on a new Form W-4V and submit it to your state agency.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some states also allow voluntary state income tax withholding from UI checks. Check with your state unemployment agency to see if this is an option where you live.
      </p>

      {/* Section 6: 1099-G */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Reading Your 1099-G Form
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        By January 31 following the year you collected UI, your state&rsquo;s unemployment agency must send you a{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1099-g" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1099-G (Certain Government Payments)
        </a>
        . This form reports the total amount of unemployment compensation you received and any federal or state income tax withheld. Here are the key boxes:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Box</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>What It Shows</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Where It Goes on Your Tax Return</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Box 1', 'Total unemployment compensation received', 'Form 1040, Schedule 1, Line 7'],
              ['Box 4', 'Federal income tax withheld (if you filed W-4V)', 'Form 1040, Line 25b (federal withholding)'],
              ['Box 11', 'State income tax withheld', 'Your state tax return'],
              ['Box 10a/10b', 'State name and ID number', 'State return only'],
            ].map(([box, what, where], i) => (
              <tr key={box} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 700, color: '#0891b2', fontFamily: "'JetBrains Mono', monospace' " }}>{box}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{what}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.875rem' }}>{where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your tax software (or tax preparer) will ask you to enter the numbers from your 1099-G. The Box 1 amount is added to your total income, and Box 4 is credited against your tax bill — just like withholding from a paycheck.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Important:</strong> If you received a 1099-G for benefits you did not actually receive — a sign of unemployment fraud in your name — do not simply ignore it. Report it to your state unemployment agency immediately and follow the IRS&rsquo;s guidance for correcting fraudulent 1099-G forms.{' '}
        <a href="https://www.irs.gov/newsroom/identity-theft-and-unemployment-benefits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Identity Theft and Unemployment Benefits)
        </a>
      </p>

      {/* Section 7: Worked example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Wages + Unemployment in the Same Year
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s look at a realistic scenario. Maria is a single filer in Texas (no state income tax). She worked from January through June 2026 and earned $35,000 in wages. She was laid off in July and collected $450/week in UI benefits for 26 weeks — a total of $11,700. By the end of the year, she had not found a new job.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 1: Total Income
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
            <tr style={{ background: '#f0f9ff' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Source</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>FICA?</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal Income Tax?</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Wages (Jan–Jun)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$35,000</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#dc2626', fontWeight: 600 }}>Yes</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#dc2626', fontWeight: 600 }}>Yes</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>UI Benefits (Jul–Dec, 26 wks &times; $450)</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$11,700</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#059669', fontWeight: 600 }}>No</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#dc2626', fontWeight: 600 }}>Yes</td>
            </tr>
            <tr style={{ background: '#ecf9ff' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$46,700</td>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0' }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 2: FICA on Wages Only
      </h3>

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
          lineHeight: 1.8,
        }}
      >
        Social Security: $35,000 &times; 6.2% = <strong>$2,170.00</strong><br />
        Medicare: $35,000 &times; 1.45% = <strong>$507.50</strong><br />
        FICA on UI benefits: <strong>$0.00</strong><br />
        <span style={{ borderTop: '1px solid #cbd5e1', display: 'block', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Total FICA: <strong>$2,677.50</strong>
        </span>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If Maria had earned all $46,700 as wages, she would have owed $3,572.55 in FICA. By receiving $11,700 of that as UI benefits, she saves <strong>$895.05</strong> in FICA taxes.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 3: Federal Income Tax Calculation
      </h3>

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
          lineHeight: 1.8,
        }}
      >
        Total income: $46,700<br />
        &minus; Standard deduction (single, 2026): $15,000<br />
        <span style={{ borderTop: '1px solid #cbd5e1', display: 'block', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Taxable income: <strong>$31,700</strong>
        </span>
        <br />
        10% &times; $11,925 = $1,192.50<br />
        12% &times; ($31,700 &minus; $11,925) = 12% &times; $19,775 = $2,373.00<br />
        <span style={{ borderTop: '1px solid #cbd5e1', display: 'block', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Federal income tax: <strong>$3,565.50</strong>
        </span>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Step 4: What the UI Benefits Actually Cost in Federal Tax
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If Maria had only earned $35,000 in wages (no UI), her federal income tax would be:
      </p>

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
          lineHeight: 1.8,
        }}
      >
        $35,000 &minus; $15,000 deduction = $20,000 taxable<br />
        10% &times; $11,925 = $1,192.50<br />
        12% &times; $8,075 = $969.00<br />
        Total without UI: <strong>$2,161.50</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Difference: $3,565.50 &minus; $2,161.50 = <strong>$1,404.00</strong> in additional federal income tax attributable to the $11,700 in UI benefits. That works out to an effective rate of exactly 12% on the UI benefits — her marginal rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If Maria had set up 10% withholding via Form W-4V, her state would have withheld $1,170 from her UI checks. At tax time, she would owe $1,404 &minus; $1,170 = <strong>$234</strong> more — a manageable amount rather than a $1,404 surprise. If she had no withholding from UI at all, she would owe the full $1,404 additional when she files.
      </p>

      {/* Section 8: What if no withholding */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What If You Did Not Withhold Any Taxes from UI?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you collected UI benefits without requesting withholding, you may owe a lump sum of federal income tax when you file — and possibly an <strong>underpayment penalty</strong> on top of it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS charges an underpayment penalty if you owe more than <strong>$1,000</strong> at the time of filing and did not pay at least 90% of your current-year tax liability (or 100% of last year&rsquo;s tax) through withholding or estimated payments.{' '}
        <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 306 — Penalty for Underpayment)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You have three main ways to avoid or reduce this problem:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>File Form W-4V immediately</strong> if you are still collecting UI. Starting withholding now reduces what you will owe at filing.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Pay quarterly estimated taxes</strong> using{' '}
          <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            Form 1040-ES
          </a>
          . Estimated taxes are due four times a year (April 15, June 16, September 15, and January 15). You can pay online through the IRS Direct Pay portal.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Save 12–15% of each UI check</strong> in a dedicated savings account and pay the full amount when you file. This works if you&rsquo;re disciplined, but watch the $1,000 threshold to avoid the underpayment penalty.
        </li>
      </ul>

      {/* Section 9: Tips to lower the bill */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Ways to Reduce Your Tax Bill on Unemployment Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        While you cannot avoid federal income tax on UI benefits the way you can reduce income tax with 401(k) contributions from a paycheck, there are still legitimate strategies to lower your overall tax bill during a period of unemployment:
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.5rem' }}>
        <strong>Traditional IRA contribution.</strong> If you had earned income earlier in the year (wages, freelance), you can contribute up to $7,000 (2026 limit, or $8,000 if you are 50 or older) to a traditional IRA. This contribution is potentially deductible, reducing your taxable income.{' '}
        <a href="https://www.irs.gov/retirement-plans/ira-deduction-limits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — IRA Deduction Limits)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.5rem' }}>
        <strong>HSA contributions.</strong> If you had a High Deductible Health Plan (HDHP) for any month during the year, you may be able to contribute to an HSA and deduct those contributions. The 2026 HSA contribution limit is $4,300 for individual coverage or $8,550 for family coverage.{' '}
        <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 969 — HSAs)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.5rem' }}>
        <strong>Job search deductions.</strong> While the Tax Cuts and Jobs Act eliminated the miscellaneous itemized deduction for job search expenses, some states still allow them. Check your state&rsquo;s rules.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Freelance income + deductions.</strong> If you do any freelance or gig work while unemployed, you can deduct legitimate business expenses (equipment, software, a portion of your home office) from that income, reducing your taxable income overall.
      </p>

      {/* Section 10: What counts as UI */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Types of Unemployment Benefits Are Taxable?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The taxability rules apply broadly to unemployment compensation, not just standard state UI benefits. According to IRS Publication 525, the following types of unemployment payments are all taxable:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Regular state unemployment insurance (UI) benefits</li>
        <li style={{ marginBottom: '0.5rem' }}>Extended benefits (EB) when regular benefits run out</li>
        <li style={{ marginBottom: '0.5rem' }}>Disaster Unemployment Assistance (DUA) paid for losses due to federally declared disasters</li>
        <li style={{ marginBottom: '0.5rem' }}>Trade Readjustment Allowances (TRA) for workers displaced by foreign trade</li>
        <li style={{ marginBottom: '0.5rem' }}>Payments from a state, union, or employer-funded supplemental unemployment plan</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Severance pay from a former employer is <strong>not</strong> unemployment insurance and is treated differently — it is subject to both federal income tax <em>and</em> FICA, just like regular wages. Workers&rsquo; compensation benefits, on the other hand, are generally <strong>not taxable</strong> at either the federal or state level.
      </p>

      {/* Section 11: Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unemployment benefits are taxable federal income in 2026. You pay federal income tax on every dollar you receive — at your marginal rate — but you do <em>not</em> owe FICA taxes, which saves you 7.65% compared to wages.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The single best action you can take when you start collecting UI is to file Form W-4V with your state unemployment agency to have 10% withheld for federal taxes. It won&rsquo;t cover every dollar you owe if you&rsquo;re in the 22% bracket, but it dramatically reduces the chance of a shock at filing time. Combine that with quarterly estimated taxes if needed, and you will stay on top of your tax obligation even during a difficult stretch of unemployment.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State tax treatment varies widely — verify with your state&rsquo;s Department of Revenue whether UI is taxable in your state. And watch your mailbox in late January for your 1099-G, which you will need when you file.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#ecfeff',
          border: '1px solid #a5f3fc',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Full Tax Picture After Returning to Work
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Once you land a new job, use the paycheck calculator to see exactly how much federal tax, state tax, and FICA will come out of your first check &mdash; and whether you need to update your W-4.
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
          <a href="https://www.irs.gov/taxtopics/tc418" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic No. 418: Unemployment Compensation</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p525.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 525 &mdash; Taxable and Nontaxable Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4-v" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form W-4V (Voluntary Withholding Request)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1099-g" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 1099-G (Certain Government Payments)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1040-es" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 1040-ES (Estimated Tax)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 306: Penalty for Underpayment of Estimated Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Year 2026 Inflation Adjustments</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/identity-theft-and-unemployment-benefits" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Identity Theft and Unemployment Benefits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 969 &mdash; Health Savings Accounts (HSAs)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/general/topic/unemployment-insurance" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor &mdash; Unemployment Insurance Overview</a>
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
