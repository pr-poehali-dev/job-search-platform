
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

type SocialProvider = "Github" | "Facebook" | "Twitter";

interface SocialButtonProps {
  icon: SocialProvider;
  href?: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ 
  icon, 
  href = "#",
  onClick
}) => (
  <Button 
    variant="outline" 
    size="icon" 
    asChild={!!href}
    onClick={onClick}
  >
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon name={icon} className="h-5 w-5" />
      </a>
    ) : (
      <Icon name={icon} className="h-5 w-5" />
    )}
  </Button>
);

interface SocialButtonsProps {
  onSocialLogin?: (provider: SocialProvider) => void;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ onSocialLogin }) => {
  const handleSocialLogin = (provider: SocialProvider) => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    }
  };

  const providers: SocialProvider[] = ["Github", "Facebook", "Twitter"];

  return (
    <div className="mt-6 flex justify-center gap-3">
      {providers.map((provider) => (
        <SocialButton
          key={provider}
          icon={provider}
          onClick={() => handleSocialLogin(provider)}
        />
      ))}
    </div>
  );
};

export default SocialButtons;
