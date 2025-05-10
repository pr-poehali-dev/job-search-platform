
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CategorySectionProps {
  title: string;
  description?: string;
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  categories
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group hover-scale hover:border-primary cursor-pointer transition-all"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon 
                    name={category.icon} 
                    className="h-8 w-8 text-primary" 
                  />
                </div>
                <h3 className="font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} {category.count % 10 === 1 && category.count % 100 !== 11 ? 'вакансия' : 
                    (category.count % 10 >= 2 && category.count % 10 <= 4 && (category.count % 100 < 12 || category.count % 100 > 14) ? 'вакансии' : 'вакансий')}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
