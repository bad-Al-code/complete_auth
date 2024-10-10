import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { SignUpForm } from "./pages/auth/SignUpForm";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <>
      <HomePage />
      <SignUpForm />
      <ForgotPassword />
    </>
  );
}

export default App;
