import axios, { AxiosRequestConfig } from 'axios'

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

export async function searchAirport(query: string) {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',
    params: { query: query },
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}


export async function searchFlights(params: FlightSearchParams) {
  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
    params,
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  return response.data;
}

export async function getFilters(AirportCode: string, destinationAirport: string, dateString: string, itineraryTypeString: string, classOfServiceString: string) {

  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/getFilters',
    params: {
      sourceAirportCode: AirportCode,
      destinationAirportCode: destinationAirport,
      date: dateString,
      itineraryType: itineraryTypeString,
      classOfService: classOfServiceString
    },
    headers: {
      'X-RapidAPI-Key': 'fb5ddd06c5msh5d169b469ebc2bcp135a0ejsn3e0b3fd48710',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function searchFlightsMultiCity() {

  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlightsMultiCity',
    params: {
      legs: '[{"sourceAirportCode":"BOS","destinationAirportCode":"LON","date":"2023-10-18"},{"sourceAirportCode":"LON","destinationAirportCode":"BOS","date":"2023-10-26"}]',
      classOfService: '<REQUIRED>',
      sortOrder: '<REQUIRED>',
      currencyCode: 'USD'
    },
    headers: {
      'X-RapidAPI-Key': 'fb5ddd06c5msh5d169b469ebc2bcp135a0ejsn3e0b3fd48710',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}