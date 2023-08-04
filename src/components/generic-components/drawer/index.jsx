import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import { Collapse, Drawer as MUIDrawer } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = "15%";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }),
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#F8F9FA",
  "&:hover": {
    backgroundColor: "#F8F9FA",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Drawer() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ display: "flex", width: "100%", flexDirection: "row" }}
      >
        <Box sx={{ width: "15%" }}></Box>
        <Toolbar
          sx={{
            width: "85%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            User List
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box></Box>
        </Toolbar>
      </AppBar>
      <MUIDrawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            minWidth: "240px",
          },
        }}
        variant="persistent"
        anchor="left"
        open
      >
        <Box className="side-menu-bar">
          <DrawerHeader sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img" src="/logo.png"></Box>
          </DrawerHeader>
          <Divider />

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "inherit" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => navigate("/salesRepresentative")}>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Sales Representatives" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <GridViewIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: "white" }}>•</ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ListItemIcon sx={{ color: "white" }}>•</ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>{" "}
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ListItemIcon sx={{ color: "white" }}>•</ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemIcon>
                <GridViewIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </List>
        </Box>
      </MUIDrawer>
    </Box>
  );
}
