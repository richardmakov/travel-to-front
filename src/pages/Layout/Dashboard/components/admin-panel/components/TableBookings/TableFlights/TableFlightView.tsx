import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Head from './components/Head';
import Body from './components/Body';
import { Booking } from '../../../../../../../../stores/bookingStore';

interface BodyProps {
  bookings: Booking[] | undefined,
  error: unknown | null
}

export default function TableFlightView({bookings, error}: BodyProps) {

  return (
    <TableContainer component={Paper} sx={{ mt:3 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">    
        <TableHead>
          <Head />
        </TableHead>
        <TableBody>
            <Body bookings={bookings} error={error}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}