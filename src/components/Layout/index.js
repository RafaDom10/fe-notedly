import PropTypes from 'prop-types';

import { Wrapper, Main } from './styles';

import Header from '../Header';
import Navigation from '../Navigation';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>
        <Navigation />
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
