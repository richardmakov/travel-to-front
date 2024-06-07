
import { Card, CardContent, Typography, Box, Avatar, Divider } from '@mui/material';
import formatDateTime from '../../../helper';
import { Flight } from '.';


interface CardFlightProps {
    flight: Flight;
}

const CardFlight = ({ flight }: CardFlightProps) => {
    return (

        <Box sx={{ mt: 10 }}>
            {flight && (
                <Card
                    sx={{
                        width: {xs:'90%',md:'50%'},
                        margin: 'auto',
                        boxShadow: 3,
                        marginBottom: 10,
                        borderRadius: 10,
                        backgroundColor: '#FFF',
                        transition: 'transform 0.3s ease-in-out',
                        cursor: 'pointer',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        }
                    }}
                >
                    <Box sx={{ backgroundColor: '#ADD8E6', width: '100%', padding: 3 }}>
                        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>
                            Boarding Pass
                        </Typography>
                    </Box>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: 2 }}>
                            {flight.segments[0].legs[0].operatingCarrier.logoUrl && (
                                <Avatar alt="logo" src={flight.segments[0].legs[0].operatingCarrier.logoUrl} style={{ width: 50, height: 50 }} />
                            )}
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', marginLeft: 2 }}>
                                    {flight.segments[0].legs[0].operatingCarrier.displayName}
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    {flight.segments[0].legs[0].operatingCarrier.code} {flight.segments[0].legs[0].flightNumber}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 2 }}>
                            <Typography component="div" variant="body1" sx={{ display: 'flex', color: '#555555' }}>
                                Departure:
                                <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', ml: 3, color: 'black' }}>
                                    {formatDateTime(flight.segments[0].legs[0].departureDateTime)}
                                </Typography>
                            </Typography>
                            <Typography component="div" variant="body1" sx={{ display: 'flex' }}>
                                From:
                                <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', ml: 3 }}>
                                    {flight.segments[0].legs[0].originStationCode}
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 2 }}>
                            <Typography component="div" variant="body1" sx={{ display: 'flex' }}>
                                Arrival:
                                <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', ml: 6 }}>
                                    {formatDateTime(flight.segments[0].legs[0].arrivalDateTime)}
                                </Typography>
                            </Typography>
                            <Typography component="div" variant="body1" sx={{ display: 'flex' }}>
                                To:
                                <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', ml: 3.5 }}>
                                    {flight.segments[0].legs[0].destinationStationCode}
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 2 }}>
                            <Typography component="div" variant="body1" sx={{ display: 'flex' }}>
                                Class:
                                <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', ml: 6.5 }}>
                                    {flight.segments[0].legs[0].classOfService}
                                </Typography>
                            </Typography>
                            <Typography component="div" variant="body1" sx={{ display: 'flex' }}>
                                Legs:
                                <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', ml: 5.5 }}>
                                    {flight.segments[0].legs.length}
                                </Typography>
                            </Typography>
                        </Box>
                        <Divider />
                        <Typography component="div" variant="body2" sx={{ display: 'flex', fontStyle: 'italic', fontWeight: 'bold' }}>
                            Boarding gate closes
                            <Typography component="span" variant="body2" sx={{ mx: 0.5, fontStyle: 'italic', color: 'red', fontWeight: 'bold' }}>
                                10 minutes
                            </Typography>
                            prior to departure time
                        </Typography>
                    </CardContent>
                    <Box sx={{ backgroundColor: '#ADD8E6', width: '100%', padding: 1 }}>
                        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>
                            Click on me to see more details
                        </Typography>
                    </Box>
                </Card>
            )}

        </Box>
    );
};

export default CardFlight;
