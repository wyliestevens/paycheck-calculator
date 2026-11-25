import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Holiday Pay Rules 2026: Is It Required, and How Is It Taxed?' },
  description:
    'No federal law requires holiday pay. If you get time and a half, 8 holiday hours at $25 add $241.05 to take-home in Texas. See 12 states and the overtime rules.',
  alternates: { canonical: '/blog/holiday-pay-rules-and-taxes' },
  keywords:
    'holiday pay rules, is holiday pay required by law, how is holiday pay taxed, holiday pay time and a half, do holiday hours count toward overtime, holiday pay 2026, salaried holiday pay',
  openGraph: {
    type: 'article',
    url: '/blog/holiday-pay-rules-and-taxes',
    images: [{ url: '/og/blog/holiday-pay-rules-and-taxes', width: 1200, height: 630 }],
    title: 'Holiday Pay Rules 2026: Is It Required, and How Is It Taxed?',
    description:
      'No federal law requires holiday pay. See what 8 holiday hours at time and a half add to take-home in 12 states, and how holiday hours affect overtime.',
  },
}

const p = { fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' } as const
const h2 = { fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' } as const
const h3 = { fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' } as const
const link = { color: '#2563eb', textDecoration: 'underline' } as const
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const ul = { fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' } as const
const li = { marginBottom: '0.5rem' } as const
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

// [state, slug, $20/hr x 8h at 1.5x ($240 gross), $25/hr x 8h at 1.5x ($300 gross), $25/hr x 8h at 2x ($400 gross)]
// Extra annual take-home from this site's calculator: take-home at (base + holiday pay) minus take-home at base.
// Base = hourly rate x 2,080 hours. Single filer, standard deduction, tax year 2026.
const premiumRows: [string, string, string, string, string][] = [
  ['Texas', 'texas', '$192.84', '$241.05', '$321.40'],
  ['Arizona', 'arizona', '$186.84', '$233.55', '$311.40'],
  ['Ohio', 'ohio', '$186.23', '$232.80', '$310.40'],
  ['Pennsylvania', 'pennsylvania', '$185.47', '$231.84', '$309.12'],
  ['Rhode Island', 'rhode-island', '$183.84', '$229.80', '$306.40'],
  ['North Carolina', 'north-carolina', '$183.26', '$229.08', '$305.44'],
  ['Illinois', 'illinois', '$180.96', '$226.20', '$301.60'],
  ['Massachusetts', 'massachusetts', '$180.84', '$226.05', '$301.40'],
  ['Georgia', 'georgia', '$180.38', '$225.48', '$300.64'],
  ['New York', 'new-york', '$178.80', '$223.50', '$298.00'],
  ['California', 'california', '$183.24', '$223.05', '$297.40'],
  ['Oregon', 'oregon', '$171.84', '$214.80', '$286.40'],
]

// [state, slug, $20/hr: 64 unpaid hours ($1,280 gross) take-home lost, $25/hr: 64 unpaid hours ($1,600 gross) take-home lost]
// Take-home at full 2,080 hours minus take-home at 2,016 hours. Same calculator and assumptions.
const unpaidRows: [string, string, string, string][] = [
  ['Texas', 'texas', '$1,028.48', '$1,285.60'],
  ['Rhode Island', 'rhode-island', '$980.48', '$1,225.60'],
  ['New York', 'new-york', '$953.60', '$1,192.00'],
  ['California', 'california', '$977.28', '$1,189.60'],
  ['Oregon', 'oregon', '$916.48', '$1,145.60'],
]

export default function HolidayPayRulesAndTaxes() {
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
          aria-label="Calendar page marked as a holiday next to a time card showing 8 hours at 1.5 times pay"
        >
          <rect width="600" height="200" rx="12" fill="#dc2626" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Calendar */}
          <rect x="60" y="45" width="130" height="120" rx="8" fill="rgba(255,255,255,0.92)" />
          <rect x="60" y="45" width="130" height="32" rx="8" fill="rgba(255,255,255,0.35)" />
          <rect x="85" y="35" width="8" height="20" rx="3" fill="#ffffff" />
          <rect x="157" y="35" width="8" height="20" rx="3" fill="#ffffff" />
          <text x="125" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#7f1d1d" fontFamily="sans-serif">HOLIDAY</text>
          <text x="125" y="135" textAnchor="middle" fontSize="44" fontWeight="700" fill="#dc2626" fontFamily="sans-serif">26</text>
          <text x="125" y="155" textAnchor="middle" fontSize="11" fill="#7f1d1d" fontFamily="sans-serif">NOVEMBER</text>
          {/* Arrow */}
          <line x1="210" y1="105" x2="255" y2="105" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <polygon points="255,97 270,105 255,113" fill="rgba(255,255,255,0.7)" />
          {/* Time card */}
          <rect x="290" y="45" width="250" height="120" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="310" y="72" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">TIME CARD</text>
          <text x="310" y="102" fontSize="16" fill="#ffffff" fontFamily="monospace">8 hrs &#215; 1.5</text>
          <line x1="310" y1="115" x2="520" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <text x="310" y="145" fontSize="22" fontWeight="700" fill="#ffffff" fontFamily="monospace">+$241.05</text>
          <text x="445" y="145" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">after tax</text>
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
        Holiday Pay Rules 2026: Is It Required, and How Is It Taxed?
      </h1>

      <ArticleMeta slug="holiday-pay-rules-and-taxes" />

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
          No federal law makes a private employer pay you for a holiday or pay extra when you work one. Holiday pay is a company policy, a union contract term, or in a few places a state rule. When you do get it, it is taxed like any other wages. Eight holiday hours at time and a half on a $25 wage add $300 gross and <strong>$241.05 to your take-home pay</strong> in Texas, or $223.05 in California.
        </p>
      </div>

      <p style={p}>
        Thanksgiving, Christmas, and New Year&rsquo;s Day all fall in the next five weeks. If you work an hourly job, that raises two practical questions. Will you be paid for the day off? And if you work the holiday, how much extra will actually land in your bank account? This guide answers both with the law, the tax math, and figures from this site&rsquo;s paycheck calculator.
      </p>

      <h2 style={h2}>Is holiday pay required by law?</h2>

      <p style={p}>
        Not under federal law. The U.S. Department of Labor says the Fair Labor Standards Act &ldquo;does not require payment for time not worked, such as vacations or holidays (federal or otherwise).&rdquo; Those benefits are a matter of agreement between you and your employer.{' '}
        <a href="https://www.dol.gov/general/topic/workhours/holidays" {...ext} style={link}>(DOL, Holiday Pay)</a>
      </p>

      <p style={p}>
        The same law also does not require a higher rate for working a holiday. The Labor Department&rsquo;s overtime page says the FLSA does not require overtime pay for work on Saturdays, Sundays, holidays, or regular days of rest, unless overtime is actually worked on those days.{' '}
        <a href="https://www.dol.gov/agencies/whd/overtime" {...ext} style={link}>(DOL, Overtime Pay)</a> So a cashier who works eight hours on Thanksgiving and 32 hours the rest of the week can legally be paid straight time for all 40 hours.
      </p>

      <p style={p}>
        That surprises a lot of people, because most workers do get something. In March 2026, 81% of private industry workers had access to paid holidays. The split is wide: 92% of full-time workers had them, compared with 47% of part-time workers and 60% of workers in the lowest-paid quarter of jobs.{' '}
        <a href="https://www.bls.gov/news.release/ebs2.t06.htm" {...ext} style={link}>(BLS, Employee Benefits, Table 6, March 2026)</a> Workers who had paid holidays received an average of 8 days a year in 2025.{' '}
        <a href="https://www.bls.gov/opub/ted/2026/paid-sick-leave-was-available-to-80-percent-of-private-industry-workers-in-2025.htm" {...ext} style={link}>(BLS, The Economics Daily)</a>
      </p>

      <h3 style={h3}>Where holiday pay can be required</h3>

      <ul style={ul}>
        <li style={li}>
          <strong>Rhode Island.</strong> State law requires that work performed on Sundays and holidays be paid at least one and one-half times the normal rate of pay.{' '}
          <a href="https://webserver.rilegislature.gov/Statutes/TITLE25/25-3/25-3-3.htm" {...ext} style={link}>(R.I. Gen. Laws &sect; 25-3-3)</a>
        </li>
        <li style={li}>
          <strong>Massachusetts.</strong> Retail workers used to get premium pay on Sundays and certain holidays under the state&rsquo;s blue laws. That requirement was phased down and ended on January 1, 2023. Retail workers still get time and a half for hours over 40 in a week, including hours worked on a holiday.{' '}
          <a href="https://www.mass.gov/guides/working-on-sundays-and-holidays-blue-laws" {...ext} style={link}>(Mass.gov, Working on Sundays and Holidays)</a>
        </li>
        <li style={li}>
          <strong>Federal service and construction contracts.</strong> If you work on a federal Service Contract Act or Davis-Bacon contract, the wage determination in that contract can require paid holidays for your job class.{' '}
          <a href="https://www.dol.gov/general/topic/workhours/holidays" {...ext} style={link}>(DOL, Holiday Pay)</a>
        </li>
        <li style={li}>
          <strong>Union contracts and written policies.</strong> If your handbook or contract promises holiday pay, your employer generally has to follow it. Check the exact wording, because some policies require you to work the scheduled day before and after the holiday to qualify.
        </li>
      </ul>

      <p style={p}>
        Federal employees are a separate case. The Office of Personnel Management sets 11 federal holidays for 2026, including Thanksgiving on Thursday, November 26, and Christmas on Friday, December 25.{' '}
        <a href="https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" {...ext} style={link}>(OPM, Federal Holidays)</a> Private employers are free to observe fewer, more, or different days.
      </p>

      <h2 style={h2}>How is holiday pay taxed?</h2>

      <p style={p}>
        Holiday pay is wages. There is no special holiday tax and no special holiday tax break. It is subject to federal income tax, state income tax where your state has one, Social Security at 6.2%, and Medicare at 1.45%, exactly like your regular hourly pay.{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" {...ext} style={link}>(IRS, Topic 751)</a>
      </p>

      <p style={p}>
        Because the extra pay sits on top of the rest of your income for the year, it is taxed at your marginal rate, not your average rate. For a single filer earning $20 or $25 an hour full time, the top federal bracket in 2026 is 12%. Add 7.65% for Social Security and Medicare and any state tax, and you keep roughly 75 to 80 cents of each extra holiday dollar.
      </p>

      <h3 style={h3}>Why your holiday check can look over-taxed</h3>

      <p style={p}>
        The IRS lets employers handle extra pay in two ways. If holiday pay is folded into your normal paycheck without being split out, the employer withholds federal income tax as if the total were one regular payment.{' '}
        <a href="https://www.irs.gov/publications/p15" {...ext} style={link}>(IRS Publication 15, 2026, Section 7)</a> If a premium is paid as a separate supplemental payment, the employer can instead withhold a flat 22% for federal income tax.{' '}
        <a href="https://www.irs.gov/publications/p15" {...ext} style={link}>(IRS Publication 15, 2026)</a>
      </p>

      <p style={p}>
        For a worker in the 12% bracket, that flat 22% is too much. On a $300 holiday premium, the employer would hold back $66 in federal income tax even though the real tax is $36. The extra $30 is not lost. It comes back as part of your refund when you file. But if you budget from the paycheck, you will feel short that week. The same thing happens with bonuses, which our guide on{' '}
        <a href="/blog/how-bonuses-are-taxed" style={link}>how bonuses are taxed</a> walks through in detail.
      </p>

      <h2 style={h2}>How much of your holiday pay do you actually keep?</h2>

      <p style={p}>
        The table below shows the extra take-home pay from working one 8-hour holiday at time and a half or double time. Each figure comes from this site&rsquo;s calculator: the full year&rsquo;s take-home with the holiday pay, minus the full year&rsquo;s take-home without it. That captures every tax at your real marginal rate.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>State</th>
              <th style={thR}>$20/hr at 1.5x ($240 gross)</th>
              <th style={thR}>$25/hr at 1.5x ($300 gross)</th>
              <th style={thR}>$25/hr at 2x ($400 gross)</th>
            </tr>
          </thead>
          <tbody>
            {premiumRows.map(([name, slug, a, b, c], i) => (
              <tr key={slug} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{name}</a>
                </td>
                <td style={tdR}>{a}</td>
                <td style={{ ...tdR, color: '#059669', fontWeight: 600 }}>{b}</td>
                <td style={tdR}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Extra annual take-home from 8 holiday hours. Computed with this site&rsquo;s calculator for a single filer taking the standard deduction, tax year 2026, with a full-time base of 2,080 hours ($41,600 at $20 an hour, $52,000 at $25 an hour). Excludes city taxes and state payroll programs such as disability insurance.
      </p>

      <p style={p}>
        Three things stand out. First, the gap between states is small on a single holiday shift: $26.25 separates{' '}
        <a href="/texas" style={link}>Texas</a> and <a href="/oregon" style={link}>Oregon</a> at $25 an hour and time and a half. Second, double time is worth it. Moving from 1.5x to 2x adds $100 gross, and you keep about $72 to $80 of it. Third, the ranking moves around slightly with income. <a href="/california" style={link}>California</a> is mid-pack at $20 an hour because its low brackets are gentle, but drops near the bottom at $25 an hour as more of your income falls into its higher brackets.
      </p>

      <h2 style={h2}>Worked example: Thanksgiving at time and a half</h2>

      <p style={p}>
        Say you earn $25 an hour, work full time in Texas, file single, and take the standard deduction. Your employer pays time and a half on holidays, and you work 8 hours on Thanksgiving. Here is every step, using the 2026 figures in this site&rsquo;s tax tables.
      </p>

      <div style={mono}>
        {`Base pay for the year
  $25 x 2,080 hours               = $52,000.00
  Standard deduction (single)     - $16,100.00
  Taxable income                  = $35,900.00

Federal tax on the base
  10% of first $12,400            =  $1,240.00
  12% of $23,500 ($12,400-$35,900) =  $2,820.00
  Federal income tax              =  $4,060.00

Holiday shift
  $25 x 1.5 = $37.50 an hour
  $37.50 x 8 hours                =    $300.00 gross
  New taxable income $36,200 is still under $50,400,
  so every holiday dollar is taxed at 12%.

Taxes on the $300
  Federal income tax  12%         -     $36.00
  Social Security     6.2%        -     $18.60
  Medicare            1.45%       -      $4.35
  Texas income tax                -      $0.00
  You keep                        =    $241.05`}
      </div>

      <p style={p}>
        In California the same shift also triggers $18.00 of state income tax in this site&rsquo;s calculator, so you keep $223.05. If you earn $20 an hour instead, the $240 holiday shift nets $192.84 in Texas. You can check the regular-week side of this math in our{' '}
        <a href="/blog/20-an-hour-after-taxes" style={link}>$20 an hour after taxes</a> guide.
      </p>

      <h2 style={h2}>Do holiday hours count toward overtime?</h2>

      <p style={p}>
        It depends on whether you worked the holiday or took it off with pay. This is the part of holiday pay that trips up the most people, and it can cost you real money on a long week.
      </p>

      <h3 style={h3}>A paid holiday you did not work</h3>

      <p style={p}>
        Federal rules treat pay for a holiday you take off as a payment that is &ldquo;not made as compensation for&rdquo; hours of employment.{' '}
        <a href="https://www.law.cornell.edu/cfr/text/29/778.218" {...ext} style={link}>(29 CFR 778.218)</a> In practice, that means the 8 hours of holiday pay do not count toward the 40-hour overtime line. If you take Thanksgiving off with pay and then work 40 hours on the other days that week, you are paid for 48 hours at your regular rate. At $25 an hour that is $1,200 gross, with no overtime. Some employers count paid holidays toward overtime anyway as a policy choice, so check your handbook.
      </p>

      <h3 style={h3}>A holiday you worked</h3>

      <p style={p}>
        Hours you actually work on a holiday are hours worked. They count toward 40. But if your employer pays a holiday premium of at least time and a half, federal rules let it credit that premium toward the overtime it owes for the week.{' '}
        <a href="https://www.law.cornell.edu/cfr/text/29/778.203" {...ext} style={link}>(29 CFR 778.203)</a> The two premiums do not stack.
      </p>

      <div style={mono}>
        {`48-hour week at $25 an hour, 8 hours on Thanksgiving

What the law requires
  48 hours x $25 straight time    = $1,200.00
  Overtime premium: 8 x $12.50    =   $100.00
  Minimum gross pay               = $1,300.00

Holiday paid at 1.5x
  40 hours x $25                  = $1,000.00
  8 holiday hours x $37.50        =   $300.00
  Gross pay                       = $1,300.00
  The $100 holiday premium covers the overtime premium.

What many workers expect (premiums stacked)
  Gross pay                       = $1,400.00`}
      </div>

      <p style={p}>
        The $100 difference is a gross figure. In Texas at this wage, $100 of gross pay is worth about $80 after tax ($241.05 &divide; 3 on the table above). If your pay stub shows $1,300 and not $1,400, that is usually legal. The exception is a premium below 1.5x. A premium that is less than time and a half cannot be credited toward overtime and must be added into your regular rate instead.{' '}
        <a href="https://www.law.cornell.edu/cfr/text/29/778.203" {...ext} style={link}>(29 CFR 778.203)</a> Our guide on{' '}
        <a href="/blog/how-overtime-pay-is-taxed" style={link}>how overtime pay is taxed</a> covers the regular-rate math.
      </p>

      <h2 style={h2}>What does an unpaid holiday cost you?</h2>

      <p style={p}>
        If your employer closes on holidays and does not pay for them, you lose those hours outright. Using the BLS average of 8 holidays, that is 64 hours a year. Here is what those hours are worth after tax.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>State</th>
              <th style={thR}>$20/hr ($1,280 gross)</th>
              <th style={thR}>$25/hr ($1,600 gross)</th>
            </tr>
          </thead>
          <tbody>
            {unpaidRows.map(([name, slug, a, b], i) => (
              <tr key={slug} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{name}</a>
                </td>
                <td style={tdR}>{a}</td>
                <td style={{ ...tdR, color: '#dc2626', fontWeight: 600 }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Take-home lost from 64 unpaid hours (8 holidays). Annual take-home at 2,080 hours minus annual take-home at 2,016 hours, from this site&rsquo;s calculator. Single filer, standard deduction, tax year 2026.
      </p>

      <p style={p}>
        This is a useful number when you compare job offers. Two hourly jobs at $25 an hour are not equal if only one pays holidays. In Texas the paid-holiday job is worth about $1,286 more a year in your pocket, which is the same as a raise of roughly 77 cents an hour before tax. Our guide to{' '}
        <a href="/blog/compare-job-offers-across-states" style={link}>comparing job offers</a> shows how to weigh benefits like this next to salary.
      </p>

      <h2 style={h2}>Do salaried employees get holiday pay?</h2>

      <p style={p}>
        If you are a salaried exempt employee, you usually get paid for a holiday week whether you work the holiday or not. That is not because of a holiday rule. It is because of the salary basis rule. An employer cannot dock an exempt employee&rsquo;s set salary for &ldquo;absences occasioned by the employer or by the operating requirements of the business.&rdquo;{' '}
        <a href="https://www.law.cornell.edu/cfr/text/29/541.602" {...ext} style={link}>(29 CFR 541.602)</a> If the office closes on Thanksgiving and you work the rest of the week, your full weekly salary is owed. The main exception is a week in which you do no work at all.
      </p>

      <p style={p}>
        What salaried workers rarely get is extra pay for working a holiday. Some employers give a floating day off instead. If you are unsure whether your job is exempt, our{' '}
        <a href="/blog/overtime-exempt-salary-threshold-2026" style={link}>overtime exempt salary threshold guide</a> explains the 2026 lines.
      </p>

      <h2 style={h2}>How to check your holiday pay on your pay stub</h2>

      <ul style={ul}>
        <li style={li}>
          <strong>Look for a separate earnings line.</strong> Most payroll systems show &ldquo;Holiday&rdquo; or &ldquo;HOL&rdquo; with its own hours and rate. A worked holiday may appear as regular hours plus a premium line.
        </li>
        <li style={li}>
          <strong>Check the rate.</strong> If your policy promises time and a half, the holiday rate should be exactly 1.5 times your base rate.
        </li>
        <li style={li}>
          <strong>Check the hours over 40.</strong> If you worked more than 40 hours and the holiday premium was under 1.5x, overtime should appear as well.
        </li>
        <li style={li}>
          <strong>Compare federal withholding to a normal week.</strong> A big jump on a separate holiday check often means the flat 22% supplemental rate was used.
        </li>
      </ul>

      <p style={p}>
        Our{' '}
        <a href="/blog/how-to-read-your-pay-stub" style={link}>guide to reading your pay stub</a> explains every other line you will see.
      </p>

      {/* FAQ */}
      <h2 style={h2}>Holiday pay FAQ</h2>

      <h3 style={h3}>Do employers have to pay you for Thanksgiving or Christmas?</h3>
      <p style={p}>
        Not under federal law. Private employers decide which holidays, if any, are paid. Your offer letter, handbook, or union contract is what controls, and a few state rules and federal contracts add requirements.
      </p>

      <h3 style={h3}>Is holiday pay taxed more than regular pay?</h3>
      <p style={p}>
        No. It is taxed at the same rates as the rest of your wages. It can look like it is taxed more when the employer pays it separately and withholds a flat 22% for federal income tax. If your real bracket is lower, the difference comes back at tax time.
      </p>

      <h3 style={h3}>Is holiday pay time and a half or double time?</h3>
      <p style={p}>
        Whatever your employer promises. Time and a half is the most common premium, but nothing in federal law requires either one. In Rhode Island, state law sets at least time and a half for covered Sunday and holiday work.
      </p>

      <h3 style={h3}>Do part-time workers get holiday pay?</h3>
      <p style={p}>
        Less often. In March 2026, 47% of part-time private industry workers had access to paid holidays, compared with 92% of full-time workers, according to BLS. If you do get it, check whether your policy pays a full day or only the hours you would have been scheduled.
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
          See Your Holiday Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Switch to hourly mode, enter your rate and hours, and see your take-home per paycheck in your state.
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
          <a href="https://www.dol.gov/general/topic/workhours/holidays" {...ext} style={{ color: '#2563eb' }}>U.S. Department of Labor, Holiday Pay</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/overtime" {...ext} style={{ color: '#2563eb' }}>U.S. Department of Labor, Wage and Hour Division, Overtime Pay</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.law.cornell.edu/cfr/text/29/778.203" {...ext} style={{ color: '#2563eb' }}>29 CFR 778.203, Premium pay for work on Saturdays, Sundays, and other special days</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.law.cornell.edu/cfr/text/29/778.218" {...ext} style={{ color: '#2563eb' }}>29 CFR 778.218, Pay for certain idle hours</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.law.cornell.edu/cfr/text/29/541.602" {...ext} style={{ color: '#2563eb' }}>29 CFR 541.602, Salary basis</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/news.release/ebs2.t06.htm" {...ext} style={{ color: '#2563eb' }}>BLS, Employee Benefits in the United States, Table 6: Selected paid leave benefits, March 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/opub/ted/2026/paid-sick-leave-was-available-to-80-percent-of-private-industry-workers-in-2025.htm" {...ext} style={{ color: '#2563eb' }}>BLS, The Economics Daily: paid leave access and average paid holidays in 2025</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15" {...ext} style={{ color: '#2563eb' }}>IRS, Publication 15 (2026), Employer&rsquo;s Tax Guide, Section 7: Supplemental Wages</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" {...ext} style={{ color: '#2563eb' }}>IRS, Topic 751: Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" {...ext} style={{ color: '#2563eb' }}>IRS, Revenue Procedure 2025-32 (2026 tax brackets and standard deduction)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" {...ext} style={{ color: '#2563eb' }}>U.S. Office of Personnel Management, Federal Holidays</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://webserver.rilegislature.gov/Statutes/TITLE25/25-3/25-3-3.htm" {...ext} style={{ color: '#2563eb' }}>Rhode Island General Laws &sect; 25-3-3, Sunday and holiday work</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.mass.gov/guides/working-on-sundays-and-holidays-blue-laws" {...ext} style={{ color: '#2563eb' }}>Mass.gov, Working on Sundays and Holidays (Blue Laws)</a>
        </li>
      </ul>

      <ArticleFooter current="holiday-pay-rules-and-taxes" />
    </article>
  )
}
