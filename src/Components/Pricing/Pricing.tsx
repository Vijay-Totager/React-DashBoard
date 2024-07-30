import { Box, Button, Card, Divider, Grid, Stack, Typography } from '@mui/material'
import background from "../../Assets/Images/background.png";
import { text } from './Price.styles';


const Pricing = () => {
  return (
    <>


      <Stack>
        <Box
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: {xs:"fit-content", md:"100vh"},
            pt: 5,
            pb: 10,
            mt:-12
          }}
        >

          <Grid container sx={{ ml: 5, mr: 5 }}>

            <Stack>

              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                display={"flex"}
                spacing={5}
              >
                <Grid item xs={12} md={6}>
                  <Stack sx={{ pt: 6, pb: 6 }}>
                    <Typography
                      sx={{
                        color: "#2952A2",
                        fontFamily: "Montserrat",
                        fontSize: {xs:"20px",md:'30px',},
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        textAlign:{xs:'center', md:"left"}
                      }}
                    >
                      Choose a Plan that’s right for you
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        color: "#1A2D4C",
                        
                        fontSize: "16px",
                        lineHeight: "30px",
                        mt: 2,
                        textAlign:{xs:'center', md:"left"}
                      }}
                    >
                      Our AI-powered platform enhances community management with
                      tools for user data management, interaction, communication,
                      subscription and payment processing, content management, and
                      advanced analytics
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={10} md={4}>
                  <Box
                    component={"img"}
                    src={require("../../Assets/Images/Pricing.png")}
                    alt=""
                    sx={{ width: "100%" }}
                  />

                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Box>
      </Stack>

      {/* <Stack display={"flex"} flexDirection={"row"} alignContent={'center'} justifyContent={"center"} alignItems={'center'}

        sx={{ ml: 5, mr: 5, pt: 10, pb: 10, mb: 5, borderRadius: '20px' }}>
        <Grid container spacing={5} display={"flex"} flexDirection={"row"} alignContent={'center'} justifyContent={"center"} alignItems={'center'}>
          <Grid item xs={12} md={3}>
            <Card sx={{
              pt: 6, pb: 4, pl: 1, pr: 1, borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
              <Box
                component={"img"}
                src={require("../../Assets/Images/p1.webp")}
                alt=""
                sx={{ width: '40%', }}
              />
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  p: 1,
                  mt:6,
                  color: '#2952A2'
                }}>Features</Typography>
              <Divider></Divider>
              <Typography
                sx={text}>Communities</Typography>
              <Typography
                sx={text}>Communication</Typography>
              <Typography
                sx={text}>Events & Memberships</Typography>
              <Typography
                sx={text}>Platform Fees</Typography>
              <Typography
                sx={text}>Course Listings</Typography>
              <Typography
                sx={text}>Analytics</Typography>
                 <Box
                component={"img"}
                src={require("../../Assets/Images/p1.webp")}
                alt=""
                sx={{ width: '30%', }}
              />
            </Card>

          </Grid>






          <Grid item xs={12} md={3}>
            <Card sx={{
              pt: 2, pb: 7, pl: 1, pr: 1, borderRadius: 
              '15px', display: 'flex', flexDirection:
               'column', alignItems: 'left',
                justifyContent: 'center', 
            }}>
              <Box
                component={"img"}
                src={require("../../Assets/Images/Icon.png")}
                alt=""
                sx={{ width: '20%',}}
            />
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  p: 1,

                  color: '#000000'
                }}>Free</Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  color: "#1A2D4C",
                  textAlign: "justify",
                  fontSize: "15px",
                  lineHeight: "30px",
                  mt: 1
                }}
              >
                Our AI-powered platform enhances community management with
                
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  p: 1,

                  color: '#000000'
                }}>₹0</Typography>
              <Divider></Divider>
              <Typography
                sx={text}> (✓) Create upto 10 Communities</Typography>
              <Typography
                sx={text}>(✓) Unlimited Chat & Messages </Typography>
              <Typography
                sx={text}>(✓) Yes</Typography>
              <Typography
                sx={text}>(✓) 2% </Typography>
              <Typography
                sx={text}>(✓) 10+ Course Listings</Typography>
              <Typography
                sx={text}>❌ Not Available</Typography>
                <Button variant="outlined"
              sx={{

                fontFamily: 'Montserrat',
                textTransform: 'capitalize',
                border:'1px solid #2952A2',
                borderRadius: '10px',
                p: 1,
                mt: 2,
                color:'#2952A2',
                display: { xs: 'block', sm: 'block', md: 'block' },
                "&:hover": {
                  backgroundColor: "white", // Background color on hover
                  cursor: "pointer",
                  color:'#2952A2',
                  border:'1px solid #2952A2',
                }
              }
              }>Get Started</Button>
            </Card>
            

          </Grid>




          

          <Grid item xs={12} md={3}>
            <Card sx={{
              pt: 2, pb: 7, pl: 1, pr: 1, borderRadius: 
              '15px', display: 'flex', flexDirection:
               'column', alignItems: 'left',
                justifyContent: 'center', 
               

            }}>
              <Box
                component={"img"}
                src={require("../../Assets/Images/Icon (1).png")}
                alt=""
                sx={{ width: '20%',}}
            />
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  p: 1,

                  color: '#000000'
                }}>Communn Plus</Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  color: "#1A2D4C",
                  textAlign: "justify",
                  fontSize: "15px",
                  lineHeight: "30px",
                  mt: 1
                }}
              >
                Our AI-powered platform enhances community management with
                
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  p: 1,

                  color: '#000000'
                }}>₹999/M </Typography>
              <Divider></Divider>
              <Typography
                sx={text}> (✓) Create upto 100 Communities</Typography>
              <Typography
                sx={text}>(✓) Unlimited Chat & Messages </Typography>
              <Typography
                sx={text}>(✓) Yes</Typography>
              <Typography
                sx={text}>(✓) 0% </Typography>
              <Typography
                sx={text}>(✓) 100+ Course Listings</Typography>
              <Typography
                sx={text}>(✓) Yes</Typography>
                <Button variant="outlined"
              sx={{

                fontFamily: 'Montserrat',
                textTransform: 'capitalize',
                border:'1px solid #2952A2',
                backgroundColor:'#2952A2',
                borderRadius: '10px',
                p: 1,
                mt: 2,
                color:'white',
                display: { xs: 'block', sm: 'block', md: 'block' },
                "&:hover": {
                  backgroundColor: "#2952A2", // Background color on hover
                  cursor: "pointer",
                  border: 'none',
                  color:'white'
                }
              }
              }>Get Started</Button>
            </Card>
            

          </Grid>
        </Grid>
      </Stack> */}
    </>
  )
}

export default Pricing