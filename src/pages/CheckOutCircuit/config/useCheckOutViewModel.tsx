import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { SelectChangeEvent } from '@mui/material';
import useBookingStore from '../../../stores/bookingStore';
import { useParams } from 'react-router-dom';
import { ofertasViajes } from '../../Home/components/data/offerts';
import useBadge from '../../../hooks/useBadge';
import useAuthStore from '../../../stores/authStore';
export interface IFormInputs {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    passport: string;
    children: boolean;
}

export interface IPaymentFields {
    paymentType: string;
    cardNumber: string;
    cvv: string;
    expirationDate: string;
    cardHolder: string;
}

export const useCheckOutViewModel = () => {

    const [numAdults, setNumAdults] = useState<number>(1);
    const [numChildren, setNumChildren] = useState<number>(0);

    const handleAdultsChange = (e: SelectChangeEvent<number>) => {
        setNumAdults(e.target.value as number);
    };

    const handleChildrenChange = (e: SelectChangeEvent<number>) => {
        setNumChildren(e.target.value as number);
    };

    useEffect(() => {

        localStorage.setItem('numAdults', JSON.stringify(numAdults));
    }, [numAdults]);

    useEffect(() => {
        localStorage.setItem('numChildren', JSON.stringify(numChildren));
    }, [numChildren]);

    const [activeStep, setActiveStep] = React.useState(0);
    const [formInputs, setFormInputs] = React.useState<IFormInputs[]>(() => {
        return Array.from({ length: numAdults + numChildren }, () => ({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            passport: '',
            children: false
        }));
    });

    const [errors, setErrors] = React.useState<Partial<IFormInputs>[]>([]);
    const [errors2, setErrors2] = React.useState<Partial<IPaymentFields>>({});

    const validate = (): boolean => {
        const newErrors: Partial<IFormInputs>[] = formInputs.map(() => ({}));

        const nameRegex = /^[a-zA-Z\s]+$/;
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
        const passportRegex = /^[a-zA-Z0-9]+$/;

        formInputs.forEach((formInput, index) => {
            if (!formInput.firstName) {
                newErrors[index].firstName = 'First name is required';
            } else if (!nameRegex.test(formInput.firstName)) {
                newErrors[index].firstName = 'Invalid characters. Only letters and spaces are allowed.';
            }

            if (!formInput.lastName) {
                newErrors[index].lastName = 'Last name is required';
            } else if (!nameRegex.test(formInput.lastName)) {
                newErrors[index].lastName = 'Invalid characters. Only letters and spaces are allowed.';
            }

            if (!formInput.dateOfBirth) {
                newErrors[index].dateOfBirth = 'Date of birth is required';
            } else if (!dobRegex.test(formInput.dateOfBirth)) {
                newErrors[index].dateOfBirth = 'Invalid date of birth format. Please use YYYY-MM-DD.';
            }

            if (!formInput.passport) {
                newErrors[index].passport = 'Passport is required';
            } else if (!passportRegex.test(formInput.passport)) {
                newErrors[index].passport = 'Invalid characters. Only letters and numbers are allowed for passport.';
            }
        });

        setErrors(newErrors);

        return newErrors.every(error => Object.keys(error).length === 0);
    };

    const validatePaymentFields = (): boolean => {
        let valid = true;
        const newErrors2: Partial<Record<string, string>> = {};

        if (paymentType === 'creditCard') {
            if (!cardNumber.trim()) {
                newErrors2.cardNumber = 'Card number is required';
                valid = false;
            }

            if (!cvv.trim()) {
                newErrors2.cvv = 'CVV is required';
                valid = false;
            }

            if (!expirationDate.trim()) {
                newErrors2.expirationDate = 'Expiration date is required';
                valid = false;
            }

            if (!cardHolder.trim()) {
                newErrors2.cardHolder = 'Card holder name is required';
                valid = false;
            }
        }

        setErrors2(newErrors2);

        return valid;
    };

    const [paymentType, setPaymentType] = React.useState('creditCard');
    const [cardNumber, setCardNumber] = React.useState('');
    const [cvv, setCvv] = React.useState('');
    const [expirationDate, setExpirationDate] = React.useState('');
    const [cardHolder, setCardHolder] = React.useState('');
    const { id } = useParams();
    const {createBooking} = useBookingStore();
    const oferta = ofertasViajes.find(oferta => oferta.id === id);
    const { selectedBadge } = useBadge();
    const{user}= useAuthStore();
    const handleNext = () => {
        if (activeStep === 0) {
            if (validate()) {
                setActiveStep(activeStep + 1);
            }
        }

        if (activeStep === 1) {
            if (validatePaymentFields()) {
                setActiveStep(activeStep + 1);
            }
        }

        if (activeStep === 2) {
            setActiveStep(activeStep + 1);

            if(oferta){
                const travel = {
                    id: parseInt(numberId),
                    destination: oferta.title,
                    departureDate: oferta.departureDate,
                    returnDate: oferta.returnDate
                }
                const passengers = formInputs.map((formInput) => ({
                    id: parseInt(numberId),
                    name: `${formInput.firstName} ${formInput.lastName}`,
                    passportNumber: formInput.passport
                }));
                const newBooking = {
                    id: parseInt(numberId),
                    trip: travel,
                    passengers,
                    payment: {
                        id: parseInt(numberId),
                        paymentMethod: paymentType,
                        amount: (
                            (selectedBadge.symbol === 'EUR' ? Number(oferta.priceEUR.replace('€', '')) : Number(oferta.priceUSD.replace('$', ''))) * numAdults +
                            (selectedBadge.symbol === 'EUR' ? Number(oferta.priceEUR.replace('€', '')) : Number(oferta.priceUSD.replace('$', ''))) * numChildren
                        ),
                        paymentDate: dayjs().format('YYYY-MM-DD')
                    }, 
                    user: user
                };

                console.log(newBooking)

                createBooking(newBooking);
            }
            
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleInputChange = (index: number) => (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        const updatedFormInputs = [...formInputs];
        updatedFormInputs[index] = { ...updatedFormInputs[index], [name]: value };

        setFormInputs(updatedFormInputs);

    };

    const handleDateChange = (e: dayjs.Dayjs | null, index: number) => {
        const formattedDate = e ? e.format('YYYY-MM-DD') : '';

        const updatedFormInputs = [...formInputs];
        updatedFormInputs[index] = {
            ...updatedFormInputs[index],
            dateOfBirth: formattedDate
        };

        setFormInputs(updatedFormInputs);

        const updatedErrors = [...errors];
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!formattedDate) {
            updatedErrors[index] = { ...updatedErrors[index], dateOfBirth: 'Date of birth is required' };
        } else if (!dobRegex.test(formattedDate)) {
            updatedErrors[index] = { ...updatedErrors[index], dateOfBirth: 'Invalid date of birth format. Please use YYYY-MM-DD.' };
        } else {
            if (updatedErrors[index]) {
                delete updatedErrors[index].dateOfBirth;
            }
        }

        setErrors(updatedErrors);
    };

    const generateBookingNumber = () => {
        const numbers = '0123456789';
        const length = 8;
        let bookingNumber = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            bookingNumber += numbers[randomIndex];
        }
        return bookingNumber;
    };
    const numberId = generateBookingNumber();

    return {
        formInputs,
        handleInputChange,
        activeStep,
        setActiveStep, handleDateChange, numAdults, numChildren, handleAdultsChange, handleChildrenChange,numberId,
        paymentType, setPaymentType, cardNumber, setCardNumber, cvv, setCvv, expirationDate, setExpirationDate, cardHolder, setCardHolder, handleNext, handleBack, errors, errors2
    }
}
