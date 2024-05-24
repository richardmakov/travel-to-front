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
import { PaletteMode, SelectChangeEvent } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import PassengersForm from './PassengersForm';
import Info from './Info';
import InfoMobile from './InfoMobile';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { NavLink, useParams } from 'react-router-dom';
import { ofertasViajes } from '../../Home/components/data/offerts';
import useBadge from '../../../hooks/useBadge';

import { IFormInputs, IPaymentFields } from './useCheckOutViewModel';
import dayjs from 'dayjs';
const steps = ['Choose Passengers', 'Payment details', 'Review your order'];

interface CheckoutProps {
    numAdults: number;
    numChildren: number;
    handleAdultsChange: (e: SelectChangeEvent<number>) => void;
    handleChildrenChange: (e: SelectChangeEvent<number>) => void;
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
    handleNext: () => void;
    activeStep: number;
    errors: Partial<IFormInputs>[];
    errors2: Partial<IPaymentFields>;
}

function getStepContent(numAdults: number,
    numChildren: number,
    handleAdultsChange: (e: SelectChangeEvent<number>) => void,
    handleChildrenChange: (e: SelectChangeEvent<number>) => void, handleDateChange: (e: dayjs.Dayjs | null, index: number) => void, errors2: Partial<IPaymentFields>, errors: Partial<IFormInputs>[], step: number, handleInputChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, formInputs: IFormInputs[], paymentType: string, setPaymentType: React.Dispatch<React.SetStateAction<string>>, cardNumber: string, setCardNumber: React.Dispatch<React.SetStateAction<string>>, cvv: string, setCvv: React.Dispatch<React.SetStateAction<string>>, expirationDate: string, setExpirationDate: React.Dispatch<React.SetStateAction<string>>, cardHolder: string, setCardHolder: React.Dispatch<React.SetStateAction<string>>) {
    switch (step) {
        case 0:
            return <PassengersForm numAdults={numAdults} numChildren={numChildren} handleAdultsChange={handleAdultsChange} handleChildrenChange={handleChildrenChange} handleDateChange={handleDateChange} handleInputChange={handleInputChange} formInputs={formInputs} errors={errors} />;
        case 1:
            return <PaymentForm errors2={errors2} paymentType={paymentType} setPaymentType={setPaymentType} cardNumber={cardNumber} setCardNumber={setCardNumber} cvv={cvv} setCvv={setCvv} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder} />;
        case 2:
            return <Review numAdults={numAdults} numChildren={numChildren} paymentType={paymentType} cardNumber={cardNumber} expirationDate={expirationDate} cardHolder={cardHolder} />;
        default:
            throw new Error('Unknown step');
    }
}


export default function Checkout({ numAdults, numChildren, handleAdultsChange, handleChildrenChange, handleDateChange, errors, errors2, handleInputChange, formInputs, paymentType, setPaymentType, cardNumber, setCardNumber, cvv, setCvv, expirationDate, setExpirationDate, cardHolder, setCardHolder, handleBack, handleNext, activeStep }: CheckoutProps) {
    const [mode] = React.useState<PaletteMode>('light');
    const defaultTheme = createTheme({ palette: { mode } });

    const { id } = useParams();
    const { selectedBadge } = useBadge();

    const applyIVA = (price: number): number => {
        return price * 1.10;
    }

    const total = () => {
        const priceMatch = currency().match(/\d+(\.\d+)?/);
        if (!priceMatch) {
            return "Price not available";
        }

        const price = parseFloat(priceMatch[0]);
        if (isNaN(price)) {
            return "Price not available";
        }

        const priceWithIVA = applyIVA(price);
        const currencySymbol = selectedBadge.symbol === 'USD' ? 'USD' : 'EUR';

        return `${priceWithIVA.toFixed(2)} ${currencySymbol} (Taxes included)`;
    }

    const currency = () => {
        const oferta = ofertasViajes.find(oferta => oferta.id === id);
        if (!oferta) {
            return "Offer not found";
        }

        if (selectedBadge.symbol === 'USD') {
            return `${oferta.priceUSD.toString()}`;
        } else {
            return `${oferta.priceEUR?.toString()}` || "Price not available";
        }
    }


    const generateBookingNumber = () => {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const length = 8;
        let bookingNumber = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            bookingNumber += chars[randomIndex];
        }
        return bookingNumber;
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
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
                            alignItems: 'end',
                            height: 150,
                        }}
                    >
                        <NavLink to={'/'}>
                            <Button
                                startIcon={<ArrowBackRoundedIcon />}
                                component="a"
                                sx={{ ml: '-8px', p: 1, px: 2 }}
                            >
                                Back
                            </Button>
                        </NavLink>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: 500,
                        }}
                    >
                        <Info totalPrice={activeStep >= 2 ? total() : currency()} />
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
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                flexGrow: 1,
                                height: 0,
                            }}
                        >
                            <Stepper
                                id="desktop-stepper"
                                activeStep={activeStep}
                                sx={{
                                    width: '100%',
                                    height: 100,
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
                                    {activeStep >= 2 ? total() : currency()}
                                </Typography>
                            </div>
                            <InfoMobile totalPrice={activeStep >= 2 ? total() : currency()} />
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
                                    <strong> {generateBookingNumber()}</strong>. We have emailed your booking
                                    confirmation and will update you once its ready.
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
                                {getStepContent(numAdults, numChildren, handleAdultsChange, handleChildrenChange, handleDateChange, errors2, errors, activeStep, handleInputChange, formInputs, paymentType, setPaymentType, cardNumber, setCardNumber, cvv, setCvv, expirationDate, setExpirationDate, cardHolder, setCardHolder)}
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
                                        mb: '60px',
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