import React, { useState, useEffect } from 'react';
import { Box, LinearProgress, Typography, Modal, TextField, Button } from '@mui/material';
import { StyledTableCell, StyledTableRow } from '../styles/tableTripStyles';
import useUserStore, { FetchUsers } from '../../../../../../../../stores/userStore';

interface BodyProps {
    users: FetchUsers[] | undefined,
    loading: boolean,
    error: string | null
}

const Body: React.FC<BodyProps> = ({ users, loading, error }) => {
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<FetchUsers | null>(null);
    const [formData, setFormData] = useState<FetchUsers | null>(null);
    const {updateUser} = useUserStore();

    useEffect(() => {
        if (selectedUser) {
            setFormData(selectedUser);
        }
    }, [selectedUser]);

    const handleRowClick = (user: FetchUsers) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedUser(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (formData) {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSave = () => {
        
        if(formData) {
            updateUser(formData.id, formData);
        }
        
        handleClose();
    };

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
                users.map((user) => (
                    <StyledTableRow key={user.id} onClick={() => handleRowClick(user)} style={{ cursor: 'pointer' }}>
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
                ))

            ) : (
                <Typography variant="body1" color="textSecondary" sx={{ p: 2 }}>
                    No users information available
                </Typography>
            )}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="user-modal-title"
                aria-describedby="user-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    {formData && (
                        <form>
                            <Typography id="user-modal-title" variant="h6" component="h2">
                                User {formData.id}
                            </Typography>
                            <TextField
                                label="Firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="ID Card"
                                name="idCard"
                                value={formData.idCard}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Passport"
                                name="passport"
                                value={formData.passport}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
                                <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                            </Box>
                        </form>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default Body;
