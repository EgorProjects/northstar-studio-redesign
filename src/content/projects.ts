import type { Project } from '@/types/content'

// Учебные концепты для демонстрации интерфейса, не клиентские кейсы.
export const projects: Project[] = [
  {
    id: 'orbital',
    name: 'Orbital',
    category: 'UI/UX Design',
    description: 'Цифровой банкинг для нового поколения предпринимателей.',
    year: '2025',
    preview: 'orbital',
    featured: true,
  },
  {
    id: 'morrow',
    name: 'Morrow Goods',
    category: 'Branding',
    description: 'Новая визуальная система для предметов на каждый день.',
    year: '2025',
    preview: 'morrow',
    featured: true,
  },
  {
    id: 'form-and-field',
    name: 'Form & Field',
    category: 'Web Development',
    description: 'Редакционный сайт архитектурного бюро с характером.',
    year: '2024',
    preview: 'form',
    featured: true,
  },
  {
    id: 'flora-lab',
    name: 'Flora Lab',
    category: 'Digital Marketing',
    description: 'Кампания запуска бренда с фокусом на осознанный уход.',
    year: '2024',
    preview: 'flora',
  },
]
