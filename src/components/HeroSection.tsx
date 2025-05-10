
import React from 'react';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  popularSearches?: string[];
  onSearch?: (query: string, location: string, category: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  popularSearches = ["React Developer", "UI/UX Designer", "Product Manager", "Data Analyst"],
  onSearch 
}) => {
  return (
    <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Найдите работу мечты</h1>
          <p className="text-xl opacity-90 mb-8 animate-fade-in">
            Тысячи вакансий от ведущих компаний ждут вашего отклика
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-6">
            <SearchBar onSearch={onSearch} />
          </div>
          
          {popularSearches && popularSearches.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="opacity-80">Популярные запросы:</span>
              {popularSearches.map((search, index) => (
                <Button key={index} variant="link" className="text-white p-0 h-auto">
                  {search}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
