import React from "react";
import { Box, Typography, InputLabel } from "@mui/material";
import LoadingButton from "../../generic-components/button";
import InputField from "../../generic-components/input-field";
const style = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  border: "none",
};

const AddNewUser = ({ close }) => {
  return (
    <Box sx={style} className="add-newUser">
      <Typography className="adding-form-heading">Add new user</Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box sx={{ width: "50%", paddingRight: "0.5rem" }}>
          <InputLabel className="newUser-inputLabel">First name</InputLabel>
          <InputField
            className="newUser-field "
            variant="outlined"
            fullWidth
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter first name"
          />
          <InputLabel className="newUser-inputLabel">Last name</InputLabel>
          <InputField
            className="newUser-field "
            variant="outlined"
            fullWidth
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
          />
          <InputLabel className="newUser-inputLabel">Email</InputLabel>
          <InputField
            className="newUser-field"
            variant="outlined"
            fullWidth
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
          />
          <InputLabel className="newUser-inputLabel">Phone number</InputLabel>
          <InputField
            className="newUser-field"
            variant="outlined"
            fullWidth
            type="number"
            id="number"
            name="number"
            placeholder="Enter contact number"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            width: "50%",
          }}
        >
          <Box className="upload-user-photo">
            <Box
              src="/uploadUserPhoto.svg"
              alt="user name"
              component="img"
              sx={{
                maxHeight: "5vh",
                maxWidth: "100%",
                cursor: "pointer",
              }}
            />
            <Typography
              sx={{
                color: "#4C535F",
                paddingTop: "1rem",
              }}
            >
              Upload user <br /> photo
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <LoadingButton
          buttonTitle={"Add"}
          variant="outlined"
          size="large"
          styleClass="adding-btn "
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

export default AddNewUser;
