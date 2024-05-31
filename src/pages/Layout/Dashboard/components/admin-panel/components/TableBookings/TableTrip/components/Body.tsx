import { Box, Typography } from '@mui/material'
import { StyledTableCell, StyledTableRow } from '../styles/tableTripStyles'
import { Booking } from '../../../../../../../../../stores/bookingStore';

interface BodyProps {
    bookings: Booking[] | undefined,
    error: unknown | null
}

export default function Body({ bookings, error }: BodyProps) {

    return (
        <>
            {error ? (
                <Typography variant="body1" color="error" sx={{ p: 2 }}>
                    Error loading booking information.
                </Typography>
            ) : bookings && bookings.length > 0 ? (
                bookings.map((booking) =>
                    booking.trip ? (
                        <StyledTableRow key={booking.id}>
                            <StyledTableCell component="th" scope="row">
                                {booking.booking_number}
                            </StyledTableCell>
                            <StyledTableCell>{booking.trip.destination}</StyledTableCell>
                            <StyledTableCell>{booking.trip.departure_date}</StyledTableCell>
                            <StyledTableCell>{booking.trip.return_date}</StyledTableCell>
                            <StyledTableCell>{booking.trip.price_eur}</StyledTableCell>
                        </StyledTableRow>
                    ) : (
                        <Box></Box>
                    )
                )
            ) : (
                <Typography variant="body1" color="textSecondary" sx={{ p: 2 }}>
                    No booking trip information available
                </Typography>
            )}
        </>
    );
}
