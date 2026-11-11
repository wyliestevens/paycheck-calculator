import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Jury Duty Pay: Will Your Paycheck Shrink, and Is It Taxed? (2026)' },
  description:
    'A week of unpaid jury duty on a $60,000 salary costs $927 in take-home pay. See who must pay you, the $50 federal juror fee, and how jury pay is taxed.',
  alternates: { canonical: '/blog/jury-duty-pay-and-your-paycheck' },
  keywords:
    'jury duty pay, do employers have to pay for jury duty, is jury duty pay taxable, jury duty paycheck, jury duty salaried employee, give jury pay to employer',
  openGraph: {
    type: 'article',
    url: '/blog/jury-duty-pay-and-your-paycheck',
    images: [{ url: '/og/blog/jury-duty-pay-and-your-paycheck', width: 1200, height: 630 }],
    title: 'Jury Duty Pay: Will Your Paycheck Shrink, and Is It Taxed? (2026)',
    description:
      'A week of unpaid jury duty on a $60,000 salary costs $927 in take-home pay. Who must pay you, the $50 federal juror fee, and how jury pay is taxed.',
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
// Texas (no state income tax), tax year 2026. Daily pay = salary / 260 workdays.
// [salary, daily gross, 5-day gross, 5-day lost take-home, 10-day gross, 10-day lost take-home, federal bracket]
const salaryRows: [string, string, string, string, string, string, string][] = [
  ['$40,000', '$153.85', '$769.23', '$618.08', '$1,538.46', '$1,236.15', '12%'],
  ['$50,000', '$192.31', '$961.54', '$772.60', '$1,923.08', '$1,545.19', '12%'],
  ['$60,000', '$230.77', '$1,153.85', '$927.12', '$2,307.69', '$1,854.23', '12%'],
  ['$75,000', '$288.46', '$1,442.31', '$1,014.66', '$2,884.62', '$2,029.33', '22%'],
  ['$100,000', '$384.62', '$1,923.08', '$1,352.88', '$3,846.15', '$2,705.77', '22%'],
  ['$150,000', '$576.92', '$2,884.62', '$1,971.63', '$5,769.23', '$3,943.27', '24%'],
]

// Same calculator, $60,000 salary, five unpaid days ($1,153.85 gross), by state.
// [state, slug, lost take-home, taxes you no longer pay]
const stateRows: [string, string, string, string][] = [
  ['Texas', 'texas', '$927.12', '$226.73'],
  ['Florida', 'florida', '$927.12', '$226.73'],
  ['Ohio', 'ohio', '$895.39', '$258.46'],
  ['Pennsylvania', 'pennsylvania', '$891.69', '$262.16'],
  ['North Carolina', 'north-carolina', '$881.08', '$272.77'],
  ['Colorado', 'colorado', '$876.35', '$277.50'],
  ['Illinois', 'illinois', '$870.00', '$283.85'],
  ['Massachusetts', 'massachusetts', '$869.42', '$284.43'],
  ['Georgia', 'georgia', '$867.23', '$286.62'],
  ['New York', 'new-york', '$859.62', '$294.23'],
  ['California', 'california', '$850.30', '$303.55'],
  ['Oregon', 'oregon', '$826.16', '$327.69'],
]

export default function JuryDutyPayAndYourPaycheck() {
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
          aria-label="A jury box with twelve seats beside a paycheck that loses $927 of take-home pay after five unpaid days of jury duty"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Jury box: two rows of six seats */}
          <rect x="45" y="60" width="210" height="100" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={`a${i}`} cx={70 + i * 32} cy={88} r="10" fill="#fff" />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={`b${i}`} cx={70 + i * 32} cy={128} r="10" fill="rgba(255,255,255,0.7)" />
          ))}
          <text x="150" y="48" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">5 DAYS OF JURY DUTY</text>
          {/* Arrow */}
          <line x1="270" y1="110" x2="310" y2="110" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="310,102 325,110 310,118" fill="rgba(255,255,255,0.7)" />
          {/* Paycheck */}
          <rect x="340" y="50" width="220" height="110" rx="8" fill="#fff" />
          <text x="355" y="74" fontSize="11" fontWeight="600" fill="#4f46e5" fontFamily="sans-serif">$60,000 SALARY, UNPAID LEAVE</text>
          <text x="355" y="98" fontSize="11" fill="#475569" fontFamily="sans-serif">Gross pay lost</text>
          <text x="545" y="98" textAnchor="end" fontSize="12" fill="#475569" fontFamily="monospace">$1,153.85</text>
          <text x="355" y="118" fontSize="11" fill="#475569" fontFamily="sans-serif">Taxes you skip</text>
          <text x="545" y="118" textAnchor="end" fontSize="12" fill="#475569" fontFamily="monospace">$226.73</text>
          <line x1="355" y1="128" x2="545" y2="128" stroke="#e2e8f0" strokeWidth="1" />
          <text x="355" y="148" fontSize="12" fontWeight="700" fill="#1e293b" fontFamily="sans-serif">Take-home lost</text>
          <text x="545" y="148" textAnchor="end" fontSize="14" fontWeight="800" fill="#dc2626" fontFamily="monospace">$927.12</text>
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
        Jury Duty Pay: Will Your Paycheck Shrink, and Is It Taxed? (2026)
      </h1>

      <ArticleMeta slug="jury-duty-pay-and-your-paycheck" />

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
          Federal law does not make private employers pay you during jury duty, and only some states do. If you earn $60,000 and miss a full week unpaid, your take-home pay drops by about <strong>$927</strong>, not the full $1,154 of gross pay, because the taxes on that pay disappear too. A federal court pays jurors <strong>$50 a day</strong>, and that fee is taxable income. If your employer keeps paying you and you hand the fee over, you can deduct what you hand over, so you are not taxed on it twice.
        </p>
      </div>

      <p style={p}>
        A jury summons raises two money questions at once. Will I still get paid? And if the court pays me, do I owe tax on it? Most answers online cover only the first one, and they usually stop at a list of state laws. This guide adds the part those lists skip: what a week or two of unpaid jury service actually does to your take-home pay at different salaries, why salaried workers have extra protection that hourly workers do not, and the one line on your tax return that keeps you from paying tax on money you gave back.
      </p>

      <p style={p}>
        The take-home figures below come from this site&rsquo;s own paycheck calculator, using the 2026 federal brackets and standard deduction from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" {...ext} style={link}>IRS Revenue Procedure 2025-32</a>. The case is a single filer with the standard deduction and no pre-tax deductions. Daily pay is your salary divided by 260 workdays.
      </p>

      <h2 style={h2}>Does your employer have to pay you for jury duty?</h2>

      <p style={p}>
        Under federal law, no. The federal courts say plainly that employers may continue your salary during jury service but are not required to. What federal law does require is job protection. The{' '}
        <a href="https://www.uscourts.gov/court-programs/jury-service/juror-pay" {...ext} style={link}>Jury Selection and Service Act</a> bars an employer from firing, intimidating, or coercing a permanent employee because of federal jury service. State court juries are covered by each state&rsquo;s own rules, so check your state court&rsquo;s juror page.
      </p>

      <p style={p}>
        Pay is a different matter, and it depends on three things: your state, whether you are salaried or hourly, and your employer&rsquo;s own policy. Many employers pay full salary for jury duty even when no law requires it, so check your handbook first. If the policy is silent, the rules below decide what lands in your check.
      </p>

      <h3 style={h3}>Some states require employers to pay for the first few days</h3>

      <p style={p}>
        A minority of states put part of the cost on the employer. Three examples, each checked against the state&rsquo;s own statute or court website for this guide:
      </p>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={li}>
          <strong>Massachusetts:</strong> every regularly employed juror must be paid regular wages by the employer for the first three days of service, and that includes part-time and temporary workers with a predictable schedule (
          <a href="https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleII/Chapter234A/Section48" {...ext} style={link}>M.G.L. c. 234A, Section 48</a>). From the fourth day on, the state pays trial jurors $50 a day (
          <a href="https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleII/Chapter234A/Section51" {...ext} style={link}>Section 51</a>).
        </li>
        <li style={li}>
          <strong>New York:</strong> an employer with more than ten employees may not withhold the first $72 of your daily wages during the first three days of jury service (
          <a href="https://www.nysenate.gov/legislation/laws/JUD/519" {...ext} style={link}>Judiciary Law Section 519</a>). Smaller employers may withhold wages.
        </li>
        <li style={li}>
          <strong>Colorado:</strong> regularly employed jurors must be paid regular wages for the first three days, capped at $50 a day unless you and your employer agree to more (
          <a href="https://www.coloradojudicial.gov/jury/information-employers" {...ext} style={link}>Colorado Judicial Branch, C.R.S. 13-71-126</a>).
        </li>
      </ul>

      <p style={p}>
        Notice what these rules have in common. They cover only the first few days, and two of the three cap the amount. On a $60,000 salary your daily pay is $230.77, so a $72 or $50 floor replaces less than a third of it. A long trial can still mean unpaid days unless your employer chooses to pay.
      </p>

      <h2 style={h2}>Can a salaried employee be docked for jury duty?</h2>

      <p style={p}>
        This is the rule most people miss, and it can be worth hundreds of dollars. If you are a salaried employee who is exempt from overtime, federal regulations limit when your employer can cut your pay for jury duty. Under{' '}
        <a href="https://www.govinfo.gov/content/pkg/CFR-2025-title29-vol3/xml/CFR-2025-title29-vol3-sec541-602.xml" {...ext} style={link}>29 CFR 541.602</a>:
      </p>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={li}>An exempt employee must receive the full salary for any week in which they perform any work, no matter how many days or hours they worked.</li>
        <li style={li}>An employer cannot make deductions for absences caused by jury duty. It can subtract the jury fees you received for that week from your salary for that week.</li>
        <li style={li}>An employer does not have to pay an exempt employee for a workweek in which they perform no work at all.</li>
      </ul>

      <p style={p}>
        Put together, that gives you a simple decision rule. If you serve three days and work two in the same week, you are owed the full week&rsquo;s salary, minus any juror fee your employer chooses to offset. If you serve every workday of a week and do no work at all, your employer may lawfully skip that week&rsquo;s pay unless state law or company policy says otherwise. A trial that runs Wednesday to Tuesday touches two workweeks with some work in each, so both weeks are fully paid. A trial that runs Monday to Friday may not be.
      </p>

      <p style={p}>
        Hourly workers and non-exempt salaried workers do not get this protection. For them, unpaid jury days work like any other unpaid leave: no hours, no pay, unless a state law or employer policy fills the gap. Our{' '}
        <a href="/blog/hourly-vs-salary-taxes" style={link}>hourly vs. salary guide</a> explains the exempt and non-exempt split in more detail.
      </p>

      <h2 style={h2}>How much take-home pay do you lose for unpaid jury duty?</h2>

      <p style={p}>
        Less than your gross daily pay. When a day of wages disappears, the federal income tax, Social Security, and Medicare on that day disappear with it. So the real cost is your gross pay times one minus your combined marginal tax rate. The table shows what five and ten unpaid days cost at six salaries in a state with no income tax.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Salary</th>
              <th style={thR}>Daily gross</th>
              <th style={thR}>5 days gross</th>
              <th style={thR}>5 days take-home lost</th>
              <th style={thR}>10 days take-home lost</th>
              <th style={thR}>Federal bracket</th>
            </tr>
          </thead>
          <tbody>
            {salaryRows.map(([sal, daily, g5, n5, , n10, br]) => (
              <tr key={sal}>
                <td style={td}>{sal}</td>
                <td style={tdR}>{daily}</td>
                <td style={tdR}>{g5}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{n5}</td>
                <td style={tdR}>{n10}</td>
                <td style={tdR}>{br}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator, single filer, standard deduction, no state income tax (for example <a href="/texas" style={{ color: '#94a3b8' }}>Texas</a> or <a href="/florida" style={{ color: '#94a3b8' }}>Florida</a>), tax year 2026. Juror fees are not subtracted.
      </p>

      <p style={p}>
        Two patterns stand out. First, in the 12% bracket you keep about 80 cents of every lost dollar, so the loss is about 80% of gross. In the 22% bracket the loss is about 70%, and at $150,000 it is about 68%. Second, the dollar loss still climbs fast with salary. A two-week trial costs a $100,000 earner $2,705.77 in take-home pay, which is close to a full biweekly paycheck after taxes.
      </p>

      <h3 style={h3}>Does your state change the cost?</h3>

      <p style={p}>
        Yes, a little. If your state has an income tax, part of each lost dollar would have gone to the state anyway, so the take-home hit is smaller. Here is the same five-day absence on a $60,000 salary across twelve states, before any employer pay rule or juror fee.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>State</th>
              <th style={thR}>Take-home lost (5 days)</th>
              <th style={thR}>Taxes you no longer pay</th>
            </tr>
          </thead>
          <tbody>
            {stateRows.map(([name, slug, lost, saved]) => (
              <tr key={slug}>
                <td style={td}>
                  <a href={`/${slug}`} style={link}>{name}</a>
                </td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{lost}</td>
                <td style={tdR}>{saved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator, $60,000 salary, $1,153.85 of lost gross pay, single filer, standard deduction, tax year 2026. City and county income taxes are not included.
      </p>

      <p style={p}>
        The spread from <a href="/texas" style={link}>Texas</a> to <a href="/oregon" style={link}>Oregon</a> is about $101. That is real money, but the bigger driver is whether anyone pays you at all. Apply the state rules from earlier to the same $60,000 worker and a five-day trial, and the engine gives these results:
      </p>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={li}>
          <a href="/massachusetts" style={link}>Massachusetts</a>: the employer pays three days, so only two days ($461.54 gross) go unpaid. Take-home lost: <strong>$347.77</strong>, before the state&rsquo;s $50 for each day after the third.
        </li>
        <li style={li}>
          <a href="/new-york" style={link}>New York</a>, employer with more than ten workers: $72 a day is protected for three days, leaving $937.85 of gross unpaid. Take-home lost: <strong>$698.70</strong>.
        </li>
        <li style={li}>
          <a href="/colorado" style={link}>Colorado</a>: the employer pays $50 a day for three days, leaving $1,003.85 unpaid. Take-home lost: <strong>$762.42</strong>.
        </li>
      </ul>

      <h2 style={h2}>Worked example: one unpaid week on a $60,000 salary</h2>

      <p style={p}>
        Here is the full math behind the $927.12 figure for a single filer in Texas who misses five workdays with no pay from the employer. It compares the year with and without that week.
      </p>

      <div style={mono}>
        <div><strong>Step 1. Daily pay and lost gross</strong></div>
        <div>$60,000 &divide; 260 workdays = $230.77 per day</div>
        <div>$230.77 &times; 5 days = $1,153.85 lost gross</div>
        <div>New annual gross: $60,000 &minus; $1,153.85 = $58,846.15</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 2. Federal income tax, full year</strong></div>
        <div>$60,000 &minus; $16,100 standard deduction = $43,900 taxable</div>
        <div>10% &times; $12,400 = $1,240.00</div>
        <div>12% &times; $31,500 = $3,780.00</div>
        <div>Total = $5,020.00</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 3. Federal income tax, with the unpaid week</strong></div>
        <div>$58,846.15 &minus; $16,100 = $42,746.15 taxable</div>
        <div>10% &times; $12,400 = $1,240.00</div>
        <div>12% &times; $30,346.15 = $3,641.54</div>
        <div>Total = $4,881.54</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 4. FICA on each version</strong></div>
        <div>Full year: $3,720.00 Social Security (6.2%) + $870.00 Medicare (1.45%)</div>
        <div>Unpaid week: $3,648.46 Social Security + $853.27 Medicare</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 5. Take-home pay</strong></div>
        <div>Full year: $60,000 &minus; $5,020.00 &minus; $3,720.00 &minus; $870.00 = $50,390.00</div>
        <div>Unpaid week: $58,846.15 &minus; $4,881.54 &minus; $3,648.46 &minus; $853.27 = $49,462.88</div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          Take-home lost = $50,390.00 &minus; $49,462.88 = <strong>$927.12</strong>
        </div>
        <div style={{ marginTop: '0.75rem' }}><strong>Shortcut check</strong></div>
        <div>$1,153.85 &times; (12% + 6.2% + 1.45%) = $226.73 in taxes avoided</div>
        <div>$1,153.85 &minus; $226.73 = $927.12</div>
      </div>

      <p style={p}>
        The shortcut works whenever the lost pay stays inside one tax bracket, which is the usual case for a short trial. You can find your own bracket in our{' '}
        <a href="/blog/tax-brackets-explained" style={link}>tax brackets guide</a>, then add 7.65% for{' '}
        <a href="/blog/fica-taxes-explained" style={link}>FICA</a> and your state&rsquo;s top rate.
      </p>

      <p style={p}>
        Now add the juror fee. If this worker served in federal court, the court pays{' '}
        <a href="https://www.uscourts.gov/court-programs/jury-service/juror-pay" {...ext} style={link}>$50 a day</a>, or $250 for the week. That fee is taxable income, so at a 12% federal rate about $30 goes to income tax and roughly $220 is left. Net cost of the week: $927.12 &minus; $220 = about <strong>$707</strong>. State court fees vary by state and are often lower than a day&rsquo;s wages, so the pay gap is the main cost for most people.
      </p>

      <h3 style={h3}>What it looks like on your pay stub</h3>

      <p style={p}>
        If all five days fall in one biweekly pay period, that check carries the whole hit. A $60,000 salary is $2,307.69 gross per biweekly check, so the jury week cuts that check&rsquo;s gross roughly in half. Your employer&rsquo;s withholding for that check will also drop, because withholding is figured on the smaller gross. The annual numbers above are what you end up with once the year settles. If a check looks wrong, our{' '}
        <a href="/blog/how-to-read-your-pay-stub" style={link}>pay stub guide</a> shows where to find the hours and leave codes.
      </p>

      <h2 style={h2}>Is jury duty pay taxable?</h2>

      <p style={p}>
        Yes. IRS{' '}
        <a href="https://www.irs.gov/publications/p525" {...ext} style={link}>Publication 525</a> (the edition for 2025 returns) says jury duty pay must be included in your income on Schedule 1 of Form 1040, line 8h. The court is paying you a fee, not wages, so it is reported as other income rather than as part of your W-2 pay. Any amount a court pays to cover travel is a separate matter: the same publication says reimbursed expenses are generally not taxable to the extent they do not exceed your actual costs.
      </p>

      <h3 style={h3}>What if you have to give the fee to your employer?</h3>

      <p style={p}>
        Some employers keep paying your full salary during jury duty but require you to sign your juror fee over to them. In that case you are taxed on your salary through payroll as usual, and Publication 525 lets you deduct the amount you turned over. You enter it on Schedule 1, line 24a, as an adjustment to income. You do not need to itemize to claim it.
      </p>

      <p style={p}>
        The net effect should be zero. You report the fee on line 8h and subtract the same amount on line 24a. Skip the second step and you pay tax on money you never kept. On a two-week federal trial ($500 in fees) at a 12% bracket, that mistake costs $60 in federal income tax, plus state tax where your state follows the federal adjustment.
      </p>

      <h2 style={h2}>Common jury pay mistakes and what they cost</h2>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={li}>
          <strong>Assuming a salaried paycheck will be docked.</strong> If you are exempt and you work any part of the week, your employer owes the full salary for that week. Missing this can cost a $60,000 earner up to $185 in take-home pay for each partial day wrongly deducted.
        </li>
        <li style={li}>
          <strong>Forgetting the line 24a deduction.</strong> If you hand your fee to your employer and do not deduct it, you pay tax twice. Cost: your bracket times the fee.
        </li>
        <li style={li}>
          <strong>Not reporting the fee at all.</strong> Juror fees are small, but they are income. Leaving them off your return understates your income.
        </li>
        <li style={li}>
          <strong>Ignoring your state&rsquo;s pay rule.</strong> In Massachusetts, three days of regular wages are required by law. A worker who does not ask for them gives up most of a week&rsquo;s exposure.
        </li>
        <li style={li}>
          <strong>Planning a budget around gross pay.</strong> The real hole in your budget is the take-home figure in the tables above, not your daily gross. Plan for that number, minus any fee you will receive.
        </li>
      </ul>

      <p style={p}>
        If you are already stretched, ask the court about a deferral before your service date. Many courts let you ask to postpone service to a better time, and asking costs nothing. For any longer unpaid stretch, our guide to{' '}
        <a href="/blog/gross-pay-vs-net-pay" style={link}>gross pay vs. net pay</a> walks through how to budget from take-home figures.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>How much do federal jurors get paid?</h3>
      <p style={p}>
        Federal jurors receive $50 a day. A trial juror can receive up to $60 a day after serving ten days if the presiding judge orders it, and grand jurors can receive up to $60 a day after 45 days. Courts also reimburse reasonable transportation costs. Federal employees receive their regular salary instead of the fee (
        <a href="https://www.uscourts.gov/court-programs/jury-service/juror-pay" {...ext} style={link}>U.S. Courts, Juror Pay</a>).
      </p>

      <h3 style={h3}>Does jury duty pay count as income on my taxes?</h3>
      <p style={p}>
        Yes. You report it on Schedule 1 (Form 1040), line 8h, according to IRS Publication 525. If you gave the fee to your employer because they kept paying your salary, deduct the amount you gave back on line 24a so the two cancel out.
      </p>

      <h3 style={h3}>Can my employer stop paying my salary while I serve?</h3>
      <p style={p}>
        It depends on your status and your state. A private employer has no federal duty to pay for jury service. But if you are an exempt salaried employee, your employer must pay the full salary for any week in which you do some work, and can only offset the juror fees you received that week. Some states, such as Massachusetts, New York, and Colorado, also require employers to pay for the first few days.
      </p>

      <h3 style={h3}>Can I be fired for going to jury duty?</h3>
      <p style={p}>
        Not for federal jury service. The Jury Selection and Service Act bars employers from firing, intimidating, or coercing permanent employees because of it. For state court juries, your state&rsquo;s own law applies, so check your state court&rsquo;s juror information page if you get pushback.
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
          See What a Short Paycheck Really Costs You
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see your take-home pay per check, then compare it with a lower annual figure to see the effect of unpaid days.
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
          <a href="https://www.irs.gov/publications/p525" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Publication 525: Taxable and Nontaxable Income (jury duty pay, Schedule 1 lines 8h and 24a)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.uscourts.gov/court-programs/jury-service/juror-pay" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Courts, Juror Pay ($50 a day, $60 after 10 or 45 days, employer protections)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.govinfo.gov/content/pkg/CFR-2025-title29-vol3/xml/CFR-2025-title29-vol3-sec541-602.xml" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>29 CFR 541.602, Salary basis (exempt employees and jury duty)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleII/Chapter234A/Section48" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Massachusetts General Laws c. 234A, Section 48 (employer pays first three days)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleII/Chapter234A/Section51" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Massachusetts General Laws c. 234A, Section 51 ($50 a day from the fourth day)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.nysenate.gov/legislation/laws/JUD/519" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>New York Judiciary Law Section 519 (first $72 a day for three days, employers over ten employees)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.coloradojudicial.gov/jury/information-employers" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Colorado Judicial Branch, Information for Employers (C.R.S. 13-71-126, up to $50 a day for three days)</a>
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

      <ArticleFooter current="jury-duty-pay-and-your-paycheck" />
    </article>
  )
}
