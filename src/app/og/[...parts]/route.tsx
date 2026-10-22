import { ImageResponse } from 'next/og'
import { getStateBySlug, taxYear } from '@/data/states'
import { blogPosts } from '@/data/blog'
import { calculateTakeHome, formatSalary, parseSalarySlug } from '@/lib/tax-calculator'

/**
 * Social-card images for every inner page, rendered on demand and cached at
 * the CDN (see next.config.ts headers):
 *   /og/state/texas
 *   /og/salary/texas/75000-salary
 *   /og/blog/<slug>
 *   /og/page/about | author | blog | contact
 */

const INK = '#0b1b2e'
const PAPER = '#f6f4ee'
const MONEY = '#5ee0a8'
const GOLD = '#e3a72f'
const MUTED = 'rgba(246,244,238,0.62)'

const money0 = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

interface Card {
  eyebrow: string
  title: string
  stat?: { label: string; value: string }[]
  footer?: string
}

function cardFor(parts: string[]): Card | null {
  const [kind, a, b] = parts
  if (kind === 'state' && a) {
    const st = getStateBySlug(a)
    if (!st) return null
    const r = calculateTakeHome(75000, st)
    return {
      eyebrow: `${st.name.toUpperCase()} · ${taxYear} RATES`,
      title: `${st.name} paycheck calculator`,
      stat: [
        { label: 'State income tax', value: st.hasStateTax ? (st.taxType === 'flat' ? `Flat ${(st.flatRate! * 100).toFixed(2)}%` : 'Progressive') : 'None' },
        { label: '$75,000 take-home', value: money0(r.takeHomePay) },
        { label: 'Effective rate', value: `${(r.effectiveRate * 100).toFixed(1)}%` },
      ],
      footer: 'Federal, state, Social Security and Medicare, line by line. Free, no sign-up.',
    }
  }
  if (kind === 'salary' && a && b) {
    const st = getStateBySlug(a)
    const amount = parseSalarySlug(b)
    if (!st || !amount) return null
    const r = calculateTakeHome(amount, st)
    return {
      eyebrow: `${st.name.toUpperCase()} · ${taxYear}`,
      title: `${formatSalary(amount)} salary after taxes in ${st.name}`,
      stat: [
        { label: 'Take-home per year', value: money0(r.takeHomePay) },
        { label: 'Per month', value: money0(r.takeHomePay / 12) },
        { label: 'Bi-weekly check', value: money0(r.takeHomePay / 26) },
      ],
      footer: `${(r.effectiveRate * 100).toFixed(1)}% effective tax rate · single filer, standard deduction`,
    }
  }
  if (kind === 'blog' && a) {
    const post = blogPosts.find((p) => p.slug === a)
    if (!post) return null
    return {
      eyebrow: `GUIDE · ${post.readingTime.toUpperCase()}`,
      title: post.title,
      footer: post.excerpt.length > 140 ? post.excerpt.slice(0, 137) + '…' : post.excerpt,
    }
  }
  if (kind === 'page') {
    const pages: Record<string, Card> = {
      about: { eyebrow: 'ABOUT', title: 'Who runs PaycheckCalc and how the math works', footer: `Every figure sourced from IRS and SSA publications for ${taxYear}.` },
      author: { eyebrow: 'AUTHOR', title: 'Wylie Stevens', footer: 'Founder of AI Peak Biz. Builds and maintains PaycheckCalc.' },
      blog: { eyebrow: 'GUIDES', title: 'Paycheck & tax guides', footer: `${blogPosts.length} plain-English explainers on withholding, deductions and take-home pay.` },
      contact: { eyebrow: 'CONTACT', title: 'Questions, corrections and feedback', footer: 'contact@aipeakbiz.com' },
    }
    return pages[a] ?? null
  }
  return null
}

export async function GET(_req: Request, ctx: { params: Promise<{ parts: string[] }> }) {
  const { parts } = await ctx.params
  const card = cardFor(parts ?? [])
  if (!card) return new Response('Not found', { status: 404 })

  const titleSize = card.title.length > 70 ? 46 : card.title.length > 48 ? 54 : 64

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background: `linear-gradient(135deg, ${INK} 0%, #122a44 100%)`,
          color: PAPER,
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: MONEY,
                color: INK,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                fontWeight: 700,
                fontFamily: 'sans-serif',
              }}
            >
              $
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, fontFamily: 'sans-serif', letterSpacing: -0.5 }}>PaycheckCalc</div>
          </div>
          <div style={{ fontSize: 18, color: GOLD, letterSpacing: 3, fontFamily: 'monospace' }}>{card.eyebrow}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: titleSize, lineHeight: 1.08, fontWeight: 600, letterSpacing: -1.2, maxWidth: 1040 }}>{card.title}</div>
          {card.stat && (
            <div style={{ display: 'flex', gap: 40 }}>
              {card.stat.map((s) => (
                <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ fontSize: 15, color: MUTED, letterSpacing: 2, fontFamily: 'monospace' }}>{s.label.toUpperCase()}</div>
                  <div style={{ fontSize: 38, fontWeight: 700, color: MONEY, fontFamily: 'monospace' }}>{s.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40 }}>
          <div style={{ fontSize: 22, color: MUTED, fontFamily: 'sans-serif', maxWidth: 860, lineHeight: 1.35 }}>{card.footer ?? ''}</div>
          <div style={{ fontSize: 20, color: MONEY, fontFamily: 'monospace', whiteSpace: 'nowrap' }}>paycheck.center</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
