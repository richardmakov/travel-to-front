import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import axios from 'axios';

interface Booking {
    id: number;
    details: string;
    userId: number;
}

interface Flight {
    id: number;
    flightNumber: string;
    airline: string;
    price: string;
    origin: string;
    destination: string;
    departurDate: string;
    arrivalData: string;
}

interface Trip {
    id: number;
    destination: string;
    price: number;
}

interface BookingStore {
    bookings: Booking[];
    flights: Flight[];
    trips: Trip[];
    getAllBookings: () => Promise<void>;
    getBookingsByUserId: (userId: number) => Promise<void>;
    createFlight: (flight: Flight) => Promise<void>;
    createTrip: (trip: Trip) => Promise<void>;
    getFlightsByAirline: (airline: string) => Promise<void>;
    getTripsByDestination: (destination: string) => Promise<void>;
    updateBooking: (bookingId: number, newBookingData: Booking) => Promise<void>;
    updateFlight: (flightId: number, newFlightData: Flight) => Promise<void>;
    updateTrip: (tripId: number, newTripData: Trip) => Promise<void>;
    deleteBooking: (bookingId: number) => Promise<void>;
    deleteFlight: (flightId: number) => Promise<void>;
    deleteTrip: (tripId: number) => Promise<void>;
}

const useBookingStore = create<BookingStore>()(
    persist(
        (set) => ({
            bookings: [],
            flights: [],
            trips: [],
            getAllBookings: async () => {
                const response = await axios.get('/bookings');
                set({ bookings: response.data });
            },
            getBookingsByUserId: async (userId: number) => {
                const response = await axios.get(`/bookings/user/${userId}`);
                set({ bookings: response.data });
            },
            createFlight: async (flight: Flight) => {
                const response = await axios.post('/bookings/flight', flight);
                set((state) => ({ flights: [...state.flights, response.data] }));
            },
            createTrip: async (trip: Trip) => {
                const response = await axios.post('/bookings/trip', trip);
                set((state) => ({ trips: [...state.trips, response.data] }));
            },
            getFlightsByAirline: async (airline: string) => {
                const response = await axios.get(`/bookings/flights/airline/${airline}`);
                set({ flights: response.data });
            },
            getTripsByDestination: async (destination: string) => {
                const response = await axios.get(`/bookings/trips/destination/${destination}`);
                set({ trips: response.data });
            },
            updateBooking: async (bookingId: number, newBookingData: Booking) => {
                const response = await axios.put(`/bookings/${bookingId}`, newBookingData);
                set((state) => ({
                    bookings: state.bookings.map((booking) => booking.id === bookingId ? response.data : booking)
                }));
            },
            updateFlight: async (flightId: number, newFlightData: Flight) => {
                const response = await axios.put(`/bookings/flight/${flightId}`, newFlightData);
                set((state) => ({
                    flights: state.flights.map((flight) => flight.id === flightId ? response.data : flight)
                }));
            },
            updateTrip: async (tripId: number, newTripData: Trip) => {
                const response = await axios.put(`/bookings/trip/${tripId}`, newTripData);
                set((state) => ({
                    trips: state.trips.map((trip) => trip.id === tripId ? response.data : trip)
                }));
            },
            deleteBooking: async (bookingId: number) => {
                await axios.delete(`/bookings/${bookingId}`);
                set((state) => ({ bookings: state.bookings.filter((booking) => booking.id !== bookingId) }));
            },
            deleteFlight: async (flightId: number) => {
                await axios.delete(`/bookings/flight/${flightId}`);
                set((state) => ({ flights: state.flights.filter((flight) => flight.id !== flightId) }));
            },
            deleteTrip: async (tripId: number) => {
                await axios.delete(`/bookings/trip/${tripId}`);
                set((state) => ({ trips: state.trips.filter((trip) => trip.id !== tripId) }));
            },
        }),
        {
            name: 'booking-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useBookingStore;