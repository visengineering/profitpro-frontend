import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { Box } from "@mui/material";

const user = {
  image: "/avatar1.jpg",
  email: "user@example.com",
  mobile: "123-456-7890",
  user_display_name: "John Doe",
  address: "1234 Main St, City, Country",
};

const SalesRepresentative = () => {
  return (
    <Box className="box-container" sx={{ marginTop: "2rem" }}>
      <Paper>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3} align="center">
            <Box
              src={user.image}
              alt="User Avatar"
              component="img"
              sx={{ height: "100%", width: "20rem" }}
            />
          </Grid>
          <Grid item xs={12} md={9}>
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
        </Grid>
      </Paper>
    </Box>
  );
};

export default SalesRepresentative;
