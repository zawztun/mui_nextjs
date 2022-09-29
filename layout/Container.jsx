import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@mui/material'
import { fontSize } from '@mui/system'



const Container = ({children}) => {
  return (
    <Box sx={{
      lineHeight: 1.5,
      fontSize:{
          sm:'2em',
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

export default Container