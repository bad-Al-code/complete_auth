import { createBrowserRouter } from "react-router-dom";

import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import LoginPage from "../pages/auth/LoginPage";
import OtpVerificationPage from "../pages/auth/OTPVerificationPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import SignupPage from "../pages/auth/SignupPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/auth/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/otpVerify", element: <OtpVerificationPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/forgotPassword", element: <ForgotPasswordPage /> },
  { path: "/resetPassword", element: <ResetPasswordPage /> },
]);

export default router;
