import { Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import React from "react";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import LoadingButton from "../../generic-components/button";
import AddIcon from "@mui/icons-material/Add";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "#F8F9FA",
  "&:hover": {
    backgroundColor: "#F8F9FA",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9FA2AB",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "350px",
    },
  },
}));

function EnhancedTableToolbar({
  numSelected,
  refetchData,
  totalCount,
  setSearchTerm,
}) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { sm: 2 },
        borderTop: "1px solid #EAEAEA",
        borderBottom: "1px solid #EAEAEA",
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Box
          sx={{
            flex: "1 1 100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h6" id="tableTitle" component="div">
            All ({totalCount})
          </Typography>
          <LoadingButton
            buttonTitle="Add new"
            variant="contained"
            styleClass="primary-btn"
            endIcon={<AddIcon />}
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Search>
        </Box>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Box
            component="img"
            src="/refreshIcon.svg"
            onClick={refetchData}
            className="cursor-pointer"
          />
          <Box component="img" src="/gearIcon.svg" />
          <FilterListIcon />
        </Box>
      )}
    </Toolbar>
  );
}

export default EnhancedTableToolbar;
