
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

interface EmployerFormData {
  companyName: string;
  industry: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  password: string;
  confirmPassword: string;
  companyDescription: string;
}

interface EmployerRegisterFormProps {
  formData: EmployerFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  agreedToTerms: boolean;
  onTermsChange: (checked: boolean) => void;
}

const EmployerRegisterForm: React.FC<EmployerRegisterFormProps> = ({
  formData,
  onChange,
  onSubmit,
  agreedToTerms,
  onTermsChange
}) => {
  return (
    <Card>
      <form onSubmit={onSubmit}>
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
              value={formData.companyName}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="industry">Отрасль</Label>
            <Input
              id="industry"
              name="industry"
              placeholder="IT, Финансы, Образование и т.д."
              value={formData.industry}
              onChange={onChange}
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
                value={formData.contactPerson}
                onChange={onChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Телефон</Label>
              <Input
                id="contactPhone"
                name="contactPhone"
                placeholder="+7 (___) ___-__-__"
                value={formData.contactPhone}
                onChange={onChange}
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
              value={formData.contactEmail}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companyDescription">О компании</Label>
            <Textarea
              id="companyDescription"
              name="companyDescription"
              placeholder="Краткое описание компании, сфера деятельности, особенности..."
              value={formData.companyDescription}
              onChange={onChange}
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
                value={formData.password}
                onChange={onChange}
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
                value={formData.confirmPassword}
                onChange={onChange}
                required
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="employerTerms" 
              checked={agreedToTerms}
              onCheckedChange={(checked) => 
                onTermsChange(checked === true)
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
  );
};

export default EmployerRegisterForm;
