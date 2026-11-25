import type { Metadata } from 'next'
import { PortfolioFilters } from '@/components/portfolio/portfolio-filters'
import { SectionHeading } from '@/components/ui/section-heading'
import { projects } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Портфолио',
  description: 'Концептуальные проекты Northstar Studio в дизайне, разработке, брендинге и маркетинге.',
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioPage() {
  return (
    <section className="section portfolio-page">
      <SectionHeading eyebrow="ПОРТФОЛИО / 2024—2025" title="Работы с идеей внутри." description="Портфолио-заглушка: карточки ниже обозначены как концепт-проекты и не являются клиентскими кейсами." />
      <PortfolioFilters projects={projects} />
    </section>
  )
}
