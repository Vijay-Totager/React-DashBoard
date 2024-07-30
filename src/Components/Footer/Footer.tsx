import { Twitter } from "@mui/icons-material";
import { Box, Button, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Footer = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/contacts');
    };

<<<<<<< HEAD
  return (
    <>

      <Box sx={{ backgroundColor: "#f2f2f2f2", pt: { xs: 3, md: 0 } }}>
        <Stack
          display={"flex"}
          alignContent={"space-evenly"}
          flexDirection={"row"}
        >
          <Typography
            sx={{
              ml: 5,
              mb: 2,
              fontFamily: "Montserrat",
              fontSize: { xs: "10px", md: "14px" },
              textAlign: "center",
            }}
          >
            © 2024 Abc. All Rights Reserved
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
export default Footer;
=======
    return (
        <>

            <Box sx={{ height: '25vh', backgroundColor: 'white' }} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                <Stack display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Typography
                        sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: '20px', md: '30px' },
                            fontWeight: "bold",
                            color: '#2952A2',
                            textAlign: 'center'
                        }}>
                        Still have questions ?
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: '13px', md: '15px' },
                            fontWeight: 500,
                            color: '#6F6C90',
                            textAlign: 'center',
                            pl: 5,
                            pr: 5,
                            display: { xs: 'block', md: 'none' }
                        }}>
                        If you cannot find answer to your question in our FAQ, you can always CONTACT US. We will <br></br>answer to you shortly.
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "Montserrat",
                            fontSize: { xs: '12px', md: '15px' },
                            fontWeight: 500,
                            color: '#6F6C90',
                            textAlign: 'center',
                            display: { xs: 'none', md: 'block' }
                        }}>
                        If you cannot find answer to your question in our FAQ, you can always<br></br> CONTACT US. We will answer to you shortly.
                    </Typography>
                    <a href="/contacts" style={{ textDecoration: 'none' }}>
                        <Button

                            sx={{

                                fontFamily: 'Montserrat',
                                textTransform: 'capitalize',
                                backgroundColor: 'black',
                                color: 'white',
                                width: 200,
                                borderRadius: '100px',
                                mt:2,
                                "&:hover": {
                                    backgroundColor: "black", // Background color on hover
                                    cursor: "pointer",
                                    border: 'none',
                                    color: 'white'
                                }

                            }
                            }>Contact Us</Button>
                    </a>
                </Stack>

            </Box>




            {/* Desktop Screen */}
            <Box p={5} sx={{ display: { xs: 'none', md: 'grid' } }}>
                <Paper sx={{
                    ml: 5, mr: 5,
                    p: 6,
                    display: 'grid',
                    borderRadius: '10px',
                    background: "linear-gradient(90deg, rgba(42, 83, 162, 0.4) 0%, rgba(79, 161, 202, 0.4) 17.19%, rgba(57, 155, 127, 0.4) 34.38%, rgba(34, 119, 39, 0.4) 51.04%, rgba(127, 196, 27, 0.4) 68.23%, rgba(254, 127, 6, 0.4) 83.85%, rgba(218, 2, 66, 0.4) 100%)",

                }}>
                    <Stack display={"flex"} alignItems={"center"} justifyContent={"space-between"} flexDirection={"row"}>
                        <Typography
                            sx={{
                                fontFamily: "Montserrat",
                                fontSize: '25px',
                                fontWeight: "bold",
                                color: '#000000',
                                textAlign: 'center'
                            }}>
                            Empower Your Community, Elevate Your Experience
                        </Typography>
                        <Button variant="contained"
                            component={Link}
                            to="https://admin.onecommunn.com" target="_blank"
                            sx={{
                                fontFamily: 'Montserrat',
                                textTransform: 'capitalize',
                                backgroundColor: '#2952A2',
                                borderRadius: '100px',
                                width: 200,

                                ml: 5,
                                "&:hover": {
                                    backgroundColor: "#2952A2", // Background color on hover
                                    cursor: "pointer",
                                    border: 'none',
                                }

                            }
                            }>Get started</Button>

                    </Stack>

                </Paper>
            </Box>


            {/* Mobile Screen */}
            <Box p={2} ml={3} mr={3} sx={{ display: { xs: 'block', md: 'none' } }}>
                <Stack alignItems={"center"} justifyContent={"center"} alignContent={"center"}>
                    <Paper sx={{
                        p: 3, display: 'inline-block',
                        borderRadius: '10px',
                        background: "linear-gradient(90deg, rgba(42, 83, 162, 0.4) 0%, rgba(79, 161, 202, 0.4) 17.19%, rgba(57, 155, 127, 0.4) 34.38%, rgba(34, 119, 39, 0.4) 51.04%, rgba(127, 196, 27, 0.4) 68.23%, rgba(254, 127, 6, 0.4) 83.85%, rgba(218, 2, 66, 0.4) 100%)",
                    }}>
                        <Typography
                            sx={{
                                fontFamily: "Montserrat",
                                fontSize: '20px',
                                fontWeight: "bold",
                                color: '#000000',
                                textAlign: 'center'
                            }}>
                            Empower Your Community, Elevate Your Experience
                        </Typography>
                        <Button variant="contained"
                            component={Link}
                            to="/pricing"
                            sx={{
                                fontFamily: 'Montserrat',
                                textTransform: 'capitalize',
                                backgroundColor: '#2952A2',
                                borderRadius: '100px',
                                width: 200,
                                ml: 5,
                                mt: 2,
                                "&:hover": {
                                    backgroundColor: "#2952A2", // Background color on hover
                                    cursor: "pointer",
                                    border: 'none',
                                }

                            }
                            }>Get started</Button>
                        {/* <Button
                            component={Link}
                            to="/contacts"
                            sx={{
                                fontFamily: 'Montserrat',
                                textTransform: 'capitalize',
                                backgroundColor: '#FFFFFF',
                                color: 'black',
                                width: 200,
                                borderRadius: '100px',
                                ml: 5,
                                mt: 2,
                                "&:hover": {
                                    backgroundColor: "#FFFFFF", // Background color on hover
                                    cursor: "pointer",
                                    border: 'none',
                                    color: 'black'
                                }

                            }
                            }>Contact Us</Button> */}
                    </Paper>
                </Stack>

            </Box>
            <Stack sx={{ height: '15vh', backgroundColor: '#f2f2f2f2', mt: { xs: -13, md: -13 } }}>

            </Stack>
            <Box sx={{ height: { xs: 'fit-content', md: '50vh' }, backgroundColor: '#f2f2f2f2', }} display={"flex"} alignItems={"center"} justifyContent={"center"} >

                <Grid container mt={5} mr={3} ml={5}>
                    <Box
                        component={"img"}
                        src={require("../../Assets/Images/Communn-new-logo.png")}
                        alt=""
                        sx={{ width: "60%", pb: 5, justifyContent: 'center', display: { xs: 'block', md: 'none' }, ml: 7 }}
                    />
                    <Grid item xs={6} md={2} display={"flex"} flexDirection={'column'} alignItems={"center"} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <a href="/home" style={{ textDecoration: 'none' }}>
                            <Box
                                component={"img"}
                                src={require("../../Assets/Images/Communn-new-logo.png")}
                                alt=""
                                sx={{ width: "80%", pb: 2 }}
                            />
                        </a>
                        <Box
                            component={"img"}
                            src={require("../../Assets/Images/app-store-download-button.png")}
                            alt=""
                            sx={{ width: "60%", pb: 2, ml: 2 }}
                        />
                        <Link to="https://play.google.com/store/apps/details?id=com.communn_mobile_app" target="_blank">
                        <Box
                            component={"img"}
                            src={require("../../Assets/Images/play-store-download-button.png")}
                            alt=""
                            sx={{ width: "60%", ml: 2 }}
                        />
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={2.5} lg={2.5}>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: { xs: '18px', md: '20px' },
                                    fontWeight: "bold",
                                    color: '#000000E5',
                                    ml: 2

                                }}>
                                Features
                            </Typography>
                            <nav aria-label="secondary mailbox folders">
                                <List sx={{ fontFamily: 'Montserrat' }}>
                                    <ListItem disablePadding>
                                        <a href="/members" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Member Management
                                                </Typography>
                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    {/* <ListItem disablePadding>
                                    <a href="/post" style={{textDecoration:'none'}}>
                                        <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                        
                                            <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                Post Management
                                            </Typography>
                                            
                                        </ListItemButton>
                                        </a>
                                    </ListItem> */}
                                    <ListItem disablePadding>
                                        <a href="/payments" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>

                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Payment Management
                                                </Typography>

                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/dashboard" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>

                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Dashboard & Reports
                                                </Typography>

                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/communities" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>

                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Communities List
                                                </Typography>

                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/subscription" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Subscription Management
                                                </Typography>

                                            </ListItemButton>
                                        </a>
                                    </ListItem>

                                </List>
                            </nav>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={2.5} lg={2.5}>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: { xs: '18px', md: '20px' },
                                    fontWeight: "bold",
                                    color: '#000000E5',
                                    ml: 2

                                }}>
                                Use Cases
                            </Typography>
                            <nav aria-label="secondary mailbox folders">
                                <List sx={{ fontFamily: 'Montserrat' }}>
                                    <ListItem disablePadding>
                                        <a href="/brand" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>

                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Content Creator
                                                </Typography>
                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/entrepreneur" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>

                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Entrepreneur
                                                </Typography>
                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/business" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Business
                                                </Typography>
                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/wellness" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Healthcare
                                                </Typography>
                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/artist" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Lifestyle
                                                </Typography>
                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                </List>
                            </nav>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={2.5} lg={2.5}>
                        <Stack>
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: { xs: '18px', md: '20px' },
                                    fontWeight: "bold",
                                    color: '#000000E5',
                                    ml: 2

                                }}>
                                Company
                            </Typography>
                            <nav aria-label="secondary mailbox folders">
                                <List sx={{ fontFamily: 'Montserrat' }}>
                                    <ListItem disablePadding>
                                    <a href="/terms-of-uses" style={{ textDecoration: 'none' }}>
                                        <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                            <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                Terms of Use
                                            </Typography>
                                        </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                    <a href="/privacy-policy" style={{ textDecoration: 'none' }}>
                                        <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                            <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                Privacy Policy
                                            </Typography>
                                        </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                    <a href="/refund-policy" style={{ textDecoration: 'none' }}>
                                        <ListItemButton sx={{ fontFamily: 'Montserrat' }}>
                                            <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                Refund Policy
                                            </Typography>
                                        </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/about" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>

                                                <Typography sx={{ color: '#000000', textDecoration: 'none', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    About Us
                                                </Typography>

                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <a href="/pricing" style={{ textDecoration: 'none' }}>
                                            <ListItemButton sx={{ fontFamily: 'Montserrat' }}>

                                                <Typography sx={{ color: '#000000', fontSize: { xs: '10px', md: '14px' }, fontFamily: 'Montserrat' }}>
                                                    Pricing
                                                </Typography>

                                            </ListItemButton>
                                        </a>
                                    </ListItem>
                                    
                                </List>
                            </nav>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} md={2.5} lg={2.5}>
                        <Stack >
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: { xs: '16px', md: '20px' },
                                    fontWeight: "bold",
                                    color: '#000000E5',
                                    mr: { xs: 2 },


                                }}>
                                Follow us
                            </Typography>
                            <Stack sx={{ display: 'block' }} marginTop={2}  >
                                <a href="https://www.instagram.com/onecommunn_official/" target="_blank" rel="noreferrer">
                                    <IconButton size="large" aria-label="like" sx={{ backgroundColor: 'white', m: 0.5 }}>
                                        <InstagramIcon sx={{ color: 'black', fontSize: { xs: '15px', md: '18px' }, }} />
                                    </IconButton>
                                </a>
                                <a href="https://www.linkedin.com/company/one-communn/" target="_blank" rel="noreferrer">
                                    <IconButton size="large" aria-label="like" sx={{ backgroundColor: 'white', fontSize: { xs: '15px', md: '18px' }, m: 0.5 }}>
                                        <LinkedInIcon sx={{ color: 'black', fontSize: { xs: '15px', md: '18px' }, }} />
                                    </IconButton>
                                </a>
                                <IconButton size="large" aria-label="like" sx={{ backgroundColor: 'white', m: 0.5 }}>
                                    <FacebookOutlinedIcon sx={{ color: 'black', fontSize: { xs: '15px', md: '18px' } }} />
                                </IconButton>
                                {/* <IconButton size="large" aria-label="like" sx={{ backgroundColor: 'white', m: 0.5 }}>
                                    <Twitter sx={{ color: 'black', fontSize: { xs: '15px', md: '18px' }, }} />
                                </IconButton> */}
                            </Stack>

                            {/* <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: '20px',
                                    fontWeight: "bold",
                                    color: '#000000E5',
                                    mr: 5,
                                    mt:5,
                                    textAlign: 'right'

                                }}>
                                Subscribe
                            </Typography> */}

                        </Stack>
                    </Grid>
                    <Divider sx={{ width: '100%' }} />
                </Grid>

            </Box>
            <Box sx={{ backgroundColor: '#f2f2f2f2', pt: { xs: 3, md: 0 } }}>
                <Stack display={"flex"} alignContent={"space-evenly"} flexDirection={"row"}>
                    <Typography sx={{ ml: 5, mb: 2, fontFamily: 'Montserrat', fontSize: { xs: '10px', md: '14px' }, textAlign: 'center' }}>
                        © 2024 Onecommunn. All Rights Reserved
                    </Typography>

                </Stack>
            </Box>

        </>
    )


}
export default Footer;
>>>>>>> parent of b7c483b (updates)
