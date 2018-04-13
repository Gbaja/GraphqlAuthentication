import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:5000/graphql" }),
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
