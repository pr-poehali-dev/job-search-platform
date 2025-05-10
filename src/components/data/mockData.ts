
import { JobData } from '@/components/FeaturedJobs';

// Фейковые данные для демонстрации
export const featuredJobs: JobData[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Москва',
    salary: '150 000 - 200 000 ₽',
    jobType: 'Полная занятость',
    postedAt: '2 дня назад',
    tags: ['React', 'TypeScript', 'Redux'],
    featured: true
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'DataInsight',
    location: 'Санкт-Петербург (Удаленно)',
    salary: '180 000 - 230 000 ₽',
    jobType: 'Полная занятость',
    postedAt: '1 день назад',
    tags: ['Python', 'ML', 'TensorFlow'],
    featured: true
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'InnovateNow',
    location: 'Новосибирск',
    salary: '140 000 - 170 000 ₽',
    jobType: 'Полная занятость',
    postedAt: '3 дня назад',
    tags: ['Product Development', 'Agile', 'Scrum'],
    featured: false
  }
];

export const categories = [
  { id: '1', name: 'IT и разработка', icon: 'Code', count: 1243 },
  { id: '2', name: 'Маркетинг', icon: 'BarChart', count: 845 },
  { id: '3', name: 'Финансы', icon: 'Wallet', count: 632 },
  { id: '4', name: 'Образование', icon: 'GraduationCap', count: 421 },
  { id: '5', name: 'Продажи', icon: 'Tag', count: 987 },
  { id: '6', name: 'Дизайн', icon: 'Palette', count: 568 },
  { id: '7', name: 'Медицина', icon: 'Stethoscope', count: 345 },
  { id: '8', name: 'Управление', icon: 'Users', count: 721 }
];
