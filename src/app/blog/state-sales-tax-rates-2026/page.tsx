import type { Metadata } from 'next'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleMeta from '@/components/ArticleMeta'

export const metadata: Metadata = {
  title: { absolute: 'State Sales Tax Rates Ranked for 2026: Where You Pay the Most (and Least)' },
  description:
    'Louisiana tops 2026 at 10.13% combined sales tax and five states charge no state rate. All 50 ranked, plus what sales tax costs on a $70,000 paycheck.',
  alternates: { canonical: '/blog/state-sales-tax-rates-2026' },
  keywords:
    'state sales tax rates 2026, highest sales tax states, no sales tax states, combined sales tax rate by state, sales tax comparison 2026, sales tax vs income tax by state',
  openGraph: {
    type: 'article',
    url: '/blog/state-sales-tax-rates-2026',
    images: [{ url: '/og/blog/state-sales-tax-rates-2026', width: 1200, height: 630 }],
    title: 'State Sales Tax Rates Ranked for 2026: Where You Pay the Most (and Least)',
    description:
      'Louisiana tops 2026 at 10.13% combined sales tax. All 50 states ranked, plus income tax and sales tax together on a $70,000 salary.',
  },
}

const p = { fontSize: '1.0625rem', lineHeight: 1.75, color: '#1e293b', marginBottom: '1.5rem' } as const
const h2 = { fontSize: '1.375rem', fontWeight: 700, color: '#1e293b', marginTop: '2.5rem', marginBottom: '0.75rem' } as const
const h3 = { fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' } as const
const a = { color: '#2563eb', textDecoration: 'underline' } as const
const th = { padding: '0.625rem 0.875rem', borderBottom: '2px solid #e2e8f0', fontWeight: 600, color: '#1e293b' } as const
const td = { padding: '0.5rem 0.875rem', borderBottom: '1px solid #e2e8f0', color: '#1e293b' } as const
const mono = { fontFamily: "'JetBrains Mono', monospace" } as const
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

const salesTaxRates = [
  ['1', 'Louisiana', '5.00%', '5.13%', '10.13%'],
  ['2', 'Tennessee', '7.00%', '2.61%', '9.61%'],
  ['3', 'Washington', '6.50%', '3.07%', '9.57%'],
  ['4', 'Arkansas', '6.50%', '2.98%', '9.48%'],
  ['5', 'Alabama', '4.00%', '5.46%', '9.46%'],
  ['6', 'Oklahoma', '4.50%', '4.56%', '9.06%'],
  ['7', 'California', '7.25%', '1.78%', '9.03%'],
  ['8', 'Illinois', '6.25%', '2.73%', '8.98%'],
  ['9', 'Kansas', '6.50%', '2.21%', '8.71%'],
  ['10', 'New York', '4.00%', '4.54%', '8.54%'],
  ['10', 'Arizona', '5.60%', '2.94%', '8.54%'],
  ['12', 'Missouri', '4.23%', '4.22%', '8.44%'],
  ['13', 'Nevada', '6.85%', '1.39%', '8.24%'],
  ['14', 'Texas', '6.25%', '1.95%', '8.20%'],
  ['15', 'Minnesota', '6.88%', '1.26%', '8.14%'],
  ['16', 'Colorado', '2.90%', '4.99%', '7.89%'],
  ['17', 'New Mexico', '4.88%', '2.80%', '7.68%'],
  ['18', 'Georgia', '4.00%', '3.56%', '7.56%'],
  ['19', 'South Carolina', '6.00%', '1.49%', '7.49%'],
  ['20', 'Utah', '6.10%', '1.32%', '7.42%'],
  ['21', 'Ohio', '5.75%', '1.54%', '7.29%'],
  ['22', 'North Carolina', '4.75%', '2.35%', '7.10%'],
  ['23', 'North Dakota', '5.00%', '2.09%', '7.09%'],
  ['24', 'Mississippi', '7.00%', '0.06%', '7.06%'],
  ['25', 'Indiana', '7.00%', '0.00%', '7.00%'],
  ['25', 'Rhode Island', '7.00%', '0.00%', '7.00%'],
  ['27', 'Nebraska', '5.50%', '1.48%', '6.98%'],
  ['27', 'Florida', '6.00%', '0.98%', '6.98%'],
  ['29', 'Iowa', '6.00%', '0.94%', '6.94%'],
  ['30', 'New Jersey', '6.63%', '−0.02%', '6.60%'],
  ['30', 'West Virginia', '6.00%', '0.60%', '6.60%'],
  ['32', 'Vermont', '6.00%', '0.43%', '6.43%'],
  ['33', 'Connecticut', '6.35%', '0.00%', '6.35%'],
  ['34', 'Pennsylvania', '6.00%', '0.34%', '6.34%'],
  ['35', 'Massachusetts', '6.25%', '0.00%', '6.25%'],
  ['36', 'South Dakota', '4.20%', '1.91%', '6.11%'],
  ['37', 'Idaho', '6.00%', '0.03%', '6.03%'],
  ['38', 'Kentucky', '6.00%', '0.00%', '6.00%'],
  ['38', 'Maryland', '6.00%', '0.00%', '6.00%'],
  ['38', 'Michigan', '6.00%', '0.00%', '6.00%'],
  ['41', 'Virginia', '5.30%', '0.47%', '5.77%'],
  ['42', 'Wisconsin', '5.00%', '0.72%', '5.72%'],
  ['43', 'Maine', '5.50%', '0.00%', '5.50%'],
  ['44', 'Wyoming', '4.00%', '1.39%', '5.39%'],
  ['45', 'Hawaii', '4.00%', '0.50%', '4.50%'],
  ['46', 'Alaska', '0.00%', '1.82%', '1.82%'],
  ['47', 'Delaware', '0.00%', '0.00%', '0.00%'],
  ['47', 'Montana', '0.00%', '0.00%', '0.00%'],
  ['47', 'New Hampshire', '0.00%', '0.00%', '0.00%'],
  ['47', 'Oregon', '0.00%', '0.00%', '0.00%'],
]
const combined70k = [
  ['1', 'New Hampshire', 'new-hampshire', '$0', '$0', '$0', '$58,075'],
  ['2', 'Alaska', 'alaska', '$0', '$363', '$363', '$57,712'],
  ['3', 'Wyoming', 'wyoming', '$0', '$1,040', '$1,040', '$57,035'],
  ['4', 'South Dakota', 'south-dakota', '$0', '$1,170', '$1,170', '$56,905'],
  ['5', 'Florida', 'florida', '$0', '$1,326', '$1,326', '$56,749'],
  ['6', 'Texas', 'texas', '$0', '$1,540', '$1,540', '$56,535'],
  ['7', 'Nevada', 'nevada', '$0', '$1,547', '$1,547', '$56,528'],
  ['8', 'Washington', 'washington', '$0', '$1,775', '$1,775', '$56,300'],
  ['9', 'Tennessee', 'tennessee', '$0', '$1,782', '$1,782', '$56,293'],
  ['10', 'North Dakota', 'north-dakota', '$1,182', '$1,318', '$2,500', '$55,575'],
  ['11', 'Ohio', 'ohio', '$1,209', '$1,352', '$2,561', '$55,514'],
  ['12', 'Arizona', 'arizona', '$1,385', '$1,561', '$2,946', '$55,129'],
  ['13', 'Montana', 'montana', '$3,023', '$0', '$3,023', '$55,052'],
  ['14', 'Pennsylvania', 'pennsylvania', '$2,149', '$1,167', '$3,316', '$54,759'],
  ['15', 'Vermont', 'vermont', '$2,181', '$1,182', '$3,363', '$54,712'],
  ['16', 'Delaware', 'delaware', '$3,372', '$0', '$3,372', '$54,704'],
  ['17', 'Iowa', 'iowa', '$2,105', '$1,271', '$3,376', '$54,699'],
  ['18', 'Indiana', 'indiana', '$2,135', '$1,281', '$3,416', '$54,659'],
  ['19', 'Rhode Island', 'rhode-island', '$2,229', '$1,279', '$3,508', '$54,567'],
  ['20', 'Louisiana', 'louisiana', '$1,725', '$1,814', '$3,539', '$54,536'],
  ['21', 'North Carolina', 'north-carolina', '$2,284', '$1,294', '$3,579', '$54,496'],
  ['22', 'New Jersey', 'new-jersey', '$2,375', '$1,207', '$3,582', '$54,493'],
  ['23', 'Wisconsin', 'wisconsin', '$2,622', '$1,050', '$3,672', '$54,403'],
  ['24', 'Kentucky', 'kentucky', '$2,674', '$1,098', '$3,771', '$54,304'],
  ['25', 'New Mexico', 'new-mexico', '$2,435', '$1,389', '$3,824', '$54,251'],
  ['26', 'Colorado', 'colorado', '$2,438', '$1,424', '$3,862', '$54,213'],
  ['27', 'Nebraska', 'nebraska', '$2,614', '$1,267', '$3,880', '$54,195'],
  ['28', 'West Virginia', 'west-virginia', '$2,696', '$1,200', '$3,896', '$54,179'],
  ['29', 'South Carolina', 'south-carolina', '$2,700', '$1,350', '$4,051', '$54,024'],
  ['30', 'Missouri', 'missouri', '$2,549', '$1,513', '$4,062', '$54,013'],
  ['31', 'Michigan', 'michigan', '$2,975', '$1,092', '$4,067', '$54,008'],
  ['32', 'Maryland', 'maryland', '$3,151', '$1,088', '$4,239', '$53,836'],
  ['33', 'Arkansas', 'arkansas', '$2,560', '$1,683', '$4,242', '$53,833'],
  ['34', 'Mississippi', 'mississippi', '$2,979', '$1,272', '$4,250', '$53,825'],
  ['35', 'California', 'california', '$2,698', '$1,605', '$4,303', '$53,772'],
  ['36', 'Idaho', 'idaho', '$3,213', '$1,092', '$4,305', '$53,770'],
  ['37', 'Virginia', 'virginia', '$3,308', '$1,046', '$4,353', '$53,722'],
  ['38', 'Georgia', 'georgia', '$3,010', '$1,355', '$4,365', '$53,710'],
  ['39', 'Oklahoma', 'oklahoma', '$2,835', '$1,606', '$4,441', '$53,634'],
  ['40', 'Utah', 'utah', '$3,150', '$1,328', '$4,478', '$53,597'],
  ['41', 'Maine', 'maine', '$3,492', '$996', '$4,488', '$53,587'],
  ['42', 'Connecticut', 'connecticut', '$3,400', '$1,143', '$4,543', '$53,532'],
  ['43', 'Massachusetts', 'massachusetts', '$3,500', '$1,124', '$4,624', '$53,451'],
  ['44', 'Minnesota', 'minnesota', '$3,309', '$1,443', '$4,752', '$53,323'],
  ['45', 'Kansas', 'kansas', '$3,333', '$1,535', '$4,868', '$53,207'],
  ['46', 'New York', 'new-york', '$3,413', '$1,505', '$4,919', '$53,156'],
  ['47', 'Alabama', 'alabama', '$3,335', '$1,656', '$4,991', '$53,084'],
  ['48', 'Illinois', 'illinois', '$3,465', '$1,575', '$5,040', '$53,035'],
  ['49', 'Oregon', 'oregon', '$5,584', '$0', '$5,584', '$52,491'],
  ['50', 'Hawaii', 'hawaii', '$4,847', '$802', '$5,649', '$52,426'],
]

const threeSalaries = [
  ['New Hampshire', 'new-hampshire', '$0', '$0', '$0'],
  ['Florida', 'florida', '$784', '$1,326', '$2,129'],
  ['Texas', 'texas', '$910', '$1,540', '$2,473'],
  ['Washington', 'washington', '$1,049', '$1,775', '$2,851'],
  ['Tennessee', 'tennessee', '$1,053', '$1,782', '$2,861'],
  ['Louisiana', 'louisiana', '$1,903', '$3,539', '$6,123'],
  ['Illinois', 'illinois', '$2,913', '$5,040', '$8,458'],
  ['California', 'california', '$1,753', '$4,303', '$9,789'],
  ['Oregon', 'oregon', '$2,959', '$5,584', '$9,959'],
  ['Hawaii', 'hawaii', '$2,889', '$5,649', '$10,242'],
]

const faqs = [
  {
    q: 'Which state has the highest sales tax in 2026?',
    a: 'Louisiana, with a combined state and average local rate of 10.13% as of July 1, 2026, according to the Tax Foundation. Tennessee (9.61%) and Washington (9.57%) come next. California has the highest statewide rate at 7.25%, but its local add-ons are smaller, so it ranks seventh on the combined measure.',
  },
  {
    q: 'Which states have no sales tax?',
    a: 'Alaska, Delaware, Montana, New Hampshire, and Oregon have no statewide sales tax. Four of them also have no local sales tax. Alaska lets towns and boroughs set their own, which averages 1.82% across the population.',
  },
  {
    q: 'Is sales tax taken out of my paycheck?',
    a: 'No. Your employer withholds federal income tax, Social Security, Medicare, and any state or local income tax. Sales tax is collected by the store when you buy something. That is why a paycheck calculator shows a high take-home figure in a state like Tennessee, even though you will hand some of it back at the register.',
  },
  {
    q: 'Can I deduct sales tax on my federal return?',
    a: 'Yes, but only if you itemize. On Schedule A you can deduct either state income tax or state and local general sales tax, not both, and the total state and local tax deduction is capped. The IRS explains the rules in Topic 503. Most people take the standard deduction, so this helps mainly in no-income-tax states for people who already itemize.',
  },
  {
    q: 'Is a state with no income tax or no sales tax better for my paycheck?',
    a: 'For most workers, skipping income tax saves more. In our $70,000 example, the nine states with no wage income tax all rank ahead of Oregon, Montana, and Delaware, which have no sales tax but do tax wages. The exception is a household that spends nearly all of its pay on taxable goods at a low income.',
  },
]

export default function StateSalesTaxRates2026() {
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
          aria-label="Receipt showing sales tax added at the register next to a paycheck showing income tax withheld, with Louisiana at 10.13 percent and five states at zero"
        >
          <rect width="600" height="200" rx="12" fill="#059669" />
          <rect x="20" y="20" width="560" height="160" rx="8" fill="rgba(255,255,255,0.1)" />
          {/* Paycheck */}
          <rect x="45" y="50" width="150" height="100" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="120" y="44" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">PAYCHECK</text>
          <text x="60" y="75" fontSize="11" fill="#fff" fontFamily="monospace">Gross</text>
          <text x="60" y="95" fontSize="11" fill="#fff" fontFamily="monospace">Income tax</text>
          <text x="60" y="115" fontSize="11" fill="#fff" fontFamily="monospace">FICA</text>
          <line x1="60" y1="125" x2="180" y2="125" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          <text x="60" y="142" fontSize="11" fontWeight="700" fill="#fff" fontFamily="monospace">Take-home</text>
          {/* Arrow */}
          <line x1="210" y1="100" x2="255" y2="100" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
          <polygon points="255,92 270,100 255,108" fill="rgba(255,255,255,0.6)" />
          {/* Receipt */}
          <path d="M285 45 L415 45 L415 150 L405 158 L395 150 L385 158 L375 150 L365 158 L355 150 L345 158 L335 150 L325 158 L315 150 L305 158 L295 150 L285 158 Z" fill="rgba(255,255,255,0.9)" />
          <text x="350" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">AT THE REGISTER</text>
          <text x="298" y="70" fontSize="11" fill="#064e3b" fontFamily="monospace">Subtotal</text>
          <text x="298" y="92" fontSize="11" fill="#064e3b" fontFamily="monospace">Sales tax</text>
          <line x1="298" y1="104" x2="402" y2="104" stroke="#064e3b" strokeWidth="1" strokeDasharray="3 3" />
          <text x="298" y="124" fontSize="12" fontWeight="700" fill="#064e3b" fontFamily="monospace">Total</text>
          {/* Stats */}
          <text x="500" y="72" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Highest: Louisiana</text>
          <text x="500" y="98" textAnchor="middle" fontSize="24" fontWeight="700" fill="#fff" fontFamily="monospace">10.13%</text>
          <text x="500" y="128" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">No state rate: AK DE</text>
          <text x="500" y="144" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">MT NH OR</text>
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
        State Sales Tax Rates Ranked for 2026: Where You Pay the Most (and Least)
      </h1>

      <ArticleMeta slug="state-sales-tax-rates-2026" />

      <div
        style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderLeft: '4px solid #059669',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
        }}
      >
        <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#059669', marginBottom: '0.375rem' }}>In short</p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#1e293b', margin: 0 }}>
          Louisiana has the highest combined sales tax in 2026 at <strong>10.13%</strong>, followed by Tennessee (9.61%) and Washington (9.57%). Alaska, Delaware, Montana, New Hampshire, and Oregon have no statewide sales tax. But sales tax is usually the smaller bill: on a <strong>$70,000</strong> salary, our calculator puts Tennessee&rsquo;s sales tax at about <strong>$1,782</strong> a year, while Oregon&rsquo;s income tax is <strong>$5,584</strong>, so the Tennessee worker keeps about $3,800 more.
        </p>
      </div>

      <p style={p}>
        Sales tax never shows up on your pay stub. It hits you later, every time you buy gas, clothes, or a new phone. That makes it easy to leave out when you compare states or weigh a job offer. This guide ranks all 50 states by combined sales tax rate for 2026, then does something the rate tables do not: it puts sales tax and income tax side by side on the same paycheck, using this site&rsquo;s own calculator.
      </p>

      <h2 style={h2}>How does sales tax work, and why is it not on your paycheck?</h2>

      <p style={p}>
        Your employer withholds federal income tax, Social Security, Medicare, and any state income tax before you are paid. You can see how that works in our guide to{' '}
        <a href="/blog/gross-pay-vs-net-pay" style={a}>gross pay vs net pay</a>. Sales tax is different. The store adds it at checkout and sends it to the state and local governments. It comes out of your take-home pay, not your gross pay.
      </p>

      <p style={p}>There are two layers:</p>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>The state rate.</strong> Set by the legislature and the same everywhere in the state. California&rsquo;s 7.25% is the highest statewide rate in the country. Louisiana raised its state rate from 4.45% to 5% on January 1, 2025{' '}
          <a href="https://dam.ldr.la.gov/lawspolicies/RIB%2025-007%20-%20State%20Sales%20Tax%20Rate.pdf" {...ext} style={a}>(Louisiana Department of Revenue, RIB 25-007)</a>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Local rates.</strong> Counties, cities, and special districts can add their own. This is why Louisiana, with a mid-range state rate, ends up first. Its parishes and cities add an average of 5.13% on top.
        </li>
      </ul>

      <p style={p}>
        The &ldquo;combined&rdquo; rate in the rankings below is the state rate plus a population-weighted average of local rates. Your real rate depends on where you shop. The figures come from the{' '}
        <a href="https://taxfoundation.org/data/all/state/2026-sales-tax-rates-midyear/" {...ext} style={a}>Tax Foundation&rsquo;s midyear 2026 report</a>, which reflects rates as of July 1, 2026, and puts the national population-weighted average at 7.53%. No state changed its statewide rate between January and July 2026. The movement came from local rates.
      </p>

      <h2 style={h2}>Which states have no sales tax in 2026?</h2>

      <p style={p}>
        Five states have no statewide sales tax: <a href="/alaska" style={a}>Alaska</a>, <a href="/delaware" style={a}>Delaware</a>, <a href="/montana" style={a}>Montana</a>, <a href="/new-hampshire" style={a}>New Hampshire</a>, and <a href="/oregon" style={a}>Oregon</a>. Four of them have no local sales tax either. Alaska is the exception. It lets boroughs and cities set their own rates, which average 1.82% across the population. Plenty of Alaska towns charge nothing, and some charge more.
      </p>

      <p style={p}>
        Here is the part most lists skip. Only one of these five, New Hampshire, also has no tax on wages. Oregon, Montana, and Delaware all tax your paycheck, and Oregon&rsquo;s rates are among the steepest in the country. You can compare them in our{' '}
        <a href="/blog/state-income-tax-rates-ranked" style={a}>state income tax rankings</a>. So &ldquo;no sales tax&rdquo; does not mean &ldquo;low tax,&rdquo; and the table further down shows by how much.
      </p>

      <h2 style={h2}>All 50 states ranked by combined sales tax rate (2026)</h2>

      <p style={{ ...p, marginBottom: '1rem' }}>
        Ranked from highest to lowest combined rate. States with the same combined rate share a rank.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ ...th, textAlign: 'left' }}>Rank</th>
              <th style={{ ...th, textAlign: 'left' }}>State</th>
              <th style={{ ...th, textAlign: 'right' }}>State rate</th>
              <th style={{ ...th, textAlign: 'right' }}>Avg local</th>
              <th style={{ ...th, textAlign: 'right' }}>Combined</th>
            </tr>
          </thead>
          <tbody>
            {salesTaxRates.map(([rank, state, stateRate, local, combined], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ ...td, color: '#94a3b8' }}>{rank}</td>
                <td style={td}>{state}</td>
                <td style={{ ...td, ...mono, textAlign: 'right', color: '#475569' }}>{stateRate}</td>
                <td style={{ ...td, ...mono, textAlign: 'right', color: '#475569' }}>{local}</td>
                <td style={{ ...td, ...mono, textAlign: 'right', fontWeight: 700, color: combined === '0.00%' ? '#059669' : i < 5 ? '#dc2626' : '#1e293b' }}>{combined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
        Source:{' '}
        <a href="https://taxfoundation.org/data/all/state/2026-sales-tax-rates-midyear/" {...ext} style={{ color: '#94a3b8', textDecoration: 'underline' }}>Tax Foundation, State and Local Sales Tax Rates, Midyear 2026</a>
        . Rates as of July 1, 2026. Local averages are population-weighted. New Jersey shows a small negative local figure because some Urban Enterprise Zones collect half the state rate.
      </p>

      <p style={p}>
        A few patterns stand out. Louisiana and Alabama get more than half of their combined rate from local taxes. Tennessee, Washington, and Arkansas get there mostly through high state rates of 6.5% to 7%. Colorado has the lowest statewide rate of any state that has one, 2.90%, yet ranks 16th because cities and counties add nearly 5%. Hawaii looks cheap at 4.50%, but its general excise tax is charged to businesses on almost everything, services included, and is often passed along to you.
      </p>

      <h2 style={h2}>How much does sales tax cost you compared with state income tax?</h2>

      <p style={p}>
        Rate tables cannot tell you this, because sales tax depends on how much you spend and income tax depends on how much you earn. To put them on the same scale, we ran a <strong>$70,000 salary</strong> through this site&rsquo;s paycheck calculator for every state (single filer, standard deduction, tax year 2026). That gives federal tax, FICA, state income tax, and take-home pay. Then we assumed you spend <strong>35% of your take-home pay on taxable purchases</strong>, tax included, and applied each state&rsquo;s combined rate.
      </p>

      <p style={p}>
        The 35% figure is an assumption, not a statistic. Rent, mortgage payments, utilities in many states, insurance, most groceries, and savings are not hit by general sales tax, so a large share of a typical paycheck never reaches the register. If you spend more on taxable goods, scale the sales tax column up in proportion. The income tax column does not change.
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f0fdf4' }}>
              <th style={{ ...th, textAlign: 'left' }}>#</th>
              <th style={{ ...th, textAlign: 'left' }}>State</th>
              <th style={{ ...th, textAlign: 'right' }}>State income tax</th>
              <th style={{ ...th, textAlign: 'right' }}>Est. sales tax</th>
              <th style={{ ...th, textAlign: 'right' }}>Both</th>
              <th style={{ ...th, textAlign: 'right' }}>Kept after both</th>
            </tr>
          </thead>
          <tbody>
            {combined70k.map(([rank, state, slug, sit, stx, both, kept], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ ...td, color: '#94a3b8' }}>{rank}</td>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{state}</a>
                </td>
                <td style={{ ...td, ...mono, textAlign: 'right', color: '#475569' }}>{sit}</td>
                <td style={{ ...td, ...mono, textAlign: 'right', color: '#475569' }}>{stx}</td>
                <td style={{ ...td, ...mono, textAlign: 'right', fontWeight: 700 }}>{both}</td>
                <td style={{ ...td, ...mono, textAlign: 'right', color: '#059669', fontWeight: 600 }}>{kept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
        $70,000 salary, single filer, standard deduction, tax year 2026. State income tax and take-home pay from this site&rsquo;s calculator. Sales tax assumes 35% of take-home is spent on taxable purchases at the Tax Foundation midyear 2026 combined rate. &ldquo;Kept after both&rdquo; is take-home pay minus estimated sales tax. Figures are rounded to the dollar, so a row can be off by $1. Local income taxes and state payroll premiums such as paid leave are not included.
      </p>

      <p style={p}>
        The ranking flips almost everything the sales tax table told you. Washington and Tennessee, ranked third and second for sales tax, land eighth and ninth for total burden because they do not tax wages. Oregon goes the other way. It has no sales tax at all, yet finishes 49th because its income tax takes $5,584. Louisiana, the sales tax leader, ends up 20th, in the middle of the pack, thanks to a 3% flat income tax.
      </p>

      <h3 style={h3}>Worked example: Tennessee vs Oregon at $70,000</h3>

      <p style={{ ...p, marginBottom: '1rem' }}>
        Here is every step for the two extremes on sales tax, one at 9.61% and one at zero. The federal lines use the 2026 standard deduction of $16,100 and the 2026 brackets.
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
          whiteSpace: 'pre',
        }}
      >
{`Gross salary                         $70,000.00
Federal taxable: 70,000 - 16,100  =  $53,900.00
  10% x 12,400                    =   $1,240.00
  12% x (50,400 - 12,400)         =   $4,560.00
  22% x (53,900 - 50,400)         =     $770.00
Federal income tax                   $6,570.00
Social Security: 6.2% x 70,000    =   $4,340.00
Medicare: 1.45% x 70,000          =   $1,015.00

TENNESSEE
State income tax                          $0.00
Take-home pay                        $58,075.00
Taxable spending: 35% x 58,075    =  $20,326.25
Sales tax: 20,326.25 x 9.61/109.61 =   $1,782.09
Kept after both                      $56,292.91

OREGON
State income tax (calculator)         $5,584.00
Take-home pay                        $52,491.00
Sales tax: 0%                             $0.00
Kept after both                      $52,491.00

Tennessee advantage per year          $3,801.91
Per biweekly paycheck (/ 26)            $146.23`}
      </div>

      <p style={p}>
        Why divide by 109.61 instead of 100? Because the 35% is money you hand over at the register with tax already included. Of every $109.61 you spend in a 9.61% area, $100 is the item and $9.61 is tax. If you prefer to think in pre-tax prices, the rule is simpler: every $10,000 of taxable purchases costs $961 in tax in a 9.61% area and $820 in Texas at 8.20%.
      </p>

      <h3 style={h3}>Does the answer change at other salaries?</h3>

      <p style={{ ...p, marginBottom: '1rem' }}>
        Yes, and in a predictable way. Here is the combined state income tax plus estimated sales tax for ten states at three salaries, using the same method:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', border: '1px solid #e2e8f0' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ ...th, textAlign: 'left' }}>State</th>
              <th style={{ ...th, textAlign: 'right' }}>$40,000</th>
              <th style={{ ...th, textAlign: 'right' }}>$70,000</th>
              <th style={{ ...th, textAlign: 'right' }}>$120,000</th>
            </tr>
          </thead>
          <tbody>
            {threeSalaries.map(([state, slug, s40, s70, s120], i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={td}>
                  <a href={`/${slug}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{state}</a>
                </td>
                <td style={{ ...td, ...mono, textAlign: 'right' }}>{s40}</td>
                <td style={{ ...td, ...mono, textAlign: 'right' }}>{s70}</td>
                <td style={{ ...td, ...mono, textAlign: 'right' }}>{s120}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={p}>
        At $40,000, the gap between a sales-tax-heavy state and an income-tax state is small. Tennessee&rsquo;s total of $1,053 is about $1,900 less than Oregon&rsquo;s $2,959. At $120,000, the gap grows to about $7,100, because most state income taxes are progressive or at least apply to every extra dollar, while sales tax only grows with spending. California shows this clearly. It sits mid-pack at $40,000, but by $120,000 it is third worst of the ten states in this table.
      </p>

      <p style={p}>
        The decision rule that falls out of this: <strong>the more you earn, the more a no-income-tax state is worth, and the less a no-sales-tax state is worth.</strong> If you are deciding between offers in two states, run both through the calculator, then subtract your expected sales tax from each take-home figure. Our guide to{' '}
        <a href="/blog/compare-job-offers-across-states" style={a}>comparing job offers across states</a> walks through the rest of the comparison, including cost of living.
      </p>

      <h2 style={h2}>What is usually exempt from sales tax?</h2>

      <p style={p}>
        The combined rate is the ceiling, not what you pay on everything. Exemptions can cut your real bill a lot, and they vary by state:
      </p>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Groceries.</strong> Most states exempt or reduce the rate on unprepared food. Tennessee still taxes groceries, but at a reduced 4% state rate instead of 7%, plus local tax of up to 2.75%{' '}
          <a href="https://revenue.support.tn.gov/hc/en-us/articles/360058139672-SUT-13-Sales-and-Use-Tax-Rates-Overview" {...ext} style={a}>(Tennessee Department of Revenue, SUT-13)</a>. Illinois ended its 1% state tax on groceries on January 1, 2026, though many cities and counties now charge their own 1% local grocery tax{' '}
          <a href="https://tax.illinois.gov/research/publications/bulletins/fy-2026-11.html" {...ext} style={a}>(Illinois Department of Revenue, FY 2026-11)</a>.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Prescription drugs.</strong> Exempt in nearly every state.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Clothing.</strong> A few states, such as Pennsylvania, exempt most everyday clothing. Others tax it at the full rate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Services.</strong> Most states tax goods far more than services. Haircuts, repairs, and subscriptions may or may not be taxed depending on the state.
        </li>
      </ul>

      <p style={p}>
        Grocery rules matter most for lower-paid workers, who spend more of each paycheck on food. Take a household in Tennessee that spends $800 a month on groceries. At the highest possible grocery rate of 6.75% (4% state plus 2.75% local), that is $9,600 &times; 6.75% = $648 a year. At the general 9.61% average, it would be $923. The reduced food rate saves that family about $275 a year.
      </p>

      <h2 style={h2}>Do no-income-tax states make up for it with sales tax?</h2>

      <p style={p}>
        Some do. Of the nine states with no tax on wages, Tennessee (9.61%) and Washington (9.57%) rank second and third for sales tax, with Nevada (8.24%) and Texas (8.20%) not far behind. Florida (6.98%), South Dakota (6.11%), and Wyoming (5.39%) sit below the national average. Alaska (1.82%) and New Hampshire (0%) barely use sales tax at all. Our guide to{' '}
        <a href="/blog/states-with-no-income-tax" style={a}>the states with no income tax</a> covers how they also lean on property taxes and fees.
      </p>

      <p style={p}>
        Even the highest-sales-tax no-income-tax states finish in the top nine of the $70,000 table above. For a wage earner, sales tax rarely costs as much as an income tax does. Two caveats keep this honest. First, property tax is left out here, and it can be large in Texas and New Hampshire. Second, Washington takes paid family leave and long-term care premiums out of paychecks. Those are payroll deductions, not income tax, and our guide to{' '}
        <a href="/blog/state-disability-insurance-sdi-paycheck" style={a}>state disability and paid leave deductions</a> explains how they show up on your stub.
      </p>

      <h2 style={h2}>Common mistakes when comparing states</h2>

      <ul style={{ ...p, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Treating no sales tax as no tax.</strong> At $70,000, picking Oregon over Washington for its zero sales tax costs about $3,800 a year in our example, because Oregon taxes wages.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Applying sales tax to your whole paycheck.</strong> If you multiply your entire salary by 9.61%, you would estimate $6,727 for Tennessee at $70,000. That is almost four times our 35% estimate, because rent, savings, and most groceries are not taxed at the full rate.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Using the state rate alone.</strong> Colorado&rsquo;s 2.90% state rate looks like a bargain, but its combined average is 7.89%. Always use the combined rate for where you will actually live and shop.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Forgetting the federal deduction choice.</strong> If you itemize, you can deduct state and local sales tax instead of state income tax, subject to the cap on state and local tax deductions{' '}
          <a href="https://www.irs.gov/taxtopics/tc503" {...ext} style={a}>(IRS Topic 503)</a>. In a no-income-tax state, the sales tax deduction is the only one of the two you can use. The{' '}
          <a href="https://www.irs.gov/individuals/sales-tax-deduction-calculator" {...ext} style={a}>IRS Sales Tax Deduction Calculator</a> estimates it for you.
        </li>
      </ul>

      {/* FAQ */}
      <h2 style={h2}>Frequently asked questions</h2>

      {faqs.map((f) => (
        <div key={f.q} style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ ...h3, marginTop: '1rem' }}>{f.q}</h3>
          <p style={{ ...p, marginBottom: '0.5rem' }}>{f.a}</p>
        </div>
      ))}

      {/* CTA */}
      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '2rem',
          padding: '1.5rem',
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.75rem' }}>
          See Your Take-Home Pay by State
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.6 }}>
          Enter your salary to get federal tax, FICA, state income tax, and take-home pay for any state. Then subtract your expected sales tax to compare locations fairly.
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
          <a href="https://taxfoundation.org/data/all/state/2026-sales-tax-rates-midyear/" {...ext} style={{ color: '#2563eb' }}>Tax Foundation: State and Local Sales Tax Rates, Midyear 2026</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://dam.ldr.la.gov/lawspolicies/RIB%2025-007%20-%20State%20Sales%20Tax%20Rate.pdf" {...ext} style={{ color: '#2563eb' }}>Louisiana Department of Revenue: Revenue Information Bulletin 25-007, State Sales Tax Rate</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://revenue.support.tn.gov/hc/en-us/articles/360058139672-SUT-13-Sales-and-Use-Tax-Rates-Overview" {...ext} style={{ color: '#2563eb' }}>Tennessee Department of Revenue: SUT-13, Sales and Use Tax Rates Overview</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://tax.illinois.gov/research/publications/bulletins/fy-2026-11.html" {...ext} style={{ color: '#2563eb' }}>Illinois Department of Revenue: Bulletin FY 2026-11, Grocery Tax Changes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/taxtopics/tc503" {...ext} style={{ color: '#2563eb' }}>IRS: Topic No. 503, Deductible Taxes</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/individuals/sales-tax-deduction-calculator" {...ext} style={{ color: '#2563eb' }}>IRS: Sales Tax Deduction Calculator</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" {...ext} style={{ color: '#2563eb' }}>IRS: Revenue Procedure 2025-32 (2026 brackets and standard deduction)</a>
        </li>
        <li style={{ marginBottom: '0.375rem' }}>
          <a href="https://www.ssa.gov/oact/cola/cbb.html" {...ext} style={{ color: '#2563eb' }}>SSA: Contribution and Benefit Base</a>
        </li>
      </ul>

      <ArticleFooter current="state-sales-tax-rates-2026" />
    </article>
  )
}
