import { states, federalBrackets, federalStandardDeduction, type StateData } from '@/data/states'
import { neighbors } from '@/data/neighbors'
import { calculateTakeHome, salaryAmounts, type TakeHomeResult } from '@/lib/tax-calculator'

/** Standard full-time year used for hourly conversions (40 h × 52 wk). */
export const hoursPerYear = 2080

export function hourlyRate(annual: number): number {
  return annual / hoursPerYear
}

/** The federal bracket a salary's last dollar falls in, after the standard deduction. */
export function federalMarginal(annual: number, status: 'single' = 'single'): { rate: number; floor: number; ceiling: number | null; taxable: number } {
  const taxable = Math.max(0, annual - federalStandardDeduction)
  const b = federalBrackets.find((br) => taxable >= br.min && (br.max === null || taxable < br.max)) ?? federalBrackets[0]
  void status
  return { rate: b.rate, floor: b.min, ceiling: b.max, taxable }
}

/** The state bracket (progressive states) a salary's last dollar falls in. */
export function stateMarginal(annual: number, state: StateData): number {
  if (!state.hasStateTax) return 0
  if (state.taxType === 'flat') return state.flatRate ?? 0
  const taxable = Math.max(0, annual - state.standardDeduction)
  const b = state.brackets?.find((br) => taxable >= br.min && (br.max === null || taxable < br.max))
  return b?.rate ?? 0
}

export interface StateRanking {
  /** 1 = highest take-home of the 50 states at this salary. */
  rank: number
  keepMore: number
  keepLess: number
  tiedWith: number
  best: { state: StateData; result: TakeHomeResult }
  worst: { state: StateData; result: TakeHomeResult }
  /** Difference in annual take-home vs the median state. */
  vsMedian: number
}

export function rankState(state: StateData, annual: number): StateRanking {
  const all = states
    .map((s) => ({ state: s, result: calculateTakeHome(annual, s) }))
    .sort((a, b) => b.result.takeHomePay - a.result.takeHomePay)
  const mine = calculateTakeHome(annual, state).takeHomePay
  const keepMore = all.filter((x) => x.result.takeHomePay > mine + 0.5).length
  const keepLess = all.filter((x) => x.result.takeHomePay < mine - 0.5).length
  const tiedWith = all.length - keepMore - keepLess - 1
  const median = all[Math.floor(all.length / 2)].result.takeHomePay
  return {
    rank: keepMore + 1,
    keepMore,
    keepLess,
    tiedWith,
    best: all[0],
    worst: all[all.length - 1],
    vsMedian: mine - median,
  }
}

export interface NeighborRow {
  state: StateData
  result: TakeHomeResult
  /** Positive when the neighbour keeps more than the current state. */
  delta: number
}

/** Bordering states at the same salary, best take-home first. Alaska and Hawaii fall back to the no-tax states. */
export function neighborComparison(state: StateData, annual: number): NeighborRow[] {
  const mine = calculateTakeHome(annual, state).takeHomePay
  const abbrs = neighbors[state.abbreviation] ?? []
  const pool = abbrs.length
    ? states.filter((s) => abbrs.includes(s.abbreviation))
    : states.filter((s) => !s.hasStateTax && s.slug !== state.slug).slice(0, 5)
  return pool
    .map((s) => {
      const result = calculateTakeHome(annual, s)
      return { state: s, result, delta: result.takeHomePay - mine }
    })
    .sort((a, b) => b.result.takeHomePay - a.result.takeHomePay)
}

/** What the next listed salary step is worth after tax, to show the real marginal gain. */
export function nextStep(state: StateData, annual: number): { amount: number; grossGain: number; netGain: number; keptShare: number } | null {
  const i = salaryAmounts.indexOf(annual)
  const next = i >= 0 ? salaryAmounts[i + 1] : undefined
  if (!next) return null
  const here = calculateTakeHome(annual, state).takeHomePay
  const there = calculateTakeHome(next, state).takeHomePay
  const grossGain = next - annual
  const netGain = there - here
  return { amount: next, grossGain, netGain, keptShare: grossGain > 0 ? netGain / grossGain : 0 }
}

/** The 8 states with the highest and lowest take-home at this salary, for the compare grid. */
export function compareSet(state: StateData, annual: number): StateData[] {
  const nb = neighborComparison(state, annual).map((r) => r.state)
  const ranked = states
    .filter((s) => s.slug !== state.slug && !nb.includes(s))
    .map((s) => ({ s, t: calculateTakeHome(annual, s).takeHomePay }))
    .sort((a, b) => b.t - a.t)
  const top = ranked.slice(0, 2).map((x) => x.s)
  const bottom = ranked.slice(-2).map((x) => x.s)
  const seen = new Set<string>()
  return [...nb, ...top, ...bottom].filter((s) => (seen.has(s.slug) ? false : (seen.add(s.slug), true))).slice(0, 8)
}
