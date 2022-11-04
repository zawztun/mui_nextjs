import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from "@mui/material/Button";
import Image from "next/image";


const About= () => {
  return (
    <Box sx = {{ display:'flex', flexDirection:"column",
justifyContent:'center', alignItems:'center'}}>
      <Box
          sx={{
            position: "relative",
            borderRadius: "50%",
            width: { xs: 250, md: 200 },
            height: { xs: 230, md: 200 },
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
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: "1em",
        marginBottom:"4em",
        py:'2em'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        justifyContent:'center',
    
        
          gap: "1em",
          flexBasis: {
            xs: "100%",
            md: "100%",
          },
          textAlign: {
            xs: "center",
            md: "left",
        
          
          },
        }}
      >
        {/* <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: "bolder",
            fontSize: "clamp(2.5rem,5vw,3rem)",
          }}
        >
          Hi, I am Zaw Tun, <br /> Creative Web developer.
        </Typography> */}
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "#21243D",
            fontSize: "1.5rem",
      
          }}
        >
Extensive experience as software engineering practices for the full software development life cycle from design to implementation to integration, including development processes, testing to build operations. Skilled at connecting exceptional assets with users via creative UI frameworks and careful user experience optimization. Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results.


        </Typography>
      </Box>
      
    </Box>
    </Box>
  );
};
export default About;