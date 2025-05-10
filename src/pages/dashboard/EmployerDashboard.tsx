
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const EmployerDashboard: React.FC = () => {
  // В реальном приложении эти данные будут получены через API
  const activeJobs = [
    { id: 1, position: "Frontend Developer", applications: 15, views: 342, daysLeft: 12 },
    { id: 2, position: "Product Manager", applications: 8, views: 215, daysLeft: 20 },
    { id: 3, position: "UX Designer", applications: 23, views: 467, daysLeft: 5 },
  ];
  
  const recentCandidates = [
    { id: 101, name: "Дмитрий Иванов", position: "Frontend Developer", appliedFor: "Senior Frontend Developer", matchPercent: 92, status: "Новый" },
    { id: 102, name: "Елена Смирнова", position: "UI/UX Designer", appliedFor: "UX Designer", matchPercent: 87, status: "Интервью" },
    { id: 103, name: "Алексей Петров", position: "Product Manager", appliedFor: "Product Manager", matchPercent: 75, status: "Рассмотрение" },
  ];

  const stats = [
    { label: "Активных вакансий", value: 5, icon: "Briefcase" },
    { label: "Всего кандидатов", value: 47, icon: "Users" },
    { label: "Просмотров вакансий", value: 1254, icon: "Eye" },
    { label: "Новых сообщений", value: 8, icon: "MessageSquare" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Панель управления работодателя</h1>
      
      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name={stat.icon} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Активные вакансии */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Активные вакансии</CardTitle>
            <Button>Опубликовать вакансию</Button>
          </div>
          <CardDescription>Ваши текущие опубликованные вакансии</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeJobs.map((job) => (
              <div key={job.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{job.position}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {job.applications} откликов
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Eye" size={14} />
                        {job.views} просмотров
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {job.daysLeft} дней до окончания
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Просмотр</Button>
                    <Button size="sm" variant="outline">Редактировать</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Последние кандидаты */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Недавние кандидаты</CardTitle>
            <Button variant="link" className="text-primary">Все кандидаты</Button>
          </div>
          <CardDescription>Кандидаты, откликнувшиеся на ваши вакансии</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCandidates.map((candidate) => (
              <div key={candidate.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{candidate.name}</h3>
                      <Badge 
                        variant={
                          candidate.status === "Новый" ? "default" : 
                          candidate.status === "Интервью" ? "destructive" : 
                          "secondary"
                        }
                      >
                        {candidate.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{candidate.position}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
                      <span>Отклик на: <span className="font-medium">{candidate.appliedFor}</span></span>
                      <span className="flex items-center gap-1">
                        <Icon name="BarChart" size={14} />
                        Совпадение: <span className="font-medium">{candidate.matchPercent}%</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Резюме</Button>
                    <Button size="sm">Пригласить</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Быстрые действия */}
      <Card>
        <CardHeader>
          <CardTitle>Быстрые действия</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-auto py-4 flex flex-col gap-2">
              <Icon name="FileText" className="h-6 w-6" />
              <span>Создать вакансию</span>
            </Button>
            <Button className="h-auto py-4 flex flex-col gap-2" variant="outline">
              <Icon name="Search" className="h-6 w-6" />
              <span>Поиск кандидатов</span>
            </Button>
            <Button className="h-auto py-4 flex flex-col gap-2" variant="outline">
              <Icon name="BarChart2" className="h-6 w-6" />
              <span>Аналитика</span>
            </Button>
            <Button className="h-auto py-4 flex flex-col gap-2" variant="outline">
              <Icon name="Settings" className="h-6 w-6" />
              <span>Настройки</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerDashboard;
