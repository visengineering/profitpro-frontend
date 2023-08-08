import { Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

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

function TopBar() {
  return (
    <AppBar position="fixed" color="inherit" className="top-bar-container">
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" noWrap component="div">
          User List
        </Typography>
        <IconButton>
          <NotificationsNoneIcon sx={{ color: "black", fontSize: "30px" }} />
        </IconButton>
        {/* </Box> */}
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;