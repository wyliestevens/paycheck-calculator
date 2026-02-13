'use client'

import { useState, useCallback } from 'react'
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
  biweekly: 'Bi-Weekly',
  semimonthly: 'Semi-Monthly',
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

export default function PaycheckCalculator({ state }: Props) {
  const [salary, setSalary] = useState<string>('75000')
  const [frequency, setFrequency] = useState<PayFrequency>('biweekly')

  const calculate = useCallback(() => {
    const annualSalary = parseFloat(salary) || 0
    const periods = frequencyMultipliers[frequency]

    const federalTax = calculateFederalTax(annualSalary)
    const stateTax = calculateStateTax(annualSalary, state)
    const { socialSecurity, medicare } = calculateFICA(annualSalary)

    const totalTaxes = federalTax + stateTax + socialSecurity + medicare
    const annualNet = annualSalary - totalTaxes
    const perPeriod = annualNet / periods

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
      netPerPeriod: perPeriod,
      effectiveRate: annualSalary > 0 ? (totalTaxes / annualSalary) * 100 : 0,
    }
  }, [salary, frequency, state])

  const results = calculate()

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })

  const pct = (n: number) => n.toFixed(1) + '%'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Input Section */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '2rem',
        }}
      >
        <h2
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
          }}
        >
          Your Income
        </h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 280px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                marginBottom: '0.5rem',
                fontWeight: 500,
              }}
            >
              Annual Gross Salary
            </label>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                }}
              >
                $
              </span>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="75000"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 2rem',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--border-focus)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                marginBottom: '0.5rem',
                fontWeight: 500,
              }}
            >
              Pay Frequency
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as PayFrequency)}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                background: 'var(--bg-input)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                outline: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--border-focus)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
            >
              {Object.entries(frequencyLabels).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Take Home Pay Hero */}
      <div
        style={{
          background: 'var(--green-bg)',
          border: '1px solid #a7f3d0',
          boxShadow: 'var(--shadow-md)',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '0.8125rem', color: 'var(--green)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Your {frequencyLabels[frequency]} Take-Home Pay
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '3rem', fontWeight: 700, color: 'var(--green)', lineHeight: 1.1 }}>
          {fmt(results.netPerPeriod)}
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          {fmt(results.annualNet)} per year &middot; Effective tax rate: {pct(results.effectiveRate)}
        </div>
      </div>

      {/* Breakdown Table */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <div style={{ padding: '1.5rem 2rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Tax Breakdown</h2>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '0.75rem 2rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 2rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Per Period</th>
              <th style={{ textAlign: 'right', padding: '0.75rem 2rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Annual</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Gross Pay', perPeriod: results.grossPerPeriod, annual: results.gross, isGross: true },
              { label: 'Federal Tax', perPeriod: -results.federalPerPeriod, annual: -results.federalTax },
              { label: `${state.name} State Tax`, perPeriod: -results.statePerPeriod, annual: -results.stateTax },
              { label: 'Social Security (6.2%)', perPeriod: -results.ssPerPeriod, annual: -results.socialSecurity },
              { label: 'Medicare (1.45%)', perPeriod: -results.medicarePerPeriod, annual: -results.medicare },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '0.875rem 2rem', fontSize: '0.9375rem', fontWeight: row.isGross ? 600 : 400 }}>{row.label}</td>
                <td style={{ textAlign: 'right', padding: '0.875rem 2rem', fontFamily: 'var(--font-mono)', fontSize: '0.9375rem', color: row.isGross ? 'var(--text-primary)' : 'var(--red)' }}>
                  {row.isGross ? fmt(row.perPeriod) : fmt(row.perPeriod)}
                </td>
                <td style={{ textAlign: 'right', padding: '0.875rem 2rem', fontFamily: 'var(--font-mono)', fontSize: '0.9375rem', color: row.isGross ? 'var(--text-primary)' : 'var(--red)' }}>
                  {row.isGross ? fmt(row.annual) : fmt(row.annual)}
                </td>
              </tr>
            ))}
            <tr style={{ background: 'var(--green-bg)' }}>
              <td style={{ padding: '1rem 2rem', fontSize: '1rem', fontWeight: 700, color: 'var(--green)' }}>Take-Home Pay</td>
              <td style={{ textAlign: 'right', padding: '1rem 2rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, color: 'var(--green)' }}>{fmt(results.netPerPeriod)}</td>
              <td style={{ textAlign: 'right', padding: '1rem 2rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, color: 'var(--green)' }}>{fmt(results.annualNet)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
