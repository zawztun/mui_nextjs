import Hero from '@/components/Hero'
import Posts from '@/components/Posts'
import React from 'react'
import { gql } from "@apollo/client";
import client from "@/utils/apollo";
import CustomContainer  from '../layout/Container'
import MyCard from '@/components/MyCard';




export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query {
      allPost {
        title
        slug{
          current
        }
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

  return (
    <div>
      <CustomContainer >
        <Hero/>
        <Posts posts = {props.data}/>
        <MyCard posts = {props.data}/>
        
      </CustomContainer>
    </div>
  )
}
