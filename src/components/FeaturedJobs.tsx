
import React from 'react';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';

export interface JobData {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string;
  jobType: string;
  postedAt: string;
  tags?: string[];
  featured?: boolean;
  logoUrl?: string;
}

interface FeaturedJobsProps {
  jobs: JobData[];
  title?: string;
  viewAllLink?: string;
}

const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ 
  jobs,
  title = "Рекомендуемые вакансии",
  viewAllLink = "#"
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button variant="outline" asChild>
            <a href={viewAllLink}>Смотреть все</a>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
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
              logoUrl={job.logoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
