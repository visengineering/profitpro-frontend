import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Avatar,
  Collapse,
  Drawer as MUIDrawer,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../hooks/AppContext";

const drawerOpenWidth = "300px";
// const drawerCloseWidth = "70px";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Drawer() {
  const navigate = useNavigate();
  // const [drawerWidth, setDrawerWidth] = useState(drawerW);
  const location = useLocation();
  // const [draweropen, setDrawerOpen] = useState(true);

  const { openDropDown, updateOpen } = useContext(AppContext);

  const [activeButton, setActiveButton] = useState(""); // 'home' is the default active button

  useEffect(() => {
    if (location.pathname === "/salesRepresentative") {
      setActiveButton("sales-representative");
    } else {
      setActiveButton("");
    }
    // } else if (
    //   location.pathname.match(/^\/salesRepresentative\/(\d+)\/transcripts$/)
    // ) {
    //   setActiveButton("all-transcripts");
    // }
    // }, [location, draweropen]);
  }, [location]);

  // const changeDrawerWidth = () => {
  //   console.log("coming");
  //   setDrawerOpen(!draweropen);
  //   console.log(draweropen);
  // };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MUIDrawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            // width: draweropen ? drawerOpenWidth : drawerCloseWidth,
            width: drawerOpenWidth,
            // minWidth: draweropen ? drawerOpenWidth : drawerCloseWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open
      >
        <Box className="side-menu-bar" sx={{ height: "100%" }}>
          <DrawerHeader className="drawer-head">
            {/* {draweropen ? ( */}
            <Box component="img" src="/logo.png" />
            {/* // ) : (
            //   <Box component="img" src="/Newlogo.png" />
            // )} */}
          </DrawerHeader>
          <Divider />
          <Box className="list-container">
            <List component="nav" sx={{ marginTop: "0.1rem" }}>
              {/* <ListItemButton
                onClick={() => {
                  navigate("/");
                }}
                className={`${
                  activeButton === "dashboard" ? "navbar-btn-active" : ""
                } main-nav`}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton> */}
              <ListItemButton
                className="main-nav expand-able"
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {/* {draweropen ? (
                    <Box>
                      ( */}
                  {openDropDown ? (
                    <img src="/setting-selected.svg" />
                  ) : (
                    <img src="/setting.svg" />
                  )}
                  {/* ){" "}
                    </Box>
                  ) : (
                    <Box component="img" src="/setting-selected.svg" />
                  )} */}
                </ListItemIcon>
                <ListItemText primary="All Dealerships" />
                {openDropDown ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </ListItemButton>
              <Collapse in={openDropDown} timeout="auto" unmountOnExit>
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
                  <img src="/folder.svg" />
                </ListItemIcon>
                <ListItemText primary="Manage" />
                {openDropDown ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </ListItemButton>
              <ListItemButton
                className="main-nav expand-able"
                disabled
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {" "}
                  <img src="/pdf.svg" />
                </ListItemIcon>
                <ListItemText primary="Projects" />
                {openDropDown ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </ListItemButton>
              <ListItemButton
                className="main-nav expand-able"
                disabled
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {" "}
                  <img src="/monitor.svg" />
                </ListItemIcon>
                <ListItemText primary="Direction Technique" />
                {openDropDown ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </ListItemButton>
              <ListItemButton
                className="main-nav expand-able"
                disabled
                onClick={updateOpen}
              >
                <ListItemIcon>
                  {" "}
                  <img src="/protection.svg" />
                </ListItemIcon>
                <ListItemText primary="Protection" />
                {openDropDown ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </ListItemButton>
              {/* <ListItemButton className="main-nav">
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Mobile Dealership" />
              </ListItemButton>
              <ListItemButton className="main-nav">
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Bike Dealership" />
              </ListItemButton> */}

              {/* <ListItemIcon className="drawerIcon">
                <ArrowForwardIcon
                  onClick={() => {
                    console.log("hdasd");
                    changeDrawerWidth();
                  }}
                />
              </ListItemIcon> */}
            </List>
            <Box className="personal-info-container">
              <Avatar
                alt="Farhan Tariq"
                className="avatar-info"
                src="/avatar5.jpg"
              />
              <Box className="personal-info">
                <Typography variant="h6" className="name">
                  Farhan Tariq
                </Typography>
                <Typography className="email">
                  dev.farhantariq12b@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </MUIDrawer>
    </Box>
  );
}

// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 300;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   backgroundColor: "#FFFFFF",
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

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": {
//       ...openedMixin(theme),
//       backgroundColor: "#0E1B6B",
//       color: "#FFFFFF", // Set the background color for the open drawer
//     },
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": {
//       ...closedMixin(theme),
//       backgroundColor: "#0E1B6B",
//       color: "#FFFFFF", // Set the background color for the closed drawer
//     },
//   }),
// }));

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{
//               color: "#343A40",
//             }}
//           >
//             Active User
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// }
