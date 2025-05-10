
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

interface SearchBarProps {
  onSearch?: (query: string, location: string, category: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query, location, category);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 animate-fade-in">
      <div className="grid md:grid-cols-[1fr_1fr_auto_auto] gap-4">
        <div className="relative">
          <Input
            placeholder="Поиск вакансий..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12"
          />
          <Icon 
            name="Search" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" 
          />
        </div>

        <div className="relative">
          <Input
            placeholder="Местоположение"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12"
          />
          <Icon 
            name="MapPin" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" 
          />
        </div>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="it">Информационные технологии</SelectItem>
            <SelectItem value="finance">Финансы</SelectItem>
            <SelectItem value="sales">Продажи</SelectItem>
            <SelectItem value="marketing">Маркетинг</SelectItem>
            <SelectItem value="education">Образование</SelectItem>
            <SelectItem value="healthcare">Здравоохранение</SelectItem>
          </SelectContent>
        </Select>

        <Button 
          onClick={handleSearch} 
          className="h-12 bg-primary hover:bg-primary/90"
        >
          <Icon name="Search" className="mr-2 h-4 w-4" />
          Найти
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
