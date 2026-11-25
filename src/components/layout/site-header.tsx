'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/portfolio', label: 'Работы' },
  { href: '/about', label: 'О студии' },
  { href: '/services', label: 'Услуги' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Northstar Studio — на главную" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span className="brand-name">NORTHSTAR <span>STUDIO</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>

        <Link className="header-cta" href="/contact">Обсудить проект <span aria-hidden="true">↗</span></Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav${open ? ' is-open' : ''}`} aria-label="Мобильная навигация" aria-hidden={!open} inert={!open}>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)}>Обсудить проект <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  )
}
