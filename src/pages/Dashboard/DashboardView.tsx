import {  ThemeProvider } from '@mui/material/styles';
import {defaultTheme } from './styles/dashboardStyles';
import Dashboard from './Dashboard';

export default function DashboardView() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Dashboard /> 
    </ThemeProvider>
  )
}
