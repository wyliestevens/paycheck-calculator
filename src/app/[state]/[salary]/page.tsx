import { states, getStateBySlug, federalStandardDeduction, socialSecurityWageCap, taxYear, usd } from '@/data/states'
import { neighbors as neighborMap } from '@/data/neighbors'

const neighborsOf = (abbr: string) => neighborMap[abbr] ?? []
import { calculateTakeHome, salaryAmounts, formatSalary, parseSalarySlug, salaryToSlug } from '@/lib/tax-calculator'
import { breadcrumbSchema, canonicalUrl, ogImage, webPageSchema } from '@/lib/seo'
import { hourlyRate, federalMarginal, stateMarginal, rankState, neighborComparison, nextStep, compareSet } from '@/lib/salary-insights'
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

const money0 = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

/** Whole-dollar, 140-160 character description for a salary page. */
export function salaryDescription(state: (typeof states)[number], amount: number): string {
  const r = calculateTakeHome(amount, state)
  const formatted = formatSalary(amount)
  const base = `A ${formatted} salary in ${state.name} takes home about ${money0(r.takeHomePay)} a year after ${taxYear} federal${state.hasStateTax ? ', state' : ''}, Social Security and Medicare taxes`
  const withPeriods = `${base}: ${money0(r.takeHomePay / 12)} a month or ${money0(r.takeHomePay / 26)} per bi-weekly check.`
  return withPeriods.length <= 160 ? withPeriods : `${base} (${money0(r.takeHomePay / 12)} a month).`
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; salary: string }> }): Promise<Metadata> {
  const { state: stateSlug, salary: salarySlug } = await params
  const state = getStateBySlug(stateSlug)
  const amount = parseSalarySlug(salarySlug)
  if (!state || !amount) return {}

  const result = calculateTakeHome(amount, state)
  const formatted = formatSalary(amount)
  const takeHome = money0(result.takeHomePay)
  const description = salaryDescription(state, amount)

  return {
    title: `${formatted} Salary in ${state.name} After Taxes (${taxYear})`,
    description,
    keywords: `${formatted} salary ${state.name}, ${formatted} after taxes ${state.abbreviation}, take home pay ${formatted} ${state.name}, ${state.name} salary calculator ${taxYear}`,
    alternates: { canonical: `/${state.slug}/${salaryToSlug(amount)}` },
    openGraph: {
      title: `${formatted} Salary After Taxes in ${state.name} (${taxYear})`,
      description: `${formatted} salary in ${state.name} = ${takeHome} take-home pay after all taxes. See the full breakdown.`,
      url: `/${state.slug}/${salaryToSlug(amount)}`,
      images: ogImage(`/og/salary/${state.slug}/${salaryToSlug(amount)}`, `${formatted} salary after taxes in ${state.name}`),
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

  // Same salary in other states: bordering states first, then the best and worst in the country
  const otherStates = compareSet(state, amount)

  // Computed context that differs on every page
  const hourly = hourlyRate(amount)
  const fed = federalMarginal(amount)
  const stateRate = stateMarginal(amount, state)
  const ranking = rankState(state, amount)
  const border = neighborComparison(state, amount)
  const step = nextStep(state, amount)
  const hasBorder = (neighborsOf(state.abbreviation)).length > 0
  const bestNeighbor = border[0]
  const worstNeighbor = border[border.length - 1]
  const ordinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: canonicalUrl() },
    { name: `${state.name} Paycheck Calculator`, url: canonicalUrl(`/${state.slug}`) },
    { name: `${formatted} Salary`, url: canonicalUrl(`/${state.slug}/${salaryToSlug(amount)}`) },
  ])
  const pageLd = webPageSchema({
    path: `/${state.slug}/${salaryToSlug(amount)}`,
    name: `${formatted} Salary in ${state.name} After Taxes (${taxYear})`,
    description: salaryDescription(state, amount),
  })

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />

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
          <span className="badge badge-ink">{state.abbreviation} &middot; {taxYear} rates</span>
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
          <span className="badge badge-gold">{taxYear} · single filer</span>
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
          <p>
            Your last dollar of income is taxed at the <strong>{Math.round(fed.rate * 100)}% federal bracket</strong> (taxable
            income of ${fmt0(fed.taxable)} after the {usd(federalStandardDeduction)} deduction
            {fed.ceiling ? `, which runs up to $${fmt0(fed.ceiling)}` : ''})
            {state.hasStateTax ? ` plus ${(stateRate * 100).toFixed(2)}% ${state.abbreviation} state tax` : ''}, so each extra
            dollar you earn keeps roughly {Math.round((1 - fed.rate - stateRate - 0.0765) * 100)} cents. Spread over a standard
            2,080-hour year, {formatted} works out to <strong>${fmt(hourly)} an hour</strong> before tax and about{' '}
            ${fmt(result.takeHomePay / 2080)} an hour after it.
          </p>
          {step && (
            <p>
              A raise to {formatSalary(step.amount)} would add ${fmt0(step.grossGain)} in gross pay but only{' '}
              <strong>${fmt0(step.netGain)}</strong> in take-home ({Math.round(step.keptShare * 100)}% of the raise), because the
              extra income is taxed at your marginal rate rather than your {fmtPct(result.effectiveRate)} average rate. See{' '}
              <a href={`/${state.slug}/${salaryToSlug(step.amount)}`}>{formatSalary(step.amount)} in {state.name}</a>.
            </p>
          )}
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

      {/* Where this state ranks */}
      <section className="container-narrow" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="prose">
          <span className="eyebrow">Across the country</span>
          <h2 style={{ marginTop: '0.5rem' }}>
            Where {state.name} ranks for a {formatted} salary
          </h2>
          <p>
            {state.name} ranks <strong>{ordinal(ranking.rank)} of 50 states</strong> for take-home pay on {formatted}
            {ranking.tiedWith > 0 ? ` (tied with ${ranking.tiedWith} other no-income-tax state${ranking.tiedWith === 1 ? '' : 's'})` : ''}.{' '}
            {ranking.keepMore > 0
              ? `${ranking.keepMore} state${ranking.keepMore === 1 ? '' : 's'} let you keep more, and ${ranking.keepLess} keep less.`
              : `No state lets you keep more at this salary.`}{' '}
            The best is {ranking.best.state.name} at ${fmt0(ranking.best.result.takeHomePay)} and the lowest is{' '}
            {ranking.worst.state.name} at ${fmt0(ranking.worst.result.takeHomePay)}, a spread of{' '}
            ${fmt0(ranking.best.result.takeHomePay - ranking.worst.result.takeHomePay)} a year on the same gross pay.{' '}
            {Math.abs(ranking.vsMedian) < 1
              ? `${state.name} sits exactly at the national median.`
              : ranking.vsMedian > 0
              ? `${state.name} keeps $${fmt0(ranking.vsMedian)} more than the median state.`
              : `${state.name} keeps $${fmt0(-ranking.vsMedian)} less than the median state.`}
          </p>
        </div>
      </section>

      {/* Neighbouring states */}
      <section>
        <div className="section-head">
          <div>
            <span className="eyebrow">{hasBorder ? 'Across the border' : 'Compare'}</span>
            <h2>
              {hasBorder ? `${formatted} in the states next to ${state.name}` : `${formatted} in states with no income tax`}
            </h2>
            <p>
              {hasBorder
                ? `Same salary, same federal taxes; only the state tax changes. ${bestNeighbor.delta > 0.5 ? `${bestNeighbor.state.name} keeps $${fmt0(bestNeighbor.delta)} more than ${state.name}` : `${state.name} matches or beats every neighbour`}${worstNeighbor.delta < -0.5 ? `, while ${worstNeighbor.state.name} keeps $${fmt0(-worstNeighbor.delta)} less.` : '.'}`
                : `${state.name} has no land neighbours, so here is how ${formatted} compares with the no-income-tax states.`}
            </p>
          </div>
        </div>
        <div className="table-card">
          <div className="table-scroll">
            <table className="ledger">
              <thead>
                <tr>
                  <th>State</th>
                  <th className="num">State tax</th>
                  <th className="num">Take-home</th>
                  <th className="num">vs {state.abbreviation}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="total">
                  <td>{state.name} (this page)</td>
                  <td className="num">${fmt0(result.stateTax)}</td>
                  <td className="num">${fmt0(result.takeHomePay)}</td>
                  <td className="num">—</td>
                </tr>
                {border.map((row) => (
                  <tr key={row.state.slug}>
                    <td>
                      <a href={`/${row.state.slug}/${salaryToSlug(amount)}`}>{row.state.name}</a>
                    </td>
                    <td className="num">${fmt0(row.result.stateTax)}</td>
                    <td className="num">${fmt0(row.result.takeHomePay)}</td>
                    <td className={`num ${row.delta < -0.5 ? 'neg' : ''}`} style={row.delta > 0.5 ? { color: 'var(--money-deep)' } : undefined}>
                      {Math.abs(row.delta) < 0.5 ? 'same' : `${row.delta > 0 ? '+' : '−'}$${fmt0(Math.abs(row.delta))}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Questions people ask */}
      <section className="container-narrow" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="prose">
          <span className="eyebrow">Quick answers</span>
          <h2 style={{ marginTop: '0.5rem' }}>
            {formatted} in {state.name}: common questions
          </h2>
          <h3>How much is {formatted} after taxes in {state.name}?</h3>
          <p>
            About <strong>${fmt0(result.takeHomePay)} a year</strong>, or ${fmt0(result.takeHomePay / 12)} a month, for a single
            filer taking the standard deduction in {taxYear}. Total taxes come to ${fmt0(result.totalDeductions)}, an effective
            rate of {fmtPct(result.effectiveRate)}.
          </p>
          <h3>How much is {formatted} a year per paycheck?</h3>
          <p>
            Paid bi-weekly (26 checks), you would see about <strong>${fmt(result.takeHomePay / 26)}</strong> per check after taxes.
            Paid twice a month (24 checks), ${fmt(result.takeHomePay / 24)}; weekly, ${fmt(result.takeHomePay / 52)}; monthly,{' '}
            ${fmt(result.takeHomePay / 12)}.
          </p>
          <h3>What is {formatted} a year hourly?</h3>
          <p>
            {formatted} divided by 2,080 working hours is <strong>${fmt(hourly)} an hour</strong> gross. After {state.name} and
            federal taxes it is about ${fmt(result.takeHomePay / 2080)} an hour.
          </p>
          <h3>What tax bracket is {formatted} in?</h3>
          <p>
            The {Math.round(fed.rate * 100)}% federal bracket for a single filer
            {state.hasStateTax
              ? state.taxType === 'flat'
                ? `, plus ${state.name}'s flat ${(stateRate * 100).toFixed(2)}% state tax`
                : `, and the ${(stateRate * 100).toFixed(2)}% ${state.name} state bracket`
              : `; ${state.name} has no state income tax`}
            . Only the income above each threshold is taxed at the higher rate, which is why your average rate ({fmtPct(result.effectiveRate)})
            is lower than your bracket.
          </p>
          <h3>Does this include 401(k) or health insurance?</h3>
          <p>
            No. Pre-tax contributions lower your taxable income, so a 401(k) deferral or health premium would reduce the taxes
            above and the amount in your check. Run your own numbers, including filing status and pre-tax deductions, in the{' '}
            <a href={`/${state.slug}`}>{state.name} paycheck calculator</a>.
          </p>
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
            <p>Neighbours, then the best and worst states in the country for this salary.</p>
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
