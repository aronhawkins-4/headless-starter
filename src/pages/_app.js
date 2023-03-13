import '../../styles/globals.css'
import { ApolloProvider } from '@apollo/client/react';
import { myClient } from '../lib/apollo-client'

function MyApp({ Component, pageProps = {} }) {
    return (
        <ApolloProvider client={myClient}>
            <Component {...pageProps} />;
        </ApolloProvider>
    )
}

export default MyApp