import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
// import { PortableText } from "@portabletext/react";
import SanityImage from "@/components/sanityImage";

//portableText
let SanityCustom = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
    span: ({ children, value }) => {
      return (
        <Typography variant="h4" id={value._key}>
          {children}
        </Typography>
      );
    },
    code: ({ value }) => (
      <Box sx={{ display: "block"}}>
        <pre className={`language-${value.language}`}>
          <code>{value.code}</code>
        </pre>
      </Box>
    ),
  },
  block: {
    h1: ({ children, value }) => {
      return (
        <Typography
          variant="h1"
          id={value._key}
          sx={{ fontSize: "2em", fontWeight: "bold" }}
        >
          {children}
        </Typography>
      );
    },
    h2: ({ children, value }) => {
      return (
        <Typography variant="h2" id={value._key}>
          {children}
        </Typography>
      );
    },
    h3: ({ children, value }) => {
      return (
        <Typography variant="h3" id={value._key}>
          {children}
        </Typography>
      );
    },
    h4: ({ children, value }) => {
      return (
        <Typography variant="h4" id={value._key}>
          {children}
        </Typography>
      );
    },

    normal: ({ children, value }) => {
      return (
        <Typography variant="body1" id={value._key}>
          {children}
        </Typography>
      );
    },
  },
  marks: {
    em: ({ children }) => (
      <em sx={{ color: "red", display: "inline", fontWeight: "bold" }}>
        {children}
      </em>
    ),

    code: ({ children }) => (
      <Box>
        <code className="text-lg text-primary text-purple-700">{children}</code>
      </Box>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          style={{ color: "green" }}
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <List>{children}</List>,
    number: ({ children }) => <List>{children}</List>,
  },
  listItem: {
    bullet: ({ children }) => (
      <ListItem
        sx={{
          listStyleType: "disc",
          display: "list-item",
        }}
      >
        ✅ {children}
      </ListItem>
    ),
    number: ({ children }) => (
      <ListItem
        sx={{
          listStyleType: "number",
          display: "list-item",
        }}
      >
        ✅ {children}
      </ListItem>
    ),
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  block: {
    // Ex. 1: customizing common block types

    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
  },
};

export default SanityCustom;
