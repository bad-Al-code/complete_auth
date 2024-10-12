import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";
import { useState } from "react";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name is required" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(50, { message: "Password must be less than 10 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase character",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase character",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept Terms and Conditions",
  }),
});

type FormData = z.infer<typeof schema>;

const SignupPage: React.FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isPasswordFocuesd, setIsPasswordFocused] = useState<boolean>(false);

  const passwordValiue = watch("password");

  const onSubmit = (e: FieldValues) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-6 max-w-md w-full mx-auto p-4 bg-white rounded-lg shadow-lg dark:shadow-xl shadow-gray-400 dark:shadow-gray-900 border border-gray-800 dark:border-gray-700 md:mt-0 sm:max-w-md xl:p-4 dark:bg-gray-800"
    >
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign Up
      </h2>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className=" w-full bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
        />
        {errors.name && (
          <p className="mt-2 border-blue-500 text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className=" w-full bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
        />
        {errors.email && (
          <p className="mt-2 border-blue-500 text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="text"
          className=" w-full bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your password"
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(true)}
        />
        {errors.password && (
          <p className="mt-2 border-blue-500 text-red-500">
            {errors.password.message}
          </p>
        )}

        <PasswordStrengthMeter
          password={passwordValiue}
          isFocused={isPasswordFocuesd}
        />
      </div>

      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <input
            {...register("acceptTerms")}
            id="acceptTerms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
          <label
            htmlFor="terms"
            className="ml-2 font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="#"
            >
              Terms and Conditions
            </a>
          </label>
        </div>

        {errors.acceptTerms && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-500">
            {errors.acceptTerms.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Login here
        </a>
      </p>
    </form>
  );
};

export default SignupPage;
