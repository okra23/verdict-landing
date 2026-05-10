import Link from 'next/link'
import type { ReactNode } from 'react'

const V = {
  black:  '#0A0A0A',
  red:    '#E8192C',
  white:  '#FFFFFF',
  w70:    'rgba(255,255,255,0.70)',
  w40:    'rgba(255,255,255,0.40)',
  w08:    'rgba(255,255,255,0.08)',
}

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div style={{ background: V.black, color: V.white, minHeight: '100vh' }}>
      <header style={{
        borderBottom: `1px solid ${V.w08}`,
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 24,
          color: V.white,
          textDecoration: 'none',
          letterSpacing: '0.04em',
        }}>
          VERDICT
        </Link>
        <Link href="/" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: V.w70,
          textDecoration: 'none',
        }}>
          ← Back to Verdict
        </Link>
      </header>

      <main style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: '64px 32px 96px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 15,
        lineHeight: 1.7,
        color: V.w70,
      }}>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 56,
          letterSpacing: '0.02em',
          color: V.white,
          margin: '0 0 8px',
        }}>
          {title}
        </h1>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: V.w40,
          marginBottom: 48,
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}>
          Last updated: {updated}
        </p>

        <div className="legal-prose">{children}</div>

        <style dangerouslySetInnerHTML={{ __html: `
          .legal-prose h2 {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 700;
            font-size: 24px;
            color: ${V.white};
            margin: 40px 0 12px;
            letter-spacing: 0.01em;
          }
          .legal-prose h3 {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 600;
            font-size: 18px;
            color: ${V.white};
            margin: 28px 0 8px;
          }
          .legal-prose p { margin: 0 0 16px; }
          .legal-prose ul { margin: 0 0 16px; padding-left: 22px; }
          .legal-prose li { margin: 0 0 6px; }
          .legal-prose a { color: ${V.red}; text-decoration: none; }
          .legal-prose a:hover { text-decoration: underline; }
          .legal-prose strong { color: ${V.white}; font-weight: 600; }
        ` }} />
      </main>

      <footer style={{
        borderTop: `1px solid ${V.w08}`,
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12,
        color: V.w40,
      }}>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/terms" style={{ color: V.w40, textDecoration: 'none' }}>Terms</Link>
          <Link href="/privacy" style={{ color: V.w40, textDecoration: 'none' }}>Privacy</Link>
        </div>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Collins and Company Enterprises, LLC · verdict.cards
        </p>
      </footer>
    </div>
  )
}
