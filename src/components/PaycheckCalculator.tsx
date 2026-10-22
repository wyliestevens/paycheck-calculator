'use client'

import { useMemo, useState } from 'react'
import type { StateData } from '@/data/states'
import { taxYear } from '@/data/states'
import { filingStatusLabels, type FilingStatus } from '@/data/filing'
import { calculatePaycheck } from '@/lib/tax-calculator'

interface Props {
  state: StateData
}

type PayFrequency = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly' | 'annual'
type PayType = 'salary' | 'hourly'

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
const quickRates = [15, 20, 25, 35, 50]

const num = (v: string) => Math.max(0, parseFloat(v) || 0)

export default function PaycheckCalculator({ state }: Props) {
  const [payType, setPayType] = useState<PayType>('salary')
  const [salary, setSalary] = useState<string>('75000')
  const [rate, setRate] = useState<string>('25')
  const [hours, setHours] = useState<string>('40')
  const [frequency, setFrequency] = useState<PayFrequency>('biweekly')
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single')
  const [retirementPct, setRetirementPct] = useState<string>('0')
  const [otherPreTax, setOtherPreTax] = useState<string>('0')
  const [showMore, setShowMore] = useState(false)

  const annualGross = payType === 'salary' ? num(salary) : num(rate) * num(hours) * 52

  const results = useMemo(() => {
    const periods = frequencyMultipliers[frequency]
    const r = calculatePaycheck({
      state,
      grossSalary: annualGross,
      filingStatus,
      retirementPct: num(retirementPct) / 100,
      otherPreTax: num(otherPreTax),
    })
    const pct = (n: number) => (r.grossSalary > 0 ? (n / r.grossSalary) * 100 : 0)
    const per = (n: number) => n / periods
    return {
      r,
      per,
      effectiveRate: r.effectiveRate * 100,
      share: {
        net: pct(r.takeHomePay),
        preTax: pct(r.retirement + r.otherPreTax),
        federal: pct(r.federalTax),
        state: pct(r.stateTax),
        ss: pct(r.socialSecurity),
        medicare: pct(r.medicare),
      },
    }
  }, [annualGross, frequency, state, filingStatus, retirementPct, otherPreTax])

  const { r, per } = results
  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
  const fmt0 = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
  const pct = (n: number) => n.toFixed(1) + '%'
  const hasPreTax = r.retirement + r.otherPreTax > 0

  return (
    <div className="calc">
      {/* ---------------- Inputs ---------------- */}
      <div className="calc-inputs">
        <div className="card card-pad">
          <span className="eyebrow">Your income</span>

          <div className="field" style={{ marginTop: '1rem' }}>
            <label id="paytype-label">Pay type</label>
            <div className="seg seg-2" role="group" aria-labelledby="paytype-label">
              <button type="button" aria-pressed={payType === 'salary'} onClick={() => setPayType('salary')}>
                Salary
              </button>
              <button type="button" aria-pressed={payType === 'hourly'} onClick={() => setPayType('hourly')}>
                Hourly
              </button>
            </div>
          </div>

          {payType === 'salary' ? (
            <div className="field">
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
          ) : (
            <div className="field">
              <div className="field-row">
                <div>
                  <label htmlFor="rate">Hourly rate</label>
                  <div className="input-money">
                    <span className="prefix" aria-hidden="true">
                      $
                    </span>
                    <input
                      id="rate"
                      type="number"
                      inputMode="decimal"
                      min={0}
                      step={0.5}
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      placeholder="25"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="hours">Hours per week</label>
                  <div className="input-money">
                    <input
                      id="hours"
                      type="number"
                      inputMode="decimal"
                      min={0}
                      max={168}
                      step={1}
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      placeholder="40"
                      style={{ paddingLeft: '0.9rem' }}
                    />
                  </div>
                </div>
              </div>
              <div className="quick-amounts" aria-label="Quick hourly presets">
                {quickRates.map((a) => (
                  <button key={a} type="button" onClick={() => setRate(String(a))}>
                    ${a}/hr
                  </button>
                ))}
              </div>
              <p className="muted" style={{ fontSize: '0.8125rem', marginTop: '0.6rem' }}>
                {fmt0(annualGross)} a year at {num(hours)} hours a week, 52 weeks. Overtime is not included.
              </p>
            </div>
          )}

          <div className="field">
            <label id="freq-label">Pay frequency</label>
            <div className="seg" role="group" aria-labelledby="freq-label">
              {(Object.keys(frequencyLabels) as PayFrequency[]).map((key) => (
                <button key={key} type="button" aria-pressed={frequency === key} onClick={() => setFrequency(key)}>
                  {frequencyLabels[key]}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label htmlFor="filing">Filing status</label>
            <select id="filing" className="input-select" value={filingStatus} onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}>
              {(Object.keys(filingStatusLabels) as FilingStatus[]).map((k) => (
                <option key={k} value={k}>
                  {filingStatusLabels[k]}
                </option>
              ))}
            </select>
          </div>

          <button type="button" className="text-link" style={{ marginTop: '0.25rem' }} onClick={() => setShowMore((v) => !v)} aria-expanded={showMore}>
            {showMore ? 'Hide' : 'Add'} pre-tax deductions {hasPreTax && !showMore ? `(${fmt0(r.retirement + r.otherPreTax)}/yr)` : ''}
          </button>

          {showMore && (
            <div className="field-row" style={{ marginTop: '0.75rem' }}>
              <div className="field" style={{ marginBottom: 0 }}>
                <label htmlFor="k401">401(k) / 403(b) contribution</label>
                <div className="input-money">
                  <input
                    id="k401"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={100}
                    step={1}
                    value={retirementPct}
                    onChange={(e) => setRetirementPct(e.target.value)}
                    style={{ paddingLeft: '0.9rem' }}
                  />
                  <span className="prefix suffix" aria-hidden="true">
                    %
                  </span>
                </div>
              </div>
              <div className="field" style={{ marginBottom: 0 }}>
                <label htmlFor="pretax">Health, HSA, FSA (per year)</label>
                <div className="input-money">
                  <span className="prefix" aria-hidden="true">
                    $
                  </span>
                  <input
                    id="pretax"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={100}
                    value={otherPreTax}
                    onChange={(e) => setOtherPreTax(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          <p className="muted" style={{ fontSize: '0.8125rem', marginTop: '1.25rem', lineHeight: 1.5 }}>
            Estimates use {taxYear} federal rates and the standard deduction for your filing status.
            {filingStatus === 'married' ? ` ${state.name} tax for joint filers is estimated by doubling the single-filer deduction and brackets.` : ''}{' '}
            401(k) deferrals skip income tax but not Social Security or Medicare; health, HSA and FSA deductions skip both.
            Local taxes, credits and extra withholding are not included.
          </p>
        </div>
      </div>

      {/* ---------------- Results ---------------- */}
      <div className="stack">
        <div className="result-hero">
          <span className="eyebrow">Your {frequencyLabels[frequency].toLowerCase()} take-home pay</span>
          <div className="result-amount">{fmt(per(r.takeHomePay))}</div>
          <div className="result-sub">
            <span>
              <b>{fmt0(r.takeHomePay)}</b> per year
            </span>
            <span>
              <b>{pct(results.effectiveRate)}</b> effective tax rate
            </span>
            <span>
              <b>{Math.round(r.federalMarginalRate * 100)}%</b> federal bracket
            </span>
          </div>

          <div className="bar" aria-hidden="true">
            <span className="c-money" style={{ width: `${results.share.net}%` }} />
            {results.share.preTax > 0 && <span className="c-pretax" style={{ width: `${results.share.preTax}%` }} />}
            <span className="c-federal" style={{ width: `${results.share.federal}%` }} />
            {results.share.state > 0 && <span className="c-state" style={{ width: `${results.share.state}%` }} />}
            <span className="c-ss" style={{ width: `${results.share.ss}%` }} />
            <span className="c-medicare" style={{ width: `${results.share.medicare}%` }} />
          </div>
          <div className="legend">
            <span>
              <i className="c-money" /> Take-home <span className="mono">{pct(results.share.net)}</span>
            </span>
            {results.share.preTax > 0 && (
              <span>
                <i className="c-pretax" /> Pre-tax <span className="mono">{pct(results.share.preTax)}</span>
              </span>
            )}
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
            <span className="badge badge-ink">
              {frequencyLabels[frequency]} · {filingStatusLabels[filingStatus]}
            </span>
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
                  <td className="num">{fmt(per(r.grossSalary))}</td>
                  <td className="num">{fmt(r.grossSalary)}</td>
                </tr>
                {[
                  ...(r.retirement > 0 ? [{ label: '401(k) contribution (pre-tax)', annual: r.retirement }] : []),
                  ...(r.otherPreTax > 0 ? [{ label: 'Health, HSA, FSA (pre-tax)', annual: r.otherPreTax }] : []),
                  { label: 'Federal income tax', annual: r.federalTax },
                  { label: `${state.name} state tax`, annual: r.stateTax },
                  { label: 'Social Security (6.2%)', annual: r.socialSecurity },
                  {
                    label: r.additionalMedicare > 0 ? 'Medicare (1.45% + 0.9% additional)' : 'Medicare (1.45%)',
                    annual: r.medicare,
                  },
                ].map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td className={`num ${row.annual > 0 ? 'neg' : ''}`} style={row.annual === 0 ? { color: 'var(--text-3)' } : undefined}>
                      {row.annual > 0 ? `−${fmt(per(row.annual))}` : fmt(0)}
                    </td>
                    <td className={`num ${row.annual > 0 ? 'neg' : ''}`} style={row.annual === 0 ? { color: 'var(--text-3)' } : undefined}>
                      {row.annual > 0 ? `−${fmt(row.annual)}` : fmt(0)}
                    </td>
                  </tr>
                ))}
                <tr className="total">
                  <td>Take-home pay</td>
                  <td className="num">{fmt(per(r.takeHomePay))}</td>
                  <td className="num">{fmt(r.takeHomePay)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
