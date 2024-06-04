import { useEffect, useState } from 'react';
import { FormValuesSearchFlights } from '../interface/flightsInterface';
import { useNavigate } from 'react-router-dom';
import useFlightStore from '../../../../stores/flightStore';
import useValidateForm from './useValidateForm';
import { FlightSearchParams } from '../../../../types/flightStore';
import useBadge from '../../../../hooks/useBadge';

const useFlightSearchForm = () => {

    const navigate = useNavigate();

    const { selectedBadge } = useBadge();

    const initialFormValues: FormValuesSearchFlights = {
        origin: '',
        destination: '',
        departureDate: '',
        arrivalDate: '',
        numberAdults: 1,
        numberSenior: 0,
        classOfService: 'ECONOMY',
        currencyCode: selectedBadge.symbol,
        sortOrder: 'PRICE',
        pageNumber: 1,
        itineraryType: 'ONE_WAY'
    };

    const [formValues, setFormValues] = useState<FormValuesSearchFlights>(initialFormValues);

    const [formError, setFormError] = useState('');

    const [error, setError] = useState<string | null>(null);

    const { searchFlights, searchAirportArrival, searchAirportDeparture, airportsDeparture, airportsLanding } = useFlightStore();

    const [params, setParams] = useState<FlightSearchParams>({
        sourceAirportCode: '',
        destinationAirportCode: '',
        date: formValues.departureDate,
        numAdults: '1',
        numSeniors: '0',
        classOfService: 'ECONOMY',
        currencyCode: '',
        sortOrder: 'PRICE',
        pageNumber: '1',
        itineraryType: 'ONE_WAY'
    });

    const updateParamsFormValues = (data: FormValuesSearchFlights) => {
        setFormValues({ ...formValues, ...data })
    }

    const handleChange = (field: keyof FormValuesSearchFlights, value: string) => {
        setFormValues((prevState) => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateParamsFormValues(formValues)
        if (!validateForm()) {
            setFormError('Please fill out all fields');
            return false;
        }

        navigate("/flights");
        await findFlights();
    };

    const findAirports = async () => {
        setError(null);
        try {
            await searchAirportDeparture(formValues.origin);
            await searchAirportArrival(formValues.destination);

            if (!airportsDeparture || !airportsLanding) {
                throw new Error('Airports not found');
            }

        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            setError(errorMessage);
        }
    };

   /*  useEffect(() => {
        if (airportsDeparture && airportsLanding) {
            setParams({
                ...params,
                sourceAirportCode: airportsDeparture.data[0].airportCode,
                destinationAirportCode: airportsLanding.data[0].airportCode,
            });
            console.log(params);
        }
    }, [airportsDeparture, airportsLanding, params]); */

    const findFlights = async () => {
        setError(null);

        try {

            await findAirports()
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
        error,
        updateParamsFormValues
    };
};

export default useFlightSearchForm;
