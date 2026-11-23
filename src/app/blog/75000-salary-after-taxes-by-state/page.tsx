import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: '$75,000 Salary After Taxes in 2026: Take-Home Pay in All 50 States' },
  description:
    'A single filer on $75,000 keeps $61,592.50 in 2026 in a no-tax state, or $2,368.94 every two weeks. See all 50 states, the worked math, and the 401(k) cost.',
  alternates: { canonical: '/blog/75000-salary-after-taxes-by-state' },
  keywords:
    '$75000 salary after taxes, 75k salary take home pay 2026, $75000 a year biweekly paycheck, 75000 after taxes by state, how much is 75k after taxes, 75000 a year is how much an hour after taxes',
  openGraph: {
    type: 'article',
    url: '/blog/75000-salary-after-taxes-by-state',
    images: [{ url: '/og/blog/75000-salary-after-taxes-by-state', width: 1200, height: 630 }],
    title: '$75,000 Salary After Taxes in 2026: Take-Home Pay in All 50 States',
    description:
      'On $75,000 you keep $61,592.50 in Texas and $55,571.19 in Oregon. The full 50-state table, the step-by-step math, and what a 401(k) really costs you.',
  },
}

const p = { fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' } as const
const h2 = { fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' } as const
const h3 = { fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' } as const
const link = { color: '#2563eb', textDecoration: 'underline' } as const
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const table = { width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' } as const
const th = { padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' } as const
const thR = { ...th, textAlign: 'right' } as const
const td = { padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' } as const
const tdR = { ...td, textAlign: 'right', fontFamily: "'JetBrains Mono', monospace" } as const
const note = { fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' } as const
const mono = {
  background: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  padding: '1rem 1.25rem',
  marginBottom: '1.5rem',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.9375rem',
  color: '#1e293b',
  lineHeight: 1.8,
  whiteSpace: 'pre-wrap',
} as const

// [state, slug, state income tax, annual take-home, monthly, biweekly]
// Computed with this site's calculator: $75,000, single filer, standard deduction, tax year 2026.
const stateRows: [string, string, string, string, string, string][] = [
  ['Alaska', 'alaska', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['Florida', 'florida', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['Nevada', 'nevada', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['New Hampshire', 'new-hampshire', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['South Dakota', 'south-dakota', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['Tennessee', 'tennessee', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['Texas', 'texas', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['Washington', 'washington', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['Wyoming', 'wyoming', '$0.00', '$61,592.50', '$5,132.71', '$2,368.94'],
  ['North Dakota', 'north-dakota', '$1,326.71', '$60,265.79', '$5,022.15', '$2,317.92'],
  ['Ohio', 'ohio', '$1,346.13', '$60,246.38', '$5,020.53', '$2,317.17'],
  ['Arizona', 'arizona', '$1,510.00', '$60,082.50', '$5,006.88', '$2,310.87'],
  ['Louisiana', 'louisiana', '$1,875.00', '$59,717.50', '$4,976.46', '$2,296.83'],
  ['Indiana', 'indiana', '$2,287.50', '$59,305.00', '$4,942.08', '$2,280.96'],
  ['Iowa', 'iowa', '$2,295.20', '$59,297.30', '$4,941.44', '$2,280.67'],
  ['Pennsylvania', 'pennsylvania', '$2,302.50', '$59,290.00', '$4,940.83', '$2,280.38'],
  ['Rhode Island', 'rhode-island', '$2,416.88', '$59,175.63', '$4,931.30', '$2,275.99'],
  ['North Carolina', 'north-carolina', '$2,483.78', '$59,108.73', '$4,925.73', '$2,273.41'],
  ['Vermont', 'vermont', '$2,510.90', '$59,081.60', '$4,923.47', '$2,272.37'],
  ['New Jersey', 'new-jersey', '$2,651.25', '$58,941.25', '$4,911.77', '$2,266.97'],
  ['Colorado', 'colorado', '$2,657.60', '$58,934.90', '$4,911.24', '$2,266.73'],
  ['New Mexico', 'new-mexico', '$2,680.10', '$58,912.40', '$4,909.37', '$2,265.86'],
  ['Arkansas', 'arkansas', '$2,754.54', '$58,837.96', '$4,903.16', '$2,263.00'],
  ['Missouri', 'missouri', '$2,789.36', '$58,803.14', '$4,900.26', '$2,261.66'],
  ['Nebraska', 'nebraska', '$2,841.46', '$58,751.04', '$4,895.92', '$2,259.66'],
  ['Kentucky', 'kentucky', '$2,873.60', '$58,718.90', '$4,893.24', '$2,258.42'],
  ['Wisconsin', 'wisconsin', '$2,887.17', '$58,705.33', '$4,892.11', '$2,257.90'],
  ['West Virginia', 'west-virginia', '$2,951.50', '$58,641.00', '$4,886.75', '$2,255.42'],
  ['South Carolina', 'south-carolina', '$3,000.30', '$58,592.20', '$4,882.68', '$2,253.55'],
  ['Oklahoma', 'oklahoma', '$3,072.38', '$58,520.13', '$4,876.68', '$2,250.77'],
  ['California', 'california', '$3,112.63', '$58,479.87', '$4,873.32', '$2,249.23'],
  ['Michigan', 'michigan', '$3,187.50', '$58,405.00', '$4,867.08', '$2,246.35'],
  ['Mississippi', 'mississippi', '$3,198.80', '$58,393.70', '$4,866.14', '$2,245.91'],
  ['Georgia', 'georgia', '$3,269.70', '$58,322.80', '$4,860.23', '$2,243.18'],
  ['Montana', 'montana', '$3,317.60', '$58,274.90', '$4,856.24', '$2,241.34'],
  ['Utah', 'utah', '$3,375.00', '$58,217.50', '$4,851.46', '$2,239.13'],
  ['Maryland', 'maryland', '$3,388.88', '$58,203.63', '$4,850.30', '$2,238.60'],
  ['Idaho', 'idaho', '$3,503.20', '$58,089.30', '$4,840.78', '$2,234.20'],
  ['Alabama', 'alabama', '$3,585.00', '$58,007.50', '$4,833.96', '$2,231.06'],
  ['Virginia', 'virginia', '$3,595.00', '$57,997.50', '$4,833.13', '$2,230.67'],
  ['Kansas', 'kansas', '$3,618.00', '$57,974.50', '$4,831.21', '$2,229.79'],
  ['Minnesota', 'minnesota', '$3,649.40', '$57,943.11', '$4,828.59', '$2,228.58'],
  ['Connecticut', 'connecticut', '$3,675.00', '$57,917.50', '$4,826.46', '$2,227.60'],
  ['Delaware', 'delaware', '$3,701.50', '$57,891.00', '$4,824.25', '$2,226.58'],
  ['New York', 'new-york', '$3,705.85', '$57,886.65', '$4,823.89', '$2,226.41'],
  ['Illinois', 'illinois', '$3,712.50', '$57,880.00', '$4,823.33', '$2,226.15'],
  ['Massachusetts', 'massachusetts', '$3,750.00', '$57,842.50', '$4,820.21', '$2,224.71'],
  ['Maine', 'maine', '$3,829.53', '$57,762.98', '$4,813.58', '$2,221.65'],
  ['Hawaii', 'hawaii', '$5,259.60', '$56,332.90', '$4,694.41', '$2,166.65'],
  ['Oregon', 'oregon', '$6,021.31', '$55,571.19', '$4,630.93', '$2,137.35'],
]

const periodRows: [string, string, string][] = [
  ['Yearly', '1', '$61,592.50'],
  ['Monthly (12)', '12', '$5,132.71'],
  ['Semimonthly (24)', '24', '$2,566.35'],
  ['Biweekly (26)', '26', '$2,368.94'],
  ['Weekly (52)', '52', '$1,184.47'],
  ['Per hour (2,080 hours)', '2,080', '$29.61'],
]

const filingRows: [string, string, string, string][] = [
  ['Single', '$7,670.00', '22%', '$61,592.50'],
  ['Head of household', '$5,748.00', '12%', '$63,514.50'],
  ['Married filing jointly (one income)', '$4,640.00', '12%', '$64,622.50'],
]

// [401(k) %, contribution, Texas take-home, California take-home, New York take-home]
const k401Rows: [string, string, string, string, string][] = [
  ['0%', '$0', '$61,592.50', '$58,479.87', '$57,886.65'],
  ['3%', '$2,250', '$59,837.50', '$56,919.30', '$56,263.28'],
  ['6%', '$4,500', '$58,082.50', '$55,344.30', '$54,639.90'],
  ['10%', '$7,500', '$55,742.50', '$53,244.30', '$52,475.40'],
  ['15%', '$11,250', '$52,542.50', '$50,344.30', '$49,494.78'],
]

export default function Salary75000AfterTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className="sep">/</span>
        <a href="/blog">Guides</a>
      </nav>

      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="A $75,000 salary shrinking to $61,592.50 of take-home pay in a no-tax state and $55,571.19 in Oregon"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          <text x="40" y="52" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">GROSS SALARY</text>
          <rect x="40" y="62" width="520" height="22" rx="4" fill="rgba(255,255,255,0.85)" />
          <text x="300" y="78" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0891b2" fontFamily="monospace">$75,000</text>
          <text x="40" y="108" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">TAKE-HOME, NO-TAX STATE</text>
          <rect x="40" y="116" width="427" height="18" rx="4" fill="rgba(255,255,255,0.6)" />
          <text x="476" y="130" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">$61,592</text>
          <text x="40" y="154" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">TAKE-HOME, OREGON</text>
          <rect x="40" y="160" width="385" height="12" rx="4" fill="rgba(255,255,255,0.4)" />
          <text x="434" y="171" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">$55,571</text>
        </svg>
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#1e293b',
          marginBottom: '0.5rem',
        }}
      >
        $75,000 Salary After Taxes in 2026: Take-Home Pay in All 50 States
      </h1>

      <ArticleMeta slug="75000-salary-after-taxes-by-state" />

      {/* In short */}
      <div
        style={{
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#d97706', marginBottom: '0.5rem' }}>
          In short
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          A single filer earning $75,000 in 2026 keeps <strong>$61,592.50 a year</strong> in a state with no income tax. That is <strong>$5,132.71 a month</strong> or <strong>$2,368.94 every two weeks</strong>. In the typical state you keep about $58,735, and in Oregon, the most expensive state at this salary, you keep $55,571.19. Federal income tax takes $7,670 and Social Security plus Medicare take $5,737.50 no matter where you live.
        </p>
      </div>

      <p style={p}>
        $75,000 is a common salary for mid-career office jobs, experienced nurses, skilled trades, and many first engineering roles. It is also a salary where small choices start to matter. Your state can move your yearly take-home by more than $6,000. A 401(k) contribution costs you less than it looks. And a lot of online calculators still get the federal tax wrong because they use last year&rsquo;s numbers.
      </p>

      <p style={p}>
        Every figure in this guide comes from this site&rsquo;s own paycheck calculator for a single filer taking the standard deduction, with no other pre-tax deductions. It uses the 2026 federal brackets and the $16,100 standard deduction from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" {...ext} style={link}>IRS Revenue Procedure 2025-32</a>, Social Security at 6.2% on wages up to $184,500 per the{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" {...ext} style={link}>SSA contribution and benefit base</a>, and Medicare at 1.45%.
      </p>

      <h2 style={h2}>How much is $75,000 a year after taxes?</h2>

      <p style={p}>
        Start with the part that is the same everywhere. Three taxes come out of every $75,000 paycheck in the country: federal income tax, Social Security, and Medicare. Together they take <strong>$13,407.50</strong>, which leaves <strong>$61,592.50</strong>. If you live in one of the nine states with no tax on wages, that is your answer.
      </p>

      <p style={p}>
        Those nine states are Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Our guide to{' '}
        <a href="/blog/states-with-no-income-tax" style={link}>states with no income tax</a> covers what each one taxes instead. Everywhere else, state income tax comes out on top of the federal figure, and it ranges from about $1,300 to about $6,000 at this salary.
      </p>

      <p style={p}>
        Here is how $61,592.50 breaks down by how often you get paid. The hourly line divides by 2,080, which is 40 hours times 52 weeks.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Pay frequency</th>
              <th style={thR}>Paychecks</th>
              <th style={thR}>Take-home per check</th>
            </tr>
          </thead>
          <tbody>
            {periodRows.map(([label, n, amt], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{label}</td>
                <td style={tdR}>{n}</td>
                <td style={{ ...tdR, color: '#059669', fontWeight: 600 }}>{amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>No-income-tax state, single filer, standard deduction, 2026. Before $75,000 is taxed, it works out to $36.06 an hour.</p>

      <p style={p}>
        Biweekly and semimonthly look close, but they are not the same. Biweekly gives you 26 checks, so two months a year bring a third paycheck. Semimonthly gives you 24 larger checks on fixed dates. Our{' '}
        <a href="/blog/weekly-vs-biweekly-vs-monthly-pay" style={link}>pay frequency guide</a> explains how to budget for each.
      </p>

      <h2 style={h2}>How is the federal tax on $75,000 calculated?</h2>

      <p style={p}>
        You do not pay 22% on your whole salary, even though $75,000 puts you in the 22% bracket. The IRS taxes income in layers. Only the slice above $50,400 of taxable income is taxed at 22%. Here is every step, from gross pay to net pay, for a single filer in Texas.
      </p>

      <div style={mono}>
{`Gross salary                          $75,000.00
Standard deduction                   -$16,100.00
Federal taxable income                $58,900.00

Federal income tax by bracket
  10% on first $12,400                 $1,240.00
  12% on $12,400 to $50,400            $4,560.00
       ($38,000 x 12%)
  22% on $50,400 to $58,900            $1,870.00
       ($8,500 x 22%)
Federal income tax                     $7,670.00

Social Security  $75,000 x 6.2%        $4,650.00
Medicare         $75,000 x 1.45%       $1,087.50
State income tax (Texas)                   $0.00

Total taxes                           $13,407.50
Take-home pay                         $61,592.50
Per biweekly check ($61,592.50 / 26)   $2,368.94`}
      </div>

      <p style={p}>
        Three numbers are worth remembering from this box. Your <strong>marginal rate</strong> is 22%, which is what you pay on your next dollar of income. Your <strong>effective federal income tax rate</strong> is only 10.2% ($7,670 divided by $75,000). And your <strong>total tax rate</strong>, counting FICA, is 17.9%. If the bracket math is new to you, our{' '}
        <a href="/blog/tax-brackets-explained" style={link}>tax brackets explained</a> guide walks through it with more examples.
      </p>

      <h3 style={h3}>Two mistakes that make $75,000 look smaller than it is</h3>

      <p style={p}>
        <strong>Mistake 1: applying 22% to everything.</strong> If you multiply your $58,900 of taxable income by 22%, you get $12,958. The real figure is $7,670. That mistake overstates your federal tax by <strong>$5,288 a year</strong>, about $203 per biweekly check. People who make it sometimes turn down a raise or extra shifts because they think the government takes most of it.
      </p>

      <p style={p}>
        <strong>Mistake 2: using last year&rsquo;s standard deduction.</strong> Some calculators that rank for this search still subtract $15,000 instead of the 2026 figure of $16,100. That leaves $1,100 too much income in the 22% bracket, so they overstate your federal tax by <strong>$242 a year</strong>. If a calculator shows more than $7,670 of federal tax for a single filer at $75,000 with no other deductions, it is using old figures.
      </p>

      <h2 style={h2}>$75,000 after taxes in every state</h2>

      <p style={p}>
        This table ranks all 50 states from the most take-home to the least. The federal tax, Social Security, and Medicare lines are identical in every row. Only the state income tax column changes. Click a state to run your own numbers with that state&rsquo;s calculator.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>State</th>
              <th style={thR}>State tax</th>
              <th style={thR}>Take-home / year</th>
              <th style={thR}>Per month</th>
              <th style={thR}>Biweekly</th>
            </tr>
          </thead>
          <tbody>
            {stateRows.map(([name, slug, tax, year, month, biweekly], i) => (
              <tr key={slug} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{name}</a>
                </td>
                <td style={{ ...tdR, color: tax === '$0.00' ? '#94a3b8' : '#dc2626' }}>{tax}</td>
                <td style={{ ...tdR, color: '#059669', fontWeight: 600 }}>{year}</td>
                <td style={tdR}>{month}</td>
                <td style={tdR}>{biweekly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Single filer, standard deduction, no pre-tax deductions, tax year 2026. State figures use each state&rsquo;s income tax table in this site&rsquo;s calculator. They do not include city or county income taxes or state payroll programs like disability insurance.
      </p>

      <h3 style={h3}>What the table tells you</h3>

      <p style={p}>
        The gap between the top and the bottom is <strong>$6,021.31 a year</strong>, about $231.59 per biweekly check. That is the difference between a no-tax state and{' '}
        <a href="/oregon" style={link}>Oregon</a>, where the state income tax rate reaches 8.75% on taxable income above $10,750. Hawaii is the only other state where state tax passes $5,000 at this salary.
      </p>

      <p style={p}>
        The middle of the table is tightly packed. From North Dakota (rank 10) to Maine (rank 48), take-home only moves about $2,500. If you are comparing two job offers in two tax states, the state tax difference at $75,000 is usually a few hundred dollars a year, not thousands. Rent, commuting, and health premiums will often matter more. Our{' '}
        <a href="/blog/compare-job-offers-across-states" style={link}>job offer comparison guide</a> shows how to weigh those.
      </p>

      <p style={p}>
        Low flat-tax states land near the top: Arizona ($60,082.50), Indiana ($59,305.00), and Pennsylvania ($59,290.00). Large progressive-tax states like{' '}
        <a href="/california" style={link}>California</a> ($58,479.87) and{' '}
        <a href="/new-york" style={link}>New York</a> ($57,886.65) fall in the bottom half but not at the bottom. California&rsquo;s top rates are steep, but they start far above $75,000.
      </p>

      <h2 style={h2}>Why your real paycheck in California is smaller than the table shows</h2>

      <p style={p}>
        Income tax is not the only state deduction. California also withholds State Disability Insurance, which funds disability and paid family leave benefits. The{' '}
        <a href="https://edd.ca.gov/en/payroll_taxes/rates_and_withholding/" {...ext} style={link}>California EDD</a> sets the 2026 SDI rate at <strong>1.3%</strong> of wages, with no wage cap. On $75,000 that is <strong>$975 a year</strong>, or $37.50 per biweekly check.
      </p>

      <div style={mono}>
{`California take-home from the table     $58,479.87
SDI  $75,000 x 1.3%                       -$975.00
Take-home after SDI                     $57,504.87
Per biweekly check ($57,504.87 / 26)     $2,211.73`}
      </div>

      <p style={p}>
        With SDI included, a California worker at $75,000 takes home about $4,088 less per year than a Texas worker at the same salary. Several other states run similar programs, including New Jersey, New York, Rhode Island, Washington, Oregon, Colorado, and Massachusetts. Our{' '}
        <a href="/blog/state-disability-insurance-sdi-paycheck" style={link}>state disability insurance guide</a> covers what each one takes. If you live in a city with its own income tax, such as New York City, Philadelphia, or many Ohio cities, see the{' '}
        <a href="/blog/local-income-taxes-2026" style={link}>local income tax guide</a> as well.
      </p>

      <h2 style={h2}>Does filing status change take-home on $75,000?</h2>

      <p style={p}>
        Yes, and by more than most people expect. Withholding is based on the filing status you choose on your W-4. A head of household filer gets a bigger standard deduction and wider brackets. A married couple filing jointly on one $75,000 income gets double the single standard deduction and drops into the 12% bracket entirely.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Filing status</th>
              <th style={thR}>Federal tax</th>
              <th style={thR}>Top bracket</th>
              <th style={thR}>Take-home (Texas)</th>
            </tr>
          </thead>
          <tbody>
            {filingRows.map(([status, fed, bracket, take], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{status}</td>
                <td style={{ ...tdR, color: '#dc2626' }}>{fed}</td>
                <td style={tdR}>{bracket}</td>
                <td style={{ ...tdR, color: '#059669', fontWeight: 600 }}>{take}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>$75,000 of wages, standard deduction, no other income, 2026 federal tables. Social Security and Medicare are the same $5,737.50 in every row.</p>

      <p style={p}>
        The joint figure assumes your spouse has no income. If both of you work, the math changes, and checking the two-earner box on the W-4 matters. Our guide to{' '}
        <a href="/blog/how-marriage-changes-your-taxes" style={link}>how marriage changes your taxes</a> explains when that box saves you from a tax bill in April.
      </p>

      <h2 style={h2}>How much does a 401(k) cost you on a $75,000 salary?</h2>

      <p style={p}>
        A 401(k) contribution comes out before income tax, so each dollar you save lowers your federal tax and, in most states, your state tax too. It does not lower Social Security or Medicare. The result is that saving $4,500 a year shrinks your take-home by less than $4,500.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>401(k) rate</th>
              <th style={thR}>You save</th>
              <th style={thR}>Texas</th>
              <th style={thR}>California</th>
              <th style={thR}>New York</th>
            </tr>
          </thead>
          <tbody>
            {k401Rows.map(([pct, saved, tx, ca, ny], i) => (
              <tr key={pct} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{pct}</td>
                <td style={tdR}>{saved}</td>
                <td style={{ ...tdR, color: '#059669' }}>{tx}</td>
                <td style={{ ...tdR, color: '#059669' }}>{ca}</td>
                <td style={{ ...tdR, color: '#059669' }}>{ny}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>Annual take-home after the 401(k) contribution, single filer, 2026. California figures do not include SDI.</p>

      <p style={p}>
        Look at the 6% row. In Texas you put $4,500 into your 401(k), but your take-home falls by only <strong>$3,510</strong>, because federal tax drops by $990. In California the hit is <strong>$3,135.57</strong>, and in New York it is $3,246.75, because the state tax drops too. Put another way, every $100 you save costs a Texas worker about $78 of spending money and a California worker about $70.
      </p>

      <p style={p}>
        At this salary, every 401(k) dollar comes out of income taxed at 22%, as long as your taxable income stays above $50,400. At 15%, you would still be at $47,650 of taxable income, so the last part of that contribution only saves 12%. A simple decision rule: at $75,000, contributing enough to get the full employer match is almost always worth it, since the match is free money and the tax break covers part of your share.
      </p>

      <p style={p}>
        The 2026 employee limit is <strong>$24,500</strong>, with an extra $8,000 catch-up if you are 50 or older, according to the{' '}
        <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" {...ext} style={link}>IRS 2026 limit announcement</a>. On $75,000, the limit only binds if you save more than about 32% of your pay. For more detail on how deferrals show up on a pay stub, see{' '}
        <a href="/blog/how-401k-contributions-affect-your-paycheck" style={link}>how 401(k) contributions affect your paycheck</a>.
      </p>

      <h2 style={h2}>What is a $5,000 raise worth at $75,000?</h2>

      <p style={p}>
        Going from $75,000 to $80,000 in Texas raises take-home from $61,592.50 to <strong>$65,110.00</strong>. That is $3,517.50 more a year, or about $135.29 more per biweekly check. You keep 70.35% of the raise: the other 29.65% is the 22% federal bracket plus 7.65% for Social Security and Medicare. In a state with income tax, subtract your state&rsquo;s top rate from that 70.35% as well.
      </p>

      <p style={p}>
        The same math holds in reverse. Dropping from $75,000 to $70,000 costs you $3,517.50 of take-home in Texas, not $5,000. That is worth knowing if you are weighing a lower-paying job with better benefits or a shorter commute. To see the other salary bands, compare this guide with{' '}
        <a href="/blog/60000-salary-after-taxes-by-state" style={link}>$60,000 after taxes</a> and{' '}
        <a href="/blog/100000-salary-after-taxes-by-state" style={link}>$100,000 after taxes</a>.
      </p>

      <h2 style={h2}>Is $75,000 a good salary after taxes?</h2>

      <p style={p}>
        It depends far more on where you live than on the tax line. $61,592.50 in a no-tax state is about $5,133 a month to spend or save. A common budgeting rule says to keep housing near 30% of take-home, which would mean rent around $1,540 a month. In many metro areas that is tight. In many smaller cities it is comfortable.
      </p>

      <p style={p}>
        Your actual paycheck will also be smaller than this guide&rsquo;s figures if you pay for health insurance through work. Premiums usually come out pre-tax under a Section 125 plan, which lowers your income tax and FICA a little, but they still reduce your check. Our{' '}
        <a href="/blog/good-salary-by-state" style={link}>good salary by state</a> guide puts take-home next to living costs so you can judge it for your area.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>How much is $75,000 a year biweekly after taxes?</h3>
      <p style={p}>
        For a single filer in a state with no income tax, $75,000 is about <strong>$2,368.94</strong> per biweekly paycheck in 2026. In the typical state it is about $2,259. In Oregon it is $2,137.35. Health premiums and retirement contributions will lower those figures.
      </p>

      <h3 style={h3}>How much is $75,000 a year per hour after taxes?</h3>
      <p style={p}>
        Before taxes, $75,000 is $36.06 an hour for a 40-hour, 52-week year. After federal tax and FICA in a no-tax state, it is about <strong>$29.61 an hour</strong>. In Oregon it falls to about $26.72.
      </p>

      <h3 style={h3}>What tax bracket is $75,000 in for 2026?</h3>
      <p style={p}>
        A single filer at $75,000 is in the <strong>22% federal bracket</strong>, because taxable income after the $16,100 standard deduction is $58,900. Only the $8,500 above $50,400 is taxed at 22%. A married couple filing jointly on that income would be in the 12% bracket.
      </p>

      <h3 style={h3}>Why is my $75,000 paycheck smaller than these numbers?</h3>
      <p style={p}>
        The most common reasons are pre-tax health, dental, or vision premiums, a 401(k) contribution, a state payroll program like California SDI, or a city income tax. Extra withholding on your W-4 also lowers each check, though you get it back as a refund. Our{' '}
        <a href="/blog/how-to-read-your-pay-stub" style={link}>pay stub guide</a> shows where to find each line.
      </p>

      <h3 style={h3}>Which state takes the most from a $75,000 salary?</h3>
      <p style={p}>
        In this site&rsquo;s calculator, Oregon takes the most, at $6,021.31 of state income tax, followed by Hawaii at $5,259.60. That leaves $55,571.19 and $56,332.90 of take-home. The nine no-income-tax states take nothing from wages.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#ecfdf5',
          border: '1px solid #a7f3d0',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          Run Your Own $75,000 Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Add your state, filing status, 401(k) rate, and health premiums to see your exact take-home per paycheck.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#059669',
            color: '#ffffff',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.9375rem',
          }}
        >
          Try the Free Paycheck Calculator
        </a>
      </div>

      {/* Sources */}
      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginTop: '2rem', marginBottom: '0.75rem' }}>
        Sources
      </h3>
      <ul style={{ fontSize: '0.875rem', lineHeight: 1.75, color: '#475569', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Revenue Procedure 2025-32 (2026 tax brackets and standard deductions)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA, Contribution and Benefit Base (2026 wage base of $184,500)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 751: Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, 401(k) limit increases to $24,500 for 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://edd.ca.gov/en/payroll_taxes/rates_and_withholding/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California EDD, Contribution Rates and Withholding Schedules (2026 SDI rate)</a>
        </li>
      </ul>

      <ArticleFooter current="75000-salary-after-taxes-by-state" />
    </article>
  )
}
