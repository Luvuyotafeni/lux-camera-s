// NavBar.js
import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from './assets/360_F_267864844_dvb1vERRCid4YFvUKrYDRrqeGB7yn8iG.jpg';
import LoginPopup from './LoginPopup';
import Cart from './Cart/Cart';
import Blog from '../Blog/Blog'; // Import Blog component

const NavBar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
        setCartItemCount(parsedCart.length);
      } catch (error) {
        console.error('Error parsing cart data from Local Storage:', error);
      }
    }
  }, []);

  // Function to update cart items and count
  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
    setCartItemCount(newCartItems.length);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
  };

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
      {showCart && <Cart onClose={handleToggleCart} updateCartCount={setCartItemCount} />}
      {showLoginPopup && <LoginPopup onClose={handleCloseLoginPopup} />}
      <Blog updateCartCount={setCartItemCount} />
    </div>
  );
};

export default NavBar;
