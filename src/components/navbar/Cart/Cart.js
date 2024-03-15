// Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ onClose }) => {
  return (
    <div className="cart-overlay">
      
      <div className="cart">
        <button className="close-cart" onClick={onClose}><i className="bx bx-x"></i></button>
        <h2>Your Cart is empty</h2>
      </div>
    </div>
  );
}

export default Cart;
