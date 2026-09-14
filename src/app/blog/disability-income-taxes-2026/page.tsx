import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Disability Income Is Taxed in 2026',
  description:
    'Short-term and long-term disability benefits may be fully taxable, partly taxable, or completely tax-free — it depends on who paid the premiums. Full guide with worked examples.',
  alternates: { canonical: '/blog/disability-income-taxes-2026' },
  keywords:
    'disability income taxes 2026, is short-term disability taxable, is long-term disability taxable, SSDI taxes, workers compensation taxable, disability insurance tax, STD LTD taxes',
  openGraph: {
    title: 'How Disability Income Is Taxed in 2026',
    description:
      'Short-term and long-term disability benefits may be fully taxable, partly taxable, or completely tax-free — it depends on who paid the premiums.',
  },
}

export default function DisabilityIncomeTaxes2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Disability income tax illustration showing a shield with a dollar sign and tax scales"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Shield icon */}
          <path
            d="M80 50 L110 60 L110 105 Q110 130 80 145 Q50 130 50 105 L50 60 Z"
            fill="rgba(255,255,255,0.25)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
          />
          <text x="80" y="108" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff" fontFamily="monospace">$</text>
          {/* Divider arrow */}
          <line x1="135" y1="100" x2="185" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="185,93 200,100 185,107" fill="rgba(255,255,255,0.5)" />
          {/* Three outcome boxes */}
          <rect x="210" y="42" width="130" height="36" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="275" y="58" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Employer-paid</text>
          <text x="275" y="71" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Fully Taxable</text>
          <rect x="210" y="88" width="130" height="36" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="275" y="104" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Employee-paid</text>
          <text x="275" y="117" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Tax-Free</text>
          <rect x="210" y="134" width="130" height="36" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="275" y="150" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Split Premium</text>
          <text x="275" y="163" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Partly Taxable</text>
          {/* Arrow right */}
          <line x1="355" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="400,93 415,100 400,107" fill="rgba(255,255,255,0.5)" />
          {/* Result */}
          <rect x="420" y="60" width="140" height="80" rx="8" fill="rgba(255,255,255,0.22)" />
          <text x="490" y="93" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Your Tax Bill</text>
          <text x="490" y="112" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Depends on</text>
          <text x="490" y="126" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">who paid</text>
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
        How Disability Income Is Taxed in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 14, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you become unable to work due to illness or injury, disability insurance is supposed to replace part of your lost income. But there is a catch: depending on how your coverage is set up, those disability benefits may be <strong>fully taxable</strong>, <strong>completely tax-free</strong>, or something in between.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most people do not know which situation applies to them until they are already on leave and a tax bill lands. This guide explains the rules clearly, with worked examples, so you know what to expect before it happens.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Two Types of Disability Coverage
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most employees who have disability coverage through work have access to two types:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Short-Term Disability (STD):</strong> Typically covers the first 3 to 6 months you cannot work. Benefits usually replace 60% to 70% of your weekly gross pay. Many employers provide STD coverage at no cost to you.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Long-Term Disability (LTD):</strong> Kicks in after STD ends and can last for years — sometimes until retirement age. Benefits typically replace 50% to 66% of your monthly gross income.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can also buy individual disability insurance policies on your own, separate from anything your employer offers. The tax treatment for those works differently, as we will cover below.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The One Rule That Determines Everything
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Whether your disability benefits are taxable comes down to a single question: <strong>who paid the premiums?</strong>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS has a straightforward rule:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Who Paid the Premium?</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Are Benefits Taxable?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Employer paid 100%', 'Yes — fully taxable as ordinary income'],
              ['Employee paid 100% (with after-tax dollars)', 'No — completely tax-free'],
              ['Employee paid 100% (with pre-tax dollars via Section 125)', 'Yes — fully taxable'],
              ['Employer and employee split the cost', 'Partly taxable — proportional to employer\'s share'],
              ['You bought an individual policy yourself (after-tax)', 'No — completely tax-free'],
            ].map(([who, tax], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{who}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{tax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The logic behind this rule: if you paid premiums with after-tax dollars, you already paid taxes on that money. The IRS does not tax the same dollar twice. But if your employer paid the premiums (or you paid with pre-tax dollars), the coverage was essentially a tax-free benefit — so when you collect on it, you owe taxes then.{' '}
        <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 525 — Taxable and Nontaxable Income)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Short-Term Disability (STD) and Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Short-term disability is commonly provided by employers at no cost to employees. Because the employer pays the premiums, the benefits are <strong>fully taxable</strong> as ordinary income — subject to federal income tax, state income tax, and in some cases Social Security and Medicare taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your company&rsquo;s STD plan replaces 60% of your pay and you earn $5,000 per month, your STD benefit would be $3,000 per month. If the employer paid the premiums, all $3,000 is taxable income. You will get a W-2 at year-end with those benefits included in Box 1.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some employers give employees the option to pay STD premiums themselves. If your company offers this and you pay with <strong>after-tax dollars</strong> (not through a pre-tax cafeteria plan), your STD benefits become tax-free. This is sometimes called &ldquo;gross-up&rdquo; or &ldquo;employee-pay-all&rdquo; coverage, and many workers do not realize they have this option or what it means.
      </p>

      <div
        style={{
          padding: '1rem 1.25rem',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', margin: 0, lineHeight: 1.65 }}>
          <strong>Pro tip:</strong> If your employer lets you choose whether to pay your STD premium pre-tax or post-tax, choosing <strong>post-tax</strong> means your benefits will be tax-free if you ever need to use them. For most workers, this is the better deal — especially for a short-term benefit that typically lasts only a few months.
        </p>
      </div>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Long-Term Disability (LTD) and Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        LTD follows the exact same rules as STD, but the stakes are higher. A long-term disability can last for years or even decades. If those benefits are fully taxable, it can meaningfully reduce your effective replacement income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many employers pay the full LTD premium as a benefit. In that case, <strong>every dollar of LTD you receive is taxable</strong>. If your LTD policy pays $4,000 per month and you are in the 22% federal bracket with a 5% state income tax rate, your effective monthly take-home from that benefit would be closer to <strong>$2,920</strong> after taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some employers offer a hybrid arrangement where they gross up the employee&rsquo;s wages to cover the LTD premium, effectively having the employee pay it with after-tax dollars. This makes future LTD benefits tax-free. Ask your HR department which structure your plan uses &mdash; it matters enormously if you ever need to file a disability claim.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Social Security Disability Insurance (SSDI)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        SSDI is a federal program that pays monthly benefits to people who have worked and paid into Social Security but can no longer work due to a severe disability. In 2026, the average SSDI benefit is around <strong>$1,580 per month</strong>.{' '}
        <a href="https://www.ssa.gov/benefits/disability/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov — Social Security Disability Benefits)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        SSDI benefits are taxed the same way that regular Social Security retirement benefits are taxed. Whether you owe taxes depends on your <strong>combined income</strong> (also called provisional income), which is:
      </p>

      <div
        style={{
          padding: '1rem 1.25rem',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        Combined Income = AGI + Non-taxable Interest + 50% of SSDI benefits
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Combined Income (Single Filer)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>% of SSDI That Is Taxable</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Below $25,000', '0% — SSDI is completely tax-free'],
              ['$25,001 – $34,000', 'Up to 50% of SSDI is taxable'],
              ['Above $34,000', 'Up to 85% of SSDI is taxable'],
            ].map(([income, tax], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{income}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{tax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Many SSDI recipients with no other income owe little or no federal tax. But if you also receive LTD benefits or have other income while on SSDI, you may find yourself in the 50% or 85% taxable zone.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can have federal taxes withheld from your SSDI benefit payments by completing{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4v" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form W-4V (Voluntary Withholding Request)
        </a>. The withholding options are 7%, 10%, 12%, or 22%.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Workers&rsquo; Compensation — Not Taxable
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Workers&rsquo; compensation is separate from disability insurance. It covers injuries and illnesses that happen on the job or because of your job. Unlike STD and LTD benefits, workers&rsquo; compensation payments are <strong>completely tax-free</strong> under federal law.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This holds true regardless of who paid the premiums. Workers&rsquo; comp payments are excluded from gross income under{' '}
        <a href="https://www.irs.gov/taxtopics/tc152" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRC Section 104
        </a>
        , and you will not receive a W-2 or 1099 for them. State tax treatment generally mirrors federal law, though you should verify your specific state&rsquo;s rules.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One important note: if you return to work on light duty while still receiving partial workers&rsquo; comp, the wages you earn from working are taxable. Only the workers&rsquo; comp portion stays tax-free.
      </p>

      {/* Section 7 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Same Disability, Two Different Tax Bills
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s look at two workers who earn the same salary, have the same LTD benefit, but end up with very different tax bills because of how their premiums were paid.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Setup:</strong> Both Sarah and James earn $72,000 per year. Their employer&rsquo;s LTD plan pays 60% of monthly salary, so their benefit is $3,600/month. Both are single filers in a state with a 5% income tax rate.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Sarah (employer-paid)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>James (employee-paid, after-tax)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Monthly LTD benefit', '$3,600', '$3,600'],
              ['Taxable amount', '$3,600 (100%)', '$0 (0%)'],
              ['Federal income tax (22% bracket)', '−$792', '$0'],
              ['State income tax (5%)', '−$180', '$0'],
              ['Monthly take-home from LTD', '$2,628', '$3,600'],
            ].map(([label, sarah, james], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label.includes('take-home') ? '#059669' : (sarah.startsWith('−') ? '#dc2626' : '#1e293b'), fontWeight: label.includes('take-home') ? 700 : 400 }}>{sarah}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: label.includes('take-home') ? '#059669' : (james.startsWith('−') ? '#dc2626' : '#1e293b'), fontWeight: label.includes('take-home') ? 700 : 400 }}>{james}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Sarah takes home <strong>$972 less per month</strong> than James — just because her employer paid the premiums. Over a one-year disability leave, that is a difference of more than <strong>$11,664</strong> in after-tax income, from the exact same LTD policy.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is why financial advisors often recommend choosing after-tax premium payment when given the option, especially for long-term disability policies.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Individual Disability Insurance Policies
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you purchase a disability insurance policy on your own — not through your employer — and pay the premiums with personal after-tax dollars, the benefits you receive are <strong>completely tax-free</strong>. This applies to both short-term and long-term individual policies.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed workers often buy individual DI policies since they have no employer group plan. Because self-employed individuals pay for everything out of pocket with after-tax money, their disability benefits are typically tax-free when they need them.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Business owners sometimes purchase &ldquo;business overhead expense&rdquo; (BOE) disability insurance to cover their business costs if they become disabled. These policies are different: the premiums may be deductible as a business expense, but then the benefits are taxable when received.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Income Tax on Disability Benefits
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        State tax rules generally follow federal rules: if your disability benefits are taxable at the federal level, most states tax them too. If they are federal-tax-free, most states also exempt them.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A few specific situations worth noting:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State disability programs:</strong> California, New Jersey, New York, Rhode Island, Hawaii, and Washington have mandatory state-run disability programs that deduct from your paycheck. The benefits from these programs follow similar pre-tax/post-tax rules and are typically taxable at the federal level (since the employee paid pre-tax or employer-paid), though California&rsquo;s SDI benefits are taxable federally but exempt from California state income tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No-income-tax states:</strong> If you live in{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
          <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a>, or the other seven states with no state income tax, you will not owe state tax on disability benefits regardless of how your premiums were paid.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>SSDI:</strong> Some states specifically exempt SSDI benefits from state income tax. Check your state&rsquo;s department of revenue for current rules.{' '}
          <a href="https://taxfoundation.org/data/all/state/state-social-security-income-taxes/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            (Tax Foundation — State Taxation of Social Security Income)
          </a>
        </li>
      </ul>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What About Social Security and Medicare Taxes (FICA)?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA taxes (Social Security at 6.2% and Medicare at 1.45%) are generally <strong>not owed on LTD or STD benefits</strong> that are paid directly to you by an insurance carrier — even if those benefits are subject to income tax. Once disability benefits begin, they are not considered &ldquo;wages,&rdquo; so FICA does not apply.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, there is a special rule for the first six months of STD: if your employer continues your regular salary during a sick leave period (rather than routing payments through an insurance carrier), those continuation payments <em>are</em> treated as wages and subject to FICA.{' '}
        <a href="https://www.irs.gov/taxtopics/tc554" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 554 — Self-Employment Tax)
        </a>
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Steps to Take Now (Before You Ever Need Disability Benefits)
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check your benefits portal or HR documentation</strong> to find out who pays the STD and LTD premiums at your company. Look for &ldquo;employer-paid,&rdquo; &ldquo;employee-paid,&rdquo; or &ldquo;contributory&rdquo; (split).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>If you pay your own LTD premium</strong>, verify whether it comes out pre-tax (through a Section 125 cafeteria plan) or post-tax. Pre-tax saves you a little money now but makes your future benefits taxable. Post-tax keeps your future benefits tax-free.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>If benefits would be taxable</strong>, calculate your real replacement income after tax so you know whether you need supplemental savings to cover a gap.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>SSDI claimants:</strong> File Form W-4V to set up voluntary withholding if you expect your combined income to exceed $25,000.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Workers&rsquo; comp recipients:</strong> You owe no tax — no action needed, but do not include these payments when filing.
        </li>
      </ul>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Disability income taxation is not one-size-fits-all. The single biggest factor is whether you or your employer paid the premiums — and whether you paid them with pre-tax or after-tax dollars. Employer-paid plans create fully taxable benefits. Employee-paid after-tax plans create tax-free benefits. Split arrangements land somewhere in between.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Understanding how your specific plan is structured now, before you ever file a disability claim, lets you plan your finances accurately and avoid a tax surprise at the worst possible time.
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
          See Your Full Take-Home Pay Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use our free paycheck calculator to see exactly what comes out of your paycheck each pay period, including federal tax, state tax, FICA, and benefit deductions.
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
          <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 525 — Taxable and Nontaxable Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/benefits/disability/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov — Social Security Disability Benefits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4v" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS — Form W-4V, Voluntary Withholding Request</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc152" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 152 — Disability Pay</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-social-security-income-taxes/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation — State Taxation of Social Security Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/ebsa" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor — Employee Benefits Security Administration</a>
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
