import React from "react";
import { Box, Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { emphasize, styled } from "@mui/material/styles";
import { Chip } from "@mui/material";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(5),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "18px",
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.24),
    },
  };
});

const Breadcrumbs = ({ crumbs }) => {
  return (
    <Box role="presentation" sx={{ margin: "1rem" }}>
      <MUIBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {crumbs.map((crumb, index) => {
          return (
            <StyledBreadcrumb
              key={index}
              component="a"
              onClick={crumb?.onClick}
              label={crumb?.label || ""}
              icon={crumb?.icon || null}
              size={crumb?.size || "medium"}
              sx={{ background: crumb.active ? "silver" : "none" }}
            />
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
