import React from "react";
import { Box, Typography } from "@mui/material";
import LoadingButton from "../../generic-components/button";
import AddIcon from "@mui/icons-material/Add";

const DashboardSatusIndicator = () => {
  return (
    <Box className="status-content">
      <Box
        src="/RecordSearch.jpg"
        alt="User Avatar"
        component="img"
        sx={{
          maxHeight: "60vh",
          maxWidth: "80%",
        }}
      />
      <Typography className="record-heading"> No Record Founded</Typography>
      <Typography className="record-text">
        Please add new dealership, you can add multiple user <br /> by adding a
        new deanship
      </Typography>
      <LoadingButton
        buttonTitle="ADD NEW DEALERSHIP"
        variant="contained"
        styleClass="primary-btn"
        endIcon={<AddIcon />}
        sx={{
          width: "256px",
          marginY: "3.5rem",
        }}
      />
    </Box>
  );
};

export default DashboardSatusIndicator;
