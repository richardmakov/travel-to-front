import { Box, Typography } from '@mui/material'

export default function DiscountMessage() {


    return (
        <Box
            sx={{
                backgroundColor: '#E74C3C',
                width: '100%',
                padding: '16px',
                gap: 3,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexDirection: { xs: 'column', sm: 'row' },
                textAlign: { xs: 'center', sm: 'left' }
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontSize: {
                        xs: '1rem',
                        sm: '1.25rem',
                        md: '1.25rem'
                    },
                    mb: { xs: 1, sm: 0 },
                    display: { xs: 'none', sm: 'none', md:'block' }
                }}
            >
                🎉 Special Offer! 🎉
            </Typography>
            <Typography
                sx={{
                    whiteSpace: 'nowrap',
                    fontStyle: 'italic',
                    fontSize: {
                        xs: '0.75rem',
                        sm: '0.95rem',
                        md: '1rem'
                    },
                    textAlign: { xs: 'center', sm: 'left' }
                }}
            >
                For every child, enjoy a 5% discount on all purchases! Act fast, this offer won't last long.
            </Typography>
        </Box>
    );
}
