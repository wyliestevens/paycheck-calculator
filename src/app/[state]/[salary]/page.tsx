import { states, getStateBySlug } from '@/data/states'
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
  const takeHome = formatSalary(result.takeHomePay)

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
    { label: 'Bi-Weekly', divisor: 26 },
    { label: 'Weekly', divisor: 52 },
  ]

  const takeHomePct = result.grossSalary > 0 ? (result.takeHomePay / result.grossSalary) * 100 : 0
  const federalPct = result.grossSalary > 0 ? (result.federalTax / result.grossSalary) * 100 : 0
  const statePct = result.grossSalary > 0 ? (result.stateTax / result.grossSalary) * 100 : 0
  const ssPct = result.grossSalary > 0 ? (result.socialSecurity / result.grossSalary) * 100 : 0
  const medicarePct = result.grossSalary > 0 ? (result.medicare / result.grossSalary) * 100 : 0

  // Pick 8 nearby salary links for this state (4 below, 4 above if possible)
  const currentIndex = salaryAmounts.indexOf(amount)
  const otherSalaries = salaryAmounts.filter((_, i) => i !== currentIndex)
  const belowSalaries = otherSalaries.filter(s => s < amount).slice(-4)
  const aboveSalaries = otherSalaries.filter(s => s > amount).slice(0, 4)
  const nearbySalaries = [...belowSalaries, ...aboveSalaries]

  // Pick 8 other states for same salary
  const noTaxStates = states.filter(s => !s.hasStateTax && s.slug !== state.slug).slice(0, 3)
  const taxStates = states.filter(s => s.hasStateTax && s.slug !== state.slug)
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="ad-slot ad-slot-horizontal">Advertisement</div>

      {/* Breadcrumb navigation */}
      <nav style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <a href={`/${state.slug}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{state.name}</a>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>{formatted} Salary</span>
      </nav>

      {/* Page title */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: '0.75rem',
        }}>
          {formatted} Salary After Taxes in {state.name}
        </h1>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', maxWidth: '680px' }}>
          On a {formatted} salary in {state.name} ({state.abbreviation}), you can expect to take home{' '}
          <strong style={{ color: 'var(--green)' }}>${fmt(result.takeHomePay)}</strong> per year after federal
          {state.hasStateTax ? ', state,' : ''} and FICA taxes — that&#39;s{' '}
          <strong>${fmt(result.takeHomePay / 12)}</strong> per month.
        </p>
      </div>

      {/* Summary cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        <div style={{
          background: 'var(--green-bg)',
          border: '1px solid #a7f3d0',
          borderRadius: '12px',
          padding: '1.25rem',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--green)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Take-Home Pay</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--font-mono)' }}>${fmt(result.takeHomePay)}</div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{fmtPct(takeHomePct / 100)} of gross</div>
        </div>
        <div style={{
          background: 'var(--red-bg)',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          padding: '1.25rem',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--red)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Total Taxes</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--red)', fontFamily: 'var(--font-mono)' }}>${fmt(result.totalDeductions)}</div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{fmtPct(result.effectiveRate)} effective rate</div>
        </div>
      </div>

      {/* Visual deduction bar */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '2rem',
      }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Tax Breakdown</h2>
        <div style={{
          display: 'flex',
          height: '32px',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}>
          <div style={{ width: `${takeHomePct}%`, background: '#059669', transition: 'width 0.3s' }} title={`Take-Home: ${fmtPct(takeHomePct / 100)}`} />
          <div style={{ width: `${federalPct}%`, background: '#2563eb', transition: 'width 0.3s' }} title={`Federal Tax: ${fmtPct(federalPct / 100)}`} />
          {statePct > 0 && (
            <div style={{ width: `${statePct}%`, background: '#7c3aed', transition: 'width 0.3s' }} title={`State Tax: ${fmtPct(statePct / 100)}`} />
          )}
          <div style={{ width: `${ssPct}%`, background: '#d97706', transition: 'width 0.3s' }} title={`Social Security: ${fmtPct(ssPct / 100)}`} />
          <div style={{ width: `${medicarePct}%`, background: '#dc2626', transition: 'width 0.3s' }} title={`Medicare: ${fmtPct(medicarePct / 100)}`} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8125rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#059669', display: 'inline-block' }} />
            Take-Home {fmtPct(takeHomePct / 100)}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#2563eb', display: 'inline-block' }} />
            Federal {fmtPct(federalPct / 100)}
          </span>
          {statePct > 0 && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#7c3aed', display: 'inline-block' }} />
              State {fmtPct(statePct / 100)}
            </span>
          )}
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#d97706', display: 'inline-block' }} />
            Social Security {fmtPct(ssPct / 100)}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#dc2626', display: 'inline-block' }} />
            Medicare {fmtPct(medicarePct / 100)}
          </span>
        </div>
      </div>

      {/* Breakdown table */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '2rem',
      }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, padding: '1.25rem 1.5rem 0' }}>
          {formatted} Salary Breakdown — {state.name}
        </h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem 1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}></th>
                {periods.map(p => (
                  <th key={p.label} style={{ textAlign: 'right', padding: '0.75rem 1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Gross Pay', value: result.grossSalary, color: 'var(--text-primary)', bold: true },
                { label: 'Federal Tax', value: result.federalTax, color: 'var(--red)', bold: false },
                { label: `${state.abbreviation} State Tax`, value: result.stateTax, color: 'var(--red)', bold: false },
                { label: 'Social Security', value: result.socialSecurity, color: 'var(--red)', bold: false },
                { label: 'Medicare', value: result.medicare, color: 'var(--red)', bold: false },
              ].map((row) => (
                <tr key={row.label} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.625rem 1.5rem', fontSize: '0.9375rem', fontWeight: row.bold ? 600 : 400 }}>{row.label}</td>
                  {periods.map(p => (
                    <td key={p.label} style={{
                      textAlign: 'right',
                      padding: '0.625rem 1.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      color: row.value === 0 ? 'var(--text-muted)' : (row.bold ? 'var(--text-primary)' : row.color),
                    }}>
                      {row.value === 0 && !row.bold ? '$0.00' : `$${fmt(row.value / p.divisor)}`}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Total deductions row */}
              <tr style={{ borderBottom: '2px solid var(--border)', background: 'var(--red-bg)' }}>
                <td style={{ padding: '0.625rem 1.5rem', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--red)' }}>Total Deductions</td>
                {periods.map(p => (
                  <td key={p.label} style={{
                    textAlign: 'right',
                    padding: '0.625rem 1.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--red)',
                  }}>
                    -${fmt(result.totalDeductions / p.divisor)}
                  </td>
                ))}
              </tr>
              {/* Take-home row */}
              <tr style={{ background: 'var(--green-bg)' }}>
                <td style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', fontWeight: 700, color: 'var(--green)' }}>Take-Home Pay</td>
                {periods.map(p => (
                  <td key={p.label} style={{
                    textAlign: 'right',
                    padding: '0.75rem 1.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--green)',
                  }}>
                    ${fmt(result.takeHomePay / p.divisor)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="ad-slot ad-slot-horizontal">Advertisement</div>

      {/* Explanation section */}
      <section style={{ marginTop: '2rem', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '1.375rem', fontWeight: 600, marginBottom: '1rem' }}>
          What Does a {formatted} Salary Look Like in {state.name}?
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
          {taxDescription}
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
          Federal income tax on a {formatted} salary is ${fmt(result.federalTax)} per year (after the $15,000 standard deduction). Social Security tax is ${fmt(result.socialSecurity)} (6.2% on earnings up to $168,600), and Medicare is ${fmt(result.medicare)} (1.45% on all earnings). After all deductions, your take-home pay is ${fmt(result.takeHomePay / 12)} per month or ${fmt(result.takeHomePay / 26)} per paycheck (bi-weekly).
        </p>
        {state.additionalInfo && (
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {state.additionalInfo}
          </p>
        )}
      </section>

      {/* Use the full interactive calculator */}
      <section style={{
        marginTop: '2rem',
        padding: '1.25rem 1.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-focus)',
        borderRadius: '12px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
          Want to calculate a custom salary amount?
        </p>
        <a
          href={`/${state.slug}`}
          style={{
            display: 'inline-block',
            padding: '0.625rem 1.5rem',
            background: 'var(--accent)',
            color: '#ffffff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.9375rem',
          }}
        >
          Use {state.name} Paycheck Calculator
        </a>
      </section>

      {/* Other salaries in this state */}
      <section style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-muted)' }}>
          Other Salaries in {state.name}
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '0.75rem',
        }}>
          {nearbySalaries.map((s) => (
            <a
              key={s}
              href={`/${state.slug}/${salaryToSlug(s)}`}
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}
            >
              {formatSalary(s)} Salary
            </a>
          ))}
        </div>
      </section>

      {/* Same salary in other states */}
      <section style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-muted)' }}>
          {formatted} Salary in Other States
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0.75rem',
        }}>
          {otherStates.map((s) => {
            const otherResult = calculateTakeHome(amount, s)
            return (
              <a
                key={s.slug}
                href={`/${s.slug}/${salaryToSlug(amount)}`}
                style={{
                  display: 'block',
                  padding: '0.875rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{s.abbreviation} &middot; {s.name}</div>
                <div style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
                  ${fmt(otherResult.takeHomePay)} take-home
                </div>
              </a>
            )
          })}
        </div>
      </section>

      <div className="ad-slot ad-slot-horizontal" style={{ marginTop: '2rem' }}>Advertisement</div>
    </>
  )
}
