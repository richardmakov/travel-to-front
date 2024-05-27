import { Box, Grid, Typography } from '@mui/material'
import CardOffer from '../../../components/Cards/CardOffer'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import useTripStore from '../../../stores/tripStore';

export default function NewOfertsDisplay() {
    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
    };

    const { trips, fetchTrips } = useTripStore();
    
    useEffect(() => {
        fetchTrips();
    }, [fetchTrips]);
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', mt: { xs: 5, md: 7 }, mb: 2, px: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
                    Discover our Offers
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {trips.map((trip, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <NavLink to={`/gallery/${trip.id}`} style={linkStyles}>
                                <CardOffer trip={trip} />
                            </NavLink>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
