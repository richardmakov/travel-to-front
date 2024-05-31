import { useEffect, useState } from 'react'
import useBookingStore from '../../../../../../../stores/bookingStore';
import useAuthStore from '../../../../../../../stores/authStore';
import { IBooking } from '../../../../../../../types/IBookingUserByID';

export default function useTableViewModel() {
  
    const { getBookingByUserId } = useBookingStore()
    const {user} = useAuthStore()
    const userId = user?.id

    const [booking, setBooking] = useState<IBooking[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if(userId){
            const fetchBooking = async () => {
                setLoading(true);
                try {
                    const result = await getBookingByUserId(userId);
                    setBooking(result);
                } catch (err) {
                    setError('Failed to fetch booking');
                } finally {
                    setLoading(false);
                }
            };
            fetchBooking();
        }
        
    }, [userId, getBookingByUserId]);

    return {
        booking,
        loading,
        error
    }
}
