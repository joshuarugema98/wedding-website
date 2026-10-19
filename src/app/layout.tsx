import type { Metadata } from 'next'
import '@fontsource/lato/latin-400.css'
import '@fontsource/lato/latin-400-italic.css'
import '@fontsource/lato/latin-700.css'
import './globals.css'

// Next.js requires metadata alongside the root layout component.
// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  title: 'Joshua & Sandrine — Kigali, December 2026',
  description:
    'Join Joshua and Sandrine in Kigali, Rwanda. Gusaba on 18 December 2026 at Heaven Garden Rebero, and the wedding on 20 December 2026 at Kaleb Garden.',
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
