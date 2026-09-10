import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Rental Income Is Taxed: A Landlord\'s Guide for 2026',
  description:
    'Rental income is taxable — but landlords can deduct mortgage interest, depreciation, repairs, and more. Here\'s exactly how rental income is taxed in 2026, with a full worked example.',
  alternates: { canonical: '/blog/rental-income-taxes-2026' },
  keywords:
    'rental income taxes 2026, how is rental income taxed, landlord taxes 2026, Schedule E, rental property tax deductions, passive income tax, depreciation rental property, net investment income tax',
  openGraph: {
    title: 'How Rental Income Is Taxed: A Landlord\'s Guide for 2026',
    description:
      'Rental income is taxable — but landlords can deduct mortgage interest, depreciation, repairs, and more. Here\'s exactly how rental income is taxed in 2026.',
  },
}

export default function RentalIncomeTaxes2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Rental income tax illustration showing a house with income and deduction flows"
        >
          <rect width="600" height="200" rx="12" fill="#0f766e" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />

          {/* House shape */}
          <polygon points="120,140 120,80 160,50 200,80 200,140" fill="rgba(255,255,255,0.25)" />
          <rect x="140" y="110" width="40" height="30" rx="2" fill="rgba(255,255,255,0.15)" />
          <polygon points="110,85 160,45 210,85" fill="rgba(255,255,255,0.35)" />

          {/* Arrow right */}
          <line x1="215" y1="100" x2="265" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="265,92 280,100 265,108" fill="rgba(255,255,255,0.6)" />

          {/* Center column: income & deductions */}
          <rect x="285" y="50" width="110" height="28" rx="5" fill="rgba(255,255,255,0.2)" />
          <text x="340" y="69" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Rental Income</text>

          <text x="340" y="100" textAnchor="middle" fontSize="16" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">−</text>

          <rect x="285" y="108" width="110" height="28" rx="5" fill="rgba(255,255,255,0.2)" />
          <text x="340" y="127" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Deductions</text>

          {/* Arrow right */}
          <line x1="405" y1="100" x2="455" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="455,92 470,100 455,108" fill="rgba(255,255,255,0.6)" />

          {/* Net income circle */}
          <circle cx="510" cy="100" r="42" fill="rgba(255,255,255,0.22)" />
          <text x="510" y="95" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Net</text>
          <text x="510" y="110" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Taxable</text>
          <text x="510" y="125" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="sans-serif">Income</text>
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
        How Rental Income Is Taxed: A Landlord&apos;s Guide for 2026
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 10, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Owning a rental property can be a solid way to build wealth. But when rent checks start rolling in, the IRS wants its share. The good news: landlords get some of the most generous deductions in the tax code, which can dramatically reduce &mdash; or even eliminate &mdash; the taxes you owe on rental income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains exactly how rental income is taxed in 2026, which expenses you can deduct, and how passive activity rules affect what you can write off.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Counts as Rental Income?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The IRS counts all payments you receive from tenants as rental income. That includes:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Monthly rent payments</li>
        <li style={{ marginBottom: '0.5rem' }}>Advance rent (first and last month collected upfront)</li>
        <li style={{ marginBottom: '0.5rem' }}>Security deposits kept at the end of tenancy (if not returned)</li>
        <li style={{ marginBottom: '0.5rem' }}>Lease cancellation fees paid by the tenant</li>
        <li style={{ marginBottom: '0.5rem' }}>Services performed by the tenant in lieu of rent (e.g., a tenant paints in exchange for a rent discount &mdash; the fair market value is income)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Security deposits are <em>not</em> income when you receive them, as long as you intend to return them. They only become taxable if you keep them.{' '}
        <a href="https://www.irs.gov/publications/p527" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 527 &mdash; Residential Rental Property)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Rental Income Is Passive &mdash; Not Subject to Self-Employment Tax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is an important distinction. Freelancers and independent contractors pay a <strong>15.3% self-employment tax</strong> on their income on top of regular income tax. Landlords generally do not.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Rental income from a long-term residential lease is classified as <strong>passive income</strong> by the IRS. That means you pay regular federal income tax on your net rental profit, but you do not owe Social Security or Medicare taxes on it.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The exception: if you run a hotel, bed and breakfast, or provide substantial services to tenants (daily cleaning, meals, concierge), the IRS may treat that as a trade or business &mdash; which does trigger self-employment tax.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How to Report It: Schedule E
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Rental income and expenses are reported on <strong>Schedule E (Supplemental Income and Loss)</strong>, which attaches to your federal Form 1040. You fill out a separate column for each rental property you own.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        On Schedule E, you list your total rental income at the top, then subtract all allowable expenses below it. The result is your net rental income (or loss), which flows to your 1040 and is taxed at your ordinary income tax rates.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you own rental property in multiple states, you may also need to file a state return in each state where the property is located &mdash; even if you live elsewhere. For example, if you live in <a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a> but rent out a condo in <a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>, California wants its cut of the rental income.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Rental Deductions: What You Can Write Off
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        This is where landlords catch a major break. The IRS allows you to deduct ordinary and necessary expenses for managing, conserving, and maintaining a rental property. Here are the most common deductions:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Mortgage interest', 'Fully deductible on Schedule E (not limited like the personal home deduction)'],
              ['Property taxes', 'Fully deductible; no SALT cap applies to rental property'],
              ['Insurance premiums', 'Landlord/fire/liability policies covering the rental'],
              ['Repairs & maintenance', 'Fixing a leaky roof, repainting, replacing broken appliances'],
              ['Property management fees', 'Fees paid to a management company'],
              ['Advertising', 'Listing fees, signs, online rental ads'],
              ['Professional services', 'CPA fees, attorney fees related to the rental'],
              ['Travel', 'Mileage or actual costs to visit and manage the property'],
              ['Depreciation', 'Annual deduction for the property wearing out over time (see below)'],
            ].map(([exp, note], i) => (
              <tr key={exp} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b', whiteSpace: 'nowrap' }}>{exp}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Repairs vs. improvements:</strong> There is an important distinction here. A <em>repair</em> (fixing what is broken) is deductible in the year you pay it. An <em>improvement</em> (adding value or extending useful life, like adding a new bathroom) must be <em>capitalized</em> and depreciated over several years. The IRS has safe-harbor rules that allow landlords to immediately expense improvements costing up to <strong>$2,500 per item</strong> without capitalizing them.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/tangible-property-final-regulations" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Tangible Property Final Regulations)
        </a>
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Depreciation: The Landlord&apos;s Secret Weapon
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Depreciation is often the largest deduction available to landlords &mdash; and it is entirely non-cash. You do not write a check for depreciation; the IRS simply lets you deduct a portion of the property&apos;s cost each year to account for wear and tear.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For residential rental property, the IRS uses a <strong>27.5-year straight-line</strong> depreciation schedule. That means you divide the cost of the building (not the land &mdash; land does not depreciate) by 27.5 to get your annual deduction.
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
        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
          Example: Depreciation on a $300,000 Rental Home
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.7, marginBottom: 0 }}>
          Purchase price: $300,000<br />
          Land value (not depreciable): $60,000<br />
          Building value: $240,000<br />
          Annual depreciation: $240,000 &divide; 27.5 = <strong style={{ color: '#059669' }}>$8,727 per year</strong>
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        That $8,727 annual deduction reduces your taxable rental income even though you never spent that money out of pocket. Over 10 years, that is nearly $87,000 in deductions from a single property.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Keep track of every dollar of depreciation you claim. When you eventually sell the property, the IRS will <strong>recapture</strong> the depreciation you took &mdash; taxing it at a special rate of up to <strong>25%</strong>. We will cover that more in the section on selling a rental property below.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Passive Activity Loss Rules: The $25,000 Allowance
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is where things get a little complicated. Because rental income is passive, <strong>rental losses</strong> (when your deductions exceed your income) can normally only offset other passive income. You cannot use a rental loss to offset your salary from a regular job.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, there is an important exception called the <strong>$25,000 special allowance</strong>. If you <em>actively participate</em> in managing your rental (making management decisions like approving tenants, setting rents, and deciding on repairs), you may be able to deduct up to <strong>$25,000 in rental losses</strong> against your ordinary income each year.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The allowance phases out based on your modified adjusted gross income (MAGI):
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Under $100,000 MAGI:</strong> You can deduct up to $25,000 in rental losses.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>$100,000–$150,000 MAGI:</strong> The allowance phases out by $0.50 for every $1 of income above $100,000.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Over $150,000 MAGI:</strong> No passive loss deduction against ordinary income. Losses carry forward to future years.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Real estate professionals</strong> (those who spend more than 750 hours per year and more than half their working time in real estate activities) are not subject to passive activity limits at all. They can deduct unlimited rental losses against ordinary income.{' '}
        <a href="https://www.irs.gov/publications/p925" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Publication 925 &mdash; Passive Activity and At-Risk Rules)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Net Investment Income Tax (NIIT): The 3.8% Surtax
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        High-income landlords face an additional 3.8% tax on their net rental income. The <strong>Net Investment Income Tax (NIIT)</strong> applies to:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Single filers with MAGI over <strong>$200,000</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>Married filing jointly over <strong>$250,000</strong></li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The 3.8% applies to the lesser of your net investment income or the amount by which your MAGI exceeds the threshold. Net rental profit is investment income. Real estate professionals whose rental activities are a trade or business may be able to avoid the NIIT on rental income.{' '}
        <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 559: Net Investment Income Tax)
        </a>
      </p>

      {/* Section 8: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: A Single-Family Rental in Florida
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&apos;s say you own a single-family home in <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a> that you rent for $1,800/month. You earn $75,000 from your regular job. Here is how your rental taxes shake out:
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
              ['Gross rental income (12 × $1,800)', '$21,600', false],
              ['Mortgage interest', '−$9,200', true],
              ['Property taxes', '−$2,800', true],
              ['Insurance', '−$1,400', true],
              ['Repairs & maintenance', '−$900', true],
              ['Depreciation ($220,000 ÷ 27.5)', '−$8,000', true],
              ['Net rental income (taxable)', '$1,300', false],
            ].map(([label, amount, isDeduction], i) => (
              <tr key={label as string} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{label}</td>
                <td style={{
                  padding: '0.625rem 1rem',
                  borderBottom: '1px solid #e2e8f0',
                  textAlign: 'right',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: isDeduction ? '#dc2626' : '#1e293b',
                }}>{amount}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Federal tax owed on rental income (22% bracket)</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>$286</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Even though this landlord collected <strong>$21,600 in rent</strong>, they owe federal tax on only <strong>$1,300</strong> of it &mdash; just $286 in actual tax. Depreciation alone wiped out $8,000 in income. Florida has no state income tax, so there is no state tax owed on the rental profit either.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If the same property were in <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>, the landlord would also owe New York state income tax on that $1,300, plus potentially New York City tax.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Short-Term Rentals (Airbnb, VRBO): Different Rules Apply
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you rent a property for fewer than <strong>15 days per year</strong>, the rental income is completely tax-free. You do not even report it. This is the &ldquo;Augusta rule,&rdquo; named for homeowners who rent during the Masters golf tournament.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you rent for <strong>15 days or more</strong> and you use the property personally for more than 14 days (or 10% of rental days, whichever is greater), the IRS treats it as a <strong>personal residence with rental use</strong>. Your deductions are limited &mdash; you cannot deduct a loss.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you offer substantial services to guests &mdash; daily cleaning, meals, or concierge &mdash; the IRS may treat the income as <strong>self-employment income</strong> subject to the 15.3% SE tax. Most straightforward short-term rentals without services are still treated as passive rental income.
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        When You Sell a Rental Property: Capital Gains and Depreciation Recapture
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Selling a rental property is a taxable event, and two layers of tax apply:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Capital gains tax:</strong> If you owned the property for more than one year, the profit is taxed at long-term capital gains rates (0%, 15%, or 20% depending on your income). The profit is your sale price minus your <em>adjusted cost basis</em> (original purchase price plus improvements, minus depreciation claimed).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Depreciation recapture:</strong> All the depreciation you deducted while you owned the property gets taxed at a flat rate of up to <strong>25%</strong> when you sell. This is called &ldquo;unrecaptured Section 1250 gain.&rdquo; You cannot avoid it &mdash; if you never claimed depreciation, the IRS assumes you did.
        </li>
      </ul>

      <div
        style={{
          background: '#fff7ed',
          border: '1px solid #fed7aa',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
          Quick Example: Selling a Rental After 10 Years
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.7, marginBottom: 0 }}>
          Bought for $300,000. Sold for $450,000 after 10 years.<br />
          Total depreciation claimed: $87,270 (10 years &times; $8,727)<br />
          Adjusted cost basis: $300,000 &minus; $87,270 = $212,730<br />
          Total gain: $450,000 &minus; $212,730 = $237,270<br />
          &bull; $87,270 taxed as <strong style={{ color: '#dc2626' }}>depreciation recapture (up to 25%)</strong><br />
          &bull; $150,000 taxed as <strong style={{ color: '#d97706' }}>long-term capital gains (0%/15%/20%)</strong>
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        One strategy to defer these taxes: a <strong>1031 exchange</strong>. By rolling the sale proceeds into another like-kind investment property within strict IRS timelines, you can defer capital gains and depreciation recapture taxes indefinitely.
      </p>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        State Taxes on Rental Income
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states tax rental income as ordinary income at the same rates they apply to wages. But the rules vary:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>No-income-tax states</strong> (<a href="/texas" style={{ color: '#2563eb', textDecoration: 'underline' }}>Texas</a>, <a href="/florida" style={{ color: '#2563eb', textDecoration: 'underline' }}>Florida</a>, <a href="/nevada" style={{ color: '#2563eb', textDecoration: 'underline' }}>Nevada</a>, etc.): No state income tax on rental profits.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>High-tax states</strong> (<a href="/california" style={{ color: '#2563eb', textDecoration: 'underline' }}>California</a>, <a href="/new-york" style={{ color: '#2563eb', textDecoration: 'underline' }}>New York</a>): Up to 13.3% or 10.9% additional state tax on rental income, depending on your total income.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Non-resident landlords:</strong> If you live in one state and own rental property in another, you must file a non-resident return in the property&apos;s state. You can usually claim a credit in your home state to avoid double taxation.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some states also impose <strong>local transfer taxes</strong> when you sell a property, which can add another 1%–2% to the tax bill at closing.{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Tax Foundation &mdash; State Income Tax Rates 2026)
        </a>
      </p>

      {/* Section 12 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key Tax Tips for Landlords in 2026
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Keep detailed records.</strong> Track every expense with receipts and a mileage log. A shoebox of receipts at year-end is far better than guessing.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Start claiming depreciation immediately.</strong> Many new landlords forget to take depreciation in their first year and miss thousands in deductions. The IRS does not let you catch up without filing amended returns.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Track your passive loss carryforwards.</strong> If your income is too high to deduct rental losses now, the losses carry forward and can offset future rental income or be released when you sell the property.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Consider a cost segregation study.</strong> For larger properties, a cost segregation study identifies components (flooring, fixtures, landscaping) that can be depreciated over 5 or 15 years instead of 27.5. This accelerates deductions into the early years.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Work with a CPA.</strong> Rental real estate tax rules are among the most complex in the tax code. A CPA who specializes in real estate can often save you more than their fee in missed deductions.
        </li>
      </ul>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Rental income is taxed as ordinary income &mdash; but landlords get remarkable deductions that can shrink or eliminate the tax bill. Mortgage interest, property taxes, insurance, repairs, and especially depreciation can easily wipe out most of a property&apos;s rental profit on paper, even when you are cash-flow positive.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The passive activity rules limit how aggressively you can use rental losses against other income, but the $25,000 special allowance helps most small landlords. High earners should also account for the 3.8% NIIT on net rental income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Understanding these rules puts you in a much stronger position to make smart decisions about which properties to buy, where to buy them, and how to structure your rental business for the best after-tax results.
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
          See Your Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Curious how state income tax affects your total income? Enter your salary and state for a full paycheck breakdown.
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
          <a href="https://www.irs.gov/publications/p527" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 527 &mdash; Residential Rental Property</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p925" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Publication 925 &mdash; Passive Activity and At-Risk Rules</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc559" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 559: Net Investment Income Tax</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/tangible-property-final-regulations" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Tangible Property Final Regulations</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Individual Income Tax Rates, 2026</a>
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
