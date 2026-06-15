import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Calculate Your Hourly Rate from a Salary (2026 Guide)',
  description:
    'Divide your annual salary by 2,080 to get your hourly rate — but that\'s just the start. Learn the exact formula, see a quick reference table, and find your real after-tax hourly pay.',
  alternates: { canonical: '/blog/how-to-calculate-hourly-rate-from-salary' },
  keywords:
    'how to calculate hourly rate from salary, salary to hourly calculator, annual salary to hourly, hourly rate from annual salary 2026, salary divided by 2080, convert salary to hourly',
  openGraph: {
    title: 'How to Calculate Your Hourly Rate from a Salary (2026 Guide)',
    description:
      'The formula is simple: annual salary ÷ 2,080. But your real hourly take-home pay after taxes can be 25–35% lower. Here\'s the full picture.',
  },
}

export default function HourlyRateFromSalary() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Salary to hourly rate conversion illustration"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Left: salary label */}
          <rect x="40" y="65" width="140" height="70" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="110" y="97" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Annual</text>
          <text x="110" y="116" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="monospace">$60,000</text>

          {/* Divide symbol */}
          <circle cx="230" cy="88" r="5" fill="rgba(255,255,255,0.7)" />
          <line x1="210" y1="100" x2="250" y2="100" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <circle cx="230" cy="112" r="5" fill="rgba(255,255,255,0.7)" />

          {/* Middle: 2080 hours */}
          <rect x="265" y="65" width="110" height="70" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="320" y="97" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Hours/yr</text>
          <text x="320" y="116" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="monospace">2,080</text>

          {/* Equals sign */}
          <line x1="388" y1="94" x2="415" y2="94" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />
          <line x1="388" y1="106" x2="415" y2="106" stroke="rgba(255,255,255,0.7)" strokeWidth="3" />

          {/* Right: hourly result */}
          <rect x="425" y="55" width="140" height="90" rx="8" fill="rgba(255,255,255,0.28)" />
          <text x="495" y="90" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="sans-serif">Hourly Rate</text>
          <text x="495" y="118" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff" fontFamily="monospace">$28.85</text>

          {/* Bottom label */}
          <text x="300" y="168" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">40 hrs/week × 52 weeks = 2,080 hours per year</text>
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
        How to Calculate Your Hourly Rate from a Salary (2026 Guide)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published June 15, 2026 &middot; 8 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Whether you are comparing a salaried job offer to an hourly contract, trying to figure out what your time is really worth, or just curious how your annual pay translates to an hourly number, the math is straightforward. <strong>Divide your annual salary by 2,080</strong> and you have your gross hourly rate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But gross hourly and <em>take-home</em> hourly are two very different numbers. After federal taxes, state taxes, and FICA, your real hourly rate &mdash; the one that actually hits your bank account &mdash; can be 25 to 35% lower. This guide walks through both, with a quick reference table, worked examples, and tips for making the comparison mean something.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Basic Formula: Annual Salary ÷ 2,080
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A standard full-time job in the United States is <strong>40 hours per week</strong>. There are <strong>52 weeks</strong> in a year. Multiply those together:
      </p>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '1rem',
          color: '#0891b2',
          lineHeight: 1.8,
        }}
      >
        40 hours/week &times; 52 weeks = <strong>2,080 hours/year</strong>
        <br />
        Hourly rate = Annual salary &divide; 2,080
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        So if your salary is $60,000 per year:
      </p>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '1rem',
          color: '#0891b2',
        }}
      >
        $60,000 &divide; 2,080 = <strong>$28.85 per hour</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also a popular shortcut: <strong>divide your annual salary by 2,000</strong> instead of 2,080. This assumes a round 50 work weeks per year (giving 2 weeks for vacation or holidays). The answer is slightly higher, but it is easier to do in your head and is close enough for a quick estimate.
      </p>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '1rem',
          color: '#0891b2',
        }}
      >
        $60,000 &divide; 2,000 = $30.00/hr &nbsp;(rough estimate)
        <br />
        $60,000 &divide; 2,080 = $28.85/hr &nbsp;(precise)
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Use 2,080 when you need accuracy. Use 2,000 when you need a number fast.
      </p>

      {/* Section 2 — Quick Reference Table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quick Reference Table: Common Salaries to Hourly Rates
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here are the hourly equivalents for salaries from $30,000 to $200,000, based on 2,080 hours per year:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Salary</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Hourly Rate (÷ 2,080)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Hourly Rate (÷ 2,000)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$30,000', '$14.42', '$15.00'],
              ['$40,000', '$19.23', '$20.00'],
              ['$50,000', '$24.04', '$25.00'],
              ['$60,000', '$28.85', '$30.00'],
              ['$75,000', '$36.06', '$37.50'],
              ['$90,000', '$43.27', '$45.00'],
              ['$100,000', '$48.08', '$50.00'],
              ['$120,000', '$57.69', '$60.00'],
              ['$150,000', '$72.12', '$75.00'],
              ['$200,000', '$96.15', '$100.00'],
            ].map(([salary, precise, rough], i) => (
              <tr key={salary} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b', fontWeight: 600 }}>{salary}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#0891b2', fontWeight: 600 }}>{precise}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rough}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3 — PTO adjustment */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Should You Adjust for Paid Time Off?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are a salaried employee with paid time off (PTO), the 2,080 formula is correct &mdash; you get paid for all 52 weeks regardless of vacation days. Your hourly rate <em>effectively</em> goes up the more PTO you take, because you are earning the same annual amount for fewer hours worked.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But if you are comparing a salaried role to a <strong>contractor or freelance rate</strong> where you only get paid for hours actually worked, you need to subtract your unpaid time. A common approach: assume 240 unpaid hours (30 days of vacation, holidays, sick days) and use <strong>1,840 hours</strong> as your denominator instead.
      </p>

      <div
        style={{
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#92400e',
          lineHeight: 1.8,
        }}
      >
        Salaried rate (PTO included): $60,000 &divide; 2,080 = $28.85/hr
        <br />
        Equivalent contractor rate (no PTO): $60,000 &divide; 1,840 = $32.61/hr
        <br />
        <span style={{ fontSize: '0.8125rem', color: '#b45309' }}>
          You need ~$32.61/hr as a contractor to equal a $60K salaried job with 4 weeks PTO
        </span>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is why freelance rates always look high compared to salaried rates &mdash; contractors have to price in their own time off, self-employment tax, and lack of employer benefits.
      </p>

      {/* Section 4 — Reverse: Hourly to Annual */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Going the Other Direction: Hourly to Annual Salary
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To convert an hourly rate to an annual salary, just multiply by 2,080:
      </p>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '1rem',
          color: '#0891b2',
          lineHeight: 1.8,
        }}
      >
        Annual salary = Hourly rate &times; 2,080
        <br /><br />
        $20.00/hr &times; 2,080 = <strong>$41,600/year</strong>
        <br />
        $25.00/hr &times; 2,080 = <strong>$52,000/year</strong>
        <br />
        $35.00/hr &times; 2,080 = <strong>$72,800/year</strong>
        <br />
        $50.00/hr &times; 2,080 = <strong>$104,000/year</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is also an even faster mental shortcut: <strong>double your hourly rate and add three zeros</strong>. So $25/hr becomes approximately $50,000 per year. This works because $25 &times; 2,000 = $50,000 (using the rounded 2,000 hours). The true answer using 2,080 is $52,000, but $50,000 is close enough for a quick gut-check.
      </p>

      {/* Section 5 — After-tax hourly rate */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Your Real Hourly Rate: After Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your gross hourly rate tells you how much you earn before taxes. But what you <em>keep</em> &mdash; your after-tax hourly rate &mdash; is the number that actually matters for budgeting, negotiating, or comparing offers.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        To get your after-tax hourly rate, divide your annual take-home pay by 2,080. Here is what that looks like for a single filer earning $60,000 in three different states:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gross Hourly</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Take-Home</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>After-Tax Hourly</th>
            </tr>
          </thead>
          <tbody>
            {[
              [<a key="tx" href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>, '$28.85', '$50,404', '$24.23'],
              [<a key="ny" href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>, '$28.85', '$45,600', '$21.92'],
              [<a key="ca" href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>, '$28.85', '$45,120', '$21.69'],
            ].map(([state, gross, takeHome, afterTax], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 500 }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>{gross}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{takeHome}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 700 }}>{afterTax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The same $60,000 salary produces a very different after-tax hourly rate depending on where you live. A Texas worker at $24.23/hr take-home is effectively earning <strong>$2.54 more per hour</strong> than the same salaried worker in California &mdash; just from the difference in state income tax. Over a 40-hour week, that is $101.60 extra every single week.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-individual-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Income Tax Rates 2026)
        </a>
      </p>

      {/* Section 6 — Effective tax rate method */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        A Faster Way: Use Your Effective Tax Rate
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you know your effective (overall) tax rate, you can skip the multi-step calculation. Just multiply your gross hourly rate by <strong>(1 &minus; your effective tax rate)</strong>:
      </p>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#0891b2',
          lineHeight: 1.9,
        }}
      >
        After-tax hourly = Gross hourly &times; (1 &minus; effective tax rate)
        <br /><br />
        Example: $28.85/hr gross, ~16% effective rate (Texas)
        <br />
        $28.85 &times; (1 &minus; 0.16) = $28.85 &times; 0.84 = <strong>$24.23/hr</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        As a rough rule of thumb, most Americans earning between $40,000 and $100,000 have an effective federal + FICA tax rate of <strong>18&ndash;24%</strong>, depending on their deductions and filing status. Add state income tax on top of that for your total effective rate.
        {' '}<a href="https://www.irs.gov/statistics/soi-tax-stats-individual-statistical-tables-by-size-of-adjusted-gross-income" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Individual Statistical Tables by Income)
        </a>
      </p>

      {/* Section 7 — Overtime */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Overtime and Your Hourly Equivalent
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Salaried employees classified as <strong>exempt</strong> under the Fair Labor Standards Act (FLSA) do not receive overtime pay &mdash; no matter how many hours they work. Hourly (non-exempt) workers earn <strong>1.5&times; their regular rate</strong> for every hour over 40 in a workweek.
        {' '}<a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Department of Labor &mdash; Overtime Pay)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This matters when you calculate your effective hourly rate as a salaried employee. If you are regularly working 50 hours per week instead of 40, your actual hourly rate is much lower than the formula suggests:
      </p>

      <div
        style={{
          background: '#fff1f2',
          border: '1px solid #fecdd3',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#9f1239',
          lineHeight: 1.9,
        }}
      >
        $60,000 salary working 40 hrs/wk: $28.85/hr effective rate
        <br />
        $60,000 salary working 50 hrs/wk: 50 &times; 52 = 2,600 hours
        <br />
        $60,000 &divide; 2,600 = <strong>$23.08/hr true effective rate</strong>
        <br />
        <span style={{ fontSize: '0.8125rem', color: '#be123c' }}>
          Working 25% more hours with no extra pay = 20% lower effective hourly rate
        </span>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you are comparing a salaried role to an hourly position, always ask how many hours per week you are expected to work. A $70,000 salary with 50-hour weeks ($26.92/hr) may pay less per hour than a $50,000 salary with 40-hour weeks ($24.04/hr) &mdash; and at the hourly job you would earn overtime if you did work extra.
      </p>

      {/* Section 8 — Part-time */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Part-Time Workers: Adjust the Hours
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work fewer than 40 hours per week, just use the correct number of annual hours in your formula. Replace 2,080 with your actual annual hours:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Hours/Week</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Hours (×52)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Hourly from $40K</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Hourly from $60K</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['20 hrs/wk', '1,040', '$38.46', '$57.69'],
              ['25 hrs/wk', '1,300', '$30.77', '$46.15'],
              ['30 hrs/wk', '1,560', '$25.64', '$38.46'],
              ['32 hrs/wk', '1,664', '$24.04', '$36.06'],
              ['40 hrs/wk', '2,080', '$19.23', '$28.85'],
            ].map(([hrs, annual, f40, f60], i) => (
              <tr key={hrs} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{hrs}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{annual}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#0891b2' }}>{f40}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#0891b2' }}>{f60}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A part-time salaried position paying $40,000 for 25 hours per week is actually paying $30.77 per hour &mdash; well above the equivalent full-time rate of $19.23/hr. If you are comparing it to a full-time offer, make sure you are thinking about total annual pay, not just hourly rates.
      </p>

      {/* Section 9 — Worked comparison */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Real Example: Should You Take the $85K Salary or the $42/hr Contract?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Say you are a software developer in <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington state</a> (no income tax). You have two offers:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Option A:</strong> Full-time salaried employee, $85,000/year, 3 weeks PTO, full health/dental benefits, employer 401(k) match of 4%.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Option B:</strong> 1099 contractor, $42/hour, you pay your own benefits, you handle your own retirement.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is how they compare (assuming 40 hrs/wk, 49 weeks worked for the contractor after 3 weeks off):
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Option A: $85K Salary</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Option B: $42/hr Contract</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Gross Annual Pay', '$85,000', '$82,320'],
              ['Employer FICA match (7.65%)', 'Employer pays', '—'],
              ['Self-employment tax (extra 7.65%)', '$0', '-$6,297'],
              ['Health insurance (est.)', '$0 out of pocket', '-$7,200/yr'],
              ['401(k) match (4%)', '+$3,400', '$0'],
              ['Effective gross value', '~$95,000', '~$68,823'],
            ].map(([label, a, b], i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 5 ? '#059669' : '#1e293b', fontWeight: i === 5 ? 700 : 400 }}>{a}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 5 ? '#059669' : '#1e293b', fontWeight: i === 5 ? 700 : 400 }}>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The $42/hr contract <em>sounds</em> like more money at first glance. But once you account for self-employment tax, the cost of buying your own health insurance, and the lost employer 401(k) match, the salaried role provides significantly more total compensation. The contractor would need to charge roughly <strong>$55+ per hour</strong> to match the true value of the salaried package.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is the most important lesson: never compare a gross salary to a gross hourly rate without factoring in the full picture. Taxes, benefits, and employer contributions all change the real-world value of each offer.
      </p>

      {/* Section 10 — Biweekly and monthly */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Hourly Rate Translates to Your Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Once you know your hourly rate, you can quickly figure out any pay period amount:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Weekly paycheck:</strong> Hourly rate &times; 40 hours
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Biweekly paycheck (every 2 weeks):</strong> Hourly rate &times; 80 hours &nbsp;<em>(most common in the US)</em>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Semi-monthly paycheck (twice a month):</strong> Annual salary &divide; 24
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Monthly paycheck:</strong> Annual salary &divide; 12
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a $60,000 salary, the gross paycheck amounts are:
      </p>

      <div
        style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#0891b2',
          lineHeight: 1.9,
        }}
      >
        Weekly (÷ 52):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1,153.85
        <br />
        Biweekly (÷ 26):&nbsp;&nbsp;&nbsp;&nbsp;$2,307.69
        <br />
        Semi-monthly (÷ 24): $2,500.00
        <br />
        Monthly (÷ 12):&nbsp;&nbsp;&nbsp;&nbsp; $5,000.00
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note: biweekly means 26 paychecks per year, not 24. Two months each year will have <strong>three paydays</strong> instead of two. Many people budget using the two-paycheck months and treat the third paycheck as a bonus.
      </p>

      {/* Section 11 — minimum wage */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal Minimum Wage as an Annual Salary
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal minimum wage in 2026 is <strong>$7.25 per hour</strong>, unchanged since 2009. At full-time hours, that equals:
      </p>

      <div
        style={{
          background: '#fff1f2',
          border: '1px solid #fecdd3',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#9f1239',
          lineHeight: 1.8,
        }}
      >
        $7.25/hr &times; 2,080 hrs = <strong>$15,080/year</strong> gross
        <br />
        After FICA (7.65%): ~$13,927 take-home (federal taxes near $0)
        <br />
        <span style={{ fontSize: '0.8125rem', color: '#be123c' }}>
          Many states have higher minimum wages — e.g., California $16.50, New York $16.00, Washington $16.28
        </span>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work in a state with a higher minimum wage, that is the floor that applies to you &mdash; states can set higher minimums than federal law, but not lower.{' '}
        <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Department of Labor &mdash; State Minimum Wage Laws)
        </a>
      </p>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Converting between salary and hourly rates is simple arithmetic, but making the comparison actually useful takes a bit more work. Here are the key takeaways:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Gross hourly = Annual salary &divide; 2,080.</strong> Use 2,000 for a quick estimate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>After-tax hourly = Annual take-home &divide; 2,080.</strong> This is your real spending power.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>State taxes matter.</strong> The same $60K salary pays $2.54 more per hour after taxes in Texas than in California.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Actual hours worked change your true rate.</strong> If you are salaried and work 50-hour weeks, your effective hourly rate is much lower than the formula suggests.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Benefits have real dollar value.</strong> Employer health insurance, 401(k) matches, and PTO can be worth $10,000&ndash;$20,000 per year on top of your salary.
        </li>
      </ul>

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
          Find Your After-Tax Hourly Rate in Seconds
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see your exact take-home pay &mdash; then divide by 2,080 to get your real after-tax hourly rate.
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
          <a href="https://www.irs.gov/statistics/soi-tax-stats-individual-statistical-tables-by-size-of-adjusted-gross-income" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Individual Statistical Tables by Adjusted Gross Income</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor &mdash; Overtime Pay</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>U.S. Department of Labor &mdash; State Minimum Wage Laws</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-individual-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Individual Income Tax Rates, 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.bls.gov/oes/current/oes_nat.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Bureau of Labor Statistics &mdash; Occupational Employment and Wage Statistics</a>
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
