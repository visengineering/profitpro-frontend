import React from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const Suggestion = ({ className }) => {
  return (
    <Box className={className}>
      <Box className="chatBackgroundImage">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "1.5rem 0.7rem",
            gap: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "#FFB526", border: "1px solid #FFFFFF" }}>
            AI
          </Avatar>
          <Typography className="aisuggestion">AI Suggestions</Typography>
        </Box>
      </Box>
      {/* ai chat */}
      <Box>
        <Box
          className="customscrollbar"
          sx={{
            height: "80%",
            maxHeight: "76vh",
            overflow: "scroll",
            marginRight: "0.5rem",
          }}
        >
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
              <Typography className="avatarsuggestion">
                AI Suggestions
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
                  className="suggestion"
                  sx={{
                    padding: "0.4rem",
                  }}
                >
                  <Typography className="mikediv">
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
                  <Typography className="objection">Objection:</Typography>
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
                    maxHeight: "3vh",
                    maxWidth: "10%",
                    paddingLeft: "3px",
                    marginTop: "2px",
                    cursor: "pointer",
                  }}
                />
                <Box
                  src="/ThumbsUp.svg"
                  alt="User Avatar"
                  component="img"
                  sx={{
                    maxHeight: "3vh",
                    maxWidth: "10%",
                    paddingLeft: "3px",
                    marginTop: "2px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "0  0.5rem",
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
              <Typography className="avatarsuggestion">
                AI Suggestions
              </Typography>

              <Box
                sx={{
                  height: "auto",
                  width: "95%",
                  backgroundColor: "#F1F7FF",
                  padding: "0.6rem",
                  borderRadius: "3px",
                  fontSize: "16px",
                }}
              >
                <Typography className="suggestion">
                  <Typography className="saletip">
                    Sale TIP:
                    <Box
                      src="/Bulb.svg"
                      alt="User Avatar"
                      component="img"
                      sx={{
                        maxHeight: "10vh",
                        maxWidth: "20%",
                        paddingLeft: "3px",
                      }}
                    />
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
                    maxHeight: "3vh",
                    maxWidth: "10%",
                    paddingLeft: "3px",
                    marginTop: "2px",
                  }}
                />
                <Box
                  src="/ThumbsUp.svg"
                  alt="User Avatar"
                  component="img"
                  sx={{
                    maxHeight: "3vh",
                    maxWidth: "10%",
                    paddingLeft: "3px",
                    marginTop: "2px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Suggestion;
