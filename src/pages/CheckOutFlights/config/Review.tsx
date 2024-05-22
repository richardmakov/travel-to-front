import * as React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { IFormInputs } from './useCheckOutViewModel';

interface ReviewProps {
  formInputs: IFormInputs;
  paymentType: string;
  cardNumber: string;
  expirationDate: string;
  cardHolder: string;
}

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

type Flight = {
  segments: [];
  purchaseLinks: PurchaseLink[];
  itineraryTag: {
    tag: string;
    type: string;
  };
};

export default function Review({ formInputs, paymentType, cardNumber, expirationDate, cardHolder }: ReviewProps) {

  const payments = [
    { name: 'Card type:', detail: paymentType },
    { name: 'Card holder:', detail: cardHolder },
    { name: 'Card number:', detail: cardNumber },
    { name: 'Expiry date:', detail: expirationDate },
  ];

  const applyIVA = (price: number): number => {
    return price * 1.10;
  }

  const showApplyIVA = (price: number): number => {
    return Math.round(price * 0.10 * 100) / 100;
  }

  const calculateTotalCost = (flights: Flight): string => {
    const totalPrice = flights.purchaseLinks[0].totalPrice;

    const totalPriceWithIVA = applyIVA(totalPrice);
    return totalPriceWithIVA.toFixed(2);
  }
  const location = useLocation();
  const { state } = location;
  const flights = state as Flight;
  const totalCost = calculateTotalCost(flights);

  return (
    <Stack spacing={2}>
      <List disablePadding>
 
          <ListItem  sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={flights.purchaseLinks[0].partnerSuppliedProvider.displayName}
              secondary={`Total: ${flights.purchaseLinks[0].totalPrice.toFixed(2)}`}
            />
            <Typography variant="h5" fontWeight="medium">
              {flights.purchaseLinks[0].totalPrice.toFixed(2)}
            </Typography>
          </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" secondary="Plus taxes" />
          <Typography variant="body2">{showApplyIVA(parseInt(totalCost))}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalCost} (Taxes Included)
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Shipment details
          </Typography>
          <Typography gutterBottom>{formInputs.firstName} {formInputs.lastName}</Typography>
          <Typography color="text.secondary" gutterBottom>
            {formInputs.address1}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" color="text.secondary">
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}