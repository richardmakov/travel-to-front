

const apiKey = 'fb5ddd06c5msh5d169b469ebc2bcp135a0ejsn3e0b3fd48710'

import { create } from 'zustand';
import axios, { AxiosRequestConfig } from 'axios';
import { FlightsRootObject } from '../pages/Display/components';
import { ApiResponse, FlightSearchParams } from '../types/flightStore';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FlightStore {
  airportsDeparture: ApiResponse | null;
  airportsLanding: ApiResponse | null,
  load: boolean,
  flights: FlightsRootObject | null;
  error: string | null;
  searchAirportDeparture: (query: string) => Promise<void>;
  searchAirportArrival: (query: string) => Promise<void>;
  searchFlights: (params: FlightSearchParams) => Promise<void>;
}

const useFlightStore = create<FlightStore>()(
  persist(
    (set) => ({
      airportsDeparture: null,
      airportsLanding: null,
      load: false,
      flights: null,
      error: null,

      searchAirportDeparture: async (query: string) => {
        set({ error: null, load: true });
        const options: AxiosRequestConfig = {
          method: 'GET',
          url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',
          params: { query },
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
          },
        };

        try {
          const response = await axios.request(options);
          set({ airportsDeparture: response.data, load: true });
        } catch (error: unknown) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          set({ error: errorMessage, load: false });
        }
      },

      searchAirportArrival: async (query: string) => {
        set({ error: null, load: true });
        const options: AxiosRequestConfig = {
          method: 'GET',
          url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',
          params: { query },
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
          },
        };

        try {
          const response = await axios.request(options);
          set({ airportsLanding: response.data, load: true });
        } catch (error: unknown) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          set({ error: errorMessage, load: false });
        }
      },

      searchFlights: async (params: FlightSearchParams) => {
        set({ error: null, load: true });
        const options = {
          method: 'GET',
          url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
          params,
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
          }
        };

        try {
          const response = await axios.request(options);
          set({ flights: response.data, load: false });
        } catch (error: unknown) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          set({ error: errorMessage, load: false });
        }
      },
    }),
    {
      name: 'flights-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFlightStore;
