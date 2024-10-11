// components/PasswordStrengthMeter.tsx

import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import {
  getStrength,
  getStrengthColor,
  requirements,
} from "../utils/passwordStrengthUtil";

interface PasswordStrengthMeterProps {
  password: string;
  isFocused: boolean;
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({
  password,
  isFocused,
}) => {
  const strength = getStrength(password);
  const strengthColor = getStrengthColor(strength);

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isFocused ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {/* Strength bars */}
      <div className="flex justify-between gap-2 mt-2">
        <div className="w-full h-1 bg-gray-300">
          <div
            className={`h-1 ${password.length > 0 ? strengthColor : ""}`}
            style={{ width: "100%" }}
          />
        </div>
        <div className="w-full h-1 bg-gray-300">
          <div
            className={`h-1 ${strength < 30 ? "" : strengthColor}`}
            style={{ width: strength < 30 ? "0%" : "100%" }}
          />
        </div>
        <div className="w-full h-1 bg-gray-300">
          <div
            className={`h-1 ${strength < 50 ? "" : strengthColor}`}
            style={{ width: strength < 50 ? "0%" : "100%" }}
          />
        </div>
        <div className="w-full h-1 bg-gray-300">
          <div
            className={`h-1 ${strength < 70 ? "" : strengthColor}`}
            style={{ width: strength < 70 ? "0%" : "100%" }}
          />
        </div>
      </div>

      {/* Requirement check list */}
      <ul className="mt-4 text-sm text-gray-300">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-center">
            <span
              className={`mr-2 ${req.re.test(password) ? "text-green-500" : "text-red-500"}`}
            >
              {req.re.test(password) ? <FaCheck /> : <IoMdClose />}
            </span>
            {req.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordStrengthMeter;
