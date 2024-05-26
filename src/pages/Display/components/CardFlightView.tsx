import useFlightStore from '../../../stores/flightStore';
import { Box, CircularProgress, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuthStore from '../../../stores/authStore';
import CardFlight from './CardFlight';
import useAlertSnackbar from '../../../components/Snackbar/useSnackbar';


export default function CardFlightView() {
  const { flights, load } = useFlightStore();
  const { isLogged } = useAuthStore();
  const { handleClickVariant } = useAlertSnackbar();
  return (
    <>
      {load ? (
        <Box sx={{ p: 50, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        flights ? (
          isLogged ? (
            flights.data.flights.map((flight, index) => (
              <NavLink to={`/checkout/flights/${index}`} state={flight} style={{ textDecoration: 'none' }} key={index}>
                <CardFlight flight={flight} key={index} />
              </NavLink>
            ))
          ) : (
            flights.data.flights.map((flight, index) => (
              <div key={index} onClick={() => handleClickVariant('You have to be logged', 'info')}>
                <CardFlight flight={flight} key={index} />
              </div>
            ))
          )

        ) : (
          <Box sx={{ p: 50, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6">No flights available</Typography>
          </Box>
        )
      )}
    </>
  )
}
