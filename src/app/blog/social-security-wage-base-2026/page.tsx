import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'The Social Security Wage Base: What Happens When You Hit the $184,500 Cap in 2026' },
  description:
    'Social Security tax stops once your wages hit $184,500 in 2026 — giving your paycheck a surprise boost. Here\'s exactly when the cap kicks in and how much extra you keep.',
  alternates: { canonical: '/blog/social-security-wage-base-2026' },
  keywords:
    'Social Security wage base 2026, Social Security tax cap, when does Social Security tax stop, OASDI wage limit, paycheck bigger end of year, Social Security cap 2026',
  openGraph: {
    type: 'article',
    url: '/blog/social-security-wage-base-2026',
    images: [{ url: '/og/blog/social-security-wage-base-2026', width: 1200, height: 630 }],
    title: 'The Social Security Wage Base: What Happens When You Hit the $184,500 Cap in 2026',
    description:
      'Social Security tax stops once your wages hit $184,500. Here\'s exactly when the cap kicks in and how much extra you keep per paycheck.',
  },
}

export default function SocialSecurityWageBase2026() {
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
          aria-label="Social Security wage base cap illustration showing income progress toward $184,500"
        >
          <rect width="600" height="200" rx="12" fill="#2563eb" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Progress bar label */}
          <text x="300" y="52" textAnchor="middle" fontSize="13" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">
            2026 SOCIAL SECURITY WAGE BASE
          </text>
          {/* Progress bar track */}
          <rect x="40" y="62" width="520" height="28" rx="6" fill="rgba(255,255,255,0.15)" />
          {/* Progress bar fill — 78% full (representing ~$144K / $184.5K) */}
          <rect x="40" y="62" width="406" height="28" rx="6" fill="rgba(255,255,255,0.55)" />
          {/* Cap marker */}
          <line x1="560" y1="55" x2="560" y2="100" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeDasharray="4 2" />
          <text x="560" y="110" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">CAP</text>
          {/* Dollar labels */}
          <text x="40" y="108" textAnchor="start" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">$0</text>
          <text x="560" y="108" textAnchor="end" fontSize="10" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">$184,500</text>
          {/* Below: two boxes */}
          <rect x="40" y="122" width="240" height="44" rx="6" fill="rgba(255,255,255,0.12)" />
          <text x="160" y="140" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Below cap</text>
          <text x="160" y="157" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">6.2% SS deducted</text>
          <rect x="320" y="122" width="240" height="44" rx="6" fill="rgba(255,255,255,0.22)" />
          <text x="440" y="140" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Above cap</text>
          <text x="440" y="157" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">SS stops — bigger paycheck!</text>
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
        The Social Security Wage Base: What Happens When You Hit the $184,500 Cap in 2026
      </h1>

      <ArticleMeta slug="social-security-wage-base-2026" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn above <strong>$184,500</strong> in 2026, something unusual happens to your paycheck around mid-to-late fall: the Social Security deduction disappears. Your take-home pay jumps by anywhere from $477 to $596 per biweekly check &mdash; with no change to your salary. That&rsquo;s the <strong>Social Security wage base</strong> at work.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The wage base is the maximum amount of earnings subject to Social Security tax each year. Once your year-to-date wages cross that line, the 6.2% Social Security deduction stops for the rest of the calendar year &mdash; automatically, every year. Here&rsquo;s exactly how it works, when it kicks in at your salary level, and how much extra you can expect to keep.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is the Social Security Wage Base?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The <strong>Social Security wage base</strong> (officially called the Contribution and Benefit Base) is the annual earnings ceiling set by the Social Security Administration (SSA). In <strong>2026</strong>, that ceiling is <strong>$184,500</strong>.{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Contribution and Benefit Base)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Social Security tax &mdash; officially called OASDI (Old-Age, Survivors, and Disability Insurance) &mdash; is charged at <strong>6.2%</strong> on every dollar of wages up to that limit. Above it, no Social Security tax applies. The math:
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
        Maximum SS tax in 2026: $184,500 &times; 6.2% = <strong>$11,439.00</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        No matter how high your salary &mdash; $300,000, $500,000, or more &mdash; you never pay Social Security tax on anything above $184,500. The maximum any worker contributes in 2026 is <strong>$11,439.00</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note that <strong>Medicare tax has no such cap</strong>. The 1.45% Medicare deduction continues on every dollar you earn, all year long. And if you earn above $200,000, an Additional Medicare Tax of 0.9% also kicks in on wages above that threshold.{' '}
        <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 751)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Does the Wage Base Exist?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Social Security was designed as an earnings-based insurance program, not a general tax. Because Social Security benefits are tied to your lifetime earnings record, the system caps both the tax you pay <em>and</em> the credits you can accumulate. There&rsquo;s no point taxing earnings that won&rsquo;t generate higher benefits.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The SSA adjusts the wage base each year based on average national wage growth. When wages rise, more income becomes taxable &mdash; which helps keep the Social Security trust fund funded as benefit obligations grow.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here&rsquo;s how the wage base has climbed in recent years:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Wage Base</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Year-over-Year Change</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['2022', '$147,000', '—'],
              ['2023', '$160,200', '+$13,200'],
              ['2024', '$168,600', '+$8,400'],
              ['2025', '$176,100', '+$7,500'],
              ['2026', '$184,500', '+$8,400'],
            ].map(([year, base, change], i) => (
              <tr key={year} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: i === 4 ? '#1e293b' : '#475569', fontWeight: i === 4 ? 700 : 400 }}>{year}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: i === 4 ? '#1e293b' : '#475569', fontWeight: i === 4 ? 700 : 400 }}>{base}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>{change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Sources:{' '}
        <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          SSA.gov &mdash; Contribution and Benefit Base history
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        When Does Social Security Tax Stop in 2026?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The answer depends entirely on your salary and pay frequency. Your employer tracks your year-to-date (YTD) wages, and the moment the running total crosses $184,500, Social Security withholding stops for the rest of the year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most workers paid on a <strong>biweekly</strong> schedule (26 pay periods per year), here&rsquo;s roughly when the cap hits:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gross per Check</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>SS Stops After Check #</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Approx. Month</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$200,000', '$7,692', '24', 'Late November'],
              ['$225,000', '$8,654', '22', 'Late October'],
              ['$250,000', '$9,615', '20', 'Early October'],
              ['$300,000', '$11,538', '17', 'Late August'],
              ['$400,000', '$15,385', '13', 'Late June'],
            ].map(([salary, gross, check, month], i) => (
              <tr key={salary} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{salary}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{gross}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#2563eb', fontWeight: 700 }}>{check}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Assumes first paycheck on or around January 10. Exact check number depends on your employer&rsquo;s pay schedule.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: $200,000 Salary — Exactly What Changes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Let&rsquo;s walk through the math for a single worker in <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> (no state income tax) earning <a href="/texas/200000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$200,000 per year</a>, paid biweekly.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>Step 1: Gross pay per biweekly check</strong>
      </p>
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        $200,000 &divide; 26 pay periods = <strong>$7,692.31 per check</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>Step 2: Normal SS deduction per check (while below the cap)</strong>
      </p>
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
        }}
      >
        $7,692.31 &times; 6.2% = <strong>$476.92 per check</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>Step 3: Find when wages cross $184,500</strong>
      </p>
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        After check 23: 23 &times; $7,692.31 = $176,923.08 (still below cap)<br />
        After check 24: $176,923.08 + $7,692.31 = $184,615.38 (over cap!)<br /><br />
        SS applies to check 24 wages only up to: $184,500 &minus; $176,923.08 = $7,576.92<br />
        SS on check 24: $7,576.92 &times; 6.2% = <strong>$469.77</strong> (partial deduction)
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '0.75rem' }}>
        <strong>Step 4: Checks 25 and 26 — no more Social Security</strong>
      </p>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Starting with check 25 (approximately late November), there is <strong>zero Social Security deduction</strong>. Each of those final two checks brings in an extra <strong>$476.92</strong> compared to earlier in the year &mdash; a combined year-end boost of about <strong>$953.84</strong> in take-home pay, just from the SS cap.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For context, see the{' '}
        <a href="/texas/200000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          full $200,000 take-home breakdown for Texas
        </a>{' '}
        (which reflects the annual average, smoothing out the mid-year cap effect).
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Much Extra Do You Keep After Hitting the Cap?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The savings depend on your salary and how many full SS-free checks you get in the year. Here&rsquo;s a comparison (biweekly pay, SS-free checks only, not counting the partial check where the cap is crossed):
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>SS per Normal Check</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Full SS-Free Checks</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Year-End SS Savings</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$200,000', '$477', '2', '~$953'],
              ['$225,000', '$536', '4', '~$2,144'],
              ['$250,000', '$596', '6', '~$3,577'],
              ['$300,000', '$715', '9', '~$6,438'],
              ['$400,000', '$954', '13', '~$12,396'],
            ].map(([salary, ssCheck, freeChecks, savings], i) => (
              <tr key={salary} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{salary}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>{ssCheck}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{freeChecks}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 700 }}>{savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Approximate figures. Exact savings include the partial check at the cap crossing and may vary slightly by pay schedule.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does Medicare Tax Also Stop at the Cap?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>No &mdash; Medicare tax never stops.</strong> The 1.45% Medicare deduction applies to every dollar of wages you earn all year, with no annual ceiling. There is no Medicare &ldquo;wage base.&rdquo;
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In fact, high earners pay <em>more</em> Medicare tax above the SS cap. Once your wages exceed $200,000 in a calendar year, an <strong>Additional Medicare Tax of 0.9%</strong> kicks in on every dollar above that amount.{' '}
        <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 560)
        </a>{' '}
        So while the SS savings are real, Medicare never gives you the same kind of mid-year break.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, someone earning $250,000 in <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a> sees their October paychecks get bigger from the SS cap clearing &mdash; but their Medicare line actually <em>increases</em> at the $200,000 mark by 0.9% of every additional dollar. See the{' '}
        <a href="/california/250000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          $250,000 California take-home breakdown
        </a>{' '}
        for the full annual picture.
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What About Self-Employed Workers?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed individuals pay <strong>both halves</strong> of Social Security tax &mdash; the full 12.4% &mdash; because there is no employer covering the other side. But the same $184,500 wage base applies. The maximum self-employment Social Security tax in 2026 is:
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
        $184,500 &times; 12.4% = <strong>$22,878.00</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Self-employed workers can deduct the employer-equivalent half (6.2% on income up to $184,500, or $11,439.00) as an above-the-line deduction when calculating their adjusted gross income &mdash; which partially offsets the hit.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Self-Employment Tax)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For a deep dive on how this works, see our guide to{' '}
        <a href="/blog/self-employment-tax-freelancers" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          self-employment tax for freelancers
        </a>.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Does My Paycheck Suddenly Look Bigger in Fall?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is one of the most common payroll surprises for higher-income workers. Around September, October, or November &mdash; depending on your salary &mdash; you might notice your net pay jump by $400 to $1,000 per check, even though your gross pay hasn&rsquo;t changed at all.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That&rsquo;s the SS wage base in action. Your payroll department doesn&rsquo;t need to do anything special &mdash; payroll software automatically tracks your year-to-date OASDI wages and stops the withholding once you cross the threshold.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The effect reverses every January 1. Your year-to-date counter resets to zero, and the 6.2% Social Security deduction starts again from your very first paycheck of the new year. So if you noticed &ldquo;extra money&rdquo; in November and December 2025, expect it to disappear again in January 2026 &mdash; not because of any change to tax law, but because the annual clock restarted.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You can always double-check what&rsquo;s been withheld so far by looking at the <strong>YTD (year-to-date)</strong> column on your pay stub, or by reviewing Box 4 (Social Security withheld) on your W-2. For a full explainer on reading every line on your pay stub, see our{' '}
        <a href="/blog/how-to-read-your-pay-stub" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          pay stub guide
        </a>.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does the Wage Base Affect Your Social Security Benefits?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yes &mdash; but only slightly. Your eventual Social Security retirement benefit is calculated using your 35 highest-earning years, indexed for inflation. The wage base determines the maximum earnings credited to your record in any year. In 2026, the SSA will credit up to $184,500 of your earnings toward your benefit calculation, even if you earned more.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In practical terms, most workers earn below the wage base their entire careers, so it never limits their benefit. For the rare worker who consistently earns above the cap, their benefit is determined by the cap, not their actual full earnings.{' '}
        <a href="https://www.ssa.gov/oact/cola/Benefits.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (SSA.gov &mdash; Benefit Calculations)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Related reading: our guide to{' '}
        <a href="/blog/fica-taxes-explained" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          FICA taxes (Social Security and Medicare)
        </a>{' '}
        covers what you actually get back in retirement and disability benefits for every dollar you pay in.
      </p>

      {/* The Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you earn above <strong>$184,500</strong> in 2026, Social Security tax stops once you cross that threshold &mdash; and your take-home pay jumps accordingly. The maximum SS you can pay this year is $11,439.00 (6.2% of $184,500), no matter your total earnings.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Medicare has no equivalent cap &mdash; it runs all year at 1.45%, with an extra 0.9% above $200,000. And every January 1, the whole cycle resets.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For workers who plan their cash flow carefully, knowing which paycheck will be the first SS-free one &mdash; and how much larger it will be &mdash; can help with end-of-year financial planning: accelerating an IRA contribution, making an extra mortgage payment, or simply knowing why the deposit looks bigger than usual.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Full Paycheck Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to see exactly how much goes to Social Security, Medicare, federal income tax, and state tax &mdash; and what you actually take home each paycheck.
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
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            SSA.gov &mdash; Contribution and Benefit Base (2022&ndash;2026 wage base history)
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS Topic 751 &mdash; Social Security and Medicare Withholding Rates
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc560" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS Topic 560 &mdash; Additional Medicare Tax
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS &mdash; Self-Employment Tax (Social Security and Medicare Taxes)
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/Benefits.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            SSA.gov &mdash; Primary Insurance Amount (Benefit Calculations)
          </a>
        </li>
      </ul>

      <ArticleFooter current="social-security-wage-base-2026" />
    </article>
  )
}
