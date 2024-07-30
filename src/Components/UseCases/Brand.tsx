
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Usecase1 from "../../Assets/Images/Usescases/Bbg.webp";
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
    title: "The EcoChic Tribe",
    description:
      "EcoChic establishes the GreenWave community, a hub for environmentally conscious individuals who share a love for sustainable fashion and a greener lifestyle.",
    image: require("../../Assets/Images/Usescases/B1.png"),
  },
  {
    title: "Exclusive Subscription Plans",
    description:
      "EcoChic offers subscription tiers like EcoPro and GreenElite.  Subscribers get early access to new collections, special discounts, and sustainability tips tailored to their plan.",
    image: require("../../Assets/Images/Usescases/B2.webp"),
  },
  {
    title: "Interactive Styling Workshops",
    description:
      "GreenWave hosts monthly styling webinars, where subscribers interact with professional stylists. They learn how to mix and match EcoChic pieces, ensuring they make the most of their sustainable wardrobe.",
    image: require("../../Assets/Images/Usescases/B3.png"),
  },
  {
    title: "Sustainable Living Challenges",
    description:
      "EcoChic creates Green Challenges for the community. Subscribers engage in eco-friendly practices, from upcycling old clothes to reducing plastic usage. Prizes for successful challenges include exclusive EcoChic merchandise.",
    image: require("../../Assets/Images/Usescases/B4.webp"),
  },

  {
    title: "Preview of Ethical Collaborations",
    description:
      "Through GreenWave, subscribers get sneak peeks of upcoming collaborations with ethical brands. They have the chance to pre-order limited-edition products before they hit the market.",
    image: require("../../Assets/Images/Usescases/B5.png"),
  },
  {
    title: "Customized Eco-Tips",
    description:
      "Subscribers receive personalized tips on adopting sustainable habits in their daily lives. Whether it's recycling, energy-saving, or mindful consumption, EcoChic empowers them to make a positive impact.",
    image: require("../../Assets/Images/Usescases/B6.png"),
  },
  {
    title: "Loyalty Rewards & Points",
    description:
      "Active GreenWave members earn EcoCoins for engagement. These coins can be redeemed for exclusive discounts, plant-a-tree initiatives, or even a tree named after them.",
    image: require("../../Assets/Images/Usescases/B7.png"),
  },
  {
    title: "Annual EcoFest Gathering",
    description:
      "EcoChic organizes the EcoFest, an annual event bringing GreenWave members together. The festival celebrates sustainability with workshops, eco-fashion shows, and guest speakers.",
    image: require("../../Assets/Images/Usescases/B8.png"),
  },
  {
    title: "GreenWave Influencers",
    description:
      "Dedicated GreenWave members are recognized as brand ambassadors. They showcase their EcoChic outfits, share eco-tips, and inspire others to join the movement.",
    image: require("../../Assets/Images/Usescases/B9.png"),
  },
  {
    title: "Subscription Customization",
    description:
      "Subscribers have the flexibility to switch between EcoChic subscription plans, allowing them to align with their evolving needs while staying committed to a sustainable lifestyle.",
    image: require("../../Assets/Images/Usescases/B10.png"),
  },
];

const Brand = () => {
  return (
    <>
      <Helmet>
        <title>Brand - Communn - Build & Manage your community</title>
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
                    a fashion brand
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
                    Elevated Lifestyle Brand <br></br>Experience With
                    Onecommunn
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
                    Welcome to Onecommunn, where communities flourish, connections
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
                src={require("../../Assets/Images/Usescases/B0.png")}
                alt=""
                sx={{ width: "70%" }}
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
                      EcoChic
                    </span>
                    , a sustainable fashion brand that champions eco-friendly
                    living. By leveraging Onecommunn's power, EcoChic
                    revolutionizes brand engagement and subscription models
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
          "EcoChic's Business Transformation with Oneommunn"
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

export default Brand;
