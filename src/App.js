import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Navigation />
        <Routes />
      </Router>
    </>
  );
}
