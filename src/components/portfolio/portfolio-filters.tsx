'use client'

import { useMemo, useState } from 'react'
import type { Project, ProjectCategory } from '@/types/content'
import { ProjectGrid } from './project-grid'

const categories: Array<'Все проекты' | ProjectCategory> = [
  'Все проекты', 'Web Development', 'UI/UX Design', 'Branding', 'Digital Marketing',
]

export function PortfolioFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>('Все проекты')
  const visibleProjects = useMemo(
    () => active === 'Все проекты' ? projects : projects.filter((project) => project.category === active),
    [active, projects],
  )

  return (
    <>
      <div className="filter-list" aria-label="Категории проектов">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? 'filter-button is-active' : 'filter-button'}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >{category}</button>
        ))}
      </div>
      <ProjectGrid projects={visibleProjects} />
      {visibleProjects.length === 0 ? <p className="empty-state">В этой категории пока нет проектов.</p> : null}
    </>
  )
}
