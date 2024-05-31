import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import axiosInstance from '../utils/axiosInstance';
import { OffertType } from '../types';
import { IBooking } from '../types/IBookingUserByID';

interface Flight {
    flightNumber: string;
    departureAirport?: string;
    arrivalAirport?: string;
    departureTime?: string;
    arrivalTime?: string;
}

interface Passenger {
    name: string;
    passportNumber: string;
}

interface Payment {
    paymentMethod: string;
    amount: number;
    paymentDate: string;
}

export interface Booking {
    id: number;
    booking_number: string;
    trip?: OffertType;
    flights?: Flight[];
    passengers?: Passenger[];
    payment?: Payment;
    userId: number;
}

interface BookingStore {
    bookings: Booking[];
    error: unknown | null;
    fetchBookings: () => Promise<Booking[]>;
    createBooking: (newBooking: Partial<Booking>) => Promise<void>;
    getBookingById: (id: number) => Promise<Booking | undefined>;
    getBookingByUserId: (id: number) => Promise<IBooking[] | undefined>;
    deleteBooking: (id: number) => Promise<void>;
}

const useBookingStore = create<BookingStore>()(
    persist(
        (set) => ({
            bookings: [],
            error: null,
            fetchBookings: async () => {
                try {
                    const response = await axiosInstance.get('/bookings/all');
                    return response.data;
                } catch (error) {
                    set( {error: error});
                }
            },
            createBooking: async (newBooking) => {
                try {
                    const response = await axiosInstance.post('/bookings/create', newBooking);
                    set((state) => ({ bookings: [...state.bookings, response.data] }));
                } catch (error) {
                    set( {error: error});
                }
            },
            getBookingById: async (id) => {
                try {
                    const response = await axiosInstance.get(`/bookings/${id}`);
                    return response.data;
                } catch (error) {
                    set({error: error});
                }
            },
            getBookingByUserId: async (id) => {
                try {
                    const response = await axiosInstance.get(`/bookings/user/${id}`);
                    return response.data;
                } catch (error) {
                    set({error: error});
                }
            },
            deleteBooking: async (id) => {
                try {
                    await axiosInstance.delete(`/bookings/${id}`);
                    set((state) => ({ bookings: state.bookings.filter((booking) => booking.id !== id) }));
                } catch (error) {
                    set({error: error});
                }
            },
        }),
        {
            name: 'booking-store',
        }
    )
);

export default useBookingStore;

