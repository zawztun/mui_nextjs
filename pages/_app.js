import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import client from "../utils/apollo"
import Layout from "layout/Layout";
import "prismjs/themes/prism.min.css"

function MyApp({ Component, pageProps}) {
 return (
  
<ApolloProvider client={client}>
   <ThemeProvider theme={theme}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
   </ThemeProvider>
</ApolloProvider>
 );
}

export default MyApp;

