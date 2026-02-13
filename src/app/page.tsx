import { states } from '@/data/states'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Paycheck Calculator by State | 2026 Tax Rates | PaycheckCalc',
  description: 'Calculate your take-home pay in any US state. Free paycheck calculator with 2026 federal and state tax rates, Social Security, and Medicare deductions.',
}

export default function HomePage() {
  const noTaxStates = states.filter((s) => !s.hasStateTax)
  const taxStates = states.filter((s) => s.hasStateTax)

  return (
    <>
      <div className="ad-slot ad-slot-horizontal">Advertisement</div>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          Free Paycheck Calculator
          <br />
          <span style={{ color: 'var(--green)' }}>for Every US State</span>
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            margin: '0 auto',
          }}
        >
          Estimate your take-home pay after federal, state, Social Security, and Medicare
          taxes. Updated with 2026 tax rates.
        </p>
      </div>

      {/* No Income Tax States */}
      <div style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: 'var(--green)' }}>&#10003;</span> States With No Income Tax
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {noTaxStates.map((s) => (
            <a
              key={s.slug}
              href={`/${s.slug}`}
              style={{
                display: 'block',
                padding: '1rem 1.25rem',
                background: 'var(--green-bg)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                transition: 'transform 0.15s, border-color 0.15s',
                fontWeight: 500,
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.8125rem', marginRight: '0.5rem' }}>
                {s.abbreviation}
              </span>
              {s.name}
              <div style={{ fontSize: '0.75rem', color: 'var(--green)', marginTop: '0.25rem', fontWeight: 600 }}>
                0% State Tax
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* All Other States */}
      <div>
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '1rem',
          }}
        >
          All States With Income Tax
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {taxStates.map((s) => {
            const topRate = s.taxType === 'flat'
              ? s.flatRate! * 100
              : s.brackets
              ? s.brackets[s.brackets.length - 1].rate * 100
              : 0

            return (
              <a
                key={s.slug}
                href={`/${s.slug}`}
                style={{
                  display: 'block',
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'transform 0.15s, border-color 0.15s',
                  fontWeight: 500,
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.8125rem', marginRight: '0.5rem' }}>
                  {s.abbreviation}
                </span>
                {s.name}
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {s.taxType === 'flat' ? 'Flat' : 'Progressive'} &middot; Top rate: {topRate.toFixed(2)}%
                </div>
              </a>
            )
          })}
        </div>
      </div>

      <div className="ad-slot ad-slot-horizontal" style={{ marginTop: '3rem' }}>Advertisement</div>

      {/* SEO Content */}
      <section style={{ marginTop: '3rem', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          How to Calculate Your Take-Home Pay
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Your take-home pay is your gross salary minus all tax withholdings. These include federal income tax, state income tax (if your state levies one), Social Security tax at 6.2% on the first $168,600 of earnings, and Medicare tax at 1.45% on all earnings.
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Federal income tax uses a progressive bracket system for 2026, ranging from 10% on the first $11,925 of taxable income up to 37% on income above $626,350. Your taxable income is your gross income minus the standard deduction of $15,000 for single filers.
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          State income taxes vary widely. Nine states charge no income tax at all: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Others range from North Dakota at 2.9% up to California at 13.3%.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', marginTop: '2rem' }}>
          2026 Federal Tax Brackets (Single Filer)
        </h2>
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
                <th style={{ textAlign: 'left', padding: '0.75rem 1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tax Rate</th>
                <th style={{ textAlign: 'left', padding: '0.75rem 1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Income Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['10%', '$0 - $11,925'],
                ['12%', '$11,925 - $48,475'],
                ['22%', '$48,475 - $103,350'],
                ['24%', '$103,350 - $197,300'],
                ['32%', '$197,300 - $250,525'],
                ['35%', '$250,525 - $626,350'],
                ['37%', '$626,350+'],
              ].map(([rate, range], i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.625rem 1.5rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent)' }}>{rate}</td>
                  <td style={{ padding: '0.625rem 1.5rem', color: 'var(--text-secondary)' }}>{range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
