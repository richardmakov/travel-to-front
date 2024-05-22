import { Box, Grid, Typography } from '@mui/material'
import CardOffer from '../../../components/Cards/CardOffer'
import { ofertasViajes } from './data/offerts'

export default function NewOfertsDisplay() {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', mt: { xs: 5, md: 7 }, mb: 2, px: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
                    Discover our Offers
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {ofertasViajes.map((oferta, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <CardOffer oferta={oferta} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* <Box sx={{backgroundColor: '#f0f0f0', py:10}}>
                <Box
                    sx={{
                        backgroundImage: 'url("https://d2l4159s3q6ni.cloudfront.net/resize/1280x146/filters:max_age(2604800):quality(65):format(webp)/s3/dam/photos/e6/bb/cd/41/0d6ec0c7ccf4d6c4557195dd43b4a372bed14710f42d08da7bfaba5a.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '110px',
                        maxWidth: '50%',
                        margin: '0 auto',

                    }}
                />
            </Box> */}
        </>
    )
}
