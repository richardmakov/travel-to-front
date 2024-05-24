import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Avatar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import CallIcon from '@mui/icons-material/Call';
import ChooseBadge from '../ChooseBadge';
import { BadgeInfo } from '../../pages/Home/components/interface/badgeInterface';
import MenuHeader from './MenuHeader';
import useAuthStore from '../../stores/authStore';
interface HeaderProps {
    badges: BadgeInfo[];
    handleBadgeClick: (badge: BadgeInfo) => void;
    selectedBadge: BadgeInfo;
    setSelectedBadge: (badge: BadgeInfo) => void;
}

export default function Header({ badges, handleBadgeClick, selectedBadge, setSelectedBadge }: HeaderProps) {
    const isLogged = useAuthStore((state) => state.isLogged);
    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFF' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <NavLink color="inherit" to="/">
              
                    <Avatar alt="" src="/logo2.png" sx={{ width: '10vh', height: '10vh' }} />
                </NavLink>

                <Box>
                    <Button
                        sx={{
                            color: '#000',
                            cursor: 'default',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            }
                        }}
                        startIcon={<CallIcon />}
                        disableRipple
                    >
                        666 666 666
                    </Button>

                    <ChooseBadge badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge} />

                    {isLogged ? (
                        <MenuHeader />
                    ) : (
                        <NavLink to="/login" style={{ color: '#000', textDecoration: 'none' }}>
                            <Button
                                color="inherit"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    }
                                }}
                                startIcon={<AccountCircleIcon />}
                            >
                                SIGN IN
                            </Button>
                        </NavLink>
                    )}
                </Box>
            </Toolbar>
        </AppBar>

    );
}
