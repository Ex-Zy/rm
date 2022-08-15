import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

export default defineNuxtPlugin(({ vueApp }) => {
  // Create the apollo client
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.API_ENDPOINT,
  });
  const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
  });

  vueApp.provide(apolloProvider);
});
