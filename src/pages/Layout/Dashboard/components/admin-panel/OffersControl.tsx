import { Container, Grid, Typography } from '@mui/material'
import useTripStore from '../../../../../stores/tripStore'
import TableOffersView from './components/TableOffers/TableOffersView'

export default function OffertsControl() {

  const {trips, isLoading, error} = useTripStore()

  return (
    <Container>
      <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ color: '#7F8C8D' }}>Trips</Typography>
          <TableOffersView trips={trips} loading={isLoading} error={error} />
        </Grid>
      </Grid>
    </Container>
  )
}
