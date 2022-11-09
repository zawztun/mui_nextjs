import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import SendIcon from '@mui/icons-material/Send';

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
        gap: "1em",
        marginBottom: "4em",
        py: "2em",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "15px",
        padding:'2em'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          flexBasis: {
            xs: "100%",
            md: "50%",
          },
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: "bolder",
            fontSize: "clamp(2.5rem,5vw,3rem)",
          }}
        >
          Hi, I am Zaw Tun, <br />
          <br /> Creative Web Developer.
          <br />
          UI/UX Front End Developer / Blogger /Freelancer.
        </Typography>
        <Link href = "/about">
        <Typography
          variant="body1"
          gutterBottom
           sx={{
            display:'flex',
           justifyContent:"flex-end",
           cursor: "pointer",
         
           }}
        >
            <Button endIcon = {<SendIcon/>} sx={{fontSize: ".5em", color:'black',
             "&:hover": {
              backgroundColor: "black",
              color: "white",
            }}}>
          More...
        </Button>
        </Typography>
        </Link>
     
      </Box>
      <Box
        sx={{
          flexBasis: {
            xs: "100%",
            md: "50%",
          },
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "50%",
            width: { xs: 230, md: 270 },
            height: { xs: 230, md: 270 },
            overflow: "hidden",
            // boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
          }}
        >
          <Image
            objectFit="cover"
            src="/home/zawtun.jpg"
            alt="Zaw Z Tun"
            layout="fill"
          />
        </Box>
        
        <Box sx = {{   cursor: "pointer",}}>
          <Link href = "https://www.linkedin.com/in/zaw-tun-75bb52127/">
          <Button>
            <LinkedInIcon />
          </Button>
          </Link>
          <Link href = "https://github.com/zawztun">
          <Button>
            <GitHubIcon />
          </Button>
          </Link>
         
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;
