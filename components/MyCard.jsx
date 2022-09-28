import * as React from "react";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Box } from "@mui/system";
// import dateFormat from "dateformat";

 
// export default function MyCard(props) {
//   // console.log(props.posts.allPost)
//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: {
//             xs: "column",
//             md: "row",
//           },
//         }}
//       >
//       <Typography 
//         sx = {{ fontWeight:'bolder', gap:'1em'}}
//         variant="h5"

//         >Snippets</Typography>
   

//       {props.posts.allPost.map((post) => (
//         <>
//           <Box 
//             sx={{
//               display: "flex",
//               flexDirection: {
//                 xs: "column",
//               },
//               padding: "1em",
//               gap:'1em',
//               textAlign: {
//                 xs: "center",
//                 md: "left",
//               },
//             }}
//           >
         
//             <Box sx = {{padding:'1em'}}>
//               <Typography 
//                 sx = {{fontWeight:'bolder',cursor:'pointer'}}
//                 variant="h5"
//               >{post.title}</Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   gap: "1em",
//                   flexBasis: {
//                     xs: "100%",
//                     md: "50%",
//                   },
//                   placeItems: "center",
//                 }}
//               > 
//                 <Typography
//                   sx = {{
//                     fontStyle: "italic"
//                   }}
//                   variant="button"
//                   display="block"
//                   gutterBottom
              
                
//                 >
//                   {dateFormat(post._createdAt, "mediumDate")}
//                 </Typography>
//                 <Typography  display="block" gutterBottom  
//                 sx={{
//                     backgroundColor: "black",
//                     borderRadius: "10%",
//                     color: "white",
                    
//                   }}>
//                   {/* {post.title} */}
//                 </Typography>
//               </Box>
//               <Box 
//                sx={{
//                 width: { xs: 500, md: 350 },
//                 height: { xs:"auto", md:"auto"},
//                 textAlign:"left",
//                 overflow:"hidden"
//               }}
//               >
//               <Typography 
//               sx = {{
//                 fontWeight:'700',
//                 color:"#21243D"
//               }}
//               variant="body1"  display="block" gutterBottom>
//                  {post.description}
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </>
//       ))}
//     </Box>
//     </>
//   );
// }
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from "@mui/material/Button";
import Image from "next/image";


const MyCard = () => {
  return (
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
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          flexBasis: {
            xs: "100%",
            md: "50%",
          },
          textAlign: {
            xs: "center",
            md: "left",
          },
          border:'1px solid red',
          border:'5px solid black',
          borderRadius:'3%',
          padding:'1em',
        }}
      >
     
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "#21243D",
            fontSize: "1rem",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
      </Box>
      <Box
        sx={{
          flexBasis: {
            xs: "100%",
            md: "50%",
          },
          display: "grid",
          placeItems: "center",
          border:'5px solid black',
          borderRadius:'3%',
          padding:'1em',
        }}
      >
        <Box
        
        >
           <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "#21243D",
            fontSize: "1rem",
            
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
         
        </Box>
        <Box
        
        >
           <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "#21243D",
            fontSize: "1rem",
            
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
         
        </Box>
      </Box>
    </Box>
  );
};
export default MyCard;