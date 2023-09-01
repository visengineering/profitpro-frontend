import React, { useEffect, useState, useContext } from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Conversation from "./Conversation";
import Suggestion from "./Suggestion";
import UserService from "../../../services/plugins/user";
import { toast } from "react-toastify";
import { AppContext } from "../../../hooks/AppContext";
import SaveHeading from "../../shared-components/SaveHeading";
import { useSocket } from "../../../hooks/useSocket";

const ActiveUser = ({ heading }) => {
  const { open } = useContext(AppContext);

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [isLoading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const { newActiveUser, newActiveConversation, webSocket } = useSocket();

  async function getAllActiveUsers() {
    try {
      const response = await UserService.getAllActiveUser();
      const { results } = response.data;
      const result = results.sort((a, b) => b.user_id - a.user_id);

      if (Array.isArray(results) && results.length) {
        getConversationByUser(results[0]);
      }

      setUsers(result || []);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong while fetching details", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    }
  }

  async function getConversationByUser(user) {
    setLoading(true);
    try {
      setSelectedUser(user);

      const response = await UserService.getActiveConversation(user.user_id);
      const { results } = response.data;
      if (Array.isArray(results) && results.length) {
        setConversations(results);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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

  webSocket.onmessage = (event) => {
    if (!event.data) return;

    const notification = JSON.parse(event.data);

    if (notification.event_type === "new_active_user") {
      addNewActiveUser(notification?.user || {});
    } else if (notification.event_type === "new_conversation_chunk") {
      addTranscriptToConversation(notification);
    } else if (notification.event_type === "test") {
      removeUserFromList(notification.user);
    }
  };

  const removeUserFromList = (user) => {
    console.log(user);
  };

  const addNewActiveUser = (newActiveUser) => {
    const isUserExist = users.find(
      (user) => user?.user_id === newActiveUser.user_id
    );

    if (isUserExist) return;

    const userList = [...users];
    userList.push(newActiveUser);

    if (!users.length) {
      getConversationByUser(newActiveUser);
    }

    setUsers(userList);
  };

  const addTranscriptToConversation = (newActiveConversation) => {
    if (newActiveConversation.is_last === "True") {
      const updatedUsers = users?.filter(
        (user) => user.user_id !== newActiveConversation.user_id
      );

      setUsers([...updatedUsers]);
      setConversations([]);
      setSelectedUser(null);

      updatedUsers.length && getConversationByUser(updatedUsers[0]);

      return;
    }

    if (selectedUser !== newActiveConversation.user_id) return;

    const newConversation = newActiveConversation.data;
    const updatedConversations = [...conversations, ...newConversation];
    setConversations(updatedConversations);
  };

  useEffect(() => {
    getAllActiveUsers();
  }, []);

  return (
    <>
      <SaveHeading heading={heading} />
      <Box className={open ? "userlist-open" : "userlist-default"}>
        <Stack direction="row" spacing={2}>
          <Box
            className="active_user_div"
            sx={{
              width: "22%",
              backgroundColor: "#FFFFFF",
              height: "88vh",
              padding: "0.3rem 0.1rem",
              borderRadius: "4px",
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
            {!(Array.isArray(users) && users.length) ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "0.3rem",
                }}
              >
                <Typography> No Active users found</Typography>
              </Box>
            ) : (
              <Box>
                {users.map((user) => (
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

                      ":hover": {
                        backgroundColor:
                          selectedUser?.user_id === user?.user_id
                            ? user.state
                            : "#F1F7FF",
                        borderRadius: "5px",
                      },
                      backgroundColor:
                        selectedUser?.user_id === user?.user_id
                          ? user?.state
                          : "",
                      color:
                        selectedUser?.user_id === user?.user_id ? "#FFF" : "",
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
            )}
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
      </Box>
    </>
  );
};

export default ActiveUser;
