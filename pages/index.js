import Hero from '@/components/Hero'
import Card from '@/components/Cards';
import Posts from '@/components/Posts'
import React from 'react'
import { gql } from "@apollo/client";
import client from "@/utils/apollo";
import CustomContainer  from '../layout/Container'


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query all {
        allPost{title},
      }
    `,
  });
console.log(data)
  return {
    props: {
     data
    },
 };
}
export default function Index(props) {
  console.log(props)
  return (
    <div>
      <CustomContainer>
        <Hero/>
        <Posts/> 
        {/* <Card/> */}
      </CustomContainer>
    </div>
  )
}
