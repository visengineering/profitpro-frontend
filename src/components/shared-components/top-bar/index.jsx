import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveUserPath = useMemo(() => {
    return location.pathname.includes("/active-user");
  }, [location]);

  const handleButtonClick = () => {
    if (isActiveUserPath) navigate("/salesRepresentative");
    else navigate("/active-user");
  };

  return (
    <AppBar position="fixed" color="inherit" className="top-bar-container">
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: "#343A40" }}
        >
          {!isActiveUserPath ? "Conversation record " : "Active Users List"}
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            sx={{
              backgroundColor: !isActiveUserPath ? "#00BE4C" : "#233EAE",
              color: "#FFFFFF",
              paddingX: "1.4rem",
              marginX: "2.5rem",
              "&:hover": {
                backgroundColor: !isActiveUserPath ? "#00BE4C" : "#233EAE",
              },
            }}
            variant="contained"
            onClick={handleButtonClick}
          >
            {!isActiveUserPath ? "View All Active Users" : "View All Users"}
          </Button>
          <IconButton>
            <Box component="img" src="/bellIcon.svg" />
          </IconButton>
        </Box>
      </Toolbar>
      <LinearProgress
        variant="determinate"
        value={35}
        sx={{
          backgroundColor: "#FFFFFF",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#4F46E5", // Custom progress color
          },
        }}
      />
    </AppBar>
  );
}
export default TopBar;
