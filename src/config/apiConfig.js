import {ApolloClient, InMemoryCache} from '@apollo/client';

const config = new ApolloClient({
  uri: 'https://graphqlapihubert.herokuapp.com',
  cache: new InMemoryCache(),
});

export default config;
