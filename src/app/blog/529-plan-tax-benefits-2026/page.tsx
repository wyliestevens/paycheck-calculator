import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '529 Plan Tax Benefits: How to Save for College and Cut Your Taxes in 2026',
  description:
    '529 plans grow tax-free and withdrawals for college are tax-free too. Here\'s how the federal and state tax benefits work — with contribution limits and a worked example.',
  alternates: { canonical: '/blog/529-plan-tax-benefits-2026' },
  keywords:
    '529 plan tax benefits 2026, 529 college savings plan, 529 state tax deduction, 529 plan contribution limit, qualified education expenses, 529 plan rules 2026',
  openGraph: {
    title: '529 Plan Tax Benefits: How to Save for College and Cut Your Taxes in 2026',
    description:
      '529 plans grow tax-free and withdrawals for college are tax-free too. Here\'s how the federal and state tax benefits work — with a full worked example.',
  },
}

export default function Plan529TaxBenefits() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="529 college savings plan illustration"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Mortarboard cap */}
          <polygon points="90,70 130,50 170,70 130,90" fill="rgba(255,255,255,0.3)" />
          <rect x="126" y="90" width="8" height="30" fill="rgba(255,255,255,0.3)" />
          <circle cx="130" cy="120" r="6" fill="rgba(255,255,255,0.4)" />
          <line x1="146" y1="70" x2="162" y2="82" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <circle cx="165" cy="84" r="5" fill="rgba(255,255,255,0.5)" />
          {/* Arrow */}
          <line x1="195" y1="100" x2="255" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
          <polygon points="255,92 270,100 255,108" fill="rgba(255,255,255,0.5)" />
          {/* Coin stack / savings */}
          <ellipse cx="320" cy="115" rx="35" ry="10" fill="rgba(255,255,255,0.2)" />
          <rect x="285" y="88" width="70" height="27" rx="2" fill="rgba(255,255,255,0.2)" />
          <ellipse cx="320" cy="88" rx="35" ry="10" fill="rgba(255,255,255,0.3)" />
          <rect x="285" y="63" width="70" height="25" rx="2" fill="rgba(255,255,255,0.2)" />
          <ellipse cx="320" cy="63" rx="35" ry="10" fill="rgba(255,255,255,0.35)" />
          <text x="320" y="67" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif" fontWeight="600">TAX-FREE</text>
          {/* Arrow */}
          <line x1="370" y1="100" x2="430" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
          <polygon points="430,92 445,100 430,108" fill="rgba(255,255,255,0.5)" />
          {/* Diploma */}
          <rect x="455" y="65" width="80" height="60" rx="6" fill="rgba(255,255,255,0.25)" />
          <line x1="467" y1="85" x2="523" y2="85" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
          <line x1="467" y1="95" x2="523" y2="95" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <line x1="467" y1="105" x2="503" y2="105" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <circle cx="495" cy="118" r="8" fill="rgba(255,255,255,0.4)" />
          {/* Title */}
          <text x="300" y="165" textAnchor="middle" fontSize="15" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">529 COLLEGE SAVINGS PLAN</text>
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
        529 Plan Tax Benefits: How to Save for College and Cut Your Taxes in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 24, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        College is expensive. The average cost of four years at a public university now exceeds $110,000 &mdash; and private schools often run twice that. A <strong>529 plan</strong> is the most tax-efficient way most families have to save for those costs. Money grows completely tax-free inside a 529, and when you use it to pay for qualifying education expenses, you owe zero federal income tax on any of the gains.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On top of that, 34 states plus Washington D.C. let you deduct 529 contributions from your state income taxes &mdash; giving you an immediate tax break on top of the long-term tax-free growth. Here is everything you need to know about how 529 plans work in 2026.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a 529 Plan?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A 529 plan is a tax-advantaged savings account designed specifically for education expenses. The name comes from Section 529 of the Internal Revenue Code. Every state offers at least one 529 plan, and you can use any state&rsquo;s plan regardless of where you live or where your child goes to school.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There are two main types:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>College savings plans:</strong> The most common type. You invest money in mutual funds or ETFs and the account grows over time. What you get out depends on how the investments perform.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Prepaid tuition plans:</strong> You lock in today&rsquo;s tuition rates for future enrollment at specific in-state public colleges. These are offered by fewer states and come with more restrictions.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most families use college savings plans. The rest of this guide focuses on those.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Federal Tax Benefits of a 529 Plan
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal government does not give you a tax deduction for putting money into a 529. Your contributions go in after taxes &mdash; similar to a Roth IRA. But two powerful tax benefits come later:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.75rem' }}>
          Benefit #1: Tax-Free Growth
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#475569', margin: 0 }}>
          Dividends, interest, and capital gains inside a 529 account are never taxed as long as the money stays in the account. If you invest $20,000 and it grows to $45,000 over 15 years, you owe zero federal tax on that $25,000 in gains &mdash; as long as you use it for qualified expenses.
        </p>
      </div>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#4f46e5', marginBottom: '0.75rem' }}>
          Benefit #2: Tax-Free Withdrawals
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#475569', margin: 0 }}>
          When you take money out to pay for qualifying education expenses, you owe no federal income tax on either the contributions or the earnings. Withdrawals are completely tax-free.
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Compare that to a regular taxable brokerage account: every year you&rsquo;d owe taxes on dividends and capital gains distributions, and you&rsquo;d owe capital gains tax when you sell. Over 18 years, those taxes add up to a significant drag on your savings.{' '}
        <a href="https://www.irs.gov/taxtopics/tc313" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 313: Qualified Tuition Programs)
        </a>
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Tax Deductions for 529 Contributions
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is where 529 plans get even better for many people. About 34 states and Washington D.C. offer a state income tax deduction or credit for 529 contributions. The rules vary by state, but the basic idea is the same: contribute to your state&rsquo;s 529 plan and reduce your state taxable income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are some examples of how state deductions work in 2026:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>State</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Deduction Limit (Single Filer)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Approx. State Tax Savings</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['New York', '$5,000/yr per account', '~$330 at 6.85%'],
              ['Illinois', '$10,000/yr ($20K married)', '~$495 single at 4.95%'],
              ['Michigan', '$5,000/yr ($10K married)', '~$210 single at 4.25%'],
              ['Virginia', '$4,000/yr (unlimited age 70+)', '~$230 at 5.75%'],
              ['Indiana', '20% credit up to $1,500', 'Up to $1,500 credit'],
              ['Pennsylvania', '$17,000/yr per beneficiary', '~$510 at 3.07%'],
            ].map(([state, limit, savings], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{limit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important: most states require you to use <em>their own</em> state&rsquo;s plan to get the deduction. A handful of states &mdash; including Missouri, Pennsylvania, and Arizona &mdash; let you deduct contributions to any state&rsquo;s 529 plan. If you live in{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>,{' '}
        <a href="/illinois" style={{ color: '#2563eb', textDecoration: 'underline' }}>Illinois</a>, or most other states with a deduction, stick with your home state&rsquo;s plan to claim the benefit.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Seven states &mdash; including{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>,{' '}
        <a href="/new-jersey" style={{ color: '#2563eb', textDecoration: 'underline' }}>New Jersey</a>, and Kentucky &mdash; offer 529 plans but provide <strong>no state tax deduction</strong>. In those states, you might compare your home state&rsquo;s investment options against other states&rsquo; plans, since the deduction isn&rsquo;t a factor.{' '}
        <a href="https://taxfoundation.org/data/all/state/529-plan-state-tax-deductions/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; 529 State Tax Deductions)
        </a>
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Much Can You Contribute?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is no annual federal contribution limit for 529 plans. You can put in as much as you want each year. However, contributions count as <strong>gifts</strong> for tax purposes, which means large contributions can trigger gift tax rules.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In 2026, the annual gift tax exclusion is <strong>$19,000 per person</strong>. You can give up to $19,000 to any individual (including a 529 beneficiary) without filing a gift tax return. Married couples can give $38,000 combined per beneficiary per year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also a special rule called <strong>superfunding</strong>. You can contribute up to five years&rsquo; worth of annual exclusions at once into a 529 plan &mdash; that&rsquo;s $95,000 per beneficiary ($190,000 per couple). You just have to elect to spread the gift over five years on Form 709 and not make additional gifts to that person during those five years.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Each state also sets an overall <strong>maximum account balance</strong> for its 529 plan &mdash; typically between $235,000 and $550,000 per beneficiary. Once the account hits that balance, you can&rsquo;t add more, but the money inside continues to grow without limit.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Counts as a Qualified Expense?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You get the tax-free withdrawal only if you use the money for <strong>qualified education expenses</strong>. Here is what counts:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Tuition and fees at accredited colleges, universities, and vocational schools</li>
        <li style={{ marginBottom: '0.5rem' }}>Room and board (on-campus or off-campus, up to the school&rsquo;s cost of attendance figure)</li>
        <li style={{ marginBottom: '0.5rem' }}>Books, supplies, and equipment required for enrollment</li>
        <li style={{ marginBottom: '0.5rem' }}>Computers and internet access used primarily for school</li>
        <li style={{ marginBottom: '0.5rem' }}>Special needs services</li>
        <li style={{ marginBottom: '0.5rem' }}>K&ndash;12 tuition up to <strong>$10,000 per year</strong> per student (after the 2017 Tax Cuts and Jobs Act)</li>
        <li style={{ marginBottom: '0.5rem' }}>Student loan repayments up to <strong>$10,000 lifetime</strong> per beneficiary (after the SECURE Act)</li>
        <li style={{ marginBottom: '0.5rem' }}>Registered apprenticeship programs</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        What does <em>not</em> qualify: transportation and travel, health insurance, sports and recreation fees, and extracurricular activities. If you use 529 money for non-qualified expenses, you&rsquo;ll owe income tax <em>plus</em> a 10% penalty on the earnings portion of the withdrawal.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What If Your Child Doesn&rsquo;t Go to College?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is the question that makes many parents hesitate. The good news is you have several options if the 529 money doesn&rsquo;t get used for college:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Change the beneficiary:</strong> You can switch the beneficiary to another family member with no tax penalty &mdash; a sibling, parent, cousin, or even yourself. The IRS broadly defines &ldquo;family member.&rdquo;
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Save it for graduate school:</strong> There is no timeline forcing you to use the money. Your child can use it years later.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Roll it into a Roth IRA (new in 2024):</strong> Thanks to the SECURE 2.0 Act, you can now roll up to <strong>$35,000 lifetime</strong> from a 529 into the beneficiary&rsquo;s Roth IRA &mdash; as long as the 529 account has been open at least 15 years. This is subject to annual Roth contribution limits.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Take a non-qualified withdrawal:</strong> You get your original contributions back with no penalty. You only owe income tax plus a 10% penalty on the <em>earnings</em> &mdash; not on what you put in.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 529-to-Roth rollover option (added by SECURE 2.0) is a game-changer for flexibility. It means overfunded 529 accounts don&rsquo;t become a tax trap &mdash; they can turn into a retirement savings boost for your child instead.{' '}
        <a href="https://www.irs.gov/retirement-plans/secure-20-act-changes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; SECURE 2.0 Act Changes)
        </a>
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $200/Month from Your Paycheck for 18 Years
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s say you start contributing $200 a month to a 529 when your child is born. Assume a 7% average annual return (close to the historical stock market average, before inflation). Here is how that grows:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Year</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Total Contributed</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Account Balance</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax-Free Gains</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Year 5', '$12,000', '$13,900', '$1,900'],
              ['Year 10', '$24,000', '$33,300', '$9,300'],
              ['Year 15', '$36,000', '$62,800', '$26,800'],
              ['Year 18', '$43,200', '$87,600', '$44,400'],
            ].map(([yr, contributed, balance, gains], i) => (
              <tr key={yr} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{yr}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{contributed}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 600 }}>{balance}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{gains}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        By the time your child turns 18, you&rsquo;ve contributed $43,200 and the account has grown to roughly $87,600. That $44,400 in investment gains is completely <strong>tax-free</strong> when used for college. If this were a regular taxable account, you&rsquo;d owe federal capital gains tax on those gains when withdrawn &mdash; potentially $4,400 to $8,880 depending on your tax bracket.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live in{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>{' '}
        and contribute $5,000 per year, you&rsquo;d also get a $342 state tax deduction each year ($5,000 &times; 6.85% top rate) &mdash; saving roughly $6,156 in state taxes over 18 years in addition to the federal benefit.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        529 vs. Other College Savings Options
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 529 plan is usually the best choice for most families, but it is worth knowing the alternatives:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Coverdell Education Savings Account (ESA):</strong> Also grows tax-free for education. But contributions are capped at <strong>$2,000 per year per child</strong>, and you can&rsquo;t contribute at all if your income is too high (phases out at $110,000 single / $220,000 joint). The 529 has no income limit.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Roth IRA:</strong> Some families use a Roth IRA for dual-purpose savings. You can withdraw your contributions (not earnings) penalty-free for college. But using a Roth for college means less retirement savings, and it may hurt financial aid eligibility.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>UGMA/UTMA custodial account:</strong> A regular investment account in the child&rsquo;s name. No contribution limits, but no tax-free growth &mdash; and the child takes full ownership at age 18 or 21.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Savings bonds (I Bonds / EE Bonds):</strong> Interest can be tax-free when used for education if income limits are met, but annual purchase limits cap flexibility.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most families, the 529 plan wins: no contribution limits based on income, high annual contribution room, state deductions in most states, and the new Roth rollover escape valve if college plans change.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How a 529 Affects Financial Aid
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A parent-owned 529 plan is counted as a parental asset on the FAFSA. Parental assets are assessed at a maximum rate of <strong>5.64%</strong> per year &mdash; meaning a $50,000 account reduces your aid by at most $2,820 per year. Student-owned accounts and grandparent-owned accounts are treated differently, so the account owner matters.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Starting with the 2024&ndash;2025 FAFSA (using the simplified &ldquo;FAFSA Simplification Act&rdquo; formula), distributions from a grandparent-owned 529 no longer count as student income. That removed the biggest downside of grandparent 529 accounts.{' '}
        <a href="https://studentaid.gov/resources/prepare-for-college/students/funding/529-plans" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Federal Student Aid &mdash; 529 Plans and FAFSA)
        </a>
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Practical Tips for 2026
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Start early.</strong> Time in the market is the biggest driver of 529 growth. Even $50 a month starting at birth grows significantly by high school graduation.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check your state&rsquo;s deduction before year-end.</strong> Many states require contributions by December 31 to qualify for that year&rsquo;s deduction. Don&rsquo;t miss the deadline.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Keep receipts.</strong> The IRS may ask you to document that your 529 withdrawal matched your qualified expenses in the same tax year.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Coordinate with the American Opportunity Credit.</strong> You can&rsquo;t use 529 money for the same expenses you claim on the education tax credit. If you&rsquo;re eligible for the American Opportunity Credit, you may want to pay the first $4,000 of tuition out of pocket to maximize the credit, then use 529 funds for the rest.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Compare state plans.</strong> Even if your state doesn&rsquo;t offer a deduction (or you&rsquo;ve already hit the limit), you can pick a plan with low-cost index fund options from another state. Many experts recommend the Utah, New York, or Nevada plans for their investment options.
        </li>
      </ul>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A 529 plan is one of the most powerful savings tools available to American families. You get federal tax-free growth, federal tax-free withdrawals for qualified expenses, and a state tax deduction in most states. The new Roth rollover option makes 529s even more flexible than they used to be &mdash; overfunding is no longer the trap it once was.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If college costs are on your radar and you live in a state with an income tax, contributing to a 529 is one of the clearest tax wins available to you. The earlier you start, the more time your money has to grow tax-free.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f5f3ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Understanding your after-tax paycheck helps you know exactly how much you have left to save. Use our free calculator for any state.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#4f46e5',
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
          <a href="https://www.irs.gov/taxtopics/tc313" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 313: Qualified Tuition Programs (529 Plans)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p970.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 970: Tax Benefits for Education</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/529-plan-state-tax-deductions/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; 529 Plan State Tax Deductions</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://studentaid.gov/resources/prepare-for-college/students/funding/529-plans" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Federal Student Aid &mdash; 529 Plans and FAFSA</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/secure-20-act-changes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; SECURE 2.0 Act Changes (529-to-Roth Rollover)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.savingforcollege.com/article/how-much-is-your-state-s-529-plan-tax-deduction-really-worth" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SavingForCollege.com &mdash; State 529 Tax Deduction Values</a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
