import type { Metadata } from 'next'
import Script from 'next/script'
import { Fraunces, Figtree, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import RotatingBanner from '@/components/RotatingBanner'
import { organizationSchema, websiteSchema } from '@/lib/seo'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
  fallback: ['Iowan Old Style', 'Georgia', 'serif'],
})

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  fallback: ['Avenir Next', 'Segoe UI', 'sans-serif'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  fallback: ['ui-monospace', 'Menlo', 'monospace'],
})

export const metadata: Metadata = {
  title: {
    default: 'Free Paycheck Calculator by State | Estimate Your Take-Home Pay 2026',
    template: '%s | PaycheckCalc',
  },
  description: 'Calculate your take-home pay after federal, state, Social Security, and Medicare taxes. Free paycheck calculator for all 50 US states with 2026 tax rates.',
  keywords: 'paycheck calculator, take home pay calculator, salary calculator, tax calculator, paycheck after taxes, net pay calculator, 2026 tax calculator',
  metadataBase: new URL('https://www.paycheck.center'),
  openGraph: {
    type: 'website',
    siteName: 'PaycheckCalc',
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'PaycheckCalc — free paycheck calculator for every US state' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Paycheck Calculator by State | 2026 Tax Rates',
    description: 'Calculate your take-home pay after federal, state, Social Security, and Medicare taxes. Free for all 50 US states.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="brand" aria-label="PaycheckCalc home">
      <span className="brand-mark" aria-hidden="true">$</span>
      <span>
        PaycheckCalc
        {!light && <span className="brand-domain">paycheck.center</span>}
      </span>
    </a>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} ${mono.variable}`}>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />

        <header className="site-header">
          <div className="container">
            <Brand />
            <nav className="nav-links" aria-label="Primary">
              <a href="/#states">Calculators</a>
              <a href="/blog">Guides</a>
              <a href="/about" className="nav-hide-sm">About</a>
              <a href="/#find" className="btn btn-ink btn-sm">
                Find my state
              </a>
            </nav>
          </div>
        </header>

        <main className="site-main">
          {children}
          <div className="container">
            <RotatingBanner />
          </div>
        </main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Brand light />
                <p className="footer-blurb">
                  Free take-home pay estimates for every US state, built on 2026 federal and state rates. Estimates
                  assume a single filer with the standard deduction. Talk to a tax professional for precise figures.
                </p>
              </div>
              <div className="footer-col">
                <h4>Explore</h4>
                <a href="/#states">All state calculators</a>
                <a href="/blog">Paycheck &amp; tax guides</a>
                <a href="/texas">Texas calculator</a>
                <a href="/california">California calculator</a>
                <a href="/florida">Florida calculator</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
              <div className="footer-col">
                <h4>Partners</h4>
                <a href="https://www.aipeakbiz.com" target="_blank" rel="noopener nofollow">
                  AI Peak Biz
                </a>
                <a href="https://www.frontlinelegalnurse.com" target="_blank" rel="noopener nofollow">
                  Frontline Legal Nurse Consulting
                </a>
                <a href="https://www.usedslotshop.com" target="_blank" rel="noopener nofollow">
                  Used Slot Shop
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <span>&copy; {new Date().getFullYear()} PaycheckCalc. All rights reserved.</span>
              <span>Informational estimates only. Not tax advice.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
