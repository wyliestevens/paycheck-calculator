import { states, getStateBySlug, socialSecurityWageCap, taxYear, usd } from '@/data/states'
import { salaryAmounts, salaryToSlug, formatSalary, calculateTakeHome } from '@/lib/tax-calculator'
import PaycheckCalculator from '@/components/PaycheckCalculator'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { breadcrumbSchema, stateCalculatorSchema, canonicalUrl, ogImage, webPageSchema } from '@/lib/seo'
import { neighbors as neighborMap } from '@/data/neighbors'
import { rankState, neighborComparison } from '@/lib/salary-insights'

export function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }))
}

function topRateOf(state: (typeof states)[number]): string {
  return state.taxType === 'flat'
    ? `${(state.flatRate! * 100).toFixed(2)}%`
    : state.taxType === 'none'
    ? '0%'
    : `${(state.brackets![state.brackets!.length - 1].rate * 100).toFixed(2)}%`
}

/** 140-160 character description with a real number in it, unique per state. */
export function stateDescription(state: (typeof states)[number]): string {
  const r = calculateTakeHome(75000, state)
  const takeHome = '$' + Math.round(r.takeHomePay).toLocaleString('en-US')
  const stateTax = !state.hasStateTax
    ? 'no state income tax'
    : state.taxType === 'flat'
    ? `${state.name}'s flat ${(state.flatRate! * 100).toFixed(2)}% state tax`
    : `${state.name}'s progressive state tax (top rate ${topRateOf(state)})`
  const full = `Free ${state.name} paycheck calculator for ${taxYear}. See take-home pay after federal tax, ${stateTax}, Social Security and Medicare. A $75,000 salary keeps about ${takeHome} a year.`
  if (full.length <= 160) return full
  return `Free ${state.name} paycheck calculator for ${taxYear}. Take-home pay after federal, state, Social Security and Medicare tax. A $75,000 salary keeps about ${takeHome} a year.`
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: slug } = await params
  const state = getStateBySlug(slug)
  if (!state) return {}

  const topRate = topRateOf(state)
  const title = `${state.name} Paycheck Calculator ${taxYear}`
  const description = stateDescription(state)

  return {
    title,
    description,
    keywords: `${state.name} paycheck calculator, ${state.abbreviation} salary calculator, ${state.name} take home pay, ${state.name} income tax calculator, ${state.name} tax rate ${topRate}, paycheck calculator ${state.name} ${taxYear}`,
    alternates: { canonical: `/${state.slug}` },
    openGraph: {
      title: `${title} | Take-Home Pay After Taxes`,
      description,
      url: `/${state.slug}`,
      images: ogImage(`/og/state/${state.slug}`, `${state.name} paycheck calculator ${taxYear}`),
    },
  }
}

const money0 = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: slug } = await params
  const state = getStateBySlug(slug)

  if (!state) {
    notFound()
  }

  const topRate = topRateOf(state)

  // Bordering states for internal linking (no-tax states for Alaska and Hawaii)
  const borderAbbrs = neighborMap[state.abbreviation] ?? []
  const nearby = borderAbbrs.length
    ? states.filter((s) => borderAbbrs.includes(s.abbreviation))
    : states.filter((s) => !s.hasStateTax && s.slug !== state.slug).slice(0, 4)
  const ranking = rankState(state, 75000)
  const border = neighborComparison(state, 75000)
  const ordinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }

  // Popular salary snapshots for this state
  const snapshotAmounts = [40000, 50000, 60000, 75000, 100000, 120000, 150000, 200000]
    .filter((a) => salaryAmounts.includes(a))

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: canonicalUrl() },
    { name: `${state.name} Paycheck Calculator`, url: canonicalUrl(`/${state.slug}`) },
  ])
  const calculatorLd = stateCalculatorSchema(state.name, state.slug)
  const pageLd = webPageSchema({
    path: `/${state.slug}`,
    name: `${state.name} Paycheck Calculator ${taxYear}`,
    description: stateDescription(state),
  })

  return (
    <div className="container page stack-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />

      <div>
        <div className="ad-slot ad-slot-horizontal" style={{ margin: '0 auto 1.5rem' }}>Advertisement</div>

        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="sep">/</span>
          <a href="/#states">States</a>
          <span className="sep">/</span>
          <span className="here">{state.name}</span>
        </nav>

        <div className="page-head">
          <span className={`badge ${state.hasStateTax ? 'badge-red' : 'badge-money'}`}>
            {state.hasStateTax
              ? `${state.taxType === 'flat' ? 'Flat' : 'Progressive'} tax · top rate ${topRate}`
              : 'No state income tax'}
          </span>
          <h1>
            {state.name} paycheck calculator{' '}
            <span className="year">{taxYear}</span>
          </h1>
          <p className="lede">
            Calculate your take-home pay in {state.name} ({state.abbreviation}) after federal, state, Social Security,
            and Medicare taxes.
          </p>
        </div>

        <PaycheckCalculator state={state} />
      </div>

      <div className="ad-slot ad-slot-horizontal" style={{ margin: 0 }}>Advertisement</div>

      {/* ---------------- Salary snapshots ---------------- */}
      <section>
        <div className="section-head">
          <div>
            <span className="eyebrow">Quick answers</span>
            <h2>Common salaries in {state.name}</h2>
            <p>Pre-calculated take-home pay for the salaries people search for most.</p>
          </div>
        </div>
        <div className="stat-grid">
          {snapshotAmounts.map((amount) => {
            const r = calculateTakeHome(amount, state)
            return (
              <a key={amount} href={`/${state.slug}/${salaryToSlug(amount)}`} className="stat card-hover" style={{ display: 'block', color: 'inherit' }}>
                <div className="label">{formatSalary(amount)} salary</div>
                <div className="value" style={{ color: 'var(--money-deep)' }}>{money0(r.takeHomePay)}</div>
                <div className="sub">
                  take-home &middot; {(r.effectiveRate * 100).toFixed(1)}% taxes
                </div>
              </a>
            )
          })}
        </div>

        <div className="table-card" style={{ marginTop: '1.5rem' }}>
          <div className="table-title">
            <h3>Every pre-calculated salary in {state.name}</h3>
            <span className="badge badge-gold">{taxYear} · single filer</span>
          </div>
          <div className="table-scroll">
            <table className="ledger">
              <thead>
                <tr>
                  <th>Gross salary</th>
                  <th className="num">Take-home / year</th>
                  <th className="num">Per month</th>
                  <th className="num">Bi-weekly</th>
                  <th className="num">Effective rate</th>
                </tr>
              </thead>
              <tbody>
                {salaryAmounts.map((amount) => {
                  const r = calculateTakeHome(amount, state)
                  return (
                    <tr key={amount}>
                      <td>
                        <a href={`/${state.slug}/${salaryToSlug(amount)}`}>{formatSalary(amount)}</a>
                      </td>
                      <td className="num" style={{ color: 'var(--money-deep)', fontWeight: 600 }}>{money0(r.takeHomePay)}</td>
                      <td className="num">{money0(r.takeHomePay / 12)}</td>
                      <td className="num">{money0(r.takeHomePay / 26)}</td>
                      <td className="num">{(r.effectiveRate * 100).toFixed(1)}%</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------- Details ---------------- */}
      <section className="container-narrow" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="prose">
          <span className="eyebrow">Tax details</span>
          <h2 style={{ marginTop: '0.5rem' }}>{state.name} income tax, explained</h2>
          <p>{state.additionalInfo}</p>

          {state.hasStateTax && state.taxType === 'flat' && (
            <p>
              {state.name} uses a flat tax rate of {(state.flatRate! * 100).toFixed(2)}% applied to all taxable income
              {state.standardDeduction > 0
                ? ` after a standard deduction of $${state.standardDeduction.toLocaleString()}`
                : ''}
              .
            </p>
          )}
        </div>

        {state.hasStateTax && state.brackets && state.taxType === 'progressive' && (
          <div className="table-card" style={{ marginTop: '1.5rem' }}>
            <div className="table-title">
              <h3>{state.name} tax brackets</h3>
              <span className="badge badge-gold">2026 · single filer</span>
            </div>
            <div className="table-scroll">
              <table className="ledger">
                <thead>
                  <tr>
                    <th>Rate</th>
                    <th>Taxable income</th>
                  </tr>
                </thead>
                <tbody>
                  {state.brackets.map((bracket, i) => (
                    <tr key={i}>
                      <td className="rate">{(bracket.rate * 100).toFixed(2)}%</td>
                      <td style={{ color: 'var(--text-2)' }}>
                        ${bracket.min.toLocaleString()} – {bracket.max ? `$${bracket.max.toLocaleString()}` : 'and above'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="prose" style={{ marginTop: '1.5rem' }}>
          <h3>How your {state.name} paycheck is calculated</h3>
          <p>
            Your paycheck in {state.name} is reduced by several mandatory deductions. Federal income tax follows a
            progressive bracket system ranging from 10% to 37%.
            {state.hasStateTax
              ? ` ${state.name} adds a ${state.taxType === 'flat' ? `flat ${(state.flatRate! * 100).toFixed(2)}%` : 'progressive'} state income tax on top of federal taxes.`
              : ` Since ${state.name} has no state income tax, your only deductions are federal taxes and FICA.`}{' '}
            Social Security takes 6.2% of earnings up to {usd(socialSecurityWageCap)}, and Medicare takes 1.45% of all earnings.
          </p>
          <h3>How {state.name} compares</h3>
          <p>
            On a $75,000 salary, {state.name} ranks <strong>{ordinal(ranking.rank)} of 50 states</strong> for take-home pay
            {ranking.tiedWith > 0 ? ` (tied with the other no-income-tax states)` : ''}: ${money0(ranking.best.result.takeHomePay).slice(1)} in{' '}
            {ranking.best.state.name} at the top, {money0(ranking.worst.result.takeHomePay)} in {ranking.worst.state.name} at the
            bottom, and {money0(calculateTakeHome(75000, state).takeHomePay)} here.{' '}
            {border.length > 0 && borderAbbrs.length > 0
              ? `Among neighbouring states, ${border[0].state.name} keeps the most (${money0(border[0].result.takeHomePay)}) and ${border[border.length - 1].state.name} the least (${money0(border[border.length - 1].result.takeHomePay)}).`
              : ''}{' '}
            See the full comparison on the <a href={`/${state.slug}/75000-salary`}>$75,000 in {state.name}</a> page.
          </p>
        </div>
      </section>

      {/* ---------------- Other states ---------------- */}
      <section>
        <div className="section-head">
          <div>
            <span className="eyebrow">Compare</span>
            <h2>{borderAbbrs.length ? `States bordering ${state.name}` : 'States with no income tax'}</h2>
          </div>
          <a href="/#states" className="text-link">
            All 50 states
          </a>
        </div>
        <div className="state-grid">
          {nearby.map((s) => (
            <a key={s.slug} href={`/${s.slug}`} className={`state-tile ${s.hasStateTax ? '' : 'free'}`}>
              <span className="abbr-bg" aria-hidden="true">
                {s.abbreviation}
              </span>
              <span className="name">{s.name}</span>
              <span className="meta">
                {s.hasStateTax ? `${s.taxType === 'flat' ? 'Flat' : 'Progressive'} · top ${topRateOf(s)}` : '0% state tax'}
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="ad-slot ad-slot-horizontal" style={{ margin: 0 }}>Advertisement</div>
    </div>
  )
}
