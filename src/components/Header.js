import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="nav-items">
      <Link className="nav-linkh1" to="/">
        <h1>Bookstore CMS</h1>
      </Link>
      <Link className="nav-links" to="/">
        BOOKS
      </Link>
      <Link className="nav-links" to="/categories">
        CATEGORIES
      </Link>
    </div>
    <span>
      <CgProfile className="profile" />
    </span>
  </header>
);

export default Header;
