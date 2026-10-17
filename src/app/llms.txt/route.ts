import { states } from '@/data/states'
import { blogPosts } from '@/data/blog'
import { salaryAmounts, salaryToSlug, formatSalary } from '@/lib/tax-calculator'
import { canonicalUrl } from '@/lib/seo'

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
    '> Free paycheck calculator for all 50 US states. Calculate take-home pay after federal, state, Social Security, and Medicare taxes using 2026 rates, plus plain-English guides on payroll taxes and withholding.',
    '',
    '## About',
    '',
    'PaycheckCalc is a free online tool that helps employees and job seekers estimate take-home pay in any US state. Calculations run in the browser; no financial data is transmitted or stored. Operated by AI Peak Biz (https://www.aipeakbiz.com). Contact: contact@aipeakbiz.com.',
    '',
    '## Key facts (2026, single filer)',
    '',
    '- Federal standard deduction: $15,000',
    '- Federal brackets: 10% to $11,925; 12% to $48,475; 22% to $103,350; 24% to $197,300; 32% to $250,525; 35% to $626,350; 37% above',
    '- Social Security tax: 6.2% on wages up to $168,600',
    '- Medicare tax: 1.45% on all wages (plus 0.9% Additional Medicare Tax above $200,000)',
    `- States with no income tax (${noTax.length}): ${noTax.map((s) => s.name).join(', ')}`,
    '',
    '## Main pages',
    '',
    `- [Home](${canonicalUrl('/')}): State search and links to all 50 calculators`,
    `- [Guides](${canonicalUrl('/blog')}): ${blogPosts.length} articles on paychecks, withholding, and taxes`,
    `- [About](${canonicalUrl('/about')}): Mission and methodology`,
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
    ...sortedPosts.map((p) => `- [${p.title}](${canonicalUrl(`/blog/${p.slug}`)}) (${p.publishDate}): ${p.excerpt}`),
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
