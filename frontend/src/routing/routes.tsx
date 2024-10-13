import { createBrowserRouter } from "react-router-dom";

import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import LoginPage from "../pages/auth/LoginPage";
import OtpVerificationPage from "../pages/auth/OTPVerificationPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import SignupPage from "../pages/auth/SignupPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/otpVerify", element: <OtpVerificationPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/forgotPassword", element: <ForgotPasswordPage /> },
  { path: "/resetPassword", element: <ResetPasswordPage /> },
]);

export default router;
