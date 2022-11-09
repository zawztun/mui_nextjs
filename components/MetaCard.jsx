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


        // background:"rgba(255, 255, 255, 1)",
        // background:" linear-gradient(5deg, rgba(25, 220, 240, .5 ) 10%, rgba(253,245,45,1) 100%)",
    
        //  backdropFilter:"blur( 20px )",
        //  WebkitBackdropFilter:"blur( 5px )",
        //  borderRadius:"20px",

         padding: "2em",
         //boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
         boxShadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
         borderRadius: "15px",
         cursor: "pointer",

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
          textAlign: "left",
          
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
        {/* <Box
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
      </Box> */}
      <Box
                  sx={{
                    display: "flex",
                    justifyContent:"flex-end",
                    gap:'2em',
                    placeItems: "center",
                  }}
                >
               
        
                  {post.categories && post.categories.map(cat => (<Box  sx={{
                      fontSize:'12px',
                      backgroundColor:   "#21243D",
                      color:"white",
                      borderRadius:'10px',
                      padding:".5em"

                    }}
                    variant="button"
                    display="block"
                    gutterBottom
                    key = {cat.title}>{cat.title}</Box>))}  
                       <Typography
                    sx={{
                      fontSize:'11px',

                    }}
                    variant="button"
                    display="block"
                    gutterBottom
                  >
                    {dateFormat(post._createdAt, "mediumDate")}
                  </Typography>
                </Box>
      </Box>

     
    </Box>
  );
};

export default MetaCard;
