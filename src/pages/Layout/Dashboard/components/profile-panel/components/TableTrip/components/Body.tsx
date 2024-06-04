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
                booking.map((book) =>
                    book.trip ? (
                        <StyledTableRow key={`${book.id}-${book.trip.id}`}>
                            <StyledTableCell component="th" scope="row">
                                {book.booking_number}
                            </StyledTableCell>
                            <StyledTableCell>{book.trip.destination}</StyledTableCell>
                            <StyledTableCell>{book.trip.departure_date}</StyledTableCell>
                            <StyledTableCell>{book.trip.return_date}</StyledTableCell>
                            <StyledTableCell>{book.payment.amount}</StyledTableCell>
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
