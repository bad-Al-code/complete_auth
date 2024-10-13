import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../pages/auth/ErrorPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import LoginPage from "../pages/auth/LoginPage";
import { useEffect } from "react";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import SignupPage from "../pages/auth/SignupPage";
import { useAuthStore } from "../store/authStore";
import { FaSpinner } from "react-icons/fa6";
import HomePage from "../pages/HomePage";
import OtpVerificationPage from "../pages/auth/OTPVerificationPage";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return element;
};

const RedirectAuthenticatedUser = ({ element }: { element: JSX.Element }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const CheckAuth = ({ children }: { children: JSX.Element }) => {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <FaSpinner />;

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CheckAuth>
        <ProtectedRoute element={<HomePage />} />
      </CheckAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <CheckAuth>
        <RedirectAuthenticatedUser element={<SignupPage />} />
      </CheckAuth>
    ),
  },
  {
    path: "/login",
    element: (
      <CheckAuth>
        <RedirectAuthenticatedUser element={<LoginPage />} />
      </CheckAuth>
    ),
  },
  { path: "/otpVerify", element: <OtpVerificationPage /> },
  {
    path: "/forgotPassword",
    element: (
      <CheckAuth>
        <RedirectAuthenticatedUser element={<ForgotPasswordPage />} />
      </CheckAuth>
    ),
  },
  {
    path: "/reset-password/:token",
    element: (
      <CheckAuth>
        <RedirectAuthenticatedUser element={<ResetPasswordPage />} />
      </CheckAuth>
    ),
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
