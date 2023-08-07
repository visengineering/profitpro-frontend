import React, { useState } from "react";
import TranscriptsDataTable from "./TranscriptsDataTable";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/plugins/user";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../generic-components/breadcrumbs";

const TranscriptsTable = () => {
  const navigate = useNavigate();

  const { salesRepresentativeId } = useParams();

  const [transcripts, setTranscripts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchTranscriptDetails = async (page_size = 5, selectedPage = 1) => {
    setLoading(true);
    try {
      const params = {
        page_size,
        page: selectedPage || 1,
      };

      const response = await UserService.getSaleRepresentativeByDealerShipById(
        salesRepresentativeId,
        params
      );

      const { results, current, count } = response.data;
      setCurrentPage(current);
      setTotalCount(count);
      setTranscripts(results);
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
    setLoading(false);
  };

  const crumbs = [
    {
      label: "Sales Representatives",
      icon: <PersonIcon />,
      onClick: () => navigate("/salesRepresentative"),
      size: "medium",
      active: false,
    },
    {
      label: "Transcripts",
      size: "medium",
      active: true,
    },
  ];

  return (
    <Box className="box-container">
      <Box role="presentation" sx={{ margin: "1rem" }}>
        <Breadcrumbs crumbs={crumbs} />
      </Box>
      <TranscriptsDataTable
        loading={loading}
        totalCount={totalCount}
        transcripts={transcripts}
        currentPage={currentPage}
        fetchData={fetchTranscriptDetails}
      />
    </Box>
  );
};

export default TranscriptsTable;
