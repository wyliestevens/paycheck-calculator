import { states, getStateBySlug } from '@/data/states'
import { salaryAmounts, salaryToSlug, formatSalary, calculateTakeHome } from '@/lib/tax-calculator'
import PaycheckCalculator from '@/components/PaycheckCalculator'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { breadcrumbSchema, stateCalculatorSchema, canonicalUrl } from '@/lib/seo'

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

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: slug } = await params
  const state = getStateBySlug(slug)
  if (!state) return {}

  const topRate = topRateOf(state)

  return {
    title: `${state.name} Paycheck Calculator 2026 | ${state.abbreviation} Take-Home Pay`,
    description: state.metaDescription,
    keywords: `${state.name} paycheck calculator, ${state.abbreviation} salary calculator, ${state.name} take home pay, ${state.name} income tax calculator, ${state.name} tax rate ${topRate}, paycheck calculator ${state.name} 2026`,
    alternates: { canonical: `/${state.slug}` },
    openGraph: {
      title: `${state.name} Paycheck Calculator 2026`,
      description: state.metaDescription,
      url: `/${state.slug}`,
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

  // Neighbouring states (alphabetically) for internal linking
  const stateIndex = states.findIndex((s) => s.slug === slug)
  const nearby = [
    states[(stateIndex - 2 + states.length) % states.length],
    states[(stateIndex - 1 + states.length) % states.length],
    states[(stateIndex + 1) % states.length],
    states[(stateIndex + 2) % states.length],
  ]

  // Popular salary snapshots for this state
  const snapshotAmounts = [40000, 50000, 60000, 75000, 100000, 120000, 150000, 200000]
    .filter((a) => salaryAmounts.includes(a))

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: canonicalUrl() },
    { name: `${state.name} Paycheck Calculator`, url: canonicalUrl(`/${state.slug}`) },
  ])
  const calculatorLd = stateCalculatorSchema(state.name, state.slug)

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
            {state.name} paycheck calculator
            <span className="year">2026</span>
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
            Social Security takes 6.2% of earnings up to $168,600, and Medicare takes 1.45% of all earnings.
          </p>
        </div>
      </section>

      {/* ---------------- Other states ---------------- */}
      <section>
        <div className="section-head">
          <div>
            <span className="eyebrow">Compare</span>
            <h2>Paycheck calculators for other states</h2>
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
