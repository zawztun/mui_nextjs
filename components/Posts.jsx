import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import dateFormat from "dateformat";
import Link from "next/link";
import SendIcon from '@mui/icons-material/Send';
import Metatag from "@/components/meta/Metatag";

export default function Posts(props) {
  return (
    <>
    <Metatag/>
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
            <Link key={post.title} href={`/posts/${post?.slug?.current}`}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                    cursor: "pointer",
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
                    justifyContent:"flex-start",
                    gap:'2em',
                    placeItems: "center",
                  }}
                >
               
        
                  {post.categories && post.categories.map(cat => (<Box  sx={{
                      fontSize:'11px',
                      backgroundColor:   "#21243D",
                      color:"white",
                      borderRadius:'10px',
                      padding:"2px"

                    }}
                    variant="button"
                    display="block"
                    gutterBottom
                    key = {cat.title}>{cat.title}</Box>))}  
                       <Typography
                    sx={{
                      fontSize:'11px',

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
      <Box sx = {{ display:'flex', justifyContent:'flex-end'}}>
       
          <Link href="/posts">
          <Button endIcon={<SendIcon />}>
         Blogs
</Button>
          </Link>
       
      </Box>
    </>
  );
}
