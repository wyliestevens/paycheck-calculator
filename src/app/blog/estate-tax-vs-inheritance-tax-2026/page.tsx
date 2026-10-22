import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Estate Tax vs. Inheritance Tax: Who Pays, What\'s Exempt, and What You Owe (2026)' },
  description:
    'Most heirs pay zero tax on inherited money. Here\'s how the federal estate tax, state estate taxes, and inheritance taxes actually work in 2026 — with real examples.',
  alternates: { canonical: '/blog/estate-tax-vs-inheritance-tax-2026' },
  keywords:
    'estate tax vs inheritance tax, do I pay taxes on inherited money, inheritance tax 2026, federal estate tax exemption 2026, estate tax states, inheritance tax states, inherited IRA taxes',
  openGraph: {
    type: 'article',
    url: '/blog/estate-tax-vs-inheritance-tax-2026',
    images: [{ url: '/og/blog/estate-tax-vs-inheritance-tax-2026', width: 1200, height: 630 }],
    title: 'Estate Tax vs. Inheritance Tax: Who Pays, What\'s Exempt, and What You Owe (2026)',
    description:
      'Most heirs pay zero tax on inherited money. Here\'s how the federal estate tax, state estate taxes, and inheritance taxes actually work in 2026.',
  },
}

export default function EstateTaxVsInheritanceTax() {
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
          aria-label="Estate and inheritance tax illustration"
        >
          <rect width="600" height="200" rx="12" fill="#4f46e5" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* Left: House/estate icon */}
          <g transform="translate(70, 60)">
            <polygon points="50,0 100,50 0,50" fill="rgba(255,255,255,0.25)" />
            <rect x="15" y="50" width="70" height="50" fill="rgba(255,255,255,0.2)" />
            <rect x="35" y="65" width="20" height="35" fill="rgba(255,255,255,0.35)" />
          </g>
          <text x="120" y="160" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Estate</text>

          {/* Arrow right */}
          <line x1="185" y1="100" x2="235" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="235,93 250,100 235,107" fill="rgba(255,255,255,0.5)" />

          {/* Middle: IRS / tax box */}
          <rect x="255" y="68" width="90" height="64" rx="8" fill="rgba(255,255,255,0.18)" />
          <text x="300" y="98" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">IRS</text>
          <text x="300" y="116" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Estate Tax</text>

          {/* Arrow right */}
          <line x1="350" y1="100" x2="395" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
          <polygon points="395,93 410,100 395,107" fill="rgba(255,255,255,0.5)" />

          {/* Right: Person/heir icon */}
          <circle cx="450" cy="82" r="18" fill="rgba(255,255,255,0.25)" />
          <rect x="430" y="103" width="40" height="30" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="450" y="155" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Heir</text>

          {/* State label */}
          <rect x="495" y="68" width="80" height="35" rx="6" fill="rgba(255,255,255,0.15)" />
          <text x="535" y="82" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">+ State</text>
          <text x="535" y="96" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Inherit. Tax</text>
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
        Estate Tax vs. Inheritance Tax: Who Pays, What&rsquo;s Exempt, and What You Owe (2026)
      </h1>

      <ArticleMeta slug="estate-tax-vs-inheritance-tax-2026" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When a family member passes away and leaves you money, your first question is often: <strong>Do I owe taxes on this?</strong> The short answer for most Americans is no &mdash; but the full answer is more nuanced. There are actually two different types of taxes that can apply when wealth transfers at death: the <strong>estate tax</strong> and the <strong>inheritance tax</strong>. They are not the same thing, and understanding the difference could save you a significant amount of stress (and possibly money).
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains how both taxes work in 2026, who actually pays them, and what inherited money means for your regular income taxes.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Key Difference: Estate Tax vs. Inheritance Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These two terms are often used interchangeably, but they are legally distinct:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Estate tax</strong> is paid by the <em>estate itself</em> before anything is distributed to heirs. The executor of the estate files the return and pays the tax out of the estate&rsquo;s assets. The heirs receive what is left.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Inheritance tax</strong> is paid by the <em>heir</em> who receives the money or property. Whether you owe it depends on which state the deceased lived in and your relationship to them.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal government has an estate tax but no inheritance tax. A handful of states have inheritance taxes. Maryland is the only state with both.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Federal Estate Tax: The $13.99 Million Threshold
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal estate tax applies only to very large estates. In 2026, the federal exemption is <strong>$13.99 million per person</strong> ($27.98 million for a married couple using portability). If the total value of the estate is below this threshold, no federal estate tax is due &mdash; period.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estate-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Estate Tax)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        For estates above the exemption, the tax rate starts at 18% on the first dollar over the threshold and climbs to <strong>40%</strong> on amounts over $1 million above the exemption. Here is the rate schedule on the taxable portion:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Estate Amount Above Exemption</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Federal Rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['$0 – $10,000', '18%'],
              ['$10,001 – $20,000', '20%'],
              ['$20,001 – $40,000', '22%'],
              ['$40,001 – $60,000', '24%'],
              ['$60,001 – $80,000', '26%'],
              ['$80,001 – $100,000', '28%'],
              ['$100,001 – $150,000', '30%'],
              ['$150,001 – $250,000', '32%'],
              ['$250,001 – $500,000', '34%'],
              ['$500,001 – $750,000', '37%'],
              ['$750,001 – $1,000,000', '39%'],
              ['Over $1,000,000', '40%'],
            ].map(([range, rate], i) => (
              <tr key={range} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{range}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 600 }}>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In practice, fewer than 1% of estates owe any federal estate tax. If your parent leaves you a house worth $400,000 and a $200,000 savings account, that&rsquo;s a $600,000 estate &mdash; well under the $13.99 million threshold. No federal estate tax.
      </p>

      <div
        style={{
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          <strong>Portability:</strong> A surviving spouse can claim any unused exemption from their deceased spouse. If one spouse dies in 2026 with a $5 million estate, the surviving spouse can add the unused $8.99 million ($13.99M &minus; $5M) to their own exemption, giving them a combined $22.98 million exemption.
        </p>
      </div>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Estate Taxes: 12 States Have Their Own
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even if an estate escapes federal estate tax, it may still owe <strong>state estate tax</strong>. Twelve states (plus Washington D.C.) impose their own estate tax, often with much lower exemptions than the federal threshold. The states are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Connecticut ($13.61M exemption, 12% rate)</li>
        <li style={{ marginBottom: '0.5rem' }}>Hawaii ($5.49M exemption, up to 20%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Illinois ($4M exemption, up to 16%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Maine ($6.41M exemption, up to 12%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Maryland ($5M exemption, up to 16%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Massachusetts ($2M exemption, up to 16%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Minnesota ($3M exemption, up to 16%)</li>
        <li style={{ marginBottom: '0.5rem' }}>New York ($7.16M exemption, up to 16%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Oregon ($1M exemption, up to 16%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Rhode Island ($1.77M exemption, up to 16%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Vermont ($5M exemption, up to 16%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Washington state ($2.193M exemption, up to 20%)</li>
        <li style={{ marginBottom: '0.5rem' }}>Washington D.C. ($4M exemption, up to 16%)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Oregon</strong> has the lowest exemption of any state &mdash; just $1 million. That means a modest estate (a home plus some retirement savings) could owe Oregon estate tax even while owing nothing federally. If you live in{' '}
        <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a> or{' '}
        <a href="/washington" style={{ color: '#2563eb', textDecoration: 'underline' }}>Washington state</a>, understanding your state&rsquo;s estate tax threshold is especially important for estate planning.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The other 38 states (including{' '}
        <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>,{' '}
        <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>, and{' '}
        <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>) have <strong>no state estate tax</strong>.{' '}
        <a href="https://taxfoundation.org/data/all/state/does-your-state-have-an-estate-or-inheritance-tax/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Estate &amp; Inheritance Taxes)
        </a>
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Inheritance Taxes: 5 States Still Have Them
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Unlike estate tax (paid by the estate), <strong>inheritance tax is paid by you, the heir</strong>. Whether you owe it depends on where the deceased person lived and your relationship to them. As of 2026, five states have inheritance taxes:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rate Range</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Exempt Heirs</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Kentucky', '4% – 16%', 'Spouses, children, parents, siblings'],
              ['Maryland', '10%', 'Spouses, lineal heirs (children, parents)'],
              ['Nebraska', '1% – 18%', 'Spouses, some close relatives'],
              ['New Jersey', '11% – 16%', 'Spouses, children, parents, grandparents'],
              ['Pennsylvania', '4.5% – 15%', 'Spouses, children (at reduced rate)'],
            ].map(([state, rate, exempt], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 600 }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 600 }}>{rate}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{exempt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A critical point: <strong>most close relatives are exempt</strong> from inheritance taxes even in these five states. In Kentucky, if you inherit from a parent, grandparent, spouse, or child, you owe nothing. The higher inheritance tax rates (12%&ndash;18%) typically hit distant relatives and non-related beneficiaries such as friends or unmarried partners.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Note: Iowa fully repealed its inheritance tax effective January 1, 2025, so it no longer applies in 2026.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Step-Up in Basis: How Inherited Property Is Taxed When You Sell It
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even if you owe no estate or inheritance tax, you may eventually owe <strong>capital gains tax</strong> when you sell inherited property. The key concept here is the <strong>step-up in basis</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you inherit property (a house, stocks, etc.), your cost basis for tax purposes is <strong>reset to the fair market value on the date of death</strong> &mdash; not what the original owner paid for it. This means you only owe capital gains tax on appreciation that occurs <em>after</em> you inherit it.
      </p>

      <div
        style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#1e293b', margin: '0 0 0.75rem 0', fontWeight: 600 }}>
          Example: Inherited House
        </p>
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#475569', margin: 0 }}>
          Your mother bought a house in 1985 for <strong>$80,000</strong>. When she passes in 2026, it is worth <strong>$450,000</strong>. You inherit it. Your stepped-up basis is $450,000. If you sell it immediately for $450,000, you owe <strong>zero</strong> capital gains tax. If you keep it for two years and sell it for $490,000, you only owe capital gains tax on the <strong>$40,000</strong> gain that occurred while you owned it.
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Without the step-up in basis, you would have owed capital gains tax on the full $370,000 increase ($450,000 &minus; $80,000) from your mother&rsquo;s decades of ownership. The step-up is one of the most powerful tax benefits in the U.S. tax code.{' '}
        <a href="https://www.irs.gov/publications/p551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 551 &mdash; Basis of Assets)
        </a>
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Inherited IRAs and 401(k)s: The 10-Year Rule
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Inherited retirement accounts are taxed very differently from inherited cash or property. When you inherit a traditional IRA or 401(k), the money inside has never been taxed &mdash; and the IRS wants its cut when you withdraw it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Under the <strong>SECURE 2.0 Act</strong>, most non-spouse beneficiaries who inherit a retirement account from someone who died in 2020 or later must empty the account within <strong>10 years</strong>. Every dollar you withdraw is added to your regular income and taxed at your marginal income tax rate.
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Surviving spouses</strong> have special options: they can treat the inherited IRA as their own, delay distributions, or use their own Required Minimum Distribution (RMD) schedule.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Minor children</strong> of the deceased have until they reach majority (typically 21) plus 10 years.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Disabled or chronically ill individuals</strong> and heirs no more than 10 years younger than the deceased can stretch distributions over their own life expectancy.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Inherited Roth IRAs</strong> are still subject to the 10-year rule, but withdrawals are tax-free (as long as the Roth was at least 5 years old).
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you inherit a $300,000 traditional IRA and withdraw it evenly over 10 years ($30,000/year), each withdrawal pushes your income up by $30,000 &mdash; potentially bumping you into a higher tax bracket. Strategic planning around when to take distributions can significantly reduce the tax hit.{' '}
        <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-beneficiary" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Retirement Topics &mdash; Beneficiary)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Inheriting $500,000
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s walk through a realistic scenario. Your aunt, a single woman living in <strong>Ohio</strong>, passes away in 2026. She leaves you her entire estate:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Home valued at $280,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Savings account: $80,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Traditional IRA: $140,000</li>
        <li style={{ marginBottom: '0.5rem' }}>Total: $500,000</li>
      </ul>

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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Question</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Answer</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Federal estate tax?', 'No — $500K is far below the $13.99M exemption'],
              ['Ohio state estate tax?', 'No — Ohio repealed its estate tax in 2013'],
              ['Ohio state inheritance tax?', 'No — Ohio has no inheritance tax'],
              ['Tax on the savings account?', 'No — cash is not taxable income when inherited'],
              ['Tax when you sell the house?', 'Only on gains after your inheritance date (step-up basis)'],
              ['Tax on IRA withdrawals?', 'Yes — each withdrawal is ordinary income; must withdraw within 10 years'],
            ].map(([question, answer], i) => (
              <tr key={question} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{question}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' }}>{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In this example, the only real tax exposure is the IRA. If you withdraw $14,000 per year over 10 years and you earn $65,000 from your job, each IRA withdrawal pushes your income to $79,000 &mdash; keeping you in the 22% federal bracket rather than bumping you higher. Total federal tax on the IRA over 10 years: roughly $30,800 (assuming single filer in the 22% bracket for all $140,000).
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is Not Taxable When You Inherit It
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most forms of inheritance are <strong>not included in your gross income</strong> for federal income tax purposes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Cash left to you in a will</li>
        <li style={{ marginBottom: '0.5rem' }}>Property (real estate, vehicles, personal belongings)</li>
        <li style={{ marginBottom: '0.5rem' }}>Stocks and investment accounts (taxed only on future gains)</li>
        <li style={{ marginBottom: '0.5rem' }}>Life insurance death benefits (generally income-tax free)</li>
        <li style={{ marginBottom: '0.5rem' }}>Roth IRA distributions (if the account was at least 5 years old)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The types of inherited assets that <em>do</em> generate income tax are those that contained pre-tax money: traditional IRAs, traditional 401(k)s, and employer pension benefits. These were never taxed when they went in, so the IRS taxes them when they come out &mdash; regardless of who takes the withdrawal.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How the Gift Tax Connects to the Estate Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The federal gift tax and estate tax are part of a single unified transfer tax system. The <strong>$13.99 million lifetime exemption</strong> covers both gifts you make during your lifetime and transfers at death. If you give away $3 million in taxable gifts during your lifetime, only $10.99 million of your estate exemption remains.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, the annual gift tax exclusion &mdash; <strong>$19,000 per recipient in 2026</strong> &mdash; does not count against your lifetime exemption. You can give $19,000 to as many people as you want each year without any gift or estate tax implications. This is a popular estate-planning strategy: give money to children and grandchildren each year to gradually reduce the size of a taxable estate.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Quick Reference: Where You Live Matters
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The tax outcome when you inherit money depends heavily on two states: where the <em>deceased person</em> lived, and (for selling property) where the <em>property is located</em>. Your own state of residence matters primarily if you sell the inherited property and owe state-level capital gains tax.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live in <a href="/illinois" style={{ color: '#2563eb', textDecoration: 'underline' }}>Illinois</a> and inherit from a parent who also lived in Illinois, the estate could owe Illinois state estate tax if it exceeds $4 million. But if your parent lived in <a href="/georgia" style={{ color: '#2563eb', textDecoration: 'underline' }}>Georgia</a> (no state estate or inheritance tax), there is no state-level transfer tax to worry about, regardless of where you live.
      </p>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most Americans, inheriting money triggers no immediate tax bill. Federal estate tax only applies to estates above $13.99 million, and inheritance taxes only exist in five states. The real tax exposure comes later: from capital gains when you sell inherited property, and from income tax on inherited retirement account withdrawals.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are dealing with a large estate, working with a tax attorney or CPA who specializes in estate planning is worth the cost. For most heirs, though, the answer to &ldquo;do I owe taxes on this?&rdquo; is simply: not yet, and maybe not ever.
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
          See Your Take-Home Pay After Taxes
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Curious how your regular paycheck stacks up in your state? Use our free calculator to see your exact take-home pay.
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
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estate-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Estate Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p551" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 551 &mdash; Basis of Assets</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-beneficiary" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Retirement Topics: Beneficiary</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/does-your-state-have-an-estate-or-inheritance-tax/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; Does Your State Have an Estate or Inheritance Tax?</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov &mdash; Contribution and Benefit Base</a>
        </li>
      </ul>

      <ArticleFooter current="estate-tax-vs-inheritance-tax-2026" />
    </article>
  )
}
