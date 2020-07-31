import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      <li>
        <Link to='/gallery'>Gallery</Link>
        <ul>
          <li>
            <Link to='/gallery/watercolor'> - watercolor</Link>
          </li>
          <li>
            <Link to='/gallery/oil'> - oil (not found)</Link>
          </li>
          <li>
            <Link to='/gallery/watercolor/1'> - watercolor detail 1 (not found)</Link>
          </li>
          <li>
            <Link to='/gallery/watercolor/2'> - watercolor detail 2</Link>
          </li>
        </ul>
      </li>
    </ul>
  )
};

export default Nav;