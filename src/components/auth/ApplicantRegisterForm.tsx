
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

interface ApplicantFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ApplicantRegisterFormProps {
  formData: ApplicantFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  agreedToTerms: boolean;
  onTermsChange: (checked: boolean) => void;
}

const ApplicantRegisterForm: React.FC<ApplicantRegisterFormProps> = ({
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
                value={formData.firstName}
                onChange={onChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Фамилия</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Иванов"
                value={formData.lastName}
                onChange={onChange}
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
              value={formData.email}
              onChange={onChange}
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
              value={formData.password}
              onChange={onChange}
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
              value={formData.confirmPassword}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="applicantTerms" 
              checked={agreedToTerms}
              onCheckedChange={(checked) => 
                onTermsChange(checked === true)
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
  );
};

export default ApplicantRegisterForm;
