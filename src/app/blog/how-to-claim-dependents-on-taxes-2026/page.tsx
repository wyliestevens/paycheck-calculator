import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Claim Dependents on Your Taxes: 2026 Guide',
  description:
    "Claiming a dependent can cut your federal tax bill by $2,000 or more — and boost every paycheck through your W-4. Here's exactly who qualifies and how to claim them.",
  alternates: { canonical: '/blog/how-to-claim-dependents-on-taxes-2026' },
  keywords:
    'how to claim dependents 2026, qualifying child, qualifying relative, dependent tax credit, child tax credit 2026, W-4 dependents, dependent definition IRS, claim dependent taxes',
  openGraph: {
    title: 'How to Claim Dependents on Your Taxes: 2026 Guide',
    description:
      "Claiming a dependent can cut your federal tax bill by $2,000 or more — and boost every paycheck through your W-4. Here's exactly who qualifies and how to claim them.",
  },
}

export default function HowToClaimDependents2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Claiming dependents on taxes — family with tax credit illustration"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Adult figure (left) */}
          <circle cx="90" cy="75" r="18" fill="rgba(255,255,255,0.25)" />
          <rect x="70" y="96" width="40" height="50" rx="6" fill="rgba(255,255,255,0.25)" />
          <text x="90" y="162" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Taxpayer</text>

          {/* Child figure (left, smaller) */}
          <circle cx="150" cy="85" r="13" fill="rgba(255,255,255,0.18)" />
          <rect x="134" y="100" width="30" height="38" rx="5" fill="rgba(255,255,255,0.18)" />
          <text x="150" y="152" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Child</text>

          {/* Arrow to W-4 */}
          <line x1="185" y1="105" x2="235" y2="105" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="235,98 250,105 235,112" fill="rgba(255,255,255,0.5)" />

          {/* W-4 document */}
          <rect x="255" y="60" width="90" height="90" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="84" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="sans-serif">W-4</text>
          <line x1="270" y1="95" x2="330" y2="95" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <line x1="270" y1="105" x2="325" y2="105" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <line x1="270" y1="115" x2="320" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <line x1="270" y1="125" x2="330" y2="125" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <text x="300" y="162" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Step 3</text>

          {/* Arrow to credits */}
          <line x1="350" y1="105" x2="395" y2="105" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="395,98 410,105 395,112" fill="rgba(255,255,255,0.5)" />

          {/* Credits box */}
          <rect x="415" y="55" width="145" height="95" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="488" y="78" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">TAX SAVINGS</text>
          <rect x="428" y="85" width="120" height="25" rx="4" fill="rgba(255,255,255,0.2)" />
          <text x="488" y="102" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="monospace">$2,000 / child</text>
          <rect x="428" y="115" width="120" height="25" rx="4" fill="rgba(255,255,255,0.12)" />
          <text x="488" y="132" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="monospace">$500 / other</text>
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
        How to Claim Dependents on Your Taxes: 2026 Guide
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published October 13, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Claiming a dependent is one of the most valuable things you can do on your tax return. A single qualifying child under age 17 earns you a <strong>$2,000 Child Tax Credit</strong> — and that credit flows directly to your paycheck when you update your W-4. For a family with two qualifying children, the savings reach <strong>$4,000 per year</strong>, or roughly <strong>$154 more in every biweekly paycheck</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But the rules for who actually qualifies as a dependent are stricter than most people expect. The IRS divides dependents into two categories — <strong>qualifying children</strong> and <strong>qualifying relatives</strong> — and each has its own set of tests. This guide walks through both, with worked dollar examples and a step-by-step explanation of how to use your dependents to reduce every paycheck&rsquo;s withholding.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Dependents Matter on Your Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you claim a dependent, you unlock several tax benefits that can significantly reduce what you owe:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Child Tax Credit:</strong> Up to $2,000 per qualifying child under 17 — directly reduces your tax bill dollar for dollar</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Credit for Other Dependents:</strong> $500 per qualifying non-child dependent</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Head of Household filing status:</strong> A higher standard deduction ($22,500 vs. $15,000 for single filers) and lower tax brackets</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Child and Dependent Care Credit:</strong> 20–35% of childcare expenses up to $3,000 for one child or $6,000 for two or more</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Earned Income Tax Credit:</strong> Larger credit amounts for lower-income workers with children</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Education credits:</strong> American Opportunity and Lifetime Learning Credits for qualifying children in college</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The two most impactful benefits for most families are the <strong>Child Tax Credit</strong> (up to $2,000 per child, up to $1,700 refundable) and the ability to file as <strong>Head of Household</strong>.{' '}
        <a href="https://www.irs.gov/taxtopics/tc551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Topic 551: Standard Deduction)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Two Types of Dependents
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS recognizes two distinct types of dependents, and the rules differ significantly between them. You can only claim someone as one type — not both.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}></th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Qualifying Child</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Qualifying Relative</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Who it covers', 'Children, stepchildren, foster children, siblings, and their descendants', 'Parents, grandparents, adult children, siblings, in-laws, and others you support'],
              ['Age limit', 'Under 19; or under 24 and full-time student; or disabled at any age', 'No age limit'],
              ['Income limit', 'None (support test applies)', 'Gross income must be under $5,050'],
              ['Main credit', '$2,000 Child Tax Credit (per child under 17)', '$500 Credit for Other Dependents'],
              ['HOH eligibility', 'Yes, if unmarried', 'Yes, for parents and certain others'],
            ].map(([label, child, relative], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{child}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{relative}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Qualifying Child: The 5 Tests
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To claim someone as a qualifying child, they must pass <strong>all five</strong> of these tests. This is the higher-value category — it unlocks the $2,000 Child Tax Credit and Head of Household status.{' '}
        <a href="https://www.irs.gov/publications/p501" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 501 — Dependents, Standard Deduction, and Filing Information)
        </a>
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 1: Relationship
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The child must be your:
      </p>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>Son, daughter, stepchild, foster child, or legally adopted child</li>
        <li style={{ marginBottom: '0.375rem' }}>Sibling, step-sibling, or half-sibling</li>
        <li style={{ marginBottom: '0.375rem' }}>Descendant of any of the above (grandchild, niece, nephew)</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 2: Age
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The child must be <strong>younger than you</strong> and meet one of these age thresholds at the end of the tax year:
      </p>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}>Under age 19</li>
        <li style={{ marginBottom: '0.375rem' }}>Under age 24 <em>and</em> a full-time student (enrolled for at least 5 months of the year)</li>
        <li style={{ marginBottom: '0.375rem' }}>Permanently and totally disabled — no age limit</li>
      </ul>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note: the $2,000 Child Tax Credit only applies to qualifying children who are under 17 at year-end. A 19-year-old full-time student counts as a qualifying child for filing purposes (Head of Household, dependency exemption), but does not generate the $2,000 Child Tax Credit — they generate the $500 Credit for Other Dependents instead.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 3: Residency
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The child must have <strong>lived with you for more than half the year</strong> — at least 183 days. Temporary absences for school, medical care, vacations, or military service still count as time lived with you.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 4: Support
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The child must <strong>not have provided more than half of their own support</strong> during the year. Support includes food, shelter, clothing, medical care, education, and recreation. This test is rarely failed by young children but can come into play for college students who work part-time.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 5: Joint Return
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The child must <strong>not file a joint return with their spouse</strong> — unless they file only to claim a refund and neither they nor their spouse is required to file a return. This test prevents a married 18-year-old from being claimed as a dependent if they file jointly with their spouse.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Qualifying Relative: The 4 Tests
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Qualifying relatives cover a broader range of people — parents, adult children, non-relative household members, and more. The value is lower (a $500 Credit for Other Dependents), but the rules are more flexible.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 1: Not a Qualifying Child
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The person cannot be your qualifying child — or anyone else&rsquo;s qualifying child for that year. A 22-year-old daughter who is a full-time student still qualifies as <em>your</em> qualifying child (not a qualifying relative), so she falls under the higher-value qualifying child rules.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 2: Member of Household or Relationship
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The person must either:
      </p>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.375rem' }}><strong>Live in your home all year</strong> as a household member (any non-relative who passes this can qualify), OR</li>
        <li style={{ marginBottom: '0.375rem' }}><strong>Be related to you</strong> in one of these ways: parent, grandparent, great-grandparent; sibling (including step and half); in-law (parent, sibling, child); child or grandchild (if they fail the qualifying child tests); aunt, uncle, niece, or nephew</li>
      </ul>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The relationship test is generous: you can claim your elderly parent who lives in their own home, as long as they pass the income and support tests.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 3: Gross Income
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The person&rsquo;s gross income must be <strong>less than $5,050 in 2026</strong>. Gross income includes wages, business income, interest, dividends, and rental income — but not Social Security benefits (in most cases) or tax-exempt income.{' '}
        <a href="https://www.irs.gov/publications/p501" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 501)
        </a>
      </p>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This income limit is why most working adults cannot be claimed as dependents — $5,050 is barely over minimum wage for a part-time worker. But it does allow you to claim a retired parent living on modest Social Security income (as long as their other income is below $5,050).
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Test 4: Support
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike the qualifying child support test, here <strong>you</strong> must have provided more than half of the person&rsquo;s total support for the year. Support includes food, housing, clothing, medical care, education, and recreation expenses. If you pay your parent&rsquo;s rent, utilities, groceries, and medical bills and those exceed half of what they spent on themselves, you likely pass this test.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Tiebreaker Rules: When Two People Could Claim the Same Child
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Only one person can claim a child as a qualifying child in any given year. When two people are eligible — most commonly divorced or separated parents — the IRS applies these tiebreaker rules in order:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>A <strong>parent</strong> wins over a non-parent</li>
        <li style={{ marginBottom: '0.5rem' }}>The parent the child <strong>lived with longer</strong> during the year wins</li>
        <li style={{ marginBottom: '0.5rem' }}>If the child lived with both parents equally, the parent with the <strong>higher adjusted gross income</strong> wins</li>
        <li style={{ marginBottom: '0.5rem' }}>If neither claimant is a parent, the person with the <strong>higher AGI</strong> wins</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Divorced parents can override these rules using <strong>Form 8332</strong>, which lets the custodial parent release the dependency exemption to the non-custodial parent. This is a common arrangement when parents alternate claiming children each year.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8332" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Form 8332)
        </a>
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What You Actually Save: Tax Benefits by Dependent Type
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is a summary of the major tax benefits available based on your dependent type:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Benefit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Child Under 17</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Child 17–23 (student)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Qualifying Relative</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Child Tax Credit', '$2,000', '—', '—'],
              ['Credit for Other Dependents', '—', '$500', '$500'],
              ['Head of Household status', 'Yes (if unmarried)', 'Yes (if unmarried)', 'Yes (parent in own home)'],
              ['Higher standard deduction', '$22,500 (HOH)', '$22,500 (HOH)', '$22,500 (HOH, parent)'],
              ['Child & Dependent Care Credit', 'Yes (care costs)', 'No', 'Yes (if disabled)'],
              ['Additional Child Tax Credit', 'Up to $1,700 refundable', '—', '—'],
              ['EITC boost', 'Yes', 'No (age 19+)', 'No'],
            ].map(([benefit, child17, student, relative], i) => (
              <tr key={benefit} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500, color: '#1e293b' }}>{benefit}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: child17 === '—' ? '#94a3b8' : '#059669', fontWeight: child17 !== '—' ? 600 : 400 }}>{child17}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: student === '—' ? '#94a3b8' : '#059669', fontWeight: student !== '—' ? 600 : 400 }}>{student}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: relative === '—' ? '#94a3b8' : '#059669', fontWeight: relative !== '—' ? 600 : 400 }}>{relative}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 7 — Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $60,000 Single Parent with One Child Under 17
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s walk through exactly what claiming a qualifying child is worth in 2026 — both at filing time and on every paycheck.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Setup:</strong> Single parent, $60,000 salary, one qualifying child (age 8). The parent files as Head of Household.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Line Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>No Dependent</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>With One Child</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross income', '$60,000', '$60,000'],
              ['Filing status', 'Single', 'Head of Household'],
              ['Standard deduction', '−$15,000', '−$22,500'],
              ['Taxable income', '$45,000', '$37,500'],
              ['Federal tax (before credits)', '$5,161', '$4,289'],
              ['Child Tax Credit', '—', '−$2,000'],
              ['Federal tax (after credits)', '$5,161', '$2,289'],
              ['Effective federal rate', '8.6%', '3.8%'],
            ].map(([label, noDependent, withChild], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{noDependent}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{withChild}</td>
              </tr>
            ))}
            <tr style={{ background: '#f0fdf4' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Annual tax savings</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#94a3b8' }}>—</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$2,872</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        The $2,872 total savings comes from two sources: $2,000 from the Child Tax Credit plus $872 from the larger standard deduction as Head of Household (the extra $7,500 deduction saves $872 at the 12% marginal rate: $7,500 × 12% = $900, and the bracketing effect brings it to approximately $872).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        With <strong>two qualifying children under 17</strong>, the Child Tax Credit doubles to $4,000, and the total savings increases to approximately <strong>$4,872 per year</strong>.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Claim Dependents on Your W-4 (Paycheck Impact)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You don&rsquo;t have to wait until tax filing to benefit from your dependents. By updating your W-4 at work, you can reduce your withholding and get the savings spread across every paycheck throughout the year.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Form W-4)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        On the 2026 W-4, go to <strong>Step 3: Claim Dependents</strong>. If your income is $200,000 or less (single) or $400,000 or less (married filing jointly):
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>For each qualifying child under age 17: multiply by <strong>$2,000</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>For each other qualifying dependent: multiply by <strong>$500</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Add these together and enter the total on line 3</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Your employer will reduce your annual withholding by the amount you entered — spread equally across all remaining pay periods. Here is the per-paycheck boost for one qualifying child ($2,000 entered on Step 3):
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Pay Frequency</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Pay Periods/Year</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Extra Per Paycheck (1 child)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Extra Per Paycheck (2 children)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Weekly', '52', '$38.46', '$76.92'],
              ['Biweekly', '26', '$76.92', '$153.85'],
              ['Semi-monthly', '24', '$83.33', '$166.67'],
              ['Monthly', '12', '$166.67', '$333.33'],
            ].map(([freq, periods, one, two], i) => (
              <tr key={freq} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{freq}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{periods}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{one}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{two}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important: this is a <strong>reduction in withholding</strong>, not extra pay. If your actual tax liability at year-end is higher than estimated (because of other income, or because you forgot to account for filing status), you could end up owing at tax time. Use the{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Withholding Estimator
        </a>{' '}
        to make sure your W-4 is set correctly.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Special Rules for Divorced or Separated Parents
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Divorce introduces some of the most common dependent-claiming mistakes. Here are the key rules:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.625rem' }}><strong>Custodial parent wins by default.</strong> The parent the child lived with more than half the year is automatically entitled to claim them — unless they sign Form 8332 to release the claim to the non-custodial parent.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Head of Household stays with the custodial parent.</strong> Even if a custodial parent releases the Child Tax Credit to the non-custodial parent via Form 8332, the custodial parent can still file as Head of Household.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Some credits cannot be transferred.</strong> The Child and Dependent Care Credit and the EITC always go to the custodial parent — they cannot be transferred via Form 8332.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Never claim the same child twice.</strong> If both parents claim the same child, both returns will be flagged. The IRS will apply the tiebreaker rules, and the parent who loses will owe back taxes plus penalties.</li>
      </ul>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Claiming an Elderly Parent as a Dependent
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One frequently overlooked situation is claiming an elderly parent as a qualifying relative. If you are paying your parent&rsquo;s living expenses — their rent or mortgage, groceries, medical bills, and utilities — you may qualify.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The parent does <strong>not</strong> have to live with you. They can live in their own home or a care facility. What matters is:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Their gross income is under $5,050 in 2026</li>
        <li style={{ marginBottom: '0.5rem' }}>You provided more than half of their total support for the year</li>
        <li style={{ marginBottom: '0.5rem' }}>They are not someone else&rsquo;s qualifying child</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you qualify, you can claim the <strong>$500 Credit for Other Dependents</strong>, potentially file as Head of Household (if your parent lives in your home), and deduct the parent&rsquo;s medical expenses as part of your own itemized deductions if you choose to itemize. Medical expenses above 7.5% of AGI are deductible, and paying a parent&rsquo;s medical bills as part of their support can push you over that threshold.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If multiple siblings together provide more than half of a parent&rsquo;s support but none provides more than half individually, you can use a <strong>Multiple Support Agreement (Form 2120)</strong> to rotate who claims the parent each year.{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-2120" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS — Form 2120)
        </a>
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common Mistakes to Avoid
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.625rem' }}><strong>Forgetting to update your W-4.</strong> The Child Tax Credit does not automatically flow into your paycheck — you must complete Step 3 on your W-4. Many parents leave money in every paycheck all year unnecessarily.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Claiming a child who lived elsewhere most of the year.</strong> A child must live with you for more than 183 days. If they lived primarily with your ex-spouse, you need Form 8332 to claim them.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Assuming a full-time college student generates the $2,000 Child Tax Credit.</strong> A 19-year-old college student is still your qualifying child — but only generates the $500 Credit for Other Dependents, not $2,000. The $2,000 credit requires the child to be under 17 at year-end.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Counting the noncustodial parent&rsquo;s claim as automatic.</strong> If you and your ex share children 50/50, the IRS tiebreaker gives the claim to the parent with the higher AGI — not whoever claimed them last year. Use Form 8332 to make arrangements explicit.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Overlooking elderly parents.</strong> Millions of Americans pay the bulk of a parent&rsquo;s living expenses without realizing they can claim a $500 credit and potentially file as Head of Household.</li>
        <li style={{ marginBottom: '0.625rem' }}><strong>Claiming a dependent with too much income.</strong> The $5,050 gross income limit for qualifying relatives catches many people off guard, especially with adult children or parents who work part-time.</li>
      </ul>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Claiming dependents correctly is one of the most impactful tax moves a working American can make. A single qualifying child under 17 is worth up to <strong>$2,000 in tax credits</strong> plus a larger standard deduction if you qualify for Head of Household. Two children double the credits to $4,000. And none of that has to wait until April — update your W-4 Step 3 and the savings flow into every paycheck.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The rules exist to prevent fraud, but they are straightforward once you understand the two categories. If a child lives with you most of the year and is under 19 (or under 24 and in school), they almost certainly qualify. If you are supporting a parent financially, check the income and support tests — the $500 credit and potential Head of Household status may be available to you.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For your official tax return, the full rules for dependents are in{' '}
        <a href="https://www.irs.gov/publications/p501" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Publication 501
        </a>
        . For your W-4 and withholding, the{' '}
        <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Withholding Estimator
        </a>{' '}
        will tell you exactly what to enter on each line.
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
          See Your Take-Home Pay With Dependents
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see exactly how much you take home — including the impact of federal tax, FICA, and state taxes. Takes 30 seconds.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#7c3aed',
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
          <a href="https://www.irs.gov/publications/p501" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 501 &mdash; Dependents, Standard Deduction, and Filing Information</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 551: Standard Deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/child-tax-credit" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Child Tax Credit</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/credit-for-other-dependents" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Credit for Other Dependents</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-w-4" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form W-4, Employee&rsquo;s Withholding Certificate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/tax-withholding-estimator" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tax Withholding Estimator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8332" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 8332: Release/Revocation of Claim to Exemption for Child by Custodial Parent</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-2120" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Form 2120: Multiple Support Declaration</a>
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
