import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FormWrapper from "../../components/FormWrapper";
import Checkbox from "../../components/Checkbox";
import AuthPrompt from "../../components/AuthPrompt";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({});

    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted successfully");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleLoginClick = () => {
    console.log("Navigate to Login Page");
  };

  return (
    <FormWrapper title="SignUp">
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="name"
          name="name"
          placeholder="Name"
          required
          fullWidth
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="email@gmail.com"
          required
          fullWidth
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />

        <Checkbox
          id="terms"
          label="I accept the "
          linkText="Terms and Conditions"
          linkHref="#"
          required
          checked={formData.termsAccepted}
          onChange={handleCheckboxChange}
          className="mt-2"
        />

        <Button
          type="submit"
          label="Create an account"
          variant="filled"
          fullWidth
          className="mt-4"
        />

        <AuthPrompt
          actionText="Login"
          onActionClick={handleLoginClick}
          promptText="Already have an account?"
        />
      </form>
    </FormWrapper>
  );
};

export default SignupPage;
