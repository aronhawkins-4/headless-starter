import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo-client";

function MyApp({ Component, pageProps = {} }) {

        <Component {...pageProps} />

}

export default MyApp