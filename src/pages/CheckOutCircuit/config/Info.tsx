import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { ofertasViajes } from '../../Home/components/data/offerts';
import useBadge from '../../../hooks/useBadge';

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
  const { id } = useParams();
  const oferta = ofertasViajes.find(oferta => oferta.id === id);
  const { selectedBadge } = useBadge();

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
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
          <ListItem key={oferta?.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={oferta?.title}
              secondary={oferta?.description}
            />
            <Typography variant="h5" fontWeight="medium">
              {currency()}
            </Typography>
          </ListItem>
  
      </List>
    </React.Fragment>
  );
}