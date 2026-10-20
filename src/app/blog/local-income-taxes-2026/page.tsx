import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'

export const metadata: Metadata = {
  title: 'Local Income Taxes: How NYC, Philadelphia, and City Taxes Affect Your Paycheck (2026)',
  description:
    'NYC city tax costs $2,000–$2,800 a year on a $70,000 salary. Philadelphia\'s wage tax hits commuters too. Here\'s how local income taxes work and what you actually owe.',
  alternates: { canonical: '/blog/local-income-taxes-2026' },
  keywords:
    'local income tax 2026, NYC city tax, Philadelphia wage tax 2026, Ohio municipal income tax, city income tax paycheck, local tax withholding, city tax on paycheck, local income tax by state',
  openGraph: {
    title: 'Local Income Taxes: How NYC, Philadelphia, and City Taxes Affect Your Paycheck (2026)',
    description:
      'NYC city tax costs $2,000–$2,800 a year on a $70,000 salary. Philadelphia\'s wage tax hits commuters too. Here\'s exactly how local income taxes work.',
  },
}

export default function LocalIncomeTaxes2026() {
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
          aria-label="City skyline illustration representing local income taxes"
        >
          <rect width="600" height="200" rx="12" fill="#be185d" />
          {/* City skyline silhouette */}
          <rect x="30" y="110" width="40" height="70" rx="2" fill="rgba(255,255,255,0.15)" />
          <rect x="38" y="95" width="24" height="15" rx="1" fill="rgba(255,255,255,0.15)" />
          <rect x="80" y="90" width="55" height="90" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="90" y="76" width="35" height="14" rx="1" fill="rgba(255,255,255,0.2)" />
          <rect x="98" y="66" width="19" height="10" fill="rgba(255,255,255,0.15)" />
          <rect x="145" y="105" width="45" height="75" rx="2" fill="rgba(255,255,255,0.15)" />
          <rect x="200" y="75" width="65" height="105" rx="2" fill="rgba(255,255,255,0.25)" />
          <rect x="210" y="60" width="45" height="15" rx="1" fill="rgba(255,255,255,0.2)" />
          <rect x="228" y="48" width="9" height="12" fill="rgba(255,255,255,0.3)" />
          <rect x="275" y="100" width="40" height="80" rx="2" fill="rgba(255,255,255,0.15)" />
          <rect x="325" y="85" width="55" height="95" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="335" y="70" width="35" height="15" rx="1" fill="rgba(255,255,255,0.2)" />
          <rect x="390" y="110" width="35" height="70" rx="2" fill="rgba(255,255,255,0.15)" />
          <rect x="435" y="80" width="50" height="100" rx="2" fill="rgba(255,255,255,0.25)" />
          <rect x="445" y="68" width="30" height="12" rx="1" fill="rgba(255,255,255,0.2)" />
          <rect x="495" y="100" width="40" height="80" rx="2" fill="rgba(255,255,255,0.15)" />
          <rect x="545" y="115" width="35" height="65" rx="2" fill="rgba(255,255,255,0.15)" />
          {/* Ground */}
          <rect x="0" y="178" width="600" height="22" rx="0" fill="rgba(0,0,0,0.25)" />
          {/* Tax labels floating above buildings */}
          <text x="107" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">NYC 3.88%</text>
          <text x="232" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">PHILLY 3.74%</text>
          <text x="352" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">COLUMBUS 2.5%</text>
          <text x="460" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">DETROIT 2.4%</text>
          {/* Title */}
          <text x="300" y="170" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">LOCAL INCOME TAXES</text>
          <text x="300" y="188" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">The hidden third layer on your paycheck</text>
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
        Local Income Taxes: How NYC, Philadelphia, and City Taxes Affect Your Paycheck (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published October 20, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        You already know about federal income tax and state income tax. But roughly <strong>4,700 cities, counties, and school districts</strong> in the United States charge their own income tax on top of both. If you live or work in New York City, Philadelphia, Columbus, Detroit, or dozens of other places, a third line item quietly drains your paycheck every pay period &mdash; and many workers never notice it until they see their first pay stub or owe a surprise balance at tax time.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On a <strong>$70,000 salary in New York City</strong>, the NYC resident tax costs roughly $2,400&ndash;$2,800 per year &mdash; about $100 out of every biweekly paycheck, before federal and state taxes are even counted. This guide explains which jurisdictions have local taxes, exactly how they are calculated, and what to do if you live and work in different cities.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Are Local Income Taxes?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>local income tax</strong> is a tax levied by a city, county, township, or school district on the earned income of workers and residents. It is separate from federal income tax (which goes to the IRS) and state income tax (which goes to the state). Local income taxes fund city services like police, fire departments, roads, and public schools.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most local income taxes are <strong>flat rates</strong> applied to wages and salaries &mdash; simpler than the graduated federal bracket system. Some apply only to people who live in the city (residents). Others apply to everyone who <em>works</em> there, regardless of where they sleep at night (nonresidents too). A few states &mdash; particularly Pennsylvania &mdash; require <em>nearly every municipality</em> to run its own earned income tax.
      </p>

      {/* States table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which States Have Significant Local Income Taxes?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Local income taxes are not uniform across the country. Most states have none at all. These eight states have the most widespread local tax systems:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Major Localities</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Typical Rate Range</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Who Pays</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['New York', 'NYC, Yonkers', '1.4%–3.9%', 'Residents only'],
              ['Pennsylvania', 'Philadelphia + ~3,000 municipalities', '1%–3.74%', 'Residents + workers'],
              ['Ohio', '600+ municipalities incl. Columbus, Cleveland', '1%–3%', 'Residents + workers'],
              ['Michigan', 'Detroit + ~23 cities', '1%–2.4%', 'Residents + workers'],
              ['Maryland', 'All counties + Baltimore City', '2.25%–3.2%', 'Residents only (surcharge)'],
              ['Indiana', 'All 92 counties', '0.5%–3.38%', 'Residents only (surcharge)'],
              ['Missouri', 'Kansas City, St. Louis', '1%', 'Residents + workers'],
              ['Kentucky', 'Most cities and counties', '1%–2.5%', 'Residents + workers'],
            ].map(([state, localities, rate, who], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{localities}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Rate ranges are approximate and may vary by year. Always verify your specific locality&rsquo;s current rate with your employer or the jurisdiction&rsquo;s official website.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you do not live or work in any of these states, you almost certainly pay no local income tax. California, Texas, Florida, and most other states do not allow cities to levy income taxes on wages.{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas residents</a> and{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida residents</a> pay zero state <em>or</em> local income tax &mdash; a meaningful advantage that shows up clearly in take-home pay comparisons.
      </p>

      {/* NYC Section */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Much Does NYC City Tax Actually Cost You?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        New York City charges a <strong>resident income tax</strong> on top of the New York State income tax. It uses four brackets, ranging from 3.078% to 3.876%, applied to your NYC taxable income. Critically, <strong>only people who live in New York City pay the NYC tax</strong>. If you commute into Manhattan from New Jersey or Connecticut, you do not owe city tax &mdash; just state tax.{' '}
        <a href="https://www.tax.ny.gov/pit/file/it201.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (NY Department of Taxation and Finance)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The 2026 NYC resident income tax brackets for single filers are:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>NYC Taxable Income</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>NYC Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$0 – $12,000', '3.078%'],
              ['$12,001 – $25,000', '3.762%'],
              ['$25,001 – $50,000', '3.819%'],
              ['Over $50,000', '3.876%'],
            ].map(([range, rate], i) => (
              <tr key={range} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{range}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#be185d', fontWeight: 600 }}>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Worked example: $70,000 salary, single NYC resident</strong>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        NYC taxable income is based on your New York State taxable income (after NY standard deduction and NY adjustments). For a straightforward single filer earning $70,000 in wages with no other adjustments, the approximate NYC city tax calculation looks like this:
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.9,
        }}
      >
        3.078% &times; $12,000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= &nbsp;$369.36<br />
        3.762% &times; $13,000 ($12,001–$25,000) = &nbsp;$489.06<br />
        3.819% &times; $25,000 ($25,001–$50,000) = &nbsp;$954.75<br />
        3.876% &times; $20,000 ($50,001–$70,000) = &nbsp;$775.20<br />
        <strong>Approximate NYC city tax: $2,588.37 / year</strong><br />
        Per biweekly paycheck (26): <strong>~$99.55</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In practice, your NYC taxable income is reduced by the New York State standard deduction and any NY-specific adjustments, so your actual city tax will be somewhat lower &mdash; typically in the $2,000&ndash;$2,500 range on a $70,000 salary. But even at the low end, that is real money coming out of every check. Use the{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York paycheck calculator</a> or see what a{' '}
        <a href="/new-york/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000 salary looks like in New York</a> after all layers of tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Yonkers residents pay a smaller city tax (about 1.4% of net state tax), and nonresidents who work in Yonkers pay a 0.5% earnings tax &mdash; much less than the NYC levy.
      </p>

      {/* Philadelphia Section */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Does the Philadelphia Wage Tax Work?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Philadelphia&rsquo;s <strong>Wage Tax</strong> is one of the oldest city income taxes in the country and one of the few that applies to both residents <em>and</em> nonresidents who earn income within city limits. If you live in Philadelphia, you pay the resident rate on all your wages &mdash; even if you commute to the suburbs for work. If you live outside Philadelphia but work there, you pay the lower nonresident rate on wages earned inside city limits.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Effective July 1, 2026, the City of Philadelphia rates are:{' '}
        <a href="https://www.phila.gov/services/payments-assistance-taxes/taxes/business-taxes/business-taxes-by-type/wage-tax-employers/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (City of Philadelphia &mdash; Wage Tax)
        </a>
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Residents:</strong> 3.735%</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Nonresidents</strong> (work in Philadelphia, live elsewhere): 3.425%</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Worked example: $65,000 salary</strong>
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.9,
        }}
      >
        Resident:&nbsp;&nbsp;&nbsp;&nbsp;$65,000 &times; 3.735% = <strong>$2,427.75/year</strong> ($93.38 per biweekly check)<br />
        Nonresident: $65,000 &times; 3.425% = <strong>$2,226.25/year</strong> ($85.62 per biweekly check)<br />
        Difference: <strong>$201.50/year</strong> more for living inside city limits
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The Philadelphia Wage Tax applies to <strong>all compensation</strong> including salary, hourly wages, bonuses, commissions, and tips earned within city limits. There is no standard deduction and no income threshold &mdash; the first dollar earned is taxable. Employers are required to withhold and remit it on your behalf, so it should appear on your pay stub automatically.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Pennsylvania also has a statewide Earned Income Tax (EIT) that applies to virtually every other municipality. Rates vary by school district and municipality &mdash; typically between 1% and 2% &mdash; and are administered by local tax collectors or the{' '}
        <a href="https://munstats.pa.gov/Public/FindEITRate.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Pennsylvania Municipal Statistics EIT lookup tool
        </a>.
        See the{' '}
        <a href="/pennsylvania" style={{ color: '#2563eb', textDecoration: 'underline' }}>Pennsylvania paycheck calculator</a> for state tax estimates.
      </p>

      {/* Ohio Section */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Ohio&rsquo;s 600+ Municipal Income Taxes
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Ohio has one of the most fragmented local tax systems in the country. More than 600 municipalities levy their own income tax on wages. The largest cities charge 2.5%:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Columbus:</strong> 2.5% on all wages earned within city limits (residents and workers)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Cleveland:</strong> 2.5%</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Akron and Dayton:</strong> 2.5%</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Toledo:</strong> 2.25%</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Cincinnati:</strong> approximately 1.8%&ndash;2.1% (verify with the city)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        <strong>Worked example: $60,000 salary, working in Columbus</strong>
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          color: '#1e293b',
          lineHeight: 1.9,
        }}
      >
        $60,000 &times; 2.5% = <strong>$1,500.00/year</strong><br />
        Per biweekly paycheck (26): <strong>$57.69</strong><br />
        Per monthly paycheck (12): <strong>$125.00</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Ohio municipal taxes apply to wages earned <em>within</em> the city limits, so if you live in a Columbus suburb but commute into Columbus for work, you owe the 2.5% Columbus tax. Your suburb may also have its own municipal tax &mdash; but most Ohio cities offer a <strong>resident credit</strong> of up to 100% of what you paid to another municipality, so you generally don&rsquo;t pay double. Use the{' '}
        <a href="/ohio" style={{ color: '#2563eb', textDecoration: 'underline' }}>Ohio paycheck calculator</a> for a state-level estimate, and check with your employer or{' '}
        <a href="https://www.ritaohio.com/Individuals" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>RITA (Regional Income Tax Agency)</a>{' '}
        for your specific municipal rate.
      </p>

      {/* Resident vs. nonresident / multi-city section */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens if You Live and Work in Different Cities?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is where local tax gets complicated. The general rule is that you can owe local tax in <strong>two places simultaneously</strong>: where you live (your resident jurisdiction) and where you work (your work jurisdiction). Many localities handle this through a <strong>resident credit</strong> &mdash; if you pay tax to your work city, your home city gives you a credit so you aren&rsquo;t taxed twice on the same income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But the credit is not always 100%, and not every city extends one. The practical result:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>NYC:</strong> The city tax applies only to residents. If you live in New Jersey and commute to Manhattan, you pay zero NYC city tax. If you move into the city, you suddenly owe 3.078%&ndash;3.876% on top of your existing NY State tax &mdash; a significant reason why many workers choose to live across the state line. For more on how state relocation affects your taxes, see our guide on{' '}
          <a href="/blog/moving-for-a-job-state-tax-implications" style={{ color: '#2563eb', textDecoration: 'underline' }}>moving for a job: state tax implications</a>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Philadelphia:</strong> Nonresidents who work in the city pay 3.425% on wages earned there, but Pennsylvania&rsquo;s Act 32 (EIT) requires your home municipality to credit the Philadelphia tax against your local EIT. In most cases, if you live in a suburban township with a 1% EIT, you owe nothing additional to your home municipality because the Philly tax exceeds 1%.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Ohio:</strong> Most cities allow a resident credit up to 100% of the work-city tax. A Columbus resident who pays 2.5% to Columbus owes nothing to their home suburb (if the suburb rate is equal or lower). However, some cities cap the credit at 1% or less, leaving a gap you must pay to your home city.
        </li>
      </ul>

      {/* Remote work angle */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Do Remote Workers Owe City Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Remote work has created real complexity for local taxes. The general rule is that you owe local tax where you <em>physically perform</em> the work &mdash; not where your employer is located. If you live in Philadelphia and work remotely, you owe Philadelphia&rsquo;s resident wage tax on all your wages even if your employer is based in New York.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        New York is notable for its <strong>&ldquo;convenience of the employer&rdquo;</strong> rule: if you work from home for a NYC-based employer for your own convenience (not because the employer requires it), New York State may still tax those wages. However, the NYC resident tax applies only to city residents, so a remote worker living in, say, New Jersey does not owe NYC city tax regardless of where their employer is. Our guide to{' '}
        <a href="/blog/remote-work-and-state-taxes" style={{ color: '#2563eb', textDecoration: 'underline' }}>remote work and state taxes</a> covers these rules in detail.
      </p>

      {/* How it appears on pay stub */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Does Local Tax Appear on Your Pay Stub?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Local taxes show up differently depending on the payroll software your employer uses. Common labels include:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>CITY TAX</strong> or <strong>LOCAL TAX</strong> (generic label)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>NYC</strong>, <strong>PHILA WT</strong>, <strong>CLMBS</strong> (city abbreviation)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>PA EIT</strong> or <strong>EIT</strong> (Pennsylvania earned income tax)</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>LOCAL</strong> followed by a jurisdiction code number</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you see an unfamiliar deduction on your pay stub and are unsure what it covers, ask your HR or payroll department for the jurisdiction name and rate. You are entitled to know exactly what is being withheld. For a full walkthrough of every line on your pay stub, see our guide{' '}
        <a href="/blog/how-to-read-your-pay-stub" style={{ color: '#2563eb', textDecoration: 'underline' }}>how to read your pay stub</a>.
      </p>

      {/* How to find out if you owe */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Do You Find Out if You Owe Local Income Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Four quick steps to determine whether you have a local tax obligation:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check your state.</strong> If you live and work in California, Texas, Florida, Illinois, Georgia, or most other states that do not allow municipal income taxes, you have no local tax obligation.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check your pay stub.</strong> If your employer is already withholding local tax, the job is done &mdash; just verify the amount looks correct for your city&rsquo;s rate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Search your city&rsquo;s official website.</strong> Search for &ldquo;[your city] income tax&rdquo; or &ldquo;[your city] wage tax.&rdquo; Official government pages (.gov) are the authoritative source.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Pennsylvania residents: use the EIT lookup.</strong> The{' '}
          <a href="https://munstats.pa.gov/Public/FindEITRate.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            PA Municipal Statistics EIT Rate Lookup
          </a>{' '}
          lets you enter your address and find the exact combined EIT rate for your school district and municipality.
        </li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your employer is <em>not</em> withholding local tax and you believe you owe it, you may need to make estimated payments or file a local return yourself. Underpaying local tax can result in interest and penalties &mdash; just like federal and state underpayment. This is a common issue for new residents who move into a taxing jurisdiction mid-year. For context on how federal and state taxes work together, see our overview of{' '}
        <a href="/blog/state-vs-federal-tax" style={{ color: '#2563eb', textDecoration: 'underline' }}>state vs. federal income tax</a>.
      </p>

      {/* Summary callout */}
      <div
        style={{
          background: '#fff1f2',
          border: '1px solid #fda4af',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
          Quick Reference: Local Tax Costs at $65,000 Salary
        </p>
        <ul style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: 0 }}>
          <li><strong>NYC resident:</strong> ~$2,100&ndash;$2,400/year (&asymp; $82&ndash;$92/biweekly check)</li>
          <li><strong>Philadelphia resident:</strong> $2,427.75/year ($93.38/biweekly)</li>
          <li><strong>Philadelphia commuter (nonresident):</strong> $2,226.25/year ($85.62/biweekly)</li>
          <li><strong>Columbus, OH worker:</strong> $1,625/year ($62.50/biweekly)</li>
          <li><strong>Texas, Florida, or California worker:</strong> $0/year in local income tax</li>
        </ul>
      </div>

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
          See Your Full Paycheck Breakdown
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see exactly how much goes to federal tax, state tax, Social Security, and Medicare &mdash; and what lands in your bank account.
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
          <a href="https://www.phila.gov/services/payments-assistance-taxes/taxes/business-taxes/business-taxes-by-type/wage-tax-employers/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>City of Philadelphia &mdash; Wage Tax (Employers), current rates effective July 1, 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.tax.ny.gov/pit/file/it201.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>NY Department of Taxation and Finance &mdash; Resident Income Tax Return (IT-201)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.nyc.gov/site/finance/taxes/personal-income-tax.page" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>NYC Department of Finance &mdash; Personal Income Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ritaohio.com/Individuals" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>RITA Ohio &mdash; Regional Income Tax Agency (Ohio municipal tax)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://munstats.pa.gov/Public/FindEITRate.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Pennsylvania Municipal Statistics &mdash; EIT Rate Lookup Tool</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc503" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 503: Deductible Taxes (deducting local income taxes on Schedule A)</a>
        </li>
      </ul>

      <ArticleFooter current="local-income-taxes-2026" />
    </article>
  )
}
