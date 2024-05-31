import {create} from 'zustand';
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
}

const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            error: '',
            fetchUsers: async () => {
                try {
                    const response = await axiosInstance.get('/users/all');
                    return response.data
                } catch (error) {
                    set( {error: error});
                }
            }
        }),
        {
            name: 'booking-store',
        }
    )
);

export default useUserStore;