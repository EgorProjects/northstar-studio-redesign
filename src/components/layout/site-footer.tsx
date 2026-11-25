import Link from 'next/link'
import { site } from '@/content/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">✳</span>
            <span className="brand-name">NORTHSTAR <span>STUDIO</span></span>
          </Link>
          <p>Создаём цифровые бренды и продукты<br />для бизнеса, который смотрит вперёд.</p>
        </div>
        <div className="footer-links">
          <Link href="/about">О студии</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/portfolio">Портфолио</Link>
          <Link href="/contact">Контакты</Link>
        </div>
        <div className="footer-contact">
          <span className="eyebrow">НАЧНЁМ РАЗГОВОР?</span>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Northstar Studio</span>
        <span>Независимая digital-студия</span>
        <a href="#top">Наверх ↑</a>
      </div>
    </footer>
  )
}
