import React from 'react'
import Box from "@mui/material/Box";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from "@mui/material/Button";


const Footer = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "rows",
      justifyContent:'center',
      py: "4em",
      gap: "2em",
    }}>
          <Button>
            <GitHubIcon />
          </Button>
          <Button>
            <LinkedInIcon />
          </Button>
          <Button>
            <GitHubIcon />
          </Button>
          <Button>
            <LinkedInIcon />
          </Button>
    </Box>
  )
}

export default Footer