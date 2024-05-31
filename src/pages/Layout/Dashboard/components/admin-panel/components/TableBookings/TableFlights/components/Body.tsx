import { Typography } from '@mui/material'
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
                bookings.some(book => book.flights && book.flights.length > 0) ? (
                    bookings.flatMap((book) =>
                        book.flights?.map((flight) => (
                            <StyledTableRow key={`${book.id}-${flight.flightNumber}`}>
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
                )
            ) : (
                <Typography variant="body1" color="textSecondary" sx={{ p: 2 }}>
                    No booking flight information available
                </Typography>
            )}
        </>

    );
}
