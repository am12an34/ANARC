import React from "react";
import logoImage from "/public/assets/logo.png"; // Update the path based on your project structure

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoImage} alt="ANARC Logo" className="h-10 w-10 object-contain" />
      <span className="font-display font-bold text-xl tracking-tight">
        <span className="text-white">AN</span>
        <span className="text-anarc-blue">ARC</span>
      </span>
    </div>
  );
};

export default Logo;
