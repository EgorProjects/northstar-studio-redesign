export type Service = {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
}

export type ProjectCategory = 'Web Development' | 'UI/UX Design' | 'Branding' | 'Digital Marketing'

export type Project = {
  id: string
  name: string
  category: ProjectCategory
  description: string
  year: string
  preview: 'orbital' | 'morrow' | 'form' | 'flora'
  featured?: boolean
}

export type TeamMember = {
  name: string
  role: string
  initials: string
  tone: string
}
