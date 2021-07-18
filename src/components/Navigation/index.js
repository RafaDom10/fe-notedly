import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaBookmark } from 'react-icons/fa';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <FaHome />
          <Link to="/">Home</Link>
        </li>
        <li>
          <FaBook />
          <Link to="/mynotes">My notes</Link>
        </li>
        <li>
          <FaBookmark />
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
