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
      const response = await axios.get<OffertType[]>(`${import.meta.env.VITE_API_BASE_URL}/api/trips/all`);
      set({ trips: response.data, isLoading: false }); 
    } catch (error) {
      set({ error: 'Failed to load trips', isLoading: false }); 
    }
  },
}));

export default useTripStore;