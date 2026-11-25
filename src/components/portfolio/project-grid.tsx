import type { Project } from '@/types/content'
import { ProjectCard } from './project-card'

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
    </div>
  )
}
