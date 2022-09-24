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
    query {
      allPost {
        title
        description
        mainImage{
          asset{
            url
          }
        }
       
        author{
          name
        }
        categories{
          description
        }
         _createdAt
      }
    }
    `,
  });

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
        <Posts posts = {props.data}/> 
        {/* <Card/> */}
      </CustomContainer>
    </div>
  )
}
