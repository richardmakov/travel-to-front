import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import PassengersForm from './PassengersForm';
import Info from './Info';
import InfoMobile from './InfoMobile';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { NavLink, useLocation } from 'react-router-dom';
import {Flight} from './../../Display/components/index';
import { IFormInputs, IPaymentFields } from './useCheckOutViewModel';
import dayjs from 'dayjs';
import useBookingStore from '../../../stores/bookingStore';
import useAuthStore from '../../../stores/authStore';
const steps = ['Passengers', 'Payment details', 'Review and Pay'];

interface CheckoutProps {
    numberId: string;
    validate: () => boolean;
    validatePaymentFields: () => boolean;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    handleDateChange: (e: dayjs.Dayjs | null, index: number) => void;
    handleInputChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formInputs: IFormInputs[];
    paymentType: string;
    setPaymentType: React.Dispatch<React.SetStateAction<string>>;
    cardNumber: string;
    setCardNumber: React.Dispatch<React.SetStateAction<string>>;
    cvv: string;
    setCvv: React.Dispatch<React.SetStateAction<string>>;
    expirationDate: string;
    setExpirationDate: React.Dispatch<React.SetStateAction<string>>;
    cardHolder: string;
    setCardHolder: React.Dispatch<React.SetStateAction<string>>;
    handleBack: () => void;
    activeStep: number;
    errors: Partial<IFormInputs>[];
    errors2: Partial<IPaymentFields>;
}

function getStepContent(handleDateChange: (e: dayjs.Dayjs | null, index: number) => void, errors2: Partial<IPaymentFields>, errors: Partial<IFormInputs>[], step: number, handleInputChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, formInputs: IFormInputs[], paymentType: string, setPaymentType: React.Dispatch<React.SetStateAction<string>>, cardNumber: string, setCardNumber: React.Dispatch<React.SetStateAction<string>>, cvv: string, setCvv: React.Dispatch<React.SetStateAction<string>>, expirationDate: string, setExpirationDate: React.Dispatch<React.SetStateAction<string>>, cardHolder: string, setCardHolder: React.Dispatch<React.SetStateAction<string>>) {
    switch (step) {
        case 0:
            return <PassengersForm handleDateChange={handleDateChange} handleInputChange={handleInputChange} formInputs={formInputs} errors={errors} />;
        case 1:
            return <PaymentForm errors2={errors2} paymentType={paymentType} setPaymentType={setPaymentType} cardNumber={cardNumber} setCardNumber={setCardNumber} cvv={cvv} setCvv={setCvv} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder} />;
        case 2:
            return <Review paymentType={paymentType} cardNumber={cardNumber} expirationDate={expirationDate} cardHolder={cardHolder} />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout({ numberId, validate, validatePaymentFields, setActiveStep, handleDateChange, errors, errors2, handleInputChange, formInputs, paymentType, setPaymentType, cardNumber, setCardNumber, cvv, setCvv, expirationDate, setExpirationDate, cardHolder, setCardHolder, handleBack, activeStep }: CheckoutProps) {
    const [mode] = React.useState<PaletteMode>('light');
    const defaultTheme = createTheme({ palette: { mode } });
    const location = useLocation();
    const { state } = location;
    const flights = state as Flight;

    const applyIVA = (price: number): number => {
        return price * 1.10;
    }

    const calculateTotalCost = (flights: Flight): string => {
        const totalPrice = flights.purchaseLinks[0].totalPrice;
        const totalPriceWithIVA = applyIVA(totalPrice);
        return totalPriceWithIVA.toFixed(2);
    }
    const { createBooking } = useBookingStore();
    const{user}= useAuthStore();
    const userEntry = {
        id: user?.id,
        token: user?.token,
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        phone: user?.phone,
        idCard: user?.idCard,
        passport: user?.passport,
        country: user?.country,
        date: user?.date
    }
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
            if (flights) {
                const passengers = formInputs.map((formInput) => ({
                    name: `${formInput.firstName} ${formInput.lastName}`,
                    passportNumber: formInput.passport
                }));
                

            flights.segments[0].legs.forEach((leg) => {
                const booking = {
                    bookingNumber: numberId,
                    passengers: passengers,
                    payment:{
                        paymentMethod: paymentType,
                        amount: flights.purchaseLinks[0].totalPrice,
                        paymentDate: dayjs().format('YYYY-MM-DD'),
                    },
                    flight: {
                        arrival_airport: leg.destinationStationCode,
                        arrival_time: leg.arrivalDateTime,
                        departure_airport: leg.originStationCode,
                        departure_time: leg.departureDateTime,
                        flightNumber: leg.flightNumber.toString()
                    },
                    user: userEntry
                };
                console.log(booking)
                createBooking(booking);
            });
        }



    }
};

return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Grid container sx={{ height: { xs: '100%', sm: '100vh' } }}>
            <Grid
                item
                xs={12}
                sm={5}
                lg={6}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRight: { sm: 'none', md: '1px solid' },
                    borderColor: { sm: 'none', md: 'divider' },
                    alignItems: 'start',
                    pt: 4,
                    px: 10,
                    gap: 4,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',

                    }}
                >
                    <Button
                        startIcon={<ArrowBackRoundedIcon />}
                        component="a"
                        href="/"
                        sx={{ ml: '-8px', py: 1, px: 2 }}
                    >
                        Back
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '100%',
                    }}
                >
                    <Info />
                </Box>
            </Grid>
            <Grid
                item
                sm={12}
                md={7}
                lg={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    width: '100%',
                    backgroundColor: { xs: 'transparent', sm: 'background.default' },
                    alignItems: 'start',
                    pt: { xs: 2, sm: 4 },
                    px: { xs: 2, sm: 10 },
                    gap: { xs: 4, md: 8 },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { sm: 'space-between', md: 'flex-end' },
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: { sm: '100%', md: 600 },
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <NavLink to={'/'}>
                            <Button
                                startIcon={<ArrowBackRoundedIcon />}
                                sx={{ alignSelf: 'start' }}
                            >
                                Back
                            </Button>
                        </NavLink>
                        {/*         <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            flexGrow: 1,
                            height: 50,
                        }}
                    >
                        {/*      <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                        <Stepper
                            id="desktop-stepper"
                            activeStep={activeStep}
                            sx={{
                                width: '100%',
                                height: 50,
                            }}
                        >
                            {steps.map((label) => (
                                <Step
                                    sx={{
                                        ':first-of-type': { pl: 0 },
                                        ':last-child': { pr: 0 },
                                    }}
                                    key={label}
                                >
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Box>
                <Card
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        width: '100%',
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            ':last-child': { pb: 2 },
                        }}
                    >
                        <div>
                            <Typography variant="subtitle2" gutterBottom>
                                Selected products
                            </Typography>
                            <Typography variant="body1">
                                {activeStep >= 2 ? calculateTotalCost(flights) : calculateTotalCost(flights)}
                            </Typography>
                        </div>
                        <InfoMobile />
                    </CardContent>
                </Card>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        maxWidth: { sm: '100%', md: 600 },
                        maxHeight: '720px',
                        gap: { xs: 5, md: 'none' },
                    }}
                >
                    <Stepper
                        id="mobile-stepper"
                        activeStep={activeStep}
                        alternativeLabel
                        sx={{ display: { sm: 'flex', md: 'none' } }}
                    >
                        {steps.map((label) => (
                            <Step
                                sx={{
                                    ':first-of-type': { pl: 0 },
                                    ':last-child': { pr: 0 },
                                    '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                                }}
                                key={label}
                            >
                                <StepLabel
                                    sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                                >
                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <Stack spacing={2} useFlexGap>
                            <Typography variant="h1" ><img src="/airplane.png" alt='airplane' style={{ width: '50%' }} /></Typography>
                            <Typography variant="h5">Thank you for your payment!</Typography>
                            <Typography variant="body1" color="text.secondary">
                                Your book number is
                                <strong> {numberId}</strong>. We have emailed your flight
                                confirmation and you will see your boarding passes in your inbox.
                            </Typography>
                            <NavLink to={'/'}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        alignSelf: 'start',
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                >
                                    Go to home
                                </Button>
                            </NavLink>
                        </Stack>
                    ) : (
                        <React.Fragment>
                            {getStepContent(handleDateChange, errors2, errors, activeStep, handleInputChange, formInputs, paymentType, setPaymentType, cardNumber, setCardNumber, cvv, setCvv, expirationDate, setExpirationDate, cardHolder, setCardHolder)}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                                    justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
                                    alignItems: 'end',
                                    flexGrow: 1,
                                    gap: 1,
                                    pb: { xs: 12, sm: 0 },
                                    mt: { xs: 2, sm: 0 },
                                    mb: 4,
                                }}
                            >
                                {activeStep !== 0 && (
                                    <Button
                                        startIcon={<ChevronLeftRoundedIcon />}
                                        onClick={handleBack}
                                        variant="text"
                                        sx={{
                                            display: { xs: 'none', sm: 'flex' },
                                        }}
                                    >
                                        Previous
                                    </Button>
                                )}
                                {activeStep !== 0 && (
                                    <Button
                                        startIcon={<ChevronLeftRoundedIcon />}
                                        onClick={handleBack}
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            display: { xs: 'flex', sm: 'none' },
                                            mb: 4
                                        }}
                                    >
                                        Previous
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    endIcon={<ChevronRightRoundedIcon />}
                                    onClick={handleNext}
                                    sx={{
                                        width: { xs: '100%', sm: 'fit-content' },
                                        mb: 4
                                    }}
                                >
                                    {activeStep === steps.length - 1 ? 'Pay' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>
);
}