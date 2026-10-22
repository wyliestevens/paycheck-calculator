import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Tuition Reimbursement and Education Benefits: How the $5,250 Tax Break Works (2026)' },
  description:
    "Employer tuition reimbursement up to $5,250/year is tax-free — no income tax, no FICA. Here's exactly how Section 127 works and how much you save in 2026.",
  alternates: { canonical: '/blog/tuition-reimbursement-taxes-2026' },
  keywords:
    'tuition reimbursement taxes 2026, employer education assistance, Section 127, is tuition reimbursement taxable, tuition reimbursement tax-free, employer tuition assistance, educational assistance program paycheck',
  openGraph: {
    type: 'article',
    url: '/blog/tuition-reimbursement-taxes-2026',
    images: [{ url: '/og/blog/tuition-reimbursement-taxes-2026', width: 1200, height: 630 }],
    title: 'Tuition Reimbursement and Education Benefits: How the $5,250 Tax Break Works (2026)',
    description:
      "Employer tuition reimbursement up to $5,250/year is completely tax-free. Here's exactly how the Section 127 benefit works — with a full worked example.",
  },
}

export default function TuitionReimbursementTaxes2026() {
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
          aria-label="Tuition reimbursement illustration showing $5,250 tax-free employer education benefit under Section 127"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.07)" />

          {/* Left: Open book icon */}
          <rect x="48" y="58" width="72" height="88" rx="5" fill="rgba(255,255,255,0.18)" />
          <rect x="48" y="58" width="9" height="88" rx="4" fill="rgba(255,255,255,0.32)" />
          <line x1="68" y1="82" x2="110" y2="82" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
          <line x1="68" y1="95" x2="110" y2="95" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
          <line x1="68" y1="108" x2="110" y2="108" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
          <line x1="68" y1="121" x2="100" y2="121" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
          <text x="84" y="47" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">EDUCATION</text>

          {/* Arrow */}
          <line x1="143" y1="102" x2="193" y2="102" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
          <polygon points="193,94 208,102 193,110" fill="rgba(255,255,255,0.5)" />

          {/* Center: $5,250 tax-free box */}
          <rect x="225" y="40" width="178" height="122" rx="10" fill="rgba(255,255,255,0.15)" />
          <text x="314" y="68" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">TAX-FREE EACH YEAR</text>
          <text x="314" y="108" textAnchor="middle" fontSize="38" fontWeight="700" fill="#ffffff" fontFamily="monospace">$5,250</text>
          <text x="314" y="130" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">IRC Section 127</text>
          <text x="314" y="150" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Federal &middot; FICA &middot; Most States</text>

          {/* Right: savings */}
          <rect x="424" y="52" width="146" height="96" rx="8" fill="rgba(255,255,255,0.12)" />
          <text x="497" y="78" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">saves you ~</text>
          <text x="497" y="112" textAnchor="middle" fontSize="30" fontWeight="700" fill="#86efac" fontFamily="monospace">$1,557</text>
          <text x="497" y="132" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">at $70K salary</text>
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
        Tuition Reimbursement and Education Benefits: How the $5,250 Tax Break Works (2026)
      </h1>

      <ArticleMeta slug="tuition-reimbursement-taxes-2026" />

      {/* Summary */}
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer helps pay for school, the IRS lets you exclude up to <strong>$5,250 per year</strong> from your taxable income under <strong>IRC Section 127</strong> &mdash; so that money is completely free of federal income tax, Social Security, and Medicare. At a $70,000 salary, the full benefit saves you <strong>$1,557 in taxes per year</strong>. Any amount above $5,250 is taxable as ordinary wages.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Employer Tuition Reimbursement?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Employer tuition reimbursement &mdash; also called an <strong>Educational Assistance Program (EAP)</strong> &mdash; is when your company pays for your educational expenses: tuition, fees, books, supplies, and required equipment. Employers are not required to offer this benefit, but many do as a recruiting and retention perk.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Common setups include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>A company pays for an employee to earn an undergraduate or graduate degree</li>
        <li style={{ marginBottom: '0.5rem' }}>A hospital covers tuition for nurses pursuing advanced credentials</li>
        <li style={{ marginBottom: '0.5rem' }}>A tech employer pays for coding bootcamps or professional certifications</li>
        <li style={{ marginBottom: '0.5rem' }}>An employer reimburses employees after they pass a course (reimbursement model)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Congress created a special tax break for these programs &mdash; <strong>Section 127 of the Internal Revenue Code</strong> &mdash; making the benefit tax-free for both the employee and the employer, up to the annual dollar limit.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Is Employer Tuition Reimbursement Taxable?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Up to <strong>$5,250 per year</strong> is completely tax-free under{' '}
        <a href="https://www.irs.gov/newsroom/educational-assistance-programs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRC Section 127
        </a>
        . That means:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>No federal income tax</li>
        <li style={{ marginBottom: '0.5rem' }}>No Social Security tax (6.2%)</li>
        <li style={{ marginBottom: '0.5rem' }}>No Medicare tax (1.45%)</li>
        <li style={{ marginBottom: '0.5rem' }}>No state income tax in most states</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Any amount above $5,250 is taxable as ordinary wages. Your employer adds the excess to your paycheck and withholds federal income tax, Social Security, and Medicare on it &mdash; just like a bonus or supplemental pay.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The $5,250 limit has been in the tax code since 1978 and is not indexed to inflation. The IRS confirms this in{' '}
        <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 15-B (Employer&rsquo;s Tax Guide to Fringe Benefits)
        </a>.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Does It Show Up on Your Paycheck and W-2?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There are two common ways employers handle tuition reimbursement payments:
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>1. Direct payment to the school.</strong> Your employer pays the institution directly. This amount is never added to your W-2 wages (up to $5,250). You simply receive the benefit off-payroll with no paycheck impact.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>2. Reimbursement through payroll.</strong> Your employer adds the amount to a paycheck but excludes it from taxable wages. You may see a line item labeled &ldquo;Tuition Reimb&rdquo; as a non-taxable addition. Your Box&nbsp;1 wages on your W-2 will be lower than your total gross pay &mdash; the difference is your tax-free benefit.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Either way, amounts within the $5,250 limit do <strong>not</strong> appear in Box&nbsp;1 (Wages, tips, other compensation) on your W-2. Amounts above $5,250 are included in Box&nbsp;1 and taxed exactly like ordinary income.
      </p>

      {/* Section 4: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Much Does the Tax-Free Benefit Actually Save You?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s compare two scenarios for a single filer earning $70,000: one where the employer pays $5,250 in tuition as a tax-free benefit under Section 127, and one where that same $5,250 is paid as additional taxable cash wages.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>Step 1 &mdash; Federal income tax at $70,000 base salary:</strong>
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        Gross wages: $70,000<br />
        Standard deduction: &minus;$16,100&nbsp;&nbsp;(2026 single filer)<br />
        Taxable income: $53,900<br />
        <br />
        10% &times; $12,400 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $1,240.00<br />
        12% &times; $38,000 ($50,400 &minus; $12,400) = $4,560.00<br />
        22% &times; $3,500 &nbsp;($53,900 &minus; $50,400) = &nbsp;&nbsp;&nbsp;$770.00<br />
        <strong>Federal income tax: $6,570.00</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>Step 2 &mdash; Tax-free tuition benefit vs. taxable cash at $70,000:</strong>
      </p>

      <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: '#475569', marginBottom: '1rem' }}>
        Since $53,900 in taxable income sits in the 22% federal bracket, any additional dollar of wages is taxed at 22%. Adding $5,250 as cash would push taxable income to $59,150 &mdash; still entirely in the 22% bracket.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9375rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax on $5,250</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#059669' }}>Tax-Free Tuition Benefit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#dc2626' }}>If Paid as Taxable Cash</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal income tax (22%)', '$0', '$1,155.00'],
              ['Social Security (6.2%)', '$0', '$325.50'],
              ['Medicare (1.45%)', '$0', '$76.13'],
            ].map(([label, free, taxable], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{free}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{taxable}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total taxes on $5,250</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$0</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$1,556.63</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At a $70,000 salary (22% marginal bracket), a full $5,250 tax-free tuition benefit saves you <strong>$1,556.63 per year in federal taxes alone</strong>. Add state income tax savings and the number grows: California residents at this income level would save another $459 in state taxes.
        See the full after-tax picture for a <a href="/texas/70000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$70,000 salary in Texas</a> or <a href="/california/70000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$70,000 in California</a>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer saves too: they pay no employer FICA (6.2% Social Security + 1.45% Medicare = 7.65%) on amounts up to $5,250, saving them another $401.63 on the same benefit. This mutual savings is why employers are often willing to offer tuition assistance as a benefit &mdash; it costs them less than the equivalent cash.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens When Reimbursement Exceeds $5,250?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer covers more than $5,250 in a calendar year, the overage is taxable income. Your employer adds the excess to your payroll and withholds taxes on it &mdash; typically using the <strong>22% flat supplemental wage withholding rate</strong> for the amount above the limit. This is the same rate used for{' '}
        <a href="/blog/how-bonuses-are-taxed" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          bonuses and other supplemental pay
        </a>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>Example: employer reimburses $7,000 in a year</strong>
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        Total reimbursement:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$7,000.00<br />
        Tax-free (Section 127 limit):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5,250.00<br />
        Taxable excess: $7,000 &minus; $5,250 =&nbsp;&nbsp;$1,750.00<br />
        <br />
        Federal withholding (22%):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$385.00<br />
        Social Security (6.2%):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$108.50<br />
        Medicare (1.45%):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$25.38<br />
        <strong>Total taxes on $1,750 excess:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$518.88</strong><br />
        <br />
        Net value you receive:&nbsp;&nbsp;&nbsp;$7,000 &minus; $518.88 = <strong>$6,481.12</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even with taxes on the overage, receiving $7,000 in employer-paid tuition is worth $6,481 net &mdash; far better than paying $7,000 out of pocket with after-tax dollars. The effective subsidy is still enormous.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which Courses and Expenses Qualify?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Under Section 127, a qualifying educational assistance program can cover:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Tuition and fees at accredited colleges, universities, trade schools, and vocational schools</li>
        <li style={{ marginBottom: '0.5rem' }}>Books, supplies, and equipment required for the course</li>
        <li style={{ marginBottom: '0.5rem' }}>Both undergraduate and graduate-level courses</li>
        <li style={{ marginBottom: '0.5rem' }}>Courses <em>not</em> directly related to your current job &mdash; an accountant can pursue a history degree and still get the tax-free benefit</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>What Section 127 does not cover</strong> (these remain taxable fringe benefits):
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Meals, lodging, or transportation for attending school</li>
        <li style={{ marginBottom: '0.5rem' }}>Tools or supplies you keep after the course ends</li>
        <li style={{ marginBottom: '0.5rem' }}>Courses for sports, games, or hobbies (unless required for your current job)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also a separate rule &mdash; the <strong>Working Condition Fringe Benefit</strong> under IRC Section 132(d) &mdash; that lets employers pay for work-related education tax-free <em>without any dollar cap</em>, as long as the education maintains or improves skills required for your current job. A lawyer whose employer pays for a continuing legal education course, for example, may have no dollar limit under 132(d). The two rules can overlap; if a course qualifies under 132(d), the $5,250 cap under Section 127 does not apply to that specific course.{' '}
        <a href="https://www.irs.gov/publications/p970" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 970 &mdash; Tax Benefits for Education)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Does Tuition Reimbursement Compare to Other Pre-Tax Benefits?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is how the Section 127 benefit stacks up against other major tax-advantaged workplace benefits in 2026:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9375rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Benefit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2026 Limit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Saves Income Tax?</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Saves FICA?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tuition reimbursement (§127)', '$5,250', 'Yes', 'Yes'],
              ['Traditional 401(k)', '$24,500', 'Yes', 'No'],
              ['HSA (self-only coverage)', '$4,400', 'Yes', 'Yes'],
              ['Dependent Care FSA', '$5,000', 'Yes', 'Yes'],
            ].map(([benefit, limit, income, fica], i) => (
              <tr key={benefit} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{benefit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{limit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#059669', fontWeight: 600 }}>{income}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: i === 1 ? '#dc2626' : '#059669', fontWeight: 600 }}>{fica}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        401(k) 2026 limit: $24,500 per{' '}
        <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS.gov</a>.{' '}
        HSA 2026 self-only limit: $4,400 per IRS Rev. Proc. 2025-19.
        Dependent Care FSA limit is a statutory $5,000 (per household, married filing jointly).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that the traditional 401(k) does <strong>not</strong> save FICA taxes &mdash; you pay Social Security and Medicare on 401(k) contributions even though they reduce your federal income tax. Tuition reimbursement (and HSA and DCFSA) saves you <em>both</em> income tax <em>and</em> FICA, making it among the most tax-efficient workplace benefits dollar for dollar. Learn more about how these interact in our{' '}
        <a href="/blog/pre-tax-vs-post-tax-deductions" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          guide to pre-tax vs. post-tax deductions
        </a>.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does Your Employer Need a Formal Written Plan?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes. For the Section 127 tax-free treatment to apply, the employer must have a <strong>written educational assistance plan</strong> that satisfies IRS requirements:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>The plan must be in writing and provided to eligible employees</li>
        <li style={{ marginBottom: '0.5rem' }}>It must benefit employees under rules that do not discriminate in favor of highly compensated employees</li>
        <li style={{ marginBottom: '0.5rem' }}>No more than 5% of amounts paid under the plan can go to shareholders or owners (or their spouses and dependents) who own more than 5% of the company</li>
        <li style={{ marginBottom: '0.5rem' }}>Employees must receive reasonable notice of the plan&rsquo;s existence and terms</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer&rsquo;s program does not meet these requirements, any amounts paid &mdash; even below $5,250 &mdash; may be taxable as ordinary income.{' '}
        <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 15-B)
        </a>
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Can You Also Claim Education Tax Credits?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Be careful about <strong>double-dipping</strong>. You cannot claim the American Opportunity Credit or the Lifetime Learning Credit for the same expenses your employer already paid tax-free. The IRS requires you to reduce your qualifying education expenses by the amount of tax-free assistance received.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Example: your tuition is $8,000 and your employer reimburses $5,250 tax-free. You may only claim the education credits on the remaining $2,750 out-of-pocket expenses. If the remaining amount is still large enough, you can still get meaningful credit value &mdash; the American Opportunity Credit covers the first $2,000 at 100% ($2,000 in credit) and the next $2,000 at 25% ($500). See the full breakdown in our{' '}
        <a href="/blog/education-tax-credits-2026" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          education tax credits guide
        </a>.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Make the Most of Your Education Benefit
      </h2>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Use the full $5,250 every year.</strong> It does not roll over. If your employer offers the benefit and you do not use it, you leave up to $1,557 in tax savings on the table annually.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Stagger courses across calendar years.</strong> If your total reimbursement will exceed $5,250, consider spacing enrollment so each year&rsquo;s amount stays tax-free. For example, start one course in December and the next in January of the following year.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Combine with work-condition education above the cap.</strong> If your courses qualify under the Working Condition Fringe Benefit (Section 132), the $5,250 cap may not apply. Ask your employer&rsquo;s HR or benefits team whether courses directly tied to your current job duties qualify.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check your W-2 after year-end.</strong> Verify that Box&nbsp;1 does not include amounts up to $5,250 in employer tuition reimbursement. If it does, speak with payroll &mdash; it should only appear there if the amount exceeded the limit.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Don&rsquo;t double-dip.</strong> Reduce your qualifying education expenses for credit purposes by any tax-free reimbursement you received.
        </li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To see exactly how your full paycheck breaks down today &mdash; and how pre-tax benefits like tuition reimbursement lower your taxable income &mdash; try the calculator for your state. For example:{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>,{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>, or any of the other 50 states.
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
          See Your Take-Home Pay After All Deductions
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see exactly how much goes to federal tax, FICA, and state tax &mdash; and what you actually take home.
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
          <a href="https://www.irs.gov/newsroom/educational-assistance-programs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS.gov &mdash; Educational Assistance Programs (Section 127)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p15b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 15-B &mdash; Employer&rsquo;s Tax Guide to Fringe Benefits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p970" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 970 &mdash; Tax Benefits for Education</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc513" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 513 &mdash; Work-Related Education Expenses</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Newsroom &mdash; 401(k) limit increases to $24,500 for 2026</a>
        </li>
      </ul>

      <ArticleFooter current="tuition-reimbursement-taxes-2026" />
    </article>
  )
}
