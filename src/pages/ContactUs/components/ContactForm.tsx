import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Grid, Paper, Typography } from '@mui/material';
import ErrorMessage from '../../../components/ErrorMessage';
import useAlertSnackbar from '../../../components/Snackbar/useSnackbar';

 export default function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const { handleClickVariant } = useAlertSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === '')) {
      setError('All fields are required');
    } else {
      setError('');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      handleClickVariant('Thank you for your message!', 'success');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', minHeight: '65vh' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper sx={{ backgroundColor: '#ffffff', p: { xs: 2, md: 4 }, boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)' }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2, color: '#333333' }}>Contact Us</Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', mb: 3, color: '#666666' }}>Have a question or need assistance? We're here to help!</Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                onChange={handleChange}
                value={formData.name}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                value={formData.email}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                name="message"
                onChange={handleChange}
                value={formData.message}
                sx={{ mb: 3 }}
              />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#00A9FF', width: '100%', color: '#ffffff', '&:hover': { backgroundColor: '#0085c7' } }}>
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
