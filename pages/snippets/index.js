import React from "react";
import { gql } from "@apollo/client";
import client from "@/utils/apollo";

import Metatag from "@/components/meta/Metatag";
import AllSnippets from "@/components/AllSnippets";

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
        allSnippet( sort: { _createdAt: DESC }) {
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
  return (
    <div>
      <Metatag/>
     <AllSnippets posts={props.data} />
    </div>
  );
}
