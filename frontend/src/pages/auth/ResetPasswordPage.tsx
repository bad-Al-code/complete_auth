import { useState } from "react";

import Button from "../../components/Button";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";
import FormWrapper from "../../components/FormWrapper";
import Input from "../../components/Input";

const ResetPasswordPage: React.FC = () => {
  const [formData, setFormData] = useState({
    password: "",
  });

  const [password, setPassword] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

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

  return (
    <FormWrapper title="Reset Password">
      <form onSubmit={handleSubmit}>
        <Input
          label="Password"
          name="Password"
          type="password"
          value={password}
          required
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <PasswordStrengthMeter password={password} isFocused={isFocused} />

        <Input
          label="Confirm Password"
          type="password"
          name="password"
          required
          fullWidth
          value={formData.password}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          label="Reset Password"
          variant="filled"
          fullWidth
          className="mt-4"
        />
      </form>
    </FormWrapper>
  );
};

export default ResetPasswordPage;
