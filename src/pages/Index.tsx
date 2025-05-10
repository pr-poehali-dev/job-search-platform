
import React from 'react';
import SearchBar from '@/components/SearchBar';
import JobCard from '@/components/JobCard';
import CategorySection from '@/components/CategorySection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  // Фейковые данные для демонстрации
  const featuredJobs = [
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

  const categories = [
    { id: '1', name: 'IT и разработка', icon: 'Code', count: 1243 },
    { id: '2', name: 'Маркетинг', icon: 'BarChart', count: 845 },
    { id: '3', name: 'Финансы', icon: 'Wallet', count: 632 },
    { id: '4', name: 'Образование', icon: 'GraduationCap', count: 421 },
    { id: '5', name: 'Продажи', icon: 'Tag', count: 987 },
    { id: '6', name: 'Дизайн', icon: 'Palette', count: 568 },
    { id: '7', name: 'Медицина', icon: 'Stethoscope', count: 345 },
    { id: '8', name: 'Управление', icon: 'Users', count: 721 }
  ];

  const stats = [
    { label: 'Активных вакансий', value: '12,345+', icon: 'Briefcase' },
    { label: 'Компаний', value: '3,890+', icon: 'Building' },
    { label: 'Новых вакансий за сегодня', value: '150+', icon: 'CalendarPlus' },
    { label: 'Успешных трудоустройств', value: '42,900+', icon: 'UserCheck' },
  ];

  const handleSearch = (query: string, location: string, category: string) => {
    console.log('Searching for:', { query, location, category });
    // В реальном приложении здесь будет логика поиска
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Найдите работу мечты</h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in">
              Тысячи вакансий от ведущих компаний ждут вашего отклика
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-6">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="opacity-80">Популярные запросы:</span>
              <Button variant="link" className="text-white p-0 h-auto">React Developer</Button>
              <Button variant="link" className="text-white p-0 h-auto">UI/UX Designer</Button>
              <Button variant="link" className="text-white p-0 h-auto">Product Manager</Button>
              <Button variant="link" className="text-white p-0 h-auto">Data Analyst</Button>
            </div>
          </div>
          
          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Icon name={stat.icon} className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Рекомендуемые вакансии */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Рекомендуемые вакансии</h2>
            <Button variant="outline">Смотреть все</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                jobType={job.jobType}
                postedAt={job.postedAt}
                tags={job.tags}
                featured={job.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Категории вакансий */}
      <CategorySection
        title="Категории вакансий"
        description="Исследуйте возможности в различных профессиональных сферах"
        categories={categories}
      />

      {/* Для соискателей и работодателей */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                <Icon name="UserSearch" className="h-20 w-20 text-white/80" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Для соискателей</h3>
                <p className="text-muted-foreground mb-6">
                  Создайте профиль, загрузите резюме и получайте персонализированные предложения от ведущих компаний.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-500" />
                    <span>Доступ к тысячам вакансий</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-500" />
                    <span>Отслеживание статуса заявок</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-500" />
                    <span>Уведомления о новых вакансиях</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary">Создать профиль</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-purple-400 flex items-center justify-center">
                <Icon name="Building" className="h-20 w-20 text-white/80" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Для работодателей</h3>
                <p className="text-muted-foreground mb-6">
                  Публикуйте вакансии, просматривайте профили кандидатов и нанимайте лучших сотрудников для вашей компании.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-500" />
                    <span>Доступ к базе кандидатов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-500" />
                    <span>Инструменты для управления вакансиями</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-green-500" />
                    <span>Аналитика эффективности</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary">Разместить вакансию</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JobSearch</h3>
              <p className="text-gray-400">
                Платформа для поиска работы и сотрудников, соединяющая талантливых профессионалов с лучшими компаниями.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Для соискателей</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Поиск вакансий</a></li>
                <li><a href="#" className="hover:text-white">Создать резюме</a></li>
                <li><a href="#" className="hover:text-white">Советы по карьере</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Для работодателей</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Разместить вакансию</a></li>
                <li><a href="#" className="hover:text-white">Поиск сотрудников</a></li>
                <li><a href="#" className="hover:text-white">Решения для HR</a></li>
                <li><a href="#" className="hover:text-white">Цены</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Связаться с нами</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <a href="mailto:info@jobsearch.ru" className="hover:text-white">info@jobsearch.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <a href="tel:+78001234567" className="hover:text-white">8 (800) 123-45-67</a>
                </li>
              </ul>
              
              <div className="flex gap-3 mt-4">
                <a href="#" className="hover:text-primary"><Icon name="Facebook" className="h-5 w-5" /></a>
                <a href="#" className="hover:text-primary"><Icon name="Twitter" className="h-5 w-5" /></a>
                <a href="#" className="hover:text-primary"><Icon name="Linkedin" className="h-5 w-5" /></a>
                <a href="#" className="hover:text-primary"><Icon name="Instagram" className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} JobSearch. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
