import React from 'react'
import Box from "@mui/material/Box";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from "@mui/material/Button";
import Link from 'next/link';



const Footer = () => {
  return (
    
    <Box sx={{
      display: "flex",
      flexDirection: "rows",
      justifyContent:'center',
      py: "4em",
      gap: "2em",
      padding: "1em",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRadius: "15px",
                cursor: "pointer",
             
                  "&:hover": {
             
               background:"rgb(0,10,36)",
                background:" linear-gradient(90deg, rgba(0,10,36,1) 10%, rgba(3,31,41,1) 62%, rgba(0,212,255,1) 100%)"
            },
    
                
    
    }}>
      
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
  )
}

export default Footer