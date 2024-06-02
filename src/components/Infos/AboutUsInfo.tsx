import { Box, Grid, Typography } from '@mui/material'


export default function AbousUsInfo() {
  return (

    <Box sx={{ maxWidth: '100%', margin: '0 auto', p: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} sx={{ width: '60%', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" sx={{ color: '#333', marginBottom: '1rem', fontWeight: 400, textAlign: 'center' }}>
          TravelTO, your online travel agency
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontWeight: 300, textAlign: 'center' }}>
          Discover the tropical paradises of the Caribbean, the exclusivity of the islands of Bali, the tranquility of remote destinations in the Seychelles. Explore the secret corners of our peninsular coasts and islands, dive into the adventure of unexplored destinations in Africa, experience the thrill in the most exciting theme parks, sail to exotic destinations on a luxurious cruise... TravelTO is here to offer you a unique experience!
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontWeight: 300, textAlign: 'center' }}>
          We strive to make every trip you take with us unforgettable. With a wide range of offers, you will find what you are looking for at the best price. We offer exciting tours through Europe, epic trips to Asia, America, and Africa, as well as affordable flights and the best accommodations in major cities around the world, such as Tokyo, Sydney, New York, Buenos Aires, and more.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 300, textAlign: 'center' }}>
          We give you the opportunity to enjoy the summer on the stunning peninsular beaches, in the Canary and Balearic Islands, with the most competitive rates! And we cannot forget the charm of the Caribbean with destinations like Jamaica, Barbados, and the Bahamas. Still thinking about it? Don't miss the opportunity for a dream vacation with TravelTO!
        </Typography>
      </Grid>
    </Box>


  )
}
