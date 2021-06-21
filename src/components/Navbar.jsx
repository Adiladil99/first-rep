import React, { Component } from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>Apps</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;