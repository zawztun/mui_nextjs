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
import Metatag from "@/components/meta/Metatag";

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query ALL_SNIPPET{
        allSnippet {
          slug {
            current
          }
          _id
        }
      }
    `,
  });

  const paths = data.allSnippet.map((post) => {
    return {
      params: { snippet: post.slug.current.toString() },
    };
  });
  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const { data } = await client.query({
    variables: { slug: params.snippet },
    query: gql`
      query SNIPPET_DETAILS($slug: String) {
        allSnippet(where: { slug: { current: { eq: $slug } } }) {
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
    props: { post: data.allSnippet[0] },
  };
};

export default function SnippetDetail({ post }) {
  console.log(post);
  let defaultMeta = {
    title: post.title,
    description:post.description,
    url: "https://zztblog-zawztun.vercel.app/",
    image: "/home/test_meta.png",
  };

  return (
    <>
    <Metatag meta = {defaultMeta}/>
     <MetaCard post = {post}/>
    <Box sx={{ marginBottom: "2em", color: "#21243D" }}>
      <Typography variant="h4" gutterBottom></Typography>
      <Typography variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <Box>
        <PortableText value={post.bodyRaw} components={SanityCustom} />
      </Box>
     
    </Box>
    </>
  );
}