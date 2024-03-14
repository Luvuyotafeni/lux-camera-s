import React from 'react';
import './CartPopip.css'; 

const CartPopup = ({ product, onClose }) => {
  return (
    <div className='info-popup'>
      <div className='info-popup-content'>
        <h2>{product.title}</h2>
        <p>Description: {product.desc}</p>
        <p>Price: R{product.price}</p>
        <p>Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default CartPopup;
