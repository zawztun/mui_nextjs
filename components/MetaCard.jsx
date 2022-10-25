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
        // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "1em",
        "&:hover": {
          borderRadius: "3em",
        },
        background: " rgb(34,193,195)",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,91,121,1) 35%, rgba(0,212,255,1) 100%)",

        // background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,245,45,1) 100%);

        // backgroundImage: `url(https://source.unsplash.com/random)`,

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
            color: "white",
            fontSize: "clamp(2.5rem,5vw,3rem)",
          }}
        >
          {post.title}
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
            color: "white",
          }}
        >
          {post.description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "rows",
          justifyContent: "center",
          py: "2em",
          gap: "2em",
          color:'white'
        }}
      >
        <GitHubIcon />
        <LinkedInIcon />
      </Box>
    </Box>
  );
};

export default MetaCard;
