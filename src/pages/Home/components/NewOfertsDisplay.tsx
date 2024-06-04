import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import CardOffer from '../../../components/Cards/CardOffer'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import useTripStore from '../../../stores/tripStore';

interface NewOfertsDisplayProps {
    selectedBadge: {
        name: string;
        symbol: string;
        image: string;
    };
}

export default function NewOfertsDisplay({selectedBadge}: NewOfertsDisplayProps) {
    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
    };

    const { trips, isLoading, error, fetchTrips } = useTripStore();

    useEffect(() => {
        fetchTrips();
    }, [fetchTrips]);

    if (isLoading) return <div style={{ display: 'flex', justifyContent: 'center', fontSize: '3rem', color: 'orange' }}><CircularProgress /></div>;
    if (error) return <div style={{ display: 'flex', justifyContent: 'center', fontSize: '3rem', color: 'red' }}>Error: {error}</div>;
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', mt: { xs: 5, md: 5 }, mb: 2, px: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
                    Discover our Offers
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {trips.map((trip, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <NavLink to={`/gallery/${trip.id}`} style={linkStyles} state={selectedBadge}>
                                <CardOffer trip={trip} selectedBadge={selectedBadge}/>
                            </NavLink>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
