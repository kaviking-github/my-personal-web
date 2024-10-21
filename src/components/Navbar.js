// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ['Home', 'Resume', 'Skills'];

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {item}
            </Link>
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default Navbar;
