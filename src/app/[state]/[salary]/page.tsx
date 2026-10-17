import { states, getStateBySlug, federalStandardDeduction, socialSecurityWageCap, usd } from '@/data/states'
import { calculateTakeHome, salaryAmounts, formatSalary, parseSalarySlug, salaryToSlug } from '@/lib/tax-calculator'
import { breadcrumbSchema, canonicalUrl } from '@/lib/seo'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const params: { state: string; salary: string }[] = []
  for (const state of states) {
    for (const amount of salaryAmounts) {
      params.push({ state: state.slug, salary: salaryToSlug(amount) })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; salary: string }> }): Promise<Metadata> {
  const { state: stateSlug, salary: salarySlug } = await params
  const state = getStateBySlug(stateSlug)
  const amount = parseSalarySlug(salarySlug)
  if (!state || !amount) return {}

  const result = calculateTakeHome(amount, state)
  const formatted = formatSalary(amount)
  const takeHome = formatSalary(Math.round(result.takeHomePay))

  return {
    title: `${formatted} Salary in ${state.name} After Taxes (2026)`,
    description: `See how much of a ${formatted} salary you take home in ${state.name}. After federal, state, Social Security, and Medicare taxes, your estimated take-home pay is ${takeHome} per year.`,
    keywords: `${formatted} salary ${state.name}, ${formatted} after taxes ${state.abbreviation}, take home pay ${formatted} ${state.name}, ${state.name} salary calculator 2026`,
    alternates: { canonical: `/${state.slug}/${salaryToSlug(amount)}` },
    openGraph: {
      title: `${formatted} Salary After Taxes in ${state.name} (2026)`,
      description: `${formatted} salary in ${state.name} = ${takeHome} take-home pay after all taxes. See the full breakdown.`,
      url: `/${state.slug}/${salaryToSlug(amount)}`,
    },
  }
}

function fmt(n: number): string {
  return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function fmt0(n: number): string {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 })
}

function fmtPct(n: number): string {
  return (n * 100).toFixed(1) + '%'
}

export default async function SalaryPage({ params }: { params: Promise<{ state: string; salary: string }> }) {
  const { state: stateSlug, salary: salarySlug } = await params
  const state = getStateBySlug(stateSlug)
  const amount = parseSalarySlug(salarySlug)

  if (!state || !amount) {
    notFound()
  }

  const result = calculateTakeHome(amount, state)
  const formatted = formatSalary(amount)

  const periods = [
    { label: 'Annual', divisor: 1 },
    { label: 'Monthly', divisor: 12 },
    { label: 'Bi-weekly', divisor: 26 },
    { label: 'Weekly', divisor: 52 },
  ]

  const share = (n: number) => (result.grossSalary > 0 ? (n / result.grossSalary) * 100 : 0)
  const takeHomePct = share(result.takeHomePay)
  const federalPct = share(result.federalTax)
  const statePct = share(result.stateTax)
  const ssPct = share(result.socialSecurity)
  const medicarePct = share(result.medicare)

  // Nearby salary links for this state (4 below, 4 above where possible)
  const currentIndex = salaryAmounts.indexOf(amount)
  const otherSalaries = salaryAmounts.filter((_, i) => i !== currentIndex)
  const belowSalaries = otherSalaries.filter((s) => s < amount).slice(-4)
  const aboveSalaries = otherSalaries.filter((s) => s > amount).slice(0, 4)
  const nearbySalaries = [...belowSalaries, ...aboveSalaries]

  // Same salary in other states
  const noTaxStates = states.filter((s) => !s.hasStateTax && s.slug !== state.slug).slice(0, 3)
  const taxStates = states.filter((s) => s.hasStateTax && s.slug !== state.slug)
  const otherStates = [...noTaxStates, ...taxStates.slice(0, 5)]

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: canonicalUrl() },
    { name: `${state.name} Paycheck Calculator`, url: canonicalUrl(`/${state.slug}`) },
    { name: `${formatted} Salary`, url: canonicalUrl(`/${state.slug}/${salaryToSlug(amount)}`) },
  ])

  const taxDescription = state.taxType === 'none'
    ? `${state.name} does not levy a state income tax, so the only deductions from a ${formatted} salary are federal income tax, Social Security, and Medicare. This makes ${state.name} one of the most tax-friendly states for wage earners.`
    : state.taxType === 'flat'
    ? `${state.name} applies a flat ${(state.flatRate! * 100).toFixed(2)}% state income tax rate${state.standardDeduction > 0 ? ` after a $${state.standardDeduction.toLocaleString()} standard deduction` : ''}. On a ${formatted} salary, this results in $${fmt(result.stateTax)} in state taxes, bringing your combined effective tax rate to ${fmtPct(result.effectiveRate)}.`
    : `${state.name} uses a progressive income tax system${state.standardDeduction > 0 ? ` with a $${state.standardDeduction.toLocaleString()} standard deduction` : ''}. On a ${formatted} salary, state taxes come to $${fmt(result.stateTax)}, which combined with federal taxes and FICA gives you an effective tax rate of ${fmtPct(result.effectiveRate)}.`

  return (
    <div className="container page stack-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div>
        <div className="ad-slot ad-slot-horizontal" style={{ margin: '0 auto 1.5rem' }}>Advertisement</div>

        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="sep">/</span>
          <a href={`/${state.slug}`}>{state.name}</a>
          <span className="sep">/</span>
          <span className="here">{formatted} salary</span>
        </nav>

        <div className="page-head">
          <span className="badge badge-ink">{state.abbreviation} &middot; 2026 rates</span>
          <h1>
            {formatted} salary after taxes in {state.name}
          </h1>
          <p className="lede">
            On a {formatted} salary in {state.name} ({state.abbreviation}), you can expect to take home{' '}
            <strong style={{ color: 'var(--money-deep)' }}>${fmt(result.takeHomePay)}</strong> per year after federal
            {state.hasStateTax ? ', state,' : ''} and FICA taxes. That&rsquo;s{' '}
            <strong>${fmt(result.takeHomePay / 12)}</strong> per month.
          </p>
        </div>

        {/* Headline result */}
        <div className="result-hero">
          <span className="eyebrow">Annual take-home pay</span>
          <div className="result-amount">${fmt0(result.takeHomePay)}</div>
          <div className="result-sub">
            <span>
              <b>${fmt0(result.takeHomePay / 12)}</b> per month
            </span>
            <span>
              <b>${fmt0(result.takeHomePay / 26)}</b> bi-weekly
            </span>
            <span>
              <b>{fmtPct(result.effectiveRate)}</b> effective tax rate
            </span>
          </div>
          <div className="bar" aria-hidden="true">
            <span className="c-money" style={{ width: `${takeHomePct}%` }} />
            <span className="c-federal" style={{ width: `${federalPct}%` }} />
            {statePct > 0 && <span className="c-state" style={{ width: `${statePct}%` }} />}
            <span className="c-ss" style={{ width: `${ssPct}%` }} />
            <span className="c-medicare" style={{ width: `${medicarePct}%` }} />
          </div>
          <div className="legend">
            <span>
              <i className="c-money" /> Take-home <span className="mono">{fmtPct(takeHomePct / 100)}</span>
            </span>
            <span>
              <i className="c-federal" /> Federal <span className="mono">{fmtPct(federalPct / 100)}</span>
            </span>
            {statePct > 0 && (
              <span>
                <i className="c-state" /> State <span className="mono">{fmtPct(statePct / 100)}</span>
              </span>
            )}
            <span>
              <i className="c-ss" /> Social Security <span className="mono">{fmtPct(ssPct / 100)}</span>
            </span>
            <span>
              <i className="c-medicare" /> Medicare <span className="mono">{fmtPct(medicarePct / 100)}</span>
            </span>
          </div>
        </div>

        <div className="stat-grid" style={{ marginTop: '1rem' }}>
          <div className="stat money">
            <div className="label">Take-home pay</div>
            <div className="value">${fmt0(result.takeHomePay)}</div>
            <div className="sub">{fmtPct(takeHomePct / 100)} of gross</div>
          </div>
          <div className="stat red">
            <div className="label">Total taxes</div>
            <div className="value">${fmt0(result.totalDeductions)}</div>
            <div className="sub">{fmtPct(result.effectiveRate)} effective rate</div>
          </div>
          <div className="stat">
            <div className="label">Federal tax</div>
            <div className="value">${fmt0(result.federalTax)}</div>
            <div className="sub">{fmtPct(federalPct / 100)} of gross</div>
          </div>
          <div className="stat">
            <div className="label">{state.abbreviation} state tax</div>
            <div className="value">${fmt0(result.stateTax)}</div>
            <div className="sub">{state.hasStateTax ? `${fmtPct(statePct / 100)} of gross` : 'No state income tax'}</div>
          </div>
        </div>
      </div>

      {/* Breakdown table */}
      <div className="table-card">
        <div className="table-title">
          <h2>
            {formatted} salary breakdown &mdash; {state.name}
          </h2>
          <span className="badge badge-gold">2026 · single filer</span>
        </div>
        <div className="table-scroll">
          <table className="ledger">
            <thead>
              <tr>
                <th></th>
                {periods.map((p) => (
                  <th key={p.label} className="num">
                    {p.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>Gross pay</td>
                {periods.map((p) => (
                  <td key={p.label} className="num">
                    ${fmt(result.grossSalary / p.divisor)}
                  </td>
                ))}
              </tr>
              {[
                { label: 'Federal tax', value: result.federalTax },
                { label: `${state.abbreviation} state tax`, value: result.stateTax },
                { label: 'Social Security', value: result.socialSecurity },
                { label: 'Medicare', value: result.medicare },
              ].map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {periods.map((p) => (
                    <td
                      key={p.label}
                      className={`num ${row.value > 0 ? 'neg' : ''}`}
                      style={row.value === 0 ? { color: 'var(--text-3)' } : undefined}
                    >
                      {row.value > 0 ? `−$${fmt(row.value / p.divisor)}` : '$0.00'}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="subtotal">
                <td>Total deductions</td>
                {periods.map((p) => (
                  <td key={p.label} className="num">
                    −${fmt(result.totalDeductions / p.divisor)}
                  </td>
                ))}
              </tr>
              <tr className="total">
                <td>Take-home pay</td>
                {periods.map((p) => (
                  <td key={p.label} className="num">
                    ${fmt(result.takeHomePay / p.divisor)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="ad-slot ad-slot-horizontal" style={{ margin: 0 }}>Advertisement</div>

      {/* Explanation */}
      <section className="container-narrow" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="prose">
          <span className="eyebrow">In plain English</span>
          <h2 style={{ marginTop: '0.5rem' }}>
            What does a {formatted} salary look like in {state.name}?
          </h2>
          <p>{taxDescription}</p>
          <p>
            Federal income tax on a {formatted} salary is ${fmt(result.federalTax)} per year (after the{' '}
            {usd(federalStandardDeduction)} standard deduction). Social Security tax is ${fmt(result.socialSecurity)}{' '}
            (6.2% on earnings up to {usd(socialSecurityWageCap)}), and Medicare is ${fmt(result.medicare)} (1.45% on
            all earnings). After all deductions, your
            take-home pay is ${fmt(result.takeHomePay / 12)} per month or ${fmt(result.takeHomePay / 26)} per paycheck
            (bi-weekly).
          </p>
          {state.additionalInfo && <p>{state.additionalInfo}</p>}
        </div>

        <div
          className="card card-pad"
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            background: 'linear-gradient(135deg, #fff, var(--paper-2))',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600 }}>
              Not exactly {formatted}?
            </div>
            <div className="muted" style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>
              Enter any salary and pay frequency in the full {state.name} calculator.
            </div>
          </div>
          <a href={`/${state.slug}`} className="btn btn-ink">
            Open {state.name} calculator
          </a>
        </div>
      </section>

      {/* Other salaries in this state */}
      <section>
        <div className="section-head">
          <div>
            <span className="eyebrow">Nearby salaries</span>
            <h2>Other salaries in {state.name}</h2>
          </div>
        </div>
        <div className="state-pills">
          {nearbySalaries.map((s) => (
            <a key={s} href={`/${state.slug}/${salaryToSlug(s)}`} className="state-pill">
              <span className="abbr">{state.abbreviation}</span>
              {formatSalary(s)} salary
            </a>
          ))}
        </div>
      </section>

      {/* Same salary elsewhere */}
      <section>
        <div className="section-head">
          <div>
            <span className="eyebrow">Compare states</span>
            <h2>{formatted} salary in other states</h2>
          </div>
          <a href="/#states" className="text-link">
            All 50 states
          </a>
        </div>
        <div className="stat-grid">
          {otherStates.map((s) => {
            const otherResult = calculateTakeHome(amount, s)
            return (
              <a
                key={s.slug}
                href={`/${s.slug}/${salaryToSlug(amount)}`}
                className={`stat card-hover ${s.hasStateTax ? '' : 'money'}`}
                style={{ display: 'block', color: 'inherit' }}
              >
                <div className="label">
                  {s.abbreviation} &middot; {s.name}
                </div>
                <div className="value" style={{ color: 'var(--money-deep)' }}>
                  ${fmt0(otherResult.takeHomePay)}
                </div>
                <div className="sub">take-home &middot; {fmtPct(otherResult.effectiveRate)} taxes</div>
              </a>
            )
          })}
        </div>
      </section>

      <div className="ad-slot ad-slot-horizontal" style={{ margin: 0 }}>Advertisement</div>
    </div>
  )
}
