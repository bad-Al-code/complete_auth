import React from "react";
import { FiCheck } from "react-icons/fi";

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  linkText?: string;
  linkHref?: string;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
  className = "",
  disabled = false,
  linkText,
  linkHref,
  required = false,
}) => {
  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      <div className="relative flex items-center h-5">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className="absolute opacity-0 cursor-pointer w-0 h-0"
        />

        <div
          className={`w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600
          ${
            disabled
              ? "bg-gray-200 border-gray-400"
              : checked
                ? "bg-primary-600 dark:bg-primary-600 border-transparent"
                : "bg-gray-50 border-gray-300"
          }
          `}
        >
          {checked && <FiCheck className="text-white" />}
        </div>
      </div>

      <div className="ml-2 text-sm">
        <label
          htmlFor={id}
          className="  font-light text-sm  text-gray-500 dark:text-gray-300"
        >
          {label}{" "}
          <a
            href={linkHref}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            {linkText}
          </a>
        </label>
      </div>
    </label>
  );
};

export default Checkbox;
