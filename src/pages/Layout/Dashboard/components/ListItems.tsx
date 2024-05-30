import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Profile Panel
    </ListSubheader>
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/profile">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/bookings">
      <ListItemIcon>
        <AirplaneTicketIcon />
      </ListItemIcon>
      <ListItemText primary="Bookings" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (

  <React.Fragment>
    <ListSubheader component="div" inset>
      Admin Panel
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Users Control" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Bookings Control" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Offerts Control" />
    </ListItemButton>
  </React.Fragment>
);