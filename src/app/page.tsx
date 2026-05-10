/**
 * VERDICT — Coming Soon Landing Page
 * ─────────────────────────────────
 * Drop this file at:  app/page.tsx  (Next.js App Router)
 *
 * Also create:        app/api/waitlist/route.ts  (see VERDICT_LANDING_waitlist_route.ts)
 *
 * Fonts: Add these two lines to your app/layout.tsx <head> (or use next/font):
 *   <link rel="preconnect" href="https://fonts.googleapis.com" />
 *   <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
 *
 * Env var needed:     NEXT_PUBLIC_SITE_URL (optional, defaults to verdict.cards)
 */

'use client'

import { useState, useRef } from 'react'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const V = {
  black:   '#0A0A0A',
  black2:  '#111111',
  black3:  '#1A1A1A',
  black4:  '#222222',
  black5:  '#2E2E2E',
  red:     '#E8192C',
  redLt:   '#FF2D42',
  yellow:  '#FFD600',
  white:   '#FFFFFF',
  w70:     'rgba(255,255,255,0.70)',
  w40:     'rgba(255,255,255,0.40)',
  w08:     'rgba(255,255,255,0.08)',
  redTint: 'rgba(232,25,44,0.10)',
  yelTint: 'rgba(255,214,0,0.10)',
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: 'Card Pricing',
    desc: 'FMV powered by real eBay sold data, not asking prices. Trend charts, comp tables, grade arbitrage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    name: 'Compare',
    desc: 'Side-by-side head-to-head on any two cards. AI Quick Take tells you which is the better hold.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <line x1="12" y1="3" x2="12" y2="21" />
        <path d="M3 9h4l2 3-2 3H3" />
        <path d="M21 9h-4l-2 3 2 3h4" />
      </svg>
    ),
  },
  {
    name: 'Flip Calculator',
    desc: 'Multi-grade ROI across raw, PSA 8, 9, and 10. AI verdict: Strong Buy, Worth Considering, Pass.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    name: 'Sealed Products',
    desc: 'Same pricing engine applied to hobby boxes, blasters, ETBs, mega boxes, and booster packs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Collection Manager',
    desc: 'Portfolio tracking with real-time market values. Bulk AI binder import from 1–4 photos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Watchlist',
    desc: 'Set a price target. Get notified when the market hits your buy zone. BUY NOW badge triggers automatically.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    name: 'Lot Calculator',
    desc: 'Paste any eBay, Mercari, or ShopGoodwill URL. AI detects every card, values the lot, scores the ROI.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Grade My Card',
    desc: 'AI PSA grade prediction with 4 subgrades. Comp-based ROI verdict: Worth Grading or Pass.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

const SPORTS_CATS = ['Baseball', 'Basketball', 'Football', 'Hockey', 'Soccer', 'Golf', 'Boxing', 'MMA', 'Racing', 'Tennis', 'Wrestling']
const TCG_CATS    = ['Pokémon', 'Magic: The Gathering', 'Yu-Gi-Oh!', 'One Piece TCG', 'Disney Lorcana', 'Dragon Ball Super', 'Digimon', 'Flesh and Blood']
const NONSPORT_CATS = ['Star Wars', 'Marvel', 'Disney', 'DC Comics', 'Garbage Pail Kids', 'WWE', 'Horror / Sci-Fi', 'Historic Autographs']

// ─── Sub-components ───────────────────────────────────────────────────────────

function Logo() {
  return (
    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 2, color: V.white, display: 'flex', alignItems: 'center', gap: 2 }}>
      <span style={{ color: V.red }}>V</span>ERDICT
    </div>
  )
}

function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <rect width="64" height="64" rx="10" fill={V.black} />
      <polyline points="6,12 24,45 32,31" stroke={V.red} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
      <polyline points="24,45 32,31 58,9" stroke={V.red} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="24" cy="45" r="6.5" fill={V.yellow} />
    </svg>
  )
}

function LogoLockup() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <LogoMark size={36} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, letterSpacing: 2, color: V.white }}>
          <span style={{ color: V.red }}>V</span>ERDICT
        </div>
        <div style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 10,
          letterSpacing: 1.8,
          textTransform: 'uppercase' as const,
          color: V.w70,
          marginTop: 4,
        }}>
          Stop Guessing. Get a Verdict.
        </div>
      </div>
    </div>
  )
}

function ComingSoonBadge() {
  return (
    <span style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase' as const,
      background: V.redTint,
      border: `1px solid ${V.red}`,
      color: V.redLt,
      borderRadius: 4,
      padding: '3px 10px',
    }}>
      Coming Soon
    </span>
  )
}

function CategoryPill({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      color: V.w70,
      background: V.w08,
      border: `1px solid rgba(255,255,255,0.08)`,
      borderRadius: 4,
      padding: '3px 9px',
      whiteSpace: 'nowrap' as const,
    }}>
      {label}
    </span>
  )
}

function ToolCard({ tool }: { tool: typeof TOOLS[0] }) {
  return (
    <div style={{
      background: V.black2,
      border: `1px solid ${V.w08}`,
      borderRadius: 10,
      padding: '24px 22px',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: 12,
      position: 'relative' as const,
      overflow: 'hidden',
    }}>
      {/* subtle corner glow */}
      <div style={{
        position: 'absolute',
        top: -30,
        right: -30,
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'rgba(232,25,44,0.06)',
        pointerEvents: 'none',
      }} />

      <div style={{ color: V.red, display: 'flex', alignItems: 'center' }}>
        {tool.icon}
      </div>

      <div>
        <div style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: 17,
          letterSpacing: 0.5,
          color: V.white,
          textTransform: 'uppercase' as const,
          marginBottom: 6,
        }}>
          {tool.name}
        </div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: V.w70,
          lineHeight: 1.55,
        }}>
          {tool.desc}
        </div>
      </div>

      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 10,
        letterSpacing: 1.5,
        textTransform: 'uppercase' as const,
        color: V.w40,
        marginTop: 'auto',
        paddingTop: 8,
        borderTop: `1px solid ${V.w08}`,
      }}>
        Coming Soon
      </div>
    </div>
  )
}

function CategorySection() {
  const categories = [
    { label: 'Sports Cards', accent: V.red, items: SPORTS_CATS },
    { label: 'Trading Card Games', accent: V.yellow, items: TCG_CATS },
    { label: 'Non-Sport Cards', accent: '#9898FF', items: NONSPORT_CATS },
  ]

  return (
    <section style={{ padding: '80px 24px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' as const, color: V.w40, marginBottom: 10 }}>
          Every Category. One Tool.
        </p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, letterSpacing: 2, color: V.white, lineHeight: 1 }}>
          All Cards. All Markets.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        {categories.map(cat => (
          <div key={cat.label} style={{
            background: V.black2,
            border: `1px solid ${V.w08}`,
            borderTop: `2px solid ${cat.accent}`,
            borderRadius: 10,
            padding: '24px 22px',
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 20,
              letterSpacing: 1.5,
              color: V.white,
              marginBottom: 16,
            }}>
              {cat.label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
              {cat.items.map(item => <CategoryPill key={item} label={item} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ComingSoonPage() {
  const [email, setEmail]     = useState('')
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const waitlistRef           = useRef<HTMLDivElement>(null)

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setMessage("You're on the list. We'll hit you when we launch.")
        setEmail('')
      } else {
        throw new Error('Failed')
      }
    } catch {
      setStatus('error')
      setMessage("Something went wrong. Try again.")
    }
  }

  return (
    <div style={{ background: V.black, minHeight: '100vh', color: V.white }}>
      {/* Global CSS. Fonts are loaded via <link> in app/layout.tsx. */}
      {/* dangerouslySetInnerHTML avoids a hydration mismatch on the inline <style> text. */}
      <style dangerouslySetInnerHTML={{ __html: `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${V.black}; }
        ::selection { background: ${V.red}; color: #fff; }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0 100px ${V.black3} inset !important; -webkit-text-fill-color: #fff !important; }
      ` }} />

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${V.w08}`,
        padding: '0 32px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <LogoLockup />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <ComingSoonBadge />
          <button
            onClick={scrollToWaitlist}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              background: V.red,
              color: V.white,
              border: 'none',
              borderRadius: 5,
              padding: '8px 18px',
              cursor: 'pointer',
            }}
          >
            Get Early Access
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(${V.w08} 1px, transparent 1px), linear-gradient(90deg, ${V.w08} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Red glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(232,25,44,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: 800 }}>
          <div style={{ marginBottom: 20 }}>
            <ComingSoonBadge />
          </div>

          {/* Logo / wordmark */}
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(72px, 14vw, 140px)',
            lineHeight: 0.9,
            letterSpacing: 4,
            color: V.white,
            marginBottom: 8,
          }}>
            <span style={{ color: V.red }}>V</span>ERDICT
          </div>

          {/* Yellow data node line */}
          <div style={{
            width: 40,
            height: 3,
            background: V.yellow,
            borderRadius: 2,
            margin: '20px auto',
          }} />

          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(24px, 4vw, 38px)',
            letterSpacing: 2,
            color: V.w70,
            marginBottom: 20,
          }}>
            Stop Guessing. Get a Verdict.
          </p>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 17,
            color: V.w40,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 40px',
          }}>
            The only free, all-category trading card pricing platform. Real eBay sold data — not asking prices. Sports Cards, TCG, and Non-Sport all in one place.
          </p>

          {/* Stat pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
            {[
              { num: '8', label: 'Free Tools' },
              { num: '3', label: 'Categories' },
              { num: '30+', label: 'Card Types' },
              { num: '$0', label: 'Always Free' },
            ].map(s => (
              <div key={s.label} style={{
                background: V.black3,
                border: `1px solid ${V.w08}`,
                borderRadius: 8,
                padding: '12px 20px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: V.yellow, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: V.w40, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={scrollToWaitlist}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                background: V.red,
                color: V.white,
                border: 'none',
                borderRadius: 6,
                padding: '14px 32px',
                cursor: 'pointer',
              }}
            >
              Get Early Access
            </button>
            <button
              onClick={scrollToWaitlist}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                background: 'transparent',
                color: V.w70,
                border: `1px solid ${V.w08}`,
                borderRadius: 6,
                padding: '14px 32px',
                cursor: 'pointer',
              }}
            >
              See the Tools ↓
            </button>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <CategorySection />

      {/* ── DIVIDER ── */}
      <div style={{ maxWidth: 960, margin: '0 auto', height: 1, background: V.w08 }} />

      {/* ── TOOLS ── */}
      <section style={{ padding: '80px 24px', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' as const, color: V.w40, marginBottom: 10 }}>
            8 Integrated Tools
          </p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, letterSpacing: 2, color: V.white, lineHeight: 1, marginBottom: 12 }}>
            Everything You Need to Win
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: V.w40, maxWidth: 500, margin: '0 auto' }}>
            Every tool is free. Every tool runs on real eBay sold data. No paywalls on the things that matter.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16 }}>
          {TOOLS.map(tool => <ToolCard key={tool.name} tool={tool} />)}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ maxWidth: 960, margin: '0 auto', height: 1, background: V.w08 }} />

      {/* ── WAITLIST ── */}
      <section
        ref={waitlistRef}
        style={{
          padding: '100px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* yellow glow */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 500,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,214,0,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: 540, margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 14,
            letterSpacing: 3,
            color: V.yellow,
            marginBottom: 12,
          }}>
            The Verdict Is In
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 52,
            letterSpacing: 2,
            color: V.white,
            lineHeight: 1,
            marginBottom: 16,
          }}>
            Be First In Line
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: V.w70,
            lineHeight: 1.7,
            marginBottom: 36,
          }}>
            Drop your email and we'll notify you the moment Verdict goes live. No spam. One email when we launch.
          </p>

          {status === 'success' ? (
            <div style={{
              background: V.yelTint,
              border: `1px solid rgba(255,214,0,0.3)`,
              borderRadius: 10,
              padding: '20px 28px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: V.yellow,
            }}>
              ✓ {message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  flex: 1,
                  background: V.black3,
                  border: `1px solid ${V.w08}`,
                  borderRadius: 6,
                  padding: '12px 16px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: V.white,
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  background: status === 'loading' ? V.black5 : V.red,
                  color: V.white,
                  border: 'none',
                  borderRadius: 6,
                  padding: '12px 24px',
                  cursor: status === 'loading' ? 'default' : 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.15s',
                }}
              >
                {status === 'loading' ? '…' : 'Notify Me'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: V.redLt, marginTop: 10 }}>
              {message}
            </p>
          )}

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: V.w40, marginTop: 16 }}>
            No spam. Just the launch announcement.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: `1px solid ${V.w08}`,
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <Logo />
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="/terms" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: V.w40, textDecoration: 'none' }}>Terms</a>
          <a href="/privacy" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: V.w40, textDecoration: 'none' }}>Privacy</a>
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: V.w40 }}>
          © {new Date().getFullYear()} Verdict · verdict.cards
        </p>
      </footer>
    </div>
  )
}
