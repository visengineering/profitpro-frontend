import React from "react";
import { Box, Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumbs = ({ children }) => {
  return (
    <Box role="presentation" sx={{ margin: "1rem" }}>
      <MUIBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {children}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
