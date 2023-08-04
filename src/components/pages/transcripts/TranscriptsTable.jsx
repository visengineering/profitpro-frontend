import React from "react";
import TranscriptsDataTable from "./TranscriptsDataTable";
import { Box, Breadcrumbs, Chip } from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

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

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: "#233eae",
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.24),
      },
    };
  });
  return (
    <Box className="box-container">
      <Box role="presentation" sx={{ margin: "1rem" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            label="Sales Representatives"
            icon={<HomeIcon fontSize="small" />}
            disabled
          />
          <StyledBreadcrumb
            sx={{ background: "silver" }}
            component="a"
            label="Transcripts"
          />
        </Breadcrumbs>
      </Box>
      <TranscriptsDataTable transcripts={transcripts} />
    </Box>
  );
};

export default TranscriptsTable;
