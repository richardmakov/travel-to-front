import { Box, LinearProgress, Typography } from '@mui/material'
import { StyledTableCell, StyledTableRow } from '../styles/tableTripStyles'
import { OffertType } from '../../../../../../../../types';

interface BodyProps {
    trips: OffertType[] | undefined,
    loading: boolean,
    error: string | null
}

export default function Body({ trips, loading, error }: BodyProps) {
    return (
        <>
            {loading ? (
                <Box sx={{ width: '100%', p: 2 }}>
                    <LinearProgress />
                </Box>
            ) : error ? (
                <Typography variant="body1" color="error" sx={{ p: 2 }}>
                    Error loading users information.
                </Typography>
            ) : trips && trips.length > 0 ? (
                trips.flatMap((trip) =>
                        <StyledTableRow key={`${trip.id}`}>
                            <StyledTableCell component="th" scope="row">{trip.id}</StyledTableCell>
                            <StyledTableCell>{trip.destination}</StyledTableCell>
                            <StyledTableCell>{trip.departure_date}</StyledTableCell>
                            <StyledTableCell>{trip.return_date}</StyledTableCell>
                            <StyledTableCell>{trip.description}</StyledTableCell>
                            <StyledTableCell>{trip.visit}</StyledTableCell>
                            <StyledTableCell>{trip.price_usd}</StyledTableCell>
                            <StyledTableCell>{trip.price_eur}</StyledTableCell>
                        </StyledTableRow>
                    
                )
            ) : (
                <Typography variant="body1" color="textSecondary" sx={{ p: 2 }}>
                    No users information available
                </Typography>
            )}
        </>
    );
}
