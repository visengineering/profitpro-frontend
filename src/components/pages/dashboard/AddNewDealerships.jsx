import React, { useState, useContext } from "react";
import { Box, Typography, InputLabel, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "../../generic-components/button";
import formatDate from "../../../helpers/date";
import { useFormik } from "formik";
import { AppContext } from "../../../hooks/AppContext";

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
  const { setAddDealership } = useContext(AppContext);
  // const date = new Date();
  // const fromattedDate = formatDate(date);
  // console.log("present time", fromattedDate);
  const formik = useFormik({
    initialValues: {
      dealershipsName: "",
      address: "",
      email: "",
      number: "",
      description: "",
      JoiningDate: "",
      salesperson: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      // const data = {
      //   dealershipsName: values.dealershipsName,
      //   description: values.description,
      // };
      setAddDealership(values);
      // console.log("Form data", data);
    },
  });
  return (
    <Box className="add-dealersips" sx={style}>
      <Typography className="adding-form-heading">
        Add new Dealership
      </Typography>
      <form onSubmit={formik.handleSubmit}>
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
            <TextField
              className="dealerships-field "
              variant="outlined"
              fullWidth
              type="text"
              id="dealershipsName"
              name="dealershipsName"
              value={formik.values.dealershipsName}
              onChange={formik.handleChange}
              placeholder="Enter dealership name"
            />
            <InputLabel className="dealerships-inputLabel">Address</InputLabel>
            <TextField
              className="dealerships-field "
              variant="outlined"
              fullWidth
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="Enter dealership address"
            />
            <InputLabel className="dealerships-inputLabel">
              Phone number
            </InputLabel>
            <TextField
              className="dealerships-field"
              variant="outlined"
              fullWidth
              type="number"
              id="number"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              placeholder="Enter contact number"
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <InputLabel className="dealerships-inputLabel">Email</InputLabel>
            <TextField
              className="dealerships-field"
              variant="outlined"
              fullWidth
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
            />
            <InputLabel className="dealerships-inputLabel">
              Joining date
            </InputLabel>
            <TextField
              className="dealerships-field"
              variant="outlined"
              fullWidth
              type="date"
              id="JoiningDate"
              name="JoiningDate"
              value={formik.values.JoiningDate}
              onChange={formik.handleChange}
            />
            <InputLabel className="dealerships-inputLabel">
              Short description
            </InputLabel>
            <TextField
              className="dealerships-field"
              variant="outlined"
              fullWidth
              type="text"
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="Enter description about dealership"
            />
          </Box>
        </Box>
        <InputLabel className="dealerships-inputLabel">
          Add salesperson
        </InputLabel>
        <TextField
          className="dealerships-field"
          variant="outlined"
          fullWidth
          type="text"
          id="salesperson"
          name="salesperson"
          value={formik.values.salesperson}
          onChange={formik.handleChange}
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
            type="submit"
          />
          <LoadingButton
            buttonTitle={"Cancel"}
            variant="outlined"
            size="large"
            styleClass="cancel-btn "
            handleClick={close}
          />
        </Box>
      </form>
    </Box>
  );
};

export default AddNewDealerships;
