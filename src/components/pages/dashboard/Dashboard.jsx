import React, { useContext } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import SaveHeading from "../../shared-components/SaveHeading";
import { AppContext } from "../../../hooks/AppContext";
import Pagination from "../../shared-components/pagination";
import SearchBar from "../../shared-components/uncontrolled-search-bar";
import LoadingButton from "../../generic-components/button";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import DashboardGrid from "../../generic-components/Grid/DashboardGrid";
import DashboardSatusIndicator from "./DashboardStatusIndicator";
import AddNewDealerships from "./AddNewDealerships";

const Dashboard = ({ heading }) => {
  const { open } = useContext(AppContext);
  return (
    <>
      <Box className={open ? "box-container-open" : "box-container-default"}>
        <SaveHeading heading={heading} />
        <Typography className="dashboard-heading">
          Welcome to ProfitPro!
        </Typography>
        {/* <Box className="dashboard-status">
          <AddNewDealerships />
        </Box> */}
        <Box className="dashboard-status">
          <DashboardSatusIndicator />
        </Box>
        {/* <Box className="dashboard-searchbar">
          <Box
            sx={{
              display: "flex",
              gap: 10,
            }}
          >
            <LoadingButton
              buttonTitle="ADD NEW DEALERSHIP"
              variant="contained"
              styleClass="primary-btn"
              endIcon={<AddIcon />}
              sx={{
                width: "256px",
              }}
            />
            <SearchBar />
          </Box>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Box
              component="img"
              sx={{ height: "24px", width: "24px" }}
              src="/refreshIcon.svg"
              className="cursor-pointer"
            />
            <Box
              component="img"
              src="/gearIcon.svg"
              sx={{ height: "24px", width: "24px" }}
              className="cursor-pointer"
            />
            <FilterListIcon className="cursor-pointer" />
          </Box>
        </Box>
        {/*  current dealerships */}
        {/* <Box className="current-dealership">
          <DashboardGrid />
        </Box>  */}
      </Box>
      {/* <Box className={open ? "dash-container-open" : "dash-container-default"}>
        <Pagination />
      </Box> */}
    </>
  );
};

export default Dashboard;
