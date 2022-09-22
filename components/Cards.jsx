// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Image from "next/image";

// const posts = [
//   {
//     title: "Designing Dashboards",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "02.02.2021",
//     image:
//       "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "22.02.2020",
//     image:
//       "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "02.02.2021",
//     image:
//       "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "Designing Dashboards",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "02.02.2021",
//     image:
//       "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "22.02.2020",
//     image:
//       "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "02.02.2021",
//     image:
//       "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     title: "nesciunt quas odio",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     Author: "zawtun",
//     date: "07.04.2021",
//     image:
//       "https://images.unsplash.com/photo-1662639602789-e118671bae5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   },
// ];

// const Cards = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: {
//           xs: "column-reverse",
//           md: "row",
//         },
//         padding: "1em",
//         gap: "1em",
//       }}
//     >
//       <Box
//         sx={{
//           flexBasis: {
//             xs: "100%",
//             md: "50%",
//           },
//           display: "grid",
//           placeItems: "center",
//         }}
//       >
//         <Box sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "1em",
//                   flexBasis: {
//                     xs: "100%",
//                     md: "50%",
//                   },
//                   textAlign: {
//                     xs: "center",
//                     md: "left",
//                   },
//                 }}>
//           {posts.map((post) => (
//             <>
//               <Box
//               >
//                 <Typography
//                   variant="h1"
//                   gutterBottom
//                   sx={{
//                     fontWeight: "bolder",
//                     fontSize: "clamp(2.5rem,5vw,3rem)",
//                   }}
//                 >
//                  {post.title}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   gutterBottom
//                   sx={{
//                     color: "#21243D",
//                     fontSize: "1rem",
//                   }}
//                 >
//                   Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//                   amet sint. Velit officia consequat duis enim velit mollit.
//                   Exercitation veniam consequat sunt nostrud amet.
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   position: "relative",
//                   borderRadius: "10%",
//                   width: { xs: 250, md: 270 },
//                   height: { xs: 230, md: 270 },
//                   overflow: "hidden",
//                 }}
//               >
//                 <Image
//                   objectFit="cover"
//                   src="/home/zawtun.jpg"
//                   alt="Zaw Z Tun"
//                   layout="fill"
//                 />
//               </Box>
//             </>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };
// export default Cards;
