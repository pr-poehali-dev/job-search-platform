
import React from "react";
import { Outlet } from "react-router-dom";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInset
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface DashboardLayoutProps {
  userType: 'applicant' | 'employer';
  userName: string;
  userAvatar?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  userType,
  userName,
  userAvatar
}) => {
  const getMenuItems = () => {
    if (userType === 'applicant') {
      return [
        { icon: "Home", text: "Главная", link: "/dashboard" },
        { icon: "FileText", text: "Моё резюме", link: "/dashboard/resume" },
        { icon: "Briefcase", text: "Мои отклики", link: "/dashboard/applications" },
        { icon: "Bell", text: "Уведомления", link: "/dashboard/notifications" },
        { icon: "Bookmark", text: "Избранные вакансии", link: "/dashboard/favorites" },
        { icon: "MessageSquare", text: "Сообщения", link: "/dashboard/messages" },
        { icon: "Settings", text: "Настройки", link: "/dashboard/settings" }
      ];
    } else {
      return [
        { icon: "Home", text: "Главная", link: "/employer/dashboard" },
        { icon: "Briefcase", text: "Мои вакансии", link: "/employer/jobs" },
        { icon: "Users", text: "Кандидаты", link: "/employer/candidates" },
        { icon: "Building", text: "Информация о компании", link: "/employer/company" },
        { icon: "BarChart2", text: "Статистика", link: "/employer/statistics" },
        { icon: "MessageSquare", text: "Сообщения", link: "/employer/messages" },
        { icon: "Settings", text: "Настройки", link: "/employer/settings" }
      ];
    }
  };

  const items = getMenuItems();
  const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar>
          <SidebarHeader className="border-b border-border p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={userAvatar} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium">{userName}</span>
                <span className="text-xs text-muted-foreground">
                  {userType === 'applicant' ? 'Соискатель' : 'Работодатель'}
                </span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild tooltip={item.text}>
                    <a href={item.link}>
                      <Icon name={item.icon} />
                      <span>{item.text}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <Button variant="outline" className="w-full" asChild>
              <a href="/">
                <Icon name="LogOut" className="mr-2" size={18} />
                Выйти
              </a>
            </Button>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="overflow-auto">
          <main className="container py-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
