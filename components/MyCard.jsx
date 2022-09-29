import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import dateFormat from "dateformat";

const MyCard = (props) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{ fontWeight: "bolder", marginBottom: "1em" }}
          variant="h4"
        >
          Snippets
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(auto-fill, minmax(450px, 1fr))",
          },
          gap: "2em",
          // overflow: "hidden",
          // minWidth: 25
        }}
      >
        {props.posts.allPost.map((post) => (
          <>
            <Box
              sx={{
                padding: "1em",
                boxShadow: "1px .5px 1px .5px",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                  py: "1em",
                  color: "#21243D",
                }}
              >
                <Typography sx={{ fontWeight: "bolder", fontSize: "1.5em" }}>
                  {post.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontStyle: "italic",
                    }}
                    variant="button"
                    display="block"
                    gutterBottom
                  >
                    {dateFormat(post._createdAt, "mediumDate")}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "350", md: "auto" },
                    height: { xs: "auto", md: "auto" },
                    textAlign: "left",
                    // aspectRatio:{
                    //   xs:"16/4"
                    // },
                  }}
                >
                  <Typography
                    variant="body1"
                    display="block"
                    gutterBottom
                    sx={{
                      color: "#21243D",
                    }}
                  >
                    {post.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};
export default MyCard;
