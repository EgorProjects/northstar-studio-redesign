import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/contact-form'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Расскажите Northstar Studio о своей задаче — обсудим следующий шаг.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="contact-intro"><p className="hero-kicker"><span className="status-dot" /> ДАВАЙТЕ ЗНАКОМИТЬСЯ</p><h1>У хороших идей<br />есть <span>свой адрес.</span></h1><p className="page-lede">Расскажите, что строите, или напишите нам напрямую.</p><div className="contact-email"><span className="eyebrow">НАПИШИТЕ НАМ</span><a href={`mailto:${site.contactEmail}`}>{site.contactEmail} ↗</a></div><p className="contact-note">Демо-адрес и форма — замените на рабочие перед публикацией.</p></div>
      <div className="contact-form-panel"><span className="eyebrow">КОРОТКО О ПРОЕКТЕ</span><ContactForm /></div>
    </section>
  )
}
