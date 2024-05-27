import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import axiosInstance from '../utils/axiosInstance';
import { OffertType } from '../types';

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

interface Booking {
    id: number;
    booking_number: string;
    trip?: OffertType;
    flight?: Flight;
    passengers?: Passenger[];
    payment?: Payment;
    userId: number;
}

interface BookingStore {
    bookings: Booking[];
    fetchBookings: () => Promise<void>;
    createBooking: (newBooking: Partial<Booking>) => Promise<void>;
    getBookingById: (id: number) => Promise<Booking | undefined>;
    deleteBooking: (id: number) => Promise<void>;
}

const useBookingStore = create<BookingStore>()(
    persist(
        (set) => ({
            bookings: [],
            fetchBookings: async () => {
                try {
                    const response = await axiosInstance.get('/bookings');
                    set({ bookings: response.data });
                } catch (error) {
                    console.error('Failed to fetch bookings:', error);
                }
            },
            createBooking: async (newBooking) => {
                try {
                    const response = await axiosInstance.post('/bookings/create', newBooking);
                    set((state) => ({ bookings: [...state.bookings, response.data] }));
                } catch (error) {
                    console.error('Failed to create booking:', error);
                }
            },
            getBookingById: async (id) => {
                try {
                    const response = await axiosInstance.get(`/bookings/${id}`);
                    return response.data;
                } catch (error) {
                    console.error(`Failed to fetch booking with id ${id}:`, error);
                }
            },
            deleteBooking: async (id) => {
                try {
                    await axiosInstance.delete(`/bookings/${id}`);
                    set((state) => ({ bookings: state.bookings.filter((booking) => booking.id !== id) }));
                } catch (error) {
                    console.error(`Failed to delete booking with id ${id}:`, error);
                }
            },
        }),
        {
            name: 'booking-store', // Nombre del almacenamiento persistente
        }
    )
);

export default useBookingStore;

