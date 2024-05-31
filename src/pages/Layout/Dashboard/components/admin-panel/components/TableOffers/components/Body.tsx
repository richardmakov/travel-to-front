import { Box, LinearProgress, Typography } from '@mui/material'
import { StyledTableCell, StyledTableRow } from '../styles/tableTripStyles'
import { FetchUsers } from '../../../../../../../../stores/userStore';

interface BodyProps {
    users: FetchUsers[] | undefined,
    loading: boolean,
    error: string | null
}

export default function Body({ users, loading, error }: BodyProps) {
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
            ) : users && users.length > 0 ? (
                users.flatMap((user) =>
                        <StyledTableRow key={`${user.id}`}>
                            <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
                            <StyledTableCell>{user.firstname}</StyledTableCell>
                            <StyledTableCell>{user.lastname}</StyledTableCell>
                            <StyledTableCell>{user.email}</StyledTableCell>
                            <StyledTableCell>{user.phone}</StyledTableCell>
                            <StyledTableCell>{user.idCard}</StyledTableCell>
                            <StyledTableCell>{user.passport}</StyledTableCell>
                            <StyledTableCell>{user.country}</StyledTableCell>
                            <StyledTableCell>{user.date}</StyledTableCell>
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
