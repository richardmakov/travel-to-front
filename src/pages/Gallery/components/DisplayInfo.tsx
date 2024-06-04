import { Box, Button, Card, Divider, Grid } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import useAlertSnackbar from '../../../components/Snackbar/useSnackbar';
import useAuthStore from '../../../stores/authStore';
import useTripStore from '../../../stores/tripStore';

interface DisplayInfoProps {
    selectedBadge: {
        name: string;
        symbol: string;
        image: string;
    };
}

export default function DisplayInfo({selectedBadge}: DisplayInfoProps) {

    const StyledImage = styled('img')({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.10)',
        },
    });

    const { trips } = useTripStore();
    const { id } = useParams();
    const trip = trips.find(trip => trip.id.toString() === id);
    const { isLogged } = useAuthStore();
    const { handleClickVariant } = useAlertSnackbar();

    const handleClickBookNow = () => {
        handleClickVariant('You have to be logged', 'info')
    }
    
    return (
        <Box sx={{ maxWidth: '100%', margin: 'auto', px: 2 }}>
            <Box
                sx={{
                    color: '#666',
                    fontWeight: 'bold',
                    height: '40px',
                    backgroundColor: '#f6f6f6',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                The best of {trip?.destination}
            </Box>
            <Box
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    backgroundImage: `url(${trip?.images_route}/expo.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    mb: 2,
                }}
            />
            <Box
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    height: '50px',
                    backgroundColor: '#215eca',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <HistoryIcon />
                <Typography variant='body1' sx={{ fontWeight: 'bold', mx: 1 }}>10 Days, 9 nights</Typography>
                <ConnectingAirportsIcon />
                <Typography variant='body1' sx={{ fontWeight: 'bold', mx: 1 }}>{trip?.departure_date} - {trip?.return_date}</Typography>
            </Box>

            <Box sx={{ color: '#666', textAlign: 'center', my: 6 }}>
                <Typography variant='h5' sx={{ fontWeight: '400' }}>
                    Explore the beauty of {trip?.destination ?? 'this destination'} and relax with a few days of downtime
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: '100', mt: 1 }}>
                    {trip?.visit}
                </Typography>
            </Box>

            <Box sx={{ color: '#666', textAlign: 'center'}}>
                <Typography variant='h5' sx={{ fontWeight: '400' }}>Gallery</Typography>
                <Divider sx={{ width: '65%', mx: 'auto', my: 2 }} />
            </Box>


            <Grid container spacing={2} justifyContent="center">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4.1}>
                        <Card sx={{ height: '100%' }}>
                            <StyledImage
                                src={`${trip?.images_route}/${index + 1}.jpg`}
                                alt={`Imagen ${index + 1}`}
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ color: '#666', textAlign: 'center', my: 8, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h5' sx={{ fontWeight: '400' }}>Trip to {trip?.destination}</Typography>
                <Typography variant='body1' sx={{ fontWeight: '300', width: '70%', mt: 2, textAlign: 'center' }}>
                    {trip?.description}
                </Typography>
            </Box>

            <Box sx={{ color: '#666', textAlign: 'center', my: 2 }}>
                <Typography variant='h5' sx={{ fontWeight: '400' }}>Purchase Trip to {trip?.destination}</Typography>
                <Box sx={{ color: 'white', fontWeight: 'bold', backgroundColor: '#99CCFF', borderRadius: '1rem', p: 2, mt: 2 }}>
                    <Typography variant="h6">Your trip to {trip?.destination} is ready to be booked!</Typography>
                    <Typography variant="subtitle1">Departure Date: {trip?.departure_date}</Typography>
                    <Typography variant="subtitle1">Total Price: {selectedBadge.symbol === 'EUR' ? (trip?.price_eur) : (trip?.price_usd)}</Typography>
                    {isLogged ? (
                        <NavLink to={`/checkout/circuit/${trip?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
                                Book Now
                            </Button>
                        </NavLink>
                    ) : (
                        <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }} onClick={handleClickBookNow}>
                            Book Now
                        </Button>
                    )}


                </Box>
            </Box>

        </Box >
    )
}
