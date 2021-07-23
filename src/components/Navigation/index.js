import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

import { Nav, NavList } from './styles';

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <li>
          <FaIcons.FaHome />
          <div>
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <FaIcons.FaBook />
          <div>
            <Link to="/mynotes">My notes</Link>
          </div>
        </li>
        <li>
          <FaIcons.FaBookmark />
          <div>
            <Link to="/favorites">Favorites</Link>
          </div>
        </li>
        <li>
          <FaIcons.FaPlusSquare />
          <div>
            <Link to="/new">New Note</Link>
          </div>
        </li>
      </NavList>
    </Nav>
  );
}
