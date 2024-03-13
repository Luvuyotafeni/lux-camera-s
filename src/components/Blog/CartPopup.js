
import React from 'react';
import './CartPopip.css'; 

const CartPopup = ({ onClose }) => {
  return (
    <div className='cart-popup'>
      <div className='popup-content'>
        <h2>Shipping Information</h2>
        <form>
          <label>
            Name:
            <input type='text' name='name' />
          </label>
          <label>
            Surname:
            <input type='text' name='name' />
          </label>
          <label>
            Address:
            <input type='text' name='name' />
          </label>
          
          <button type='submit'>Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;
