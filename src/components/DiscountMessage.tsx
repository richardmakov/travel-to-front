import { Box, Typography } from '@mui/material'

export default function DiscountMessage() {


    return (
        <Box sx={{ backgroundColor: '#E74C3C ', width: '100%', padding: '16px',gap:3, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>
            <Typography variant='h6'>🎉 Special Offer! 🎉</Typography><Typography sx={{ whiteSpace: 'nowrap', fontStyle: 'italic', fontSize: '1.1rem' }}>For every child, enjoy a 5% discount on all purchases! Act fast, this offer won't last long.</Typography>
        </Box>
    );
}
