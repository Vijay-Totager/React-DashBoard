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
              display: { xs: "block", sm: "block", md: "block" ,lg:'none',xl:'none'},
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex",lg:'none',xl:'none' },
              justifyContent: "flex-end",
            }}
          >
            <MobileSideBar />
          </Box>

         

          <Stack sx={{ flexGrow: 1, display: { xs: 'none', md: 'none',xl:'block', justifyContent: 'Start' } }}>
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
