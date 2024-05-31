import { useEffect, useState } from "react";
import useBookingStore, { Booking } from "../../../../../../../../stores/bookingStore";

export default function useTableBookingViewModel() {
  
    const { fetchBookings } = useBookingStore()

    const [bookings, setBookings] = useState<Booking[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

            const fetchBooking = async () => {
                setLoading(true);
                try {
                    const result = await fetchBookings();
                    setBookings(result);
                } catch (err) {
                    setError('Failed to fetch booking');
                } finally {
                    setLoading(false);
                }
            };
            fetchBooking();
        }, [fetchBookings]);

    return {
        bookings,
        loading,
        error
    }
}