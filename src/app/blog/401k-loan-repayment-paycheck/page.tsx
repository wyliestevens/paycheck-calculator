import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: '401(k) Loan Repayment: How It Changes Your Paycheck (2026)' },
  description:
    'A $10,000 401(k) loan at 7% costs $91.27 per biweekly check, paid after tax. See payments by loan size, the hit to take-home, and what a default costs.',
  alternates: { canonical: '/blog/401k-loan-repayment-paycheck' },
  keywords:
    '401k loan repayment paycheck, 401k loan payroll deduction, is 401k loan repayment pre-tax, 401k loan double taxation, 401k loan default tax, 401k loan leave job',
  openGraph: {
    type: 'article',
    url: '/blog/401k-loan-repayment-paycheck',
    images: [{ url: '/og/blog/401k-loan-repayment-paycheck', width: 1200, height: 630 }],
    title: '401(k) Loan Repayment: How It Changes Your Paycheck (2026)',
    description:
      'A $10,000 401(k) loan at 7% over five years costs $91.27 per biweekly paycheck, taken out after tax. Payments, take-home impact, and default costs.',
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

// Standard amortization at an example 7% rate over 5 years.
// [loan, weekly (260 payments), biweekly (130), semimonthly (120), monthly (60), total interest on the biweekly schedule]
const paymentRows: [string, string, string, string, string, string][] = [
  ['$5,000', '$22.80', '$45.64', '$49.44', '$99.01', '$933'],
  ['$10,000', '$45.61', '$91.27', '$98.89', '$198.01', '$1,865'],
  ['$20,000', '$91.22', '$182.54', '$197.77', '$396.02', '$3,730'],
  ['$30,000', '$136.83', '$273.81', '$296.66', '$594.04', '$5,596'],
  ['$50,000', '$228.05', '$456.35', '$494.43', '$990.06', '$9,326'],
]

// Output of this site's calculator (calculatePaycheck), single filer, standard deduction,
// 6% 401(k) deferral, biweekly pay, tax year 2026. Loan payment: $91.27 per check.
// [salary, Texas net before loan, Texas net after loan, share TX, share CA, share NY, share IL, share NC]
const shareRows: [string, string, string, string, string, string, string, string][] = [
  ['$40,000', '$1,238.77', '$1,147.50', '7.4%', '7.5%', '7.7%', '7.8%', '7.6%'],
  ['$50,000', '$1,527.50', '$1,436.23', '6.0%', '6.1%', '6.3%', '6.3%', '6.2%'],
  ['$60,000', '$1,816.23', '$1,724.96', '5.0%', '5.2%', '5.3%', '5.3%', '5.2%'],
  ['$75,000', '$2,233.94', '$2,142.67', '4.1%', '4.3%', '4.3%', '4.3%', '4.3%'],
  ['$100,000', '$2,865.38', '$2,774.11', '3.2%', '3.4%', '3.4%', '3.4%', '3.3%'],
]

// Output of this site's calculator: take-home at $60,000 with a 6% deferral vs. 0%, per biweekly check.
// [state, slug, contribution given up, extra take-home]
const pauseRows: [string, string, string, string][] = [
  ['Texas', 'texas', '$138.46', '$121.85'],
  ['Florida', 'florida', '$138.46', '$121.85'],
  ['Arizona', 'arizona', '$138.46', '$118.38'],
  ['Ohio', 'ohio', '$138.46', '$118.04'],
  ['Colorado', 'colorado', '$138.46', '$115.75'],
  ['Illinois', 'illinois', '$138.46', '$114.99'],
  ['Georgia', 'georgia', '$138.46', '$114.66'],
  ['New York', 'new-york', '$138.46', '$113.75'],
  ['California', 'california', '$138.46', '$113.25'],
  ['Oregon', 'oregon', '$138.46', '$109.73'],
]

// Output of this site's calculator: extra federal and state income tax when $10,000 is added to a
// $60,000 single-filer income, plus the 10% federal additional tax (and California's 2.5%).
// [state, slug, federal, state, early-withdrawal taxes, total]
const defaultRows: [string, string, string, string, string, string][] = [
  ['California', 'california', '$1,550', '$800', '$1,250', '$3,600'],
  ['Oregon', 'oregon', '$1,550', '$875', '$1,000', '$3,425'],
  ['New York', 'new-york', '$1,550', '$585', '$1,000', '$3,135'],
  ['Georgia', 'georgia', '$1,550', '$519', '$1,000', '$3,069'],
  ['Colorado', 'colorado', '$1,550', '$440', '$1,000', '$2,990'],
  ['North Carolina', 'north-carolina', '$1,550', '$399', '$1,000', '$2,949'],
  ['Ohio', 'ohio', '$1,550', '$275', '$1,000', '$2,825'],
  ['Arizona', 'arizona', '$1,550', '$250', '$1,000', '$2,800'],
  ['Texas', 'texas', '$1,550', '$0', '$1,000', '$2,550'],
]

export default function FourOhOneKLoanRepaymentPaycheck() {
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
          aria-label="A pay stub with a $91.27 401(k) loan line taken after taxes, with an arrow sending the payment back into a retirement savings jar"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Pay stub */}
          <rect x="45" y="35" width="270" height="130" rx="8" fill="#fff" />
          <text x="62" y="58" fontSize="12" fontWeight="700" fill="#4c1d95" fontFamily="sans-serif">PAY STUB, BIWEEKLY</text>
          <text x="62" y="82" fontSize="12" fill="#475569" fontFamily="sans-serif">Gross pay</text>
          <text x="298" y="82" textAnchor="end" fontSize="12" fill="#1e293b" fontFamily="monospace">$2,307.69</text>
          <text x="62" y="102" fontSize="12" fill="#475569" fontFamily="sans-serif">401(k) 6%, taxes</text>
          <text x="298" y="102" textAnchor="end" fontSize="12" fill="#1e293b" fontFamily="monospace">&minus;$491.46</text>
          <rect x="56" y="110" width="248" height="22" rx="4" fill="#ede9fe" />
          <text x="62" y="125" fontSize="12" fontWeight="700" fill="#7c3aed" fontFamily="sans-serif">401(k) loan, after tax</text>
          <text x="298" y="125" textAnchor="end" fontSize="12" fontWeight="700" fill="#7c3aed" fontFamily="monospace">&minus;$91.27</text>
          <line x1="62" y1="140" x2="298" y2="140" stroke="#e2e8f0" strokeWidth="1" />
          <text x="62" y="156" fontSize="12" fontWeight="700" fill="#1e293b" fontFamily="sans-serif">Net pay</text>
          <text x="298" y="156" textAnchor="end" fontSize="12" fontWeight="700" fill="#1e293b" fontFamily="monospace">$1,724.96</text>
          {/* Arrow back to the plan */}
          <path d="M 320 121 C 370 121, 380 95, 420 95" stroke="#fff" strokeWidth="3" fill="none" />
          <polygon points="418,87 434,95 418,103" fill="#fff" />
          {/* Savings jar */}
          <rect x="445" y="60" width="100" height="100" rx="14" fill="rgba(255,255,255,0.2)" stroke="#fff" strokeWidth="3" />
          <rect x="460" y="48" width="70" height="14" rx="4" fill="#fff" />
          <text x="495" y="105" textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff" fontFamily="monospace">401(k)</text>
          <text x="495" y="128" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">PAID BACK</text>
          <text x="495" y="143" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">TO YOU</text>
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
        401(k) Loan Repayment: How It Changes Your Paycheck (2026)
      </h1>

      <ArticleMeta slug="401k-loan-repayment-paycheck" />

      {/* In short */}
      <div
        style={{
          background: '#f5f3ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '0.5rem' }}>
          In short
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          A $10,000 401(k) loan at 7% over five years costs <strong>$91.27 per biweekly paycheck</strong>. The payment comes out <strong>after taxes</strong>, so your net pay drops by the full amount. For a single filer earning $60,000 in Texas who saves 6%, take-home falls from $1,816.23 to <strong>$1,724.96</strong>, a 5.0% cut. If you leave your job and the loan goes unpaid, that $10,000 can cost you <strong>$2,550 to $3,600</strong> in extra tax.
        </p>
      </div>

      <p style={p}>
        Most articles about 401(k) loans argue about whether you should take one. This guide is about what happens after you do: the new line on your pay stub, how big it is, why it shrinks your check more than a regular 401(k) contribution of the same size, and the one mistake that turns a cheap loan into an expensive tax bill. We show the payment at five loan sizes and four pay schedules, the share of take-home pay it eats at different salaries and states, and the dollar cost of a default.
      </p>

      <p style={p}>
        Take-home figures come from this site&rsquo;s own paycheck calculator, using the 2026 federal brackets and the $16,100 standard deduction from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" {...ext} style={link}>IRS Revenue Procedure 2025-32</a>. The case is a single filer with the standard deduction, a 6% pre-tax 401(k) contribution, and biweekly pay. Loan payments use the standard amortization formula at an example rate of 7%. Your plan sets your actual rate, so check your loan paperwork.
      </p>

      <h2 style={h2}>How does a 401(k) loan work?</h2>

      <p style={p}>
        A 401(k) loan lets you borrow from your own retirement account and pay yourself back with interest. There is no lender and usually no credit check. The money leaves your investments, and each payment puts principal and interest back into your account. Federal law sets the outer limits. The{' '}
        <a href="https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-loans" {...ext} style={link}>IRS retirement plan loan FAQ</a>{' '}
        lists them:
      </p>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={li}><strong>How much:</strong> the greater of $10,000 or 50% of your vested balance, but never more than $50,000. Any loan you already have counts toward the cap.</li>
        <li style={li}><strong>How long:</strong> five years at most, unless the loan is used to buy your main home, which can run longer.</li>
        <li style={li}><strong>How often:</strong> roughly equal payments of principal and interest, made at least once a quarter.</li>
      </ul>

      <p style={p}>
        Plans are allowed to be stricter than the law, and many are. Some allow only one loan at a time, charge a setup fee, or set a minimum loan size. Your plan&rsquo;s summary plan description has the details.
      </p>

      <p style={p}>
        The &ldquo;at least quarterly&rdquo; rule is why almost every employer collects payments through payroll. A deduction on every check is the easiest way to keep the loan on schedule and out of default. Expect to see it on your stub with a label such as &ldquo;401K LOAN&rdquo; or &ldquo;LN REPAY.&rdquo; Our guide on{' '}
        <a href="/blog/how-to-read-your-pay-stub" style={link}>how to read your pay stub</a> shows where after-tax deductions sit.
      </p>

      <h2 style={h2}>How much will a 401(k) loan take out of each paycheck?</h2>

      <p style={p}>
        The payment depends on three things: the amount you borrow, the interest rate, and how often you are paid. Here are five-year payments at 7% for each common pay schedule.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Loan</th>
              <th style={thR}>Weekly</th>
              <th style={thR}>Biweekly</th>
              <th style={thR}>Semimonthly</th>
              <th style={thR}>Monthly</th>
              <th style={thR}>Total interest</th>
            </tr>
          </thead>
          <tbody>
            {paymentRows.map(([loan, wk, bw, sm, mo, int]) => (
              <tr key={loan}>
                <td style={{ ...td, color: '#1e293b', fontWeight: 600 }}>{loan}</td>
                <td style={tdR}>{wk}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{bw}</td>
                <td style={tdR}>{sm}</td>
                <td style={tdR}>{mo}</td>
                <td style={tdR}>{int}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Five-year term, 7% example rate, standard amortization. Total interest is for the biweekly schedule (130 payments). The interest is paid into your own account, not to a bank.
      </p>

      <p style={p}>
        A shorter term raises the payment fast. The same $10,000 at 7% costs $142.31 per biweekly check over three years and $398.75 over one year. Borrowing the $50,000 maximum takes $456.35 from every biweekly check, and you need at least $100,000 vested to qualify for it.
      </p>

      <h2 style={h2}>Is a 401(k) loan repayment pre-tax or after-tax?</h2>

      <p style={p}>
        After-tax. The IRS states plainly that &ldquo;loan repayments are not plan contributions.&rdquo; Your regular 401(k) contribution is taken out before federal income tax is figured. A loan payment is taken out after federal income tax, state income tax, Social Security, and Medicare have all been withheld. It does not lower your taxable wages, and it does not show up in box 12 of your W-2.
      </p>

      <p style={p}>
        That has a practical effect most people miss. A dollar of loan payment costs you a full dollar of take-home pay. A dollar of pre-tax contribution costs you less, because it also cuts your income tax. At $60,000 in Texas your top federal bracket is 12%. An extra $91.27 contribution would lower your net pay by only $80.32 ($91.27 &times; 0.88). The same $91.27 as a loan payment lowers it by the full $91.27. If you are used to budgeting for 401(k) changes, budget for a loan payment at face value. Our guide to{' '}
        <a href="/blog/pre-tax-vs-post-tax-deductions" style={link}>pre-tax vs. post-tax deductions</a> explains the general rule.
      </p>

      <h3 style={h3}>Worked example: $60,000 salary in Texas with a $10,000 loan</h3>

      <div style={mono}>
        <div><strong>Step 1. Gross pay per check</strong></div>
        <div>$60,000 &divide; 26 = $2,307.69</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 2. Pre-tax 401(k) at 6%</strong></div>
        <div>$60,000 &times; 6% = $3,600 a year = $138.46 per check</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 3. Federal income tax</strong></div>
        <div>$60,000 &minus; $3,600 &minus; $16,100 standard deduction = $40,300 taxable</div>
        <div>10% on the first $12,400 = $1,240.00</div>
        <div>12% on $12,400 to $40,300 ($27,900) = $3,348.00</div>
        <div>Total $4,588.00 a year = $176.46 per check</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 4. FICA on the full $60,000</strong></div>
        <div>Social Security: $60,000 &times; 6.2% = $3,720 = $143.08 per check</div>
        <div>Medicare: $60,000 &times; 1.45% = $870 = $33.46 per check</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 5. Net pay before the loan</strong></div>
        <div>$2,307.69 &minus; $138.46 &minus; $176.46 &minus; $143.08 &minus; $33.46 = $1,816.23</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 6. Loan payment (after tax)</strong></div>
        <div>Rate per check: 7% &divide; 26 = 0.26923%</div>
        <div>$10,000 &times; 0.0026923 &divide; (1 &minus; 1.0026923<sup>&minus;130</sup>) = $91.27</div>
        <div style={{ marginTop: '0.75rem' }}><strong>Step 7. Net pay with the loan</strong></div>
        <div>$1,816.23 &minus; $91.27 = <strong>$1,724.96</strong></div>
      </div>

      <p style={p}>
        Notice that Steps 3 and 4 do not change at all when the loan starts. Your taxes stay exactly the same. Texas has no state income tax, so there is no state line. In a state like{' '}
        <a href="/california" style={link}>California</a> you would add state income tax and SDI to Step 3, and the loan payment in Step 6 would be identical. FICA is explained in{' '}
        <a href="/blog/fica-taxes-explained" style={link}>FICA taxes explained</a>.
      </p>

      <h2 style={h2}>What share of my take-home pay does the loan use?</h2>

      <p style={p}>
        The same $91.27 payment weighs more on a smaller check. This table shows the share of biweekly take-home pay that a $10,000 loan uses at five salaries in five states.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>Salary</th>
              <th style={thR}>Texas net, no loan</th>
              <th style={thR}>Texas net, with loan</th>
              <th style={thR}>Texas</th>
              <th style={thR}>California</th>
              <th style={thR}>New York</th>
              <th style={thR}>Illinois</th>
              <th style={thR}>N. Carolina</th>
            </tr>
          </thead>
          <tbody>
            {shareRows.map(([sal, before, after, tx, ca, ny, il, nc]) => (
              <tr key={sal}>
                <td style={{ ...td, color: '#1e293b', fontWeight: 600 }}>{sal}</td>
                <td style={tdR}>{before}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{after}</td>
                <td style={tdR}>{tx}</td>
                <td style={tdR}>{ca}</td>
                <td style={tdR}>{ny}</td>
                <td style={tdR}>{il}</td>
                <td style={tdR}>{nc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        This site&rsquo;s calculator, single filer, standard deduction, 6% pre-tax 401(k), biweekly pay, tax year 2026. State columns show the loan payment as a share of that state&rsquo;s biweekly take-home. Local income taxes are not included.
      </p>

      <p style={p}>
        At $40,000 the loan takes about one dollar in every thirteen you bring home. At $100,000 it is closer to one in thirty. Higher-tax states push the share up slightly because take-home is smaller there. A useful rule: if the payment is more than 10% of your net check, test your budget before you sign. Run your own figure on the{' '}
        <a href="/texas" style={link}>Texas</a>,{' '}
        <a href="/new-york" style={link}>New York</a>, or{' '}
        <a href="/illinois" style={link}>Illinois</a> calculator, then subtract the payment from your plan&rsquo;s loan quote.
      </p>

      <h2 style={h2}>Should I lower my 401(k) contribution to afford the loan payment?</h2>

      <p style={p}>
        Many people cut their regular contribution to make room for the loan payment. It works, but it costs more than it looks. Because contributions are pre-tax, cutting one gives you back less than the amount you stop saving. Here is what dropping from 6% to zero does at $60,000.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>State</th>
              <th style={thR}>Savings you give up</th>
              <th style={thR}>Extra take-home</th>
            </tr>
          </thead>
          <tbody>
            {pauseRows.map(([name, slug, gave, gain]) => (
              <tr key={slug}>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{name}</a>
                </td>
                <td style={tdR}>{gave}</td>
                <td style={{ ...tdR, color: '#1e293b', fontWeight: 600 }}>{gain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Per biweekly check, $60,000 salary, single filer, 6% contribution vs. none. This site&rsquo;s calculator, tax year 2026. Employer match is not included and would make the cost of pausing larger.
      </p>

      <p style={p}>
        In every state, stopping a $138.46 contribution frees between $109.73 and $121.85. That more than covers a $91.27 loan payment, but you lose $138.46 of savings per check to gain about $114. If your employer matches, you also lose the match, which is free money you cannot get back. The decision rule is simple: keep contributing at least enough to get the full match, and cut only the part above it. Our guide on{' '}
        <a href="/blog/how-401k-contributions-affect-your-paycheck" style={link}>how 401(k) contributions affect your paycheck</a> shows the per-check cost of every contribution rate.
      </p>

      <p style={p}>
        Check your plan rules too. The IRS FAQ notes that some plans bar new contributions for a period after you take a loan. If yours does, the drop in savings is forced, and you should plan for it.
      </p>

      <h2 style={h2}>Is a 401(k) loan taxed twice?</h2>

      <p style={p}>
        Only the interest. This is the most repeated claim about 401(k) loans, and it is half right. Take the principal first. You received $10,000 without paying any tax on it. You pay it back with after-tax pay, and you pay tax again when you withdraw it in retirement. That is one tax-free receipt and two taxed events, which nets out to one round of tax, the same as if you had never borrowed.
      </p>

      <p style={p}>
        The interest is different. On a $10,000 loan paid biweekly over five years, you pay $1,865.19 of interest into your account with after-tax money. In a traditional 401(k), that money is taxed again when you take it out. If you are in the 12% bracket in retirement, the second round costs about $224 ($1,865.19 &times; 12%) spread across your retirement years. That is real, but small. The bigger hidden cost is that the borrowed $10,000 is out of the market for five years, earning only your loan rate.
      </p>

      <h2 style={h2}>What happens to a 401(k) loan if you quit or get laid off?</h2>

      <p style={p}>
        This is where a 401(k) loan becomes expensive. Your payments run through payroll. When the paychecks stop, the payments stop. The{' '}
        <a href="https://www.irs.gov/retirement-plans/considering-a-loan-from-your-401k-plan" {...ext} style={link}>IRS warns</a>{' '}
        that your plan may require you to repay the loan in full when you leave. If you cannot, the plan reduces your account by the unpaid balance. That is called a loan offset, and it is treated as a distribution. The unpaid amount becomes taxable income, and if you are under 59&frac12;, a{' '}
        <a href="https://www.irs.gov/taxtopics/tc558" {...ext} style={link}>10% additional tax</a>{' '}
        usually applies on top.
      </p>

      <p style={p}>
        Here is what an unpaid $10,000 balance adds to the tax bill of a single filer earning $60,000, before any rollover.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={table}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>State</th>
              <th style={thR}>Federal income tax</th>
              <th style={thR}>State income tax</th>
              <th style={thR}>Early withdrawal tax</th>
              <th style={thR}>Total</th>
            </tr>
          </thead>
          <tbody>
            {defaultRows.map(([name, slug, fed, st, pen, total]) => (
              <tr key={slug}>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{name}</a>
                </td>
                <td style={tdR}>{fed}</td>
                <td style={tdR}>{st}</td>
                <td style={tdR}>{pen}</td>
                <td style={{ ...tdR, color: '#dc2626', fontWeight: 600 }}>{total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={note}>
        Extra federal and state income tax from this site&rsquo;s calculator when $10,000 is added to a $60,000 income (single filer, 2026). The early withdrawal column is the federal 10% additional tax, plus California&rsquo;s 2.5% additional tax in the California row. Assumes the state taxes the distribution as ordinary income and you are under 59&frac12;. Some states exempt certain retirement income, so check your state&rsquo;s rules.
      </p>

      <p style={p}>
        Federal tax alone is $1,550, more than a flat 12% would suggest. The extra $10,000 pushes part of your income past the $50,400 line into the 22% bracket. At $40,000 the federal piece would be $1,200, and at $100,000 it would be $2,200. California adds its own{' '}
        <a href="https://www.ftb.ca.gov/file/personal/income-types/early-distributions.html" {...ext} style={link}>2.5% tax on early distributions</a>, reported on form FTB 3805P.
      </p>

      <p style={p}>
        The bill often arrives as a surprise. When a loan is offset, no cash is paid to you, and the{' '}
        <a href="https://www.irs.gov/instructions/i1099r" {...ext} style={link}>Form 1099-R instructions</a>{' '}
        require withholding only when cash or property is actually distributed. So frequently nothing is withheld, and you find out when you file.
      </p>

      <h3 style={h3}>How to avoid the tax when you leave a job</h3>

      <p style={p}>
        You have more time than most people think. When the offset happens because you left the job or the plan ended, the IRS loan FAQ says you can roll over the offset amount until the due date, including extensions, of your federal return for that year. In plain terms: if you deposit $10,000 of your own money into an IRA by that deadline, the offset is not taxed. That gives you until the following April, or October with an extension, to come up with the cash. Severance or a final PTO payout can help. See our guides on{' '}
        <a href="/blog/severance-pay-and-taxes" style={link}>severance pay taxes</a> and{' '}
        <a href="/blog/final-paycheck-laws-2026" style={link}>final paycheck laws</a>.
      </p>

      <p style={p}>
        A default while you are still employed is worse. If you simply miss payments past the plan&rsquo;s grace period, the IRS treats the balance as a &ldquo;deemed distribution.&rdquo; The 1099-R instructions say a deemed distribution cannot be rolled over. The tax is locked in.
      </p>

      <h2 style={h2}>Can loan payments pause during unpaid leave?</h2>

      <p style={p}>
        Sometimes. The IRS allows a plan to suspend loan payments during a leave of absence of up to one year, and during military service. When you return, the missed payments must be made up. For a regular leave, the loan still has to be paid off within its original five-year term, so your later checks will carry a larger payment. If you are planning parental leave or medical leave, ask your plan administrator before the leave starts. Payroll cannot take a deduction from a paycheck that does not exist, and an unnoticed gap can tip the loan into default.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>Does a 401(k) loan show up on my W-2?</h3>
      <p style={p}>
        No. The loan is not income, and repayments are not contributions, so neither appears on your W-2. Your box 1 wages are the same with or without a loan. A loan only shows up on a tax form if it goes into default or offset, and then it is reported on Form 1099-R. Our{' '}
        <a href="/blog/understanding-your-w2" style={link}>W-2 guide</a> explains each box.
      </p>

      <h3 style={h3}>Can I pay off a 401(k) loan early?</h3>
      <p style={p}>
        Most plans allow it, but the rules are set by your plan, not by the IRS. Paying early cuts the total interest and puts the money back into the market sooner. It also removes the default risk if you think you might change jobs. Ask your plan administrator how to make a lump-sum payoff, since it usually cannot be done through payroll.
      </p>

      <h3 style={h3}>Can I keep contributing to my 401(k) while repaying a loan?</h3>
      <p style={p}>
        Usually yes, and you should if your employer matches. Some plans restrict contributions for a period after a loan, so read your plan document. Remember that the loan payment and your contribution are separate lines. The contribution lowers your taxes. The loan payment does not.
      </p>

      <h3 style={h3}>How is my 401(k) loan payment calculated?</h3>
      <p style={p}>
        Payroll uses a standard amortization schedule, the same math as a car loan. The plan divides the annual rate by your number of paychecks, then solves for a level payment that pays off principal and interest over the term. That is why a biweekly payment on $10,000 is $91.27 instead of $10,000 &divide; 130 = $76.92. The extra $14.35 per check is interest you pay to yourself.
      </p>

      <h3 style={h3}>Will a 401(k) loan raise my tax withholding?</h3>
      <p style={p}>
        No. Your withholding is based on your wages and your W-4, and the loan changes neither. The only time a loan affects your taxes is a default or an unrolled offset. If you want to check your current withholding, our{' '}
        <a href="/blog/how-to-calculate-federal-tax-withholding" style={link}>federal withholding guide</a> walks through it.
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
          See Your Paycheck Before the Loan Starts
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary, state, and 401(k) rate to get your net pay per check. Then subtract your loan payment to see what you will actually take home.
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
          <a href="https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-loans" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Retirement Plans FAQs Regarding Loans (limits, term, payments, leave, offsets)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/considering-a-loan-from-your-401k-plan" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Considering a Loan From Your 401(k) Plan?</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc558" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 558: Additional Tax on Early Distributions From Retirement Plans</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/instructions/i1099r" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Instructions for Forms 1099-R and 5498 (deemed distributions, loan offsets, withholding)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ftb.ca.gov/file/personal/income-types/early-distributions.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>California Franchise Tax Board, Early Distributions (2.5% additional tax)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Revenue Procedure 2025-32 (2026 brackets and standard deduction)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS, Topic 751: Social Security and Medicare Withholding Rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          State figures: this site&rsquo;s calculator, using the state tables listed on each <a href="/texas" style={{ color: '#2563eb' }}>state calculator page</a>
        </li>
      </ul>

      <ArticleFooter current="401k-loan-repayment-paycheck" />
    </article>
  )
}
