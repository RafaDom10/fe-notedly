import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import { HeaderBar, LogoText, UseState } from './styles';
import { ButtonAsLink } from '../ButtonAsLink';

import logo from '../../assets/images/logo.svg';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

export default function Header(props) {
  const { data, client } = useQuery(IS_LOGGED_IN);

  // function handleLogout() {
  //   localStorage.removeItem('token');
  //   client.resetStore();
  //   client.writeQuery({ data: { isLoggedIn: false } });
  //   props.history.push('/');
  // }

  const isLoggedIn = false;

  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
      <UseState>
        {isLoggedIn ? (
          <ButtonAsLink
            onClick={() => {}}
          >
            Logout
          </ButtonAsLink>
        ) : (
          <p>
            <Link to="/signin">Sign In</Link> or{' '}
            <Link to="/signup">Sign Up</Link>
          </p>
        )}
      </UseState>
    </HeaderBar>
  );
}
