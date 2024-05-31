import { TableRow } from '@mui/material'
import { StyledTableCell } from '../styles/tableTripStyles'

export default function Head() {
    return (
        <>
            <TableRow>
                <StyledTableCell>Booking number</StyledTableCell>
                <StyledTableCell>Flight number</StyledTableCell>
                <StyledTableCell>Departure Airport</StyledTableCell>
                <StyledTableCell>Landing Airport</StyledTableCell>
                <StyledTableCell>Departure Time</StyledTableCell>
                <StyledTableCell>Arrival Time</StyledTableCell>
            </TableRow>
        </>
    )
}
