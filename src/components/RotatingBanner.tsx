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
    bgColor: '#eef3ff',
    accentColor: '#2456d6',
  },
  {
    title: 'Frontline Legal Nurse Consulting',
    description: '20 years of healthcare expertise behind every case review. Stronger demand packages, better case strategy, higher settlements.',
    cta: 'Request a Case Review',
    url: 'https://www.frontlinelegalnurse.com',
    bgColor: '#e7f7ef',
    accentColor: '#0a7a54',
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
    <div className="sponsor" aria-label="Sponsored">
      <div className="sponsor-slides">
        {ads.map((ad, i) => (
          <a
            key={ad.url}
            href={ad.url}
            target="_blank"
            rel="noopener nofollow sponsored"
            className="sponsor-slide"
            style={{
              background: `linear-gradient(135deg, #ffffff 0%, ${ad.bgColor} 100%)`,
              opacity: i === currentAd ? 1 : 0,
              pointerEvents: i === currentAd ? 'auto' : 'none',
              position: i === 0 ? 'relative' : 'absolute',
              top: i === 0 ? undefined : 0,
              left: i === 0 ? undefined : 0,
              right: i === 0 ? undefined : 0,
              bottom: i === 0 ? undefined : 0,
            }}
            aria-hidden={i !== currentAd}
            tabIndex={i === currentAd ? 0 : -1}
          >
            <div style={{ flex: '1 1 380px' }}>
              <div className="label" style={{ color: ad.accentColor }}>
                Sponsored
              </div>
              <div className="title">{ad.title}</div>
              <div className="desc">{ad.description}</div>
            </div>
            <span
              className="btn"
              style={{ background: ad.accentColor, color: '#fff', boxShadow: `0 10px 24px -10px ${ad.accentColor}99` }}
            >
              {ad.cta}
            </span>
          </a>
        ))}
      </div>
      <div className="sponsor-dots">
        {ads.map((ad, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentAd(i)}
            aria-label={`Show ${ad.title}`}
            aria-current={i === currentAd}
            style={{ background: i === currentAd ? ad.accentColor : undefined }}
          />
        ))}
      </div>
    </div>
  )
}
