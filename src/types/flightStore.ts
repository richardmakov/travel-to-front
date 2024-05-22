import { FlightsRootObject } from "../pages/Display/components";

interface Details {
  placetype: number;
  parent_name: string;
  grandparent_name: string;
  grandparent_id: number;
  parent_id: number;
  grandparent_place_type: number;
  highlighted_name: string;
  name: string;
  parent_place_type: number;
  parent_ids: number[];
  geo_name: string;
  address?: string;
  rac_enabled?: boolean;
}

interface Airport {
  lookbackServlet: string | null;
  autobroadened: string;
  title: string;
  type: string;
  document_id: string | null;
  url: string;
  scope: string;
  name: string;
  data_type: string;
  details: Details;
  airportCode: string;
  shortName: string;
  value: number;
  coords: string;
  isChild: boolean;
  lastChild?: boolean;
}

interface AirportGroup {
  lookbackServlet: string | null;
  autobroadened: string;
  title: string;
  type: string;
  document_id: string | null;
  url: string;
  children: Airport[];
  scope: string;
  name: string;
  data_type: string;
  details: Details;
  airportCode: string;
  shortName: string;
  value: number;
  coords: string;
}

export interface ApiResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: (AirportGroup | Airport)[];
}


export interface FlightSearchParams {
  sourceAirportCode: string;
  destinationAirportCode: string;
  date: string;
  itineraryType: string;
  sortOrder: string;
  numAdults: string;
  numSeniors: string;
  classOfService: string;
  pageNumber: string;
  currencyCode: string;
}
export const initialStateFlights: FlightsRootObject = {
  status: false,
  message: '',
  timestamp: 0,
  data: {
    session: {
      searchHash: '',
      pageLoadUid: '',
      searchId: '',
      filterSettings: {
        tt: '',
        aa: '',
        a: '',
        d: '',
        ns: '',
        cos: '',
        al: '',
        fq: '',
        ft: '',
        sid: '',
        oc: '',
        plp: '',
        mc: '',
        pRange: '',
        da: '',
        ca: '',
      },
    },
    complete: false,
    numOfFilters: 0,
    totalNumResults: 0,
    flights: [],
  },
};

