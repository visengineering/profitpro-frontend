import React from "react";
import { Box, Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <Box role="presentation" sx={{ padding: "1rem", paddingBottom: "1.5rem" }}>
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
                fontSize: "14px",
                color: crumb.active ? "#233EAE" : "#9F9F9F",
                cursor: !crumb?.active ? "default" : "pointer",
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
