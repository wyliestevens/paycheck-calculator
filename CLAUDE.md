# Paycheck Calculator — Project CLAUDE.md
# LAST UPDATED: 2026-10-17

## PROJECT OVERVIEW
- **Site:** paycheck.center
- **Stack:** Next.js 16 (App Router), TypeScript, hand-written CSS design system in `src/app/globals.css` (no Tailwind)
- **Repo:** github.com/wyliestevens/paycheck-calculator
- **Deployment:** Vercel (auto-deploys from origin/main)
- **Monetization:** Google AdSense. Publisher ID in code and `public/ads.txt` is `ca-pub-8731434749249918`. Do not change anything AdSense-related without Wylie asking.

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
  - `/blog/alternative-minimum-tax-2026` (2026-08-21)
  - `/blog/gift-tax-rules-2026` (2026-09-08)
  - `/blog/rental-income-taxes-2026` (2026-09-10)
  - `/blog/disability-income-taxes-2026` (2026-09-14)
  - `/blog/state-disability-insurance-sdi-paycheck` (2026-09-15)
  - `/blog/savers-credit-2026` (2026-09-17)
  - `/blog/how-to-calculate-federal-tax-withholding` (2026-09-18)
  - `/blog/reduce-taxable-income-2026` (2026-09-21)
  - `/blog/home-sale-tax-exclusion-2026` (2026-09-22)
  - `/blog/cryptocurrency-taxes-2026` (2026-09-25)
  - `/blog/stock-options-taxes-nso-iso-2026` (2026-09-28)
  - `/blog/tax-extension-how-to-file-2026` (2026-10-05)

### Redesign + blog visibility fix + daily publishing (2026-10-16)
- **Why:** Wylie got phone notices about new posts but the blog index listed posts in file order (oldest first), so the six May posts sat on top and 80+ newer posts were buried. Posts were always live; they were just hidden.
- **Fix:** `/blog` now sorts by `publishDate` newest-first with a featured "Latest" card. Homepage shows the six newest guides.
- **Full visual redesign ("The Ledger" look):** warm paper background, deep ink-navy hero/footer, money-green accent, Fraunces display font + Figtree body + JetBrains Mono for figures. All tokens and component classes live in `src/app/globals.css`.
  - New sticky header + 4-column footer in `layout.tsx` (all backlinks preserved)
  - Homepage hero with live state search (`src/components/StateFinder.tsx`) and an example pay stub panel
  - Calculator rebuilt (`PaycheckCalculator.tsx`): segmented pay-frequency control, quick salary presets, dark result panel with breakdown bar
  - State pages: salary snapshot cards linking to `/[state]/[salary]` pages
  - Salary pages, blog index, about/contact/privacy/terms restyled
  - `src/components/ArticleFooter.tsx`: shared "More paycheck guides" block; all 88 posts now end with `<ArticleFooter current="slug" />` and start with a Home / Guides breadcrumb (script-applied)
  - `RotatingBanner.tsx` (house ads for AI Peak Biz / FLNC) restyled, same links and rotation
  - **AdSense untouched:** script tag, publisher ID, `ads.txt`, and `.ad-slot` placeholder divs all left in place (placeholders restyled only)
- **Scheduling:** two cloud routines were both publishing to this repo (Tue/Fri and Mon/Thu). Merged into ONE daily routine; the Mon/Thu one is paused. See AUTOMATED BLOG PUBLISHING below.
- `.claude/launch.json` added for the in-app dev server preview (port 3000, host 127.0.0.1).
- **Fonts:** self-hosted via `next/font/google` in `layout.tsx` (Fraunces display, Figtree body, JetBrains Mono figures). The CSS variables `--font-display/--font-body/--font-mono` come from there, not from a Google Fonts `@import`.
- **Structured data (JSON-LD):** Organization (with logo) + WebSite on every page; WebApplication on home and state pages; BreadcrumbList on state, salary, and blog post pages; BlogPosting on every post (emitted by `ArticleFooter`); Blog list on `/blog`; FAQPage on `/contact` (pre-existing, commercial-site FAQ rich results are restricted by Google, left as-is). Helpers live in `src/lib/seo.ts`.
- **Canonical host fixed:** the apex `paycheck.center` 307-redirects to `www.paycheck.center`, but canonicals, sitemap, robots, and schema URLs pointed at the apex. All now use `https://www.paycheck.center`.
- **Salary page URL pattern** is `/[state]/[amount]-salary` (e.g. `/texas/75000-salary`). Plain `/texas/75000` is a 404 by design.
- **Routine prompt fixed** to use the correct salary URL pattern and to rely on `ArticleFooter` for post schema.
- **llms.txt is now generated** by `src/app/llms.txt/route.ts` from states + blog data (the static `public/llms.txt` was removed), so it lists every calculator and guide and never goes stale.
- **Shipped 2026-10-17:** commit 5bb0bde pushed to main and verified live on www.paycheck.center within a minute (new layout, newest-first blog, www canonicals, BlogPosting schema). The first daily routine run (commission income post) landed the same morning and was converted to the new footer/breadcrumb before the push.
- **SEO audit suite ran (2026-10-17):** every applicable `/seo` skill against the live site. SEO Health Score 70/100. 22 reports + screenshots in `seo-reports/2026-10-17/` (git-ignored); `SUMMARY.md` there holds the merged 31-item action plan. Skipped: `/seo google` (no API credentials), local/maps/ecommerce/hreflang (not applicable).
- **CRITICAL finding fixed the same day:** the "2026" federal constants in `src/data/states.ts` were 2025 values (standard deduction $15,000, brackets from $11,925) and the Social Security wage base was the 2024 figure ($168,600). Corrected to tax year 2026 per IRS Rev. Proc. 2025-32 and the SSA 2026 fact sheet: standard deduction $16,100; brackets 10% to $12,400, 12% to $50,400, 22% to $105,700, 24% to $201,775, 32% to $256,225, 35% to $640,600, 37% above; SS wage base $184,500. Added `taxYear`, `taxDataUpdated`, `additionalMedicareThreshold`, and a `usd()` helper. Homepage, state, salary, about and llms.txt prose now READ these constants instead of hard-coding numbers. Effect: `/texas/75000-salary` take-home rises from $61,148 to about $61,593.
- **Still stale:** ~50 blog posts quote the old figures in prose (16 say $168,600; 50 say $15,000 deduction; 30 cite the $11,925 bracket). A separate careful pass is needed (task card proposed). State tax tables in `states.ts` were not re-verified (several use $14,600, a 2024-linked figure).
- **Routine prompt rewritten:** STEP 0 now requires reading constants from `src/data/states.ts`, forbids typing tax figures from memory, requires primary-source links next to any other figure, adds a summary paragraph and question-style H2s, steers topics to the paycheck core, and gives the agent WebFetch/WebSearch for verification.
- **Mobile fixes from the visual audit:** header no longer overflows at phone width (CTA hidden under 480px), primary buttons now white-on-dark for contrast.

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
- `src/components/RotatingBanner.tsx` — House ad rotation (AI Peak Biz / FLNC), not AdSense
- `src/components/StateFinder.tsx` — Homepage state search (client component)
- `src/components/PaycheckCalculator.tsx` — Interactive calculator (client component)
- `src/components/ArticleFooter.tsx` — Related-guides footer used by every blog post
- `src/app/globals.css` — Design tokens + all component classes (the whole visual system)
- `src/app/blog/<slug>/page.tsx` — One folder per post, inline-styled body, must end with `<ArticleFooter />`
- `src/lib/tax-calculator.ts` — Tax calculation logic
- `src/lib/seo.ts` — SEO helpers
- `src/data/states.ts` — State data
- `next.config.ts` — Next.js config

## PLANNING ARTIFACTS (not committed)
- `cluster-plan.md` — SEO cluster planning doc
- `cluster-plan.json` — Cluster data
- `cluster-map.html` — Visual cluster map

## AUTOMATED BLOG PUBLISHING
- **Routine:** "Daily Blog Publisher — paycheck.center" (trig_013KLX1hcKWxpdk7YedCo8MA), cloud routine on claude.ai
- **Schedule:** every day at 13:00 UTC (9am ET / 6am Phoenix), cron `0 13 * * *`
- **Manage:** https://claude.ai/code/routines/trig_013KLX1hcKWxpdk7YedCo8MA
- **How:** reads `src/data/blog.ts`, uses `src/app/blog/fica-taxes-explained/page.tsx` as the template, writes one new post, appends to `blog.ts`, runs `npx next build`, commits and pushes to main. Vercel deploys.
- **Template rules baked into the prompt:** breadcrumb nav at top, inline-styled body, green calculator CTA, Sources list, `<ArticleFooter current="slug" />` at the end, never touch AdSense or existing files.
- **Paused routine:** "Paycheck Blog Post Writer" (trig_01JVyH5eJ8RSJ5rq2satQGUG) ran Mon/Thu and is now disabled so there is exactly one post per day. Delete it at https://claude.ai/code/routines if desired.
- **Topic selection:** the prompt carries a long idea list plus permission to pick long-tail angles; it must check `blog.ts` for duplicates first.

## WHAT'S NEXT
- Work through `seo-reports/2026-10-17/SUMMARY.md` HIGH items: named author + Person schema + real `/about`, make the 1,200 salary pages genuinely unique (programmatic score 42/100), og:image on every page, 140-160 char meta descriptions, sitemap hygiene (drop noindex pages, real lastmod), `not-found.tsx`
- Clean stale 2025/2024 figures out of ~50 blog posts (task card proposed)
- Verify the site in Google Search Console + Bing Webmaster Tools (Wylie, ~30 min) and add a PageSpeed API key so `/seo google` works
- Re-verify state tax tables in `states.ts` against each Department of Revenue
- Spot-check www.paycheck.center on a real phone
- Watch the first few daily routine runs for quality and duplicates
- Consider a blog post layout wrapper so new posts no longer need inline styles
- Replace `.ad-slot` placeholders with real AdSense `<ins>` units when Wylie is ready (ask first)
- Consider adding structured data (JSON-LD) for rich snippets
- Track AdSense performance and optimize ad placement
- Potentially add more salary-specific pages for high-traffic keywords

## RULES
- **Always push to Vercel** (git push origin main) after every change
- **Update this file** at the end of every session
