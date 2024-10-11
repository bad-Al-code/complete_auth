import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "filled" | "outline" | "text";
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "filled",
  icon,
  fullWidth = false,
  className = "",
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
      {icon && <span className="mr-2">{icon}</span>} {label}
    </button>
  );
};

export default Button;
