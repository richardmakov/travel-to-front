import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Head from './components/Head';
import Body from './components/Body';
import { IBooking } from '../../../../../../../types/IBookingUserByID';

interface BodyProps {
  booking: IBooking[] | undefined,
  loading: boolean,
  error: string | null
}

export default function TableTripView({booking, loading, error}: BodyProps) {
  
  return (
    <TableContainer component={Paper} sx={{ mt:3 }} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <Head />
        </TableHead>
        <TableBody>
            <Body booking={booking} loading={loading} error={error}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}