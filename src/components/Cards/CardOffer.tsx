
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import { OffertType } from '../../types';


interface CardOfferProps {
    trip: OffertType
    selectedBadge: {
        name: string;
        symbol: string;
        image: string;
    };
}

export default function CardOffer({ trip, selectedBadge }: CardOfferProps) {

    return (
        <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
            <Box
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    backgroundImage: `url(${trip.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    transition: 'transform 0.3s ease-in-out',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
            >
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '2rem', fontWeight: '100', position: 'absolute', bottom: '20px', left: '20px' }}>
                    {trip.destination}
                </Typography>
                <Box sx={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                    <Box sx={{ backgroundColor: '#00A9FF', px: 2, borderTopRightRadius: '4px', borderTopLeftRadius: '4px', display: 'inline-block' }}>
                        <Typography variant="body1" component="div" sx={{ fontSize: '0.8rem', fontWeight: '100', textAlign: 'center', color: 'white' }}>
                            From
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            {selectedBadge.symbol === 'EUR' ? trip.price_eur : trip.price_usd}
                        </Typography>
                    </Box>
                    <Box sx={{ backgroundColor: 'white', borderBottomRightRadius: '4px', borderBottomLeftRadius:'4px', display: 'flex', justifyContent:'center' }}>
                            <ArrowForwardIcon sx={{ color: '#00A9FF' }} />
                    </Box>
                </Box>
            </Box>
        </Card>

    );
}