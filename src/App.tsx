import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  from,
  HttpLink,
} from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { onError } from "@apollo/client/link/error";
import router from "./routes/Routes";
import { RouterProvider } from "react-router-dom";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      alert(`Graphql error ${message}- ${locations} -${path}`)
    );
  } else if (networkError) {
    console.log(networkError);
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/login",
  //     element: <LoginScreen />,
  //   },
  // ]);

  return (
    <GoogleOAuthProvider clientId="1081298410716-qg0kr4q81btqklhmua9qu05lmnt47d5d.apps.googleusercontent.com">
      <ApolloProvider client={client}>
        {/* <GetUsers /> */}
        <RouterProvider router={router} />
      </ApolloProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
