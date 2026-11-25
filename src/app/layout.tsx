import type { Metadata } from 'next'
import './globals.css'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { site } from '@/content/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Northstar Studio — цифровые бренды и продукты',
    template: '%s — Northstar Studio',
  },
  description: 'Независимая digital-студия: Web Development, UI/UX Design, Branding и Digital Marketing.',
  openGraph: {
    title: 'Northstar Studio — цифровые бренды и продукты',
    description: 'Стратегия, дизайн и разработка цифровых продуктов.',
    siteName: 'Northstar Studio',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body id="top">
        <div className="site-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
