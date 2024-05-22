
import { Box, Grid, Typography } from '@mui/material'

import Carousel from 'react-material-ui-carousel'
import CardActivity from '../Cards/CardActivity'

export default function CarrouselActivities() {

    const chunkArray = <T extends any>(myArray: T[], chunkSize: number) => {
        const chunks: T[][] = [];
        for (let i = 0; i < myArray.length; i += chunkSize) {
            chunks.push(myArray.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <Box sx={{ backgroundColor: '#FFFF99', p: 8 }}>
            <Box sx={{ maxWidth: '70%', margin: '0 auto', mb: 7 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '2rem' }}>
                    Actividades más populares
                </Typography>
                <Carousel
                    autoPlay={true}
                    stopAutoPlayOnHover={false}
                    interval={5000} //
                    navButtonsProps={{
                        style: {
                            display: 'none'
                        }
                    }}
                    animation="slide"
                >
                    {chunkArray(items, 4).map((chunk, index) => (
                        <Grid container spacing={2} key={index}>
                            {chunk.map((item) => (
                                <Grid item xs={12} sm={6} md={3} key={item}>
                                    <CardActivity />
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Carousel>

            </Box>
        </Box>
    )
}
