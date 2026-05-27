import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import RotatingBanner from '@/components/RotatingBanner'
import { canonicalUrl, organizationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    default: 'Free Paycheck Calculator by State | Estimate Your Take-Home Pay 2026',
    template: '%s | PaycheckCalc',
  },
  description: 'Calculate your take-home pay after federal, state, Social Security, and Medicare taxes. Free paycheck calculator for all 50 US states with 2026 tax rates.',
  keywords: 'paycheck calculator, take home pay calculator, salary calculator, tax calculator, paycheck after taxes, net pay calculator, 2026 tax calculator',
  metadataBase: new URL('https://paycheck.center'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'PaycheckCalc',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8731434749249918"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
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
            <a href="/blog" style={{ color: 'var(--text-secondary)' }}>Blog</a>
          </div>
        </nav>
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <RotatingBanner />
          {children}
          <RotatingBanner />
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
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              fontSize: '0.8125rem',
            }}
          >
            <a href="/about" style={{ color: 'var(--accent)' }}>About</a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <a href="/contact" style={{ color: 'var(--accent)' }}>Contact</a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <a href="/privacy" style={{ color: 'var(--accent)' }}>Privacy Policy</a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <a href="/terms" style={{ color: 'var(--accent)' }}>Terms of Service</a>
          </div>
          <div
            style={{
              marginTop: '0.75rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              fontSize: '0.8125rem',
            }}
          >
            <a
              href="https://www.aipeakbiz.com"
              target="_blank"
              rel="noopener nofollow"
              style={{ color: 'var(--accent)' }}
            >
              AI Peak Biz
            </a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <a
              href="https://www.frontlinelegalnurse.com"
              target="_blank"
              rel="noopener nofollow"
              style={{ color: 'var(--accent)' }}
            >
              Frontline Legal Nurse Consulting
            </a>
            <span style={{ color: 'var(--border)' }}>|</span>
            <a
              href="https://www.usedslotshop.com"
              target="_blank"
              rel="noopener nofollow"
              style={{ color: 'var(--accent)' }}
            >
              Used Slot Shop
            </a>
          </div>
          <p style={{ marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} PaycheckCalc. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
