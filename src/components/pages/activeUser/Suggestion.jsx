import React from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const Suggestion = () => {
  return (
    <Box
      sx={{
        width: "25%",
        backgroundColor: "#FFFFFF",
        height: "88vh",
        borderRadius: "3px",
        overflowY: "auto",
      }}
    >
      <Box className="chatBackgroundImage">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "1.2rem 0.7rem",
            gap: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "#FFB526" }}>AI</Avatar>
          <Typography sx={{ color: "#FFF", fontSize: "20px", fontWeight: 700 }}>
            AI Suggestions
          </Typography>
        </Box>
      </Box>
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
              fontSize: "16px",
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
                fontSize: "16px",
                lineHeight: "1.2rem",
                padding: "0.4rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
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
              <Typography
                sx={{
                  color: "#FFB526",
                  fontWeight: 400,
                  fontSize: "16px",
                }}
              >
                Objection:
              </Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,but also the leap into electronic
              typesetting, remaining essentially unchanged.
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
                cursor: "pointer",
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
                cursor: "pointer",
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
              fontSize: "16px",
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
              fontSize: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "1.2rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,but also the leap into electronic
              typesetting, remaining essentially unchanged.
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
  );
};

export default Suggestion;
