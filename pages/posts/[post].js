// import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import dateFormat from "dateformat";
import { gql } from "@apollo/client";
import client from "@/utils/apollo";
import { List, ListItem } from "@mui/material";
import {PortableText} from '@portabletext/react'
import SanityImage from '@/components/sanityImage'
import SanityCustom from "@/components/portable/SanityCustom";
import MetaCard from "@/components/MetaCard";

import { useEffect } from "react"

import Prism from "prismjs"
import Metatag from "@/components/meta/Metatag";

require("prismjs/components/prism-javascript")

require("prismjs/components/prism-css")

require("prismjs/components/prism-jsx")



export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query ALL_POST {
        allPost {
          slug {
            current
          }
          _id
        }
      }
    `,
  });

  const paths = data.allPost.map((post) => {
    return {
      params: { post: post.slug.current.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const { data } = await client.query({
    variables: { slug: params.post },
    query: gql`
      query POST_DETAILS($slug: String) {
        allPost(where: { slug: { current: { eq: $slug } } }) {
          _id
          description
          title
          bodyRaw
          categories {
            _id
            title
          }
        }
      }
    `,
  });
  console.log(data);
  return {
    props: { post: data.allPost[0] },
  };
};
export default function PostDetail({ post }) {

  let defaultMeta = {
    title: post.title,
    description:post.description,
    url: "https://zztblog-zawztun.vercel.app/",
    image: "/home/test_meta.png",
  };
  useEffect(()=>{
    Prism.highlightAll()
  },[])
  return (
    <>
    <Metatag meta = {defaultMeta}/>
    <MetaCard post = {post}/>
    <Box sx={{ marginBottom: "2em", color: "#21243D", 
    fontSize: "clamp(1.5em,5vw,1em)", 
      display: "flex",
      flexDirection: "column",
      gap: "1em",
     
      lineHeight:'1.5em',
      textAlign:"center",
      flexBasis: {
        xs: "100%",
        md: "50%",
      },
      textAlign: "left"
    }}>
      <Box>
        <PortableText value={post.bodyRaw} components={SanityCustom} />
      </Box>
    </Box>
    </>
  );
}
