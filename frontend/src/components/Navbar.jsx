import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/createoutfit">Create Outfit</a></li>
        <li className="nav-item"><a href="/uploaditem">Upload Item</a></li>
        <li className="nav-item"><a href="/favourites">Favourites</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
