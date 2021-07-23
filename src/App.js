import { BrowserRouter as Router } from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

import Routes from './routes';
import Layout from './components/Layout';

import GlobalStyles from './assets/styles/global';

const uri = process.env.REACT_APP_API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: localStorage.getItem('token') || '',
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

const data = {
  isLoggedIn: !!localStorage.getItem('token'),
};

// cache.writeQuery({ data });
// client.onResetStore(() => cache.writeData({ data }));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyles />
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ApolloProvider>
  );
}
