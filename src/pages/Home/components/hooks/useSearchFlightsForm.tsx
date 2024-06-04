import { useEffect, useState } from 'react';
import { FormValuesSearchFlights } from '../interface/flightsInterface';
import { useNavigate } from 'react-router-dom';
import useFlightStore from '../../../../stores/flightStore';
import useValidateForm from './useValidateForm';
import { FlightSearchParams } from '../../../../types/flightStore';
import { BadgeInfo } from '../interface/badgeInterface';
import { SelectChangeEvent } from '@mui/material';

const useFlightSearchForm = (selectedBadge: BadgeInfo) => {

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

    const [formValues, setFormValues] = useState<FormValuesSearchFlights>(() => {
        const savedValues = localStorage.getItem('formValues');
        if (savedValues) {
            const parsedValues = JSON.parse(savedValues);
            return { ...initialFormValues, ...parsedValues };
        }
        return initialFormValues;
    });

    useEffect(() => {
        const { numberAdults, numberSenior } = formValues;
        const savedValues = { numberAdults, numberSenior };
        localStorage.setItem('formValues', JSON.stringify(savedValues));
    }, [formValues.numberAdults, formValues.numberSenior, formValues]);

    const [formError, setFormError] = useState('');

    const [error, setError] = useState<string | null>(null);

    const { searchFlights, searchAirportArrival, searchAirportDeparture, airportsDeparture, airportsLanding } = useFlightStore();

    useEffect(() => {
        setFormValues((prevState) => ({
            ...prevState,
            currencyCode: selectedBadge.symbol
        }));
    }, [selectedBadge]);

    const handleChange = (field: keyof FormValuesSearchFlights, value: string) => {
        setFormValues((prevState) => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleChangeSelectNumbersAdults = (e: SelectChangeEvent<number>) => {
        setFormValues((prevState) => ({
            ...prevState,
            numberAdults: e.target.value as number,
        }));
    };

    const handleChangeSelectNumbersSeniors = (e: SelectChangeEvent<number>) => {
        setFormValues((prevState) => ({
            ...prevState,
            numberSenior: e.target.value as number,
        }));
    };

    const updateFormValues = (data: FormValuesSearchFlights) => {
        setFormValues(prevState => ({ ...prevState, ...data }));
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm()) {
            setFormError('Please fill out all fields');
            return false;
        }
        updateFormValues(formValues)
        navigate("/flights");
        await findFlights();
    };

    const findFlights = async () => {
        setError(null);
        try {
            await searchAirportDeparture(formValues.origin);
            await searchAirportArrival(formValues.destination);

            if (!airportsDeparture || !airportsLanding) {
                throw new Error('Airports not found');
            }

            const params: FlightSearchParams = {
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
            };

            searchFlights(params);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            setError(errorMessage);
        }
    };

    useEffect(() => {
        if (formValues.origin && formValues.destination) {
            findFlights();
        }
    }, [formValues.origin, formValues.destination]);

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
        handleChangeSelectNumbersAdults,
        handleChangeSelectNumbersSeniors
    };
};

export default useFlightSearchForm;
