// NavBar.js

import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from './assets/360_F_267864844_dvb1vERRCid4YFvUKrYDRrqeGB7yn8iG.jpg';
import LoginPopup from './LoginPopup'; // Import the LoginPopup component
import Cart from './Cart/Cart';

const NavBar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from Local Storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart)); // Parse JSON string to array
      } catch (error) {
        console.error('Error parsing cart data from Local Storage:', error);
        // Handle parsing errors (optional: clear cart or notify user)
      }
    }
  }, []); // Run only once on component mount

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const handleShowLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const cartItemCount = cartItems.length;

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
            <li>
              <a href='#cart' onClick={handleToggleCart} className='cart-link'>
                <i className='bx bxs-cart'></i>
                {cartItemCount > 0 && <sup className="cart-count">{cartItemCount}</sup>}
              </a>
            </li>
            <li><a href='#contact'>Enquire</a></li>
          </ul>
          <button className='login' onClick={handleShowLoginPopup}>Login</button>
        </div>
      </header>
      {showCart && <Cart onClose={handleToggleCart} setCartItems={setCartItems} />}
      
      {showLoginPopup && <LoginPopup onClose={handleCloseLoginPopup} />}
    </div>
  );
};

export default NavBar;
