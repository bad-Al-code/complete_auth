import { create } from "zustand";
import axios from "axios";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  isCheckingAuth: boolean;
  isLoading: boolean;

  signup: (email: string, password: string, name: string) => Promise<void>;
  otpVerify: (code: string) => Promise<void>;
}

const API_URL = "http://localhost:3000/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email: string, password: string, name: string) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        isCheckingAuth: false,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        set({
          error:
            error.response?.data?.message ||
            "An error occurred during the request",
          isLoading: false,
        });
      } else {
        set({
          error: "An unknown error occurred",
          isLoading: false,
        });
      }

      throw error;
    }
  },

  otpVerify: async (code: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        set({
          error: error.response.data?.message || "Error verifying email",
          isLoading: false,
        });
      } else {
        set({
          error: "An unexpected error occurred",
          isLoading: false,
        });
      }

      throw error;
    }
  },
}));
