import {create} from 'zustand';
import axios from 'axios';
import { OffertType } from '../types/index';

  interface TripStore {
    trips: OffertType[];
    fetchTrips: () => Promise<void>;
  }
  
  const useTripStore = create<TripStore>((set) => ({
    trips: [],
    fetchTrips: async () => {
      try {
        const response = await axios.get<OffertType[]>('http://localhost:8080/api/trips/all');
        console.log(response);
        set({ trips: response.data });
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    },
  }));

export default useTripStore;