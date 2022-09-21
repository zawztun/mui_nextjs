import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@mui/material'



const Container = ({children}) => {
  return (
    <Box sx={{
      lineHeight: 1.5,
      width: {
        xs: "100%",
        md: "80%",
      },
      mx: "auto",
    }}>
        <Header/>
            {children}
        <Footer/>
    </Box>
  )
}

export default Container