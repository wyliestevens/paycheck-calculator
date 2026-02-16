'use client'

import { useState, useEffect } from 'react'

interface Ad {
  title: string
  description: string
  cta: string
  url: string
  bgColor: string
  accentColor: string
}

const ads: Ad[] = [
  {
    title: 'AI Peak Biz',
    description: 'Stop losing leads. AI-powered chatbots, voice agents, and review systems that book more appointments and cut your admin work in half.',
    cta: 'Get Your Free AI Audit',
    url: 'https://www.aipeakbiz.com',
    bgColor: '#eff6ff',
    accentColor: '#2563eb',
  },
  {
    title: 'Frontline Legal Nurse Consulting',
    description: '20 years of healthcare expertise behind every case review. Stronger demand packages, better case strategy, higher settlements.',
    cta: 'Request a Case Review',
    url: 'https://www.frontlinelegalnurse.com',
    bgColor: '#f0fdf4',
    accentColor: '#059669',
  },
]

export default function RotatingBanner() {
  const [currentAd, setCurrentAd] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        margin: '2rem 0',
        borderRadius: '12px',
        overflow: 'hidden',
        border: `1px solid ${ads[currentAd].accentColor}22`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'border-color 0.4s ease',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative' }}>
        {ads.map((ad, i) => (
          <a
            key={ad.url}
            href={ad.url}
            target="_blank"
            rel="noopener"
            style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
              padding: '1.25rem 1.5rem',
              background: ad.bgColor,
              opacity: i === currentAd ? 1 : 0,
              pointerEvents: i === currentAd ? 'auto' : 'none',
              position: i === 0 ? 'relative' : 'absolute',
              top: i === 0 ? undefined : 0,
              left: i === 0 ? undefined : 0,
              right: i === 0 ? undefined : 0,
              transition: 'opacity 0.5s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ flex: '1 1 400px' }}>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: ad.accentColor,
                    fontWeight: 600,
                    marginBottom: '0.25rem',
                  }}
                >
                  Sponsored
                </div>
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#1e293b',
                    marginBottom: '0.375rem',
                  }}
                >
                  {ad.title}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: '#475569',
                    lineHeight: 1.5,
                  }}
                >
                  {ad.description}
                </div>
              </div>
              <div
                style={{
                  background: ad.accentColor,
                  color: '#fff',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {ad.cta}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.5rem',
          background: ads[currentAd].bgColor,
          transition: 'background 0.4s ease',
        }}
      >
        {ads.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentAd(i)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              background: i === currentAd ? ads[currentAd].accentColor : '#cbd5e1',
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}
