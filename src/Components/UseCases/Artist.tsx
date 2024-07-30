import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Meet from "../../Assets/Images/Usescases/H0.png";
import Usecase1 from "../../Assets/Images/Usescases/w1.webp";
import Usercase2 from "../../Assets/Images/Usescases/w1.webp";
import Usercase3 from "../../Assets/Images/Usescases/mb1.webp";
import { Helmet } from "react-helmet";
import { CounterDesktop, CounterHeadingDesktop, CounterHeadingMobile, CounterMobile, ButtonStyle, } from "./Usecases.styles";


const featureData = [
  {
    title: "The Spark of Inspiration",
    description:
      "Adithi, an artist and hobbyist, always wanted to share her passion for painting. She believed in the magic of connecting with like-minded individuals who appreciate her art. And that's when she stumbled upon Communn.",
    image: require("../../Assets/Images/Usescases/A1.webp"),
  },
  {
    title: "Connecting and Collaborating",
    description:
      "With Communn's user-friendly interface, Adithi could easily invite fellow artists, art enthusiasts, and potential buyers to her community. This wasn't just a space for sharing; it was a platform for collaborating on projects, exchanging techniques, and even organizing virtual art shows.",
    image: require("../../Assets/Images/Usescases/A2.webp"),
  },
  {
    title: "Earning Through Passion",
    description:
      "Communn's subscription management captured Adithi's attention. She saw the potential of turning her community into a source of income. By offering exclusive content, tutorials, and personalized art commissions through subscription tiers, she could earn while doing what she loved most.",
    image: require("../../Assets/Images/Usescases/A3.webp"),
  },
  {
    title: "Empowering the Community",
    description:
      "As Adithi's community grew, she noticed its members becoming more than just participants; they were becoming a close-knit family. She fostered an environment where constructive feedback, encouragement, and support flourished.",
    image: require("../../Assets/Images/Usescases/A4.webp"),
  },
  {
    title: "Analytics for Growth",
    description:
      "With Communn's analytics, Adithi could track engagement, learn which content resonated the most, and adjust her offerings accordingly. This data-driven approach allowed her to cater to her community's preferences and aspirations.",
    image: require("../../Assets/Images/Usescases/A5.webp"),
  },
  {
    title: "Beyond Boundaries",
    description:
      "As Adithi's community flourished, she realized that Communn's platform wasn't just about art; it was about connections, empowerment, and unlocking hidden potential. Her journey as a community creator not only brought her financial rewards but also friendships and Artistic growth.",
    image: require("../../Assets/Images/Usescases/A6.webp"),
  },
];

const Artist = () => {
  return (
    <>


      <Helmet>
        <title>Artist - Communn - Build & Manage your community</title>
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
                    an artist
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
                    Anyone can use
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
                  <Button
                    variant="contained"
                    sx={ButtonStyle}
                  >
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


      {/* Sub Landing Section */}

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
                src={Meet}
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
                  sx={{ p: { xs: 1.5, md: 5 }, m: { xs: 2, md: 15 }, borderRadius: "15px" }}
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
                      Adithi
                    </span>
                    , a creative soul who never thought of herself as a
                    community creator. But then she discovered Onecommunn, and
                    suddenly a world of possibilities opened up before her.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>



      {/* Content  Box Section */}



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
          "Adithi's Business Transformation with Onecommunn"
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
                
                paddingBottom: {
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
              <Grid item xs={12} md={5} sx={{

              }}>
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
export default Artist;
