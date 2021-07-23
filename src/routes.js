import { Switch, Route, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Home from './pages/Home';
import MyNotes from './pages/MyNotes';
import Favorites from './pages/Favorites';
import NotePage from './pages/NotePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NewNote from './pages/NewNote';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const isLoggedIn = true;

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/mynotes" component={MyNotes} />
      <PrivateRoute path="/favorites" component={Favorites} />
      <PrivateRoute path="/new" component={NewNote} />
      <Route path="/note/:id" component={NotePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      ))}
    />
  );
}
