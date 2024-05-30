import { Box, Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function Message() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width:'60%',
                borderRadius: 2,
            }}
        >
            <Typography variant="h4" gutterBottom>
                Access Denied
            </Typography>
            <Typography variant="body1" gutterBottom>
                You do not have permission to access this page.
            </Typography>
            <NavLink to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    color="primary"
                >
                    Go to Home Page
                </Button>
            </NavLink>
        </Box>
    )
}
