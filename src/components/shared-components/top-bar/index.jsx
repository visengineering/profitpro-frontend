import { Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

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
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/avatar4.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;
