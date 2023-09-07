import React, { useState } from "react";
import { Box, Typography, InputLabel } from "@mui/material";
import InputField from "../../generic-components/input-field";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "../../generic-components/button";
import formatDate from "../../../helpers/date";
const style = {
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  border: "none",
  borderRadius: "15px",
  backgroundColor: "#FFF",
  padding: "2rem",
};

const AddNewDealerships = ({ close }) => {
  const date = new Date();
  const fromattedDate = formatDate(date);
  //   const [valuedate, setValueDate] = useState();
  console.log("present time", fromattedDate);
  return (
    <Box className="add-dealersips" sx={style}>
      <Typography className="adding-form-heading">
        Add new Dealership
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box sx={{ width: "50%", paddingRight: "0.5rem" }}>
          <InputLabel className="dealerships-inputLabel">
            Dealership Name
          </InputLabel>
          <InputField
            className="dealerships-field "
            variant="outlined"
            fullWidth
            type="text"
            id="name"
            name="name"
            placeholder="Enter dealership name"
          />
          <InputLabel className="dealerships-inputLabel">Address</InputLabel>
          <InputField
            className="dealerships-field "
            variant="outlined"
            fullWidth
            type="text"
            id="address"
            name="address"
            placeholder="Enter dealership address"
          />
          <InputLabel className="dealerships-inputLabel">
            Phone number
          </InputLabel>
          <InputField
            className="dealerships-field"
            variant="outlined"
            fullWidth
            type="number"
            id="number"
            name="number"
            placeholder="Enter contact number"
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <InputLabel className="dealerships-inputLabel">Email</InputLabel>
          <InputField
            className="dealerships-field"
            variant="outlined"
            fullWidth
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
          />
          <InputLabel className="dealerships-inputLabel">
            Joining date
          </InputLabel>
          <InputField
            className="dealerships-field"
            variant="outlined"
            fullWidth
            type="date"
            id="JoiningDate"
            name="JoiningDate"
            // value={fromattedDate}
            // placeholder={fromattedDate}
          />
          <InputLabel className="dealerships-inputLabel">
            Short description
          </InputLabel>
          <InputField
            className="dealerships-field"
            variant="outlined"
            fullWidth
            type="text"
            id="description"
            name="description"
            placeholder="Enter description about dealership"
          />
        </Box>
      </Box>
      <InputLabel className="dealerships-inputLabel">
        Add salesperson
      </InputLabel>
      <InputField
        className="dealerships-field"
        variant="outlined"
        fullWidth
        type="text"
        id="salesperson"
        name="salesperson"
        placeholder="Select salesperson"
      />
      {/* <MenuItem value="">None</MenuItem>
        <MenuItem value="salesperson1">Salesperson 1</MenuItem>
        <MenuItem value="salesperson2">Salesperson 2</MenuItem>
    */}
      <Box>
        <LoadingButton
          buttonTitle={"Add"}
          variant="outlined"
          size="large"
          styleClass="adding-btn "
          handleClick={close}
        />
        <LoadingButton
          buttonTitle={"Cancel"}
          variant="outlined"
          size="large"
          styleClass="cancel-btn "
          handleClick={close}
        />
      </Box>
    </Box>
  );
};

export default AddNewDealerships;
