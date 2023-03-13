import '../../styles/globals.css'
import { ApolloProvider } from '@apollo/client/react'
import { myClient } from '../lib/apollo-client'
import NavBar from 'src/components/NavBar'

function MyApp({ Component, pageProps = {} }) {
    return (
        <ApolloProvider client={myClient}>
            <NavBar />
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp