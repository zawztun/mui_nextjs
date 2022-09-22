import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import client from "../utils/apollo"


function MyApp({ Component, pageProps}) {
 return (
<ApolloProvider client={client}>
   <ThemeProvider theme={theme}>
     <Component {...pageProps} />
   </ThemeProvider>
</ApolloProvider>
 );
}

export default MyApp;

