import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
