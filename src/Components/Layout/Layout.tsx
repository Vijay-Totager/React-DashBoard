import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Grid } from "@mui/material";
import MainSideBar from "../Header/MobileNav/MainSideBar";

export const Layout = () => {
  return (
    <Grid container>
      <Grid
        item
        xl={2} md={2} lg={2} 
        sx={{
          position: "fixed",
          height: "100vh",
          width: "16.66%",
          overflowY: "auto",
          top: 0,
          left: 0,
          zIndex: 1,
          backgroundColor: "background.paper",
        }}
        display={{ xs: "none", xl: "block",md:'none',lg:'block',sm:'none' }}
      >
        <MainSideBar />
      </Grid>

      <Grid
        item
        xl={10}
        sx={{
          marginLeft: { xl: "16.66%" },
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          boxSizing:'border-box'
        }}
      >
        <Box
          sx={{
            flex: "0 0 auto",
            position: "sticky",
            top: 0,
            zIndex: 2,
            backdropFilter: "blur(10px)",

            transition: "background-color 0.3s ease",
            ml: 1,
            mr: 1, //
          }}
        >
          <Header />
        </Box>

        <Box
          sx={{
            flex: "1 1 auto",

            paddingTop: "16px",
          }}
        >
          <Outlet />
        </Box>

        <Box>
          {/* Footer */}
          <Footer />
        </Box>
      </Grid>
    </Grid>
  );
};
