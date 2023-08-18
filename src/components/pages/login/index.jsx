import {
  Box,
  InputLabel,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LoadingButton from "../../generic-components/button";
import { CleaningServices, Visibility, VisibilityOff } from "@mui/icons-material";
import AuthService from "../../../services/plugins/auth";
import { useNavigate } from 'react-router-dom';
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function LoginPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
       const token= await AuthService.login(values);
        console.log(token);
         localStorage.setItem("tokenValues", JSON.stringify(token));
         
         navigate('/');
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box className="auth-box-container">
      <Box className="login-img">
        <Box
          component="img"
          src="/logo3.png"
          sx={{ width: "30%", margin: "4rem" }}
        />
      </Box>
      <Box className="login-form-container">
        <Box component="img" src="/logo2.png" />
        <Box className="form-container">
          <Box sx={{ width: "50%" }}>
            <Typography className="welcome-msg">Welcome back</Typography>
            <Typography variant="h4" className="login-msg">
              Login to your account
            </Typography>
          </Box>
          <Box className="login-form">
            <form onSubmit={formik.handleSubmit}>
              <InputLabel>Username</InputLabel>
              <TextField
                className="login-field"
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <InputLabel>Password</InputLabel>
              <TextField
                className="login-field"
                variant="outlined"
                fullWidth
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box className="options-container">
                {/* <FormControlLabel
                  control={
                    <Checkbox
                      id="rememberMe"
                      name="rememberMe"
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Remember me"
                /> */}
                <Link href="" underline="none">
                  Forgot password?
                </Link>
              </Box>
              <LoadingButton
                buttonTitle="Login now"
                variant="contained"
                styleClass="login-btn"
                fullWidth
                type="submit"
              />
            </form>
          </Box>
        </Box>
        <Typography className="copyright">
          2023 ProfitPro. All Rights Reserved{" "}
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
