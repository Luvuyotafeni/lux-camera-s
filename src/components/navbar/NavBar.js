// NavBar.js

import React, { useState } from 'react';
import './NavBar.css';
import logo from './assets/360_F_267864844_dvb1vERRCid4YFvUKrYDRrqeGB7yn8iG.jpg';
import LoginPopup from './LoginPopup'; // Import the LoginPopup component
import Cart from './Cart/Cart';

const NavBar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const handleShowLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <div>
      <header>
        <div className='container d_flex'>
          <div>
            <img src={logo} className='logo' alt='Logo'></img>
          </div>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#products'>Products</a></li>
            <li><a href='#cart' onClick={handleToggleCart}><i className='bx bxs-cart'></i></a></li>
            <li><a href='#contact'>Enquire</a></li>
          </ul>
          <button className='login' onClick={handleShowLoginPopup}>Login</button>
        </div>
      </header>
      {showCart && <Cart onClose={handleToggleCart} />}
      
      {showLoginPopup && <LoginPopup onClose={handleCloseLoginPopup} />}
    </div>
  );
};

export default NavBar;
