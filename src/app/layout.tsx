import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verdict — Stop Guessing. Get a Verdict.',
  description:
    'The only free, all-category trading card pricing platform. Real eBay sold data — not asking prices. Sports Cards, TCG, and Non-Sport all in one place. Coming soon to verdict.cards.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://verdict.cards'),
  openGraph: {
    title: 'Verdict — Stop Guessing. Get a Verdict.',
    description:
      'Free, all-category trading card pricing built on real eBay sold data. Coming soon.',
    url: 'https://verdict.cards',
    siteName: 'Verdict',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verdict — Stop Guessing. Get a Verdict.',
    description:
      'Free, all-category trading card pricing built on real eBay sold data. Coming soon.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
