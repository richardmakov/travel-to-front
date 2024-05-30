import React from 'react'
import useAuthStore from '../../../../stores/authStore';

export default function useDashboardViewModel() {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { user } = useAuthStore()
  const isAdmin = () => {
    if (user && user.roles) {
      return user.roles.some(role => role === 'ROLE_ADMIN');
    }
    return false;
  }
  
  return {
    toggleDrawer,
    open,
    isAdmin
  }
}
