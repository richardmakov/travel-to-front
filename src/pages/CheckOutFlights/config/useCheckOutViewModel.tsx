import React from 'react'

export interface IFormInputs {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    saveAddress?: boolean;
}

export interface IPaymentFields {
    paymentType: string;
    cardNumber: string;
    cvv: string;
    expirationDate: string;
    cardHolder: string;
}

export const useCheckOutViewModel = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formInputs, setFormInputs] = React.useState<IFormInputs>({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const [errors, setErrors] = React.useState<Partial<IFormInputs>>({});
    const [errors2, setErrors2] = React.useState<Partial<IPaymentFields>>({});

    const validate = (): boolean => {
        const newErrors: Partial<IFormInputs> = {};

        const nameRegex = /^[a-zA-Z\s]+$/;
        const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
        if (formInputs.firstName && !nameRegex.test(formInputs.firstName)) {
            newErrors.firstName = 'Invalid characters. Only letters and spaces are allowed.';
        }

        if (formInputs.lastName && !nameRegex.test(formInputs.lastName)) {
            newErrors.lastName = 'Invalid characters. Only letters and spaces are allowed.';
        }

        if (formInputs.city && !nameRegex.test(formInputs.city)) {
            newErrors.city = 'Invalid characters. Only letters and spaces are allowed.';
        }

        if (formInputs.state && !nameRegex.test(formInputs.state)) {
            newErrors.state = 'Invalid characters. Only letters and spaces are allowed.';
        }

        if (formInputs.country && !nameRegex.test(formInputs.country)) {
            newErrors.country = 'Invalid characters. Only letters and spaces are allowed.';
        }
        
        if (formInputs.zip && !zipRegex.test(formInputs.zip)) {
            newErrors.zip = 'Invalid ZIP code format';
        }

        if (!formInputs.firstName) newErrors.firstName = 'First name is required';
        if (!formInputs.lastName) newErrors.lastName = 'Last name is required';
        if (!formInputs.address1) newErrors.address1 = 'Address 1 is required';
        if (!formInputs.city) newErrors.city = 'City is required';
        if (!formInputs.state) newErrors.state = 'State is required';
        if (!formInputs.zip) newErrors.zip = 'ZIP code is required';
        if (!formInputs.country) newErrors.country = 'Country is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
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
        }

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormInputs({
            ...formInputs,
            [name]: value,
        });

        if (name in errors) {
            if (errors[name as keyof IFormInputs]) {
                setErrors({ ...errors, [name]: '' });
            }
        }
    };

    return {
        formInputs,
        handleInputChange,
        activeStep,
        setActiveStep,
        paymentType, setPaymentType, cardNumber, setCardNumber, cvv, setCvv, expirationDate, setExpirationDate, cardHolder, setCardHolder, handleNext, handleBack, errors, errors2
    }
}
