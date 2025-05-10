import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import ApplicantDashboard from "./pages/dashboard/ApplicantDashboard";
import EmployerDashboard from "./pages/dashboard/EmployerDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Страницы аутентификации */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<ResetPassword />} />

          {/* Личный кабинет соискателя */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout
                userType="applicant"
                userName="Александр Иванов"
              />
            }
          >
            <Route index element={<ApplicantDashboard />} />
            <Route path="resume" element={<h1>Страница резюме</h1>} />
            <Route path="applications" element={<h1>Мои отклики</h1>} />
            <Route path="notifications" element={<h1>Уведомления</h1>} />
            <Route path="favorites" element={<h1>Избранные вакансии</h1>} />
            <Route path="messages" element={<h1>Сообщения</h1>} />
            <Route path="settings" element={<h1>Настройки</h1>} />
          </Route>

          {/* Личный кабинет работодателя */}
          <Route
            path="/employer"
            element={
              <DashboardLayout
                userType="employer"
                userName="ООО Технологии Будущего"
              />
            }
          >
            <Route path="dashboard" element={<EmployerDashboard />} />
            <Route path="jobs" element={<h1>Мои вакансии</h1>} />
            <Route path="candidates" element={<h1>Кандидаты</h1>} />
            <Route path="company" element={<h1>Информация о компании</h1>} />
            <Route path="statistics" element={<h1>Статистика</h1>} />
            <Route path="messages" element={<h1>Сообщения</h1>} />
            <Route path="settings" element={<h1>Настройки</h1>} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
