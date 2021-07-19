import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MyNotes from './pages/MyNotes';
import Favorites from './pages/Favorites';
import NotePage from './pages/NotePage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/mynotes" component={MyNotes} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/note/:id" component={NotePage} />
    </Switch>
  );
}
