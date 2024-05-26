import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios';

interface Trip {
    id: number;
    destination: string;
    departureDate?: string;
    returnDate?: string;
  }
  
  interface Flight {
    id: number;
    flightNumber: string;
    departureAirport?: string;
    arrivalAirport?: string;
    departureTime?: string;
    arrivalTime?: string;
  }
  
  interface Passenger {
    id: number;
    name: string;
    passportNumber: string;
  }
  
  interface Payment {
    id: number;
    paymentMethod: string;
    amount: number;
    paymentDate: string;
  }
  
  interface Booking {
    id: number;
    trip?: Trip;
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
            const response = await axios.get('/bookings');
            set({ bookings: response.data });
          } catch (error) {
            console.error('Failed to fetch bookings:', error);
          }
        },
        createBooking: async (newBooking) => {
          try {
            const response = await axios.post('/bookings', newBooking);
            set((state) => ({ bookings: [...state.bookings, response.data] }));
          } catch (error) {
            console.error('Failed to create booking:', error);
          }
        },
        getBookingById: async (id) => {
          try {
            const response = await axios.get(`/bookings/${id}`);
            return response.data;
          } catch (error) {
            console.error(`Failed to fetch booking with id ${id}:`, error);
          }
        },
        deleteBooking: async (id) => {
          try {
            await axios.delete(`/bookings/${id}`);
            set((state) => ({ bookings: state.bookings.filter((booking) => booking.id !== id) }));
          } catch (error) {
            console.error(`Failed to delete booking with id ${id}:`, error);
          }
        },
      }),
      {
        name: 'booking-store', 
      }
    )
  );
  
  export default useBookingStore;