import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self-Employment Tax: What Freelancers Pay in 2026',
  description:
    'Freelancers pay 15.3% self-employment tax on top of income taxes. Here\'s exactly how it works, how to calculate it, and strategies to legally reduce what you owe.',
  alternates: { canonical: '/blog/self-employment-tax-freelancers' },
  keywords:
    'self-employment tax 2026, freelancer taxes, self-employment tax rate, SE tax calculator, quarterly estimated taxes, 1099 self-employment tax, freelance tax rate 2026',
  openGraph: {
    title: 'Self-Employment Tax: What Freelancers Pay in 2026',
    description:
      'Freelancers pay 15.3% self-employment tax on top of income taxes. Here\'s the full breakdown with a worked example at $75,000 in freelance income.',
  },
}

export default function SelfEmploymentTaxFreelancers() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Self-employment tax illustration showing freelancer paying both employee and employer shares"
        >
          <rect width="600" height="200" rx="12" fill="#7c3aed" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Person icon */}
          <circle cx="80" cy="80" r="22" fill="rgba(255,255,255,0.25)" />
          <text x="80" y="88" textAnchor="middle" fontSize="24" fill="#fff" fontFamily="sans-serif">F</text>
          <text x="80" y="118" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Freelancer</text>

          {/* Arrow right */}
          <line x1="115" y1="90" x2="155" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="155,83 168,90 155,97" fill="rgba(255,255,255,0.5)" />

          {/* Tax boxes */}
          <rect x="175" y="40" width="130" height="38" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="240" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">Employee Share</text>
          <text x="240" y="71" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">SS 6.2% + Med 1.45%</text>

          <rect x="175" y="88" width="130" height="38" rx="6" fill="rgba(255,255,255,0.25)" />
          <text x="240" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">Employer Share</text>
          <text x="240" y="119" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">SS 6.2% + Med 1.45%</text>

          {/* Plus sign */}
          <text x="240" y="144" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">You pay BOTH</text>

          {/* Arrow right */}
          <line x1="315" y1="90" x2="355" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="355,83 368,90 355,97" fill="rgba(255,255,255,0.5)" />

          {/* Total box */}
          <rect x="375" y="55" width="180" height="68" rx="8" fill="rgba(255,255,255,0.2)" />
          <text x="465" y="80" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Total SE Tax</text>
          <text x="465" y="100" textAnchor="middle" fontSize="28" fontWeight="800" fill="#fff" fontFamily="'JetBrains Mono', monospace">15.3%</text>
          <text x="465" y="115" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">of net self-employment income</text>
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
        Self-Employment Tax: What Freelancers Pay in 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 22, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you work for an employer, your taxes get split in a way you might not even notice. You pay half of Social Security and Medicare taxes, and your employer quietly pays the other half. But the moment you go freelance, you become both the employee and the employer — and you owe <strong>both halves yourself</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That combined amount is called <strong>self-employment tax</strong>, and in 2026 it adds up to <strong>15.3%</strong> of your net freelance income. That is on top of federal and state income taxes. Many new freelancers are blindsided by this bill, especially if they have only ever worked W-2 jobs where the employer covered half.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how self-employment tax works in 2026, how to calculate what you owe, and a few legal strategies to reduce your bill.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Self-Employment Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employment tax is the freelancer&rsquo;s version of <strong>FICA</strong> — the Federal Insurance Contributions Act taxes that fund Social Security and Medicare. Every worker in America pays into these programs. The difference is who writes the check.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a traditional W-2 employee earning $60,000:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>The employee pays <strong>6.2%</strong> Social Security + <strong>1.45%</strong> Medicare = <strong>7.65%</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>The employer pays a matching <strong>7.65%</strong> on top of your salary</li>
        <li style={{ marginBottom: '0.5rem' }}>You never see the employer&rsquo;s share — it comes out of the company&rsquo;s payroll budget</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a self-employed freelancer earning $60,000 in net profit:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>You pay the employee share: <strong>7.65%</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>You also pay the employer share: <strong>7.65%</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Total: <strong>15.3%</strong> out of your own pocket</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS considers you self-employed if you have <strong>$400 or more in net self-employment income</strong> in a year. This includes freelancers, independent contractors, gig workers, sole proprietors, and most people who receive 1099 forms.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (IRS &mdash; Self-Employment Tax)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The 2026 Self-Employment Tax Rate: Breaking It Down
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The 15.3% self-employment tax is made up of two components:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Cap</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Social Security (employee)', '6.2%', '$176,100'],
              ['Social Security (employer)', '6.2%', '$176,100'],
              ['Medicare (employee)', '1.45%', 'No cap'],
              ['Medicare (employer)', '1.45%', 'No cap'],
            ].map(([label, rate, cap], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#7c3aed', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{cap}</td>
              </tr>
            ))}
            <tr style={{ background: '#faf5ff' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total SE Tax</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#7c3aed' }}>15.3%</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', color: '#475569' }}>12.4% capped at $176,100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Social Security portion (12.4%) only applies to the first <strong>$176,100</strong> of net self-employment income in 2026. Once you earn above that threshold, only Medicare (2.9%) continues — and if you earn above <strong>$200,000</strong>, an additional 0.9% Medicare surtax kicks in.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (SSA.gov &mdash; 2026 Contribution and Benefit Base)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Calculate Your Self-Employment Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is a small twist in how the IRS calculates SE tax. You do not pay 15.3% on your full freelance revenue. Instead, you follow these three steps:
      </p>

      <div
        style={{
          background: '#faf5ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#7c3aed', marginBottom: '0.75rem' }}>
          Step 1: Calculate net self-employment income
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#1e293b', marginBottom: '1rem' }}>
          Subtract your business expenses from your gross freelance revenue. If you earned $80,000 and spent $5,000 on software, equipment, and other business costs, your net SE income is <strong>$75,000</strong>.
        </p>

        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#7c3aed', marginBottom: '0.75rem' }}>
          Step 2: Multiply by 92.35%
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#1e293b', marginBottom: '1rem' }}>
          The IRS only taxes <strong>92.35%</strong> of your net SE income. This is because W-2 employees pay their share on gross wages, but as a self-employed person, your &ldquo;employer&rdquo; (you) is deducting the employer share before figuring your taxable amount. So: $75,000 &times; 0.9235 = <strong>$69,263</strong>.
        </p>

        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#7c3aed', marginBottom: '0.75rem' }}>
          Step 3: Multiply by 15.3%
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#1e293b', marginBottom: '0' }}>
          Apply the 15.3% rate to the 92.35% figure: $69,263 &times; 0.153 = <strong>$10,597</strong> in self-employment tax.
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This calculation is done on <strong>Schedule SE</strong>, which you file with your federal tax return (Form 1040).{' '}
        <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (IRS &mdash; About Schedule SE)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The SE Tax Deduction: Your Built-In Relief
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is some good news: the IRS lets you deduct <strong>half of your self-employment tax</strong> from your taxable income. This mirrors the way W-2 employees work — they do not pay income tax on the employer&rsquo;s share of FICA, so self-employed people get an equivalent break.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Using our $75,000 example:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>SE tax: <strong>$10,597</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Deductible amount (half): <strong>$5,299</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>This $5,299 is subtracted <em>before</em> calculating your federal income tax</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This deduction does not require itemizing. It is an <strong>&ldquo;above the line&rdquo; adjustment</strong> that every self-employed person can claim, even if they take the standard deduction.{' '}
        <a href="https://www.irs.gov/taxtopics/tc554" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 554: Self-Employment Tax)
        </a>
      </p>

      {/* Section 5 — Full Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Full Worked Example: $75,000 Freelance Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through the complete tax picture for a single freelancer earning $75,000 in net self-employment income in 2026, with no other income sources and no pre-tax retirement contributions.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Net self-employment income', '$75,000', false],
              ['SE tax (15.3% × 92.35%)', '−$10,597', true],
              ['Deduction: half of SE tax', '−$5,299', false],
              ['Standard deduction (single, 2026)', '−$15,000', false],
              ['Federal taxable income', '$54,104', false],
              ['Federal income tax (estimated)', '−$6,726', true],
              ['Total federal taxes (SE + income)', '−$17,323', true],
            ].map(([label, amount, isDeduction], i) => (
              <tr key={label as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: isDeduction ? '#dc2626' : '#1e293b' }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Estimated take-home (federal only)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$57,677</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        So on $75,000 of freelance income, roughly <strong>$17,323 goes to federal taxes alone</strong> — that is about 23.1% of total income. State income tax would add more on top of that, depending on where you live. A freelancer in{' '}
        <a href="/california" style={{ color: '#7c3aed', textDecoration: 'underline' }}>California</a>{' '}
        could pay another $4,000 to $5,000 in state taxes, while a freelancer in{' '}
        <a href="/texas" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Texas</a>,{' '}
        <a href="/florida" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Florida</a>, or{' '}
        <a href="/nevada" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Nevada</a>{' '}
        pays $0 in state income tax.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quarterly Estimated Taxes: How to Pay as You Go
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you are a W-2 employee, your employer withholds taxes from every paycheck automatically. As a freelancer, no one does that for you. If you do not pay taxes throughout the year, you will owe a large lump sum in April — and possibly an <strong>underpayment penalty</strong> on top of it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The IRS requires self-employed workers to pay <strong>quarterly estimated taxes</strong> four times per year. The 2026 deadlines are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Quarter</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Period</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Q1 2026', 'Jan 1 – Mar 31', 'April 15, 2026'],
              ['Q2 2026', 'Apr 1 – May 31', 'June 16, 2026'],
              ['Q3 2026', 'Jun 1 – Aug 31', 'September 15, 2026'],
              ['Q4 2026', 'Sep 1 – Dec 31', 'January 15, 2027'],
            ].map(([q, period, due], i) => (
              <tr key={q} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#7c3aed', fontWeight: 600 }}>{q}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{period}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 600 }}>{due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A simple rule: set aside <strong>25% to 30%</strong> of every payment you receive from a client, and put it in a separate savings account. When a quarterly deadline comes up, you will have the money ready. For the $75,000 freelancer in our example, that is about $4,300 per quarter.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (IRS &mdash; Estimated Taxes)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You pay estimated taxes using <strong>IRS Form 1040-ES</strong> or through the IRS Direct Pay website. Most state tax agencies have a similar system for state estimated payments.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Business Deductions That Reduce Your SE Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Remember, self-employment tax is calculated on your <strong>net profit</strong>, not your gross income. Every legitimate business expense you deduct reduces both your income tax <em>and</em> your self-employment tax bill. Common deductions for freelancers include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Home office deduction:</strong> If you use part of your home exclusively for work, you can deduct that percentage of your rent or mortgage interest, utilities, and internet.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Health insurance premiums:</strong> Self-employed individuals can deduct 100% of health insurance premiums paid for themselves and their families — as an above-the-line deduction.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Retirement contributions:</strong> Contributions to a SEP-IRA or Solo 401(k) reduce your taxable income significantly (more on this below).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Software and subscriptions:</strong> Tools you use for work — design software, project management apps, accounting software — are deductible.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Equipment:</strong> A laptop, camera, microphone, or other equipment used for work can be deducted — often in the year you buy it using Section 179 expensing.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Professional development:</strong> Courses, books, and conferences related to your freelance work are deductible.
        </li>
      </ul>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Reduce SE Tax With a Retirement Account
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One of the most powerful tax tools for freelancers is a <strong>SEP-IRA</strong> (Simplified Employee Pension) or a <strong>Solo 401(k)</strong>. These retirement accounts let you shelter a large portion of your income from income taxes — though not from self-employment tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In 2026, a <strong>SEP-IRA</strong> allows contributions of up to <strong>25% of net self-employment income</strong> (after the SE tax deduction), up to a maximum of $70,000. For our $75,000 earner, that could mean contributing roughly $13,000 and reducing taxable income by the same amount — saving over $3,000 in federal income taxes.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>Solo 401(k)</strong> is even more flexible. It allows you to contribute both as an &ldquo;employee&rdquo; (up to $23,500 in 2026) and as an &ldquo;employer&rdquo; (up to 25% of net SE income), with a combined cap of $70,000.{' '}
        <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
          (IRS &mdash; One-Participant 401(k) Plans)
        </a>
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does Your State Also Tax Self-Employment Income?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes — most states treat self-employment income as ordinary income and tax it at the same rates as W-2 wages. The state does not add an extra &ldquo;self-employment&rdquo; tax, but your net profit from freelancing flows to your state income tax return and is taxed accordingly.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Where you live makes a massive difference in your after-tax take-home as a freelancer:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No state income tax:</strong>{' '}
          <a href="/texas" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Texas</a>,{' '}
          <a href="/florida" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Florida</a>,{' '}
          <a href="/washington" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Washington</a>,{' '}
          <a href="/nevada" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Nevada</a>, and four others — a freelancer here keeps all the state-level money.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>High state income tax:</strong>{' '}
          <a href="/california" style={{ color: '#7c3aed', textDecoration: 'underline' }}>California</a> taxes $75,000 in self-employment income at roughly 6% on average, adding around $4,500 to your tax bill.{' '}
          <a href="/new-york" style={{ color: '#7c3aed', textDecoration: 'underline' }}>New York</a> runs a similar rate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Most states:</strong> Fall somewhere in between, with rates from 2% to 6%.
        </li>
      </ul>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        SE Tax vs. Income Tax: What Is the Difference?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These two taxes confuse a lot of new freelancers, so here is a clear side-by-side:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Feature</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Self-Employment Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Income Tax</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Funds', 'Social Security & Medicare', 'General federal programs'],
              ['Rate', '15.3% (flat)', '10% – 37% (progressive)'],
              ['Applies to', 'Net SE income × 92.35%', 'Adjusted gross income minus deductions'],
              ['Standard deduction?', 'No', 'Yes ($15,000 single in 2026)'],
              ['State version?', 'No (federal only)', 'Yes (most states)'],
            ].map(([feature, se, income], i) => (
              <tr key={feature} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{feature}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{se}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The bottom line: SE tax and income tax are two separate taxes, calculated separately, that you owe at the same time (either through quarterly payments or at tax filing). Most freelancers will owe both.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quick Rules for Staying on Top of Freelance Taxes
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Track every expense</strong> in a spreadsheet or accounting app (Wave, QuickBooks Self-Employed, FreshBooks). More deductions mean lower SE tax.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Save 25–30% of each payment</strong> into a dedicated tax savings account as soon as the money arrives.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Pay quarterly</strong> using IRS Direct Pay to avoid underpayment penalties. Mark the four due dates on your calendar now.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Contribute to a SEP-IRA or Solo 401(k)</strong> to reduce your income tax (though not SE tax) and build long-term wealth at the same time.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Deduct health insurance premiums</strong> if you buy your own coverage — this is a significant above-the-line deduction for self-employed people.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>File Schedule C and Schedule SE</strong> with your 1040 every year. Many tax software programs walk you through this automatically.
        </li>
      </ul>

      {/* Section 12 — Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employment tax hits harder than most new freelancers expect — 15.3% on top of income taxes means your effective federal tax rate on $75,000 in freelance income is close to 23%. That is significantly more than a W-2 employee earning the same salary would pay, simply because the employer is no longer covering half of FICA.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The good news is that the tax system gives you tools to fight back: the SE deduction, retirement accounts, business expense deductions, and health insurance write-offs can meaningfully reduce your bill. The key is staying organized throughout the year and paying quarterly so you never face a shocking bill at tax time.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#faf5ff',
          border: '1px solid #ddd6fe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Use our free calculator to compare after-tax pay in every state — handy if you are deciding where to base your freelance business.
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
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS &mdash; Self-Employment Tax (Social Security and Medicare Taxes)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc554" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS &mdash; Topic 554: Self-Employment Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS &mdash; About Schedule SE (Form 1040)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS &mdash; Estimated Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>SSA.gov &mdash; 2026 Contribution and Benefit Base</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>IRS &mdash; One-Participant 401(k) Plans (Solo 401k)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>Tax Foundation &mdash; State Individual Income Tax Rates, 2026</a>
        </li>
      </ul>

      {/* Back to blog */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginBottom: '2rem' }}>
        <a href="/blog" style={{ color: '#7c3aed', textDecoration: 'underline', fontSize: '0.9375rem' }}>
          &larr; Back to all articles
        </a>
      </div>
    </article>
  )
}
