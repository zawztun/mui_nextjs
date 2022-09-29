import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";

import Image from "next/image";

const sections = [
  { title: "Technologies", url: "#" },
  { title: "Home", url: "#" },
  { title: "Blog", url: "#" },
];

function Header() {
  // const { sections, title } = props;

  return (
    <React.Fragment>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            borderRadius: "50%",
            marginTop: "2em",
        
            width: { xs: 20, md: 35 },
            height: { xs: 25, md: 35 },
            overflow: "hidden",
          }}
        >
          <Image
            objectFit="cover"
            src="/home/zawtun.jpg"
            alt="Zaw Z Tun"
            layout="fill"
          />
        </Box>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            overflowX: "auto",
            py:"2em",
          }}
        >
  
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Box>
    </React.Fragment>
  );
}
export default Header;
