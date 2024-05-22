import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const pages = [
  { name: 'Home', link: '/' },
  { name: 'About us', link: '/aboutus' },
  { name: 'Contact us', link: '/contact' }
];

function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {pages.map((page) => (
              <NavLink
                to={page.link}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Button
                  key={page.name}
                  sx={{
                    my: 2,
                    mr: 4,
                    color: 'white',
                    display: 'block',
                  }}
                >

                  {page.name}

                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;