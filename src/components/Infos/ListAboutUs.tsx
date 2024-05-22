import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

export default function ListAboutUs() {
        return (
            <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <List>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Travel Agencies" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Franchises" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Corporate Travel" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Ávoris" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Ávoris Integra" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Legal Notice and Terms of Use" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Cookie Policy" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Privacy Policy" />
                </ListItem>
                </List>
            </div>
            <div style={{ flex: 1 }}>
                <List>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Important Notices" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Customer Service" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Help" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Work with Us" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Blog" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Legal Basis for Campaign 'Black Friday'" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Legal Basis for Campaign 'Early Booking 2024'" />
                </ListItem>
                <ListItem button component={NavLink} to="/aboutus" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="Whistleblower Channel" />
                </ListItem>
                </List>
            </div>
            </div>
        );
    }

