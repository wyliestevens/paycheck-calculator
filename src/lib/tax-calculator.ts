import {
  federalBrackets,
  federalStandardDeduction,
  socialSecurityRate,
  socialSecurityWageCap,
  medicareRate,
  type StateData,
} from '@/data/states'

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

function calculateProgressiveTax(taxableIncome: number, brackets: { min: number; max: number | null; rate: number }[]): number {
  let tax = 0
  for (const bracket of brackets) {
    if (taxableIncome <= bracket.min) break
    const upper = bracket.max ?? Infinity
    const taxableInBracket = Math.min(taxableIncome, upper) - bracket.min
    tax += taxableInBracket * bracket.rate
  }
  return tax
}

export function calculateTakeHome(grossSalary: number, state: StateData): TakeHomeResult {
  // Federal tax
  const federalTaxableIncome = Math.max(0, grossSalary - federalStandardDeduction)
  const federalTax = calculateProgressiveTax(federalTaxableIncome, federalBrackets)

  // State tax
  let stateTax = 0
  if (state.hasStateTax) {
    const stateTaxableIncome = Math.max(0, grossSalary - state.standardDeduction)
    if (state.taxType === 'flat' && state.flatRate) {
      stateTax = stateTaxableIncome * state.flatRate
    } else if (state.brackets) {
      stateTax = calculateProgressiveTax(stateTaxableIncome, state.brackets)
    }
  }

  // FICA
  const socialSecurity = Math.min(grossSalary, socialSecurityWageCap) * socialSecurityRate
  const medicare = grossSalary * medicareRate

  const totalDeductions = federalTax + stateTax + socialSecurity + medicare
  const takeHomePay = grossSalary - totalDeductions
  const effectiveRate = grossSalary > 0 ? totalDeductions / grossSalary : 0

  return {
    grossSalary: Math.round(grossSalary * 100) / 100,
    federalTax: Math.round(federalTax * 100) / 100,
    stateTax: Math.round(stateTax * 100) / 100,
    socialSecurity: Math.round(socialSecurity * 100) / 100,
    medicare: Math.round(medicare * 100) / 100,
    totalDeductions: Math.round(totalDeductions * 100) / 100,
    takeHomePay: Math.round(takeHomePay * 100) / 100,
    effectiveRate: Math.round(effectiveRate * 10000) / 10000,
  }
}
