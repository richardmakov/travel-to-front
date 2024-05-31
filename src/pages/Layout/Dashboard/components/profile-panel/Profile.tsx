import useAuthStore from '../../../../../stores/authStore'
import { Container, Grid, TextField, Typography } from '@mui/material'

export default function Profile() {

    const { user } = useAuthStore()

    return (
        <Container>
            <Typography variant="h4" sx={{ color: '#7F8C8D', py:3 }} gutterBottom>My Profile</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Firstname"
                        value={user?.firstname}
                        variant="outlined"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Lastname"
                        value={user?.lastname}
                        variant="outlined"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        value={user?.email}
                        variant="outlined"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Phone"
                        value={user?.phone}
                        variant="outlined"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="ID"
                        value={user?.idCard}
                        variant="outlined"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Passport"
                        value={user?.passport}
                        variant="outlined"
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Country"
                        value={user?.country}
                        variant="outlined"
                        fullWidth
                        disabled
                    />
                </Grid>
            </Grid>
        </Container>

    )
}
