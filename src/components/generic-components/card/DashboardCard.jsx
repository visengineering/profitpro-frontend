import React, { useState } from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const DashboardCard = ({ cardDataList }) => {
  const [menu, setMenu] = useState(false);
  const handleMenuIcon = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1rem",
            paddingX: "1rem",
          }}
        >
          <Box
            // sx={{ paddingTop: "1rem", paddingX: "1rem" }}
            component="img"
            src={cardDataList.image}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <IconButton sx={{ height: "0px" }}>
              <MoreVertIcon onClick={handleMenuIcon} />
            </IconButton>
            {menu ? (
              <Paper
                sx={{
                  width: 120,
                  maxWidth: "100%",
                  position: "fixed",
                  marginTop: "1.1rem",
                  marginRight: "1rem",
                }}
              >
                <MenuList>
                  <MenuItem>
                    <Box
                      src="/edit.svg"
                      alt="User Avatar"
                      component="img"
                      sx={{
                        maxHeight: "2vh",
                        width: "50px",
                        cursor: "pointer",
                      }}
                    />

                    <Typography className="font">Edit</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Box
                      src="/delete.svg"
                      alt="User Avatar"
                      component="img"
                      sx={{
                        maxHeight: "2vh",
                        width: "50px",
                        cursor: "pointer",
                      }}
                    />

                    <Typography className="font">Delete</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Box
                      src="/edit.svg"
                      alt="User Avatar"
                      component="img"
                      sx={{
                        maxHeight: "2vh",
                        width: "50px",
                        cursor: "pointer",
                      }}
                    />

                    <Typography className="font">Unpin</Typography>
                  </MenuItem>
                </MenuList>
              </Paper>
            ) : (
              ""
            )}
          </Box>
        </Box>

        <CardContent>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 500,
            }}
          >
            {cardDataList.dealershipsName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDataList.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardCard;
