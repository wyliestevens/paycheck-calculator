import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'State Tax Reciprocity Agreements: How Commuters Avoid Double Taxation (2026)' },
  description:
    'Live in one state, work in another? Reciprocity agreements let commuters pay income tax only to their home state — saving up to $500+ per year in paperwork and taxes.',
  alternates: { canonical: '/blog/state-tax-reciprocity-agreements' },
  keywords:
    'state tax reciprocity agreements 2026, reciprocal tax agreements, work in different state taxes, commuter state taxes, live in one state work in another taxes, withholding reciprocity',
  openGraph: {
    type: 'article',
    url: '/blog/state-tax-reciprocity-agreements',
    images: [{ url: '/og/blog/state-tax-reciprocity-agreements', width: 1200, height: 630 }],
    title: 'State Tax Reciprocity Agreements: How Commuters Avoid Double Taxation (2026)',
    description:
      'Live in one state, work in another? Reciprocity agreements let commuters pay income tax only to their home state — saving up to $500+ per year.',
  },
}

export default function StateTaxReciprocityAgreements() {
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
          aria-label="Two state outlines connected by an arrow, representing reciprocity between states"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Left state block */}
          <rect x="55" y="45" width="160" height="110" rx="10" fill="rgba(255,255,255,0.18)" />
          <text x="135" y="90" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">PA</text>
          <text x="135" y="112" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">LIVES HERE</text>
          <text x="135" y="130" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Pays PA tax</text>
          <text x="135" y="148" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">3.07% flat</text>
          {/* Arrow */}
          <line x1="230" y1="100" x2="370" y2="100" stroke="rgba(255,255,255,0.55)" strokeWidth="3" strokeDasharray="8,4" />
          <polygon points="362,91 380,100 362,109" fill="rgba(255,255,255,0.55)" />
          <polygon points="238,91 220,100 238,109" fill="rgba(255,255,255,0.55)" />
          <text x="300" y="85" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">RECIPROCITY</text>
          <text x="300" y="125" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">one return only</text>
          {/* Right state block */}
          <rect x="385" y="45" width="160" height="110" rx="10" fill="rgba(255,255,255,0.18)" />
          <text x="465" y="90" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="sans-serif">NJ</text>
          <text x="465" y="112" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">WORKS HERE</text>
          <text x="465" y="130" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">No NJ withheld</text>
          <text x="465" y="148" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">up to 5.525%</text>
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
        State Tax Reciprocity Agreements: How Commuters Avoid Double Taxation (2026)
      </h1>

      <ArticleMeta slug="state-tax-reciprocity-agreements" />

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live in Pennsylvania but commute into New Jersey for work, you could be paying income tax to the wrong state &mdash; or even both states &mdash; without realizing it. <strong>State tax reciprocity agreements</strong> let workers who cross state lines pay income tax only to their <em>home state</em>, not to the state where they work. The result: a simpler tax life, one fewer state return to file, and sometimes real cash savings.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        About 30 states participate in at least one reciprocity agreement. If you live near a state border or commute across state lines, here is everything you need to know about how these agreements work, which states are covered, and exactly how to use one.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Is a State Tax Reciprocity Agreement?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        A <strong>state tax reciprocity agreement</strong> is a formal arrangement between two states that says: &ldquo;We will each tax only our own residents, even when they earn income in the other state.&rdquo; Without one, both states could theoretically tax the same wages &mdash; the work state on income earned there, and the home state on the same income because residents owe tax on worldwide income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states without a reciprocity agreement soften the blow through a <strong>credit for taxes paid to another state</strong>. Under that system, your home state gives you a dollar-for-dollar credit (up to its own tax rate) for what you paid to your work state, so you generally don&rsquo;t get taxed twice. But you still have to file two state returns and track everything &mdash; which is exactly what reciprocity eliminates.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Reciprocity agreements are negotiated bilaterally between individual states. There is no federal law requiring them, and not every pair of neighboring states has one. When a reciprocity agreement exists, you submit a simple exemption certificate to your employer and your paycheck is handled correctly from that point on.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: PA Resident Working in New Jersey Saves $349/Year
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s look at a concrete example. Suppose you live in Pennsylvania, work in New Jersey, and earn $75,000 a year. Pennsylvania and New Jersey have a reciprocity agreement, so you have two paths:
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Path A: Use the Reciprocity Agreement (Correct Approach)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        You submit <strong>Form NJ-165</strong> (Employee&rsquo;s Certificate of Non-New Jersey Residence) to your employer. Your employer withholds Pennsylvania income tax instead of New Jersey income tax. You file one state return &mdash; Pennsylvania &mdash; and pay only Pennsylvania&rsquo;s flat 3.07% rate.{' '}
        <a href="https://www.nj.gov/treasury/taxation/njit16.shtml" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (NJ Treasury &mdash; Form NJ-165)
        </a>
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
          lineHeight: 1.8,
        }}
      >
        PA tax: $75,000 &times; 3.07% = <strong>$2,302.50</strong><br />
        NJ tax withheld: <strong>$0.00</strong><br />
        State returns filed: <strong>1 (Pennsylvania)</strong>
      </div>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        Path B: No Exemption Certificate Filed (Common Mistake)
      </h3>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        If you don&rsquo;t file the exemption certificate, your employer defaults to withholding New Jersey income tax on your entire $75,000 salary. You would then need to file a New Jersey nonresident return and a Pennsylvania resident return, claiming a Pennsylvania credit for the NJ tax paid.
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9375rem',
          color: '#1e293b',
          lineHeight: 1.8,
        }}
      >
        NJ nonresident tax on $75,000 (no standard deduction):<br />
        &nbsp;&nbsp;1.40% &times; $20,000 = $280.00<br />
        &nbsp;&nbsp;1.75% &times; $15,000 = $262.50<br />
        &nbsp;&nbsp;3.50% &times; $5,000&nbsp;&nbsp;= $175.00<br />
        &nbsp;&nbsp;5.525% &times; $35,000 = $1,933.75<br />
        NJ total: <strong>$2,651.25</strong><br /><br />
        PA resident tax (credit for NJ taxes paid):<br />
        &nbsp;&nbsp;PA tax owed: $75,000 &times; 3.07% = $2,302.50<br />
        &nbsp;&nbsp;Less: credit for NJ tax = $2,302.50<br />
        &nbsp;&nbsp;PA net tax: <strong>$0.00</strong><br /><br />
        Total state tax: <strong>$2,651.25</strong><br />
        State returns filed: <strong>2 (NJ nonresident + PA resident)</strong>
      </div>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        By using the reciprocity agreement (Path A), this commuter pays <strong>$2,302.50</strong> in state income tax instead of <strong>$2,651.25</strong> &mdash; an annual saving of <strong>$348.75</strong>, or about $29 per month. The saving exists because Pennsylvania&rsquo;s flat 3.07% rate is lower than New Jersey&rsquo;s progressive rate for this income level. They also avoid filing two state tax returns every April.
      </p>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Note: If you live in New Jersey and work in Pennsylvania, the situation reverses &mdash; your employer withholds NJ tax, and you file only in NJ. At $75,000, NJ tax ($2,651.25) is higher than PA tax ($2,302.50), so NJ residents working in PA pay slightly more than PA residents working in NJ, but still benefit from filing just one return.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which States Have Tax Reciprocity Agreements?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Reciprocity agreements are concentrated in the Mid-Atlantic and Midwest, where workers frequently cross state borders. Here are the main agreements currently in effect (always verify with your state&rsquo;s revenue department, as agreements can change):
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
            <tr style={{ background: '#f0f9ff' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>If You Live In&hellip;</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>You Pay Home-State Tax When Working In&hellip;</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Exemption Form to File with Employer</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Illinois', 'Iowa, Kentucky, Michigan, Wisconsin', 'IL-W-5-NR'],
              ['Indiana', 'Kentucky, Michigan, Ohio, Pennsylvania, Wisconsin', 'WH-47'],
              ['Iowa', 'Illinois', 'IA 44-016'],
              ['Kentucky', 'Illinois, Indiana, Michigan, Ohio, Virginia, West Virginia, Wisconsin', 'Form 42A809'],
              ['Maryland', 'DC, Pennsylvania, Virginia, West Virginia', 'MW507'],
              ['Michigan', 'Illinois, Indiana, Kentucky, Minnesota, Ohio, Wisconsin', 'MI-W4'],
              ['Minnesota', 'Michigan, North Dakota', 'MWR'],
              ['New Jersey', 'Pennsylvania', 'Form NJ-165'],
              ['North Dakota', 'Minnesota', 'NDW-R'],
              ['Ohio', 'Indiana, Kentucky, Michigan, Pennsylvania, West Virginia', 'IT 4NR'],
              ['Pennsylvania', 'Indiana, Maryland, New Jersey, Ohio, Virginia, West Virginia', 'REV-419'],
              ['Virginia', 'DC, Kentucky, Maryland, Pennsylvania, West Virginia', 'VA-4'],
              ['West Virginia', 'Kentucky, Maryland, Ohio, Pennsylvania, Virginia', 'WV/IT-104'],
              ['Wisconsin', 'Illinois, Indiana, Kentucky, Michigan', 'W-220'],
            ].map(([home, workStates, form], i) => (
              <tr key={home} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{home}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{workStates}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', color: '#475569' }}>{form}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Sources:{' '}
        <a href="https://taxfoundation.org/data/all/state/state-income-tax-reciprocity/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Tax Reciprocity</a>{'; '}
        individual state revenue departments. Verify current agreements before filing &mdash; states occasionally renegotiate or terminate agreements.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Notice that <strong>Washington DC</strong> also has reciprocity agreements &mdash; DC residents who work in Maryland or Virginia (and vice versa) only file where they live. The DC-Maryland-Virginia corridor is one of the most commonly used reciprocity situations in the country given how many federal workers and contractors cross those lines daily.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Do I Tell My Employer to Withhold My Home State&rsquo;s Tax?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Using a reciprocity agreement requires one simple step: submit the correct <strong>exemption certificate</strong> (also called a non-residency affidavit) to your employer&rsquo;s payroll department. The form tells your employer &ldquo;I am a resident of [home state] and our states have a reciprocity agreement &mdash; please withhold my home state&rsquo;s tax instead of [work state] tax.&rdquo;
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here&rsquo;s the general process:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}><strong>Confirm a reciprocity agreement exists</strong> between your home state and your work state using the table above or your home state&rsquo;s revenue department website.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Download and complete the exemption certificate</strong> from your home state. The form number is listed in the table above. Fill in your name, address, home state, and employer information.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>Submit it to your employer&rsquo;s payroll or HR department</strong> &mdash; not to either state&rsquo;s tax agency. Your employer keeps the form on file and adjusts withholding starting with the next pay period.</li>
        <li style={{ marginBottom: '0.75rem' }}><strong>File only your home state return</strong> at tax time. You should receive a W-2 showing only your home state&rsquo;s withholding in Box 15&ndash;17.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you forget to file the exemption certificate and your employer withholds the wrong state&rsquo;s tax all year, you are not permanently stuck. You can file a nonresident return in the work state to get that withholding refunded, and pay what you owe to your home state. It creates extra paperwork, but the money is recoverable.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Happens If Your States Don&rsquo;t Have a Reciprocity Agreement?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If no reciprocity agreement exists between your home state and work state, you are generally taxed by both &mdash; but not double-taxed, because most states offer a <strong>resident tax credit</strong> for income taxes paid to another state.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        The typical outcome without reciprocity:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Your employer withholds the <strong>work state&rsquo;s tax</strong> from your paycheck throughout the year.</li>
        <li style={{ marginBottom: '0.5rem' }}>At tax time, you file a <strong>nonresident return</strong> in your work state, reporting the income earned there.</li>
        <li style={{ marginBottom: '0.5rem' }}>You also file a <strong>resident return</strong> in your home state, reporting your total worldwide income.</li>
        <li style={{ marginBottom: '0.5rem' }}>Your home state gives you a <strong>credit</strong> for the taxes you paid to the work state, usually equal to the lesser of what you paid to the work state or what your home state would have charged on the same income.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In practice, the credit system means most workers don&rsquo;t pay double the state taxes &mdash; they pay the <strong>higher</strong> of the two states&rsquo; rates. If you live in a low-tax state and work in a high-tax state, you effectively pay the high-tax state&rsquo;s rate. The downside is complexity: two returns, two sets of deadlines, and more chance for errors.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Which Major States Don&rsquo;t Have Reciprocity Agreements?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Several heavily-populated states with high state income tax rates do <em>not</em> participate in reciprocity agreements. If you work in any of these states as a nonresident, you will need to file a nonresident return there and claim a credit in your home state:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>New York</strong> &mdash; No reciprocity with any state. NY&rsquo;s &ldquo;convenience of the employer&rdquo; rule makes this especially complex for remote workers. See our guide to <a href="/blog/remote-work-and-state-taxes" style={{ color: '#2563eb', textDecoration: 'underline' }}>remote work and state taxes</a>.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>California</strong> &mdash; No reciprocity agreements. CA taxes nonresidents on CA-source income.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Texas, Florida, Washington</strong> &mdash; No state income tax, so reciprocity is irrelevant (there is nothing for your employer to withhold).</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Massachusetts</strong> &mdash; No reciprocity with neighboring states. Commuters from NH who work in MA owe MA income tax.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Colorado, Arizona, Georgia</strong> &mdash; No broad reciprocity agreements.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are evaluating a job offer in a state with no reciprocity, factor the two-return filing requirement and any rate difference into your take-home pay comparison. Our calculator can help you compare: try the <a href="/new-york/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000 New York paycheck</a> against the <a href="/pennsylvania/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000 Pennsylvania paycheck</a> to see the state tax difference at a glance.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Does Reciprocity Apply to Remote Work?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This is where things get complicated. Reciprocity agreements were designed for traditional commuters who physically travel to a work state &mdash; not for workers who stay home and log into a company based in another state.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you work remotely from your home state for a company headquartered in a different state, <strong>most reciprocity agreements do not apply</strong>. The income is generally sourced to the state where the <em>work is performed</em> (your home state), not where the employer&rsquo;s office is located. Practically, that means your home state has taxing rights and the employer&rsquo;s state typically does not.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The major exception is the <strong>&ldquo;convenience of the employer&rdquo; rule</strong> used by New York, Connecticut, Delaware, and a few other states. Under that rule, if you choose to work remotely (rather than being required to), the state where your employer is located can still tax your wages. This is entirely separate from reciprocity and can apply even when you never set foot in the employer&rsquo;s state.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        How Does Reciprocity Affect Your W-2 and Year-End Filing?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you use a reciprocity exemption certificate correctly, your W-2 at year-end should show <strong>only one state in Boxes 15&ndash;17</strong> &mdash; your home state. The work state should have $0 in Box 15 (State) or should not appear at all.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your W-2 shows withholding for the wrong state (the work state), you will need to:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>File a <strong>nonresident return in the work state</strong> showing $0 net income sourced there (since you are exempt under reciprocity), and request a full refund of the withholding.</li>
        <li style={{ marginBottom: '0.5rem' }}>File your <strong>resident return in your home state</strong> as normal, paying what you owe based on your home state&rsquo;s rates.</li>
        <li style={{ marginBottom: '0.5rem' }}>Submit the exemption certificate to your employer for the following year so it does not happen again.</li>
      </ol>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This process is tedious but straightforward. Most states process reciprocity refunds within 60&ndash;90 days of filing.
      </p>

      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Key Takeaways
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>A reciprocity agreement lets you pay income tax only to your <strong>home state</strong>, even if you work in a different state.</li>
        <li style={{ marginBottom: '0.75rem' }}>To use it, you must submit the correct exemption certificate to your employer &mdash; it does not activate automatically.</li>
        <li style={{ marginBottom: '0.75rem' }}>Reciprocity can mean real cash savings (up to hundreds of dollars per year) if your home state has a lower rate than your work state.</li>
        <li style={{ marginBottom: '0.75rem' }}>Major states like New York and California have no reciprocity agreements; commuters there must file nonresident returns.</li>
        <li style={{ marginBottom: '0.75rem' }}>Remote workers generally cannot use reciprocity agreements &mdash; the rules were designed for physical commuters.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you are curious what your take-home looks like after all state and federal taxes, try running your state in our calculator. For example, compare the <a href="/new-jersey/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000 NJ paycheck</a> against the <a href="/virginia/75000-salary" style={{ color: '#2563eb', textDecoration: 'underline' }}>$75,000 Virginia paycheck</a> to see how much the state makes in difference. Or check the <a href="/blog/moving-for-a-job-state-tax-implications" style={{ color: '#2563eb', textDecoration: 'underline' }}>full guide on moving for a job</a> if you are weighing a relocation.
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
          See Your Take-Home Pay After State Taxes
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and state to see a full breakdown of federal, state, Social Security, and Medicare taxes &mdash; and exactly what lands in your bank account.
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
          <a href="https://taxfoundation.org/data/all/state/state-income-tax-reciprocity/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation &mdash; State Income Tax Reciprocity Agreements</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.nj.gov/treasury/taxation/njit16.shtml" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>New Jersey Division of Taxation &mdash; Reciprocal Personal Income Tax Agreement (Form NJ-165)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.revenue.pa.gov/FormsandPublications/FormsforIndividuals/Documents/Personal%20Income%20Tax/2023%20REV-419.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Pennsylvania Department of Revenue &mdash; REV-419 Non-Withholding Application Certificate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://tax.virginia.gov/individual-income-tax-reciprocity-exemption" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Virginia Department of Taxation &mdash; Individual Income Tax Reciprocity Exemption</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://taxes.marylandtaxes.gov/individual_taxes/individual_tax_types/income_tax/tax_information/reciprocal_agreements.shtml" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Maryland Comptroller &mdash; Reciprocal Agreements</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc508" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS &mdash; Topic 508: Miscellaneous Expenses (state credit guidance)</a>
        </li>
      </ul>

      <ArticleFooter current="state-tax-reciprocity-agreements" />
    </article>
  )
}
