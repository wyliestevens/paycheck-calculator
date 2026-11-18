import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Overtime Exempt Salary Threshold 2026: Does Your Salary Earn Overtime?' },
  description:
    'The 2026 federal overtime threshold is $684 a week ($35,568 a year). See what it means for your take-home pay, state thresholds, and when overtime pays more.',
  alternates: { canonical: '/blog/overtime-exempt-salary-threshold-2026' },
  keywords:
    'overtime exempt salary threshold 2026, exempt salary threshold, $684 per week, salary overtime rules, exempt vs non-exempt, do salaried employees get overtime, California exempt salary 2026, Washington exempt salary 2026',
  openGraph: {
    type: 'article',
    url: '/blog/overtime-exempt-salary-threshold-2026',
    images: [{ url: '/og/blog/overtime-exempt-salary-threshold-2026', width: 1200, height: 630 }],
    title: 'Overtime Exempt Salary Threshold 2026: Does Your Salary Earn Overtime?',
    description:
      'The federal line is $684 a week ($35,568 a year). Ten overtime hours a week at that pay adds about $206 to a weekly check in Texas. Here is the math.',
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
const ul = { fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' } as const

// Thresholds: federal from DOL Fact Sheet 17A, California from DIR (2 x $16.90 x 2,080),
// Washington from L&I. Take-home is this site's calculator (calculateTakeHome), single filer,
// standard deduction, tax year 2026, at exactly the threshold salary.
// [rule, weekly, annual, take-home at threshold]
const thresholdRows: [string, string, string, string][] = [
  ['Federal (FLSA), most states', '$684.00', '$35,568', '$30,759 (Texas)'],
  ['California', '$1,352.00', '$70,304', '$55,566'],
  ['Washington', '$1,541.70', '$80,168.40', '$65,228'],
  ['Federal highly compensated employee', 'at least $684.00 salary', '$107,432 total pay', 'n/a'],
]

// Same calculator, $35,568 salary ($684 a week), single filer, standard deduction, 2026.
// [state, slug, state tax, annual take-home, weekly take-home]
const stateRows: [string, string, string, string, string][] = [
  ['Texas', 'texas', '$0.00', '$30,758.89', '$591.52'],
  ['Florida', 'florida', '$0.00', '$30,758.89', '$591.52'],
  ['Ohio', 'ohio', '$261.75', '$30,497.14', '$586.48'],
  ['California', 'california', '$603.32', '$30,155.57', '$579.91'],
  ['North Carolina', 'north-carolina', '$910.44', '$29,848.45', '$574.01'],
  ['Colorado', 'colorado', '$922.59', '$29,836.30', '$573.77'],
  ['Pennsylvania', 'pennsylvania', '$1,091.94', '$29,666.95', '$570.52'],
  ['Georgia', 'georgia', '$1,223.18', '$29,535.71', '$567.99'],
  ['New York', 'new-york', '$1,399.08', '$29,359.81', '$564.61'],
  ['Illinois', 'illinois', '$1,760.62', '$28,998.27', '$557.66'],
]

// Same calculator. Non-exempt worker on a $684 weekly salary for 40 hours:
// regular rate $17.10, overtime rate $25.65, 52 weeks.
// [OT hours per week, annual gross, Texas, Ohio, California]
const otRows: [string, string, string, string, string][] = [
  ['0 (exempt or 40 hours)', '$35,568', '$30,758.89', '$30,497.14', '$30,155.57'],
  ['5', '$42,237', '$36,117.43', '$35,672.29', '$35,247.35'],
  ['10', '$48,906', '$41,475.97', '$40,847.43', '$40,250.99'],
  ['15', '$55,575', '$46,834.51', '$46,022.58', '$45,209.39'],
  ['20', '$62,244', '$52,193.05', '$51,197.72', '$50,115.33'],
]

export default function OvertimeExemptSalaryThreshold2026() {
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
          aria-label="Clock past 40 hours beside a salary bar marked at the 684 dollar per week overtime exempt threshold"
        >
          <rect width="600" height="200" rx="12" fill="#d97706" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Clock */}
          <circle cx="120" cy="100" r="58" fill="rgba(255,255,255,0.2)" stroke="#fff" strokeWidth="3" />
          <line x1="120" y1="100" x2="120" y2="60" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <line x1="120" y1="100" x2="150" y2="112" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="120" cy="100" r="5" fill="#fff" />
          <text x="120" y="178" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">HOURS PAST 40</text>
          {/* Salary bar */}
          <text x="390" y="46" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="sans-serif">Exempt or overtime?</text>
          <rect x="230" y="70" width="320" height="34" rx="6" fill="rgba(255,255,255,0.2)" />
          <rect x="230" y="70" width="140" height="34" rx="6" fill="rgba(255,255,255,0.45)" />
          <line x1="370" y1="60" x2="370" y2="114" stroke="#fff" strokeWidth="3" />
          <text x="300" y="92" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="sans-serif">Overtime owed</text>
          <text x="460" y="92" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="sans-serif">May be exempt</text>
          <text x="370" y="134" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="monospace">$684/wk</text>
          <text x="370" y="156" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">$35,568 a year, federal 2026</text>
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
        Overtime Exempt Salary Threshold 2026: Does Your Salary Earn Overtime?
      </h1>

      <ArticleMeta slug="overtime-exempt-salary-threshold-2026" />

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
          In 2026 the federal line is <strong>$684 a week, or $35,568 a year</strong>. If your salary is below it, you are owed overtime for hours past 40 no matter what your job title says. If it is above, you can be exempt only if your duties also pass the test. California ($70,304) and Washington ($80,168.40) set much higher lines. At $684 a week, ten paid overtime hours add about <strong>$206 a week</strong> to take-home pay in Texas.
        </p>
      </div>

      <p style={p}>
        Most articles about the overtime salary threshold are written for employers who need to stay compliant. This one is written for the person on the other side of the pay stub. You will see what the threshold is in 2026, how it changed this year, what a paycheck at that salary actually looks like after taxes, and how much money is at stake if you are classified the wrong way.
      </p>

      <p style={p}>
        The take-home figures come from this site&rsquo;s own paycheck calculator for a single filer taking the standard deduction. They use the 2026 federal brackets and the $16,100 standard deduction from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" {...ext} style={link}>IRS Revenue Procedure 2025-32</a>, Social Security at 6.2% on wages up to $184,500, and Medicare at 1.45%.
      </p>

      <h2 style={h2}>What is the overtime exempt salary threshold in 2026?</h2>

      <p style={p}>
        The Fair Labor Standards Act (FLSA) says most workers must get one and a half times their regular rate for every hour over 40 in a workweek. Some salaried workers are &ldquo;exempt&rdquo; from that rule. To be exempt as an executive, administrative, or professional employee, you generally have to pass three tests:
      </p>

      <ul style={ul}>
        <li style={li}><strong>Salary basis:</strong> you get a set salary each pay period that does not go up or down with the hours or quality of your work.</li>
        <li style={li}><strong>Salary level:</strong> that salary is at least <strong>$684 per week</strong>, which is $35,568 over 52 weeks.</li>
        <li style={li}><strong>Duties:</strong> your main job is managing, doing office work tied to running the business with real independent judgment, or doing work that needs advanced learning.</li>
      </ul>

      <p style={p}>
        The $684 figure, the $107,432 line for highly compensated employees, and the $27.63 hourly alternative for some computer workers all appear in the Labor Department&rsquo;s{' '}
        <a href="https://www.dol.gov/agencies/whd/fact-sheets/17a-overtime" {...ext} style={link}>Fact Sheet #17A</a>. Overtime at time and one-half for hours past 40 is described on the{' '}
        <a href="https://www.dol.gov/agencies/whd/overtime" {...ext} style={link}>DOL overtime page</a>.
      </p>

      <h3 style={h3}>Why the number did not go up</h3>
      <p style={p}>
        A 2024 rule would have raised the line well above $684. Federal courts in Texas vacated it, and in May 2026 the Labor Department published a technical amendment that removed the 2024 text and restored the earlier rules (Federal Register{' '}
        <a href="https://www.federalregister.gov/d/2026-09839" {...ext} style={link}>document 2026-09839</a>). So the $684 line from the 2019 rule is still the federal rule for 2026. If you read an older article that quotes a higher federal number, it is describing a rule that never took lasting effect.
      </p>

      <h3 style={h3}>States with a higher line</h3>
      <p style={p}>
        A state can set a higher threshold, and when it does, your employer has to meet the higher one. Two big examples for 2026:
      </p>
      <ul style={ul}>
        <li style={li}>
          <strong>California</strong> requires pay of at least two times the state minimum wage for full-time work, per the{' '}
          <a href="https://www.dir.ca.gov/dlse/faq_overtimeexemptions.htm" {...ext} style={link}>Labor Commissioner&rsquo;s exemption FAQ</a>. The state minimum wage is{' '}
          <a href="https://www.dir.ca.gov/dlse/faq_minimumwage.htm" {...ext} style={link}>$16.90 an hour for 2026</a>. That gives $16.90 &times; 2 &times; 2,080 hours = <strong>$70,304</strong> a year, or $1,352 a week.
        </li>
        <li style={li}>
          <strong>Washington</strong> sets the line at <strong>$1,541.70 a week ($80,168.40 a year)</strong> for 2026, which is 2.25 times the $17.13 state minimum wage, per{' '}
          <a href="https://www.lni.wa.gov/news-events/article/25-36" {...ext} style={link}>Washington L&amp;I</a>.
        </li>
      </ul>
      <p style={p}>
        Several other states, including New York and Colorado, also set their own lines, and some vary by region or by type of exemption. If you work outside California and Washington, check your state labor department&rsquo;s site for the current figure before you compare it with your pay.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Rule</th>
              <th style={thR}>Weekly</th>
              <th style={thR}>Annual</th>
              <th style={thR}>Take-home at the line</th>
            </tr>
          </thead>
          <tbody>
            {thresholdRows.map(([rule, wk, yr, net]) => (
              <tr key={rule}>
                <td style={td}>{rule}</td>
                <td style={tdR}>{wk}</td>
                <td style={tdR}>{yr}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Thresholds: DOL Fact Sheet #17A, California DIR, Washington L&amp;I. Take-home: this site&rsquo;s calculator, single filer, standard deduction, tax year 2026. The federal row uses Texas, which has no state income tax.
      </p>

      <h2 style={h2}>What does a $684 weekly salary take home after taxes?</h2>

      <p style={p}>
        A salary right at the federal line is $35,568 a year. Here is every step from gross to net for a single filer in <a href="/texas" style={link}>Texas</a>, where there is no state income tax.
      </p>

      <div style={mono}>
        Gross pay: $684 &times; 52 = $35,568.00<br />
        Taxable income: $35,568 &minus; $16,100 = $19,468.00<br />
        Federal tax, 10% bracket: $12,400 &times; 10% = $1,240.00<br />
        Federal tax, 12% bracket: ($19,468 &minus; $12,400) &times; 12% = $848.16<br />
        Federal income tax total: <strong>$2,088.16</strong><br />
        Social Security: $35,568 &times; 6.2% = $2,205.22<br />
        Medicare: $35,568 &times; 1.45% = $515.74<br />
        Take-home: $35,568 &minus; $2,088.16 &minus; $2,205.22 &minus; $515.74 = <strong>$30,758.89</strong><br />
        Per week: $30,758.89 &divide; 52 = <strong>$591.52</strong>
      </div>

      <p style={p}>
        Now the same salary in ten states. Federal tax and FICA are identical in every row, so the only thing that changes is state income tax.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>State</th>
              <th style={thR}>State tax</th>
              <th style={thR}>Annual take-home</th>
              <th style={thR}>Weekly take-home</th>
            </tr>
          </thead>
          <tbody>
            {stateRows.map(([name, slug, tax, yr, wk]) => (
              <tr key={slug}>
                <td style={td}><a href={`/${slug}`} style={{ color: '#2563eb' }}>{name}</a></td>
                <td style={tdR}>{tax}</td>
                <td style={tdR}>{yr}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{wk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator, $35,568 salary, single filer, standard deduction, tax year 2026. City and county income taxes are not included.
      </p>

      <p style={p}>
        The spread is $33.86 a week between Texas and <a href="/illinois" style={link}>Illinois</a>. That is real money, but it is small next to what overtime is worth at this pay level, as the next section shows. Note also that an exempt worker at $684 who puts in 50 hours a week is earning $13.68 an hour before tax ($684 &divide; 50).
      </p>

      <h2 style={h2}>How much is overtime worth at the threshold salary?</h2>

      <p style={p}>
        Being non-exempt does not mean you have to be paid hourly. A salaried worker can be non-exempt and still be owed overtime. When a fixed salary is meant to cover a 40-hour week, the regular rate is the weekly salary divided by 40, under{' '}
        <a href="https://www.law.cornell.edu/cfr/text/29/778.113" {...ext} style={link}>29 CFR 778.113</a>. At $684 a week that is $17.10 an hour, so each overtime hour pays $25.65.
      </p>

      <p style={p}>
        The table shows what a worker on that salary keeps over a full year at different weekly overtime levels, in Texas, <a href="/ohio" style={link}>Ohio</a>, and <a href="/california" style={link}>California</a>.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Overtime hours a week</th>
              <th style={thR}>Annual gross</th>
              <th style={thR}>Texas net</th>
              <th style={thR}>Ohio net</th>
              <th style={thR}>California net</th>
            </tr>
          </thead>
          <tbody>
            {otRows.map(([h, g, tx, oh, ca]) => (
              <tr key={h}>
                <td style={td}>{h}</td>
                <td style={tdR}>{g}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{tx}</td>
                <td style={tdR}>{oh}</td>
                <td style={tdR}>{ca}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator, $684 weekly salary for 40 hours, overtime at $25.65 an hour for 52 weeks, single filer, standard deduction, tax year 2026. The federal overtime deduction described below is not included, so actual federal tax may be lower.
      </p>

      <p style={p}>
        Here is the math for the 10-hour row in Texas, step by step.
      </p>

      <div style={mono}>
        Overtime rate: $684 &divide; 40 = $17.10 &times; 1.5 = $25.65<br />
        Weekly overtime: 10 &times; $25.65 = $256.50<br />
        Annual gross: $35,568 + ($256.50 &times; 52) = $48,906.00<br />
        Taxable income: $48,906 &minus; $16,100 = $32,806.00<br />
        Federal tax: $1,240 + ($32,806 &minus; $12,400) &times; 12% = <strong>$3,688.72</strong><br />
        Social Security: $48,906 &times; 6.2% = $3,032.17<br />
        Medicare: $48,906 &times; 1.45% = $709.14<br />
        Take-home: <strong>$41,475.97</strong><br />
        Gain over the exempt worker: $41,475.97 &minus; $30,758.89 = $10,717.08<br />
        Per week: $10,717.08 &divide; 52 = <strong>$206.10</strong>
      </div>

      <p style={p}>
        So of each $256.50 in weekly overtime, about $206 reaches your bank account in Texas. That is about 80 cents on the dollar, because these overtime dollars land in the 12% federal bracket plus 7.65% FICA. In Ohio the gain is $199.04 a week and in California it is $194.14. For more on why overtime sometimes looks heavily taxed on a single check, see our guide on{' '}
        <a href="/blog/how-overtime-pay-is-taxed" style={link}>how overtime pay is taxed</a>.
      </p>

      <h3 style={h3}>The federal overtime deduction</h3>
      <p style={p}>
        For tax years 2025 through 2028, you can deduct the premium part of required FLSA overtime on your federal return, meaning the &ldquo;half&rdquo; in time and a half. The cap is $12,500 a year ($25,000 on a joint return), and it phases out above $150,000 of modified adjusted gross income ($300,000 joint), according to the{' '}
        <a href="https://www.irs.gov/newsroom/what-to-know-about-the-no-tax-on-overtime-deduction" {...ext} style={link}>IRS</a>. You claim it on Schedule 1-A when you file. It does not reduce Social Security, Medicare, or most state taxes.
      </p>
      <div style={mono}>
        Premium part of overtime: $17.10 &times; 0.5 = $8.55 an hour<br />
        Ten hours a week for 52 weeks: $8.55 &times; 10 &times; 52 = $4,446.00<br />
        Federal tax saved at 12%: $4,446 &times; 12% = <strong>$533.52</strong>
      </div>
      <p style={p}>
        That brings the Texas worker&rsquo;s yearly gain from overtime to about $11,250. Exempt workers get none of it, because they are not paid FLSA overtime.
      </p>

      <h2 style={h2}>Do salaried employees get overtime?</h2>

      <p style={p}>
        Some do and some do not. Being paid a salary is only one of the three tests. Here is a quick decision path:
      </p>

      <ol style={ul}>
        <li style={li}><strong>Is your salary below $684 a week</strong> (or below your state&rsquo;s higher line)? Then you are owed overtime for hours past 40. Your title does not matter.</li>
        <li style={li}><strong>Does your pay drop when you work fewer hours</strong> in a week? If your employer docks partial days in ways the rules do not allow, you may not be paid on a salary basis. The DOL explains the salary basis rules in{' '}
          <a href="https://www.dol.gov/agencies/whd/fact-sheets/17g-overtime-salary" {...ext} style={link}>Fact Sheet #17G</a>.</li>
        <li style={li}><strong>Do your main duties fit an exemption?</strong> A &ldquo;manager&rdquo; who spends the day running a register and has no say in hiring may fail the duties test even at a higher salary.</li>
        <li style={li}><strong>If you pass all three</strong>, you can be exempt, and your salary is the same whether you work 40 hours or 55.</li>
      </ol>

      <p style={p}>
        Our guide to <a href="/blog/hourly-vs-salary-taxes" style={link}>hourly vs. salary pay</a> covers how taxes compare between the two pay types. The tax rules are the same. The overtime rules are not.
      </p>

      <h2 style={h2}>What does it cost you to be classified exempt by mistake?</h2>

      <p style={p}>
        Take a worker in Texas on a $34,000 salary who regularly works 45 hours. That salary is under the $684 weekly line, so the worker is non-exempt. The regular rate is $34,000 &divide; 2,080 = $16.35, and five overtime hours a week at $24.52 add $6,375 a year.
      </p>

      <div style={mono}>
        Non-exempt, $34,000 + $6,375 overtime = $40,375 gross &rarr; take-home $34,621.31<br />
        Raised to $35,568 and made exempt &rarr; take-home $30,758.89<br />
        Difference: <strong>$3,862.42 a year less</strong> after the &ldquo;raise&rdquo;
      </div>

      <p style={p}>
        Here is a decision rule. The raise to the line is worth $1,568 a year ($35,568 &minus; $34,000). Overtime at $24.52 an hour is worth $1,275 a year for each weekly hour ($24.52 &times; 52). So if you work more than about <strong>1.2 overtime hours a week</strong>, the bump to exempt status leaves you with less pay. In <a href="/pennsylvania" style={link}>Pennsylvania</a> the same comparison costs $3,714.85 after state tax.
      </p>

      <p style={p}>
        The stakes grow in states with a high line. A California worker on a $68,000 salary is below the $70,304 state threshold, so the worker is owed overtime under state law. California also pays time and a half after 8 hours in a day, not only after 40 in a week, per the{' '}
        <a href="https://www.dir.ca.gov/dlse/faq_overtime.htm" {...ext} style={link}>Labor Commissioner&rsquo;s overtime FAQ</a>. Five weekly overtime hours at $49.04 add $12,750 a year. This site&rsquo;s calculator puts take-home at $61,990.25 with that overtime, against $54,129.80 without it. That is <strong>$7,860.45 a year</strong> of take-home on the line.
      </p>

      <h2 style={h2}>What to check on your own pay stub</h2>

      <ul style={ul}>
        <li style={li}><strong>Divide your gross pay per check by the weeks in the period.</strong> On a biweekly check, $1,368 gross is exactly $684 a week. Anything less on a salaried check means the exemption cannot apply. See our guide on{' '}
          <a href="/blog/weekly-vs-biweekly-vs-monthly-pay" style={link}>weekly vs. biweekly vs. monthly pay</a> for the period math.</li>
        <li style={li}><strong>Look for an overtime line.</strong> Non-exempt workers should see overtime hours and an overtime rate. Our guide to{' '}
          <a href="/blog/how-to-read-your-pay-stub" style={link}>reading your pay stub</a> shows where it usually appears.</li>
        <li style={li}><strong>Keep your own record of hours.</strong> If you think you are owed overtime, a simple log of start and end times is the evidence you will need.</li>
        <li style={li}><strong>Check Box 12 on your W-2.</strong> For 2026, IRS Publication 505 lists code TT for reporting qualified overtime, which supports the federal deduction above. Our guide to{' '}
          <a href="/blog/understanding-your-w2" style={link}>understanding your W-2</a> walks through the other boxes.</li>
      </ul>

      <p style={p}>
        If you think you have been misclassified, you can contact the{' '}
        <a href="https://www.dol.gov/agencies/whd/contact/complaints" {...ext} style={link}>Wage and Hour Division</a> or your state labor department. Back pay claims depend on records, so start keeping them now.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>What is the minimum salary to be exempt from overtime in 2026?</h3>
      <p style={p}>
        Under federal law it is $684 a week, which is $35,568 a year. Your state can require more. California requires $70,304 and Washington requires $80,168.40 in 2026, and other states set their own lines.
      </p>

      <h3 style={h3}>Did the overtime salary threshold change in 2026?</h3>
      <p style={p}>
        No. The 2024 rule that would have raised it was vacated by the courts, and in May 2026 the Labor Department formally removed it. The federal line stays at $684 a week, the level set by the 2019 rule.
      </p>

      <h3 style={h3}>Can a salaried employee be non-exempt?</h3>
      <p style={p}>
        Yes. If your salary is below the threshold or your duties do not fit an exemption, you are owed overtime even though you are paid a salary. Your regular rate is usually your weekly salary divided by the hours it is meant to cover.
      </p>

      <h3 style={h3}>Is overtime taxed more than regular pay?</h3>
      <p style={p}>
        No. Overtime is taxed at the same rates as the rest of your wages. It can look heavily taxed on a single check because payroll treats the bigger check as if you earned that much all year. Any extra withheld comes back when you file, and the premium part may qualify for the federal overtime deduction.
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
          See Your Own Take-Home Pay
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary or hourly rate, your state, and your pay frequency to see what lands in your account each payday.
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
          <a href="https://www.dol.gov/agencies/whd/fact-sheets/17a-overtime" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor, Fact Sheet #17A: Exemption for Executive, Administrative, Professional, Computer and Outside Sales Employees ($684 a week, $107,432, $27.63)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/fact-sheets/17g-overtime-salary" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor, Fact Sheet #17G: Salary Basis Requirement</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor, Overtime Pay</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.federalregister.gov/d/2026-09839" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Federal Register, Document 2026-09839 (May 2026 technical amendment restoring the Part 541 rules)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.law.cornell.edu/cfr/text/29/778.113" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>29 CFR 778.113, Salaried employees: regular rate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dir.ca.gov/dlse/faq_overtimeexemptions.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California DIR, Overtime Exemptions FAQ (salary test of two times the state minimum wage)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dir.ca.gov/dlse/faq_minimumwage.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California DIR, Minimum Wage FAQ ($16.90 an hour for 2026)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dir.ca.gov/dlse/faq_overtime.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California DIR, Overtime FAQ (daily overtime after 8 hours)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.lni.wa.gov/news-events/article/25-36" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Washington L&amp;I, 2026 minimum wage and exempt salary threshold ($1,541.70 a week)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/what-to-know-about-the-no-tax-on-overtime-deduction" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, What to know about the No Tax on Overtime deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p505.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Publication 505 (2026), Tax Withholding and Estimated Tax (W-2 code TT)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Revenue Procedure 2025-32 (2026 brackets and standard deduction)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA, Contribution and Benefit Base (2026 Social Security wage base)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          State figures: this site&rsquo;s calculator, using the state tables listed on each <a href="/texas" style={{ color: '#2563eb' }}>state calculator page</a>
        </li>
      </ul>

      <ArticleFooter current="overtime-exempt-salary-threshold-2026" />
    </article>
  )
}
