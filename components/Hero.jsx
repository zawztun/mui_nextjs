import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

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
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "#21243D",
            fontSize: "1rem",
          }}
        >
          Extensive experience as software engineering practices for the full
          software development life cycle from design to implementation to
          integration, including development processes, testing to build
          operations. Skilled at connecting exceptional assets with users via
          creative UI frameworks and careful user experience optimization.
          Experienced working with teams to produce impactful, leading-edge
          websites that engage customers and deliver business results.
        </Typography>
        <Box>
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
