import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Meet from "../../Assets/Images/Usescases/H0.png";
import Usecase1 from "../../Assets/Images/Usescases/w1.webp";
import Usercase2 from "../../Assets/Images/Usescases/w1.webp";
import Usercase3 from "../../Assets/Images/Usescases/mb1.webp";
import { Helmet } from "react-helmet";
import {
  CounterDesktop,
  CounterHeadingDesktop,
  CounterHeadingMobile,
  CounterMobile,
  ButtonStyle,
} from "./Usecases.styles";

const featureData = [
  {
    title: "Community Connection and Sharing",
    description:
      "Sarah's fitness and wellness group becomes a vibrant haven where like-minded individuals gather to share their wellness journeys. Members join with ease, establishing a supportive environment for each other's growth. From beginners seeking guidance to experts offering insights, everyone finds a place to connect and exchange ideas.",
    image: require("../../Assets/Images/Usescases/w2.webp"),
  },
  {
    title: "Personalized Workouts and Nutritional Tips",
    description:
      "With Communn's efficient subscription management, Sarah can effortlessly offer tailored workout plans and nutritional tips to her community members. Each member gains access to the resources they need, enhancing their fitness journey.",
    image: require("../../Assets/Images/Usescases/w3.webp"),
  },
  {
    title: "Motivational Engagement",
    description:
      "Through Communn's dynamic chat system, Sarah orchestrates virtual fitness classes, Q&A sessions, and motivational chats. Members feel a personal connection to Sarah's guidance, fostering a sense of camaraderie that fuels their motivation.",
    image: require("../../Assets/Images/Usescases/w4.webp"),
  },
  {
    title: "Premium Subscription Access",
    description:
      "Communn's subscription management feature ensures members have seamless access to exclusive content. Whether it's advanced workout routines, in-depth nutritional guidance, or live interactive sessions, subscribers benefit from Sarah's expertise in a structured way.",
    image: require("../../Assets/Images/Usescases/w5.webp"),
  },
  {
    title: "Data-Driven Insights",
    description:
      "Communn's analytical tools allow Sarah to understand her community's preferences and engagement patterns. She fine-tunes her content, ensuring that her offerings align with her members' interests, thereby optimizing their experience.",
    image: require("../../Assets/Images/Usescases/w6.webp"),
  },
  {
    title: "Holistic Wellness Ecosystem",
    description:
      "Sarah's wellness community becomes a holistic ecosystem, integrating workout plans, nutritional advice, interactive sessions, and a space for genuine connections. The seamless integration of these elements empowers members to embark on comprehensive wellness journeys.",
    image: require("../../Assets/Images/Usescases/w7.webp"),
  },
];

const Wellness = () => {
  return (
    <>
      <Helmet>
        <title>
          Health Wellness - One Communn - Build & Manage your community
        </title>
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

      {/* Landing Section */}

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
                    FITNESS AND WELLNESS ADVOCATE
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
                    Empowering Wellness Warriors <br></br> with Onecommunn
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
                  ></Typography>
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
                src={Usercase2}
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
                src={Usercase3}
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
              <Box component={"img"} src={Meet} alt="" sx={{ width: "100%" }} />
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
                      Sarah
                    </span>
                    , an enthusiastic fitness and wellness advocate on a mission
                    to cultivate a thriving community of health-conscious
                    individuals. With the remarkable capabilities of Communn,
                    Sarah's vision takes shape in an exhilarating journey
                    towards wellness
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
          "Sarah's Business Transformation with Communn"
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
                        fontSize: { xs: "15px", md: "16px" },
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

export default Wellness;
