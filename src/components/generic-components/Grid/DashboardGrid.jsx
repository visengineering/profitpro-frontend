import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DashboardCard from "../card/DashboardCard";
import { Box } from "@mui/material";
// import { AppContext } from "../../../hooks/AppContext";

const cardData = [
  {
    image: "./kia.jpg",
    cardTitle: "KIA",
    cardParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, It has survived not only five centuries",
  },
  {
    image: "./HYUNDAI.jpg",
    cardTitle: "HYUNDAI",
    cardParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, It has survived not only five centuries",
  },
  {
    image: "./MOTORS.jpg",
    cardTitle: "Mitsubishi",
    cardParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, It has survived not only five centuries",
  },
  {
    image: "./toyota.jpg",
    cardTitle: "Toyota - SBS",
    cardParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, It has survived not only five centuries",
  },
  {
    image: "./kia.jpg",
    cardTitle: "KIA",
    cardParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, It has survived not only five centuries",
  },
  {
    image: "./MOTORS.jpg",
    cardTitle: "Mitsubishi",
    cardParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, It has survived not only five centuries",
  },
];

const DashboardGrid = () => {
  // const { card } = useContext(AppContext);
  return (
    <Box sx={{ width: "70%", margin: "auto" }}>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "1.25rem",
          fontWeight: 500,
          paddingY: "0.5rem",
        }}
      >
        Currant Dealerships
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {cardData?.map((card, index) => (
          <Grid item xs={4} md={4} key={index}>
            <DashboardCard cardDataList={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardGrid;
