import React from "react";
import TranscriptsDataTable from "./TranscriptsDataTable";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const TranscriptsTable = () => {
  let transcripts = [
    {
      createdAt: "2020-01-05",
      updatedAt: "2020-01-08",
      customerId: "11091700",
      duration: "3:10",
    },
    {
      createdAt: "2020-01-02",
      updatedAt: "2020-01-02",
      customerId: "11090034",
      duration: "2:35",
    },
    {
      createdAt: "2019-02-08",
      updatedAt: "2020-07-09",
      customerId: "11091700",
      duration: "2:40",
    },
    {
      createdAt: "2020-06-04",
      updatedAt: "2020-09-02",
      customerId: "11090034",
      duration: "2:47",
    },
    {
      createdAt: "2021-10-12",
      updatedAt: "2022-01-08",
      customerId: "11091700",
      duration: "2:15",
    },
    {
      createdAt: "2022-07-02",
      updatedAt: "2023-01-02",
      customerId: "11090034",
      duration: "2:34",
    },
  ];
  return (
    <Box className="box-container">
      <Box role="presentation">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ fontSize: "24px", margin: "2rem 0" }}
        >
          <Link underline="hover" color="inherit" href="/salesRepresentative">
            Sales Representatives
          </Link>
          <Typography
            sx={{ fontSize: "24px", color: "#233eae" }}
            color="text.primary"
          >
            Transcripts
          </Typography>
        </Breadcrumbs>
      </Box>
      <TranscriptsDataTable transcripts={transcripts} />
    </Box>
  );
};

export default TranscriptsTable;
