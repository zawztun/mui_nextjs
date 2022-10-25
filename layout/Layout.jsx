import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@mui/material'


const Layout = ({children}) => {
  return (
    <Box sx={{
      lineHeight: '1.5em',
      fontSize:{
          sm:'3em',
          md:'1em'
      },
      width: {
        xs: "100%",
        md: "80%",
      },

      
      mx: "auto",
      padding:{
        xs:'1em',
        md:0
      },
    }}>
        <Header/>
            {children}
        <Footer/>
       
    </Box>
  )
}

export default Layout