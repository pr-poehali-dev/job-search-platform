
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState("applicant");
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);

  // Форма соискателя
  const [applicantData, setApplicantData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Форма работодателя
  const [employerData, setEmployerData] = React.useState({
    companyName: "",
    industry: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    password: "",
    confirmPassword: "",
    companyDescription: ""
  });

  const handleApplicantInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApplicantData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmployerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmployerData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplicantRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantData.password !== applicantData.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    
    if (!agreedToTerms) {
      alert("Необходимо согласиться с условиями использования");
      return;
    }
    
    // Простая демонстрационная логика - в реальном приложении здесь была бы API регистрация
    console.log("Регистрация соискателя:", applicantData);
    navigate("/dashboard");
  };

  const handleEmployerRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (employerData.password !== employerData.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    
    if (!agreedToTerms) {
      alert("Необходимо согласиться с условиями использования");
      return;
    }
    
    // Простая демонстрационная логика - в реальном приложении здесь была бы API регистрация
    console.log("Регистрация работодателя:", employerData);
    navigate("/employer/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Регистрация</h2>
          <p className="mt-2 text-sm text-gray-600">
            Уже есть аккаунт?{" "}
            <Link to="/login" className="font-medium text-primary hover:text-primary/80">
              Войти
            </Link>
          </p>
        </div>

        <Tabs defaultValue="applicant" value={userType} onValueChange={setUserType} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="applicant">Я соискатель</TabsTrigger>
            <TabsTrigger value="employer">Я работодатель</TabsTrigger>
          </TabsList>
          
          <TabsContent value="applicant">
            <Card>
              <form onSubmit={handleApplicantRegister}>
                <CardHeader>
                  <CardTitle>Регистрация соискателя</CardTitle>
                  <CardDescription>
                    Создайте аккаунт для поиска работы
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Иван"
                        value={applicantData.firstName}
                        onChange={handleApplicantInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Иванов"
                        value={applicantData.lastName}
                        onChange={handleApplicantInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="applicantEmail">Email</Label>
                    <Input
                      id="applicantEmail"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      value={applicantData.email}
                      onChange={handleApplicantInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="applicantPassword">Пароль</Label>
                    <Input
                      id="applicantPassword"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={applicantData.password}
                      onChange={handleApplicantInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="applicantConfirmPassword">Подтверждение пароля</Label>
                    <Input
                      id="applicantConfirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={applicantData.confirmPassword}
                      onChange={handleApplicantInputChange}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="applicantTerms" 
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => 
                        setAgreedToTerms(checked === true ? true : false)
                      }
                    />
                    <label
                      htmlFor="applicantTerms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Я согласен с <Link to="/terms" className="text-primary hover:underline">условиями использования</Link> и <Link to="/privacy" className="text-primary hover:underline">политикой конфиденциальности</Link>
                    </label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Зарегистрироваться
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="employer">
            <Card>
              <form onSubmit={handleEmployerRegister}>
                <CardHeader>
                  <CardTitle>Регистрация работодателя</CardTitle>
                  <CardDescription>
                    Создайте аккаунт для поиска сотрудников
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Название компании</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="ООО 'Компания'"
                      value={employerData.companyName}
                      onChange={handleEmployerInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry">Отрасль</Label>
                    <Input
                      id="industry"
                      name="industry"
                      placeholder="IT, Финансы, Образование и т.д."
                      value={employerData.industry}
                      onChange={handleEmployerInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Контактное лицо</Label>
                      <Input
                        id="contactPerson"
                        name="contactPerson"
                        placeholder="Иван Иванов"
                        value={employerData.contactPerson}
                        onChange={handleEmployerInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Телефон</Label>
                      <Input
                        id="contactPhone"
                        name="contactPhone"
                        placeholder="+7 (___) ___-__-__"
                        value={employerData.contactPhone}
                        onChange={handleEmployerInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      placeholder="contact@company.com"
                      value={employerData.contactEmail}
                      onChange={handleEmployerInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyDescription">О компании</Label>
                    <Textarea
                      id="companyDescription"
                      name="companyDescription"
                      placeholder="Краткое описание компании, сфера деятельности, особенности..."
                      value={employerData.companyDescription}
                      onChange={handleEmployerInputChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="employerPassword">Пароль</Label>
                      <Input
                        id="employerPassword"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={employerData.password}
                        onChange={handleEmployerInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employerConfirmPassword">Подтверждение</Label>
                      <Input
                        id="employerConfirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={employerData.confirmPassword}
                        onChange={handleEmployerInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="employerTerms" 
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => 
                        setAgreedToTerms(checked === true ? true : false)
                      }
                    />
                    <label
                      htmlFor="employerTerms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Я согласен с <Link to="/terms" className="text-primary hover:underline">условиями использования</Link> и <Link to="/privacy" className="text-primary hover:underline">политикой конфиденциальности</Link>
                    </label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Зарегистрировать компанию
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">Или зарегистрируйтесь через</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="outline" size="icon">
            <Icon name="Github" className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Icon name="Facebook" className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Icon name="Twitter" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
