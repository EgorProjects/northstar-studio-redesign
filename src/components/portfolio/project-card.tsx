import type { Project } from '@/types/content'
import { ProjectArt } from './project-art'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <ProjectArt project={project} />
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="project-meta">
        <div><h3>{project.name}</h3><p>{project.description}</p></div>
        <div className="project-tags"><span>{project.category}</span><span>{project.year}</span></div>
      </div>
      <span className="concept-label">Концепт-проект</span>
    </article>
  )
}
