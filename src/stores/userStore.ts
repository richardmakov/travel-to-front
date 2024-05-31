import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axiosInstance from '../utils/axiosInstance';

export interface FetchUsers {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    idCard: string,
    passport: string,
    country: string,
    date: string
}

interface UserStore {
    error: unknown;
    fetchUsers: () => Promise<FetchUsers[]>;
    updateUser: (id: number, user: FetchUsers) => Promise<void>;
    updatePassword: (userId: number, currentPassword: string, newPassword: string) => Promise<void>;
}

const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            error: '',
            fetchUsers: async () => {
                try {
                    const response = await axiosInstance.get('/users/all');
                    return response.data;
                } catch (error) {
                    set({ error: error });
                    throw error; 
                }
            },
            updateUser: async (id, user) => {
                try {
                    await axiosInstance.put(`/users/update/${id}`, user);
                } catch (error) {
                    set({ error: error });
                    throw error; 
                }
            },
            updatePassword: async (userId, currentPassword, newPassword) => {
                try {
                    await axiosInstance.put(`/users/updatePassword/${userId}`, null, {
                        params: {
                            currentPassword: currentPassword,
                            newPassword: newPassword
                        }
                    });
                } catch (error) {
                    throw new Error('Passwords do not match or are empty');
                }
            }
        }),
        {
            name: 'booking-store',
        }
    )
);

export default useUserStore;
