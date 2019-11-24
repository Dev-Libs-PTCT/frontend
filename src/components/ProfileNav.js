import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout'

const ProfileNav = ({ icon, title }) => {
  return (
    <nav className='pronav'>
      <h1>
        YOUR PROFILE
      </h1>
      <ul>
        <li>
        <Link to='/form'>
        <button className='btn bg-primary'>
            Create more!
        </button>
        </Link>
        </li>
        <li>
        <Logout />
        </li>
    
      </ul>
      
      
    </nav>
  );
};

export default ProfileNav;