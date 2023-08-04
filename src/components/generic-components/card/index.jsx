import * as React from "react";
import { Card as MUICard } from "@mui/material";

export default function Card(props) {
  return <MUICard sx={{ minWidth: 275 }}>{props.children}</MUICard>;
}
