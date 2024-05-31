import { TableRow } from '@mui/material'
import { StyledTableCell } from '../styles/tableTripStyles'

export default function Head() {
    return (
        <>
            <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Firstname</StyledTableCell>
                <StyledTableCell>Lastname</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>IdCard</StyledTableCell>
                <StyledTableCell>Passport</StyledTableCell>
                <StyledTableCell>Country</StyledTableCell>
                <StyledTableCell>Date of birth</StyledTableCell>
            </TableRow>
        </>
    )
}
