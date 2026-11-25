import type { Service } from '@/types/content'

export const services: Service[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    description: 'Быстрые, доступные и удобные цифровые продукты — от выразительных сайтов до сложных интерфейсов.',
    tags: ['Next.js', 'Разработка', 'Оптимизация'],
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    description: 'Понятные пользовательские сценарии и интерфейсы, в которых визуальная система работает на задачу.',
    tags: ['Исследования', 'Прототипы', 'Дизайн-системы'],
  },
  {
    id: 'branding',
    number: '03',
    title: 'Branding',
    description: 'Цельный образ бренда: позиционирование, визуальный язык и инструменты для уверенного роста.',
    tags: ['Стратегия', 'Айдентика', 'Арт-дирекшн'],
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    description: 'Цифровые кампании, которые соединяют сильную идею с измеримым действием аудитории.',
    tags: ['Стратегия', 'Контент', 'Перформанс'],
  },
]
