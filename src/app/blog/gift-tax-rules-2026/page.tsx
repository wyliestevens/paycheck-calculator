import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gift Tax Rules 2026: Annual Exclusion, Lifetime Exemption, and Who Pays',
  description:
    'The IRS lets you give up to $19,000 per person tax-free in 2026. Here\'s exactly how the annual exclusion, lifetime exemption, gift splitting, and Form 709 work — with worked dollar examples.',
  alternates: { canonical: '/blog/gift-tax-rules-2026' },
  keywords:
    'gift tax 2026, annual gift tax exclusion 2026, lifetime gift tax exemption, gift tax rules, Form 709, who pays gift tax, gift splitting, tax-free gifts, how much can I give tax-free',
  openGraph: {
    title: 'Gift Tax Rules 2026: Annual Exclusion, Lifetime Exemption, and Who Pays',
    description:
      'The IRS lets you give up to $19,000 per person tax-free in 2026. Here\'s exactly how the annual exclusion, lifetime exemption, and Form 709 work.',
  },
}

export default function GiftTaxRules2026() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Gift tax illustration showing a gift box with dollar amounts and IRS form"
        >
          <rect width="600" height="200" rx="12" fill="#d97706" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />

          {/* Gift box body */}
          <rect x="60" y="90" width="90" height="80" rx="4" fill="rgba(255,255,255,0.25)" />
          {/* Gift box lid */}
          <rect x="52" y="74" width="106" height="22" rx="4" fill="rgba(255,255,255,0.35)" />
          {/* Ribbon vertical */}
          <rect x="99" y="74" width="14" height="96" rx="2" fill="rgba(255,255,255,0.5)" />
          {/* Ribbon horizontal */}
          <rect x="52" y="81" width="106" height="10" rx="2" fill="rgba(255,255,255,0.5)" />
          {/* Bow left loop */}
          <ellipse cx="90" cy="64" rx="18" ry="12" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="4" />
          {/* Bow right loop */}
          <ellipse cx="122" cy="64" rx="18" ry="12" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="4" />
          {/* Bow center */}
          <circle cx="106" cy="68" r="6" fill="rgba(255,255,255,0.7)" />

          {/* Arrow */}
          <line x1="178" y1="120" x2="218" y2="120" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="218,112 233,120 218,128" fill="rgba(255,255,255,0.6)" />

          {/* Center panel: key numbers */}
          <rect x="238" y="50" width="310" height="110" rx="8" fill="rgba(255,255,255,0.15)" />
          <text x="393" y="76" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">GIFT TAX — 2026</text>

          {/* Annual exclusion row */}
          <rect x="250" y="88" width="134" height="58" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="317" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Annual Exclusion</text>
          <text x="317" y="130" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="monospace">$19,000</text>
          <text x="317" y="146" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">per recipient</text>

          {/* Giver pays row */}
          <rect x="396" y="88" width="134" height="58" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="463" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">Who Pays?</text>
          <text x="463" y="130" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="sans-serif">The Giver</text>
          <text x="463" y="146" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">not the recipient</text>

          {/* Bottom label */}
          <text x="393" y="174" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Most gifts never owe tax · Form 709 required above annual exclusion</text>
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
        Gift Tax Rules 2026: Annual Exclusion, Lifetime Exemption, and Who Pays
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published September 8, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most people assume that giving money to a family member is completely tax-free — and for the vast majority of gifts, they are right. The IRS allows you to give <strong>up to $19,000 per recipient per year</strong> in 2026 without any gift tax consequences whatsoever. No forms, no taxes, no strings attached.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But when gifts exceed those limits — or when large amounts are transferred over a lifetime — the gift tax kicks in. Understanding how it works will help you give generously, avoid surprises, and plan smarter for your family&rsquo;s future.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is the Gift Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The gift tax is a federal tax on the <em>transfer</em> of money or property from one person to another when the giver receives nothing (or less than fair market value) in return. It was created in 1924 primarily to prevent wealthy taxpayers from avoiding estate taxes by giving away their assets before death.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The most important thing to know: <strong>the gift tax is paid by the giver, not the recipient</strong>. If you give $50,000 to your adult child, your child owes nothing to the IRS. Any tax obligation is entirely yours as the donor.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The gift tax applies to gifts of money, real estate, stocks, vehicles, jewelry, business interests &mdash; any transfer of value. It does <em>not</em> apply to normal household support or living expenses between family members, or to payments made directly for someone&rsquo;s medical bills or tuition (more on those exclusions below).{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/frequently-asked-questions-on-gift-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; FAQ on Gift Taxes)
        </a>
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Annual Gift Tax Exclusion: $19,000 Per Recipient
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The annual gift tax exclusion is the amount you can give to <em>any one person</em> in a calendar year without owing gift tax or even filing a gift tax return. For 2026, that amount is <strong>$19,000 per recipient</strong>.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The key word is <em>per recipient</em> &mdash; the exclusion applies separately to each person you give to. That means you can give $19,000 to your daughter, $19,000 to your son, $19,000 to your grandchild, and $19,000 to your best friend &mdash; all in the same year &mdash; and none of it triggers gift tax or reporting requirements.
      </p>

      <div
        style={{
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', color: '#92400e', margin: 0, lineHeight: 1.6 }}>
          <strong>Key rule:</strong> The $19,000 annual exclusion is per recipient per year. You can give $19,000 to as many people as you want each year — there is no cap on the total number of recipients.
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The annual exclusion is adjusted periodically for inflation by the IRS. It was $17,000 in 2023, $18,000 in 2024 and 2025, and increased to $19,000 for 2026.{' '}
        <a href="https://www.irs.gov/taxtopics/tc553" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 553: Tax on Gifts)
        </a>
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Gift Splitting: Married Couples Can Double the Exclusion
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Married couples can take advantage of <strong>gift splitting</strong>, which effectively doubles the annual exclusion to $38,000 per recipient. With gift splitting, both spouses are treated as making equal gifts — even if only one spouse actually writes the check.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For example, if you want to give your child $38,000 in 2026, you and your spouse can each contribute $19,000 from a joint account (or your individual accounts). No gift tax. No Form 709 required.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, if only one spouse writes the check for $38,000, gift splitting must be elected by filing{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-709" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 709
        </a>{' '}
        (even though no tax is owed). Both spouses must consent to the split, and both must be US citizens or residents.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Gifts That Are Always Tax-Free (No Limit)
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Certain gifts are completely exempt from the gift tax, no matter how large they are:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Gifts to your spouse:</strong> Unlimited, as long as your spouse is a US citizen. (Gifts to non-citizen spouses have a separate annual limit — $185,000 in 2026.)
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Direct tuition payments:</strong> Payments made <em>directly to an educational institution</em> for tuition are fully exempt. This does not include room, board, or books — and you must pay the school directly, not your child.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Direct medical payments:</strong> Payments made <em>directly to a medical provider</em> for someone else&rsquo;s care are exempt. Again, you must pay the provider directly — not reimburse the patient.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Gifts to charities:</strong> Donations to qualified 501(c)(3) organizations are not subject to the gift tax (and may be deductible on your income taxes).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Gifts to political organizations:</strong> Transfers to political organizations for their use are excluded from gift tax.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The tuition and medical payment exclusions are among the most powerful and underused tax strategies for wealthy families. A grandparent who pays $40,000 per year in college tuition directly to the school owes zero gift tax on that transfer, in addition to any other gifts they make.{' '}
        <a href="https://www.irs.gov/publications/p950" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Publication 950: Introduction to Estate and Gift Taxes)
        </a>
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Lifetime Gift Tax Exemption
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you give more than the annual exclusion amount to any one person in a single year, the excess doesn&rsquo;t immediately get taxed. Instead, it counts against your <strong>lifetime gift and estate tax exemption</strong> — a large unified credit that covers both lifetime gifts and assets left in your estate.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Only after you have used up your entire lifetime exemption do you actually owe gift tax. For most Americans, that threshold is so high that they will never owe a dollar of gift tax in their lives.
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <p style={{ fontSize: '0.9375rem', color: '#1e293b', marginBottom: '0.5rem', fontWeight: 600 }}>
          A note on the 2026 lifetime exemption:
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
          The lifetime exemption was significantly increased by the Tax Cuts and Jobs Act of 2017. The 2025 exemption was $13.99 million per person. Tax legislation in effect for 2026 determines the current figure — check{' '}
          <a href="https://www.irs.gov/newsroom/estate-and-gift-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            IRS.gov&rsquo;s Estate and Gift Tax page
          </a>{' '}
          for the current amount. Even at the lower pre-2017 levels, the exemption is over $6 million — far above what most families will ever gift.
        </p>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The lifetime exemption is <strong>shared with your estate</strong>. Every dollar you use during your lifetime reduces the amount available to shelter your estate at death. This is why large gifts are tracked — not to collect tax now, but to account for future estate tax exposure.
      </p>

      {/* Section 6 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Gift Tax Rates: What You Pay If You Exceed the Lifetime Exemption
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        If you somehow exhaust your entire lifetime exemption — an extremely rare situation — gift tax applies at progressive rates ranging from 18% to 40%. Here are the federal gift tax brackets:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Gift Amount (Above Exemption)</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Tax Rate</th>
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
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626', fontWeight: 600 }}>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        These rates apply only to amounts above your remaining lifetime exemption. Since the exemption is in the millions, virtually no individual ever reaches these brackets during their lifetime.{' '}
        <a href="https://www.irs.gov/instructions/i709" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Instructions for Form 709)
        </a>
      </p>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Examples: When You Do (and Don&rsquo;t) Owe Gift Tax
      </h2>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Example 1: Gifts Within the Annual Exclusion (No Tax, No Filing)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Maria has three adult children. In 2026 she gives each of them $19,000 for a total of $57,000.
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Recipient</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Gift Amount</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Annual Exclusion</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Taxable Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Child 1', '$19,000', '$19,000', '$0'],
              ['Child 2', '$19,000', '$19,000', '$0'],
              ['Child 3', '$19,000', '$19,000', '$0'],
            ].map(([recipient, gift, excl, taxable], i) => (
              <tr key={recipient} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{recipient}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{gift}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>{excl}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#059669', fontWeight: 600 }}>{taxable}</td>
              </tr>
            ))}
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}>Total</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$57,000</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#1e293b' }}>$57,000</td>
              <td style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', textAlign: 'right', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: '#059669' }}>$0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Result:</strong> Maria owes zero gift tax and does not need to file Form 709. Each gift is covered entirely by the annual exclusion.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Example 2: Gift Exceeding the Annual Exclusion (Form 709 Required, No Tax)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Robert gives his daughter a $75,000 down payment on her first home in 2026. His remaining lifetime exemption is $8 million.
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
          lineHeight: 2,
        }}
      >
        <div>Gift amount:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$75,000</div>
        <div>Minus annual exclusion:&emsp;&emsp;&emsp;&emsp;&minus;$19,000</div>
        <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '0.5rem' }}>Taxable gift:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$56,000</div>
        <div>Applied to lifetime exemption:&emsp;&minus;$56,000 (from $8M remaining)</div>
        <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '0.5rem', fontWeight: 700 }}>Gift tax owed:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$0</div>
        <div style={{ color: '#475569', fontSize: '0.875rem' }}>Remaining lifetime exemption: $7,944,000</div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Result:</strong> Robert owes no gift tax, but he must file <strong>Form 709</strong> to report the $56,000 that exceeded the annual exclusion and reduced his lifetime exemption. Form 709 is due on April 15 of the following year (or October 15 if he files for an extension).
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Example 3: Gift Splitting for a Large Transfer
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        David and Linda want to help their son put a down payment on a home. They write one check for $38,000 from their joint account.
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
          lineHeight: 2,
        }}
      >
        <div>Total gift:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$38,000</div>
        <div>David&apos;s share (gift split):&emsp;&emsp;&emsp;&emsp;$19,000 &rarr; covered by his annual exclusion</div>
        <div>Linda&apos;s share (gift split):&emsp;&emsp;&emsp;&emsp;$19,000 &rarr; covered by her annual exclusion</div>
        <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '0.5rem', fontWeight: 700 }}>Gift tax owed:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$0</div>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        <strong>Result:</strong> No gift tax owed. Since one check was written, David and Linda must elect gift splitting by filing Form 709 (even though no tax is due). Each spouse files a separate Form 709 consenting to the split.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Form 709: When You Have to File
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You must file{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-709" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 709 (United States Gift and Generation-Skipping Transfer Tax Return)
        </a>{' '}
        if any of the following are true for the calendar year:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>You gave <strong>more than $19,000</strong> to any one person (excluding spouses, charities, and direct tuition/medical payments)</li>
        <li style={{ marginBottom: '0.5rem' }}>You gave <strong>any amount to a trust</strong> that is not entirely for your spouse&rsquo;s benefit</li>
        <li style={{ marginBottom: '0.5rem' }}>You made gifts of <strong>future interests</strong> (the recipient cannot use the gift right away)</li>
        <li style={{ marginBottom: '0.5rem' }}>You and your spouse want to <strong>elect gift splitting</strong></li>
        <li style={{ marginBottom: '0.5rem' }}>You gave any amount to a <strong>generation-skipping trust</strong> (grandchildren or other skip persons)</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Form 709 is due <strong>April 15</strong> of the year following the gift. An automatic six-month extension (to October 15) can be requested by filing{' '}
        <a href="https://www.irs.gov/forms-pubs/about-form-4868" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          Form 4868
        </a>
        . Note: an extension to file your income tax return <em>automatically</em> extends the gift tax return deadline as well, but you must still pay any gift tax owed by April 15 to avoid penalties.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Filing Form 709 does <em>not</em> mean you owe gift tax. It is simply a reporting requirement that tracks your cumulative use of the lifetime exemption.
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Is the Gift Taxable Income for the Recipient?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        No. Money received as a gift is <strong>not taxable income</strong> for the recipient. You do not report it on your income tax return. Your child who receives a $50,000 down payment from a parent owes nothing to the IRS on that amount.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        However, there is one important caveat: if a gift generates income <em>after</em> you receive it, that income is taxable. For example, if your parent gives you shares of stock worth $30,000 and those shares later pay dividends, you owe income tax on the dividends. The gift itself is tax-free; any subsequent earnings are not.{' '}
        <a href="https://www.irs.gov/taxtopics/tc422" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS &mdash; Topic 422: Nontaxable Income)
        </a>
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Smart Gift-Giving Strategies for 2026
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Most families can give generously without ever worrying about the gift tax. Here are practical strategies to maximize your giving:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        1. Use the Annual Exclusion Every Year
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The $19,000 annual exclusion does not carry over. A couple with three children could give $228,000 tax-free every year ($19,000 &times; 2 spouses &times; 3 children + their spouses or partners). Over 10 years, that&rsquo;s over $2 million transferred tax-free.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        2. Front-Load a 529 Plan with Five-Year Gift Averaging
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You can contribute up to <strong>5 years of annual exclusions at once</strong> to a 529 college savings plan — $95,000 per beneficiary in 2026 ($19,000 &times; 5) — without using your lifetime exemption. This is called <em>superfunding</em>. You make an election on Form 709, and then you cannot make additional annual-exclusion gifts to that beneficiary for five years.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        3. Pay Tuition and Medical Bills Directly
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Paying a grandchild&rsquo;s $50,000 annual college tuition directly to the university does not count against your annual exclusion or lifetime exemption at all. Same with paying medical bills directly to a hospital or doctor. These two exclusions are unlimited and often overlooked.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        4. Gift Appreciated Assets Strategically
      </h3>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you give appreciated stock or real estate, the recipient inherits your cost basis. When they sell, they will owe capital gains tax on the full appreciation. If instead you hold the asset until death and leave it in your estate, the heir receives a <em>stepped-up basis</em> equal to the fair market value at death — eliminating capital gains tax entirely. For highly appreciated assets, a bequest may be more tax-efficient than a lifetime gift.
      </p>

      {/* Quick Reference Table */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Gift Tax Quick Reference for 2026
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Rule</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>2026 Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Annual exclusion per recipient', '$19,000'],
              ['Annual exclusion for married couples (gift splitting)', '$38,000 per recipient'],
              ['Annual exclusion: gifts to non-citizen spouse', '$185,000'],
              ['Direct tuition payment exclusion', 'Unlimited (paid directly to school)'],
              ['Direct medical payment exclusion', 'Unlimited (paid directly to provider)'],
              ['Gift tax return filing deadline', 'April 15 (or October 15 with extension)'],
              ['Form required to report taxable gifts', 'Form 709'],
              ['Maximum gift tax rate', '40%'],
              ['Are gifts taxable income for the recipient?', 'No'],
              ['Who pays gift tax?', 'The giver (donor), not the recipient'],
            ].map(([rule, amount], i) => (
              <tr key={rule} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{rule}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 500 }}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The gift tax sounds intimidating, but for the vast majority of Americans it never results in a single dollar owed. The $19,000 annual exclusion, combined with the multi-million dollar lifetime exemption and unlimited exclusions for direct tuition and medical payments, means you can be remarkably generous without tax consequences.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The three things to remember: the giver pays (not the recipient), recipients do not report gifts as income, and you only need to file Form 709 when a gift to any single person exceeds $19,000 in a calendar year. Most families can skip the paperwork entirely.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For large transfers — think six-figure gifts or estate planning for a high-net-worth situation — consult a tax professional or estate planning attorney. The strategies available (GRATs, irrevocable trusts, family limited partnerships) go well beyond the annual exclusion and can save substantial amounts in estate taxes.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          Curious What You Actually Take Home?
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Gift tax is separate from income tax — but understanding your full paycheck picture matters too. Enter your salary to see your federal tax, state tax, and take-home pay broken down line by line.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#d97706',
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
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/frequently-asked-questions-on-gift-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Frequently Asked Questions on Gift Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc553" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 553: Tax on Gifts</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/forms-pubs/about-form-709" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; About Form 709, United States Gift and Generation-Skipping Transfer Tax Return</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/instructions/i709" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Instructions for Form 709</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/publications/p950" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Publication 950: Introduction to Estate and Gift Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/newsroom/estate-and-gift-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Estate and Gift Tax (current exemption amounts)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc422" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 422: Nontaxable Income</a>
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
