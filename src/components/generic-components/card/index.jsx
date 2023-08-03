import * as React from "react";
import { Card as MUICard } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function Card(props) {
  return (
    <MUICard sx={{ minWidth: 275 }}>
      {props.children}
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </MUICard>
  );
}
