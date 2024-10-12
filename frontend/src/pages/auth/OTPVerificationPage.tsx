import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../components/Button";

const schema = z.object({
  otp: z
    .array(
      z
        .string()
        .min(1, "OTP is required")
        .regex(/^\d$/, "Only digits are allowed")
    )
    .length(6, "OTP must be 6 digits"),
});

type FormData = z.infer<typeof schema>;

const OtpVerificationPage: React.FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { otp: new Array(6).fill("") },
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const otp = watch("otp");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    if (/[^0-9]/.test(value) || value.length > 1) return;

    setValue(`otp.${index}`, value);
    setActiveIndex(index);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { key } = e;

    if (key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) (prevInput as HTMLInputElement).focus();
    }
  };

  const onSubmit = (data: FieldValues) => {
    const otpCode = data.otp.join("");
    console.log("Submitted OTP:", otpCode);
  };

  const handleResendOtp = () => {
    console.log("OTP resend");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Please enter the 6-digit code sent to your email address.
              </p>

              <div className="grid grid-cols-6 gap-2 justify-center mt-4">
                {otp.map((_, index) => (
                  <input
                    {...register(`otp.${index}`)}
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`w-full h-12 text-center text-2xl border-2 rounded-lg transition-transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      activeIndex === index ? "animate-slide-up" : ""
                    } ${
                      errors.otp
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>

              {errors.otp && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.otp.message || "Invalid OTP, please try again."}
                </p>
              )}

              <div className="flex justify-between items-center w-full mt-4">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="flex items-center text-gray-500 hover:underline focus:outline-none"
                >
                  <FiRefreshCw className="mr-2" />
                  Resend OTP
                </button>

                <Button type="submit" label="Verify" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpVerificationPage;
