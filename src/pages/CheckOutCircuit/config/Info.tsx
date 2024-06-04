import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import useTripStore from '../../../stores/tripStore';
import { BadgeInfo } from '../../Home/components/interface/badgeInterface';

interface InfoProps {
  totalPrice: string;
  selectedBadge: BadgeInfo;
}

export default function Info({ totalPrice, selectedBadge }: InfoProps) {
  const { id } = useParams();
  const { trips } = useTripStore();
  const trip = trips.find(trip => trip.id.toString() === id);

  const currency = () => {
    const trip = trips.find(trip => trip.id.toString() === id);
    if (!trip) {
      return "Offer not found";
    }

    if (selectedBadge.symbol === 'USD') {
      return `${trip.price_usd.toString()}`;
    } else {
      return `${trip.price_eur?.toString()}` || "Price not available";
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
          <ListItem key={trip?.destination} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={trip?.destination}
              secondary={trip?.description}
            />
            <Typography variant="h5" fontWeight="medium">
              {currency()}
            </Typography>
          </ListItem>
  
      </List>
    </React.Fragment>
  );
}