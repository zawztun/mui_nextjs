// import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import dateFormat from "dateformat";
import { gql } from "@apollo/client";
import client from "@/utils/apollo";

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
  //   console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await client.query({
    variable: { slug: params.slug },
    query: gql`
      query POST_DETAILS($slug: String) {
        allPost(where: { slug: { current: { eq: $slug } } }) {
          _id
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
  return {
    props: { post: data },
  };
};

export default function PostDetail({ post }) {
  console.log(post);
  const now = new Date();
  return (
    <Box sx={{ marginBottom: "4em", color: "#21243D" }}>
      <Typography variant="h4" gutterBottom></Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Box
        sx={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: 250, md: "auto" },
          height: { xs: 230, md: 270 },
          overflow: "hidden",
        }}
      >
        <Image
          objectFit="cover"
          src="/post/rendering.png"
          alt="Zaw Z Tun"
          layout="fill"
        />
      </Box>

      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
      <Box
        sx={{
          display: "flex",
          placeItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            backgroundColor: "#21243D",
            //boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            color: "white",
            borderRadius: "10px",
            padding: "2px",
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          {dateFormat(now, "mediumDate")}
        </Typography>
      </Box>
    </Box>
  );
}
