import LoginPage from "./pages/auth/LoginPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import SignupPage from "./pages/auth/SignupPage";

const App: React.FC = () => {
  return (
    <div>
      <LoginPage />
      <SignupPage />
      <ResetPasswordPage />
    </div>
  );
};

export default App;
