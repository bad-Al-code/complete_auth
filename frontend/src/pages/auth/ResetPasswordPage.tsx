import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";
import { useState } from "react";
import Button from "../../components/Button";

const passwordSchema = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .max(50, { message: "Password must be less than 50 characters" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase character",
  })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase character",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[\W_]/, {
    message: "Password must contain at least one special character",
  });

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const ResetPasswordPage: React.FC = () => {
  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
    watch,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const passwordValue = watch("password") || "";

  const onSubmit = (data: FieldValues) => {
    console.log("Form Data:", data);
    // Add form submission logic here
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  {...register("password")}
                  id="password"
                  type="password"
                  className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                />
                {errors.password && (
                  <p className="mt-2 text-red-500">{errors.password.message}</p>
                )}
                <PasswordStrengthMeter
                  password={passwordValue}
                  isFocused={isPasswordFocused}
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword")}
                  id="confirmPassword"
                  type="password"
                  className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                disabled={isValid}
                type="submit"
                label="Update Password"
                fullWidth
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
