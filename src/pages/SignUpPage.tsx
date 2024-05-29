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
import { NavLink, useNavigate } from 'react-router-dom';
import DatePicker from '../components/OtherField/DatePicker';
import { formatDate } from '../helper';
import dayjs from 'dayjs';
import CountrySelect, { CountryType } from '../components/OtherField/ChooseCountry';
import { SxProps } from '@mui/system';
import { UserRegister } from '../utils';
import { z } from 'zod';
import useAuthStore from '../stores/authStore';
import useAlertSnackbar from '../components/Snackbar/useSnackbar';

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

  const { signup, isLogged } = useAuthStore();

  const navigate = useNavigate()

  const { handleClickVariant } = useAlertSnackbar();

  const [user, setUser] = React.useState<z.infer<typeof UserRegister>>({
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

  const [pais] = React.useState<CountryType>();

  React.useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(user).some((value) => value === '')) {
      handleClickVariant('Please fill all the fields', 'error');
      return;
    } else {
      signup(user);
      handleClickVariant('You are registered and logged in', 'success');
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

  const handleCountryChange = (newValue: CountryType | null) => {
    if (newValue === null) {
      setUser({
        ...user,
        country: ''
      });
      return;
    }
    setUser({
      ...user,
      country: newValue?.label
    });
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
                <CountrySelect handleCountryChange={handleCountryChange} pais={pais} />
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