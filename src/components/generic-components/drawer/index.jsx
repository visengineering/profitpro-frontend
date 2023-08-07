import React from "react";
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
import HomeIcon from "@mui/icons-material/Home";
import { Collapse, Drawer as MUIDrawer, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StorefrontIcon from "@mui/icons-material/Storefront";
const drawerWidth = "300px";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Drawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MUIDrawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            minWidth: "300px",
          },
        }}
        variant="persistent"
        anchor="left"
        open
      >
        <Box className="side-menu-bar">
          .
          <DrawerHeader sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img" src="/logo.png"></Box>
          </DrawerHeader>
          <Divider />
          <Typography className="active-page-text">Dashboard</Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "inherit" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="DealerShip 1" />
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => navigate("/salesRepresentative")}
                >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sales Representatives" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="All Transcripts" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="DealerShip 2" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="DealerShip 3" />
            </ListItemButton>
          </List>
        </Box>
      </MUIDrawer>
    </Box>
  );
}
