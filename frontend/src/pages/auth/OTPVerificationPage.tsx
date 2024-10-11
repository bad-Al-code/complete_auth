import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";

import Button from "../../components/Button";
import FormWrapper from "../../components/FormWrapper";
import Input from "../../components/Input";
import TextButtonWithIcon from "../../components/TextButtonWithIcon";

const OtpVerificationPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOtpInvalid, setIsOtpInvalid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;

    if (/[^0-9]/.test(value) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }

    setActiveIndex(index); // Trigger animation on current input
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { key } = e;

    if (key === "Backspace") {
      if (otp[index] === "") {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) (prevInput as HTMLInputElement).focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    // Test OTP validation
    if (otpCode !== "123456") {
      setIsOtpInvalid(true);
    } else {
      setIsOtpInvalid(false);
    }
  };

  const handleResendOtp = () => {
    alert("OTP resent!");
  };

  return (
    <FormWrapper title="Verify Your Email">
      <form onSubmit={handleSubmit}>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Please enter the 6-digit code sent to your email address.
        </p>
        <div className="flex space-x-2 justify-center mt-4">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className={`w-12 h-12 text-center text-2xl border-b-2 border-gray-300 transition-transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                activeIndex === index ? "animate-slide-up" : ""
              }`}
            />
          ))}
        </div>

        {isOtpInvalid && (
          <p className="text-red-500 text-sm mt-2">
            Invalid OTP, please try again.
          </p>
        )}

        <div className="flex justify-between w-full mt-4">
          <TextButtonWithIcon
            onClick={handleResendOtp}
            label="Resend OTP"
            icon={<FiRefreshCw />}
          />
          <Button type="submit" label="Verify" variant="filled" />
        </div>
      </form>
    </FormWrapper>
  );
};

export default OtpVerificationPage;
