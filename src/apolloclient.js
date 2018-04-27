import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/graphql",
    //fetchOptions: { method: "GET" },
    credentials: "same-origin"
  }),
  cache: new InMemoryCache()
});

export default client;
