

import React from "react";
import { gql } from "@apollo/client";
import client from "@/utils/apollo";
import MyCard from "@/components/MyCard";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allPost( sort: { _createdAt: DESC }) {
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
export default function Index(props) {;
  return (
    <div>
      <MyCard posts={props.data} />
    </div>
  );
}
