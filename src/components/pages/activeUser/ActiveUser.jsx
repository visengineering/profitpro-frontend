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
  const [isLoading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);

  const { newActiveUser, newActiveConversation } = useSocket();
  console.log("newActiveUser", newActiveUser);
  console.log("newActiveConversation ", newActiveConversation);

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
      setConversations(results);
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
  console.log("users data = ", users);
  console.log("--------------------- = ", newActiveUser);
  const identifyUser = (users, newActiveUser) => {
    if (users.length) {
      var newUserFind = users.find(
        (user) => user?.user_id === newActiveUser.user_id
      );

      if (!newUserFind) {
        setUsers((prevUsers) => [...prevUsers, newActiveUser]);
      } else {
        return;
      }
    }

    if (!users.length) {
      setSelectedUser(newActiveUser);
      setUsers((prevUsers) => [...prevUsers, newActiveUser]);
      // var newConversation = newActiveConversation.data;
      // setConversations((prevConversation) => [
      //   ...prevConversation,
      //   ...newConversation,
      // ]);
    }
  };
  const identifyUserConveration = (users, newActiveConversation) => {
    const newUser = users?.find((user) => {
      return user?.user_id === newActiveConversation.user_id;
    });
    if (newUser) {
      const newConversation = newActiveConversation.data;
      console.log("conversation array:", newConversation);
      const updatedConversations = [...conversations, ...newConversation];
      console.log("Updated conversations:", updatedConversations);

      setConversations(updatedConversations);
    }
  };

  useEffect(() => {
    if (Object.keys(newActiveUser).length > 0) {
      identifyUser(users, newActiveUser);
    }

    if (Object.keys(newActiveConversation).length > 0) {
      identifyUserConveration(users, newActiveConversation);
    }
  }, [newActiveUser, newActiveConversation]);

  useEffect(() => {
    getAllActiveUsers();
  }, []);
  {
    console.log("====conversations====", conversations);
  }
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
