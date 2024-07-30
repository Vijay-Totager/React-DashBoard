import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import { Breadcrumbs, Link, Stack } from '@mui/material';
import MobileSideBar from './MobileNav/MobileSidebar';
import Links from 'Components/ReUsableComponents/Links';
import { useTheme as useMuiTheme } from '@mui/material/styles';



<<<<<<< HEAD
=======
const pages: Page[] = [
    { label: 'Home', value: 'Home', dropdown: false, navigate: '/home' },
  {
    label: 'I Can',
    value: 'I Can',
    dropdown: true,
    submenu: [
      { label: 'Navigate Dashboard', value: ' Dashboard', navigate: '/dashboard' },
      { label: 'Manage Members', value: 'Members', navigate: '/members' },
      { label: 'Manage Posts', value: 'Posts', navigate: '/post' },
      { label: 'Manage Payments', value: 'Payments', navigate: '/payments' },
      { label: 'Manage Subscriptions', value: 'Subscriptions', navigate: '/subscription' },
      { label: 'Manage Communities', value: 'Community', navigate: '/communities' },
    
     
    ],
    navigate: '/features1',
  },
  {
    label: 'I am',
    value: 'I am',
    dropdown: true,
    submenu: [
      { label: 'An Entrepreneur', value: 'An Entrepreneur', navigate: '/business' },
      { label: 'A Homemaker', value: 'A Homemaker', navigate: '/entrepreneur' },
      { label: 'A Teacher', value: 'A Teacher', navigate: '/home' },
      { label: 'A Wellness/Health Instructor', value: 'A Wellness/Health Instructor', navigate: '/wellness' },
    ],
    navigate: '',
  },
  { label: 'Pricing', value: 'Pricing', dropdown: false, navigate: '/pricing' },
  { label: 'About Us', value: 'About Us', dropdown: false, navigate: '/about' },
];
>>>>>>> parent of b7c483b (updates)

const Header = () => {

  const muiTheme = useMuiTheme(); // MUI theme


  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: muiTheme.palette.background.paper,
        boxShadow: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius:'10px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
             src={require("../../Assets/Images/Logo.png")}
            alt=""
            sx={{
              width: "50%",
              display: { xs: "block", sm: "block", md: "none" },
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <MobileSideBar />
          </Box>

         

          <Stack sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'Start' } }}>
            <Stack>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Pages
                </Link>
                <Link underline="hover" color="inherit" href="/home">
                  Dashboard
                </Link>
              </Breadcrumbs>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  color: muiTheme.palette.text.primary,
                  fontWeight: 700,
                  fontFamily: "DM Sans",
                  fontSize: '26px',
                }}
              >
                Main Dashboard
              </Typography>
            </Stack>
          </Stack>

          <Box  sx={{display:{xs:'none',xl:'block'}}}>
            <Links secondary={true} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
