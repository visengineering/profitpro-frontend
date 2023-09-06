import React from "react";
import { Box, Typography, InputLabel } from "@mui/material";
import InputField from "../../generic-components/input-field";
import MenuItem from "@mui/material/MenuItem";

const AddNewDealerships = () => {
  return (
    <Box
      className="add-dealersips"
      sx={{
        backgroundColor: "#FFF",
        width: "80%",
        height: "55vh",
        borderRadius: "15px",
        padding: "2rem",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "#000000",
          marginBottom: "1.2rem",
        }}
      >
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
            className="dealerships-field .h1"
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
            placeholder="Enter dealership name"
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
    </Box>
  );
};

export default AddNewDealerships;
