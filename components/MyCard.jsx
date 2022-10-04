import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dateFormat from "dateformat";
import Link from 'next/link'



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
          textAlign: "left",
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
            md: "repeat(auto-fill, minmax(350px, 1fr))",
          },
          gap: "2em",
          // overflow: "hidden",
          // minWidth: 25
        }}
      >
        {props.posts.allPost.map((post) => (
      
          <Link key = {post.title} href = {`/posts/${post?.slug?.current}`} 
        
          >
            
            <Box
              sx={{
                padding: "1em",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRadius: "15px",
              }}
            >
                  {/* {console.log(post)} */}
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
                      fontSize:'11px',
                      backgroundColor:   "#21243D",
                      //boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      color:"white",
                      borderRadius:'10px',
                      padding:"2px"

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
          </Link>
        ))}
      </Box>
    </Box>
  );
};
export default MyCard;
