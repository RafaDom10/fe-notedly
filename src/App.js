import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Routes from './routes';
import Layout from './components/Layout';

import GlobalStyles from './assets/styles/global';

const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

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
