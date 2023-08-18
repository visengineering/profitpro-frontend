import React, { useEffect, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import SearchBar from "../../generic-components/SearchList";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import UserChat from "../../../services/plugins/userchat";

const UserList = styled("div")(({ theme }) => ({
  padding: "0 2rem",
  width: "85%",
  marginLeft: "18.7rem",
  marginTop: "4rem",
  height: "91vh",
  paddingTop: "1rem",
  maxWidth: "calc(100% - 300px)",
  backgroundColor: "#F4F5F8",
}));

const ActiveUser = () => {
  const [activeUserId, setActiveUserId] = useState();
  const [user, setUser] = useState([
    {
      image: "/Avatar2.png",
      user_display_name: "Qasim Rai",
      date: "Today,5:25pm",
      valueColor: "#00DF09",
    },
    {
      image: "/avatar1.jpg",
      user_display_name: "Mike Bean",
      date: "Today,5:25pm",
      valueColor: "#FFB526",
    },
    {
      image: "/Avatar3.png",
      user_display_name: "Qurbani Ali",
      date: "Today,5:25pm",
      valueColor: "#C400E4",
    },
    {
      image: "/Avatar1.png",
      user_display_name: "Qurbani Ali",
      date: "Today,5:25pm",
      valueColor: "#0066FF",
    },
    {
      image: "/avatar6.jpg",
      user_display_name: "Qurbani Ali",
      date: "Today,5:25pm",
      valueColor: "#DC2626",
    },
  ]);

  const activeUserChat = (data) => {
    console.log(data.user_display_name);
    setActiveUserId(data.user_display_name);
    // setChatData()
  };
  // async function  getAllChatUsers(){
  //   const userData = await UserChat.getAllChatUser()
  //   setUser(userData)
  // }
  // useEffect(()=> {
  //   getAllChatUsers()
  // })
  return (
    <UserList>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            width: "30%",
            backgroundColor: "#FFFFFF",
            height: "auto",
            padding: "0.5rem 0.1rem",
            borderRadius: "3px",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              paddingLeft: "1rem",
              paddingTop: "0.1rem",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            All Acive Users
          </Typography>
          {/* <Box
            sx={{
              padding: "0.5rem 1rem",
            }}
          >
            <SearchBar />
          </Box> */}

          {user.map((pro) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
                gap: 5,
                overflow: "hidden",
                alignItems: " center",
                width: "90%",
                borderRadius: "5px",
                padding: "0.5rem 0rem",
                marginLeft: "0.9rem",
                cursor: "pointer",
                ":hover": {
                  // backgroundColor: "#FFB526",
                  // borderRadius: "0px",
                  // color: "#FFFFFF",
                },
                // backgroundColor:
                //   activeUserId === pro.user_display_name ? "yellow" : "",
              }}
              className="active-user"
              onClick={() => {
                activeUserChat(pro);
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
                    backgroundColor: `${pro.valueColor}`,
                    borderRadius: "3px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderRadius: "0px !important",
                    },
                  }}
                  className="suggestion_box"
                />
                <Avatar alt="Remy Sharp" src={pro.image} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "min(10vh,18px)",
                    lineHeight: "2.5rem",

                    // paddingLeft: "1rem",
                  }}
                >
                  {pro.user_display_name}
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
        <Box
          sx={{
            width: "40%",
            backgroundColor: "#FFFFFF",
            height: "86vh",
            borderRadius: "3px",
          }}
        >
          <Box
            sx={{
              paddingTop: "0.7rem",
              paddingLeft: "1rem",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #D9D9D9",
              height: "12%",
            }}
          >
            <Box
              sx={{
                flex: 2,
                // backgroundColor:"pink",
                display: "flex",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/Avatar3.png"
                sx={{ width: 50, height: 50 }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18.292px",
                  lineHeight: "2.5rem",
                  paddingLeft: "0.6rem",
                }}
              >
                Mike Bean
                <Typography
                  sx={{
                    lineHeight: "0",
                    fontSize: "10px",
                  }}
                >
                  Active Conversation
                </Typography>
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                // backgroundColor:"tomato"
              }}
            >
              <Typography
                sx={{
                  lineHeight: "5rem",
                  fontSize: "10px",
                  textDecoration: "underline",
                }}
              >
                View Mike's all Conversation
              </Typography>
            </Box>
          </Box>
          {/* conversation */}
          <Box
            sx={{
              display: "flex",
              padding: "1.5rem  1rem",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/Avatar3.png"
              sx={{ width: 40, height: 40 }}
            />
            <Box
              sx={{
                paddingLeft: "0.4rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
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
                    fontSize: "10px",
                  }}
                >
                  I'm doing well, thank you! How can I help you today
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: "auto",
              width: "50%",
              backgroundColor: "#0E1B6B",
              float: "right",
              // marginLeft:"18rem",
              padding: "0.7rem",
              borderRadius: "3px",
              color: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
              }}
            >
              I have a question about the return policy.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              padding: "4rem  1rem",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/Avatar3.png"
              sx={{ width: 40, height: 40 }}
            />
            <Box
              sx={{
                paddingLeft: "0.4rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                Customer
              </Typography>

              <Box
                sx={{
                  height: "auto",
                  width: "150%",
                  backgroundColor: "#F1F7FF",
                  padding: "0.7rem",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                  }}
                >
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: "auto",
              width: "50%",
              backgroundColor: "#0E1B6B",
              float: "right",
              padding: "0.7rem",
              borderRadius: "3px",
              color: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
              }}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book
            </Typography>
          </Box>
        </Box>

        {/* AI SUGGESTION */}

        <Box
          sx={{
            width: "30%",
            backgroundColor: "#FFFFFF",
            height: "auto",
            borderRadius: "3px",
          }}
        >
          <Box
            src="AISuggestion.jpg"
            alt="User Avatar"
            component="img"
            sx={{ height: "12%", width: "100%" }}
          />

          {/* ai chat */}

          <Box
            sx={{
              display: "flex",
              padding: "1.5rem  0.5rem",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="Ellipse 1.svg"
              sx={{ width: 30, height: 30 }}
            />
            <Box
              sx={{
                paddingLeft: "0.4rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                AI Suggestion
              </Typography>

              <Box
                sx={{
                  height: "auto",
                  width: "95%",
                  backgroundColor: "#F1F7FF",
                  padding: "0.2rem",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    lineHeight: "1.2rem",
                    padding: "0.4rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      backgroundColor: "#FFFFFF",
                      color: "#1B2B48",
                      borderLeft: "3px solid #0E1B6B",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      padding: "4px",
                      bordorRadius: "10px",
                      margin: "0.1rem",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0E1B6B",
                        fontSize: "10px",
                        fontWeight: 600,
                        lineHeight: "16px",
                      }}
                    >
                      {" "}
                      Mike Bean
                    </Typography>
                    I have a question about the return policy.
                  </Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Typography>
              </Box>

              {/* ThumsIcon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "1rem",
                }}
              >
                <Box
                  src="/ThumbsDown.svg"
                  alt="User Avatar"
                  component="img"
                  sx={{
                    height: "3vh",
                    width: "10%",
                    paddingLeft: "3px",
                    marginTop: "2px",
                  }}
                />
                <Box
                  src="/ThumbsUp.svg"
                  alt="User Avatar"
                  component="img"
                  sx={{
                    height: "3vh",
                    width: "10%",
                    paddingLeft: "3px",
                    marginTop: "2px",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "1.5rem  0.5rem",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="Ellipse 1.svg"
              sx={{ width: 30, height: 30 }}
            />
            <Box
              sx={{
                paddingLeft: "0.4rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                AI Suggestion
              </Typography>

              <Box
                sx={{
                  height: "auto",
                  width: "95%",
                  backgroundColor: "#F1F7FF",
                  padding: "0.2rem",
                  borderRadius: "3px",
                  padding: "0.4rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    lineHeight: "1.2rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 700,
                      display: "flex",
                      lineHeight: "30px",
                    }}
                  >
                    Sale TIP:
                    <Box
                      src="/Bulb.svg"
                      alt="User Avatar"
                      component="img"
                      sx={{
                        height: "3vh",
                        width: "10%",
                        paddingLeft: "3px",
                        marginTop: "2px",
                      }}
                    />
                    {/* <img src="/Bulb.svg" sx={{width:"5%",height:"3vh"}}/> */}
                  </Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Typography>
              </Box>
              {/* ThumbsIcons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "1rem",
                }}
              >
                <Box
                  src="/ThumbsDown.svg"
                  alt="User Avatar"
                  component="img"
                  sx={{
                    height: "3vh",
                    width: "10%",
                    paddingLeft: "3px",
                    marginTop: "2px",
                  }}
                />
                <Box
                  src="/ThumbsUp.svg"
                  alt="User Avatar"
                  component="img"
                  sx={{
                    height: "3vh",
                    width: "10%",
                    paddingLeft: "3px",
                    marginTop: "2px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </UserList>
  );
};

export default ActiveUser;
