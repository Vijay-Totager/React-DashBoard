import { Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import background from "../../Assets/Images/features/Bg.webp";
import feature from "../../Assets/Images/features/feature6/1.webp";

const features = [
  {
    title: "Empower Members as Contributors",
    description:
      "Create a knowledge-rich community by allowing members to share their insights, tips, and experiences, fostering an engaging hub of shared expertise.",
    image: require("../../Assets/Images/features/feature1/2.png"),
  },
  {
    title: "Quality Control in Your Hands",
    description:
      "Ensure only relevant and valuable content is showcased. Grant admin-exclusive posting rights or extend it to members. Admins can curate and maintain the community's essence.",
    image: require("../../Assets/Images/features/feature1/3.png"),
  },
  {
    title: "Insights and Oversight for Admins",
    description:
      "Admins monitor content, manage posts, and adhere to community guidelines, ensuring content quality and engagement through detailed reporting.",
    image: require("../../Assets/Images/features/feature1/2.png"),
  },
];

const featureData = [
  {
    title: "Empowerment through Sharing",
    description:
      " Picture this: You're an admin with multiple communities. With our smart filters, effortlessly navigate through your communities and find exactly what you need. No more hunting, just swift access.",
    image: require("../../Assets/Images/features/feature6/2.webp"),
  },
  {
    title: "Admin's Watchful Eye",
    description:
      "Admins use detailed reports for content oversight, ensuring compliance with guidelines and maintaining quality.",
    image: require("../../Assets/Images/features/feature6/3.webp"),
  },
  {
    title: "Boost Engagement, Expand Reach",
    description:
      "Admins enable every member to post, maximizing engagement. With 100% reach, your community's value amplifies, sparking lively discussions and sharing of diverse perspectives.",
    image: require("../../Assets/Images/features/feature6/4.webp"),
  },

  {
    title: "Community Empowerment & Resolution",
    description:
      "Empower members to report posts for moderation. Admins analyze reported content, taking swift actions to maintain a harmonious, productive environment.",
    image: require("../../Assets/Images/features/feature6/5.webp"),
  },

  {
    title: "Quality Assurance & Flexibility",
    description:
      "Admins can make posts inactive to preserve history or delete them for a clean slate. Edits and content management ensure a dynamic, evolving community space. This means every piece of content adds value, ensuring a meaningful experience for everyone.",
    image: require("../../Assets/Images/features/feature6/6.webp"),
  },
];

const Post = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          overflow: "hidden",
          height: "100vh",
          mt:-12,
        }}
      >
        {" "}
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            color="#2952A2"
            fontSize={"36px"}
            fontWeight={700}
            sx={{ fontFamily: "Montserrat", mt: 20 }}
          >
            Customize subscriptions with
          </Typography>
          <Typography
            color="#3B9B7F"
            fontSize={"36px"}
            fontWeight={700}
            sx={{ fontFamily: "Montserrat" }}
          >
            Subscription Management
          </Typography>
        </Stack>
      </Box>
      <Card
        elevation={0}
        sx={{ backgroundColor: "transparent", height: "fit-content", mt: -65 }}
      >
        <CardMedia
          component="img"
          alt="Background Image"
          src={feature}
          sx={{
            height: "100%",
            objectFit: "cover",
            position: "relative",
          }}
        />
      </Card>

      <Stack mt={10}>
        <Typography
          sx={{
            color: "#2A53A2",
            fontSize: "30px",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            textAlign: "center",
            pb: 2,
          }}
        >
          Effortless Community Content Management
        </Typography>
      </Stack>

      {/* Features Start */}
      <Stack
        display={"flex"}
        flexDirection={"row"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          ml: 4,
          mr: 4,
          pt: { xs: 5, md: 10 },
          pb: { xs: 5, md: 10 },
          mb: 5,
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          display={"flex"}
          flexDirection={"row"}
          alignContent={"center"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} md={3.5} key={index}>
              <Card
                sx={{
                  pt: 7,
                  pb: 7,
                  pl: 1,
                  pr: 1,
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component={"img"}
                  src={feature.image}
                  alt=""
                  sx={{ width: "35%" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "17px",
                    fontWeight: "bold",
                    p: 1,
                    textAlign: "center",
                    color: "#2952A2",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    color: "#000000",
                    p: 1,
                    textAlign: "center",
                  }}
                >
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
      {/* Features End */}

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
                  md: index % 2 === 0 ? "0px" : "100px",
                },


              }}
            >
              <Grid item xs={12} md={5.5} sx={{ m: { xs: 2, md: 0 } }}>
                <Box
                  component={"img"}
                  src={feature.image}
                  alt=""
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={4.5}>
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

      {/* Features Data Start */}
    </>
  );
};

export default Post;
