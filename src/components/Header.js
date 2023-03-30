import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    <Header>
        <Link to="/"><h1>Bookstore CMS</h1></Link>
        <nav>
            <Link to="/">Books</Link>
            <Link to="/categories">Categories</Link>
        </nav>
    </Header>
};
 
export default Header;
