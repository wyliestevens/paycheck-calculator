import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education Tax Credits 2026: American Opportunity vs Lifetime Learning',
  description:
    'The American Opportunity Credit saves up to $2,500 per student. The Lifetime Learning Credit saves up to $2,000. Here\'s exactly who qualifies and how to claim both in 2026.',
  alternates: { canonical: '/blog/education-tax-credits-2026' },
  keywords:
    'education tax credits 2026, American Opportunity Credit, Lifetime Learning Credit, college tax credit 2026, tuition tax credit, Form 8863, education tax deduction',
  openGraph: {
    title: 'Education Tax Credits 2026: American Opportunity vs Lifetime Learning',
    description:
      'Save up to $2,500 per year with the American Opportunity Credit or $2,000 with the Lifetime Learning Credit. Here\'s who qualifies and how to claim.',
  },
}

export default function EducationTaxCredits2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Education tax credits illustration showing a diploma and dollar savings"
        >
          <rect width="600" height="200" rx="12" fill="#0369a1" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Book icon left */}
          <rect x="35" y="55" width="56" height="70" rx="4" fill="rgba(255,255,255,0.25)" />
          <rect x="41" y="61" width="44" height="58" rx="2" fill="rgba(255,255,255,0.15)" />
          <line x1="63" y1="61" x2="63" y2="119" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <rect x="44" y="70" width="16" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
          <rect x="44" y="78" width="16" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
          <rect x="44" y="86" width="16" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
          {/* Graduation cap center-left */}
          <polygon points="170,72 220,88 170,104 120,88" fill="rgba(255,255,255,0.3)" />
          <rect x="213" y="88" width="6" height="28" rx="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="219" cy="116" r="5" fill="rgba(255,255,255,0.4)" />
          <rect x="155" y="97" width="30" height="22" rx="2" fill="rgba(255,255,255,0.2)" />
          {/* Arrow */}
          <line x1="260" y1="100" x2="310" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
          <polygon points="310,92 326,100 310,108" fill="rgba(255,255,255,0.5)" />
          {/* Savings box */}
          <rect x="336" y="55" width="220" height="90" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="446" y="84" textAnchor="middle" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">American Opportunity</text>
          <text x="446" y="102" textAnchor="middle" fontSize="22" fontWeight="700" fill="#ffffff" fontFamily="monospace">$2,500</text>
          <text x="446" y="122" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">credit per student/year</text>
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
        Education Tax Credits 2026: American Opportunity vs. Lifetime Learning
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 24, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        College is expensive. The average student pays over $28,000 per year in tuition, fees, and room and board at a four-year public university.{' '}
        <a href="https://nces.ed.gov/fastfacts/display.asp?id=76" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (National Center for Education Statistics)
        </a>{' '}
        The good news: the federal government offers two valuable tax credits &mdash; the <strong>American Opportunity Credit (AOC)</strong> and the <strong>Lifetime Learning Credit (LLC)</strong> &mdash; that can put thousands of dollars back in your pocket every year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike deductions, which reduce the income that gets taxed, <strong>tax credits reduce your tax bill dollar for dollar</strong>. A $2,500 credit saves you exactly $2,500. Here is a complete guide to both credits for 2026, including who qualifies, how much you can save, and how to claim them.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Qualified Education Expenses?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Both credits only cover <strong>qualified education expenses</strong>. Not every college cost qualifies. Here is what counts and what does not:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Expense</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Qualifies?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Tuition', '✓ Yes'],
              ['Required enrollment fees', '✓ Yes'],
              ['Required course books and supplies (AOC only)', '✓ Yes (AOC) / No (LLC)'],
              ['Room and board', '✗ No'],
              ['Transportation to campus', '✗ No'],
              ['Health insurance fees', '✗ No'],
              ['Optional sports or activity fees', '✗ No'],
              ['Personal expenses', '✗ No'],
            ].map(([expense, qualifies], i) => (
              <tr key={expense} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{expense}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: qualifies.startsWith('✓') ? '#059669' : '#dc2626', fontWeight: 600 }}>{qualifies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Important: you can only claim expenses that were <strong>paid out of pocket</strong> or with student loans. You cannot claim expenses paid with tax-free scholarships, Pell Grants, or 529 plan distributions.{' '}
        <a href="https://www.irs.gov/publications/p970" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 970 &mdash; Tax Benefits for Education)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The American Opportunity Credit (AOC)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>American Opportunity Credit</strong> is the bigger of the two credits &mdash; and the better deal for most college students. It gives you up to <strong>$2,500 per eligible student, per year</strong>, for the first four years of college.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        How the AOC Is Calculated
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The credit equals:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>100% of the first $2,000 in qualified expenses</li>
        <li style={{ marginBottom: '0.5rem' }}>25% of the next $2,000 in qualified expenses</li>
        <li style={{ marginBottom: '0.5rem' }}>Maximum credit: <strong>$2,500 per student per year</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        So to get the full $2,500, a student needs at least $4,000 in qualified out-of-pocket expenses. That threshold is easy to hit at most colleges &mdash; many students pay far more than $4,000 in tuition alone.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is something especially helpful about the AOC: <strong>40% of the credit is refundable</strong>. That means even if you owe zero federal income tax, you can still get up to <strong>$1,000 back as a refund</strong>. This makes the AOC one of the best credits available to lower-income students.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        Who Qualifies for the AOC
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        To claim the American Opportunity Credit, all of these must be true:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>The student is working toward a <strong>degree or recognized credential</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>The student is <strong>enrolled at least half-time</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>The student has <strong>not yet completed four years of higher education</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>The student has <strong>no felony drug conviction</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>The student has not claimed the AOC for four prior years</li>
      </ul>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        AOC Income Limits
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The AOC phases out based on your <strong>Modified Adjusted Gross Income (MAGI)</strong>:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Filing Status</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Full Credit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Partial Credit</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>No Credit</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Single / Head of Household', 'Under $80,000', '$80,000 – $90,000', 'Over $90,000'],
              ['Married Filing Jointly', 'Under $160,000', '$160,000 – $180,000', 'Over $180,000'],
            ].map(([status, full, partial, none], i) => (
              <tr key={status} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{status}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#059669', fontFamily: "'JetBrains Mono', monospace" }}>{full}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#d97706', fontFamily: "'JetBrains Mono', monospace" }}>{partial}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#dc2626', fontFamily: "'JetBrains Mono', monospace" }}>{none}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note: Married Filing Separately taxpayers <strong>cannot</strong> claim the AOC.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Lifetime Learning Credit (LLC)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Lifetime Learning Credit</strong> is more flexible than the AOC but worth less money. It is worth up to <strong>$2,000 per tax return per year</strong> &mdash; regardless of how many students are in your household.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        How the LLC Is Calculated
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Lifetime Learning Credit equals <strong>20% of the first $10,000</strong> in qualified tuition and fees &mdash; for a maximum credit of $2,000. Unlike the AOC, it does not cover books and supplies unless they are required to enroll (not just required for a course).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The LLC is also <strong>non-refundable</strong>. That means it can reduce your tax bill to zero, but you will not receive any of it as a refund if it exceeds your tax liability. If you owe $1,500 in federal taxes and your LLC credit is $2,000, your bill goes to zero &mdash; but you do not get a check for the extra $500.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
        Who Qualifies for the LLC
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The Lifetime Learning Credit has much looser rules than the AOC:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Available for <strong>any year of post-secondary education</strong> &mdash; not just the first four</li>
        <li style={{ marginBottom: '0.5rem' }}>Covers <strong>graduate school</strong> and professional degree programs</li>
        <li style={{ marginBottom: '0.5rem' }}>Available for <strong>part-time students</strong> (even one course counts)</li>
        <li style={{ marginBottom: '0.5rem' }}>Available for <strong>job-related courses</strong> &mdash; you do not need to be working toward a degree</li>
        <li style={{ marginBottom: '0.5rem' }}>No limit on how many years you can claim it</li>
        <li style={{ marginBottom: '0.5rem' }}>No felony drug conviction restriction</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The LLC income phase-out is the same as the AOC: starts at $80,000 for single filers ($160,000 for married filing jointly) and phases out completely at $90,000 ($180,000 MFJ). Married filing separately taxpayers also cannot claim the LLC.
      </p>

      {/* Section 4 - Comparison */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        AOC vs. LLC: Side-by-Side Comparison
      </h2>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Feature</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#0369a1' }}>American Opportunity</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#059669' }}>Lifetime Learning</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Maximum credit', '$2,500 per student', '$2,000 per return'],
              ['Refundable?', '40% (up to $1,000)', 'No'],
              ['Years available', 'First 4 years only', 'Unlimited'],
              ['Enrollment requirement', 'At least half-time', 'Any enrollment'],
              ['Covers books?', 'Yes (if required)', 'No (generally)'],
              ['Graduate school?', 'No', 'Yes'],
              ['Job-skill courses?', 'No (need a credential)', 'Yes'],
              ['Drug conviction?', 'Disqualified', 'No restriction'],
              ['Income limit (single)', '$80,000 – $90,000', '$80,000 – $90,000'],
              ['Income limit (MFJ)', '$160,000 – $180,000', '$160,000 – $180,000'],
            ].map(([feature, aoc, llc], i) => (
              <tr key={feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{feature}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{aoc}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{llc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Rule of thumb:</strong> If you are in your first four years of college working toward a degree, the AOC is almost always better. If you are in graduate school, taking job-skill courses, or a part-time student, use the Lifetime Learning Credit. You cannot claim <em>both</em> credits for the same student in the same year.
      </p>

      {/* Section 5 - Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Junior Year at a State University
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Meet Jasmine. She is a 20-year-old junior at a state university. Her parents pay her tuition because she is claimed as a dependent on their return. Here is her situation:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Annual tuition and required fees: <strong>$12,000</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Pell Grant received: <strong>$3,000</strong> (tax-free, reduces qualified expenses)</li>
        <li style={{ marginBottom: '0.5rem' }}>Required textbooks: <strong>$600</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Parents' MAGI: <strong>$74,000</strong> (below the phase-out)</li>
      </ul>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontWeight: 600, color: '#0369a1', marginBottom: '0.75rem', fontSize: '1rem' }}>AOC Calculation:</p>
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>Tuition + fees:          $12,000</p>
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>Minus Pell Grant:       -$3,000</p>
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>Plus required books:    +$600</p>
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.75rem', fontFamily: "'JetBrains Mono', monospace", borderTop: '1px solid #bae6fd', paddingTop: '0.5rem' }}>Qualified expenses:      $9,600</p>
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>100% of first $2,000:   $2,000</p>
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>25% of next $2,000:     $500</p>
        <p style={{ fontSize: '1rem', color: '#0369a1', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>Total AOC Credit:        $2,500</p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Jasmine&rsquo;s parents can claim the full $2,500 AOC credit because the expenses clearly exceed $4,000 after subtracting the Pell Grant, and their income is well under the phase-out threshold. This $2,500 comes directly off their federal tax bill.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If their tax bill were only $1,800, the non-refundable portion ($1,500) would be used first, reducing their bill to zero. Then up to <strong>$1,000 of the refundable portion</strong> would come back as a refund &mdash; so they would receive $1,000 even with zero tax owed.
      </p>

      {/* Section 6 - Who Claims */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Gets to Claim the Credit: Parent or Student?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is one of the most common sources of confusion with education credits. The rule is straightforward:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>If the student is claimed as a dependent on their parents&rsquo; return:</strong> The parents claim the credit. This is true even if the student paid tuition with their own money or a student loan.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>If the student is NOT claimed as a dependent:</strong> The student claims the credit on their own return.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Parents cannot claim the credit at all</strong> if their income exceeds the phase-out range ($90,000 single / $180,000 MFJ). In this case, the student should consider filing independently to claim the credit themselves &mdash; if their income qualifies.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some families with high incomes intentionally choose <em>not</em> to claim the student as a dependent specifically so the student can claim the credit independently. This strategy works best when the student has enough income to owe some federal tax (the AOC is 40% refundable either way, but the LLC requires actual tax liability).
      </p>

      {/* Section 7 - How to Claim */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Claim Education Credits: Form 8863
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To claim either education credit, you file{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8863" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Form 8863 (Education Credits)
        </a>{' '}
        with your tax return. You will also receive a <strong>Form 1098-T</strong> from your college, which shows the tuition amounts billed or paid during the year. This form is key &mdash; the IRS receives a copy too, so the amounts must match.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Steps to claim the credit:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Gather your Form 1098-T from each school attended</li>
        <li style={{ marginBottom: '0.5rem' }}>Collect receipts for books and supplies (for the AOC)</li>
        <li style={{ marginBottom: '0.5rem' }}>Subtract any tax-free grants or scholarships from your eligible expenses</li>
        <li style={{ marginBottom: '0.5rem' }}>Complete Form 8863 and attach it to your Form 1040</li>
        <li style={{ marginBottom: '0.5rem' }}>The credit reduces your tax bill line by line on the 1040</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Tax software like TurboTax, H&amp;R Block, and FreeTaxUSA all walk you through Form 8863 automatically. If you input your 1098-T information, the software will calculate your credit and apply it for you.
      </p>

      {/* Section 8 - Student Loan Interest */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Bonus: The Student Loan Interest Deduction
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even if you don&rsquo;t qualify for an education credit &mdash; or if you&rsquo;re past the first four years &mdash; you may be able to deduct up to <strong>$2,500 in student loan interest</strong> each year. This is an <em>above-the-line deduction</em>, meaning you can take it whether you itemize or take the standard deduction.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Phase-out for the student loan interest deduction (2026):
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Single filers: full deduction under $85,000, phases out between $85,000&ndash;$100,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Married filing jointly: full deduction under $170,000, phases out between $170,000&ndash;$200,000</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your loan servicer will send you a{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-1098-e" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 1098-E
        </a>{' '}
        reporting how much interest you paid. At 22% federal income tax, a full $2,500 deduction saves you <strong>$550 in taxes</strong>.
      </p>

      {/* Section 9 - State credits */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State-Level Education Tax Breaks
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Federal credits are only part of the picture. Many states offer their own education deductions or credits on top of federal benefits:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>529 Plan Deductions:</strong> Most states that have income taxes allow you to deduct contributions to a 529 college savings plan. For example,{' '}
          <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>{' '}
          lets you deduct up to $5,000 ($10,000 married) per year from state income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Indiana:</strong> Offers a 20% state tax credit on the first $5,000 contributed to a 529 plan ($1,000 maximum credit).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Illinois, Michigan, Wisconsin:</strong> Offer state deductions for college tuition in addition to federal credits.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No state income tax states:</strong> Residents of{' '}
          <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,
          and other no-income-tax states still get the full federal credits &mdash; they just have no state return to file.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Check your state&rsquo;s department of revenue website to see what education benefits are available where you live.
      </p>

      {/* Section 10 - Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Education tax credits are some of the most valuable credits the IRS offers &mdash; and millions of eligible families leave them unclaimed every year. If you or your child is in college, start with the American Opportunity Credit. It offers the highest value ($2,500) and a partial refund even if you owe no taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are in graduate school, taking professional development courses, or attending part-time, the Lifetime Learning Credit is your path to up to $2,000 off your tax bill with no expiration date.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Either way, keep your Form 1098-T and all tuition receipts, subtract your tax-free grants and scholarships from your qualified expenses, and claim your credit on Form 8863 when you file.
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
          See Your Full After-Tax Paycheck
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Whether you are a student or a working professional, our free paycheck calculator shows exactly what you take home in every state.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
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
          <a href="https://www.irs.gov/publications/p970" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 970 &mdash; Tax Benefits for Education</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/credits-deductions/individuals/education-credits-aoc-llc" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Education Credits: American Opportunity and Lifetime Learning Credits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8863" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Form 8863 &mdash; Education Credits</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-1098-e" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Form 1098-E &mdash; Student Loan Interest Statement</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://nces.ed.gov/fastfacts/display.asp?id=76" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>National Center for Education Statistics &mdash; Tuition Costs of Colleges and Universities</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/federal/education-tax-breaks/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; Education Tax Breaks</a>
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
