'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { states } from '@/data/states'

function topRateLabel(s: (typeof states)[number]): string {
  if (!s.hasStateTax) return 'No state tax'
  if (s.taxType === 'flat') return `Flat ${(s.flatRate! * 100).toFixed(2)}%`
  const top = s.brackets ? s.brackets[s.brackets.length - 1].rate * 100 : 0
  return `Up to ${top.toFixed(2)}%`
}

const popular = ['texas', 'california', 'florida', 'new-york', 'washington', 'illinois']

export default function StateFinder() {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  const matches = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return states.slice(0, 8)
    return states
      .filter((s) => s.name.toLowerCase().includes(term) || s.abbreviation.toLowerCase() === term)
      .slice(0, 8)
  }, [q])

  useEffect(() => {
    setActive(0)
  }, [q])

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  function go(slug: string) {
    setOpen(false)
    router.push(`/${slug}`)
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      setActive((a) => Math.min(a + 1, matches.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (matches[active]) go(matches[active].slug)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const popularStates = popular
    .map((slug) => states.find((s) => s.slug === slug))
    .filter(Boolean) as typeof states

  return (
    <div className="finder" ref={wrapRef} id="find">
      <div className="finder-input-wrap">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          placeholder="Type your state, e.g. Texas or TX"
          aria-label="Find your state paycheck calculator"
          aria-expanded={open}
          aria-controls="finder-listbox"
          role="combobox"
          autoComplete="off"
        />
        <button
          type="button"
          className="btn btn-money"
          onClick={() => matches[active] && go(matches[active].slug)}
        >
          Calculate
        </button>
      </div>

      {open && (
        <div className="finder-list" id="finder-listbox" role="listbox">
          {matches.length === 0 && <div className="finder-empty">No state matches &ldquo;{q}&rdquo;.</div>}
          {matches.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              role="option"
              aria-selected={i === active}
              data-active={i === active}
              onMouseEnter={() => setActive(i)}
              onClick={() => go(s.slug)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="abbr">{s.abbreviation}</span>
                <span>{s.name}</span>
              </span>
              <span className={`rate ${s.hasStateTax ? '' : 'free'}`}>{topRateLabel(s)}</span>
            </button>
          ))}
        </div>
      )}

      <div className="chips">
        <span className="chips-label">Popular:</span>
        {popularStates.map((s) => (
          <a key={s.slug} href={`/${s.slug}`} className="chip">
            <span className="abbr">{s.abbreviation}</span>
            {s.name}
          </a>
        ))}
      </div>
    </div>
  )
}
