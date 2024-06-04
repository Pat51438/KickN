// src/config/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://xudc7jkzdjgmvi27qjcq73ty7m.appsync-api.us-east-1.amazonaws.com/graphql',
    cache: new InMemoryCache(),
});

export default client;
