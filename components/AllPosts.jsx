// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import dateFormat from "dateformat";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@mui/material";

// const AllPosts = (props) => {
//   const [visible, setVisible] = useState(0);

//   const showMore = () => {
//     setVisible((pre) => pre + 3);
//   };
//   return (
//     <Box
//       sx={{
//         marginBottom: "4em",
//         color: "#21243D",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "2em",
//         }}
//       >
//         {props.posts.allPost.slice(0, visible).map((post) => (
//           <Link key={post.title} href={`/posts/${post?.slug?.current}`}>
//             <Box
//               sx={{
//                 padding: "1em",
//                 boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
//                 borderRadius: "15px",
//               }}
//             >
           
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "1em",
//                   py: "1em",
//                   color: "#21243D",
//                 }}
//               >
//                 <Typography sx={{ fontWeight: "bolder", fontSize: "1.5em" }}>
//                   {post.title}
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     placeItems: "center",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: "11px",
//                       backgroundColor: "#21243D",
//                       //boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
//                       color: "white",
//                       borderRadius: "10px",
//                       padding: "2px",
//                     }}
//                     variant="button"
//                     display="block"
//                     gutterBottom
//                   >
//                     {dateFormat(post._createdAt, "mediumDate")}
//                   </Typography>
//                 </Box>
//                 <Box
//                   sx={{
//                     width: { xs: "350", md: "auto" },
//                     height: { xs: "auto", md: "auto" },
//                     textAlign: "left",
//                   }}
//                 >
//                   <Typography
//                     variant="body1"
//                     display="block"
//                     gutterBottom
//                     sx={{
//                       color: "#21243D",
//                     }}
//                   >
//                     {post.description}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Link>
//         ))}
//       </Box>
     
//     </Box>
//   );
// };
// export default AllPosts;
