import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import SaveHeading from "../../shared-components/SaveHeading";

const Dashboard = ({ heading }) => {
  return (
    <Box className="box-container">
      <SaveHeading heading={heading} />
      <Typography variant="h2">Welcome to Profit Pro App</Typography>
    </Box>
  );
};

export default Dashboard;
