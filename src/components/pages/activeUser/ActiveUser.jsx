import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import SearchBar from "../../generic-components/SearchList";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Conversation from "./Conversation";
import Suggestion from "./Suggestion";
import UserService from "../../../services/plugins/user";

const UserList = styled("div")(({ theme }) => ({
  padding: "0 2rem",
  width: "85%",
  marginLeft: "18.7rem",
  marginTop: "4rem",
  height: "91vh",
  paddingTop: "1rem",
  maxWidth: "calc(100% - 300px)",
  backgroundColor: "#F4F5F8",
  marginBottom: "1rem",
}));

const ActiveUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);

  async function getAllActiveUsers() {
    try {
      const response = await UserService.getAllActiveUser();
      const { results } = response.data;

      if (Array.isArray(results) && results.length) {
        getConversationByUser(results[0]);
      }

      setUsers(results || []);
    } catch (error) {
      console.log(error);
    }
  }

  async function getConversationByUser(user) {
    setLoading(true);
    try {
      setSelectedUser(user);
      const response = await UserService.getActiveConversation(user.user_id);
      const { results } = response.data;

      setConversations(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getAllActiveUsers();
  }, []);

  return (
    <UserList>
      <Stack direction="row" spacing={2}>
        <Box
          className="active_user_div"
          sx={{
            width: "25%",
            backgroundColor: "#FFFFFF",
            height: "88vh",
            padding: "0.3rem 0.1rem",
            borderRadius: "3px",
            overflowY: "auto",
          }}
        >
          <Box
            className="active_user_portion"
            sx={{
              paddingLeft: "0.9rem",
              paddingTop: "0.3rem",
              paddingBottom: "0.8rem",
              borderBottom: "1px solid #D9D9D9",
            }}
          >
            <Typography
              // variant="h6"
              className="User"
              sx={{
                fontSize: "min(10vh,30px)",
                fontWeight: "700",
                lineHeight: "1",
              }}
            >
              Active Users
            </Typography>
            <Typography
              className="Conversation"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Conversation
            </Typography>
          </Box>
          {/* <Box
            sx={{
              padding: "0.5rem 1rem",
            }}
          >
            <SearchBar />
          </Box> */}

          {users.map((user) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
                gap: 5,
                overflowY: "hidden",
                alignItems: " center",
                width: "90%",
                borderRadius: "5px",
                padding: "0.5rem 0rem",

                marginLeft: "0.9rem",
                marginTop: "0.5rem",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: user.state,
                  borderRadius: "5px",
                },
                // backgroundColor: user.state,
              }}
              className="active-user"
              onClick={() => {
                getConversationByUser(user);
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                }}
                className="activer-user__box"
              >
                <Box
                  sx={{
                    width: "4px",
                    height: "inherit",
                    backgroundColor: `${user.state}`,
                    borderRadius: "3px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderRadius: "0px !important",
                    },
                  }}
                  className="suggestion_box"
                />
                <Avatar alt="Remy Sharp" src={user.image} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "min(10vh,18px)",
                    lineHeight: "2.5rem",
                    // paddingLeft: "1rem",
                  }}
                >
                  {user.user_display_name}
                </Typography>
              </Box>
              {/* <Typography
                variant="body1"
                sx={{
                  fontSize: "12px",
                  lineHeight: "2.5rem",

                  // paddingLeft: "2rem",
                }}
              >
                {pro.date}
              </Typography> */}
            </Box>
          ))}
        </Box>

        {/* second div */}

        <Conversation
          conversationList={conversations}
          selectedUser={selectedUser}
          isLoading={isLoading}
        />

        {/* AI SUGGESTION */}

        <Suggestion />
      </Stack>
    </UserList>
  );
};

export default ActiveUser;
