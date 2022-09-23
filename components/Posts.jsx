import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Divider, Grid } from "@mui/material";
import Image from "next/image";

// const posts = [
//   {
//     title: "Designing Dashboards",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "02.02.2021",
//     image:
//       "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "22.02.2020",
//     image:
//       "https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "02.02.2021",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   },
//   {
//     title: "Designing Dashboards",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "02.02.2021",
//     image:
//       "https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "22.02.2020",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYiUyMGRlc2lnbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "02.02.2021",
//     image:
//       "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "07.04.2021",
//     image:
//       "https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
//   },
// ];

export default function Posts(props) {
  console.log(props.posts.allPost)
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          padding: "1em",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Featured Works</Typography>
      </Box>

      {props.posts.allPost.map((post) => (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              padding: "1em",
              gap: "1em",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
              <Box
              sx={{
                position: "relative",
                borderRadius: "5%",
                width: { xs: 420, md: 350 },
                height: { xs: 400, md: 270 },
                overflow: "hidden",
                fontWeight: "bolder",
                fontSize: "clamp(2.5rem,5vw,3rem)",
              }}
            >
              <Image
                objectFit="cover"
                src={post.mainImage.asset.url}
                alt="Zaw Z Tun"
                layout="fill"
              />
            </Box>
            <Box>
              <Typography variant="h4">{post.title}</Typography>
              <Box
                sx={{
                  display: "flex",
                 padding:"1rem",
                  gap: "1em",
                  flexBasis: {
                    xs: "100%",
                    md: "50%",
                  },
                  placeItems: "center",
                }}
              > 
                <Typography
                  variant="button"
                  display="block"
                  gutterBottom
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "10%",
                    padding: "5px",
                    color: "white",
                  }}
                
                >
                  {post.date}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Author: {post.Author}
                </Typography>
              </Box>
              <Typography variant="body1" gutterBottom>
                {post.body}
              </Typography>
            </Box>
          </Box>
          <Divider />
        </>
      ))}
    </>
  );
}
