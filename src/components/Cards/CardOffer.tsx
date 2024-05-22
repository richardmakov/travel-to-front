
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import { OffertType } from '../../types';
import { NavLink } from 'react-router-dom';
import useBadge from '../../hooks/useBadge';

interface CardOfferProps {
    oferta: OffertType
}

export default function CardOffer({ oferta }: CardOfferProps) {
    const { selectedBadge } = useBadge();

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
    };
    return (
        <NavLink to={`/gallery/${oferta.id}`} style={linkStyles}>
            <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
                <Box
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        backgroundImage: `url(${oferta.image})`,
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
                        {oferta.title}
                    </Typography>
                    <Box sx={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                        <Box sx={{ backgroundColor: '#00A9FF', px: 2, borderRadius: '4px', display: 'inline-block', mr: 1 }}>
                            <Typography variant="body1" component="div" sx={{ fontSize: '0.8rem', fontWeight: '100', textAlign: 'center', color: 'white' }}>
                                From
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                                {selectedBadge.symbol === 'EUR' ? oferta.priceEUR : oferta.priceUSD}
                            </Typography>
                        </Box>
                        <Box sx={{ backgroundColor: 'white', borderRadius: '4px', display: 'inline-block', px: 1 }}>
                            <ArrowForwardIcon sx={{ color: '#00A9FF' }} />
                        </Box>
                    </Box>
                </Box>
            </Card>
        </NavLink>

    );
}