import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h1>My Bookcase</h1>
            <Link to="/" className="Home">Home</Link>
            <Link to="/about" className="About">About</Link>
            <Link to="/bookcase" className="bookLink">Bookcase</Link>
        </>
    );
}

export default Header;