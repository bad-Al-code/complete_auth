// import { useState } from "react";
// import Button from "../../components/Button";
// import FormWrapper from "../../components/FormWrapper";
// import Input from "../../components/Input";
// import TextButtonWithIcon from "../../components/TextButtonWithIcon";

// const ForgotPasswordPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     termsAccepted: false,
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   };
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleBackToLogin = () => {};

//   return (
//     <FormWrapper title="Forgot your password?">
//       <form onSubmit={handleSubmit}>
//         <Input
//           label="Your Email"
//           type="email"
//           name="email"
//           placeholder="email@gmail.com"
//           required
//           fullWidth
//           value={formData.email}
//           onChange={handleInputChange}
//         />

//         <div className="flex justify-between items-center w-full mt-4">
//           <TextButtonWithIcon
//             onClick={handleBackToLogin}
//             label="Back to Login"
//           />
//           <Button type="submit" label="Reset Password" variant="filled" />
//         </div>
//       </form>
//     </FormWrapper>
//   );
// };

// export default ForgotPasswordPage;

import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

type FormData = z.infer<typeof schema>;

const ForgotPasswordPage: React.FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log("Form Data:", data);
  };

  const handleBackToLogin = () => {};

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot Password
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
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="mt-2 text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={handleBackToLogin}
                  className="flex items-center text-gray-500 hover:underline focus:outline-none"
                >
                  <FiArrowLeft className="mr-2" />
                  Back to Login
                </button>

                <Button
                  type="submit"
                  label="Reset Password"
                  fullWidth={false}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
