import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import DatePicker from '../components/OtherField/DatePicker';
import { formatDate } from '../helper';
import dayjs from 'dayjs';
import CountrySelect from '../components/OtherField/ChooseCountry';
import ErrorMessage from '../components/ErrorMessage';
import { SxProps } from '@mui/system';
import { User } from '../utils';
import { z } from 'zod';
import useAuthStore from '../stores/authStore';

interface CopyrightProps {
  sx?: SxProps;
}

function Copyright(props: CopyrightProps) {
  const { sx, ...otherProps } = props;

  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={sx} {...otherProps}>
      {'Copyright © '}
      <NavLink color="inherit" to="/">
        TravelTO
      </NavLink >{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUpPage() {

  const { signup, error, setError } = useAuthStore();

  const [user, setUser] = React.useState<z.infer<typeof User>>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    idCard: '',
    passport: '',
    country: '',
    date: '',
    password: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signup(user);
    if (Object.values(user).some((value) => value === '')) {
      setError('All fields are required');
      return;
    } else {
      setError('');
    }

  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleDateChange = (e: dayjs.Dayjs | null) => {
    setUser({
      ...user,
      date: formatDate(e)
    });
  };

  const handleCountryChange = (e: React.SyntheticEvent<Element, Event>) => {
    const target = e.target as HTMLElement;
    const textContent = target.textContent?.trim();

    if (!textContent) {
      setUser({
        ...user,
        country: ''
      });
    } else {
      setUser({
        ...user,
        country: textContent
      });

    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  value={user.firstname}
                  onChange={handleChangeInput}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  value={user.lastname}
                  onChange={handleChangeInput}
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="idCard"
                  label="ID Card"
                  name="idCard"
                  value={user.idCard}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="passport"
                  label="Passport"
                  name="passport"
                  value={user.passport}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleChangeInput}
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <DatePicker handleDateChange={handleDateChange} />
              </Grid>

              <Grid item xs={12}>
                <CountrySelect handleCountryChange={handleCountryChange} user={user} />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={user.password}
                  onChange={handleChangeInput}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  value={user.phone}
                  onChange={handleChangeInput}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}