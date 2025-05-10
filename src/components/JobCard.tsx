
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Briefcase } from 'lucide-react';
import Icon from '@/components/ui/icon';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary?: string;
  jobType: string;
  postedAt: string;
  tags?: string[];
  logoUrl?: string;
  featured?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  salary,
  jobType,
  postedAt,
  tags = [],
  logoUrl,
  featured = false
}) => {
  return (
    <Card className={`w-full hover:shadow-md transition-shadow ${featured ? 'border-l-4 border-l-primary' : ''}`}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center overflow-hidden">
          {logoUrl ? (
            <img src={logoUrl} alt={company} className="w-full h-full object-cover" />
          ) : (
            <Briefcase className="text-muted-foreground h-6 w-6" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            {featured && <Badge variant="default" className="ml-2">Избранное</Badge>}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{company}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{location}</span>
          </div>
          
          {salary && (
            <div className="flex items-center gap-2">
              <Icon name="Coins" className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{salary}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <Icon name="CalendarDays" className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{postedAt}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="secondary">{jobType}</Badge>
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button size="sm" variant="outline">Подробнее</Button>
        <Button size="sm" className="bg-primary">Откликнуться</Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
