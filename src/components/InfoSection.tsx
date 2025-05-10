
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface InfoCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  features,
  buttonText,
  buttonLink,
  gradientFrom,
  gradientTo,
  icon
}) => (
  <Card className="overflow-hidden">
    <div className={`h-48 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} flex items-center justify-center`}>
      <Icon name={icon} className="h-20 w-20 text-white/80" />
    </div>
    <CardContent className="p-6">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Icon name="Check" className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-primary" asChild>
        <a href={buttonLink}>{buttonText}</a>
      </Button>
    </CardContent>
  </Card>
);

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <InfoCard
            title="Для соискателей"
            description="Создайте профиль, загрузите резюме и получайте персонализированные предложения от ведущих компаний."
            features={[
              "Доступ к тысячам вакансий",
              "Отслеживание статуса заявок",
              "Уведомления о новых вакансиях"
            ]}
            buttonText="Создать профиль"
            buttonLink="/register/applicant"
            gradientFrom="blue-600"
            gradientTo="blue-400"
            icon="UserSearch"
          />

          <InfoCard
            title="Для работодателей"
            description="Публикуйте вакансии, просматривайте профили кандидатов и нанимайте лучших сотрудников для вашей компании."
            features={[
              "Доступ к базе кандидатов",
              "Инструменты для управления вакансиями",
              "Аналитика эффективности"
            ]}
            buttonText="Разместить вакансию"
            buttonLink="/register/employer"
            gradientFrom="purple-600"
            gradientTo="purple-400"
            icon="Building"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
