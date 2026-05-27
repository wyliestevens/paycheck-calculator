# Paycheck Calculator — Project CLAUDE.md
# LAST UPDATED: 2026-05-27

## PROJECT OVERVIEW
- **Site:** paycheck.center
- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS
- **Repo:** github.com/wyliestevens/paycheck-calculator
- **Deployment:** Vercel (auto-deploys from origin/main)
- **Monetization:** Google AdSense (ca-pub-1449862684379914)

## WHAT HAS BEEN DONE (chronological)

### Initial Build
- Built paycheck calculator covering all 50 US states
- Each state has a dynamic route `/[state]/` with state-specific tax calculations
- Light theme: white background with blue accents for trust

### Domain & SEO Setup
- Sitemap and robots.txt configured for paycheck.center domain
- OpenGraph image generation (`opengraph-image.tsx`)
- Favicon (`icon.svg`)
- `llms.txt` added for AI crawler discoverability

### AdSense & Monetization
- Google AdSense integrated (publisher ID: ca-pub-1449862684379914)
- `ads.txt` added for ad verification
- Rotating ad banners component (`RotatingBanner.tsx`)
  - Fixed: each ad is a separate link element to prevent wrong URL on click

### Backlinks
- Footer backlinks for AI Peak Biz, Frontline Legal Nurse, usedslotshop.com

### Policy Pages (required for AdSense)
- `/about` — About page
- `/contact` — Contact page
- `/privacy` — Privacy policy
- `/terms` — Terms of service

### Blog Section (2026-05-27)
- `/blog` — Blog index page
- 6 SEO blog articles:
  - `/blog/states-with-no-income-tax`
  - `/blog/fica-taxes-explained`
  - `/blog/paycheck-deductions-explained`
  - `/blog/state-income-tax-rates-ranked`
  - `/blog/good-salary-by-state`
  - `/blog/compare-job-offers-across-states`

### Salary-Specific Pages (2026-05-27)
- `/[state]/[salary]` dynamic route for salary-specific paycheck breakdowns
- Tax calculator library (`src/lib/tax-calculator.ts`)
- SEO utility library (`src/lib/seo.ts`)
- State data (`src/data/states.ts`)
- Blog data (`src/data/blog.ts`)

### Expanded Sitemap & Robots (2026-05-27)
- Sitemap now includes blog posts, salary pages, and all routes
- Robots.txt expanded with new route allowances

## KEY FILES
- `src/app/layout.tsx` — Root layout with AdSense, analytics, nav
- `src/app/page.tsx` — Homepage
- `src/app/[state]/page.tsx` — State calculator pages
- `src/app/[state]/[salary]/page.tsx` — Salary-specific pages
- `src/app/blog/page.tsx` — Blog index
- `src/components/RotatingBanner.tsx` — Ad rotation component
- `src/lib/tax-calculator.ts` — Tax calculation logic
- `src/lib/seo.ts` — SEO helpers
- `src/data/states.ts` — State data
- `next.config.ts` — Next.js config

## PLANNING ARTIFACTS (not committed)
- `cluster-plan.md` — SEO cluster planning doc
- `cluster-plan.json` — Cluster data
- `cluster-map.html` — Visual cluster map

## WHAT'S NEXT
- Monitor Vercel deployment for build errors
- Add more blog content for SEO coverage
- Consider adding structured data (JSON-LD) for rich snippets
- Track AdSense performance and optimize ad placement
- Potentially add more salary-specific pages for high-traffic keywords

## RULES
- **Always push to Vercel** (git push origin main) after every change
- **Update this file** at the end of every session
