import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from "@mui/material/Button";
import Image from "next/image";


const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
        padding: "1em",
        gap: "1em",
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
          Hi, I am Zaw Tun, <br /> Creative Web developer.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "#21243D",
            fontSize: "1rem",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
        <Box>
          <Button>
            <GitHubIcon />
          </Button>
          <Button>
            <LinkedInIcon />
          </Button>
        </Box>
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
            width: { xs: 250, md: 270 },
            height: { xs: 230, md: 270 },
            overflow: "hidden",
          }}
        >
          <Image
            objectFit="cover"
            src="/home/zawtun.jpg"
            alt="Zaw Z Tun"
            layout="fill"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;