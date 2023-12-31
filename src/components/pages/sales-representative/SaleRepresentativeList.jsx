import React, { useState, useContext } from "react";
import SalesRepresentativeDataTable from "./SalesRepresentativeDataTable";
import { Box } from "@mui/material";
import UserService from "../../../services/plugins/user";
import { toast } from "react-toastify";
import Breadcrumbs from "../../generic-components/breadcrumbs";
import { AppContext } from "../../../hooks/AppContext";
import SaveHeading from "../../shared-components/SaveHeading";

const SaleRepresentativeList = ({ heading }) => {
  const { open } = useContext(AppContext);

  const [users, setUsers] = useState([]);
  const [totalCount, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const fetchSalesDetails = async (
    page_size = 5,
    selectedPage = 1,
    searchTerm = "",
    order = "asc",
    orderBy = "first_name"
  ) => {
    setLoading(true);
    try {
      const params = {
        page_size,
        page: selectedPage || 1,
        search: searchTerm || "",
        ordering: order === "desc" ? `-${orderBy}` : orderBy,
      };

      const response = await UserService.getSaleRepresentativeByDealerShip(
        params
      );

      const { results: userResult, count, current } = response.data;

      setCount(count);
      setCurrentPage(current);
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
      active: false,
    },
  ];

  return (
    <>
      <SaveHeading heading={heading} />
      <Box className={open ? "table-container-open " : "table-container "}>
        <Box role="presentation">
          <Breadcrumbs crumbs={crumbs} />
        </Box>
        <SalesRepresentativeDataTable
          rows={users}
          isLoading={isLoading}
          totalCount={totalCount}
          currentPage={currentPage}
          filterData={fetchSalesDetails}
        />
      </Box>
    </>
  );
};

export default SaleRepresentativeList;
