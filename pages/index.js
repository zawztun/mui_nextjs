import Hero from '@/components/Hero'
import MyCard from '@/components/MyCard';
import Posts from '@/components/Posts'
import React from 'react'
import CustomContainer  from '../layout/Container'

// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];

export default function index() {
  return (
    <div>
      <CustomContainer>
        <Hero/>
        <Posts/>
        <MyCard/>
      </CustomContainer>
    </div>
  )
}
