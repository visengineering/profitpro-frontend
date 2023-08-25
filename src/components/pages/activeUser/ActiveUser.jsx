import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Conversation from "./Conversation";
import Suggestion from "./Suggestion";
import UserService from "../../../services/plugins/user";
import { toast } from "react-toastify";

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
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState();
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
      // toast.error("Something went wrong while fetching details", {
      //   position: "top-right",
      //   autoClose: 2000,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   theme: "colored",
      // });
    }
  }

  async function getConversationByUser(user) {
    setLoading(true);
    try {
      setSelectedUser(user);

      const response = await UserService.getActiveConversation(user.user_id);
      const { results } = response.data;

      setConversations(results);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching details", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
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
            width: "22%",
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
              paddingY: "1.2rem",
              paddingBottom: "0.8rem",
              borderBottom: "1px solid #D9D9D9",
            }}
          >
            <Typography className="username">Active users</Typography>
            <Typography className="userconversation">Conversation</Typography>
          </Box>

          {users?.map((user) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                overflowY: "hidden",
                alignItems: " center",
                width: "90%",
                borderRadius: "5px",
                padding: "0.5rem 0rem",

                marginLeft: "0.9rem",
                marginTop: "0.5rem",
                cursor: "pointer",

                // ":hover": {
                //   backgroundColor:
                //     selectedUser.user_id === user.user_id
                //       ? user.state
                //       : "#F1F7FF",
                //   borderRadius: "5px",
                // },
                // backgroundColor:
                //   selectedUser.user_id === user.user_id ? user.state : "",
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
                <Avatar alt="Remy Sharp" src={user.user_avatar} />
                <Typography variant="h6" className="displayname">
                  {user.user_display_name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* second div */}

        <Conversation
          conversationList={conversations}
          selectedUser={selectedUser}
          isLoading={isLoading}
          className="conversationBox"
        />

        {/* AI SUGGESTION */}

        <Suggestion className="suggestionBox" />
      </Stack>
    </UserList>
  );
};

export default ActiveUser;
