import React from "react";
import { Box, Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <Box role="presentation" sx={{ margin: "1rem" }}>
      <MUIBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {crumbs.map((crumb, index) => {
          return (
            <Typography
              key={index}
              component="a"
              onClick={crumb?.onClick}
              sx={{
                fontWeight: "400",
                lineHeight: "150%",
                fontSize: "24px",
                color: crumb.active ? "#233EAE" : "#9F9F9F",
                cursor: "pointer",
              }}
            >
              {crumb?.label}
            </Typography>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
