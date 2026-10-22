import {
  federalBrackets,
  federalStandardDeduction,
  socialSecurityRate,
  socialSecurityWageCap,
  medicareRate,
  additionalMedicareThreshold,
  type StateData,
  type TaxBracket,
} from '@/data/states'
import {
  federalBracketsByStatus,
  federalStandardDeductionByStatus,
  stateScaleByStatus,
  type FilingStatus,
} from '@/data/filing'

export interface TakeHomeResult {
  grossSalary: number
  federalTax: number
  stateTax: number
  socialSecurity: number
  medicare: number
  totalDeductions: number
  takeHomePay: number
  effectiveRate: number
}

/** Full paycheck inputs. Everything is annual; the UI converts per-period. */
export interface PaycheckInput {
  state: StateData
  grossSalary: number
  filingStatus?: FilingStatus
  /** 401(k)/403(b) deferral as a share of gross (0.06 = 6%). Pre-tax for income tax only. */
  retirementPct?: number
  /** Annual Section 125 deductions (health, dental, HSA, FSA). Pre-tax for income tax AND FICA. */
  otherPreTax?: number
}

export interface PaycheckResult extends TakeHomeResult {
  filingStatus: FilingStatus
  retirement: number
  otherPreTax: number
  federalTaxable: number
  stateTaxable: number
  additionalMedicare: number
  /** Marginal federal rate on the next dollar. */
  federalMarginalRate: number
}

export const salaryAmounts = [
  30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000,
  80000, 85000, 90000, 95000, 100000, 110000, 120000, 130000, 140000, 150000,
  175000, 200000, 250000, 300000,
]

export function formatSalary(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`
}

export function parseSalarySlug(slug: string): number | null {
  const match = slug.match(/^(\d+)-salary$/)
  if (!match) return null
  const amount = parseInt(match[1], 10)
  return salaryAmounts.includes(amount) ? amount : null
}

export function salaryToSlug(amount: number): string {
  return `${amount}-salary`
}

function progressiveTax(taxableIncome: number, brackets: TaxBracket[]): number {
  let tax = 0
  for (const bracket of brackets) {
    if (taxableIncome <= bracket.min) break
    const upper = bracket.max ?? Infinity
    const taxableInBracket = Math.min(taxableIncome, upper) - bracket.min
    tax += taxableInBracket * bracket.rate
  }
  return tax
}

function marginalRate(taxableIncome: number, brackets: TaxBracket[]): number {
  const b = brackets.find((br) => taxableIncome >= br.min && (br.max === null || taxableIncome < br.max))
  return b?.rate ?? brackets[0].rate
}

/** Additional Medicare Tax threshold by filing status (not inflation-indexed). */
function additionalMedicareThresholdFor(status: FilingStatus): number {
  return status === 'married' ? 250000 : additionalMedicareThreshold
}

const round2 = (n: number) => Math.round(n * 100) / 100

/**
 * The single engine every page and the interactive calculator use.
 * Defaults (single, no pre-tax deductions) reproduce the salary pages.
 */
export function calculatePaycheck(input: PaycheckInput): PaycheckResult {
  const { state } = input
  const filingStatus: FilingStatus = input.filingStatus ?? 'single'
  const gross = Math.max(0, input.grossSalary)
  const retirement = Math.min(gross, gross * Math.max(0, input.retirementPct ?? 0))
  const otherPreTax = Math.min(Math.max(0, gross - retirement), Math.max(0, input.otherPreTax ?? 0))

  // Federal income tax
  const brackets = federalBracketsByStatus[filingStatus] ?? federalBrackets
  const deduction = federalStandardDeductionByStatus[filingStatus] ?? federalStandardDeduction
  const federalTaxable = Math.max(0, gross - retirement - otherPreTax - deduction)
  const federalTax = progressiveTax(federalTaxable, brackets)
  const federalMarginalRate = marginalRate(federalTaxable, brackets)

  // State income tax. Tables are single-filer; joint filers get doubled
  // deduction and bracket widths, which is how most states structure it.
  let stateTax = 0
  let stateTaxable = 0
  if (state.hasStateTax) {
    const scale = stateScaleByStatus[filingStatus] ?? 1
    stateTaxable = Math.max(0, gross - retirement - otherPreTax - state.standardDeduction * scale)
    if (state.taxType === 'flat' && state.flatRate) {
      stateTax = stateTaxable * state.flatRate
    } else if (state.brackets) {
      const scaled = scale === 1 ? state.brackets : state.brackets.map((b) => ({ ...b, min: b.min * scale, max: b.max === null ? null : b.max * scale }))
      stateTax = progressiveTax(stateTaxable, scaled)
    }
  }

  // FICA on wages after Section 125 deductions (401(k) deferrals are still FICA wages)
  const ficaWages = Math.max(0, gross - otherPreTax)
  const socialSecurity = Math.min(ficaWages, socialSecurityWageCap) * socialSecurityRate
  const additionalMedicare = Math.max(0, ficaWages - additionalMedicareThresholdFor(filingStatus)) * 0.009
  const medicare = ficaWages * medicareRate + additionalMedicare

  const totalDeductions = federalTax + stateTax + socialSecurity + medicare
  const takeHomePay = gross - retirement - otherPreTax - totalDeductions
  const effectiveRate = gross > 0 ? totalDeductions / gross : 0

  return {
    filingStatus,
    grossSalary: round2(gross),
    retirement: round2(retirement),
    otherPreTax: round2(otherPreTax),
    federalTaxable: round2(federalTaxable),
    stateTaxable: round2(stateTaxable),
    federalTax: round2(federalTax),
    federalMarginalRate,
    stateTax: round2(stateTax),
    socialSecurity: round2(socialSecurity),
    medicare: round2(medicare),
    additionalMedicare: round2(additionalMedicare),
    totalDeductions: round2(totalDeductions),
    takeHomePay: round2(takeHomePay),
    effectiveRate: Math.round(effectiveRate * 10000) / 10000,
  }
}

/** Single filer, standard deduction, no pre-tax deductions: the salary-page case. */
export function calculateTakeHome(grossSalary: number, state: StateData): TakeHomeResult {
  const r = calculatePaycheck({ state, grossSalary })
  return {
    grossSalary: r.grossSalary,
    federalTax: r.federalTax,
    stateTax: r.stateTax,
    socialSecurity: r.socialSecurity,
    medicare: r.medicare,
    totalDeductions: r.totalDeductions,
    takeHomePay: r.takeHomePay,
    effectiveRate: r.effectiveRate,
  }
}
