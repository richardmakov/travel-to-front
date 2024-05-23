import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import formatDateTime from '../../../helper';
import { Avatar, Box, Card, CardContent, Grid } from '@mui/material';

type Leg = {
  originStationCode: string;
  isDifferentOriginStation: boolean;
  destinationStationCode: string;
  isDifferentDestinationStation: boolean;
  departureDateTime: string;
  arrivalDateTime: string;
  classOfService: string;
  marketingCarrierCode: string;
  operatingCarrierCode: string;
  amenities: [];
  flightNumber: number;
  seatGuruEquipmentId: number;
  seatGuruAirlineUrl: string;
  numStops: number;
  distanceInKM: number;
  isInternational: boolean;
  selfTransfer: boolean;
  operatingCarrier: {
    locationId: number;
    code: string;
    logoUrl: string;
    displayName?: string;
  };
  marketingCarrier: {
    locationId: number;
    code: string;
    logoUrl: string;
    displayName?: string;
  };
};

type Segment = {
  type: string;
  legs: Leg[];
  layovers: [];
};

type PurchaseLink = {
  purchaseLinkId: string;
  providerId: string;
  partnerSuppliedProvider: {
    id: string;
    displayName: string;
    logoUrl: string;
  };
  commerceName: string;
  currency: string;
  originalCurrency: string;
  seatAvailability: number;
  taxesAndFees: number;
  taxesAndFeesPerPassenger: number;
  totalPrice: number;
  totalPricePerPassenger: number;
  fareBasisCodes: string[];
  containedPurchaseLinks: string[];
  partnerData: Record<string, unknown>;
  isPaid: boolean;
  fareAttributesList: string[];
  url: string;
};

type ItineraryTag = {
  tag: string;
  type: string;
};

type Flight = {
  segments: Segment[];
  purchaseLinks: PurchaseLink[];
  itineraryTag: ItineraryTag;
};


const applyIVA = (price: number): number => {
  return price * 1.10;
}

const calculateTotalCost = (flights: Flight): string => {
  const totalPrice = flights.purchaseLinks[0].totalPrice;
  const totalPriceWithIVA = applyIVA(totalPrice);
  return totalPriceWithIVA.toFixed(2);
}

export default function Info() {
  const location = useLocation();
  const { state } = location;
  const flights = state as Flight;
  const totalCost = calculateTotalCost(flights);

  return (
    <Box>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalCost} (Taxes Included)
      </Typography>
      <List disablePadding sx={{ mt: 5 }}>
      {flights.segments[0].legs.map((leg, index) => (
        <Grid container justifyContent="center" key={index} sx={{ marginBottom: 10 }}>
          <Grid item xs={12} sm={10} md={10} lg={7}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 10,
                backgroundColor: '#FFF',
                transition: 'transform 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <Box sx={{ backgroundColor: '#ADD8E6', width: '100%', padding: 2 }}>
                <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>
                  Boarding Pass
                </Typography>
              </Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <ListItem sx={{ py: 0, px: 0 }}>
                  <Box sx={{ mb: 1, mt: 1, ml: 1, display: 'flex', justifyContent: 'center' }}>
                    {leg.operatingCarrier.logoUrl && (
                      <Avatar alt="logo" src={leg.operatingCarrier.logoUrl} sx={{ width: 50, height: 50, marginRight: '1rem' }} />
                    )}
                    <ListItemText
                      primary={`${leg.operatingCarrier.code} ${leg.flightNumber}`}
                      secondary={`${leg.operatingCarrier.displayName}`}
                    />
                  </Box>
                </ListItem>
                <ListItem sx={{ py: 0, px: 0 }}>
                  <Box sx={{ mb: 1, ml: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ListItemText
                      sx={{ mr: 3 }}
                      primary={`From: ${leg.originStationCode}`}
                      secondary={`Departure Time: ${formatDateTime(leg.departureDateTime)}`}
                    />
                    <ListItemText
                      primary={`To: ${leg.destinationStationCode}`}
                      secondary={`Arrival time: ${formatDateTime(leg.arrivalDateTime)}`}
                    />
                  </Box>
                </ListItem>
              </CardContent>
              <Box sx={{ backgroundColor: '#ADD8E6', width: '100%', padding: 1 }}>
                <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>
                  This Ticket was provided from other sources
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      ))}
    </List>

    </Box>
  );
}