import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Office Deduction 2026: Who Can Claim It (and Who Cannot)',
  description:
    'The home office deduction saves self-employed workers up to $1,500 per year — but employees cannot claim it since 2018. Here\'s who qualifies, the two calculation methods, and a full worked example.',
  alternates: { canonical: '/blog/home-office-deduction-2026' },
  keywords:
    'home office deduction 2026, can I deduct home office, home office tax deduction, self-employed home office, Form 8829, simplified home office method, remote work tax deduction 2026',
  openGraph: {
    title: 'Home Office Deduction 2026: Who Can Claim It (and Who Cannot)',
    description:
      'Self-employed workers can deduct their home office. Employees cannot — a rule that caught millions of remote workers off guard after 2018. Here\'s the full breakdown.',
  },
}

export default function HomeOfficeDeduction2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Home office deduction illustration showing a house with a desk inside"
        >
          <rect width="600" height="200" rx="12" fill="#0f766e" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* House outline */}
          <polygon points="80,155 80,95 110,70 140,95 140,155" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          {/* Roof peak */}
          <polygon points="72,97 110,62 148,97" fill="rgba(255,255,255,0.25)" />
          {/* Door */}
          <rect x="100" y="130" width="20" height="25" rx="2" fill="rgba(255,255,255,0.3)" />
          {/* Window */}
          <rect x="84" y="108" width="16" height="14" rx="2" fill="rgba(255,255,255,0.3)" />
          <line x1="92" y1="108" x2="92" y2="122" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <line x1="84" y1="115" x2="100" y2="115" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

          {/* Dollar deduction symbol */}
          <circle cx="200" cy="100" r="32" fill="rgba(255,255,255,0.15)" />
          <text x="200" y="108" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff" fontFamily="monospace">−$</text>

          {/* Arrow right */}
          <line x1="248" y1="100" x2="295" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeDasharray="6,4" />
          <polygon points="295,93 310,100 295,107" fill="rgba(255,255,255,0.5)" />

          {/* Info blocks */}
          <rect x="320" y="50" width="240" height="100" rx="8" fill="rgba(255,255,255,0.12)" />
          <text x="440" y="78" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Simplified Method</text>
          <text x="440" y="97" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.85)" fontFamily="monospace">$5 × sq ft (max 300)</text>
          <line x1="340" y1="108" x2="540" y2="108" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="440" y="125" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Regular Method</text>
          <text x="440" y="142" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.85)" fontFamily="monospace">Actual home expenses</text>
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
        Home Office Deduction 2026: Who Can Claim It (and Who Cannot)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published August 27, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When millions of office workers were sent home in 2020, a lot of them assumed they could finally deduct their home office on their taxes. Many were wrong. The home office deduction is one of the most misunderstood tax breaks in the U.S. tax code — because a major rule change in 2018 eliminated it for <strong>most employees</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is the quick answer: if you are a <strong>W-2 employee</strong>, you cannot claim the home office deduction in 2026 — no matter how much you work from home. If you are <strong>self-employed</strong> or a <strong>freelancer</strong> (filing a Schedule C), you can — and it can save you hundreds or thousands of dollars a year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains the rules, both calculation methods, and walks through a real dollar example so you know exactly what you can save.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Rule That Changed Everything: 2018 Tax Reform
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Before 2018, W-2 employees could deduct unreimbursed work expenses — including a home office — as a <strong>miscellaneous itemized deduction</strong>. That deduction was eliminated by the Tax Cuts and Jobs Act of 2017 (TCJA), which took effect for the 2018 tax year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The TCJA suspended all employee business expense deductions through 2025. The current tax rules extend this suspension, so employees still cannot deduct home office costs in 2026.{' '}
        <a href="https://www.irs.gov/taxtopics/tc509" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 509 — Business Use of Home)
        </a>
      </p>

      <div
        style={{
          padding: '1.25rem 1.5rem',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '1rem', color: '#dc2626', fontWeight: 600, marginBottom: '0.25rem' }}>
          W-2 Employees Cannot Claim This Deduction
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
          If your employer issues you a W-2, you cannot deduct your home office in 2026 — even if you work from home full-time, even if your employer requires it, and even if you pay for your own internet and desk chair. The deduction is only available to self-employed individuals.
        </p>
      </div>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Who Can Claim the Home Office Deduction in 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can claim the home office deduction if you are self-employed and file a <strong>Schedule C</strong> with your federal tax return. This includes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Freelancers and independent contractors</strong> — graphic designers, writers, consultants, developers, and others who receive{' '}
          <a href="/blog/w2-vs-1099-taxes" style={{ color: '#2563eb', textDecoration: 'underline' }}>1099 income</a>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Gig workers</strong> — Uber drivers, DoorDash couriers, Etsy sellers, and other platform workers who report self-employment income
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Sole proprietors</strong> — anyone who owns and operates their own unincorporated business
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Self-employed partners</strong> in a partnership who use part of their home for business
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>S-corporation shareholders</strong> who are also employees of their own S-corp (with an accountable plan — this gets complicated, and a tax professional is recommended)
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you have both a W-2 job and a self-employed side business, you can still claim the home office deduction — but only for the portion of your home used for the <em>self-employed</em> work, not the W-2 job.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Two Requirements: Exclusive and Regular Use
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To qualify, your home office must meet two tests set by the IRS:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Exclusive use:</strong> The space must be used <em>only</em> for business. A dedicated room you use solely as your office qualifies. A kitchen table where you also eat meals does not — even if you work there every day.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Regular use:</strong> You must use the space consistently for business, not just occasionally. There is no specific hour minimum, but the IRS looks for a pattern of regular business activity.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Additionally, for most self-employed workers, the home office must be your <strong>principal place of business</strong> — meaning it is where you conduct the majority of your business activities, or where you regularly meet with clients or customers.{' '}
        <a href="https://www.irs.gov/publications/p587" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 587 — Business Use of Your Home)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Method 1: The Simplified Method
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Simplified Method</strong> was introduced in 2013 to make the calculation easier. The math is straightforward:
      </p>

      <div
        style={{
          padding: '1.25rem 1.5rem',
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#059669', margin: '0 0 0.25rem 0', fontFamily: "'JetBrains Mono', monospace" }}>
          $5 × square footage of home office
        </p>
        <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0 }}>Maximum deduction: $1,500 (capped at 300 square feet)</p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, if your dedicated home office is 200 square feet, your deduction is:
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem', borderLeft: '3px solid #0f766e' }}>
        200 sq ft × $5 = <strong>$1,000 deduction</strong>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Pros of the Simplified Method:</strong>
      </p>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>No need to track actual home expenses</li>
        <li style={{ marginBottom: '0.5rem' }}>No depreciation to calculate or recapture when you sell your home</li>
        <li style={{ marginBottom: '0.5rem' }}>Fast and easy to calculate</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Cons of the Simplified Method:</strong>
      </p>
      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Capped at $1,500 — homeowners with large offices or high housing costs often do better with the Regular Method</li>
        <li style={{ marginBottom: '0.5rem' }}>You cannot carry over unused deductions to future years</li>
      </ul>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Method 2: The Regular (Actual Expense) Method
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Regular Method</strong> — also called the Actual Expense Method — lets you deduct a percentage of your actual home costs based on how much of your home is used for business. This is done using{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-8829" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          IRS Form 8829
        </a>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Step 1 — Calculate your business-use percentage:</strong>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem', borderLeft: '3px solid #0f766e' }}>
        Business-use % = Home office square footage ÷ Total home square footage
        <br />
        Example: 200 sq ft office ÷ 1,500 sq ft total home = <strong>13.3%</strong>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Step 2 — Apply that percentage to your eligible home expenses:</strong>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Cost</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>@ 13.3% Business</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Rent', '$18,000', '$2,394'],
              ['Electricity & gas', '$2,400', '$319'],
              ['Internet (direct — 100%)', '$1,200', '$1,200'],
              ['Renter\'s insurance', '$240', '$32'],
            ].map(([label, cost, deduction], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{cost}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{deduction}</td>
              </tr>
            ))}
            <tr style={{ background: '#f0fdf4' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total Home Office Deduction</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', color: '#475569' }}></td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$3,945</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note: Internet used exclusively for business can be deducted at 100%, not just the business-use percentage. If you use the internet for both personal and business purposes, you can only deduct the business portion.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Homeowners can also deduct a portion of <strong>mortgage interest</strong>, <strong>property taxes</strong>, and <strong>home depreciation</strong>. Depreciation is powerful but requires recapture when you sell the home, so tracking it carefully (or hiring a tax professional) is important.
      </p>

      {/* Section 6: Comparison */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Simplified vs. Regular Method: Which Is Better?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        It depends on your housing costs and office size. In the example above, the Regular Method yielded <strong>$3,945 vs. $1,000</strong> with the Simplified Method — nearly four times more. But the Regular Method requires more record-keeping.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Simplified</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Regular</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Max deduction', '$1,500', 'Unlimited (based on actual costs)'],
              ['Record-keeping required', 'Office sq ft only', 'All home expense receipts'],
              ['Depreciation', 'None', 'Yes (recaptured at sale)'],
              ['Carryover if income is zero', 'No', 'Yes'],
              ['Good for renters in high-cost areas', 'Rarely', 'Yes — much larger deduction'],
              ['Good for small offices', 'Often', 'Depends on housing costs'],
            ].map(([label, simplified, regular], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#475569' }}>{simplified}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'center', color: '#475569' }}>{regular}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS lets you switch between methods from year to year — you are not locked in. Most tax software will calculate both and suggest the higher one.
      </p>

      {/* Section 7: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Freelance Designer in Austin, Texas
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s put this all together with a real scenario. Maya is a{' '}
        <a href="/blog/self-employment-tax-freelancers" style={{ color: '#2563eb', textDecoration: 'underline' }}>freelance graphic designer</a>{' '}
        living in{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Austin, Texas</a>. She earns $75,000 in freelance income and rents a 1,200 sq ft apartment for $2,000/month. She uses a 150 sq ft spare bedroom exclusively as her office.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Item</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Simplified</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Regular</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross self-employment income', '$75,000', '$75,000'],
              ['Home office sq ft', '150 sq ft', '150 sq ft'],
              ['Business-use %', '—', '12.5% (150÷1,200)'],
              ['Annual rent deduction', '—', '$3,000 (12.5% × $24,000)'],
              ['Utilities deduction', '—', '$240 (12.5% × $1,920)'],
              ['Internet deduction', '—', '$720 (60% business use)'],
              ['Home office deduction total', '$750', '$3,960'],
            ].map(([label, simp, reg], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{simp}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{reg}</td>
              </tr>
            ))}
            <tr style={{ background: '#f0fdf4' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Federal tax savings (22% bracket)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>~$165</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>~$871</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Maya saves roughly <strong>$871 in federal income tax</strong> using the Regular Method — plus she also reduces her <strong>self-employment tax</strong> (15.3%) because the deduction lowers her net self-employment income. The total tax savings could approach <strong>$1,400+</strong> when SE tax is included.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Simplified Method produces only $750 in deductions — less than one-fifth of the Regular Method in this case.
      </p>

      {/* Section 8: Direct expenses */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Direct vs. Indirect Expenses: What Is the Difference?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under the Regular Method, expenses fall into two categories:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Direct expenses</strong> — costs that benefit <em>only</em> the home office. If you paint only your office room, or install a special light fixture just for your workspace, those costs are 100% deductible. No business-use percentage required.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Indirect expenses</strong> — costs for the whole home that also benefit the office. Rent, utilities, homeowner&rsquo;s or renter&rsquo;s insurance, and general repairs fall here. You deduct only the business-use percentage of these.
        </li>
      </ul>

      {/* Section 9: Homeowners */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Special Rules for Homeowners
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you own your home, the Regular Method allows you to deduct a portion of:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Mortgage interest (the portion already deductible on Schedule A is split — you deduct the business share on Schedule C instead)</li>
        <li style={{ marginBottom: '0.5rem' }}>Property taxes</li>
        <li style={{ marginBottom: '0.5rem' }}>Home depreciation — based on the value of the home (not land) at the time you started using it for business</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The depreciation deduction is real money saved now, but there is a catch: when you sell your home, the IRS <strong>recaptures</strong> the depreciation you deducted. This means that portion of the gain from the sale is taxed as ordinary income, not the preferential capital gains rate. It is worth the complexity for many people — but worth knowing about upfront.
      </p>

      {/* Section 10: How to claim */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Claim the Home Office Deduction
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed filers claim the home office deduction on their federal tax return. Here is how:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Simplified Method:</strong> Enter your home office square footage on <strong>Schedule C, Line 30</strong>. No additional form needed.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Regular Method:</strong> Complete <strong>Form 8829 (Expenses for Business Use of Your Home)</strong> and carry the result to Schedule C, Line 30.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most tax software — TurboTax, TaxAct, FreeTaxUSA — will walk you through this process step by step and calculate both methods automatically.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Keep records to support your deduction. The IRS may ask for:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>A floor plan or sketch of your home showing the office area and total square footage</li>
        <li style={{ marginBottom: '0.5rem' }}>Rent or mortgage statements</li>
        <li style={{ marginBottom: '0.5rem' }}>Utility bills</li>
        <li style={{ marginBottom: '0.5rem' }}>Photos of the office space (showing it is dedicated solely to work)</li>
      </ul>

      {/* Section 11: State taxes */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does the Home Office Deduction Work for State Taxes Too?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states that have income taxes follow federal rules for self-employed home office deductions. So if you claim it federally, you generally get the same deduction at the state level — which adds to your total savings.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, a freelancer in{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>{' '}
        with a $3,960 home office deduction would save an additional <strong>~$254</strong> in New York state income tax (at New York&rsquo;s ~6.41% rate for that income level) on top of federal savings. In{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>,{' '}
        the savings would be even greater given its higher tax rates.
      </p>

      {/* Key Takeaways */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key Takeaways
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>W-2 employees cannot claim the home office deduction</strong> in 2026, even if they work from home full-time. This rule has been in effect since 2018.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Self-employed workers and freelancers can</strong> — as long as the space is used exclusively and regularly for business.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          The <strong>Simplified Method</strong> ($5/sq ft, max $1,500) is easy but often leaves money on the table.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          The <strong>Regular Method</strong> tracks actual home costs and is usually worth it for anyone in a high-rent area or with a larger office space.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          The deduction reduces both income tax and self-employment tax — which makes it worth more than it first appears.
        </li>
      </ul>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Take-Home Pay as a Freelancer
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use our free calculator to see your estimated take-home pay after federal and state taxes, including self-employment tax.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#0f766e',
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
          <a href="https://www.irs.gov/publications/p587" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 587 — Business Use of Your Home</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-8829" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS — About Form 8829 (Expenses for Business Use of Your Home)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc509" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 509 — Business Use of Home</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/taxedu/tax-basics/home-office-deduction/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation — Home Office Deduction Explainer</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/home-office-deduction" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS — Home Office Deduction (Small Business / Self-Employed)</a>
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
