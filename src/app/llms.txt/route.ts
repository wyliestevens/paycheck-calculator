import { states, federalBrackets, federalStandardDeduction, socialSecurityWageCap, additionalMedicareThreshold, taxYear, taxDataUpdated, usd } from '@/data/states'
import { blogPosts } from '@/data/blog'
import { salaryAmounts, salaryToSlug, formatSalary } from '@/lib/tax-calculator'
import { canonicalUrl, authorName, authorPath } from '@/lib/seo'

export const dynamic = 'force-static'

/**
 * llms.txt — structured guidance for AI crawlers and assistants.
 * Generated from the same data as the site so it never goes stale as the
 * daily routine adds guides.
 */
export function GET() {
  const noTax = states.filter((s) => !s.hasStateTax)
  const sortedPosts = [...blogPosts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))

  const lines: string[] = [
    '# PaycheckCalc (paycheck.center)',
    '',
    `> Free paycheck calculator for all 50 US states. Calculate take-home pay after federal, state, Social Security, and Medicare taxes using ${taxYear} rates, plus plain-English guides on payroll taxes and withholding. Also known as Paycheck Center.`,
    '',
    '## About',
    '',
    `PaycheckCalc is a free online tool that helps employees and job seekers estimate take-home pay in any US state. Calculations run in the browser; no financial data is transmitted or stored. Built and maintained by ${authorName} (${canonicalUrl(authorPath)}), founder of AI Peak Biz (https://www.aipeakbiz.com). Contact: contact@aipeakbiz.com. Methodology: ${canonicalUrl('/about#methodology')}.`,
    '',
    `## Key facts (${taxYear}, single filer; verified ${taxDataUpdated})`,
    '',
    `- Federal standard deduction: ${usd(federalStandardDeduction)}`,
    `- Federal brackets: ${federalBrackets
      .map((b) => (b.max ? `${Math.round(b.rate * 100)}% to ${usd(b.max)}` : `${Math.round(b.rate * 100)}% above`))
      .join('; ')}`,
    `- Social Security tax: 6.2% on wages up to ${usd(socialSecurityWageCap)}`,
    `- Medicare tax: 1.45% on all wages (plus 0.9% Additional Medicare Tax above ${usd(additionalMedicareThreshold)})`,
    '- Sources: IRS Rev. Proc. 2025-32 (https://www.irs.gov/pub/irs-drop/rp-25-32.pdf); SSA 2026 COLA fact sheet (https://www.ssa.gov/news/press/factsheets/colafacts2026.pdf)',
    `- States with no income tax (${noTax.length}): ${noTax.map((s) => s.name).join(', ')}`,
    '',
    '## Main pages',
    '',
    `- [Home](${canonicalUrl('/')}): State search and links to all 50 calculators`,
    `- [Guides](${canonicalUrl('/blog')}): ${blogPosts.length} articles on paychecks, withholding, and taxes`,
    `- [About](${canonicalUrl('/about')}): Who runs the site, methodology, sources and corrections policy`,
    `- [Author: ${authorName}](${canonicalUrl(authorPath)}): Bio and how the guides are produced`,
    `- [Contact](${canonicalUrl('/contact')}): FAQ and contact information`,
    '',
    '## State calculators',
    '',
    `Each state has an interactive calculator at \`${canonicalUrl('/{state-slug}')}\`. Salary snapshot pages exist at \`${canonicalUrl('/{state-slug}/{amount}-salary')}\` for these amounts: ${salaryAmounts.map((a) => formatSalary(a)).join(', ')}.`,
    '',
    ...states.map((s) => {
      const rate = !s.hasStateTax
        ? 'no state income tax'
        : s.taxType === 'flat'
        ? `flat ${(s.flatRate! * 100).toFixed(2)}%`
        : `progressive, top rate ${(s.brackets![s.brackets!.length - 1].rate * 100).toFixed(2)}%`
      return `- [${s.name} paycheck calculator](${canonicalUrl(`/${s.slug}`)}): ${rate}. Example: [${formatSalary(75000)} in ${s.name}](${canonicalUrl(`/${s.slug}/${salaryToSlug(75000)}`)})`
    }),
    '',
    '## Guides (newest first)',
    '',
    ...sortedPosts.slice(0, 30).map((p) => `- [${p.title}](${canonicalUrl(`/blog/${p.slug}`)}) (${p.publishDate}): ${p.excerpt}`),
    '',
    '## Sources',
    '',
    '- [IRS Rev. Proc. 2025-32](https://www.irs.gov/pub/irs-drop/rp-25-32.pdf): tax year 2026 brackets and standard deduction',
    '- [SSA 2026 COLA fact sheet](https://www.ssa.gov/news/press/factsheets/colafacts2026.pdf): Social Security wage base',
    '- [IRS Topic 751](https://www.irs.gov/taxtopics/tc751): Social Security and Medicare withholding rates',
    '',
    '## Optional',
    '',
    ...sortedPosts.slice(30).map((p) => `- [${p.title}](${canonicalUrl(`/blog/${p.slug}`)}) (${p.publishDate})`),
    `- [Privacy policy](${canonicalUrl('/privacy')})`,
    `- [Terms of service](${canonicalUrl('/terms')})`,
    '',
    '## Limitations',
    '',
    '- Single filer only (married filing jointly not yet supported)',
    '- Does not account for pre-tax deductions (401(k), health insurance)',
    '- Does not include local or city income taxes',
    '- Estimates only; consult a tax professional for precise figures',
    '',
    '## Machine-readable resources',
    '',
    `- Sitemap: ${canonicalUrl('/sitemap.xml')}`,
    `- Robots: ${canonicalUrl('/robots.txt')}`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
