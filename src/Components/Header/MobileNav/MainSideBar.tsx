import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider, Stack, useTheme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import ContactIcon from "@mui/icons-material/Contacts";

const menuItems = [
  { label: ' Main Dashboard', value: 'Main Dashboard', dropdown: false, navigate: '/home', icon: <HomeIcon /> },
  
//   { label: 'About Us', value: 'About Us', dropdown: false, navigate: '/about', icon: <AboutIcon /> },
  { label: 'Contact Us', value: 'Contact Us', dropdown: false, navigate: '/contacts', icon: <ContactIcon /> },
];

export default function MobileSideBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const handlePageChange = (value: string, navigateTo: string) => {
    setSelectedItem(value);
    navigate(navigateTo);
  };

  // Define colors based on the theme mode
  const selectedColor = theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.secondary.main;
  const notSelectedColor = theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.text.secondary;
  const selectedBgColor = theme.palette.mode === 'light' ? theme.palette.action.selected : theme.palette.action.selected;
  const notSelectedBgColor = theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.paper;

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ alignItems: "center" }}
      >
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Box
            component={"img"}
            src={require("../../../Assets/Images/Communn-new-logo.png")}
            alt=""
            sx={{ width: "100%" }}
          />
        </Link>
      </Stack>
      <List>
        {menuItems.map((page) => (
          <React.Fragment key={page.value}>
            <ListItem disablePadding sx={{ fontSize: "20px" }}>
              <ListItemButton
                component={Link}
                to={page.navigate}
                onClick={() => handlePageChange(page.value, page.navigate)}
                selected={selectedItem === page.value}
                sx={{
                  backgroundColor: selectedItem === page.value ? selectedBgColor : notSelectedBgColor,
                  color: selectedItem === page.value ? selectedColor : notSelectedColor,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                  '& .MuiIconButton-root': {
                    color: selectedItem === page.value ? selectedColor : notSelectedColor,
                  },
                  '& .MuiListItemText-root .MuiTypography-root': {
                    color: selectedItem === page.value ? selectedColor : notSelectedColor,
                    fontWeight: selectedItem === page.value ? 700 : 500,
                  },
                }}
              >
                {page.icon && (
                  <IconButton edge="start" size="small">
                    {page.icon}
                  </IconButton>
                )}
                <ListItemText
                  primary={page.label}
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "16px",
                      fontWeight: 500,
                      fontFamily: "DM Sans",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>

    </Box>
  );
}
