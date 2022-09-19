import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'



const Container = ({children}) => {
  return (
    <div style = {{width:"80%", marginLeft:'auto', marginRiht: 'auto'}}>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default Container