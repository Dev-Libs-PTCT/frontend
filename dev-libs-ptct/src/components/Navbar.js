import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/register">Signup</Link>
        </li>
        <li>
        <Link to="/profile" ><i class="far fa-user-circle"></i></Link>
        </li>
      </ul>
      
      
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Dev-Libs',
  icon: 'fa fa-align-center'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;