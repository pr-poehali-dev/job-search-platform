
import React from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl text-primary">JobSearch</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Поиск работы</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/jobs"
                      >
                        <div className="text-sm font-medium leading-none">Все вакансии</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Просмотр всех доступных вакансий
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/categories"
                      >
                        <div className="text-sm font-medium leading-none">Категории вакансий</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Поиск по профессиональным категориям
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/dashboard"
                      >
                        <div className="text-sm font-medium leading-none">Личный кабинет соискателя</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Управление резюме и откликами
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Работодателям</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/post-job"
                      >
                        <div className="text-sm font-medium leading-none">Разместить вакансию</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Создание и публикация новой вакансии
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/employer/dashboard"
                      >
                        <div className="text-sm font-medium leading-none">Личный кабинет работодателя</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Управление вакансиями и кандидатами
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        to="/employer/pricing"
                      >
                        <div className="text-sm font-medium leading-none">Тарифы и услуги</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Планы и цены для работодателей
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className={cn(navigationMenuTriggerStyle())}>
                  О нас
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/login">Войти</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Регистрация</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
