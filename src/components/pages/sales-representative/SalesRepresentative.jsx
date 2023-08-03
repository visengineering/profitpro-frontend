import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Card from "../../generic-components/card";

function SalesRepresentative() {
  return (
    <Box className="box-container">
      <Typography sx={{ margin: "1rem" }} variant="h4">
        Sale Reperesentative Details
      </Typography>
      <Card>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <CardContent>
              <Typography component="div" variant="h5">
                Max Thompson
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Sales Representative
              </Typography>
            </CardContent>

            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="/avatar2.jpg"
              alt="Live from space album cover"
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <CardContent>
              <Typography variant="subtitle1" component="div">
                Email: test1@gmail.com
              </Typography>
              <Typography variant="subtitle1" component="div">
                Mobile: +1 (133) 346-4560
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default SalesRepresentative;
