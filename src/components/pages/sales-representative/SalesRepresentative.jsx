import React, { useContext } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { Box } from "@mui/material";
import SaveHeading from "../../shared-components/SaveHeading";
import { AppContext } from "../../../hooks/AppContext";

const user = {
  image: "/avatar1.jpg",
  email: "user@example.com",
  mobile: "123-456-7890",
  user_display_name: "John Doe",
  address: "1234 Main St, City, Country",
};

const SalesRepresentative = ({ heading }) => {
  const { open } = useContext(AppContext);
  return (
    <>
      <SaveHeading heading={heading} />
      <Box className={open ? "box-container-open" : "box-container-default"}>
        <Paper
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.15) 5.4px 5.4px 6.2px",
            borderRadius: "10px",
          }}
        >
          <Box
            src={user.image}
            alt="User Avatar"
            component="img"
            sx={{ height: "inherit", width: "30%" }}
          />
          <Grid
            item
            xs={12}
            md={9}
            sx={{ height: "100%", width: "50%", padding: "5rem" }}
          >
            <Typography variant="h6" gutterBottom>
              {user.user_display_name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {user.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Mobile: {user.mobile}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Address: {user.address}
            </Typography>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default SalesRepresentative;
