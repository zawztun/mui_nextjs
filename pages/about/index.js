import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@mui/material";

const profile = [
  {
    profissional:
      " Extensive experience as software engineering practices for the full software development life cycle from design to implementation to integration JavaScript based internal and external applications using JavaScript framework,  including development processes, testing to build operations. Skilled at connecting exceptional assets with users via creative UI frameworks and careful user experience optimization. Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results.",

      tools: "Agile, Bitbucket, Jira, Git, GitHub, NPM, Yarn, Docker, Slack, Trello , VS-Code"},
];



const skills = [{
  "id" : 1, 
  skill: "JavaScript, TypeScript, React.js, Next.js, Python, Redux,"
},
{"id" : 2, 
skill: "MongoDB, Express.js, React.js, Nodejs, MERN"},
{"id" : 3, 
skill: " Material-UI and Tailwind, Bootstrap, Sass"},
{"id" : 3, 
skill: " JWT,AuthO, RESTful API"
},
      
];

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "50%",
          width: { xs: 250, md: 200 },
          height: { xs: 230, md: 200 },
          overflow: "hidden",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
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
          marginBottom: "4em",
          py: "2em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

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
          {profile.map((el) => (
            <Box>
              <Box
                sx={{
                  fontSize: "1.2rem",
                  padding: "2em",
                  boxShadow:
                    "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                  borderRadius: "15px",
                  "&:hover": {
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                  }
                }}
              >
                <Typography variant="h3" sx={{ py: ".5em" }}>
                  Profissional Summary
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {el.profissional}
                </Typography>
              </Box>

              <Box
                sx={{
                  fontSize: "1.2rem",
                  padding: "2em",
                  boxShadow:
                    "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                  borderRadius: "15px",
                  "&:hover": {
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                  }
                }}
              >
                <Typography variant="h3" sx={{ py: ".5em" }}>
                  Enveroments & Tools 
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {el.tools}
                </Typography>
              </Box>
            
              <Box
                sx={{
                  padding: "2em",
                  boxShadow:
                    "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                  borderRadius: "15px",
                  "&:hover": {
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                  }
                }}
              >
                 <Typography variant="h3" sx={{ py: ".5em" }}>
                  Tech Stacks
                </Typography>
                {skills.map(el=>(
                  <Box>
                      <Box>
             
                      <Typography variant="body1" sx={{ py: ".5em" }}>
                        <li> {el.skill} </li> 
                      </Typography>
                      </Box>
                    

                  </Box>
                
                ))}
               
              </Box>
            </Box>
          ))}
        </Box>
        
      </Box>
    </Box>
  );
};
export default About;
