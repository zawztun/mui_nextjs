
import React from "react";
import { gql } from "@apollo/client";
import client from "@/utils/apollo";
import Metatag from "@/components/meta/Metatag";
import AllPosts from "@/components/AllPosts";
import Search from "hooks/Search";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allPost(sort: { _createdAt: DESC }) {
          title
          slug {
            current
          }
          description
          mainImage {
            asset {
              url
            }
          }
          author {
            name
          }
          categories {
            description
            title
          }
          _createdAt
        }
        allSnippet(limit: 3, sort: { _createdAt: DESC }) {
          title
          slug {
            current
          }
          description
          mainImage {
            asset {
              url
            }
          }
          author {
            name
          }
          categories {
            description
            title
          }
          _createdAt
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}
export default function Index(props) {
   //const { keyword, setKeyword, data: posts } = Search(data.posts);

  return (
    <div>
      <Metatag/>
      <Search />
      <AllPosts posts={props.data} />
    </div>
  );
}
