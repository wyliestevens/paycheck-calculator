import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: '$100,000 Salary After Taxes in 2026: Take-Home Pay in Every State' },
  description:
    'A $100,000 salary leaves a single filer $79,180 in a no-tax state and $70,971 in Oregon in 2026. See all 50 states, per-paycheck pay, and the real 401(k) cost.',
  alternates: { canonical: '/blog/100000-salary-after-taxes-by-state' },
  keywords:
    '$100000 salary after taxes, 100k salary take home pay 2026, $100k after taxes by state, 100000 a year biweekly paycheck, how much is 100k after taxes',
  openGraph: {
    type: 'article',
    url: '/blog/100000-salary-after-taxes-by-state',
    images: [{ url: '/og/blog/100000-salary-after-taxes-by-state', width: 1200, height: 630 }],
    title: '$100,000 Salary After Taxes in 2026: Take-Home Pay in Every State',
    description:
      'A single filer earning $100,000 keeps $79,180 in a no-tax state and $70,971 in Oregon in 2026. All 50 states, per-paycheck figures, and the true cost of a 401(k).',
  },
}

const p = { fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' } as const
const h2 = { fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' } as const
const h3 = { fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' } as const
const link = { color: '#2563eb', textDecoration: 'underline' } as const
const table = { width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', border: '1px solid #e2e8f0' } as const
const th = { padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' } as const
const thR = { ...th, textAlign: 'right' } as const
const td = { padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' } as const
const tdR = { ...td, textAlign: 'right', fontFamily: "'JetBrains Mono', monospace" } as const
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
  overflowX: 'auto',
} as const

// Output of this site's calculator (calculateTakeHome), single filer, standard deduction, $100,000 gross.
// [rank, state, slug, state tax, take-home, biweekly, monthly, total effective rate]
const stateRows: [number, string, string, string, string, string, string, string][] = [
  [1, 'Alaska', 'alaska', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [1, 'Florida', 'florida', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [1, 'Nevada', 'nevada', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [1, 'New Hampshire', 'new-hampshire', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [1, 'South Dakota', 'south-dakota', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [1, 'Tennessee', 'tennessee', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [1, 'Texas', 'texas', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [1, 'Washington', 'washington', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [1, 'Wyoming', 'wyoming', '$0', '$79,180', '$3,045', '$6,598', '20.8%'],
  [10, 'Ohio', 'ohio', '$2,034', '$77,146', '$2,967', '$6,429', '22.9%'],
  [11, 'North Dakota', 'north-dakota', '$2,052', '$77,128', '$2,966', '$6,427', '22.9%'],
  [12, 'Arizona', 'arizona', '$2,135', '$77,045', '$2,963', '$6,420', '23.0%'],
  [13, 'Louisiana', 'louisiana', '$2,625', '$76,555', '$2,944', '$6,380', '23.4%'],
  [14, 'Indiana', 'indiana', '$3,050', '$76,130', '$2,928', '$6,344', '23.9%'],
  [15, 'Pennsylvania', 'pennsylvania', '$3,070', '$76,110', '$2,927', '$6,343', '23.9%'],
  [16, 'Iowa', 'iowa', '$3,245', '$75,935', '$2,921', '$6,328', '24.1%'],
  [17, 'Rhode Island', 'rhode-island', '$3,474', '$75,706', '$2,912', '$6,309', '24.3%'],
  [18, 'North Carolina', 'north-carolina', '$3,481', '$75,699', '$2,911', '$6,308', '24.3%'],
  [19, 'Arkansas', 'arkansas', '$3,730', '$75,450', '$2,902', '$6,288', '24.6%'],
  [20, 'Colorado', 'colorado', '$3,758', '$75,422', '$2,901', '$6,285', '24.6%'],
  [21, 'Kentucky', 'kentucky', '$3,874', '$75,306', '$2,896', '$6,276', '24.7%'],
  [22, 'New Mexico', 'new-mexico', '$3,905', '$75,275', '$2,895', '$6,273', '24.7%'],
  [23, 'Nebraska', 'nebraska', '$3,979', '$75,201', '$2,892', '$6,267', '24.8%'],
  [24, 'Missouri', 'missouri', '$3,989', '$75,191', '$2,892', '$6,266', '24.8%'],
  [25, 'Vermont', 'vermont', '$4,161', '$75,019', '$2,885', '$6,252', '25.0%'],
  [26, 'Wisconsin', 'wisconsin', '$4,212', '$74,968', '$2,883', '$6,247', '25.0%'],
  [27, 'West Virginia', 'west-virginia', '$4,232', '$74,949', '$2,883', '$6,246', '25.1%'],
  [28, 'New Jersey', 'new-jersey', '$4,244', '$74,936', '$2,882', '$6,245', '25.1%'],
  [29, 'Michigan', 'michigan', '$4,250', '$74,930', '$2,882', '$6,244', '25.1%'],
  [30, 'Oklahoma', 'oklahoma', '$4,260', '$74,920', '$2,882', '$6,243', '25.1%'],
  [31, 'Mississippi', 'mississippi', '$4,299', '$74,881', '$2,880', '$6,240', '25.1%'],
  [32, 'Utah', 'utah', '$4,500', '$74,680', '$2,872', '$6,223', '25.3%'],
  [32, 'South Carolina', 'south-carolina', '$4,500', '$74,680', '$2,872', '$6,223', '25.3%'],
  [34, 'Georgia', 'georgia', '$4,567', '$74,613', '$2,870', '$6,218', '25.4%'],
  [35, 'Maryland', 'maryland', '$4,576', '$74,604', '$2,869', '$6,217', '25.4%'],
  [36, 'Montana', 'montana', '$4,793', '$74,387', '$2,861', '$6,199', '25.6%'],
  [37, 'Alabama', 'alabama', '$4,835', '$74,345', '$2,859', '$6,195', '25.7%'],
  [38, 'Illinois', 'illinois', '$4,950', '$74,230', '$2,855', '$6,186', '25.8%'],
  [39, 'Idaho', 'idaho', '$4,953', '$74,227', '$2,855', '$6,186', '25.8%'],
  [40, 'Massachusetts', 'massachusetts', '$5,000', '$74,180', '$2,853', '$6,182', '25.8%'],
  [41, 'Virginia', 'virginia', '$5,033', '$74,148', '$2,852', '$6,179', '25.9%'],
  [42, 'Kansas', 'kansas', '$5,043', '$74,137', '$2,851', '$6,178', '25.9%'],
  [43, 'Connecticut', 'connecticut', '$5,050', '$74,130', '$2,851', '$6,178', '25.9%'],
  [44, 'New York', 'new-york', '$5,214', '$73,966', '$2,845', '$6,164', '26.0%'],
  [45, 'Minnesota', 'minnesota', '$5,349', '$73,831', '$2,840', '$6,153', '26.2%'],
  [46, 'Delaware', 'delaware', '$5,352', '$73,829', '$2,840', '$6,152', '26.2%'],
  [47, 'California', 'california', '$5,438', '$73,742', '$2,836', '$6,145', '26.3%'],
  [48, 'Maine', 'maine', '$5,612', '$73,568', '$2,830', '$6,131', '26.4%'],
  [49, 'Hawaii', 'hawaii', '$7,322', '$71,858', '$2,764', '$5,988', '28.1%'],
  [50, 'Oregon', 'oregon', '$8,209', '$70,971', '$2,730', '$5,914', '29.0%'],
]

export default function HundredKSalaryAfterTaxes() {
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
          aria-label="Bar chart comparing take-home pay on a $100,000 salary: $79,180 in Texas, $73,742 in California, and $70,971 in Oregon"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          <text x="40" y="52" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">GROSS SALARY</text>
          <text x="40" y="86" fontSize="34" fontWeight="800" fill="#fff" fontFamily="monospace">$100K</text>
          <text x="40" y="112" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Single filer, 2026</text>
          <text x="40" y="150" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">What you keep after</text>
          <text x="40" y="166" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">federal, state, and FICA</text>
          {/* Bars: width scaled to take-home */}
          <text x="230" y="58" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Texas</text>
          <rect x="310" y="44" width="200" height="20" rx="4" fill="rgba(255,255,255,0.85)" />
          <text x="560" y="59" textAnchor="end" fontSize="12" fontWeight="700" fill="#fff" fontFamily="monospace">$79,180</text>
          <text x="230" y="103" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">California</text>
          <rect x="310" y="89" width="186" height="20" rx="4" fill="rgba(255,255,255,0.6)" />
          <text x="560" y="104" textAnchor="end" fontSize="12" fontWeight="700" fill="#fff" fontFamily="monospace">$73,742</text>
          <text x="230" y="148" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Oregon</text>
          <rect x="310" y="134" width="179" height="20" rx="4" fill="rgba(255,255,255,0.4)" />
          <text x="560" y="149" textAnchor="end" fontSize="12" fontWeight="700" fill="#fff" fontFamily="monospace">$70,971</text>
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
        $100,000 Salary After Taxes in 2026: Take-Home Pay in Every State
      </h1>

      <ArticleMeta slug="100000-salary-after-taxes-by-state" />

      {/* In short */}
      <div
        style={{
          background: '#eef2ff',
          border: '1px solid #c7d2fe',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '0.5rem' }}>
          In short
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          A single filer earning $100,000 in 2026 keeps <strong>$79,180</strong> a year in a state with no income tax, which is about <strong>$3,045 every two weeks</strong>. In a state with an income tax, take-home ranges from $77,146 in Ohio down to $70,971 in Oregon. Federal income tax is $13,170, Social Security is $6,200, and Medicare is $1,450 no matter where you live.
        </p>
      </div>

      <p style={p}>
        Six figures is a milestone, and it is also the point where a lot of people are surprised by their first paycheck. The offer letter says $100,000. The deposit says something closer to $3,000. This guide shows exactly where the other money goes, how much your state changes the answer, and what happens to the number when you are married, put money in a 401(k), or get your next raise.
      </p>

      <p style={p}>
        Every figure in the tables below comes from this site&rsquo;s own paycheck calculator, using the 2026 federal brackets and standard deduction from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={link}>IRS Revenue Procedure 2025-32</a>. Unless a section says otherwise, the case is a single filer who takes the standard deduction and has no pre-tax deductions. Local city or county income taxes are not included.
      </p>

      <h2 style={h2}>How much is $100,000 a year after taxes?</h2>

      <p style={p}>
        In a state without a wage income tax, a $100,000 salary becomes <strong>$79,180</strong> of take-home pay. That means $20,820 goes to taxes, an all-in rate of 20.8%. Here is how that splits up:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Line item</th>
              <th style={thR}>Annual</th>
              <th style={thR}>Share of gross</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross salary', '$100,000', '100.0%'],
              ['Federal income tax', '$13,170', '13.2%'],
              ['Social Security (6.2%)', '$6,200', '6.2%'],
              ['Medicare (1.45%)', '$1,450', '1.5%'],
              ['State income tax (no-tax state)', '$0', '0.0%'],
            ].map(([label, amt, share], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{label}</td>
                <td style={tdR}>{amt}</td>
                <td style={tdR}>{share}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ ...td, fontWeight: 700, color: '#1e293b', borderTop: '2px solid #e2e8f0' }}>Take-home pay</td>
              <td style={{ ...tdR, fontWeight: 700, color: '#1e293b', borderTop: '2px solid #e2e8f0' }}>$79,180</td>
              <td style={{ ...tdR, fontWeight: 700, color: '#1e293b', borderTop: '2px solid #e2e8f0' }}>79.2%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={p}>
        Notice that federal income tax is only 13.2% of your salary, even though you are in the 22% bracket. That gap is the most misunderstood part of a six-figure paycheck, so the next section walks through it one step at a time.
      </p>

      <h2 style={h2}>How is federal tax calculated on $100,000?</h2>

      <p style={p}>
        The IRS does not tax your whole salary at one rate. First it subtracts the 2026 standard deduction of $16,100. Then it taxes what is left in layers, and each layer has its own rate. Only the dollars inside the 22% layer are taxed at 22%. You can see all seven 2026 brackets in our{' '}
        <a href="/blog/federal-tax-brackets-2026" style={link}>federal tax brackets guide</a>.
      </p>

      <div style={mono}>
        <div><strong>Step 1. Taxable income</strong></div>
        <div>$100,000 gross &minus; $16,100 standard deduction = $83,900</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 2. Federal income tax by bracket</strong></div>
        <div>10% on the first $12,400 = $1,240</div>
        <div>12% on $12,400 to $50,400 ($38,000) = $4,560</div>
        <div>22% on $50,400 to $83,900 ($33,500) = $7,370</div>
        <div>Federal income tax = <strong>$13,170</strong></div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 3. FICA (on the full $100,000)</strong></div>
        <div>Social Security: $100,000 &times; 6.2% = $6,200</div>
        <div>Medicare: $100,000 &times; 1.45% = $1,450</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 4. Net pay (no state income tax)</strong></div>
        <div>$100,000 &minus; $13,170 &minus; $6,200 &minus; $1,450 = <strong>$79,180</strong></div>
        <div>Biweekly: $79,180 &divide; 26 = <strong>$3,045.38</strong></div>
      </div>

      <p style={p}>
        Two details matter here. FICA has no standard deduction, so Social Security and Medicare apply to every dollar of your wages. And at $100,000 you are well below the 2026 Social Security wage base of $184,500 (
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={link}>SSA, Contribution and Benefit Base</a>
        ) and the $200,000 point where the 0.9% Additional Medicare Tax starts (
        <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={link}>IRS Topic 560</a>
        ), so neither one changes your math. If you want the full picture on those payroll taxes, see{' '}
        <a href="/blog/fica-taxes-explained" style={link}>FICA taxes explained</a>.
      </p>

      <h2 style={h2}>What is $100,000 after taxes in each state?</h2>

      <p style={p}>
        Federal tax and FICA are identical in all 50 states. State income tax is the only thing that changes, and on a $100,000 salary it moves your take-home by up to $8,209 a year. That is about $316 per biweekly paycheck between the best and worst state in the table. States are ranked from most to least take-home. Click a state to run your own numbers.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>#</th>
              <th style={th}>State</th>
              <th style={thR}>State tax</th>
              <th style={thR}>Take-home</th>
              <th style={thR}>Biweekly</th>
              <th style={thR}>Monthly</th>
              <th style={thR}>All-in rate</th>
            </tr>
          </thead>
          <tbody>
            {stateRows.map(([rank, name, slug, tax, net, bw, mo, rate], i) => (
              <tr key={slug} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{rank}</td>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb' }}>{name}</a>
                </td>
                <td style={{ ...tdR, color: tax === '$0' ? '#059669' : '#dc2626' }}>{tax}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{net}</td>
                <td style={tdR}>{bw}</td>
                <td style={tdR}>{mo}</td>
                <td style={tdR}>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Figures from this site&rsquo;s calculator for tax year 2026, single filer, standard deduction, no pre-tax deductions, rounded to the dollar. &ldquo;All-in rate&rdquo; is federal, state, Social Security, and Medicare as a share of gross. Washington taxes some capital gains but not wages. New Hampshire does not tax wages.
      </p>

      <h3 style={h3}>What the table leaves out</h3>

      <p style={p}>
        Three things can make your real paycheck smaller than this table in some states. First, several states run their own payroll deductions for disability or paid family leave, such as California SDI and the New Jersey and New York programs. Those come out of your check on top of income tax. Our{' '}
        <a href="/blog/state-disability-insurance-sdi-paycheck" style={link}>guide to state disability insurance</a> covers which states have them. Second, some cities and counties tax wages, including New York City, many Ohio cities, Pennsylvania municipalities, and Maryland counties. See{' '}
        <a href="/blog/local-income-taxes-2026" style={link}>local income taxes</a>. Third, health insurance and retirement deductions shrink the deposit but also shrink your taxes, which the 401(k) section below shows in dollars.
      </p>

      <h2 style={h2}>How much is a $100,000 salary per paycheck?</h2>

      <p style={p}>
        Your pay schedule does not change your yearly taxes, only how the money is sliced. Here is the no-tax-state take-home of $79,180 under each common schedule, next to California at $73,742 for comparison.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Pay schedule</th>
              <th style={thR}>Checks per year</th>
              <th style={thR}>Gross per check</th>
              <th style={thR}>Net, no-tax state</th>
              <th style={thR}>Net, California</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Weekly', '52', '$1,923.08', '$1,522.69', '$1,418.12'],
              ['Biweekly', '26', '$3,846.15', '$3,045.38', '$2,836.24'],
              ['Semimonthly', '24', '$4,166.67', '$3,299.17', '$3,072.60'],
              ['Monthly', '12', '$8,333.33', '$6,598.33', '$6,145.20'],
            ].map(([sched, n, gross, tx, ca], i) => (
              <tr key={sched} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{sched}</td>
                <td style={tdR}>{n}</td>
                <td style={tdR}>{gross}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{tx}</td>
                <td style={tdR}>{ca}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={p}>
        A common budgeting mistake: people paid biweekly treat their check as half a month. Two biweekly checks are $6,090.76, but your true monthly average is $6,598.33, because 26 checks do not fit evenly into 12 months. Twice a year you get a third check. If you build your budget on two checks a month, those extra two checks (about $6,091 in a no-tax state) are money you can plan for instead of losing track of. Our{' '}
        <a href="/blog/weekly-vs-biweekly-vs-monthly-pay" style={link}>pay frequency guide</a> explains how to use them.
      </p>

      <h2 style={h2}>Does being married change take-home on $100,000?</h2>

      <p style={p}>
        Yes, by a lot, if you are the only earner. Married couples filing jointly get a $32,200 standard deduction and brackets twice as wide as a single filer&rsquo;s. Heads of household get a $24,150 deduction and a wider 12% bracket. Those figures come from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={link}>Rev. Proc. 2025-32</a>. Here is the same $100,000 salary, one earner, under each filing status:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Filing status</th>
              <th style={thR}>Federal tax</th>
              <th style={thR}>Texas take-home</th>
              <th style={thR}>California take-home</th>
              <th style={thR}>North Carolina take-home</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single', '$13,170', '$79,180', '$73,742', '$75,699'],
              ['Head of household', '$9,588', '$82,762', '$77,324', '$79,281'],
              ['Married filing jointly', '$7,640', '$84,710', '$82,129', '$81,737'],
            ].map(([fs, fed, tx, ca, nc], i) => (
              <tr key={fs} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{fs}</td>
                <td style={tdR}>{fed}</td>
                <td style={tdR}>{tx}</td>
                <td style={tdR}>{ca}</td>
                <td style={tdR}>{nc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={p}>
        A one-earner married couple in Texas keeps $5,530 more than a single person on the same salary. The married filer&rsquo;s math: $100,000 minus $32,200 leaves $67,800 of taxable income. Ten percent of the first $24,800 is $2,480, and 12% of the remaining $43,000 is $5,160, for $7,640 total. The top dollar lands in the 12% bracket, not 22%.
      </p>

      <p style={p}>
        The catch is withholding. Your employer withholds based on the W-4 you filed, not your actual tax return. If you marry and never update your W-4, you will keep getting single-rate withholding and collect the difference as a refund the next spring. If both spouses work, the opposite risk applies: each job withholds as if it were the only income, which can leave you short. The{' '}
        <a href="/blog/understanding-your-w4" style={link}>W-4 guide</a> and{' '}
        <a href="/blog/tax-filing-status-explained" style={link}>filing status guide</a> walk through both cases. The calculator figures for California and North Carolina double the state&rsquo;s single-filer deduction and brackets for joint filers, which is how most states structure it, so treat those as close estimates.
      </p>

      <h2 style={h2}>How much does a 401(k) really cost you at $100,000?</h2>

      <p style={p}>
        For 2026 you can put up to $24,500 into a 401(k), plus an $8,000 catch-up if you are 50 or older (
        <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer" style={link}>IRS, 2026 401(k) limits</a>
        ). Traditional 401(k) money comes out before federal income tax and, in most states, before state income tax. It does not escape Social Security or Medicare. So every dollar you save costs you less than a dollar of take-home pay.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Traditional 401(k)</th>
              <th style={thR}>Saved per year</th>
              <th style={thR}>Texas take-home</th>
              <th style={thR}>Texas cost</th>
              <th style={thR}>California take-home</th>
              <th style={thR}>California cost</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0%', '$0', '$79,180', '$0', '$73,742', '$0'],
              ['3%', '$3,000', '$76,840', '$2,340', '$71,681', '$2,061'],
              ['6%', '$6,000', '$74,500', '$4,680', '$69,620', '$4,122'],
              ['10%', '$10,000', '$71,380', '$7,800', '$66,872', '$6,870'],
              ['15%', '$15,000', '$67,480', '$11,700', '$63,437', '$10,305'],
              ['24.5% (max)', '$24,500', '$60,070', '$19,110', '$56,911', '$16,831'],
            ].map(([pct, saved, tx, txc, ca, cac], i) => (
              <tr key={pct} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{pct}</td>
                <td style={tdR}>{saved}</td>
                <td style={tdR}>{tx}</td>
                <td style={{ ...tdR, color: '#dc2626' }}>{txc}</td>
                <td style={tdR}>{ca}</td>
                <td style={{ ...tdR, color: '#dc2626' }}>{cac}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={p}>
        Read the &ldquo;cost&rdquo; columns as the drop in your yearly take-home. Saving 6% puts $6,000 in your account but lowers your Texas take-home by only $4,680, which is $180 per biweekly check. The other $1,320 is federal income tax you no longer owe, because each dollar comes off the top of your 22% bracket. In California the cost is even lower, $4,122, since the contribution also cuts state tax.
      </p>

      <p style={p}>
        Here is a decision rule that falls out of the table: on a $100,000 single-filer salary, a traditional 401(k) dollar costs you about 78 cents in a no-tax state and about 69 cents in California. If your employer matches, say, 50 cents on the dollar up to 6%, you turn $4,680 of Texas take-home into $9,000 of retirement savings. Skipping the match to keep that $180 per check is the most expensive paycheck decision most people at this salary make. For Roth versus traditional tradeoffs, see{' '}
        <a href="/blog/how-401k-contributions-affect-your-paycheck" style={link}>how 401(k) contributions affect your paycheck</a>.
      </p>

      <p style={p}>
        Health insurance premiums paid through a Section 125 plan go one step further: they skip FICA too. In the calculator, $3,000 a year of pre-tax premiums lowers Texas take-home by $2,111, not $3,000, and California take-home by $1,832.
      </p>

      <h2 style={h2}>How much of a raise do you keep above $100,000?</h2>

      <p style={p}>
        At this salary a single filer&rsquo;s next dollar is taxed at 22% federal plus 7.65% FICA, plus any state tax. In Texas a $1,000 raise adds $704 to your yearly take-home. In California it adds $611. The table shows how take-home grows around $100,000 in a no-tax state:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Gross salary</th>
              <th style={thR}>Federal income tax</th>
              <th style={thR}>Take-home (no-tax state)</th>
              <th style={thR}>Biweekly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$90,000', '$10,970', '$72,145', '$2,775'],
              ['$95,000', '$12,070', '$75,663', '$2,910'],
              ['$100,000', '$13,170', '$79,180', '$3,045'],
              ['$105,000', '$14,270', '$82,698', '$3,181'],
              ['$110,000', '$15,370', '$86,215', '$3,316'],
              ['$120,000', '$17,570', '$93,250', '$3,587'],
            ].map(([g, fed, net, bw], i) => (
              <tr key={g} style={{ background: g === '$100,000' ? '#eef2ff' : i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{g}</td>
                <td style={tdR}>{fed}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{net}</td>
                <td style={tdR}>{bw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={p}>
        Each $5,000 step adds about $3,518 of take-home. A raise can never shrink your paycheck, because only the new dollars face the higher rate. The single filer&rsquo;s 22% bracket runs to $105,700 of taxable income. Add back the $16,100 standard deduction and you can earn up to <strong>$121,800 in gross salary</strong> before any of it is taxed at 24%. More on this in{' '}
        <a href="/blog/what-happens-to-taxes-when-you-get-a-raise" style={link}>what happens to taxes when you get a raise</a>.
      </p>

      <h2 style={h2}>Three mistakes that shrink a $100,000 paycheck</h2>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Comparing offers on gross pay alone.</strong> A $100,000 job in Oregon pays $8,209 less a year than the same job in Florida in this calculator. A $95,000 offer in a no-tax state ($75,663) beats a $100,000 offer in Oregon ($70,971) by $4,692. Our{' '}
          <a href="/blog/compare-job-offers-across-states" style={link}>job offer comparison guide</a> shows how to line them up.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Leaving an old W-4 in place.</strong> Your employer uses your W-4 and the tables in{' '}
          <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={link}>IRS Publication 15-T</a> to set withholding. After a marriage, a new baby, or a second job, the old form can be off by thousands. A big refund is a loan you gave the government at zero interest, and a big bill can bring an underpayment penalty.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Thinking six figures puts you in a 22% tax.</strong> Your average federal income tax is 13.2%, not 22%. People who believe the 22% figure often overestimate the cost of a 401(k) or turn down overtime. Use the marginal rate for decisions about the next dollar and the average rate for your budget.
        </li>
      </ul>

      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>How much is $100,000 a year biweekly after taxes?</h3>
      <p style={p}>
        A single filer in a state with no income tax takes home about $3,045 every two weeks on $100,000 in 2026. In states with an income tax, the biweekly figure in this calculator runs from $2,967 in Ohio to $2,730 in Oregon. Your check will be lower if you have health insurance, retirement, or local tax deductions.
      </p>

      <h3 style={h3}>What tax bracket is a $100,000 salary in?</h3>
      <p style={p}>
        A single filer earning $100,000 has $83,900 of taxable income after the standard deduction, which puts the top dollar in the 22% bracket. A married couple filing jointly on one $100,000 salary is in the 12% bracket. In both cases most of the income is taxed at lower rates first.
      </p>

      <h3 style={h3}>Is $100,000 a good salary in 2026?</h3>
      <p style={p}>
        It is well above what most full-time workers earn, but what it buys depends on where you live. Take-home differs by $8,209 a year between the best and worst states in the table above, and housing costs can swing much more than that. Our{' '}
        <a href="/blog/good-salary-by-state" style={link}>good salary by state guide</a> compares salaries with living costs.
      </p>

      <h3 style={h3}>How much is $100,000 a year per hour?</h3>
      <p style={p}>
        At 40 hours a week for 52 weeks, $100,000 works out to $48.08 per hour before taxes. After taxes in a no-tax state, the $79,180 take-home is about $38.07 per hour worked.
      </p>

      <h3 style={h3}>How do I keep more of a $100,000 salary?</h3>
      <p style={p}>
        The biggest levers are pre-tax deductions. A traditional 401(k), an HSA if you have a qualifying health plan, and pre-tax health premiums all lower your taxable income. At 22% federal, each $1,000 you move pre-tax saves at least $220 in federal income tax, plus state tax where it applies.
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
          Run Your Own $100,000 Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Pick your state, filing status, pay schedule, and 401(k) percentage to see your exact take-home per check.
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
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Revenue Procedure 2025-32 (2026 brackets and standard deductions)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA, Contribution and Benefit Base (2026 wage base)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 751: Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 560: Additional Medicare Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, 401(k) limit increases to $24,500 for 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Publication 15-T: Federal Income Tax Withholding Methods</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          State figures: this site&rsquo;s calculator, using the state tables listed on each <a href="/texas" style={{ color: '#2563eb' }}>state calculator page</a>
        </li>
      </ul>

      <ArticleFooter current="100000-salary-after-taxes-by-state" />
    </article>
  )
}
