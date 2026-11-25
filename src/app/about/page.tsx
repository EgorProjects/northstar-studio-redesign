import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/section-heading'
import { team } from '@/content/team'

export const metadata: Metadata = {
  title: 'О студии',
  description: 'Познакомьтесь с Northstar Studio: наш подход, ценности и команда.',
}

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <p className="hero-kicker"><span className="status-dot" /> О СТУДИИ</p>
        <h1>Не просто делаем.<br /><span>Помогаем двигаться.</span></h1>
        <p className="page-lede">Northstar Studio объединяет стратегию, дизайн, разработку и маркетинг для цифровых брендов и продуктов.</p>
      </section>
      <section className="section about-story">
        <SectionHeading eyebrow="НАШ ПОДХОД" title="Любопытство — в начале. Ясность — в результате." />
        <div className="story-copy"><p>Мы собираем небольшие команды под конкретные задачи и работаем рядом с людьми, которые знают свой бизнес лучше всех.</p><p>Так появляются решения, в которых каждая деталь поддерживает общую цель: от первого впечатления до последнего клика.</p></div>
      </section>
      <section className="values-band">
        <article><span>01</span><h2>Думать глубже</h2><p>Сначала разбираемся в задаче, контексте и людях. Потом выбираем форму.</p></article>
        <article><span>02</span><h2>Делать вместе</h2><p>Держим процесс открытым и вовлекаем клиента в ключевые решения.</p></article>
        <article><span>03</span><h2>Доводить до дела</h2><p>Соединяем сильную идею с продуманной реализацией и вниманием к мелочам.</p></article>
      </section>
      <section className="section team-section">
        <SectionHeading eyebrow="ЛЮДИ NORTHSTAR" title="Компактная команда. Разные точки зрения." description="Демонстрационные профили — замените на подтверждённые данные команды перед публикацией." />
        <div className="team-grid">{team.map((person) => <article className="team-card" key={person.name}><div className={`team-portrait ${person.tone}`}><span>{person.initials}</span><i aria-hidden="true">✳</i></div><h3>{person.name}</h3><p>{person.role}</p></article>)}</div>
      </section>
    </>
  )
}
