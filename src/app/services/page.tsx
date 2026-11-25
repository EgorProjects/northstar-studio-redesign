import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Услуги',
  description: 'Web Development, UI/UX Design, Branding и Digital Marketing от Northstar Studio.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <p className="hero-kicker"><span className="status-dot" /> ЧЕМ МЫ ПОЛЕЗНЫ</p>
        <h1>Стратегия задаёт курс.<br /><span>Дизайн и код ведут дальше.</span></h1>
        <p className="page-lede">Четыре направления, одна команда — от позиционирования до цифрового продукта.</p>
      </section>
      <section className="section services-page-list">
        {services.map((service) => <article className="service-detail" id={service.id} key={service.id}><span className="service-number">{service.number}</span><div><h2>{service.title}</h2><p>{service.description}</p><div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><Link className="round-arrow" href="/contact" aria-label={`Обсудить услугу ${service.title}`}>↗</Link></article>)}
      </section>
      <section className="contact-banner"><div><span className="eyebrow">НЕ ВИДИТЕ СВОЮ ЗАДАЧУ?</span><h2>Расскажите, что<br />хотите изменить.</h2></div><Link className="button button-lime" href="/contact">Связаться с нами <span aria-hidden="true">↗</span></Link></section>
    </>
  )
}
