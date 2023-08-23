import React from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ChatSkeletonLoader from "../../shared-components/Loader/ChatLoader";

const Conversation = ({
  selectedUser,
  conversationList,
  isLoading,
  className,
}) => {
  return (
    <Box className={className}>
      <Box
        className="d-flex justify-between"
        sx={{
          paddingY: "0.7rem",
          paddingLeft: "1rem",
          borderBottom: "1px solid #D9D9D9",
          marginBottom: "10px",
        }}
      >
        <Box className="d-flex" sx={{ gap: 1, paddingY: "0.2rem" }}>
          <Avatar
            alt="Remy Sharp"
            src={selectedUser?.user_avatar}
            sx={{ width: 60, height: 60 }}
          />
          <Box className="d-flex flex-col align-self-center">
            <Typography variant="h6" className="username">
              {selectedUser?.user_display_name}
            </Typography>
            <Typography className="userconversation">
              Active Conversation
            </Typography>
          </Box>
        </Box>

        <Typography
          className="align-self-center  userconversation"
          sx={{
            paddingTop: "25px",
            textDecoration: "underline",
            paddingRight: "30px",
          }}
        >
          View Mike's all Conversations
        </Typography>
      </Box>

      {isLoading ? (
        <ChatSkeletonLoader />
      ) : (
        <Box
          // className="customscrollbar"
          sx={{
            height: "80vh",
            // overflowY: "auto",
          }}
        >
          {!(Array.isArray(conversationList) && conversationList.length) ? (
            " "
          ) : (
            // <Box>
            //   <Typography>Not Found Messages</Typography>
            // </Box>
            <Box>
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
                      <Typography className="customer-ai-conversation">
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
                        <Typography className="customer-ai-conversation">
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
      )}
    </Box>
  );
};

export default Conversation;
