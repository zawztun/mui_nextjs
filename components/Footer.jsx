import React from 'react'
import Box from "@mui/material/Box";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from "@mui/material/Button";
import Link from 'next/link';
import Divider from '@mui/material/Divider';




const Footer = () => {
  return (
    <>
       <Divider />
    <Box sx={{
      display: "flex",
      flexDirection: "rows",
      justifyContent:'center',
      py: "2em",
      gap: "2em",
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
    </>
  )
}

export default Footer