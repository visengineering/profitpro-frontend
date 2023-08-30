import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const testContext = useOutletContext();
  console.log(testContext, ">>>>");

  return (
    <Box className="box-container">
      <Typography variant="h2">Welcome to Profit Pro App</Typography>
    </Box>
  );
};

export default Dashboard;
