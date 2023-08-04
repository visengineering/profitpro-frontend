import React, { useState, useEffect } from "react";
import TranscriptsDataTable from "./TranscriptsDataTable";
import { Box, Breadcrumbs, Chip } from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/plugins/user";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const TranscriptsTable = () => {
  const navigate = useNavigate();

  const { salesRepresentativeId } = useParams();

  const [transcripts, setTranscripts] = useState([]);

  useEffect(() => {
    fetchTranscriptDetails(salesRepresentativeId);
  }, []);

  const fetchTranscriptDetails = async (userId) => {
    try {
      const response = await UserService.getSaleRepresentativeByDealerShipById(
        userId
      );
      const transcripts = response.data;
      setTranscripts(transcripts);
    } catch (error) {
      console.log("Error while fetching transcripts", error);
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
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <StyledBreadcrumb
            component="a"
            onClick={() => {
              navigate("/salesRepresentative");
            }}
            label="Sales Representatives"
            icon={<PersonIcon />}
            size="medium"
          />
          <StyledBreadcrumb
            component="a"
            label="Transcripts"
            sx={{ background: "silver" }}
          />
        </Breadcrumbs>
      </Box>
      <TranscriptsDataTable transcripts={transcripts} />
    </Box>
  );
};

export default TranscriptsTable;
