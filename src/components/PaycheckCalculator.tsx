'use client'

import { useMemo, useState } from 'react'
import {
  StateData,
  calculateFederalTax,
  calculateStateTax,
  calculateFICA,
} from '@/data/states'

interface Props {
  state: StateData
}

type PayFrequency = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly' | 'annual'

const frequencyLabels: Record<PayFrequency, string> = {
  weekly: 'Weekly',
  biweekly: 'Bi-weekly',
  semimonthly: 'Semi-monthly',
  monthly: 'Monthly',
  annual: 'Annual',
}

const frequencyMultipliers: Record<PayFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annual: 1,
}

const quickAmounts = [40000, 55000, 75000, 100000, 150000]

export default function PaycheckCalculator({ state }: Props) {
  const [salary, setSalary] = useState<string>('75000')
  const [frequency, setFrequency] = useState<PayFrequency>('biweekly')

  const results = useMemo(() => {
    const annualSalary = Math.max(0, parseFloat(salary) || 0)
    const periods = frequencyMultipliers[frequency]

    const federalTax = calculateFederalTax(annualSalary)
    const stateTax = calculateStateTax(annualSalary, state)
    const { socialSecurity, medicare } = calculateFICA(annualSalary)

    const totalTaxes = federalTax + stateTax + socialSecurity + medicare
    const annualNet = annualSalary - totalTaxes
    const pct = (n: number) => (annualSalary > 0 ? (n / annualSalary) * 100 : 0)

    return {
      gross: annualSalary,
      grossPerPeriod: annualSalary / periods,
      federalTax,
      federalPerPeriod: federalTax / periods,
      stateTax,
      statePerPeriod: stateTax / periods,
      socialSecurity,
      ssPerPeriod: socialSecurity / periods,
      medicare,
      medicarePerPeriod: medicare / periods,
      totalTaxes,
      taxesPerPeriod: totalTaxes / periods,
      annualNet,
      netPerPeriod: annualNet / periods,
      effectiveRate: pct(totalTaxes),
      share: {
        net: pct(annualNet),
        federal: pct(federalTax),
        state: pct(stateTax),
        ss: pct(socialSecurity),
        medicare: pct(medicare),
      },
    }
  }, [salary, frequency, state])

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
  const fmt0 = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
  const pct = (n: number) => n.toFixed(1) + '%'

  return (
    <div className="calc">
      {/* ---------------- Inputs ---------------- */}
      <div className="calc-inputs">
        <div className="card card-pad">
          <span className="eyebrow">Your income</span>
          <div className="field" style={{ marginTop: '1rem' }}>
            <label htmlFor="salary">Annual gross salary</label>
            <div className="input-money">
              <span className="prefix" aria-hidden="true">
                $
              </span>
              <input
                id="salary"
                type="number"
                inputMode="decimal"
                min={0}
                step={1000}
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="75000"
              />
            </div>
            <div className="quick-amounts" aria-label="Quick salary presets">
              {quickAmounts.map((a) => (
                <button key={a} type="button" onClick={() => setSalary(String(a))}>
                  {fmt0(a)}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label id="freq-label">Pay frequency</label>
            <div className="seg" role="group" aria-labelledby="freq-label">
              {(Object.keys(frequencyLabels) as PayFrequency[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={frequency === key}
                  onClick={() => setFrequency(key)}
                >
                  {frequencyLabels[key]}
                </button>
              ))}
            </div>
          </div>

          <p className="muted" style={{ fontSize: '0.8125rem', marginTop: '1.25rem', lineHeight: 1.5 }}>
            Estimates use 2026 rates for a single filer taking the standard deduction. Pre-tax benefits, local taxes,
            and extra withholding are not included.
          </p>
        </div>
      </div>

      {/* ---------------- Results ---------------- */}
      <div className="stack">
        <div className="result-hero">
          <span className="eyebrow">Your {frequencyLabels[frequency].toLowerCase()} take-home pay</span>
          <div className="result-amount">{fmt(results.netPerPeriod)}</div>
          <div className="result-sub">
            <span>
              <b>{fmt0(results.annualNet)}</b> per year
            </span>
            <span>
              <b>{pct(results.effectiveRate)}</b> effective tax rate
            </span>
            <span>
              <b>{fmt0(results.totalTaxes)}</b> total taxes
            </span>
          </div>

          <div className="bar" aria-hidden="true">
            <span className="c-money" style={{ width: `${results.share.net}%` }} />
            <span className="c-federal" style={{ width: `${results.share.federal}%` }} />
            {results.share.state > 0 && <span className="c-state" style={{ width: `${results.share.state}%` }} />}
            <span className="c-ss" style={{ width: `${results.share.ss}%` }} />
            <span className="c-medicare" style={{ width: `${results.share.medicare}%` }} />
          </div>
          <div className="legend">
            <span>
              <i className="c-money" /> Take-home <span className="mono">{pct(results.share.net)}</span>
            </span>
            <span>
              <i className="c-federal" /> Federal <span className="mono">{pct(results.share.federal)}</span>
            </span>
            {results.share.state > 0 && (
              <span>
                <i className="c-state" /> {state.abbreviation} state <span className="mono">{pct(results.share.state)}</span>
              </span>
            )}
            <span>
              <i className="c-ss" /> Social Security <span className="mono">{pct(results.share.ss)}</span>
            </span>
            <span>
              <i className="c-medicare" /> Medicare <span className="mono">{pct(results.share.medicare)}</span>
            </span>
          </div>
        </div>

        <div className="table-card">
          <div className="table-title">
            <h2>Tax breakdown</h2>
            <span className="badge badge-ink">{frequencyLabels[frequency]}</span>
          </div>
          <div className="table-scroll">
            <table className="ledger">
              <thead>
                <tr>
                  <th>Line item</th>
                  <th className="num">Per period</th>
                  <th className="num">Annual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600 }}>Gross pay</td>
                  <td className="num">{fmt(results.grossPerPeriod)}</td>
                  <td className="num">{fmt(results.gross)}</td>
                </tr>
                {[
                  { label: 'Federal income tax', per: results.federalPerPeriod, annual: results.federalTax },
                  { label: `${state.name} state tax`, per: results.statePerPeriod, annual: results.stateTax },
                  { label: 'Social Security (6.2%)', per: results.ssPerPeriod, annual: results.socialSecurity },
                  { label: 'Medicare (1.45%)', per: results.medicarePerPeriod, annual: results.medicare },
                ].map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td className={`num ${row.annual > 0 ? 'neg' : ''}`} style={row.annual === 0 ? { color: 'var(--text-3)' } : undefined}>
                      {row.annual > 0 ? `−${fmt(row.per)}` : fmt(0)}
                    </td>
                    <td className={`num ${row.annual > 0 ? 'neg' : ''}`} style={row.annual === 0 ? { color: 'var(--text-3)' } : undefined}>
                      {row.annual > 0 ? `−${fmt(row.annual)}` : fmt(0)}
                    </td>
                  </tr>
                ))}
                <tr className="total">
                  <td>Take-home pay</td>
                  <td className="num">{fmt(results.netPerPeriod)}</td>
                  <td className="num">{fmt(results.annualNet)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
