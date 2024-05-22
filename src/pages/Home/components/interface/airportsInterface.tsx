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
}

interface AirportData {
    lookbackServlet: string;
    autobroadened: string;
    title: string;
    type: string;
    document_id: any;
    url: string;
    scope: string;
    name: string;
    data_type: string;
    details: Details;
    airportCode: string;
    shortName: string;
    value: number;
    coords: string;
}

export interface APIResponseAirport {
    status: boolean;
    message: string;
    timestamp: number;
    data: AirportData[];
}