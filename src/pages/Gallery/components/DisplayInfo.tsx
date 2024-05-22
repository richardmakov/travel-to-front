import { Box, Button, Card, Divider, Grid } from '@mui/material'
import { ofertasViajes } from '../../Home/components/data/offerts'
import { NavLink, useParams } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import useBadge from '../../../hooks/useBadge';

export default function DisplayInfo() {

    const StyledImage = styled('img')({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.10)',
        },
    });

    const { id } = useParams();
    const { selectedBadge } = useBadge();
    const oferta = ofertasViajes.find(oferta => oferta.id === id);
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
                The best of {oferta?.title}
            </Box>
            <Box
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    backgroundImage: `url(${oferta?.dir}/expo.jpg)`,
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
                <Typography variant='body1' sx={{ fontWeight: 'bold', mx: 1 }}>July 10, 2024 - July 20, 2024</Typography>
            </Box>

            <Box sx={{ color: '#666', textAlign: 'center', my: 2 }}>
                <Typography variant='h5' sx={{ fontWeight: '300' }}>
                    Discover the best of {oferta?.title ?? 'this destination'} and enjoy a few days of relaxation in the beach area of your choice
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: '100', mt: 2 }}>
                    Visiting Bangkok, River Kwai, Ayutthaya, Lopburi, Phitsanuloke, Sukhothai, Chiang Rai, Chiang Mai, P.N. Doi Inthanon and beaches, all with Premium Vip services
                </Typography>
            </Box>

            <Box sx={{ color: '#666', textAlign: 'center', mb: 2 }}>
                <Typography variant='h5' sx={{ fontWeight: '300' }}>Gallery</Typography>
                <Divider sx={{ width: '50%', mx: 'auto', my: 2 }} />
            </Box>

            <Box sx={{ maxWidth: '100%', my: 3 }}>
                <Grid container spacing={1} justifyContent="center">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
                            <Card sx={{ maxWidth: 500, height: '100%' }}>
                                <StyledImage
                                    src={`${oferta?.dir}/${index + 1}.jpg`}
                                    alt={`Imagen ${index + 1}`}
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ color: '#666', textAlign: 'center', my: 2 }}>
                <Typography variant='h5' sx={{ fontWeight: '300' }}>Trip to {oferta?.title}</Typography>
                <Typography variant='body1' sx={{ fontWeight: '100', mt: 2 }}>
                    Embark on an enchanting journey to Thailand, a country renowned for its warm hospitality, rich culture, and breathtaking scenery. Nestled in the heart of Southeast Asia, Thailand offers an array of experiences that captivate travelers from around the globe.
                </Typography>
                {/* Rest of your content */}
            </Box>

            <Box sx={{ color: '#666', textAlign: 'center', my: 2 }}>
                <Typography variant='h5' sx={{ fontWeight: '300' }}>Purchase Summary of Trip to {oferta?.title}</Typography>
                <Box sx={{ color: 'white', fontWeight: 'bold', backgroundColor: '#99CCFF', borderRadius: '1rem', p: 2, mt: 2 }}>
                    <Typography variant="h6">Your trip to {oferta?.title} is ready to be booked!</Typography>
                    <Typography variant="subtitle1">Departure Date: July 10, 2024</Typography>
                    <Typography variant="subtitle1">Duration: 10 days</Typography>
                    <Typography variant="subtitle1">Total Price: {selectedBadge.symbol === 'EUR' ? (oferta?.priceEUR) : (oferta?.priceUSD)}</Typography>
                    <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
                        <NavLink to={`/checkout/circuit/${oferta?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Book Now
                        </NavLink>
                    </Button>
                </Box>
            </Box>

        </Box >
    )
}
