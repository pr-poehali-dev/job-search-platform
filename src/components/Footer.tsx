
import React from 'react';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface FooterLinkGroupProps {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
  <div>
    <h4 className="font-medium mb-3">{title}</h4>
    <ul className="space-y-2 text-gray-400">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="hover:text-white">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

interface FooterProps {
  companyName?: string;
  description?: string;
  copyrightText?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "JobSearch",
  description = "Платформа для поиска работы и сотрудников, соединяющая талантливых профессионалов с лучшими компаниями.",
  copyrightText = `© ${new Date().getFullYear()} JobSearch. Все права защищены.`
}) => {
  const applicantLinks = [
    { text: "Поиск вакансий", url: "/jobs" },
    { text: "Создать резюме", url: "/resume/create" },
    { text: "Советы по карьере", url: "/career-advice" },
    { text: "FAQ", url: "/faq" }
  ];

  const employerLinks = [
    { text: "Разместить вакансию", url: "/post-job" },
    { text: "Поиск сотрудников", url: "/candidates" },
    { text: "Решения для HR", url: "/hr-solutions" },
    { text: "Цены", url: "/pricing" }
  ];

  const socialLinks = [
    { icon: "Facebook", url: "https://facebook.com" },
    { icon: "Twitter", url: "https://twitter.com" },
    { icon: "Linkedin", url: "https://linkedin.com" },
    { icon: "Instagram", url: "https://instagram.com" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          
          <FooterLinkGroup title="Для соискателей" links={applicantLinks} />
          <FooterLinkGroup title="Для работодателей" links={employerLinks} />
          
          <div>
            <h4 className="font-medium mb-3">Связаться с нами</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" />
                <a href="mailto:info@jobsearch.ru" className="hover:text-white">
                  info@jobsearch.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" />
                <a href="tel:+78001234567" className="hover:text-white">
                  8 (800) 123-45-67
                </a>
              </li>
            </ul>
            
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="hover:text-primary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon name={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-center text-gray-500 text-sm">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
