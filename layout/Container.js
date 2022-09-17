import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'



const Container = ({children}) => {
  return (
    <div style={{padding: "5rem"}}>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default Container