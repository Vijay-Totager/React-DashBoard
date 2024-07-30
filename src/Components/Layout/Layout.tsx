import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Grid } from '@mui/material';
import MainSideBar from '../Header/MobileNav/MainSideBar';

export const Layout = () => {
    return (
        <Grid container>
            {/* Sidebar Grid Item */}
            <Grid
                item
                xl={2}
                sx={{
                    position: 'fixed',
                    height: '100vh',
                    width: '16.66%',
                    overflowY: 'auto',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    backgroundColor: 'background.paper', // Optional: ensure sidebar has a background
                }}
                display={{ xs: 'none', xl: 'block' }}
            >
                <MainSideBar />
            </Grid>

            {/* Main Content Grid Item */}
            <Grid
                item
                xl={10}
                sx={{
                    marginLeft: {xl:'16.66%'},
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
              
                }}
            >
                <Box
                    sx={{
                        flex: '0 0 auto',
                        position: 'sticky',
                        top: 0,
                        zIndex: 2,
                        backdropFilter: 'blur(10px)', // Apply the blur effect
                     // Semi-transparent background
                        transition: 'background-color 0.3s ease',
                        ml:1,mr:1 //
                    }}
                >
                    {/* Fixed Header */}
                    <Header />
                </Box>

                <Box
                    sx={{
                        flex: '1 1 auto',
                     
                        paddingTop: '16px', // Adjust as needed
                      
                    }}
                >
                    <Outlet />
                </Box>

                <Box
                   
                >
                    {/* Footer */}
                    <Footer />
                </Box>
            </Grid>
        </Grid>
    );
};