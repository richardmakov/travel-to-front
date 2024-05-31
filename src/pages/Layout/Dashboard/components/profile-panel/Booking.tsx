import { Container, Grid, Typography } from "@mui/material";
import TableTripView from "./components/TableTrip/TableTripView";
import TableFlightView from "./components/TableFlights/TableFlightView";
import useTableViewModel from "./components/view-model/useTableViewModel";

export default function Booking() {
    const { booking, loading, error } = useTableViewModel()
    
    return (
        <Container>
            <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ mt: 6 }}>
                    <Typography variant="h4" sx={{ color: '#7F8C8D' }}>Trips</Typography>
                    <TableTripView booking={booking} loading={loading} error={error} />
                </Grid>
                <Grid item sx={{ mt: 6 }}>
                    <Typography variant="h4" sx={{ color: '#7F8C8D' }}>Flights</Typography>
                    <TableFlightView booking={booking} loading={loading} error={error} />
                </Grid>
            </Grid>
        </Container>
    )
}
