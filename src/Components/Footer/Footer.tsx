import { Box, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contacts");
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#f2f2f2f2", p: 2 }}>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          direction={"row"}
        >
          <Stack
            display={"flex"}
            alignItems={"end"}
            flexDirection={"row"}
            justifyContent={"space-around"}
          >
            <Typography
              sx={{
                ml: 5,

                fontFamily: "Montserrat",
                fontSize: { xs: "10px", md: "14px" },
                textAlign: "center",
              }}
            >
              © 2024 Abc. All Rights Reserved
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={10}>
            <Link to="/">{"Support"}</Link>
            <Link to="/">{"License"}</Link>
            <Link to="/">{"Blog"}</Link>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default Footer;
