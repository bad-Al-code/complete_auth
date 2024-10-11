import React from "react";
import { FiArrowLeft } from "react-icons/fi";

interface BackToLoginProps {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
}

const TextButtonWithIcon: React.FC<BackToLoginProps> = ({
  onClick,
  label,
  icon = <FiArrowLeft />,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-500 hover:underline focus:outline-none"
    >
      {icon && <span className="mr-2"> {icon}</span>}

      {label}
    </button>
  );
};

export default TextButtonWithIcon;
