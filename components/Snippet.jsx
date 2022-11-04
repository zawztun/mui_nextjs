import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dateFormat from "dateformat";
import Link from 'next/link'
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Snippet = (props) => {
  return (
    <Box>
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
          Snippets
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
        {props.posts.allSnippet.map((post) => (
      
          <Link key = {post.title} href = {`/snippets/${post?.slug?.current}`} 
        
          >
            
            <Box
              sx={{
                padding: "1em",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            >
                  
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
            <Button variant="text" endIcon={<SendIcon />}>
          Snippets
</Button>
          </Link>
       
      </Box>
    </Box>
  );
};
export default Snippet;
