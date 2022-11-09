import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import dateFormat from "dateformat";
import Link from "next/link";
import SendIcon from '@mui/icons-material/Send';
import Metatag from "@/components/meta/Metatag";

export default function AllPosts(props) {

  return (
 
<Box>
<Metatag />
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
    Posts
  </Typography>
</Box>
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      md: "repeat(auto-fill, minmax(350px, 1fr))",
    },
    gap: "2em",
    
  }}
>
 
     {props.posts.allPost.map((post) => (<Link key={post.title} href={`/posts/${post?.slug?.current}`}>
      
      <Box
        sx={{
          display:'flex',
          flexDirection:"column",
          alignItems:'center',
          padding: "1em",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: "15px",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
          }
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
            color: "#21243D",
          }}
        >
          <Typography sx={{ fontWeight: "bolder", fontSize: "1.5em" }}>
            {post.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent:"space-between",
              placeItems: "center",
            }}
          >
         
            {post.categories && post.categories.map(cat => (<Box  sx={{
                fontSize:'12px',
                backgroundColor:   "#21243D",
                //boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                color:"white",
                px:".5rem",
                

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
              width: { xs: "350", md: "auto" },
              height: { xs: "auto", md: "auto" },
              textAlign: "left",
            }}
          >
          

            <Typography
              variant="body1"
              display="block"
              gutterBottom
              sx={{
                color: "#21243D",
              }}
            >
              {post.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  ))}
</Box>

<Box sx = {{ display:'flex', justifyContent:'flex-end',py:'3em', 
    }}>
 
    <Link href="/snippets" >
      <Button variant="text" endIcon={<SendIcon /> } sx={{ color: "black" }}>
    Snippets
</Button>
    </Link>
 
</Box>
</Box>
  );
}

