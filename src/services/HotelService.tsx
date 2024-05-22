import axios from 'axios'

export async function searchLocation(location: string) {

    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation',
        params: {
            query: location
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

export async function searchHotels(location: string, checkIn: string, checkOut: string, currencyCode: string) {

    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels',
        params: {
            geoId: location,
            checkIn: checkIn,
            checkOut: checkOut,
            pageNumber: '1',
            currencyCode: currencyCode
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