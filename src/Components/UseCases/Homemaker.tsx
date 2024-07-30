import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Usecase1 from "../../Assets/Images/Usescases/Hbg.webp";
import { Helmet } from "react-helmet";
import {
  ButtonStyle,
  CounterDesktop,
  CounterHeadingDesktop,
  CounterHeadingMobile,
  CounterMobile,
} from "./Usecases.styles";

const featureData = [
  {
    title: "Culinary Dreams Come True",
    description:
      "With Communn's intuitive platform, Aisha realizes she can create a community dedicated to her culinary expertise. She starts sharing her delicious recipes, meal planning tips, and cooking hacks. What was once a hobby now becomes a space where she can inspire and uplift others through her love for cooking.",
    image: require("../../Assets/Images/Usescases/H1.webp"),
  },
  {
    title: "Nurturing a Supportive Network",
    description:
      "Nurturing a Supportive Network As Aisha's community grows, she witnesses a beautiful transformation. Home makers from different corners of the world join her community, exchanging recipes, sharing cultural insights, and cheering each other on. Aisha becomes not just a homemaker but also a mentor and friend to many",
    image: require("../../Assets/Images/Usescases/H2.webp"),
  },
  {
    title: "Transitioning to Entrepreneurship",
    description:
      "Communn's subscription management catches Aisha's attention. She recognizes the opportunity to offer exclusive cooking classes, meal plans, and personalized consultations through subscription tiers. With Communn's tools, Aisha turns her passion into a source of income, contributing to her family's financial stability.s",
    image: require("../../Assets/Images/Usescases/H3.webp"),
  },
  {
    title: "A Confidence Boost",
    description:
      "Aisha's journey as a community creator boosts her self-confidence. She's no longer defined solely by her role as a homemaker; she's an entrepreneur, a leader, and a creator. Her community becomes a hub of positivity, where members uplift and empower each other to pursue their dreams.",
    image: require("../../Assets/Images/Usescases/H4.png"),
  },
  {
    title: "Tracking Growth with Analytics",
    description:
      "Communn's analytics provide Aisha with insights into what her community members love most. She tailors her content and offerings based on this feedback, ensuring that she's meeting their needs and aspirations effectively.",
    image: require("../../Assets/Images/Usescases/H5.webp"),
  },
  {
    title: "A Journey of Transformation",
    description:
      "With Communn, Aisha discovers that her passion for cooking isn't just a hobby; it's a powerful tool for personal transformation. Her journey from a traditional homemaker to a dynamic community creator inspires her family and friends, showing them that with the right platform, one can create a life of purpose and empowerment.",
    image: require("../../Assets/Images/Usescases/H6.png"),
  },
];

const Homemaker = () => {
  return (
    <>
      <Helmet>
        <title>Home Maker -One Communn - Build & Manage your community</title>
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
                    Home Maker
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
                    Empowering Home Makers for a Fresh Start
                    with Onecommunn
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
                src={require("../../Assets/Images/Usescases/Hbg.webp")}
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
                      Aisha
                    </span>
                    , a dedicated homemaker who has always put her family's
                    needs before her own aspirations. However, with the advent
                    of Onecommunn, her life takes an unexpected turn towards
                    personal growth and financial independence.
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
          "Aisha's Business Transformation with Onecommunn"
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
                        textAlign: "left",
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

export default Homemaker;
