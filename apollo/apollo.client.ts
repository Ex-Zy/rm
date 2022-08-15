import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const apolloClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
