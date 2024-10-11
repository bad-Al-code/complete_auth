import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FormWrapper from "../../components/FormWrapper";
import Checkbox from "../../components/Checkbox";
import AuthPrompt from "../../components/AuthPrompt";
import ForgotPassword from "../../components/ForgotPassword";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    termsAccepted: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlePasswordChange = () => {
    // Do something here
  };

  const handleSignupClick = () => {
    console.log("Navigate to Signup Page");
  };

  const handleForgotPasswordClick = () => {
    console.log("Navigating to password reset page...");
  };

  return (
    <FormWrapper title="Log in to your account">
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="email@gmail.com"
          required
          fullWidth
          value={formData.email}
          onChange={handleInputChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Password"
          required
          fullWidth
          value={formData.password}
          onChange={handlePasswordChange}
        />
        <div className="flex justify-between w-full mt-4">
          <Checkbox
            id="remember"
            label="Remember me"
            checked={formData.termsAccepted}
            onChange={handleCheckboxChange}
            className="mt-2"
          />
          <ForgotPassword onForgotPasswordClick={handleForgotPasswordClick} />
        </div>

        <Button
          type="submit"
          label="SignIn"
          variant="filled"
          fullWidth
          className="mt-4"
        />
        <AuthPrompt
          actionText="Sign Up"
          onActionClick={handleSignupClick}
          promptText="Don't have an account?"
        />
      </form>
    </FormWrapper>
  );
};

export default LoginPage;
