import React, { useEffect, useState } from "react";
import SalesRepresentativeDataTable from "./SalesRepresentativeDataTable";
import { Box, Breadcrumbs } from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import UserService from '../../../services/plugins/user'
import { toast } from "react-toastify";

const SaleRepresentativeList = () => {
  const [_users, setUsers] = useState([]);

  const users = [
    {
      user_id: 123,
      password: "",
      last_login: null,
      is_superuser: false,
      is_staff: false,
      is_active: true,
      date_joined: "2023-08-03T14:34:15.180461Z",
      user_email: "maddy@gmail.com",
      user_display_name: "",
      first_name: "",
      last_name: "",
      role: "",
      city: "",
      address1: "",
      address2: "",
      about: "",
      dealer_name: "",
      email: "",
      is_update: true,
      lot_address: "",
      notes: "",
      phone: "",
      state: "",
      token: "",
      userImage: "",
      user_avatar: "",
      user_nicename: "",
      zipcode: "",
      groups: [],
      user_permissions: [],
      transcripts: [],
    },
    {
      user_id: 272,
      password: "",
      last_login: null,
      is_superuser: false,
      is_staff: false,
      is_active: true,
      date_joined: "2023-08-03T15:09:43.627559Z",
      user_email: "dev.farhantariq12b@gmail.com",
      user_display_name: "Farhan",
      first_name: "Farhan",
      last_name: "Tariq",
      role: "manager",
      city: "",
      address1: "",
      address2: "",
      about: "",
      dealer_name: "Profit Pro",
      email: "dev.farhantariq12b@gmail.com",
      is_update: false,
      lot_address: "",
      notes: "",
      phone: "0342845929",
      state: "",
      token: "",
      userImage:
        "http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=96&d=mm&r=g",
      user_avatar:
        "http://1.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=96&d=mm&r=g",
      user_nicename: "dev-farhantariq12bgmail-com",
      zipcode: "",
      groups: [],
      user_permissions: [],
      transcripts: [
        {
          conversation_id: 1,
          conversation_link: "dummy-link.com",
          short_transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind?...",
          created_date: "2023-08-04T11:46:11.010457Z",
          modified_date: "2023-08-04T11:46:11.010548Z",
        },
        {
          conversation_id: 2,
          conversation_link: "dummy-link.com",
          short_transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind?...",
          created_date: "2023-08-04T11:47:08.792572Z",
          modified_date: "2023-08-04T11:47:08.792680Z",
        },
        {
          conversation_id: 3,
          conversation_link: "dummy-link.com",
          short_transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind?...",
          created_date: "2023-08-04T11:47:57.919928Z",
          modified_date: "2023-08-04T11:47:57.920051Z",
        },
        {
          conversation_id: 4,
          conversation_link: "dummy-link.com",
          short_transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind?...",
          created_date: "2023-08-04T11:48:12.052885Z",
          modified_date: "2023-08-04T11:48:12.052938Z",
        },
        {
          conversation_id: 5,
          conversation_link: "dummy-link.com",
          short_transcript:
            "I'm tired of cafeteria food. Let's do something different tonight. Have anything particular in mind?...",
          created_date: "2023-08-04T11:50:11.523498Z",
          modified_date: "2023-08-04T11:50:11.523556Z",
        },
      ],
    },
  ];

  useEffect(() => {
    fetchSalesDetails();
  }, [])

  const fetchSalesDetails = async () => {
    try {
      const response = await UserService.getSaleRepresentativeByDealerShip();

      const { users: userResult } = response.data;

      setUsers(userResult);

    } catch(error) {
      console.log("Error while fetching sale representatives", error);
      toast.error("Something went wrong while fetching details", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      })
    }
  }

  
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
            sx={{ background: "silver" }}
            component="a"
            href="#"
            label="Sales Representatives"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb
            component="a"
            href="salesRepresentative/123/transcripts"
            label="Transcripts"
          />
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
