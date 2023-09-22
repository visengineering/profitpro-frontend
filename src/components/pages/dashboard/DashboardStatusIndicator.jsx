import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import LoadingButton from "../../generic-components/button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../generic-components/model";
import AddNewDealerships from "./AddNewDealerships";

const DashboardSatusIndicator = ({ className, Title }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box className={className}>
      <Box
        src="/RecordSearch.jpg"
        alt="User Avatar"
        component="img"
        sx={{
          maxHeight: "60vh",
          maxWidth: "80%",
        }}
      />
      <Typography className="record-heading"> {Title}</Typography>
      <Typography className="record-text">
        Please add new dealership, you can add multiple user <br /> by adding a
        new deanship
      </Typography>
      <LoadingButton
        buttonTitle="ADD NEW DEALERSHIP"
        variant="contained"
        styleClass="primary-btn"
        endIcon={<AddIcon />}
        handleClick={handleOpen}
        sx={{
          width: "256px",
          marginY: "3.5rem",
        }}
      />
      <Modal open={open} onClose={handleClose}>
        <AddNewDealerships close={handleClose} />
      </Modal>
    </Box>
  );
};

export default DashboardSatusIndicator;
