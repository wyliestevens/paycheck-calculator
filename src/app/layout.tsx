import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Free Paycheck Calculator by State | Estimate Your Take-Home Pay 2026',
  description: 'Calculate your take-home pay after federal, state, Social Security, and Medicare taxes. Free paycheck calculator for all 50 US states with 2026 tax rates.',
  keywords: 'paycheck calculator, take home pay calculator, salary calculator, tax calculator, paycheck after taxes, net pay calculator, 2026 tax calculator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1449862684379914" crossOrigin="anonymous"></script>
      </head>
      <body>
        <nav
          style={{
            borderBottom: '1px solid var(--border)',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)' }}>$</span>
            PaycheckCalc
          </a>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
            <a href="/" style={{ color: 'var(--text-secondary)' }}>All States</a>
          </div>
        </nav>
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          {children}
        </main>
        <footer
          style={{
            borderTop: '1px solid var(--border)',
            padding: '2rem',
            maxWidth: '1200px',
            margin: '4rem auto 0',
            textAlign: 'center',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
          }}
        >
          <p>PaycheckCalc provides estimates for informational purposes only. Tax calculations are based on 2026 federal and state rates for single filers. Consult a tax professional for precise figures.</p>
          <p style={{ marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} PaycheckCalc. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
