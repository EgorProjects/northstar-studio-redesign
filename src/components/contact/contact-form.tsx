'use client'

import { useState, type FormEvent } from 'react'

type FormState = 'idle' | 'success'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setState('success')
    form.reset()
  }

  if (state === 'success') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="success-mark" aria-hidden="true">✓</span>
        <h3>Спасибо за интерес к Northstar.</h3>
        <p>Демонстрационный сценарий завершён. Данные формы не отправлены и не сохранены.</p>
        <button className="text-button" type="button" onClick={() => setState('idle')}>Отправить ещё одну заявку</button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Ваше имя<input name="name" autoComplete="name" placeholder="Как к вам обращаться?" required minLength={2} /></label>
        <label>Рабочий email<input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label>
      </div>
      <label>Чем можем помочь?
        <select name="service" defaultValue="" required>
          <option value="" disabled>Выберите направление</option>
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>Branding</option>
          <option>Digital Marketing</option>
          <option>Пока не уверен(а)</option>
        </select>
      </label>
      <label>Коротко о проекте<textarea name="message" rows={4} placeholder="Задача, сроки, всё что уже известно…" required minLength={10} /></label>
      <div className="form-bottom">
        <p>Демо-форма: вводимые данные остаются только в текущей странице.</p>
        <button className="button button-lime" type="submit">Показать отправку <span aria-hidden="true">↗</span></button>
      </div>
    </form>
  )
}
