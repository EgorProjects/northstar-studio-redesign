import Link from 'next/link'

type ArrowLinkProps = { href: string; children: React.ReactNode; light?: boolean }

export function ArrowLink({ href, children, light = false }: ArrowLinkProps) {
  return (
    <Link className={`arrow-link${light ? ' arrow-link-light' : ''}`} href={href}>
      <span>{children}</span><span className="arrow-icon" aria-hidden="true">↗</span>
    </Link>
  )
}
