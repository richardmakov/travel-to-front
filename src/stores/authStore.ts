import { create  } from 'zustand';
import { UserLoginType, UserType } from "../types";
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  user: UserType | null;
  error: string | null;
  loading: boolean;
  isLogged: boolean;
  signin: (credentials: UserLoginType) => Promise<void>;
  signup: (userData: UserType) => Promise<void>;
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
          const response = await fetch('http://localhost:8080/api/auth/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });

          if (!response.ok) {
            throw new Error('Error logging in');
          }

          const data: UserType = await response.json();
          set({ user: data, loading: false, isLogged: true });
        } catch (error) {
          if (error instanceof Error) {
            set({ error: error.message, loading: false });
          } else {
            set({ error: 'Unknown error', loading: false });
          }
        }
      },

      signup: async (userData: UserType) => {
        set({ loading: true, error: null });

        try {
          const response = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          if (!response.ok) {
            throw new Error('Error in register');
          }

          const data: UserType = await response.json();

          set({ user: data, loading: false, isLogged: true });
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