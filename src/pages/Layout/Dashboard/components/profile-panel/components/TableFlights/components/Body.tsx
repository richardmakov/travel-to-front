import { Box, LinearProgress, Typography } from '@mui/material'
import { IBooking } from '../../../../../../../../types/IBookingUserByID'
import { StyledTableCell, StyledTableRow } from '../styles/tableTripStyles'

interface BodyProps {
    booking: IBooking[] | undefined,
    loading: boolean,
    error: string | null
}

export default function Body({ booking, loading, error }: BodyProps) {
    return (
        <>
            {loading ? (
                <Box sx={{ width: '100%', p: 2 }}>
                    <LinearProgress />
                </Box>
            ) : error ? (
                <Typography variant="body1" color="error" sx={{ p: 2 }}>
                    Error loading booking information.
                </Typography>
            ) : booking && booking.length > 0 ? (
                booking.flatMap((book) =>
                    book.flights.map((flight) => (
                        <StyledTableRow key={`${book.id}-${flight.id}`}>
                            <StyledTableCell component="th" scope="row">{book.booking_number}</StyledTableCell>
                            <StyledTableCell>{flight.flightNumber}</StyledTableCell>
                            <StyledTableCell>{flight.departureAirport}</StyledTableCell>
                            <StyledTableCell>{flight.arrivalAirport}</StyledTableCell>
                            <StyledTableCell>{flight.departureTime}</StyledTableCell>
                            <StyledTableCell>{flight.arrivalTime}</StyledTableCell>
                        </StyledTableRow>
                    ))
                )
            ) : (
                <Typography variant="body1" color="textSecondary" sx={{ p: 2 }}>
                    No booking flight information available
                </Typography>
            )}
        </>
    );
}
