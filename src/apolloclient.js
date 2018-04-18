import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/graphql",
    credentials: "same-origin"
  }),
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});

export default client;
