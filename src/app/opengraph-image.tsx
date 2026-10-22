import { ImageResponse } from 'next/og'
import { taxYear } from '@/data/states'

export const alt = 'PaycheckCalc — Free Paycheck Calculator for Every US State'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const INK = '#0b1b2e'
const PAPER = '#f6f4ee'
const MONEY = '#5ee0a8'
const GOLD = '#e3a72f'

export default async function Image() {
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
          <div style={{ fontSize: 18, color: GOLD, letterSpacing: 3, fontFamily: 'monospace' }}>{`${taxYear} FEDERAL & STATE RATES`}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 18, fontSize: 68, lineHeight: 1.06, fontWeight: 600, letterSpacing: -1.5, maxWidth: 1000 }}>
            <span>Know what you&rsquo;ll</span>
            <span style={{ color: MONEY, fontStyle: 'italic' }}>actually</span>
            <span>take home.</span>
          </div>
          <div style={{ fontSize: 26, color: 'rgba(246,244,238,0.7)', fontFamily: 'sans-serif', maxWidth: 900, lineHeight: 1.35 }}>
            Free paycheck calculator for all 50 states. Federal, state, Social Security and Medicare taxes, line by line.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 36, fontFamily: 'monospace', fontSize: 20, color: 'rgba(246,244,238,0.7)' }}>
            <span>50 state calculators</span>
            <span>1,200 salary pages</span>
            <span>No sign-up</span>
          </div>
          <div style={{ fontSize: 20, color: MONEY, fontFamily: 'monospace' }}>paycheck.center</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
