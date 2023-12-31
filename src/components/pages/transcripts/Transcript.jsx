import { Box, CardContent, Typography } from "@mui/material";
import Card from "../../generic-components/card";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import TranscriptService from "../../../services/plugins/transcipt";
import { toast } from "react-toastify";
import DetailLoader from "./DetailLoader";
import Breadcrumbs from "../../generic-components/breadcrumbs";
import Conversation from "../activeUser/Conversation";
import Suggestion from "../activeUser/Suggestion";
import { AppContext } from "../../../hooks/AppContext";
import SaveHeading from "../../shared-components/SaveHeading";

function Transcript({ heading }) {
  const { open } = useContext(AppContext);
  const { transcriptId, salesRepresentativeId } = useParams();
  const [transcript, setTranscript] = useState({});
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const userName = location?.state?.userName;

  useEffect(() => {
    fetchTranscriptDetailsById(transcriptId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTranscriptDetailsById = async (userId) => {
    setLoading(true);
    try {
      const response = await TranscriptService.getTranscriptByUser(
        transcriptId
      );
      setTranscript(response.data.results);
    } catch (error) {
      setLoading(false);
      if (error.response?.status === 400) {
        toast.error(
          error.response?.data?.message ??
            "Something went wrong while fetching details",
          {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
          }
        );

        return;
      }

      console.log("Error while fetching transcript details", error);
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
      onClick: () => navigate("/salesRepresentative"),
      active: true,
    },
    {
      label: "Transcripts",
      onClick: () => {
        navigate(`/salesRepresentative/${salesRepresentativeId}/transcripts`);
      },
      active: true,
    },
    {
      label: "Transcript Details",
      active: false,
    },
  ];

  return (
    <>
      <SaveHeading heading={heading} />
      <Box className={open ? "table-container-open " : "table-container "}>
        <Box>
          <Breadcrumbs crumbs={crumbs} />
        </Box>

        <Box
          sx={{
            display: "flex",
            backgroundColor: "#F4F5F8",
            paddingTop: "1rem",
            gap: 2,
          }}
        >
          <Conversation
            conversationList={transcript}
            isLoading={isLoading}
            className="transcriptConversationBox"
          />
          <Suggestion className="transcriptSuggestionBox" />
        </Box>

        {/* 
      {isLoading ? (
        <DetailLoader />
      ) : (
        <Box
          sx={
            {
              // display: "flex",
              // justifyContent: "space-evenly",
              // backgroundColor: "#F4F5F8",
              // paddingTop: "1rem",
            }
          }
        >
          <Conversation />
          <Suggestion />
        </Box>
        <Card
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.15) 5.4px 5.4px 6.2px",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <Typography color="text.secondary">
              Transcript ID: {transcript.conversation_id}
            </Typography>

            <Typography color="text.secondary">
              Created At: {transcript.created_date}
            </Typography>
            <Typography color="text.secondary">
              Updated At: {transcript.modified_date}
            </Typography>
            <Typography color="text.secondary">
              Time duration: {transcript.duration ?? "-"}
            </Typography>
            <Typography
              variant="h5"
              sx={{ margin: "1rem 0", fontWeight: "500" }}
            >
              Description
            </Typography>

            <Typography
              variant="body2"
              sx={{ margin: "1rem 0", overflowWrap: "break-word" }}
            >
              {transcript.transcript}
            </Typography>
          </CardContent>
        </Card>
      )} */}
      </Box>
    </>
  );
}

export default Transcript;
