import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: "https://g8333zv0.api.sanity.io/v1/graphql/production/default",
    cache: new InMemoryCache(),
  });
   
  export default client