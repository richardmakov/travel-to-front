import { TableRow } from '@mui/material'
import { StyledTableCell } from '../styles/tableTripStyles'

export default function Head() {
    return (
        <>
            <TableRow>
                <StyledTableCell>Booking number</StyledTableCell>
                <StyledTableCell>Destination</StyledTableCell>
                <StyledTableCell>Departure date</StyledTableCell>
                <StyledTableCell>Return date</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
            </TableRow>
        </>
    )
}
