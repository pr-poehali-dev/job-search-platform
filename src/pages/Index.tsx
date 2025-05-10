import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import CategorySection from "@/components/CategorySection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { featuredJobs, categories } from "@/components/data/mockData";

const Index = () => {
  const handleSearch = (query: string, location: string, category: string) => {
    console.log("Searching for:", { query, location, category });
    // В реальном приложении здесь будет логика поиска
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Добавляем хедер */}
      <Header />

      {/* Hero секция с поиском */}
      <div className="relative">
        <HeroSection onSearch={handleSearch} />
        <div className="container mx-auto px-4 relative -mt-6">
          <StatsSection />
        </div>
      </div>

      {/* Рекомендуемые вакансии */}
      <FeaturedJobs jobs={featuredJobs} />

      {/* Категории вакансий */}
      <CategorySection
        title="Категории вакансий"
        description="Исследуйте возможности в различных профессиональных сферах"
        categories={categories}
      />

      {/* Для соискателей и работодателей */}
      <InfoSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
