
import React from 'react';
import Icon from '@/components/ui/icon';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
    <Icon name={icon} className="h-8 w-8 mx-auto mb-2 text-purple-300" />
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm opacity-80">{label}</div>
  </div>
);

interface StatsSectionProps {
  stats?: StatItemProps[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ 
  stats = [
    { label: 'Активных вакансий', value: '12,345+', icon: 'Briefcase' },
    { label: 'Компаний', value: '3,890+', icon: 'Building' },
    { label: 'Новых вакансий за сегодня', value: '150+', icon: 'CalendarPlus' },
    { label: 'Успешных трудоустройств', value: '42,900+', icon: 'UserCheck' },
  ]
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {stats.map((stat, index) => (
        <StatItem 
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default StatsSection;
