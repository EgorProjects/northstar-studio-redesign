import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found-code">404</span>
      <h1>Кажется, вы<br /><span>свернули не туда.</span></h1>
      <p>Такой страницы здесь нет — но мы поможем найти верное направление.</p>
      <Link className="button button-lime" href="/">Вернуться на главную <span aria-hidden="true">↗</span></Link>
    </section>
  )
}
