import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import SignupPage from "./pages/auth/SignupPage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import OtpVerificationPage from "./pages/auth/OTPVerificationPage.tsx";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage.tsx";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/verifyEmail", element: <OtpVerificationPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/forgotPassword", element: <ForgotPasswordPage /> },
  { path: "/resetPassword", element: <ResetPasswordPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </QueryClientProvider>
);
