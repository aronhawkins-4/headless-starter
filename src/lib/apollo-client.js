import { ApolloClient, InMemoryCache } from '@apollo/client'

export const myClient = new ApolloClient({
  uri: `${process.env.WORDPRESS_GRAPHQL_ENDPOINT}/graphql`,
  cache: new InMemoryCache(),
});