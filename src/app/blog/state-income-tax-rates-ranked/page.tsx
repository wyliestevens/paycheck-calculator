import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'Highest and Lowest State Income Tax Rates in 2026' },
  description:
    'All 50 states ranked by 2026 top income tax rate, from California at 13.3% to nine states at 0%, plus what each one costs on a $75,000 salary.',
  alternates: { canonical: '/blog/state-income-tax-rates-ranked' },
  keywords:
    'state income tax rates 2026, highest state income tax, lowest state income tax, state tax rates ranked, flat tax states, state income tax on 75000',
  openGraph: {
    type: 'article',
    url: '/blog/state-income-tax-rates-ranked',
    images: [{ url: '/og/blog/state-income-tax-rates-ranked', width: 1200, height: 630 }],
    title: 'Highest and Lowest State Income Tax Rates in 2026',
    description:
      'California tops the list at 13.3% and nine states charge 0% on wages. See every 2026 rate and what it costs on a $75,000 salary.',
  },
}

const p = { fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' } as const
const h2 = { fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' } as const
const h3 = { fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.75rem' } as const
const link = { color: '#2563eb', textDecoration: 'underline' } as const
const th = { padding: '0.75rem 1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#1e293b' } as const
const thR = { ...th, textAlign: 'right' } as const
const td = { padding: '0.625rem 1rem', borderBottom: '1px solid #e2e8f0', color: '#475569' } as const
const tdMono = { ...td, textAlign: 'right', fontFamily: "'JetBrains Mono', monospace" } as const

const TF_URL = 'https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/'

// Top marginal rate and the single-filer income where it starts, tax year 2026.
// Source: Tax Foundation, State Individual Income Tax Rates and Brackets, 2026.
const allStates: { state: string; rate: string; starts: string; type: string; link: string | null }[] = [
  { state: 'California', rate: '13.30%', starts: '$1,000,000', type: 'Graduated', link: '/california' },
  { state: 'Hawaii', rate: '11.00%', starts: '$325,000', type: 'Graduated', link: '/hawaii' },
  { state: 'New York', rate: '10.90%', starts: '$25,000,000', type: 'Graduated', link: '/new-york' },
  { state: 'New Jersey', rate: '10.75%', starts: '$1,000,000', type: 'Graduated', link: '/new-jersey' },
  { state: 'District of Columbia', rate: '10.75%', starts: '$1,000,000', type: 'Graduated', link: null },
  { state: 'Oregon', rate: '9.90%', starts: '$125,000', type: 'Graduated', link: '/oregon' },
  { state: 'Minnesota', rate: '9.85%', starts: '$203,150', type: 'Graduated', link: '/minnesota' },
  { state: 'Massachusetts', rate: '9.00%', starts: '$1,083,150', type: '5% flat plus 4% surtax', link: '/massachusetts' },
  { state: 'Vermont', rate: '8.75%', starts: '$249,700', type: 'Graduated', link: '/vermont' },
  { state: 'Wisconsin', rate: '7.65%', starts: '$332,720', type: 'Graduated', link: '/wisconsin' },
  { state: 'Maine', rate: '7.15%', starts: '$64,849', type: 'Graduated', link: '/maine' },
  { state: 'Connecticut', rate: '6.99%', starts: '$500,000', type: 'Graduated', link: '/connecticut' },
  { state: 'Delaware', rate: '6.60%', starts: '$60,000', type: 'Graduated', link: '/delaware' },
  { state: 'Maryland', rate: '6.50%', starts: '$1,000,000', type: 'Graduated', link: '/maryland' },
  { state: 'South Carolina', rate: '6.00%', starts: '$18,230', type: 'Graduated', link: '/south-carolina' },
  { state: 'Rhode Island', rate: '5.99%', starts: '$186,450', type: 'Graduated', link: '/rhode-island' },
  { state: 'New Mexico', rate: '5.90%', starts: '$210,000', type: 'Graduated', link: '/new-mexico' },
  { state: 'Virginia', rate: '5.75%', starts: '$17,000', type: 'Graduated', link: '/virginia' },
  { state: 'Montana', rate: '5.65%', starts: '$47,500', type: 'Graduated', link: '/montana' },
  { state: 'Kansas', rate: '5.58%', starts: '$23,000', type: 'Graduated', link: '/kansas' },
  { state: 'Idaho', rate: '5.30%', starts: '$4,811', type: 'Flat above exemption', link: '/idaho' },
  { state: 'Georgia', rate: '5.19%', starts: '$0', type: 'Flat', link: '/georgia' },
  { state: 'Alabama', rate: '5.00%', starts: '$3,000', type: 'Graduated', link: '/alabama' },
  { state: 'Illinois', rate: '4.95%', starts: '$0', type: 'Flat', link: '/illinois' },
  { state: 'West Virginia', rate: '4.82%', starts: '$60,000', type: 'Graduated', link: '/west-virginia' },
  { state: 'Missouri', rate: '4.70%', starts: '$9,436', type: 'Graduated', link: '/missouri' },
  { state: 'Nebraska', rate: '4.55%', starts: '$24,760', type: 'Graduated', link: '/nebraska' },
  { state: 'Utah', rate: '4.50%', starts: '$0', type: 'Flat', link: '/utah' },
  { state: 'Oklahoma', rate: '4.50%', starts: '$7,200', type: 'Graduated', link: '/oklahoma' },
  { state: 'Colorado', rate: '4.40%', starts: '$0', type: 'Flat', link: '/colorado' },
  { state: 'Michigan', rate: '4.25%', starts: '$0', type: 'Flat', link: '/michigan' },
  { state: 'Mississippi', rate: '4.00%', starts: '$10,000', type: 'Flat above exemption', link: '/mississippi' },
  { state: 'North Carolina', rate: '3.99%', starts: '$0', type: 'Flat', link: '/north-carolina' },
  { state: 'Arkansas', rate: '3.90%', starts: '$4,600', type: 'Graduated', link: '/arkansas' },
  { state: 'Iowa', rate: '3.80%', starts: '$0', type: 'Flat', link: '/iowa' },
  { state: 'Kentucky', rate: '3.50%', starts: '$0', type: 'Flat', link: '/kentucky' },
  { state: 'Pennsylvania', rate: '3.07%', starts: '$0', type: 'Flat', link: '/pennsylvania' },
  { state: 'Louisiana', rate: '3.00%', starts: '$0', type: 'Flat', link: '/louisiana' },
  { state: 'Indiana', rate: '2.95%', starts: '$0', type: 'Flat', link: '/indiana' },
  { state: 'Ohio', rate: '2.75%', starts: '$26,050', type: 'Flat above exemption', link: '/ohio' },
  { state: 'Arizona', rate: '2.50%', starts: '$0', type: 'Flat', link: '/arizona' },
  { state: 'North Dakota', rate: '2.50%', starts: '$244,825', type: 'Graduated', link: '/north-dakota' },
  { state: 'Alaska', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/alaska' },
  { state: 'Florida', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/florida' },
  { state: 'Nevada', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/nevada' },
  { state: 'New Hampshire', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/new-hampshire' },
  { state: 'South Dakota', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/south-dakota' },
  { state: 'Tennessee', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/tennessee' },
  { state: 'Texas', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/texas' },
  { state: 'Washington', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/washington' },
  { state: 'Wyoming', rate: '0%', starts: 'n/a', type: 'No wage tax', link: '/wyoming' },
]

// Computed with this site's calculator (calculateTakeHome), single filer, standard deduction, tax year 2026.
const computed = [
  { state: 'Oregon', slug: 'oregon', top: '9.90%', t50: '$3,834', t75: '$6,021', t100: '$8,209', eff: '8.03%', net: '$55,571' },
  { state: 'Massachusetts', slug: 'massachusetts', top: '9.00%', t50: '$2,500', t75: '$3,750', t100: '$5,000', eff: '5.00%', net: '$57,843' },
  { state: 'New York', slug: 'new-york', top: '10.90%', t50: '$2,243', t75: '$3,706', t100: '$5,214', eff: '4.94%', net: '$57,887' },
  { state: 'Illinois', slug: 'illinois', top: '4.95%', t50: '$2,475', t75: '$3,713', t100: '$4,950', eff: '4.95%', net: '$57,880' },
  { state: 'Minnesota', slug: 'minnesota', top: '9.85%', t50: '$1,949', t75: '$3,649', t100: '$5,349', eff: '4.87%', net: '$57,943' },
  { state: 'Virginia', slug: 'virginia', top: '5.75%', t50: '$2,158', t75: '$3,595', t100: '$5,033', eff: '4.79%', net: '$57,998' },
  { state: 'Georgia', slug: 'georgia', top: '5.19%', t50: '$1,972', t75: '$3,270', t100: '$4,567', eff: '4.36%', net: '$58,323' },
  { state: 'California', slug: 'california', top: '13.30%', t50: '$1,291', t75: '$3,113', t100: '$5,438', eff: '4.15%', net: '$58,480' },
  { state: 'New Jersey', slug: 'new-jersey', top: '10.75%', t50: '$1,270', t75: '$2,651', t100: '$4,244', eff: '3.54%', net: '$58,941' },
  { state: 'North Carolina', slug: 'north-carolina', top: '3.99%', t50: '$1,486', t75: '$2,484', t100: '$3,481', eff: '3.31%', net: '$59,109' },
  { state: 'Pennsylvania', slug: 'pennsylvania', top: '3.07%', t50: '$1,535', t75: '$2,303', t100: '$3,070', eff: '3.07%', net: '$59,290' },
  { state: 'Iowa', slug: 'iowa', top: '3.80%', t50: '$1,345', t75: '$2,295', t100: '$3,245', eff: '3.06%', net: '$59,297' },
  { state: 'Louisiana', slug: 'louisiana', top: '3.00%', t50: '$1,125', t75: '$1,875', t100: '$2,625', eff: '2.50%', net: '$59,718' },
  { state: 'Arizona', slug: 'arizona', top: '2.50%', t50: '$885', t75: '$1,510', t100: '$2,135', eff: '2.01%', net: '$60,083' },
  { state: 'Ohio', slug: 'ohio', top: '2.75%', t50: '$659', t75: '$1,346', t100: '$2,034', eff: '1.79%', net: '$60,246' },
  { state: 'Texas', slug: 'texas', top: '0%', t50: '$0', t75: '$0', t100: '$0', eff: '0.00%', net: '$61,593' },
]

const changes = [
  { state: 'Kentucky', from: '4.00%', to: '3.50%', note: 'Flat rate cut by House Bill 1 (2025).', slug: 'kentucky' },
  { state: 'Nebraska', from: '5.20%', to: '4.55%', note: 'Top bracket rate cut.', slug: 'nebraska' },
  { state: 'Mississippi', from: '4.40%', to: '4.00%', note: 'Rate on income above the $10,000 exempt amount.', slug: 'mississippi' },
  { state: 'North Carolina', from: '4.25%', to: '3.99%', note: 'Flat rate cut.', slug: 'north-carolina' },
  { state: 'Montana', from: '5.90%', to: '5.65%', note: 'Top bracket rate cut.', slug: 'montana' },
  { state: 'Oklahoma', from: '4.75%', to: '4.50%', note: 'Top bracket rate cut.', slug: 'oklahoma' },
  { state: 'Indiana', from: '3.00%', to: '2.95%', note: 'State rate only. Counties add their own rate.', slug: 'indiana' },
  { state: 'Ohio', from: 'Graduated', to: '2.75%', note: 'Now one rate on nonbusiness income above $26,050.', slug: 'ohio' },
]

export default function StateIncomeTaxRatesRankedPost() {
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
          width="100%"
          height="auto"
          style={{ borderRadius: '12px', display: 'block' }}
          role="img"
          aria-label="Bar chart of 2026 top state income tax rates, from California at 13.3 percent down to nine states at 0 percent"
        >
          <rect width="600" height="200" rx="12" fill="#dc2626" />
          <text x="300" y="30" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="700">
            2026 Top State Income Tax Rates
          </text>
          <line x1="30" y1="170" x2="570" y2="170" stroke="#fecaca" strokeWidth="1" />
          {[
            { label: 'CA', rate: '13.3', h: 120, x: 40 },
            { label: 'HI', rate: '11.0', h: 99, x: 85 },
            { label: 'NY', rate: '10.9', h: 98, x: 130 },
            { label: 'NJ', rate: '10.75', h: 97, x: 175 },
            { label: 'OR', rate: '9.9', h: 89, x: 220 },
            { label: 'MN', rate: '9.85', h: 89, x: 265 },
            { label: 'IN', rate: '2.95', h: 27, x: 330 },
            { label: 'OH', rate: '2.75', h: 25, x: 375 },
            { label: 'AZ', rate: '2.5', h: 23, x: 420 },
            { label: 'ND', rate: '2.5', h: 23, x: 465 },
          ].map((bar) => (
            <g key={bar.label}>
              <rect x={bar.x} y={170 - bar.h} width="32" height={bar.h} rx="3" fill={bar.h > 50 ? '#ffffff' : '#fde68a'} />
              <text x={bar.x + 16} y={165 - bar.h} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" fontFamily="'JetBrains Mono', monospace">
                {bar.rate}
              </text>
              <text x={bar.x + 16} y="186" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600" fontFamily="'JetBrains Mono', monospace">
                {bar.label}
              </text>
            </g>
          ))}
          <rect x="512" y="150" width="56" height="20" rx="4" fill="#991b1b" />
          <text x="540" y="164" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">0%</text>
          <text x="540" y="186" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600">9 states</text>
        </svg>
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#1e293b',
          marginBottom: '1rem',
        }}
      >
        Highest and Lowest State Income Tax Rates in 2026
      </h1>

      <ArticleMeta slug="state-income-tax-rates-ranked" />

      {/* In short */}
      <div
        style={{
          background: '#eef2ff',
          border: '1px solid #c7d2fe',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '0.5rem' }}>
          In short
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          California has the highest state income tax rate in 2026 at <strong>13.3%</strong>, followed by Hawaii (11%), New York (10.9%), and New Jersey (10.75%). Arizona and North Dakota have the lowest nonzero top rate at <strong>2.5%</strong>, and nine states charge nothing on wages. But the top rate is a poor guide to your own bill: on a $75,000 salary, Oregon takes <strong>$6,021</strong> while California takes $3,113, according to this site&rsquo;s calculator.
        </p>
      </div>

      <p style={p}>
        How much of each paycheck goes to state income tax depends on where you live and how much you earn. Most rankings sort states by their top marginal rate, the rate on the last dollar of the highest bracket. That number matters if you earn seven figures. For most workers it hides more than it shows.
      </p>

      <p style={p}>
        This guide gives you both views. First, every state ranked by its 2026 top rate and the income where that rate starts. Then, the dollar amount each of 16 states actually takes from a $50,000, $75,000, and $100,000 salary, computed with this site&rsquo;s own paycheck calculator for a single filer taking the standard deduction. The two lists look very different, and the gap between them is the most useful thing to understand before you compare job offers or plan a move.
      </p>

      {/* Big picture */}
      <h2 style={h2}>How many states have a state income tax in 2026?</h2>

      <p style={p}>
        For tax year 2026, <strong>41 states and Washington, D.C.</strong> tax wage income. Of those, 15 use a single flat rate (a few of them exempt a first slice of income) and 26 plus D.C. use graduated brackets, according to the{' '}
        <a href={TF_URL} target="_blank" rel="noopener noreferrer" style={link}>Tax Foundation&rsquo;s 2026 state rate table</a>.
      </p>

      <p style={p}>
        The other <strong>nine states</strong> do not tax wages: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Washington taxes some large capital gains, but not paychecks. Our{' '}
        <a href="/blog/states-with-no-income-tax" style={link}>guide to the no-income-tax states</a> covers how those nine raise money instead.
      </p>

      {/* Full ranked table */}
      <h2 style={h2}>Which state has the highest income tax rate?</h2>

      <p style={p}>
        <a href="/california" style={link}>California</a> does, at 13.3%. That figure includes a 1% surcharge on income above $1 million, so almost no one pays it. Hawaii, New York, New Jersey, and D.C. round out the top five. The table below ranks all 50 states plus D.C. by 2026 top rate, with the single-filer income where the top rate begins. Click a state to run its calculator.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#fef2f2' }}>
              <th style={th}>#</th>
              <th style={th}>State</th>
              <th style={thR}>Top rate</th>
              <th style={thR}>Top rate starts at</th>
              <th style={th}>Structure</th>
            </tr>
          </thead>
          <tbody>
            {allStates.map((row, i) => (
              <tr key={row.state} style={{ background: row.rate === '0%' ? '#f0fdf4' : 'transparent' }}>
                <td style={{ ...td, fontFamily: "'JetBrains Mono', monospace", color: '#94a3b8' }}>{row.rate === '0%' ? '' : i + 1}</td>
                <td style={{ ...td, fontWeight: 600, color: '#1e293b' }}>
                  {row.link ? (
                    <a href={row.link} style={{ color: '#2563eb', textDecoration: 'none' }}>{row.state}</a>
                  ) : row.state}
                </td>
                <td style={{ ...tdMono, fontWeight: 700, color: row.rate === '0%' ? '#059669' : '#dc2626' }}>{row.rate}</td>
                <td style={tdMono}>{row.starts}</td>
                <td style={{ ...td, fontSize: '0.8125rem' }}>{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Source:{' '}
        <a href={TF_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          Tax Foundation, State Individual Income Tax Rates and Brackets, 2026
        </a>
        . Single filer. Excludes city and county income taxes.
      </p>

      <p style={p}>
        Look at the third column before you look at the second. New York&rsquo;s 10.9% starts at $25 million. North Dakota&rsquo;s 2.5% starts at $244,825, so most North Dakota workers pay a lower rate than that. Meanwhile, Maine&rsquo;s 7.15% starts at $64,849 and Oregon&rsquo;s 9.9% starts at $125,000. A state with a high rate that kicks in early will cost an ordinary salary far more than a state with a higher rate reserved for millionaires.
      </p>

      {/* Lowest */}
      <h2 style={h2}>Which states have the lowest income tax rates?</h2>

      <p style={p}>
        Among states that tax wages, the lowest top rates in 2026 are Arizona and North Dakota (2.5%), Ohio (2.75%), Indiana (2.95%), Louisiana (3%), Pennsylvania (3.07%), Kentucky (3.5%), Iowa (3.8%), Arkansas (3.9%), and North Carolina (3.99%). Eight of those ten use a flat rate.
      </p>

      <p style={p}>
        Three of them come with a catch. Indiana counties and many Pennsylvania municipalities add their own local income tax on top of the state rate, and Ohio has city income taxes as well. If you live in one of those places, your total rate can be well above the state figure. Our{' '}
        <a href="/blog/local-income-taxes-2026" style={link}>guide to local income taxes</a> explains how those show up on your pay stub.
      </p>

      {/* Computed table */}
      <h2 style={h2}>How much state income tax will you actually pay?</h2>

      <p style={p}>
        Here is the part most rankings leave out. The table below shows the state income tax this site&rsquo;s calculator computes for a single filer taking the standard deduction, at three common salaries, in 16 states. It is sorted by the tax on $75,000. The last column is your full annual take-home pay at $75,000 after federal income tax, Social Security, Medicare, and state tax.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>State</th>
              <th style={thR}>Top rate</th>
              <th style={thR}>Tax on $50k</th>
              <th style={thR}>Tax on $75k</th>
              <th style={thR}>Tax on $100k</th>
              <th style={thR}>Effective at $75k</th>
              <th style={thR}>Take-home at $75k</th>
            </tr>
          </thead>
          <tbody>
            {computed.map((row) => (
              <tr key={row.state}>
                <td style={{ ...td, fontWeight: 600 }}>
                  <a href={`/${row.slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{row.state}</a>
                </td>
                <td style={tdMono}>{row.top}</td>
                <td style={tdMono}>{row.t50}</td>
                <td style={{ ...tdMono, fontWeight: 700, color: '#dc2626' }}>{row.t75}</td>
                <td style={tdMono}>{row.t100}</td>
                <td style={tdMono}>{row.eff}</td>
                <td style={{ ...tdMono, color: '#059669', fontWeight: 600 }}>{row.net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.5rem' }}>
        Computed with the paycheck.center calculator for tax year 2026: single filer, standard deduction, no pre-tax deductions, no local tax, no state credits. Federal tax uses the 2026 brackets and the $16,100 standard deduction from{' '}
        <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Rev. Proc. 2025-32</a>
        . Federal tax ($7,670), Social Security ($4,650), and Medicare ($1,087.50) on $75,000 are the same in every state.
      </p>

      <p style={p}>Three things jump out.</p>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>California is not the costliest state at $75,000.</strong> It has the highest top rate in the country, yet its $3,113 bill is lower than Illinois&rsquo;s flat 4.95% ($3,713) and about half of Oregon&rsquo;s ($6,021). California&rsquo;s brackets start low and climb slowly, so a middle-income worker never reaches the high rates.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Oregon is the real outlier for middle incomes.</strong> Its rate reaches 8.75% at a modest income, and its standard deduction is small. At $75,000 it takes 8.03% of your pay, the highest effective rate in this table.
        </li>
        <li>
          <strong>Flat states keep the same share at every salary.</strong> Pennsylvania takes 3.07% of $50,000 and 3.07% of $100,000. A graduated state like New Jersey takes 2.54% of $50,000 but 4.24% of $100,000. If you expect big raises, the gap between a flat state and a graduated one widens every year.
        </li>
      </ul>

      {/* Flat vs Progressive */}
      <h2 style={h2}>Is a flat tax better than a progressive tax?</h2>

      <p style={p}>
        Neither is better for everyone. It depends on what you earn and on the details of each state&rsquo;s brackets and deductions.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2563eb', marginBottom: '0.5rem' }}>Flat tax</h3>
          <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            One rate on every taxable dollar. Easy to predict: double your salary and your state tax roughly doubles. Some flat states, like Ohio and Mississippi, exempt a first slice of income, which makes them gentler on lower earners.
          </p>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#dc2626', marginBottom: '0.5rem' }}>Graduated (progressive) tax</h3>
          <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            Income is split into brackets and each bracket has its own rate. Only the dollars inside a bracket pay that bracket&rsquo;s rate. A raise never lowers your take-home pay, even when it moves you into a higher bracket.
          </p>
        </div>
      </div>

      <p style={p}>
        A simple decision rule: compare the <strong>effective rate at your salary</strong>, not the top rate. If you earn under about $100,000, a graduated state with a high top rate (California, New Jersey) can cost less than a flat state with a rate near 5% (Illinois, Massachusetts). If you earn several hundred thousand dollars, the top rate starts to matter, and flat states usually win. To see how a raise moves through the brackets, read{' '}
        <a href="/blog/what-happens-to-taxes-when-you-get-a-raise" style={link}>what happens to your taxes when you get a raise</a>.
      </p>

      {/* Worked example */}
      <h2 style={h2}>Worked example: $75,000 in Pennsylvania, step by step</h2>

      <p style={p}>
        Pennsylvania is the cleanest state to show by hand, because it taxes gross compensation at a flat 3.07% with no standard deduction. Here is the full path from gross pay to take-home pay for a single filer in 2026, using the federal figures this site reads from IRS Rev. Proc. 2025-32 and the 6.2% Social Security and 1.45% Medicare rates.
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
          color: '#1e293b',
          lineHeight: 1.8,
          overflowX: 'auto',
        }}
      >
        Gross salary: $75,000.00<br />
        <br />
        Federal taxable income: $75,000 &minus; $16,100 = $58,900<br />
        &nbsp;&nbsp;10% &times; $12,400 = $1,240.00<br />
        &nbsp;&nbsp;12% &times; ($50,400 &minus; $12,400) = 12% &times; $38,000 = $4,560.00<br />
        &nbsp;&nbsp;22% &times; ($58,900 &minus; $50,400) = 22% &times; $8,500 = $1,870.00<br />
        &nbsp;&nbsp;Federal income tax = <strong>$7,670.00</strong><br />
        <br />
        Social Security: $75,000 &times; 6.2% = <strong>$4,650.00</strong><br />
        Medicare: $75,000 &times; 1.45% = <strong>$1,087.50</strong><br />
        Pennsylvania: $75,000 &times; 3.07% = <strong>$2,302.50</strong><br />
        <br />
        Total taxes: $7,670 + $4,650 + $1,087.50 + $2,302.50 = $15,710.00<br />
        Take-home: $75,000 &minus; $15,710 = <strong>$59,290.00</strong> a year<br />
        Per biweekly paycheck: $59,290 &divide; 26 = <strong>$2,280.38</strong>
      </div>

      <p style={p}>
        Now swap only the state line. In Texas the state tax is $0, so take-home is $61,593. In Oregon the calculator puts state tax at $6,021, so take-home is $55,571. Same job, same salary, a $6,022 gap a year, or about $232 per biweekly paycheck. If you are weighing offers in different states, our{' '}
        <a href="/blog/compare-job-offers-across-states" style={link}>guide to comparing job offers across states</a> walks through the full method.
      </p>

      <p style={p}>
        Most Pennsylvania municipalities also levy a local earned income tax, which this example leaves out. Check the rate for your town before you budget.
      </p>

      {/* Recent changes */}
      <h2 style={h2}>Which states cut income tax rates for 2026?</h2>

      <p style={p}>
        Eight states lowered their top rate or switched structure for tax year 2026, according to the{' '}
        <a href={TF_URL} target="_blank" rel="noopener noreferrer" style={link}>Tax Foundation</a>. For Kentucky, the cut to 3.5% is set out in the{' '}
        <a href="https://apps.legislature.ky.gov/recorddocuments/note/25RS/hb1/FN.pdf" target="_blank" rel="noopener noreferrer" style={link}>Kentucky Legislature&rsquo;s fiscal note on 2025 House Bill 1</a>.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#ecfdf5' }}>
              <th style={th}>State</th>
              <th style={thR}>2025 top rate</th>
              <th style={thR}>2026 top rate</th>
              <th style={th}>What changed</th>
            </tr>
          </thead>
          <tbody>
            {changes.map((row) => (
              <tr key={row.state}>
                <td style={{ ...td, fontWeight: 600 }}>
                  <a href={`/${row.slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{row.state}</a>
                </td>
                <td style={tdMono}>{row.from}</td>
                <td style={{ ...tdMono, fontWeight: 700, color: '#059669' }}>{row.to}</td>
                <td style={{ ...td, fontSize: '0.8125rem' }}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={p}>
        When a state cuts its rate, your employer&rsquo;s payroll system picks up the new withholding tables in January. You do not need to file anything. Your first paycheck of the year simply shows a smaller state tax line. If it does not, ask your payroll team whether the new tables were loaded.
      </p>

      {/* Mistake */}
      <h2 style={h2}>The costly mistake: moving for a lower top rate</h2>

      <p style={p}>
        The most common mistake is reading the top-rate list and assuming a move will save you that difference. Someone earning $75,000 who leaves California (13.3% top rate) for Illinois (4.95% flat) expecting to save money would actually pay $600 more in state income tax a year, according to the table above. That is about $23 per biweekly paycheck going the wrong way.
      </p>

      <p style={p}>
        Income tax is also only one piece of the cost. States without an income tax often lean on sales and property taxes. Our{' '}
        <a href="/blog/state-sales-tax-rates-2026" style={link}>2026 state sales tax guide</a> and{' '}
        <a href="/blog/moving-for-a-job-state-tax-implications" style={link}>moving for a job tax guide</a> cover the rest of the picture.
      </p>

      {/* FAQ */}
      <h2 style={h2}>Frequently asked questions</h2>

      <h3 style={h3}>What state has the highest income tax in 2026?</h3>
      <p style={p}>
        California, with a top rate of 13.3% on income above $1 million. By effective rate on a typical salary, though, Oregon often takes more. At $75,000, Oregon&rsquo;s bill is $6,021 compared with California&rsquo;s $3,113.
      </p>

      <h3 style={h3}>What states have no income tax on wages?</h3>
      <p style={p}>
        Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Your paycheck in these states shows only federal income tax, Social Security, and Medicare. Washington does tax some large capital gains, which does not affect wages.
      </p>

      <h3 style={h3}>Do I pay state income tax where I live or where I work?</h3>
      <p style={p}>
        Usually both states can claim it, and your home state gives you a credit for tax paid to the work state. Some neighboring states have reciprocity agreements so you only pay your home state. Our{' '}
        <a href="/blog/state-tax-reciprocity-agreements" style={link}>reciprocity guide</a> lists them.
      </p>

      <h3 style={h3}>Does the top tax rate apply to all of my income?</h3>
      <p style={p}>
        No. In a graduated state, each rate applies only to the dollars inside its bracket. That is why California&rsquo;s effective rate at $75,000 is 4.15%, far below its 9.3% marginal rate at that salary and its 13.3% top rate.
      </p>

      <h3 style={h3}>Why does my state tax differ from what a ranking says?</h3>
      <p style={p}>
        Rankings show statutory rates. Your actual bill also depends on the state standard deduction or exemption, credits, local taxes, and pre-tax deductions such as a 401(k). The calculator below applies the state&rsquo;s deduction and brackets to your own salary.
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
          See Your State Tax on Your Own Salary
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Pick your state, enter your pay, and see federal tax, state tax, Social Security, Medicare, and what lands in your account each payday.
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
          <a href={TF_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Tax Foundation: State Individual Income Tax Rates and Brackets, 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Rev. Proc. 2025-32: 2026 tax brackets and standard deduction</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>SSA.gov: Contribution and Benefit Base</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>IRS Topic 751: Social Security and Medicare withholding rates</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://apps.legislature.ky.gov/recorddocuments/note/25RS/hb1/FN.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Kentucky Legislature: fiscal note, 2025 House Bill 1</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.revenue.pa.gov/TaxTypes/PIT/Pages/default.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Pennsylvania Department of Revenue: Personal Income Tax</a>
        </li>
      </ul>

      <ArticleFooter current="state-income-tax-rates-ranked" />
    </article>
  )
}
