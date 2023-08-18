import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const CustomSearch = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  borderBottom:"1px solid #D9D9D9",
  width:"100%",
  height: "22%",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
  },
}));

function SearchList({ searchTerm, onChange }) {
  return (
    <CustomSearch>
      <SearchIconWrapper>
        <SearchIcon fontSize="small"/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        defaultValue={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />
    </CustomSearch>
  );
}

export default SearchList;