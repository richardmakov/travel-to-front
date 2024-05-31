import { TableRow } from '@mui/material'
import { StyledTableCell } from '../styles/tableTripStyles'

export default function Head() {
    return (
        <>
            <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Destination</StyledTableCell>
                <StyledTableCell>Departure date</StyledTableCell>
                <StyledTableCell>Return date</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Visit</StyledTableCell>
                <StyledTableCell>Price USD</StyledTableCell>
                <StyledTableCell>Price EUR</StyledTableCell>
            </TableRow>
        </>
    )
}
