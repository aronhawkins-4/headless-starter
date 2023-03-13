import { ApolloProvider } from '@apollo/client';
import React from 'react';
import '../../styles/globals.css'
import client from '../lib/apollo-client'

function MyApp({ Component, pageProps = {} }) {

    return <Component {...pageProps} />;

  
}

export default MyApp