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
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Drawer() {
  const navigate = useNavigate();
  const location = useLocation();

  const { openDropDown, updateOpen } = useContext(AppContext);

  const [activeButton, setActiveButton] = useState(""); // 'home' is the default active button

  useEffect(() => {
    if (location.pathname === "/salesRepresentative") {
      setActiveButton("sales-representative");
    } else {
      setActiveButton("");
    }
  }, [location]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MUIDrawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerOpenWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open
      >
        <Box className="side-menu-bar" sx={{ height: "100%" }}>
          <DrawerHeader className="drawer-head">
            <Box component="img" src="/logo.png" />
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
                    <img src="/setting-selected.svg" />
                  ) : (
                    <img src="/setting.svg" />
                  )}
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
