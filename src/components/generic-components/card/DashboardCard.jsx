import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";

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

const DashboardCard = () => {
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
        {cardData.map((card) => (
          <Grid item xs={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "1rem",
                  paddingX: "1rem",
                }}
              >
                <Box component="img" src={card.image} />
                {/* <IconButton> */}
                <MoreVertIcon color="lightgrey" />
                {/* </IconButton> */}
              </Box>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                  }}
                >
                  {card.cardTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.cardParagraph}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardCard;
