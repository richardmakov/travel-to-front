import { Box, Typography } from '@mui/material'

export default function Message() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width:'100%',
                borderRadius: 2,
                p:20,
            }}
        >
            <Typography variant="h4" gutterBottom>
                Access Denied
            </Typography>
            <Typography variant="body1" gutterBottom>
                You do not have permission to access this page.
            </Typography>

        </Box>
    )
}
