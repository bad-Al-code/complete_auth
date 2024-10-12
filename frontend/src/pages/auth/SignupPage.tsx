import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";

const passwordSchema = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[\W_]/, {
    message: "Password must contain at least one special character",
  });

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name is required" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordSchema,
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept Terms and Conditions",
  }),
});

type FormData = z.infer<typeof schema>;

const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const password = watch("password") || "";

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log("Form Submitted:", data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 max-w-md w-full mx-auto p-4 bg-white rounded-lg shadow-lg border border-gray-300"
      >
        <h2 className="text-2xl font-bold leading-tight text-gray-900">
          Sign Up
        </h2>

        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="w-full bg-gray-50 border text-gray-900 text-sm rounded-lg p-2.5"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full bg-gray-50 border text-gray-900 text-sm rounded-lg p-2.5"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="w-full bg-gray-50 border text-gray-900 text-sm rounded-lg p-2.5"
            placeholder="Enter your password"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
          <PasswordStrengthMeter
            password={password}
            isFocused={isPasswordFocused}
          />
        </div>

        {/* Accept Terms */}
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <input
              {...register("acceptTerms")}
              id="acceptTerms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
            />
            <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-600">
              I accept the{" "}
              <a href="#" className="text-primary-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="mt-1 text-sm text-red-500">
              {errors.acceptTerms.message}
            </p> // Reduced margin to `mt-1`
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
