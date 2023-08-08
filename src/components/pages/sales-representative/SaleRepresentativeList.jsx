import React, { useEffect, useState } from "react";
import SalesRepresentativeDataTable from "./SalesRepresentativeDataTable";
import { Box } from "@mui/material";
import UserService from "../../../services/plugins/user";
import { toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";
import Breadcrumbs from "../../generic-components/breadcrumbs";

const SaleRepresentativeList = () => {
  const [users, setUsers] = useState([]);
  const [totalCount, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchSalesDetails();
  }, []);

  const fetchSalesDetails = async (page_size = 5, selectedPage = 1) => {
    setLoading(true);
    try {
      const params = {
        page_size,
        page: selectedPage || 1,
      };

      const response = await UserService.getSaleRepresentativeByDealerShip(
        params
      );

      const { results: userResult, count, current } = response.data;

      setCount(count);
      setCurrentPage(current || 1);
      setUsers(userResult);
    } catch (error) {
      console.log("Error while fetching sale representatives", error);
      toast.error("Something went wrong while fetching details", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    }

    setLoading(false);
  };

  const crumbs = [
    {
      label: "Sales Representatives",
      icon: <PersonIcon />,
      size: "medium",
      active: true,
    },
    {
      label: "Transcripts",
      size: "medium",
      active: false,
    },
  ];

  return (
    <Box className="table-container">
      <Box role="presentation" sx={{ margin: "1rem" }}>
        <Breadcrumbs crumbs={crumbs} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      <SalesRepresentativeDataTable
        rows={users}
        isLoading={isLoading}
        totalCount={totalCount}
        currentPage={currentPage}
        filterData={fetchSalesDetails}
      />
    </Box>
  );
};

export default SaleRepresentativeList;
