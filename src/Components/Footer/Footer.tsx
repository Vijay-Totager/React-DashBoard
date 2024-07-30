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
