import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Button, Collapse } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../hooks/AppContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: 200,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Drawer2() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { openDropDown, updateOpen } = useContext(AppContext);
  const [activeButton, setActiveButton] = useState(""); // 'home' is the default active button
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} anchor="left">
        <Box className="side-menu-bar" sx={{ height: "100%" }}>
          <DrawerHeader className="drawer-head">
            <Box
              component="img"
              sx={{ maxHeight: "3rem" }}
              src={open ? "./logo.png" : "./Newlogo.png"}
            />
          </DrawerHeader>
          <Divider />
          <Box className="list-container">
            <List component="nav" sx={{ marginTop: "0.1rem" }}>
              <ListItemButton
                className="main-nav expand-able"
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {openDropDown ? (
                    <Box component="img" src="/setting-selected.svg" />
                  ) : (
                    <Box component="img" src="/setting.svg" />
                  )}
                </ListItemIcon>
                {open && <ListItemText primary="All Dealerships" />}
                {openDropDown ? (
                  <ExpandMoreIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                ) : (
                  <ExpandLessIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                )}
              </ListItemButton>
              <Collapse in={openDropDown && open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    className={`${
                      activeButton === "sales-representative"
                        ? "navbar-btn-active"
                        : ""
                    } mt-10`}
                    sx={{ pl: 6 }}
                    onClick={() => {
                      navigate("/salesRepresentative");
                    }}
                  >
                    <ListItemText primary="Toyoto" />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 6 }}
                    className={`${
                      activeButton === "all-transcripts"
                        ? "navbar-btn-active"
                        : ""
                    } mt-10`}
                  >
                    <ListItemText primary="Honda" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 6 }}
                    className={`${
                      activeButton === "all-transcripts"
                        ? "navbar-btn-active"
                        : ""
                    } mt-10`}
                  >
                    <ListItemText primary="Suzuki" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 6 }}
                    className={`${
                      activeButton === "all-transcripts"
                        ? "navbar-btn-active"
                        : ""
                    } mt-10`}
                  >
                    <ListItemText primary="Hyundai" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 6 }}
                    className={`${
                      activeButton === "all-transcripts"
                        ? "navbar-btn-active"
                        : ""
                    } mt-10`}
                  >
                    <ListItemText primary="Mitsubishi" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 6 }}
                    className={`${
                      activeButton === "all-transcripts"
                        ? "navbar-btn-active"
                        : ""
                    } mt-10`}
                  >
                    <ListItemText primary="Tesla" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 6 }}
                    className={`${
                      activeButton === "all-transcripts"
                        ? "navbar-btn-active"
                        : ""
                    } mt-10`}
                  >
                    <ListItemText primary="preferences" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 6 }}
                    className={`${
                      activeButton === "all-transcripts"
                        ? "navbar-btn-active"
                        : ""
                    } mt-10`}
                  >
                    {/* <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon> */}
                    <ListItemText primary="View All Dealership" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton
                className="main-nav expand-able"
                disabled
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {" "}
                  <Box component="img" src="/folder.svg" />
                </ListItemIcon>
                {open && <ListItemText primary="Manage" />}
                {openDropDown ? (
                  <ExpandMoreIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                ) : (
                  <ExpandLessIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                )}
              </ListItemButton>
              <ListItemButton
                className="main-nav expand-able"
                disabled
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {" "}
                  <Box component="img" src="/pdf.svg" />
                </ListItemIcon>
                {open && <ListItemText primary="Projects" />}
                {openDropDown ? (
                  <ExpandMoreIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                ) : (
                  <ExpandLessIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                )}
              </ListItemButton>
              <ListItemButton
                className="main-nav expand-able"
                disabled
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {" "}
                  <Box component="img" src="/monitor.svg" />
                </ListItemIcon>
                {open && <ListItemText primary="Direction Technique" />}
                {openDropDown ? (
                  <ExpandMoreIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                ) : (
                  <ExpandLessIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                )}
              </ListItemButton>
              <ListItemButton
                className="main-nav expand-able"
                disabled
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {" "}
                  <Box component="img" src="/protection.svg" />
                </ListItemIcon>
                {open && <ListItemText primary="Protection" />}
                {openDropDown ? (
                  <ExpandMoreIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                ) : (
                  <ExpandLessIcon
                    sx={{ display: `${!open ? "none" : "block"}` }}
                  />
                )}
              </ListItemButton>
            </List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                className="toggler-btn"
                sx={{ color: "white", left: `${open ? "280px" : "40px"}` }}
                onClick={toggleDrawer}
              >
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </Box>
            <Box className="personal-info-container">
              <Avatar
                alt="Farhan Tariq"
                className="avatar-info"
                src="/avatar5.jpg"
              />
              {open && (
                <Box className="personal-info">
                  <Typography variant="h6" className="name">
                    Farhan Tariq
                  </Typography>
                  <Typography className="email">
                    dev.farhantariq12b@gmail.com
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
