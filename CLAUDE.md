# Paycheck Calculator — Project CLAUDE.md
# LAST UPDATED: 2026-10-26

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
- Google AdSense script integrated (publisher ID `ca-pub-8731434749249918`, same as `ads.txt`; an older note here listed a different ID, which was wrong)
- `ads.txt` added for ad verification
- Rotating ad banners component (`RotatingBanner.tsx`)
  - Fixed: each ad is a separate link element to prevent wrong URL on click
- **Status (2026-10-26):** site is NOT approved. AdSense rejected it for "Low value content." No real ad units have ever been placed. See the 2026-10-26 entry below.

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

### SEO action plan implemented (2026-10-22, "fix it all")
Wylie asked for the whole `seo-reports/2026-10-17/SUMMARY.md` plan to be done. Everything that did not need Wylie's own accounts or an AdSense decision shipped in four commits (1146cd8, e78f419, ee9c238 + the final blog pass):
- **Author / E-E-A-T:** new `/author/wylie-stevens` page (Person + ProfilePage schema), `src/components/ArticleMeta.tsx` byline (author, published, updated) under every post H1, BlogPosting `author` is now a Person, `/about` rewritten with "who runs it", a Methodology section (constants, sources, what is left out), and a corrections policy. Brand stays **PaycheckCalc** ("Paycheck Center" is an `alternateName`).
- **Blog figures:** three review passes corrected every tax-year-2026 figure in all 93 posts (brackets for single/MFJ/HoH, standard deductions, SS wage base $184,500, cap-gains/dividend thresholds, 401(k)/IRA/HSA/FSA/SIMPLE limits, AMT exemption and 50% phase-out, Roth/IRA phase-outs, Saver's Credit tiers, HDHP minimums, commuter $340, FSA carryover $680). Worked examples were recomputed. Logs: scratchpad `blog-scrub-log.md`, `blog-scrub-2-log.md`, `blog-scrub-3-log.md` (not committed). `blog.ts` now has an optional `updatedDate`; 68 posts carry `updatedDate: '2026-10-22'`, which drives `dateModified` and the sitemap.
- **Social cards:** dynamic Open Graph images at `/og/state/<slug>`, `/og/salary/<state>/<amount>-salary`, `/og/blog/<slug>`, `/og/page/{about,author,blog,contact}` (route handler `src/app/og/[...parts]/route.tsx`, cached via `next.config.ts` headers). Root `opengraph-image.tsx` restyled to the Ledger palette. Every page sets `openGraph.images`; Twitter card is `summary_large_image`; robots meta has `max-image-preview:large`. New `favicon.ico`, `apple-icon.png`, `public/logo-512.png`, recoloured `icon.svg`.
- **Calculator v2 (`src/lib/tax-calculator.ts` → `calculatePaycheck`):** filing status (single / married filing jointly / head of household; tables in `src/data/filing.ts`), 401(k) % and Section 125 $ pre-tax deductions, hourly mode (rate × hours/week × 52), Additional Medicare Tax. Salary pages keep the single-filer case via `calculateTakeHome`. State tax for joint filers = single tables with deduction and brackets doubled (disclosed in the UI and About).
- **Salary pages are no longer thin:** ~2,000 words each (was ~570) from computed blocks in `src/lib/salary-insights.ts`: hourly equivalent, marginal federal + state rate, value of the next raise, 50-state rank with best/worst/median, bordering-state comparison table (`src/data/neighbors.ts`), five computed Q&As, compare grid = neighbours + best/worst. State pages list all 24 salaries in a table, link bordering states instead of alphabetical ones, and carry a rank paragraph.
- **Technical:** sitemap uses real `lastmod` (`taxDataUpdated` for calculator pages, post dates for guides), drops noindex `/privacy` + `/terms` and `changefreq`/`priority`, adds the author page; `not-found.tsx` is noindex with no inherited canonical (root layout no longer sets a canonical); HSTS has `includeSubDomains; preload`; `robots.ts` explicitly allows OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot etc.; `llms.txt` has author, Sources and Optional sections; IndexNow key at `public/ebd927be….txt` + `src/lib/indexnow.ts`. State titles under 60 chars; state and salary meta descriptions are 140-160 chars with real take-home figures (whole dollars). Blog titles use `title.absolute`. Fonts: dropped Fraunces `opsz` axis and Figtree italic.
- **Mobile:** blog tables scroll at phone width, 40-44 px tap targets, H1 year badge spacing.
- **Schema:** Organization has alternateName, 512 px PNG logo, founder; WebApplication linked to the Organization with featureList; WebPage nodes with `dateModified` on state, salary and about pages; BreadcrumbList on `/blog` and `/contact`; `ArticleFooter` accepts an optional `related` prop.
- **Not done, needs Wylie:** change the apex→www redirect from 307 to 308 in the Vercel Domains settings; verify the site in Google Search Console and Bing Webmaster Tools and submit `/sitemap.xml`; AdSense-related items (preconnect hint, moving the first ad slot below the H1 on state/salary pages, reserved heights for real units, any CSP) are "ask Wylie first" and untouched. Real AdSense `<ins>` units still not placed.
- **Not done, follow-ups:** state tax tables in `states.ts` are still unverified against each Department of Revenue (several use a $14,600 figure); the comparison/roundup posts and the "how much is my paycheck after taxes" brief in `seo-reports/2026-10-17/` are written but not published (good topics for the daily routine); old posts do not yet have TL;DR boxes or question-style H2s (new posts get them from the routine prompt); PageSpeed/Search Console API keys for `/seo google`.
- **Daily routine:** should now add `<ArticleMeta slug="..." />` under the H1 (it clones `fica-taxes-explained`, which has it) and may pass `related={[...]}` to `ArticleFooter`. If a routine post adds `updatedDate` later, do it in `blog.ts`.
- **Dev notes:** `npx next build` takes ~4-5 min on the external drive (1,360 pages); run it in the background. `/opt/homebrew/bin/python3.13` is the Python to use for scripts (system python3 is 3.9). The `/seo` skill scripts need a venv with `requests`/`beautifulsoup4`.

### AdSense "Low value content" response (2026-10-26)
Wylie received an AdSense rejection: "Low value content." His first guess was the blog. The audit said otherwise:
- **Measured:** 1,352 sitemap URLs; 1,201 were `/[state]/[amount]-salary` pages (89% of the site). With digits masked, `/texas/75000-salary` and `/texas/80000-salary` were 100% identical line for line; Texas vs Ohio at the same salary 75% identical. About 1,060 visible words each. That is the "thin / scaled content" pattern the rejection links to.
- **Measured:** every page rendered empty boxes containing the literal word "Advertisement" (`.ad-slot` placeholder divs: 2 on home, 3 per state page, 3 per salary page, the first above the H1). Zero real AdSense units existed. Reviewers read that as an unfinished site.
- **Measured:** the blog was NOT thin. 97 posts, median 1,818 words (min 1,087), every post with .gov/.edu citations (median 12) and at least one table, no repeated boilerplate sentences across posts.
- **Shipped:**
  1. `src/app/[state]/[salary]/page.tsx`: `robots: { index: false, follow: true }` on all 1,201 salary pages. They stay live and linked from state pages for users. **To reverse later:** delete that one `robots` line and re-add the `salaryPages` block to `sitemap.ts`.
  2. `src/app/sitemap.ts`: salary pages removed. Sitemap is now 153 URLs (home, 50 states, 98 guides, about, author, contact, blog).
  3. All `.ad-slot` placeholder divs removed from `page.tsx`, `[state]/page.tsx`, `[state]/[salary]/page.tsx`. The `.ad-slot` CSS in `globals.css` is now unused (left in place). The AdSense `<Script>` in `layout.tsx` and `ads.txt` are unchanged. When approved, add real `<ins class="adsbygoogle">` units with reserved heights; do not bring back text placeholders.
  4. Scheduled task rewritten (see AUTOMATED BLOG PUBLISHING): three runs a week instead of seven. Mon/Wed publish one new guide; Fri upgrades the weakest existing guide. Every guide must include a table computed from the site's own tax engine, an answer-first box, worked math, question H2s, an FAQ, primary-source links, and Wylie's voice rules (no em dashes, no semicolons).
- **Not changed, flagged:** footer link to usedslotshop.com (nofollow). Unrelated to the site's topic; a reviewer may read it as a link scheme. Wylie's call.
- **Next for Wylie:** wait about 7 days after the deploy so Google recrawls and the salary pages drop from the index (watch Search Console > Pages), then tick "I confirm I have fixed the issues" and click Request review in AdSense. Reviews commonly take 2 to 4 weeks. If rejected again with the same reason, the remaining lever is traffic, not code.

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
- **Scheduled task:** "Blog Editor — paycheck.center (Mon/Wed new, Fri refresh)" (trig_013KLX1hcKWxpdk7YedCo8MA), cloud task on claude.ai. Renamed 2026-10-26; same task ID and run history as the old "Daily Blog Publisher."
- **Schedule:** Mon, Wed, Fri at 12:47 UTC (5:47am Phoenix), cron `47 12 * * 1,3,5`. Was daily at 13:00 UTC until 2026-10-26.
- **Manage:** https://claude.ai/code/routines/trig_013KLX1hcKWxpdk7YedCo8MA
- **MODE A (Mon/Wed):** one new guide. **MODE B (Fri):** picks the shortest existing guide not refreshed in 90 days and upgrades it in place (sets `updatedDate` in `blog.ts`). Mode is chosen by `date -u +%u`.
- **Quality bar in the prompt:** a table computed from `src/lib/tax-calculator.ts` via a scratch `scripts/_calc.ts` (deleted before commit), an "In short" answer box under `<ArticleMeta>`, step-by-step worked math, at least two question H2s, a 3-5 question FAQ, inline primary-source links, a WebSearch gap check against the top results, 1,800-2,800 words, no em dashes/semicolons/ellipses, no figures from memory (STEP 0 constants from `states.ts`).
- **Template:** `src/app/blog/fica-taxes-explained/page.tsx`. Breadcrumb at top, inline-styled body, green calculator CTA, Sources list, `<ArticleFooter current="slug" />` at the end, never touch AdSense, config, components, or other guides.
- **Paused routine:** "Paycheck Blog Post Writer" (trig_01JVyH5eJ8RSJ5rq2satQGUG) ran Mon/Thu and is now disabled so there is exactly one post per day. Delete it at https://claude.ai/code/routines if desired.
- **Topic selection:** the prompt carries a long idea list plus permission to pick long-tail angles; it must check `blog.ts` for duplicates first.

## WHAT'S NEXT
- Wylie: about 7 days after 2026-10-26, confirm in Search Console that salary pages are leaving the index, then request the AdSense review. Decide on the usedslotshop.com footer link.
- Wylie: Vercel Domains → make apex→www redirect permanent (308). (Search Console is already verified per Wylie, 2026-10-26.) Bing Webmaster Tools still unverified.
- After AdSense approval: place real `<ins>` units with reserved heights (no text placeholders), add the preconnect hint.
- Re-verify the 50 state tax tables in `src/data/states.ts` against each Department of Revenue for 2026
- Publish the comparison/roundup pages and the content brief from `seo-reports/2026-10-17/` (templates ready), or feed them to the daily routine
- Add PageSpeed/CrUX API key and GSC OAuth so `/seo google` and `/seo drift compare` give real field data; re-run `/seo audit` in 4-6 weeks and compare against the 2026-10-17 baseline
- Salary pages are noindex as of 2026-10-26. Revisit indexing them only after the domain has real organic traffic, and only if each page can carry content a reviewer would call unique, not computed variants
- Spot-check www.paycheck.center on a real phone (header, calculator, salary page tables)
- Consider a blog post layout wrapper so new posts no longer need inline styles

## RULES
- **Always push to Vercel** (git push origin main) after every change
- **Update this file** at the end of every session
