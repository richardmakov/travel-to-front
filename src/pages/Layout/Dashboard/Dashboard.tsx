import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './components/ListItems';
import { NavLink } from 'react-router-dom';
import { AppBar, Drawer } from './styles/dashboardStyles';
import useDashboardViewModel from './view-model/useDashboardViewModel';
import useAuthStore from '../../../stores/authStore';
import { ReactNode } from 'react';

interface DashboardProps{
    children: ReactNode
}

export default function Dashboard({children}: DashboardProps) {
    const {toggleDrawer, open, isAdmin} =  useDashboardViewModel()
    const {user} = useAuthStore()

    return (
            <Box sx={{ display: 'flex', width:'100%' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', 
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Welcome {user?.firstname} to your dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {isAdmin() ? secondaryListItems : null}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto'
                    }}
                >
                    <Toolbar />
                    <Box sx={{ mt: 4, mb: 4}}>
                        <Grid container >
                            {children}
                        </Grid>
                        <Box sx={{ pt: 4 }}>
                            <Typography variant="body2" color="text.secondary" align="center">
                                {'Copyright © '}
                                <NavLink  to={'/'} color="text.secondary" style={{color:"inherit"}}>
                                    TravelTO
                                </NavLink>{' '}
                                {new Date().getFullYear()}
                                {'.'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
    );
}