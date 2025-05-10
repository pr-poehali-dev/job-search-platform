
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const ApplicantDashboard: React.FC = () => {
  // В реальном приложении эти данные будут получены через API
  const profileCompleteness = 70;
  const recentApplications = [
    { id: 1, position: "Frontend Developer", company: "TechCorp", date: "2 дня назад", status: "Просмотрено" },
    { id: 2, position: "UI/UX Designer", company: "CreativeStudio", date: "5 дней назад", status: "На рассмотрении" },
    { id: 3, position: "Product Manager", company: "InnovateNow", date: "1 неделю назад", status: "Приглашение на интервью" },
  ];
  
  const savedJobs = [
    { id: 101, position: "Senior React Developer", company: "WebSolutions", location: "Москва", savedAt: "3 дня назад" },
    { id: 102, position: "Marketing Specialist", company: "BrandAgency", location: "Удаленно", savedAt: "1 день назад" },
  ];

  const recommendations = [
    { id: 201, position: "Frontend Developer", company: "TechSoft", location: "Санкт-Петербург", salary: "от 150 000 ₽" },
    { id: 202, position: "Web Designer", company: "ArtPixel", location: "Москва", salary: "от 120 000 ₽" },
    { id: 203, position: "UI Developer", company: "InteractiveStudio", location: "Удаленно", salary: "от 140 000 ₽" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Личный кабинет соискателя</h1>
      
      {/* Приветствие и прогресс заполнения профиля */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Добро пожаловать, Александр!</CardTitle>
          <CardDescription>
            Заполненный профиль увеличивает ваши шансы на успешное трудоустройство
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Заполнение профиля</span>
              <span className="text-sm">{profileCompleteness}%</span>
            </div>
            <Progress value={profileCompleteness} className="h-2" />
            
            <div className="pt-3 flex gap-3">
              <Button>Заполнить профиль</Button>
              <Button variant="outline">Предпросмотр резюме</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Рекомендуемые вакансии */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Рекомендуемые вакансии</CardTitle>
            <Button variant="link" className="text-primary">Смотреть все</Button>
          </div>
          <CardDescription>На основе вашего опыта и предпочтений</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((job) => (
              <div key={job.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{job.position}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                    <div className="flex items-center text-sm gap-6 mt-2">
                      <span className="flex items-center gap-1">
                        <Icon name="MapPin" size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Wallet" size={14} />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button size="sm">Откликнуться</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Последние отклики */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Отклики</CardTitle>
              <Button variant="link" className="text-primary">Все отклики</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentApplications.map((app) => (
                <div key={app.id} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{app.position}</h4>
                      <p className="text-sm text-muted-foreground">{app.company}</p>
                      <p className="text-xs mt-1">{app.date}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      app.status === "Приглашение на интервью" 
                        ? "bg-green-100 text-green-800" 
                        : app.status === "Просмотрено" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Сохраненные вакансии */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Избранные вакансии</CardTitle>
              <Button variant="link" className="text-primary">Все избранные</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {savedJobs.map((job) => (
                <div key={job.id} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{job.position}</h4>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                      <div className="flex items-center text-xs gap-2 mt-1">
                        <span className="flex items-center gap-1">
                          <Icon name="MapPin" size={12} />
                          {job.location}
                        </span>
                        <span>·</span>
                        <span>Сохранено {job.savedAt}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Откликнуться</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicantDashboard;
