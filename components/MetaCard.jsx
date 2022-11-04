import React from "react";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dateFormat from "dateformat";
import IconButton from "@mui/joy/IconButton";

const MetaCard = ({ post }) => {
  return (
    <Box
      sx={{
        maxWidth: "contained",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        textAlign: {
          xs: "center",
          md: "left",
        },

        padding: "3em",
        borderRadius: "1em",
        "&:hover": {
          borderRadius: "3em",
        },


        background:"rgba(255, 255, 255, 1)",
        background:" linear-gradient(5deg, rgba(25, 220, 240, .5 ) 10%, rgba(253,245,45,1) 100%)",
        boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",
         backdropFilter:"blur( 20px )",
         WebkitBackdropFilter:"blur( 5px )",
         borderRadius:"20px",
         //border:"1px solid rgba( 255, 255, 255, 0.18 )",
        // background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,245,45,1) 100%)",

        //backgroundImage: `url(https://source.unsplash.com/random)`,

        // backgroundSize: "cover",
        // backgroundPosition: "center",
         display: "flex",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: "bolder",
            //color: "white",
            fontSize: "clamp(2.5rem,5vw,3rem)",
          }}
        >
          {post.title}
        </Typography>
      </Box>

      <Box
        sx={{
      
          width: { xs: "350", md: "auto" },
          height: { xs: "auto", md: 'auto'},
          textAlign: "left"
        }}
      >
        <Typography
          variant="body1"
          display="block"
          fontSize= "clamp(1.5em,5vw,1em)"
          gutterBottom
        >
          {post.description}
        </Typography>
        <Box
        sx={{
          display: "flex",
          flexDirection: "rows",
          justifyContent: "center",
          gap: "2em",
          pt:"1em"
        }}
      >
        <GitHubIcon />
        <LinkedInIcon />
      </Box>
      </Box>

     
    </Box>
  );
};

export default MetaCard;
