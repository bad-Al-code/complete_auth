import ReactQuery from "./demo/react-query";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import LoginPage from "./pages/auth/LoginPage";
import OtpVerificationPage from "./pages/auth/OTPVerificationPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import SignupPage from "./pages/auth/SignupPage";

const App: React.FC = () => {
  return (
    <div>
      <ReactQuery />
      {/* <SignupPage /> */}
      {/* <OtpVerificationPage /> */}
      {/**/}
      {/* <LoginPage /> */}
      {/* <ForgotPasswordPage /> */}
      {/* <ResetPasswordPage /> */}
    </div>
  );
};

export default App;
