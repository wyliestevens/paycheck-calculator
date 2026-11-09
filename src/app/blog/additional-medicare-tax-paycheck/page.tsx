import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Additional Medicare Tax: When the 0.9% Hits Your Paycheck (2026)' },
  description:
    'The 0.9% Additional Medicare Tax starts once your wages pass $200,000. At $300,000 it costs $900 a year, $103.85 a check. See when it starts and who gets a bill.',
  alternates: { canonical: '/blog/additional-medicare-tax-paycheck' },
  keywords:
    'additional medicare tax, 0.9 medicare tax, additional medicare tax withholding, additional medicare tax married filing jointly, form 8959, medicare surtax paycheck, $200,000 medicare threshold',
  openGraph: {
    type: 'article',
    url: '/blog/additional-medicare-tax-paycheck',
    images: [{ url: '/og/blog/additional-medicare-tax-paycheck', width: 1200, height: 630 }],
    title: 'Additional Medicare Tax: When the 0.9% Hits Your Paycheck (2026)',
    description:
      'The 0.9% Additional Medicare Tax starts on the paycheck that takes your wages past $200,000. See the paycheck it starts on, what it costs, and why couples get surprise bills.',
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

// Output of this site's calculator (calculatePaycheck), single filer, standard deduction,
// one job, no pre-tax deductions, level biweekly pay, tax year 2026.
// [salary, additional Medicare a year, total Medicare a year, extra per check once it starts, check it starts on, Texas, California, New York take-home]
const salaryRows: [string, string, string, string, string, string, string, string][] = [
  ['$150,000', '$0', '$2,175.00', '$0', 'Never', '$113,791', '$103,703', '$105,452'],
  ['$200,000', '$0', '$2,900.00', '$0', 'Never', '$148,927', '$134,189', '$137,463'],
  ['$225,000', '$225', '$3,487.50', '$77.88', 'Check 24', '$166,770', '$149,707', '$153,734'],
  ['$250,000', '$450', '$4,075.00', '$86.54', 'Check 21', '$183,182', '$163,794', '$168,434'],
  ['$300,000', '$900', '$5,250.00', '$103.85', 'Check 18', '$215,177', '$191,139', '$197,003'],
  ['$400,000', '$1,800', '$7,600.00', '$138.46', 'Check 14', '$277,827', '$244,036', '$252,803'],
  ['$500,000', '$2,700', '$9,950.00', '$173.08', 'Check 11', '$340,477', '$295,631', '$308,603'],
]

// Output of this site's calculator: $300,000 single filer in Texas, biweekly, federal income tax
// withholding shown as the annual tax divided by 26. [checks, wages to date after check, SS, Medicare, additional, net]
const timelineRows: [string, string, string, string, string, string][] = [
  ['1 to 15', '$11,538 to $173,077', '$715.38', '$167.31', '$0.00', '$8,035.22'],
  ['16', '$184,615', '$708.23', '$167.31', '$0.00', '$8,042.37'],
  ['17', '$196,154', '$0.00', '$167.31', '$0.00', '$8,750.61'],
  ['18', '$207,692', '$0.00', '$167.31', '$69.23', '$8,681.38'],
  ['19 to 26', '$219,231 to $300,000', '$0.00', '$167.31', '$103.85', '$8,646.76'],
]

// 0.9% applied to each spouse's wages over $200,000 (withholding) vs. combined wages over $250,000 (what the couple owes).
// [spouse A, spouse B, withheld, owed, result]
const coupleRows: [string, string, string, string, string][] = [
  ['$150,000', '$150,000', '$0', '$450', 'Owe $450'],
  ['$180,000', '$180,000', '$0', '$990', 'Owe $990'],
  ['$210,000', '$90,000', '$90', '$450', 'Owe $360'],
  ['$250,000', '$150,000', '$450', '$1,350', 'Owe $900'],
  ['$240,000', '$0', '$360', '$0', 'Refund $360'],
  ['$300,000', '$0', '$900', '$450', 'Refund $450'],
]

export default function AdditionalMedicareTaxPaycheck() {
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
          aria-label="A bar of year-to-date wages crossing a $200,000 line, after which each paycheck carries an extra 0.9% Medicare charge on top of the regular 1.45%"
        >
          <rect width="600" height="200" rx="12" fill="#dc2626" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          <text x="300" y="50" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">MEDICARE WAGES THIS YEAR</text>
          {/* Wage bar */}
          <rect x="50" y="70" width="500" height="34" rx="6" fill="rgba(255,255,255,0.2)" />
          <rect x="50" y="70" width="333" height="34" rx="6" fill="rgba(255,255,255,0.55)" />
          <rect x="383" y="70" width="167" height="34" rx="0" fill="#fff" />
          <text x="216" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill="#7f1d1d" fontFamily="monospace">1.45%</text>
          <text x="466" y="92" textAnchor="middle" fontSize="13" fontWeight="700" fill="#dc2626" fontFamily="monospace">1.45% + 0.9%</text>
          {/* Threshold marker */}
          <line x1="383" y1="62" x2="383" y2="118" stroke="#fff" strokeWidth="3" strokeDasharray="5 4" />
          <text x="383" y="138" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="monospace">$200,000</text>
          <text x="50" y="138" fontSize="12" fill="rgba(255,255,255,0.8)" fontFamily="monospace">$0</text>
          <text x="550" y="138" textAnchor="end" fontSize="12" fill="rgba(255,255,255,0.8)" fontFamily="monospace">$300,000</text>
          <text x="300" y="166" textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Employer withholds the extra 0.9% starting with the check that crosses the line</text>
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
        Additional Medicare Tax: When the 0.9% Hits Your Paycheck (2026)
      </h1>

      <ArticleMeta slug="additional-medicare-tax-paycheck" />

      {/* In short */}
      <div
        style={{
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#dc2626', marginBottom: '0.5rem' }}>
          In short
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          Your employer must withhold an extra <strong>0.9% Medicare tax</strong> on every dollar of wages above <strong>$200,000</strong> in a calendar year, no matter how you file. On a $300,000 salary paid biweekly, it starts on <strong>check 18</strong> and costs <strong>$103.85 per check</strong>, or $900 for the year. What you actually owe depends on filing status: married couples owe it only above $250,000 combined, so two earners of $150,000 each have nothing withheld but still owe <strong>$450</strong> at tax time.
        </p>
      </div>

      <p style={p}>
        Most people never see this tax. If you do, it tends to show up in one of two surprising ways. Either your net pay drops late in the year for no obvious reason, or you file a joint return and find a few hundred dollars due that no one warned you about. This guide shows exactly which paycheck the tax starts on at seven salary levels, walks through a full year of pay stubs at $300,000, and lays out the couples math that causes most of the surprise bills.
      </p>

      <p style={p}>
        Take-home figures come from this site&rsquo;s own paycheck calculator for the single-filer, standard-deduction case, using the 2026 federal brackets, the $16,100 standard deduction, and the $184,500 Social Security wage base. The brackets and deduction are from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" {...ext} style={link}>IRS Revenue Procedure 2025-32</a>. The rules for the tax itself come from the{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/questions-and-answers-for-the-additional-medicare-tax" {...ext} style={link}>IRS Questions and Answers for the Additional Medicare Tax</a>.
      </p>

      <h2 style={h2}>What is the Additional Medicare Tax?</h2>

      <p style={p}>
        Every paycheck already carries a 1.45% Medicare tax on all of your wages, with no cap. The Additional Medicare Tax adds 0.9% on top of that, but only on wages above a threshold. Above the line, your Medicare rate becomes 2.35%. Unlike regular Medicare, there is no employer match. Your employer still pays only 1.45%, and the extra 0.9% is all yours.
      </p>

      <p style={p}>
        According to{' '}
        <a href="https://www.irs.gov/taxtopics/tc560" {...ext} style={link}>IRS Topic 560</a>, the thresholds depend on how you file your return:
      </p>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={li}><strong>Married filing jointly:</strong> $250,000 of combined wages and self-employment income</li>
        <li style={li}><strong>Married filing separately:</strong> $125,000</li>
        <li style={li}><strong>Single, head of household, or qualifying surviving spouse:</strong> $200,000</li>
      </ul>

      <p style={p}>
        The tax applies to Medicare wages, self-employment income, and railroad retirement (RRTA) pay. It is a payroll tax, not an income tax, so it ignores the standard deduction, itemized deductions, and tax credits. If you want the full picture of how payroll taxes differ from income tax, see{' '}
        <a href="/blog/payroll-tax-vs-income-tax" style={link}>payroll tax vs. income tax</a>.
      </p>

      <h2 style={h2}>When does the 0.9% start coming out of my paycheck?</h2>

      <p style={p}>
        Withholding follows a simpler rule than the tax itself. The IRS tells employers to start withholding the extra 0.9% &ldquo;in the pay period in which it pays wages in excess of $200,000&rdquo; to you in a calendar year, &ldquo;without regard to the individual&rsquo;s filing status or wages paid by another employer.&rdquo; Your employer only knows what it pays you, so it uses $200,000 for everyone.
      </p>

      <p style={p}>
        That means the tax starts partway through the year and runs to December 31. On January 1 the counter resets, and your first checks of the new year are back to plain 1.45%. Here is what that looks like at different salaries with level biweekly pay.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Salary</th>
              <th style={thR}>Extra 0.9% a year</th>
              <th style={thR}>Total Medicare</th>
              <th style={thR}>Extra per check</th>
              <th style={thR}>Starts on</th>
              <th style={thR}>Texas take-home</th>
              <th style={thR}>California</th>
              <th style={thR}>New York</th>
            </tr>
          </thead>
          <tbody>
            {salaryRows.map(([sal, add, med, per, start, tx, ca, ny]) => (
              <tr key={sal}>
                <td style={{ ...td, color: '#1e293b', fontWeight: 600 }}>{sal}</td>
                <td style={{ ...tdR, color: '#dc2626', fontWeight: 600 }}>{add}</td>
                <td style={tdR}>{med}</td>
                <td style={tdR}>{per}</td>
                <td style={tdR}>{start}</td>
                <td style={tdR}>{tx}</td>
                <td style={tdR}>{ca}</td>
                <td style={tdR}>{ny}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator, tax year 2026, single filer, standard deduction, one employer, no pre-tax deductions, 26 equal biweekly checks. &ldquo;Extra per check&rdquo; is the full amount on every check after the first one. The first check is usually partial. Take-home is annual and includes federal, state, Social Security, and all Medicare tax.
      </p>

      <p style={p}>
        Two things stand out. First, the tax is small relative to income. At $300,000 it is 0.3% of pay. Second, it lands late. At $225,000 you only pay it on the last three checks of the year. Compare your own state with the{' '}
        <a href="/texas" style={link}>Texas</a>,{' '}
        <a href="/california" style={link}>California</a>, or{' '}
        <a href="/new-york" style={link}>New York</a> calculators.
      </p>

      <h2 style={h2}>A full year of pay stubs at $300,000</h2>

      <p style={p}>
        High earners often notice their net pay jump in the fall and then dip a few checks later. Two payroll limits are at work. Social Security stops at the $184,500 wage base, which raises your net pay. A few checks later the Additional Medicare Tax kicks in, which takes a little back. This is the whole year for a single filer in{' '}
        <a href="/texas" style={link}>Texas</a> earning $300,000.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Check</th>
              <th style={thR}>Wages to date</th>
              <th style={thR}>Social Security</th>
              <th style={thR}>Medicare 1.45%</th>
              <th style={thR}>Extra 0.9%</th>
              <th style={thR}>Net pay</th>
            </tr>
          </thead>
          <tbody>
            {timelineRows.map(([chk, ytd, ss, med, add, net]) => (
              <tr key={chk}>
                <td style={{ ...td, color: '#1e293b', fontWeight: 600 }}>{chk}</td>
                <td style={tdR}>{ytd}</td>
                <td style={tdR}>{ss}</td>
                <td style={tdR}>{med}</td>
                <td style={{ ...tdR, color: '#dc2626' }}>{add}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Source: this site&rsquo;s calculator. Gross pay is $11,538.46 per check. Federal income tax is shown as $2,620.55 per check, the annual figure divided by 26. Real withholding from the IRS percentage method will differ by a few dollars.
      </p>

      <p style={p}>
        Check 17 is the high point: $8,750.61, about $715 more than in spring. From check 19 on, net pay settles at $8,646.76. If you budget off a fall paycheck, you will overestimate your monthly income for the next January, when Social Security comes back. Our guide to the{' '}
        <a href="/blog/social-security-wage-base-2026" style={link}>Social Security wage base</a> covers that side in detail.
      </p>

      <h3 style={h3}>Worked example: the Medicare lines at $300,000</h3>

      <div style={mono}>
        <div><strong>Step 1. Gross pay per check</strong></div>
        <div>$300,000 &divide; 26 = $11,538.46</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 2. Regular Medicare, every check</strong></div>
        <div>$11,538.46 &times; 1.45% = $167.31</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 3. Find the check that crosses $200,000</strong></div>
        <div>After check 17: 17 &times; $11,538.46 = $196,153.85 (below the line)</div>
        <div>After check 18: 18 &times; $11,538.46 = $207,692.31 (above the line)</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 4. Extra 0.9% on check 18 (partial)</strong></div>
        <div>$207,692.31 &minus; $200,000 = $7,692.31 over</div>
        <div>$7,692.31 &times; 0.9% = $69.23</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 5. Extra 0.9% on checks 19 to 26 (full)</strong></div>
        <div>$11,538.46 &times; 0.9% = $103.85 per check</div>
        <div>8 checks &times; $103.85 = $830.77</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 6. Total for the year</strong></div>
        <div>$69.23 + $830.77 = $900.00</div>
        <div>Check: ($300,000 &minus; $200,000) &times; 0.9% = $900.00</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 7. Full-year take-home</strong></div>
        <div>Federal income tax: $300,000 &minus; $16,100 = $283,900 taxable = $68,134.25</div>
        <div>Social Security: $184,500 &times; 6.2% = $11,439.00</div>
        <div>Medicare: $300,000 &times; 1.45% + $900 = $5,250.00</div>
        <div>$300,000 &minus; $68,134.25 &minus; $11,439.00 &minus; $5,250.00 = <strong>$215,176.75</strong></div>
      </div>

      <p style={p}>
        Texas has no state income tax, so there is no state line. The federal bracket math is broken down step by step in{' '}
        <a href="/blog/federal-tax-brackets-2026" style={link}>federal tax brackets for 2026</a>.
      </p>

      <h2 style={h2}>Why do married couples get a surprise Additional Medicare Tax bill?</h2>

      <p style={p}>
        Because withholding and the actual tax use different lines. Each employer withholds on its own employee&rsquo;s wages above $200,000. The tax you owe on a joint return applies to the couple&rsquo;s combined wages above $250,000. When two people each earn under $200,000, nobody withholds a cent, even if together they are well past $250,000. When one spouse earns a lot and the other earns little, the opposite happens and too much is withheld.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Spouse A wages</th>
              <th style={thR}>Spouse B wages</th>
              <th style={thR}>Withheld</th>
              <th style={thR}>Owed (joint)</th>
              <th style={thR}>At tax time</th>
            </tr>
          </thead>
          <tbody>
            {coupleRows.map(([a, b, w, o, r]) => (
              <tr key={a + b}>
                <td style={{ ...td, color: '#1e293b', fontWeight: 600 }}>{a}</td>
                <td style={tdR}>{b}</td>
                <td style={tdR}>{w}</td>
                <td style={tdR}>{o}</td>
                <td style={{ ...tdR, color: r.startsWith('Owe') ? '#dc2626' : '#059669', fontWeight: 600 }}>{r}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Withheld = 0.9% of each spouse&rsquo;s wages above $200,000 at their own employer. Owed = 0.9% of combined wages above $250,000. Rules from IRS Topic 560 and the IRS Additional Medicare Tax Q&amp;A.
      </p>

      <p style={p}>
        The same gap hits a single person with two jobs. Earn $120,000 at one job and $110,000 at another and neither employer withholds anything, but you owe 0.9% of $30,000, or $270. The fix for both cases is the same, and it is covered below. Our guides on{' '}
        <a href="/blog/how-marriage-changes-your-taxes" style={link}>how marriage changes your taxes</a> and{' '}
        <a href="/blog/two-jobs-tax-withholding" style={link}>withholding with two jobs</a> cover the income tax side of the same problem.
      </p>

      <p style={p}>
        Filing separately does not help. The married filing separately threshold is $125,000 per spouse, half the joint figure. A spouse earning $150,000 who files separately owes 0.9% of $25,000, or $225, and still has nothing withheld.
      </p>

      <h2 style={h2}>How do I fix underwithholding of the Additional Medicare Tax?</h2>

      <p style={p}>
        You cannot ask your employer to withhold more Additional Medicare Tax specifically. The IRS Q&amp;A says the extra amount goes through income tax withholding instead: you request it on Form W-4, and it is credited against your total tax on the return. In practice that means Step 4(c), &ldquo;extra withholding,&rdquo; on the{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" {...ext} style={link}>2026 Form W-4</a>.
      </p>

      <p style={p}>
        A simple rule: divide the expected shortfall by the paychecks left in the year. A couple each earning $180,000 will owe $990. If one spouse has 20 biweekly checks left, $990 &divide; 20 = $49.50 extra per check covers it. Earlier in the year the per-check number is smaller. Do the math again whenever either salary changes. Our{' '}
        <a href="/blog/understanding-your-w4" style={link}>W-4 guide</a> shows where Step 4(c) sits on the form.
      </p>

      <p style={p}>
        Will you get a penalty if you skip this? Often not. Under{' '}
        <a href="https://www.irs.gov/taxtopics/tc306" {...ext} style={link}>IRS Topic 306</a>, most people avoid the underpayment penalty if they owe less than $1,000 after withholding and refundable credits, or if they paid at least 90% of this year&rsquo;s tax or 100% of last year&rsquo;s. The IRS notes special rules for certain higher-income taxpayers, so check those if your income is high. The bigger risk is that a $990 Medicare shortfall stacks on top of an income tax shortfall from the same two-earner setup and pushes you past the line.
      </p>

      <h2 style={h2}>Does my 401(k) lower the Additional Medicare Tax?</h2>

      <p style={p}>
        No. This is one of the most common mistakes. Traditional 401(k) deferrals lower your income tax, but{' '}
        <a href="https://www.irs.gov/taxtopics/tc424" {...ext} style={link}>IRS Topic 424</a>{' '}
        confirms they are still wages subject to Social Security and Medicare tax. A $300,000 earner who defers 10% to a 401(k) still has $300,000 of Medicare wages and still pays the full $900.
      </p>

      <p style={p}>
        Deductions through a Section 125 cafeteria plan are different. Health, dental, and vision premiums, and most HSA and FSA contributions made through payroll, are generally excluded from Medicare wages, as{' '}
        <a href="https://www.irs.gov/publications/p15b" {...ext} style={link}>IRS Publication 15-B</a>{' '}
        explains. Every $1,000 of those deductions above the threshold saves $23.50 in Medicare tax (2.35%), on top of the income tax savings. That is not a reason to buy benefits you do not need, but it is a reason to use the ones you do through payroll. See{' '}
        <a href="/blog/pre-tax-vs-post-tax-deductions" style={link}>pre-tax vs. post-tax deductions</a> for the full list.
      </p>

      <h2 style={h2}>What about bonuses and stock that push me over $200,000?</h2>

      <p style={p}>
        The rule is the same for every kind of wage. A bonus, commission, or RSU vest counts toward your $200,000 the day it is paid. Say you earn $180,000 and receive a $40,000 bonus in December after 25 biweekly checks. Wages to date before the bonus are $173,076.92. The bonus brings you to $213,076.92, so the bonus check carries 0.9% of $13,076.92, or $117.69. Your last salary check then carries 0.9% of its full $6,923.08, or $62.31. That adds up to $180, which is 0.9% of the $20,000 over the line.
      </p>

      <p style={p}>
        Your employer is required to do this. The IRS Q&amp;A says an employer &ldquo;cannot honor a request to cease withholding Additional Medicare Tax if it is required to withhold it,&rdquo; even if you expect to owe less on a joint return. Any excess comes back to you as a credit when you file. For more on bonus checks, see{' '}
        <a href="/blog/how-bonuses-are-taxed" style={link}>how bonuses are taxed</a> and{' '}
        <a href="/blog/how-rsus-are-taxed" style={link}>how RSUs are taxed</a>.
      </p>

      <h2 style={h2}>How is it settled at tax time?</h2>

      <p style={p}>
        Everyone who owes the tax or had it withheld files{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8959" {...ext} style={link}>Form 8959</a>{' '}
        with Form 1040. The form compares what you owe, based on your filing status threshold, with what was withheld. Your W-2 does not show the extra tax on its own line. Box 6 includes both the 1.45% and the 0.9%, and box 5 shows your Medicare wages. The form uses those two boxes to work out how much of box 6 was the extra tax, then credits it with your income tax withholding. Our{' '}
        <a href="/blog/understanding-your-w2" style={link}>W-2 guide</a> explains each box.
      </p>

      <p style={p}>
        Self-employed? Your self-employment income counts toward the same threshold, combined with any wages. The IRS has you apply the threshold to wages first and reduce it by those wages before taxing self-employment income. A self-employment loss does not lower the wage figure. See{' '}
        <a href="/blog/self-employment-tax-freelancers" style={link}>self-employment tax for freelancers</a>.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>Is the Additional Medicare Tax the same as the 3.8% net investment income tax?</h3>
      <p style={p}>
        No. They share the same thresholds, but the 0.9% tax applies to wages and self-employment income, and the 3.8% tax applies to investment income such as dividends, interest, and capital gains. You can owe both. Our{' '}
        <a href="/blog/net-investment-income-tax-2026" style={link}>net investment income tax guide</a> covers the 3.8% side.
      </p>

      <h3 style={h3}>Does my employer pay the extra 0.9% too?</h3>
      <p style={p}>
        No. The IRS states there is no employer match. Your employer keeps paying 1.45% on all your wages. Only your side rises to 2.35% above the threshold.
      </p>

      <h3 style={h3}>Will I get a refund if too much was withheld?</h3>
      <p style={p}>
        Yes. If you are married filing jointly and one spouse earns over $200,000 while combined wages stay under $250,000, Form 8959 shows a credit for the full amount withheld. A $240,000 earner with a non-working spouse gets back $360. The refund arrives with the rest of your federal refund.
      </p>

      <h3 style={h3}>Does the threshold reset if I change jobs mid-year?</h3>
      <p style={p}>
        For withholding, yes. A new employer starts its count at zero, so you could earn $150,000 at each of two jobs in the same year with nothing withheld. For the tax you owe, no. Form 8959 adds up all your Medicare wages for the year, so you would owe 0.9% of $100,000, or $900, as a single filer.
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
          See Every Tax on Your Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary, state, and filing status. The calculator includes the Additional Medicare Tax at your filing status threshold, so you can see your true yearly take-home.
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
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/questions-and-answers-for-the-additional-medicare-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Questions and Answers for the Additional Medicare Tax (withholding rule, no employer match, W-4, RRTA)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 560: Additional Medicare Tax (rate and thresholds)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8959" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, About Form 8959, Additional Medicare Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/instructions/i8959" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Instructions for Form 8959 (W-2 boxes 5 and 6)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc424" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 424: 401(k) Plans (deferrals are Medicare wages)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Publication 15-B: Employer&rsquo;s Tax Guide to Fringe Benefits (cafeteria plans)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc306" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 306: Penalty for Underpayment of Estimated Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, About Form W-4, Employee&rsquo;s Withholding Certificate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Revenue Procedure 2025-32 (2026 brackets and standard deduction)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA, Contribution and Benefit Base ($184,500 for 2026)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          State figures: this site&rsquo;s calculator, using the state tables listed on each <a href="/texas" style={{ color: '#2563eb' }}>state calculator page</a>
        </li>
      </ul>

      <ArticleFooter current="additional-medicare-tax-paycheck" />
    </article>
  )
}
