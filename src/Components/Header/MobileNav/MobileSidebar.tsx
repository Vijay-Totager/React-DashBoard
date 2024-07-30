import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Stack, useTheme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import ContactIcon from "@mui/icons-material/Contacts";

import ClearIcon from "@mui/icons-material/Clear";

const menuItems = [
  {
    label: " Main Dashboard",
    value: "Main Dashboard",
    dropdown: false,
    navigate: "/home",
    icon: <HomeIcon />,
  },

  {
    label: "Contact Us",
    value: "Contact Us",
    dropdown: false,
    navigate: "/contacts",
    icon: <ContactIcon />,
  },
];

type Anchor = "top" | "left" | "bottom" | "right";

export default function MobileSideBar() {
  const theme = useTheme();
  const [state, setState] = React.useState({
    left: false,
  });

  const [selectedPages, setSelectedPages] = React.useState<{
    [key: string]: string | null;
  }>({});
  const navigate = useNavigate();

  const handlePageChange = (
    value: string,
    navigateTo: string,
    anchor: Anchor
  ) => {
    setSelectedItem(value);
    navigate(navigateTo);
  };

  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  // Define colors based on the theme mode
  const selectedColor =
    theme.palette.mode === "light"
      ? theme.palette.primary.main
      : theme.palette.secondary.main;
  const notSelectedColor =
    theme.palette.mode === "light"
      ? theme.palette.text.primary
      : theme.palette.text.secondary;
  const selectedBgColor =
    theme.palette.mode === "light"
      ? theme.palette.action.selected
      : theme.palette.action.selected;
  const notSelectedBgColor =
    theme.palette.mode === "light"
      ? theme.palette.background.paper
      : theme.palette.background.paper;
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        p: 2,
      }}
      role="presentation"
    >
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ alignItems: "center" }}
      >
        <Link to="/home  " style={{ textDecoration: "none" }}>
          <Box
            component={"img"}
            src={require("../../../Assets/Images/Communn-new-logo.png")}
            alt=""
            sx={{ width: "60%" }}
          />
        </Link>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          sx={{ border: "1px solid #515151 " }}
        >
          <ClearIcon sx={{ color: "#515151" }} />
        </IconButton>
      </Stack>
      <List>
        {menuItems.map((page) => (
          <React.Fragment key={page.value}>
            <ListItem disablePadding sx={{ fontSize: "20px" }}>
              <ListItemButton
                component={Link}
                to={page.navigate}
                onClick={toggleDrawer(anchor, false)}
                selected={selectedItem === page.value}
                sx={{
                  backgroundColor:
                    selectedItem === page.value
                      ? selectedBgColor
                      : notSelectedBgColor,
                  color:
                    selectedItem === page.value
                      ? selectedColor
                      : notSelectedColor,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                  "& .MuiIconButton-root": {
                    color:
                      selectedItem === page.value
                        ? selectedColor
                        : notSelectedColor,
                  },
                  "& .MuiListItemText-root .MuiTypography-root": {
                    color:
                      selectedItem === page.value
                        ? selectedColor
                        : notSelectedColor,
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
                  onClick={() => {
                    handlePageChange(page.value, page.navigate, "left");
                  }}
                />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              backgroundColor: "white",
              ml: 9,
              borderRadius: "30px",
              border: "1px solid #515151 ",
            }}
          >
            <MenuIcon sx={{ color: "#515151" }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
