import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {
  requirements,
  getStrength,
  getStrengthColor,
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

  const sectionStrengths = [
    strength >= 25 ? strengthColor : "bg-gray-300",
    strength >= 50 ? strengthColor : "bg-gray-300",
    strength >= 75 ? strengthColor : "bg-gray-300",
    strength >= 100 ? strengthColor : "bg-gray-300",
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isFocused ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex justify-between mt-2">
        {sectionStrengths.map((colorClass, index) => (
          <div key={index} className="flex-1 h-2 mx-1 bg-gray-300 rounded-full">
            <div
              className={`${colorClass} h-full`}
              style={{ width: `${strength >= (index + 1) * 25 ? 100 : 0}%` }}
            />
          </div>
        ))}
      </div>

      <ul className="mt-4 text-sm text-gray-500 dark:text-gray-300">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-center">
            <span
              className={`mr-2 ${
                req.re.test(password) ? "text-green-500" : "text-red-500"
              }`}
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
