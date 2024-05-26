import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAuthStore from '../../stores/authStore';
import useAlertSnackbar from '../Snackbar/useSnackbar';


export default function MenuHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { handleClickVariant } = useAlertSnackbar();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {signout} = useAuthStore();

  const handleLogOutClose = () => {
    handleClose()
    signout()
    handleClickVariant('Logged out', 'warning');
  }

  const {user} = useAuthStore();

  return (
    <>
      <Button
        sx={{
            '&:hover': {
                color:"#666", 
                backgroundColor: 'transparent'
            }}}
            startIcon={<AccountCircleIcon />}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         {user?.firstname} {user?.lastname}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
{/*         <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleLogOutClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}