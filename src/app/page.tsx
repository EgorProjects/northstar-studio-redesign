import Link from 'next/link'
import { ArrowLink } from '@/components/ui/arrow-link'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProjectGrid } from '@/components/portfolio/project-grid'
import { projects } from '@/content/projects'
import { ProjectArt } from '@/components/portfolio/project-art'
import { services } from '@/content/services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital-студия для амбициозных брендов',
  description: 'Northstar Studio объединяет стратегию, брендинг, UX/UI-дизайн и веб-разработку.',
}

export default function HomePage() {
  return (
    <>
      <section className="hero hero-grid">
        <div className="hero-content">
          <p className="hero-kicker"><span className="status-dot" /> Независимая digital-студия · стратегия / дизайн / код</p>
          <h1>Создаём цифровые<br />впечатления, которые<br /><span>двигают бизнес.</span></h1>
          <p className="hero-copy">Northstar соединяет брендинг, интерфейсы и разработку в цельные цифровые продукты — от первой идеи до уверенного запуска.</p>
          <div className="hero-actions">
            <Link className="button button-lime" href="/portfolio">Смотреть проекты <span aria-hidden="true">↗</span></Link>
            <Link className="button button-outline" href="/contact">Начать проект <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <Link className="hero-feature" href="/portfolio" aria-label="Посмотреть проект Orbital">
          <ProjectArt project={projects[0]} />
          <span className="hero-feature-caption"><b>Избранная работа</b><span>Orbital / цифровой продукт / 2025 ↗</span></span>
        </Link>
        <div className="hero-bottomline"><span>НЕЗАВИСИМАЯ СТУДИЯ · РАБОТАЕМ ПО ВСЕМУ МИРУ</span><span>ПРОКРУТИТЕ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ ↓</span></div>
      </section>

      <section className="client-strip" aria-label="Направления работы">
        <span>От первой идеи<br />до сильного релиза</span>
        <div className="strip-services"><span>Web Development</span><span>UI/UX Design</span><span>Branding</span><span>Digital Marketing</span></div>
      </section>

      <section className="section services-section">
        <div className="section-intro-row">
          <SectionHeading eyebrow="ЧТО МЫ ДЕЛАЕМ" title={<>Большие идеи.<br />Чёткое исполнение.</>} description="Собираем стратегию, эстетику и технологию в цельный цифровой опыт." />
          <ArrowLink href="/services">Все услуги</ArrowLink>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <Link className="service-row" href="/services" key={service.id}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section work-section">
        <div className="section-intro-row">
          <SectionHeading eyebrow="ИЗБРАННЫЕ ПРОЕКТЫ" title="Работы с идеей внутри." description="Каждый проект начинается с вопроса: что должно измениться для людей и бизнеса?" />
          <ArrowLink href="/portfolio">Все проекты</ArrowLink>
        </div>
        <ProjectGrid projects={projects.filter((project) => project.featured)} />
      </section>

      <section className="manifesto-section">
        <span className="eyebrow">ПОЧЕМУ NORTHSTAR</span>
        <div className="manifesto-content"><h2>Ясное направление.<br /><span>Сильный результат.</span></h2><p>Соединяем стратегию, дизайн, разработку и маркетинг — чтобы путь от идеи до цифрового запуска был последовательным.</p><ArrowLink href="/about" light>Познакомиться со студией</ArrowLink></div>
        <span className="manifesto-star" aria-hidden="true">✳</span>
      </section>

      <section className="contact-banner">
        <div><span className="eyebrow">ЕСТЬ ЗАДАЧА?</span><h2>Давайте найдём<br />верное направление.</h2></div>
        <ArrowLink href="/contact" light>Обсудить проект</ArrowLink>
      </section>
    </>
  )
}
