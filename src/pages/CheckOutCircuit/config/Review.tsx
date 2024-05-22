import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ofertasViajes } from '../../Home/components/data/offerts';
import { useParams } from 'react-router-dom';
import useBadge from '../../../hooks/useBadge';
import { IFormInputs } from './useCheckOutViewModel';

interface ReviewProps {
  formInputs: IFormInputs;
  paymentType: string;
  cardNumber: string;
  expirationDate: string;
  cardHolder: string;
}

export default function Review({formInputs, paymentType, cardNumber, expirationDate, cardHolder }: ReviewProps) {
  const { id } = useParams();
  const { selectedBadge } = useBadge();

  const payments = [
    { name: 'Card type:', detail: paymentType },
    { name: 'Card holder:', detail: cardHolder },
    { name: 'Card number:', detail: cardNumber },
    { name: 'Expiry date:', detail: expirationDate },
  ];

  const applyIVA = (price: number): number => {
    return price * 1.10;
  }

  const applyIVAstring = (priceString: string): string => {
    const currencySymbol = priceString.charAt(0);
    const priceMatch = priceString.match(/\d+(\.\d+)?/);
    if (!priceMatch) {
      throw new Error("Price not available");
    }

    const price = parseFloat(priceMatch[0]);
    if (isNaN(price)) {
      throw new Error("Price not available");
    }

    const priceWithIVA = Math.floor(price * 0.10); 
    return `${currencySymbol}${priceWithIVA}`;
  }

  const total = () => {
    const priceMatch = currency().match(/\d+(\.\d+)?/);
    if (!priceMatch) {
      return "Price not available";
    }

    const price = parseFloat(priceMatch[0]);
    if (isNaN(price)) {
      return "Price not available";
    }

    const priceWithIVA = applyIVA(price);
    const currencySymbol = selectedBadge.symbol === 'USD' ? 'USD' : 'EUR';

    return `${priceWithIVA.toFixed(2)} ${currencySymbol} (Taxes included)`;
  }


  const currency = () => {
    const oferta = ofertasViajes.find(oferta => oferta.id === id);
    if (!oferta) {
      return "Offer not found";
    }

    if (selectedBadge.symbol === 'USD') {
      return `${oferta.priceUSD.toString()}`;
    } else {
      return `${oferta.priceEUR?.toString()}` || "Price not available";
    }
  }

  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Products" secondary="Booking" />
          <Typography variant="body2">{currency()}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" secondary="Plus taxes" />
          <Typography variant="body2">{applyIVAstring(currency())}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {total()}
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