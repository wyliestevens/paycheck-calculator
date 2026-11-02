import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: '$20 an Hour Is How Much a Year After Taxes? (2026, All 50 States)' },
  description:
    '$20 an hour is $41,600 a year. A single filer keeps $35,606 in 2026 in a no-tax state, about $685 a week. See all 50 states, overtime, and part-time hours.',
  alternates: { canonical: '/blog/20-an-hour-after-taxes' },
  keywords:
    '$20 an hour is how much a year after taxes, 20 an hour after taxes, $20 an hour weekly paycheck, 20 dollars an hour annual salary, $41600 after taxes',
  openGraph: {
    type: 'article',
    url: '/blog/20-an-hour-after-taxes',
    images: [{ url: '/og/blog/20-an-hour-after-taxes', width: 1200, height: 630 }],
    title: '$20 an Hour Is How Much a Year After Taxes? (2026, All 50 States)',
    description:
      '$20 an hour is $41,600 a year before taxes. A single filer keeps $35,606 in a no-tax state in 2026. All 50 states, overtime, and part-time hours.',
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
  overflowX: 'auto',
} as const

// Output of this site's calculator (calculateTakeHome), single filer, standard deduction,
// $20/hour x 40 hours x 52 weeks = $41,600 gross, tax year 2026.
// [rank, state, slug, state tax, take-home, biweekly, net per hour, all-in rate]
const stateRows: [number, string, string, string, string, string, string, string][] = [
  [1, 'Alaska', 'alaska', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [1, 'Florida', 'florida', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [1, 'Nevada', 'nevada', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [1, 'New Hampshire', 'new-hampshire', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [1, 'South Dakota', 'south-dakota', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [1, 'Tennessee', 'tennessee', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [1, 'Texas', 'texas', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [1, 'Washington', 'washington', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [1, 'Wyoming', 'wyoming', '$0', '$35,606', '$1,369', '$17.12', '14.4%'],
  [10, 'Ohio', 'ohio', '$428', '$35,178', '$1,353', '$16.91', '15.4%'],
  [11, 'North Dakota', 'north-dakota', '$527', '$35,079', '$1,349', '$16.86', '15.7%'],
  [12, 'Arizona', 'arizona', '$675', '$34,931', '$1,343', '$16.79', '16.0%'],
  [13, 'New Jersey', 'new-jersey', '$806', '$34,800', '$1,338', '$16.73', '16.4%'],
  [14, 'California', 'california', '$845', '$34,761', '$1,337', '$16.71', '16.4%'],
  [15, 'Louisiana', 'louisiana', '$873', '$34,733', '$1,336', '$16.70', '16.5%'],
  [16, 'Vermont', 'vermont', '$905', '$34,701', '$1,335', '$16.68', '16.6%'],
  [17, 'South Carolina', 'south-carolina', '$996', '$34,609', '$1,331', '$16.64', '16.8%'],
  [18, 'Iowa', 'iowa', '$1,026', '$34,580', '$1,330', '$16.62', '16.9%'],
  [19, 'New Mexico', 'new-mexico', '$1,044', '$34,562', '$1,329', '$16.62', '16.9%'],
  [20, 'Wisconsin', 'wisconsin', '$1,119', '$34,486', '$1,326', '$16.58', '17.1%'],
  [21, 'North Carolina', 'north-carolina', '$1,151', '$34,454', '$1,325', '$16.56', '17.2%'],
  [22, 'Rhode Island', 'rhode-island', '$1,164', '$34,441', '$1,325', '$16.56', '17.2%'],
  [23, 'Missouri', 'missouri', '$1,186', '$34,419', '$1,324', '$16.55', '17.3%'],
  [24, 'Colorado', 'colorado', '$1,188', '$34,418', '$1,324', '$16.55', '17.3%'],
  [25, 'Indiana', 'indiana', '$1,269', '$34,337', '$1,321', '$16.51', '17.5%'],
  [26, 'Pennsylvania', 'pennsylvania', '$1,277', '$34,328', '$1,320', '$16.50', '17.5%'],
  [27, 'Nebraska', 'nebraska', '$1,312', '$34,294', '$1,319', '$16.49', '17.6%'],
  [28, 'West Virginia', 'west-virginia', '$1,315', '$34,291', '$1,319', '$16.49', '17.6%'],
  [29, 'Montana', 'montana', '$1,347', '$34,259', '$1,318', '$16.47', '17.6%'],
  [30, 'Minnesota', 'minnesota', '$1,446', '$34,160', '$1,314', '$16.42', '17.9%'],
  [31, 'Arkansas', 'arkansas', '$1,452', '$34,154', '$1,314', '$16.42', '17.9%'],
  [32, 'Oklahoma', 'oklahoma', '$1,486', '$34,120', '$1,312', '$16.40', '18.0%'],
  [33, 'Georgia', 'georgia', '$1,536', '$34,069', '$1,310', '$16.38', '18.1%'],
  [34, 'Kentucky', 'kentucky', '$1,538', '$34,068', '$1,310', '$16.38', '18.1%'],
  [35, 'Idaho', 'idaho', '$1,566', '$34,040', '$1,309', '$16.37', '18.2%'],
  [36, 'Maine', 'maine', '$1,575', '$34,031', '$1,309', '$16.36', '18.2%'],
  [37, 'Virginia', 'virginia', '$1,675', '$33,931', '$1,305', '$16.31', '18.4%'],
  [38, 'Kansas', 'kansas', '$1,714', '$33,891', '$1,304', '$16.29', '18.5%'],
  [39, 'Mississippi', 'mississippi', '$1,729', '$33,876', '$1,303', '$16.29', '18.6%'],
  [40, 'Delaware', 'delaware', '$1,735', '$33,870', '$1,303', '$16.28', '18.6%'],
  [41, 'New York', 'new-york', '$1,752', '$33,854', '$1,302', '$16.28', '18.6%'],
  [42, 'Michigan', 'michigan', '$1,768', '$33,838', '$1,301', '$16.27', '18.7%'],
  [43, 'Maryland', 'maryland', '$1,802', '$33,803', '$1,300', '$16.25', '18.7%'],
  [44, 'Utah', 'utah', '$1,872', '$33,734', '$1,297', '$16.22', '18.9%'],
  [45, 'Connecticut', 'connecticut', '$1,880', '$33,726', '$1,297', '$16.21', '18.9%'],
  [46, 'Alabama', 'alabama', '$1,915', '$33,691', '$1,296', '$16.20', '19.0%'],
  [47, 'Illinois', 'illinois', '$2,059', '$33,546', '$1,290', '$16.13', '19.4%'],
  [48, 'Massachusetts', 'massachusetts', '$2,080', '$33,526', '$1,289', '$16.12', '19.4%'],
  [49, 'Hawaii', 'hawaii', '$2,534', '$33,071', '$1,272', '$15.90', '20.5%'],
  [50, 'Oregon', 'oregon', '$3,099', '$32,507', '$1,250', '$15.63', '21.9%'],
]

export default function TwentyAnHourAfterTaxes() {
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
          aria-label="A clock showing $20 an hour turning into $41,600 a year gross and $35,606 take-home in a state with no income tax"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Clock */}
          <circle cx="110" cy="100" r="58" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="4" />
          <line x1="110" y1="100" x2="110" y2="62" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <line x1="110" y1="100" x2="138" y2="112" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="110" cy="100" r="5" fill="#fff" />
          <text x="110" y="178" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">$20 / HOUR</text>
          {/* Arrow */}
          <line x1="190" y1="100" x2="230" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="230,92 245,100 230,108" fill="rgba(255,255,255,0.7)" />
          {/* Gross bar */}
          <text x="260" y="58" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">GROSS, 2,080 HOURS</text>
          <rect x="260" y="66" width="300" height="24" rx="4" fill="rgba(255,255,255,0.45)" />
          <text x="550" y="83" textAnchor="end" fontSize="14" fontWeight="800" fill="#0e3a47" fontFamily="monospace">$41,600</text>
          {/* Net bar */}
          <text x="260" y="122" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">TAKE-HOME, NO STATE TAX</text>
          <rect x="260" y="130" width="257" height="24" rx="4" fill="#fff" />
          <text x="507" y="147" textAnchor="end" fontSize="14" fontWeight="800" fill="#0891b2" fontFamily="monospace">$35,606</text>
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
        $20 an Hour Is How Much a Year After Taxes? (2026, All 50 States)
      </h1>

      <ArticleMeta slug="20-an-hour-after-taxes" />

      {/* In short */}
      <div
        style={{
          background: '#ecfeff',
          border: '1px solid #a5f3fc',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#0891b2', marginBottom: '0.5rem' }}>
          In short
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          At 40 hours a week, $20 an hour is <strong>$41,600 a year</strong> before taxes. A single filer in a state with no income tax keeps <strong>$35,606</strong> in 2026, which is about <strong>$685 a week</strong> or $1,369 every two weeks. In states with an income tax, take-home runs from $35,178 in Ohio down to $32,507 in Oregon. After taxes, each hour you work is worth between $15.63 and $17.12.
        </p>
      </div>

      <p style={p}>
        Most answers to this question stop at the gross number or apply a flat 25% &ldquo;tax rule of thumb.&rdquo; At $20 an hour that rule is far off. It would leave you about $31,200, while the real figure is $1,300 to $4,400 higher depending on your state. This guide uses the actual 2026 tax math instead, shows it line by line, and then covers the parts of hourly pay that the simple answers skip: part-time and overtime hours, the new federal overtime deduction, unpaid time off, and what a 401(k) costs you per check.
      </p>

      <p style={p}>
        Every take-home figure below comes from this site&rsquo;s own paycheck calculator, using the 2026 federal brackets and standard deduction from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={link}>IRS Revenue Procedure 2025-32</a>. Unless a section says otherwise, the case is a single filer who takes the standard deduction and has no pre-tax deductions. City and county income taxes are not included.
      </p>

      <h2 style={h2}>How much is $20 an hour a year before taxes?</h2>

      <p style={p}>
        The standard conversion assumes a full-time schedule of 40 hours a week for all 52 weeks of the year. That is 2,080 paid hours.
      </p>

      <div style={mono}>
        <div>$20 &times; 40 hours = $800 per week</div>
        <div>$800 &times; 52 weeks = <strong>$41,600 per year</strong></div>
        <div>$41,600 &divide; 12 = $3,466.67 per month (gross)</div>
      </div>

      <p style={p}>
        The 2,080-hour figure quietly assumes you are paid for holidays and vacation days. Many hourly jobs do not pay for time you are not working, so your real gross may be lower. We show what that costs you in the mistakes section below. If you are comparing an hourly job with a salaried offer, our{' '}
        <a href="/blog/how-to-calculate-hourly-rate-from-salary" style={link}>salary to hourly guide</a> runs the conversion the other way.
      </p>

      <h2 style={h2}>How much is $20 an hour after taxes?</h2>

      <p style={p}>
        Three federal taxes come out of every hourly paycheck: federal income tax, Social Security, and Medicare. Here is the full calculation for $41,600 in a state with no income tax, such as <a href="/texas" style={link}>Texas</a> or <a href="/florida" style={link}>Florida</a>.
      </p>

      <div style={mono}>
        <div><strong>Step 1. Gross pay</strong></div>
        <div>$20 &times; 2,080 hours = $41,600</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 2. Taxable income for federal income tax</strong></div>
        <div>$41,600 &minus; $16,100 standard deduction = $25,500</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 3. Federal income tax by bracket</strong></div>
        <div>10% on the first $12,400 = $1,240.00</div>
        <div>12% on $12,400 to $25,500 ($13,100) = $1,572.00</div>
        <div>Federal income tax = <strong>$2,812.00</strong></div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 4. FICA on the full $41,600</strong></div>
        <div>Social Security: $41,600 &times; 6.2% = $2,579.20</div>
        <div>Medicare: $41,600 &times; 1.45% = $603.20</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 5. Net pay</strong></div>
        <div>$41,600 &minus; $2,812.00 &minus; $2,579.20 &minus; $603.20 = <strong>$35,605.60</strong></div>
        <div>Weekly: $35,605.60 &divide; 52 = <strong>$684.72</strong></div>
        <div>Per hour worked: $35,605.60 &divide; 2,080 = <strong>$17.12</strong></div>
      </div>

      <p style={p}>
        Your total tax bill is $5,994.40, or 14.4% of your gross pay. That is why the 25% rule of thumb overshoots so badly at this income. Your top federal bracket is 12%, and the $16,100 standard deduction means the first $16,100 you earn carries no federal income tax at all. Social Security and Medicare are the bigger bite here: together they take $3,182.40, more than federal income tax does. The rates come from{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={link}>IRS Topic 751</a>, and they apply from the first dollar with no deduction. For more on that, see{' '}
        <a href="/blog/fica-taxes-explained" style={link}>FICA taxes explained</a>.
      </p>

      <h2 style={h2}>What is $20 an hour after taxes in each state?</h2>

      <p style={p}>
        Federal taxes are the same everywhere. State income tax is the only line that changes, and at $20 an hour it moves your yearly take-home by up to $3,099. That is about $119 per biweekly check between the best and worst states. Click a state to run your own numbers.
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
              <th style={thR}>Net per hour</th>
              <th style={thR}>All-in rate</th>
            </tr>
          </thead>
          <tbody>
            {stateRows.map(([rank, name, slug, tax, net, bw, hr, rate], i) => (
              <tr key={slug} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{rank}</td>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb' }}>{name}</a>
                </td>
                <td style={{ ...tdR, color: tax === '$0' ? '#059669' : '#dc2626' }}>{tax}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{net}</td>
                <td style={tdR}>{bw}</td>
                <td style={tdR}>{hr}</td>
                <td style={tdR}>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={note}>
        Figures from this site&rsquo;s calculator for tax year 2026, single filer, standard deduction, no pre-tax deductions, $41,600 gross, rounded to the dollar (net per hour to the cent). &ldquo;All-in rate&rdquo; is federal, state, Social Security, and Medicare as a share of gross. Washington and New Hampshire do not tax wages.
      </p>

      <p style={p}>
        A few things stand out. <a href="/california" style={link}>California</a> lands 14th, ahead of most of the country, because it taxes the first $38,959 of state taxable income at only 1% to 4%. <a href="/oregon" style={link}>Oregon</a> sits last because its 8.75% rate starts at just $10,750 of state taxable income. And the gap between a no-tax state and a middle-of-the-table state like Indiana is about $1,270 a year, or $24 a week. That matters, but it is rarely enough on its own to justify a move once rent is counted.
      </p>

      <p style={p}>
        The table can still overstate your check in a few states. California, New Jersey, New York, Rhode Island, and several others take a separate payroll deduction for disability or paid family leave. Our{' '}
        <a href="/blog/state-disability-insurance-sdi-paycheck" style={link}>state disability insurance guide</a> lists them. Some cities and counties also tax wages, which our{' '}
        <a href="/blog/local-income-taxes-2026" style={link}>local income tax guide</a> covers.
      </p>

      <h2 style={h2}>How much is $20 an hour per paycheck?</h2>

      <p style={p}>
        Your pay schedule does not change your yearly tax, only how it is divided. Hourly workers are most often paid weekly or biweekly. Here is the same $20 an hour under each schedule.
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
              ['Weekly', '52', '$800.00', '$684.72', '$668.48'],
              ['Biweekly', '26', '$1,600.00', '$1,369.45', '$1,336.96'],
              ['Semimonthly', '24', '$1,733.33', '$1,483.57', '$1,448.38'],
              ['Monthly', '12', '$3,466.67', '$2,967.13', '$2,896.75'],
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
        If you are paid every two weeks, two checks are $2,738.90 in a no-tax state, but your true monthly average is $2,967.13. Twice a year a month has three paydays. Budget on two checks a month and those extra checks become savings you can plan around. Our{' '}
        <a href="/blog/weekly-vs-biweekly-vs-monthly-pay" style={link}>pay frequency guide</a> explains how to use them.
      </p>

      <h2 style={h2}>What if you work more or fewer than 40 hours?</h2>

      <p style={p}>
        Hourly pay rarely lands on exactly 40 hours. The table below shows yearly take-home at $20 an hour for part-time and overtime schedules, in Texas (no state tax), California, and Pennsylvania (a flat 3.07% state tax). Overtime hours are paid at $30, time and a half, which the{' '}
        <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer" style={link}>Fair Labor Standards Act</a> requires for most hourly workers past 40 hours in a workweek.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Hours per week</th>
              <th style={thR}>Gross per year</th>
              <th style={thR}>Texas net</th>
              <th style={thR}>Texas weekly</th>
              <th style={thR}>Net per hour</th>
              <th style={thR}>California net</th>
              <th style={thR}>Pennsylvania net</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['20', '$20,800', '$18,739', '$360', '$18.02', '$18,538', '$18,100'],
              ['30', '$31,200', '$27,249', '$524', '$17.47', '$26,821', '$26,291'],
              ['40', '$41,600', '$35,606', '$685', '$17.12', '$34,761', '$34,328'],
              ['45 (5 overtime)', '$49,400', '$41,873', '$805', '$17.89', '$40,618', '$40,356'],
              ['50 (10 overtime)', '$57,200', '$48,140', '$926', '$18.52', '$46,418', '$46,384'],
            ].map(([hrs, gross, tx, wk, hr, ca, pa], i) => (
              <tr key={hrs} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{hrs}</td>
                <td style={tdR}>{gross}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{tx}</td>
                <td style={tdR}>{wk}</td>
                <td style={tdR}>{hr}</td>
                <td style={tdR}>{ca}</td>
                <td style={tdR}>{pa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={note}>
        Figures from this site&rsquo;s calculator, tax year 2026, single filer, standard deduction, 52 weeks. &ldquo;Net per hour&rdquo; is Texas take-home divided by hours worked. Overtime rows do not include the federal overtime deduction described below, which lowers federal tax further.
      </p>

      <p style={p}>
        Two patterns are worth knowing. First, part-time hours keep slightly more per hour, because more of your pay falls under the standard deduction. At 20 hours a week you keep $18.02 of every $20. Second, overtime is not &ldquo;eaten by taxes,&rdquo; a common worry. Each extra overtime hour pays $30 gross, and even after the 12% bracket and FICA you keep about $24.10 of it in Texas. That is more than a regular hour pays before taxes. Our{' '}
        <a href="/blog/how-overtime-pay-is-taxed" style={link}>overtime tax guide</a> explains why bigger overtime checks can look over-withheld.
      </p>

      <h3 style={h3}>Does the new overtime deduction help at $20 an hour?</h3>

      <p style={p}>
        Yes. For tax years 2025 through 2028, you can deduct the extra &ldquo;half&rdquo; of time-and-a-half pay, up to $12,500 a year for a single filer, with a phase-out starting at $150,000 of modified AGI. You do not need to itemize to claim it (
        <a href="https://www.irs.gov/newsroom/one-big-beautiful-bill-act-tax-deductions-for-working-americans-and-seniors" target="_blank" rel="noopener noreferrer" style={link}>IRS, One Big Beautiful Bill Act deductions</a>
        ). At $20 an hour, the deductible part is $10 for each overtime hour, not the full $30.
      </p>

      <div style={mono}>
        <div><strong>Example: 5 overtime hours a week for 52 weeks</strong></div>
        <div>Overtime premium: 5 &times; $10 &times; 52 = $2,600 deduction</div>
        <div>Federal taxable income: $49,400 &minus; $16,100 = $33,300</div>
        <div>After overtime deduction: $33,300 &minus; $2,600 = $30,700</div>
        <div>Both amounts sit in the 12% bracket</div>
        <div>Federal tax saved: $2,600 &times; 12% = <strong>$312</strong></div>
      </div>

      <p style={p}>
        At 10 overtime hours a week the deduction doubles to $5,200 and saves $624. It is an income tax deduction, so Social Security and Medicare still apply to every overtime dollar. Your state may or may not follow the federal rule, so check with your state revenue department before counting on a state saving too.
      </p>

      <h2 style={h2}>How much does a 401(k) cost you at $20 an hour?</h2>

      <p style={p}>
        Less than you think. A traditional 401(k) contribution comes out before federal and most state income tax, so the tax you would have paid on that money stays in your account instead. Here is the effect in Texas and California, from this site&rsquo;s calculator.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>401(k) rate</th>
              <th style={thR}>Saved per year</th>
              <th style={thR}>Texas take-home</th>
              <th style={thR}>Texas biweekly</th>
              <th style={thR}>California take-home</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['0%', '$0', '$35,606', '$1,369', '$34,761'],
              ['3%', '$1,248', '$34,507', '$1,327', '$33,713'],
              ['5%', '$2,080', '$33,775', '$1,299', '$33,014'],
              ['10%', '$4,160', '$31,945', '$1,229', '$31,267'],
            ].map(([rate, saved, tx, bw, ca], i) => (
              <tr key={rate} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{rate}</td>
                <td style={tdR}>{saved}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{tx}</td>
                <td style={tdR}>{bw}</td>
                <td style={tdR}>{ca}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={p}>
        At 5%, you put $2,080 a year into your retirement account, but your take-home in Texas drops by only $1,831. The other $250 or so is federal income tax you no longer pay. Per biweekly check, $80 goes into the account and your deposit falls by about $70. If your employer matches, say 50 cents on the dollar up to 5%, that is another $1,040 a year you lose by skipping it. Our{' '}
        <a href="/blog/how-401k-contributions-affect-your-paycheck" style={link}>401(k) paycheck guide</a> walks through matches in more detail.
      </p>

      <h2 style={h2}>Three mistakes that shrink a $20-an-hour paycheck</h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Budgeting on 2,080 hours when your time off is unpaid.</strong> Two unpaid weeks cuts your hours to 2,000 and your gross to $40,000. In Texas that is $34,320 take-home instead of $35,606, a loss of $1,286. Build your budget on the hours you are actually paid for.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Using a 25% or 30% tax estimate.</strong> At $41,600 your real all-in rate is 14.4% to 21.9% depending on your state. A 30% guess undercounts your take-home by more than $6,000 a year in a no-tax state. That can make a perfectly workable rent or car payment look out of reach.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Turning down overtime because of the tax.</strong> No bracket takes back more than the extra pay. You keep about $24.10 of each $30 overtime hour in Texas before the new deduction, and a little more after it.
        </li>
      </ul>

      <h2 style={h2}>Does being married or a head of household change it?</h2>

      <p style={p}>
        Yes, and by more than most people expect at this income. Filing status changes the standard deduction and bracket widths, which you can read about in our{' '}
        <a href="/blog/tax-filing-status-explained" style={link}>filing status guide</a>. In a no-tax state, $41,600 of wages produces these results in this site&rsquo;s calculator:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Filing status</th>
              <th style={thR}>Federal income tax</th>
              <th style={thR}>Take-home</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single', '$2,812', '$35,606'],
              ['Head of household', '$1,745', '$36,673'],
              ['Married filing jointly (one earner)', '$940', '$37,478'],
            ].map(([status, fed, net], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>{status}</td>
                <td style={tdR}>{fed}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={p}>
        These figures leave out tax credits. A parent earning $20 an hour may also qualify for the Child Tax Credit, which cuts the tax bill further. See our{' '}
        <a href="/blog/child-tax-credit-explained" style={link}>child tax credit guide</a> for the rules.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>How much is $20 an hour biweekly after taxes?</h3>
      <p style={p}>
        A full-time single filer earns $1,600 gross every two weeks and keeps about $1,369 in a state with no income tax in 2026. In states with an income tax, the biweekly figure ranges from $1,353 in Ohio to $1,250 in Oregon. Health insurance and retirement deductions will lower the deposit further.
      </p>

      <h3 style={h3}>Is $20 an hour a good wage?</h3>
      <p style={p}>
        It is well above the federal minimum wage of $7.25 (
        <a href="https://www.dol.gov/agencies/whd/minimum-wage" target="_blank" rel="noopener noreferrer" style={link}>U.S. Department of Labor</a>
        ), but whether it is enough depends on local rent. $35,606 a year in take-home goes much further in a low-cost area than in a large coastal city. Our{' '}
        <a href="/blog/minimum-wage-take-home-pay-by-state" style={link}>minimum wage take-home guide</a> shows how state wage floors compare.
      </p>

      <h3 style={h3}>How much is a $1 raise from $20 to $21 an hour?</h3>
      <p style={p}>
        A $1 raise adds $2,080 a year before taxes. In Texas, take-home rises from $35,606 to $37,277, so you keep $1,671 of the raise, about $32 more per week. In California you keep $1,588 of it.
      </p>

      <h3 style={h3}>How much is $20 an hour after taxes per month?</h3>
      <p style={p}>
        About $2,967 a month in a state with no income tax, based on $35,606 a year divided by 12. In California the monthly average is about $2,897. If you are paid weekly or biweekly, some months will have one extra payday.
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
          Run Your Own Hourly Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Switch the calculator to hourly mode, enter your rate and weekly hours, and pick your state to see your exact take-home per check.
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
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 751: Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA, Contribution and Benefit Base (2026 wage base)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/one-big-beautiful-bill-act-tax-deductions-for-working-americans-and-seniors" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, One Big Beautiful Bill Act: tax deductions for working Americans and seniors (overtime deduction)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor, Overtime Pay under the FLSA</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/minimum-wage" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor, Minimum Wage</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          State figures: this site&rsquo;s calculator, using the state tables listed on each <a href="/texas" style={{ color: '#2563eb' }}>state calculator page</a>
        </li>
      </ul>

      <ArticleFooter current="20-an-hour-after-taxes" />
    </article>
  )
}
