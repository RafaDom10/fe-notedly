import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaBookmark } from 'react-icons/fa';

import { Nav, NavList } from './styles';

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <li>
          <FaHome />
          <div>
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <FaBook />
          <div>
            <Link to="/mynotes">My notes</Link>
          </div>
        </li>
        <li>
          <FaBookmark />
          <div>
            <Link to="/favorites">Favorites</Link>
          </div>
        </li>
      </NavList>
    </Nav>
  );
}
