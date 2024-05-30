import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box/Box";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import React, { ReactNode } from "react";
import useAuthStore from "../../stores/authStore";
import Dashboard from "./Dashboard/Dashboard";

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  const { isLogged } = useAuthStore()

  return (
    <React.Fragment>
      {isLogged ? (
        <Box sx={{ display: "flex", height: '100px' }}>
          <CssBaseline />
          <Dashboard children={children}/>
        </Box>
      ) : (
        <NavLink to={'/login'} />
      )}
    </React.Fragment>
  );
};
