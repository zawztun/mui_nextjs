import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import dateFormat from "dateformat";
import Link from 'next/link'

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
  return (
    <Box
      sx={{
        marginBottom: "4em",
        color: "#21243D",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          textAlign: "left",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{ fontWeight: "bolder", marginBottom: "1em" }}
          variant="h4"
        >
          Featured Works
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2em",
        }}
      >
        {props.posts.allPost.map((post) => (
          <Link key = {post.title} href = {`/posts/${post?.slug?.current}`} >
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                gap: {
                  xs: "1em",
                  md: "2em",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "5%",
                  width: { xs: "100%", md: 257 },
                  height: { xs: "auto", md: 227 },
                  aspectRatio: {
                    xs: "16/9",
                  },
                  overflow: "hidden",
                  minWidth: 250,
                  // fontWeight: "bolder",
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

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                  py: "1em",
                }}
              >
                <Typography sx={{ fontWeight: "bolder", fontSize: "1.5em" }}>
                  {post.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontStyle: "italic",
                    }}
                    variant="button"
                    display="block"
                    gutterBottom
                  >
                    {dateFormat(post._createdAt, "mediumDate")}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { xs: "300", md: 750 },
                    height: { xs: "auto", md: "auto" },
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#21243D",
                    }}
                    variant="body1"
                    display="block"
                    gutterBottom
                  >
                    {post.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
