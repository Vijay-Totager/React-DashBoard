import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Usecase1 from "../../Assets/Images/Usescases/Bbg.webp";
import { Helmet } from "react-helmet";
import {
  CounterDesktop,
  CounterHeadingDesktop,
  CounterHeadingMobile,
  CounterMobile,
  ButtonStyle
} from "./Usecases.styles";

const featureData = [
  {
    title: "Community Building and Engagement",
    description:
      "Lisa establishes the 'JewelAdorn Community' on Communn, offering her customers and followers an exclusive space to connect, discuss fashion, and access her expertise.",
    image: require("../../Assets/Images/Usescases/3.webp"),
  },
  {
    title: "Subscription Management",
    description:
      "Members can easily choose a plan, subscribe, and enjoy the perks. Communn's subscription management automates billing, ensuring a seamless experience for Lisa and her customers.",
    image: require("../../Assets/Images/Usescases/4.webp"),
  },
  {
    title: "Community Engagement with Members",
    description:
      "Lisa shares her latest collection in the community, fostering engagement and customer feedback, thereby strengthening the bond between her and her customers.",
    image: require("../../Assets/Images/Usescases/5.webp"),
  },
  {
    title: "Payment and Transaction Management",
    description:
      "Communn allows Lisa to monitor subscription payments, revenue, popular plans, inventory planning, and financial transparency by providing detailed reports and settled/unsettled balances.",
    image: require("../../Assets/Images/Usescases/6.png"),
  },

  {
    title: "Analytics and Insights",
    description:
      "Lisa uses analytics dashboard to track community growth, engagement metrics, and post reach, identifying higher engagement for posts about handmade techniques, thereby adjusting her content strategy.",
    image: require("../../Assets/Images/Usescases/7.webp"),
  },
  {
    title: "Chat System for Real-Time Interaction",
    description:
      "Lisa uses live chat to showcase new products, allowing customers to ask questions, share preferences, and make purchase inquiries, enhancing their personalized shopping experience.",
    image: require("../../Assets/Images/Usescases/8.png"),
  },
];

const Business = () => {
  return (
    <>
      <Helmet>
        <title>Business - One Communn - Build & Manage your community</title>
        <meta
          name="description"
          content="Automate Community Management with AI-Powered
          Subscription effortlessly
          Our AI-powered platform enhances community management with tools for user data management, interaction,communication, subscription and payment processing, content management, and advanced analytics"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="author"
          content="Automate Community Management with AI-Powered
          Subscription effortlessly
          Our AI-powered platform enhances community management with tools for user data management, interaction,communication, subscription and payment processing, content management, and advanced analytics"
        />
        <meta
          name="keywords"
          content="Automate Community Management with AI-Powered
          Subscription effortlessly
          Our AI-powered platform enhances community management with tools for user data management, interaction,communication, subscription and payment processing, content management, and advanced analytics"
        />
      </Helmet>

      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "fit-content",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          mt:-12,
        }}
      >
        <Stack>
          <Grid
            container
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  ml: { xs: 0, md: 10 },
                  pb: 6,
                  backgroundColor: "#ffffff",
                }}
              >
                <Paper sx={{ p: 5, boxShadow: "none" }}>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: { xs: "12px", sm: "12px", md: "20px" },
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    BUSINESS OWNER
                  </Typography>
                  <Typography
                    sx={{
                      color: "#2A53A2",
                      fontSize: { xs: "20px", md: "30px" },
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Boosting Business Engagement<br></br> with   Onecommunn
                  </Typography>
                  
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      textAlign: { xs: "center", md: "left" },
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: "30px",
                      mr: { xs: 0, md: 20 },
                    }}
                  >
                    Welcome to Communn, where communities flourish, connections
                    thrive, and change becomes possible. We are More than a
                    platform; a community revolution uniting strength and
                    genuine connections.
                  </Typography>
                  <Button variant="contained" sx={ButtonStyle}>
                    Try COMMUNN for Free
                  </Button>
                </Paper>
              </Stack>
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                backgroundImage: `url(${Usecase1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                component={"img"}
                src={require("../../Assets/Images/Usescases/Bbg.webp")}
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                component={"img"}
                src={require("../../Assets/Images/Usescases/mb1.webp")}
                alt=""
                sx={{ width: "120%", mt: -10, ml: { xs: 7, md: 0 } }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>

      {/* Counter Box Section */}

      {/* Mobile Version */}
      <Stack
        sx={{
          backgroundColor: "#F3F3F3",
          height: "261px",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: "10px",
          alignItems: "center",
          m: 5,
          display: { xs: "block", md: "none" },
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "18px", md: "25px" },
            fontFamily: "Montserrat",
            fontWeight: "bold",
            textAlign: "center",
            ml: 5,
            mr: 5,
            mt: 3,
            pt: 3,
          }}
        >
          Businesses Thrive with Communn: A Path to Success
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={CounterMobile}>0%</Typography>
            <Typography sx={CounterHeadingMobile}>Platform Fees</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={CounterMobile}>73%</Typography>
            <Typography sx={CounterHeadingMobile}>Engagement</Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Typography sx={CounterMobile}>50%</Typography>
            <Typography sx={CounterHeadingMobile}>Revenue Growth</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={CounterMobile}>18%</Typography>
            <Typography sx={CounterHeadingMobile}>Member Retention</Typography>
          </Grid>
        </Grid>
      </Stack>

      {/* Mobile Version */}

      {/* Desktop Version */}
      <Box
        p={15}
        sx={{
          mt: { xs: 0, md: 5 },
          p: { xs: 5, md: 15 },
          display: { xs: "none", md: "block" },
        }}
      >
        <Stack
          sx={{
            backgroundColor: "#F3F3F3",
            height: "261px",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: "10px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: { xs: "18px", md: "25px" },
              fontFamily: "Montserrat",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Businesses Thrive with Communn: A Path to Success
          </Typography>
          <Stack mt={2}>
            <Grid container spacing={25}>
              <Grid item xs={6} md={3}>
                <Typography sx={CounterDesktop}>0%</Typography>
                <Typography sx={CounterHeadingDesktop}>
                  Platform Fees
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography sx={CounterDesktop}>73%</Typography>
                <Typography sx={CounterHeadingDesktop}>Engagement</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography sx={CounterDesktop}>50%</Typography>
                <Typography sx={CounterHeadingDesktop}>
                  Revenue Growth
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography sx={CounterDesktop}>18%</Typography>
                <Typography sx={CounterHeadingDesktop}>
                  Member Retention
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Box>

      {/* Desktop Version */}

      {/* Sub Landing Section  */}

      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack>
          <Grid
            container
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Box
                component={"img"}
                src={require("../../Assets/Images/Usescases/H0.png")}
                alt=""
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  ml: { xs: 0, md: 5 },
                  pt: 6,
                  pb: 6,
                  backgroundColor: "#ffffff",
                  borderRadius: "15px 0px 0px 15px",
                }}
              >
                <Paper
                  sx={{
                    p: { xs: 1.5, md: 5 },
                    m: { xs: 2, md: 15 },
                    borderRadius: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#1A2D4C",
                      textAlign: { xs: "left", md: "left" },
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: "30px",
                    }}
                  >
                    Meet{" "}
                    <span
                      style={{
                        color: "#3B9B7F",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      Lisa
                    </span>
                    , a small business owner with an online boutique
                    specializing in unique handmade jewelry. Explore how Communn
                    transforms her business:
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Stack>
        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "20px", md: "30px" },
            fontFamily: "Montserrat",
            fontWeight: "bold",
            pb: 2,
            textAlign: "center",
          }}
        >
          "Lisa's Business Transformation with Communn"
        </Typography>
      </Stack>

      {/* Features Data Start */}
      {featureData.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "fit-content", md: "100vh" },
          }}
        >
          <Stack>
            <Grid
              container
              justifyContent={"center"}
              alignContent={"center"}
              alignItems={"center"}
              display={"flex"}
              spacing={{ xs: 2, md: 10 }}
              sx={{
                flexDirection: {
                  xs: "column-reverse",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                  
                },
                
                paddingBottom:{
                  md: index % 2 === 0 ? "0px" : "80px",
                },
                

              }}
            >
              <Grid item xs={12} md={5} sx={{ m: { xs: 2, md: 0 } }}>
                <Box
                  component={"img"}
                  src={feature.image}
                  alt=""
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack
                  sx={{
                    ml: 2,
                    pt: { xs: 0, md: 6 },
                    pb: { xs: 0, md: 6 },
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                  }}
                >
                  <Paper sx={{ p: 2, boxShadow: "none" }}>
                    <Typography
                      sx={{
                        color: "#2A53A2",
                        fontSize: { xs: "18px", md: "24px" },
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        pb: 2,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        color: "#1A2D4C",
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "30px",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      ))}

      {/* Features Data End */}
    </>
  );
};

export default Business;
