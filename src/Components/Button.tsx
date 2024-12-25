import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface ButtonProps {
  icon?: IconType;
  text?: string;
  border?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: string;
  onClick?: () => void;
  iconPosition?: "left" | "right";
}

function Button({
  icon: Icon,
  text,
  border = false,
  size = "md",
  href,
  download,
  onClick,
  iconPosition = "right",
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

  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon size={size === "lg" ? 24 : size === "md" ? 20 : 16} />
      )}
      {text}
      {Icon && iconPosition === "right" && (
        <Icon size={size === "lg" ? 24 : size === "md" ? 20 : 16} />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  if (download) {
    return (
      <motion.a
        href={download}
        download
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseClasses}
      onClick={onClick}
    >
      {buttonContent}
    </motion.button>
  );
}

export default Button;
