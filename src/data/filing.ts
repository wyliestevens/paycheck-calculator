import type { TaxBracket } from './states'
import { federalBrackets, federalStandardDeduction } from './states'

/**
 * Federal figures by filing status, tax year 2026.
 * Source: IRS Rev. Proc. 2025-32 (https://www.irs.gov/pub/irs-drop/rp-25-32.pdf).
 * Single values are re-exported from states.ts so there is one source of truth.
 */
export type FilingStatus = 'single' | 'married' | 'head'

export const filingStatusLabels: Record<FilingStatus, string> = {
  single: 'Single',
  married: 'Married filing jointly',
  head: 'Head of household',
}

export const federalBracketsByStatus: Record<FilingStatus, TaxBracket[]> = {
  single: federalBrackets,
  married: [
    { min: 0, max: 24800, rate: 0.1 },
    { min: 24800, max: 100800, rate: 0.12 },
    { min: 100800, max: 211400, rate: 0.22 },
    { min: 211400, max: 403550, rate: 0.24 },
    { min: 403550, max: 512450, rate: 0.32 },
    { min: 512450, max: 768700, rate: 0.35 },
    { min: 768700, max: null, rate: 0.37 },
  ],
  head: [
    { min: 0, max: 17700, rate: 0.1 },
    { min: 17700, max: 67450, rate: 0.12 },
    { min: 67450, max: 105700, rate: 0.22 },
    { min: 105700, max: 201775, rate: 0.24 },
    { min: 201775, max: 256225, rate: 0.32 },
    { min: 256225, max: 640600, rate: 0.35 },
    { min: 640600, max: null, rate: 0.37 },
  ],
}

export const federalStandardDeductionByStatus: Record<FilingStatus, number> = {
  single: federalStandardDeduction,
  married: 32200,
  head: 24150,
}

/**
 * State tables in states.ts are single-filer. Most states double the
 * standard deduction and bracket widths for joint filers; this multiplier
 * is the approximation the calculator uses (and discloses) for them.
 */
export const stateScaleByStatus: Record<FilingStatus, number> = {
  single: 1,
  married: 2,
  head: 1,
}
