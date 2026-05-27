import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'PaycheckCalc — Free Paycheck Calculator for Every US State'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              background: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            $
          </div>
          <div style={{ fontSize: '48px', fontWeight: 700, color: '#fff' }}>
            PaycheckCalc
          </div>
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#94a3b8',
            maxWidth: '800px',
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Free Paycheck Calculator for Every US State
        </div>
        <div
          style={{
            fontSize: '20px',
            color: '#3b82f6',
            marginTop: '16px',
          }}
        >
          2026 Federal & State Tax Rates
        </div>
      </div>
    ),
    { ...size }
  )
}
