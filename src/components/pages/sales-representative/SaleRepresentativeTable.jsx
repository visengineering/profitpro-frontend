import React from "react";
import SalesRepresentativeDataTable from "./SalesRepresentativeDataTable";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import LoadingButton from "../../generic-components/button";

const SaleRepresentativeTable = () => {
  function createData(photo, name, mobile, email, status, Operation, Action) {
    return {
      photo,
      name,
      mobile,
      email,
      status,
      Operation,
      Action,
      transcripts: [
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
      ],
    };
  }

  const rows = [
    createData(
      "avatar1.jpg",
      "Luna Smith",
      "+1 (133) 346-4560",
      "test1@gmail.com",
      true
    ),
    createData(
      "avatar2.jpg",
      "Max Thompson",
      "+1 (133) 346-8450",
      "test2@gmail.com",
      false
    ),
    createData(
      "avatar3.jpeg",
      "Olivia Anderson",
      "+1 (433) 456-7340",
      "test3@gmail.com",
      true
    ),
    createData(
      "avatar4.jpg",
      "Leo Johnson",
      "+1 (145) 516-7890",
      "test4@gmail.com",
      false
    ),
    createData(
      "avatar5.jpg",
      "Mia Martinez",
      "+1 (143) 056-7090",
      "test5@gmail.com",
      true
    ),
  ];
  const handleAddNew = () => {
    alert("add new modal");
  };

  const handleFilter = () => {
    alert("Opens Filter");
  };

  return (
    <Box className="box-container">
      <Box role="presentation">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ fontSize: "24px", margin: "2rem 0" }}
        >
          <Typography
            sx={{ fontSize: "24px", color: "#233eae" }}
            color="text.primary"
          >
            Sales Representatives
          </Typography>
          <Link underline="none" color="inherit">
            Transcripts
          </Link>
        </Breadcrumbs>
      </Box>
      <Box>
        <LoadingButton
          buttonTitle={"Add new"}
          variant="contained"
          sx={{ margin: "1rem" }}
          handleClick={handleAddNew}
          styleClass="primary-btn"
        />
        <LoadingButton
          buttonTitle={"Filter"}
          variant="contained"
          sx={{ margin: "1rem" }}
          handleClick={handleFilter}
          styleClass="primary-btn"
        />
      </Box>
      <SalesRepresentativeDataTable rows={rows} />
    </Box>
  );
};

export default SaleRepresentativeTable;
