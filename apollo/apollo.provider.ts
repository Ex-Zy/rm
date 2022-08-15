import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "./apollo.client";

const apolloProvider = provideApolloClient(apolloClient);

export default apolloProvider;
