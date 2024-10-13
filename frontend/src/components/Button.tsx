import React from "react";
import { LuLoader } from "react-icons/lu";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "filled" | "outline" | "text";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "filled",
  icon,
  fullWidth = false,
  className = "",
  isLoading = false,
  ...props
}) => {
  const baseStyles = `flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-transform duration-150 focus:outline-none ${
    fullWidth ? "w-full" : ""
  }`;

  const filledStyles =
    "bg-primary-600 text-white hover:bg-primary-700 active:translate-y-0.5 active:shadow-inner";
  const outlineStyles =
    "border border-primary-600 text-primary-600 hover:bg-primary-100 active:translate-y-0.5 active:shadow-inner";
  const textStyles =
    "text-primary-600 hover:bg-primary-100 active:translate-y-0.5 active:shadow-inner";

  let styles;
  switch (variant) {
    case "outline":
      styles = outlineStyles;
      break;
    case "text":
      styles = textStyles;
      break;
    case "filled":
    default:
      styles = filledStyles;
      break;
  }

  return (
    <button className={`${baseStyles} ${styles} ${className}`} {...props}>
      {isLoading ? (
        <LuLoader
          className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
          size={24}
        />
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </>
      )}
    </button>
  );
};

export default Button;
