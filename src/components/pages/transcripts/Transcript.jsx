import { Box, CardContent, Typography } from "@mui/material";
import Card from "../../generic-components/card";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TranscriptService from "../../../services/plugins/transcipt";
import { toast } from "react-toastify";

function Transcript() {
  const { transcriptId } = useParams();
  const [transcript, setTranscript] = useState({});

  useEffect(() => {
    fetchTranscriptDetailsById(transcriptId);
  }, []);

  const fetchTranscriptDetailsById = async (userId) => {
    try {
      const response = await TranscriptService.getTranscriptByUser(
        transcriptId
      );
      const { users: userResult } = response.data;
      setTranscript(userResult);
    } catch (error) {
      console.log("Error while fetching transcript details", error);
      toast.error("Something went wrong while fetching details", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    }
  };
  return (
    <Box className="box-container">
      <Typography sx={{ margin: "1rem" }} variant="h4">
        Transcript Details
      </Typography>
      <Card>
        <CardContent>
          <Typography color="text.secondary">
            Created At: {transcript.created_date}
          </Typography>
          <Typography color="text.secondary">
            Updated At: {transcript.modified_date}
          </Typography>
          <Typography color="text.secondary">
            Transcript ID: {transcript.conversation_id}
          </Typography>
          <Typography color="text.secondary">
            Time duration:{" "}
            {transcript.duration
              ? `${Math.floor(transcript.duration / 60000)}:${(
                  (transcript.duration % 60000) /
                  1000
                ).toFixed(0)}`
              : "-"}
          </Typography>
          <Typography variant="h5" sx={{ margin: "1rem 0", fontWeight: "500" }}>
            Description
          </Typography>

          <Typography variant="body2" sx={{ margin: "1rem 0" }}>
            {transcript.transcript}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Transcript;
