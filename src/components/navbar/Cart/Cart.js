// Cart.js

import React from 'react';
import './Cart.css';

const Cart = ({ onClose }) => {
  return (
    <div className="cart-overlay">
      <div className="cart">
        <button className="close-cart" onClick={onClose}><i className="bx bx-x"></i></button>
        <h2>Your Cart</h2>
        {/* Add your cart content here */}
      </div>
    </div>
  );
}

export default Cart;
