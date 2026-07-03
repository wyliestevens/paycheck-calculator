import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remote Work and State Taxes: What You Need to Know (2026)',
  description:
    "Working remotely for a company in another state could mean filing two state tax returns — or more. Here's how remote work state taxes work in 2026, including the \"convenience of the employer\" rule and reciprocity agreements.",
  alternates: { canonical: '/blog/remote-work-and-state-taxes' },
  keywords:
    'remote work state taxes, work from home state taxes 2026, convenience of employer rule, reciprocity agreements taxes, two state taxes remote work, telecommute tax 2026, remote worker tax filing',
  openGraph: {
    title: 'Remote Work and State Taxes: What You Need to Know (2026)',
    description:
      "Working remotely for a company in another state could mean filing two state tax returns. Here's how it works in 2026.",
  },
}

export default function RemoteWorkAndStateTaxes() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero SVG */}
      <div style={{ marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          role="img"
          aria-label="Remote work and state taxes illustration showing home state and employer state with potential for two tax returns"
        >
          <rect width="600" height="200" rx="12" fill="#0891b2" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.08)" />
          {/* Header label */}
          <text x="300" y="45" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif">REMOTE WORK + STATE TAXES</text>
          {/* Left box: Home State */}
          <rect x="35" y="58" width="128" height="92" rx="6" fill="rgba(255,255,255,0.18)" />
          {/* House shape */}
          <polygon points="99,68 74,85 124,85" fill="rgba(255,255,255,0.45)" />
          <rect x="82" y="85" width="34" height="26" rx="2" fill="rgba(255,255,255,0.45)" />
          <rect x="92" y="94" width="14" height="17" fill="rgba(14,165,233,0.7)" />
          <text x="99" y="131" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">HOME STATE</text>
          <text x="99" y="144" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Where you live</text>
          {/* Arrow right with label */}
          <line x1="173" y1="104" x2="228" y2="104" stroke="rgba(255,255,255,0.65)" strokeWidth="2" />
          <polygon points="226,97 240,104 226,111" fill="rgba(255,255,255,0.65)" />
          <text x="201" y="97" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">works for</text>
          {/* Center box: Employer State */}
          <rect x="248" y="58" width="128" height="92" rx="6" fill="rgba(255,255,255,0.18)" />
          {/* Building shape */}
          <rect x="295" y="68" width="38" height="42" fill="rgba(255,255,255,0.4)" />
          <rect x="288" y="65" width="52" height="7" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="299" y="74" width="8" height="7" fill="rgba(14,165,233,0.7)" />
          <rect x="312" y="74" width="8" height="7" fill="rgba(14,165,233,0.7)" />
          <rect x="299" y="86" width="8" height="7" fill="rgba(14,165,233,0.7)" />
          <rect x="312" y="86" width="8" height="7" fill="rgba(14,165,233,0.7)" />
          <rect x="305" y="97" width="8" height="13" fill="rgba(14,165,233,0.7)" />
          <text x="312" y="131" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">EMPLOYER STATE</text>
          <text x="312" y="144" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Company HQ</text>
          {/* Arrow right */}
          <line x1="386" y1="104" x2="435" y2="104" stroke="rgba(255,255,255,0.65)" strokeWidth="2" />
          <polygon points="433,97 447,104 433,111" fill="rgba(255,255,255,0.65)" />
          {/* Right box: Result */}
          <rect x="453" y="58" width="128" height="92" rx="6" fill="rgba(255,255,255,0.18)" />
          <text x="517" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">POSSIBLE:</text>
          <text x="517" y="94" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif">2 state returns</text>
          <line x1="468" y1="101" x2="566" y2="101" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <text x="517" y="115" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">Resident return</text>
          <text x="517" y="129" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)" fontFamily="sans-serif">+ Nonresident return</text>
          <text x="517" y="144" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Credit for taxes paid</text>
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
        Remote Work and State Taxes: What You Need to Know (2026)
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Published July 3, 2026 &middot; 9 min read
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Remote work changed where millions of Americans do their jobs &mdash; but it did not simplify their taxes. If you live in one state and work for an employer based in another, you may owe income tax in <em>both</em> states, not just the one where you live. In some cases, you could even owe taxes to a state you have never physically set foot in.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This guide explains the rules clearly: when you owe taxes in one state, when you owe in two, and the specific quirks &mdash; like New York&rsquo;s &ldquo;convenience of the employer&rdquo; rule &mdash; that catch remote workers off guard every tax season.
      </p>

      {/* Section 1 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Why Remote Work Creates a State Tax Problem
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Each state taxes income based on one of two principles:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Residency:</strong> Your home state taxes all of your income, no matter where you earned it.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Source:</strong> The state where the work is performed has the right to tax income earned there.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you work in an office in the same state where you live, this is simple: one state, one return. When you work remotely for an out-of-state employer, two states may want a cut of the same paycheck &mdash; creating potential double taxation unless one state gives you a credit for taxes paid to the other.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is no single federal rule governing this situation.{' '}
        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/state-income-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          The IRS
        </a>{' '}
        only handles federal taxes. State-level rules are determined by each state individually, and they do not all agree with each other.
      </p>

      {/* Section 2 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Your Home State: It Taxes Everything
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Your <strong>domicile state</strong> &mdash; the state where you permanently live and intend to return to &mdash; taxes your <em>worldwide income</em>. That means all of your wages, regardless of where your employer is headquartered or where the work technically happens.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        For most remote workers, this means filing a full-year resident return in your home state every year, reporting every dollar of income. If you also owe taxes to another state, your home state typically offers a <strong>resident credit for taxes paid to other states</strong> &mdash; which is designed to prevent paying tax twice on the same money, at least in theory.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The credit is usually equal to the lesser of: (a) what you actually paid the other state, or (b) what you would have owed your home state on that same income. This means the credit can reduce &mdash; but not always eliminate &mdash; your double-tax burden.
      </p>

      {/* Section 3 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Easy Case: Reciprocity Agreements
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some neighboring states have <strong>reciprocity agreements</strong> that simplify everything. Under these agreements, you pay income tax only to your <em>home state</em> &mdash; even if you work for an employer in the other state. You do not file a return or pay withholding for the employer&rsquo;s state at all.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Reciprocity agreements are most common in the Mid-Atlantic and Midwest regions. Here are some key examples:
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Has Reciprocity With</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Pennsylvania', 'Indiana, Maryland, New Jersey, Ohio, Virginia, West Virginia, Wisconsin, Michigan'],
              ['Virginia', 'Washington DC, Kentucky, Maryland, Pennsylvania, West Virginia'],
              ['Maryland', 'Washington DC, Pennsylvania, Virginia, West Virginia'],
              ['Ohio', 'Indiana, Kentucky, Michigan, Pennsylvania, West Virginia, Wisconsin'],
              ['Michigan', 'Illinois, Indiana, Kentucky, Minnesota, Ohio, Wisconsin'],
              ['Illinois', 'Iowa, Kentucky, Michigan, Wisconsin'],
              ['Wisconsin', 'Illinois, Indiana, Kentucky, Michigan'],
            ].map(([state, partners], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{state}</td>
                <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>{partners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Note: Reciprocity agreements can change. Always verify current agreements with your state&rsquo;s department of revenue before filing. Major states like New York and California do <strong>not</strong> have reciprocity agreements.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you live in New Jersey and your employer is in Pennsylvania, you are in luck &mdash; NJ and PA have reciprocity. Your employer should only withhold NJ income tax, and you file only in NJ. No PA return required.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To take advantage of reciprocity, you typically need to submit a <strong>certificate of non-residence</strong> (sometimes called a reciprocity exemption form) to your employer. Each state has its own version of this form. Once submitted, your employer will stop withholding the employer state&rsquo;s tax and withhold for your home state instead.
      </p>

      {/* Section 4 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Hard Case: No Reciprocity, Two Returns
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your home state and your employer&rsquo;s state do <strong>not</strong> have a reciprocity agreement, the general rule is that you file two state returns: a <strong>full-year resident return</strong> in your home state and a <strong>nonresident return</strong> in your employer&rsquo;s state for income earned there. Your home state then gives you a credit for taxes paid to the other state.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        There is an important nuance for remote workers: most states only have the right to tax income earned <em>within their borders</em>. If you physically work from your home in State A and never step into your employer&rsquo;s State B offices, does State B actually have a claim on your income?
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In most states, the answer is <strong>no</strong>. If you perform the work in your home state, your income is sourced to your home state. But there are important exceptions.
      </p>

      {/* Section 5 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The &ldquo;Convenience of the Employer&rdquo; Rule: New York&rsquo;s Unique Trap
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Several states &mdash; most notably <strong>New York</strong> &mdash; use what is known as the <strong>&ldquo;convenience of the employer&rdquo; rule</strong>. Under this rule, if you work remotely for a New York-based employer and you are doing so out of your own <em>convenience</em> rather than because your employer requires it, New York treats your income as New York-source income and taxes it accordingly.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        This means a remote worker living in New Jersey, Connecticut, or Pennsylvania &mdash; who never physically enters New York &mdash; could still owe New York income tax on their full salary, simply because their employer is headquartered in New York.{' '}
        <a href="https://www.tax.ny.gov/pit/file/nonresident_allocation.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (NYS Department of Taxation and Finance &mdash; Nonresident Allocation)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        To escape New York&rsquo;s rule, you generally need to show that your remote work is for the <em>employer&rsquo;s necessity</em>, not personal convenience. This means your employer must establish a &ldquo;bona fide employer office&rdquo; at your home location, and you must be required &mdash; not just permitted &mdash; to work remotely. This is a high bar that most remote workers cannot meet.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Other states that have applied similar convenience-of-the-employer logic include Connecticut, Delaware, Nebraska, Pennsylvania, and Arkansas, though the details and enforcement rigor vary by state.{' '}
        <a href="https://www.ncsl.org/fiscal/telecommuting-and-state-income-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (National Conference of State Legislatures &mdash; Telecommuting and State Income Tax)
        </a>
      </p>

      {/* Section 6: Worked Example */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Worked Example: Remote Worker for a New York Employer
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Let&rsquo;s look at a concrete example. Jordan lives in New Jersey and works fully remotely for a company headquartered in New York City. Jordan&rsquo;s salary is <strong>$80,000</strong>. Jordan works from home 100% of the time and never visits the NYC office.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Because New York applies the convenience of the employer rule, New York claims the right to tax Jordan&rsquo;s entire $80,000 salary. New York and New Jersey do <em>not</em> have a reciprocity agreement. Jordan must file two state returns: a <strong>NY nonresident return</strong> and a <strong>NJ full-year resident return</strong>. NJ credits the NY taxes paid against NJ&rsquo;s tax on the same income.
      </p>

      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        The Tax Math at $80,000
      </h3>

      <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
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
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Scenario</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>NY Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>NJ Tax</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>Total State Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#ffffff' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>
                With NY convenience rule (files in NY + NJ)
              </td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>
                $4,250
              </td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>
                $0 (fully credited)
              </td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>
                $4,250
              </td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>
                Without NY rule (files in NJ only, as intended)
              </td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#475569' }}>
                $0
              </td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>
                $2,970
              </td>
              <td style={{ padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", color: '#dc2626' }}>
                $2,970
              </td>
            </tr>
            <tr style={{ background: '#fef2f2' }}>
              <td
                colSpan={3}
                style={{ padding: '0.75rem 1rem', borderTop: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' }}
              >
                Extra annual tax cost of the NY convenience rule
              </td>
              <td
                style={{
                  padding: '0.75rem 1rem',
                  borderTop: '2px solid #e2e8f0',
                  textAlign: 'right',
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#dc2626',
                }}
              >
                +$1,280
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Estimates using 2026 NY and NJ tax brackets for a single filer. NY nonresident tax on $80,000 ≈ $4,250. NJ tax on $80,000 ≈ $2,970. Because the NY tax exceeds the NJ tax on the same income, the NJ credit wipes out Jordan&rsquo;s full NJ liability. Jordan is not double-taxed on the full amount &mdash; but pays $1,280 more than a comparable NJ worker employed by an NJ company.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Here is how the New York tax at $80,000 breaks down across its brackets (nonresident, single filer):
      </p>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.875rem',
          color: '#475569',
          lineHeight: 1.9,
        }}
      >
        <div>$17,150 &times; 4.00% &nbsp;&nbsp;= $686.00</div>
        <div>$6,450 &times; 4.50% &nbsp;&nbsp;&nbsp;= $290.25</div>
        <div>$4,300 &times; 5.25% &nbsp;&nbsp;&nbsp;= $225.75</div>
        <div>$52,100 &times; 5.85% &nbsp;&nbsp;= $3,047.85</div>
        <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '0.5rem', paddingTop: '0.5rem', fontWeight: 700, color: '#1e293b' }}>
          Total NY tax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= $4,249.85 (&asymp; $4,250)
        </div>
      </div>

      {/* Section 7 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        California&rsquo;s Rules for Remote Workers
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        California deserves special mention because of how aggressively it pursues former residents and out-of-state remote workers. California taxes income on a <strong>source basis</strong>: if you perform work physically inside California, you owe California income tax on that income.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        But California also has strict <strong>residency rules</strong>. If you move out of California to work remotely from another state, California may still consider you a California resident &mdash; and tax your full income &mdash; if you maintain California ties (a driver&rsquo;s license, bank accounts, property, or frequent visits). California uses a &ldquo;domicile&rdquo; test and a &ldquo;safe harbor&rdquo; rule that requires you to be out of state for at least <strong>546 consecutive days</strong> before California stops treating you as a resident.{' '}
        <a href="https://www.ftb.ca.gov/file/personal/residency/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (California Franchise Tax Board &mdash; Residency)
        </a>
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If you moved from California to a no-income-tax state like Texas and are working remotely for your California employer, do not assume you have escaped California taxes. The California Franchise Tax Board actively audits people who claim to have moved out, and they scrutinize where your family lives, where your car is registered, and how often you return to the state.
      </p>

      {/* Section 8 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What If You Work Across Multiple States?
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Some workers &mdash; consultants, traveling employees, or people who relocated mid-year &mdash; may owe taxes in three or more states. This happens when:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>You lived in State A for part of the year and State B for the rest, triggering two part-year resident returns.</li>
        <li style={{ marginBottom: '0.5rem' }}>You traveled to client sites and physically performed work in multiple states.</li>
        <li style={{ marginBottom: '0.5rem' }}>You had multiple employers based in different states during the year.</li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Most states require nonresidents to file a return if they earned income from work physically performed within that state above a certain dollar threshold. Some states have <em>de minimis</em> exceptions &mdash; not requiring a return if you only worked there a day or two. But many states have no such threshold, meaning even one day at an in-person conference could technically create a filing obligation.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        In practice, many employers track &ldquo;business travel days&rdquo; per state specifically to help allocate income for tax purposes. If your employer asks you to log which states you worked in during a year, this is exactly why.{' '}
        <a href="https://www.bls.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (Bureau of Labor Statistics)
        </a>
      </p>

      {/* Section 9 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Withholding Problem: What Ends Up on Your Paycheck
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        When you work remotely for an out-of-state employer, your employer&rsquo;s payroll system may not automatically know to withhold for both states. This creates two common problems:
      </p>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Employer withholds only for their home state</strong> &mdash; leaving you with a big tax bill in your home state at tax time (and potentially a refund from the employer&rsquo;s state).
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Employer withholds only for your home state</strong> &mdash; fine in most situations, but if the employer&rsquo;s state uses the convenience rule (like New York), you may still owe that state at tax time.
        </li>
      </ul>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The fix is to communicate directly with your employer&rsquo;s payroll department. Once they understand your situation, they can often set up split withholding &mdash; withholding the correct amount for each state so you do not face a surprise bill in April.{' '}
        <a href="https://www.irs.gov/taxtopics/tc753" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          (IRS Topic 753 &mdash; W-4 Withholding)
        </a>
      </p>

      {/* Section 10 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        What Remote Workers Should Do: A Practical Checklist
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1rem' }}>
        Here is what to do if you work remotely for an employer based in a different state:
      </p>

      <ol style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Check for a reciprocity agreement</strong> between your home state and your employer&rsquo;s state. If one exists, submit a certificate of non-residence to your employer so they withhold only for your home state. You file one state return.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>If no reciprocity exists, check whether the employer&rsquo;s state uses a convenience of the employer rule.</strong> New York is the most important one to check. If it applies, plan to file in both states and claim the resident credit in your home state.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Update your withholding with your employer.</strong> Ask payroll to split withholding correctly between states so your paychecks cover what you will actually owe. This prevents a large tax bill in April.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Track days worked in each state.</strong> If you travel for work or visit the employer&rsquo;s office occasionally, log those days. Many states require nonresidents to allocate income based on in-state workdays vs. total workdays for the year.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>If you recently moved, sever ties with your old state.</strong> Change your driver&rsquo;s license, voter registration, and car registration to your new state promptly. Keep records of your move date.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Consider a tax professional for multi-state returns.</strong> Filing in two or more states adds complexity and cost to your return &mdash; both financially and in terms of the time required. A CPA or enrolled agent who handles multi-state filers is worth the fee if your situation is complicated.
        </li>
      </ol>

      {/* Section 11 */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        Common Mistakes Remote Workers Make
      </h2>

      <ul style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Assuming &ldquo;I never go to their state&rdquo; means &ldquo;I don&rsquo;t owe their state taxes.&rdquo;</strong> The convenience of the employer rule in New York and similar states directly breaks this assumption.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Failing to notify the employer about a state move.</strong> If you relocate mid-year without telling payroll, your employer continues withholding for the wrong state. You will owe one state and get a refund from the other &mdash; annoying and avoidable.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Thinking reciprocity kicks in automatically.</strong> Reciprocity only applies once you submit the proper non-residence certificate to your employer. Until you do, your employer likely withholds for their state by default.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Ignoring occasional in-person office days.</strong> Even a few visits to the employer&rsquo;s state headquarters may create a filing obligation for those days &mdash; and may also undermine a &ldquo;necessity&rdquo; argument for escaping a state&rsquo;s convenience rule.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Assuming you fully escape California taxes by moving.</strong> California&rsquo;s 546-day safe harbor and aggressive residency audits mean former Californians need to be deliberate and documented about their move.
        </li>
      </ul>

      {/* Bottom line */}
      <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
        The Bottom Line
      </h2>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        Remote work does not simplify your state taxes &mdash; and in some cases it makes them significantly more complex. Your home state always taxes all of your income. Your employer&rsquo;s state may also claim the right to tax your income, especially if it applies a convenience of the employer rule like New York does.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        If your two states have a reciprocity agreement, you may only need one return. If they do not, expect to file two. Credits for taxes paid to other states prevent the worst of double taxation, but they do not always bring your total bill down to what a same-state worker would pay &mdash; as Jordan&rsquo;s $1,280 extra cost shows.
      </p>

      <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' }}>
        The best defense is knowledge: understand which rules apply to your situation, tell your employer so withholding is accurate from the start, and file all required returns on time. When your situation spans multiple states or involves states with aggressive rules, a CPA who specializes in multi-state returns is worth every dollar.
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
          See Your Real Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary and select your state to see a full paycheck breakdown &mdash; federal tax, state tax, FICA, and net pay &mdash; all in seconds.
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
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/state-income-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS &mdash; State Income Tax
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.tax.ny.gov/pit/file/nonresident_allocation.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            NYS Department of Taxation and Finance &mdash; Nonresident Income Allocation
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ftb.ca.gov/file/personal/residency/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            California Franchise Tax Board &mdash; Residency
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ncsl.org/fiscal/telecommuting-and-state-income-tax" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            National Conference of State Legislatures &mdash; Telecommuting and State Income Tax
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc753" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS &mdash; Topic 753: Form W-4, Employee&rsquo;s Withholding Certificate
          </a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-pdf/p15.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            IRS &mdash; Publication 15, Employer&rsquo;s Tax Guide
          </a>
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
