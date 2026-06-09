export interface BlogPost {
  title: string
  slug: string
  publishDate: string
  excerpt: string
  keywords: string
  readingTime: string
  heroColor: string
  heroIcon: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'What Are Paycheck Deductions? A Complete Breakdown for 2026',
    slug: 'paycheck-deductions-explained',
    publishDate: '2026-05-26',
    excerpt: 'Your gross pay and take-home pay are two very different numbers. Learn exactly what gets taken out of your paycheck and why.',
    keywords: 'paycheck deductions explained, what comes out of my paycheck, paycheck deductions 2026',
    readingTime: '8 min read',
    heroColor: '#2563eb',
    heroIcon: '$',
  },
  {
    title: 'FICA Taxes Explained: Social Security and Medicare in 2026',
    slug: 'fica-taxes-explained',
    publishDate: '2026-05-29',
    excerpt: 'FICA takes 7.65% of every paycheck. Here\'s exactly where that money goes and what you get back for it.',
    keywords: 'FICA tax 2026, Social Security tax rate, Medicare tax rate, FICA withholding',
    readingTime: '6 min read',
    heroColor: '#059669',
    heroIcon: '%',
  },
  {
    title: 'The 9 States With No Income Tax in 2026 (Ranked by Total Tax Burden)',
    slug: 'states-with-no-income-tax',
    publishDate: '2026-06-01',
    excerpt: 'Nine states don\'t tax your income — but that doesn\'t always mean you\'ll pay less in taxes overall. Here\'s the full picture.',
    keywords: 'states with no income tax 2026, no state tax states, tax-free states',
    readingTime: '9 min read',
    heroColor: '#059669',
    heroIcon: '0',
  },
  {
    title: 'Highest and Lowest State Income Tax Rates in 2026',
    slug: 'state-income-tax-rates-ranked',
    publishDate: '2026-06-04',
    excerpt: 'From California\'s 13.3% to North Dakota\'s 1.95%, here\'s every state\'s income tax rate ranked from highest to lowest.',
    keywords: 'state income tax rates 2026, state tax rates ranked, highest state taxes',
    readingTime: '7 min read',
    heroColor: '#dc2626',
    heroIcon: '#',
  },
  {
    title: 'How to Compare Job Offers Across States: A Take-Home Pay Guide',
    slug: 'compare-job-offers-across-states',
    publishDate: '2026-06-08',
    excerpt: 'A $90K offer in Texas might beat a $100K offer in California. Learn how to compare job offers by what you actually keep.',
    keywords: 'compare salary across states, job offer different state, relocate for work taxes',
    readingTime: '8 min read',
    heroColor: '#7c3aed',
    heroIcon: '?',
  },
  {
    title: 'What Is a Good Salary in Each US State? (2026 Cost-Adjusted)',
    slug: 'good-salary-by-state',
    publishDate: '2026-06-11',
    excerpt: '$75,000 goes a lot further in Mississippi than in Hawaii. Here\'s what counts as a good salary in every state when you factor in taxes and cost of living.',
    keywords: 'good salary by state 2026, average salary by state, livable wage by state',
    readingTime: '10 min read',
    heroColor: '#d97706',
    heroIcon: '~',
  },
  {
    title: 'Tax Brackets Explained: Why a Raise Won\'t Make You Poorer',
    slug: 'tax-brackets-explained',
    publishDate: '2026-05-28',
    excerpt: 'Getting a raise won\'t push all your income into a higher tax bracket. Here\'s how marginal taxation actually works — with real numbers.',
    keywords: 'tax brackets explained 2026, marginal tax rate, effective tax rate, higher tax bracket raise, does a raise increase taxes',
    readingTime: '7 min read',
    heroColor: '#0891b2',
    heroIcon: '%',
  },
  {
    title: 'How 401(k) Contributions Affect Your Paycheck in 2026',
    slug: 'how-401k-contributions-affect-your-paycheck',
    publishDate: '2026-05-29',
    excerpt: 'Contributing $4,500 to a 401(k) only costs you $3,510 in take-home pay — the government covers the rest through lower taxes. Here\'s the exact math.',
    keywords: '401k paycheck, how 401k affects take home pay, 401k contribution 2026, 401k tax savings, pre-tax 401k',
    readingTime: '8 min read',
    heroColor: '#7c3aed',
    heroIcon: 'k',
  },
  {
    title: 'How Bonuses Are Taxed: The 22% Rule Explained (2026)',
    slug: 'how-bonuses-are-taxed',
    publishDate: '2026-06-01',
    excerpt: 'Your employer withholds 22% from most bonuses — but that\'s just an estimate, not your final tax bill. Here\'s exactly how bonus taxation works.',
    keywords: 'how bonuses are taxed, bonus tax rate 2026, 22 percent bonus tax, supplemental wage withholding, bonus take home pay',
    readingTime: '8 min read',
    heroColor: '#ea580c',
    heroIcon: '$',
  },
  {
    title: 'Understanding Your W-4: How to Fill It Out Correctly (2026)',
    slug: 'understanding-your-w4',
    publishDate: '2026-06-02',
    excerpt: 'The W-4 controls how much federal tax comes out of every paycheck. Here\'s a step-by-step guide to filling it out correctly — with real dollar examples.',
    keywords: 'how to fill out W-4, W-4 2026, W-4 instructions, federal tax withholding form, W-4 multiple jobs, W-4 dependents',
    readingTime: '8 min read',
    heroColor: '#2563eb',
    heroIcon: 'W',
  },
  {
    title: 'W-2 vs 1099: How Your Taxes Are Different (2026)',
    slug: 'w2-vs-1099-taxes',
    publishDate: '2026-06-04',
    excerpt: 'W-2 employees and 1099 contractors pay taxes very differently. Learn what self-employment tax costs and which setup nets more take-home pay.',
    keywords: 'W-2 vs 1099 taxes, 1099 contractor taxes, self-employment tax 2026, W-2 employee vs contractor, 1099 take-home pay',
    readingTime: '9 min read',
    heroColor: '#0f766e',
    heroIcon: 'C',
  },
  {
    title: 'How Overtime Pay Is Taxed in 2026',
    slug: 'how-overtime-pay-is-taxed',
    publishDate: '2026-06-05',
    excerpt: 'Overtime is not taxed at a special rate — it is ordinary income. Here is exactly how overtime gets taxed, why withholding looks higher, and a worked dollar example at $20/hr.',
    keywords: 'how overtime is taxed, overtime tax rate 2026, overtime pay taxes, overtime withholding, is overtime taxed more',
    readingTime: '8 min read',
    heroColor: '#d97706',
    heroIcon: '+',
  },
  {
    title: 'How to Read Your Pay Stub Line by Line (2026 Guide)',
    slug: 'how-to-read-your-pay-stub',
    publishDate: '2026-06-08',
    excerpt: 'Confused by the numbers on your pay stub? This guide walks through every line — gross pay, FICA, withholding, YTD totals — in plain English with real examples.',
    keywords: 'how to read a pay stub, pay stub explained, paycheck stub lines, OASDI on pay stub, YTD pay stub, pay stub deductions 2026',
    readingTime: '9 min read',
    heroColor: '#0369a1',
    heroIcon: 'P',
  },
  {
    title: 'Hourly vs Salary: How Pay Structure Affects Your Take-Home Pay',
    slug: 'hourly-vs-salary-taxes',
    publishDate: '2026-06-09',
    excerpt: 'A $20/hr job and a $41,600 salary pay the same gross amount — but overtime rights, employer benefits, and income stability create real differences in what you actually keep.',
    keywords: 'hourly vs salary taxes, hourly vs salary take home pay, overtime tax hourly worker, exempt vs nonexempt FLSA, salary take home pay 2026',
    readingTime: '8 min read',
    heroColor: '#0891b2',
    heroIcon: 'H',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
