import { IconType } from "react-icons";
import React from "react";

interface ButtonProps {
  icon?: IconType;
  text?: string;
  border?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: string;
  onClick?: () => void;
}

function Button({
  icon: Icon,
  text,
  border = false,
  size = "md",
  href,
  download,
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    sm: "p-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "p-4 text-lg",
  };

  const baseClasses = `
    ${border ? "border border-gray-500/50" : ""}
    ${sizeClasses[size]}
    text-white font-bold rounded-xl flex items-center gap-2
    hover:bg-purple-500/10 transition-all duration-300
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {text}
        {Icon && <Icon size={size === "lg" ? 24 : size === "md" ? 20 : 16} />}
      </a>
    );
  }

  if (download) {
    return (
      <a href={download} download className={baseClasses}>
        {text}
        {Icon && <Icon size={size === "lg" ? 24 : size === "md" ? 20 : 16} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {text}
      {Icon && <Icon size={size === "lg" ? 24 : size === "md" ? 20 : 16} />}
    </button>
  );
}

export default Button;
