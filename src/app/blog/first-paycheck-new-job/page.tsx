import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Your First Paycheck at a New Job: Why It Is Smaller and When It Comes (2026)' },
  description:
    'Start mid-period on a $60,000 salary and a 6-day first check nets $1,196, not $1,938. Why first paychecks are smaller, when they arrive, and the tax fix.',
  alternates: { canonical: '/blog/first-paycheck-new-job' },
  keywords:
    'first paycheck new job, why is my first paycheck smaller, prorated first paycheck, first paycheck taxes, when will I get my first paycheck, part-year employment method',
  openGraph: {
    type: 'article',
    url: '/blog/first-paycheck-new-job',
    images: [{ url: '/og/blog/first-paycheck-new-job', width: 1200, height: 630 }],
    title: 'Your First Paycheck at a New Job: Why It Is Smaller and When It Comes (2026)',
    description:
      'A 6-day first check on a $60,000 salary nets $1,196, not $1,938. Why first paychecks are smaller, when they arrive, and the withholding fix late-year hires miss.',
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
  overflowX: 'auto',
} as const
const li = { marginBottom: '0.5rem' } as const

// Output of this site's calculator (calculateTakeHome), single filer, standard deduction,
// Texas (no state income tax), tax year 2026. $60,000 salary, biweekly (26 checks),
// 10 workdays per period, $230.77 per workday. Each check is annualized (x 26) the way
// IRS Pub. 15-T Worksheet 1A does, then divided back by 26.
// [days worked, gross, federal withholding, FICA, net, federal as % of gross, all taxes as % of gross]
const dayRows: [string, string, string, string, string, string, string][] = [
  ['2', '$461.54', '$0.00', '$35.31', '$426.23', '0.0%', '7.7%'],
  ['4', '$923.08', '$30.38', '$70.62', '$822.08', '3.3%', '10.9%'],
  ['5', '$1,153.85', '$54.62', '$88.27', '$1,010.96', '4.7%', '12.4%'],
  ['6', '$1,384.62', '$82.31', '$105.92', '$1,196.38', '5.9%', '13.6%'],
  ['8', '$1,846.15', '$137.69', '$141.23', '$1,567.23', '7.5%', '15.1%'],
  ['10 (full)', '$2,307.69', '$193.08', '$176.54', '$1,938.08', '8.4%', '16.0%'],
]

// Same calculator, Texas, half-period first check (5 of 10 days) vs a full biweekly check.
// [salary, full gross, full net, half gross, half net, fed rate on half check, fed rate on full check]
const salaryRows: [string, string, string, string, string, string, string][] = [
  ['$40,000', '$1,538.46', '$1,320.00', '$769.23', '$695.38', '1.9%', '6.6%'],
  ['$50,000', '$1,923.08', '$1,629.04', '$961.54', '$853.75', '3.6%', '7.6%'],
  ['$60,000', '$2,307.69', '$1,938.08', '$1,153.85', '$1,010.96', '4.7%', '8.4%'],
  ['$75,000', '$2,884.62', '$2,368.94', '$1,442.31', '$1,242.74', '6.2%', '10.2%'],
  ['$100,000', '$3,846.15', '$3,045.38', '$1,923.08', '$1,629.04', '7.6%', '13.2%'],
  ['$150,000', '$5,769.23', '$4,376.58', '$2,884.62', '$2,368.94', '10.2%', '16.5%'],
]

// Same calculator, $60,000 salary, half-period first check ($1,153.85 gross), by state.
// [state, slug, state withholding on half check, net half check, net full check]
const stateRows: [string, string, string, string, string][] = [
  ['Texas', 'texas', '$0.00', '$1,010.96', '$1,938.08'],
  ['Florida', 'florida', '$0.00', '$1,010.96', '$1,938.08'],
  ['Ohio', 'ohio', '$4.18', '$1,006.78', '$1,902.17'],
  ['Arizona', 'arizona', '$14.81', '$996.15', '$1,894.42'],
  ['California', 'california', '$14.81', '$996.15', '$1,865.07'],
  ['Colorado', 'colorado', '$26.06', '$984.90', '$1,861.25'],
  ['North Carolina', 'north-carolina', '$26.47', '$984.49', '$1,865.57'],
  ['Pennsylvania', 'pennsylvania', '$35.42', '$975.54', '$1,867.23'],
  ['Georgia', 'georgia', '$35.93', '$975.03', '$1,842.26'],
  ['New York', 'new-york', '$41.28', '$969.68', '$1,829.29'],
  ['Illinois', 'illinois', '$57.12', '$953.85', '$1,823.85'],
  ['Massachusetts', 'massachusetts', '$57.69', '$953.27', '$1,822.69'],
]

export default function FirstPaycheckNewJob() {
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
          aria-label="A two-week pay period calendar with only six workdays marked, next to a smaller first paycheck and a full second paycheck"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Calendar: two weeks of five workdays */}
          <text x="160" y="46" textAnchor="middle" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">PAY PERIOD: 10 WORKDAYS</text>
          {[0, 1, 2, 3, 4].map((c) => (
            <rect key={`a${c}`} x={50 + c * 46} y={60} width="38" height="38" rx="5" fill={c < 4 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.45)'} />
          ))}
          {[0, 1, 2, 3, 4].map((c) => (
            <rect key={`b${c}`} x={50 + c * 46} y={108} width="38" height="38" rx="5" fill="rgba(255,255,255,0.45)" />
          ))}
          <text x="160" y="168" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">You start here: 6 of 10 days paid</text>
          {/* Arrow */}
          <line x1="295" y1="100" x2="335" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="335,92 350,100 335,108" fill="rgba(255,255,255,0.6)" />
          {/* Two checks */}
          <rect x="365" y="78" width="90" height="56" rx="6" fill="rgba(255,255,255,0.25)" />
          <text x="410" y="100" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Check 1</text>
          <text x="410" y="122" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="monospace">$1,196</text>
          <rect x="470" y="56" width="100" height="100" rx="6" fill="rgba(255,255,255,0.25)" />
          <text x="520" y="96" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Check 2</text>
          <text x="520" y="120" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="monospace">$1,938</text>
          <text x="468" y="176" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">$60,000 salary, Texas, 2026</text>
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
        Your First Paycheck at a New Job: Why It Is Smaller and When It Comes (2026)
      </h1>

      <ArticleMeta slug="first-paycheck-new-job" />

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
          Your first paycheck is usually smaller because it pays only for the days you worked in that pay period, and it often arrives one to three weeks after you start. On a $60,000 salary paid every two weeks, six days of work in the first period nets about <strong>$1,196</strong> in a no-tax state, against <strong>$1,938</strong> for a full check. The tax rate on that short check is actually lower, because payroll treats it as if you earned that little all year. If you start late in the year, the opposite problem shows up: regular withholding can take more than $1,000 too much, and a written request to your employer can fix it.
        </p>
      </div>

      <p style={p}>
        Most explanations of a small first paycheck stop at &ldquo;it was prorated.&rdquo; That is true, but it skips what matters for your budget: how much smaller the check will be in dollars, why the tax on it behaves oddly, how two proration methods give different answers for the same start date, and why people hired late in the year are often over-withheld.
      </p>

      <p style={p}>
        The take-home figures below come from this site&rsquo;s own paycheck calculator, for a single filer taking the standard deduction, using the 2026 federal brackets and the $16,100 standard deduction from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" {...ext} style={link}>IRS Revenue Procedure 2025-32</a>, plus Social Security at 6.2% and Medicare at 1.45%. Each partial check is run the way the IRS tells employers to run it: the period&rsquo;s pay is multiplied by the number of pay periods in the year, tax is figured on that annual amount, and the result is divided back down.
      </p>

      <h2 style={h2}>Why is my first paycheck smaller than expected?</h2>

      <p style={p}>
        There are four common reasons, and most first checks have at least two of them.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={li}>
          <strong>You worked only part of the pay period.</strong> If payroll runs on two-week periods and you start on the second Tuesday, you were on the job for only part of that window. A salaried employee is paid for the share of the period worked. An hourly employee is paid for the hours on the timecard.
        </li>
        <li style={li}>
          <strong>Your pay period may close before your work is counted.</strong> Many employers pay in arrears. Hours you work this week may land on the check after next.
        </li>
        <li style={li}>
          <strong>Benefit deductions can start right away.</strong> If your health coverage begins on your first day or the first of the month, the first check may carry a full period&rsquo;s premium even though it pays only a few days of wages. Some employers also take a catch-up deduction for coverage that started before your first payroll ran. Our guide to{' '}
          <a href="/blog/health-insurance-premiums-and-your-paycheck" style={link}>health insurance premiums and your paycheck</a> explains how those deductions are taxed.
        </li>
        <li style={li}>
          <strong>Your W-4 was missing or filled out wrong.</strong> According to{' '}
          <a href="https://www.irs.gov/publications/p15t" {...ext} style={link}>IRS Publication 15-T (2026)</a>, a new employee who does not hand in a Form W-4 is treated as single (or married filing separately) with no other entries. That can mean more withholding than you need if you are married or have dependents.
        </li>
      </ul>

      <p style={p}>
        What is usually <em>not</em> happening is a higher tax rate. People often assume the first check is taxed harder because it looks small next to their offer letter. The math shows the reverse.
      </p>

      <h2 style={h2}>How much smaller is a partial first paycheck?</h2>

      <p style={p}>
        The table shows a $60,000 salary paid every two weeks in Texas, which has no state income tax. A full period has ten workdays, so each workday is worth $230.77 ($60,000 divided by 260 workdays). Read down the rows to see what you take home if you start with two, four, five, six, or eight workdays left in the period.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Days worked</th>
              <th style={thR}>Gross</th>
              <th style={thR}>Federal withheld</th>
              <th style={thR}>FICA</th>
              <th style={thR}>Net pay</th>
              <th style={thR}>Federal rate</th>
              <th style={thR}>All taxes</th>
            </tr>
          </thead>
          <tbody>
            {dayRows.map(([days, gross, fed, fica, net, fr, all]) => (
              <tr key={days}>
                <td style={td}>{days}</td>
                <td style={tdR}>{gross}</td>
                <td style={tdR}>{fed}</td>
                <td style={tdR}>{fica}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{net}</td>
                <td style={tdR}>{fr}</td>
                <td style={tdR}>{all}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator, $60,000 salary, biweekly, single filer, standard deduction, no state income tax, tax year 2026. Benefit deductions not included.
      </p>

      <p style={p}>
        Look at the last two columns. A full check loses 8.4% to federal income tax. A two-day check loses nothing to federal income tax at all, and a five-day check loses 4.7%. Only FICA stays flat, at 7.65% of whatever you earned. So the check is smaller because you earned less, and the tax on it is lighter, not heavier.
      </p>

      <h3 style={h3}>Why the tax rate drops on a short check</h3>

      <p style={p}>
        Payroll software does not know your annual salary when it figures withholding. It looks only at this check. Under the percentage method in Publication 15-T, Worksheet 1A, the employer multiplies the period&rsquo;s taxable wages by the number of pay periods in the year (26 for biweekly), figures the tax on that annual number, then divides by 26. A five-day check of $1,153.85 looks like a $30,000 salary to the software. That falls in a lower slice of the{' '}
        <a href="/blog/federal-tax-brackets-2026" style={link}>2026 federal brackets</a>, so less is withheld. Your second check, a full one, gets the normal rate.
      </p>

      <h2 style={h2}>Step by step: a six-day first check on a $60,000 salary</h2>

      <p style={p}>
        Here is the full math for the six-day row, so you can repeat it with your own numbers. It uses only the 2026 figures above.
      </p>

      <div style={mono}>
        Daily pay: $60,000 &divide; 260 workdays = $230.77
        <br />
        Gross first check: $230.77 &times; 6 days = $1,384.62
        <br />
        <br />
        Federal income tax (annualized):
        <br />
        &nbsp;&nbsp;$1,384.62 &times; 26 periods = $36,000.00
        <br />
        &nbsp;&nbsp;$36,000.00 &minus; $16,100 standard deduction = $19,900.00
        <br />
        &nbsp;&nbsp;10% of first $12,400 = $1,240.00
        <br />
        &nbsp;&nbsp;12% of next $7,500 = $900.00
        <br />
        &nbsp;&nbsp;Annual tax $2,140.00 &divide; 26 = $82.31
        <br />
        <br />
        Social Security: $1,384.62 &times; 6.2% = $85.85
        <br />
        Medicare: $1,384.62 &times; 1.45% = $20.08
        <br />
        State income tax (Texas): $0.00
        <br />
        <br />
        Net first check: $1,384.62 &minus; $82.31 &minus; $85.85 &minus; $20.08 = <strong>$1,196.38</strong>
        <br />
        Full check for comparison: <strong>$1,938.08</strong>
      </div>

      <p style={p}>
        If your state taxes income, add one more line. Most state payroll formulas also annualize each check, so the state share shrinks on a short check too. Health premiums, 401(k) deferrals, and other deductions then come out of the $1,196.38. Our guide on{' '}
        <a href="/blog/how-to-calculate-federal-tax-withholding" style={link}>how to calculate federal tax withholding</a> walks through the same worksheet for a full check.
      </p>

      <h2 style={h2}>Does your salary change the size of the gap?</h2>

      <p style={p}>
        Yes. The higher your pay, the bigger the drop in the withholding rate on a short check, because more of a full check sits in higher brackets. The table compares a full biweekly check with a half-period first check (five of ten days) at six salaries, again in Texas.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Salary</th>
              <th style={thR}>Full check gross</th>
              <th style={thR}>Full check net</th>
              <th style={thR}>Half check gross</th>
              <th style={thR}>Half check net</th>
              <th style={thR}>Federal rate, half</th>
              <th style={thR}>Federal rate, full</th>
            </tr>
          </thead>
          <tbody>
            {salaryRows.map(([sal, fg, fn, hg, hn, hr, fr]) => (
              <tr key={sal}>
                <td style={td}>{sal}</td>
                <td style={tdR}>{fg}</td>
                <td style={tdR}>{fn}</td>
                <td style={tdR}>{hg}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{hn}</td>
                <td style={tdR}>{hr}</td>
                <td style={tdR}>{fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator, biweekly, single filer, standard deduction, no state income tax, tax year 2026.
      </p>

      <p style={p}>
        The rule of thumb: a half check nets a bit more than half of a full net check. At $100,000, half of a full net check is $1,522.69, but the half check nets $1,629.04.
      </p>

      <h3 style={h3}>What the first check looks like in different states</h3>

      <p style={p}>
        State tax works the same way in most places, so the state line on a short check is smaller too. Here is the half-period first check on a $60,000 salary in twelve states, next to a full net check in the same state.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>State</th>
              <th style={thR}>State tax, half check</th>
              <th style={thR}>Net, half check</th>
              <th style={thR}>Net, full check</th>
            </tr>
          </thead>
          <tbody>
            {stateRows.map(([name, slug, st, half, full]) => (
              <tr key={slug}>
                <td style={td}>
                  <a href={`/${slug}`} style={link}>{name}</a>
                </td>
                <td style={tdR}>{st}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{half}</td>
                <td style={tdR}>{full}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator, $60,000 salary, $1,153.85 half-period gross, biweekly, single filer, standard deduction, tax year 2026. City and county income taxes are not included. Actual state withholding formulas can differ slightly from the annual tax tables used here.
      </p>

      <p style={p}>
        The spread between states is narrower on the short check than on a full one. In <a href="/illinois" style={link}>Illinois</a> the half check loses $57.12 to state tax, while a full check loses $114.23. In <a href="/california" style={link}>California</a> the half check loses only $14.81, because California&rsquo;s lowest brackets are very low. Pick your own state on the <a href="/" style={link}>calculator</a> to see your full-check figure.
      </p>

      <h2 style={h2}>How is a prorated salary calculated?</h2>

      <p style={p}>
        Employers use one of two common methods, and they can give noticeably different first checks for the same start date. Neither is wrong. Your offer letter or employee handbook may say which one your company uses, and payroll can tell you if it does not.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={li}>
          <strong>Workday method.</strong> The period&rsquo;s pay is divided by the workdays in the period, then multiplied by the days you worked. On $60,000 biweekly, three workdays pays $2,307.69 &divide; 10 &times; 3 = $692.31.
        </li>
        <li style={li}>
          <strong>Calendar-day method.</strong> The period&rsquo;s pay is divided by all 14 calendar days, then multiplied by the calendar days from your start date to the end of the period, weekends included. Start on the second Wednesday and the period has five calendar days left: $2,307.69 &divide; 14 &times; 5 = $824.18.
        </li>
      </ul>

      <p style={p}>
        That is a $131.87 difference in gross pay for the same three days of work. After the first check, full periods pay the same under either method.
      </p>

      <p style={p}>
        If you are a salaried exempt employee, federal rules allow this. Under{' '}
        <a href="https://www.law.cornell.edu/cfr/text/29/541.602" {...ext} style={link}>29 CFR 541.602(b)(6)</a>, an employer does not have to pay the full weekly salary in your first or last week of work, and may pay a proportionate part for the time you actually worked. The same rule applies on the way out, which our guide to{' '}
        <a href="/blog/final-paycheck-laws-2026" style={link}>final paycheck laws</a> covers.
      </p>

      <h2 style={h2}>When will I get my first paycheck at a new job?</h2>

      <p style={p}>
        Usually on the first regular payday after the pay period you started in closes. If your company pays on a Friday for the period that ended the prior Sunday, and you start in the middle of a period, the wait can run one to three weeks. Some employers that pay in arrears skip your first partial period entirely and fold those days into the next check, which makes the first check bigger but later.
      </p>

      <p style={p}>
        There is no single federal rule on how often you must be paid. Pay frequency is set by state law, and the rules vary a lot. The{' '}
        <a href="https://www.dol.gov/agencies/whd/state/payday" {...ext} style={link}>U.S. Department of Labor&rsquo;s state payday table</a> shows, for example, that California generally requires pay at least twice each calendar month, that <a href="/texas" style={link}>Texas</a> requires at least monthly pay for employees exempt from overtime and at least twice a month for everyone else, and that Florida has no pay frequency rule. If your first check is later than your state allows, contact your state labor department.
      </p>

      <p style={p}>
        To avoid delays, turn in your W-4, state withholding form, and direct deposit form on day one. Your pay frequency also decides how big each check is going forward, which our guide to{' '}
        <a href="/blog/weekly-vs-biweekly-vs-monthly-pay" style={link}>weekly, biweekly, and monthly pay</a> explains.
      </p>

      <h2 style={h2}>Will too much tax be withheld if I start late in the year?</h2>

      <p style={p}>
        Often, yes, and this is the most expensive first-job mistake most guides skip. Payroll assumes every full check is one of 26 you will earn this year. If you start in late August, you might receive only nine checks in 2026. Withholding is figured as if you earned $60,000, but you will report only about $20,769 of wages.
      </p>

      <div style={mono}>
        Start Monday, August 24, 2026, $60,000 salary, biweekly, Texas
        <br />
        Nine full checks by December 31: $2,307.69 &times; 9 = $20,769.23
        <br />
        <br />
        Federal withheld at the normal rate: $193.08 &times; 9 = $1,737.69
        <br />
        Actual 2026 federal tax on $20,769.23:
        <br />
        &nbsp;&nbsp;$20,769.23 &minus; $16,100 = $4,669.23 taxable
        <br />
        &nbsp;&nbsp;$4,669.23 &times; 10% = $466.92
        <br />
        <br />
        Over-withheld: $1,737.69 &minus; $466.92 = <strong>$1,270.77</strong>
      </div>

      <p style={p}>
        This assumes you had no other wages earlier in 2026. You get the $1,270.77 back as a refund, but not until you file the following spring. If you started in early November and received only four checks, the calculator shows $772.31 withheld against a federal tax bill of zero. For a new grad or someone coming back to work after months off, that is real money tied up for no reason. Our guide on{' '}
        <a href="/blog/tax-withholding-overpaying" style={link}>whether you are overpaying tax withholding</a> covers the broader version of this problem.
      </p>

      <h3 style={h3}>The fix: the part-year employment method</h3>

      <p style={p}>
        Publication 15-T includes an alternative called the part-year employment method. It spreads your wages across the whole time since your last job (or since January 1), which lowers withholding to match what you will really owe. You have to ask for it. The IRS says the request must be in writing, signed under penalties of perjury, and must state three things:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={li}>The last day you worked for any earlier employer during the calendar year.</li>
        <li style={li}>That you use the calendar year as your tax year (nearly everyone does).</li>
        <li style={li}>That you reasonably expect to work no more than 245 days in total for all employers this calendar year.</li>
      </ul>

      <p style={p}>
        For the August 24 start above, the employer counts the 235 days from January 1 to August 23 as about 16.8 empty biweekly periods (235 &divide; 14). It adds your first period, for 17.8 periods, and divides your $2,307.69 by 17.8, which averages to about $130 per period. That works out to roughly $3,370 a year, which is below the $16,100 standard deduction, so nothing is withheld for federal income tax on that check. The method keeps a running total, so later checks catch up only if your year-to-date pay ends up taxable. Social Security and Medicare are not affected. The method is in the &ldquo;Alternative Methods for Figuring Withholding&rdquo; section of{' '}
        <a href="https://www.irs.gov/publications/p15t" {...ext} style={link}>Publication 15-T</a>. Not every payroll system handles it smoothly, so ask HR early. If they cannot use it, you can lower withholding with a new W-4 instead, as our{' '}
        <a href="/blog/understanding-your-w4" style={link}>W-4 guide</a> explains, as long as you leave enough withheld to cover what you will owe.
      </p>

      <h2 style={h2}>What to check on your first pay stub</h2>

      <p style={p}>
        Your first pay stub is the best time to catch a setup error before it repeats on every check. Our guide on{' '}
        <a href="/blog/how-to-read-your-pay-stub" style={link}>how to read your pay stub</a> explains each line.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={li}><strong>Pay period dates.</strong> Confirm the start date matches your first day and that every day or hour you worked is counted somewhere, on this check or the next.</li>
        <li style={li}><strong>Rate or salary.</strong> Multiply your hourly rate by your hours, or your daily rate by your days, and compare with gross pay.</li>
        <li style={li}><strong>Filing status.</strong> If the stub shows single but you filed a W-4 as married filing jointly, payroll may not have your form.</li>
        <li style={li}><strong>State and local tax.</strong> Make sure the right state is listed, especially if you live in one state and work in another.</li>
        <li style={li}><strong>Benefit deductions.</strong> Check that the health, dental, and 401(k) amounts match what you elected, and ask about any catch-up deduction you do not recognize.</li>
      </ul>

      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>Is my first paycheck taxed more than the rest?</h3>
      <p style={p}>
        No. A short first check is usually taxed at a lower federal rate, because payroll annualizes it and a small check looks like a small salary. On a $60,000 salary, a five-day check loses 4.7% to federal withholding, while a full check loses 8.4%. A first check can look heavily taxed if it carries a full benefit premium or a bonus, which is withheld at a flat rate.
      </p>

      <h3 style={h3}>How long does it take to get your first paycheck?</h3>
      <p style={p}>
        Most people are paid on the first regular payday after their first pay period closes, which is often one to three weeks after the start date. Employers that pay in arrears can push it a little later. How often you must be paid after that depends on your state&rsquo;s payday law.
      </p>

      <h3 style={h3}>Why did my first paycheck not include all the days I worked?</h3>
      <p style={p}>
        Your last few days probably fell after the payroll cutoff, which often comes several days before payday. Those days should appear on your next check. If they do not, ask payroll for a breakdown by date.
      </p>

      <h3 style={h3}>Can I get a refund if too much was withheld from my first paychecks?</h3>
      <p style={p}>
        Yes. Any federal tax withheld beyond what you owe for the year comes back when you file your return. If you started late in the year, you can reduce the overpayment going forward by asking your employer in writing to use the part-year employment method, or by updating your W-4.
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
          See What a Full Paycheck Will Look Like
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your new salary, state, and pay frequency to see your regular take-home pay once you are on full pay periods.
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
          <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Publication 15-T (2026): Federal Income Tax Withholding Methods (Worksheet 1A, no-W-4 rule, part-year employment method)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Revenue Procedure 2025-32 (2026 brackets and standard deduction)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA, Contribution and Benefit Base (2026 Social Security wage base)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.law.cornell.edu/cfr/text/29/541.602" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>29 CFR 541.602, Salary basis (partial pay in the first and last week of employment)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/state/payday" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor, State Payday Requirements</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          State figures: this site&rsquo;s calculator, using the state tables listed on each <a href="/texas" style={{ color: '#2563eb' }}>state calculator page</a>
        </li>
      </ul>

      <ArticleFooter current="first-paycheck-new-job" />
    </article>
  )
}
