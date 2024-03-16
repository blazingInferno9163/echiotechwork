import React from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa'; 

const Header = () => {
  return (
    <div className='container'>
      <header>
        <div className='logo'>
          <img className='logo-1' src="/images/comp-logo.png" alt="Company Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Influencers</a></li>
            <li><a href="#">Agency</a></li>
            <li><a href="#">Service Provider</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <button id="login-btn"><span>Login Now</span></button>
          <div className='menu'>
          <i class="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
