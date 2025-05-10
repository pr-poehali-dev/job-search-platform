
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [userType, setUserType] = React.useState("applicant");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая демонстрационная логика - в реальном приложении здесь была бы API аутентификация
    console.log("Выполнен вход:", { email, password, rememberMe, userType });
    
    // Перенаправляем на соответствующую страницу
    if (userType === "applicant") {
      navigate("/dashboard");
    } else {
      navigate("/employer/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Вход в личный кабинет</h2>
          <p className="mt-2 text-sm text-gray-600">
            Или{" "}
            <Link to="/register" className="font-medium text-primary hover:text-primary/80">
              зарегистрируйтесь, если у вас еще нет аккаунта
            </Link>
          </p>
        </div>

        <Tabs defaultValue="applicant" value={userType} onValueChange={setUserType} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="applicant">Я соискатель</TabsTrigger>
            <TabsTrigger value="employer">Я работодатель</TabsTrigger>
          </TabsList>
          
          <Card>
            <form onSubmit={handleLogin}>
              <CardHeader>
                <CardTitle>Вход в систему</CardTitle>
                <CardDescription>
                  Введите данные для входа в свой аккаунт
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Пароль</Label>
                    <Link to="/reset-password" className="text-sm text-primary hover:underline">
                      Забыли пароль?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => 
                      setRememberMe(checked === true ? true : false)
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Запомнить меня
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full">
                  Войти
                </Button>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Вход с помощью соцсетей
                  </p>
                  <div className="mt-2 flex justify-center gap-2">
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </form>
          </Card>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
