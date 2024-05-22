import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/router.js'
import createTheme from "@mui/material/styles/createTheme";
import './index.css'
import SnackbarProviderWrapper from './components/Snackbar/SnackbarProviderWrapper.js';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode >
      <SnackbarProviderWrapper>
        <CssBaseline />
        <AppRouter />
      </SnackbarProviderWrapper>
    </React.StrictMode>
  </ThemeProvider>,

);
