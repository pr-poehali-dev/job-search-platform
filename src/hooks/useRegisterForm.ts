
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ApplicantFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface EmployerFormData {
  companyName: string;
  industry: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  password: string;
  confirmPassword: string;
  companyDescription: string;
}

interface UseRegisterFormProps {
  userType: "applicant" | "employer";
}

export const useRegisterForm = ({ userType }: UseRegisterFormProps) => {
  const navigate = useNavigate();
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Форма соискателя
  const [applicantData, setApplicantData] = useState<ApplicantFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Форма работодателя
  const [employerData, setEmployerData] = useState<EmployerFormData>({
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

  const validatePasswords = (password: string, confirmPassword: string): boolean => {
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return false;
    }
    return true;
  };
  
  const validateTerms = (): boolean => {
    if (!agreedToTerms) {
      alert("Необходимо согласиться с условиями использования");
      return false;
    }
    return true;
  };

  const handleApplicantRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePasswords(applicantData.password, applicantData.confirmPassword) || 
        !validateTerms()) {
      return;
    }
    
    // Простая демонстрационная логика - в реальном приложении здесь была бы API регистрация
    console.log("Регистрация соискателя:", applicantData);
    navigate("/dashboard");
  };

  const handleEmployerRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePasswords(employerData.password, employerData.confirmPassword) || 
        !validateTerms()) {
      return;
    }
    
    // Простая демонстрационная логика - в реальном приложении здесь была бы API регистрация
    console.log("Регистрация работодателя:", employerData);
    navigate("/employer/dashboard");
  };
  
  const handleSocialRegister = (provider: string) => {
    console.log(`Регистрация через ${provider} для ${userType}`);
    
    // В реальном приложении здесь была бы логика OAuth авторизации
    if (userType === "applicant") {
      navigate("/dashboard");
    } else {
      navigate("/employer/dashboard");
    }
  };

  return {
    applicantData,
    employerData,
    agreedToTerms,
    setAgreedToTerms,
    handleApplicantInputChange,
    handleEmployerInputChange,
    handleApplicantRegister,
    handleEmployerRegister,
    handleSocialRegister
  };
};
