import { useEffect, useState } from 'react';
import { FormValuesSearchFlights } from '../interface/flightsInterface';
import { useNavigate } from 'react-router-dom';
import useBadge from '../../../../hooks/useBadge';
import useFlightStore from '../../../../stores/flightStore';
import useValidateForm from './useValidateForm';
import { FlightSearchParams } from '../../../../types/flightStore';

const useFlightSearchForm = () => {

    const navigate = useNavigate();

    const initialFormValues: FormValuesSearchFlights = {
        origin: '',
        destination: '',
        departureDate: '',
        arrivalDate: '',
        numberAdults: 1,
        numberSenior: 0,
        classOfService: 'ECONOMY',
        currencyCode: '',
        sortOrder: 'PRICE',
        pageNumber: 1,
        itineraryType: 'ONE_WAY'
    };

    const [formValues, setFormValues] = useState<FormValuesSearchFlights>(initialFormValues);

    const [formError, setFormError] = useState('');

    const { selectedBadge } = useBadge();

    const [error, setError] = useState<string | null>(null);

    const { searchFlights, searchAirportArrival, searchAirportDeparture, airportsDeparture, airportsLanding } = useFlightStore();
    
    const [params,setParams] = useState<FlightSearchParams>({
        sourceAirportCode: '',
        destinationAirportCode: '',
        date: '',
        itineraryType: 'ONE_WAY',
        sortOrder: 'PRICE',
        numAdults: '1',
        numSeniors: '0',
        classOfService: 'ECONOMY',
        pageNumber: '1',
        currencyCode: ''
    });
    
    useEffect(() => {
        if (airportsDeparture && airportsLanding) {

            setParams({
                sourceAirportCode: airportsDeparture.data[0].airportCode,
                destinationAirportCode: airportsLanding.data[0].airportCode,
                date: formValues.departureDate,
                itineraryType: formValues.itineraryType,
                sortOrder: formValues.sortOrder,
                numAdults: formValues.numberAdults.toString(),
                numSeniors: formValues.numberSenior.toString(),
                classOfService: formValues.classOfService,
                pageNumber: formValues.pageNumber.toString(),
                currencyCode: selectedBadge.symbol,
            });
            
        }
    }, [airportsDeparture, airportsLanding, formValues, selectedBadge.symbol]);
    
    const handleChange = (field: keyof FormValuesSearchFlights, value: string) => {
        setFormValues((prevState) => ({
            ...prevState,
            [field]: value
        }));
    };

    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm()) {
            setFormError('Fill all the fields');
            return false;
        }
        navigate("/flights");
        await findFlights();
    };

    const findFlights = async () => {
        setError(null);
        console.log(params);
        try {
            await searchAirportDeparture(formValues.origin);
            await searchAirportArrival(formValues.destination);
            
            if (!airportsDeparture || !airportsLanding) {
                throw new Error('Airports not found');
            }
    
            searchFlights(params);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            setError(errorMessage);
        }
    };
    
    

    //Validate form
    const { validateOrigin, validateDestination, validateDate, validateNumberOfPassengers } = useValidateForm();
    const validateForm = () => {
        const originValid = validateOrigin(formValues.origin);
        const destinationValid = validateDestination(formValues.destination);
        const departureDateValid = validateDate(formValues.departureDate);
        const passengersValid = validateNumberOfPassengers(formValues.numberAdults, formValues.numberSenior);

        return (originValid && destinationValid && departureDateValid && passengersValid);
    };
    return {
        formValues,
        setFormValues,
        handleChange,
        handleSubmit,
        formError,
        error
    };
};

export default useFlightSearchForm;
