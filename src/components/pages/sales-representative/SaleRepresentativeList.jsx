import React, { useEffect, useState } from "react";
import SalesRepresentativeDataTable from "./SalesRepresentativeDataTable";
import { Box } from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import UserService from "../../../services/plugins/user";
import { toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../generic-components/breadcrumbs";

const SaleRepresentativeList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSalesDetails();
  }, []);

  const fetchSalesDetails = async () => {
    try {
      const response = await UserService.getSaleRepresentativeByDealerShip();

      const { users: userResult } = response.data;

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
  };

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(5),
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: "18px",
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
        <Breadcrumbs>
          <StyledBreadcrumb
            component="a"
            sx={{ background: "silver" }}
            onClick={() => {
              navigate("/salesRepresentative");
            }}
            label="Sales Representatives"
            icon={<PersonIcon />}
            size="medium"
          />
          <StyledBreadcrumb component="a" label="Transcripts" />
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      <SalesRepresentativeDataTable rows={users} />
    </Box>
  );
};

export default SaleRepresentativeList;
