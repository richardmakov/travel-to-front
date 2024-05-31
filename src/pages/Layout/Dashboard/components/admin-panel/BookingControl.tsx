import { Container, Grid, Typography } from '@mui/material'
import useBookingStore from '../../../../../stores/bookingStore'

import TableTripView from './components/TableBookings/TableTrip/TableTripView'
import TableFlightView from './components/TableBookings/TableFlights/TableFlightView'

export default function BookingControl() {

  const { bookings, error } = useBookingStore()
  
  return (
    <Container>
      <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ color: '#7F8C8D' }}>Trips</Typography>
          <TableTripView bookings={bookings} error={error} />
        </Grid>
        <Grid item sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ color: '#7F8C8D' }}>Flights</Typography>
          <TableFlightView bookings={bookings} error={error} />
        </Grid>
      </Grid>
    </Container>
  )
}
