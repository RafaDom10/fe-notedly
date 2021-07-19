import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Layout from './components/Layout';

import GlobalStyles from './assets/styles/global';

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </>
  );
}
