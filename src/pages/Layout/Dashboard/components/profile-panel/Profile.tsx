import useAuthStore from '../../../../../stores/authStore'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import useUserStore from '../../../../../stores/userStore';
import { useState } from 'react';

export default function Profile() {

    const { user } = useAuthStore()
    const updatePassword = useUserStore(state => state.updatePassword);

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const handleUpdatePassword = () => {
        const { currentPassword, newPassword, confirmPassword } = passwordData;
        
        if (newPassword === confirmPassword && newPassword !== '' && confirmPassword !== '' && currentPassword !== '' && newPassword !== currentPassword) {
            if(user){
                updatePassword(user.id, currentPassword, newPassword);
            }
        } else {
            throw new Error('Passwords do not match or are empty');
        }
    };
    return (
        <Container>
            <Typography variant="h4" sx={{ color: '#7F8C8D', py: 3 }} gutterBottom>My Profile</Typography>

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
                
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="New Password"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handleChange}
                        type="password"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Confirm New Password"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handleChange}
                        type="password"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* Campos para actualizar contraseña */}
                    <TextField
                        label="Current Password"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handleChange}
                        type="password"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleUpdatePassword}>
                        Update Password
                    </Button>
                </Grid>
            </Grid>
        </Container>

    )
}
