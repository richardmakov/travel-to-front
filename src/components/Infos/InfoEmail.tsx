import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { ChangeEvent, FormEvent, useState } from 'react';
import useAlertSnackbar from '../Snackbar/useSnackbar';

export default function InfoEmail() {
    const [email, setEmail] = useState<string>('');
    const {handleClickVariant} = useAlertSnackbar();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            handleClickVariant('Email not valid', 'error');
            return;
        }

        setEmail('');
    };

    const validateEmail = (email: string) => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <Box sx={{ backgroundColor: '#00A9FF', color: '#FFF', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 6 }}>
            <Typography variant="h5" sx={{ color: '#FFF', mb: '1rem', fontSize: { xs: '20px', sm: '24px' } }}>
                Grandes viajes en tu bandeja de entrada
            </Typography>
            <Typography sx={{ color: '#FFF', marginBottom: '2rem', fontSize: { xs: '16px', sm: '18px' }, textAlign: 'center', px: { xs: 2, sm: 0 } }}>
                Grandes ideas para tus próximos viajes, los mejores destinos y excelentes ofertas, tan solo tienes que darte de alta.
            </Typography>
            <FormControl sx={{ width: '100%' }} component="form" onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center' }}>

                    <Box sx={{ width: { xs: '100%', sm: '40%' }, mb: { xs: 2, sm: 0 }, mr: { xs: 0, sm: '10px' } }}>

                        <TextField
                            fullWidth
                            id="email"
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                            InputLabelProps={{ shrink: false }}
                            placeholder='Email'
                            sx={{
                                backgroundColor: '#FFF',
                                borderRadius: '0.3rem',
                            }}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        type='submit'
                        sx={{
                            backgroundColor: '#66CC33',
                            '&:hover': {
                                backgroundColor: '#5CB85C',
                            },
                        }}
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>
                </Box>
                <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
                    <Typography variant="body2" sx={{ width: '100%', textAlign: 'center' }}>
                        Autorizo el uso de mis datos para todos los fines detallados en la política de privacidad salvo en aquellos supuestos que nos indique lo contrario
                    </Typography>
                </Box>
            </FormControl>
        </Box>


    );
}