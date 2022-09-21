import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Dataset } from "@mui/icons-material";

const posts = [
  {
    title: "nesciunt quas odio",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    date: 2022,
    image:
      "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "nesciunt quas odio",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    date: 2000,
    image:
      "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "nesciunt quas odio",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    date: 2020,
    image:
      "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "nesciunt quas odio",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    date: 2020,
    image:
      "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "nesciunt quas odio",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    date: 2021,
    image:
      "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "nesciunt quas odio",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    date: 2021,
    image:
      "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "nesciunt quas odio",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    date: 2021,
    url: "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function MyCard() {
  return (
    <>
      {posts.map((post) => (
        <>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
            padding: "1em",
            gap: "1em",
          }}
          >
          <Box
            sx={{
              flexBasis: {
                xs: "100%",
                md: "50%",
              },
              display: "grid",
              placeItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 300, md: 270 },
                height: { xs: 230, md: 270 },
                overflow: "hidden",
              }}
            >
              {/* <Image
            objectFit="cover"
            src= "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Zaw Z Tun"
            layout="fill"
          /> */}
              <Image
                objectFit="cover"
                src="/home/zawtun.jpg"
                alt="Zaw Z Tun"
                layout="fill"
              />
            </Box>
          </Box>
          <Box>
            <Typography variant="h4" gutterBottom>
              {post.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                padding: "1em",
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
                sx={{ backgroundColor: "red", borderRadius: "10px" }}
              >
                2020
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                {post.date}
              </Typography>
            </Box>
            <Typography variant="body1" gutterBottom>
              {post.body}
            </Typography>
          </Box>
        </Box>
        </>
      ))}
    </>
  );
}
