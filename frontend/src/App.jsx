import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { SignUpForm } from "./pages/auth/SignUpForm";
import { VerifyEmail } from "./pages/auth/VerifyEmail";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <HomePage />
      <SignUpForm />
      <ForgotPassword />
      <ResetPassword />
      <VerifyEmail />
    </>
  );
}

export default App;
