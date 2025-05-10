
import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SocialButtons from "@/components/auth/SocialButtons";
import ApplicantRegisterForm from "@/components/auth/ApplicantRegisterForm";
import EmployerRegisterForm from "@/components/auth/EmployerRegisterForm";
import { useRegisterForm } from "@/hooks/useRegisterForm";

const Register: React.FC = () => {
  const [userType, setUserType] = React.useState<"applicant" | "employer">("applicant");
  
  const {
    applicantData,
    employerData,
    agreedToTerms,
    setAgreedToTerms,
    handleApplicantInputChange,
    handleEmployerInputChange,
    handleApplicantRegister,
    handleEmployerRegister,
    handleSocialRegister
  } = useRegisterForm({ userType });

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

        <Tabs 
          defaultValue="applicant" 
          value={userType} 
          onValueChange={(value) => setUserType(value as "applicant" | "employer")} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="applicant">Я соискатель</TabsTrigger>
            <TabsTrigger value="employer">Я работодатель</TabsTrigger>
          </TabsList>
          
          <TabsContent value="applicant">
            <ApplicantRegisterForm 
              formData={applicantData}
              onChange={handleApplicantInputChange}
              onSubmit={handleApplicantRegister}
              agreedToTerms={agreedToTerms}
              onTermsChange={setAgreedToTerms}
            />
          </TabsContent>
          
          <TabsContent value="employer">
            <EmployerRegisterForm 
              formData={employerData}
              onChange={handleEmployerInputChange}
              onSubmit={handleEmployerRegister}
              agreedToTerms={agreedToTerms}
              onTermsChange={setAgreedToTerms}
            />
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
        
        <SocialButtons 
          onSocialLogin={(provider) => handleSocialRegister(provider)}
        />
      </div>
    </div>
  );
};

export default Register;
