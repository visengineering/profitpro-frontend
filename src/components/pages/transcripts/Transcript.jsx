import { Box, CardContent, Chip, Typography, emphasize, styled } from "@mui/material";
import Card from "../../generic-components/card";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TranscriptService from "../../../services/plugins/transcipt";
import { toast } from "react-toastify";
import DetailLoader from "./DetailLoader";
import Breadcrumbs from "../../generic-components/breadcrumbs";
import PersonIcon from "@mui/icons-material/Person";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Transcript() {
  const { transcriptId, salesRepresentativeId } = useParams();
  const [transcript, setTranscript] = useState({});
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();

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

      setTranscript(response.data);
    } catch (error) {
      setLoading(false);
      if (error.response?.status === 400) {
        toast.error(error.response?.data?.message ?? "Something went wrong while fetching details", {
          position: "top-right",
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });

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
          onClick={() => {
            navigate(`/salesRepresentative/${salesRepresentativeId}/transcripts`);
          }}
          label="Transcripts"
        />
        <StyledBreadcrumb
          component="a"
          label="Transcript Details"
          sx={{ background: "silver" }}
        />
 
      </Breadcrumbs>
      <Typography sx={{ margin: "1rem" }} variant="h4">
        Transcript Details
      </Typography>
      {isLoading ? (
        <DetailLoader />
      ) : (
        <Card>
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
      )}
    </Box>
  );
}

export default Transcript;
