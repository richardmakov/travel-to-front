import { create } from 'zustand';
import axios from 'axios';
import { OffertType } from '../types/index';

interface TripStore {
  trips: OffertType[];
  isLoading: boolean;
  error: string | null;
  fetchTrips: () => Promise<void>;
}

const useTripStore = create<TripStore>((set) => ({
  trips: [],
  isLoading: false,
  error: null,
  fetchTrips: async () => {
    set({ isLoading: true, error: null }); 
    try {
      const response = await axios.get<OffertType[]>('http://localhost:8080/api/trips/all');
      console.log(response);
      set({ trips: response.data, isLoading: false }); 
    } catch (error) {
      console.error('Error fetching trips:', error);
      set({ error: 'Failed to load trips', isLoading: false }); 
    }
  },
}));

export default useTripStore;