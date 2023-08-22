import React from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ChatSkeletonLoader from "../../shared-components/Loader/ChatLoader";

const Conversation = ({ selectedUser, conversationList, isLoading }) => {
  return (
    <Box
      sx={{
        width: "50%",
        backgroundColor: "#FFFFFF",
        height: "90vh",
        borderRadius: "3px",
      }}
    >
      <Box
        className="d-flex justify-between"
        sx={{
          padding: "10px 10px",
          borderBottom: "1px solid #D9D9D9",
          marginBottom: "10px",
        }}
      >
        <Box className="d-flex" sx={{ gap: 1 }}>
          <Avatar
            alt="Remy Sharp"
            src={selectedUser?.user_avatar}
            sx={{ width: 50, height: 50 }}
          />
          <Box className="d-flex flex-col align-self-center">
            <Typography
              variant="h6"
              sx={{
                fontSize: "30px",
                lineHeight: "1",
                fontWeight: 700,
              }}
            >
              {selectedUser?.user_display_name}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              Active Conversation
            </Typography>
          </Box>
        </Box>

        <Typography
          className="align-self-center"
          sx={{
            fontSize: "16px",
            paddingTop: "25px",
            textDecoration: "underline",
          }}
        >
          View Mike's all Conversation
        </Typography>
      </Box>

      {isLoading ? (
        <ChatSkeletonLoader />
      ) : (
        <Box
          sx={{
            height: "80vh",
            overflowY: "scroll",
          }}
        >
          {conversationList.map((conversation) =>
            conversation.speaker_type === "sales_person" ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    height: "auto",
                    width: "50%",
                    backgroundColor: "#0E1B6B",
                    marginRight: "1rem",
                    padding: "0.7rem",
                    borderRadius: "3px",
                    color: "#FFFFFF",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    {conversation.transcript}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  padding: "1.5rem  1rem",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/Ellipse 1.png"
                  sx={{ width: 40, height: 40 }}
                />
                <Box
                  sx={{
                    paddingLeft: "0.4rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Customer
                  </Typography>

                  <Box
                    sx={{
                      height: "auto",
                      width: "75%",
                      backgroundColor: "#F1F7FF",
                      padding: "0.7rem",
                      borderRadius: "3px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      {conversation.transcript}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default Conversation;
