import { states, getStateBySlug } from '@/data/states'
import PaycheckCalculator from '@/components/PaycheckCalculator'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: slug } = await params
  const state = getStateBySlug(slug)
  if (!state) return {}

  const topRate = state.taxType === 'flat'
    ? `${(state.flatRate! * 100).toFixed(2)}%`
    : state.taxType === 'none'
    ? '0%'
    : `${(state.brackets![state.brackets!.length - 1].rate * 100).toFixed(2)}%`

  return {
    title: `${state.name} Paycheck Calculator 2026 | ${state.abbreviation} Take-Home Pay`,
    description: state.metaDescription,
    keywords: `${state.name} paycheck calculator, ${state.abbreviation} salary calculator, ${state.name} take home pay, ${state.name} income tax calculator, ${state.name} tax rate ${topRate}, paycheck calculator ${state.name} 2026`,
    openGraph: {
      title: `${state.name} Paycheck Calculator 2026`,
      description: state.metaDescription,
    },
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: slug } = await params
  const state = getStateBySlug(slug)

  if (!state) {
    notFound()
  }

  const topRate = state.taxType === 'flat'
    ? `${(state.flatRate! * 100).toFixed(2)}%`
    : state.taxType === 'none'
    ? '0%'
    : `${(state.brackets![state.brackets!.length - 1].rate * 100).toFixed(2)}%`

  // Get neighboring states for internal linking
  const stateIndex = states.findIndex((s) => s.slug === slug)
  const nearby = [
    states[(stateIndex - 2 + states.length) % states.length],
    states[(stateIndex - 1 + states.length) % states.length],
    states[(stateIndex + 1) % states.length],
    states[(stateIndex + 2) % states.length],
  ]

  return (
    <>
      <div className="ad-slot ad-slot-horizontal">Advertisement</div>

      <div style={{ marginBottom: '1.5rem' }}>
        <a href="/" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          &larr; All States
        </a>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: state.hasStateTax ? 'var(--red-bg)' : 'var(--green-bg)',
            border: `1px solid ${state.hasStateTax ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)'}`,
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: state.hasStateTax ? 'var(--red)' : 'var(--green)',
            marginBottom: '0.75rem',
          }}
        >
          {state.hasStateTax
            ? `${state.taxType === 'flat' ? 'Flat' : 'Progressive'} Tax \u00b7 Top Rate: ${topRate}`
            : 'No State Income Tax'}
        </div>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '0.75rem',
          }}
        >
          {state.name} Paycheck Calculator
          <span style={{ color: 'var(--text-muted)', fontSize: '0.6em', fontWeight: 400, marginLeft: '0.5rem' }}>
            2026
          </span>
        </h1>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', maxWidth: '680px' }}>
          Calculate your take-home pay in {state.name} ({state.abbreviation}) after federal, state, Social Security, and Medicare taxes.
        </p>
      </div>

      <PaycheckCalculator state={state} />

      <div className="ad-slot ad-slot-horizontal">Advertisement</div>

      {/* State-specific info */}
      <section style={{ marginTop: '2rem', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '1.375rem', fontWeight: 600, marginBottom: '1rem' }}>
          {state.name} Income Tax Details
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          {state.additionalInfo}
        </p>

        {state.hasStateTax && state.brackets && state.taxType === 'progressive' && (
          <>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', marginTop: '1.5rem' }}>
              {state.name} Tax Brackets (2026, Single Filer)
            </h3>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem 1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rate</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem 1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Income Range</th>
                  </tr>
                </thead>
                <tbody>
                  {state.brackets.map((bracket, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '0.625rem 1.5rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent)' }}>
                        {(bracket.rate * 100).toFixed(2)}%
                      </td>
                      <td style={{ padding: '0.625rem 1.5rem', color: 'var(--text-secondary)' }}>
                        ${bracket.min.toLocaleString()} - {bracket.max ? `$${bracket.max.toLocaleString()}` : 'and above'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {state.hasStateTax && state.taxType === 'flat' && (
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            {state.name} uses a flat tax rate of {(state.flatRate! * 100).toFixed(2)}% applied to all taxable income
            {state.standardDeduction > 0 ? ` after a standard deduction of $${state.standardDeduction.toLocaleString()}` : ''}.
          </p>
        )}

        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', marginTop: '2rem' }}>
          How Your {state.name} Paycheck Is Calculated
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Your paycheck in {state.name} is reduced by several mandatory deductions. Federal income tax follows a progressive bracket system ranging from 10% to 37%.
          {state.hasStateTax
            ? ` ${state.name} adds a ${state.taxType === 'flat' ? `flat ${(state.flatRate! * 100).toFixed(2)}%` : 'progressive'} state income tax on top of federal taxes.`
            : ` Since ${state.name} has no state income tax, your only deductions are federal taxes and FICA.`}
          {' '}Social Security takes 6.2% of earnings up to $168,600, and Medicare takes 1.45% of all earnings.
        </p>
      </section>

      {/* Internal Links */}
      <section style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-muted)' }}>
          Paycheck Calculators for Other States
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {nearby.map((s) => (
            <a
              key={s.slug}
              href={`/${s.slug}`}
              style={{
                display: 'block',
                padding: '0.875rem 1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}
            >
              {s.abbreviation} &middot; {s.name}
            </a>
          ))}
        </div>
      </section>

      <div className="ad-slot ad-slot-horizontal" style={{ marginTop: '2rem' }}>Advertisement</div>
    </>
  )
}
