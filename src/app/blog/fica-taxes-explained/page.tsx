import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FICA Taxes Explained: Social Security and Medicare in 2026',
  description:
    'FICA takes 7.65% of every paycheck. Learn what Social Security and Medicare taxes are, how they work, and what you get back — with worked examples at $50K and $200K.',
  alternates: { canonical: '/blog/fica-taxes-explained' },
  keywords:
    'FICA tax 2026, Social Security tax rate, Medicare tax rate, FICA withholding, self-employment tax, additional Medicare tax, payroll tax',
  openGraph: {
    title: 'FICA Taxes Explained: Social Security and Medicare in 2026',
    description:
      'FICA takes 7.65% of every paycheck. Learn what Social Security and Medicare taxes are, how they work, and what you get back.',
  },
}

export default function FicaTaxesExplained() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="FICA taxes illustration showing Social Security and Medicare breakdown"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Left: paycheck icon */}
          <rect x="50" y="55" width="100" height="90" rx="6" fill="rgba(255,255,255,0.2)" />
          <line x1="65" y1="75" x2="135" y2="75" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="65" y1="90" x2="120" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="65" y1="105" x2="130" y2="105" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="65" y1="120" x2="110" y2="120" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <text x="100" y="48" textAnchor="middle" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">PAYCHECK</text>
          {/* Arrow */}
          <line x1="170" y1="100" x2="220" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="220,92 235,100 220,108" fill="rgba(255,255,255,0.6)" />
          {/* Center: FICA split */}
          <text x="370" y="42" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="sans-serif">FICA — 7.65%</text>
          {/* Social Security box */}
          <rect x="250" y="55" width="120" height="80" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="310" y="82" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="sans-serif">Social</text>
          <text x="310" y="98" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="sans-serif">Security</text>
          <text x="310" y="122" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="monospace">6.2%</text>
          {/* Medicare box */}
          <rect x="385" y="55" width="120" height="80" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="445" y="90" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="sans-serif">Medicare</text>
          <text x="445" y="122" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="monospace">1.45%</text>
          {/* Bottom labels */}
          <text x="310" y="160" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Cap: $168,600</text>
          <text x="445" y="160" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">No cap</text>
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
        FICA Taxes Explained: Social Security and Medicare in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published May 29, 2026 &middot; 6 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Look at any pay stub and you will see two deductions that appear on every single one: <strong>Social Security</strong> and <strong>Medicare</strong>. Together, they are known as <strong>FICA taxes</strong>. They take a combined <strong>7.65%</strong> out of every paycheck, and your employer pays an equal amount on top of that.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA is not optional. You cannot reduce it with deductions or credits (the way you can with income tax). But the money does go somewhere useful &mdash; it funds retirement benefits and healthcare for millions of Americans. Here is how it works.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is FICA?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA stands for the <strong>Federal Insurance Contributions Act</strong>. It is a payroll tax that was created in 1935 as part of the Social Security Act, signed by President Franklin D. Roosevelt during the Great Depression. The original purpose was to create a safety net so that retired workers would have a guaranteed income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Medicare was added later in 1965 to provide health insurance for Americans 65 and older. Today, FICA funds both programs and is split into two parts:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Social Security tax:</strong> 6.2% (employee) + 6.2% (employer) = 12.4% total</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Medicare tax:</strong> 1.45% (employee) + 1.45% (employer) = 2.9% total</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        As an employee, you only see your half &mdash; 7.65% &mdash; on your pay stub. Your employer pays the other 7.65% separately. The total going to the government is 15.3% of your gross pay.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Social Security Tax: 6.2% With a Cap
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Social Security tax rate is <strong>6.2%</strong> of your gross wages. Your employer pays another 6.2%, for a total of 12.4%.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, there is an important limit called the <strong>wage base</strong>. In 2026, you only pay Social Security tax on the first <strong>$168,600</strong> of earnings. Once your year-to-date earnings exceed that amount, Social Security tax stops being deducted from your paycheck for the rest of the year.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Contribution and Benefit Base)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        This means the maximum Social Security tax any worker pays in 2026 is:
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
        }}
      >
        $168,600 &times; 6.2% = <strong>$10,453.20</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn $80,000, $150,000, or $168,600 &mdash; you pay Social Security tax on every dollar. But if you earn $250,000, you only pay Social Security tax on the first $168,600 and nothing on the remaining $81,400.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The wage base adjusts each year based on average wage growth. It has increased steadily over time &mdash; it was $147,000 in 2022, $160,200 in 2023, $168,600 in 2024, and has remained at $168,600 for 2026.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Medicare Tax: 1.45% With No Cap
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Medicare tax rate is <strong>1.45%</strong> of your gross wages. Unlike Social Security, there is <strong>no income cap</strong> &mdash; you pay Medicare tax on every dollar you earn, whether you make $30,000 or $3 million.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your employer matches your 1.45% with another 1.45%, bringing the total Medicare contribution to 2.9% of your earnings.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Medicare pays for hospital insurance (Part A) for Americans 65 and older. You become eligible after you (or your spouse) have paid Medicare taxes for at least 10 years (40 quarters).{' '}
        <a href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-does-medicare-coverage-start" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Medicare.gov)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Additional Medicare Tax: 0.9% for High Earners
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Since 2013, there has been an extra Medicare tax for higher earners. If your wages exceed <strong>$200,000</strong> per year (for single filers), you pay an <strong>Additional Medicare Tax of 0.9%</strong> on every dollar above that threshold. The thresholds for other filing statuses are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Single or Head of Household:</strong> $200,000</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Married Filing Jointly:</strong> $250,000</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Married Filing Separately:</strong> $125,000</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One important detail: your employer does <strong>not</strong> match the Additional Medicare Tax. It is entirely your responsibility. This makes the total Medicare rate 2.35% on wages above the threshold (1.45% regular + 0.9% additional), while the employer still pays just 1.45%.{' '}
        <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 560: Additional Medicare Tax)
        </a>
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Self-Employment Tax: You Pay Both Halves
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are self-employed &mdash; whether you are a freelancer, gig worker, or small business owner &mdash; there is no employer to pay the other half of FICA. You are responsible for the full <strong>15.3%</strong> (12.4% Social Security + 2.9% Medicare). This is called <strong>self-employment tax</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The good news is that the IRS lets you deduct the employer-equivalent portion (7.65%) when calculating your adjusted gross income. This means self-employment tax effectively costs you a little less than the full 15.3% &mdash; but it is still significantly more than the 7.65% that employees pay.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Self-Employment Tax)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employment tax applies to your net self-employment income (revenue minus business expenses) above $400. You report it on{' '}
        <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Schedule SE
        </a>{' '}
        when you file your tax return.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The same Social Security wage base ($168,600) and Additional Medicare Tax rules apply to self-employed workers.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Examples: FICA Tax at $50K and $200K
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s see exactly how much FICA takes out of two different paychecks. Both examples assume a single W-2 employee.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Example 1: $50,000 Annual Salary
      </h3>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Per Biweekly Check</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Social Security', '6.2%', '$3,100.00', '$119.23'],
              ['Medicare', '1.45%', '$725.00', '$27.88'],
              ['Additional Medicare', '0.9%', '$0.00', '$0.00'],
            ].map(([tax, rate, annual, biweekly], i) => (
              <tr key={tax} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{tax}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{annual}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{biweekly}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={2} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total FICA</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$3,825.00</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$147.12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At $50,000, the entire salary is below the Social Security wage base, so every dollar gets taxed at 6.2%. And since it is well below the $200,000 threshold, there is no Additional Medicare Tax. The total FICA bill is <strong>$3,825 per year</strong> &mdash; about $147 out of each biweekly paycheck.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Example 2: $200,000 Annual Salary
      </h3>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Wages</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Social Security</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$168,600</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>6.2%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$10,453.20</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Medicare</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$200,000</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>1.45%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$2,900.00</td>
            </tr>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>Additional Medicare</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>$0*</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>0.9%</td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$0.00</td>
            </tr>
            <tr style={{ background: '#ecfdf5' }}>
              <td colSpan={3} style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total FICA</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$13,353.20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1rem' }}>
        *At exactly $200,000, the Additional Medicare Tax threshold is not exceeded for a single filer. A salary of $201,000 would trigger $9 in Additional Medicare Tax (0.9% &times; $1,000).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice how the Social Security tax is capped at $10,453.20 even though the salary is $200,000. The remaining $31,400 above the wage base is exempt from Social Security tax. But Medicare still applies to every dollar.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        At $50,000, FICA takes <strong>7.65%</strong> of your pay. At $200,000, the effective FICA rate drops to about <strong>6.68%</strong> because of the Social Security cap. This is why FICA is sometimes called a <strong>regressive tax</strong> &mdash; lower-income workers pay a higher percentage of their income than higher-income workers.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Do You Get Back From FICA?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA is not just money that disappears. It funds two major benefits you will eventually receive:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Social Security Benefits
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you retire (currently at age 62 for early benefits or 67 for full benefits), Social Security pays you a monthly check based on your 35 highest-earning years. The average Social Security retirement benefit in 2026 is about <strong>$1,976 per month</strong>, though the maximum is significantly higher if you earned at or above the wage base for 35 years.{' '}
        <a href="https://www.ssa.gov/oact/cola/Benefits.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Benefits)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Social Security also provides disability benefits (SSDI) if you become unable to work before retirement age, and survivor benefits for the families of workers who pass away.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Medicare Benefits
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Once you turn 65, Medicare provides health insurance coverage. Part A (hospital insurance) is generally premium-free if you have paid Medicare taxes for at least 10 years. Part B (doctor visits and outpatient care) requires a monthly premium but is heavily subsidized by the government.{' '}
        <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Medicare.gov &mdash; Parts of Medicare)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In other words, the FICA taxes you pay throughout your career are building toward two guaranteed benefits: monthly income in retirement and health insurance starting at age 65.
      </p>

      {/* FICA vs Income Tax */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        FICA vs. Income Tax: What Is the Difference?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        People often confuse FICA with income tax, but they work differently:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>FICA</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal Income Tax</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Rate', 'Flat 7.65%', 'Progressive (10%–37%)'],
              ['Standard deduction', 'None', '$15,000 (single)'],
              ['Can be reduced with credits?', 'No', 'Yes'],
              ['Employer pays half?', 'Yes', 'No'],
              ['Income cap?', 'SS only ($168,600)', 'No'],
              ['Funds what?', 'Social Security & Medicare', 'General government'],
            ].map(([label, fica, income], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{fica}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The biggest practical difference: you can lower your income tax by contributing to a traditional 401(k) or claiming deductions. You <em>cannot</em> lower your FICA tax &mdash; it applies to your gross wages before any deductions.
      </p>

      {/* How FICA appears on your pay stub */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How FICA Appears on Your Pay Stub
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA usually shows up as two separate line items on your pay stub:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>OASDI</strong> or <strong>SS</strong> or <strong>Social Security</strong> &mdash; this is the 6.2% Social Security portion</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>MED</strong> or <strong>Medicare</strong> &mdash; this is the 1.45% Medicare portion</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        OASDI stands for Old-Age, Survivors, and Disability Insurance &mdash; the official name for Social Security. If you see this on your pay stub, now you know what it means.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can also check your total FICA contributions for the year on your{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-w-2" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          W-2 form
        </a>
        . Box 4 shows Social Security tax withheld, and Box 6 shows Medicare tax withheld.{' '}
        <a href="https://www.irs.gov/pub/irs-pdf/p15.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 15, Employer&rsquo;s Tax Guide)
        </a>
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        FICA taxes take 7.65% out of every paycheck &mdash; 6.2% for Social Security and 1.45% for Medicare. There is no way around them if you earn a wage or salary. Self-employed workers pay double (15.3%) because they cover both the employee and employer portions.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Social Security portion has a wage cap ($168,600 in 2026), so high earners stop paying it partway through the year. Medicare has no cap, and earners above $200,000 pay an extra 0.9%.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        While FICA can feel like a big chunk of your paycheck, it funds two of the most important safety nets in the country: guaranteed retirement income and health insurance for seniors. Every dollar you pay now is building toward benefits you will receive later.
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
          See Your FICA Breakdown Instantly
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly how much goes to Social Security, Medicare, federal tax, and state tax &mdash; and what you actually take home.
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
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/Benefits.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Primary Insurance Amount</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 751: Social Security and Medicare Withholding</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 560: Additional Medicare Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Self-Employment Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p15.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 15, Employer&rsquo;s Tax Guide</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Medicare.gov &mdash; Parts of Medicare</a>
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
