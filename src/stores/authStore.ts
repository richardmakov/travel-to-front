import { create  } from 'zustand';
import { UserLoginType, UserRegisterType, UserType } from "../types";
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  user: UserType | null;
  error: string | null;
  loading: boolean;
  isLogged: boolean;
  signin: (credentials: UserLoginType) => Promise<void>;
  signup: (userData: UserRegisterType) => Promise<void>;
  signout: () => void;
  setError: (message: string) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      error: null,
      loading: false,
      isLogged: false,

      signin: async (credentials: UserLoginType) => {
        set({ loading: true, error: null });
      
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || response.status);
          }
      
          const data: UserType = await response.json();
          set({ user: data, loading: false, isLogged: true, error: '' });
        } catch (error) {
          if (error instanceof Error) {
            set({ error: error.message, loading: false });
          } else {
            set({ error: 'Unknown error', loading: false });
          }
        }
      },

      signup: async (userData: UserRegisterType) => {
        set({ loading: true, error: null });
      
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Error ${response.status}`);
          }
      
          const data: UserType = await response.json();
          set({ user: data, loading: false, isLogged: true, error: '' });
        } catch (error) {
          if (error instanceof Error) {
            set({ error: error.message, loading: false });
          } else {
            set({ error: 'Unknown error', loading: false });
          }
        }
      },

      signout: () => {
        set({ user: null, isLogged: false });
      },

      setError: (message: string) => set({ error: message }),
    }),
    {
      name: 'auth-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
);

export default useAuthStore;